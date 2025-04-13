---
title: "编译安装unbound，支持ipv6、ECS"
categories: 折腾记录
tags:
  - DNS
id: "build-install-unbound"
date: 2024-10-13
---

安装依赖：

```
apt update
apt install build-essential libssl-dev libexpat1-dev bison flex libevent-dev
```

下载unbound源码

```
wget <https://nlnetlabs.nl/downloads/unbound/unbound-latest.tar.gz>
tar -xzvf unbound-latest.tar.gz
cd unbound-<version>/
```

配置编译选项

```
./configure --prefix=/usr/local/unbound --enable-subnet --with-libevent
```

编译和安装

```
make
make install
```

安装好之后在 `/usr/local/sbin/unbound`

会自动创建一个systemd service，如果没有就手动创建 `/etc/systemd/system/unbound.service`

内容是这个：

```
[Unit]
Description=Unbound recursive Domain Name Server
After=syslog.target network.target
Before=nss-lookup.target
Wants=nss-lookup.target
[Service]
Type=simple
ExecStart=/usr/local/unbound/sbin/unbound -d -c /etc/unbound/unbound.conf
Restart=always
LimitNOFILE=65536
[Install]
WantedBy=multi-user.target
```

配置文件在 `/etc/unbound/unbound.conf` ，我开启了ECS和ipv6支持

```
# The server clause sets the main parameters.
server:
  username: "unbound"
  chroot: ""
  logfile: "/data/dnslogs/unbound.log"
  log-queries: no
  log-servfail: yes
  log-time-ascii: yes
  use-syslog: no
  verbosity: 1
  interface: 0.0.0.0@53
  interface: ::0@53
  access-control: 0.0.0.0/0 allow
  access-control: ::/0 allow
  do-not-query-localhost: no
  do-ip4: yes
  do-ip6: yes
  do-udp: yes
  do-tcp: yes
  do-daemonize: no
  num-threads: 4
  msg-cache-slabs: 4
  rrset-cache-slabs: 4
  key-cache-slabs: 4
  infra-cache-slabs: 4
  
  #设置 DNSSEC 的信任锚
  auto-trust-anchor-file: "/var/lib/unbound/root.key"

  aggressive-nsec: yes
  hide-trustanchor: yes
  hide-version: yes
  hide-identity: yes
  qname-minimisation: yes
  qname-minimisation-strict: no
  minimal-responses: yes
  rrset-roundrobin: yes
  so-reuseport: yes
  infra-cache-numhosts: 10000
  unwanted-reply-threshold: 10000000
  so-rcvbuf: 4m
  so-sndbuf: 4m
  msg-cache-size: 64m
  key-cache-size: 64m
  neg-cache-size: 64m
  rrset-cache-size: 128m
  outgoing-range: 8192
  num-queries-per-thread: 4096
  outgoing-num-tcp: 1024
  incoming-num-tcp: 2048
  jostle-timeout: 300
  cache-min-ttl: 60
  cache-max-ttl: 3600
  cache-max-negative-ttl: 300
  infra-host-ttl: 3600
  serve-expired-ttl: 86400
  serve-expired-reply-ttl: 5
  serve-expired-client-timeout: 1800
  serve-expired: yes
  prefetch: yes
  prefetch-key: yes
  max-udp-size: 4096
  edns-buffer-size: 4096
  send-client-subnet: 0.0.0.0/0
  send-client-subnet: ::0/0
  max-client-subnet-ipv4: 24
  max-client-subnet-ipv6: 56
  client-subnet-always-forward: yes
  module-config: "subnetcache iterator"
# forward-zone:
#   name: "."
#   forward-addr: 127.0.0.1@8053
#cachedb:
  #backend: "redis"
  #redis-server-path: /dev/shm/redis.sock
  #redis-server-host: 127.0.0.1
  #redis-server-port: 6379
  #redis-timeout: 100
```

如果设置了设置 DNSSEC 的信任锚，可以用以下代码更新文件。不过我不管设置与否，都不能完全支持DNSSEC，不过这个不是很在意，没多少网站支持。

```
mkdir /var/lib/unbound/
unbound-anchor -a /var/lib/unbound/root.key
```

自带的配置文件测试工具，没有报错就重启

```
unbound-checkconf /etc/unbound/unbound.conf
systemctl restart unbound.service
```

----

注意：该程序占用53端口，如果冲突请自行修改。