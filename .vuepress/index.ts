import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";

export default {
  plugins: [
    mdEnhancePlugin({
      // 你的选项
      component: true,
      tabs: true,
    }),
  ],
};
