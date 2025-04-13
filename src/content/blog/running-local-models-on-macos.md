---
title: "MacOS上运行本地模型"
categories: 折腾记录
tags:
  - "macOS"
  - "AI"
id: "running-local-models-on-macos"
date: 2025-01-03
---

### 使用ollama

1. 安装[ollama](https://github.com/ollama/ollama)：`brew install ollama`

2. 启动ollama服务：`brew services start ollama`

3. 尝试跑一个3B的LLaMA 3.2，`ollama run llama3.2:3b`，没下载的会自动下载，也可以在这个网站下载其他模型。

4. 此时可以输入文字进行对话了，也可以输入 `/bye` 退出对话框，然后使用一个其他的GUI工具接入本地大模型。

我在Mac上使用 [Enchanted](https://apps.apple.com/us/app/enchanted-llm/id6474268307?l=zh-Hans-CN)，它能自动识别到本地的模型，无须额外配置即可使用，如果本地有多个模型可以切换。在ollama的 [README.md](https://github.com/ollama/ollama/blob/main/README.md) 页面底部也有许多其他的工具可以自己选择。

5. 我的最低配Mac mini上运行3B模型很轻松，最高运行7/8B的。10B以上的没试过。不过模型太小的话使用场景有限，不能把它当成通用型的，如果就是文字翻译和简单聊天的话还行，叫它讲个笑话都只能讲出不超过5行的，一点都不好笑。

6. 要停止的话：

1. 停止模型：`ollama stop llama3.2:3b`

2. 停止ollama服务：`brew services stop ollama`

### 使用LM Studio

[LM Studio](https://lmstudio.ai/) 是一个带有GUI的工具，可以更简单的运行模型。并且内置有针对M芯片优化的MLX模型。

1. 安装LM Studio：`brew install --cask lm-studio`

2. 进入后点击左侧discover🔍，这里有一些内置的模型供你选择，默认排序是按最匹配你的电脑的排在上方。选一个点击Download。

3. 下载好后点击左侧栏的Chat图标，点击顶部的框或按⌘L选择你下载的模型，如果有多个也是在这里选择。

4. 之后就可以对话了。
