"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const main = require("../main.cjs");
const vue = require("vue");
const serverRenderer = require("vue/server-renderer");
const CoreInput = require("./CoreInput-JTFLIfRR.cjs");
const axios = require("axios");
const core = require("@vueuse/core");
const vueRouter = require("vue-router");
const vue$1 = require("@unhead/vue");
require("dayjs");
require("@f3ve/vue-notify");
require("vite-ssg");
require("pinia");
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
        _push(`<label${serverRenderer.ssrRenderAttr("for", _ctx.label)} class="mb-1 block text-link">${serverRenderer.ssrInterpolate(_ctx.label)}</label>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="${serverRenderer.ssrRenderClass([vue.unref(classes), "cursor-text border rounded-lg pa-2 outline-none transition-colors bg-selection"])}"><div class="flex items-center">`);
      if (_ctx.icon) {
        _push(`<div class="${serverRenderer.ssrRenderClass([_ctx.icon, "mr-2"])}"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<textarea${serverRenderer.ssrRenderAttr("id", _ctx.label)}${serverRenderer.ssrRenderAttr("type", _ctx.type)} class="w-full outline-none bg-selection"${serverRenderer.ssrRenderAttr("placeholder", _ctx.placeholder)}${serverRenderer.ssrRenderAttr("name", _ctx.name)}${serverRenderer.ssrIncludeBooleanAttr(_ctx.required) ? " required" : ""} rows="5"${serverRenderer.ssrRenderAttr("autocomplete", _ctx.autocomplete)}>${serverRenderer.ssrInterpolate(inputText.value)}</textarea></div></div></div>`);
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
      "form-name": "contact",
      name: "",
      "contact-method": "",
      subject: "",
      message: "",
      "bot-field": ""
    });
    const router = vueRouter.useRouter();
    const { execute, isLoading } = core.useAsyncState(async (e) => {
      if (e.target) {
        const urlEncodedData = new URLSearchParams(fields).toString();
        return axios.post("/contact", urlEncodedData, {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }).then(() => router.push("/contact/success")).catch(() => router.push("/contact/error"));
      }
    }, void 0);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_core_input = CoreInput._sfc_main;
      const _component_core_textarea = _sfc_main$2;
      const _component_core_btn = main.__unplugin_components_0;
      _push(`<form${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        id: "contact-form",
        name: "contact",
        class: "flex flex-col items-center gap-6",
        "data-netlify": "true",
        "netlify-honeypot": "bot-field"
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
        modelValue: vue.unref(fields)["contact-method"],
        "onUpdate:modelValue": ($event) => vue.unref(fields)["contact-method"] = $event,
        label: "How would you like to be contacted?",
        placeholder: "Enter an email address, twitter handle, or discord username",
        name: "contact-method",
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
        class: "w-fit",
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
      _push(`<input type="hidden" name="form-name" value="contact"><input${serverRenderer.ssrRenderAttr("value", vue.unref(fields)["bot-field"])} type="hidden" name="bot-field"></form>`);
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
const description = "Contact Freedom Evenden directly with business inquiries or questions";
const subtitle = "Send me a message!";
const meta = [{ "name": "keywords", "content": "contact,freedom,evenden,email,contact freedom evenden" }, { "property": "og:title", "content": "Contact - Freedom Evenden" }, { "name": "twitter:title", "content": "Contact - Freedom Evenden" }, { "name": "description", "content": "Contact Freedom Evenden directly with business inquiries or questions" }, { "property": "og:description", "content": "Contact Freedom Evenden directly with business inquiries or questions" }, { "name": "twitter:description", "content": "Contact Freedom Evenden directly with business inquiries or questions" }];
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props, { expose: __expose }) {
    const frontmatter = { "title": "Contact - Freedom Evenden", "description": "Contact Freedom Evenden directly with business inquiries or questions", "subtitle": "Send me a message!", "meta": [{ "name": "keywords", "content": "contact,freedom,evenden,email,contact freedom evenden" }, { "property": "og:title", "content": "Contact - Freedom Evenden" }, { "name": "twitter:title", "content": "Contact - Freedom Evenden" }, { "name": "description", "content": "Contact Freedom Evenden directly with business inquiries or questions" }, { "property": "og:description", "content": "Contact Freedom Evenden directly with business inquiries or questions" }, { "name": "twitter:description", "content": "Contact Freedom Evenden directly with business inquiries or questions" }] };
    __expose({ frontmatter });
    const head = { "title": "Contact - Freedom Evenden", "meta": [{ "name": "keywords", "content": "contact,freedom,evenden,email,contact freedom evenden" }, { "property": "og:title", "content": "Contact - Freedom Evenden" }, { "name": "twitter:title", "content": "Contact - Freedom Evenden" }, { "name": "description", "content": "Contact Freedom Evenden directly with business inquiries or questions" }, { "property": "og:description", "content": "Contact Freedom Evenden directly with business inquiries or questions" }, { "name": "twitter:description", "content": "Contact Freedom Evenden directly with business inquiries or questions" }] };
    vue$1.useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CoreMdWrapper = main._sfc_main;
      const _component_core_contact_form = _sfc_main$1;
      _push(serverRenderer.ssrRenderComponent(_component_CoreMdWrapper, vue.mergeProps({ frontmatter }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="markdown-body"${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_core_contact_form, null, null, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              vue.createVNode("div", { class: "markdown-body" }, [
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/contact/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
exports.default = _sfc_main;
exports.description = description;
exports.meta = meta;
exports.subtitle = subtitle;
exports.title = title;
