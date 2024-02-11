"use strict";
const vue = require("vue");
const serverRenderer = require("vue/server-renderer");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "CoreMdWrapper",
  __ssrInlineRender: true,
  props: {
    frontmatter: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "h-full" }, _attrs))}><article class="m-a min-h-full px-6 prose"><div class="md:px-16">`);
      serverRenderer.ssrRenderSlotInner(_ctx.$slots, "default", {}, null, _push, _parent, null, true);
      _push(`</div></article></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/core/containers/CoreMdWrapper.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
exports._sfc_main = _sfc_main;
