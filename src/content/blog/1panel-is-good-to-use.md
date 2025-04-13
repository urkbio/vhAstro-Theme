---
title: "1panel是真好用"
categories: 折腾记录
tags:
  - Linux
  - 1Panel
id: "1panel-is-good-to-use"
date: 2024-02-01
---

我始终搞不明白nginx和caddy。之前用别人的模板还可以跑起来nginx，现在需要改动，自己改就不行了。网上教程看见caddy的配置很简洁，结果还是不知道什么问题就是无法运行。但是在1panel，点几下就可以搞定反代。还可以申请ssl证书并自动续签。总之很不错。

目前搭建了这几个

1. 用frp代替nps作为内网穿透工具，暂时用处不多，但用上时候就很方便。

2. 再搭建一个memos，类似flomo。

3. freshRSS，自托管的RSS订阅管理服务，也支持手机客户端。

4. 当然还有AdGuard Home和mosdns服务。

国内机器无法用cloudflare的token申请证书，我还不得不手动搬过来。

我搭建了一个cloudreve作为webdav，然后把我博客的数据库和文件夹备份到这。然后再把一整个cloudreve的的文件夹备份到onedrive，开个自动任务，也还算方便。