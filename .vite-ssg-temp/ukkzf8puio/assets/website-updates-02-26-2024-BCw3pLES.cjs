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
const title = "Website Updates February 26th, 2024";
const datePublished = "2024-02-26T12:00:00.000Z";
const description = "Recent updates to Freedom Evenden's website.";
const meta = [{ "name": "type", "content": "article" }, { "property": "og:title", "content": "Website Updates February 26th, 2024" }, { "name": "twitter:title", "content": "Website Updates February 26th, 2024" }, { "name": "description", "content": "Recent updates to Freedom Evenden's website." }, { "property": "og:description", "content": "Recent updates to Freedom Evenden's website." }, { "name": "twitter:description", "content": "Recent updates to Freedom Evenden's website." }];
const _sfc_main = {
  __name: "website-updates-02-26-2024",
  __ssrInlineRender: true,
  setup(__props, { expose: __expose }) {
    const frontmatter = { "title": "Website Updates February 26th, 2024", "datePublished": "2024-02-26T12:00:00.000Z", "description": "Recent updates to Freedom Evenden's website.", "meta": [{ "name": "type", "content": "article" }, { "property": "og:title", "content": "Website Updates February 26th, 2024" }, { "name": "twitter:title", "content": "Website Updates February 26th, 2024" }, { "name": "description", "content": "Recent updates to Freedom Evenden's website." }, { "property": "og:description", "content": "Recent updates to Freedom Evenden's website." }, { "name": "twitter:description", "content": "Recent updates to Freedom Evenden's website." }] };
    __expose({ frontmatter });
    const head = { "title": "Website Updates February 26th, 2024", "meta": [{ "name": "type", "content": "article" }, { "property": "og:title", "content": "Website Updates February 26th, 2024" }, { "name": "twitter:title", "content": "Website Updates February 26th, 2024" }, { "name": "description", "content": "Recent updates to Freedom Evenden's website." }, { "property": "og:description", "content": "Recent updates to Freedom Evenden's website." }, { "name": "twitter:description", "content": "Recent updates to Freedom Evenden's website." }] };
    vue.useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CoreMdWrapper = main._sfc_main;
      const _component_RouterLink = vue$1.resolveComponent("RouterLink");
      _push(serverRenderer.ssrRenderComponent(_component_CoreMdWrapper, vue$1.mergeProps({ frontmatter }, _attrs), {
        default: vue$1.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="markdown-body"${_scopeId}><h2 id="changes" tabindex="-1"${_scopeId}><a class="header-anchor" href="#changes"${_scopeId}>Changes</a></h2><ol${_scopeId}><li${_scopeId}>Changed the website theme. Dark theme is based on the <a href="https://draculatheme.com/" target="_blank" rel="noopener"${_scopeId}>Dracula Theme</a>. Light theme is my own design, but based on the colors of Dracula.</li><li${_scopeId}>Changed from <a href="https://github.com/posva/unplugin-vue-router" target="_blank" rel="noopener"${_scopeId}>unplugin-vue-router</a> to <a href="https://github.com/hannoeru/vite-plugin-pages" target="_blank" rel="noopener"${_scopeId}>vite-plugin-pages</a>. While I think unplugin-vue-router is a great library, it’s still marked as experimental. I ran into some issues with <code class="hljs"${_scopeId}>typed-router.d.ts</code> in their latest update, so I decided to switch back to vite-plugin-pages since it seems more stable right now.</li><li${_scopeId}>Fixed some css file preloading issues. I think I finally fixed the light theme flash when site is first loaded in dark mode.</li><li${_scopeId}>Dropped the experimental features I was working on.</li><li${_scopeId}>Got the `);
            _push2(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/contact" }, {
              default: vue$1.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`contact form`);
                } else {
                  return [
                    vue$1.createTextVNode("contact form")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` working.</li></ol><h2 id="summary" tabindex="-1"${_scopeId}><a class="header-anchor" href="#summary"${_scopeId}>Summary</a></h2><p${_scopeId}>This update focused on cleaning things up and getting my site into a finalized state. I think from here I’m going to focus on just blogging and maybe cleaning up a couple things here or there. Overall I’m happy with the state the site. It feels good to use, I like how it looks, and it finally feels a little more like my internet home.</p></div>`);
          } else {
            return [
              vue$1.createVNode("div", { class: "markdown-body" }, [
                vue$1.createVNode("h2", {
                  id: "changes",
                  tabindex: "-1"
                }, [
                  vue$1.createVNode("a", {
                    class: "header-anchor",
                    href: "#changes"
                  }, "Changes")
                ]),
                vue$1.createVNode("ol", null, [
                  vue$1.createVNode("li", null, [
                    vue$1.createTextVNode("Changed the website theme. Dark theme is based on the "),
                    vue$1.createVNode("a", {
                      href: "https://draculatheme.com/",
                      target: "_blank",
                      rel: "noopener"
                    }, "Dracula Theme"),
                    vue$1.createTextVNode(". Light theme is my own design, but based on the colors of Dracula.")
                  ]),
                  vue$1.createVNode("li", null, [
                    vue$1.createTextVNode("Changed from "),
                    vue$1.createVNode("a", {
                      href: "https://github.com/posva/unplugin-vue-router",
                      target: "_blank",
                      rel: "noopener"
                    }, "unplugin-vue-router"),
                    vue$1.createTextVNode(" to "),
                    vue$1.createVNode("a", {
                      href: "https://github.com/hannoeru/vite-plugin-pages",
                      target: "_blank",
                      rel: "noopener"
                    }, "vite-plugin-pages"),
                    vue$1.createTextVNode(". While I think unplugin-vue-router is a great library, it’s still marked as experimental. I ran into some issues with "),
                    vue$1.createVNode("code", { class: "hljs" }, "typed-router.d.ts"),
                    vue$1.createTextVNode(" in their latest update, so I decided to switch back to vite-plugin-pages since it seems more stable right now.")
                  ]),
                  vue$1.createVNode("li", null, "Fixed some css file preloading issues. I think I finally fixed the light theme flash when site is first loaded in dark mode."),
                  vue$1.createVNode("li", null, "Dropped the experimental features I was working on."),
                  vue$1.createVNode("li", null, [
                    vue$1.createTextVNode("Got the "),
                    vue$1.createVNode(_component_RouterLink, { to: "/contact" }, {
                      default: vue$1.withCtx(() => [
                        vue$1.createTextVNode("contact form")
                      ]),
                      _: 1
                    }),
                    vue$1.createTextVNode(" working.")
                  ])
                ]),
                vue$1.createVNode("h2", {
                  id: "summary",
                  tabindex: "-1"
                }, [
                  vue$1.createVNode("a", {
                    class: "header-anchor",
                    href: "#summary"
                  }, "Summary")
                ]),
                vue$1.createVNode("p", null, "This update focused on cleaning things up and getting my site into a finalized state. I think from here I’m going to focus on just blogging and maybe cleaning up a couple things here or there. Overall I’m happy with the state the site. It feels good to use, I like how it looks, and it finally feels a little more like my internet home.")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/blog/website-updates-02-26-2024.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
exports.datePublished = datePublished;
exports.default = _sfc_main;
exports.description = description;
exports.meta = meta;
exports.title = title;
