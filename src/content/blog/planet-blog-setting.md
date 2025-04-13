---
title: "Planet博客设置"
categories: 折腾记录
tags:
  - "博客"
  - "IPFS"
  - "Planet"
id: "planet-blog-setting"
date: 2025-01-28
---

### 添加评论功能

使用 [Giscus](https://giscus.app/) 为Planet添加评论功能。

按要求建立公开仓库，安装 Giscus App，将仓库名 填入，之后会生成一个下面这种代码，将它添加到文章末尾即可，Planet 可以自动渲染出来。

```
# 不要复制我的，仅作参考，Giscus网页会生成自己的
<script src="https://giscus.app/client.js"
        data-repo="用户名/仓库名"
        data-repo-id="R_kgDONv0EQg"
        data-category="Announcements"
        data-category-id="DIC_kwDONv0EQs4CmW3b"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="bottom"
        data-theme="preferred_color_scheme"
        data-lang="zh-CN"
        crossorigin="anonymous"
        async>
</script>
```

----

### 修改模板代码添加Google Analytics分析

[Google Analytics](https://analytics.google.com/) 用 Google 账号登录建立账户，再建立一个资源，获取 Google Analytics 统计代码，他会提供一串代码。类似这样：

```
# 参考
<!-- Google tag (gtag.js) --> 
<script async src="https://www.googletagmanager.com/gtag/js?id=G-代码"></script> 
<script> 
  window.dataLayer = window.dataLayer || []; 
  function gtag(){dataLayer.push(arguments);} 
  gtag('js', new Date()); 

  gtag('config', 'G-代码'); 
</script>
```

在 Planet 中打开左上菜单中的 工具-模板浏览器，选择你正在使用的模板，在文件夹中打开即可查看HTML模板文件。编辑模板文件中的 `templates/base.html`，用 VScode 或其他工具，将获取到的统计代码插入到`<head>`下方，点击 工具-重新载入网站，重新生成静态页面即可。

在配置Google Analytics时需要有对应域名，所以使用公共网关或者本地IPFS节点访问的话似乎无法被GA追踪到。我的 [Privacy](https://joomaen.sol.build/privacy/) 页面也有介绍。

----

### 域名

注册一个区块链域名，`.eth` `.bit` `.sol` 都可以绑定IPNS，然后通过相应的公网访问。

我目前有一个 `.bit` 域名，在后台绑定IPNS后，可以通过 `.bit.site` 这个公共节点访问，它为 `.bit` 域名提供免费的IPFS PIN服务，绑定后它会存储Planet中的静态内容，这样也就不怕电脑关闭就无法访问了。

目前比较推荐 `.sol` 域名，`.eth` 太贵了，`.bit` 不太贵，不过需要按年付费，而 `.sol` 是永久的，一次付费即可，基于Solana链，我正准备搞一个。

----

### IPFS托管

我还使用 [4EVERLAND](https://dashboard.4everland.org/) 来对IPFS文件进行托管，进入官网连接加密钱包，之后需存入1美元等值的对应加密货币，就可以使用它提供的服务。可以托管IPNS、IPFS、连接GitHub仓库等等。还提供S3对象存储。当然我只使用了IPNS托管。从Planet中复制出IPNS，在4EVERLAND中新建Hosting项目，选择IPNS并填入。它给提供2个子域名来访问，你也可以绑定自己域名。记得在设定中开启自动重新部署IPNS，这样它每天18:00会自动进行同步，如果需要即时同步可以手动操作。我只是把它作为一个PIN服务和作为备份，所以就让它自动同步好了。

----

### 小结

这一番操作下来，使得Planet这个静态IPFS博客更加可靠和方便访问，也有了评论支持。当然RSS也是支持的，任意一个网关或域名访问 `/rss.xml` 即可订阅。

这样看来，似乎WordPress也不是很必要了。