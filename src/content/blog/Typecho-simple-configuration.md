---
title: "Typecho 简单配置"
categories: 折腾记录
tags:
  - "博客"
  - "Typecho"
id: "Typecho-simple-configuration"
date: 2025-02-10
---

### 记录typecho 插件
![截屏2025-02-10 13.45.19.png](https://media.235421.xyz/2025/02/1739166733.png)

AdsAndStats: Google analytics
https://typecho.work/archives/AdsAndStats.html
https://github.com/flyhunterl/AdsAndStats

CommentNotifier: 评论邮件通知
https://github.com/typecho-fans/plugins/tree/master/CommentNotifier

TePostViews: 主题推荐，统计查看次数
https://typecho.work/archives/TePostViews.html

Sitemap: 生成Google引索的站点地图
https://github.com/typecho-fans/plugins/tree/master/Sitemap

RunTime: 显示网站运行时间
https://github.com/ponycool/typecho-plugins/tree/master/RunTime

PageViews: 显示网站总访问量
https://github.com/ponycool/typecho-plugins/tree/master/PageViews

TagsList: 后台编辑文章时增加标签选择列表
https://github.com/ponycool/typecho-plugins/tree/master/TagsList

----

主题使用飞蚊话的千禧年主题
https://www.bwsl.wang/csother/140.html

### 自用修改
1. 修改了`header.php`，`<head>`中**16**行左右添加了一行代码用来显示favicon。
![截屏2025-02-10 13.47.01.png](https://media.235421.xyz/2025/02/1739166788.png)

```
    <link rel="shortcut icon" href="https://media.235421.xyz/favicon.ico" type="image/x-icon" />
```

2. 在`footer.php`中的`<footer>`部分底部添加以下代码调用RunTime和PageViews

![截屏2025-02-10 12.57.49.png](https://media.235421.xyz/2025/02/1739166830.png)

```
    <?php PageViews_Plugin::showPageViews(); ?>
    <?php RunTime_Plugin::show(); ?>
```

3. 调整字体大小
在`style.css`的**17**行的`font-size`设为`92.5%`，这个是电脑端文字大小；**435**行调整手机端文字大小同理:

![截屏2025-02-10 13.28.13.png](https://media.235421.xyz/2025/02/1739166860.png)

![截屏2025-02-10 13.30.48.png](https://media.235421.xyz/2025/02/1739166872.png)

```
# 17行左右
body {
  background-color: #FFF;
  color: #444;
  /*font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;*/
  font-family: "Droid Serif", Georgia, "Times New Roman", "PingFang SC", "Hiragino Sans GB", "Source Han Sans CN", "WenQuanYi Micro Hei","Microsoft Yahei", serif;
  font-size: 92.5%;
}

# 435行左右
@media (max-width: 767px) {
  body {
    font-size: 92.5%;
  }
  #nav-menu a {
    float: none;
    display: inline-block;
    margin: 0 -2px;
  }
}
```
**还有一种更简单粗暴的方法就是注释掉这两个地方的`font-size`设置，也会变得比较大**

**为了立刻生效，可以在`header.php`中将引用`style.css`代码后面加上`?v=1.1`，每次修改CSS文件后换一个代号即可直接刷新**，像这样:

![截屏2025-02-10 13.27.51.png](https://media.235421.xyz/2025/02/1739166908.png)

```
    <link rel="stylesheet" href="<?php $this->options->themeUrl('style.css?v=1.1'); ?>">
```

4. 主题配置
我关掉了 `首页展示最新文章` 和 `文章归档` 选项，我有一个专门的归档页。

这是在 `设置外观-联系我` 中填入，[主题页面](https://www.bwsl.wang/csother/140.html)有详细解释。

```
开往,https://www.travellings.cn/go.html,fas fa-subway,开往
个站虫洞,https://storeweb.cn/s/2381,fas fa-shopping-bag,个站虫洞
RSS,/feed,fa fa-rss,RSS
```

----
### 标签页面
https://media.235421.xyz/Typecho/tags.php
这是我让AI结合网上的模板写的一个页面模板，新建一个页面作为标签页，应用这个模板就行。
下载php文件放在主题根目录即可。


----

### 归档页面
https://media.235421.xyz/Typecho/archives.php
也是AI生成，和标签页面外观一致。
命名为`archives.php`，放在主题的根目录，然后新建一个页面应用这个模板就行。

----

### 分类页面
https://media.235421.xyz/Typecho/categories.php
使用方法同上

----

### 友链页面
https://media.235421.xyz/Typecho/links.php
使用方法同上,用`{BlogName},{URL},{icon}`这个格式每行一个填入友链。可以填写HTML语法的其他内容，但无法直接解析markdown。
