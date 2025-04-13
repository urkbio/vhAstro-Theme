---
title: "Linux代理终端"
categories: 折腾记录
tags:
  - "Linux"
id: "linux-add-proxy-in-terminal"
date: 2024-11-14
---

```
# 查看终端ip
curl ipinfo.io
curl cip.cc #国内地址？
curl ip.gs
```

方法一仅在当前终端有效
export http_proxy=http://proxyAddress:port
如：export http_proxy=http://127.0.0.1:7890
和：export https_proxy=http://127.0.0.1:7890
或：export http_proxy=http://192.168.167.204:3067
和：export https_proxy=http://192.168.167.204:3067


方法二，永久保存把代理服务器地址写入shell配置文件.bashrc或者.zshrc
如：
export http_proxy="http://localhost:port" export https_proxy="http://localhost:port"export http_proxy="socks5://127.0.0.1:1080" export https_proxy="socks5://127.0.0.1:1080"
或者干脆直接设置ALL_PROXY
export ALL_PROXY=socks5://127.0.0.1:1080
最后 source ~/.bashrc