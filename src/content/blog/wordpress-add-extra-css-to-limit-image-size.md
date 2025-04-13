---
title: "WordPress添加额外CSS以限制图片大小"
categories: 折腾记录
tags:
  - "WordPress"
id: "wordpress-add-extra-css-to-limit-image-size"
date: 2025-01-24
---

### 通过“自定义 CSS”添加样式

1. 登录到 WordPress 后台。
2. 转到 外观 > 自定义 > 附加的 CSS。
3. 在输入框中添加以下 CSS 代码：

```
/* 限制文章内容中图片的最大宽高 */
.entry-content img,
.post-content img {
    max-width: 100%; /* 确保图片不会超出容器宽度 */
    max-height: 500px; /* 限制图片最大高度 */
    height: auto; /* 保持宽高比 */
}

/* 可选：限制小工具或评论区图片的大小 */
.widget img,
.comment-content img {
    max-width: 100%;
    max-height: 300px; /* 可根据需要调整 */
    height: auto;
}
```