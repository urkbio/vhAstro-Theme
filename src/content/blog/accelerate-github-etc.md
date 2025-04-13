---
title: "GitHub等加速"
categories: 折腾记录
tags:
  - DNS
  - Github
id: "accelerate-github-etc"
date: 2024-02-01
---

我发现即使使用开启了ECS的海外DNS，例如Google的公共DNS，也不一定会返回GitHub等海外网站的最优ip。GitHub上有用改host文件来加速的，当然也能在AdGuard Home上使用。不过有一些问题。

首先，host文件格式的规则在AdGuard Home上只能添加到黑名单有效，添加到白名单就没用。这不是主要原因。
比较麻烦的是，我合并的规则中，有不少关于GitHub的白名单规则，尽管是在黑名单里导入，但是规则内是白名单的放行写法就会被识别成白名单。然而白名单优先级是高于黑名单的，因此host格式的加速规则实际上并不会起作用。

因此，我搞了个小脚本，把黑名单中的GitHub相关规则剔除掉，匹配关键字方式。然后，再把host格式的规则转为AdGuard Home支持的rewrite写法。并输出文件到本地目录，只需要在AdGuard Home添加时输入本地路径而不是链接就行。

----

我目前发现有两个仓库

[Github520](https://github.com/521xueweihan/GitHub520) 这个只能加速GitHub

[SteamHostSync](https://github.com/Clov614/SteamHostSync) 这个可以加速GitHub和Steam

我的脚本：[filterprune](https://github.com/urkbio/filterprune)