---
title: "记录一次Linux系统恢复"
categories: 折腾记录
tags:
  - "Linux"
id: "record-of-linux-recovery"
date: 2024-02-01
---

早就知道Linux Mint有Timeshift快照功能，一直也没用过。

刚才在使用AppImage版follow软件时，发现跳转到浏览器登录之后无法跳回去。后来想起来AppImage launcher这个工具，于是安装了这个。之后真的可以跳转了，我以为万事大吉，可是发现跳转的浏览器成了Firefox而非我设定的默认浏览器edge，这就有点奇怪了，我又发现桌面的设置无法点进去，于是重启，结果只能进锁屏，进不了桌面，提示什么组件找不到？

于是我查询Timeshift的命令进行恢复，还好它上一次自动快照就是在半小时前，也就是说恢复好的话差别不会太大。输一行命令，按y回车，自动重启就好了，真的很方便！！

我赶紧就把每周一次的创建快照频率改成了每天一次。

----

1. 使用命令，ctrl+alt+f1进入虚拟终端
2. 执行命令 sudo timeshift —list，找到相应的快照snapshots
3. 选择一个快照还原：sudo timeshift —restore —snapshot ‘日期’ —skip-grub (一般来说，启动项grub不需要重新安装）
4. 之后按提示按回车，输入y即可。