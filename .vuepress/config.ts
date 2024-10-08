import { defineUserConfig } from "vuepress";
import recoTheme from "vuepress-theme-reco";
import { viteBundler } from "@vuepress/bundler-vite";
import { componentsPlugin } from "vuepress-plugin-components";

export default defineUserConfig({
  // host: "localhost", // ip
  port: 8889, //端口号
  title: "孜孜不倦",
  description: "CallieLi's Blog",
  base: "/",
  bundler: viteBundler(),
  // bundler: webpackBundler(),
  head: [["link", { rel: "icon", href: "/logo.png" }]],
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
          {
            text: "工具",
            children: [
              { text: "AI工具", link: "/blogs/work/AiTool.html" },
              { text: "常用插件", link: "/tags/chajian/1.html" },
            ],
          },
          {
            text: "笔记",
            children: [
              { text: "框架", link: "/tags/kuangjia/1.html" },
              { text: "建站教程", link: "/blogs/work/WebSite.html" },
              {
                text: "前端学习路线",
                link: "/blogs/work/LearningPath.html",
              },
            ],
          },
        ],
      },
      {
        text: "生活",
        children: [
          { text: "游泳", link: "/blogs/life/Swimming.html" },
          { text: "潜水", link: "/tags/qianshui/1.html" },
          { text: "心情随笔", link: "/tags/suibi/1.html" },
        ],
      },
      { text: "归档", link: "/timeline.html" },
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
  // //插件配置
  plugins: [
    // mdEnhancePlugin({
    //   component: true,
    //   tabs: true,
    // }),
    componentsPlugin({
      components: ["BiliBili", "VPCard"],
      // 插件选项
    }),
  ],
  debug: true,
});
