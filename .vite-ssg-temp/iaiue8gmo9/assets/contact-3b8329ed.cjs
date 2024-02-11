"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const main = require("../main.cjs");
const vue = require("vue");
const serverRenderer = require("vue/server-renderer");
const CoreInput = require("./CoreInput-7f2ffa0e.cjs");
const axios = require("axios");
const core = require("@vueuse/core");
const CoreMdWrapper = require("./CoreMdWrapper-d6481cae.cjs");
const vue$1 = require("@unhead/vue");
require("vue-router");
require("pinia");
require("dayjs");
require("unplugin-vue-router/runtime");
require("vite-ssg");
const _sfc_main$2 = /* @__PURE__ */ vue.defineComponent({
  __name: "CoreTextarea",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ vue.mergeModels({
    placeholder: {},
    label: {},
    icon: {},
    type: { default: "text" },
    name: {},
    required: { type: Boolean },
    autoFocus: { type: Boolean },
    autocomplete: {}
  }, {
    "modelValue": {},
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const inputText = vue.useModel(__props, "modelValue");
    const { target, focused, focus } = CoreInput.useFocus();
    const classes = CoreInput.useInputFocusClasses(focused);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}>`);
      if (_ctx.label) {
        _push(`<label${serverRenderer.ssrRenderAttr("for", _ctx.label)} class="mb-1 block">${serverRenderer.ssrInterpolate(_ctx.label)}</label>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${serverRenderer.ssrRenderClass([vue.unref(classes), "cursor-text border rounded-lg bg-white pa-2 outline-none transition-colors dark:bg-dark-800"])}"><div class="flex items-center">`);
      if (_ctx.icon) {
        _push(`<div class="${serverRenderer.ssrRenderClass([_ctx.icon, "mr-2"])}"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<textarea${serverRenderer.ssrRenderAttr("id", _ctx.label)}${serverRenderer.ssrRenderAttr("type", _ctx.type)} class="w-full outline-none dark:bg-dark-800"${serverRenderer.ssrRenderAttr("placeholder", _ctx.placeholder)}${serverRenderer.ssrRenderAttr("name", _ctx.name)}${serverRenderer.ssrIncludeBooleanAttr(_ctx.required) ? " required" : ""} rows="5"${serverRenderer.ssrRenderAttr("autocomplete", _ctx.autocomplete)}>${serverRenderer.ssrInterpolate(inputText.value)}</textarea></div></div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/core/inputs/CoreTextarea.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ vue.defineComponent({
  __name: "CoreContactForm",
  __ssrInlineRender: true,
  setup(__props) {
    const fields = vue.reactive({
      name: "",
      contactMethod: "",
      subject: "",
      message: ""
    });
    main.useToastStore();
    const { isLoading, execute } = core.useAsyncState(async (e) => {
      if (e.target) {
        const urlEncodedData = new URLSearchParams(fields).toString();
        return axios.post("/", urlEncodedData, {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }).then((r) => r.data);
      }
    }, {});
    return (_ctx, _push, _parent, _attrs) => {
      const _component_core_input = CoreInput._sfc_main;
      const _component_core_textarea = _sfc_main$2;
      const _component_core_btn = main.__unplugin_components_2;
      _push(`<form${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        id: "contact-form",
        name: "contact",
        class: "flex flex-col items-center gap-6",
        netlify: ""
      }, _attrs))}>`);
      _push(serverRenderer.ssrRenderComponent(_component_core_input, {
        modelValue: vue.unref(fields).name,
        "onUpdate:modelValue": ($event) => vue.unref(fields).name = $event,
        label: "Name",
        placeholder: "Enter your name",
        name: "name",
        class: "w-full",
        required: ""
      }, null, _parent));
      _push(serverRenderer.ssrRenderComponent(_component_core_input, {
        modelValue: vue.unref(fields).contactMethod,
        "onUpdate:modelValue": ($event) => vue.unref(fields).contactMethod = $event,
        label: "How should we contact you?",
        placeholder: "Enter an email address, twitter handle, or discord username",
        name: "contact method",
        class: "w-full",
        required: ""
      }, null, _parent));
      _push(serverRenderer.ssrRenderComponent(_component_core_input, {
        modelValue: vue.unref(fields).subject,
        "onUpdate:modelValue": ($event) => vue.unref(fields).subject = $event,
        label: "Subject",
        placeholder: "Enter the subject of your message",
        name: "subject",
        class: "w-full",
        required: ""
      }, null, _parent));
      _push(serverRenderer.ssrRenderComponent(_component_core_textarea, {
        modelValue: vue.unref(fields).message,
        "onUpdate:modelValue": ($event) => vue.unref(fields).message = $event,
        label: "Message",
        placeholder: "Enter your message",
        name: "message",
        class: "w-full",
        required: ""
      }, null, _parent));
      _push(serverRenderer.ssrRenderComponent(_component_core_btn, {
        class: "w-fit bg-primary",
        type: "submit",
        loading: vue.unref(isLoading)
      }, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Submit `);
          } else {
            return [
              vue.createTextVNode(" Submit ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</form>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/core/CoreContactForm.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const title = "Contact - Freedom Evenden";
const description = "Contact Freedom Evenden";
const subtitle = "Send me a message!";
const meta = [{ "name": "keywords", "content": "contact,freedom,evenden,email,contact freedom evenden" }, { "property": "og:title", "content": "Contact - Freedom Evenden" }, { "name": "twitter:title", "content": "Contact - Freedom Evenden" }, { "name": "description", "content": "Contact Freedom Evenden" }, { "property": "og:description", "content": "Contact Freedom Evenden" }, { "name": "twitter:description", "content": "Contact Freedom Evenden" }];
const _sfc_main = {
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props, { expose: __expose }) {
    const frontmatter = { "title": "Contact - Freedom Evenden", "description": "Contact Freedom Evenden", "subtitle": "Send me a message!", "meta": [{ "name": "keywords", "content": "contact,freedom,evenden,email,contact freedom evenden" }, { "property": "og:title", "content": "Contact - Freedom Evenden" }, { "name": "twitter:title", "content": "Contact - Freedom Evenden" }, { "name": "description", "content": "Contact Freedom Evenden" }, { "property": "og:description", "content": "Contact Freedom Evenden" }, { "name": "twitter:description", "content": "Contact Freedom Evenden" }] };
    __expose({ frontmatter });
    const head = { "title": "Contact - Freedom Evenden", "meta": [{ "name": "keywords", "content": "contact,freedom,evenden,email,contact freedom evenden" }, { "property": "og:title", "content": "Contact - Freedom Evenden" }, { "name": "twitter:title", "content": "Contact - Freedom Evenden" }, { "name": "description", "content": "Contact Freedom Evenden" }, { "property": "og:description", "content": "Contact Freedom Evenden" }, { "name": "twitter:description", "content": "Contact Freedom Evenden" }] };
    vue$1.useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CoreMdWrapper = CoreMdWrapper._sfc_main;
      const _component_core_contact_form = _sfc_main$1;
      _push(serverRenderer.ssrRenderComponent(_component_CoreMdWrapper, vue.mergeProps({ frontmatter }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="markdown-body"${_scopeId}><p${_scopeId}>Please be aware this page is currently under development and this form does not work at the moment. But it should be soon!</p>`);
            _push2(serverRenderer.ssrRenderComponent(_component_core_contact_form, null, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              vue.createVNode("div", { class: "markdown-body" }, [
                vue.createVNode("p", null, "Please be aware this page is currently under development and this form does not work at the moment. But it should be soon!"),
                vue.createVNode(_component_core_contact_form)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/contact.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
exports.default = _sfc_main;
exports.description = description;
exports.meta = meta;
exports.subtitle = subtitle;
exports.title = title;
