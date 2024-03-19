"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const main = require("../main.cjs");
const vue = require("vue");
const serverRenderer = require("vue/server-renderer");
const vueNotify = require("@f3ve/vue-notify");
const vue$1 = require("@unhead/vue");
require("dayjs");
require("vue-router");
require("@vueuse/core");
require("vite-ssg");
require("pinia");
const _sfc_main$1 = /* @__PURE__ */ vue.defineComponent({
  __name: "NotifyDemo",
  __ssrInlineRender: true,
  setup(__props) {
    const notify = vueNotify.useNotify();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CoreBtn = main.__unplugin_components_0;
      _push(`<!--[-->`);
      _push(serverRenderer.ssrRenderComponent(_component_CoreBtn, {
        onClick: ($event) => vue.unref(notify).show("This is a default notification")
      }, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Show default notification `);
          } else {
            return [
              vue.createTextVNode(" Show default notification ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(serverRenderer.ssrRenderComponent(_component_CoreBtn, {
        onClick: ($event) => vue.unref(notify).show("This is a success notification", "success")
      }, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Show success notification `);
          } else {
            return [
              vue.createTextVNode(" Show success notification ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(serverRenderer.ssrRenderComponent(_component_CoreBtn, {
        onClick: ($event) => vue.unref(notify).show("This is a warning notification", "warning")
      }, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Show warning notification `);
          } else {
            return [
              vue.createTextVNode(" Show warning notification ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(serverRenderer.ssrRenderComponent(_component_CoreBtn, {
        onClick: ($event) => vue.unref(notify).show("This is an error notification", "error")
      }, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Show error notification `);
          } else {
            return [
              vue.createTextVNode(" Show error notification ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(serverRenderer.ssrRenderComponent(_component_CoreBtn, {
        onClick: ($event) => vue.unref(notify).show("This is an info notification", "info")
      }, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Show info notification `);
          } else {
            return [
              vue.createTextVNode(" Show info notification ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/posts/NotifyDemo.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const title = "Announcing Vue Notify";
const description = "Freedom Evenden is excited to announce his latest web dev project and give you a small sample.";
const datePublished = "2024-03-07T12:00:00.000Z";
const meta = [{ "name": "type", "content": "article" }, { "property": "og:title", "content": "Announcing Vue Notify" }, { "name": "twitter:title", "content": "Announcing Vue Notify" }, { "name": "description", "content": "Freedom Evenden is excited to announce his latest web dev project and give you a small sample." }, { "property": "og:description", "content": "Freedom Evenden is excited to announce his latest web dev project and give you a small sample." }, { "name": "twitter:description", "content": "Freedom Evenden is excited to announce his latest web dev project and give you a small sample." }];
const _sfc_main = {
  __name: "announcing-vue-notify",
  __ssrInlineRender: true,
  setup(__props, { expose: __expose }) {
    const frontmatter = { "title": "Announcing Vue Notify", "description": "Freedom Evenden is excited to announce his latest web dev project and give you a small sample.", "datePublished": "2024-03-07T12:00:00.000Z", "meta": [{ "name": "type", "content": "article" }, { "property": "og:title", "content": "Announcing Vue Notify" }, { "name": "twitter:title", "content": "Announcing Vue Notify" }, { "name": "description", "content": "Freedom Evenden is excited to announce his latest web dev project and give you a small sample." }, { "property": "og:description", "content": "Freedom Evenden is excited to announce his latest web dev project and give you a small sample." }, { "name": "twitter:description", "content": "Freedom Evenden is excited to announce his latest web dev project and give you a small sample." }] };
    __expose({ frontmatter });
    const head = { "title": "Announcing Vue Notify", "meta": [{ "name": "type", "content": "article" }, { "property": "og:title", "content": "Announcing Vue Notify" }, { "name": "twitter:title", "content": "Announcing Vue Notify" }, { "name": "description", "content": "Freedom Evenden is excited to announce his latest web dev project and give you a small sample." }, { "property": "og:description", "content": "Freedom Evenden is excited to announce his latest web dev project and give you a small sample." }, { "name": "twitter:description", "content": "Freedom Evenden is excited to announce his latest web dev project and give you a small sample." }] };
    vue$1.useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CoreMdWrapper = main._sfc_main;
      const _component_NotifyDemo = _sfc_main$1;
      _push(serverRenderer.ssrRenderComponent(_component_CoreMdWrapper, vue.mergeProps({ frontmatter }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="markdown-body"${_scopeId}><p${_scopeId}>Vue Notify is my latest web development project. It’s a library that simplifies the process of displaying stacking status notifications to your users.</p><p${_scopeId}>Since these kinds of notifications are often display after an asynchronous request it also includes a Vue composable that abstracts out the logic for running async code. Try out the demo below to see how it works and if you’re interested in trying it out yourself head over to the <a href="https://github.com/f3ve/vue-notify" target="_blank" rel="noopener"${_scopeId}>repo on Github</a></p>`);
            _push2(serverRenderer.ssrRenderComponent(_component_NotifyDemo, null, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              vue.createVNode("div", { class: "markdown-body" }, [
                vue.createVNode("p", null, "Vue Notify is my latest web development project. It’s a library that simplifies the process of displaying stacking status notifications to your users."),
                vue.createVNode("p", null, [
                  vue.createTextVNode("Since these kinds of notifications are often display after an asynchronous request it also includes a Vue composable that abstracts out the logic for running async code. Try out the demo below to see how it works and if you’re interested in trying it out yourself head over to the "),
                  vue.createVNode("a", {
                    href: "https://github.com/f3ve/vue-notify",
                    target: "_blank",
                    rel: "noopener"
                  }, "repo on Github")
                ]),
                vue.createVNode(_component_NotifyDemo)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/blog/announcing-vue-notify.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
exports.datePublished = datePublished;
exports.default = _sfc_main;
exports.description = description;
exports.meta = meta;
exports.title = title;
