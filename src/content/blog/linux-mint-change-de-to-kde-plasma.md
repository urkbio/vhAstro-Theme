---
title: "Linux Mint切换到KDE Plasma"
categories: 折腾记录
tags:
  - "Linux"
id: "linux-mint-change-de-to-kde-plasma"
date: 2024-11-27
---

1. 安装Plasma：sudo apt install kde-standard
2. 在安装过程中，你需要选择显示管理器，因为 KDE Plasma 使用 SDDM 。出现提示时，在屏幕中选择 SDDM 。
3. 在安装完成后，你需要在 SDDM 配置文件中修改其中一个备选项以阻止在登录过程中弹出一个空的联机键盘。

```
编辑文件：
    sudo nvim /etc/sddm.conf
将以下代码粘贴进去：
    [General]InputMethod=
保存并退出
```

4. 重启系统

以上步骤执行完毕，重启后就会出现sddm的界面，在下拉选单中选择Plasma-x11，此时还没有wayland，因此需要进一步配置。

1. 查看KDE Plasma版本，要支持wayland须大于5.20 plasmashell --version
2. 安装所需组件

```
sudo apt update
sudo apt install plasma-workspace-wayland
```

3. 如果缺少sddm，就安装并启用它 （一般不用单独配置，在安装plasma的时候就配置过了）
```
sudo apt install sddm
sudo dpkg-reconfigure sddm
```
4. 确认/usr/share/wayland-sessions/目录中存在Wayland 会话文件，例如 plasmawayland.desktop。
5. 切换到wayland：sudo systemctl restart sddm
6. 在sddm会话菜单中选择Plasma wayland进入桌面
7. 验证是否正在运行wayland：echo $XDG_SESSION_TYPE

如果不打算回到cinnamon桌面，可以执行sudo apt purge cinnamon删掉它

----

参考：[Linux中国](https://linux.cn/article-16080-1.html)；ChatGPT