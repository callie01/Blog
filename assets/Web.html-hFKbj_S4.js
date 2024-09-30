import { f as defineComponent, g as ref, _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, b as createBaseVNode, e as createVNode } from "./app-BeUS-Fv0.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Web.html",
  setup(__props, { expose: __expose }) {
    __expose();
    const list = ref([
      {
        title: "无水印高清壁纸",
        icon: "",
        link: "https://wall.alphacoders.com",
        remark: "网站2"
      },
      {
        title: "天空之城",
        icon: "",
        link: "https://www.skypixel.com",
        remark: "全球航拍爱好者和专业摄影师的社交平台"
      }
    ]);
    const __returned__ = { list };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Card = resolveComponent("Card");
  return openBlock(), createElementBlock("div", null, [
    _cache[0] || (_cache[0] = createBaseVNode("h2", {
      id: "摄影-壁纸",
      tabindex: "-1"
    }, [
      createBaseVNode("a", {
        class: "header-anchor",
        href: "#摄影-壁纸"
      }, [
        createBaseVNode("span", null, "摄影/壁纸")
      ])
    ], -1)),
    createVNode(_component_Card, { list: $setup.list }, null, 8, ["list"])
  ]);
}
const Web_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "Web.html.vue"]]);
const data = JSON.parse('{"path":"/blogs/life/Web.html","title":"有趣的网站","lang":"en-US","frontmatter":{"title":"有趣的网站","date":"2024/09/11","tags":["网站合集"],"categories":["生活"]},"headers":[{"level":2,"title":"摄影/壁纸","slug":"摄影-壁纸","link":"#摄影-壁纸","children":[]}],"git":{"createdTime":1726071554000,"updatedTime":1727177359000,"contributors":[{"name":"callie01","email":"callie99@163.com","commits":2}]},"filePathRelative":"blogs/life/Web.md"}');
export {
  Web_html as comp,
  data
};
