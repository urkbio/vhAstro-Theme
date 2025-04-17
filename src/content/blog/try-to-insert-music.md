---
title: "尝试插入音乐"
categories: 测试
tags: ["音乐"]
id: "try-to-insert-music"
date: 2025-04-09 22:03:02
recommend: true
---

## 测试音乐插入功能

### Music 组件

```md
<!-- id 支持：歌曲 id / 歌单 id / 专辑 id / 搜索关键词
type 支持：song, playlist, album, search（默认值：song）
server 支持：netease, tencent, kugou, xiami, baidu（默认值：netease） -->
<!-- 单曲 -->
::vhMusic{id="1474697967"}
<!-- 列表 -->
::vhMusic{id="129424840" type="album"}
```

::vhMusic{id="1855720983"}