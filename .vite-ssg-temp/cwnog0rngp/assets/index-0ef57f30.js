"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
const serverRenderer = require("vue/server-renderer");
const main = require("../main.cjs");
const pinia = require("pinia");
const routeBlock = require("./route-block-7cba861b.js");
require("vite-ssg");
require("axios");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { posts } = pinia.storeToRefs(main.useBlogStore());
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = vue.resolveComponent("RouterLink");
      _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}><!--[-->`);
      serverRenderer.ssrRenderList(vue.unref(posts), (post) => {
        _push(serverRenderer.ssrRenderComponent(_component_RouterLink, {
          key: post.id,
          to: { name: "post", params: { slug: post.attributes.slug } }
        }, {
          default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${serverRenderer.ssrInterpolate(post.attributes.title)}`);
            } else {
              return [
                vue.createTextVNode(vue.toDisplayString(post.attributes.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div>`);
    };
  }
});
if (typeof routeBlock.block0 === "function")
  routeBlock.block0(_sfc_main);
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/blog/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
exports.default = _sfc_main;
