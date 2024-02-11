"use strict";
const vue = require("vue");
const serverRenderer = require("vue/server-renderer");
function useInputFocusClasses(focused) {
  return vue.computed(() => ({
    "border-gray-700": vue.toValue(focused),
    "dark:border-gray-400": vue.toValue(focused),
    "border-gray-200": !vue.toValue(focused),
    "dark:border-dark-300": !vue.toValue(focused)
  }));
}
function useFocus(autoFocus) {
  const target = vue.ref();
  const focused = vue.ref(false);
  function focus() {
    var _a;
    (_a = target.value) == null ? void 0 : _a.focus();
  }
  vue.onMounted(() => {
    const isAutoFocus = vue.toValue(autoFocus);
    if (isAutoFocus)
      focus();
  });
  return {
    focus,
    target,
    focused
  };
}
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "CoreInput",
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
    const props = __props;
    const inputText = vue.useModel(__props, "modelValue");
    const { target, focused, focus } = useFocus(props.autoFocus);
    const classes = useInputFocusClasses(focused);
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
      _push(`<input${serverRenderer.ssrRenderAttr("id", _ctx.label)}${serverRenderer.ssrRenderDynamicModel(_ctx.type, inputText.value, null)}${serverRenderer.ssrRenderAttr("type", _ctx.type)} class="w-full outline-none dark:bg-dark-800"${serverRenderer.ssrRenderAttr("placeholder", _ctx.placeholder)}${serverRenderer.ssrRenderAttr("name", _ctx.name)}${serverRenderer.ssrIncludeBooleanAttr(_ctx.required) ? " required" : ""}${serverRenderer.ssrRenderAttr("autocomplete", _ctx.autocomplete)}></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/core/inputs/CoreInput.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
exports._sfc_main = _sfc_main;
exports.useFocus = useFocus;
exports.useInputFocusClasses = useInputFocusClasses;
