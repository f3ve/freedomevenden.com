"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const main = require("../main.cjs");
const vue$1 = require("vue");
const serverRenderer = require("vue/server-renderer");
const vue = require("@unhead/vue");
require("dayjs");
require("@vueuse/core");
require("vite-ssg");
const title = "Contact";
const meta = [{ "property": "og:title", "content": "Contact" }, { "name": "twitter:title", "content": "Contact" }];
const _sfc_main = {
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props, { expose: __expose }) {
    const frontmatter = { "title": "Contact", "meta": [{ "property": "og:title", "content": "Contact" }, { "name": "twitter:title", "content": "Contact" }] };
    __expose({ frontmatter });
    const head = { "title": "Contact", "meta": [{ "property": "og:title", "content": "Contact" }, { "name": "twitter:title", "content": "Contact" }] };
    vue.useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CoreMdWrapper = main._sfc_main;
      _push(serverRenderer.ssrRenderComponent(_component_CoreMdWrapper, vue$1.mergeProps({ frontmatter }, _attrs), {
        default: vue$1.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="markdown-body"${_scopeId}><p${_scopeId}>Contact me!</p></div>`);
          } else {
            return [
              vue$1.createVNode("div", { class: "markdown-body" }, [
                vue$1.createVNode("p", null, "Contact me!")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue$1.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/contact.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
exports.default = _sfc_main;
exports.meta = meta;
exports.title = title;
