---
title: "搭建Adguard Home"
categories: 折腾记录
tags:
  - "DNS"
id: "install-adguard-home-server"
date: 2024-02-01
---

#### 搭建Adguard Home

一键安装命令

```
curl -sSL https://raw.githubusercontent.com/AdguardTeam/AdGuardHome/master/scripts/install.sh | sh
```

参见AdGuardHome 安装及部署教程


安装好后进入ip://3000 网页配置，DNS over tls最好不要换，就用853端口，因为Android的私人DNS只能填域名，默认853端口。当然这个端口很容易被封，所以能用就用，不能用就用DoH或DoQ；由于DoH使用HTTPS连接的443端口，基本不会被封，所以DoH也别改，就用默认的443；至于DoQ，这个是可以改的，因为它默认和DoT一样是853，但是853容易被封，所以建议改成其他的。按理说DoQ更先进，效率更高，可惜普及程度不够高，大多数情况下还是DoH最实用，如果要用DoQ，在Android上只有adguard软件支持DoQ，不过这软件要钱，破解版的很卡，又耗电，基本不用。

进入主界面之后可以在“过滤器”选项添加黑白名单，网上有很多，酌情添加。我就是开始加了太多，广告没有完全去掉，但是误杀了许多正常页面。 在设置-加密中可以绑定域名，这需要一个域名，并解析到服务器的公网ip上，最好是有ipv4地址的，v6的也可以，不过好像如果本地网络只有v4的话就连不上纯v6的DoH。还需要申请ssl证书。

到这就差不多可以用了，可以在设置-DNS设置里按需填写需要的上游DNS，支持传统DNS、tls、DoH、DoT、DoQ、DoH3等等。

```
#https://dns10.quad9.net/dns-query
#https://doh.sb/dns-query
h3://basic.rethinkdns.com/
h3://dns.nextdns.io
#h3://dns.adguard-dns.com/dns-query
#号表示注释
```

我填的是自定义的Adguard DNS和NextDNS，这等会细说。

#### 配置Adguard DNS和Next DNS

这很简单，是由公司提供的私人使用的加密DNS服务，这俩默认免费都是每月30万次查询，加起来60万，一个人使用是够的，不够的话多注册几个账号，反正是要填写在Adguard Home的上游DNS中的。

[Next DNS](https://my.nextdns.io/)
[AdGuard DNS](https://adguard-dns.io/)

在⬆️网页中注册，并配置好过滤器，即可实现Adguard Home和上游DNS的双重过滤，虽然显得多此一举。

将配置好的Adguard DNS和Next DNS的DoH，或DoT、DoQ都行（推荐DoQ不过只有Adguard DNS支持）填入Adguard Home的上游DNS中，使用负载均衡选项。

#### 使用

在Android上DoT的话就直接在设置里的私人DNS填域名就行；DoH可以用intra 或 rethink DNS的Android客户端来实现，在软件中自订一个DoH填入自己的就行；至于DoQ的话只有Adguard软件支持。 iOS的话可以在Adguard Home的设置指导页面获取配置文件进行导入。 桌面浏览器基于chromium 还是Firefox都支持DoH，在安全设置里自定义就行。

#### 同代理软件一起使用

最推荐使用软路由或旁路由，这样就不存在这个问题了。
如果有闲置手机或长时间开机的电脑也可以配置成旁路网关，实现网关共享代理，参见YouTube频道不良林的视频关于网关共享代理那几期视频。
如果有闲置手机或长时间开机的电脑但懒得折腾，使用代理软件的局域网共享功能进行代理共享，这个配置简单，只要在连接的Wi-Fi设置下挂了代理的设备的局域网ip（类似192.168.x.x）加上代理软件默认的端口（clash系一般是7890，neko系是2080）。这种方法配置简单灵活，不过不能保证所有软件都走系统代理（比如Telegram都要自己设定代理）。
一个Android设备情况下，使用nekonox for Android或hiddify next，将远端DNS换成自己的DoH，关掉DNS路由，保证所以流量的DNS都走自己VPS。
Windows的话就在浏览器上用用算了，虽然Windows11支持系统级的DoH,不过我试过后发现命令行使用scoop连接不上，于是放弃了，可能是我使用方法不对。
其他设备我不知道，没用过，自行查找。