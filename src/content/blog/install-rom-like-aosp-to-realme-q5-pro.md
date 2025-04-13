---
title: "记录为realme Q5 pro (RMX3372)和国际版realme GT neo 3T(RMX3371)刷入第三方系统(类原生)"
categories: 折腾记录
tags:
  - 搞机
id: "install-rom-like-aosp-to-realme-q5-pro"
date: 2024-02-01
---

必须是Android13，Android12刷了会变砖

### 所需资源

[TWRP](https://yggz.lanzouj.com/iqbmS11ab3if)
[Bliss](https://sourceforge.net/projects/bibin/files/Bliss-v16.7-rmx3371-UNOFFICIAL-gapps-20230627.zip/download)
[DerpFest](https://sourceforge.net/projects/yograjsingh-cmd/files/spartan/derpfest/DerpFest-13-Official-Tango-spartan-20230702-0900.zip/download)
更多资源可在telegram频道获取

国际版 GT neo 3T 频道↙️
[Realme GT neo 3T | Updates](https://t.me/RealmeGTNeo3T_Updates)
交流群↙️
[Realme GT neo 3T | OFFICIAL](https://t.me/RealmeGTNeo3T_Updates)

### 解锁bl

1. 刷机前提需解锁bootloader，解锁方法是在官方深度测试app内申请，通过后用adb解锁。
2. 关机长按开机键和音量-，进入fastboot模式
3. 电脑安装adb程序platform tools。在adb目录打开终端，先输入 fastboot devices来检测有没有连接成功。
4. 之后使用 fastboot flashing unlock解锁bootbloader,如果加锁bootloader使用 fastboot flashing lock

### 刷机

twrp是第三方的recovery模式，可以选择永久替换或者临时使用，我用的临时使用
在fastboot模式下用 fastboot boot twrp.img(这里用真实路径)。即可临时启动twrp
在twrp下用 adb push C:/rmx3371.zip /注意zip后面有个空格，后跟Android根目录，即把刷机包推送到根目录
在twrp下清理【 Dalvik/Art cache 】、【 System 】、【 Data 】及【 Cache 】，并格式化data分区
(或许不用这么完全的清理，不过我是这么做的)
在twrp下点安装，找到并勾选刷机包，刷入，进度条走完重启即可，首次开机可能较慢
**有的第三方类原生刷机包需要使用特定的firmware，一般会随着刷机包提供，有的话把这个也刷入，先后好像没有区别**

注：由于twrp是临时刷入，可以备份好twrp.img文件，以备日后使用。其实可以永久刷入，不过我没研究如何在AB分区的手机上安装。