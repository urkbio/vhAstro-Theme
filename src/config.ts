export default {
  // 网站标题
  Title: '封闭脑袋',
  // 网站地址
  Site: 'https://astro.joomaen.com',
  // 网站副标题
  Subtitle: '零落残魂何处断',
  // 网站描述
  Description: '「封闭脑袋」是一个专注于人工智能、技术折腾和博主个人想法的个人博客，分享包括AI发展、浏览器以及技术实践的独特见解，适合对科技和未来趋势感兴趣的读者。',
  // 网站作者
  Author: 'Joomaen',
  // 作者头像
  Avatar: 'https://b2.235421.xyz/pic/2025/04/b8c2057a336e567b338781311c9e7714.avif',
  // 网站座右铭
  Motto: '不憹？每下愈况。',
  // Cover 网站缩略图
  Cover: '/assets/images/banner/072c12ec85d2d3b5.webp',
  // 网站侧边栏公告 (不填写即不开启)
  Tips: '<p>欢迎光临我的博客 🎉</p><p>这里记录一些折腾的过程，也写些生活里的感悟.</p><p>技术与日常并存，琐碎与思考同在:) 💖</p>',
  // 首页打字机文案列表
  TypeWriteList: [
    '多亏了那些让我着迷的事，我才能安然度日.',
    "It's thanks to the things that captivate me that I can make it through the days in peace.",
  ],
  // 网站创建时间
  CreateTime: '2025-02-09',
  // 顶部 Banner 配置
  HomeBanner: {
    enable: true,
    // 首页高度
    HomeHeight: '38.88rem',
    // 其他页面高度
    PageHeight: '28.88rem',
    // 背景
    background: "url('/assets/images/home-banner.webp') no-repeat center 60%/cover",
  },
  // 博客主题配置
  Theme: {
    // 颜色请用 16 进制颜色码
    // 主题颜色
    "--vh-main-color": "#01C4B6",
    // 字体颜色
    "--vh-font-color": "#34495e",
    // 侧边栏宽度
    "--vh-aside-width": "318px",
    // 全局圆角
    "--vh-main-radius": "0.88rem",
    // 主体内容宽度
    "--vh-main-max-width": "1458px",
  },
  // 导航栏 (新窗口打开 newWindow: true)
  Navs: [
    // 仅支持 SVG 且 SVG 需放在 public/assets/images/svg/ 目录下，填入文件名即可 <不需要文件后缀名>（封装了 SVG 组件 为了极致压缩 SVG）
    // 建议使用 https://tabler.io/icons 直接下载 SVG
    { text: '朋友', link: '/links', icon: 'Nav_friends' },
    // { text: '圈子', link: '/friends', icon: 'Nav_rss' },
    // { text: '动态', link: '/talking', icon: 'Nav_talking' },
    { text: '归档', link: '/archives', icon: 'Nav_archives' },
    { text: '留言', link: '/message', icon: 'Nav_message' },
    { text: '关于', link: '/about', icon: 'Nav_about' },
    { text: '英文', link: 'https://blog.joomaen.com', target: true, icon: 'Nav_link' },
    { text: '个站虫洞', link: 'https://storeweb.cn/s/2381', icon: 'Nav_bag' },
  ],
  // 侧边栏个人网站
  WebSites: [
    // 仅支持 SVG 且 SVG 需放在 public/assets/images/svg/ 目录下，填入文件名即可 <不需要文件后缀名>（封装了 SVG 组件 为了极致压缩 SVG）
    // 建议使用 https://tabler.io/icons 直接下载 SVG
    { text: 'Github', link: 'https://github.com/urkbio', icon: 'WebSite_github' },
    { text: 'Joomaen图片', link: 'https://k51qzi5uqu5dkd8a8fqsg7js4mn29hf4zik7inykgjouwiql0bfv2zcm608d13.eth.sucks', icon: 'WebSite_img' },
    { text: 'HanAnalytics', link: 'https://analytics.235421.xyz', icon: 'WebSite_analytics' },
    { text: 'Better Stack', link: 'https://status.joomaen.com', icon: 'WebSite_activity' },
  ],
  // 侧边栏展示
  AsideShow: {
    // 是否展示个人网站
    WebSitesShow: true,
    // 是否展示分类
    CategoriesShow: true,
    // 是否展示标签
    TagsShow: true,
    // 是否展示推荐文章
    recommendArticleShow: true
  },
  // DNS预解析地址
  DNSOptimization: [
    'https://i0.wp.com',
    'https://cn.cravatar.com',
    'https://analytics.vvhan.com',
    'https://vh-api.4ce.cn',
    'https://registry.npmmirror.com',
    'https://pagead2.googlesyndication.com'
  ],
  // 博客音乐组件解析接口
  vhMusicApi: 'https://vh-api.4ce.cn/blog/meting',
  // 评论组件（只允许同时开启一个）
  Comment: {
    // Twikoo 评论
    Twikoo: {
      enable: true,
      envId: 'https://jootwikoo.netlify.app/.netlify/functions/twikoo'
    },
    // Waline 评论
    Waline: {
      enable: false,
      serverURL: ''
    }
  },
  // Han Analytics 统计（https://github.com/uxiaohan/HanAnalytics）
  HanAnalytics: { enable: true, server: 'https://analytics.235421.xyz', siteId: 'vhAstro' },
  // Google 广告
  GoogleAds: {
    ad_Client: 'ca-pub-4794157925903709', //ca-pub-xxxxxx
    // 侧边栏广告(不填不开启)
    asideAD_Slot: `<ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-4794157925903709" data-ad-slot="5326559858" data-ad-format="auto" data-full-width-responsive="true"></ins>`,
    // 文章页广告(不填不开启)
    articleAD_Slot: `<ins class="adsbygoogle" style="display:inline-block;width:728px;height:90px" data-ad-client="ca-pub-4794157925903709" data-ad-slot="6084143723"></ins>`
  },
  // 文章内赞赏码
  // Reward: {
  //   // 支付宝收款码
  //   AliPay: '',
  //   // 微信收款码
  //   WeChat: ''
  // },
  // 访问网页 自动推送到搜索引擎
  SeoPush: {
    enable: false,
    serverApi: '',
    paramsName: 'url'
  },
  // 页面阻尼滚动速度
  ScrollSpeed: 666
}