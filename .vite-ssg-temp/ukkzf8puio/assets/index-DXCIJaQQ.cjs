"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
const serverRenderer = require("vue/server-renderer");
const main = require("../main.cjs");
const CoreInput = require("./CoreInput-JTFLIfRR.cjs");
const vue$1 = require("@unhead/vue");
require("dayjs");
require("vue-router");
require("@vueuse/core");
require("@f3ve/vue-notify");
require("vite-ssg");
require("pinia");
const _sfc_main$2 = /* @__PURE__ */ vue.defineComponent({
  __name: "CorePostListItem",
  __ssrInlineRender: true,
  props: {
    post: {}
  },
  setup(__props) {
    const props = __props;
    const publishDate = vue.computed(
      () => props.post.datePublished ? main.formatDate(props.post.datePublished) : void 0
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = vue.resolveComponent("RouterLink");
      _push(`<li${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "rounded-lg hoverable" }, _attrs))}>`);
      _push(serverRenderer.ssrRenderComponent(_component_RouterLink, {
        key: _ctx.post.path,
        to: _ctx.post.path,
        class: "block pa-4 decoration-none"
      }, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="text-warning ma-none mb-0 text-2xl font-bold font-header"${_scopeId}>${serverRenderer.ssrInterpolate(_ctx.post.title)}</p>`);
            if (vue.unref(publishDate)) {
              _push2(`<p class="my-0 text-sm font-header font-header text-secondary"${_scopeId}>${serverRenderer.ssrInterpolate(vue.unref(publishDate))}</p>`);
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.post.description) {
              _push2(`<p class="my-0 text-op-75 font-header"${_scopeId}>${serverRenderer.ssrInterpolate(_ctx.post.description)}</p>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              vue.createVNode("p", { class: "text-warning ma-none mb-0 text-2xl font-bold font-header" }, vue.toDisplayString(_ctx.post.title), 1),
              vue.unref(publishDate) ? (vue.openBlock(), vue.createBlock("p", {
                key: 0,
                class: "my-0 text-sm font-header font-header text-secondary"
              }, vue.toDisplayString(vue.unref(publishDate)), 1)) : vue.createCommentVNode("", true),
              _ctx.post.description ? (vue.openBlock(), vue.createBlock("p", {
                key: 1,
                class: "my-0 text-op-75 font-header"
              }, vue.toDisplayString(_ctx.post.description), 1)) : vue.createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/core/posts/CorePostListItem.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ vue.defineComponent({
  __name: "CorePostList",
  __ssrInlineRender: true,
  setup(__props) {
    const { posts, search } = main.usePosts();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CoreInput = CoreInput._sfc_main;
      const _component_CorePostListItem = _sfc_main$2;
      _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}>`);
      _push(serverRenderer.ssrRenderComponent(_component_CoreInput, {
        modelValue: vue.unref(search),
        "onUpdate:modelValue": ($event) => vue.isRef(search) ? search.value = $event : null,
        placeholder: "Search...",
        icon: "i-ph-magnifying-glass",
        name: "search"
      }, null, _parent));
      _push(`<ul class="blog-list flex flex-col list-none gap-sm pl-none"><!--[-->`);
      serverRenderer.ssrRenderList(vue.unref(posts), (post) => {
        _push(serverRenderer.ssrRenderComponent(_component_CorePostListItem, {
          key: post.path,
          post
        }, null, _parent));
      });
      _push(`<!--]--></ul></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/core/posts/CorePostList.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const title = "Blog - Freedom Evenden";
const description = "Freedom Evenden's Blog";
const meta = [{ "name": "keywords", "content": "freedom evenden,freedom,evenden,blog,f3ve,freedom evenden's blog, freedom's blog, freedoms blog, freedom blog,f3ve blog, f3ve's blog" }, { "name": "type", "content": "website" }, { "property": "og:title", "content": "Blog - Freedom Evenden" }, { "name": "twitter:title", "content": "Blog - Freedom Evenden" }, { "name": "description", "content": "Freedom Evenden's Blog" }, { "property": "og:description", "content": "Freedom Evenden's Blog" }, { "name": "twitter:description", "content": "Freedom Evenden's Blog" }];
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props, { expose: __expose }) {
    const frontmatter = { "title": "Blog - Freedom Evenden", "description": "Freedom Evenden's Blog", "meta": [{ "name": "keywords", "content": "freedom evenden,freedom,evenden,blog,f3ve,freedom evenden's blog, freedom's blog, freedoms blog, freedom blog,f3ve blog, f3ve's blog" }, { "name": "type", "content": "website" }, { "property": "og:title", "content": "Blog - Freedom Evenden" }, { "name": "twitter:title", "content": "Blog - Freedom Evenden" }, { "name": "description", "content": "Freedom Evenden's Blog" }, { "property": "og:description", "content": "Freedom Evenden's Blog" }, { "name": "twitter:description", "content": "Freedom Evenden's Blog" }] };
    __expose({ frontmatter });
    const head = { "title": "Blog - Freedom Evenden", "meta": [{ "name": "keywords", "content": "freedom evenden,freedom,evenden,blog,f3ve,freedom evenden's blog, freedom's blog, freedoms blog, freedom blog,f3ve blog, f3ve's blog" }, { "name": "type", "content": "website" }, { "property": "og:title", "content": "Blog - Freedom Evenden" }, { "name": "twitter:title", "content": "Blog - Freedom Evenden" }, { "name": "description", "content": "Freedom Evenden's Blog" }, { "property": "og:description", "content": "Freedom Evenden's Blog" }, { "name": "twitter:description", "content": "Freedom Evenden's Blog" }] };
    vue$1.useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CoreMdWrapper = main._sfc_main;
      const _component_CorePostList = _sfc_main$1;
      _push(serverRenderer.ssrRenderComponent(_component_CoreMdWrapper, vue.mergeProps({ frontmatter }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="markdown-body"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_CorePostList, null, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              vue.createVNode("div", { class: "markdown-body" }, [
                vue.createVNode(_component_CorePostList)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/blog/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
exports.default = _sfc_main;
exports.description = description;
exports.meta = meta;
exports.title = title;
