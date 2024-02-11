"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
const serverRenderer = require("vue/server-renderer");
const vueRouter = require("vue-router");
const pinia = require("pinia");
const dayjs = require("dayjs");
const core = require("@vueuse/core");
const vue$1 = require("@unhead/vue");
require("unplugin-vue-router/runtime");
const viteSsg = require("vite-ssg");
const tailwind = "";
const main = "";
const markdown = "";
const highlightJs = "";
const __uno = "";
const _sfc_main$8 = /* @__PURE__ */ vue.defineComponent({
  __name: "CoreDivider",
  __ssrInlineRender: true,
  props: {
    fullWidth: { type: Boolean, default: true },
    height: { default: 2 }
  },
  setup(__props) {
    const props = __props;
    const show = vue.computed(() => props.fullWidth);
    const compHeight = vue.computed(
      () => typeof props.height === "number" || !/(px|%|vh|rem|em|pt)$/.test(props.height) ? `${props.height}px` : props.height
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: ["transition-width duration-300 ease-in-out bg-primary", {
          "w-0": !vue.unref(show),
          "w-full": vue.unref(show)
        }],
        style: { height: vue.unref(compHeight) }
      }, _attrs))}></div>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/core/CoreDivider.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ vue.defineComponent({
  __name: "CoreBtn",
  __ssrInlineRender: true,
  props: {
    to: {},
    replace: { type: Boolean },
    href: {},
    icon: {},
    underline: { type: Boolean },
    noBg: { type: Boolean },
    loading: { type: Boolean },
    tagName: {},
    active: { type: Boolean },
    disabled: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const link = props.to ? vue.reactive(
      vueRouter.useLink({
        to: props.to,
        replace: props == null ? void 0 : props.replace
      })
    ) : void 0;
    const href = vue.computed(() => (link == null ? void 0 : link.href) ? link.href : props.href);
    const tag = vue.computed(() => href.value ? "a" : props.tagName || "button");
    const isActive = vue.computed(() => props.active || (link == null ? void 0 : link.isActive));
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      const _component_core_divider = _sfc_main$8;
      _push(serverRenderer.ssrRenderComponent(vue.unref(tag), vue.mergeProps({
        href: vue.unref(href),
        class: ["relative core-btn", {
          "bg-primary": vue.unref(isActive) && !_ctx.underline && !_ctx.noBg,
          "text-on-primary-default": vue.unref(isActive) && !_ctx.underline && !_ctx.noBg
        }],
        disabled: vue.unref(isActive) || _ctx.disabled,
        onClick: (_a = vue.unref(link)) == null ? void 0 : _a.navigate
      }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            serverRenderer.ssrRenderSlot(_ctx.$slots, "icon", {
              class: { "mr-2": !!_ctx.$slots.default }
            }, () => {
              if (_ctx.icon) {
                _push2(`<i class="${serverRenderer.ssrRenderClass({
                  ...!!_ctx.icon && { [_ctx.icon]: true },
                  "mr-2": !!_ctx.$slots.default
                })}" data-v-d47a3189${_scopeId}></i>`);
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
            if (!_ctx.loading) {
              serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            } else {
              _push2(`<i class="i-svg-spinners-ring-resize" data-v-d47a3189${_scopeId}></i>`);
            }
            if (_ctx.underline) {
              _push2(serverRenderer.ssrRenderComponent(_component_core_divider, {
                "full-width": vue.unref(isActive),
                class: "absolute bottom-0 left-0"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              vue.renderSlot(_ctx.$slots, "icon", {
                class: { "mr-2": !!_ctx.$slots.default }
              }, () => [
                _ctx.icon ? (vue.openBlock(), vue.createBlock("i", {
                  key: 0,
                  class: {
                    ...!!_ctx.icon && { [_ctx.icon]: true },
                    "mr-2": !!_ctx.$slots.default
                  }
                }, null, 2)) : vue.createCommentVNode("", true)
              ], true),
              !_ctx.loading ? vue.renderSlot(_ctx.$slots, "default", { key: 0 }, void 0, true) : (vue.openBlock(), vue.createBlock("i", {
                key: 1,
                class: "i-svg-spinners-ring-resize"
              })),
              _ctx.underline ? (vue.openBlock(), vue.createBlock(_component_core_divider, {
                key: 2,
                "full-width": vue.unref(isActive),
                class: "absolute bottom-0 left-0"
              }, null, 8, ["full-width"])) : vue.createCommentVNode("", true)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const CoreBtn_vue_vue_type_style_index_0_scoped_d47a3189_lang = "";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/core/CoreBtn.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const __unplugin_components_2 = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-d47a3189"]]);
const useToastStore = pinia.defineStore("toast", () => {
  const isVisible = vue.ref(false);
  const text = vue.ref("");
  function show(message) {
    isVisible.value = true;
    text.value = message;
  }
  function hide() {
    isVisible.value = false;
    text.value = "";
  }
  return {
    isVisible,
    text,
    show,
    hide
  };
});
const _sfc_main$6 = /* @__PURE__ */ vue.defineComponent({
  __name: "CoreToast",
  __ssrInlineRender: true,
  setup(__props) {
    const toast = useToastStore();
    let timeout;
    vue.watch(
      () => toast.isVisible,
      () => {
        if (timeout)
          clearTimeout(timeout);
        timeout = setTimeout(() => {
          toast.hide();
        }, 5e3);
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_core_btn = __unplugin_components_2;
      if (vue.unref(toast).isVisible) {
        _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "absolute bottom-30 left-0 right-0 m-a max-w-lg w-fit rounded-lg bg-green px-4" }, _attrs))}><div class="flex"><p>${serverRenderer.ssrInterpolate(vue.unref(toast).text)}</p>`);
        _push(serverRenderer.ssrRenderComponent(_component_core_btn, {
          icon: "i-material-symbols-close",
          onClick: vue.unref(toast).hide
        }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/core/feedback/CoreToast.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ vue.defineComponent({
  __name: "CoreFooter",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "w-full flex items-center justify-center px-16 py-2 text-center text-sm" }, _attrs))}><p class="text-op-70 dark:text-op-75"> © ${serverRenderer.ssrInterpolate(vue.unref(dayjs)().format("YYYY"))} <a xmlns:cc="http://creativecommons.org/ns#" href="freedomevenden.com" property="cc:attributionName" rel="cc:attributionURL" class="underline"> Freedom Evenden </a><br><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title"> Text and images </span> are licensed under <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/" class="underline" target="_blank"> CC BY-NC-SA 4.0 </a> . </p></footer>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/core/app/CoreFooter.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ vue.defineComponent({
  __name: "CoreMenu",
  __ssrInlineRender: true,
  setup(__props) {
    const menu = vue.ref();
    const isVisible = vue.ref(false);
    core.onClickOutside(menu, () => {
      isVisible.value = false;
    });
    function showMenu() {
      if (!isVisible.value)
        isVisible.value = true;
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "relative" }, _attrs))}>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "toggler", {
        class: "menu-toggler",
        disabled: vue.unref(isVisible),
        onClick: showMenu
      }, null, _push, _parent);
      if (vue.unref(isVisible)) {
        _push(`<div class="not-prose absolute right-0 w-fit rounded shadow bg-surface" style="${serverRenderer.ssrRenderStyle({ "min-width": "150px" })}">`);
        serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/core/containers/CoreMenu.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
function useTheme() {
  const isDark = core.useDark();
  const toggleDark = core.useToggle(isDark);
  return { toggleDark };
}
const _sfc_main$3 = /* @__PURE__ */ vue.defineComponent({
  __name: "CoreNavMenu",
  __ssrInlineRender: true,
  setup(__props) {
    const { toggleDark } = useTheme();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_core_menu = _sfc_main$4;
      const _component_core_btn = __unplugin_components_2;
      _push(serverRenderer.ssrRenderComponent(_component_core_menu, _attrs, {
        toggler: vue.withCtx((props, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.ssrRenderComponent(_component_core_btn, vue.mergeProps({ icon: "i-mdi-menu" }, props, { title: "menu" }), null, _parent2, _scopeId));
          } else {
            return [
              vue.createVNode(_component_core_btn, vue.mergeProps({ icon: "i-mdi-menu" }, props, { title: "menu" }), null, 16)
            ];
          }
        }),
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<nav class="pa-4 fe-border-b"${_scopeId}><ul class="blog-list ma-0 list-none pl-0"${_scopeId}><li${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_core_btn, {
              to: "/blog",
              title: "Blog"
            }, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Blog`);
                } else {
                  return [
                    vue.createTextVNode("Blog")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</li><li${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_core_btn, {
              to: "/projects",
              title: "Projects"
            }, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Projects`);
                } else {
                  return [
                    vue.createTextVNode("Projects")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</li><li${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_core_btn, {
              to: "/uses",
              title: ""
            }, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Uses`);
                } else {
                  return [
                    vue.createTextVNode("Uses")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</li></ul></nav><address class="pa-4 not-italic fe-border-b"${_scopeId}><ul class="blog-list ma-0 list-none pl-0"${_scopeId}><li${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_core_btn, {
              rel: "noopener",
              href: "https://mastodon.social/@f3ve",
              target: "_blank",
              icon: "i-mdi-mastodon"
            }, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Mastodon `);
                } else {
                  return [
                    vue.createTextVNode(" Mastodon ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</li><li${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_core_btn, {
              rel: "noopener",
              href: "https://twitter.com/f3ve_",
              icon: "i-ri-twitter-x-fill",
              target: "_blank"
            }, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Twitter `);
                } else {
                  return [
                    vue.createTextVNode(" Twitter ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</li><li${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_core_btn, {
              icon: "i-mdi-github",
              href: "https://github.com/f3ve",
              target: "_blank",
              rel: "noopener"
            }, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` GitHub `);
                } else {
                  return [
                    vue.createTextVNode(" GitHub ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</li></ul></address><div class="pa-4"${_scopeId}><ul class="blog-list ma-0 list-none pl-0"${_scopeId}><li${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_core_btn, {
              icon: "i-ci-sun dark:i-ci-moon",
              "aria-label": "Toggle Theme",
              onClick: ($event) => vue.unref(toggleDark)()
            }, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` Theme `);
                } else {
                  return [
                    vue.createTextVNode(" Theme ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</li></ul></div>`);
          } else {
            return [
              vue.createVNode("nav", { class: "pa-4 fe-border-b" }, [
                vue.createVNode("ul", { class: "blog-list ma-0 list-none pl-0" }, [
                  vue.createVNode("li", null, [
                    vue.createVNode(_component_core_btn, {
                      to: "/blog",
                      title: "Blog"
                    }, {
                      default: vue.withCtx(() => [
                        vue.createTextVNode("Blog")
                      ]),
                      _: 1
                    })
                  ]),
                  vue.createVNode("li", null, [
                    vue.createVNode(_component_core_btn, {
                      to: "/projects",
                      title: "Projects"
                    }, {
                      default: vue.withCtx(() => [
                        vue.createTextVNode("Projects")
                      ]),
                      _: 1
                    })
                  ]),
                  vue.createVNode("li", null, [
                    vue.createVNode(_component_core_btn, {
                      to: "/uses",
                      title: ""
                    }, {
                      default: vue.withCtx(() => [
                        vue.createTextVNode("Uses")
                      ]),
                      _: 1
                    })
                  ])
                ])
              ]),
              vue.createVNode("address", { class: "pa-4 not-italic fe-border-b" }, [
                vue.createVNode("ul", { class: "blog-list ma-0 list-none pl-0" }, [
                  vue.createVNode("li", null, [
                    vue.createVNode(_component_core_btn, {
                      rel: "noopener",
                      href: "https://mastodon.social/@f3ve",
                      target: "_blank",
                      icon: "i-mdi-mastodon"
                    }, {
                      default: vue.withCtx(() => [
                        vue.createTextVNode(" Mastodon ")
                      ]),
                      _: 1
                    })
                  ]),
                  vue.createVNode("li", null, [
                    vue.createVNode(_component_core_btn, {
                      rel: "noopener",
                      href: "https://twitter.com/f3ve_",
                      icon: "i-ri-twitter-x-fill",
                      target: "_blank"
                    }, {
                      default: vue.withCtx(() => [
                        vue.createTextVNode(" Twitter ")
                      ]),
                      _: 1
                    })
                  ]),
                  vue.createVNode("li", null, [
                    vue.createVNode(_component_core_btn, {
                      icon: "i-mdi-github",
                      href: "https://github.com/f3ve",
                      target: "_blank",
                      rel: "noopener"
                    }, {
                      default: vue.withCtx(() => [
                        vue.createTextVNode(" GitHub ")
                      ]),
                      _: 1
                    })
                  ])
                ])
              ]),
              vue.createVNode("div", { class: "pa-4" }, [
                vue.createVNode("ul", { class: "blog-list ma-0 list-none pl-0" }, [
                  vue.createVNode("li", null, [
                    vue.createVNode(_component_core_btn, {
                      icon: "i-ci-sun dark:i-ci-moon",
                      "aria-label": "Toggle Theme",
                      onClick: ($event) => vue.unref(toggleDark)()
                    }, {
                      default: vue.withCtx(() => [
                        vue.createTextVNode(" Theme ")
                      ]),
                      _: 1
                    }, 8, ["onClick"])
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
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/core/app/header/CoreNavMenu.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ vue.defineComponent({
  __name: "CoreNavButtons",
  __ssrInlineRender: true,
  props: {
    className: { default: "flex" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_core_btn = __unplugin_components_2;
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: _ctx.className }, _attrs))}><nav class="flex items-center justify-center">`);
      _push(serverRenderer.ssrRenderComponent(_component_core_btn, {
        to: "/blog",
        title: "blog",
        underline: ""
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
      _push(serverRenderer.ssrRenderComponent(_component_core_btn, {
        to: "/projects",
        title: "Projects",
        underline: ""
      }, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Projects`);
          } else {
            return [
              vue.createTextVNode("Projects")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(serverRenderer.ssrRenderComponent(_component_core_btn, {
        to: "/uses",
        title: "Uses",
        underline: ""
      }, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Uses`);
          } else {
            return [
              vue.createTextVNode("Uses")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/core/app/header/CoreNavButtons.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _imports_0 = "/android-chrome-192x192.png";
const _sfc_main$1 = /* @__PURE__ */ vue.defineComponent({
  __name: "CoreAppHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const { toggleDark } = useTheme();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_core_btn = __unplugin_components_2;
      const _component_core_nav_buttons = _sfc_main$2;
      const _component_core_nav_menu = _sfc_main$3;
      _push(`<header${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "m-a w-full flex items-center justify-between px-6 py-4 fe-border-b bg-base" }, _attrs))}><div class="flex items-center">`);
      _push(serverRenderer.ssrRenderComponent(_component_core_btn, {
        to: "/",
        noBg: ""
      }, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${serverRenderer.ssrRenderAttr("src", _imports_0)} style="${serverRenderer.ssrRenderStyle({ "width": "40px" })}" alt="Freedom Evenden&#39;s website logo"${_scopeId}>`);
          } else {
            return [
              vue.createVNode("img", {
                src: _imports_0,
                style: { "width": "40px" },
                alt: "Freedom Evenden's website logo"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(serverRenderer.ssrRenderComponent(_component_core_nav_buttons, { className: "hidden sm:flex" }, null, _parent));
      _push(`</div><address class="hidden items-center sm:flex">`);
      _push(serverRenderer.ssrRenderComponent(_component_core_btn, {
        rel: "noopener",
        href: "https://twitter.com/f3ve_",
        icon: "i-ri-twitter-x-fill",
        target: "_blank",
        title: "twitter"
      }, null, _parent));
      _push(serverRenderer.ssrRenderComponent(_component_core_btn, {
        rel: "noopener",
        href: "https://mastodon.social/@f3ve",
        icon: "i-mdi-mastodon",
        target: "_blank",
        title: "Mastodon"
      }, null, _parent));
      _push(serverRenderer.ssrRenderComponent(_component_core_btn, {
        icon: "i-mdi-github",
        href: "https://github.com/f3ve",
        target: "_blank",
        rel: "noopener",
        title: "GitHub"
      }, null, _parent));
      _push(serverRenderer.ssrRenderComponent(_component_core_btn, {
        icon: "i-ci-sun dark:i-ci-moon",
        "aria-label": "Toggle Theme",
        title: "Toggle Theme",
        onClick: ($event) => vue.unref(toggleDark)()
      }, null, _parent));
      _push(`</address>`);
      _push(serverRenderer.ssrRenderComponent(_component_core_nav_menu, { class: "sm:hidden" }, null, _parent));
      _push(`</header>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/core/app/header/CoreAppHeader.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
function formatDate(date) {
  return dayjs(date).format("MMMM D, YYYY");
}
const routes = [
  {
    path: "/",
    name: "Root",
    component: () => Promise.resolve().then(() => require("./assets/index-2e3a8843.cjs")),
    /* no children */
    meta: {
      "frontmatter": {
        "title": "Freedom Evenden",
        "description": "Freedom Evenden's personal website",
        "image": "/images/eugene-golovesov-T7xcXo5iNEo-unsplash.jpg",
        "meta": [
          {
            "name": "keywords",
            "content": "freedom evenden,freedom,evenden,programmer,obskur,f3ve"
          },
          {
            "name": "type",
            "content": "website"
          }
        ]
      }
    }
  },
  {
    path: "/:all(.*)",
    name: "$All",
    component: () => Promise.resolve().then(() => require("./assets/_...all_-15f11cce.cjs")),
    /* no children */
    meta: {
      "frontmatter": {
        "title": "Not Found",
        "description": "Page not found"
      }
    }
  },
  {
    path: "/blog",
    /* internal name: 'Blog' */
    /* no component */
    children: [
      {
        path: "",
        name: "Blog",
        component: () => Promise.resolve().then(() => require("./assets/index-2710c7ff.cjs")),
        /* no children */
        meta: {
          "frontmatter": {
            "title": "Blog - Freedom Evenden",
            "description": "Freedom Evenden's Blog",
            "meta": [
              {
                "name": "keywords",
                "content": "freedom evenden,freedom,evenden,blog,f3ve,freedom evenden's blog, freedom's blog, freedoms blog, freedom blog,f3ve blog, f3ve's blog"
              },
              {
                "name": "type",
                "content": "website"
              }
            ]
          }
        }
      },
      {
        path: "how-to-create-custom-video-controls-in-react-native",
        name: "BlogHowToCreateCustomVideoControlsInReactNative",
        component: () => Promise.resolve().then(() => require("./assets/how-to-create-custom-video-controls-in-react-native-e2bebfa0.cjs")),
        /* no children */
        meta: {
          "frontmatter": {
            "title": "How to Create Custom Video Controls in React Native",
            "description": "In this post I walk you through how to create custom controls for videos in React Native.",
            "datePublished": "2020-12-18T00:00:00.000Z",
            "dateUpdated": "2023-09-17T00:00:00.000Z",
            "meta": [
              {
                "name": "keywords",
                "content": "how to create custom video controls,react native,react,video controls"
              },
              {
                "name": "type",
                "content": "article"
              }
            ]
          }
        }
      },
      {
        path: "how-to-create-your-own-medium-style-rich-text-editor-in-react",
        name: "BlogHowToCreateYourOwnMediumStyleRichTextEditorInReact",
        component: () => Promise.resolve().then(() => require("./assets/how-to-create-your-own-medium-style-rich-text-editor-in-react-e41b7918.cjs")),
        /* no children */
        meta: {
          "frontmatter": {
            "title": "How to Create Your Own Medium-Style Rich Text Editor in React",
            "description": "Learn how to create a custom text editor from scratch using React and JavaScript",
            "datePublished": "2020-06-25T00:00:00.000Z",
            "dateUpdated": "2023-09-21T00:00:00.000Z",
            "meta": [
              {
                "name": "keywords",
                "content": "medium-style rich text editor, react, how to, create your own"
              },
              {
                "name": "type",
                "content": "article"
              }
            ]
          }
        }
      },
      {
        path: "how-to-fix-a-minimist-vulnerability-in-your-express-application",
        name: "BlogHowToFixAMinimistVulnerabilityInYourExpressApplication",
        component: () => Promise.resolve().then(() => require("./assets/how-to-fix-a-minimist-vulnerability-in-your-express-application-99a8d6c7.cjs")),
        /* no children */
        meta: {
          "frontmatter": {
            "title": "How to fix a Minimist Vulnerability in Your Express Application",
            "description": "If your Express application uses Mocha to handle testing then you have probably been getting vulnerability warnings from GitHub. Here's how to fix it!",
            "datePublished": "2020-03-27T00:00:00.000Z",
            "dateUpdated": "2023-09-21T00:00:00.000Z",
            "meta": [
              {
                "name": "keywords",
                "content": "how to fix a minimist vulnerability in your express application,how to,minimist,vulnerability,express,expressjs,express application,how to fix,fix"
              },
              {
                "name": "type",
                "content": "article"
              }
            ]
          }
        }
      },
      {
        path: "vue-markdown-it-v0-2-0",
        name: "BlogVueMarkdownItV020",
        component: () => Promise.resolve().then(() => require("./assets/vue-markdown-it-v0-2-0-c635fdfc.cjs")),
        /* no children */
        meta: {
          "frontmatter": {
            "title": "Vue Markdown-it v0.2.0",
            "datePublished": "2023-10-04T13:30:00.000Z",
            "description": "Announcing the release of @f3ve/vue-markdown-it v0.2.0",
            "meta": [
              {
                "name": "type",
                "content": "article"
              },
              {
                "name": "keywords",
                "content": "markdown-it,markdown,vue,vue-markdown-it,@f3ve/vue-markdown-it"
              }
            ]
          }
        }
      },
      {
        path: "website-updates-01-23-2024",
        name: "BlogWebsiteUpdates01232024",
        component: () => Promise.resolve().then(() => require("./assets/website-updates-01-23-2024-65393b9e.cjs")),
        /* no children */
        meta: {
          "frontmatter": {
            "title": "Website Update January 29th, 2024",
            "datePublished": "2024-01-29T00:00:00.000Z",
            "description": "Recent updates to Freedom Evenden's website.",
            "meta": [
              {
                "name": "type",
                "content": "article"
              }
            ]
          }
        }
      },
      {
        path: "website-updates-10-03-2023",
        name: "BlogWebsiteUpdates10032023",
        component: () => Promise.resolve().then(() => require("./assets/website-updates-10-03-2023-21153bce.cjs")),
        /* no children */
        meta: {
          "frontmatter": {
            "title": "Website Update October 3rd, 2023",
            "datePublished": "2023-10-04T00:00:00.000Z",
            "description": "I made some small changes to the layout, added social links, and more.",
            "meta": [
              {
                "name": "type",
                "content": "article"
              }
            ]
          }
        }
      }
    ]
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => Promise.resolve().then(() => require("./assets/contact-3b8329ed.cjs")),
    /* no children */
    meta: {
      "frontmatter": {
        "title": "Contact - Freedom Evenden",
        "description": "Contact Freedom Evenden",
        "subtitle": "Send me a message!",
        "meta": [
          {
            "name": "keywords",
            "content": "contact,freedom,evenden,email,contact freedom evenden"
          }
        ]
      }
    }
  },
  {
    path: "/projects",
    name: "Projects",
    component: () => Promise.resolve().then(() => require("./assets/projects-1b2a7124.cjs")),
    /* no children */
    meta: {
      "frontmatter": {
        "title": "Projects - Freedom Evenden",
        "subtitle": "Projects I'm currently working on or have worked on in the past.",
        "description": "Projects Freedom Evenden has worked on",
        "meta": [
          {
            "name": "type",
            "content": "website"
          }
        ],
        "projects": {
          "Current Role": [
            {
              "name": "OBSKUR",
              "description": "Broadcasting Software built in Unreal Engine 5.",
              "role": "Frontend Web Developer",
              "link": "https://obskur.com"
            }
          ],
          "Open-Source Projects": [
            {
              "name": "ESLint Config",
              "description": "My personal eslint-config. Comes with support for Vue, TypeScript, UnoCSS, and Prettier. Designed for the new ESLint flat config style.",
              "role": "Creator & Maintainer",
              "link": "https://github.com/f3ve/eslint-config"
            },
            {
              "name": "Vue Markdown-it",
              "description": "Vue component for integrating Markdown-it.",
              "role": "Creator & Maintainer",
              "link": "https://github.com/f3ve/vue-markdown-it"
            }
          ],
          "Past": [
            {
              "name": "PatentPal",
              "description": "Patent drafting software using natural language processing.",
              "role": "Full-Stack Web Developer",
              "link": "https://patentpal.com"
            },
            {
              "name": "Avybe",
              "description": "Video Streaming social media platform",
              "role": "Full-Stack Web Developer"
            }
          ]
        }
      }
    }
  },
  {
    path: "/uses",
    name: "Uses",
    component: () => Promise.resolve().then(() => require("./assets/uses-1222554f.cjs")),
    /* no children */
    meta: {
      "frontmatter": {
        "title": "Uses",
        "description": "Links to different tools or services that Freedom Evenden uses regularly for web development or gaming.",
        "subtitle": "A list of tools and software Freedom Evenden uses for web development.",
        "meta": [
          {
            "name": "type",
            "content": "website"
          }
        ]
      }
    }
  }
];
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "App",
  __ssrInlineRender: true,
  setup(__props) {
    const route = vueRouter.useRoute();
    const frontmatter = route.frontmatter;
    vue$1.useHead({
      title: "Freedom Evenden",
      meta: [
        {
          name: "description",
          content: "Freedom Evenden's personal website"
        },
        {
          name: "og:image",
          content: "https://freedomevenden.com/android-chrome-512x512.png"
        },
        {
          name: "twitter:image",
          content: "https://freedomevenden.com/android-chrome-512x512.png"
        },
        {
          name: "twitter:card",
          content: "summary_large_image"
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CoreAppHeader = _sfc_main$1;
      const _component_RouterView = vue.resolveComponent("RouterView");
      const _component_CoreFooter = _sfc_main$5;
      const _component_core_toast = _sfc_main$6;
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "relative m-a min-h-screen" }, _attrs))}>`);
      if (!!vue.unref(frontmatter).image) {
        _push(`<div class="h-screen fe-border-b" style="${serverRenderer.ssrRenderStyle({
          backgroundImage: `url('${vue.unref(frontmatter).image}')`,
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        })}"></div>`);
      } else {
        _push(`<!---->`);
      }
      if (!!vue.unref(frontmatter).image) {
        _push(`<div class="h-screen fe-border-b" style="${serverRenderer.ssrRenderStyle({
          backgroundImage: `url('${vue.unref(frontmatter).image}')`,
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        })}"></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="mb-10 py-10">`);
      if (vue.unref(frontmatter).title) {
        _push(`<h1 class="mb-5 text-center">${serverRenderer.ssrInterpolate(vue.unref(frontmatter).title.replace("- Freedom Evenden", ""))}</h1>`);
      } else {
        _push(`<!---->`);
      }
      if (vue.unref(frontmatter).subtitle) {
        _push(`<p class="text-center">${serverRenderer.ssrInterpolate(vue.unref(frontmatter).subtitle)}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (vue.unref(frontmatter).datePublished || vue.unref(frontmatter).dateUpdated) {
        _push(`<div class="text-center text-sm">`);
        if (vue.unref(frontmatter).datePublished) {
          _push(`<p class="mb-0 font-header text-primary">${serverRenderer.ssrInterpolate(vue.unref(formatDate)(vue.unref(frontmatter).datePublished))}</p>`);
        } else {
          _push(`<!---->`);
        }
        if (vue.unref(frontmatter).dateUpdated) {
          _push(`<p class="text-color-op-75 my-0 font-header italic"> Last Updated: ${serverRenderer.ssrInterpolate(vue.unref(formatDate)(vue.unref(frontmatter).dateUpdated))}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(serverRenderer.ssrRenderComponent(_component_CoreAppHeader, null, null, _parent));
      _push(`</div><main style="${serverRenderer.ssrRenderStyle({ "padding-bottom": "100px" })}" class="min-h-full">`);
      _push(serverRenderer.ssrRenderComponent(_component_RouterView, null, null, _parent));
      _push(`</main>`);
      _push(serverRenderer.ssrRenderComponent(_component_CoreFooter, { class: "absolute bottom-0" }, null, _parent));
      _push(serverRenderer.ssrRenderComponent(_component_core_toast, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/App.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const createApp = viteSsg.ViteSSG(
  _sfc_main,
  {
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition && !to.hash) {
        savedPosition.behavior = "instant";
        return savedPosition;
      }
      if (!to.hash) {
        return { top: 0, behavior: "smooth" };
      }
    },
    routes
  },
  ({ app }) => {
    const pinia$1 = pinia.createPinia();
    app.use(pinia$1);
  }
);
exports.__unplugin_components_2 = __unplugin_components_2;
exports.createApp = createApp;
exports.formatDate = formatDate;
exports.useToastStore = useToastStore;
