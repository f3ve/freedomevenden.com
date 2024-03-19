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
const title = "Contact Error - Freedom Evenden";
const description = "The contact form experienced an error.";
const subtitle = "Oops!";
const meta = [{ "property": "og:title", "content": "Contact Error - Freedom Evenden" }, { "name": "twitter:title", "content": "Contact Error - Freedom Evenden" }, { "name": "description", "content": "The contact form experienced an error." }, { "property": "og:description", "content": "The contact form experienced an error." }, { "name": "twitter:description", "content": "The contact form experienced an error." }];
const _sfc_main = {
  __name: "error",
  __ssrInlineRender: true,
  setup(__props, { expose: __expose }) {
    const frontmatter = { "title": "Contact Error - Freedom Evenden", "description": "The contact form experienced an error.", "subtitle": "Oops!", "meta": [{ "property": "og:title", "content": "Contact Error - Freedom Evenden" }, { "name": "twitter:title", "content": "Contact Error - Freedom Evenden" }, { "name": "description", "content": "The contact form experienced an error." }, { "property": "og:description", "content": "The contact form experienced an error." }, { "name": "twitter:description", "content": "The contact form experienced an error." }] };
    __expose({ frontmatter });
    const head = { "title": "Contact Error - Freedom Evenden", "meta": [{ "property": "og:title", "content": "Contact Error - Freedom Evenden" }, { "name": "twitter:title", "content": "Contact Error - Freedom Evenden" }, { "name": "description", "content": "The contact form experienced an error." }, { "property": "og:description", "content": "The contact form experienced an error." }, { "name": "twitter:description", "content": "The contact form experienced an error." }] };
    vue.useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CoreMdWrapper = main._sfc_main;
      const _component_RouterLink = vue$1.resolveComponent("RouterLink");
      _push(serverRenderer.ssrRenderComponent(_component_CoreMdWrapper, vue$1.mergeProps({ frontmatter }, _attrs), {
        default: vue$1.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="markdown-body"${_scopeId}><p${_scopeId}>There was an error. Sorry about that. Please try again later.</p><p${_scopeId}>If issue persists you can <a href="https://github.com/f3ve/freedomevenden.com/issues" target="_blank" rel="noopener"${_scopeId}>open an issue on GitHub</a></p><p${_scopeId}>`);
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
                vue$1.createVNode("p", null, "There was an error. Sorry about that. Please try again later."),
                vue$1.createVNode("p", null, [
                  vue$1.createTextVNode("If issue persists you can "),
                  vue$1.createVNode("a", {
                    href: "https://github.com/f3ve/freedomevenden.com/issues",
                    target: "_blank",
                    rel: "noopener"
                  }, "open an issue on GitHub")
                ]),
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/contact/error.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
exports.default = _sfc_main;
exports.description = description;
exports.meta = meta;
exports.subtitle = subtitle;
exports.title = title;
