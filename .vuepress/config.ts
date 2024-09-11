import { defineUserConfig } from "vuepress";
import recoTheme from "vuepress-theme-reco";
import { viteBundler } from "@vuepress/bundler-vite";
import { webpackBundler } from "@vuepress/bundler-webpack";

export default defineUserConfig({
  title: "孜孜的中转站",
  description: "孜孜的个人网站",
  base: "/Blog/",
  bundler: viteBundler(),
  // bundler: webpackBundler(),
  head: [["link", { rel: "icon", href: "/Blog/logo.png" }]],
  theme: recoTheme({
    style: "@vuepress-reco/style-default",
    logo: "/logo.png",
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
        text: "工作",
        children: [
          //   { text: "JS", link: "/categories/gongzuo/1.html" },
          //   { text: "CSS", link: "/categories/gongzuo/1.html" },
          { text: "AI工具", link: "/tags/Ai/1.html" },
          { text: "VsCode插件", link: "/tags/VsCode/1.html" },
          { text: "浏览器插件", link: "/tags/liulanqi/1.html" },
          { text: "前端学习笔记", link: "/categories/qianduan/1.html" },
        ],
      },
      {
        text: "生活",
        children: [
          { text: "潜水", link: "/tags/qianshuizhinan/1.html" },
          { text: "心情随笔", link: "/tags/suibi/1.html" },
          { text: "有趣的网站", link: "/tags/wangzhanheji/1.html" },
        ],
      },
      { text: "归档", link: "/timeline.html" },
      // { text: "标签", link: "/tags/guanyuwo/1.html" },
      // { text: "博客", link: "/posts.html" },
      { text: "关于我", link: "/blogs/life/About" },
    ],
    commentConfig: {
      type: "valine",
      // options 与 1.x 的 valineConfig 配置一致
      options: {
        appId: "xxx",
        appKey: "xxx",
        // placeholder: '填写邮箱可以收到回复提醒哦！',
        // verify: true, // 验证码服务
        // notify: true,
        // recordIP: true,
        hideComments: true, // 隐藏评论
      },
    },
  }),
  // debug: true,
});
