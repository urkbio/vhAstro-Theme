---
title: "折腾共享代理"
categories: 折腾记录
tags:
  - 科学上网
id: "play-with-sharing-proxy"
date: 2024-02-01
---

用一部闲置的Android手机来充当软路由，还是透明代理，不知道怎么个叫法。

1. 在已root手机上刷入box5magisk模块(原模块是box4magisk,这个是不良林大佬改良的，可以使用app模式)，重启

2. 用MT管理器的模拟终端，输入命令ip a,查看本机的ip地址

3. 在需要共享代理的另外的设备上，将ipv4地址设为手动设定，默认网关填Android手机的ip

4. 在Android上随便开一个代理软件或VPN,另一设备应该就走的代理后的ip了

缺点是如要切换节点就得在手机上操作，不过他还有内核模式，也就是原box4magisk的功能，内核模式可以使用web面板来管理和切换节点

1. 在magisk关闭模块，用MT管理器打开/data/adb/box_bll/scripts/目录，编辑box.config,将proxy_method从APP改成TPROXY

2. 在subscribe添加自己的订阅链接

3. 开启模块，此时在已配置网关的设备就可以使用。

4. web面板在Android设备地址的9090端口，例如192.168.0.102:9090/ui

还有一种简单的共享方法，许多代理软件都支持。比如我用nekobox,设置中打开允许来自局域网的链接，在同一局域网的其他设备上，为这个wifi开启代理，代理地址是手机的ip地址，端口就是代理工具中的端口，nekobox是默认2080,clash就是7890

现在我在家用的是第一个方案，外出开热点就用的局域网共享。