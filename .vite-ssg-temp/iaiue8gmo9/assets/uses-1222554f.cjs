"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const CoreMdWrapper = require("./CoreMdWrapper-d6481cae.cjs");
const vue$1 = require("vue");
const serverRenderer = require("vue/server-renderer");
const vue = require("@unhead/vue");
const title = "Uses";
const description = "Links to different tools or services that Freedom Evenden uses regularly for web development or gaming.";
const subtitle = "A list of tools and software Freedom Evenden uses for web development.";
const meta = [{ "name": "type", "content": "website" }, { "property": "og:title", "content": "Uses" }, { "name": "twitter:title", "content": "Uses" }, { "name": "description", "content": "Links to different tools or services that Freedom Evenden uses regularly for web development or gaming." }, { "property": "og:description", "content": "Links to different tools or services that Freedom Evenden uses regularly for web development or gaming." }, { "name": "twitter:description", "content": "Links to different tools or services that Freedom Evenden uses regularly for web development or gaming." }];
const _sfc_main = {
  __name: "uses",
  __ssrInlineRender: true,
  setup(__props, { expose: __expose }) {
    const frontmatter = { "title": "Uses", "description": "Links to different tools or services that Freedom Evenden uses regularly for web development or gaming.", "subtitle": "A list of tools and software Freedom Evenden uses for web development.", "meta": [{ "name": "type", "content": "website" }, { "property": "og:title", "content": "Uses" }, { "name": "twitter:title", "content": "Uses" }, { "name": "description", "content": "Links to different tools or services that Freedom Evenden uses regularly for web development or gaming." }, { "property": "og:description", "content": "Links to different tools or services that Freedom Evenden uses regularly for web development or gaming." }, { "name": "twitter:description", "content": "Links to different tools or services that Freedom Evenden uses regularly for web development or gaming." }] };
    __expose({ frontmatter });
    const head = { "title": "Uses", "meta": [{ "name": "type", "content": "website" }, { "property": "og:title", "content": "Uses" }, { "name": "twitter:title", "content": "Uses" }, { "name": "description", "content": "Links to different tools or services that Freedom Evenden uses regularly for web development or gaming." }, { "property": "og:description", "content": "Links to different tools or services that Freedom Evenden uses regularly for web development or gaming." }, { "name": "twitter:description", "content": "Links to different tools or services that Freedom Evenden uses regularly for web development or gaming." }] };
    vue.useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CoreMdWrapper = CoreMdWrapper._sfc_main;
      _push(serverRenderer.ssrRenderComponent(_component_CoreMdWrapper, vue$1.mergeProps({ frontmatter }, _attrs), {
        default: vue$1.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="markdown-body"${_scopeId}><h2 id="table-of-contents" tabindex="-1"${_scopeId}><a class="header-anchor" href="#table-of-contents"${_scopeId}>Table of Contents</a></h2><p${_scopeId}><div class="table-of-contents"${_scopeId}><ul${_scopeId}><li${_scopeId}><a href="#table-of-contents"${_scopeId}>Table of Contents</a></li><li${_scopeId}><a href="#software"${_scopeId}>Software</a></li><li${_scopeId}><a href="#services"${_scopeId}>Services</a></li><li${_scopeId}><a href="#hardware"${_scopeId}>Hardware</a></li></ul></div></p><h2 id="software" tabindex="-1"${_scopeId}><a class="header-anchor" href="#software"${_scopeId}>Software</a></h2><ul${_scopeId}><li${_scopeId}><a href="https://code.visualstudio.com/" target="_blank" rel="noopener"${_scopeId}>VSCode</a> - VSCode is my daily driver for code editing. I use it everyday for work and play. I also use it for writing blog posts in Markdown.</li><li${_scopeId}><a href="https://www.mozilla.org/en-US/firefox/new/" target="_blank" rel="noopener"${_scopeId}>Firefox</a> - My main browser. been using Firefox for years.</li><li${_scopeId}><a href="https://discord.com/" target="_blank" rel="noopener"${_scopeId}>Discord</a> - Lots of developer communities and fun way to network and communicate with teams.</li></ul><h2 id="services" tabindex="-1"${_scopeId}><a class="header-anchor" href="#services"${_scopeId}>Services</a></h2><ul${_scopeId}><li${_scopeId}><a href="https://github.com" target="_blank" rel="noopener"${_scopeId}>GitHub</a> - I host all of my code here. Also great for hosting static websites. Huge open source community.</li><li${_scopeId}><a href="https://regex101.com/" target="_blank" rel="noopener"${_scopeId}>Regex 101</a> - Great tool for writing regex expressions.</li><li${_scopeId}><a href="https://www.netlify.com/" target="_blank" rel="noopener"${_scopeId}>Netlify</a> - Website hosting and includes some extra tools like analytics, form capturing, and deployment previews.</li><li${_scopeId}><a href="https://vercel.com/" target="_blank" rel="noopener"${_scopeId}>Vercel</a> - Website hosting from the team that created <a href="https://nextjs.org/" target="_blank" rel="noopener"${_scopeId}>Next.js</a>.</li></ul><h2 id="hardware" tabindex="-1"${_scopeId}><a class="header-anchor" href="#hardware"${_scopeId}>Hardware</a></h2><ul${_scopeId}><li${_scopeId}><a href="https://www.lenovo.com/us/en/p/laptops/thinkpad/thinkpadt/thinkpad-t480/22tp2tt4800" target="_blank" rel="noopener"${_scopeId}>ThinkPad T480</a> - I like to use this laptop with Ubuntu for when I’m working on the go or just don’t feel like sitting at my desk.</li><li${_scopeId}>Custom built Desktop PC - Used for gaming and development. Will make a build page in the future.</li><li${_scopeId}><a href="https://www.apple.com/macbook-pro/" target="_blank" rel="noopener"${_scopeId}>M1 MacBook Pro</a> - Work provided laptop for my current job.</li></ul></div>`);
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
                        vue$1.createVNode("a", { href: "#software" }, "Software")
                      ]),
                      vue$1.createVNode("li", null, [
                        vue$1.createVNode("a", { href: "#services" }, "Services")
                      ]),
                      vue$1.createVNode("li", null, [
                        vue$1.createVNode("a", { href: "#hardware" }, "Hardware")
                      ])
                    ])
                  ])
                ]),
                vue$1.createVNode("h2", {
                  id: "software",
                  tabindex: "-1"
                }, [
                  vue$1.createVNode("a", {
                    class: "header-anchor",
                    href: "#software"
                  }, "Software")
                ]),
                vue$1.createVNode("ul", null, [
                  vue$1.createVNode("li", null, [
                    vue$1.createVNode("a", {
                      href: "https://code.visualstudio.com/",
                      target: "_blank",
                      rel: "noopener"
                    }, "VSCode"),
                    vue$1.createTextVNode(" - VSCode is my daily driver for code editing. I use it everyday for work and play. I also use it for writing blog posts in Markdown.")
                  ]),
                  vue$1.createVNode("li", null, [
                    vue$1.createVNode("a", {
                      href: "https://www.mozilla.org/en-US/firefox/new/",
                      target: "_blank",
                      rel: "noopener"
                    }, "Firefox"),
                    vue$1.createTextVNode(" - My main browser. been using Firefox for years.")
                  ]),
                  vue$1.createVNode("li", null, [
                    vue$1.createVNode("a", {
                      href: "https://discord.com/",
                      target: "_blank",
                      rel: "noopener"
                    }, "Discord"),
                    vue$1.createTextVNode(" - Lots of developer communities and fun way to network and communicate with teams.")
                  ])
                ]),
                vue$1.createVNode("h2", {
                  id: "services",
                  tabindex: "-1"
                }, [
                  vue$1.createVNode("a", {
                    class: "header-anchor",
                    href: "#services"
                  }, "Services")
                ]),
                vue$1.createVNode("ul", null, [
                  vue$1.createVNode("li", null, [
                    vue$1.createVNode("a", {
                      href: "https://github.com",
                      target: "_blank",
                      rel: "noopener"
                    }, "GitHub"),
                    vue$1.createTextVNode(" - I host all of my code here. Also great for hosting static websites. Huge open source community.")
                  ]),
                  vue$1.createVNode("li", null, [
                    vue$1.createVNode("a", {
                      href: "https://regex101.com/",
                      target: "_blank",
                      rel: "noopener"
                    }, "Regex 101"),
                    vue$1.createTextVNode(" - Great tool for writing regex expressions.")
                  ]),
                  vue$1.createVNode("li", null, [
                    vue$1.createVNode("a", {
                      href: "https://www.netlify.com/",
                      target: "_blank",
                      rel: "noopener"
                    }, "Netlify"),
                    vue$1.createTextVNode(" - Website hosting and includes some extra tools like analytics, form capturing, and deployment previews.")
                  ]),
                  vue$1.createVNode("li", null, [
                    vue$1.createVNode("a", {
                      href: "https://vercel.com/",
                      target: "_blank",
                      rel: "noopener"
                    }, "Vercel"),
                    vue$1.createTextVNode(" - Website hosting from the team that created "),
                    vue$1.createVNode("a", {
                      href: "https://nextjs.org/",
                      target: "_blank",
                      rel: "noopener"
                    }, "Next.js"),
                    vue$1.createTextVNode(".")
                  ])
                ]),
                vue$1.createVNode("h2", {
                  id: "hardware",
                  tabindex: "-1"
                }, [
                  vue$1.createVNode("a", {
                    class: "header-anchor",
                    href: "#hardware"
                  }, "Hardware")
                ]),
                vue$1.createVNode("ul", null, [
                  vue$1.createVNode("li", null, [
                    vue$1.createVNode("a", {
                      href: "https://www.lenovo.com/us/en/p/laptops/thinkpad/thinkpadt/thinkpad-t480/22tp2tt4800",
                      target: "_blank",
                      rel: "noopener"
                    }, "ThinkPad T480"),
                    vue$1.createTextVNode(" - I like to use this laptop with Ubuntu for when I’m working on the go or just don’t feel like sitting at my desk.")
                  ]),
                  vue$1.createVNode("li", null, "Custom built Desktop PC - Used for gaming and development. Will make a build page in the future."),
                  vue$1.createVNode("li", null, [
                    vue$1.createVNode("a", {
                      href: "https://www.apple.com/macbook-pro/",
                      target: "_blank",
                      rel: "noopener"
                    }, "M1 MacBook Pro"),
                    vue$1.createTextVNode(" - Work provided laptop for my current job.")
                  ])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/uses.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
exports.default = _sfc_main;
exports.description = description;
exports.meta = meta;
exports.subtitle = subtitle;
exports.title = title;
