import { defineUserConfig } from "vuepress";
import recoTheme from "vuepress-theme-reco";
import { viteBundler } from "@vuepress/bundler-vite";
// import { webpackBundler } from "@vuepress/bundler-webpack";
// import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";
// import { watermarkPlugin } from "@vuepress/plugin-watermark";
// import { componentsPlugin } from "vuepress-plugin-components";

export default defineUserConfig({
  // host: "localhost", // ip
  port: 3100, //端口号
  title: "孜孜不倦",
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
          {
            text: "工具",
            children: [
              { text: "在线AI工具", link: "/tags/AiTool/1.html" },
              { text: "浏览器插件", link: "/tags/chajian/1.html" },
              { text: "VsCode插件", link: "/tags/chajian/1.html" },
            ],
          },
          {
            text: "笔记",
            children: [
              { text: "Vue相关", link: "/tags/kuangjia/1.html" },
              { text: "建站教程", link: "/tags/qianduan/1.html" },
              {
                text: "前端学习路线",
                link: "/tags/qianduan/1.html",
              },
            ],
          },
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
    // componentsPlugin({
    //   components: [],
    //   // 插件选项
    // }),
  ],
  debug: true,
});
