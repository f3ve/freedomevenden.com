"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
const serverRenderer = require("vue/server-renderer");
const main = require("../main.cjs");
const vueRouter = require("vue-router");
const routeBlock = require("./route-block-7cba861b.js");
require("vite-ssg");
require("axios");
require("pinia");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    const blog = main.useBlogStore();
    const route = vueRouter.useRoute();
    vue.onServerPrefetch(() => {
      main.getPostBySlug(route.params.slug);
    });
    const post = vue.computed(() => blog.getPost(route.params.slug));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_vue_markdown_it = vue.resolveComponent("vue-markdown-it");
      if (vue.unref(post)) {
        _push(serverRenderer.ssrRenderComponent(_component_vue_markdown_it, vue.mergeProps({
          source: vue.unref(post).attributes.body
        }, _attrs), null, _parent));
      } else {
        _push(`<!---->`);
      }
    };
  }
});
if (typeof routeBlock.block0 === "function")
  routeBlock.block0(_sfc_main);
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/blog/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
exports.default = _sfc_main;
