---
title: "Typecho 字体设置和加入广告"
categories: 折腾记录
tags:
  - "博客"
  - "Typecho"
  - "广告"
  - "字体"
id: "Typecho-font-settings-and-adding-ads"
date: 2025-02-13
---

### 字体设置

尝试过两个Typecho插件，可以修改但不能完美使用，没法改标题的字体。
[Typecho字体插件ZFonts已开源 - 倾城于你](https://qninq.cn/archives/zfonts.html)
[xxhzm/FontLibs: typecho插件FontLibs，后台可以更换字体](https://github.com/xxhzm/FontLibs)

因为我用的这个[Millennium-style主题](https://gitee.com/stsiao/millennium-style)对标题部分有单独设置字体，所以只能手动修改主题代码，在主题目录新增一个`fonts`目录，里面是一个`fonts.css`以及字体文件，我使用的`woff2`格式的霞鹜文楷TC旧字形。

![截屏2025-02-13 11.23.59.avif](https://media.235421.xyz/2025/02/1739418482.avif)

```
# fonts.css

/* 自定义字体定义 */
@font-face {
font-family: 'LXGW WenKai TC';
src: url('LXGWWenKaiTC-Regular.woff2') format('woff2');
font-display: swap;
}

/* 定义 Bold 字体 */
@font-face {
font-family: 'LXGW WenKai TC';
src: url('LXGWWenKaiTC-Medium.woff2') format('woff2');
font-weight: bold;
font-style: normal;
}
```

在`style.css`中引用这个`fonts.css`，然后编辑`style.css`，修改对应的`font-family`部分，添加你的字体名称到第一个，要单独设置标题`h1-h6`的字体和站点标题`logo`的字体，可以设为粗体(bold)。

![截屏2025-02-13 11.27.40.avif](https://media.235421.xyz/2025/02/1739418547.avif)

![截屏2025-02-13 11.28.49.avif](https://media.235421.xyz/2025/02/1739418610.avif)

![截屏2025-02-13 11.29.39.avif](https://media.235421.xyz/2025/02/1739418629.avif)

![截屏2025-02-13 10.31.12.avif](https://media.235421.xyz/2025/02/1739418663.avif)

修改后，为了立即生效，在`header.php`中引用`style.css`的部分，添加`?v=1.2`，每次修改都需要变更这个代号。

![截屏2025-02-13 11.30.32.avif](https://media.235421.xyz/2025/02/1739418696.avif)


----

### 加入广告

我是用[Monetag](https://monetag.com)的广告，这个相比Google AdSense来说不用审核，对新手比较友好，新网站也能加入。

首先在Monetag官网注册登录，添加你的网站，需要进行验证，就是在网站根目录添加一个它提供的`sw.js`文件，添加后点击检测，如果不生效可能是有缓存，使用Cloudflare CDN的话建议在Cache设置中清除缓存，再检测应该就可以了。

![截屏2025-02-13 11.32.02.avif](https://media.235421.xyz/2025/02/1739418733.avif)


然后选择一个广告形式，它有提供多种广告形式，还有一个多合一的，只需一行代码就可以使用所有广告，不过实测用户体验很差。我推荐使用 In-Page-Push 这个，只是在上方显示一个推送横幅广告，没有弹窗和跳转，也可以点击关闭。

![截屏2025-02-13 11.32.37.avif](https://media.235421.xyz/2025/02/1739418774.avif)


选中 In-Page-Push 这个 Zone ，它默认是让你添加含有`Anti-AdBlock`的代码，这能增加广告收益，我没开这个，因为我希望屏蔽广告的人也能看见我的内容。如果关闭掉`Anti-AdBlock`开关，下面有一个代码。复制这串代码添加到Typecho中你使用的主题目录中的`header.php`文件，具体应该在`<head>`标签中的`<meta>`下面。

![截屏2025-02-13 11.36.57.avif](https://media.235421.xyz/2025/02/1739418808.avif)

添加后点击检测，通过了就完成了，如果检测不到尝试清除缓存。

现在访问你的网站，就会有横幅广告了。每1000次不到1美元，而且iOS系统访问的话，CPM会更高。

![截屏2025-02-13 11.37.31.avif](https://media.235421.xyz/2025/02/1739418842.avif)


----

### 搜索引擎提交
安装[Sitemap](https://github.com/typecho-fans/plugins/tree/master/Sitemap)插件，会在`https://yourdomain.com/sitemap.xml`生成一个Sitemap，将此链接提交到[Google Search Console](https://search.google.com/search-console)，让Google搜索引擎收录你的网站。

我还编写一个`robots.txt`文件，放在网站根目录，禁止搜索引擎抓取`/feed/`部分。

```
# robots.txt

User-agent: *
Disallow: /feed/

Sitemap: https://www.joomaen.com/sitemap.xml
```