---
title: "极简版AdGuard Home分流"
categories: 折腾记录
tags:
  - "DNS"
id: "Simple-AdGuard-Home-diversion-rules"
date: 2025-03-25
---

自用，上游支持ECS
```
# Google
tls://8.8.8.8
tls://8.8.4.4
https://8.8.8.8/dns-query
https://8.8.4.4/dns-query
# Quad9 11
tls://9.9.9.11
tls://149.112.112.11
https://9.9.9.11/dns-query
https://149.112.112.11/dns-query
# DNS Pod
#https://doh.pub/dns-query
#tls://dot.pub
# AliDNS
#https://dns.alidns.com/dns-query
#tls://dns.alidns.com
# 国内分流
[/baidu.com/qq.com/taobao.com/tmall.com/jd.com/163.com/sohu.com/sogou.com/weibo.com/alipay.com/qqmail.com/renren.com/126.com/xinhuanet.com/cctv.com/baiduyun.com/zhihu.com/douyin.com/kuaishou.com/bilibili.com/iqiyi.com/youku.com/le.com/mogujie.com/dangdang.com/suning.com/yhd.com/pinduoduo.com/xiaohongshu.com/tencent.com/ctrip.com/qunar.com/icloud.com/dianping.com/meituan.com/ele.me/lazada.com/pddpic.com/cn/jd.hk/cmbchina.com/91.com/zhaopin.com/51job.com/liepin.com/airchina.com/alibabagroup.com/1688.com/mop.com/yangkeduo.com/china.com/chinaren.com/tom.com/zglocal.com/apple.com/bitauto.com/che168.com/soufun.com/fang.com/58.com/anew.com/weidian.com/lefeng.com/ximalaya.com/jingdong.com/zhongguowang.com/ifeng.com/qianlong.com/chinaso.com/xunlei.com/kuaizhao.com/btime.com/haosou.com/dnspod.net/amap.com/xhscdn.com/netease.im/xmcdn.com/bilivideo.com/biligame.com/bilicdn2.com/acgvideo.com/ovscdns.com/shifen.com/ccb.com/alibabadns.com/coolapk.com/360buyimg.com/doubanio.com/douyincdn.com/bytedance.com/]https://doh.pub/dns-query tls://dot.pub https://dns.alidns.com/dns-query tls://dns.alidns.com
```

#### 这是完整版的国内域名集
https://cdn.jsdelivr.net/gh/urkbio/adguardhomefilter@main/Domain-extraction/extracted_domains.txt