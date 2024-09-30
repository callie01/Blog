import { f as defineComponent, _ as _export_sfc, o as openBlock, c as createElementBlock, F as Fragment, h as renderList, b as createBaseVNode, t as toDisplayString } from "./app-BeUS-Fv0.js";
const cardList = [
  {
    title: "天空之城",
    icon: "",
    link: "https://www.skypixel.com",
    remark: "全球航拍爱好者和专业摄影师的社交平台"
  },
  {
    title: "ToopBook",
    icon: "",
    link: "https://topbook.cc/overview",
    remark: "高效生活视频书"
  },
  {
    title: "今日热榜",
    icon: "",
    link: "https://tophub.today",
    remark: "网站2"
  },
  {
    title: "全历史",
    icon: "",
    link: "https://www.allhistory.com",
    remark: "网站2"
  },
  {
    title: "无水印高清壁纸",
    icon: "",
    link: "https://wall.alphacoders.com",
    remark: "网站2"
  }
];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Card",
  setup(__props, { expose: __expose }) {
    __expose();
    const __returned__ = { get cardList() {
      return cardList;
    } };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
const _hoisted_1 = { class: "demo-container" };
const _hoisted_2 = { class: "card-icon" };
const _hoisted_3 = ["src"];
const _hoisted_4 = { class: "card-Info" };
const _hoisted_5 = { class: "card-title" };
const _hoisted_6 = { class: "card-remark" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    (openBlock(true), createElementBlock(Fragment, null, renderList($setup.cardList, (item, index) => {
      return openBlock(), createElementBlock("div", {
        class: "card-container",
        key: `card_${index}`
      }, [
        createBaseVNode("div", _hoisted_2, [
          createBaseVNode("img", {
            src: item.icon || `${item.link}/favicon.ico`,
            alt: ""
          }, null, 8, _hoisted_3)
        ]),
        createBaseVNode("div", _hoisted_4, [
          createBaseVNode("div", _hoisted_5, toDisplayString(item.title), 1),
          createBaseVNode("div", _hoisted_6, toDisplayString(item.remark), 1)
        ])
      ]);
    }), 128))
  ]);
}
const Card = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "Card.vue"]]);
export {
  Card as default
};
