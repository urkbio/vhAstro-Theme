---
title: "DNS服务器优化"
categories: 折腾记录
tags: ["DNS"]
id: "optimization-dns-server"
date: 2022-06-09
recommend: true
---

之前尝试的paopaoDNS和clearDNS都很方便和优秀，我这样的小白都能快速搭建起来。可是我还是遇到了一些问题，用paopaoDNS有时候查询不到部分域名；而用clearDNS，配置了Google和Yandex的上游DoH，还是会经常返回SERVFAIL。不知道是哪里没配置好。

现在我使用的是paopaoDNS+smartDNS，前者用来查国内域名，后者查国外。使用AdGuard Home分流规则。这样就避免了用paopaoDNS查不出冷门域名的问题，而且海外上游直接在smartDNS的配置里修改，不用频繁重启AdGuard Home了，使用体验会更好。

2024-05-18更新：
收到冷莫大佬的建议，切换为chinadns-ng上游，给gfwlist的被污染域名走Google、Cloudflare的DNS over TLS，其余走AliDNS和DNSPod。实际体验更快。

chinadns-ng配置

```
# 监听地址和端口
bind-addr 127.0.0.1
bind-port 58

# 国内上游、可信上游
china-dns tls://223.6.6.6,tls://223.5.5.5,tls://1.12.12.12,tls://120.53.53.53
trust-dns tls://77.88.8.8,tls://1.1.1.1,tls://1.0.0.1,tls://94.140.14.14,tls://9.9.9.11

# 域名列表，用于分流
chnlist-file /etc/chinadns/chnlist.txt
gfwlist-file /etc/chinadns/gfwlist.txt
chnlist-first

# 收集 tag:chn、tag:gfw 域名的 IP
add-tagchn-ip chnip,chnip6
add-taggfw-ip gfwip,gfwip6

# 用于测试 tag:none 域名的 IP (国内上游)
ipset-name4 chnroute
ipset-name6 chnroute6

# dns 缓存
# 我在AdGuard Home中设置缓存，这里就不重复了
cache 0
cache-stale 0
cache-refresh 0

# verdict 缓存 (用于 tag:none 域名)
verdict-cache 0

# 详细日志
# verbose
```

我的拦截规则为自己合并的，拦截率50%左右，实测仍有许多不能拦截，不过酷安没广告了，部分app没开屏广告了。但是知乎等app仍有开屏广告，推荐搭配[GKD](https://github.com/gkd-kit/gkd)来自动跳过。

由于GKD默认规则不再更新，推荐这个第三方GKD规则。[GKD_subscription](https://github.com/AIsouler/GKD_subscription)