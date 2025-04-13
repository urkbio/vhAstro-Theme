---
title: "本地IPFS访问"
categories: 折腾记录
tags:
  - "IPFS"
id: "access-local-ipfs"
date: 2025-01-23
---

安装IPFS Desktop客户端，本地IPFS Gateway在8080端口上。

可以使用以下方法来访问

```
# IPFS

http://{CID}.ipfs.localhost:8080

# IPNS

http://{IPNS Key}.ipns.localhost:8080
```

或者

```
# IPFS

http://127.0.0.1:8080/ipfs/{CID}

# IPNS

http://127.0.0.1:8080/ipns/{IPNS Key}
```