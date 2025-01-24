import {_ as g, d as p, b as h, e as b, v as _, X as c, Z as v} from "./_plugin-vue_export-helper.BkFXMiNf.js";
import {s as S, d as y, e as A} from "./scrollToSection.C5LlLsUC.js";
import {ad as w} from "./siteModulesConstants.CtAQQZTV.js";
const R = /\s|&nbsp;/g
  , $ = t => {
    try {
        return t.replaceAll(R, "").toLowerCase()
    } catch {
        return t
    }
}
  , f = (t, e) => {
    t.dataset.qa = $(e.value)
}
  , E = "qa"
  , O = {
    beforeMount: (t, e) => f(t, e),
    updated: (t, e) => f(t, e)
}
  , k = p({
    props: {
        to: {
            type: Object,
            default: () => ({})
        }
    }
})
  , B = ["href"];
function L(t, e, n, o, s, a) {
    return h(),
    b("a", {
        href: t.to.path
    }, [_(t.$slots, "default")], 8, B)
}
const M = g(k, [["render", L]])
  , T = () => {
    const t = navigator.userAgent;
    let e, n = t.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
    return /trident/i.test(n[1]) ? (e = /\brv[ :]+(\d+)/g.exec(t) || [],
    {
        name: "IE",
        version: e[1] || ""
    }) : n[1] === "Chrome" && (e = t.match(/\bOPR|Edge\/(\d+)/),
    e != null) ? {
        name: "Opera",
        version: e[1]
    } : (n = n[2] ? [n[1], n[2]] : [navigator.appName, navigator.appVersion, "-?"],
    (e = t.match(/version\/(\d+)/i)) != null && n.splice(1, 1, e[1]),
    {
        name: n[0],
        version: n[1]
    })
}
;
function j(t) {
    const n = T().name === w;
    if (typeof t == "object") {
        const {query: o, path: s, hash: a} = t
          , i = o ? `?${new URLSearchParams(o)}` : "";
        s ? window.location.assign(`${s}${i}`) : window.history.pushState(null, null, i),
        a && S({
            linkToSection: a,
            isInstant: n
        })
    } else
        window.location.assign(t)
}
const d = t => {
    t.component("RouterLink", M),
    t.config.globalProperties.$router = {
        push: e => j(e)
    },
    t.directive(E, O)
}
  , I = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: d
}, Symbol.toStringTag, {
    value: "Module"
}))
  , x = async t => {
    "default"in I && await d(t)
}
  , H = p({
    props: {
        value: String,
        name: String,
        hydrate: {
            type: Boolean,
            default: !0
        }
    },
    setup({name: t, value: e, hydrate: n}) {
        if (!e)
            return () => null;
        let o = n ? "astro-slot" : "astro-static-slot";
        return () => c(o, {
            name: t,
            innerHTML: e
        })
    }
})
  , F = t => async (e, n, o, {client: s}) => {
    if (!t.hasAttribute("ssr"))
        return;
    const a = e.name ? `${e.name} Host` : void 0
      , i = {};
    for (const [r,m] of Object.entries(o))
        i[r] = () => c(H, {
            value: m,
            name: r === "default" ? void 0 : r
        });
    const l = s !== "only"
      , u = (l ? y : A)({
        name: a,
        render() {
            let r = c(e, n, i);
            return N(e.setup) && (r = c(v, null, r)),
            r
        }
    });
    await x(u),
    u.mount(t, l),
    t.addEventListener("astro:unmount", () => u.unmount(), {
        once: !0
    })
}
;
function N(t) {
    const e = t?.constructor;
    return e && e.name === "AsyncFunction"
}
export {F as default};
