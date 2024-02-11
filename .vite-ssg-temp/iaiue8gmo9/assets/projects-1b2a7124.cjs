"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
const serverRenderer = require("vue/server-renderer");
const CoreMdWrapper = require("./CoreMdWrapper-d6481cae.cjs");
const vue$1 = require("@unhead/vue");
const _sfc_main$2 = /* @__PURE__ */ vue.defineComponent({
  __name: "ProjectListItem",
  __ssrInlineRender: true,
  props: {
    project: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<li${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "rounded-lg hoverable" }, _attrs))}><a class="block pa-4 decoration-none"${serverRenderer.ssrRenderAttr("href", _ctx.project.link)} target="_blank" rel="noopener"><p class="ma-none mb-0 text-2xl font-bold font-header italic">${serverRenderer.ssrInterpolate(_ctx.project.name)}</p><p class="my-0 text-sm font-header text-primary">${serverRenderer.ssrInterpolate(_ctx.project.role)}</p><p class="my-0 text-op-75">${serverRenderer.ssrInterpolate(_ctx.project.description)}</p></a></li>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/projects/ProjectListItem.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ vue.defineComponent({
  __name: "ProjectsList",
  __ssrInlineRender: true,
  props: {
    projects: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ProjectListItem = _sfc_main$2;
      _push(`<ul${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "blog-list flex flex-col list-none gap-sm pl-none" }, _attrs))}><!--[-->`);
      serverRenderer.ssrRenderList(_ctx.projects, (value, key) => {
        _push(`<li><h2 class="w-fit">${serverRenderer.ssrInterpolate(key)}</h2><ul class="blog-list flex flex-col list-none gap-sm border-l-4 fe-border-l"><!--[-->`);
        serverRenderer.ssrRenderList(value, (project) => {
          _push(serverRenderer.ssrRenderComponent(_component_ProjectListItem, {
            key: project.name,
            project
          }, null, _parent));
        });
        _push(`<!--]--></ul></li>`);
      });
      _push(`<!--]--></ul>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/projects/ProjectsList.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const title = "Projects - Freedom Evenden";
const subtitle = "Projects I'm currently working on or have worked on in the past.";
const description = "Projects Freedom Evenden has worked on";
const meta = [{ "name": "type", "content": "website" }, { "property": "og:title", "content": "Projects - Freedom Evenden" }, { "name": "twitter:title", "content": "Projects - Freedom Evenden" }, { "name": "description", "content": "Projects Freedom Evenden has worked on" }, { "property": "og:description", "content": "Projects Freedom Evenden has worked on" }, { "name": "twitter:description", "content": "Projects Freedom Evenden has worked on" }];
const projects = { "Current Role": [{ "name": "OBSKUR", "description": "Broadcasting Software built in Unreal Engine 5.", "role": "Frontend Web Developer", "link": "https://obskur.com" }], "Open-Source Projects": [{ "name": "ESLint Config", "description": "My personal eslint-config. Comes with support for Vue, TypeScript, UnoCSS, and Prettier. Designed for the new ESLint flat config style.", "role": "Creator & Maintainer", "link": "https://github.com/f3ve/eslint-config" }, { "name": "Vue Markdown-it", "description": "Vue component for integrating Markdown-it.", "role": "Creator & Maintainer", "link": "https://github.com/f3ve/vue-markdown-it" }], "Past": [{ "name": "PatentPal", "description": "Patent drafting software using natural language processing.", "role": "Full-Stack Web Developer", "link": "https://patentpal.com" }, { "name": "Avybe", "description": "Video Streaming social media platform", "role": "Full-Stack Web Developer" }] };
const _sfc_main = {
  __name: "projects",
  __ssrInlineRender: true,
  setup(__props, { expose: __expose }) {
    const frontmatter = { "title": "Projects - Freedom Evenden", "subtitle": "Projects I'm currently working on or have worked on in the past.", "description": "Projects Freedom Evenden has worked on", "meta": [{ "name": "type", "content": "website" }, { "property": "og:title", "content": "Projects - Freedom Evenden" }, { "name": "twitter:title", "content": "Projects - Freedom Evenden" }, { "name": "description", "content": "Projects Freedom Evenden has worked on" }, { "property": "og:description", "content": "Projects Freedom Evenden has worked on" }, { "name": "twitter:description", "content": "Projects Freedom Evenden has worked on" }], "projects": { "Current Role": [{ "name": "OBSKUR", "description": "Broadcasting Software built in Unreal Engine 5.", "role": "Frontend Web Developer", "link": "https://obskur.com" }], "Open-Source Projects": [{ "name": "ESLint Config", "description": "My personal eslint-config. Comes with support for Vue, TypeScript, UnoCSS, and Prettier. Designed for the new ESLint flat config style.", "role": "Creator & Maintainer", "link": "https://github.com/f3ve/eslint-config" }, { "name": "Vue Markdown-it", "description": "Vue component for integrating Markdown-it.", "role": "Creator & Maintainer", "link": "https://github.com/f3ve/vue-markdown-it" }], "Past": [{ "name": "PatentPal", "description": "Patent drafting software using natural language processing.", "role": "Full-Stack Web Developer", "link": "https://patentpal.com" }, { "name": "Avybe", "description": "Video Streaming social media platform", "role": "Full-Stack Web Developer" }] } };
    __expose({ frontmatter });
    const head = { "title": "Projects - Freedom Evenden", "meta": [{ "name": "type", "content": "website" }, { "property": "og:title", "content": "Projects - Freedom Evenden" }, { "name": "twitter:title", "content": "Projects - Freedom Evenden" }, { "name": "description", "content": "Projects Freedom Evenden has worked on" }, { "property": "og:description", "content": "Projects Freedom Evenden has worked on" }, { "name": "twitter:description", "content": "Projects Freedom Evenden has worked on" }] };
    vue$1.useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CoreMdWrapper = CoreMdWrapper._sfc_main;
      const _component_ProjectsList = _sfc_main$1;
      _push(serverRenderer.ssrRenderComponent(_component_CoreMdWrapper, vue.mergeProps({ frontmatter }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="markdown-body"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_ProjectsList, {
              projects: frontmatter.projects
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              vue.createVNode("div", { class: "markdown-body" }, [
                vue.createVNode(_component_ProjectsList, {
                  projects: frontmatter.projects
                }, null, 8, ["projects"])
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/projects.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
exports.default = _sfc_main;
exports.description = description;
exports.meta = meta;
exports.projects = projects;
exports.subtitle = subtitle;
exports.title = title;
