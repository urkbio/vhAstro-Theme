---
title: 搭建 Technitium DNS Server 并用 acme.sh 申请证书
categories: 折腾记录
tags:
  - DNS
id: deploy-technitium-dns-with-acme
date: 2025-04-10 12:00:27
updated: 2025-04-10
recommend: true
---

最近又开始折腾 Technitium DNS Server，发现[之前记录的过程](https://wp.235421.xyz/2024/10/03/use-technitium-and-set-ipv6-dns/)不太完善，于是更新一下。

#### 安装acme.sh

```
curl https://get.acme.sh | sh -s email=youreMailAddress
```

#### 导入环境变量

```
export CF_Token="填API token"  
export CF_Zone_ID="填区域ID"  
export CF_Account_ID="填账户ID"
```

- Cloudflare 的 API Token 是在 Cloudflare 网页右上角的👤头像--配置文件--API 令牌处创建
- 在 Cloudflare 主页点击你需要使用的域名，下滑到右下角可以看到区域 ID 和账户 ID

### 申请证书

```
acme.sh --issue --dns dns_cf -d dns.235421.xyz
```

- `-d` 后面是你想使用的域名

#### 安装证书

```
acme.sh --install-cert -d dns.235421.xyz \
--key-file /root/certs/key.pem \
--fullchain-file /root/certs/cert.pem \
--reloadcmd "cd /root/certs && openssl pkcs12 -export -out 'dns.pfx' -inkey 'key.pem' -in 'cert.pem' -password pass:1021"

```

- `reloadcmd`是在申请证书之后执行的代码，以后自动更新时也会自动执行这个代码，所以第一次配置好就基本上不用管了。
- `reloadcmd` 中的代码是将 `pem` 格式的证书和密钥转换成一个 `pfx` 格式的证书文件，`-out` 后面是输出的 `pfx` 证书文件名， `-inkey` 和 `-in` 分别是前一步 `acme.sh` 申请的密钥和证书文件。这里必须添加密码，也就是 `1021` 这个，如果不设密码执行命令的话，它会让你交互式输入，但是在自动脚本中就不行。我在前面加了先 `cd` 到证书目录，避免出现问题。

#### 安装 Technitium DNS Server

1. 在[Technitium DNS Server 官网](https://technitium.com/dns/) 获取安装脚本，也有提供 Docker 镜像以及 Windows 版本。
![截屏2025-04-03 14.59.52.avif](https://b2.235421.xyz/pic/2025/04/b9818de6b84470688f062985b827b95b.avif)

2. 安装后在 `公网IP:5380` 进入管理界面，首次进入需设置管理员密码，管理员账户默认是 `admin`。
3. 在 `Settings` – `optional protocols` 处开启 DNS over HTTPS ，`TLS Certificate File Path` 处填入转换好的 `pfx` 证书路径，`TLS Certificate Password` 处填你设定的密码，就是我的 `1021` 。
![截屏2025-04-03 15.29.24.avif](https://b2.235421.xyz/pic/2025/04/6f1ae60bbd0ee48b0a41291ba6895990.avif)
![截屏2025-04-03 15.03.15.avif](https://b2.235421.xyz/pic/2025/04/293b3c3fce19e8f8957f8ce247a573a2.avif)

4. 现在打开你的域名，看到如图这样就说明设定成功了，然后在需要设置 DoH 的地方填入 `https://yourdomain.com/dns-query`即可。
![截屏2025-04-03 15_mosaic.avif](https://b2.235421.xyz/pic/2025/04/affb48aded3377b6b182e9da2b1b3a27.avif)


----

我在[之前的文章](https://wp.235421.xyz/2024/10/03/use-technitium-and-set-ipv6-dns/)中使用的是 `DNS over HTTP` 并用 Nginx 反代来实现 `DNS over HTTPS` 的，现在直接用 DoH ，省去了配置 Nginx 的部分，只是多了一步证书格式转换，总体上更简单了。

----

#### 我的设置

- 在`Settings` – `Recursion` 处打开 `Allow Recursion` 以允许递归解析。
- 在`Settings` – `Cache` 处将 `Cache Maximum Entries` 调大些，默认 10000 有点少了。
- 在`Settings` – `General` 处开启 `EDNS Client Subnet (ECS)` 。
- 在`Settings` – `Logging` 处开启 `Use Local Time`。
- 在`Apps` – `App Store` 中安装 `Query Logs (Sqlite)` 以便在 `Logs` – `Query Logs` 处查看 DNS 查询日志。

##### 以下设置可选

- 在`Settings` – `General` 处开启 `Prefer IPv6`
- 在`Settings` – `Web Service` 处为后台管理页面开启 HTTPS，可使用与 DoH 相同的域名和证书，仅端口不同，这个默认 HTTPS 端口是 `53443`。
- 在`Settings` – `Blocking` 处开启拦截功能（默认开启），下面 `Allow / Block List URLs` 可以配置规则，与 AdGuard Home 规则通用，白名单规则须在链接前加上英文叹号 `!`。也可以是本地规则，填路径即可。
- 在`Settings` –  `Proxy & Forwarders` 处可以设置上游DNS `Forwarders` 。
- 在右上角 `Administrator` – `My Profile` 处的 `Session Timeout` 改为 `86400` 秒，即一天时间。这样管理网页不会那么快就自动退出登录了。