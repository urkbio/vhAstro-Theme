---
title: "Firefox：注重隐私与可定制性的经典浏览器"
categories: 浏览器迷
tags:
  - "Firefox"
id: "Firefox-A-classic-browser-that-focuses-on-privacy-and-customizability"
date: 2025-03-12 19:08:00
---

#### **1. Firefox 介绍 **

Firefox 是由 Mozilla 基金会开发的开源浏览器，首次发布于 2002 年。与基于 Chromium 内核的浏览器不同，Firefox 使用 Gecko 引擎，强调用户隐私保护、可定制性和开源精神。尽管市场份额较小，但它仍然凭借其强大的隐私功能和自由精神吸引着忠实用户。

由于最近Chrome真的开始禁用Manifest V2的浏览器扩展了，因此我也在思考Firefox的份额有没有可能因此获得稍微的提升。在我了解的目前情况来看，近乎所有基于Chromium的浏览器都无法幸免，即便像[Brave](https://brave.com/)浏览器这样说过会继续支持Manifest V2的厂商，也只是在设置中允许启用这四个常用的扩展。但我觉得当大多数浏览器不再支持时，扩展程序开发者或许也不会再维护Manifest V2版本，因此我对Chromium系浏览器持悲观态度。

我又一次安装好了Firefox，我将分享它的特点以及我自己的使用体验。



#### **2. Firefox 的隐私保护特性**

Firefox 提供多项强大的隐私保护功能，包括默认阻止第三方追踪器、全面 Cookie 保护、加密的 DNS 请求（DNS over HTTPS）、以及容器标签页来隔离不同网站的数据。此外，它还具备防止指纹识别的功能，减少用户的浏览器特征泄露，确保用户在上网时的隐私和匿名性。

其实在隐私保护方面自不用多说，人们不使用Firefox更多是因为它的兼容性差、速度慢、内存占用率高等缺点，但如果真正想要避免Chromium，那还得是Firefox。

对我个人来说，我使用的是一个叫[BetterFox](https://github.com/yokoffing/Betterfox)的`user.js`，这是一个配置档，将它放到当前`Profile`目录即可获得增强功能，据说**比普通 Firefox 快 31% 🚀**，更多说明去看它的GitHub页面。

或者你可以尝试一些主打隐私保护的开源第三方版本，比如 [GNU icecat](https://icecatbrowser.org/)和 [LibreWolf](https://librewolf.net/)，当然第三方版本有非常多，有的不一定开源，有的是背后有公司在维护，我后面会提到。



#### **3. 可定制性与扩展生态**

如果你想自己手动配置，Firefox也完全满足你，它是有高度可定制性。如果你知道你在做什么，你可以在`about:config`中修改任何东西。

当然作为一个浏览器，Firefox也支持浏览器扩展程序，一般常见的扩展都有Firefox和Chrome两个版本，而且Firefox支持Manifest V2和Manifest V3并存，因此你可以安装`uBlock Origin`。

还有几个推荐的扩展：

- [暴力猴](https://addons.mozilla.org/zh-CN/firefox/addon/violentmonkey/): 脚本管理器，类似[Tampermonkey](https://addons.mozilla.org/zh-CN/firefox/addon/tampermonkey/)。
- [沉浸式翻译](https://addons.mozilla.org/zh-CN/firefox/addon/immersive-translate/): 非常强大的翻译扩展，支持多种翻译服务，还有AI翻译等等。主要是相比Chrome、Edge的内置翻译，用这个扩展可以同时显示原文和译文。而且Firefox好不容易才有了内置翻译，似乎中文支持还在测试。
- [Auto Tab Discard](https://addons.mozilla.org/zh-CN/firefox/addon/auto-tab-discard/): 自动睡眠💤未使用标签页，降低内存占用。
- [Bitwarden](https://addons.mozilla.org/zh-CN/firefox/addon/bitwarden-password-manager/): 密码管理工具，可以使用[vaultwarden](https://github.com/dani-garcia/vaultwarden)自建服务端。
- [CanvasBlocker](https://addons.mozilla.org/en-US/firefox/addon/canvasblocker/): 指纹保护，减少浏览器特征泄露，提高匿名性。
- [Free Download Manager](https://addons.mozilla.org/zh-CN/firefox/addon/free-download-manager-addon/): 接管浏览器下载到FDM下载器。
- [Zero Omega](https://addons.mozilla.org/zh-CN/firefox/addon/zeroomega/): 代理插件，Proxy SwitchyOmega的Manifest V3版。
- [uBlock Origin](https://addons.mozilla.org/zh-CN/firefox/addon/ublock-origin/): 无需多言，开源拦截工具，非常强大，默认规则其实也够用了。
- [User-Agent Switcher and Manager](https://addons.mozilla.org/zh-CN/firefox/addon/user-agent-string-switcher/): 修改User Agent，可以模拟Chrome、Safari等其他浏览器，一定程度缓解不兼容。
- [Firefox Multi-Account Containers](https://addons.mozilla.org/zh-CN/firefox/addon/multi-account-containers/)：官方扩展，允许在同一个网站同时登入多个账户，互相隔离。



#### **4. 性能与资源占用**

内存占用上，很久以前，是Firefox比Chrome更节省内存，那时大家都调侃Chrome是内存大户。之后到了前几年，大概在110版本左右的时候，Firefox的这个优势就已经没有了，甚至某些情况下比Chrome更吃内存。然而在我最近用下来发现，开的标签页较少时，Firefox更吃内存，开的标签页较多的情况下，比如20个以上时，就差不多了。加上我使用 Auto Tab Discard扩展来睡眠未使用的标签页，反正我日常开二三十个标签页，也不会用掉太多内存。



#### **5. 多平台与同步功能**

作为三大浏览器之一，Firefox当然也有多平台同步，只需一个账户即可进行标签页、书签、历史记录、密码同步。

不过它的移动端比桌面端还难用，在Android上，它支持安装扩展，算得上一大特点。在我实际用下来，它的Android版非常卡，所以我一般使用[Iceraven](https://github.com/fork-maintainers/iceraven-browser)这个第三方版本，功能上些许差异我也没在意，只是我觉得比官方版流畅一些，只不过还是没有基于Chromium的浏览器流畅。

而在iOS上，由于系统限制，它几乎没有任何功能可言，唯一的用处就是同步书签了。我之前也一直执着于同步书签，但现在已经无所谓了，反正我安装了许多浏览器，也没有哪个是永远的主力，而且现在用iPhone，手机上基本是用Safari。

说回Firefox，它还有个叫作 Firefox Focus 的隐私浏览器，iOS和Android都有，只有一个地址栏，很简洁。我觉得它就是像 DuckDuckGo 浏览器那样的，主打阅后即焚，不保留浏览记录。



#### **6. Firefox 的挑战与未来发展**

Firefox的份额这几年也是越来越低了，Mozilla基金会作为一个非营利组织，本身就很难和背靠Google的Chromium系battle，也有传言说Mozilla内部管理问题。反正Chromium似乎已经成为事实上的Web标准，开发者也更多以Chrome为准，甚至有的网站判断UA为Firefox系就不让访问，但是UA改为Chrome就可以了。

Mozilla本来有新的内核Servo，原本计划替代目前的内核Gecko，测试了许久也最终没能问世，Mozilla 在 2020 年裁员所有 Servo 开发人员后，将项目交给了 Linux Foundation，随后于 2023 年移交至 Linux Foundation Europe，至今未见大规模应用。

有趣的是，Mozilla 自 2004 年起与 Google 达成合作，使 Google 成为 Firefox 的默认搜索引擎。Mozilla 的主要收入来源除了捐赠，很大一部分来自这项合作。然而，Firefox 一方面坚持独立于 Chromium 生态，另一方面却依赖 Google 提供资金支持。近期，Google 正面临美国政府的反垄断调查，甚至可能被要求剥离 Chrome 浏览器相关业务。不过，目前尚不清楚 Google 是否会出售 Chrome，如果出售，会由谁接手，以及这对 Firefox 与 Google 之间的合作关系会产生怎样的影响。

不过相比Chrome相对激进的策略，Firefox还是会同时支持Manifest V2和Manifest V3扩展，这或许能促使一部分用户迁移到Firefox，但是对Firefox整体的市场份额应该不会有太大波动。

#### **7. 一些第三方浏览器推荐**

| 第三方版本           | 主要特点                                                     | 支持平台                       | 官网链接                                                     |
| -------------------- | ------------------------------------------------------------ | ------------------------------ | ------------------------------------------------------------ |
| **Waterfox**         | 基于 Firefox ESR，移除遥测                                   | Windows, macOS, Linux          | [waterfox.net](https://www.waterfox.net/)                    |
| **Floorp**           | 以隐私和可定制性为主，深度优化 UI 体验                       | Windows, Linux                 | [floorp.app](https://floorp.app/)                            |
| **LibreWolf**        | 移除所有遥测、广告和 Google 依赖，强化隐私保护               | Windows, macOS, Linux          | [librewolf.net](https://librewolf.net/)                      |
| **IceCat**           | GNU 维护的自由软件版本，移除非自由组件                       | Linux, Windows, macOS          | [GNU Icecat](https://icecatbrowser.org/index.html)           |
| **Mull**             | 基于 Firefox for Android，增强隐私和安全性                   | Android                        | [gitlab.com/divested-mobile/mull](https://gitlab.com/divested-mobile/mull) |
| **Fennec F-Droid**   | 去除 Google 依赖的 Firefox for Android 版本                  | Android                        | [f-droid.org/en/packages/org.mozilla.fennec_fdroid](https://f-droid.org/en/packages/org.mozilla.fennec_fdroid/) |
| **Tor Browser**      | 以 Firefox ESR 为基础，集成 Tor 网络，实现匿名浏览           | Windows, macOS, Linux, Android | [torproject.org](https://www.torproject.org/)                |
| **IronFox**          | Mull的分支，LibreWolf推荐的Android版本                       | Android                        | [IronFox](https://gitlab.com/ironfox-oss/IronFox/)           |
| **奔跑的奶酪定制版** | 优化、开箱即用的配置                                         | Windows, macOS                 | [RunningCheese Firefox 136.0 正式版 ](https://www.runningcheese.com/firefox) [RunningCheese-Firefox ](https://github.com/runningcheese/RunningCheese-Firefox) |
| **tete009编译版**    | 编译优化                                                     | Windows                        | [Software](https://tete009.pages.dev/en-US/software)         |
| **Pale moon**        | 古老界面，使用旧版Firefox的Goanna渲染引擎                    | Windows, macOS, Linux, FreeBSD | [Pale moon](https://www.palemoon.org/)                       |
| **Midori**           | 定制化，工作空间，隐私。似乎有商业公司运营并且卖VPN          | Windows, macOS, Linux, Android | [Midori Browser](https://astian.org/midori-browser/)         |
| **mullvad**          | 用mullvad VPN代替Tor网络的Tor browser                        | Windows, macOS, Linux          | [mullvad Browser](https://mullvad.net/en/browser)            |
| **Iceraven**         | 之前的特点是支持从商店安装扩展，不过现在官方版也支持了，这个更流畅 | Android                        | [Iceraven](https://github.com/fork-maintainers/iceraven-browser) |
| **Basilisk**         | 最初由 Pale Moon 团队开发，后来独立，定位为 Waterfox Classic 的替代品，支持 XUL/XPCOM 扩展，但不支持 WebExtensions。 | Windows, macOS, Linux, FreeBSD | [Basilisk](https://www.basilisk-browser.org/)                |
| **SeaMonkey**        | 继承了 Mozilla Suite 的传统，包含浏览器、邮件客户端等功能，基于 Gecko 引擎。界面相当古老 | Windows, macOS, Linux          | [The SeaMonkey® Project](https://www.seamonkey-project.org/) |
| **Zen Browser**      | 类似Floorp，外观像Arc，似乎更快？                            | Windows, macOS, Linux          | [zen-browser](https://github.com/zen-browser/desktop)        |

如果发现了新的会再补充



#### **8.总结**

Firefox永远是一款值得推荐的浏览器，当然，你尝试过之后也许会觉得它速度慢、兼容性差、很难用、不够人性化，然后继续用Chromium系浏览器，但它应该作为一个备用浏览器被更多人看见和体验。

当然我不会说因为Chromium垄断，直接推荐你完全迁移到Firefox，电脑上当然可以有不止一个浏览器。我尽管不喜欢同时开着多个浏览器一起用，但我会过一段时间就换一个来作为主力使用，同时会被它的问题所烦恼，然后换一个，周而复始。

从体验上来说，Firefox绝对不是最好的，但在一般用户可能不在意的地方，比如强大的自定义、隐私保护、对Manifest V2扩展的继续支持等方面，Firefox做得确实不错。更深层次点，或许就因为它是为数不多的独立内核浏览器，它就注定会受到推崇。

----

参考：

- [Servo web rendering engine joins Linux Foundation Europe](https://linuxfoundation.eu/newsroom/servo-web-rendering-engine-joins-linux-foundation-europe)
- [Firefox Browser](https://www.mozilla.org/en-US/firefox/)
- [Mozilla’s approach to Manifest V3: What’s different and why it matters for extension users](https://blog.mozilla.org/en/products/firefox/firefox-manifest-v3-adblockers/)
- [BetterFox](https://github.com/yokoffing/Betterfox)