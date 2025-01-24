import {_ as m, d as g, e as p, b as u} from "./_plugin-vue_export-helper.BkFXMiNf.js";
import {aa as f} from "./siteModulesConstants.CtAQQZTV.js";
import {i as d, e as h, g as w, a as l, h as C, c as _, j as x, k as c} from "./googleTagManager.CbcsHWv3.js";
const I = [".zyrosite.space", ".zyrosite.com"]
  , N = ({domain: e, pageNoindex: t}) => {
    const o = window.origin.includes("https://latest-user-app.zyro.com")
      , n = I.some(r => window.origin.includes(r))
      , a = f.some(r => window.origin.includes(r))
      , i = !!t || (n || a) && !d;
    return {
        shouldRedirectToCanonical: e && e.toLowerCase() !== window.location.hostname.toLowerCase() && !n && !a && !d && !h() && !o,
        noindex: i
    }
}
  , S = g({
    props: {
        pageNoindex: {
            type: Boolean,
            default: !1
        },
        domain: {
            type: String,
            default: ""
        },
        canonicalUrl: {
            type: String,
            default: ""
        },
        siteMeta: {
            type: Object,
            default: null
        }
    },
    setup(e) {
        const {shouldRedirectToCanonical: t, noindex: o} = N({
            domain: e.domain,
            pageNoindex: e.pageNoindex
        });
        if (e.siteMeta) {
            const n = w(window.location.hostname)
              , a = l(`z-cookies-consent-${n}`) !== "0";
            if (C({
                siteMeta: e.siteMeta,
                areCookiesAllowed: a
            }),
            e.siteMeta.googleAdsIds && e.siteMeta.googleAdsIds.length) {
                const i = "last_purchase"
                  , s = l(i);
                s && (_("purchase", JSON.parse(s)),
                x(i))
            }
        }
        return !e.pageNoindex && o && c({
            type: "element",
            tagName: "meta",
            properties: {
                name: "robots",
                content: "noindex"
            }
        }),
        t && c({
            type: "element",
            tagName: "meta",
            properties: {
                "http-equiv": "refresh",
                content: `0; url=${e.canonicalUrl}`
            }
        }),
        c({
            type: "element",
            tagName: "meta",
            properties: {
                name: "generator",
                content: "Hostinger Website builder"
            }
        }),
        {
            shouldRedirectToCanonical: t,
            noindex: o
        }
    }
});
function y(e, t, o, n, a, i) {
    return u(),
    p("div")
}
const k = m(S, [["render", y]]);
export {k as default};
