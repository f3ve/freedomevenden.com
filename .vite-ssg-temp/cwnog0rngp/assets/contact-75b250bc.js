"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
const serverRenderer = require("vue/server-renderer");
const routeBlock = require("./route-block-7cba861b.js");
const main = require("../main.cjs");
require("vite-ssg");
require("axios");
require("pinia");
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_router_link = vue.resolveComponent("router-link");
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}><p>This is the contact page!</p>`);
  _push(serverRenderer.ssrRenderComponent(_component_router_link, { to: "/" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Home`);
      } else {
        return [
          vue.createTextVNode("Home")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
if (typeof routeBlock.block0 === "function")
  routeBlock.block0(_sfc_main);
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contact = /* @__PURE__ */ main._export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
exports.default = contact;
