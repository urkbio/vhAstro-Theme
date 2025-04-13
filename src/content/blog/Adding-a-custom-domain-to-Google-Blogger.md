---
title: "Google Blogger 添加自定义域名"
categories: 折腾记录
tags:
  - "域名"
id: "Adding-a-custom-domain-to-Google-Blogger"
date: 2025-03-13 19:08:00
---

如果之前添加过，现在更换自定域名的话，不会显示对应的CNAME记录值，跳转到是`ghs.google.com`，另一个同于验证的比较长，每个人都不一样。但是不另外显示意味着没办法重新配置。

我在[Google Blogger 博客如何绑定自定义域名？](https://tigress.cc/2023/06/18/Google-Blogger/)看到：
	其实第二条记录完全不需要设置，只要已经在现有 Google Search Console 版本中完成了对域名的认证即可，而第一条 CNAME 记录对于所有人都是一样的，指向 ghs.google.com 即可。

我这么做确实可以。

还有在[Google Blogger 添加自定义域名避坑指南](https://www.idcbuy.net/it/2783.html)了解到可以将TTL设为1min来加快生效。并且在Blogger后台看HTTPS 状态变为可用之后，再启用Cloudflare的小黄云CDN。

如果你仅使用子域名，比如`blog.domain.com`，并且根域名有其他用途的话，保持Blogger设置中的**重定向**关闭。

----

添加Monetag广告是要在主题设置中编辑HTML，将站点验证代码和广告脚本代码贴到`<head>`部分。
![插入代码.avif](https://b2.235421.xyz/pic/2025/03/3b276c9e846905becdc5ceefcf9607c3.avif)
