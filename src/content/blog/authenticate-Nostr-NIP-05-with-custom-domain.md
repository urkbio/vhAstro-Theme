---
title: "用自己域名认证 Nostr 的 NIP-05"
categories: 折腾记录
tags:
  - "Nostr"
id: "authenticate-Nostr-NIP-05-with-custom-domain"
date: 2025-04-02
---

在你的网站的 `./well-known/`目录下创建`/.well-known/nostr.json`文件，内容应该像这样
```json
{
  "names": {
    "joomaen": "77c2969ea4db4ca1859305d7ebabf6053fd132ddcc88e1b178bfd938a33cfa50"
  },
  "relays": {
    "77c2969ea4db4ca1859305d7ebabf6053fd132ddcc88e1b178bfd938a33cfa50": [ "wss://nostr.235421.xyz" ]
  }
}
```

将 `joomaen` 换为你想要的名字，这将会显示在 @ 前面，像这样 `joomaen@joomaen.com` ；`joomaen` 后面是公钥的十六进制格式，不是`npubxxx`这样的公钥，你可以在[Damus 的工具](http://damus.io/key)进行转换。

如果你想只显示域名部分，比如`@joomaen.com`，那可以将前面的名称设定为`_`。像这样：
```json
{
  "names": {
    "_": "77c2969ea4db4ca1859305d7ebabf6053fd132ddcc88e1b178bfd938a33cfa50"
  },
  "relays": {
    "77c2969ea4db4ca1859305d7ebabf6053fd132ddcc88e1b178bfd938a33cfa50": [ "wss://nostr.235421.xyz" ]
  }
}
```

下面的 `relays` 部分**不是必须的**，这是一个带有十六进制公钥的对象，用来告诉用户可以在哪些中继上找到你。

你可以使用静态站点部署，只需满足 `/.well-known/nostr.json` 目录结构即可，可以从浏览器访问这个链接并得到结果就行。 `https://joomaen.com/.well-known/nostr.json` (当然，要换成你自己的域名)

如果没有服务器的话也可以用GitHub Pages来部署，fork 这个仓库 **[NIP-05-Verification](https://github.com/gejiliang/NIP-05-Verification)**，并按照 README.md 中的方法操作，就像用GitHub Pages部署一个静态博客一样。

部署成功之后在Nostr客户端处修改`Nostr 地址`，也可能叫`用户名`、`NIP-05`。如果是`_`开头，也必须填写，例如填上 `_@joomaen.com` 显示时候就只有域名部分了。修改后不一定马上生效，稍等就好。