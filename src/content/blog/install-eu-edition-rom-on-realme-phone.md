---
title: "realme系手机线刷EU版"
categories: 折腾记录
tags:
  - 搞机
id: "install-eu-edition-rom-on-realme-phone"
date: 2024-02-01
---

1. 解锁bl

2. 在[这个网站](https://realmefirmware.com/realme-firmware-update/)下载对应机型的线刷包,注意国际版型号和国内版不一定一致，自行搜索。例如realme Q5 pro(rmx3372)的国际版是realme GT neo 3T(RMX3371)。可以在网站搜索框之间搜3T，结果自上到下分别是台版(泰、俄等）；印版(印度)；国际版(欧盟和许多)。下载好后解压，只需要.ofp格式的那个。

3. 下载[.ofp flash工具](https://github.com/yograjfire18/OppoRealme-OFP-Flash)

4. 直接下载好release里的zip包，需关闭电脑杀毒软件，包括Windows安全中心。解压。然后安装adb和fastboot驱动。

5. 将fastboot模式的已解锁bl的realme手机连接到电脑。关机后长按开机键+音量下即可进入fastboot。

6. 将解压好的.ofp包复制到OppoRealme-OFP-Flash这个工具的文件夹。Windows的话直接双击打开exe程序。其他系统请看GitHub项目的README。

7. 第一步是选择地区，EUEX就是欧盟版，TR是土耳其，EU-NONEEA-Double是欧洲其他地区。也可以选0自行检查。

8. 第二步是选择需要保留的分区，分别是数据data分区、boot分区、rec分区。也可以选0之间抹掉，我是从印版刷欧版，为了安全起见还是备份好后直接抹除。

9. 然后需要同意一个声明，选1即可。回车后开刷。

10. 然后等着，程序开跑，相当于帮你把各个img刷进去，刷super的时候会很慢，不要不耐烦，多等会。

11. 程序跑完success之后回车关掉程序，先别急开机。在终端/cmd下输入fastboot set_active a 和fastboot reboot。手机自动开机。初次开机慢，耐心等。

12. 我的手机是可以跳过Google验证的。或者别插卡别连WiFi。网络允许的就没关系。或者可以cfw局域网共享代理。切记刷机前退出Google帐号，很麻烦！！！