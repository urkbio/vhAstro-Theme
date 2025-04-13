---
title: "zsh插件"
categories: 折腾记录
tags:
  - "zsh"
  - "Linux"
id: "zsh-plugins"
date: 2024-11-14
---

用到这几个

```
plugins=(
    # other plugins...
    git
    z
    zsh-autosuggestions
    extract
    zsh-syntax-highlighting
)
```

- zsh-autosuggestions：命令提示

- zsh-syntax-highlighting：语法校验

- z：z 是一个文件夹快捷跳转插件，对于曾经跳转过的目录，只需要输入最终目标文件夹名称，就可以快速跳转，避免再输入长串路径，提高切换文件夹的效率。（zsh内置）

- extract: 解压缩工具。（zsh内置）

----

把插件下载到本地的 `~/.oh-my-zsh/custom/plugins` 目录:

```
git clone <https://github.com/zsh-users/zsh-autosuggestions> ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
git clone <https://github.com/zsh-users/zsh-syntax-highlighting.git> ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting 
```

添加到 `.zshrc` 然后 `source ~/.zshrc`

来源：https://blog.csdn.net/a143730/article/details/135573409