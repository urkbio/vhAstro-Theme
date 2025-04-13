---
title: "DNS服务更新记录"
categories: 折腾记录
tags: ["DNS"]
id: "dns-server-update-log"
date: 2022-06-09
recommend: true
---

之前都是使用AdGuard Home的分流配置文件来进行国内外域名分开查询，但是海外的DNS上游许多连不上，比如Google的DoH就完全无法连接，只有Yandex和Cloudflare的部分DoH可以使用，而且耗时几千毫秒，即使开了缓存和乐观缓存，平均处理时间也几百毫秒，一点也不优雅。 我在想一种既快又可以分流的方法，在Github上找到了两个项目，分别是[ClearDNS](https://github.com/dnomd343/ClearDNS)和[PaoPaoDNS](https://github.com/kkkgo/PaoPaoDNS)。 由于ClearDNS依然需要上游的加密DNS以实现分流，但这样太慢，一点也不优雅。而且它是把AdGuard Home作为项目的一部分耦合在一起的，不太方便配置。于是我选择了后者。 PaoPaoDNS有以下优点：

> 泡泡DNS是一个能一键部署递归DNS的docker镜像，它使用了unbound作为递归服务器程序，使用Redis作为底层缓存，此外针对China大陆，还有智能根据CN分流加密查询的功能，也可以自定义分流列表，可以自动更新IP库，分流使用了mosdns程序，加密查询使用dnscrypt程序，针对IPv4/IPv6双栈用户也有优化处理。--来自PaoPaoDNS-README

实现了分流，而且unbound是从根DNS递归查询的（尽管有时候会由于网络质量较差而退回到转发查询），也就不用在纠结使用哪个上游了。 使用默认的参数可以跑起来，但是我修改了几个环境变量，开启了ipv6和USE_MARK_DATA，更多详情参见GitHub页面的README。 USE_MARK_DATA的优点是可以优化DNS泄漏问题、提供更快速精准高效的分流。我不确定使用unbound会不会被污染，我目前测试下来，国外域名解析分布在好几个国家，但没有中国，而且使用此DNS可以访问一个已知被污染的站点，那就暂时这么用着吧，即使部分域名解析出现问题还可以通过AdGuard Home指定上游，无伤大雅。 我的启动参数：
```
docker run -d \
--name paopaodns \
-v /home/mydata:/data \
-e CNAUTO=yes \
-e UPDATE=weekly \
-e IPV6=yes \
-e USE_MARK_DATA=yes \
--restart always \
-p 53:53/tcp -p 53:53/udp \
sliamb/paopaodns
```

然后再开一个[AdGuard Home](https://github.com/AdguardTeam/AdGuardHome)，将上游设置为127.0.0.1:53即可。 注意在AdGuard Home的配置页面需要将53端口换成其他的，因为53已经被PaoPaoDNS占用了，随便什么都可以，反正我是用加密DNS的，53端口的明文DNS也用不上。

我之前是使用[冷莫大佬](https://hosts.trli.cloudns.biz/)的过滤规则的，但是服务器负载太大了，于是我在GitHub搜集到几个其他的过滤规则，其中zyg这个白名单是我自己抓的，只有几十条。

```
#黑
#关圣
https://mirror.ghproxy.com/https://raw.githubusercontent.com/guandasheng/adguardhome/main/rule/all.txt

#Hyper
https://mirror.ghproxy.com/raw.githubusercontent.com/Lynricsy/HyperADRules/master/dns.txt
#Adblockfilter 
https://mirror.ghproxy.com/https://raw.githubusercontent.com/217heidai/adblockfilters/main/rules/adblockdns.txt


#白
#zyg

#Hyper 
https://ghproxy.net/raw.githubusercontent.com/Lynricsy/HyperADRules/master/allow.txt
```

来源： 关圣Hyperzyg 注意：关圣的README里写的规则列表地址无法访问，估计是他的项目名字改了这里没改，我放的地址是可以访问的。而且我放的地址都是用https://ghproxy.net加速过的，国内使用更方便。 

2024.5.7更新 自己搞了个GitHub仓库，合并了一些我知道的规则库。有79万条，不算多。希望有更精准的开源规则库可以告诉我加上。仓库地址 顺便也把gitee上的白名单同步到了GitHub，之后自己抓的就放这了。

白名单 2024.6.9更新 采用easymosdns快速搭建的mosdns v4 支持ECS，分流 对easymosdns的默认配置稍微修改： 非国内先访问Google DNS等海外支持ECS的上游，超时再请求easymosdns项目的doh上游 接入Redis持久化缓存 目前请求量每日100万次，我打开了ADGH的限制每秒20次请求的开关，实测没什么影响，毕竟服务器只有3M带宽。 另外，尽量使用DoQ和DoH，因为大部分都是DoT的请求。 

2024.6.21更新 上游用Technitium DNS Server，详见这篇。这是另一个可以自建DNS服务的程序，它本身也支持加密DNS，但我觉得adgh比较方便，所以最外面套adgh，这个只作为上游来查询。这个程序支持ECS很棒，是递归DNS，它也支持转发给其他上游，不过我不知道怎么弄。唯一缺点是无法查询被污染的域名，于是我又用了一个gfwlist，暂时感觉还可以。用添加自定zones可以做到将被污染的域名指定上游，但只能一个一个添加。