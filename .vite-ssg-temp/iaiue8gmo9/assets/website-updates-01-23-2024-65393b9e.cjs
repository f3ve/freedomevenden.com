"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const CoreMdWrapper = require("./CoreMdWrapper-d6481cae.cjs");
const vue$1 = require("vue");
const serverRenderer = require("vue/server-renderer");
const vue = require("@unhead/vue");
const title = "Website Update January 29th, 2024";
const datePublished = "2024-01-29T00:00:00.000Z";
const description = "Recent updates to Freedom Evenden's website.";
const meta = [{ "name": "type", "content": "article" }, { "property": "og:title", "content": "Website Update January 29th, 2024" }, { "name": "twitter:title", "content": "Website Update January 29th, 2024" }, { "name": "description", "content": "Recent updates to Freedom Evenden's website." }, { "property": "og:description", "content": "Recent updates to Freedom Evenden's website." }, { "name": "twitter:description", "content": "Recent updates to Freedom Evenden's website." }];
const _sfc_main = {
  __name: "website-updates-01-23-2024",
  __ssrInlineRender: true,
  setup(__props, { expose: __expose }) {
    const frontmatter = { "title": "Website Update January 29th, 2024", "datePublished": "2024-01-29T00:00:00.000Z", "description": "Recent updates to Freedom Evenden's website.", "meta": [{ "name": "type", "content": "article" }, { "property": "og:title", "content": "Website Update January 29th, 2024" }, { "name": "twitter:title", "content": "Website Update January 29th, 2024" }, { "name": "description", "content": "Recent updates to Freedom Evenden's website." }, { "property": "og:description", "content": "Recent updates to Freedom Evenden's website." }, { "name": "twitter:description", "content": "Recent updates to Freedom Evenden's website." }] };
    __expose({ frontmatter });
    const head = { "title": "Website Update January 29th, 2024", "meta": [{ "name": "type", "content": "article" }, { "property": "og:title", "content": "Website Update January 29th, 2024" }, { "name": "twitter:title", "content": "Website Update January 29th, 2024" }, { "name": "description", "content": "Recent updates to Freedom Evenden's website." }, { "property": "og:description", "content": "Recent updates to Freedom Evenden's website." }, { "name": "twitter:description", "content": "Recent updates to Freedom Evenden's website." }] };
    vue.useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CoreMdWrapper = CoreMdWrapper._sfc_main;
      _push(serverRenderer.ssrRenderComponent(_component_CoreMdWrapper, vue$1.mergeProps({ frontmatter }, _attrs), {
        default: vue$1.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="markdown-body"${_scopeId}><h2 id="table-of-contents" tabindex="-1"${_scopeId}><a class="header-anchor" href="#table-of-contents"${_scopeId}>Table of Contents</a></h2><p${_scopeId}><div class="table-of-contents"${_scopeId}><ul${_scopeId}><li${_scopeId}><a href="#table-of-contents"${_scopeId}>Table of Contents</a></li><li${_scopeId}><a href="#what%E2%80%99s-changed"${_scopeId}>What’s Changed</a></li><li${_scopeId}><a href="#future-plans"${_scopeId}>Future plans</a></li></ul></div></p><h2 id="what%E2%80%99s-changed" tabindex="-1"${_scopeId}><a class="header-anchor" href="#what%E2%80%99s-changed"${_scopeId}>What’s Changed</a></h2><ol${_scopeId}><li${_scopeId}>Added a website search bar.</li><li${_scopeId}>Added a wiki page. <ol${_scopeId}><li${_scopeId}>Will use this for general notes and informal posts.</li><li${_scopeId}>Not super happy with the collapsible link list yet. Will have to play around with it some more.</li></ol></li><li${_scopeId}>Added a uses page. <ol${_scopeId}><li${_scopeId}>Inspired by <a href="https://christianoliff.com/uses/" target="_blank" rel="noopener"${_scopeId}>Christian Oliff</a>.</li></ol></li></ol><h2 id="future-plans" tabindex="-1"${_scopeId}><a class="header-anchor" href="#future-plans"${_scopeId}>Future plans</a></h2><p${_scopeId}>I want to flesh out the wiki page some more and improve the functionality of the collapsible navigation list. I also want to get into a daily habit of writing. I’ll be using the wiki for generally daily notes since it will be a bit more informal. It will also likely consist of pages that may be updated or change over time. In general blog posts will be treated a bit more formally and I’ll avoid editing them except for typos or misspellings.</p></div>`);
          } else {
            return [
              vue$1.createVNode("div", { class: "markdown-body" }, [
                vue$1.createVNode("h2", {
                  id: "table-of-contents",
                  tabindex: "-1"
                }, [
                  vue$1.createVNode("a", {
                    class: "header-anchor",
                    href: "#table-of-contents"
                  }, "Table of Contents")
                ]),
                vue$1.createVNode("p", null, [
                  vue$1.createVNode("div", { class: "table-of-contents" }, [
                    vue$1.createVNode("ul", null, [
                      vue$1.createVNode("li", null, [
                        vue$1.createVNode("a", { href: "#table-of-contents" }, "Table of Contents")
                      ]),
                      vue$1.createVNode("li", null, [
                        vue$1.createVNode("a", { href: "#what%E2%80%99s-changed" }, "What’s Changed")
                      ]),
                      vue$1.createVNode("li", null, [
                        vue$1.createVNode("a", { href: "#future-plans" }, "Future plans")
                      ])
                    ])
                  ])
                ]),
                vue$1.createVNode("h2", {
                  id: "what%E2%80%99s-changed",
                  tabindex: "-1"
                }, [
                  vue$1.createVNode("a", {
                    class: "header-anchor",
                    href: "#what%E2%80%99s-changed"
                  }, "What’s Changed")
                ]),
                vue$1.createVNode("ol", null, [
                  vue$1.createVNode("li", null, "Added a website search bar."),
                  vue$1.createVNode("li", null, [
                    vue$1.createTextVNode("Added a wiki page. "),
                    vue$1.createVNode("ol", null, [
                      vue$1.createVNode("li", null, "Will use this for general notes and informal posts."),
                      vue$1.createVNode("li", null, "Not super happy with the collapsible link list yet. Will have to play around with it some more.")
                    ])
                  ]),
                  vue$1.createVNode("li", null, [
                    vue$1.createTextVNode("Added a uses page. "),
                    vue$1.createVNode("ol", null, [
                      vue$1.createVNode("li", null, [
                        vue$1.createTextVNode("Inspired by "),
                        vue$1.createVNode("a", {
                          href: "https://christianoliff.com/uses/",
                          target: "_blank",
                          rel: "noopener"
                        }, "Christian Oliff"),
                        vue$1.createTextVNode(".")
                      ])
                    ])
                  ])
                ]),
                vue$1.createVNode("h2", {
                  id: "future-plans",
                  tabindex: "-1"
                }, [
                  vue$1.createVNode("a", {
                    class: "header-anchor",
                    href: "#future-plans"
                  }, "Future plans")
                ]),
                vue$1.createVNode("p", null, "I want to flesh out the wiki page some more and improve the functionality of the collapsible navigation list. I also want to get into a daily habit of writing. I’ll be using the wiki for generally daily notes since it will be a bit more informal. It will also likely consist of pages that may be updated or change over time. In general blog posts will be treated a bit more formally and I’ll avoid editing them except for typos or misspellings.")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/blog/website-updates-01-23-2024.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
exports.datePublished = datePublished;
exports.default = _sfc_main;
exports.description = description;
exports.meta = meta;
exports.title = title;
