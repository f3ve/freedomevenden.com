"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
const serverRenderer = require("vue/server-renderer");
const main = require("../main.cjs");
const vueRouter = require("vue-router");
const vue$1 = require("@unhead/vue");
require("dayjs");
require("@vueuse/core");
require("vite-ssg");
const _sfc_main$3 = /* @__PURE__ */ vue.defineComponent({
  __name: "BlogListItem",
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
      _push(serverRenderer.ssrRenderComponent(_component_RouterLink, vue.mergeProps({
        key: _ctx.post.path,
        to: _ctx.post.path,
        class: "decoration-none"
      }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<li class="rounded-lg pa-1 transition-colors @hover:bg-gray @hover:bg-op-7"${_scopeId}><h5 class="ma-none"${_scopeId}>${serverRenderer.ssrInterpolate(_ctx.post.title)} - `);
            if (vue.unref(publishDate)) {
              _push2(`<span class="ma-none text-sm op-50"${_scopeId}>${serverRenderer.ssrInterpolate(vue.unref(publishDate))}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</h5></li>`);
          } else {
            return [
              vue.createVNode("li", { class: "rounded-lg pa-1 transition-colors @hover:bg-gray @hover:bg-op-7" }, [
                vue.createVNode("h5", { class: "ma-none" }, [
                  vue.createTextVNode(vue.toDisplayString(_ctx.post.title) + " - ", 1),
                  vue.unref(publishDate) ? (vue.openBlock(), vue.createBlock("span", {
                    key: 0,
                    class: "ma-none text-sm op-50",
                    textContent: vue.toDisplayString(vue.unref(publishDate))
                  }, null, 8, ["textContent"])) : vue.createCommentVNode("", true)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/blog/components/BlogListItem.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ vue.defineComponent({
  __name: "BlogListSearch",
  __ssrInlineRender: true,
  props: {
    modelValue: {},
    placeholder: {}
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: emits }) {
    const props = __props;
    vue.ref();
    const focused = vue.ref(false);
    const search = vue.computed({
      get() {
        return props.modelValue;
      },
      set(val) {
        emits("update:modelValue", val);
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: ["cursor-text border rounded-lg bg-white pa-2 outline-none transition-colors dark:bg-dark-700", {
          "border-gray-700": vue.unref(focused),
          "dark:border-gray-400": vue.unref(focused),
          "border-gray-200": !vue.unref(focused),
          "dark:border-dark-200": !vue.unref(focused)
        }]
      }, _attrs))}><div class="flex items-center"><label class="invisible ma-0 block h-0 w-0 pa-0" for="search"> Search </label><div class="i-ph-magnifying-glass mr-2"></div><input id="search"${serverRenderer.ssrRenderAttr("value", vue.unref(search))} class="w-full outline-none dark:bg-dark-700"${serverRenderer.ssrRenderAttr("placeholder", _ctx.placeholder)}></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/blog/components/BlogListSearch.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ vue.defineComponent({
  __name: "BlogPostList",
  __ssrInlineRender: true,
  setup(__props) {
    const router = vueRouter.useRouter();
    const search = vue.ref("");
    const posts = vue.computed(() => {
      return router.getRoutes().filter((route) => route.path.startsWith("/blog/")).map((route) => ({
        path: route.path,
        ...route.meta.frontmatter
      })).filter(
        (frontmatter) => {
          var _a;
          return (_a = frontmatter.title) == null ? void 0 : _a.toLowerCase().includes(search.value.toLowerCase());
        }
      ).sort((a, b) => {
        if (a.datePublished && b.datePublished)
          return new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime();
        return 1;
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_BlogListSearch = _sfc_main$2;
      const _component_BlogListItem = _sfc_main$3;
      _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}>`);
      _push(serverRenderer.ssrRenderComponent(_component_BlogListSearch, {
        modelValue: vue.unref(search),
        "onUpdate:modelValue": ($event) => vue.isRef(search) ? search.value = $event : null,
        placeholder: "Search..."
      }, null, _parent));
      _push(`<ul class="flex flex-col list-none gap-sm pl-none"><!--[-->`);
      serverRenderer.ssrRenderList(vue.unref(posts), (post) => {
        _push(serverRenderer.ssrRenderComponent(_component_BlogListItem, {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/blog/components/BlogPostList.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const title = "Freedom Evenden | Blog";
const description = "Test";
const meta = [{ "property": "og:title", "content": "Freedom Evenden | Blog" }, { "name": "twitter:title", "content": "Freedom Evenden | Blog" }, { "name": "description", "content": "Test" }, { "property": "og:description", "content": "Test" }, { "name": "twitter:description", "content": "Test" }];
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props, { expose: __expose }) {
    const frontmatter = { "title": "Freedom Evenden | Blog", "description": "Test", "meta": [{ "property": "og:title", "content": "Freedom Evenden | Blog" }, { "name": "twitter:title", "content": "Freedom Evenden | Blog" }, { "name": "description", "content": "Test" }, { "property": "og:description", "content": "Test" }, { "name": "twitter:description", "content": "Test" }] };
    __expose({ frontmatter });
    const head = { "title": "Freedom Evenden | Blog", "meta": [{ "property": "og:title", "content": "Freedom Evenden | Blog" }, { "name": "twitter:title", "content": "Freedom Evenden | Blog" }, { "name": "description", "content": "Test" }, { "property": "og:description", "content": "Test" }, { "name": "twitter:description", "content": "Test" }] };
    vue$1.useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CoreMdWrapper = main._sfc_main;
      const _component_BlogPostList = _sfc_main$1;
      _push(serverRenderer.ssrRenderComponent(_component_CoreMdWrapper, vue.mergeProps({ frontmatter }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="markdown-body"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_BlogPostList, null, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              vue.createVNode("div", { class: "markdown-body" }, [
                vue.createVNode(_component_BlogPostList)
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
