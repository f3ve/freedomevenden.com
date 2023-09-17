"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const vue = require("vue");
const serverRenderer = require("vue/server-renderer");
const viteSsg = require("vite-ssg");
const axios = require("axios");
const pinia = require("pinia");
const globals = "";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$3 = {};
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  const _component_RouterView = vue.resolveComponent("RouterView");
  _push(`<div${serverRenderer.ssrRenderAttrs(vue.mergeProps({ class: "app-body" }, _attrs))}>`);
  _push(serverRenderer.ssrRenderComponent(_component_RouterView, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/App.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const App = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$2 = {};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  const _component_router_link = vue.resolveComponent("router-link");
  const _component_router_view = vue.resolveComponent("router-view");
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}><header class="flex align-center justify-between"><h1>This is the default Layout!</h1><nav class="flex flex-gap-1"><div>`);
  _push(serverRenderer.ssrRenderComponent(_component_router_link, { to: "/" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Home`);
      } else {
        return [
          vue.createTextVNode("Home")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div>`);
  _push(serverRenderer.ssrRenderComponent(_component_router_link, { to: { name: "about" } }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`About`);
      } else {
        return [
          vue.createTextVNode("About")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div>`);
  _push(serverRenderer.ssrRenderComponent(_component_router_link, { to: { name: "contact" } }, {
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
  _push(`</div><div>`);
  _push(serverRenderer.ssrRenderComponent(_component_router_link, { to: { name: "blog" } }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`blog`);
      } else {
        return [
          vue.createTextVNode("blog")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></nav></header><main>`);
  _push(serverRenderer.ssrRenderComponent(_component_router_view, null, null, _parent));
  _push(`</main></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/layouts/default.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __layout_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_router_link = vue.resolveComponent("router-link");
  const _component_router_view = vue.resolveComponent("router-view");
  _push(`<div${serverRenderer.ssrRenderAttrs(_attrs)}><header class="flex align-center justify-between"><h1>This is a different layout!</h1><nav class="flex flex-gap-1"><div>`);
  _push(serverRenderer.ssrRenderComponent(_component_router_link, { to: "/" }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Home`);
      } else {
        return [
          vue.createTextVNode("Home")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div>`);
  _push(serverRenderer.ssrRenderComponent(_component_router_link, { to: { name: "about" } }, {
    default: vue.withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`About`);
      } else {
        return [
          vue.createTextVNode("About")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div>`);
  _push(serverRenderer.ssrRenderComponent(_component_router_link, { to: { name: "contact" } }, {
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
  _push(`</div></nav></header><main>`);
  _push(serverRenderer.ssrRenderComponent(_component_router_view, null, null, _parent));
  _push(`</main></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/layouts/example.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __layout_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const layouts = {
  "default": __layout_0,
  "example": __layout_1
};
function setupLayouts(routes2) {
  return routes2.map((route) => {
    var _a2;
    return {
      path: route.path,
      meta: route.meta,
      component: layouts[((_a2 = route.meta) == null ? void 0 : _a2.layout) || "default"],
      children: route.path === "/" ? [route] : [{ ...route, path: "" }]
    };
  });
}
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_vue_markdown_it = vue.resolveComponent("vue-markdown-it");
  _push(serverRenderer.ssrRenderComponent(_component_vue_markdown_it, vue.mergeProps({ source: "# This is a title!" }, _attrs), null, _parent));
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = vue.useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __pages_import_1__ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
const __pages_import_0__ = () => Promise.resolve().then(() => require("./assets/index-0ef57f30.js"));
const __pages_import_2__ = () => Promise.resolve().then(() => require("./assets/contact-75b250bc.js"));
const __pages_import_3__ = () => Promise.resolve().then(() => require("./assets/about-6bebeafd.js"));
const __pages_import_4__ = () => Promise.resolve().then(() => require("./assets/_slug_-14c48501.js"));
const routes$1 = [{ "name": "blog", "path": "/blog", "component": __pages_import_0__, "props": true }, { "name": "index", "path": "/", "component": __pages_import_1__, "props": true }, { "name": "contact", "path": "/contact", "component": __pages_import_2__, "props": true, "meta": { "layout": "example" } }, { "name": "about", "path": "/about", "component": __pages_import_3__, "props": true }, { "name": "post", "path": "/blog/:slug", "component": __pages_import_4__, "props": true }];
function Qr(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function Kr(t) {
  if (t.__esModule)
    return t;
  var n = t.default;
  if (typeof n == "function") {
    var r = function o() {
      return this instanceof o ? Reflect.construct(n, arguments, this.constructor) : n.apply(this, arguments);
    };
    r.prototype = n.prototype;
  } else
    r = {};
  return Object.defineProperty(r, "__esModule", { value: true }), Object.keys(t).forEach(function(o) {
    var e = Object.getOwnPropertyDescriptor(t, o);
    Object.defineProperty(r, o, e.get ? e : {
      enumerable: true,
      get: function() {
        return t[o];
      }
    });
  }), r;
}
var D = {};
const Xr = "Á", nt = "á", rt = "Ă", tt = "ă", ot = "∾", et = "∿", st = "∾̳", ct = "Â", it = "â", at = "´", lt = "А", ut = "а", pt = "Æ", ft = "æ", ht = "⁡", dt = "𝔄", gt = "𝔞", mt = "À", bt = "à", _t = "ℵ", kt = "ℵ", xt = "Α", vt = "α", yt = "Ā", Ct = "ā", wt = "⨿", At = "&", Dt = "&", qt = "⩕", Et = "⩓", St = "∧", Ft = "⩜", Tt = "⩘", Rt = "⩚", Lt = "∠", zt = "⦤", It = "∠", Bt = "⦨", Nt = "⦩", Mt = "⦪", Pt = "⦫", Ot = "⦬", Ut = "⦭", Vt = "⦮", $t = "⦯", Gt = "∡", jt = "∟", Ht = "⊾", Zt = "⦝", Jt = "∢", Wt = "Å", Yt = "⍼", Qt = "Ą", Kt = "ą", Xt = "𝔸", no = "𝕒", ro = "⩯", to = "≈", oo = "⩰", eo = "≊", so = "≋", co = "'", io = "⁡", ao = "≈", lo = "≊", uo = "Å", po = "å", fo = "𝒜", ho = "𝒶", go = "≔", mo = "*", bo = "≈", _o = "≍", ko = "Ã", xo = "ã", vo = "Ä", yo = "ä", Co = "∳", wo = "⨑", Ao = "≌", Do = "϶", qo = "‵", Eo = "∽", So = "⋍", Fo = "∖", To = "⫧", Ro = "⊽", Lo = "⌅", zo = "⌆", Io = "⌅", Bo = "⎵", No = "⎶", Mo = "≌", Po = "Б", Oo = "б", Uo = "„", Vo = "∵", $o = "∵", Go = "∵", jo = "⦰", Ho = "϶", Zo = "ℬ", Jo = "ℬ", Wo = "Β", Yo = "β", Qo = "ℶ", Ko = "≬", Xo = "𝔅", ne = "𝔟", re = "⋂", te = "◯", oe = "⋃", ee = "⨀", se = "⨁", ce = "⨂", ie = "⨆", ae = "★", le = "▽", ue = "△", pe = "⨄", fe = "⋁", he = "⋀", de = "⤍", ge = "⧫", me = "▪", be = "▴", _e = "▾", ke = "◂", xe = "▸", ve = "␣", ye = "▒", Ce = "░", we = "▓", Ae = "█", De = "=⃥", qe = "≡⃥", Ee = "⫭", Se = "⌐", Fe = "𝔹", Te = "𝕓", Re = "⊥", Le = "⊥", ze = "⋈", Ie = "⧉", Be = "┐", Ne = "╕", Me = "╖", Pe = "╗", Oe = "┌", Ue = "╒", Ve = "╓", $e = "╔", Ge = "─", je = "═", He = "┬", Ze = "╤", Je = "╥", We = "╦", Ye = "┴", Qe = "╧", Ke = "╨", Xe = "╩", ns = "⊟", rs = "⊞", ts = "⊠", os = "┘", es = "╛", ss = "╜", cs = "╝", is = "└", as = "╘", ls = "╙", us = "╚", ps = "│", fs = "║", hs = "┼", ds = "╪", gs = "╫", ms = "╬", bs = "┤", _s = "╡", ks = "╢", xs = "╣", vs = "├", ys = "╞", Cs = "╟", ws = "╠", As = "‵", Ds = "˘", qs = "˘", Es = "¦", Ss = "𝒷", Fs = "ℬ", Ts = "⁏", Rs = "∽", Ls = "⋍", zs = "⧅", Is = "\\", Bs = "⟈", Ns = "•", Ms = "•", Ps = "≎", Os = "⪮", Us = "≏", Vs = "≎", $s = "≏", Gs = "Ć", js = "ć", Hs = "⩄", Zs = "⩉", Js = "⩋", Ws = "∩", Ys = "⋒", Qs = "⩇", Ks = "⩀", Xs = "ⅅ", nc = "∩︀", rc = "⁁", tc = "ˇ", oc = "ℭ", ec = "⩍", sc = "Č", cc = "č", ic = "Ç", ac = "ç", lc = "Ĉ", uc = "ĉ", pc = "∰", fc = "⩌", hc = "⩐", dc = "Ċ", gc = "ċ", mc = "¸", bc = "¸", _c = "⦲", kc = "¢", xc = "·", vc = "·", yc = "𝔠", Cc = "ℭ", wc = "Ч", Ac = "ч", Dc = "✓", qc = "✓", Ec = "Χ", Sc = "χ", Fc = "ˆ", Tc = "≗", Rc = "↺", Lc = "↻", zc = "⊛", Ic = "⊚", Bc = "⊝", Nc = "⊙", Mc = "®", Pc = "Ⓢ", Oc = "⊖", Uc = "⊕", Vc = "⊗", $c = "○", Gc = "⧃", jc = "≗", Hc = "⨐", Zc = "⫯", Jc = "⧂", Wc = "∲", Yc = "”", Qc = "’", Kc = "♣", Xc = "♣", ni = ":", ri = "∷", ti = "⩴", oi = "≔", ei = "≔", si = ",", ci = "@", ii = "∁", ai = "∘", li = "∁", ui = "ℂ", pi = "≅", fi = "⩭", hi = "≡", di = "∮", gi = "∯", mi = "∮", bi = "𝕔", _i = "ℂ", ki = "∐", xi = "∐", vi = "©", yi = "©", Ci = "℗", wi = "∳", Ai = "↵", Di = "✗", qi = "⨯", Ei = "𝒞", Si = "𝒸", Fi = "⫏", Ti = "⫑", Ri = "⫐", Li = "⫒", zi = "⋯", Ii = "⤸", Bi = "⤵", Ni = "⋞", Mi = "⋟", Pi = "↶", Oi = "⤽", Ui = "⩈", Vi = "⩆", $i = "≍", Gi = "∪", ji = "⋓", Hi = "⩊", Zi = "⊍", Ji = "⩅", Wi = "∪︀", Yi = "↷", Qi = "⤼", Ki = "⋞", Xi = "⋟", na = "⋎", ra = "⋏", ta = "¤", oa = "↶", ea = "↷", sa = "⋎", ca = "⋏", ia = "∲", aa = "∱", la = "⌭", ua = "†", pa = "‡", fa = "ℸ", ha = "↓", da = "↡", ga = "⇓", ma = "‐", ba = "⫤", _a = "⊣", ka = "⤏", xa = "˝", va = "Ď", ya = "ď", Ca = "Д", wa = "д", Aa = "‡", Da = "⇊", qa = "ⅅ", Ea = "ⅆ", Sa = "⤑", Fa = "⩷", Ta = "°", Ra = "∇", La = "Δ", za = "δ", Ia = "⦱", Ba = "⥿", Na = "𝔇", Ma = "𝔡", Pa = "⥥", Oa = "⇃", Ua = "⇂", Va = "´", $a = "˙", Ga = "˝", ja = "`", Ha = "˜", Za = "⋄", Ja = "⋄", Wa = "⋄", Ya = "♦", Qa = "♦", Ka = "¨", Xa = "ⅆ", nl = "ϝ", rl = "⋲", tl = "÷", ol = "÷", el = "⋇", sl = "⋇", cl = "Ђ", il = "ђ", al = "⌞", ll = "⌍", ul = "$", pl = "𝔻", fl = "𝕕", hl = "¨", dl = "˙", gl = "⃜", ml = "≐", bl = "≑", _l = "≐", kl = "∸", xl = "∔", vl = "⊡", yl = "⌆", Cl = "∯", wl = "¨", Al = "⇓", Dl = "⇐", ql = "⇔", El = "⫤", Sl = "⟸", Fl = "⟺", Tl = "⟹", Rl = "⇒", Ll = "⊨", zl = "⇑", Il = "⇕", Bl = "∥", Nl = "⤓", Ml = "↓", Pl = "↓", Ol = "⇓", Ul = "⇵", Vl = "̑", $l = "⇊", Gl = "⇃", jl = "⇂", Hl = "⥐", Zl = "⥞", Jl = "⥖", Wl = "↽", Yl = "⥟", Ql = "⥗", Kl = "⇁", Xl = "↧", nu = "⊤", ru = "⤐", tu = "⌟", ou = "⌌", eu = "𝒟", su = "𝒹", cu = "Ѕ", iu = "ѕ", au = "⧶", lu = "Đ", uu = "đ", pu = "⋱", fu = "▿", hu = "▾", du = "⇵", gu = "⥯", mu = "⦦", bu = "Џ", _u = "џ", ku = "⟿", xu = "É", vu = "é", yu = "⩮", Cu = "Ě", wu = "ě", Au = "Ê", Du = "ê", qu = "≖", Eu = "≕", Su = "Э", Fu = "э", Tu = "⩷", Ru = "Ė", Lu = "ė", zu = "≑", Iu = "ⅇ", Bu = "≒", Nu = "𝔈", Mu = "𝔢", Pu = "⪚", Ou = "È", Uu = "è", Vu = "⪖", $u = "⪘", Gu = "⪙", ju = "∈", Hu = "⏧", Zu = "ℓ", Ju = "⪕", Wu = "⪗", Yu = "Ē", Qu = "ē", Ku = "∅", Xu = "∅", np = "◻", rp = "∅", tp = "▫", op = " ", ep = " ", sp = " ", cp = "Ŋ", ip = "ŋ", ap = " ", lp = "Ę", up = "ę", pp = "𝔼", fp = "𝕖", hp = "⋕", dp = "⧣", gp = "⩱", mp = "ε", bp = "Ε", _p = "ε", kp = "ϵ", xp = "≖", vp = "≕", yp = "≂", Cp = "⪖", wp = "⪕", Ap = "⩵", Dp = "=", qp = "≂", Ep = "≟", Sp = "⇌", Fp = "≡", Tp = "⩸", Rp = "⧥", Lp = "⥱", zp = "≓", Ip = "ℯ", Bp = "ℰ", Np = "≐", Mp = "⩳", Pp = "≂", Op = "Η", Up = "η", Vp = "Ð", $p = "ð", Gp = "Ë", jp = "ë", Hp = "€", Zp = "!", Jp = "∃", Wp = "∃", Yp = "ℰ", Qp = "ⅇ", Kp = "ⅇ", Xp = "≒", nf = "Ф", rf = "ф", tf = "♀", of = "ﬃ", ef = "ﬀ", sf = "ﬄ", cf = "𝔉", af = "𝔣", lf = "ﬁ", uf = "◼", pf = "▪", ff = "fj", hf = "♭", df = "ﬂ", gf = "▱", mf = "ƒ", bf = "𝔽", _f = "𝕗", kf = "∀", xf = "∀", vf = "⋔", yf = "⫙", Cf = "ℱ", wf = "⨍", Af = "½", Df = "⅓", qf = "¼", Ef = "⅕", Sf = "⅙", Ff = "⅛", Tf = "⅔", Rf = "⅖", Lf = "¾", zf = "⅗", If = "⅜", Bf = "⅘", Nf = "⅚", Mf = "⅝", Pf = "⅞", Of = "⁄", Uf = "⌢", Vf = "𝒻", $f = "ℱ", Gf = "ǵ", jf = "Γ", Hf = "γ", Zf = "Ϝ", Jf = "ϝ", Wf = "⪆", Yf = "Ğ", Qf = "ğ", Kf = "Ģ", Xf = "Ĝ", nh = "ĝ", rh = "Г", th = "г", oh = "Ġ", eh = "ġ", sh = "≥", ch = "≧", ih = "⪌", ah = "⋛", lh = "≥", uh = "≧", ph = "⩾", fh = "⪩", hh = "⩾", dh = "⪀", gh = "⪂", mh = "⪄", bh = "⋛︀", _h = "⪔", kh = "𝔊", xh = "𝔤", vh = "≫", yh = "⋙", Ch = "⋙", wh = "ℷ", Ah = "Ѓ", Dh = "ѓ", qh = "⪥", Eh = "≷", Sh = "⪒", Fh = "⪤", Th = "⪊", Rh = "⪊", Lh = "⪈", zh = "≩", Ih = "⪈", Bh = "≩", Nh = "⋧", Mh = "𝔾", Ph = "𝕘", Oh = "`", Uh = "≥", Vh = "⋛", $h = "≧", Gh = "⪢", jh = "≷", Hh = "⩾", Zh = "≳", Jh = "𝒢", Wh = "ℊ", Yh = "≳", Qh = "⪎", Kh = "⪐", Xh = "⪧", nd = "⩺", rd = ">", td = ">", od = "≫", ed = "⋗", sd = "⦕", cd = "⩼", id = "⪆", ad = "⥸", ld = "⋗", ud = "⋛", pd = "⪌", fd = "≷", hd = "≳", dd = "≩︀", gd = "≩︀", md = "ˇ", bd = " ", _d = "½", kd = "ℋ", xd = "Ъ", vd = "ъ", yd = "⥈", Cd = "↔", wd = "⇔", Ad = "↭", Dd = "^", qd = "ℏ", Ed = "Ĥ", Sd = "ĥ", Fd = "♥", Td = "♥", Rd = "…", Ld = "⊹", zd = "𝔥", Id = "ℌ", Bd = "ℋ", Nd = "⤥", Md = "⤦", Pd = "⇿", Od = "∻", Ud = "↩", Vd = "↪", $d = "𝕙", Gd = "ℍ", jd = "―", Hd = "─", Zd = "𝒽", Jd = "ℋ", Wd = "ℏ", Yd = "Ħ", Qd = "ħ", Kd = "≎", Xd = "≏", ng = "⁃", rg = "‐", tg = "Í", og = "í", eg = "⁣", sg = "Î", cg = "î", ig = "И", ag = "и", lg = "İ", ug = "Е", pg = "е", fg = "¡", hg = "⇔", dg = "𝔦", gg = "ℑ", mg = "Ì", bg = "ì", _g = "ⅈ", kg = "⨌", xg = "∭", vg = "⧜", yg = "℩", Cg = "Ĳ", wg = "ĳ", Ag = "Ī", Dg = "ī", qg = "ℑ", Eg = "ⅈ", Sg = "ℐ", Fg = "ℑ", Tg = "ı", Rg = "ℑ", Lg = "⊷", zg = "Ƶ", Ig = "⇒", Bg = "℅", Ng = "∞", Mg = "⧝", Pg = "ı", Og = "⊺", Ug = "∫", Vg = "∬", $g = "ℤ", Gg = "∫", jg = "⊺", Hg = "⋂", Zg = "⨗", Jg = "⨼", Wg = "⁣", Yg = "⁢", Qg = "Ё", Kg = "ё", Xg = "Į", nm = "į", rm = "𝕀", tm = "𝕚", om = "Ι", em = "ι", sm = "⨼", cm = "¿", im = "𝒾", am = "ℐ", lm = "∈", um = "⋵", pm = "⋹", fm = "⋴", hm = "⋳", dm = "∈", gm = "⁢", mm = "Ĩ", bm = "ĩ", _m = "І", km = "і", xm = "Ï", vm = "ï", ym = "Ĵ", Cm = "ĵ", wm = "Й", Am = "й", Dm = "𝔍", qm = "𝔧", Em = "ȷ", Sm = "𝕁", Fm = "𝕛", Tm = "𝒥", Rm = "𝒿", Lm = "Ј", zm = "ј", Im = "Є", Bm = "є", Nm = "Κ", Mm = "κ", Pm = "ϰ", Om = "Ķ", Um = "ķ", Vm = "К", $m = "к", Gm = "𝔎", jm = "𝔨", Hm = "ĸ", Zm = "Х", Jm = "х", Wm = "Ќ", Ym = "ќ", Qm = "𝕂", Km = "𝕜", Xm = "𝒦", n0 = "𝓀", r0 = "⇚", t0 = "Ĺ", o0 = "ĺ", e0 = "⦴", s0 = "ℒ", c0 = "Λ", i0 = "λ", a0 = "⟨", l0 = "⟪", u0 = "⦑", p0 = "⟨", f0 = "⪅", h0 = "ℒ", d0 = "«", g0 = "⇤", m0 = "⤟", b0 = "←", _0 = "↞", k0 = "⇐", x0 = "⤝", v0 = "↩", y0 = "↫", C0 = "⤹", w0 = "⥳", A0 = "↢", D0 = "⤙", q0 = "⤛", E0 = "⪫", S0 = "⪭", F0 = "⪭︀", T0 = "⤌", R0 = "⤎", L0 = "❲", z0 = "{", I0 = "[", B0 = "⦋", N0 = "⦏", M0 = "⦍", P0 = "Ľ", O0 = "ľ", U0 = "Ļ", V0 = "ļ", $0 = "⌈", G0 = "{", j0 = "Л", H0 = "л", Z0 = "⤶", J0 = "“", W0 = "„", Y0 = "⥧", Q0 = "⥋", K0 = "↲", X0 = "≤", nb = "≦", rb = "⟨", tb = "⇤", ob = "←", eb = "←", sb = "⇐", cb = "⇆", ib = "↢", ab = "⌈", lb = "⟦", ub = "⥡", pb = "⥙", fb = "⇃", hb = "⌊", db = "↽", gb = "↼", mb = "⇇", bb = "↔", _b = "↔", kb = "⇔", xb = "⇆", vb = "⇋", yb = "↭", Cb = "⥎", wb = "↤", Ab = "⊣", Db = "⥚", qb = "⋋", Eb = "⧏", Sb = "⊲", Fb = "⊴", Tb = "⥑", Rb = "⥠", Lb = "⥘", zb = "↿", Ib = "⥒", Bb = "↼", Nb = "⪋", Mb = "⋚", Pb = "≤", Ob = "≦", Ub = "⩽", Vb = "⪨", $b = "⩽", Gb = "⩿", jb = "⪁", Hb = "⪃", Zb = "⋚︀", Jb = "⪓", Wb = "⪅", Yb = "⋖", Qb = "⋚", Kb = "⪋", Xb = "⋚", n_ = "≦", r_ = "≶", t_ = "≶", o_ = "⪡", e_ = "≲", s_ = "⩽", c_ = "≲", i_ = "⥼", a_ = "⌊", l_ = "𝔏", u_ = "𝔩", p_ = "≶", f_ = "⪑", h_ = "⥢", d_ = "↽", g_ = "↼", m_ = "⥪", b_ = "▄", __ = "Љ", k_ = "љ", x_ = "⇇", v_ = "≪", y_ = "⋘", C_ = "⌞", w_ = "⇚", A_ = "⥫", D_ = "◺", q_ = "Ŀ", E_ = "ŀ", S_ = "⎰", F_ = "⎰", T_ = "⪉", R_ = "⪉", L_ = "⪇", z_ = "≨", I_ = "⪇", B_ = "≨", N_ = "⋦", M_ = "⟬", P_ = "⇽", O_ = "⟦", U_ = "⟵", V_ = "⟵", $_ = "⟸", G_ = "⟷", j_ = "⟷", H_ = "⟺", Z_ = "⟼", J_ = "⟶", W_ = "⟶", Y_ = "⟹", Q_ = "↫", K_ = "↬", X_ = "⦅", nk = "𝕃", rk = "𝕝", tk = "⨭", ok = "⨴", ek = "∗", sk = "_", ck = "↙", ik = "↘", ak = "◊", lk = "◊", uk = "⧫", pk = "(", fk = "⦓", hk = "⇆", dk = "⌟", gk = "⇋", mk = "⥭", bk = "‎", _k = "⊿", kk = "‹", xk = "𝓁", vk = "ℒ", yk = "↰", Ck = "↰", wk = "≲", Ak = "⪍", Dk = "⪏", qk = "[", Ek = "‘", Sk = "‚", Fk = "Ł", Tk = "ł", Rk = "⪦", Lk = "⩹", zk = "<", Ik = "<", Bk = "≪", Nk = "⋖", Mk = "⋋", Pk = "⋉", Ok = "⥶", Uk = "⩻", Vk = "◃", $k = "⊴", Gk = "◂", jk = "⦖", Hk = "⥊", Zk = "⥦", Jk = "≨︀", Wk = "≨︀", Yk = "¯", Qk = "♂", Kk = "✠", Xk = "✠", nx = "↦", rx = "↦", tx = "↧", ox = "↤", ex = "↥", sx = "▮", cx = "⨩", ix = "М", ax = "м", lx = "—", ux = "∺", px = "∡", fx = " ", hx = "ℳ", dx = "𝔐", gx = "𝔪", mx = "℧", bx = "µ", _x = "*", kx = "⫰", xx = "∣", vx = "·", yx = "⊟", Cx = "−", wx = "∸", Ax = "⨪", Dx = "∓", qx = "⫛", Ex = "…", Sx = "∓", Fx = "⊧", Tx = "𝕄", Rx = "𝕞", Lx = "∓", zx = "𝓂", Ix = "ℳ", Bx = "∾", Nx = "Μ", Mx = "μ", Px = "⊸", Ox = "⊸", Ux = "∇", Vx = "Ń", $x = "ń", Gx = "∠⃒", jx = "≉", Hx = "⩰̸", Zx = "≋̸", Jx = "ŉ", Wx = "≉", Yx = "♮", Qx = "ℕ", Kx = "♮", Xx = " ", nv = "≎̸", rv = "≏̸", tv = "⩃", ov = "Ň", ev = "ň", sv = "Ņ", cv = "ņ", iv = "≇", av = "⩭̸", lv = "⩂", uv = "Н", pv = "н", fv = "–", hv = "⤤", dv = "↗", gv = "⇗", mv = "↗", bv = "≠", _v = "≐̸", kv = "​", xv = "​", vv = "​", yv = "​", Cv = "≢", wv = "⤨", Av = "≂̸", Dv = "≫", qv = "≪", Ev = `
`, Sv = "∄", Fv = "∄", Tv = "𝔑", Rv = "𝔫", Lv = "≧̸", zv = "≱", Iv = "≱", Bv = "≧̸", Nv = "⩾̸", Mv = "⩾̸", Pv = "⋙̸", Ov = "≵", Uv = "≫⃒", Vv = "≯", $v = "≯", Gv = "≫̸", jv = "↮", Hv = "⇎", Zv = "⫲", Jv = "∋", Wv = "⋼", Yv = "⋺", Qv = "∋", Kv = "Њ", Xv = "њ", ny = "↚", ry = "⇍", ty = "‥", oy = "≦̸", ey = "≰", sy = "↚", cy = "⇍", iy = "↮", ay = "⇎", ly = "≰", uy = "≦̸", py = "⩽̸", fy = "⩽̸", hy = "≮", dy = "⋘̸", gy = "≴", my = "≪⃒", by = "≮", _y = "⋪", ky = "⋬", xy = "≪̸", vy = "∤", yy = "⁠", Cy = " ", wy = "𝕟", Ay = "ℕ", Dy = "⫬", qy = "¬", Ey = "≢", Sy = "≭", Fy = "∦", Ty = "∉", Ry = "≠", Ly = "≂̸", zy = "∄", Iy = "≯", By = "≱", Ny = "≧̸", My = "≫̸", Py = "≹", Oy = "⩾̸", Uy = "≵", Vy = "≎̸", $y = "≏̸", Gy = "∉", jy = "⋵̸", Hy = "⋹̸", Zy = "∉", Jy = "⋷", Wy = "⋶", Yy = "⧏̸", Qy = "⋪", Ky = "⋬", Xy = "≮", nC = "≰", rC = "≸", tC = "≪̸", oC = "⩽̸", eC = "≴", sC = "⪢̸", cC = "⪡̸", iC = "∌", aC = "∌", lC = "⋾", uC = "⋽", pC = "⊀", fC = "⪯̸", hC = "⋠", dC = "∌", gC = "⧐̸", mC = "⋫", bC = "⋭", _C = "⊏̸", kC = "⋢", xC = "⊐̸", vC = "⋣", yC = "⊂⃒", CC = "⊈", wC = "⊁", AC = "⪰̸", DC = "⋡", qC = "≿̸", EC = "⊃⃒", SC = "⊉", FC = "≁", TC = "≄", RC = "≇", LC = "≉", zC = "∤", IC = "∦", BC = "∦", NC = "⫽⃥", MC = "∂̸", PC = "⨔", OC = "⊀", UC = "⋠", VC = "⊀", $C = "⪯̸", GC = "⪯̸", jC = "⤳̸", HC = "↛", ZC = "⇏", JC = "↝̸", WC = "↛", YC = "⇏", QC = "⋫", KC = "⋭", XC = "⊁", nw = "⋡", rw = "⪰̸", tw = "𝒩", ow = "𝓃", ew = "∤", sw = "∦", cw = "≁", iw = "≄", aw = "≄", lw = "∤", uw = "∦", pw = "⋢", fw = "⋣", hw = "⊄", dw = "⫅̸", gw = "⊈", mw = "⊂⃒", bw = "⊈", _w = "⫅̸", kw = "⊁", xw = "⪰̸", vw = "⊅", yw = "⫆̸", Cw = "⊉", ww = "⊃⃒", Aw = "⊉", Dw = "⫆̸", qw = "≹", Ew = "Ñ", Sw = "ñ", Fw = "≸", Tw = "⋪", Rw = "⋬", Lw = "⋫", zw = "⋭", Iw = "Ν", Bw = "ν", Nw = "#", Mw = "№", Pw = " ", Ow = "≍⃒", Uw = "⊬", Vw = "⊭", $w = "⊮", Gw = "⊯", jw = "≥⃒", Hw = ">⃒", Zw = "⤄", Jw = "⧞", Ww = "⤂", Yw = "≤⃒", Qw = "<⃒", Kw = "⊴⃒", Xw = "⤃", n1 = "⊵⃒", r1 = "∼⃒", t1 = "⤣", o1 = "↖", e1 = "⇖", s1 = "↖", c1 = "⤧", i1 = "Ó", a1 = "ó", l1 = "⊛", u1 = "Ô", p1 = "ô", f1 = "⊚", h1 = "О", d1 = "о", g1 = "⊝", m1 = "Ő", b1 = "ő", _1 = "⨸", k1 = "⊙", x1 = "⦼", v1 = "Œ", y1 = "œ", C1 = "⦿", w1 = "𝔒", A1 = "𝔬", D1 = "˛", q1 = "Ò", E1 = "ò", S1 = "⧁", F1 = "⦵", T1 = "Ω", R1 = "∮", L1 = "↺", z1 = "⦾", I1 = "⦻", B1 = "‾", N1 = "⧀", M1 = "Ō", P1 = "ō", O1 = "Ω", U1 = "ω", V1 = "Ο", $1 = "ο", G1 = "⦶", j1 = "⊖", H1 = "𝕆", Z1 = "𝕠", J1 = "⦷", W1 = "“", Y1 = "‘", Q1 = "⦹", K1 = "⊕", X1 = "↻", nA = "⩔", rA = "∨", tA = "⩝", oA = "ℴ", eA = "ℴ", sA = "ª", cA = "º", iA = "⊶", aA = "⩖", lA = "⩗", uA = "⩛", pA = "Ⓢ", fA = "𝒪", hA = "ℴ", dA = "Ø", gA = "ø", mA = "⊘", bA = "Õ", _A = "õ", kA = "⨶", xA = "⨷", vA = "⊗", yA = "Ö", CA = "ö", wA = "⌽", AA = "‾", DA = "⏞", qA = "⎴", EA = "⏜", SA = "¶", FA = "∥", TA = "∥", RA = "⫳", LA = "⫽", zA = "∂", IA = "∂", BA = "П", NA = "п", MA = "%", PA = ".", OA = "‰", UA = "⊥", VA = "‱", $A = "𝔓", GA = "𝔭", jA = "Φ", HA = "φ", ZA = "ϕ", JA = "ℳ", WA = "☎", YA = "Π", QA = "π", KA = "⋔", XA = "ϖ", nD = "ℏ", rD = "ℎ", tD = "ℏ", oD = "⨣", eD = "⊞", sD = "⨢", cD = "+", iD = "∔", aD = "⨥", lD = "⩲", uD = "±", pD = "±", fD = "⨦", hD = "⨧", dD = "±", gD = "ℌ", mD = "⨕", bD = "𝕡", _D = "ℙ", kD = "£", xD = "⪷", vD = "⪻", yD = "≺", CD = "≼", wD = "⪷", AD = "≺", DD = "≼", qD = "≺", ED = "⪯", SD = "≼", FD = "≾", TD = "⪯", RD = "⪹", LD = "⪵", zD = "⋨", ID = "⪯", BD = "⪳", ND = "≾", MD = "′", PD = "″", OD = "ℙ", UD = "⪹", VD = "⪵", $D = "⋨", GD = "∏", jD = "∏", HD = "⌮", ZD = "⌒", JD = "⌓", WD = "∝", YD = "∝", QD = "∷", KD = "∝", XD = "≾", nq = "⊰", rq = "𝒫", tq = "𝓅", oq = "Ψ", eq = "ψ", sq = " ", cq = "𝔔", iq = "𝔮", aq = "⨌", lq = "𝕢", uq = "ℚ", pq = "⁗", fq = "𝒬", hq = "𝓆", dq = "ℍ", gq = "⨖", mq = "?", bq = "≟", _q = '"', kq = '"', xq = "⇛", vq = "∽̱", yq = "Ŕ", Cq = "ŕ", wq = "√", Aq = "⦳", Dq = "⟩", qq = "⟫", Eq = "⦒", Sq = "⦥", Fq = "⟩", Tq = "»", Rq = "⥵", Lq = "⇥", zq = "⤠", Iq = "⤳", Bq = "→", Nq = "↠", Mq = "⇒", Pq = "⤞", Oq = "↪", Uq = "↬", Vq = "⥅", $q = "⥴", Gq = "⤖", jq = "↣", Hq = "↝", Zq = "⤚", Jq = "⤜", Wq = "∶", Yq = "ℚ", Qq = "⤍", Kq = "⤏", Xq = "⤐", nE = "❳", rE = "}", tE = "]", oE = "⦌", eE = "⦎", sE = "⦐", cE = "Ř", iE = "ř", aE = "Ŗ", lE = "ŗ", uE = "⌉", pE = "}", fE = "Р", hE = "р", dE = "⤷", gE = "⥩", mE = "”", bE = "”", _E = "↳", kE = "ℜ", xE = "ℛ", vE = "ℜ", yE = "ℝ", CE = "ℜ", wE = "▭", AE = "®", DE = "®", qE = "∋", EE = "⇋", SE = "⥯", FE = "⥽", TE = "⌋", RE = "𝔯", LE = "ℜ", zE = "⥤", IE = "⇁", BE = "⇀", NE = "⥬", ME = "Ρ", PE = "ρ", OE = "ϱ", UE = "⟩", VE = "⇥", $E = "→", GE = "→", jE = "⇒", HE = "⇄", ZE = "↣", JE = "⌉", WE = "⟧", YE = "⥝", QE = "⥕", KE = "⇂", XE = "⌋", nS = "⇁", rS = "⇀", tS = "⇄", oS = "⇌", eS = "⇉", sS = "↝", cS = "↦", iS = "⊢", aS = "⥛", lS = "⋌", uS = "⧐", pS = "⊳", fS = "⊵", hS = "⥏", dS = "⥜", gS = "⥔", mS = "↾", bS = "⥓", _S = "⇀", kS = "˚", xS = "≓", vS = "⇄", yS = "⇌", CS = "‏", wS = "⎱", AS = "⎱", DS = "⫮", qS = "⟭", ES = "⇾", SS = "⟧", FS = "⦆", TS = "𝕣", RS = "ℝ", LS = "⨮", zS = "⨵", IS = "⥰", BS = ")", NS = "⦔", MS = "⨒", PS = "⇉", OS = "⇛", US = "›", VS = "𝓇", $S = "ℛ", GS = "↱", jS = "↱", HS = "]", ZS = "’", JS = "’", WS = "⋌", YS = "⋊", QS = "▹", KS = "⊵", XS = "▸", nF = "⧎", rF = "⧴", tF = "⥨", oF = "℞", eF = "Ś", sF = "ś", cF = "‚", iF = "⪸", aF = "Š", lF = "š", uF = "⪼", pF = "≻", fF = "≽", hF = "⪰", dF = "⪴", gF = "Ş", mF = "ş", bF = "Ŝ", _F = "ŝ", kF = "⪺", xF = "⪶", vF = "⋩", yF = "⨓", CF = "≿", wF = "С", AF = "с", DF = "⊡", qF = "⋅", EF = "⩦", SF = "⤥", FF = "↘", TF = "⇘", RF = "↘", LF = "§", zF = ";", IF = "⤩", BF = "∖", NF = "∖", MF = "✶", PF = "𝔖", OF = "𝔰", UF = "⌢", VF = "♯", $F = "Щ", GF = "щ", jF = "Ш", HF = "ш", ZF = "↓", JF = "←", WF = "∣", YF = "∥", QF = "→", KF = "↑", XF = "­", nT = "Σ", rT = "σ", tT = "ς", oT = "ς", eT = "∼", sT = "⩪", cT = "≃", iT = "≃", aT = "⪞", lT = "⪠", uT = "⪝", pT = "⪟", fT = "≆", hT = "⨤", dT = "⥲", gT = "←", mT = "∘", bT = "∖", _T = "⨳", kT = "⧤", xT = "∣", vT = "⌣", yT = "⪪", CT = "⪬", wT = "⪬︀", AT = "Ь", DT = "ь", qT = "⌿", ET = "⧄", ST = "/", FT = "𝕊", TT = "𝕤", RT = "♠", LT = "♠", zT = "∥", IT = "⊓", BT = "⊓︀", NT = "⊔", MT = "⊔︀", PT = "√", OT = "⊏", UT = "⊑", VT = "⊏", $T = "⊑", GT = "⊐", jT = "⊒", HT = "⊐", ZT = "⊒", JT = "□", WT = "□", YT = "⊓", QT = "⊏", KT = "⊑", XT = "⊐", n2 = "⊒", r2 = "⊔", t2 = "▪", o2 = "□", e2 = "▪", s2 = "→", c2 = "𝒮", i2 = "𝓈", a2 = "∖", l2 = "⌣", u2 = "⋆", p2 = "⋆", f2 = "☆", h2 = "★", d2 = "ϵ", g2 = "ϕ", m2 = "¯", b2 = "⊂", _2 = "⋐", k2 = "⪽", x2 = "⫅", v2 = "⊆", y2 = "⫃", C2 = "⫁", w2 = "⫋", A2 = "⊊", D2 = "⪿", q2 = "⥹", E2 = "⊂", S2 = "⋐", F2 = "⊆", T2 = "⫅", R2 = "⊆", L2 = "⊊", z2 = "⫋", I2 = "⫇", B2 = "⫕", N2 = "⫓", M2 = "⪸", P2 = "≻", O2 = "≽", U2 = "≻", V2 = "⪰", $2 = "≽", G2 = "≿", j2 = "⪰", H2 = "⪺", Z2 = "⪶", J2 = "⋩", W2 = "≿", Y2 = "∋", Q2 = "∑", K2 = "∑", X2 = "♪", nR = "¹", rR = "²", tR = "³", oR = "⊃", eR = "⋑", sR = "⪾", cR = "⫘", iR = "⫆", aR = "⊇", lR = "⫄", uR = "⊃", pR = "⊇", fR = "⟉", hR = "⫗", dR = "⥻", gR = "⫂", mR = "⫌", bR = "⊋", _R = "⫀", kR = "⊃", xR = "⋑", vR = "⊇", yR = "⫆", CR = "⊋", wR = "⫌", AR = "⫈", DR = "⫔", qR = "⫖", ER = "⤦", SR = "↙", FR = "⇙", TR = "↙", RR = "⤪", LR = "ß", zR = "	", IR = "⌖", BR = "Τ", NR = "τ", MR = "⎴", PR = "Ť", OR = "ť", UR = "Ţ", VR = "ţ", $R = "Т", GR = "т", jR = "⃛", HR = "⌕", ZR = "𝔗", JR = "𝔱", WR = "∴", YR = "∴", QR = "∴", KR = "Θ", XR = "θ", nL = "ϑ", rL = "ϑ", tL = "≈", oL = "∼", eL = "  ", sL = " ", cL = " ", iL = "≈", aL = "∼", lL = "Þ", uL = "þ", pL = "˜", fL = "∼", hL = "≃", dL = "≅", gL = "≈", mL = "⨱", bL = "⊠", _L = "×", kL = "⨰", xL = "∭", vL = "⤨", yL = "⌶", CL = "⫱", wL = "⊤", AL = "𝕋", DL = "𝕥", qL = "⫚", EL = "⤩", SL = "‴", FL = "™", TL = "™", RL = "▵", LL = "▿", zL = "◃", IL = "⊴", BL = "≜", NL = "▹", ML = "⊵", PL = "◬", OL = "≜", UL = "⨺", VL = "⃛", $L = "⨹", GL = "⧍", jL = "⨻", HL = "⏢", ZL = "𝒯", JL = "𝓉", WL = "Ц", YL = "ц", QL = "Ћ", KL = "ћ", XL = "Ŧ", nz = "ŧ", rz = "≬", tz = "↞", oz = "↠", ez = "Ú", sz = "ú", cz = "↑", iz = "↟", az = "⇑", lz = "⥉", uz = "Ў", pz = "ў", fz = "Ŭ", hz = "ŭ", dz = "Û", gz = "û", mz = "У", bz = "у", _z = "⇅", kz = "Ű", xz = "ű", vz = "⥮", yz = "⥾", Cz = "𝔘", wz = "𝔲", Az = "Ù", Dz = "ù", qz = "⥣", Ez = "↿", Sz = "↾", Fz = "▀", Tz = "⌜", Rz = "⌜", Lz = "⌏", zz = "◸", Iz = "Ū", Bz = "ū", Nz = "¨", Mz = "_", Pz = "⏟", Oz = "⎵", Uz = "⏝", Vz = "⋃", $z = "⊎", Gz = "Ų", jz = "ų", Hz = "𝕌", Zz = "𝕦", Jz = "⤒", Wz = "↑", Yz = "↑", Qz = "⇑", Kz = "⇅", Xz = "↕", nI = "↕", rI = "⇕", tI = "⥮", oI = "↿", eI = "↾", sI = "⊎", cI = "↖", iI = "↗", aI = "υ", lI = "ϒ", uI = "ϒ", pI = "Υ", fI = "υ", hI = "↥", dI = "⊥", gI = "⇈", mI = "⌝", bI = "⌝", _I = "⌎", kI = "Ů", xI = "ů", vI = "◹", yI = "𝒰", CI = "𝓊", wI = "⋰", AI = "Ũ", DI = "ũ", qI = "▵", EI = "▴", SI = "⇈", FI = "Ü", TI = "ü", RI = "⦧", LI = "⦜", zI = "ϵ", II = "ϰ", BI = "∅", NI = "ϕ", MI = "ϖ", PI = "∝", OI = "↕", UI = "⇕", VI = "ϱ", $I = "ς", GI = "⊊︀", jI = "⫋︀", HI = "⊋︀", ZI = "⫌︀", JI = "ϑ", WI = "⊲", YI = "⊳", QI = "⫨", KI = "⫫", XI = "⫩", nB = "В", rB = "в", tB = "⊢", oB = "⊨", eB = "⊩", sB = "⊫", cB = "⫦", iB = "⊻", aB = "∨", lB = "⋁", uB = "≚", pB = "⋮", fB = "|", hB = "‖", dB = "|", gB = "‖", mB = "∣", bB = "|", _B = "❘", kB = "≀", xB = " ", vB = "𝔙", yB = "𝔳", CB = "⊲", wB = "⊂⃒", AB = "⊃⃒", DB = "𝕍", qB = "𝕧", EB = "∝", SB = "⊳", FB = "𝒱", TB = "𝓋", RB = "⫋︀", LB = "⊊︀", zB = "⫌︀", IB = "⊋︀", BB = "⊪", NB = "⦚", MB = "Ŵ", PB = "ŵ", OB = "⩟", UB = "∧", VB = "⋀", $B = "≙", GB = "℘", jB = "𝔚", HB = "𝔴", ZB = "𝕎", JB = "𝕨", WB = "℘", YB = "≀", QB = "≀", KB = "𝒲", XB = "𝓌", n3 = "⋂", r3 = "◯", t3 = "⋃", o3 = "▽", e3 = "𝔛", s3 = "𝔵", c3 = "⟷", i3 = "⟺", a3 = "Ξ", l3 = "ξ", u3 = "⟵", p3 = "⟸", f3 = "⟼", h3 = "⋻", d3 = "⨀", g3 = "𝕏", m3 = "𝕩", b3 = "⨁", _3 = "⨂", k3 = "⟶", x3 = "⟹", v3 = "𝒳", y3 = "𝓍", C3 = "⨆", w3 = "⨄", A3 = "△", D3 = "⋁", q3 = "⋀", E3 = "Ý", S3 = "ý", F3 = "Я", T3 = "я", R3 = "Ŷ", L3 = "ŷ", z3 = "Ы", I3 = "ы", B3 = "¥", N3 = "𝔜", M3 = "𝔶", P3 = "Ї", O3 = "ї", U3 = "𝕐", V3 = "𝕪", $3 = "𝒴", G3 = "𝓎", j3 = "Ю", H3 = "ю", Z3 = "ÿ", J3 = "Ÿ", W3 = "Ź", Y3 = "ź", Q3 = "Ž", K3 = "ž", X3 = "З", nN = "з", rN = "Ż", tN = "ż", oN = "ℨ", eN = "​", sN = "Ζ", cN = "ζ", iN = "𝔷", aN = "ℨ", lN = "Ж", uN = "ж", pN = "⇝", fN = "𝕫", hN = "ℤ", dN = "𝒵", gN = "𝓏", mN = "‍", bN = "‌", _N = {
  Aacute: Xr,
  aacute: nt,
  Abreve: rt,
  abreve: tt,
  ac: ot,
  acd: et,
  acE: st,
  Acirc: ct,
  acirc: it,
  acute: at,
  Acy: lt,
  acy: ut,
  AElig: pt,
  aelig: ft,
  af: ht,
  Afr: dt,
  afr: gt,
  Agrave: mt,
  agrave: bt,
  alefsym: _t,
  aleph: kt,
  Alpha: xt,
  alpha: vt,
  Amacr: yt,
  amacr: Ct,
  amalg: wt,
  amp: At,
  AMP: Dt,
  andand: qt,
  And: Et,
  and: St,
  andd: Ft,
  andslope: Tt,
  andv: Rt,
  ang: Lt,
  ange: zt,
  angle: It,
  angmsdaa: Bt,
  angmsdab: Nt,
  angmsdac: Mt,
  angmsdad: Pt,
  angmsdae: Ot,
  angmsdaf: Ut,
  angmsdag: Vt,
  angmsdah: $t,
  angmsd: Gt,
  angrt: jt,
  angrtvb: Ht,
  angrtvbd: Zt,
  angsph: Jt,
  angst: Wt,
  angzarr: Yt,
  Aogon: Qt,
  aogon: Kt,
  Aopf: Xt,
  aopf: no,
  apacir: ro,
  ap: to,
  apE: oo,
  ape: eo,
  apid: so,
  apos: co,
  ApplyFunction: io,
  approx: ao,
  approxeq: lo,
  Aring: uo,
  aring: po,
  Ascr: fo,
  ascr: ho,
  Assign: go,
  ast: mo,
  asymp: bo,
  asympeq: _o,
  Atilde: ko,
  atilde: xo,
  Auml: vo,
  auml: yo,
  awconint: Co,
  awint: wo,
  backcong: Ao,
  backepsilon: Do,
  backprime: qo,
  backsim: Eo,
  backsimeq: So,
  Backslash: Fo,
  Barv: To,
  barvee: Ro,
  barwed: Lo,
  Barwed: zo,
  barwedge: Io,
  bbrk: Bo,
  bbrktbrk: No,
  bcong: Mo,
  Bcy: Po,
  bcy: Oo,
  bdquo: Uo,
  becaus: Vo,
  because: $o,
  Because: Go,
  bemptyv: jo,
  bepsi: Ho,
  bernou: Zo,
  Bernoullis: Jo,
  Beta: Wo,
  beta: Yo,
  beth: Qo,
  between: Ko,
  Bfr: Xo,
  bfr: ne,
  bigcap: re,
  bigcirc: te,
  bigcup: oe,
  bigodot: ee,
  bigoplus: se,
  bigotimes: ce,
  bigsqcup: ie,
  bigstar: ae,
  bigtriangledown: le,
  bigtriangleup: ue,
  biguplus: pe,
  bigvee: fe,
  bigwedge: he,
  bkarow: de,
  blacklozenge: ge,
  blacksquare: me,
  blacktriangle: be,
  blacktriangledown: _e,
  blacktriangleleft: ke,
  blacktriangleright: xe,
  blank: ve,
  blk12: ye,
  blk14: Ce,
  blk34: we,
  block: Ae,
  bne: De,
  bnequiv: qe,
  bNot: Ee,
  bnot: Se,
  Bopf: Fe,
  bopf: Te,
  bot: Re,
  bottom: Le,
  bowtie: ze,
  boxbox: Ie,
  boxdl: Be,
  boxdL: Ne,
  boxDl: Me,
  boxDL: Pe,
  boxdr: Oe,
  boxdR: Ue,
  boxDr: Ve,
  boxDR: $e,
  boxh: Ge,
  boxH: je,
  boxhd: He,
  boxHd: Ze,
  boxhD: Je,
  boxHD: We,
  boxhu: Ye,
  boxHu: Qe,
  boxhU: Ke,
  boxHU: Xe,
  boxminus: ns,
  boxplus: rs,
  boxtimes: ts,
  boxul: os,
  boxuL: es,
  boxUl: ss,
  boxUL: cs,
  boxur: is,
  boxuR: as,
  boxUr: ls,
  boxUR: us,
  boxv: ps,
  boxV: fs,
  boxvh: hs,
  boxvH: ds,
  boxVh: gs,
  boxVH: ms,
  boxvl: bs,
  boxvL: _s,
  boxVl: ks,
  boxVL: xs,
  boxvr: vs,
  boxvR: ys,
  boxVr: Cs,
  boxVR: ws,
  bprime: As,
  breve: Ds,
  Breve: qs,
  brvbar: Es,
  bscr: Ss,
  Bscr: Fs,
  bsemi: Ts,
  bsim: Rs,
  bsime: Ls,
  bsolb: zs,
  bsol: Is,
  bsolhsub: Bs,
  bull: Ns,
  bullet: Ms,
  bump: Ps,
  bumpE: Os,
  bumpe: Us,
  Bumpeq: Vs,
  bumpeq: $s,
  Cacute: Gs,
  cacute: js,
  capand: Hs,
  capbrcup: Zs,
  capcap: Js,
  cap: Ws,
  Cap: Ys,
  capcup: Qs,
  capdot: Ks,
  CapitalDifferentialD: Xs,
  caps: nc,
  caret: rc,
  caron: tc,
  Cayleys: oc,
  ccaps: ec,
  Ccaron: sc,
  ccaron: cc,
  Ccedil: ic,
  ccedil: ac,
  Ccirc: lc,
  ccirc: uc,
  Cconint: pc,
  ccups: fc,
  ccupssm: hc,
  Cdot: dc,
  cdot: gc,
  cedil: mc,
  Cedilla: bc,
  cemptyv: _c,
  cent: kc,
  centerdot: xc,
  CenterDot: vc,
  cfr: yc,
  Cfr: Cc,
  CHcy: wc,
  chcy: Ac,
  check: Dc,
  checkmark: qc,
  Chi: Ec,
  chi: Sc,
  circ: Fc,
  circeq: Tc,
  circlearrowleft: Rc,
  circlearrowright: Lc,
  circledast: zc,
  circledcirc: Ic,
  circleddash: Bc,
  CircleDot: Nc,
  circledR: Mc,
  circledS: Pc,
  CircleMinus: Oc,
  CirclePlus: Uc,
  CircleTimes: Vc,
  cir: $c,
  cirE: Gc,
  cire: jc,
  cirfnint: Hc,
  cirmid: Zc,
  cirscir: Jc,
  ClockwiseContourIntegral: Wc,
  CloseCurlyDoubleQuote: Yc,
  CloseCurlyQuote: Qc,
  clubs: Kc,
  clubsuit: Xc,
  colon: ni,
  Colon: ri,
  Colone: ti,
  colone: oi,
  coloneq: ei,
  comma: si,
  commat: ci,
  comp: ii,
  compfn: ai,
  complement: li,
  complexes: ui,
  cong: pi,
  congdot: fi,
  Congruent: hi,
  conint: di,
  Conint: gi,
  ContourIntegral: mi,
  copf: bi,
  Copf: _i,
  coprod: ki,
  Coproduct: xi,
  copy: vi,
  COPY: yi,
  copysr: Ci,
  CounterClockwiseContourIntegral: wi,
  crarr: Ai,
  cross: Di,
  Cross: qi,
  Cscr: Ei,
  cscr: Si,
  csub: Fi,
  csube: Ti,
  csup: Ri,
  csupe: Li,
  ctdot: zi,
  cudarrl: Ii,
  cudarrr: Bi,
  cuepr: Ni,
  cuesc: Mi,
  cularr: Pi,
  cularrp: Oi,
  cupbrcap: Ui,
  cupcap: Vi,
  CupCap: $i,
  cup: Gi,
  Cup: ji,
  cupcup: Hi,
  cupdot: Zi,
  cupor: Ji,
  cups: Wi,
  curarr: Yi,
  curarrm: Qi,
  curlyeqprec: Ki,
  curlyeqsucc: Xi,
  curlyvee: na,
  curlywedge: ra,
  curren: ta,
  curvearrowleft: oa,
  curvearrowright: ea,
  cuvee: sa,
  cuwed: ca,
  cwconint: ia,
  cwint: aa,
  cylcty: la,
  dagger: ua,
  Dagger: pa,
  daleth: fa,
  darr: ha,
  Darr: da,
  dArr: ga,
  dash: ma,
  Dashv: ba,
  dashv: _a,
  dbkarow: ka,
  dblac: xa,
  Dcaron: va,
  dcaron: ya,
  Dcy: Ca,
  dcy: wa,
  ddagger: Aa,
  ddarr: Da,
  DD: qa,
  dd: Ea,
  DDotrahd: Sa,
  ddotseq: Fa,
  deg: Ta,
  Del: Ra,
  Delta: La,
  delta: za,
  demptyv: Ia,
  dfisht: Ba,
  Dfr: Na,
  dfr: Ma,
  dHar: Pa,
  dharl: Oa,
  dharr: Ua,
  DiacriticalAcute: Va,
  DiacriticalDot: $a,
  DiacriticalDoubleAcute: Ga,
  DiacriticalGrave: ja,
  DiacriticalTilde: Ha,
  diam: Za,
  diamond: Ja,
  Diamond: Wa,
  diamondsuit: Ya,
  diams: Qa,
  die: Ka,
  DifferentialD: Xa,
  digamma: nl,
  disin: rl,
  div: tl,
  divide: ol,
  divideontimes: el,
  divonx: sl,
  DJcy: cl,
  djcy: il,
  dlcorn: al,
  dlcrop: ll,
  dollar: ul,
  Dopf: pl,
  dopf: fl,
  Dot: hl,
  dot: dl,
  DotDot: gl,
  doteq: ml,
  doteqdot: bl,
  DotEqual: _l,
  dotminus: kl,
  dotplus: xl,
  dotsquare: vl,
  doublebarwedge: yl,
  DoubleContourIntegral: Cl,
  DoubleDot: wl,
  DoubleDownArrow: Al,
  DoubleLeftArrow: Dl,
  DoubleLeftRightArrow: ql,
  DoubleLeftTee: El,
  DoubleLongLeftArrow: Sl,
  DoubleLongLeftRightArrow: Fl,
  DoubleLongRightArrow: Tl,
  DoubleRightArrow: Rl,
  DoubleRightTee: Ll,
  DoubleUpArrow: zl,
  DoubleUpDownArrow: Il,
  DoubleVerticalBar: Bl,
  DownArrowBar: Nl,
  downarrow: Ml,
  DownArrow: Pl,
  Downarrow: Ol,
  DownArrowUpArrow: Ul,
  DownBreve: Vl,
  downdownarrows: $l,
  downharpoonleft: Gl,
  downharpoonright: jl,
  DownLeftRightVector: Hl,
  DownLeftTeeVector: Zl,
  DownLeftVectorBar: Jl,
  DownLeftVector: Wl,
  DownRightTeeVector: Yl,
  DownRightVectorBar: Ql,
  DownRightVector: Kl,
  DownTeeArrow: Xl,
  DownTee: nu,
  drbkarow: ru,
  drcorn: tu,
  drcrop: ou,
  Dscr: eu,
  dscr: su,
  DScy: cu,
  dscy: iu,
  dsol: au,
  Dstrok: lu,
  dstrok: uu,
  dtdot: pu,
  dtri: fu,
  dtrif: hu,
  duarr: du,
  duhar: gu,
  dwangle: mu,
  DZcy: bu,
  dzcy: _u,
  dzigrarr: ku,
  Eacute: xu,
  eacute: vu,
  easter: yu,
  Ecaron: Cu,
  ecaron: wu,
  Ecirc: Au,
  ecirc: Du,
  ecir: qu,
  ecolon: Eu,
  Ecy: Su,
  ecy: Fu,
  eDDot: Tu,
  Edot: Ru,
  edot: Lu,
  eDot: zu,
  ee: Iu,
  efDot: Bu,
  Efr: Nu,
  efr: Mu,
  eg: Pu,
  Egrave: Ou,
  egrave: Uu,
  egs: Vu,
  egsdot: $u,
  el: Gu,
  Element: ju,
  elinters: Hu,
  ell: Zu,
  els: Ju,
  elsdot: Wu,
  Emacr: Yu,
  emacr: Qu,
  empty: Ku,
  emptyset: Xu,
  EmptySmallSquare: np,
  emptyv: rp,
  EmptyVerySmallSquare: tp,
  emsp13: op,
  emsp14: ep,
  emsp: sp,
  ENG: cp,
  eng: ip,
  ensp: ap,
  Eogon: lp,
  eogon: up,
  Eopf: pp,
  eopf: fp,
  epar: hp,
  eparsl: dp,
  eplus: gp,
  epsi: mp,
  Epsilon: bp,
  epsilon: _p,
  epsiv: kp,
  eqcirc: xp,
  eqcolon: vp,
  eqsim: yp,
  eqslantgtr: Cp,
  eqslantless: wp,
  Equal: Ap,
  equals: Dp,
  EqualTilde: qp,
  equest: Ep,
  Equilibrium: Sp,
  equiv: Fp,
  equivDD: Tp,
  eqvparsl: Rp,
  erarr: Lp,
  erDot: zp,
  escr: Ip,
  Escr: Bp,
  esdot: Np,
  Esim: Mp,
  esim: Pp,
  Eta: Op,
  eta: Up,
  ETH: Vp,
  eth: $p,
  Euml: Gp,
  euml: jp,
  euro: Hp,
  excl: Zp,
  exist: Jp,
  Exists: Wp,
  expectation: Yp,
  exponentiale: Qp,
  ExponentialE: Kp,
  fallingdotseq: Xp,
  Fcy: nf,
  fcy: rf,
  female: tf,
  ffilig: of,
  fflig: ef,
  ffllig: sf,
  Ffr: cf,
  ffr: af,
  filig: lf,
  FilledSmallSquare: uf,
  FilledVerySmallSquare: pf,
  fjlig: ff,
  flat: hf,
  fllig: df,
  fltns: gf,
  fnof: mf,
  Fopf: bf,
  fopf: _f,
  forall: kf,
  ForAll: xf,
  fork: vf,
  forkv: yf,
  Fouriertrf: Cf,
  fpartint: wf,
  frac12: Af,
  frac13: Df,
  frac14: qf,
  frac15: Ef,
  frac16: Sf,
  frac18: Ff,
  frac23: Tf,
  frac25: Rf,
  frac34: Lf,
  frac35: zf,
  frac38: If,
  frac45: Bf,
  frac56: Nf,
  frac58: Mf,
  frac78: Pf,
  frasl: Of,
  frown: Uf,
  fscr: Vf,
  Fscr: $f,
  gacute: Gf,
  Gamma: jf,
  gamma: Hf,
  Gammad: Zf,
  gammad: Jf,
  gap: Wf,
  Gbreve: Yf,
  gbreve: Qf,
  Gcedil: Kf,
  Gcirc: Xf,
  gcirc: nh,
  Gcy: rh,
  gcy: th,
  Gdot: oh,
  gdot: eh,
  ge: sh,
  gE: ch,
  gEl: ih,
  gel: ah,
  geq: lh,
  geqq: uh,
  geqslant: ph,
  gescc: fh,
  ges: hh,
  gesdot: dh,
  gesdoto: gh,
  gesdotol: mh,
  gesl: bh,
  gesles: _h,
  Gfr: kh,
  gfr: xh,
  gg: vh,
  Gg: yh,
  ggg: Ch,
  gimel: wh,
  GJcy: Ah,
  gjcy: Dh,
  gla: qh,
  gl: Eh,
  glE: Sh,
  glj: Fh,
  gnap: Th,
  gnapprox: Rh,
  gne: Lh,
  gnE: zh,
  gneq: Ih,
  gneqq: Bh,
  gnsim: Nh,
  Gopf: Mh,
  gopf: Ph,
  grave: Oh,
  GreaterEqual: Uh,
  GreaterEqualLess: Vh,
  GreaterFullEqual: $h,
  GreaterGreater: Gh,
  GreaterLess: jh,
  GreaterSlantEqual: Hh,
  GreaterTilde: Zh,
  Gscr: Jh,
  gscr: Wh,
  gsim: Yh,
  gsime: Qh,
  gsiml: Kh,
  gtcc: Xh,
  gtcir: nd,
  gt: rd,
  GT: td,
  Gt: od,
  gtdot: ed,
  gtlPar: sd,
  gtquest: cd,
  gtrapprox: id,
  gtrarr: ad,
  gtrdot: ld,
  gtreqless: ud,
  gtreqqless: pd,
  gtrless: fd,
  gtrsim: hd,
  gvertneqq: dd,
  gvnE: gd,
  Hacek: md,
  hairsp: bd,
  half: _d,
  hamilt: kd,
  HARDcy: xd,
  hardcy: vd,
  harrcir: yd,
  harr: Cd,
  hArr: wd,
  harrw: Ad,
  Hat: Dd,
  hbar: qd,
  Hcirc: Ed,
  hcirc: Sd,
  hearts: Fd,
  heartsuit: Td,
  hellip: Rd,
  hercon: Ld,
  hfr: zd,
  Hfr: Id,
  HilbertSpace: Bd,
  hksearow: Nd,
  hkswarow: Md,
  hoarr: Pd,
  homtht: Od,
  hookleftarrow: Ud,
  hookrightarrow: Vd,
  hopf: $d,
  Hopf: Gd,
  horbar: jd,
  HorizontalLine: Hd,
  hscr: Zd,
  Hscr: Jd,
  hslash: Wd,
  Hstrok: Yd,
  hstrok: Qd,
  HumpDownHump: Kd,
  HumpEqual: Xd,
  hybull: ng,
  hyphen: rg,
  Iacute: tg,
  iacute: og,
  ic: eg,
  Icirc: sg,
  icirc: cg,
  Icy: ig,
  icy: ag,
  Idot: lg,
  IEcy: ug,
  iecy: pg,
  iexcl: fg,
  iff: hg,
  ifr: dg,
  Ifr: gg,
  Igrave: mg,
  igrave: bg,
  ii: _g,
  iiiint: kg,
  iiint: xg,
  iinfin: vg,
  iiota: yg,
  IJlig: Cg,
  ijlig: wg,
  Imacr: Ag,
  imacr: Dg,
  image: qg,
  ImaginaryI: Eg,
  imagline: Sg,
  imagpart: Fg,
  imath: Tg,
  Im: Rg,
  imof: Lg,
  imped: zg,
  Implies: Ig,
  incare: Bg,
  in: "∈",
  infin: Ng,
  infintie: Mg,
  inodot: Pg,
  intcal: Og,
  int: Ug,
  Int: Vg,
  integers: $g,
  Integral: Gg,
  intercal: jg,
  Intersection: Hg,
  intlarhk: Zg,
  intprod: Jg,
  InvisibleComma: Wg,
  InvisibleTimes: Yg,
  IOcy: Qg,
  iocy: Kg,
  Iogon: Xg,
  iogon: nm,
  Iopf: rm,
  iopf: tm,
  Iota: om,
  iota: em,
  iprod: sm,
  iquest: cm,
  iscr: im,
  Iscr: am,
  isin: lm,
  isindot: um,
  isinE: pm,
  isins: fm,
  isinsv: hm,
  isinv: dm,
  it: gm,
  Itilde: mm,
  itilde: bm,
  Iukcy: _m,
  iukcy: km,
  Iuml: xm,
  iuml: vm,
  Jcirc: ym,
  jcirc: Cm,
  Jcy: wm,
  jcy: Am,
  Jfr: Dm,
  jfr: qm,
  jmath: Em,
  Jopf: Sm,
  jopf: Fm,
  Jscr: Tm,
  jscr: Rm,
  Jsercy: Lm,
  jsercy: zm,
  Jukcy: Im,
  jukcy: Bm,
  Kappa: Nm,
  kappa: Mm,
  kappav: Pm,
  Kcedil: Om,
  kcedil: Um,
  Kcy: Vm,
  kcy: $m,
  Kfr: Gm,
  kfr: jm,
  kgreen: Hm,
  KHcy: Zm,
  khcy: Jm,
  KJcy: Wm,
  kjcy: Ym,
  Kopf: Qm,
  kopf: Km,
  Kscr: Xm,
  kscr: n0,
  lAarr: r0,
  Lacute: t0,
  lacute: o0,
  laemptyv: e0,
  lagran: s0,
  Lambda: c0,
  lambda: i0,
  lang: a0,
  Lang: l0,
  langd: u0,
  langle: p0,
  lap: f0,
  Laplacetrf: h0,
  laquo: d0,
  larrb: g0,
  larrbfs: m0,
  larr: b0,
  Larr: _0,
  lArr: k0,
  larrfs: x0,
  larrhk: v0,
  larrlp: y0,
  larrpl: C0,
  larrsim: w0,
  larrtl: A0,
  latail: D0,
  lAtail: q0,
  lat: E0,
  late: S0,
  lates: F0,
  lbarr: T0,
  lBarr: R0,
  lbbrk: L0,
  lbrace: z0,
  lbrack: I0,
  lbrke: B0,
  lbrksld: N0,
  lbrkslu: M0,
  Lcaron: P0,
  lcaron: O0,
  Lcedil: U0,
  lcedil: V0,
  lceil: $0,
  lcub: G0,
  Lcy: j0,
  lcy: H0,
  ldca: Z0,
  ldquo: J0,
  ldquor: W0,
  ldrdhar: Y0,
  ldrushar: Q0,
  ldsh: K0,
  le: X0,
  lE: nb,
  LeftAngleBracket: rb,
  LeftArrowBar: tb,
  leftarrow: ob,
  LeftArrow: eb,
  Leftarrow: sb,
  LeftArrowRightArrow: cb,
  leftarrowtail: ib,
  LeftCeiling: ab,
  LeftDoubleBracket: lb,
  LeftDownTeeVector: ub,
  LeftDownVectorBar: pb,
  LeftDownVector: fb,
  LeftFloor: hb,
  leftharpoondown: db,
  leftharpoonup: gb,
  leftleftarrows: mb,
  leftrightarrow: bb,
  LeftRightArrow: _b,
  Leftrightarrow: kb,
  leftrightarrows: xb,
  leftrightharpoons: vb,
  leftrightsquigarrow: yb,
  LeftRightVector: Cb,
  LeftTeeArrow: wb,
  LeftTee: Ab,
  LeftTeeVector: Db,
  leftthreetimes: qb,
  LeftTriangleBar: Eb,
  LeftTriangle: Sb,
  LeftTriangleEqual: Fb,
  LeftUpDownVector: Tb,
  LeftUpTeeVector: Rb,
  LeftUpVectorBar: Lb,
  LeftUpVector: zb,
  LeftVectorBar: Ib,
  LeftVector: Bb,
  lEg: Nb,
  leg: Mb,
  leq: Pb,
  leqq: Ob,
  leqslant: Ub,
  lescc: Vb,
  les: $b,
  lesdot: Gb,
  lesdoto: jb,
  lesdotor: Hb,
  lesg: Zb,
  lesges: Jb,
  lessapprox: Wb,
  lessdot: Yb,
  lesseqgtr: Qb,
  lesseqqgtr: Kb,
  LessEqualGreater: Xb,
  LessFullEqual: n_,
  LessGreater: r_,
  lessgtr: t_,
  LessLess: o_,
  lesssim: e_,
  LessSlantEqual: s_,
  LessTilde: c_,
  lfisht: i_,
  lfloor: a_,
  Lfr: l_,
  lfr: u_,
  lg: p_,
  lgE: f_,
  lHar: h_,
  lhard: d_,
  lharu: g_,
  lharul: m_,
  lhblk: b_,
  LJcy: __,
  ljcy: k_,
  llarr: x_,
  ll: v_,
  Ll: y_,
  llcorner: C_,
  Lleftarrow: w_,
  llhard: A_,
  lltri: D_,
  Lmidot: q_,
  lmidot: E_,
  lmoustache: S_,
  lmoust: F_,
  lnap: T_,
  lnapprox: R_,
  lne: L_,
  lnE: z_,
  lneq: I_,
  lneqq: B_,
  lnsim: N_,
  loang: M_,
  loarr: P_,
  lobrk: O_,
  longleftarrow: U_,
  LongLeftArrow: V_,
  Longleftarrow: $_,
  longleftrightarrow: G_,
  LongLeftRightArrow: j_,
  Longleftrightarrow: H_,
  longmapsto: Z_,
  longrightarrow: J_,
  LongRightArrow: W_,
  Longrightarrow: Y_,
  looparrowleft: Q_,
  looparrowright: K_,
  lopar: X_,
  Lopf: nk,
  lopf: rk,
  loplus: tk,
  lotimes: ok,
  lowast: ek,
  lowbar: sk,
  LowerLeftArrow: ck,
  LowerRightArrow: ik,
  loz: ak,
  lozenge: lk,
  lozf: uk,
  lpar: pk,
  lparlt: fk,
  lrarr: hk,
  lrcorner: dk,
  lrhar: gk,
  lrhard: mk,
  lrm: bk,
  lrtri: _k,
  lsaquo: kk,
  lscr: xk,
  Lscr: vk,
  lsh: yk,
  Lsh: Ck,
  lsim: wk,
  lsime: Ak,
  lsimg: Dk,
  lsqb: qk,
  lsquo: Ek,
  lsquor: Sk,
  Lstrok: Fk,
  lstrok: Tk,
  ltcc: Rk,
  ltcir: Lk,
  lt: zk,
  LT: Ik,
  Lt: Bk,
  ltdot: Nk,
  lthree: Mk,
  ltimes: Pk,
  ltlarr: Ok,
  ltquest: Uk,
  ltri: Vk,
  ltrie: $k,
  ltrif: Gk,
  ltrPar: jk,
  lurdshar: Hk,
  luruhar: Zk,
  lvertneqq: Jk,
  lvnE: Wk,
  macr: Yk,
  male: Qk,
  malt: Kk,
  maltese: Xk,
  Map: "⤅",
  map: nx,
  mapsto: rx,
  mapstodown: tx,
  mapstoleft: ox,
  mapstoup: ex,
  marker: sx,
  mcomma: cx,
  Mcy: ix,
  mcy: ax,
  mdash: lx,
  mDDot: ux,
  measuredangle: px,
  MediumSpace: fx,
  Mellintrf: hx,
  Mfr: dx,
  mfr: gx,
  mho: mx,
  micro: bx,
  midast: _x,
  midcir: kx,
  mid: xx,
  middot: vx,
  minusb: yx,
  minus: Cx,
  minusd: wx,
  minusdu: Ax,
  MinusPlus: Dx,
  mlcp: qx,
  mldr: Ex,
  mnplus: Sx,
  models: Fx,
  Mopf: Tx,
  mopf: Rx,
  mp: Lx,
  mscr: zx,
  Mscr: Ix,
  mstpos: Bx,
  Mu: Nx,
  mu: Mx,
  multimap: Px,
  mumap: Ox,
  nabla: Ux,
  Nacute: Vx,
  nacute: $x,
  nang: Gx,
  nap: jx,
  napE: Hx,
  napid: Zx,
  napos: Jx,
  napprox: Wx,
  natural: Yx,
  naturals: Qx,
  natur: Kx,
  nbsp: Xx,
  nbump: nv,
  nbumpe: rv,
  ncap: tv,
  Ncaron: ov,
  ncaron: ev,
  Ncedil: sv,
  ncedil: cv,
  ncong: iv,
  ncongdot: av,
  ncup: lv,
  Ncy: uv,
  ncy: pv,
  ndash: fv,
  nearhk: hv,
  nearr: dv,
  neArr: gv,
  nearrow: mv,
  ne: bv,
  nedot: _v,
  NegativeMediumSpace: kv,
  NegativeThickSpace: xv,
  NegativeThinSpace: vv,
  NegativeVeryThinSpace: yv,
  nequiv: Cv,
  nesear: wv,
  nesim: Av,
  NestedGreaterGreater: Dv,
  NestedLessLess: qv,
  NewLine: Ev,
  nexist: Sv,
  nexists: Fv,
  Nfr: Tv,
  nfr: Rv,
  ngE: Lv,
  nge: zv,
  ngeq: Iv,
  ngeqq: Bv,
  ngeqslant: Nv,
  nges: Mv,
  nGg: Pv,
  ngsim: Ov,
  nGt: Uv,
  ngt: Vv,
  ngtr: $v,
  nGtv: Gv,
  nharr: jv,
  nhArr: Hv,
  nhpar: Zv,
  ni: Jv,
  nis: Wv,
  nisd: Yv,
  niv: Qv,
  NJcy: Kv,
  njcy: Xv,
  nlarr: ny,
  nlArr: ry,
  nldr: ty,
  nlE: oy,
  nle: ey,
  nleftarrow: sy,
  nLeftarrow: cy,
  nleftrightarrow: iy,
  nLeftrightarrow: ay,
  nleq: ly,
  nleqq: uy,
  nleqslant: py,
  nles: fy,
  nless: hy,
  nLl: dy,
  nlsim: gy,
  nLt: my,
  nlt: by,
  nltri: _y,
  nltrie: ky,
  nLtv: xy,
  nmid: vy,
  NoBreak: yy,
  NonBreakingSpace: Cy,
  nopf: wy,
  Nopf: Ay,
  Not: Dy,
  not: qy,
  NotCongruent: Ey,
  NotCupCap: Sy,
  NotDoubleVerticalBar: Fy,
  NotElement: Ty,
  NotEqual: Ry,
  NotEqualTilde: Ly,
  NotExists: zy,
  NotGreater: Iy,
  NotGreaterEqual: By,
  NotGreaterFullEqual: Ny,
  NotGreaterGreater: My,
  NotGreaterLess: Py,
  NotGreaterSlantEqual: Oy,
  NotGreaterTilde: Uy,
  NotHumpDownHump: Vy,
  NotHumpEqual: $y,
  notin: Gy,
  notindot: jy,
  notinE: Hy,
  notinva: Zy,
  notinvb: Jy,
  notinvc: Wy,
  NotLeftTriangleBar: Yy,
  NotLeftTriangle: Qy,
  NotLeftTriangleEqual: Ky,
  NotLess: Xy,
  NotLessEqual: nC,
  NotLessGreater: rC,
  NotLessLess: tC,
  NotLessSlantEqual: oC,
  NotLessTilde: eC,
  NotNestedGreaterGreater: sC,
  NotNestedLessLess: cC,
  notni: iC,
  notniva: aC,
  notnivb: lC,
  notnivc: uC,
  NotPrecedes: pC,
  NotPrecedesEqual: fC,
  NotPrecedesSlantEqual: hC,
  NotReverseElement: dC,
  NotRightTriangleBar: gC,
  NotRightTriangle: mC,
  NotRightTriangleEqual: bC,
  NotSquareSubset: _C,
  NotSquareSubsetEqual: kC,
  NotSquareSuperset: xC,
  NotSquareSupersetEqual: vC,
  NotSubset: yC,
  NotSubsetEqual: CC,
  NotSucceeds: wC,
  NotSucceedsEqual: AC,
  NotSucceedsSlantEqual: DC,
  NotSucceedsTilde: qC,
  NotSuperset: EC,
  NotSupersetEqual: SC,
  NotTilde: FC,
  NotTildeEqual: TC,
  NotTildeFullEqual: RC,
  NotTildeTilde: LC,
  NotVerticalBar: zC,
  nparallel: IC,
  npar: BC,
  nparsl: NC,
  npart: MC,
  npolint: PC,
  npr: OC,
  nprcue: UC,
  nprec: VC,
  npreceq: $C,
  npre: GC,
  nrarrc: jC,
  nrarr: HC,
  nrArr: ZC,
  nrarrw: JC,
  nrightarrow: WC,
  nRightarrow: YC,
  nrtri: QC,
  nrtrie: KC,
  nsc: XC,
  nsccue: nw,
  nsce: rw,
  Nscr: tw,
  nscr: ow,
  nshortmid: ew,
  nshortparallel: sw,
  nsim: cw,
  nsime: iw,
  nsimeq: aw,
  nsmid: lw,
  nspar: uw,
  nsqsube: pw,
  nsqsupe: fw,
  nsub: hw,
  nsubE: dw,
  nsube: gw,
  nsubset: mw,
  nsubseteq: bw,
  nsubseteqq: _w,
  nsucc: kw,
  nsucceq: xw,
  nsup: vw,
  nsupE: yw,
  nsupe: Cw,
  nsupset: ww,
  nsupseteq: Aw,
  nsupseteqq: Dw,
  ntgl: qw,
  Ntilde: Ew,
  ntilde: Sw,
  ntlg: Fw,
  ntriangleleft: Tw,
  ntrianglelefteq: Rw,
  ntriangleright: Lw,
  ntrianglerighteq: zw,
  Nu: Iw,
  nu: Bw,
  num: Nw,
  numero: Mw,
  numsp: Pw,
  nvap: Ow,
  nvdash: Uw,
  nvDash: Vw,
  nVdash: $w,
  nVDash: Gw,
  nvge: jw,
  nvgt: Hw,
  nvHarr: Zw,
  nvinfin: Jw,
  nvlArr: Ww,
  nvle: Yw,
  nvlt: Qw,
  nvltrie: Kw,
  nvrArr: Xw,
  nvrtrie: n1,
  nvsim: r1,
  nwarhk: t1,
  nwarr: o1,
  nwArr: e1,
  nwarrow: s1,
  nwnear: c1,
  Oacute: i1,
  oacute: a1,
  oast: l1,
  Ocirc: u1,
  ocirc: p1,
  ocir: f1,
  Ocy: h1,
  ocy: d1,
  odash: g1,
  Odblac: m1,
  odblac: b1,
  odiv: _1,
  odot: k1,
  odsold: x1,
  OElig: v1,
  oelig: y1,
  ofcir: C1,
  Ofr: w1,
  ofr: A1,
  ogon: D1,
  Ograve: q1,
  ograve: E1,
  ogt: S1,
  ohbar: F1,
  ohm: T1,
  oint: R1,
  olarr: L1,
  olcir: z1,
  olcross: I1,
  oline: B1,
  olt: N1,
  Omacr: M1,
  omacr: P1,
  Omega: O1,
  omega: U1,
  Omicron: V1,
  omicron: $1,
  omid: G1,
  ominus: j1,
  Oopf: H1,
  oopf: Z1,
  opar: J1,
  OpenCurlyDoubleQuote: W1,
  OpenCurlyQuote: Y1,
  operp: Q1,
  oplus: K1,
  orarr: X1,
  Or: nA,
  or: rA,
  ord: tA,
  order: oA,
  orderof: eA,
  ordf: sA,
  ordm: cA,
  origof: iA,
  oror: aA,
  orslope: lA,
  orv: uA,
  oS: pA,
  Oscr: fA,
  oscr: hA,
  Oslash: dA,
  oslash: gA,
  osol: mA,
  Otilde: bA,
  otilde: _A,
  otimesas: kA,
  Otimes: xA,
  otimes: vA,
  Ouml: yA,
  ouml: CA,
  ovbar: wA,
  OverBar: AA,
  OverBrace: DA,
  OverBracket: qA,
  OverParenthesis: EA,
  para: SA,
  parallel: FA,
  par: TA,
  parsim: RA,
  parsl: LA,
  part: zA,
  PartialD: IA,
  Pcy: BA,
  pcy: NA,
  percnt: MA,
  period: PA,
  permil: OA,
  perp: UA,
  pertenk: VA,
  Pfr: $A,
  pfr: GA,
  Phi: jA,
  phi: HA,
  phiv: ZA,
  phmmat: JA,
  phone: WA,
  Pi: YA,
  pi: QA,
  pitchfork: KA,
  piv: XA,
  planck: nD,
  planckh: rD,
  plankv: tD,
  plusacir: oD,
  plusb: eD,
  pluscir: sD,
  plus: cD,
  plusdo: iD,
  plusdu: aD,
  pluse: lD,
  PlusMinus: uD,
  plusmn: pD,
  plussim: fD,
  plustwo: hD,
  pm: dD,
  Poincareplane: gD,
  pointint: mD,
  popf: bD,
  Popf: _D,
  pound: kD,
  prap: xD,
  Pr: vD,
  pr: yD,
  prcue: CD,
  precapprox: wD,
  prec: AD,
  preccurlyeq: DD,
  Precedes: qD,
  PrecedesEqual: ED,
  PrecedesSlantEqual: SD,
  PrecedesTilde: FD,
  preceq: TD,
  precnapprox: RD,
  precneqq: LD,
  precnsim: zD,
  pre: ID,
  prE: BD,
  precsim: ND,
  prime: MD,
  Prime: PD,
  primes: OD,
  prnap: UD,
  prnE: VD,
  prnsim: $D,
  prod: GD,
  Product: jD,
  profalar: HD,
  profline: ZD,
  profsurf: JD,
  prop: WD,
  Proportional: YD,
  Proportion: QD,
  propto: KD,
  prsim: XD,
  prurel: nq,
  Pscr: rq,
  pscr: tq,
  Psi: oq,
  psi: eq,
  puncsp: sq,
  Qfr: cq,
  qfr: iq,
  qint: aq,
  qopf: lq,
  Qopf: uq,
  qprime: pq,
  Qscr: fq,
  qscr: hq,
  quaternions: dq,
  quatint: gq,
  quest: mq,
  questeq: bq,
  quot: _q,
  QUOT: kq,
  rAarr: xq,
  race: vq,
  Racute: yq,
  racute: Cq,
  radic: wq,
  raemptyv: Aq,
  rang: Dq,
  Rang: qq,
  rangd: Eq,
  range: Sq,
  rangle: Fq,
  raquo: Tq,
  rarrap: Rq,
  rarrb: Lq,
  rarrbfs: zq,
  rarrc: Iq,
  rarr: Bq,
  Rarr: Nq,
  rArr: Mq,
  rarrfs: Pq,
  rarrhk: Oq,
  rarrlp: Uq,
  rarrpl: Vq,
  rarrsim: $q,
  Rarrtl: Gq,
  rarrtl: jq,
  rarrw: Hq,
  ratail: Zq,
  rAtail: Jq,
  ratio: Wq,
  rationals: Yq,
  rbarr: Qq,
  rBarr: Kq,
  RBarr: Xq,
  rbbrk: nE,
  rbrace: rE,
  rbrack: tE,
  rbrke: oE,
  rbrksld: eE,
  rbrkslu: sE,
  Rcaron: cE,
  rcaron: iE,
  Rcedil: aE,
  rcedil: lE,
  rceil: uE,
  rcub: pE,
  Rcy: fE,
  rcy: hE,
  rdca: dE,
  rdldhar: gE,
  rdquo: mE,
  rdquor: bE,
  rdsh: _E,
  real: kE,
  realine: xE,
  realpart: vE,
  reals: yE,
  Re: CE,
  rect: wE,
  reg: AE,
  REG: DE,
  ReverseElement: qE,
  ReverseEquilibrium: EE,
  ReverseUpEquilibrium: SE,
  rfisht: FE,
  rfloor: TE,
  rfr: RE,
  Rfr: LE,
  rHar: zE,
  rhard: IE,
  rharu: BE,
  rharul: NE,
  Rho: ME,
  rho: PE,
  rhov: OE,
  RightAngleBracket: UE,
  RightArrowBar: VE,
  rightarrow: $E,
  RightArrow: GE,
  Rightarrow: jE,
  RightArrowLeftArrow: HE,
  rightarrowtail: ZE,
  RightCeiling: JE,
  RightDoubleBracket: WE,
  RightDownTeeVector: YE,
  RightDownVectorBar: QE,
  RightDownVector: KE,
  RightFloor: XE,
  rightharpoondown: nS,
  rightharpoonup: rS,
  rightleftarrows: tS,
  rightleftharpoons: oS,
  rightrightarrows: eS,
  rightsquigarrow: sS,
  RightTeeArrow: cS,
  RightTee: iS,
  RightTeeVector: aS,
  rightthreetimes: lS,
  RightTriangleBar: uS,
  RightTriangle: pS,
  RightTriangleEqual: fS,
  RightUpDownVector: hS,
  RightUpTeeVector: dS,
  RightUpVectorBar: gS,
  RightUpVector: mS,
  RightVectorBar: bS,
  RightVector: _S,
  ring: kS,
  risingdotseq: xS,
  rlarr: vS,
  rlhar: yS,
  rlm: CS,
  rmoustache: wS,
  rmoust: AS,
  rnmid: DS,
  roang: qS,
  roarr: ES,
  robrk: SS,
  ropar: FS,
  ropf: TS,
  Ropf: RS,
  roplus: LS,
  rotimes: zS,
  RoundImplies: IS,
  rpar: BS,
  rpargt: NS,
  rppolint: MS,
  rrarr: PS,
  Rrightarrow: OS,
  rsaquo: US,
  rscr: VS,
  Rscr: $S,
  rsh: GS,
  Rsh: jS,
  rsqb: HS,
  rsquo: ZS,
  rsquor: JS,
  rthree: WS,
  rtimes: YS,
  rtri: QS,
  rtrie: KS,
  rtrif: XS,
  rtriltri: nF,
  RuleDelayed: rF,
  ruluhar: tF,
  rx: oF,
  Sacute: eF,
  sacute: sF,
  sbquo: cF,
  scap: iF,
  Scaron: aF,
  scaron: lF,
  Sc: uF,
  sc: pF,
  sccue: fF,
  sce: hF,
  scE: dF,
  Scedil: gF,
  scedil: mF,
  Scirc: bF,
  scirc: _F,
  scnap: kF,
  scnE: xF,
  scnsim: vF,
  scpolint: yF,
  scsim: CF,
  Scy: wF,
  scy: AF,
  sdotb: DF,
  sdot: qF,
  sdote: EF,
  searhk: SF,
  searr: FF,
  seArr: TF,
  searrow: RF,
  sect: LF,
  semi: zF,
  seswar: IF,
  setminus: BF,
  setmn: NF,
  sext: MF,
  Sfr: PF,
  sfr: OF,
  sfrown: UF,
  sharp: VF,
  SHCHcy: $F,
  shchcy: GF,
  SHcy: jF,
  shcy: HF,
  ShortDownArrow: ZF,
  ShortLeftArrow: JF,
  shortmid: WF,
  shortparallel: YF,
  ShortRightArrow: QF,
  ShortUpArrow: KF,
  shy: XF,
  Sigma: nT,
  sigma: rT,
  sigmaf: tT,
  sigmav: oT,
  sim: eT,
  simdot: sT,
  sime: cT,
  simeq: iT,
  simg: aT,
  simgE: lT,
  siml: uT,
  simlE: pT,
  simne: fT,
  simplus: hT,
  simrarr: dT,
  slarr: gT,
  SmallCircle: mT,
  smallsetminus: bT,
  smashp: _T,
  smeparsl: kT,
  smid: xT,
  smile: vT,
  smt: yT,
  smte: CT,
  smtes: wT,
  SOFTcy: AT,
  softcy: DT,
  solbar: qT,
  solb: ET,
  sol: ST,
  Sopf: FT,
  sopf: TT,
  spades: RT,
  spadesuit: LT,
  spar: zT,
  sqcap: IT,
  sqcaps: BT,
  sqcup: NT,
  sqcups: MT,
  Sqrt: PT,
  sqsub: OT,
  sqsube: UT,
  sqsubset: VT,
  sqsubseteq: $T,
  sqsup: GT,
  sqsupe: jT,
  sqsupset: HT,
  sqsupseteq: ZT,
  square: JT,
  Square: WT,
  SquareIntersection: YT,
  SquareSubset: QT,
  SquareSubsetEqual: KT,
  SquareSuperset: XT,
  SquareSupersetEqual: n2,
  SquareUnion: r2,
  squarf: t2,
  squ: o2,
  squf: e2,
  srarr: s2,
  Sscr: c2,
  sscr: i2,
  ssetmn: a2,
  ssmile: l2,
  sstarf: u2,
  Star: p2,
  star: f2,
  starf: h2,
  straightepsilon: d2,
  straightphi: g2,
  strns: m2,
  sub: b2,
  Sub: _2,
  subdot: k2,
  subE: x2,
  sube: v2,
  subedot: y2,
  submult: C2,
  subnE: w2,
  subne: A2,
  subplus: D2,
  subrarr: q2,
  subset: E2,
  Subset: S2,
  subseteq: F2,
  subseteqq: T2,
  SubsetEqual: R2,
  subsetneq: L2,
  subsetneqq: z2,
  subsim: I2,
  subsub: B2,
  subsup: N2,
  succapprox: M2,
  succ: P2,
  succcurlyeq: O2,
  Succeeds: U2,
  SucceedsEqual: V2,
  SucceedsSlantEqual: $2,
  SucceedsTilde: G2,
  succeq: j2,
  succnapprox: H2,
  succneqq: Z2,
  succnsim: J2,
  succsim: W2,
  SuchThat: Y2,
  sum: Q2,
  Sum: K2,
  sung: X2,
  sup1: nR,
  sup2: rR,
  sup3: tR,
  sup: oR,
  Sup: eR,
  supdot: sR,
  supdsub: cR,
  supE: iR,
  supe: aR,
  supedot: lR,
  Superset: uR,
  SupersetEqual: pR,
  suphsol: fR,
  suphsub: hR,
  suplarr: dR,
  supmult: gR,
  supnE: mR,
  supne: bR,
  supplus: _R,
  supset: kR,
  Supset: xR,
  supseteq: vR,
  supseteqq: yR,
  supsetneq: CR,
  supsetneqq: wR,
  supsim: AR,
  supsub: DR,
  supsup: qR,
  swarhk: ER,
  swarr: SR,
  swArr: FR,
  swarrow: TR,
  swnwar: RR,
  szlig: LR,
  Tab: zR,
  target: IR,
  Tau: BR,
  tau: NR,
  tbrk: MR,
  Tcaron: PR,
  tcaron: OR,
  Tcedil: UR,
  tcedil: VR,
  Tcy: $R,
  tcy: GR,
  tdot: jR,
  telrec: HR,
  Tfr: ZR,
  tfr: JR,
  there4: WR,
  therefore: YR,
  Therefore: QR,
  Theta: KR,
  theta: XR,
  thetasym: nL,
  thetav: rL,
  thickapprox: tL,
  thicksim: oL,
  ThickSpace: eL,
  ThinSpace: sL,
  thinsp: cL,
  thkap: iL,
  thksim: aL,
  THORN: lL,
  thorn: uL,
  tilde: pL,
  Tilde: fL,
  TildeEqual: hL,
  TildeFullEqual: dL,
  TildeTilde: gL,
  timesbar: mL,
  timesb: bL,
  times: _L,
  timesd: kL,
  tint: xL,
  toea: vL,
  topbot: yL,
  topcir: CL,
  top: wL,
  Topf: AL,
  topf: DL,
  topfork: qL,
  tosa: EL,
  tprime: SL,
  trade: FL,
  TRADE: TL,
  triangle: RL,
  triangledown: LL,
  triangleleft: zL,
  trianglelefteq: IL,
  triangleq: BL,
  triangleright: NL,
  trianglerighteq: ML,
  tridot: PL,
  trie: OL,
  triminus: UL,
  TripleDot: VL,
  triplus: $L,
  trisb: GL,
  tritime: jL,
  trpezium: HL,
  Tscr: ZL,
  tscr: JL,
  TScy: WL,
  tscy: YL,
  TSHcy: QL,
  tshcy: KL,
  Tstrok: XL,
  tstrok: nz,
  twixt: rz,
  twoheadleftarrow: tz,
  twoheadrightarrow: oz,
  Uacute: ez,
  uacute: sz,
  uarr: cz,
  Uarr: iz,
  uArr: az,
  Uarrocir: lz,
  Ubrcy: uz,
  ubrcy: pz,
  Ubreve: fz,
  ubreve: hz,
  Ucirc: dz,
  ucirc: gz,
  Ucy: mz,
  ucy: bz,
  udarr: _z,
  Udblac: kz,
  udblac: xz,
  udhar: vz,
  ufisht: yz,
  Ufr: Cz,
  ufr: wz,
  Ugrave: Az,
  ugrave: Dz,
  uHar: qz,
  uharl: Ez,
  uharr: Sz,
  uhblk: Fz,
  ulcorn: Tz,
  ulcorner: Rz,
  ulcrop: Lz,
  ultri: zz,
  Umacr: Iz,
  umacr: Bz,
  uml: Nz,
  UnderBar: Mz,
  UnderBrace: Pz,
  UnderBracket: Oz,
  UnderParenthesis: Uz,
  Union: Vz,
  UnionPlus: $z,
  Uogon: Gz,
  uogon: jz,
  Uopf: Hz,
  uopf: Zz,
  UpArrowBar: Jz,
  uparrow: Wz,
  UpArrow: Yz,
  Uparrow: Qz,
  UpArrowDownArrow: Kz,
  updownarrow: Xz,
  UpDownArrow: nI,
  Updownarrow: rI,
  UpEquilibrium: tI,
  upharpoonleft: oI,
  upharpoonright: eI,
  uplus: sI,
  UpperLeftArrow: cI,
  UpperRightArrow: iI,
  upsi: aI,
  Upsi: lI,
  upsih: uI,
  Upsilon: pI,
  upsilon: fI,
  UpTeeArrow: hI,
  UpTee: dI,
  upuparrows: gI,
  urcorn: mI,
  urcorner: bI,
  urcrop: _I,
  Uring: kI,
  uring: xI,
  urtri: vI,
  Uscr: yI,
  uscr: CI,
  utdot: wI,
  Utilde: AI,
  utilde: DI,
  utri: qI,
  utrif: EI,
  uuarr: SI,
  Uuml: FI,
  uuml: TI,
  uwangle: RI,
  vangrt: LI,
  varepsilon: zI,
  varkappa: II,
  varnothing: BI,
  varphi: NI,
  varpi: MI,
  varpropto: PI,
  varr: OI,
  vArr: UI,
  varrho: VI,
  varsigma: $I,
  varsubsetneq: GI,
  varsubsetneqq: jI,
  varsupsetneq: HI,
  varsupsetneqq: ZI,
  vartheta: JI,
  vartriangleleft: WI,
  vartriangleright: YI,
  vBar: QI,
  Vbar: KI,
  vBarv: XI,
  Vcy: nB,
  vcy: rB,
  vdash: tB,
  vDash: oB,
  Vdash: eB,
  VDash: sB,
  Vdashl: cB,
  veebar: iB,
  vee: aB,
  Vee: lB,
  veeeq: uB,
  vellip: pB,
  verbar: fB,
  Verbar: hB,
  vert: dB,
  Vert: gB,
  VerticalBar: mB,
  VerticalLine: bB,
  VerticalSeparator: _B,
  VerticalTilde: kB,
  VeryThinSpace: xB,
  Vfr: vB,
  vfr: yB,
  vltri: CB,
  vnsub: wB,
  vnsup: AB,
  Vopf: DB,
  vopf: qB,
  vprop: EB,
  vrtri: SB,
  Vscr: FB,
  vscr: TB,
  vsubnE: RB,
  vsubne: LB,
  vsupnE: zB,
  vsupne: IB,
  Vvdash: BB,
  vzigzag: NB,
  Wcirc: MB,
  wcirc: PB,
  wedbar: OB,
  wedge: UB,
  Wedge: VB,
  wedgeq: $B,
  weierp: GB,
  Wfr: jB,
  wfr: HB,
  Wopf: ZB,
  wopf: JB,
  wp: WB,
  wr: YB,
  wreath: QB,
  Wscr: KB,
  wscr: XB,
  xcap: n3,
  xcirc: r3,
  xcup: t3,
  xdtri: o3,
  Xfr: e3,
  xfr: s3,
  xharr: c3,
  xhArr: i3,
  Xi: a3,
  xi: l3,
  xlarr: u3,
  xlArr: p3,
  xmap: f3,
  xnis: h3,
  xodot: d3,
  Xopf: g3,
  xopf: m3,
  xoplus: b3,
  xotime: _3,
  xrarr: k3,
  xrArr: x3,
  Xscr: v3,
  xscr: y3,
  xsqcup: C3,
  xuplus: w3,
  xutri: A3,
  xvee: D3,
  xwedge: q3,
  Yacute: E3,
  yacute: S3,
  YAcy: F3,
  yacy: T3,
  Ycirc: R3,
  ycirc: L3,
  Ycy: z3,
  ycy: I3,
  yen: B3,
  Yfr: N3,
  yfr: M3,
  YIcy: P3,
  yicy: O3,
  Yopf: U3,
  yopf: V3,
  Yscr: $3,
  yscr: G3,
  YUcy: j3,
  yucy: H3,
  yuml: Z3,
  Yuml: J3,
  Zacute: W3,
  zacute: Y3,
  Zcaron: Q3,
  zcaron: K3,
  Zcy: X3,
  zcy: nN,
  Zdot: rN,
  zdot: tN,
  zeetrf: oN,
  ZeroWidthSpace: eN,
  Zeta: sN,
  zeta: cN,
  zfr: iN,
  Zfr: aN,
  ZHcy: lN,
  zhcy: uN,
  zigrarr: pN,
  zopf: fN,
  Zopf: hN,
  Zscr: dN,
  zscr: gN,
  zwj: mN,
  zwnj: bN
};
var Dr = _N, Rn = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/, Z = {}, $n = {};
function kN(t) {
  var n, r, o = $n[t];
  if (o)
    return o;
  for (o = $n[t] = [], n = 0; n < 128; n++)
    r = String.fromCharCode(n), /^[0-9a-z]$/i.test(r) ? o.push(r) : o.push("%" + ("0" + n.toString(16).toUpperCase()).slice(-2));
  for (n = 0; n < t.length; n++)
    o[t.charCodeAt(n)] = t[n];
  return o;
}
function cn(t, n, r) {
  var o, e, s, i, c, a = "";
  for (typeof n != "string" && (r = n, n = cn.defaultChars), typeof r > "u" && (r = true), c = kN(n), o = 0, e = t.length; o < e; o++) {
    if (s = t.charCodeAt(o), r && s === 37 && o + 2 < e && /^[0-9a-f]{2}$/i.test(t.slice(o + 1, o + 3))) {
      a += t.slice(o, o + 3), o += 2;
      continue;
    }
    if (s < 128) {
      a += c[s];
      continue;
    }
    if (s >= 55296 && s <= 57343) {
      if (s >= 55296 && s <= 56319 && o + 1 < e && (i = t.charCodeAt(o + 1), i >= 56320 && i <= 57343)) {
        a += encodeURIComponent(t[o] + t[o + 1]), o++;
        continue;
      }
      a += "%EF%BF%BD";
      continue;
    }
    a += encodeURIComponent(t[o]);
  }
  return a;
}
cn.defaultChars = ";/?:@&=+$,-_.!~*'()#";
cn.componentChars = "-_.!~*'()";
var xN = cn, Gn = {};
function vN(t) {
  var n, r, o = Gn[t];
  if (o)
    return o;
  for (o = Gn[t] = [], n = 0; n < 128; n++)
    r = String.fromCharCode(n), o.push(r);
  for (n = 0; n < t.length; n++)
    r = t.charCodeAt(n), o[r] = "%" + ("0" + r.toString(16).toUpperCase()).slice(-2);
  return o;
}
function an(t, n) {
  var r;
  return typeof n != "string" && (n = an.defaultChars), r = vN(n), t.replace(/(%[a-f0-9]{2})+/gi, function(o) {
    var e, s, i, c, a, l, u, f = "";
    for (e = 0, s = o.length; e < s; e += 3) {
      if (i = parseInt(o.slice(e + 1, e + 3), 16), i < 128) {
        f += r[i];
        continue;
      }
      if ((i & 224) === 192 && e + 3 < s && (c = parseInt(o.slice(e + 4, e + 6), 16), (c & 192) === 128)) {
        u = i << 6 & 1984 | c & 63, u < 128 ? f += "��" : f += String.fromCharCode(u), e += 3;
        continue;
      }
      if ((i & 240) === 224 && e + 6 < s && (c = parseInt(o.slice(e + 4, e + 6), 16), a = parseInt(o.slice(e + 7, e + 9), 16), (c & 192) === 128 && (a & 192) === 128)) {
        u = i << 12 & 61440 | c << 6 & 4032 | a & 63, u < 2048 || u >= 55296 && u <= 57343 ? f += "���" : f += String.fromCharCode(u), e += 6;
        continue;
      }
      if ((i & 248) === 240 && e + 9 < s && (c = parseInt(o.slice(e + 4, e + 6), 16), a = parseInt(o.slice(e + 7, e + 9), 16), l = parseInt(o.slice(e + 10, e + 12), 16), (c & 192) === 128 && (a & 192) === 128 && (l & 192) === 128)) {
        u = i << 18 & 1835008 | c << 12 & 258048 | a << 6 & 4032 | l & 63, u < 65536 || u > 1114111 ? f += "����" : (u -= 65536, f += String.fromCharCode(55296 + (u >> 10), 56320 + (u & 1023))), e += 9;
        continue;
      }
      f += "�";
    }
    return f;
  });
}
an.defaultChars = ";/?:@&=+$,#";
an.componentChars = "";
var yN = an, CN = function(n) {
  var r = "";
  return r += n.protocol || "", r += n.slashes ? "//" : "", r += n.auth ? n.auth + "@" : "", n.hostname && n.hostname.indexOf(":") !== -1 ? r += "[" + n.hostname + "]" : r += n.hostname || "", r += n.port ? ":" + n.port : "", r += n.pathname || "", r += n.search || "", r += n.hash || "", r;
};
function en() {
  this.protocol = null, this.slashes = null, this.auth = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.pathname = null;
}
var wN = /^([a-z0-9.+-]+:)/i, AN = /:[0-9]*$/, DN = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, qN = ["<", ">", '"', "`", " ", "\r", `
`, "	"], EN = ["{", "}", "|", "\\", "^", "`"].concat(qN), SN = ["'"].concat(EN), jn = ["%", "/", "?", ";", "#"].concat(SN), Hn = ["/", "?", "#"], FN = 255, Zn = /^[+a-z0-9A-Z_-]{0,63}$/, TN = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, Jn = {
  javascript: true,
  "javascript:": true
}, Wn = {
  http: true,
  https: true,
  ftp: true,
  gopher: true,
  file: true,
  "http:": true,
  "https:": true,
  "ftp:": true,
  "gopher:": true,
  "file:": true
};
function RN(t, n) {
  if (t && t instanceof en)
    return t;
  var r = new en();
  return r.parse(t, n), r;
}
en.prototype.parse = function(t, n) {
  var r, o, e, s, i, c = t;
  if (c = c.trim(), !n && t.split("#").length === 1) {
    var a = DN.exec(c);
    if (a)
      return this.pathname = a[1], a[2] && (this.search = a[2]), this;
  }
  var l = wN.exec(c);
  if (l && (l = l[0], e = l.toLowerCase(), this.protocol = l, c = c.substr(l.length)), (n || l || c.match(/^\/\/[^@\/]+@[^@\/]+/)) && (i = c.substr(0, 2) === "//", i && !(l && Jn[l]) && (c = c.substr(2), this.slashes = true)), !Jn[l] && (i || l && !Wn[l])) {
    var u = -1;
    for (r = 0; r < Hn.length; r++)
      s = c.indexOf(Hn[r]), s !== -1 && (u === -1 || s < u) && (u = s);
    var f, h;
    for (u === -1 ? h = c.lastIndexOf("@") : h = c.lastIndexOf("@", u), h !== -1 && (f = c.slice(0, h), c = c.slice(h + 1), this.auth = f), u = -1, r = 0; r < jn.length; r++)
      s = c.indexOf(jn[r]), s !== -1 && (u === -1 || s < u) && (u = s);
    u === -1 && (u = c.length), c[u - 1] === ":" && u--;
    var p = c.slice(0, u);
    c = c.slice(u), this.parseHost(p), this.hostname = this.hostname || "";
    var m = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
    if (!m) {
      var _ = this.hostname.split(/\./);
      for (r = 0, o = _.length; r < o; r++) {
        var v = _[r];
        if (v && !v.match(Zn)) {
          for (var k = "", g = 0, x = v.length; g < x; g++)
            v.charCodeAt(g) > 127 ? k += "x" : k += v[g];
          if (!k.match(Zn)) {
            var y = _.slice(0, r), C = _.slice(r + 1), b = v.match(TN);
            b && (y.push(b[1]), C.unshift(b[2])), C.length && (c = C.join(".") + c), this.hostname = y.join(".");
            break;
          }
        }
      }
    }
    this.hostname.length > FN && (this.hostname = ""), m && (this.hostname = this.hostname.substr(1, this.hostname.length - 2));
  }
  var q = c.indexOf("#");
  q !== -1 && (this.hash = c.substr(q), c = c.slice(0, q));
  var F = c.indexOf("?");
  return F !== -1 && (this.search = c.substr(F), c = c.slice(0, F)), c && (this.pathname = c), Wn[e] && this.hostname && !this.pathname && (this.pathname = ""), this;
};
en.prototype.parseHost = function(t) {
  var n = AN.exec(t);
  n && (n = n[0], n !== ":" && (this.port = n.substr(1)), t = t.substr(0, t.length - n.length)), t && (this.hostname = t);
};
var LN = RN;
Z.encode = xN;
Z.decode = yN;
Z.format = CN;
Z.parse = LN;
var O = {}, mn, Yn;
function qr() {
  return Yn || (Yn = 1, mn = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/), mn;
}
var bn, Qn;
function Er() {
  return Qn || (Qn = 1, bn = /[\0-\x1F\x7F-\x9F]/), bn;
}
var _n, Kn;
function zN() {
  return Kn || (Kn = 1, _n = /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/), _n;
}
var kn, Xn;
function Sr() {
  return Xn || (Xn = 1, kn = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/), kn;
}
var nr;
function IN() {
  return nr || (nr = 1, O.Any = qr(), O.Cc = Er(), O.Cf = zN(), O.P = Rn, O.Z = Sr()), O;
}
(function(t) {
  function n(d) {
    return Object.prototype.toString.call(d);
  }
  function r(d) {
    return n(d) === "[object String]";
  }
  var o = Object.prototype.hasOwnProperty;
  function e(d, S) {
    return o.call(d, S);
  }
  function s(d) {
    var S = Array.prototype.slice.call(arguments, 1);
    return S.forEach(function(A) {
      if (A) {
        if (typeof A != "object")
          throw new TypeError(A + "must be object");
        Object.keys(A).forEach(function(M) {
          d[M] = A[M];
        });
      }
    }), d;
  }
  function i(d, S, A) {
    return [].concat(d.slice(0, S), A, d.slice(S + 1));
  }
  function c(d) {
    return !(d >= 55296 && d <= 57343 || d >= 64976 && d <= 65007 || (d & 65535) === 65535 || (d & 65535) === 65534 || d >= 0 && d <= 8 || d === 11 || d >= 14 && d <= 31 || d >= 127 && d <= 159 || d > 1114111);
  }
  function a(d) {
    if (d > 65535) {
      d -= 65536;
      var S = 55296 + (d >> 10), A = 56320 + (d & 1023);
      return String.fromCharCode(S, A);
    }
    return String.fromCharCode(d);
  }
  var l = /\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g, u = /&([a-z#][a-z0-9]{1,31});/gi, f = new RegExp(l.source + "|" + u.source, "gi"), h = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i, p = Dr;
  function m(d, S) {
    var A = 0;
    return e(p, S) ? p[S] : S.charCodeAt(0) === 35 && h.test(S) && (A = S[1].toLowerCase() === "x" ? parseInt(S.slice(2), 16) : parseInt(S.slice(1), 10), c(A)) ? a(A) : d;
  }
  function _(d) {
    return d.indexOf("\\") < 0 ? d : d.replace(l, "$1");
  }
  function v(d) {
    return d.indexOf("\\") < 0 && d.indexOf("&") < 0 ? d : d.replace(f, function(S, A, M) {
      return A || m(S, M);
    });
  }
  var k = /[&<>"]/, g = /[&<>"]/g, x = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;"
  };
  function y(d) {
    return x[d];
  }
  function C(d) {
    return k.test(d) ? d.replace(g, y) : d;
  }
  var b = /[.?*+^$[\]\\(){}|-]/g;
  function q(d) {
    return d.replace(b, "\\$&");
  }
  function F(d) {
    switch (d) {
      case 9:
      case 32:
        return true;
    }
    return false;
  }
  function $(d) {
    if (d >= 8192 && d <= 8202)
      return true;
    switch (d) {
      case 9:
      case 10:
      case 11:
      case 12:
      case 13:
      case 32:
      case 160:
      case 5760:
      case 8239:
      case 8287:
      case 12288:
        return true;
    }
    return false;
  }
  var w = Rn;
  function E(d) {
    return w.test(d);
  }
  function Y(d) {
    switch (d) {
      case 33:
      case 34:
      case 35:
      case 36:
      case 37:
      case 38:
      case 39:
      case 40:
      case 41:
      case 42:
      case 43:
      case 44:
      case 45:
      case 46:
      case 47:
      case 58:
      case 59:
      case 60:
      case 61:
      case 62:
      case 63:
      case 64:
      case 91:
      case 92:
      case 93:
      case 94:
      case 95:
      case 96:
      case 123:
      case 124:
      case 125:
      case 126:
        return true;
      default:
        return false;
    }
  }
  function G(d) {
    return d = d.trim().replace(/\s+/g, " "), "ẞ".toLowerCase() === "Ṿ" && (d = d.replace(/ẞ/g, "ß")), d.toLowerCase().toUpperCase();
  }
  t.lib = {}, t.lib.mdurl = Z, t.lib.ucmicro = IN(), t.assign = s, t.isString = r, t.has = e, t.unescapeMd = _, t.unescapeAll = v, t.isValidEntityCode = c, t.fromCodePoint = a, t.escapeHtml = C, t.arrayReplaceAt = i, t.isSpace = F, t.isWhiteSpace = $, t.isMdAsciiPunct = Y, t.isPunctChar = E, t.escapeRE = q, t.normalizeReference = G;
})(D);
var ln = {}, BN = function(n, r, o) {
  var e, s, i, c, a = -1, l = n.posMax, u = n.pos;
  for (n.pos = r + 1, e = 1; n.pos < l; ) {
    if (i = n.src.charCodeAt(n.pos), i === 93 && (e--, e === 0)) {
      s = true;
      break;
    }
    if (c = n.pos, n.md.inline.skipToken(n), i === 91) {
      if (c === n.pos - 1)
        e++;
      else if (o)
        return n.pos = u, -1;
    }
  }
  return s && (a = n.pos), n.pos = u, a;
}, rr = D.unescapeAll, NN = function(n, r, o) {
  var e, s, i = 0, c = r, a = {
    ok: false,
    pos: 0,
    lines: 0,
    str: ""
  };
  if (n.charCodeAt(r) === 60) {
    for (r++; r < o; ) {
      if (e = n.charCodeAt(r), e === 10 || e === 60)
        return a;
      if (e === 62)
        return a.pos = r + 1, a.str = rr(n.slice(c + 1, r)), a.ok = true, a;
      if (e === 92 && r + 1 < o) {
        r += 2;
        continue;
      }
      r++;
    }
    return a;
  }
  for (s = 0; r < o && (e = n.charCodeAt(r), !(e === 32 || e < 32 || e === 127)); ) {
    if (e === 92 && r + 1 < o) {
      if (n.charCodeAt(r + 1) === 32)
        break;
      r += 2;
      continue;
    }
    if (e === 40 && (s++, s > 32))
      return a;
    if (e === 41) {
      if (s === 0)
        break;
      s--;
    }
    r++;
  }
  return c === r || s !== 0 || (a.str = rr(n.slice(c, r)), a.lines = i, a.pos = r, a.ok = true), a;
}, MN = D.unescapeAll, PN = function(n, r, o) {
  var e, s, i = 0, c = r, a = {
    ok: false,
    pos: 0,
    lines: 0,
    str: ""
  };
  if (r >= o || (s = n.charCodeAt(r), s !== 34 && s !== 39 && s !== 40))
    return a;
  for (r++, s === 40 && (s = 41); r < o; ) {
    if (e = n.charCodeAt(r), e === s)
      return a.pos = r + 1, a.lines = i, a.str = MN(n.slice(c + 1, r)), a.ok = true, a;
    if (e === 40 && s === 41)
      return a;
    e === 10 ? i++ : e === 92 && r + 1 < o && (r++, n.charCodeAt(r) === 10 && i++), r++;
  }
  return a;
};
ln.parseLinkLabel = BN;
ln.parseLinkDestination = NN;
ln.parseLinkTitle = PN;
var ON = D.assign, UN = D.unescapeAll, V = D.escapeHtml, B = {};
B.code_inline = function(t, n, r, o, e) {
  var s = t[n];
  return "<code" + e.renderAttrs(s) + ">" + V(t[n].content) + "</code>";
};
B.code_block = function(t, n, r, o, e) {
  var s = t[n];
  return "<pre" + e.renderAttrs(s) + "><code>" + V(t[n].content) + `</code></pre>
`;
};
B.fence = function(t, n, r, o, e) {
  var s = t[n], i = s.info ? UN(s.info).trim() : "", c = "", a = "", l, u, f, h, p;
  return i && (f = i.split(/(\s+)/g), c = f[0], a = f.slice(2).join("")), r.highlight ? l = r.highlight(s.content, c, a) || V(s.content) : l = V(s.content), l.indexOf("<pre") === 0 ? l + `
` : i ? (u = s.attrIndex("class"), h = s.attrs ? s.attrs.slice() : [], u < 0 ? h.push(["class", r.langPrefix + c]) : (h[u] = h[u].slice(), h[u][1] += " " + r.langPrefix + c), p = {
    attrs: h
  }, "<pre><code" + e.renderAttrs(p) + ">" + l + `</code></pre>
`) : "<pre><code" + e.renderAttrs(s) + ">" + l + `</code></pre>
`;
};
B.image = function(t, n, r, o, e) {
  var s = t[n];
  return s.attrs[s.attrIndex("alt")][1] = e.renderInlineAsText(s.children, r, o), e.renderToken(t, n, r);
};
B.hardbreak = function(t, n, r) {
  return r.xhtmlOut ? `<br />
` : `<br>
`;
};
B.softbreak = function(t, n, r) {
  return r.breaks ? r.xhtmlOut ? `<br />
` : `<br>
` : `
`;
};
B.text = function(t, n) {
  return V(t[n].content);
};
B.html_block = function(t, n) {
  return t[n].content;
};
B.html_inline = function(t, n) {
  return t[n].content;
};
function J() {
  this.rules = ON({}, B);
}
J.prototype.renderAttrs = function(n) {
  var r, o, e;
  if (!n.attrs)
    return "";
  for (e = "", r = 0, o = n.attrs.length; r < o; r++)
    e += " " + V(n.attrs[r][0]) + '="' + V(n.attrs[r][1]) + '"';
  return e;
};
J.prototype.renderToken = function(n, r, o) {
  var e, s = "", i = false, c = n[r];
  return c.hidden ? "" : (c.block && c.nesting !== -1 && r && n[r - 1].hidden && (s += `
`), s += (c.nesting === -1 ? "</" : "<") + c.tag, s += this.renderAttrs(c), c.nesting === 0 && o.xhtmlOut && (s += " /"), c.block && (i = true, c.nesting === 1 && r + 1 < n.length && (e = n[r + 1], (e.type === "inline" || e.hidden || e.nesting === -1 && e.tag === c.tag) && (i = false))), s += i ? `>
` : ">", s);
};
J.prototype.renderInline = function(t, n, r) {
  for (var o, e = "", s = this.rules, i = 0, c = t.length; i < c; i++)
    o = t[i].type, typeof s[o] < "u" ? e += s[o](t, i, n, r, this) : e += this.renderToken(t, i, n);
  return e;
};
J.prototype.renderInlineAsText = function(t, n, r) {
  for (var o = "", e = 0, s = t.length; e < s; e++)
    t[e].type === "text" ? o += t[e].content : t[e].type === "image" ? o += this.renderInlineAsText(t[e].children, n, r) : t[e].type === "softbreak" && (o += `
`);
  return o;
};
J.prototype.render = function(t, n, r) {
  var o, e, s, i = "", c = this.rules;
  for (o = 0, e = t.length; o < e; o++)
    s = t[o].type, s === "inline" ? i += this.renderInline(t[o].children, n, r) : typeof c[s] < "u" ? i += c[t[o].type](t, o, n, r, this) : i += this.renderToken(t, o, n, r);
  return i;
};
var VN = J;
function L() {
  this.__rules__ = [], this.__cache__ = null;
}
L.prototype.__find__ = function(t) {
  for (var n = 0; n < this.__rules__.length; n++)
    if (this.__rules__[n].name === t)
      return n;
  return -1;
};
L.prototype.__compile__ = function() {
  var t = this, n = [""];
  t.__rules__.forEach(function(r) {
    r.enabled && r.alt.forEach(function(o) {
      n.indexOf(o) < 0 && n.push(o);
    });
  }), t.__cache__ = {}, n.forEach(function(r) {
    t.__cache__[r] = [], t.__rules__.forEach(function(o) {
      o.enabled && (r && o.alt.indexOf(r) < 0 || t.__cache__[r].push(o.fn));
    });
  });
};
L.prototype.at = function(t, n, r) {
  var o = this.__find__(t), e = r || {};
  if (o === -1)
    throw new Error("Parser rule not found: " + t);
  this.__rules__[o].fn = n, this.__rules__[o].alt = e.alt || [], this.__cache__ = null;
};
L.prototype.before = function(t, n, r, o) {
  var e = this.__find__(t), s = o || {};
  if (e === -1)
    throw new Error("Parser rule not found: " + t);
  this.__rules__.splice(e, 0, {
    name: n,
    enabled: true,
    fn: r,
    alt: s.alt || []
  }), this.__cache__ = null;
};
L.prototype.after = function(t, n, r, o) {
  var e = this.__find__(t), s = o || {};
  if (e === -1)
    throw new Error("Parser rule not found: " + t);
  this.__rules__.splice(e + 1, 0, {
    name: n,
    enabled: true,
    fn: r,
    alt: s.alt || []
  }), this.__cache__ = null;
};
L.prototype.push = function(t, n, r) {
  var o = r || {};
  this.__rules__.push({
    name: t,
    enabled: true,
    fn: n,
    alt: o.alt || []
  }), this.__cache__ = null;
};
L.prototype.enable = function(t, n) {
  Array.isArray(t) || (t = [t]);
  var r = [];
  return t.forEach(function(o) {
    var e = this.__find__(o);
    if (e < 0) {
      if (n)
        return;
      throw new Error("Rules manager: invalid rule name " + o);
    }
    this.__rules__[e].enabled = true, r.push(o);
  }, this), this.__cache__ = null, r;
};
L.prototype.enableOnly = function(t, n) {
  Array.isArray(t) || (t = [t]), this.__rules__.forEach(function(r) {
    r.enabled = false;
  }), this.enable(t, n);
};
L.prototype.disable = function(t, n) {
  Array.isArray(t) || (t = [t]);
  var r = [];
  return t.forEach(function(o) {
    var e = this.__find__(o);
    if (e < 0) {
      if (n)
        return;
      throw new Error("Rules manager: invalid rule name " + o);
    }
    this.__rules__[e].enabled = false, r.push(o);
  }, this), this.__cache__ = null, r;
};
L.prototype.getRules = function(t) {
  return this.__cache__ === null && this.__compile__(), this.__cache__[t] || [];
};
var Ln = L, $N = /\r\n?|\n/g, GN = /\0/g, jN = function(n) {
  var r;
  r = n.src.replace($N, `
`), r = r.replace(GN, "�"), n.src = r;
}, HN = function(n) {
  var r;
  n.inlineMode ? (r = new n.Token("inline", "", 0), r.content = n.src, r.map = [0, 1], r.children = [], n.tokens.push(r)) : n.md.block.parse(n.src, n.md, n.env, n.tokens);
}, ZN = function(n) {
  var r = n.tokens, o, e, s;
  for (e = 0, s = r.length; e < s; e++)
    o = r[e], o.type === "inline" && n.md.inline.parse(o.content, n.md, n.env, o.children);
}, JN = D.arrayReplaceAt;
function WN(t) {
  return /^<a[>\s]/i.test(t);
}
function YN(t) {
  return /^<\/a\s*>/i.test(t);
}
var QN = function(n) {
  var r, o, e, s, i, c, a, l, u, f, h, p, m, _, v, k, g = n.tokens, x;
  if (n.md.options.linkify) {
    for (o = 0, e = g.length; o < e; o++)
      if (!(g[o].type !== "inline" || !n.md.linkify.pretest(g[o].content)))
        for (s = g[o].children, m = 0, r = s.length - 1; r >= 0; r--) {
          if (c = s[r], c.type === "link_close") {
            for (r--; s[r].level !== c.level && s[r].type !== "link_open"; )
              r--;
            continue;
          }
          if (c.type === "html_inline" && (WN(c.content) && m > 0 && m--, YN(c.content) && m++), !(m > 0) && c.type === "text" && n.md.linkify.test(c.content)) {
            for (u = c.content, x = n.md.linkify.match(u), a = [], p = c.level, h = 0, x.length > 0 && x[0].index === 0 && r > 0 && s[r - 1].type === "text_special" && (x = x.slice(1)), l = 0; l < x.length; l++)
              _ = x[l].url, v = n.md.normalizeLink(_), n.md.validateLink(v) && (k = x[l].text, x[l].schema ? x[l].schema === "mailto:" && !/^mailto:/i.test(k) ? k = n.md.normalizeLinkText("mailto:" + k).replace(/^mailto:/, "") : k = n.md.normalizeLinkText(k) : k = n.md.normalizeLinkText("http://" + k).replace(/^http:\/\//, ""), f = x[l].index, f > h && (i = new n.Token("text", "", 0), i.content = u.slice(h, f), i.level = p, a.push(i)), i = new n.Token("link_open", "a", 1), i.attrs = [["href", v]], i.level = p++, i.markup = "linkify", i.info = "auto", a.push(i), i = new n.Token("text", "", 0), i.content = k, i.level = p, a.push(i), i = new n.Token("link_close", "a", -1), i.level = --p, i.markup = "linkify", i.info = "auto", a.push(i), h = x[l].lastIndex);
            h < u.length && (i = new n.Token("text", "", 0), i.content = u.slice(h), i.level = p, a.push(i)), g[o].children = s = JN(s, r, a);
          }
        }
  }
}, Fr = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/, KN = /\((c|tm|r)\)/i, XN = /\((c|tm|r)\)/ig, nM = {
  c: "©",
  r: "®",
  tm: "™"
};
function rM(t, n) {
  return nM[n.toLowerCase()];
}
function tM(t) {
  var n, r, o = 0;
  for (n = t.length - 1; n >= 0; n--)
    r = t[n], r.type === "text" && !o && (r.content = r.content.replace(XN, rM)), r.type === "link_open" && r.info === "auto" && o--, r.type === "link_close" && r.info === "auto" && o++;
}
function oM(t) {
  var n, r, o = 0;
  for (n = t.length - 1; n >= 0; n--)
    r = t[n], r.type === "text" && !o && Fr.test(r.content) && (r.content = r.content.replace(/\+-/g, "±").replace(/\.{2,}/g, "…").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---(?=[^-]|$)/mg, "$1—").replace(/(^|\s)--(?=\s|$)/mg, "$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg, "$1–")), r.type === "link_open" && r.info === "auto" && o--, r.type === "link_close" && r.info === "auto" && o++;
}
var eM = function(n) {
  var r;
  if (n.md.options.typographer)
    for (r = n.tokens.length - 1; r >= 0; r--)
      n.tokens[r].type === "inline" && (KN.test(n.tokens[r].content) && tM(n.tokens[r].children), Fr.test(n.tokens[r].content) && oM(n.tokens[r].children));
}, tr = D.isWhiteSpace, or = D.isPunctChar, er = D.isMdAsciiPunct, sM = /['"]/, sr = /['"]/g, cr = "’";
function rn(t, n, r) {
  return t.slice(0, n) + r + t.slice(n + 1);
}
function cM(t, n) {
  var r, o, e, s, i, c, a, l, u, f, h, p, m, _, v, k, g, x, y, C, b;
  for (y = [], r = 0; r < t.length; r++) {
    for (o = t[r], a = t[r].level, g = y.length - 1; g >= 0 && !(y[g].level <= a); g--)
      ;
    if (y.length = g + 1, o.type === "text") {
      e = o.content, i = 0, c = e.length;
      n:
        for (; i < c && (sr.lastIndex = i, s = sr.exec(e), !!s); ) {
          if (v = k = true, i = s.index + 1, x = s[0] === "'", u = 32, s.index - 1 >= 0)
            u = e.charCodeAt(s.index - 1);
          else
            for (g = r - 1; g >= 0 && !(t[g].type === "softbreak" || t[g].type === "hardbreak"); g--)
              if (t[g].content) {
                u = t[g].content.charCodeAt(t[g].content.length - 1);
                break;
              }
          if (f = 32, i < c)
            f = e.charCodeAt(i);
          else
            for (g = r + 1; g < t.length && !(t[g].type === "softbreak" || t[g].type === "hardbreak"); g++)
              if (t[g].content) {
                f = t[g].content.charCodeAt(0);
                break;
              }
          if (h = er(u) || or(String.fromCharCode(u)), p = er(f) || or(String.fromCharCode(f)), m = tr(u), _ = tr(f), _ ? v = false : p && (m || h || (v = false)), m ? k = false : h && (_ || p || (k = false)), f === 34 && s[0] === '"' && u >= 48 && u <= 57 && (k = v = false), v && k && (v = h, k = p), !v && !k) {
            x && (o.content = rn(o.content, s.index, cr));
            continue;
          }
          if (k) {
            for (g = y.length - 1; g >= 0 && (l = y[g], !(y[g].level < a)); g--)
              if (l.single === x && y[g].level === a) {
                l = y[g], x ? (C = n.md.options.quotes[2], b = n.md.options.quotes[3]) : (C = n.md.options.quotes[0], b = n.md.options.quotes[1]), o.content = rn(o.content, s.index, b), t[l.token].content = rn(
                  t[l.token].content,
                  l.pos,
                  C
                ), i += b.length - 1, l.token === r && (i += C.length - 1), e = o.content, c = e.length, y.length = g;
                continue n;
              }
          }
          v ? y.push({
            token: r,
            pos: s.index,
            single: x,
            level: a
          }) : k && x && (o.content = rn(o.content, s.index, cr));
        }
    }
  }
}
var iM = function(n) {
  var r;
  if (n.md.options.typographer)
    for (r = n.tokens.length - 1; r >= 0; r--)
      n.tokens[r].type !== "inline" || !sM.test(n.tokens[r].content) || cM(n.tokens[r].children, n);
}, aM = function(n) {
  var r, o, e, s, i, c, a = n.tokens;
  for (r = 0, o = a.length; r < o; r++)
    if (a[r].type === "inline") {
      for (e = a[r].children, i = e.length, s = 0; s < i; s++)
        e[s].type === "text_special" && (e[s].type = "text");
      for (s = c = 0; s < i; s++)
        e[s].type === "text" && s + 1 < i && e[s + 1].type === "text" ? e[s + 1].content = e[s].content + e[s + 1].content : (s !== c && (e[c] = e[s]), c++);
      s !== c && (e.length = c);
    }
};
function W(t, n, r) {
  this.type = t, this.tag = n, this.attrs = null, this.map = null, this.nesting = r, this.level = 0, this.children = null, this.content = "", this.markup = "", this.info = "", this.meta = null, this.block = false, this.hidden = false;
}
W.prototype.attrIndex = function(n) {
  var r, o, e;
  if (!this.attrs)
    return -1;
  for (r = this.attrs, o = 0, e = r.length; o < e; o++)
    if (r[o][0] === n)
      return o;
  return -1;
};
W.prototype.attrPush = function(n) {
  this.attrs ? this.attrs.push(n) : this.attrs = [n];
};
W.prototype.attrSet = function(n, r) {
  var o = this.attrIndex(n), e = [n, r];
  o < 0 ? this.attrPush(e) : this.attrs[o] = e;
};
W.prototype.attrGet = function(n) {
  var r = this.attrIndex(n), o = null;
  return r >= 0 && (o = this.attrs[r][1]), o;
};
W.prototype.attrJoin = function(n, r) {
  var o = this.attrIndex(n);
  o < 0 ? this.attrPush([n, r]) : this.attrs[o][1] = this.attrs[o][1] + " " + r;
};
var zn = W, lM = zn;
function Tr(t, n, r) {
  this.src = t, this.env = r, this.tokens = [], this.inlineMode = false, this.md = n;
}
Tr.prototype.Token = lM;
var uM = Tr, pM = Ln, xn = [
  ["normalize", jN],
  ["block", HN],
  ["inline", ZN],
  ["linkify", QN],
  ["replacements", eM],
  ["smartquotes", iM],
  // `text_join` finds `text_special` tokens (for escape sequences)
  // and joins them with the rest of the text
  ["text_join", aM]
];
function In() {
  this.ruler = new pM();
  for (var t = 0; t < xn.length; t++)
    this.ruler.push(xn[t][0], xn[t][1]);
}
In.prototype.process = function(t) {
  var n, r, o;
  for (o = this.ruler.getRules(""), n = 0, r = o.length; n < r; n++)
    o[n](t);
};
In.prototype.State = uM;
var fM = In, vn = D.isSpace;
function yn(t, n) {
  var r = t.bMarks[n] + t.tShift[n], o = t.eMarks[n];
  return t.src.slice(r, o);
}
function ir(t) {
  var n = [], r = 0, o = t.length, e, s = false, i = 0, c = "";
  for (e = t.charCodeAt(r); r < o; )
    e === 124 && (s ? (c += t.substring(i, r - 1), i = r) : (n.push(c + t.substring(i, r)), c = "", i = r + 1)), s = e === 92, r++, e = t.charCodeAt(r);
  return n.push(c + t.substring(i)), n;
}
var hM = function(n, r, o, e) {
  var s, i, c, a, l, u, f, h, p, m, _, v, k, g, x, y, C, b;
  if (r + 2 > o || (u = r + 1, n.sCount[u] < n.blkIndent) || n.sCount[u] - n.blkIndent >= 4 || (c = n.bMarks[u] + n.tShift[u], c >= n.eMarks[u]) || (C = n.src.charCodeAt(c++), C !== 124 && C !== 45 && C !== 58) || c >= n.eMarks[u] || (b = n.src.charCodeAt(c++), b !== 124 && b !== 45 && b !== 58 && !vn(b)) || C === 45 && vn(b))
    return false;
  for (; c < n.eMarks[u]; ) {
    if (s = n.src.charCodeAt(c), s !== 124 && s !== 45 && s !== 58 && !vn(s))
      return false;
    c++;
  }
  for (i = yn(n, r + 1), f = i.split("|"), m = [], a = 0; a < f.length; a++) {
    if (_ = f[a].trim(), !_) {
      if (a === 0 || a === f.length - 1)
        continue;
      return false;
    }
    if (!/^:?-+:?$/.test(_))
      return false;
    _.charCodeAt(_.length - 1) === 58 ? m.push(_.charCodeAt(0) === 58 ? "center" : "right") : _.charCodeAt(0) === 58 ? m.push("left") : m.push("");
  }
  if (i = yn(n, r).trim(), i.indexOf("|") === -1 || n.sCount[r] - n.blkIndent >= 4 || (f = ir(i), f.length && f[0] === "" && f.shift(), f.length && f[f.length - 1] === "" && f.pop(), h = f.length, h === 0 || h !== m.length))
    return false;
  if (e)
    return true;
  for (g = n.parentType, n.parentType = "table", y = n.md.block.ruler.getRules("blockquote"), p = n.push("table_open", "table", 1), p.map = v = [r, 0], p = n.push("thead_open", "thead", 1), p.map = [r, r + 1], p = n.push("tr_open", "tr", 1), p.map = [r, r + 1], a = 0; a < f.length; a++)
    p = n.push("th_open", "th", 1), m[a] && (p.attrs = [["style", "text-align:" + m[a]]]), p = n.push("inline", "", 0), p.content = f[a].trim(), p.children = [], p = n.push("th_close", "th", -1);
  for (p = n.push("tr_close", "tr", -1), p = n.push("thead_close", "thead", -1), u = r + 2; u < o && !(n.sCount[u] < n.blkIndent); u++) {
    for (x = false, a = 0, l = y.length; a < l; a++)
      if (y[a](n, u, o, true)) {
        x = true;
        break;
      }
    if (x || (i = yn(n, u).trim(), !i) || n.sCount[u] - n.blkIndent >= 4)
      break;
    for (f = ir(i), f.length && f[0] === "" && f.shift(), f.length && f[f.length - 1] === "" && f.pop(), u === r + 2 && (p = n.push("tbody_open", "tbody", 1), p.map = k = [r + 2, 0]), p = n.push("tr_open", "tr", 1), p.map = [u, u + 1], a = 0; a < h; a++)
      p = n.push("td_open", "td", 1), m[a] && (p.attrs = [["style", "text-align:" + m[a]]]), p = n.push("inline", "", 0), p.content = f[a] ? f[a].trim() : "", p.children = [], p = n.push("td_close", "td", -1);
    p = n.push("tr_close", "tr", -1);
  }
  return k && (p = n.push("tbody_close", "tbody", -1), k[1] = u), p = n.push("table_close", "table", -1), v[1] = u, n.parentType = g, n.line = u, true;
}, dM = function(n, r, o) {
  var e, s, i;
  if (n.sCount[r] - n.blkIndent < 4)
    return false;
  for (s = e = r + 1; e < o; ) {
    if (n.isEmpty(e)) {
      e++;
      continue;
    }
    if (n.sCount[e] - n.blkIndent >= 4) {
      e++, s = e;
      continue;
    }
    break;
  }
  return n.line = s, i = n.push("code_block", "code", 0), i.content = n.getLines(r, s, 4 + n.blkIndent, false) + `
`, i.map = [r, n.line], true;
}, gM = function(n, r, o, e) {
  var s, i, c, a, l, u, f, h = false, p = n.bMarks[r] + n.tShift[r], m = n.eMarks[r];
  if (n.sCount[r] - n.blkIndent >= 4 || p + 3 > m || (s = n.src.charCodeAt(p), s !== 126 && s !== 96) || (l = p, p = n.skipChars(p, s), i = p - l, i < 3) || (f = n.src.slice(l, p), c = n.src.slice(p, m), s === 96 && c.indexOf(String.fromCharCode(s)) >= 0))
    return false;
  if (e)
    return true;
  for (a = r; a++, !(a >= o || (p = l = n.bMarks[a] + n.tShift[a], m = n.eMarks[a], p < m && n.sCount[a] < n.blkIndent)); )
    if (n.src.charCodeAt(p) === s && !(n.sCount[a] - n.blkIndent >= 4) && (p = n.skipChars(p, s), !(p - l < i) && (p = n.skipSpaces(p), !(p < m)))) {
      h = true;
      break;
    }
  return i = n.sCount[r], n.line = a + (h ? 1 : 0), u = n.push("fence", "code", 0), u.info = c, u.content = n.getLines(r + 1, a, i, true), u.markup = f, u.map = [r, n.line], true;
}, ar = D.isSpace, mM = function(n, r, o, e) {
  var s, i, c, a, l, u, f, h, p, m, _, v, k, g, x, y, C, b, q, F, $ = n.lineMax, w = n.bMarks[r] + n.tShift[r], E = n.eMarks[r];
  if (n.sCount[r] - n.blkIndent >= 4 || n.src.charCodeAt(w++) !== 62)
    return false;
  if (e)
    return true;
  for (a = p = n.sCount[r] + 1, n.src.charCodeAt(w) === 32 ? (w++, a++, p++, s = false, y = true) : n.src.charCodeAt(w) === 9 ? (y = true, (n.bsCount[r] + p) % 4 === 3 ? (w++, a++, p++, s = false) : s = true) : y = false, m = [n.bMarks[r]], n.bMarks[r] = w; w < E && (i = n.src.charCodeAt(w), ar(i)); ) {
    i === 9 ? p += 4 - (p + n.bsCount[r] + (s ? 1 : 0)) % 4 : p++;
    w++;
  }
  for (_ = [n.bsCount[r]], n.bsCount[r] = n.sCount[r] + 1 + (y ? 1 : 0), u = w >= E, g = [n.sCount[r]], n.sCount[r] = p - a, x = [n.tShift[r]], n.tShift[r] = w - n.bMarks[r], b = n.md.block.ruler.getRules("blockquote"), k = n.parentType, n.parentType = "blockquote", h = r + 1; h < o && (F = n.sCount[h] < n.blkIndent, w = n.bMarks[h] + n.tShift[h], E = n.eMarks[h], !(w >= E)); h++) {
    if (n.src.charCodeAt(w++) === 62 && !F) {
      for (a = p = n.sCount[h] + 1, n.src.charCodeAt(w) === 32 ? (w++, a++, p++, s = false, y = true) : n.src.charCodeAt(w) === 9 ? (y = true, (n.bsCount[h] + p) % 4 === 3 ? (w++, a++, p++, s = false) : s = true) : y = false, m.push(n.bMarks[h]), n.bMarks[h] = w; w < E && (i = n.src.charCodeAt(w), ar(i)); ) {
        i === 9 ? p += 4 - (p + n.bsCount[h] + (s ? 1 : 0)) % 4 : p++;
        w++;
      }
      u = w >= E, _.push(n.bsCount[h]), n.bsCount[h] = n.sCount[h] + 1 + (y ? 1 : 0), g.push(n.sCount[h]), n.sCount[h] = p - a, x.push(n.tShift[h]), n.tShift[h] = w - n.bMarks[h];
      continue;
    }
    if (u)
      break;
    for (C = false, c = 0, l = b.length; c < l; c++)
      if (b[c](n, h, o, true)) {
        C = true;
        break;
      }
    if (C) {
      n.lineMax = h, n.blkIndent !== 0 && (m.push(n.bMarks[h]), _.push(n.bsCount[h]), x.push(n.tShift[h]), g.push(n.sCount[h]), n.sCount[h] -= n.blkIndent);
      break;
    }
    m.push(n.bMarks[h]), _.push(n.bsCount[h]), x.push(n.tShift[h]), g.push(n.sCount[h]), n.sCount[h] = -1;
  }
  for (v = n.blkIndent, n.blkIndent = 0, q = n.push("blockquote_open", "blockquote", 1), q.markup = ">", q.map = f = [r, 0], n.md.block.tokenize(n, r, h), q = n.push("blockquote_close", "blockquote", -1), q.markup = ">", n.lineMax = $, n.parentType = k, f[1] = n.line, c = 0; c < x.length; c++)
    n.bMarks[c + r] = m[c], n.tShift[c + r] = x[c], n.sCount[c + r] = g[c], n.bsCount[c + r] = _[c];
  return n.blkIndent = v, true;
}, bM = D.isSpace, _M = function(n, r, o, e) {
  var s, i, c, a, l = n.bMarks[r] + n.tShift[r], u = n.eMarks[r];
  if (n.sCount[r] - n.blkIndent >= 4 || (s = n.src.charCodeAt(l++), s !== 42 && s !== 45 && s !== 95))
    return false;
  for (i = 1; l < u; ) {
    if (c = n.src.charCodeAt(l++), c !== s && !bM(c))
      return false;
    c === s && i++;
  }
  return i < 3 ? false : (e || (n.line = r + 1, a = n.push("hr", "hr", 0), a.map = [r, n.line], a.markup = Array(i + 1).join(String.fromCharCode(s))), true);
}, Rr = D.isSpace;
function lr(t, n) {
  var r, o, e, s;
  return o = t.bMarks[n] + t.tShift[n], e = t.eMarks[n], r = t.src.charCodeAt(o++), r !== 42 && r !== 45 && r !== 43 || o < e && (s = t.src.charCodeAt(o), !Rr(s)) ? -1 : o;
}
function ur(t, n) {
  var r, o = t.bMarks[n] + t.tShift[n], e = o, s = t.eMarks[n];
  if (e + 1 >= s || (r = t.src.charCodeAt(e++), r < 48 || r > 57))
    return -1;
  for (; ; ) {
    if (e >= s)
      return -1;
    if (r = t.src.charCodeAt(e++), r >= 48 && r <= 57) {
      if (e - o >= 10)
        return -1;
      continue;
    }
    if (r === 41 || r === 46)
      break;
    return -1;
  }
  return e < s && (r = t.src.charCodeAt(e), !Rr(r)) ? -1 : e;
}
function kM(t, n) {
  var r, o, e = t.level + 2;
  for (r = n + 2, o = t.tokens.length - 2; r < o; r++)
    t.tokens[r].level === e && t.tokens[r].type === "paragraph_open" && (t.tokens[r + 2].hidden = true, t.tokens[r].hidden = true, r += 2);
}
var xM = function(n, r, o, e) {
  var s, i, c, a, l, u, f, h, p, m, _, v, k, g, x, y, C, b, q, F, $, w, E, Y, G, d, S, A, M = false, Vn = true;
  if (n.sCount[r] - n.blkIndent >= 4 || n.listIndent >= 0 && n.sCount[r] - n.listIndent >= 4 && n.sCount[r] < n.blkIndent)
    return false;
  if (e && n.parentType === "paragraph" && n.sCount[r] >= n.blkIndent && (M = true), (E = ur(n, r)) >= 0) {
    if (f = true, G = n.bMarks[r] + n.tShift[r], k = Number(n.src.slice(G, E - 1)), M && k !== 1)
      return false;
  } else if ((E = lr(n, r)) >= 0)
    f = false;
  else
    return false;
  if (M && n.skipSpaces(E) >= n.eMarks[r])
    return false;
  if (v = n.src.charCodeAt(E - 1), e)
    return true;
  for (_ = n.tokens.length, f ? (A = n.push("ordered_list_open", "ol", 1), k !== 1 && (A.attrs = [["start", k]])) : A = n.push("bullet_list_open", "ul", 1), A.map = m = [r, 0], A.markup = String.fromCharCode(v), x = r, Y = false, S = n.md.block.ruler.getRules("list"), b = n.parentType, n.parentType = "list"; x < o; ) {
    for (w = E, g = n.eMarks[x], u = y = n.sCount[x] + E - (n.bMarks[r] + n.tShift[r]); w < g; ) {
      if (s = n.src.charCodeAt(w), s === 9)
        y += 4 - (y + n.bsCount[x]) % 4;
      else if (s === 32)
        y++;
      else
        break;
      w++;
    }
    if (i = w, i >= g ? l = 1 : l = y - u, l > 4 && (l = 1), a = u + l, A = n.push("list_item_open", "li", 1), A.markup = String.fromCharCode(v), A.map = h = [r, 0], f && (A.info = n.src.slice(G, E - 1)), $ = n.tight, F = n.tShift[r], q = n.sCount[r], C = n.listIndent, n.listIndent = n.blkIndent, n.blkIndent = a, n.tight = true, n.tShift[r] = i - n.bMarks[r], n.sCount[r] = y, i >= g && n.isEmpty(r + 1) ? n.line = Math.min(n.line + 2, o) : n.md.block.tokenize(n, r, o, true), (!n.tight || Y) && (Vn = false), Y = n.line - r > 1 && n.isEmpty(n.line - 1), n.blkIndent = n.listIndent, n.listIndent = C, n.tShift[r] = F, n.sCount[r] = q, n.tight = $, A = n.push("list_item_close", "li", -1), A.markup = String.fromCharCode(v), x = r = n.line, h[1] = x, i = n.bMarks[r], x >= o || n.sCount[x] < n.blkIndent || n.sCount[r] - n.blkIndent >= 4)
      break;
    for (d = false, c = 0, p = S.length; c < p; c++)
      if (S[c](n, x, o, true)) {
        d = true;
        break;
      }
    if (d)
      break;
    if (f) {
      if (E = ur(n, x), E < 0)
        break;
      G = n.bMarks[x] + n.tShift[x];
    } else if (E = lr(n, x), E < 0)
      break;
    if (v !== n.src.charCodeAt(E - 1))
      break;
  }
  return f ? A = n.push("ordered_list_close", "ol", -1) : A = n.push("bullet_list_close", "ul", -1), A.markup = String.fromCharCode(v), m[1] = x, n.line = x, n.parentType = b, Vn && kM(n, _), true;
}, vM = D.normalizeReference, tn = D.isSpace, yM = function(n, r, o, e) {
  var s, i, c, a, l, u, f, h, p, m, _, v, k, g, x, y, C = 0, b = n.bMarks[r] + n.tShift[r], q = n.eMarks[r], F = r + 1;
  if (n.sCount[r] - n.blkIndent >= 4 || n.src.charCodeAt(b) !== 91)
    return false;
  for (; ++b < q; )
    if (n.src.charCodeAt(b) === 93 && n.src.charCodeAt(b - 1) !== 92) {
      if (b + 1 === q || n.src.charCodeAt(b + 1) !== 58)
        return false;
      break;
    }
  for (a = n.lineMax, x = n.md.block.ruler.getRules("reference"), m = n.parentType, n.parentType = "reference"; F < a && !n.isEmpty(F); F++)
    if (!(n.sCount[F] - n.blkIndent > 3) && !(n.sCount[F] < 0)) {
      for (g = false, u = 0, f = x.length; u < f; u++)
        if (x[u](n, F, a, true)) {
          g = true;
          break;
        }
      if (g)
        break;
    }
  for (k = n.getLines(r, F, n.blkIndent, false).trim(), q = k.length, b = 1; b < q; b++) {
    if (s = k.charCodeAt(b), s === 91)
      return false;
    if (s === 93) {
      p = b;
      break;
    } else
      s === 10 ? C++ : s === 92 && (b++, b < q && k.charCodeAt(b) === 10 && C++);
  }
  if (p < 0 || k.charCodeAt(p + 1) !== 58)
    return false;
  for (b = p + 2; b < q; b++)
    if (s = k.charCodeAt(b), s === 10)
      C++;
    else if (!tn(s))
      break;
  if (_ = n.md.helpers.parseLinkDestination(k, b, q), !_.ok || (l = n.md.normalizeLink(_.str), !n.md.validateLink(l)))
    return false;
  for (b = _.pos, C += _.lines, i = b, c = C, v = b; b < q; b++)
    if (s = k.charCodeAt(b), s === 10)
      C++;
    else if (!tn(s))
      break;
  for (_ = n.md.helpers.parseLinkTitle(k, b, q), b < q && v !== b && _.ok ? (y = _.str, b = _.pos, C += _.lines) : (y = "", b = i, C = c); b < q && (s = k.charCodeAt(b), !!tn(s)); )
    b++;
  if (b < q && k.charCodeAt(b) !== 10 && y)
    for (y = "", b = i, C = c; b < q && (s = k.charCodeAt(b), !!tn(s)); )
      b++;
  return b < q && k.charCodeAt(b) !== 10 || (h = vM(k.slice(1, p)), !h) ? false : (e || (typeof n.env.references > "u" && (n.env.references = {}), typeof n.env.references[h] > "u" && (n.env.references[h] = { title: y, href: l }), n.parentType = m, n.line = r + C + 1), true);
}, CM = [
  "address",
  "article",
  "aside",
  "base",
  "basefont",
  "blockquote",
  "body",
  "caption",
  "center",
  "col",
  "colgroup",
  "dd",
  "details",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "frame",
  "frameset",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hr",
  "html",
  "iframe",
  "legend",
  "li",
  "link",
  "main",
  "menu",
  "menuitem",
  "nav",
  "noframes",
  "ol",
  "optgroup",
  "option",
  "p",
  "param",
  "section",
  "source",
  "summary",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "title",
  "tr",
  "track",
  "ul"
], un = {}, wM = "[a-zA-Z_:][a-zA-Z0-9:._-]*", AM = "[^\"'=<>`\\x00-\\x20]+", DM = "'[^']*'", qM = '"[^"]*"', EM = "(?:" + AM + "|" + DM + "|" + qM + ")", SM = "(?:\\s+" + wM + "(?:\\s*=\\s*" + EM + ")?)", Lr = "<[A-Za-z][A-Za-z0-9\\-]*" + SM + "*\\s*\\/?>", zr = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>", FM = "<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->", TM = "<[?][\\s\\S]*?[?]>", RM = "<![A-Z]+\\s+[^>]*>", LM = "<!\\[CDATA\\[[\\s\\S]*?\\]\\]>", zM = new RegExp("^(?:" + Lr + "|" + zr + "|" + FM + "|" + TM + "|" + RM + "|" + LM + ")"), IM = new RegExp("^(?:" + Lr + "|" + zr + ")");
un.HTML_TAG_RE = zM;
un.HTML_OPEN_CLOSE_TAG_RE = IM;
var BM = CM, NM = un.HTML_OPEN_CLOSE_TAG_RE, j = [
  [/^<(script|pre|style|textarea)(?=(\s|>|$))/i, /<\/(script|pre|style|textarea)>/i, true],
  [/^<!--/, /-->/, true],
  [/^<\?/, /\?>/, true],
  [/^<![A-Z]/, />/, true],
  [/^<!\[CDATA\[/, /\]\]>/, true],
  [new RegExp("^</?(" + BM.join("|") + ")(?=(\\s|/?>|$))", "i"), /^$/, true],
  [new RegExp(NM.source + "\\s*$"), /^$/, false]
], MM = function(n, r, o, e) {
  var s, i, c, a, l = n.bMarks[r] + n.tShift[r], u = n.eMarks[r];
  if (n.sCount[r] - n.blkIndent >= 4 || !n.md.options.html || n.src.charCodeAt(l) !== 60)
    return false;
  for (a = n.src.slice(l, u), s = 0; s < j.length && !j[s][0].test(a); s++)
    ;
  if (s === j.length)
    return false;
  if (e)
    return j[s][2];
  if (i = r + 1, !j[s][1].test(a)) {
    for (; i < o && !(n.sCount[i] < n.blkIndent); i++)
      if (l = n.bMarks[i] + n.tShift[i], u = n.eMarks[i], a = n.src.slice(l, u), j[s][1].test(a)) {
        a.length !== 0 && i++;
        break;
      }
  }
  return n.line = i, c = n.push("html_block", "", 0), c.map = [r, i], c.content = n.getLines(r, i, n.blkIndent, true), true;
}, pr = D.isSpace, PM = function(n, r, o, e) {
  var s, i, c, a, l = n.bMarks[r] + n.tShift[r], u = n.eMarks[r];
  if (n.sCount[r] - n.blkIndent >= 4 || (s = n.src.charCodeAt(l), s !== 35 || l >= u))
    return false;
  for (i = 1, s = n.src.charCodeAt(++l); s === 35 && l < u && i <= 6; )
    i++, s = n.src.charCodeAt(++l);
  return i > 6 || l < u && !pr(s) ? false : (e || (u = n.skipSpacesBack(u, l), c = n.skipCharsBack(u, 35, l), c > l && pr(n.src.charCodeAt(c - 1)) && (u = c), n.line = r + 1, a = n.push("heading_open", "h" + String(i), 1), a.markup = "########".slice(0, i), a.map = [r, n.line], a = n.push("inline", "", 0), a.content = n.src.slice(l, u).trim(), a.map = [r, n.line], a.children = [], a = n.push("heading_close", "h" + String(i), -1), a.markup = "########".slice(0, i)), true);
}, OM = function(n, r, o) {
  var e, s, i, c, a, l, u, f, h, p = r + 1, m, _ = n.md.block.ruler.getRules("paragraph");
  if (n.sCount[r] - n.blkIndent >= 4)
    return false;
  for (m = n.parentType, n.parentType = "paragraph"; p < o && !n.isEmpty(p); p++)
    if (!(n.sCount[p] - n.blkIndent > 3)) {
      if (n.sCount[p] >= n.blkIndent && (l = n.bMarks[p] + n.tShift[p], u = n.eMarks[p], l < u && (h = n.src.charCodeAt(l), (h === 45 || h === 61) && (l = n.skipChars(l, h), l = n.skipSpaces(l), l >= u)))) {
        f = h === 61 ? 1 : 2;
        break;
      }
      if (!(n.sCount[p] < 0)) {
        for (s = false, i = 0, c = _.length; i < c; i++)
          if (_[i](n, p, o, true)) {
            s = true;
            break;
          }
        if (s)
          break;
      }
    }
  return f ? (e = n.getLines(r, p, n.blkIndent, false).trim(), n.line = p + 1, a = n.push("heading_open", "h" + String(f), 1), a.markup = String.fromCharCode(h), a.map = [r, n.line], a = n.push("inline", "", 0), a.content = e, a.map = [r, n.line - 1], a.children = [], a = n.push("heading_close", "h" + String(f), -1), a.markup = String.fromCharCode(h), n.parentType = m, true) : false;
}, UM = function(n, r) {
  var o, e, s, i, c, a, l = r + 1, u = n.md.block.ruler.getRules("paragraph"), f = n.lineMax;
  for (a = n.parentType, n.parentType = "paragraph"; l < f && !n.isEmpty(l); l++)
    if (!(n.sCount[l] - n.blkIndent > 3) && !(n.sCount[l] < 0)) {
      for (e = false, s = 0, i = u.length; s < i; s++)
        if (u[s](n, l, f, true)) {
          e = true;
          break;
        }
      if (e)
        break;
    }
  return o = n.getLines(r, l, n.blkIndent, false).trim(), n.line = l, c = n.push("paragraph_open", "p", 1), c.map = [r, n.line], c = n.push("inline", "", 0), c.content = o, c.map = [r, n.line], c.children = [], c = n.push("paragraph_close", "p", -1), n.parentType = a, true;
}, Ir = zn, pn = D.isSpace;
function N(t, n, r, o) {
  var e, s, i, c, a, l, u, f;
  for (this.src = t, this.md = n, this.env = r, this.tokens = o, this.bMarks = [], this.eMarks = [], this.tShift = [], this.sCount = [], this.bsCount = [], this.blkIndent = 0, this.line = 0, this.lineMax = 0, this.tight = false, this.ddIndent = -1, this.listIndent = -1, this.parentType = "root", this.level = 0, this.result = "", s = this.src, f = false, i = c = l = u = 0, a = s.length; c < a; c++) {
    if (e = s.charCodeAt(c), !f)
      if (pn(e)) {
        l++, e === 9 ? u += 4 - u % 4 : u++;
        continue;
      } else
        f = true;
    (e === 10 || c === a - 1) && (e !== 10 && c++, this.bMarks.push(i), this.eMarks.push(c), this.tShift.push(l), this.sCount.push(u), this.bsCount.push(0), f = false, l = 0, u = 0, i = c + 1);
  }
  this.bMarks.push(s.length), this.eMarks.push(s.length), this.tShift.push(0), this.sCount.push(0), this.bsCount.push(0), this.lineMax = this.bMarks.length - 1;
}
N.prototype.push = function(t, n, r) {
  var o = new Ir(t, n, r);
  return o.block = true, r < 0 && this.level--, o.level = this.level, r > 0 && this.level++, this.tokens.push(o), o;
};
N.prototype.isEmpty = function(n) {
  return this.bMarks[n] + this.tShift[n] >= this.eMarks[n];
};
N.prototype.skipEmptyLines = function(n) {
  for (var r = this.lineMax; n < r && !(this.bMarks[n] + this.tShift[n] < this.eMarks[n]); n++)
    ;
  return n;
};
N.prototype.skipSpaces = function(n) {
  for (var r, o = this.src.length; n < o && (r = this.src.charCodeAt(n), !!pn(r)); n++)
    ;
  return n;
};
N.prototype.skipSpacesBack = function(n, r) {
  if (n <= r)
    return n;
  for (; n > r; )
    if (!pn(this.src.charCodeAt(--n)))
      return n + 1;
  return n;
};
N.prototype.skipChars = function(n, r) {
  for (var o = this.src.length; n < o && this.src.charCodeAt(n) === r; n++)
    ;
  return n;
};
N.prototype.skipCharsBack = function(n, r, o) {
  if (n <= o)
    return n;
  for (; n > o; )
    if (r !== this.src.charCodeAt(--n))
      return n + 1;
  return n;
};
N.prototype.getLines = function(n, r, o, e) {
  var s, i, c, a, l, u, f, h = n;
  if (n >= r)
    return "";
  for (u = new Array(r - n), s = 0; h < r; h++, s++) {
    for (i = 0, f = a = this.bMarks[h], h + 1 < r || e ? l = this.eMarks[h] + 1 : l = this.eMarks[h]; a < l && i < o; ) {
      if (c = this.src.charCodeAt(a), pn(c))
        c === 9 ? i += 4 - (i + this.bsCount[h]) % 4 : i++;
      else if (a - f < this.tShift[h])
        i++;
      else
        break;
      a++;
    }
    i > o ? u[s] = new Array(i - o + 1).join(" ") + this.src.slice(a, l) : u[s] = this.src.slice(a, l);
  }
  return u.join("");
};
N.prototype.Token = Ir;
var VM = N, $M = Ln, on = [
  // First 2 params - rule name & source. Secondary array - list of rules,
  // which can be terminated by this one.
  ["table", hM, ["paragraph", "reference"]],
  ["code", dM],
  ["fence", gM, ["paragraph", "reference", "blockquote", "list"]],
  ["blockquote", mM, ["paragraph", "reference", "blockquote", "list"]],
  ["hr", _M, ["paragraph", "reference", "blockquote", "list"]],
  ["list", xM, ["paragraph", "reference", "blockquote"]],
  ["reference", yM],
  ["html_block", MM, ["paragraph", "reference", "blockquote"]],
  ["heading", PM, ["paragraph", "reference", "blockquote"]],
  ["lheading", OM],
  ["paragraph", UM]
];
function fn() {
  this.ruler = new $M();
  for (var t = 0; t < on.length; t++)
    this.ruler.push(on[t][0], on[t][1], { alt: (on[t][2] || []).slice() });
}
fn.prototype.tokenize = function(t, n, r) {
  for (var o, e, s = this.ruler.getRules(""), i = s.length, c = n, a = false, l = t.md.options.maxNesting; c < r && (t.line = c = t.skipEmptyLines(c), !(c >= r || t.sCount[c] < t.blkIndent)); ) {
    if (t.level >= l) {
      t.line = r;
      break;
    }
    for (e = 0; e < i && (o = s[e](t, c, r, false), !o); e++)
      ;
    t.tight = !a, t.isEmpty(t.line - 1) && (a = true), c = t.line, c < r && t.isEmpty(c) && (a = true, c++, t.line = c);
  }
};
fn.prototype.parse = function(t, n, r, o) {
  var e;
  t && (e = new this.State(t, n, r, o), this.tokenize(e, e.line, e.lineMax));
};
fn.prototype.State = VM;
var GM = fn;
function jM(t) {
  switch (t) {
    case 10:
    case 33:
    case 35:
    case 36:
    case 37:
    case 38:
    case 42:
    case 43:
    case 45:
    case 58:
    case 60:
    case 61:
    case 62:
    case 64:
    case 91:
    case 92:
    case 93:
    case 94:
    case 95:
    case 96:
    case 123:
    case 125:
    case 126:
      return true;
    default:
      return false;
  }
}
var HM = function(n, r) {
  for (var o = n.pos; o < n.posMax && !jM(n.src.charCodeAt(o)); )
    o++;
  return o === n.pos ? false : (r || (n.pending += n.src.slice(n.pos, o)), n.pos = o, true);
}, ZM = /(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i, JM = function(n, r) {
  var o, e, s, i, c, a, l, u;
  return !n.md.options.linkify || n.linkLevel > 0 || (o = n.pos, e = n.posMax, o + 3 > e) || n.src.charCodeAt(o) !== 58 || n.src.charCodeAt(o + 1) !== 47 || n.src.charCodeAt(o + 2) !== 47 || (s = n.pending.match(ZM), !s) || (i = s[1], c = n.md.linkify.matchAtStart(n.src.slice(o - i.length)), !c) || (a = c.url, a = a.replace(/\*+$/, ""), l = n.md.normalizeLink(a), !n.md.validateLink(l)) ? false : (r || (n.pending = n.pending.slice(0, -i.length), u = n.push("link_open", "a", 1), u.attrs = [["href", l]], u.markup = "linkify", u.info = "auto", u = n.push("text", "", 0), u.content = n.md.normalizeLinkText(a), u = n.push("link_close", "a", -1), u.markup = "linkify", u.info = "auto"), n.pos += a.length - i.length, true);
}, WM = D.isSpace, YM = function(n, r) {
  var o, e, s, i = n.pos;
  if (n.src.charCodeAt(i) !== 10)
    return false;
  if (o = n.pending.length - 1, e = n.posMax, !r)
    if (o >= 0 && n.pending.charCodeAt(o) === 32)
      if (o >= 1 && n.pending.charCodeAt(o - 1) === 32) {
        for (s = o - 1; s >= 1 && n.pending.charCodeAt(s - 1) === 32; )
          s--;
        n.pending = n.pending.slice(0, s), n.push("hardbreak", "br", 0);
      } else
        n.pending = n.pending.slice(0, -1), n.push("softbreak", "br", 0);
    else
      n.push("softbreak", "br", 0);
  for (i++; i < e && WM(n.src.charCodeAt(i)); )
    i++;
  return n.pos = i, true;
}, QM = D.isSpace, Bn = [];
for (var fr = 0; fr < 256; fr++)
  Bn.push(0);
"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(t) {
  Bn[t.charCodeAt(0)] = 1;
});
var KM = function(n, r) {
  var o, e, s, i, c, a = n.pos, l = n.posMax;
  if (n.src.charCodeAt(a) !== 92 || (a++, a >= l))
    return false;
  if (o = n.src.charCodeAt(a), o === 10) {
    for (r || n.push("hardbreak", "br", 0), a++; a < l && (o = n.src.charCodeAt(a), !!QM(o)); )
      a++;
    return n.pos = a, true;
  }
  return i = n.src[a], o >= 55296 && o <= 56319 && a + 1 < l && (e = n.src.charCodeAt(a + 1), e >= 56320 && e <= 57343 && (i += n.src[a + 1], a++)), s = "\\" + i, r || (c = n.push("text_special", "", 0), o < 256 && Bn[o] !== 0 ? c.content = i : c.content = s, c.markup = s, c.info = "escape"), n.pos = a + 1, true;
}, XM = function(n, r) {
  var o, e, s, i, c, a, l, u, f = n.pos, h = n.src.charCodeAt(f);
  if (h !== 96)
    return false;
  for (o = f, f++, e = n.posMax; f < e && n.src.charCodeAt(f) === 96; )
    f++;
  if (s = n.src.slice(o, f), l = s.length, n.backticksScanned && (n.backticks[l] || 0) <= o)
    return r || (n.pending += s), n.pos += l, true;
  for (c = a = f; (c = n.src.indexOf("`", a)) !== -1; ) {
    for (a = c + 1; a < e && n.src.charCodeAt(a) === 96; )
      a++;
    if (u = a - c, u === l)
      return r || (i = n.push("code_inline", "code", 0), i.markup = s, i.content = n.src.slice(f, c).replace(/\n/g, " ").replace(/^ (.+) $/, "$1")), n.pos = a, true;
    n.backticks[u] = c;
  }
  return n.backticksScanned = true, r || (n.pending += s), n.pos += l, true;
}, hn = {};
hn.tokenize = function(n, r) {
  var o, e, s, i, c, a = n.pos, l = n.src.charCodeAt(a);
  if (r || l !== 126 || (e = n.scanDelims(n.pos, true), i = e.length, c = String.fromCharCode(l), i < 2))
    return false;
  for (i % 2 && (s = n.push("text", "", 0), s.content = c, i--), o = 0; o < i; o += 2)
    s = n.push("text", "", 0), s.content = c + c, n.delimiters.push({
      marker: l,
      length: 0,
      // disable "rule of 3" length checks meant for emphasis
      token: n.tokens.length - 1,
      end: -1,
      open: e.can_open,
      close: e.can_close
    });
  return n.pos += e.length, true;
};
function hr(t, n) {
  var r, o, e, s, i, c = [], a = n.length;
  for (r = 0; r < a; r++)
    e = n[r], e.marker === 126 && e.end !== -1 && (s = n[e.end], i = t.tokens[e.token], i.type = "s_open", i.tag = "s", i.nesting = 1, i.markup = "~~", i.content = "", i = t.tokens[s.token], i.type = "s_close", i.tag = "s", i.nesting = -1, i.markup = "~~", i.content = "", t.tokens[s.token - 1].type === "text" && t.tokens[s.token - 1].content === "~" && c.push(s.token - 1));
  for (; c.length; ) {
    for (r = c.pop(), o = r + 1; o < t.tokens.length && t.tokens[o].type === "s_close"; )
      o++;
    o--, r !== o && (i = t.tokens[o], t.tokens[o] = t.tokens[r], t.tokens[r] = i);
  }
}
hn.postProcess = function(n) {
  var r, o = n.tokens_meta, e = n.tokens_meta.length;
  for (hr(n, n.delimiters), r = 0; r < e; r++)
    o[r] && o[r].delimiters && hr(n, o[r].delimiters);
};
var dn = {};
dn.tokenize = function(n, r) {
  var o, e, s, i = n.pos, c = n.src.charCodeAt(i);
  if (r || c !== 95 && c !== 42)
    return false;
  for (e = n.scanDelims(n.pos, c === 42), o = 0; o < e.length; o++)
    s = n.push("text", "", 0), s.content = String.fromCharCode(c), n.delimiters.push({
      // Char code of the starting marker (number).
      //
      marker: c,
      // Total length of these series of delimiters.
      //
      length: e.length,
      // A position of the token this delimiter corresponds to.
      //
      token: n.tokens.length - 1,
      // If this delimiter is matched as a valid opener, `end` will be
      // equal to its position, otherwise it's `-1`.
      //
      end: -1,
      // Boolean flags that determine if this delimiter could open or close
      // an emphasis.
      //
      open: e.can_open,
      close: e.can_close
    });
  return n.pos += e.length, true;
};
function dr(t, n) {
  var r, o, e, s, i, c, a = n.length;
  for (r = a - 1; r >= 0; r--)
    o = n[r], !(o.marker !== 95 && o.marker !== 42) && o.end !== -1 && (e = n[o.end], c = r > 0 && n[r - 1].end === o.end + 1 && // check that first two markers match and adjacent
    n[r - 1].marker === o.marker && n[r - 1].token === o.token - 1 && // check that last two markers are adjacent (we can safely assume they match)
    n[o.end + 1].token === e.token + 1, i = String.fromCharCode(o.marker), s = t.tokens[o.token], s.type = c ? "strong_open" : "em_open", s.tag = c ? "strong" : "em", s.nesting = 1, s.markup = c ? i + i : i, s.content = "", s = t.tokens[e.token], s.type = c ? "strong_close" : "em_close", s.tag = c ? "strong" : "em", s.nesting = -1, s.markup = c ? i + i : i, s.content = "", c && (t.tokens[n[r - 1].token].content = "", t.tokens[n[o.end + 1].token].content = "", r--));
}
dn.postProcess = function(n) {
  var r, o = n.tokens_meta, e = n.tokens_meta.length;
  for (dr(n, n.delimiters), r = 0; r < e; r++)
    o[r] && o[r].delimiters && dr(n, o[r].delimiters);
};
var nP = D.normalizeReference, Cn = D.isSpace, rP = function(n, r) {
  var o, e, s, i, c, a, l, u, f, h = "", p = "", m = n.pos, _ = n.posMax, v = n.pos, k = true;
  if (n.src.charCodeAt(n.pos) !== 91 || (c = n.pos + 1, i = n.md.helpers.parseLinkLabel(n, n.pos, true), i < 0))
    return false;
  if (a = i + 1, a < _ && n.src.charCodeAt(a) === 40) {
    for (k = false, a++; a < _ && (e = n.src.charCodeAt(a), !(!Cn(e) && e !== 10)); a++)
      ;
    if (a >= _)
      return false;
    if (v = a, l = n.md.helpers.parseLinkDestination(n.src, a, n.posMax), l.ok) {
      for (h = n.md.normalizeLink(l.str), n.md.validateLink(h) ? a = l.pos : h = "", v = a; a < _ && (e = n.src.charCodeAt(a), !(!Cn(e) && e !== 10)); a++)
        ;
      if (l = n.md.helpers.parseLinkTitle(n.src, a, n.posMax), a < _ && v !== a && l.ok)
        for (p = l.str, a = l.pos; a < _ && (e = n.src.charCodeAt(a), !(!Cn(e) && e !== 10)); a++)
          ;
    }
    (a >= _ || n.src.charCodeAt(a) !== 41) && (k = true), a++;
  }
  if (k) {
    if (typeof n.env.references > "u")
      return false;
    if (a < _ && n.src.charCodeAt(a) === 91 ? (v = a + 1, a = n.md.helpers.parseLinkLabel(n, a), a >= 0 ? s = n.src.slice(v, a++) : a = i + 1) : a = i + 1, s || (s = n.src.slice(c, i)), u = n.env.references[nP(s)], !u)
      return n.pos = m, false;
    h = u.href, p = u.title;
  }
  return r || (n.pos = c, n.posMax = i, f = n.push("link_open", "a", 1), f.attrs = o = [["href", h]], p && o.push(["title", p]), n.linkLevel++, n.md.inline.tokenize(n), n.linkLevel--, f = n.push("link_close", "a", -1)), n.pos = a, n.posMax = _, true;
}, tP = D.normalizeReference, wn = D.isSpace, oP = function(n, r) {
  var o, e, s, i, c, a, l, u, f, h, p, m, _, v = "", k = n.pos, g = n.posMax;
  if (n.src.charCodeAt(n.pos) !== 33 || n.src.charCodeAt(n.pos + 1) !== 91 || (a = n.pos + 2, c = n.md.helpers.parseLinkLabel(n, n.pos + 1, false), c < 0))
    return false;
  if (l = c + 1, l < g && n.src.charCodeAt(l) === 40) {
    for (l++; l < g && (e = n.src.charCodeAt(l), !(!wn(e) && e !== 10)); l++)
      ;
    if (l >= g)
      return false;
    for (_ = l, f = n.md.helpers.parseLinkDestination(n.src, l, n.posMax), f.ok && (v = n.md.normalizeLink(f.str), n.md.validateLink(v) ? l = f.pos : v = ""), _ = l; l < g && (e = n.src.charCodeAt(l), !(!wn(e) && e !== 10)); l++)
      ;
    if (f = n.md.helpers.parseLinkTitle(n.src, l, n.posMax), l < g && _ !== l && f.ok)
      for (h = f.str, l = f.pos; l < g && (e = n.src.charCodeAt(l), !(!wn(e) && e !== 10)); l++)
        ;
    else
      h = "";
    if (l >= g || n.src.charCodeAt(l) !== 41)
      return n.pos = k, false;
    l++;
  } else {
    if (typeof n.env.references > "u")
      return false;
    if (l < g && n.src.charCodeAt(l) === 91 ? (_ = l + 1, l = n.md.helpers.parseLinkLabel(n, l), l >= 0 ? i = n.src.slice(_, l++) : l = c + 1) : l = c + 1, i || (i = n.src.slice(a, c)), u = n.env.references[tP(i)], !u)
      return n.pos = k, false;
    v = u.href, h = u.title;
  }
  return r || (s = n.src.slice(a, c), n.md.inline.parse(
    s,
    n.md,
    n.env,
    m = []
  ), p = n.push("image", "img", 0), p.attrs = o = [["src", v], ["alt", ""]], p.children = m, p.content = s, h && o.push(["title", h])), n.pos = l, n.posMax = g, true;
}, eP = /^([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/, sP = /^([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)$/, cP = function(n, r) {
  var o, e, s, i, c, a, l = n.pos;
  if (n.src.charCodeAt(l) !== 60)
    return false;
  for (c = n.pos, a = n.posMax; ; ) {
    if (++l >= a || (i = n.src.charCodeAt(l), i === 60))
      return false;
    if (i === 62)
      break;
  }
  return o = n.src.slice(c + 1, l), sP.test(o) ? (e = n.md.normalizeLink(o), n.md.validateLink(e) ? (r || (s = n.push("link_open", "a", 1), s.attrs = [["href", e]], s.markup = "autolink", s.info = "auto", s = n.push("text", "", 0), s.content = n.md.normalizeLinkText(o), s = n.push("link_close", "a", -1), s.markup = "autolink", s.info = "auto"), n.pos += o.length + 2, true) : false) : eP.test(o) ? (e = n.md.normalizeLink("mailto:" + o), n.md.validateLink(e) ? (r || (s = n.push("link_open", "a", 1), s.attrs = [["href", e]], s.markup = "autolink", s.info = "auto", s = n.push("text", "", 0), s.content = n.md.normalizeLinkText(o), s = n.push("link_close", "a", -1), s.markup = "autolink", s.info = "auto"), n.pos += o.length + 2, true) : false) : false;
}, iP = un.HTML_TAG_RE;
function aP(t) {
  return /^<a[>\s]/i.test(t);
}
function lP(t) {
  return /^<\/a\s*>/i.test(t);
}
function uP(t) {
  var n = t | 32;
  return n >= 97 && n <= 122;
}
var pP = function(n, r) {
  var o, e, s, i, c = n.pos;
  return !n.md.options.html || (s = n.posMax, n.src.charCodeAt(c) !== 60 || c + 2 >= s) || (o = n.src.charCodeAt(c + 1), o !== 33 && o !== 63 && o !== 47 && !uP(o)) || (e = n.src.slice(c).match(iP), !e) ? false : (r || (i = n.push("html_inline", "", 0), i.content = n.src.slice(c, c + e[0].length), aP(i.content) && n.linkLevel++, lP(i.content) && n.linkLevel--), n.pos += e[0].length, true);
}, gr = Dr, fP = D.has, hP = D.isValidEntityCode, mr = D.fromCodePoint, dP = /^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i, gP = /^&([a-z][a-z0-9]{1,31});/i, mP = function(n, r) {
  var o, e, s, i, c = n.pos, a = n.posMax;
  if (n.src.charCodeAt(c) !== 38 || c + 1 >= a)
    return false;
  if (o = n.src.charCodeAt(c + 1), o === 35) {
    if (s = n.src.slice(c).match(dP), s)
      return r || (e = s[1][0].toLowerCase() === "x" ? parseInt(s[1].slice(1), 16) : parseInt(s[1], 10), i = n.push("text_special", "", 0), i.content = hP(e) ? mr(e) : mr(65533), i.markup = s[0], i.info = "entity"), n.pos += s[0].length, true;
  } else if (s = n.src.slice(c).match(gP), s && fP(gr, s[1]))
    return r || (i = n.push("text_special", "", 0), i.content = gr[s[1]], i.markup = s[0], i.info = "entity"), n.pos += s[0].length, true;
  return false;
};
function br(t, n) {
  var r, o, e, s, i, c, a, l, u = {}, f = n.length;
  if (f) {
    var h = 0, p = -2, m = [];
    for (r = 0; r < f; r++)
      if (e = n[r], m.push(0), (n[h].marker !== e.marker || p !== e.token - 1) && (h = r), p = e.token, e.length = e.length || 0, !!e.close) {
        for (u.hasOwnProperty(e.marker) || (u[e.marker] = [-1, -1, -1, -1, -1, -1]), i = u[e.marker][(e.open ? 3 : 0) + e.length % 3], o = h - m[h] - 1, c = o; o > i; o -= m[o] + 1)
          if (s = n[o], s.marker === e.marker && s.open && s.end < 0 && (a = false, (s.close || e.open) && (s.length + e.length) % 3 === 0 && (s.length % 3 !== 0 || e.length % 3 !== 0) && (a = true), !a)) {
            l = o > 0 && !n[o - 1].open ? m[o - 1] + 1 : 0, m[r] = r - o + l, m[o] = l, e.open = false, s.end = r, s.close = false, c = -1, p = -2;
            break;
          }
        c !== -1 && (u[e.marker][(e.open ? 3 : 0) + (e.length || 0) % 3] = c);
      }
  }
}
var bP = function(n) {
  var r, o = n.tokens_meta, e = n.tokens_meta.length;
  for (br(n, n.delimiters), r = 0; r < e; r++)
    o[r] && o[r].delimiters && br(n, o[r].delimiters);
}, _P = function(n) {
  var r, o, e = 0, s = n.tokens, i = n.tokens.length;
  for (r = o = 0; r < i; r++)
    s[r].nesting < 0 && e--, s[r].level = e, s[r].nesting > 0 && e++, s[r].type === "text" && r + 1 < i && s[r + 1].type === "text" ? s[r + 1].content = s[r].content + s[r + 1].content : (r !== o && (s[o] = s[r]), o++);
  r !== o && (s.length = o);
}, Nn = zn, _r = D.isWhiteSpace, kr = D.isPunctChar, xr = D.isMdAsciiPunct;
function X(t, n, r, o) {
  this.src = t, this.env = r, this.md = n, this.tokens = o, this.tokens_meta = Array(o.length), this.pos = 0, this.posMax = this.src.length, this.level = 0, this.pending = "", this.pendingLevel = 0, this.cache = {}, this.delimiters = [], this._prev_delimiters = [], this.backticks = {}, this.backticksScanned = false, this.linkLevel = 0;
}
X.prototype.pushPending = function() {
  var t = new Nn("text", "", 0);
  return t.content = this.pending, t.level = this.pendingLevel, this.tokens.push(t), this.pending = "", t;
};
X.prototype.push = function(t, n, r) {
  this.pending && this.pushPending();
  var o = new Nn(t, n, r), e = null;
  return r < 0 && (this.level--, this.delimiters = this._prev_delimiters.pop()), o.level = this.level, r > 0 && (this.level++, this._prev_delimiters.push(this.delimiters), this.delimiters = [], e = { delimiters: this.delimiters }), this.pendingLevel = this.level, this.tokens.push(o), this.tokens_meta.push(e), o;
};
X.prototype.scanDelims = function(t, n) {
  var r = t, o, e, s, i, c, a, l, u, f, h = true, p = true, m = this.posMax, _ = this.src.charCodeAt(t);
  for (o = t > 0 ? this.src.charCodeAt(t - 1) : 32; r < m && this.src.charCodeAt(r) === _; )
    r++;
  return s = r - t, e = r < m ? this.src.charCodeAt(r) : 32, l = xr(o) || kr(String.fromCharCode(o)), f = xr(e) || kr(String.fromCharCode(e)), a = _r(o), u = _r(e), u ? h = false : f && (a || l || (h = false)), a ? p = false : l && (u || f || (p = false)), n ? (i = h, c = p) : (i = h && (!p || l), c = p && (!h || f)), {
    can_open: i,
    can_close: c,
    length: s
  };
};
X.prototype.Token = Nn;
var kP = X, vr = Ln, An = [
  ["text", HM],
  ["linkify", JM],
  ["newline", YM],
  ["escape", KM],
  ["backticks", XM],
  ["strikethrough", hn.tokenize],
  ["emphasis", dn.tokenize],
  ["link", rP],
  ["image", oP],
  ["autolink", cP],
  ["html_inline", pP],
  ["entity", mP]
], Dn = [
  ["balance_pairs", bP],
  ["strikethrough", hn.postProcess],
  ["emphasis", dn.postProcess],
  // rules for pairs separate '**' into its own text tokens, which may be left unused,
  // rule below merges unused segments back with the rest of the text
  ["fragments_join", _P]
];
function nn() {
  var t;
  for (this.ruler = new vr(), t = 0; t < An.length; t++)
    this.ruler.push(An[t][0], An[t][1]);
  for (this.ruler2 = new vr(), t = 0; t < Dn.length; t++)
    this.ruler2.push(Dn[t][0], Dn[t][1]);
}
nn.prototype.skipToken = function(t) {
  var n, r, o = t.pos, e = this.ruler.getRules(""), s = e.length, i = t.md.options.maxNesting, c = t.cache;
  if (typeof c[o] < "u") {
    t.pos = c[o];
    return;
  }
  if (t.level < i)
    for (r = 0; r < s && (t.level++, n = e[r](t, true), t.level--, !n); r++)
      ;
  else
    t.pos = t.posMax;
  n || t.pos++, c[o] = t.pos;
};
nn.prototype.tokenize = function(t) {
  for (var n, r, o = this.ruler.getRules(""), e = o.length, s = t.posMax, i = t.md.options.maxNesting; t.pos < s; ) {
    if (t.level < i)
      for (r = 0; r < e && (n = o[r](t, false), !n); r++)
        ;
    if (n) {
      if (t.pos >= s)
        break;
      continue;
    }
    t.pending += t.src[t.pos++];
  }
  t.pending && t.pushPending();
};
nn.prototype.parse = function(t, n, r, o) {
  var e, s, i, c = new this.State(t, n, r, o);
  for (this.tokenize(c), s = this.ruler2.getRules(""), i = s.length, e = 0; e < i; e++)
    s[e](c);
};
nn.prototype.State = kP;
var xP = nn, qn, yr;
function vP() {
  return yr || (yr = 1, qn = function(t) {
    var n = {};
    t = t || {}, n.src_Any = qr().source, n.src_Cc = Er().source, n.src_Z = Sr().source, n.src_P = Rn.source, n.src_ZPCc = [n.src_Z, n.src_P, n.src_Cc].join("|"), n.src_ZCc = [n.src_Z, n.src_Cc].join("|");
    var r = "[><｜]";
    return n.src_pseudo_letter = "(?:(?!" + r + "|" + n.src_ZPCc + ")" + n.src_Any + ")", n.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)", n.src_auth = "(?:(?:(?!" + n.src_ZCc + "|[@/\\[\\]()]).)+@)?", n.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?", n.src_host_terminator = "(?=$|" + r + "|" + n.src_ZPCc + ")(?!" + (t["---"] ? "-(?!--)|" : "-|") + "_|:\\d|\\.-|\\.(?!$|" + n.src_ZPCc + "))", n.src_path = "(?:[/?#](?:(?!" + n.src_ZCc + "|" + r + `|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!` + n.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + n.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + n.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + n.src_ZCc + `|["]).)+\\"|\\'(?:(?!` + n.src_ZCc + "|[']).)+\\'|\\'(?=" + n.src_pseudo_letter + "|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!" + n.src_ZCc + "|[.]|$)|" + (t["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + ",(?!" + n.src_ZCc + "|$)|;(?!" + n.src_ZCc + "|$)|\\!+(?!" + n.src_ZCc + "|[!]|$)|\\?(?!" + n.src_ZCc + "|[?]|$))+|\\/)?", n.src_email_name = '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*', n.src_xn = "xn--[a-z0-9\\-]{1,59}", n.src_domain_root = // Allow letters & digits (http://test1)
    "(?:" + n.src_xn + "|" + n.src_pseudo_letter + "{1,63})", n.src_domain = "(?:" + n.src_xn + "|(?:" + n.src_pseudo_letter + ")|(?:" + n.src_pseudo_letter + "(?:-|" + n.src_pseudo_letter + "){0,61}" + n.src_pseudo_letter + "))", n.src_host = "(?:(?:(?:(?:" + n.src_domain + ")\\.)*" + n.src_domain + "))", n.tpl_host_fuzzy = "(?:" + n.src_ip4 + "|(?:(?:(?:" + n.src_domain + ")\\.)+(?:%TLDS%)))", n.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + n.src_domain + ")\\.)+(?:%TLDS%))", n.src_host_strict = n.src_host + n.src_host_terminator, n.tpl_host_fuzzy_strict = n.tpl_host_fuzzy + n.src_host_terminator, n.src_host_port_strict = n.src_host + n.src_port + n.src_host_terminator, n.tpl_host_port_fuzzy_strict = n.tpl_host_fuzzy + n.src_port + n.src_host_terminator, n.tpl_host_port_no_ip_fuzzy_strict = n.tpl_host_no_ip_fuzzy + n.src_port + n.src_host_terminator, n.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + n.src_ZPCc + "|>|$))", n.tpl_email_fuzzy = "(^|" + r + '|"|\\(|' + n.src_ZCc + ")(" + n.src_email_name + "@" + n.tpl_host_fuzzy_strict + ")", n.tpl_link_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
    // but can start with > (markdown blockquote)
    "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + n.src_ZPCc + "))((?![$+<=>^`|｜])" + n.tpl_host_port_fuzzy_strict + n.src_path + ")", n.tpl_link_no_ip_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
    // but can start with > (markdown blockquote)
    "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + n.src_ZPCc + "))((?![$+<=>^`|｜])" + n.tpl_host_port_no_ip_fuzzy_strict + n.src_path + ")", n;
  }), qn;
}
function Fn(t) {
  var n = Array.prototype.slice.call(arguments, 1);
  return n.forEach(function(r) {
    r && Object.keys(r).forEach(function(o) {
      t[o] = r[o];
    });
  }), t;
}
function gn(t) {
  return Object.prototype.toString.call(t);
}
function yP(t) {
  return gn(t) === "[object String]";
}
function CP(t) {
  return gn(t) === "[object Object]";
}
function wP(t) {
  return gn(t) === "[object RegExp]";
}
function Cr(t) {
  return gn(t) === "[object Function]";
}
function AP(t) {
  return t.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
}
var Br = {
  fuzzyLink: true,
  fuzzyEmail: true,
  fuzzyIP: false
};
function DP(t) {
  return Object.keys(t || {}).reduce(function(n, r) {
    return n || Br.hasOwnProperty(r);
  }, false);
}
var qP = {
  "http:": {
    validate: function(t, n, r) {
      var o = t.slice(n);
      return r.re.http || (r.re.http = new RegExp(
        "^\\/\\/" + r.re.src_auth + r.re.src_host_port_strict + r.re.src_path,
        "i"
      )), r.re.http.test(o) ? o.match(r.re.http)[0].length : 0;
    }
  },
  "https:": "http:",
  "ftp:": "http:",
  "//": {
    validate: function(t, n, r) {
      var o = t.slice(n);
      return r.re.no_http || (r.re.no_http = new RegExp(
        "^" + r.re.src_auth + // Don't allow single-level domains, because of false positives like '//test'
        // with code comments
        "(?:localhost|(?:(?:" + r.re.src_domain + ")\\.)+" + r.re.src_domain_root + ")" + r.re.src_port + r.re.src_host_terminator + r.re.src_path,
        "i"
      )), r.re.no_http.test(o) ? n >= 3 && t[n - 3] === ":" || n >= 3 && t[n - 3] === "/" ? 0 : o.match(r.re.no_http)[0].length : 0;
    }
  },
  "mailto:": {
    validate: function(t, n, r) {
      var o = t.slice(n);
      return r.re.mailto || (r.re.mailto = new RegExp(
        "^" + r.re.src_email_name + "@" + r.re.src_host_strict,
        "i"
      )), r.re.mailto.test(o) ? o.match(r.re.mailto)[0].length : 0;
    }
  }
}, EP = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]", SP = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");
function FP(t) {
  t.__index__ = -1, t.__text_cache__ = "";
}
function TP(t) {
  return function(n, r) {
    var o = n.slice(r);
    return t.test(o) ? o.match(t)[0].length : 0;
  };
}
function wr() {
  return function(t, n) {
    n.normalize(t);
  };
}
function sn(t) {
  var n = t.re = vP()(t.__opts__), r = t.__tlds__.slice();
  t.onCompile(), t.__tlds_replaced__ || r.push(EP), r.push(n.src_xn), n.src_tlds = r.join("|");
  function o(c) {
    return c.replace("%TLDS%", n.src_tlds);
  }
  n.email_fuzzy = RegExp(o(n.tpl_email_fuzzy), "i"), n.link_fuzzy = RegExp(o(n.tpl_link_fuzzy), "i"), n.link_no_ip_fuzzy = RegExp(o(n.tpl_link_no_ip_fuzzy), "i"), n.host_fuzzy_test = RegExp(o(n.tpl_host_fuzzy_test), "i");
  var e = [];
  t.__compiled__ = {};
  function s(c, a) {
    throw new Error('(LinkifyIt) Invalid schema "' + c + '": ' + a);
  }
  Object.keys(t.__schemas__).forEach(function(c) {
    var a = t.__schemas__[c];
    if (a !== null) {
      var l = { validate: null, link: null };
      if (t.__compiled__[c] = l, CP(a)) {
        wP(a.validate) ? l.validate = TP(a.validate) : Cr(a.validate) ? l.validate = a.validate : s(c, a), Cr(a.normalize) ? l.normalize = a.normalize : a.normalize ? s(c, a) : l.normalize = wr();
        return;
      }
      if (yP(a)) {
        e.push(c);
        return;
      }
      s(c, a);
    }
  }), e.forEach(function(c) {
    t.__compiled__[t.__schemas__[c]] && (t.__compiled__[c].validate = t.__compiled__[t.__schemas__[c]].validate, t.__compiled__[c].normalize = t.__compiled__[t.__schemas__[c]].normalize);
  }), t.__compiled__[""] = { validate: null, normalize: wr() };
  var i = Object.keys(t.__compiled__).filter(function(c) {
    return c.length > 0 && t.__compiled__[c];
  }).map(AP).join("|");
  t.re.schema_test = RegExp("(^|(?!_)(?:[><｜]|" + n.src_ZPCc + "))(" + i + ")", "i"), t.re.schema_search = RegExp("(^|(?!_)(?:[><｜]|" + n.src_ZPCc + "))(" + i + ")", "ig"), t.re.schema_at_start = RegExp("^" + t.re.schema_search.source, "i"), t.re.pretest = RegExp(
    "(" + t.re.schema_test.source + ")|(" + t.re.host_fuzzy_test.source + ")|@",
    "i"
  ), FP(t);
}
function RP(t, n) {
  var r = t.__index__, o = t.__last_index__, e = t.__text_cache__.slice(r, o);
  this.schema = t.__schema__.toLowerCase(), this.index = r + n, this.lastIndex = o + n, this.raw = e, this.text = e, this.url = e;
}
function Tn(t, n) {
  var r = new RP(t, n);
  return t.__compiled__[r.schema].normalize(r, t), r;
}
function T(t, n) {
  if (!(this instanceof T))
    return new T(t, n);
  n || DP(t) && (n = t, t = {}), this.__opts__ = Fn({}, Br, n), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = Fn({}, qP, t), this.__compiled__ = {}, this.__tlds__ = SP, this.__tlds_replaced__ = false, this.re = {}, sn(this);
}
T.prototype.add = function(n, r) {
  return this.__schemas__[n] = r, sn(this), this;
};
T.prototype.set = function(n) {
  return this.__opts__ = Fn(this.__opts__, n), this;
};
T.prototype.test = function(n) {
  if (this.__text_cache__ = n, this.__index__ = -1, !n.length)
    return false;
  var r, o, e, s, i, c, a, l, u;
  if (this.re.schema_test.test(n)) {
    for (a = this.re.schema_search, a.lastIndex = 0; (r = a.exec(n)) !== null; )
      if (s = this.testSchemaAt(n, r[2], a.lastIndex), s) {
        this.__schema__ = r[2], this.__index__ = r.index + r[1].length, this.__last_index__ = r.index + r[0].length + s;
        break;
      }
  }
  return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (l = n.search(this.re.host_fuzzy_test), l >= 0 && (this.__index__ < 0 || l < this.__index__) && (o = n.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) !== null && (i = o.index + o[1].length, (this.__index__ < 0 || i < this.__index__) && (this.__schema__ = "", this.__index__ = i, this.__last_index__ = o.index + o[0].length))), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && (u = n.indexOf("@"), u >= 0 && (e = n.match(this.re.email_fuzzy)) !== null && (i = e.index + e[1].length, c = e.index + e[0].length, (this.__index__ < 0 || i < this.__index__ || i === this.__index__ && c > this.__last_index__) && (this.__schema__ = "mailto:", this.__index__ = i, this.__last_index__ = c))), this.__index__ >= 0;
};
T.prototype.pretest = function(n) {
  return this.re.pretest.test(n);
};
T.prototype.testSchemaAt = function(n, r, o) {
  return this.__compiled__[r.toLowerCase()] ? this.__compiled__[r.toLowerCase()].validate(n, o, this) : 0;
};
T.prototype.match = function(n) {
  var r = 0, o = [];
  this.__index__ >= 0 && this.__text_cache__ === n && (o.push(Tn(this, r)), r = this.__last_index__);
  for (var e = r ? n.slice(r) : n; this.test(e); )
    o.push(Tn(this, r)), e = e.slice(this.__last_index__), r += this.__last_index__;
  return o.length ? o : null;
};
T.prototype.matchAtStart = function(n) {
  if (this.__text_cache__ = n, this.__index__ = -1, !n.length)
    return null;
  var r = this.re.schema_at_start.exec(n);
  if (!r)
    return null;
  var o = this.testSchemaAt(n, r[2], r[0].length);
  return o ? (this.__schema__ = r[2], this.__index__ = r.index + r[1].length, this.__last_index__ = r.index + r[0].length + o, Tn(this, 0)) : null;
};
T.prototype.tlds = function(n, r) {
  return n = Array.isArray(n) ? n : [n], r ? (this.__tlds__ = this.__tlds__.concat(n).sort().filter(function(o, e, s) {
    return o !== s[e - 1];
  }).reverse(), sn(this), this) : (this.__tlds__ = n.slice(), this.__tlds_replaced__ = true, sn(this), this);
};
T.prototype.normalize = function(n) {
  n.schema || (n.url = "http://" + n.url), n.schema === "mailto:" && !/^mailto:/i.test(n.url) && (n.url = "mailto:" + n.url);
};
T.prototype.onCompile = function() {
};
var LP = T;
const H = 2147483647, z = 36, Mn = 1, K = 26, zP = 38, IP = 700, Nr = 72, Mr = 128, Pr = "-", BP = /^xn--/, NP = /[^\0-\x7F]/, MP = /[\x2E\u3002\uFF0E\uFF61]/g, PP = {
  overflow: "Overflow: input needs wider integers to process",
  "not-basic": "Illegal input >= 0x80 (not a basic code point)",
  "invalid-input": "Invalid input"
}, En = z - Mn, I = Math.floor, Sn = String.fromCharCode;
function P(t) {
  throw new RangeError(PP[t]);
}
function OP(t, n) {
  const r = [];
  let o = t.length;
  for (; o--; )
    r[o] = n(t[o]);
  return r;
}
function Or(t, n) {
  const r = t.split("@");
  let o = "";
  r.length > 1 && (o = r[0] + "@", t = r[1]), t = t.replace(MP, ".");
  const e = t.split("."), s = OP(e, n).join(".");
  return o + s;
}
function Pn(t) {
  const n = [];
  let r = 0;
  const o = t.length;
  for (; r < o; ) {
    const e = t.charCodeAt(r++);
    if (e >= 55296 && e <= 56319 && r < o) {
      const s = t.charCodeAt(r++);
      (s & 64512) == 56320 ? n.push(((e & 1023) << 10) + (s & 1023) + 65536) : (n.push(e), r--);
    } else
      n.push(e);
  }
  return n;
}
const Ur = (t) => String.fromCodePoint(...t), UP = function(t) {
  return t >= 48 && t < 58 ? 26 + (t - 48) : t >= 65 && t < 91 ? t - 65 : t >= 97 && t < 123 ? t - 97 : z;
}, Ar = function(t, n) {
  return t + 22 + 75 * (t < 26) - ((n != 0) << 5);
}, Vr = function(t, n, r) {
  let o = 0;
  for (t = r ? I(t / IP) : t >> 1, t += I(t / n); t > En * K >> 1; o += z)
    t = I(t / En);
  return I(o + (En + 1) * t / (t + zP));
}, On = function(t) {
  const n = [], r = t.length;
  let o = 0, e = Mr, s = Nr, i = t.lastIndexOf(Pr);
  i < 0 && (i = 0);
  for (let c = 0; c < i; ++c)
    t.charCodeAt(c) >= 128 && P("not-basic"), n.push(t.charCodeAt(c));
  for (let c = i > 0 ? i + 1 : 0; c < r; ) {
    const a = o;
    for (let u = 1, f = z; ; f += z) {
      c >= r && P("invalid-input");
      const h = UP(t.charCodeAt(c++));
      h >= z && P("invalid-input"), h > I((H - o) / u) && P("overflow"), o += h * u;
      const p = f <= s ? Mn : f >= s + K ? K : f - s;
      if (h < p)
        break;
      const m = z - p;
      u > I(H / m) && P("overflow"), u *= m;
    }
    const l = n.length + 1;
    s = Vr(o - a, l, a == 0), I(o / l) > H - e && P("overflow"), e += I(o / l), o %= l, n.splice(o++, 0, e);
  }
  return String.fromCodePoint(...n);
}, Un = function(t) {
  const n = [];
  t = Pn(t);
  const r = t.length;
  let o = Mr, e = 0, s = Nr;
  for (const a of t)
    a < 128 && n.push(Sn(a));
  const i = n.length;
  let c = i;
  for (i && n.push(Pr); c < r; ) {
    let a = H;
    for (const u of t)
      u >= o && u < a && (a = u);
    const l = c + 1;
    a - o > I((H - e) / l) && P("overflow"), e += (a - o) * l, o = a;
    for (const u of t)
      if (u < o && ++e > H && P("overflow"), u === o) {
        let f = e;
        for (let h = z; ; h += z) {
          const p = h <= s ? Mn : h >= s + K ? K : h - s;
          if (f < p)
            break;
          const m = f - p, _ = z - p;
          n.push(
            Sn(Ar(p + m % _, 0))
          ), f = I(m / _);
        }
        n.push(Sn(Ar(f, 0))), s = Vr(e, l, c === i), e = 0, ++c;
      }
    ++e, ++o;
  }
  return n.join("");
}, $r = function(t) {
  return Or(t, function(n) {
    return BP.test(n) ? On(n.slice(4).toLowerCase()) : n;
  });
}, Gr = function(t) {
  return Or(t, function(n) {
    return NP.test(n) ? "xn--" + Un(n) : n;
  });
}, VP = {
  /**
   * A string representing the current Punycode.js version number.
   * @memberOf punycode
   * @type String
   */
  version: "2.1.0",
  /**
   * An object of methods to convert from JavaScript's internal character
   * representation (UCS-2) to Unicode code points, and back.
   * @see <https://mathiasbynens.be/notes/javascript-encoding>
   * @memberOf punycode
   * @type Object
   */
  ucs2: {
    decode: Pn,
    encode: Ur
  },
  decode: On,
  encode: Un,
  toASCII: Gr,
  toUnicode: $r
}, $P = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  decode: On,
  default: VP,
  encode: Un,
  toASCII: Gr,
  toUnicode: $r,
  ucs2decode: Pn,
  ucs2encode: Ur
}, Symbol.toStringTag, { value: "Module" })), GP = /* @__PURE__ */ Kr($P);
var jP = {
  options: {
    html: false,
    // Enable HTML tags in source
    xhtmlOut: false,
    // Use '/' to close single tags (<br />)
    breaks: false,
    // Convert '\n' in paragraphs into <br>
    langPrefix: "language-",
    // CSS language prefix for fenced blocks
    linkify: false,
    // autoconvert URL-like texts to links
    // Enable some language-neutral replacements + quotes beautification
    typographer: false,
    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Could be either a String or an Array.
    //
    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    quotes: "“”‘’",
    /* “”‘’ */
    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed and should be escaped externaly.
    // If result starts with <pre... internal wrapper is skipped.
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,
    maxNesting: 100
    // Internal protection, recursion limit
  },
  components: {
    core: {},
    block: {},
    inline: {}
  }
}, HP = {
  options: {
    html: false,
    // Enable HTML tags in source
    xhtmlOut: false,
    // Use '/' to close single tags (<br />)
    breaks: false,
    // Convert '\n' in paragraphs into <br>
    langPrefix: "language-",
    // CSS language prefix for fenced blocks
    linkify: false,
    // autoconvert URL-like texts to links
    // Enable some language-neutral replacements + quotes beautification
    typographer: false,
    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Could be either a String or an Array.
    //
    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    quotes: "“”‘’",
    /* “”‘’ */
    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed and should be escaped externaly.
    // If result starts with <pre... internal wrapper is skipped.
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,
    maxNesting: 20
    // Internal protection, recursion limit
  },
  components: {
    core: {
      rules: [
        "normalize",
        "block",
        "inline",
        "text_join"
      ]
    },
    block: {
      rules: [
        "paragraph"
      ]
    },
    inline: {
      rules: [
        "text"
      ],
      rules2: [
        "balance_pairs",
        "fragments_join"
      ]
    }
  }
}, ZP = {
  options: {
    html: true,
    // Enable HTML tags in source
    xhtmlOut: true,
    // Use '/' to close single tags (<br />)
    breaks: false,
    // Convert '\n' in paragraphs into <br>
    langPrefix: "language-",
    // CSS language prefix for fenced blocks
    linkify: false,
    // autoconvert URL-like texts to links
    // Enable some language-neutral replacements + quotes beautification
    typographer: false,
    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Could be either a String or an Array.
    //
    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    quotes: "“”‘’",
    /* “”‘’ */
    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed and should be escaped externaly.
    // If result starts with <pre... internal wrapper is skipped.
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,
    maxNesting: 20
    // Internal protection, recursion limit
  },
  components: {
    core: {
      rules: [
        "normalize",
        "block",
        "inline",
        "text_join"
      ]
    },
    block: {
      rules: [
        "blockquote",
        "code",
        "fence",
        "heading",
        "hr",
        "html_block",
        "lheading",
        "list",
        "reference",
        "paragraph"
      ]
    },
    inline: {
      rules: [
        "autolink",
        "backticks",
        "emphasis",
        "entity",
        "escape",
        "html_inline",
        "image",
        "link",
        "newline",
        "text"
      ],
      rules2: [
        "balance_pairs",
        "emphasis",
        "fragments_join"
      ]
    }
  }
}, Q = D, JP = ln, WP = VN, YP = fM, QP = GM, KP = xP, XP = LP, U = Z, jr = GP, nO = {
  default: jP,
  zero: HP,
  commonmark: ZP
}, rO = /^(vbscript|javascript|file|data):/, tO = /^data:image\/(gif|png|jpeg|webp);/;
function oO(t) {
  var n = t.trim().toLowerCase();
  return rO.test(n) ? !!tO.test(n) : true;
}
var Hr = ["http:", "https:", "mailto:"];
function eO(t) {
  var n = U.parse(t, true);
  if (n.hostname && (!n.protocol || Hr.indexOf(n.protocol) >= 0))
    try {
      n.hostname = jr.toASCII(n.hostname);
    } catch {
    }
  return U.encode(U.format(n));
}
function sO(t) {
  var n = U.parse(t, true);
  if (n.hostname && (!n.protocol || Hr.indexOf(n.protocol) >= 0))
    try {
      n.hostname = jr.toUnicode(n.hostname);
    } catch {
    }
  return U.decode(U.format(n), U.decode.defaultChars + "%");
}
function R(t, n) {
  if (!(this instanceof R))
    return new R(t, n);
  n || Q.isString(t) || (n = t || {}, t = "default"), this.inline = new KP(), this.block = new QP(), this.core = new YP(), this.renderer = new WP(), this.linkify = new XP(), this.validateLink = oO, this.normalizeLink = eO, this.normalizeLinkText = sO, this.utils = Q, this.helpers = Q.assign({}, JP), this.options = {}, this.configure(t), n && this.set(n);
}
R.prototype.set = function(t) {
  return Q.assign(this.options, t), this;
};
R.prototype.configure = function(t) {
  var n = this, r;
  if (Q.isString(t) && (r = t, t = nO[r], !t))
    throw new Error('Wrong `markdown-it` preset "' + r + '", check name');
  if (!t)
    throw new Error("Wrong `markdown-it` preset, can't be empty");
  return t.options && n.set(t.options), t.components && Object.keys(t.components).forEach(function(o) {
    t.components[o].rules && n[o].ruler.enableOnly(t.components[o].rules), t.components[o].rules2 && n[o].ruler2.enableOnly(t.components[o].rules2);
  }), this;
};
R.prototype.enable = function(t, n) {
  var r = [];
  Array.isArray(t) || (t = [t]), ["core", "block", "inline"].forEach(function(e) {
    r = r.concat(this[e].ruler.enable(t, true));
  }, this), r = r.concat(this.inline.ruler2.enable(t, true));
  var o = t.filter(function(e) {
    return r.indexOf(e) < 0;
  });
  if (o.length && !n)
    throw new Error("MarkdownIt. Failed to enable unknown rule(s): " + o);
  return this;
};
R.prototype.disable = function(t, n) {
  var r = [];
  Array.isArray(t) || (t = [t]), ["core", "block", "inline"].forEach(function(e) {
    r = r.concat(this[e].ruler.disable(t, true));
  }, this), r = r.concat(this.inline.ruler2.disable(t, true));
  var o = t.filter(function(e) {
    return r.indexOf(e) < 0;
  });
  if (o.length && !n)
    throw new Error("MarkdownIt. Failed to disable unknown rule(s): " + o);
  return this;
};
R.prototype.use = function(t) {
  var n = [this].concat(Array.prototype.slice.call(arguments, 1));
  return t.apply(t, n), this;
};
R.prototype.parse = function(t, n) {
  if (typeof t != "string")
    throw new Error("Input data should be a String");
  var r = new this.core.State(t, this, n);
  return this.core.process(r), r.tokens;
};
R.prototype.render = function(t, n) {
  return n = n || {}, this.renderer.render(this.parse(t, n), this.options, n);
};
R.prototype.parseInline = function(t, n) {
  var r = new this.core.State(t, this, n);
  return r.inlineMode = true, this.core.process(r), r.tokens;
};
R.prototype.renderInline = function(t, n) {
  return n = n || {}, this.renderer.render(this.parseInline(t, n), this.options, n);
};
var cO = R, iO = cO;
const aO = /* @__PURE__ */ Qr(iO), lO = ["innerHTML"], uO = /* @__PURE__ */ vue.defineComponent({
  __name: "VueMarkdownIt",
  props: {
    source: {}
  },
  setup(t) {
    const n = new aO();
    return (r, o) => (vue.openBlock(), vue.createElementBlock("div", {
      innerHTML: vue.unref(n).render(r.source)
    }, null, 8, lO));
  }
}), fO = {
  install: (t, n) => {
    t.component("VueMarkdownIt", uO);
  }
};
const api = axios.create({
  baseURL: "http://localhost:1337/api",
  headers: {
    Authorization: `Bearer ${"5f29c7b3305dc869981faa8d3dac7d85cb65a7c5c94e0a15f3581ae8589fad030fc2ee8094c2996055b65c07dbc827bd88aa3ef3eb03bedc3f2eeb1149d8315e9566b559f07be282663f3608c98fa7ec66dbea7e03a5a7223b356933d896806e938884bf8ee2b6199a742f1637bf342db3c8394d6e170dddfecae67533541b59"}`
  }
});
function getPostsSlugs() {
  return api.get(`/posts`, {
    params: {
      "fields[0]": "slug"
    }
  });
}
function getAllPosts() {
  return api.get("/posts", {
    params: {
      pagination: {
        page: 1,
        pageSize: 1e3
      }
    }
  });
}
function getPostBySlug(slug) {
  return api.get(`/posts`, {
    params: {
      "filters[slug][$eq]": slug
    }
  });
}
const useBlogStore = pinia.defineStore("blog", () => {
  const posts = vue.ref([]);
  const postPaths = vue.computed(
    () => posts.value.map((post) => `/blog/${post.attributes.slug}`)
  );
  function getPost(slug) {
    return posts.value.find((post) => post.attributes.slug === slug);
  }
  return {
    posts,
    postPaths,
    getPost
  };
});
const routes = setupLayouts(routes$1);
const createApp = viteSsg.ViteSSG(
  App,
  {
    scrollBehavior(to2, from, savedPosition) {
      if (savedPosition)
        return savedPosition;
      return { top: 0 };
    },
    routes
  },
  async ({ app, initialState }) => {
    const pinia$1 = pinia.createPinia();
    app.use(pinia$1);
    app.use(fO);
    {
      const res = await getAllPosts();
      if (res.data) {
        const data = res.data.data;
        initialState.data = data;
      }
    }
  }
);
async function includedRoutes(paths) {
  const posts = await getPostsSlugs();
  const staticPaths = paths.filter((path) => !path.includes(":"));
  const dynamicPosts = posts.data.data.map(
    (item) => `/blog/${item.attributes.slug}`
  );
  return [...dynamicPosts, ...staticPaths];
}
exports._export_sfc = _export_sfc;
exports.createApp = createApp;
exports.getPostBySlug = getPostBySlug;
exports.includedRoutes = includedRoutes;
exports.useBlogStore = useBlogStore;