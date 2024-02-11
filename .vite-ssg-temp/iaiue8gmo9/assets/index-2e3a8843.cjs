"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const CoreMdWrapper = require("./CoreMdWrapper-d6481cae.cjs");
const vue$1 = require("vue");
const serverRenderer = require("vue/server-renderer");
const vue = require("@unhead/vue");
const title = "Freedom Evenden";
const description = "Freedom Evenden's personal website";
const image = "/images/eugene-golovesov-T7xcXo5iNEo-unsplash.jpg";
const meta = [{ "name": "keywords", "content": "freedom evenden,freedom,evenden,programmer,obskur,f3ve" }, { "name": "type", "content": "website" }, { "property": "og:title", "content": "Freedom Evenden" }, { "name": "twitter:title", "content": "Freedom Evenden" }, { "name": "description", "content": "Freedom Evenden's personal website" }, { "property": "og:description", "content": "Freedom Evenden's personal website" }, { "name": "twitter:description", "content": "Freedom Evenden's personal website" }, { "property": "og:image", "content": "/images/eugene-golovesov-T7xcXo5iNEo-unsplash.jpg" }, { "name": "twitter:image", "content": "/images/eugene-golovesov-T7xcXo5iNEo-unsplash.jpg" }, { "name": "twitter:card", "content": "summary_large_image" }];
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props, { expose: __expose }) {
    const frontmatter = { "title": "Freedom Evenden", "description": "Freedom Evenden's personal website", "image": "/images/eugene-golovesov-T7xcXo5iNEo-unsplash.jpg", "meta": [{ "name": "keywords", "content": "freedom evenden,freedom,evenden,programmer,obskur,f3ve" }, { "name": "type", "content": "website" }, { "property": "og:title", "content": "Freedom Evenden" }, { "name": "twitter:title", "content": "Freedom Evenden" }, { "name": "description", "content": "Freedom Evenden's personal website" }, { "property": "og:description", "content": "Freedom Evenden's personal website" }, { "name": "twitter:description", "content": "Freedom Evenden's personal website" }, { "property": "og:image", "content": "/images/eugene-golovesov-T7xcXo5iNEo-unsplash.jpg" }, { "name": "twitter:image", "content": "/images/eugene-golovesov-T7xcXo5iNEo-unsplash.jpg" }, { "name": "twitter:card", "content": "summary_large_image" }] };
    __expose({ frontmatter });
    const head = { "title": "Freedom Evenden", "meta": [{ "name": "keywords", "content": "freedom evenden,freedom,evenden,programmer,obskur,f3ve" }, { "name": "type", "content": "website" }, { "property": "og:title", "content": "Freedom Evenden" }, { "name": "twitter:title", "content": "Freedom Evenden" }, { "name": "description", "content": "Freedom Evenden's personal website" }, { "property": "og:description", "content": "Freedom Evenden's personal website" }, { "name": "twitter:description", "content": "Freedom Evenden's personal website" }, { "property": "og:image", "content": "/images/eugene-golovesov-T7xcXo5iNEo-unsplash.jpg" }, { "name": "twitter:image", "content": "/images/eugene-golovesov-T7xcXo5iNEo-unsplash.jpg" }, { "name": "twitter:card", "content": "summary_large_image" }] };
    vue.useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CoreMdWrapper = CoreMdWrapper._sfc_main;
      const _component_RouterLink = vue$1.resolveComponent("RouterLink");
      _push(serverRenderer.ssrRenderComponent(_component_CoreMdWrapper, vue$1.mergeProps({ frontmatter }, _attrs), {
        default: vue$1.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="markdown-body"${_scopeId}><p${_scopeId}>Hey 👋, I’m Freedom. Thanks for checking out my little corner of the internet. I’m a Software Engineer and Web Developer based in Alaska. I’m currently working at <a href="https://obskur.com" target="_blank" rel="noopener"${_scopeId}>OBSKUR</a>. I’m an active open-sourcer and maintain a few `);
            _push2(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/projects" }, {
              default: vue$1.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`open-source projects`);
                } else {
                  return [
                    vue$1.createTextVNode("open-source projects")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</p><p${_scopeId}>Outside of programming, I’m a husband and father. My wife and I live in a cabin in the woods with our daughter and our kitty. I’m also a gym-goer and an avid gamer.</p><p${_scopeId}>If you’re interested in supporting me and my work, consider <a href="https://www.buymeacoffee.com/f3ve" target="_blank" rel="noopener"${_scopeId}>buying me a beer 🍺</a> or <a href="https://github.com/sponsors/f3ve" target="_blank" rel="noopener"${_scopeId}>sponsoring me on GitHub</a>.</p></div>`);
          } else {
            return [
              vue$1.createVNode("div", { class: "markdown-body" }, [
                vue$1.createVNode("p", null, [
                  vue$1.createTextVNode("Hey 👋, I’m Freedom. Thanks for checking out my little corner of the internet. I’m a Software Engineer and Web Developer based in Alaska. I’m currently working at "),
                  vue$1.createVNode("a", {
                    href: "https://obskur.com",
                    target: "_blank",
                    rel: "noopener"
                  }, "OBSKUR"),
                  vue$1.createTextVNode(". I’m an active open-sourcer and maintain a few "),
                  vue$1.createVNode(_component_RouterLink, { to: "/projects" }, {
                    default: vue$1.withCtx(() => [
                      vue$1.createTextVNode("open-source projects")
                    ]),
                    _: 1
                  })
                ]),
                vue$1.createVNode("p", null, "Outside of programming, I’m a husband and father. My wife and I live in a cabin in the woods with our daughter and our kitty. I’m also a gym-goer and an avid gamer."),
                vue$1.createVNode("p", null, [
                  vue$1.createTextVNode("If you’re interested in supporting me and my work, consider "),
                  vue$1.createVNode("a", {
                    href: "https://www.buymeacoffee.com/f3ve",
                    target: "_blank",
                    rel: "noopener"
                  }, "buying me a beer 🍺"),
                  vue$1.createTextVNode(" or "),
                  vue$1.createVNode("a", {
                    href: "https://github.com/sponsors/f3ve",
                    target: "_blank",
                    rel: "noopener"
                  }, "sponsoring me on GitHub"),
                  vue$1.createTextVNode(".")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
exports.default = _sfc_main;
exports.description = description;
exports.image = image;
exports.meta = meta;
exports.title = title;
