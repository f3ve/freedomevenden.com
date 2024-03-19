"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const main = require("../main.cjs");
const vue$1 = require("vue");
const serverRenderer = require("vue/server-renderer");
const vue = require("@unhead/vue");
require("dayjs");
require("vue-router");
require("@vueuse/core");
require("@f3ve/vue-notify");
require("vite-ssg");
require("pinia");
const title = 404;
const description = "Page not found. It either doesn't exist or has moved";
const subtitle = "Not Found";
const meta = [{ "property": "og:title", "content": 404 }, { "name": "twitter:title", "content": 404 }, { "name": "description", "content": "Page not found. It either doesn't exist or has moved" }, { "property": "og:description", "content": "Page not found. It either doesn't exist or has moved" }, { "name": "twitter:description", "content": "Page not found. It either doesn't exist or has moved" }];
const _sfc_main = {
  __name: "[...all]",
  __ssrInlineRender: true,
  setup(__props, { expose: __expose }) {
    const frontmatter = { "title": 404, "description": "Page not found. It either doesn't exist or has moved", "subtitle": "Not Found", "meta": [{ "property": "og:title", "content": 404 }, { "name": "twitter:title", "content": 404 }, { "name": "description", "content": "Page not found. It either doesn't exist or has moved" }, { "property": "og:description", "content": "Page not found. It either doesn't exist or has moved" }, { "name": "twitter:description", "content": "Page not found. It either doesn't exist or has moved" }] };
    __expose({ frontmatter });
    const head = { "title": 404, "meta": [{ "property": "og:title", "content": 404 }, { "name": "twitter:title", "content": 404 }, { "name": "description", "content": "Page not found. It either doesn't exist or has moved" }, { "property": "og:description", "content": "Page not found. It either doesn't exist or has moved" }, { "name": "twitter:description", "content": "Page not found. It either doesn't exist or has moved" }] };
    vue.useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CoreMdWrapper = main._sfc_main;
      const _component_router_link = vue$1.resolveComponent("router-link");
      _push(serverRenderer.ssrRenderComponent(_component_CoreMdWrapper, vue$1.mergeProps({ frontmatter }, _attrs), {
        default: vue$1.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="markdown-body"${_scopeId}><p${_scopeId}>Oops! Looks like this page doesn’t exist or has moved. Thanks for checking out my site though!</p><p${_scopeId}>Click here to `);
            _push2(serverRenderer.ssrRenderComponent(_component_router_link, { to: "/" }, {
              default: vue$1.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`go back to the home page`);
                } else {
                  return [
                    vue$1.createTextVNode("go back to the home page")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</p></div>`);
          } else {
            return [
              vue$1.createVNode("div", { class: "markdown-body" }, [
                vue$1.createVNode("p", null, "Oops! Looks like this page doesn’t exist or has moved. Thanks for checking out my site though!"),
                vue$1.createVNode("p", null, [
                  vue$1.createTextVNode("Click here to "),
                  vue$1.createVNode(_component_router_link, { to: "/" }, {
                    default: vue$1.withCtx(() => [
                      vue$1.createTextVNode("go back to the home page")
                    ]),
                    _: 1
                  })
                ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/[...all].md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
exports.default = _sfc_main;
exports.description = description;
exports.meta = meta;
exports.subtitle = subtitle;
exports.title = title;
