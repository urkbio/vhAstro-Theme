---
title: "简单搭建Snell服务"
categories: 转载备份
tags:
  - "科学上网"
id: "host-a-simple-snell-server"
date: 2024-01-21
---

#### 以linux-amd64为例,下载 Snell Server

```
wget https://dl.nssurge.com/snell/snell-server-v4.0.1-linux-amd64.zip
```

#### 解压 Snell Server 到指定目录

```
unzip snell-server-v4.0.1-linux-amd64.zip -d /usr/local/bin
```

#### 赋予服务器权限

```
chmod +x /usr/local/bin/snell-server
```

#### 使用 Snell 的 wizard 生成一个配置文件

```
snell-server --wizard -c /etc/snell/snell-server.conf
```

#### 配置 Systemd 服务文件

```
vim /lib/systemd/system/snell.service
```

将下面的复制粘贴进去，按esc 后输入“：wq”保存退出

```
[Unit]
Description=Snell Proxy Service
After=network.target

[Service]
Type=simple
User=nobody
Group=nogroup
LimitNOFILE=32768
ExecStart=/usr/local/bin/snell-server -c /etc/snell/snell-server.conf
AmbientCapabilities=CAP_NET_BIND_SERVICE
StandardOutput=syslog
StandardError=syslog
SyslogIdentifier=snell-server

[Install]
WantedBy=multi-user.target
```

重载服务 `systemctl daemon-reload`

设置开机自启动 `systemctl enable snell`

#### 查看自己Snell配置

```
cat /etc/snell/snell-server.conf
```

#### 客户端配置

```
# 换成自己的 IP、端口、psk

SNELL = snell, 142.16.112.240, 14028, psk=9QhzTD7l6S2iwmk4l8vKKedxWrfRZLr, version=4, tfo=true
```