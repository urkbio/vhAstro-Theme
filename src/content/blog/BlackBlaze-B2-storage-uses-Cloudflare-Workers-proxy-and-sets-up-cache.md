---
title: "BlackBlaze B2存储使用Cloudflare Workers代理并设定缓存"
categories: 备份转载
tags:
  - "BlackBlaze"
  - "Cloudflare Workers"
id: "BlackBlaze-B2-storage-uses-Cloudflare-Workers-proxy-and-sets-up-cache"
date: 2025-03-01
---

创建一个Cloudflare Worker，代码如下：

```
addEventListener("fetch", event => {
    event.respondWith(handleRequest(event.request))
  })
  
  async function handleRequest(request) {
    let url = new URL(request.url)
    let bucketName = "你的桶名"
    // 友好URl的域名
    let b2BaseUrl = `https://fxxx.backblazeb2.com/file/${bucketName}`
  
    // 拼接 B2 URL
    let newUrl = b2BaseUrl + url.pathname
  
    // 通过 fetch 代理请求到 B2
    let response = await fetch(newUrl, {
        headers: {
            "Origin": null
        }
    })
  
    // 复制原始响应的头信息
    let newHeaders = new Headers(response.headers)
  
    // 设置强制缓存
    newHeaders.set("Cache-Control", "public, max-age=31536000, immutable")
    newHeaders.set("Access-Control-Allow-Origin", "*")
  
    return new Response(response.body, {
        status: response.status,
        headers: newHeaders
    })
  }
  
```

#### 为这个Worker绑定自定义域名

#### 设置缓存

![图片](https://b2.235421.xyz/pic/2025/03/c9360b4497fb667d83510e5dc3079076.jpeg)

图片来自[Loudomian][1]，使用我自己图床




  [1]: https://ldo.one/post/backblaze-yes/