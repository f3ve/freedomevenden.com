"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
const serverRenderer = require("vue/server-renderer");
const dayjs = require("dayjs");
const core = require("@vueuse/core");
const viteSsg = require("vite-ssg");
const vue$1 = require("@unhead/vue");
const tailwind = "";
const __uno = "";
const main = "";
const markdown = "";
const highlightJs = "";
const _sfc_main$6 = /* @__PURE__ */ vue.defineComponent({
  __name: "CoreFooter",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "flex items-center px-4 text-sm prose w-full max-w-full" }, _attrs))}><p class="op-70 dark:op-50"> © ${serverRenderer.ssrInterpolate(vue.unref(dayjs)().format("YYYY"))} <a xmlns:cc="http://creativecommons.org/ns#" href="freedomevenden.com" property="cc:attributionName" rel="cc:attributionURL">${serverRenderer.ssrInterpolate(" ")} Freedom Evenden ${serverRenderer.ssrInterpolate(" ")}</a> - <span xmlns:dct="http://purl.org/dc/terms/" property="dct:title"> Website text and images </span> are licensed under <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"> CC-BY-NC-SA-4.0 </a> . </p></footer>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/core/components/CoreFooter.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ vue.defineComponent({
  __name: "CoreDivider",
  __ssrInlineRender: true,
  props: {
    fullWidth: { type: Boolean, default: true },
    color: { default: "primary" },
    height: { default: 2 }
  },
  setup(__props) {
    const props = __props;
    const mounted = vue.ref(false);
    const show = vue.computed(() => props.fullWidth && mounted.value);
    const compHeight = vue.computed(
      () => typeof props.height === "number" || !/(px|%|vh|rem|em|pt)$/.test(props.height) ? `${props.height}px` : props.height
    );
    vue.onMounted(() => {
      mounted.value = true;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: ["transition-width duration-500 ease-in-out", {
          "bg-primary": true,
          "w-0": !vue.unref(show),
          "w-full": vue.unref(show)
        }],
        style: { height: vue.unref(compHeight) }
      }, _attrs))}></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/core/components/CoreDivider.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ vue.defineComponent({
  __name: "CoreNavButton",
  __ssrInlineRender: true,
  props: {
    href: {},
    to: {}
  },
  setup(__props) {
    const props = __props;
    const tagName = vue.computed(
      () => props.href ? "a" : props.to ? "RouterLink" : "button"
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_core_divider = _sfc_main$5;
      serverRenderer.ssrRenderVNode(_push, vue.createVNode(vue.resolveDynamicComponent(vue.unref(tagName)), vue.mergeProps({
        href: _ctx.href,
        to: _ctx.to,
        class: "cursor-pointer"
      }, _attrs), {
        default: vue.withCtx((p, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span${_scopeId}>`);
            serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(`</span>`);
            _push2(serverRenderer.ssrRenderComponent(_component_core_divider, {
              "full-width": p == null ? void 0 : p.isActive
            }, null, _parent2, _scopeId));
          } else {
            return [
              vue.createVNode("span", null, [
                vue.renderSlot(_ctx.$slots, "default")
              ]),
              vue.createVNode(_component_core_divider, {
                "full-width": p == null ? void 0 : p.isActive
              }, null, 8, ["full-width"])
            ];
          }
        }),
        _: 3
      }), _parent);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/core/components/CoreNavButton.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ vue.defineComponent({
  __name: "CoreNavBar",
  __ssrInlineRender: true,
  setup(__props) {
    const isDark = core.useDark();
    core.useToggle(isDark);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_core_nav_button = _sfc_main$4;
      _push(`<header${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: "flex items-center justify-between px-4",
        style: { "height": "60px" }
      }, _attrs))}>`);
      _push(serverRenderer.ssrRenderComponent(_component_core_nav_button, {
        to: "/",
        title: "Home"
      }, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`f3ve`);
          } else {
            return [
              vue.createTextVNode("f3ve")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<nav class="flex items-center gap-4">`);
      _push(serverRenderer.ssrRenderComponent(_component_core_nav_button, {
        to: "/Blog",
        title: "blog"
      }, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Blog`);
          } else {
            return [
              vue.createTextVNode("Blog")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<button class="i-ph-sun dark:i-ph-moon"></button></nav></header>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/core/components/CoreNavBar.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ vue.defineComponent({
  __name: "App",
  __ssrInlineRender: true,
  setup(__props) {
    const height = vue.ref("");
    vue.onMounted(() => {
      const footer = document.querySelector("footer");
      if (footer) {
        height.value = `${footer.offsetHeight}px`;
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CoreNavBar = _sfc_main$3;
      const _component_RouterView = vue.resolveComponent("RouterView");
      const _component_CoreFooter = _sfc_main$6;
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "relative min-h-screen font-sans" }, _attrs))}>`);
      _push(serverRenderer.ssrRenderComponent(_component_CoreNavBar, null, null, _parent));
      _push(`<main style="${serverRenderer.ssrRenderStyle({ paddingBottom: vue.unref(height) })}">`);
      _push(serverRenderer.ssrRenderComponent(_component_RouterView, null, null, _parent));
      _push(`</main>`);
      _push(serverRenderer.ssrRenderComponent(_component_CoreFooter, { class: "absolute bottom-0" }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/App.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
function formatDate(date) {
  return dayjs(date).format("MMMM D, YYYY");
}
const _sfc_main$1 = /* @__PURE__ */ vue.defineComponent({
  __name: "CoreMdWrapper",
  __ssrInlineRender: true,
  props: {
    frontmatter: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_core_divider = _sfc_main$5;
      _push(`<article${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "m-a h-full border border-gray-300 rounded-lg bg-white pa-10 prose dark:border-black dark:bg-dark" }, _attrs))}><div class="mb-4 w-fit">`);
      if (_ctx.frontmatter.title) {
        _push(`<h1 class="mb-1">${serverRenderer.ssrInterpolate(_ctx.frontmatter.title)}</h1>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.frontmatter.datePublished || _ctx.frontmatter.dateUpdated) {
        _push(`<div class="flex justify-between text-sm">`);
        if (_ctx.frontmatter.datePublished) {
          _push(`<p>${serverRenderer.ssrInterpolate(vue.unref(formatDate)(_ctx.frontmatter.datePublished))}</p>`);
        } else {
          _push(`<!---->`);
        }
        if (_ctx.frontmatter.dateUpdated) {
          _push(`<p class="italic op-60"> Last Updated: ${serverRenderer.ssrInterpolate(vue.unref(formatDate)(_ctx.frontmatter.dateUpdated))}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(serverRenderer.ssrRenderComponent(_component_core_divider, null, null, _parent));
      _push(`</div>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</article>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/core/components/CoreMdWrapper.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props, { expose: __expose }) {
    const frontmatter = { "title": "Freedom Evenden", "meta": [{ "property": "og:title", "content": "Freedom Evenden" }, { "name": "twitter:title", "content": "Freedom Evenden" }] };
    __expose({ frontmatter });
    const head = { "title": "Freedom Evenden", "meta": [{ "property": "og:title", "content": "Freedom Evenden" }, { "name": "twitter:title", "content": "Freedom Evenden" }] };
    vue$1.useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CoreMdWrapper = _sfc_main$1;
      const _component_router_link = vue.resolveComponent("router-link");
      _push(serverRenderer.ssrRenderComponent(_component_CoreMdWrapper, vue.mergeProps({ frontmatter }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="markdown-body"${_scopeId}><p${_scopeId}>Hey, I’m Freedom. Thanks for checking out my little corner of the internet. I’m a programmer, currently working at <a href="https://obskur.com"${_scopeId}>OBSKUR</a>. I’m starting to dip my toes into the open source community. I recently launched my first <a href="https://www.npmjs.com/package/@f3ve/vue-markdown-it"${_scopeId}>NPM module</a> and I’ve got some other ideas in the works.</p><p${_scopeId}>Outside of programming I’m a dad, a gym-goer, and an avid gamer.</p><p${_scopeId}>If you want to connect with me, reach out from the `);
            _push2(serverRenderer.ssrRenderComponent(_component_router_link, { to: "/contact" }, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`contact form`);
                } else {
                  return [
                    vue.createTextVNode("contact form")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(` or feel free to follow me on social media.</p></div>`);
          } else {
            return [
              vue.createVNode("div", { class: "markdown-body" }, [
                vue.createVNode("p", null, [
                  vue.createTextVNode("Hey, I’m Freedom. Thanks for checking out my little corner of the internet. I’m a programmer, currently working at "),
                  vue.createVNode("a", { href: "https://obskur.com" }, "OBSKUR"),
                  vue.createTextVNode(". I’m starting to dip my toes into the open source community. I recently launched my first "),
                  vue.createVNode("a", { href: "https://www.npmjs.com/package/@f3ve/vue-markdown-it" }, "NPM module"),
                  vue.createTextVNode(" and I’ve got some other ideas in the works.")
                ]),
                vue.createVNode("p", null, "Outside of programming I’m a dad, a gym-goer, and an avid gamer."),
                vue.createVNode("p", null, [
                  vue.createTextVNode("If you want to connect with me, reach out from the "),
                  vue.createVNode(_component_router_link, { to: "/contact" }, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode("contact form")
                    ]),
                    _: 1
                  }),
                  vue.createTextVNode(" or feel free to follow me on social media.")
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
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __pages_import_0__ = () => Promise.resolve().then(() => require("./assets/index-527ba25f.js"));
const __pages_import_1__ = () => Promise.resolve().then(() => require("./assets/how-to-fix-a-minimist-vulnerability-in-your-express-application-7f9985fd.js"));
const __pages_import_2__ = () => Promise.resolve().then(() => require("./assets/how-to-create-your-own-medium-style-rich-text-editor-in-react-f40e85de.js"));
const __pages_import_3__ = () => Promise.resolve().then(() => require("./assets/how-to-create-custom-video-controls-in-react-native-7908bf19.js"));
const __pages_import_5__ = () => Promise.resolve().then(() => require("./assets/contact-6addd8a7.js"));
const routes = [{ "name": "blog", "path": "/blog", "component": __pages_import_0__, "props": true, "meta": { "frontmatter": { "title": "Freedom Evenden | Blog", "description": "Test" } } }, { "name": "blog-how-to-fix-a-minimist-vulnerability-in-your-express-application", "path": "/blog/how-to-fix-a-minimist-vulnerability-in-your-express-application", "component": __pages_import_1__, "props": true, "meta": { "frontmatter": { "title": "How to fix a Minimist Vulnerability in Your Express Application", "Description": "If your Express application uses Mocha to handle testing then you have probably been getting vulnerability warnings from GitHub. Here's how to fix it!", "datePublished": "2020-03-27T00:00:00.000Z", "dateUpdated": "2023-09-21T00:00:00.000Z" } } }, { "name": "blog-how-to-create-your-own-medium-style-rich-text-editor-in-react", "path": "/blog/how-to-create-your-own-medium-style-rich-text-editor-in-react", "component": __pages_import_2__, "props": true, "meta": { "frontmatter": { "title": "How to Create Your Own Medium-Style Rich Text Editor in React", "description": "Learn how to create a custom text editor from scratch using React and JavaScript", "datePublished": "2020-06-25T00:00:00.000Z", "dateUpdated": "2023-09-21T00:00:00.000Z" } } }, { "name": "blog-how-to-create-custom-video-controls-in-react-native", "path": "/blog/how-to-create-custom-video-controls-in-react-native", "component": __pages_import_3__, "props": true, "meta": { "frontmatter": { "title": "How to Create Custom Video Controls in React Native", "description": "This is a test", "datePublished": "2020-12-18T00:00:00.000Z", "dateUpdated": "2023-09-17T00:00:00.000Z" } } }, { "name": "index", "path": "/", "component": _sfc_main, "props": true, "meta": { "frontmatter": { "title": "Freedom Evenden" } } }, { "name": "contact", "path": "/contact", "component": __pages_import_5__, "props": true, "meta": { "frontmatter": { "title": "Contact" } } }];
const createApp = viteSsg.ViteSSG(_sfc_main$2, {
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition)
      return savedPosition;
    return { top: 0 };
  },
  routes
});
exports._sfc_main = _sfc_main$1;
exports.createApp = createApp;
exports.formatDate = formatDate;
