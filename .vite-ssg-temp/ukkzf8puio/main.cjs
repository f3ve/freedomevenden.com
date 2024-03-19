"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
const serverRenderer = require("vue/server-renderer");
const dayjs = require("dayjs");
const vueRouter = require("vue-router");
const core = require("@vueuse/core");
const vue$1 = require("@unhead/vue");
const vueNotify = require("@f3ve/vue-notify");
const viteSsg = require("vite-ssg");
const pinia = require("pinia");
const _sfc_main$a = /* @__PURE__ */ vue.defineComponent({
  __name: "CoreFooter",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "w-full flex items-center justify-center px-16 py-2 text-center text-sm" }, _attrs))}><p class="text-op-70 dark:text-op-75"> © ${serverRenderer.ssrInterpolate(vue.unref(dayjs)().format("YYYY"))} <a xmlns:cc="http://creativecommons.org/ns#" href="freedomevenden.com" property="cc:attributionName" rel="cc:attributionURL" class="underline"> Freedom Evenden </a><br><span xmlns:dct="http://purl.org/dc/terms/" property="dct:title"> Text and images </span> are licensed under <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/" class="underline" target="_blank"> CC BY-NC-SA 4.0 </a> . </p></footer>`);
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/core/app/CoreFooter.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = /* @__PURE__ */ vue.defineComponent({
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
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/core/CoreDivider.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ vue.defineComponent({
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
      const _component_core_divider = _sfc_main$9;
      _push(serverRenderer.ssrRenderComponent(vue.unref(tag), vue.mergeProps({
        href: vue.unref(href),
        class: ["relative core-btn", {
          "bg-primary": (vue.unref(isActive) || typeof vue.unref(isActive) === "undefined") && !_ctx.underline && !_ctx.noBg,
          "text-button": (vue.unref(isActive) || typeof vue.unref(isActive) === "undefined") && !_ctx.underline && !_ctx.noBg
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
                })}" data-v-a1598c33${_scopeId}></i>`);
              } else {
                _push2(`<!---->`);
              }
            }, _push2, _parent2, _scopeId);
            if (!_ctx.loading) {
              serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            } else {
              _push2(`<i class="i-svg-spinners-ring-resize" data-v-a1598c33${_scopeId}></i>`);
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
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/core/CoreBtn.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const __unplugin_components_0 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["__scopeId", "data-v-a1598c33"]]);
const _sfc_main$7 = /* @__PURE__ */ vue.defineComponent({
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
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "relative z-1000" }, _attrs))}>`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "toggler", {
        class: "menu-toggler",
        disabled: vue.unref(isVisible),
        onClick: showMenu
      }, null, _push, _parent);
      if (vue.unref(isVisible)) {
        _push(`<div class="not-prose absolute right-0 w-fit rounded shadow fe-border bg-background" style="${serverRenderer.ssrRenderStyle({ "min-width": "150px" })}">`);
        serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/core/containers/CoreMenu.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
function useTheme() {
  const isDark = core.useDark();
  const toggleDark = core.useToggle(isDark);
  return { toggleDark };
}
const _sfc_main$6 = /* @__PURE__ */ vue.defineComponent({
  __name: "CoreNavMenu",
  __ssrInlineRender: true,
  setup(__props) {
    const { toggleDark } = useTheme();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_core_menu = _sfc_main$7;
      const _component_core_btn = __unplugin_components_0;
      _push(serverRenderer.ssrRenderComponent(_component_core_menu, _attrs, {
        toggler: vue.withCtx((props, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(serverRenderer.ssrRenderComponent(_component_core_btn, vue.mergeProps({ icon: "i-mdi-menu" }, props, {
              title: "menu",
              "no-bg": ""
            }), null, _parent2, _scopeId));
          } else {
            return [
              vue.createVNode(_component_core_btn, vue.mergeProps({ icon: "i-mdi-menu" }, props, {
                title: "menu",
                "no-bg": ""
              }), null, 16)
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
            _push2(`</li><li${_scopeId}>`);
            _push2(serverRenderer.ssrRenderComponent(_component_core_btn, {
              to: "/contact",
              title: ""
            }, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Contact`);
                } else {
                  return [
                    vue.createTextVNode("Contact")
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
              icon: "i-mdi-mastodon",
              "no-bg": ""
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
              target: "_blank",
              "no-bg": ""
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
              rel: "noopener",
              "no-bg": ""
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
              class: "w-full",
              icon: "i-ci-sun dark:i-ci-moon",
              "aria-label": "Toggle Theme",
              "no-bg": "",
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
                  ]),
                  vue.createVNode("li", null, [
                    vue.createVNode(_component_core_btn, {
                      to: "/contact",
                      title: ""
                    }, {
                      default: vue.withCtx(() => [
                        vue.createTextVNode("Contact")
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
                      icon: "i-mdi-mastodon",
                      "no-bg": ""
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
                      target: "_blank",
                      "no-bg": ""
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
                      rel: "noopener",
                      "no-bg": ""
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
                      class: "w-full",
                      icon: "i-ci-sun dark:i-ci-moon",
                      "aria-label": "Toggle Theme",
                      "no-bg": "",
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
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/core/app/header/CoreNavMenu.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ vue.defineComponent({
  __name: "CoreNavButtons",
  __ssrInlineRender: true,
  props: {
    className: { default: "flex" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_core_btn = __unplugin_components_0;
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
      _push(serverRenderer.ssrRenderComponent(_component_core_btn, {
        to: "/contact",
        title: "Uses",
        underline: ""
      }, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Contact`);
          } else {
            return [
              vue.createTextVNode("Contact")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/core/app/header/CoreNavButtons.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _imports_0 = "/images/f3ve-logo-50x50.webp";
const _sfc_main$4 = /* @__PURE__ */ vue.defineComponent({
  __name: "CoreAppHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const { toggleDark } = useTheme();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_router_link = vue.resolveComponent("router-link");
      const _component_core_nav_buttons = _sfc_main$5;
      const _component_core_btn = __unplugin_components_0;
      const _component_core_nav_menu = _sfc_main$6;
      _push(`<header${serverRenderer.ssrRenderAttrs(vue.mergeProps({
        class: "m-a w-full flex items-center justify-between px-6 py-4 fe-border-b bg-background",
        style: { "height": "73px" }
      }, _attrs))}><div class="flex items-center">`);
      _push(serverRenderer.ssrRenderComponent(_component_router_link, {
        to: "/",
        noBg: "",
        class: "mr-1 rounded hoverable"
      }, {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${serverRenderer.ssrRenderAttr("src", _imports_0)} alt="Freedom Evenden&#39;s website logo" width="40px" height="40px" loading="eager"${_scopeId}>`);
          } else {
            return [
              vue.createVNode("img", {
                src: _imports_0,
                alt: "Freedom Evenden's website logo",
                width: "40px",
                height: "40px",
                loading: "eager"
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
        title: "twitter",
        "no-bg": ""
      }, null, _parent));
      _push(serverRenderer.ssrRenderComponent(_component_core_btn, {
        rel: "noopener",
        href: "https://mastodon.social/@f3ve",
        icon: "i-mdi-mastodon",
        target: "_blank",
        title: "Mastodon",
        "no-bg": ""
      }, null, _parent));
      _push(serverRenderer.ssrRenderComponent(_component_core_btn, {
        icon: "i-mdi-github",
        href: "https://github.com/f3ve",
        target: "_blank",
        rel: "noopener",
        title: "GitHub",
        "no-bg": ""
      }, null, _parent));
      _push(serverRenderer.ssrRenderComponent(_component_core_btn, {
        icon: "i-ci-sun dark:i-ci-moon",
        "aria-label": "Toggle Theme",
        title: "Toggle Theme",
        "no-bg": "",
        onClick: ($event) => vue.unref(toggleDark)()
      }, null, _parent));
      _push(`</address>`);
      _push(serverRenderer.ssrRenderComponent(_component_core_nav_menu, { class: "sm:hidden" }, null, _parent));
      _push(`</header>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/core/app/header/CoreAppHeader.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ vue.defineComponent({
  __name: "App",
  __ssrInlineRender: true,
  setup(__props) {
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
      const _component_CoreAppHeader = _sfc_main$4;
      const _component_RouterView = vue.resolveComponent("RouterView");
      const _component_CoreFooter = _sfc_main$a;
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "relative m-a min-h-screen" }, _attrs))}>`);
      _push(serverRenderer.ssrRenderComponent(_component_CoreAppHeader, null, null, _parent));
      _push(`<main style="${serverRenderer.ssrRenderStyle({ "padding-bottom": "100px" })}" class="min-h-full">`);
      _push(serverRenderer.ssrRenderComponent(_component_RouterView, null, null, _parent));
      _push(`</main>`);
      _push(serverRenderer.ssrRenderComponent(_component_CoreFooter, { class: "absolute bottom-0" }, null, _parent));
      _push(serverRenderer.ssrRenderComponent(vue.unref(vueNotify.VNotifications), null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/App.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
function formatDate(date) {
  return dayjs(date).format("MMMM D, YYYY");
}
function usePosts(limit) {
  const router = vueRouter.useRouter();
  const search = vue.ref("");
  const posts = vue.computed(() => {
    let p = router.getRoutes().filter((route) => route.path.startsWith("/blog/")).map((route) => ({
      path: route.path,
      ...route.meta.frontmatter
    })).filter((frontmatter) => {
      var _a, _b, _c, _d, _e, _f;
      const s = search.value.toLowerCase();
      return ((_a = frontmatter.title) == null ? void 0 : _a.toLowerCase().includes(s)) || ((_b = frontmatter.subtitle) == null ? void 0 : _b.toLowerCase().includes(s)) || ((_c = frontmatter.description) == null ? void 0 : _c.toLowerCase().includes(s)) || ((_d = frontmatter.path) == null ? void 0 : _d.toLowerCase().includes(s)) || ((_e = frontmatter.datePublished) == null ? void 0 : _e.toLowerCase().includes(s)) || ((_f = frontmatter.dateUpdated) == null ? void 0 : _f.toLowerCase().includes(s)) || frontmatter.datePublished && formatDate(frontmatter.datePublished).toLowerCase().includes(s) || frontmatter.dateUpdated && formatDate(frontmatter.dateUpdated).toLowerCase().includes(s);
    }).sort((a, b) => {
      if (a.datePublished && b.datePublished)
        return new Date(b.datePublished).getTime() - new Date(a.datePublished).getTime();
      return 1;
    });
    if (typeof limit !== "undefined") {
      p = p.slice(0, limit);
    }
    return p;
  });
  return {
    posts,
    search
  };
}
const _sfc_main$2 = /* @__PURE__ */ vue.defineComponent({
  __name: "PostsRecent",
  __ssrInlineRender: true,
  setup(__props) {
    const { posts } = usePosts(3);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_RouterLink = vue.resolveComponent("RouterLink");
      _push(`<ul${serverRenderer.ssrRenderAttrs(_attrs)}><!--[-->`);
      serverRenderer.ssrRenderList(vue.unref(posts), (post) => {
        _push(`<li>`);
        _push(serverRenderer.ssrRenderComponent(_component_RouterLink, {
          to: post.path
        }, {
          default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${serverRenderer.ssrInterpolate(post.title)}`);
            } else {
              return [
                vue.createTextVNode(vue.toDisplayString(post.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/posts/PostsRecent.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ vue.defineComponent({
  __name: "CoreMdWrapper",
  __ssrInlineRender: true,
  props: {
    frontmatter: {}
  },
  setup(__props) {
    const props = __props;
    const numberOfAnimations = vue.computed(() => {
      let count = 0;
      if (props.frontmatter.title)
        count++;
      if (props.frontmatter.subtitle)
        count++;
      if (props.frontmatter.datePublished || props.frontmatter.dateUpdated)
        count++;
      return count;
    });
    const bodyOrder = vue.computed(() => `animate-order-${numberOfAnimations.value}`);
    const dateOrder = vue.computed(
      () => `animate-order-${numberOfAnimations.value <= 1 ? numberOfAnimations.value : numberOfAnimations.value - 1}`
    );
    const subtitleOrder = vue.computed(
      () => `animate-order-${numberOfAnimations.value <= 1 ? numberOfAnimations.value : numberOfAnimations.value - 1}`
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "fade-in-up h-full" }, _attrs))}><article class="m-a min-h-full px-6 prose"><div class="pb-5 pt-10">`);
      if (_ctx.frontmatter.title) {
        _push(`<h1 class="animate mb-5 text-center">${serverRenderer.ssrInterpolate(_ctx.frontmatter.title.replace("- Freedom Evenden", ""))}</h1>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.frontmatter.subtitle) {
        _push(`<p class="${serverRenderer.ssrRenderClass([vue.unref(subtitleOrder), "animate text-center font-header"])}">${serverRenderer.ssrInterpolate(_ctx.frontmatter.subtitle)}</p>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.frontmatter.datePublished || _ctx.frontmatter.dateUpdated) {
        _push(`<div class="${serverRenderer.ssrRenderClass([vue.unref(dateOrder), "animate text-center text-sm"])}">`);
        if (_ctx.frontmatter.datePublished) {
          _push(`<p class="mb-0 font-header text-secondary">${serverRenderer.ssrInterpolate(vue.unref(formatDate)(_ctx.frontmatter.datePublished))}</p>`);
        } else {
          _push(`<!---->`);
        }
        if (_ctx.frontmatter.dateUpdated) {
          _push(`<p class="my-0 font-header text-accent"> Last Updated: ${serverRenderer.ssrInterpolate(vue.unref(formatDate)(_ctx.frontmatter.dateUpdated))}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="${serverRenderer.ssrRenderClass([vue.unref(bodyOrder), "animate md:px-16"])}">`);
      serverRenderer.ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></article></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/core/containers/CoreMdWrapper.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props, { expose: __expose }) {
    const frontmatter = { "title": "Freedom Evenden", "description": "Freedom Evenden's personal website", "image": "/images/eugene-golovesov-T7xcXo5iNEo-unsplash.jpg", "meta": [{ "name": "keywords", "content": "freedom evenden,freedom,evenden,programmer,obskur,f3ve" }, { "name": "type", "content": "website" }, { "property": "og:title", "content": "Freedom Evenden" }, { "name": "twitter:title", "content": "Freedom Evenden" }, { "name": "description", "content": "Freedom Evenden's personal website" }, { "property": "og:description", "content": "Freedom Evenden's personal website" }, { "name": "twitter:description", "content": "Freedom Evenden's personal website" }, { "property": "og:image", "content": "/images/eugene-golovesov-T7xcXo5iNEo-unsplash.jpg" }, { "name": "twitter:image", "content": "/images/eugene-golovesov-T7xcXo5iNEo-unsplash.jpg" }, { "name": "twitter:card", "content": "summary_large_image" }] };
    __expose({ frontmatter });
    const head = { "title": "Freedom Evenden", "meta": [{ "name": "keywords", "content": "freedom evenden,freedom,evenden,programmer,obskur,f3ve" }, { "name": "type", "content": "website" }, { "property": "og:title", "content": "Freedom Evenden" }, { "name": "twitter:title", "content": "Freedom Evenden" }, { "name": "description", "content": "Freedom Evenden's personal website" }, { "property": "og:description", "content": "Freedom Evenden's personal website" }, { "name": "twitter:description", "content": "Freedom Evenden's personal website" }, { "property": "og:image", "content": "/images/eugene-golovesov-T7xcXo5iNEo-unsplash.jpg" }, { "name": "twitter:image", "content": "/images/eugene-golovesov-T7xcXo5iNEo-unsplash.jpg" }, { "name": "twitter:card", "content": "summary_large_image" }] };
    vue$1.useHead(head);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CoreMdWrapper = _sfc_main$1;
      const _component_RouterLink = vue.resolveComponent("RouterLink");
      const _component_PostsRecent = _sfc_main$2;
      _push(serverRenderer.ssrRenderComponent(_component_CoreMdWrapper, vue.mergeProps({ frontmatter }, _attrs), {
        default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="markdown-body"${_scopeId}><h2 id="hey-%F0%9F%91%8B" tabindex="-1"${_scopeId}><a class="header-anchor" href="#hey-%F0%9F%91%8B"${_scopeId}>Hey 👋</a></h2><p${_scopeId}>I’m Freedom. Welcome to my little corner of the internet. I’m a Software Engineer based in Alaska. I specialize in Frontend Web Development, particularly building <a href="https://vuejs.org/" target="_blank" rel="noopener"${_scopeId}>Vue</a> based websites and applications. I also maintain a few `);
            _push2(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/projects" }, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`open-source projects`);
                } else {
                  return [
                    vue.createTextVNode("open-source projects")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`.</p><p${_scopeId}>If you’re interested in supporting me and my work, consider <a href="https://www.buymeacoffee.com/f3ve" target="_blank" rel="noopener"${_scopeId}>buying me a beer 🍺</a> or <a href="https://github.com/sponsors/f3ve" target="_blank" rel="noopener"${_scopeId}>sponsoring me on GitHub</a>.</p><p${_scopeId}>If you want to get in touch feel free to `);
            _push2(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/contact" }, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`contact me`);
                } else {
                  return [
                    vue.createTextVNode("contact me")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</p><h2 id="recent-posts" tabindex="-1"${_scopeId}><a class="header-anchor" href="#recent-posts"${_scopeId}>Recent Posts</a></h2>`);
            _push2(serverRenderer.ssrRenderComponent(_component_PostsRecent, null, null, _parent2, _scopeId));
            _push2(`<p${_scopeId}>Want to read more? `);
            _push2(serverRenderer.ssrRenderComponent(_component_RouterLink, { to: "/blog" }, {
              default: vue.withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`Checkout the blog!`);
                } else {
                  return [
                    vue.createTextVNode("Checkout the blog!")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</p></div>`);
          } else {
            return [
              vue.createVNode("div", { class: "markdown-body" }, [
                vue.createVNode("h2", {
                  id: "hey-%F0%9F%91%8B",
                  tabindex: "-1"
                }, [
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#hey-%F0%9F%91%8B"
                  }, "Hey 👋")
                ]),
                vue.createVNode("p", null, [
                  vue.createTextVNode("I’m Freedom. Welcome to my little corner of the internet. I’m a Software Engineer based in Alaska. I specialize in Frontend Web Development, particularly building "),
                  vue.createVNode("a", {
                    href: "https://vuejs.org/",
                    target: "_blank",
                    rel: "noopener"
                  }, "Vue"),
                  vue.createTextVNode(" based websites and applications. I also maintain a few "),
                  vue.createVNode(_component_RouterLink, { to: "/projects" }, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode("open-source projects")
                    ]),
                    _: 1
                  }),
                  vue.createTextVNode(".")
                ]),
                vue.createVNode("p", null, [
                  vue.createTextVNode("If you’re interested in supporting me and my work, consider "),
                  vue.createVNode("a", {
                    href: "https://www.buymeacoffee.com/f3ve",
                    target: "_blank",
                    rel: "noopener"
                  }, "buying me a beer 🍺"),
                  vue.createTextVNode(" or "),
                  vue.createVNode("a", {
                    href: "https://github.com/sponsors/f3ve",
                    target: "_blank",
                    rel: "noopener"
                  }, "sponsoring me on GitHub"),
                  vue.createTextVNode(".")
                ]),
                vue.createVNode("p", null, [
                  vue.createTextVNode("If you want to get in touch feel free to "),
                  vue.createVNode(_component_RouterLink, { to: "/contact" }, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode("contact me")
                    ]),
                    _: 1
                  })
                ]),
                vue.createVNode("h2", {
                  id: "recent-posts",
                  tabindex: "-1"
                }, [
                  vue.createVNode("a", {
                    class: "header-anchor",
                    href: "#recent-posts"
                  }, "Recent Posts")
                ]),
                vue.createVNode(_component_PostsRecent),
                vue.createVNode("p", null, [
                  vue.createTextVNode("Want to read more? "),
                  vue.createVNode(_component_RouterLink, { to: "/blog" }, {
                    default: vue.withCtx(() => [
                      vue.createTextVNode("Checkout the blog!")
                    ]),
                    _: 1
                  })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/index/index.md");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __pages_import_0__ = () => Promise.resolve().then(() => require("./assets/index-HAi5ZYUN.cjs"));
const __pages_import_1__ = () => Promise.resolve().then(() => require("./assets/index-BVTx76FU.cjs"));
const __pages_import_3__ = () => Promise.resolve().then(() => require("./assets/success-CgoufJDw.cjs"));
const __pages_import_4__ = () => Promise.resolve().then(() => require("./assets/index-BxwKK5fW.cjs"));
const __pages_import_5__ = () => Promise.resolve().then(() => require("./assets/error-CT8WMfTT.cjs"));
const __pages_import_6__ = () => Promise.resolve().then(() => require("./assets/website-updates-10-03-2023-B20sQEtN.cjs"));
const __pages_import_7__ = () => Promise.resolve().then(() => require("./assets/website-updates-02-26-2024-BCw3pLES.cjs"));
const __pages_import_8__ = () => Promise.resolve().then(() => require("./assets/website-updates-01-23-2024-D0-F0VX0.cjs"));
const __pages_import_9__ = () => Promise.resolve().then(() => require("./assets/vue-markdown-it-v0-2-0-BgJibFRn.cjs"));
const __pages_import_10__ = () => Promise.resolve().then(() => require("./assets/index-DXCIJaQQ.cjs"));
const __pages_import_11__ = () => Promise.resolve().then(() => require("./assets/how-to-fix-a-minimist-vulnerability-in-your-express-application-hBn7gwZ7.cjs"));
const __pages_import_12__ = () => Promise.resolve().then(() => require("./assets/how-to-create-your-own-medium-style-rich-text-editor-in-react-CRea6qQi.cjs"));
const __pages_import_13__ = () => Promise.resolve().then(() => require("./assets/how-to-create-custom-video-controls-in-react-native-B_Ek4wTI.cjs"));
const __pages_import_14__ = () => Promise.resolve().then(() => require("./assets/announcing-vue-notify-DrRL_KDE.cjs"));
const __pages_import_15__ = () => Promise.resolve().then(() => require("./assets/_...all_-CJm1t8hV.cjs"));
const routes = [{ "name": "uses", "path": "/uses", "component": __pages_import_0__, "props": true, "meta": { "frontmatter": { "title": "Uses", "description": "Links to different tools or services that Freedom Evenden uses regularly for web development or gaming.", "subtitle": "A list of tools and software Freedom Evenden uses for web development.", "meta": [{ "name": "type", "content": "website" }] } } }, { "name": "projects", "path": "/projects", "component": __pages_import_1__, "props": true, "meta": { "frontmatter": { "title": "Projects - Freedom Evenden", "subtitle": "Projects I'm currently working on or have worked on in the past.", "description": "Projects Freedom Evenden has worked on", "meta": [{ "name": "type", "content": "website" }], "projects": { "Current Role": [{ "name": "OBSKUR", "description": "Broadcasting Software built in Unreal Engine 5.", "role": "Frontend Web Developer", "link": "https://obskur.com" }], "Open-Source Projects": [{ "name": "ESLint Config", "description": "My personal eslint-config. Comes with support for Vue, TypeScript, UnoCSS, and Prettier. Designed for the new ESLint flat config style.", "role": "Creator & Maintainer", "link": "https://github.com/f3ve/eslint-config" }, { "name": "Vue Markdown-it", "description": "Vue component for integrating Markdown-it.", "role": "Creator & Maintainer", "link": "https://github.com/f3ve/vue-markdown-it" }], "Past": [{ "name": "PatentPal", "description": "Patent drafting software using natural language processing.", "role": "Full-Stack Web Developer", "link": "https://patentpal.com" }, { "name": "Avybe", "description": "Video Streaming social media platform", "role": "Full-Stack Web Developer" }] } } } }, { "name": "index", "path": "/", "component": _sfc_main, "props": true, "meta": { "frontmatter": { "title": "Freedom Evenden", "description": "Freedom Evenden's personal website", "image": "/images/eugene-golovesov-T7xcXo5iNEo-unsplash.jpg", "meta": [{ "name": "keywords", "content": "freedom evenden,freedom,evenden,programmer,obskur,f3ve" }, { "name": "type", "content": "website" }] } } }, { "name": "contact-success", "path": "/contact/success", "component": __pages_import_3__, "props": true, "meta": { "frontmatter": { "title": "Contact Success - Freedom Evenden", "description": "Your message was successfully sent.", "subtitle": "Thanks for contacting me!", "meta": [{ "name": "keywords", "content": "contact,freedom,evenden,email,contact freedom evenden" }] } } }, { "name": "contact", "path": "/contact", "component": __pages_import_4__, "props": true, "meta": { "frontmatter": { "title": "Contact - Freedom Evenden", "description": "Contact Freedom Evenden directly with business inquiries or questions", "subtitle": "Send me a message!", "meta": [{ "name": "keywords", "content": "contact,freedom,evenden,email,contact freedom evenden" }] } } }, { "name": "contact-error", "path": "/contact/error", "component": __pages_import_5__, "props": true, "meta": { "frontmatter": { "title": "Contact Error - Freedom Evenden", "description": "The contact form experienced an error.", "subtitle": "Oops!" } } }, { "name": "blog-website-updates-10-03-2023", "path": "/blog/website-updates-10-03-2023", "component": __pages_import_6__, "props": true, "meta": { "frontmatter": { "title": "Website Update October 3rd, 2023", "datePublished": "2023-10-04T00:00:00.000Z", "description": "I made some small changes to the layout, added social links, and more.", "meta": [{ "name": "type", "content": "article" }] } } }, { "name": "blog-website-updates-02-26-2024", "path": "/blog/website-updates-02-26-2024", "component": __pages_import_7__, "props": true, "meta": { "frontmatter": { "title": "Website Updates February 26th, 2024", "datePublished": "2024-02-26T12:00:00.000Z", "description": "Recent updates to Freedom Evenden's website.", "meta": [{ "name": "type", "content": "article" }] } } }, { "name": "blog-website-updates-01-23-2024", "path": "/blog/website-updates-01-23-2024", "component": __pages_import_8__, "props": true, "meta": { "frontmatter": { "title": "Website Update January 29th, 2024", "datePublished": "2024-01-29T00:00:00.000Z", "description": "Recent updates to Freedom Evenden's website.", "meta": [{ "name": "type", "content": "article" }] } } }, { "name": "blog-vue-markdown-it-v0-2-0", "path": "/blog/vue-markdown-it-v0-2-0", "component": __pages_import_9__, "props": true, "meta": { "frontmatter": { "title": "Vue Markdown-it v0.2.0", "datePublished": "2023-10-04T13:30:00.000Z", "description": "Announcing the release of @f3ve/vue-markdown-it v0.2.0", "meta": [{ "name": "type", "content": "article" }, { "name": "keywords", "content": "markdown-it,markdown,vue,vue-markdown-it,@f3ve/vue-markdown-it" }] } } }, { "name": "blog", "path": "/blog", "component": __pages_import_10__, "props": true, "meta": { "frontmatter": { "title": "Blog - Freedom Evenden", "description": "Freedom Evenden's Blog", "meta": [{ "name": "keywords", "content": "freedom evenden,freedom,evenden,blog,f3ve,freedom evenden's blog, freedom's blog, freedoms blog, freedom blog,f3ve blog, f3ve's blog" }, { "name": "type", "content": "website" }] } } }, { "name": "blog-how-to-fix-a-minimist-vulnerability-in-your-express-application", "path": "/blog/how-to-fix-a-minimist-vulnerability-in-your-express-application", "component": __pages_import_11__, "props": true, "meta": { "frontmatter": { "title": "How to fix a Minimist Vulnerability in Your Express Application", "description": "If your Express application uses Mocha to handle testing then you have probably been getting vulnerability warnings from GitHub. Here's how to fix it!", "datePublished": "2020-03-27T00:00:00.000Z", "dateUpdated": "2023-09-21T00:00:00.000Z", "meta": [{ "name": "keywords", "content": "how to fix a minimist vulnerability in your express application,how to,minimist,vulnerability,express,expressjs,express application,how to fix,fix" }, { "name": "type", "content": "article" }] } } }, { "name": "blog-how-to-create-your-own-medium-style-rich-text-editor-in-react", "path": "/blog/how-to-create-your-own-medium-style-rich-text-editor-in-react", "component": __pages_import_12__, "props": true, "meta": { "frontmatter": { "title": "How to Create Your Own Medium-Style Rich Text Editor in React", "description": "Learn how to create a custom text editor from scratch using React and JavaScript", "datePublished": "2020-06-25T00:00:00.000Z", "dateUpdated": "2023-09-21T00:00:00.000Z", "meta": [{ "name": "keywords", "content": "medium-style rich text editor, react, how to, create your own" }, { "name": "type", "content": "article" }] } } }, { "name": "blog-how-to-create-custom-video-controls-in-react-native", "path": "/blog/how-to-create-custom-video-controls-in-react-native", "component": __pages_import_13__, "props": true, "meta": { "frontmatter": { "title": "How to Create Custom Video Controls in React Native", "description": "In this post I walk you through how to create custom controls for videos in React Native.", "datePublished": "2020-12-18T00:00:00.000Z", "dateUpdated": "2023-09-17T00:00:00.000Z", "meta": [{ "name": "keywords", "content": "how to create custom video controls,react native,react,video controls" }, { "name": "type", "content": "article" }] } } }, { "name": "blog-announcing-vue-notify", "path": "/blog/announcing-vue-notify", "component": __pages_import_14__, "props": true, "meta": { "frontmatter": { "title": "Announcing Vue Notify", "description": "Freedom Evenden is excited to announce his latest web dev project and give you a small sample.", "datePublished": "2024-03-07T12:00:00.000Z", "meta": [{ "name": "type", "content": "article" }] } } }, { "name": "all", "path": "/:all(.*)*", "component": __pages_import_15__, "props": true, "meta": { "frontmatter": { "title": 404, "description": "Page not found. It either doesn't exist or has moved", "subtitle": "Not Found" } } }];
const createApp = viteSsg.ViteSSG(
  _sfc_main$3,
  {
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition && !to.hash) {
        savedPosition.behavior = "instant";
        return savedPosition;
      }
      if (!to.hash) {
        return { top: 0, behavior: "instant" };
      }
    },
    routes
  },
  ({ app }) => {
    const pinia$1 = pinia.createPinia();
    app.use(pinia$1);
  }
);
exports.__unplugin_components_0 = __unplugin_components_0;
exports._sfc_main = _sfc_main$1;
exports.createApp = createApp;
exports.formatDate = formatDate;
exports.usePosts = usePosts;
