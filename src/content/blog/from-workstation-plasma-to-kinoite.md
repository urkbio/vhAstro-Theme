---
title: "从fedora workstation Plasma到fedora kinoite（不可变系统的Plasma版本）"
categories: 折腾记录
tags:
  - Linux
id: "from-workstation-plasma-to-kinoite"
date: 2024-02-01
---

一直想尝试一下所谓的不可变linux系统。考虑到的发行版有openSUSE MicroOS、fedora kinoite。因为我虽然第一次接触linux是用的ubuntu,不过用的最久的是openSUSE 风滚草，之后是fedora workstation Plasma。所以我考虑的是rpm系的，其实跟这个关系不大，因为不可变linux是用的flatpak来管理GUI应用，也有snap不过只在ubuntu。

最终选择了fedora kinoite而不是microOS是因为在启动项引导时出了故障，我无法解决，而且microOS似乎没有openSUSE的yast2工具，这是openSUSE最吸引我的地方（当然还有蜥蜴标志和比其他包管理工具名字更长的zypper）。所以我选择fedora系的，一开始以外只有默认gnome的silverblue，犹豫要不要装的时候我又找到了KDE Plasma版本的kinoite。因为我不喜欢gnome，就是连个角标都要用插件。

由于我是在笔电安装双系统，所以选手动分区，我按照之前fedora workstation的方法分区，但是它报错了。刚准备搜索下怎么弄时发现了他有个自动分区的选项。是从我未使用的磁盘自动分区，它自动分了/boot /boot/efi / 这三个分区。我之前会分的是/boot/efi swap / 这三个。它没用分swap而是多了个/boot。我是不喜欢将/home单独挂载的，就这样吧。

安装好之后非常精简，没有庞大的kde全家桶，但是有firefox。我要连上代理来使用flatpak下载应用，但是总是报错SSL connect error。但是用直连就没问题但是速度感人，之前在openSUSE上使用国内源并不好用，所以就没弄。怎么解决的呢？我之前是一直开代理的，所有直接将export all_proxy写入.bashrc。但是在这个系统不行，我只好单开一个terminal 然后给他代理，果然可以下载了。由于我在之前的系统也基本上用flatpak,所以这块是一样的。

还有这是我第一次使用flatpak版的fcitx5，官方的flathub源里有，但是我看有教程说得导入fcitx5的源，我导入了，发现还可以只在用户端使用而不是系统，使用体验上没有区别，只是安装应用时会让选择从哪个仓库获取，据说可以避免使用root权限。导入源之后直接安装fcitx5和chinese-addons这两个包，还会有依赖的包一同下载，包名不是这个，挺长的。设定好之后注销再登入就可以使用了。

它默认开启的zram是8g,我的物理内存也是8g。压缩方式是lzo-rel。不知道这种压缩方式相比zstd如何，在android上使用zstd挺好的。而且zram利用率挺低的，不过我也懒得去设定swappiness这些东西了，默认就行。折腾linux确实累啊！

按官方的说法也可以使用rpm-ostree来安装rpm包，安装后就和系统一起更新了。但是安装完得重启才行。好像官方推荐的命令行工具是使用toolbox，但是我没用过，以后用到了再说。