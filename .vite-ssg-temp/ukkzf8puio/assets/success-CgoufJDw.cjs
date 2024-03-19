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
const title = "Contact Success - Freedom Evenden";
const description = "Your message was successfully sent.";
const subtitle = "Thanks for contacting me!";
const meta = [{ "name": "keywords", "content": "contact,freedom,evenden,email,contact freedom evenden" }, { "property": "og:title", "content": "Contact Success - Freedom Evenden" }, { "name": "twitter:title", "content": "Contact Success - Freedom Evenden" }, { "name": "description", "content": "Your message was successfully sent." }, { "property": "og:description", "content": "Your message was successfully sent." }, { "name": "twitter:description", "content": "Your message was successfully sent." }];
const _sfc_main = {
  __name: "success",
  __ssrInlineRender: true,
  setup(__props, { expose: __expose }) {
    const frontmatter = { "title": "Contact Success - Freedom Evenden", "description": "Your message was successfully sent.", "subtitle": "Thanks for contacting me!", "meta": [{ "name": "keywords", "content": "contact,freedom,evenden,email,contact freedom evenden" }, { "property": "og:title", "content": "Contact Success - Freedom Evenden" }, { "name": "twitter:title", "content": "Contact Success - Freedom Evenden" }, { "name": "description", "content": "Your message was successfully sent." }, { "property": "og:description", "content": "Your message was successfully sent." }, { "name": "twitter:description", "content": "Your message was successfully sent." }] };
    __expose({ frontmatter });
    const head = { "title": "Contact Success - Freedom Evenden", "meta": [{ "name": "keywords", "content": "contact,freedom,evenden,email,contact freedom evenden" }, { "property": "og:title", "content": "Contact Success - Freedom Evenden" }, { "name": "twitter:title", "content": "Contact Success - Freedom Evenden" }, { "name": "description", "content": "Your message was successfully sent." }, { "property": "og:description", "content": "Your message was successfully sent." }, { "name": "twitter:description", "content": "Your message was successfully sent." }] };
    vue.useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CoreMdWrapper = main._sfc_main;
      const _component_RouterLink = vue$1.resolveComponent("RouterLink");
      _push(serverRenderer.ssrRenderComponent(_component_CoreMdWrapper, vue$1.mergeProps({ frontmatter }, _attrs), {
        default: vue$1.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="markdown-body"${_scopeId}><p${_scopeId}>Your message was successfully sent! Thank you!</p><p${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/" }, {
              default: vue$1.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`&lt;- Back to site`);
                } else {
                  return [
                    vue$1.createTextVNode("<- Back to site")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</p></div>`);
          } else {
            return [
              vue$1.createVNode("div", { class: "markdown-body" }, [
                vue$1.createVNode("p", null, "Your message was successfully sent! Thank you!"),
                vue$1.createVNode("p", null, [
                  vue$1.createVNode(_component_RouterLink, { to: "/" }, {
                    default: vue$1.withCtx(() => [
                      vue$1.createTextVNode("<- Back to site")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/contact/success.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
exports.default = _sfc_main;
exports.description = description;
exports.meta = meta;
exports.subtitle = subtitle;
exports.title = title;
