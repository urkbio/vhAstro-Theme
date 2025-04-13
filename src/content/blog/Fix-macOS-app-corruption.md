---
title: "解决macOS应用损坏"
categories: 折腾记录
tags:
  - "macOS"
id: "Fix-macOS-app-corruption"
date: 2024-12-31
---

之前看到这篇文章又提到多种方法来解决macOS上提示应用损坏。
[macOS 提示：“应用程序” 已损坏，无法打开的解决方法总结](https://sysin.org/blog/macos-if-crashes-when-opening/)

不过我一般是在使用Homebrew安装的程序上会遇到这个问题，比如LibreWolf，因此**移除隔离属性**这个方法对我来说很实用。

就是在使用Homebrew安装应用时后面添加参数`--no-quarantine`

比如：
```
brew install --cask librewolf --no-quarantine
```

就可以点击运行了，最多点下允许，不会直接丢到废纸篓了。