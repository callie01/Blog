import { defineUserConfig } from "vuepress";
import recoTheme from "vuepress-theme-reco";
import { viteBundler } from "@vuepress/bundler-vite";
import { webpackBundler } from "@vuepress/bundler-webpack";

export default defineUserConfig({
  title: "孜孜的中转站",
  description: "孜孜的个人网站",
  bundler: viteBundler(),
  // bundler: webpackBundler(),
  head: [["link", { rel: "icon", href: "/Blog/callieLogo.png" }]],
  theme: recoTheme({
    style: "@vuepress-reco/style-default",
    logo: "/callieLogo.png",
    author: "CallieLi",
    authorAvatar: "/avatar.jpg",
    primaryColor: "#8e44ad",
    // docsRepo: "https://github.com/vuepress-reco/vuepress-theme-reco-next",
    // docsBranch: "main",
    // docsDir: "example",
    lastUpdatedText: "",
    // series 为原 sidebar
    series: {
      "/docs/theme-reco/": [
        {
          text: "module one",
          children: ["home", "theme"],
        },
        {
          text: "module two",
          children: ["api", "plugin"],
        },
      ],
    },
    navbar: [
      { text: "首页", link: "/" },
      {
        text: "分类",
        children: [
          { text: "JS", link: "/categories/gongzuo/1.html" },
          { text: "CSS", link: "/categories/gongzuo/1.html" },
          { text: "框架", link: "/categories/gongzuo/1.html" },
          { text: "面试相关", link: "/categories/gongzuo/1.html" },
          { text: "工具汇总", link: "/categories/gongzuo/1.html" },
          { text: "生活记录", link: "/categories/shenghuo/1.html" },
        ],
      },
      // { text: "归档", link: "/timeline.html" },
      { text: "标签", link: "/tags/guanyuwo/1.html" },
      { text: "关于我", link: "/blogs/life/About" },
    ],
    commentConfig: {
      type: "valine",
      // options 与 1.x 的 valineConfig 配置一致
      options: {
        // appId: 'xxx',
        // appKey: 'xxx',
        // placeholder: '填写邮箱可以收到回复提醒哦！',
        // verify: true, // 验证码服务
        // notify: true,
        // recordIP: true,
        // hideComments: false, // 隐藏评论
      },
    },
  }),
  // debug: true,
});
