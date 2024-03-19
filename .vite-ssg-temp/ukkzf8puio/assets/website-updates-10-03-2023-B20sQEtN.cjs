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
const title = "Website Update October 3rd, 2023";
const datePublished = "2023-10-04T00:00:00.000Z";
const description = "I made some small changes to the layout, added social links, and more.";
const meta = [{ "name": "type", "content": "article" }, { "property": "og:title", "content": "Website Update October 3rd, 2023" }, { "name": "twitter:title", "content": "Website Update October 3rd, 2023" }, { "name": "description", "content": "I made some small changes to the layout, added social links, and more." }, { "property": "og:description", "content": "I made some small changes to the layout, added social links, and more." }, { "name": "twitter:description", "content": "I made some small changes to the layout, added social links, and more." }];
const _sfc_main = {
  __name: "website-updates-10-03-2023",
  __ssrInlineRender: true,
  setup(__props, { expose: __expose }) {
    const frontmatter = { "title": "Website Update October 3rd, 2023", "datePublished": "2023-10-04T00:00:00.000Z", "description": "I made some small changes to the layout, added social links, and more.", "meta": [{ "name": "type", "content": "article" }, { "property": "og:title", "content": "Website Update October 3rd, 2023" }, { "name": "twitter:title", "content": "Website Update October 3rd, 2023" }, { "name": "description", "content": "I made some small changes to the layout, added social links, and more." }, { "property": "og:description", "content": "I made some small changes to the layout, added social links, and more." }, { "name": "twitter:description", "content": "I made some small changes to the layout, added social links, and more." }] };
    __expose({ frontmatter });
    const head = { "title": "Website Update October 3rd, 2023", "meta": [{ "name": "type", "content": "article" }, { "property": "og:title", "content": "Website Update October 3rd, 2023" }, { "name": "twitter:title", "content": "Website Update October 3rd, 2023" }, { "name": "description", "content": "I made some small changes to the layout, added social links, and more." }, { "property": "og:description", "content": "I made some small changes to the layout, added social links, and more." }, { "name": "twitter:description", "content": "I made some small changes to the layout, added social links, and more." }] };
    vue.useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CoreMdWrapper = main._sfc_main;
      _push(serverRenderer.ssrRenderComponent(_component_CoreMdWrapper, vue$1.mergeProps({ frontmatter }, _attrs), {
        default: vue$1.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="markdown-body"${_scopeId}><h2 id="table-of-contents" tabindex="-1"${_scopeId}><a class="header-anchor" href="#table-of-contents"${_scopeId}>Table of Contents</a></h2><p${_scopeId}><div class="table-of-contents"${_scopeId}><ul${_scopeId}><li${_scopeId}><a href="#table-of-contents"${_scopeId}>Table of Contents</a></li><li${_scopeId}><a href="#what%E2%80%99s-changed"${_scopeId}>What’s changed</a></li><li${_scopeId}><a href="#future-changes."${_scopeId}>Future Changes.</a></li><li${_scopeId}><a href="#conclusion"${_scopeId}>Conclusion</a></li></ul></div></p><h2 id="what%E2%80%99s-changed" tabindex="-1"${_scopeId}><a class="header-anchor" href="#what%E2%80%99s-changed"${_scopeId}>What’s changed</a></h2><ol${_scopeId}><li${_scopeId}>I made some small changes to the layout of the header bar. <ul${_scopeId}><li${_scopeId}>Added my logo.</li><li${_scopeId}>Moved Site nav links to the left side.</li><li${_scopeId}>Added social links to the right side.</li></ul></li><li${_scopeId}>Responsiveness <ul${_scopeId}><li${_scopeId}>Header links collapse into hamburger icon.</li><li${_scopeId}>Added a dropdown menu.</li></ul></li><li${_scopeId}>Changed the theme toggle icons because they didn’t have the same grid layout as the other icons that I’m using</li><li${_scopeId}>Added improved hover animations on buttons and other clickable elements.</li><li${_scopeId}>Added a fade transitions when navigating between pages.</li><li${_scopeId}>Improved site metadata by adding an <code class="hljs"${_scopeId}>og:image</code> and <code class="hljs"${_scopeId}>twitter:image</code> tags.</li></ol><h2 id="future-changes." tabindex="-1"${_scopeId}><a class="header-anchor" href="#future-changes."${_scopeId}>Future Changes.</a></h2><p${_scopeId}>There’s a couple of <a href="https://github.com/f3ve/freedomevenden.com/issues/8" target="_blank" rel="noopener"${_scopeId}>accessibility improvements</a> I need to make. As well as an annoying bug where the page <a href="https://github.com/f3ve/freedomevenden.com/issues/8" target="_blank" rel="noopener"${_scopeId}>flashes black or white</a> when you load the page. I had thought I fixed it by attaching a script tag in the header to manually set the theme but that doesn’t seem to be working. Either my code is wrong or there’s an issue somewhere else. I’ll have to investigate further.</p><p${_scopeId}>If you want to follow planned updates to this website feel free to view the <a href="https://github.com/f3ve/freedomevenden.com/issues" target="_blank" rel="noopener"${_scopeId}>issues page</a> on GitHub.</p><h2 id="conclusion" tabindex="-1"${_scopeId}><a class="header-anchor" href="#conclusion"${_scopeId}>Conclusion</a></h2><p${_scopeId}>I meant to publish this post yesterday when all the changes went out but I got distracted. I’ll probably continue to do posts like this any time I make updates to the website 😄.</p><p${_scopeId}>Thanks for reading!</p></div>`);
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
                        vue$1.createVNode("a", { href: "#what%E2%80%99s-changed" }, "What’s changed")
                      ]),
                      vue$1.createVNode("li", null, [
                        vue$1.createVNode("a", { href: "#future-changes." }, "Future Changes.")
                      ]),
                      vue$1.createVNode("li", null, [
                        vue$1.createVNode("a", { href: "#conclusion" }, "Conclusion")
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
                  }, "What’s changed")
                ]),
                vue$1.createVNode("ol", null, [
                  vue$1.createVNode("li", null, [
                    vue$1.createTextVNode("I made some small changes to the layout of the header bar. "),
                    vue$1.createVNode("ul", null, [
                      vue$1.createVNode("li", null, "Added my logo."),
                      vue$1.createVNode("li", null, "Moved Site nav links to the left side."),
                      vue$1.createVNode("li", null, "Added social links to the right side.")
                    ])
                  ]),
                  vue$1.createVNode("li", null, [
                    vue$1.createTextVNode("Responsiveness "),
                    vue$1.createVNode("ul", null, [
                      vue$1.createVNode("li", null, "Header links collapse into hamburger icon."),
                      vue$1.createVNode("li", null, "Added a dropdown menu.")
                    ])
                  ]),
                  vue$1.createVNode("li", null, "Changed the theme toggle icons because they didn’t have the same grid layout as the other icons that I’m using"),
                  vue$1.createVNode("li", null, "Added improved hover animations on buttons and other clickable elements."),
                  vue$1.createVNode("li", null, "Added a fade transitions when navigating between pages."),
                  vue$1.createVNode("li", null, [
                    vue$1.createTextVNode("Improved site metadata by adding an "),
                    vue$1.createVNode("code", { class: "hljs" }, "og:image"),
                    vue$1.createTextVNode(" and "),
                    vue$1.createVNode("code", { class: "hljs" }, "twitter:image"),
                    vue$1.createTextVNode(" tags.")
                  ])
                ]),
                vue$1.createVNode("h2", {
                  id: "future-changes.",
                  tabindex: "-1"
                }, [
                  vue$1.createVNode("a", {
                    class: "header-anchor",
                    href: "#future-changes."
                  }, "Future Changes.")
                ]),
                vue$1.createVNode("p", null, [
                  vue$1.createTextVNode("There’s a couple of "),
                  vue$1.createVNode("a", {
                    href: "https://github.com/f3ve/freedomevenden.com/issues/8",
                    target: "_blank",
                    rel: "noopener"
                  }, "accessibility improvements"),
                  vue$1.createTextVNode(" I need to make. As well as an annoying bug where the page "),
                  vue$1.createVNode("a", {
                    href: "https://github.com/f3ve/freedomevenden.com/issues/8",
                    target: "_blank",
                    rel: "noopener"
                  }, "flashes black or white"),
                  vue$1.createTextVNode(" when you load the page. I had thought I fixed it by attaching a script tag in the header to manually set the theme but that doesn’t seem to be working. Either my code is wrong or there’s an issue somewhere else. I’ll have to investigate further.")
                ]),
                vue$1.createVNode("p", null, [
                  vue$1.createTextVNode("If you want to follow planned updates to this website feel free to view the "),
                  vue$1.createVNode("a", {
                    href: "https://github.com/f3ve/freedomevenden.com/issues",
                    target: "_blank",
                    rel: "noopener"
                  }, "issues page"),
                  vue$1.createTextVNode(" on GitHub.")
                ]),
                vue$1.createVNode("h2", {
                  id: "conclusion",
                  tabindex: "-1"
                }, [
                  vue$1.createVNode("a", {
                    class: "header-anchor",
                    href: "#conclusion"
                  }, "Conclusion")
                ]),
                vue$1.createVNode("p", null, "I meant to publish this post yesterday when all the changes went out but I got distracted. I’ll probably continue to do posts like this any time I make updates to the website 😄."),
                vue$1.createVNode("p", null, "Thanks for reading!")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/blog/website-updates-10-03-2023.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
exports.datePublished = datePublished;
exports.default = _sfc_main;
exports.description = description;
exports.meta = meta;
exports.title = title;
