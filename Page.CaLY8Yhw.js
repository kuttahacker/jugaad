import {u as ht, v as da, w as xe, T as ra, a as He, s as To, b as Oc, c as Ad, r as Zs} from "./scrollToSection.C5LlLsUC.js";
import {i as xc, r as E, c as u, _ as oe, d as re, o as Pe, a as Kt, b as m, e as y, f as C, t as ae, g as x, n as Nt, h as J, F as ge, j as Ce, k as lt, w as se, l as qe, m as mt, p as z, q as Ae, s as Je, u as pt, v as ne, x as ze, y as ye, z as dn, A as Od, B as os, C as is, D as Fe, E as sa, G as la, H as ro, I as Pr, J as Za, K as qt, L as N, M as Bc, N as An, O as xd, P as Bd, Q as Lc, R as Rc, S as Di, T as Nn, U as ea, V as Ks, W as Ld, X as Rd, Y as Nd} from "./_plugin-vue_export-helper.BkFXMiNf.js";
import {B as Mi, S as mn, a as Hd, M as Br, b as Ya, D as Vd, c as Ka, d as gr, E as Aa, e as Cn, f as Nc, g as Hc, Z as Ud, h as Fd, i as jd, P as Vc, j as Uc, k as Gd, A as Yd, l as Wd, m as $d, n as ss, o as Fc, I as Qs, p as ti, q as qd, r as zd, s as Zd, t as Xs, u as Lr, v as Rr, w as ai, x as jc, y as Kd, z as Qd, C as Xd, F as Jd, G as Js, H as Gc, J as el, K as em, L as tm, N as am, O as Ai, Q as Yc, R as nm, T as rm, U as om, V as tl, W as Xn, X as al, Y as im, _ as sm, $ as lm, a0 as cm, a1 as Wc, a2 as wo, a3 as um, a4 as dm, a5 as mm, a6 as gm, a7 as pm, a8 as nl, a9 as vm} from "./siteModulesConstants.CtAQQZTV.js";
/* empty css                        */
import {g as fm, a as hm, s as rl, b as ym, i as bm, c as Go, d as _m, e as ar, f as $c} from "./googleTagManager.CbcsHWv3.js";
/*!
  * vue-router v4.3.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */
var ol;
(function(t) {
    t.pop = "pop",
    t.push = "push"
}
)(ol || (ol = {}));
var il;
(function(t) {
    t.back = "back",
    t.forward = "forward",
    t.unknown = ""
}
)(il || (il = {}));
var sl;
(function(t) {
    t[t.aborted = 4] = "aborted",
    t[t.cancelled = 8] = "cancelled",
    t[t.duplicated = 16] = "duplicated"
}
)(sl || (sl = {}));
const wm = Symbol("")
  , km = Symbol("");
function Sm() {
    return xc(wm)
}
function qc() {
    return xc(km)
}
var Xe;
(function(t) {
    t.assertEqual = r => r;
    function n(r) {}
    t.assertIs = n;
    function a(r) {
        throw new Error
    }
    t.assertNever = a,
    t.arrayToEnum = r => {
        const o = {};
        for (const i of r)
            o[i] = i;
        return o
    }
    ,
    t.getValidEnumValues = r => {
        const o = t.objectKeys(r).filter(s => typeof r[r[s]] != "number")
          , i = {};
        for (const s of o)
            i[s] = r[s];
        return t.objectValues(i)
    }
    ,
    t.objectValues = r => t.objectKeys(r).map(function(o) {
        return r[o]
    }),
    t.objectKeys = typeof Object.keys == "function" ? r => Object.keys(r) : r => {
        const o = [];
        for (const i in r)
            Object.prototype.hasOwnProperty.call(r, i) && o.push(i);
        return o
    }
    ,
    t.find = (r, o) => {
        for (const i of r)
            if (o(i))
                return i
    }
    ,
    t.isInteger = typeof Number.isInteger == "function" ? r => Number.isInteger(r) : r => typeof r == "number" && isFinite(r) && Math.floor(r) === r;
    function e(r, o=" | ") {
        return r.map(i => typeof i == "string" ? `'${i}'` : i).join(o)
    }
    t.joinValues = e,
    t.jsonStringifyReplacer = (r, o) => typeof o == "bigint" ? o.toString() : o
}
)(Xe || (Xe = {}));
var Oi;
(function(t) {
    t.mergeShapes = (n, a) => ({
        ...n,
        ...a
    })
}
)(Oi || (Oi = {}));
const _e = Xe.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"])
  , $a = t => {
    switch (typeof t) {
    case "undefined":
        return _e.undefined;
    case "string":
        return _e.string;
    case "number":
        return isNaN(t) ? _e.nan : _e.number;
    case "boolean":
        return _e.boolean;
    case "function":
        return _e.function;
    case "bigint":
        return _e.bigint;
    case "symbol":
        return _e.symbol;
    case "object":
        return Array.isArray(t) ? _e.array : t === null ? _e.null : t.then && typeof t.then == "function" && t.catch && typeof t.catch == "function" ? _e.promise : typeof Map < "u" && t instanceof Map ? _e.map : typeof Set < "u" && t instanceof Set ? _e.set : typeof Date < "u" && t instanceof Date ? _e.date : _e.object;
    default:
        return _e.unknown
    }
}
  , le = Xe.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"])
  , Tm = t => JSON.stringify(t, null, 2).replace(/"([^"]+)":/g, "$1:");
class ia extends Error {
    get errors() {
        return this.issues
    }
    constructor(n) {
        super(),
        this.issues = [],
        this.addIssue = e => {
            this.issues = [...this.issues, e]
        }
        ,
        this.addIssues = (e=[]) => {
            this.issues = [...this.issues, ...e]
        }
        ;
        const a = new.target.prototype;
        Object.setPrototypeOf ? Object.setPrototypeOf(this, a) : this.__proto__ = a,
        this.name = "ZodError",
        this.issues = n
    }
    format(n) {
        const a = n || function(o) {
            return o.message
        }
          , e = {
            _errors: []
        }
          , r = o => {
            for (const i of o.issues)
                if (i.code === "invalid_union")
                    i.unionErrors.map(r);
                else if (i.code === "invalid_return_type")
                    r(i.returnTypeError);
                else if (i.code === "invalid_arguments")
                    r(i.argumentsError);
                else if (i.path.length === 0)
                    e._errors.push(a(i));
                else {
                    let s = e
                      , l = 0;
                    for (; l < i.path.length; ) {
                        const d = i.path[l];
                        l === i.path.length - 1 ? (s[d] = s[d] || {
                            _errors: []
                        },
                        s[d]._errors.push(a(i))) : s[d] = s[d] || {
                            _errors: []
                        },
                        s = s[d],
                        l++
                    }
                }
        }
        ;
        return r(this),
        e
    }
    static assert(n) {
        if (!(n instanceof ia))
            throw new Error(`Not a ZodError: ${n}`)
    }
    toString() {
        return this.message
    }
    get message() {
        return JSON.stringify(this.issues, Xe.jsonStringifyReplacer, 2)
    }
    get isEmpty() {
        return this.issues.length === 0
    }
    flatten(n=a => a.message) {
        const a = {}
          , e = [];
        for (const r of this.issues)
            r.path.length > 0 ? (a[r.path[0]] = a[r.path[0]] || [],
            a[r.path[0]].push(n(r))) : e.push(n(r));
        return {
            formErrors: e,
            fieldErrors: a
        }
    }
    get formErrors() {
        return this.flatten()
    }
}
ia.create = t => new ia(t);
const nr = (t, n) => {
    let a;
    switch (t.code) {
    case le.invalid_type:
        t.received === _e.undefined ? a = "Required" : a = `Expected ${t.expected}, received ${t.received}`;
        break;
    case le.invalid_literal:
        a = `Invalid literal value, expected ${JSON.stringify(t.expected, Xe.jsonStringifyReplacer)}`;
        break;
    case le.unrecognized_keys:
        a = `Unrecognized key(s) in object: ${Xe.joinValues(t.keys, ", ")}`;
        break;
    case le.invalid_union:
        a = "Invalid input";
        break;
    case le.invalid_union_discriminator:
        a = `Invalid discriminator value. Expected ${Xe.joinValues(t.options)}`;
        break;
    case le.invalid_enum_value:
        a = `Invalid enum value. Expected ${Xe.joinValues(t.options)}, received '${t.received}'`;
        break;
    case le.invalid_arguments:
        a = "Invalid function arguments";
        break;
    case le.invalid_return_type:
        a = "Invalid function return type";
        break;
    case le.invalid_date:
        a = "Invalid date";
        break;
    case le.invalid_string:
        typeof t.validation == "object" ? "includes"in t.validation ? (a = `Invalid input: must include "${t.validation.includes}"`,
        typeof t.validation.position == "number" && (a = `${a} at one or more positions greater than or equal to ${t.validation.position}`)) : "startsWith"in t.validation ? a = `Invalid input: must start with "${t.validation.startsWith}"` : "endsWith"in t.validation ? a = `Invalid input: must end with "${t.validation.endsWith}"` : Xe.assertNever(t.validation) : t.validation !== "regex" ? a = `Invalid ${t.validation}` : a = "Invalid";
        break;
    case le.too_small:
        t.type === "array" ? a = `Array must contain ${t.exact ? "exactly" : t.inclusive ? "at least" : "more than"} ${t.minimum} element(s)` : t.type === "string" ? a = `String must contain ${t.exact ? "exactly" : t.inclusive ? "at least" : "over"} ${t.minimum} character(s)` : t.type === "number" ? a = `Number must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${t.minimum}` : t.type === "date" ? a = `Date must be ${t.exact ? "exactly equal to " : t.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(t.minimum))}` : a = "Invalid input";
        break;
    case le.too_big:
        t.type === "array" ? a = `Array must contain ${t.exact ? "exactly" : t.inclusive ? "at most" : "less than"} ${t.maximum} element(s)` : t.type === "string" ? a = `String must contain ${t.exact ? "exactly" : t.inclusive ? "at most" : "under"} ${t.maximum} character(s)` : t.type === "number" ? a = `Number must be ${t.exact ? "exactly" : t.inclusive ? "less than or equal to" : "less than"} ${t.maximum}` : t.type === "bigint" ? a = `BigInt must be ${t.exact ? "exactly" : t.inclusive ? "less than or equal to" : "less than"} ${t.maximum}` : t.type === "date" ? a = `Date must be ${t.exact ? "exactly" : t.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(t.maximum))}` : a = "Invalid input";
        break;
    case le.custom:
        a = "Invalid input";
        break;
    case le.invalid_intersection_types:
        a = "Intersection results could not be merged";
        break;
    case le.not_multiple_of:
        a = `Number must be a multiple of ${t.multipleOf}`;
        break;
    case le.not_finite:
        a = "Number must be finite";
        break;
    default:
        a = n.defaultError,
        Xe.assertNever(t)
    }
    return {
        message: a
    }
}
;
let zc = nr;
function Cm(t) {
    zc = t
}
function Co() {
    return zc
}
const Io = t => {
    const {data: n, path: a, errorMaps: e, issueData: r} = t
      , o = [...a, ...r.path || []]
      , i = {
        ...r,
        path: o
    };
    if (r.message !== void 0)
        return {
            ...r,
            path: o,
            message: r.message
        };
    let s = "";
    const l = e.filter(d => !!d).slice().reverse();
    for (const d of l)
        s = d(i, {
            data: n,
            defaultError: s
        }).message;
    return {
        ...r,
        path: o,
        message: s
    }
}
  , Im = [];
function ve(t, n) {
    const a = Co()
      , e = Io({
        issueData: n,
        data: t.data,
        path: t.path,
        errorMaps: [t.common.contextualErrorMap, t.schemaErrorMap, a, a === nr ? void 0 : nr].filter(r => !!r)
    });
    t.common.issues.push(e)
}
class Qt {
    constructor() {
        this.value = "valid"
    }
    dirty() {
        this.value === "valid" && (this.value = "dirty")
    }
    abort() {
        this.value !== "aborted" && (this.value = "aborted")
    }
    static mergeArray(n, a) {
        const e = [];
        for (const r of a) {
            if (r.status === "aborted")
                return Ve;
            r.status === "dirty" && n.dirty(),
            e.push(r.value)
        }
        return {
            status: n.value,
            value: e
        }
    }
    static async mergeObjectAsync(n, a) {
        const e = [];
        for (const r of a) {
            const o = await r.key
              , i = await r.value;
            e.push({
                key: o,
                value: i
            })
        }
        return Qt.mergeObjectSync(n, e)
    }
    static mergeObjectSync(n, a) {
        const e = {};
        for (const r of a) {
            const {key: o, value: i} = r;
            if (o.status === "aborted" || i.status === "aborted")
                return Ve;
            o.status === "dirty" && n.dirty(),
            i.status === "dirty" && n.dirty(),
            o.value !== "__proto__" && (typeof i.value < "u" || r.alwaysSet) && (e[o.value] = i.value)
        }
        return {
            status: n.value,
            value: e
        }
    }
}
const Ve = Object.freeze({
    status: "aborted"
})
  , qn = t => ({
    status: "dirty",
    value: t
})
  , aa = t => ({
    status: "valid",
    value: t
})
  , xi = t => t.status === "aborted"
  , Bi = t => t.status === "dirty"
  , On = t => t.status === "valid"
  , Nr = t => typeof Promise < "u" && t instanceof Promise;
function Po(t, n, a, e) {
    if (typeof n == "function" ? t !== n || !e : !n.has(t))
        throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return n.get(t)
}
function Zc(t, n, a, e, r) {
    if (typeof n == "function" ? t !== n || !r : !n.has(t))
        throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return n.set(t, a),
    a
}
var Te;
(function(t) {
    t.errToObj = n => typeof n == "string" ? {
        message: n
    } : n || {},
    t.toString = n => typeof n == "string" ? n : n?.message
}
)(Te || (Te = {}));
var Tr, Cr;
class Na {
    constructor(n, a, e, r) {
        this._cachedPath = [],
        this.parent = n,
        this.data = a,
        this._path = e,
        this._key = r
    }
    get path() {
        return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)),
        this._cachedPath
    }
}
const ll = (t, n) => {
    if (On(n))
        return {
            success: !0,
            data: n.value
        };
    if (!t.common.issues.length)
        throw new Error("Validation failed but no issues detected.");
    return {
        success: !1,
        get error() {
            if (this._error)
                return this._error;
            const a = new ia(t.common.issues);
            return this._error = a,
            this._error
        }
    }
}
;
function Ge(t) {
    if (!t)
        return {};
    const {errorMap: n, invalid_type_error: a, required_error: e, description: r} = t;
    if (n && (a || e))
        throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
    return n ? {
        errorMap: n,
        description: r
    } : {
        errorMap: (i, s) => {
            var l, d;
            const {message: p} = t;
            return i.code === "invalid_enum_value" ? {
                message: p ?? s.defaultError
            } : typeof s.data > "u" ? {
                message: (l = p ?? e) !== null && l !== void 0 ? l : s.defaultError
            } : i.code !== "invalid_type" ? {
                message: s.defaultError
            } : {
                message: (d = p ?? a) !== null && d !== void 0 ? d : s.defaultError
            }
        }
        ,
        description: r
    }
}
class Ye {
    get description() {
        return this._def.description
    }
    _getType(n) {
        return $a(n.data)
    }
    _getOrReturnCtx(n, a) {
        return a || {
            common: n.parent.common,
            data: n.data,
            parsedType: $a(n.data),
            schemaErrorMap: this._def.errorMap,
            path: n.path,
            parent: n.parent
        }
    }
    _processInputParams(n) {
        return {
            status: new Qt,
            ctx: {
                common: n.parent.common,
                data: n.data,
                parsedType: $a(n.data),
                schemaErrorMap: this._def.errorMap,
                path: n.path,
                parent: n.parent
            }
        }
    }
    _parseSync(n) {
        const a = this._parse(n);
        if (Nr(a))
            throw new Error("Synchronous parse encountered promise.");
        return a
    }
    _parseAsync(n) {
        const a = this._parse(n);
        return Promise.resolve(a)
    }
    parse(n, a) {
        const e = this.safeParse(n, a);
        if (e.success)
            return e.data;
        throw e.error
    }
    safeParse(n, a) {
        var e;
        const r = {
            common: {
                issues: [],
                async: (e = a?.async) !== null && e !== void 0 ? e : !1,
                contextualErrorMap: a?.errorMap
            },
            path: a?.path || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: n,
            parsedType: $a(n)
        }
          , o = this._parseSync({
            data: n,
            path: r.path,
            parent: r
        });
        return ll(r, o)
    }
    "~validate"(n) {
        var a, e;
        const r = {
            common: {
                issues: [],
                async: !!this["~standard"].async
            },
            path: [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: n,
            parsedType: $a(n)
        };
        if (!this["~standard"].async)
            try {
                const o = this._parseSync({
                    data: n,
                    path: [],
                    parent: r
                });
                return On(o) ? {
                    value: o.value
                } : {
                    issues: r.common.issues
                }
            } catch (o) {
                !((e = (a = o?.message) === null || a === void 0 ? void 0 : a.toLowerCase()) === null || e === void 0) && e.includes("encountered") && (this["~standard"].async = !0),
                r.common = {
                    issues: [],
                    async: !0
                }
            }
        return this._parseAsync({
            data: n,
            path: [],
            parent: r
        }).then(o => On(o) ? {
            value: o.value
        } : {
            issues: r.common.issues
        })
    }
    async parseAsync(n, a) {
        const e = await this.safeParseAsync(n, a);
        if (e.success)
            return e.data;
        throw e.error
    }
    async safeParseAsync(n, a) {
        const e = {
            common: {
                issues: [],
                contextualErrorMap: a?.errorMap,
                async: !0
            },
            path: a?.path || [],
            schemaErrorMap: this._def.errorMap,
            parent: null,
            data: n,
            parsedType: $a(n)
        }
          , r = this._parse({
            data: n,
            path: e.path,
            parent: e
        })
          , o = await (Nr(r) ? r : Promise.resolve(r));
        return ll(e, o)
    }
    refine(n, a) {
        const e = r => typeof a == "string" || typeof a > "u" ? {
            message: a
        } : typeof a == "function" ? a(r) : a;
        return this._refinement( (r, o) => {
            const i = n(r)
              , s = () => o.addIssue({
                code: le.custom,
                ...e(r)
            });
            return typeof Promise < "u" && i instanceof Promise ? i.then(l => l ? !0 : (s(),
            !1)) : i ? !0 : (s(),
            !1)
        }
        )
    }
    refinement(n, a) {
        return this._refinement( (e, r) => n(e) ? !0 : (r.addIssue(typeof a == "function" ? a(e, r) : a),
        !1))
    }
    _refinement(n) {
        return new Ta({
            schema: this,
            typeName: Ne.ZodEffects,
            effect: {
                type: "refinement",
                refinement: n
            }
        })
    }
    superRefine(n) {
        return this._refinement(n)
    }
    constructor(n) {
        this.spa = this.safeParseAsync,
        this._def = n,
        this.parse = this.parse.bind(this),
        this.safeParse = this.safeParse.bind(this),
        this.parseAsync = this.parseAsync.bind(this),
        this.safeParseAsync = this.safeParseAsync.bind(this),
        this.spa = this.spa.bind(this),
        this.refine = this.refine.bind(this),
        this.refinement = this.refinement.bind(this),
        this.superRefine = this.superRefine.bind(this),
        this.optional = this.optional.bind(this),
        this.nullable = this.nullable.bind(this),
        this.nullish = this.nullish.bind(this),
        this.array = this.array.bind(this),
        this.promise = this.promise.bind(this),
        this.or = this.or.bind(this),
        this.and = this.and.bind(this),
        this.transform = this.transform.bind(this),
        this.brand = this.brand.bind(this),
        this.default = this.default.bind(this),
        this.catch = this.catch.bind(this),
        this.describe = this.describe.bind(this),
        this.pipe = this.pipe.bind(this),
        this.readonly = this.readonly.bind(this),
        this.isNullable = this.isNullable.bind(this),
        this.isOptional = this.isOptional.bind(this),
        this["~standard"] = {
            version: 1,
            vendor: "zod",
            validate: a => this["~validate"](a)
        }
    }
    optional() {
        return La.create(this, this._def)
    }
    nullable() {
        return fn.create(this, this._def)
    }
    nullish() {
        return this.nullable().optional()
    }
    array() {
        return _a.create(this)
    }
    promise() {
        return or.create(this, this._def)
    }
    or(n) {
        return Fr.create([this, n], this._def)
    }
    and(n) {
        return jr.create(this, n, this._def)
    }
    transform(n) {
        return new Ta({
            ...Ge(this._def),
            schema: this,
            typeName: Ne.ZodEffects,
            effect: {
                type: "transform",
                transform: n
            }
        })
    }
    default(n) {
        const a = typeof n == "function" ? n : () => n;
        return new qr({
            ...Ge(this._def),
            innerType: this,
            defaultValue: a,
            typeName: Ne.ZodDefault
        })
    }
    brand() {
        return new ls({
            typeName: Ne.ZodBranded,
            type: this,
            ...Ge(this._def)
        })
    }
    catch(n) {
        const a = typeof n == "function" ? n : () => n;
        return new zr({
            ...Ge(this._def),
            innerType: this,
            catchValue: a,
            typeName: Ne.ZodCatch
        })
    }
    describe(n) {
        const a = this.constructor;
        return new a({
            ...this._def,
            description: n
        })
    }
    pipe(n) {
        return oo.create(this, n)
    }
    readonly() {
        return Zr.create(this)
    }
    isOptional() {
        return this.safeParse(void 0).success
    }
    isNullable() {
        return this.safeParse(null).success
    }
}
const Pm = /^c[^\s-]{8,}$/i
  , Em = /^[0-9a-z]+$/
  , Dm = /^[0-9A-HJKMNP-TV-Z]{26}$/i
  , Mm = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i
  , Am = /^[a-z0-9_-]{21}$/i
  , Om = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/
  , xm = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/
  , Bm = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i
  , Lm = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let ni;
const Rm = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/
  , Nm = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/
  , Hm = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/
  , Vm = /^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/
  , Um = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/
  , Fm = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/
  , Kc = "((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))"
  , jm = new RegExp(`^${Kc}$`);
function Qc(t) {
    let n = "([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d";
    return t.precision ? n = `${n}\\.\\d{${t.precision}}` : t.precision == null && (n = `${n}(\\.\\d+)?`),
    n
}
function Gm(t) {
    return new RegExp(`^${Qc(t)}$`)
}
function Xc(t) {
    let n = `${Kc}T${Qc(t)}`;
    const a = [];
    return a.push(t.local ? "Z?" : "Z"),
    t.offset && a.push("([+-]\\d{2}:?\\d{2})"),
    n = `${n}(${a.join("|")})`,
    new RegExp(`^${n}$`)
}
function Ym(t, n) {
    return !!((n === "v4" || !n) && Rm.test(t) || (n === "v6" || !n) && Hm.test(t))
}
function Wm(t, n) {
    if (!Om.test(t))
        return !1;
    try {
        const [a] = t.split(".")
          , e = a.replace(/-/g, "+").replace(/_/g, "/").padEnd(a.length + (4 - a.length % 4) % 4, "=")
          , r = JSON.parse(atob(e));
        return !(typeof r != "object" || r === null || !r.typ || !r.alg || n && r.alg !== n)
    } catch {
        return !1
    }
}
function $m(t, n) {
    return !!((n === "v4" || !n) && Nm.test(t) || (n === "v6" || !n) && Vm.test(t))
}
class ba extends Ye {
    _parse(n) {
        if (this._def.coerce && (n.data = String(n.data)),
        this._getType(n) !== _e.string) {
            const o = this._getOrReturnCtx(n);
            return ve(o, {
                code: le.invalid_type,
                expected: _e.string,
                received: o.parsedType
            }),
            Ve
        }
        const e = new Qt;
        let r;
        for (const o of this._def.checks)
            if (o.kind === "min")
                n.data.length < o.value && (r = this._getOrReturnCtx(n, r),
                ve(r, {
                    code: le.too_small,
                    minimum: o.value,
                    type: "string",
                    inclusive: !0,
                    exact: !1,
                    message: o.message
                }),
                e.dirty());
            else if (o.kind === "max")
                n.data.length > o.value && (r = this._getOrReturnCtx(n, r),
                ve(r, {
                    code: le.too_big,
                    maximum: o.value,
                    type: "string",
                    inclusive: !0,
                    exact: !1,
                    message: o.message
                }),
                e.dirty());
            else if (o.kind === "length") {
                const i = n.data.length > o.value
                  , s = n.data.length < o.value;
                (i || s) && (r = this._getOrReturnCtx(n, r),
                i ? ve(r, {
                    code: le.too_big,
                    maximum: o.value,
                    type: "string",
                    inclusive: !0,
                    exact: !0,
                    message: o.message
                }) : s && ve(r, {
                    code: le.too_small,
                    minimum: o.value,
                    type: "string",
                    inclusive: !0,
                    exact: !0,
                    message: o.message
                }),
                e.dirty())
            } else if (o.kind === "email")
                Bm.test(n.data) || (r = this._getOrReturnCtx(n, r),
                ve(r, {
                    validation: "email",
                    code: le.invalid_string,
                    message: o.message
                }),
                e.dirty());
            else if (o.kind === "emoji")
                ni || (ni = new RegExp(Lm,"u")),
                ni.test(n.data) || (r = this._getOrReturnCtx(n, r),
                ve(r, {
                    validation: "emoji",
                    code: le.invalid_string,
                    message: o.message
                }),
                e.dirty());
            else if (o.kind === "uuid")
                Mm.test(n.data) || (r = this._getOrReturnCtx(n, r),
                ve(r, {
                    validation: "uuid",
                    code: le.invalid_string,
                    message: o.message
                }),
                e.dirty());
            else if (o.kind === "nanoid")
                Am.test(n.data) || (r = this._getOrReturnCtx(n, r),
                ve(r, {
                    validation: "nanoid",
                    code: le.invalid_string,
                    message: o.message
                }),
                e.dirty());
            else if (o.kind === "cuid")
                Pm.test(n.data) || (r = this._getOrReturnCtx(n, r),
                ve(r, {
                    validation: "cuid",
                    code: le.invalid_string,
                    message: o.message
                }),
                e.dirty());
            else if (o.kind === "cuid2")
                Em.test(n.data) || (r = this._getOrReturnCtx(n, r),
                ve(r, {
                    validation: "cuid2",
                    code: le.invalid_string,
                    message: o.message
                }),
                e.dirty());
            else if (o.kind === "ulid")
                Dm.test(n.data) || (r = this._getOrReturnCtx(n, r),
                ve(r, {
                    validation: "ulid",
                    code: le.invalid_string,
                    message: o.message
                }),
                e.dirty());
            else if (o.kind === "url")
                try {
                    new URL(n.data)
                } catch {
                    r = this._getOrReturnCtx(n, r),
                    ve(r, {
                        validation: "url",
                        code: le.invalid_string,
                        message: o.message
                    }),
                    e.dirty()
                }
            else
                o.kind === "regex" ? (o.regex.lastIndex = 0,
                o.regex.test(n.data) || (r = this._getOrReturnCtx(n, r),
                ve(r, {
                    validation: "regex",
                    code: le.invalid_string,
                    message: o.message
                }),
                e.dirty())) : o.kind === "trim" ? n.data = n.data.trim() : o.kind === "includes" ? n.data.includes(o.value, o.position) || (r = this._getOrReturnCtx(n, r),
                ve(r, {
                    code: le.invalid_string,
                    validation: {
                        includes: o.value,
                        position: o.position
                    },
                    message: o.message
                }),
                e.dirty()) : o.kind === "toLowerCase" ? n.data = n.data.toLowerCase() : o.kind === "toUpperCase" ? n.data = n.data.toUpperCase() : o.kind === "startsWith" ? n.data.startsWith(o.value) || (r = this._getOrReturnCtx(n, r),
                ve(r, {
                    code: le.invalid_string,
                    validation: {
                        startsWith: o.value
                    },
                    message: o.message
                }),
                e.dirty()) : o.kind === "endsWith" ? n.data.endsWith(o.value) || (r = this._getOrReturnCtx(n, r),
                ve(r, {
                    code: le.invalid_string,
                    validation: {
                        endsWith: o.value
                    },
                    message: o.message
                }),
                e.dirty()) : o.kind === "datetime" ? Xc(o).test(n.data) || (r = this._getOrReturnCtx(n, r),
                ve(r, {
                    code: le.invalid_string,
                    validation: "datetime",
                    message: o.message
                }),
                e.dirty()) : o.kind === "date" ? jm.test(n.data) || (r = this._getOrReturnCtx(n, r),
                ve(r, {
                    code: le.invalid_string,
                    validation: "date",
                    message: o.message
                }),
                e.dirty()) : o.kind === "time" ? Gm(o).test(n.data) || (r = this._getOrReturnCtx(n, r),
                ve(r, {
                    code: le.invalid_string,
                    validation: "time",
                    message: o.message
                }),
                e.dirty()) : o.kind === "duration" ? xm.test(n.data) || (r = this._getOrReturnCtx(n, r),
                ve(r, {
                    validation: "duration",
                    code: le.invalid_string,
                    message: o.message
                }),
                e.dirty()) : o.kind === "ip" ? Ym(n.data, o.version) || (r = this._getOrReturnCtx(n, r),
                ve(r, {
                    validation: "ip",
                    code: le.invalid_string,
                    message: o.message
                }),
                e.dirty()) : o.kind === "jwt" ? Wm(n.data, o.alg) || (r = this._getOrReturnCtx(n, r),
                ve(r, {
                    validation: "jwt",
                    code: le.invalid_string,
                    message: o.message
                }),
                e.dirty()) : o.kind === "cidr" ? $m(n.data, o.version) || (r = this._getOrReturnCtx(n, r),
                ve(r, {
                    validation: "cidr",
                    code: le.invalid_string,
                    message: o.message
                }),
                e.dirty()) : o.kind === "base64" ? Um.test(n.data) || (r = this._getOrReturnCtx(n, r),
                ve(r, {
                    validation: "base64",
                    code: le.invalid_string,
                    message: o.message
                }),
                e.dirty()) : o.kind === "base64url" ? Fm.test(n.data) || (r = this._getOrReturnCtx(n, r),
                ve(r, {
                    validation: "base64url",
                    code: le.invalid_string,
                    message: o.message
                }),
                e.dirty()) : Xe.assertNever(o);
        return {
            status: e.value,
            value: n.data
        }
    }
    _regex(n, a, e) {
        return this.refinement(r => n.test(r), {
            validation: a,
            code: le.invalid_string,
            ...Te.errToObj(e)
        })
    }
    _addCheck(n) {
        return new ba({
            ...this._def,
            checks: [...this._def.checks, n]
        })
    }
    email(n) {
        return this._addCheck({
            kind: "email",
            ...Te.errToObj(n)
        })
    }
    url(n) {
        return this._addCheck({
            kind: "url",
            ...Te.errToObj(n)
        })
    }
    emoji(n) {
        return this._addCheck({
            kind: "emoji",
            ...Te.errToObj(n)
        })
    }
    uuid(n) {
        return this._addCheck({
            kind: "uuid",
            ...Te.errToObj(n)
        })
    }
    nanoid(n) {
        return this._addCheck({
            kind: "nanoid",
            ...Te.errToObj(n)
        })
    }
    cuid(n) {
        return this._addCheck({
            kind: "cuid",
            ...Te.errToObj(n)
        })
    }
    cuid2(n) {
        return this._addCheck({
            kind: "cuid2",
            ...Te.errToObj(n)
        })
    }
    ulid(n) {
        return this._addCheck({
            kind: "ulid",
            ...Te.errToObj(n)
        })
    }
    base64(n) {
        return this._addCheck({
            kind: "base64",
            ...Te.errToObj(n)
        })
    }
    base64url(n) {
        return this._addCheck({
            kind: "base64url",
            ...Te.errToObj(n)
        })
    }
    jwt(n) {
        return this._addCheck({
            kind: "jwt",
            ...Te.errToObj(n)
        })
    }
    ip(n) {
        return this._addCheck({
            kind: "ip",
            ...Te.errToObj(n)
        })
    }
    cidr(n) {
        return this._addCheck({
            kind: "cidr",
            ...Te.errToObj(n)
        })
    }
    datetime(n) {
        var a, e;
        return typeof n == "string" ? this._addCheck({
            kind: "datetime",
            precision: null,
            offset: !1,
            local: !1,
            message: n
        }) : this._addCheck({
            kind: "datetime",
            precision: typeof n?.precision > "u" ? null : n?.precision,
            offset: (a = n?.offset) !== null && a !== void 0 ? a : !1,
            local: (e = n?.local) !== null && e !== void 0 ? e : !1,
            ...Te.errToObj(n?.message)
        })
    }
    date(n) {
        return this._addCheck({
            kind: "date",
            message: n
        })
    }
    time(n) {
        return typeof n == "string" ? this._addCheck({
            kind: "time",
            precision: null,
            message: n
        }) : this._addCheck({
            kind: "time",
            precision: typeof n?.precision > "u" ? null : n?.precision,
            ...Te.errToObj(n?.message)
        })
    }
    duration(n) {
        return this._addCheck({
            kind: "duration",
            ...Te.errToObj(n)
        })
    }
    regex(n, a) {
        return this._addCheck({
            kind: "regex",
            regex: n,
            ...Te.errToObj(a)
        })
    }
    includes(n, a) {
        return this._addCheck({
            kind: "includes",
            value: n,
            position: a?.position,
            ...Te.errToObj(a?.message)
        })
    }
    startsWith(n, a) {
        return this._addCheck({
            kind: "startsWith",
            value: n,
            ...Te.errToObj(a)
        })
    }
    endsWith(n, a) {
        return this._addCheck({
            kind: "endsWith",
            value: n,
            ...Te.errToObj(a)
        })
    }
    min(n, a) {
        return this._addCheck({
            kind: "min",
            value: n,
            ...Te.errToObj(a)
        })
    }
    max(n, a) {
        return this._addCheck({
            kind: "max",
            value: n,
            ...Te.errToObj(a)
        })
    }
    length(n, a) {
        return this._addCheck({
            kind: "length",
            value: n,
            ...Te.errToObj(a)
        })
    }
    nonempty(n) {
        return this.min(1, Te.errToObj(n))
    }
    trim() {
        return new ba({
            ...this._def,
            checks: [...this._def.checks, {
                kind: "trim"
            }]
        })
    }
    toLowerCase() {
        return new ba({
            ...this._def,
            checks: [...this._def.checks, {
                kind: "toLowerCase"
            }]
        })
    }
    toUpperCase() {
        return new ba({
            ...this._def,
            checks: [...this._def.checks, {
                kind: "toUpperCase"
            }]
        })
    }
    get isDatetime() {
        return !!this._def.checks.find(n => n.kind === "datetime")
    }
    get isDate() {
        return !!this._def.checks.find(n => n.kind === "date")
    }
    get isTime() {
        return !!this._def.checks.find(n => n.kind === "time")
    }
    get isDuration() {
        return !!this._def.checks.find(n => n.kind === "duration")
    }
    get isEmail() {
        return !!this._def.checks.find(n => n.kind === "email")
    }
    get isURL() {
        return !!this._def.checks.find(n => n.kind === "url")
    }
    get isEmoji() {
        return !!this._def.checks.find(n => n.kind === "emoji")
    }
    get isUUID() {
        return !!this._def.checks.find(n => n.kind === "uuid")
    }
    get isNANOID() {
        return !!this._def.checks.find(n => n.kind === "nanoid")
    }
    get isCUID() {
        return !!this._def.checks.find(n => n.kind === "cuid")
    }
    get isCUID2() {
        return !!this._def.checks.find(n => n.kind === "cuid2")
    }
    get isULID() {
        return !!this._def.checks.find(n => n.kind === "ulid")
    }
    get isIP() {
        return !!this._def.checks.find(n => n.kind === "ip")
    }
    get isCIDR() {
        return !!this._def.checks.find(n => n.kind === "cidr")
    }
    get isBase64() {
        return !!this._def.checks.find(n => n.kind === "base64")
    }
    get isBase64url() {
        return !!this._def.checks.find(n => n.kind === "base64url")
    }
    get minLength() {
        let n = null;
        for (const a of this._def.checks)
            a.kind === "min" && (n === null || a.value > n) && (n = a.value);
        return n
    }
    get maxLength() {
        let n = null;
        for (const a of this._def.checks)
            a.kind === "max" && (n === null || a.value < n) && (n = a.value);
        return n
    }
}
ba.create = t => {
    var n;
    return new ba({
        checks: [],
        typeName: Ne.ZodString,
        coerce: (n = t?.coerce) !== null && n !== void 0 ? n : !1,
        ...Ge(t)
    })
}
;
function qm(t, n) {
    const a = (t.toString().split(".")[1] || "").length
      , e = (n.toString().split(".")[1] || "").length
      , r = a > e ? a : e
      , o = parseInt(t.toFixed(r).replace(".", ""))
      , i = parseInt(n.toFixed(r).replace(".", ""));
    return o % i / Math.pow(10, r)
}
class gn extends Ye {
    constructor() {
        super(...arguments),
        this.min = this.gte,
        this.max = this.lte,
        this.step = this.multipleOf
    }
    _parse(n) {
        if (this._def.coerce && (n.data = Number(n.data)),
        this._getType(n) !== _e.number) {
            const o = this._getOrReturnCtx(n);
            return ve(o, {
                code: le.invalid_type,
                expected: _e.number,
                received: o.parsedType
            }),
            Ve
        }
        let e;
        const r = new Qt;
        for (const o of this._def.checks)
            o.kind === "int" ? Xe.isInteger(n.data) || (e = this._getOrReturnCtx(n, e),
            ve(e, {
                code: le.invalid_type,
                expected: "integer",
                received: "float",
                message: o.message
            }),
            r.dirty()) : o.kind === "min" ? (o.inclusive ? n.data < o.value : n.data <= o.value) && (e = this._getOrReturnCtx(n, e),
            ve(e, {
                code: le.too_small,
                minimum: o.value,
                type: "number",
                inclusive: o.inclusive,
                exact: !1,
                message: o.message
            }),
            r.dirty()) : o.kind === "max" ? (o.inclusive ? n.data > o.value : n.data >= o.value) && (e = this._getOrReturnCtx(n, e),
            ve(e, {
                code: le.too_big,
                maximum: o.value,
                type: "number",
                inclusive: o.inclusive,
                exact: !1,
                message: o.message
            }),
            r.dirty()) : o.kind === "multipleOf" ? qm(n.data, o.value) !== 0 && (e = this._getOrReturnCtx(n, e),
            ve(e, {
                code: le.not_multiple_of,
                multipleOf: o.value,
                message: o.message
            }),
            r.dirty()) : o.kind === "finite" ? Number.isFinite(n.data) || (e = this._getOrReturnCtx(n, e),
            ve(e, {
                code: le.not_finite,
                message: o.message
            }),
            r.dirty()) : Xe.assertNever(o);
        return {
            status: r.value,
            value: n.data
        }
    }
    gte(n, a) {
        return this.setLimit("min", n, !0, Te.toString(a))
    }
    gt(n, a) {
        return this.setLimit("min", n, !1, Te.toString(a))
    }
    lte(n, a) {
        return this.setLimit("max", n, !0, Te.toString(a))
    }
    lt(n, a) {
        return this.setLimit("max", n, !1, Te.toString(a))
    }
    setLimit(n, a, e, r) {
        return new gn({
            ...this._def,
            checks: [...this._def.checks, {
                kind: n,
                value: a,
                inclusive: e,
                message: Te.toString(r)
            }]
        })
    }
    _addCheck(n) {
        return new gn({
            ...this._def,
            checks: [...this._def.checks, n]
        })
    }
    int(n) {
        return this._addCheck({
            kind: "int",
            message: Te.toString(n)
        })
    }
    positive(n) {
        return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: !1,
            message: Te.toString(n)
        })
    }
    negative(n) {
        return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: !1,
            message: Te.toString(n)
        })
    }
    nonpositive(n) {
        return this._addCheck({
            kind: "max",
            value: 0,
            inclusive: !0,
            message: Te.toString(n)
        })
    }
    nonnegative(n) {
        return this._addCheck({
            kind: "min",
            value: 0,
            inclusive: !0,
            message: Te.toString(n)
        })
    }
    multipleOf(n, a) {
        return this._addCheck({
            kind: "multipleOf",
            value: n,
            message: Te.toString(a)
        })
    }
    finite(n) {
        return this._addCheck({
            kind: "finite",
            message: Te.toString(n)
        })
    }
    safe(n) {
        return this._addCheck({
            kind: "min",
            inclusive: !0,
            value: Number.MIN_SAFE_INTEGER,
            message: Te.toString(n)
        })._addCheck({
            kind: "max",
            inclusive: !0,
            value: Number.MAX_SAFE_INTEGER,
            message: Te.toString(n)
        })
    }
    get minValue() {
        let n = null;
        for (const a of this._def.checks)
            a.kind === "min" && (n === null || a.value > n) && (n = a.value);
        return n
    }
    get maxValue() {
        let n = null;
        for (const a of this._def.checks)
            a.kind === "max" && (n === null || a.value < n) && (n = a.value);
        return n
    }
    get isInt() {
        return !!this._def.checks.find(n => n.kind === "int" || n.kind === "multipleOf" && Xe.isInteger(n.value))
    }
    get isFinite() {
        let n = null
          , a = null;
        for (const e of this._def.checks) {
            if (e.kind === "finite" || e.kind === "int" || e.kind === "multipleOf")
                return !0;
            e.kind === "min" ? (a === null || e.value > a) && (a = e.value) : e.kind === "max" && (n === null || e.value < n) && (n = e.value)
        }
        return Number.isFinite(a) && Number.isFinite(n)
    }
}
gn.create = t => new gn({
    checks: [],
    typeName: Ne.ZodNumber,
    coerce: t?.coerce || !1,
    ...Ge(t)
});
class pn extends Ye {
    constructor() {
        super(...arguments),
        this.min = this.gte,
        this.max = this.lte
    }
    _parse(n) {
        if (this._def.coerce)
            try {
                n.data = BigInt(n.data)
            } catch {
                return this._getInvalidInput(n)
            }
        if (this._getType(n) !== _e.bigint)
            return this._getInvalidInput(n);
        let e;
        const r = new Qt;
        for (const o of this._def.checks)
            o.kind === "min" ? (o.inclusive ? n.data < o.value : n.data <= o.value) && (e = this._getOrReturnCtx(n, e),
            ve(e, {
                code: le.too_small,
                type: "bigint",
                minimum: o.value,
                inclusive: o.inclusive,
                message: o.message
            }),
            r.dirty()) : o.kind === "max" ? (o.inclusive ? n.data > o.value : n.data >= o.value) && (e = this._getOrReturnCtx(n, e),
            ve(e, {
                code: le.too_big,
                type: "bigint",
                maximum: o.value,
                inclusive: o.inclusive,
                message: o.message
            }),
            r.dirty()) : o.kind === "multipleOf" ? n.data % o.value !== BigInt(0) && (e = this._getOrReturnCtx(n, e),
            ve(e, {
                code: le.not_multiple_of,
                multipleOf: o.value,
                message: o.message
            }),
            r.dirty()) : Xe.assertNever(o);
        return {
            status: r.value,
            value: n.data
        }
    }
    _getInvalidInput(n) {
        const a = this._getOrReturnCtx(n);
        return ve(a, {
            code: le.invalid_type,
            expected: _e.bigint,
            received: a.parsedType
        }),
        Ve
    }
    gte(n, a) {
        return this.setLimit("min", n, !0, Te.toString(a))
    }
    gt(n, a) {
        return this.setLimit("min", n, !1, Te.toString(a))
    }
    lte(n, a) {
        return this.setLimit("max", n, !0, Te.toString(a))
    }
    lt(n, a) {
        return this.setLimit("max", n, !1, Te.toString(a))
    }
    setLimit(n, a, e, r) {
        return new pn({
            ...this._def,
            checks: [...this._def.checks, {
                kind: n,
                value: a,
                inclusive: e,
                message: Te.toString(r)
            }]
        })
    }
    _addCheck(n) {
        return new pn({
            ...this._def,
            checks: [...this._def.checks, n]
        })
    }
    positive(n) {
        return this._addCheck({
            kind: "min",
            value: BigInt(0),
            inclusive: !1,
            message: Te.toString(n)
        })
    }
    negative(n) {
        return this._addCheck({
            kind: "max",
            value: BigInt(0),
            inclusive: !1,
            message: Te.toString(n)
        })
    }
    nonpositive(n) {
        return this._addCheck({
            kind: "max",
            value: BigInt(0),
            inclusive: !0,
            message: Te.toString(n)
        })
    }
    nonnegative(n) {
        return this._addCheck({
            kind: "min",
            value: BigInt(0),
            inclusive: !0,
            message: Te.toString(n)
        })
    }
    multipleOf(n, a) {
        return this._addCheck({
            kind: "multipleOf",
            value: n,
            message: Te.toString(a)
        })
    }
    get minValue() {
        let n = null;
        for (const a of this._def.checks)
            a.kind === "min" && (n === null || a.value > n) && (n = a.value);
        return n
    }
    get maxValue() {
        let n = null;
        for (const a of this._def.checks)
            a.kind === "max" && (n === null || a.value < n) && (n = a.value);
        return n
    }
}
pn.create = t => {
    var n;
    return new pn({
        checks: [],
        typeName: Ne.ZodBigInt,
        coerce: (n = t?.coerce) !== null && n !== void 0 ? n : !1,
        ...Ge(t)
    })
}
;
class Hr extends Ye {
    _parse(n) {
        if (this._def.coerce && (n.data = !!n.data),
        this._getType(n) !== _e.boolean) {
            const e = this._getOrReturnCtx(n);
            return ve(e, {
                code: le.invalid_type,
                expected: _e.boolean,
                received: e.parsedType
            }),
            Ve
        }
        return aa(n.data)
    }
}
Hr.create = t => new Hr({
    typeName: Ne.ZodBoolean,
    coerce: t?.coerce || !1,
    ...Ge(t)
});
class xn extends Ye {
    _parse(n) {
        if (this._def.coerce && (n.data = new Date(n.data)),
        this._getType(n) !== _e.date) {
            const o = this._getOrReturnCtx(n);
            return ve(o, {
                code: le.invalid_type,
                expected: _e.date,
                received: o.parsedType
            }),
            Ve
        }
        if (isNaN(n.data.getTime())) {
            const o = this._getOrReturnCtx(n);
            return ve(o, {
                code: le.invalid_date
            }),
            Ve
        }
        const e = new Qt;
        let r;
        for (const o of this._def.checks)
            o.kind === "min" ? n.data.getTime() < o.value && (r = this._getOrReturnCtx(n, r),
            ve(r, {
                code: le.too_small,
                message: o.message,
                inclusive: !0,
                exact: !1,
                minimum: o.value,
                type: "date"
            }),
            e.dirty()) : o.kind === "max" ? n.data.getTime() > o.value && (r = this._getOrReturnCtx(n, r),
            ve(r, {
                code: le.too_big,
                message: o.message,
                inclusive: !0,
                exact: !1,
                maximum: o.value,
                type: "date"
            }),
            e.dirty()) : Xe.assertNever(o);
        return {
            status: e.value,
            value: new Date(n.data.getTime())
        }
    }
    _addCheck(n) {
        return new xn({
            ...this._def,
            checks: [...this._def.checks, n]
        })
    }
    min(n, a) {
        return this._addCheck({
            kind: "min",
            value: n.getTime(),
            message: Te.toString(a)
        })
    }
    max(n, a) {
        return this._addCheck({
            kind: "max",
            value: n.getTime(),
            message: Te.toString(a)
        })
    }
    get minDate() {
        let n = null;
        for (const a of this._def.checks)
            a.kind === "min" && (n === null || a.value > n) && (n = a.value);
        return n != null ? new Date(n) : null
    }
    get maxDate() {
        let n = null;
        for (const a of this._def.checks)
            a.kind === "max" && (n === null || a.value < n) && (n = a.value);
        return n != null ? new Date(n) : null
    }
}
xn.create = t => new xn({
    checks: [],
    coerce: t?.coerce || !1,
    typeName: Ne.ZodDate,
    ...Ge(t)
});
class Eo extends Ye {
    _parse(n) {
        if (this._getType(n) !== _e.symbol) {
            const e = this._getOrReturnCtx(n);
            return ve(e, {
                code: le.invalid_type,
                expected: _e.symbol,
                received: e.parsedType
            }),
            Ve
        }
        return aa(n.data)
    }
}
Eo.create = t => new Eo({
    typeName: Ne.ZodSymbol,
    ...Ge(t)
});
class Vr extends Ye {
    _parse(n) {
        if (this._getType(n) !== _e.undefined) {
            const e = this._getOrReturnCtx(n);
            return ve(e, {
                code: le.invalid_type,
                expected: _e.undefined,
                received: e.parsedType
            }),
            Ve
        }
        return aa(n.data)
    }
}
Vr.create = t => new Vr({
    typeName: Ne.ZodUndefined,
    ...Ge(t)
});
class Ur extends Ye {
    _parse(n) {
        if (this._getType(n) !== _e.null) {
            const e = this._getOrReturnCtx(n);
            return ve(e, {
                code: le.invalid_type,
                expected: _e.null,
                received: e.parsedType
            }),
            Ve
        }
        return aa(n.data)
    }
}
Ur.create = t => new Ur({
    typeName: Ne.ZodNull,
    ...Ge(t)
});
class rr extends Ye {
    constructor() {
        super(...arguments),
        this._any = !0
    }
    _parse(n) {
        return aa(n.data)
    }
}
rr.create = t => new rr({
    typeName: Ne.ZodAny,
    ...Ge(t)
});
class Pn extends Ye {
    constructor() {
        super(...arguments),
        this._unknown = !0
    }
    _parse(n) {
        return aa(n.data)
    }
}
Pn.create = t => new Pn({
    typeName: Ne.ZodUnknown,
    ...Ge(t)
});
class Qa extends Ye {
    _parse(n) {
        const a = this._getOrReturnCtx(n);
        return ve(a, {
            code: le.invalid_type,
            expected: _e.never,
            received: a.parsedType
        }),
        Ve
    }
}
Qa.create = t => new Qa({
    typeName: Ne.ZodNever,
    ...Ge(t)
});
class Do extends Ye {
    _parse(n) {
        if (this._getType(n) !== _e.undefined) {
            const e = this._getOrReturnCtx(n);
            return ve(e, {
                code: le.invalid_type,
                expected: _e.void,
                received: e.parsedType
            }),
            Ve
        }
        return aa(n.data)
    }
}
Do.create = t => new Do({
    typeName: Ne.ZodVoid,
    ...Ge(t)
});
class _a extends Ye {
    _parse(n) {
        const {ctx: a, status: e} = this._processInputParams(n)
          , r = this._def;
        if (a.parsedType !== _e.array)
            return ve(a, {
                code: le.invalid_type,
                expected: _e.array,
                received: a.parsedType
            }),
            Ve;
        if (r.exactLength !== null) {
            const i = a.data.length > r.exactLength.value
              , s = a.data.length < r.exactLength.value;
            (i || s) && (ve(a, {
                code: i ? le.too_big : le.too_small,
                minimum: s ? r.exactLength.value : void 0,
                maximum: i ? r.exactLength.value : void 0,
                type: "array",
                inclusive: !0,
                exact: !0,
                message: r.exactLength.message
            }),
            e.dirty())
        }
        if (r.minLength !== null && a.data.length < r.minLength.value && (ve(a, {
            code: le.too_small,
            minimum: r.minLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: r.minLength.message
        }),
        e.dirty()),
        r.maxLength !== null && a.data.length > r.maxLength.value && (ve(a, {
            code: le.too_big,
            maximum: r.maxLength.value,
            type: "array",
            inclusive: !0,
            exact: !1,
            message: r.maxLength.message
        }),
        e.dirty()),
        a.common.async)
            return Promise.all([...a.data].map( (i, s) => r.type._parseAsync(new Na(a,i,a.path,s)))).then(i => Qt.mergeArray(e, i));
        const o = [...a.data].map( (i, s) => r.type._parseSync(new Na(a,i,a.path,s)));
        return Qt.mergeArray(e, o)
    }
    get element() {
        return this._def.type
    }
    min(n, a) {
        return new _a({
            ...this._def,
            minLength: {
                value: n,
                message: Te.toString(a)
            }
        })
    }
    max(n, a) {
        return new _a({
            ...this._def,
            maxLength: {
                value: n,
                message: Te.toString(a)
            }
        })
    }
    length(n, a) {
        return new _a({
            ...this._def,
            exactLength: {
                value: n,
                message: Te.toString(a)
            }
        })
    }
    nonempty(n) {
        return this.min(1, n)
    }
}
_a.create = (t, n) => new _a({
    type: t,
    minLength: null,
    maxLength: null,
    exactLength: null,
    typeName: Ne.ZodArray,
    ...Ge(n)
});
function Wn(t) {
    if (t instanceof Ct) {
        const n = {};
        for (const a in t.shape) {
            const e = t.shape[a];
            n[a] = La.create(Wn(e))
        }
        return new Ct({
            ...t._def,
            shape: () => n
        })
    } else
        return t instanceof _a ? new _a({
            ...t._def,
            type: Wn(t.element)
        }) : t instanceof La ? La.create(Wn(t.unwrap())) : t instanceof fn ? fn.create(Wn(t.unwrap())) : t instanceof Ha ? Ha.create(t.items.map(n => Wn(n))) : t
}
class Ct extends Ye {
    constructor() {
        super(...arguments),
        this._cached = null,
        this.nonstrict = this.passthrough,
        this.augment = this.extend
    }
    _getCached() {
        if (this._cached !== null)
            return this._cached;
        const n = this._def.shape()
          , a = Xe.objectKeys(n);
        return this._cached = {
            shape: n,
            keys: a
        }
    }
    _parse(n) {
        if (this._getType(n) !== _e.object) {
            const d = this._getOrReturnCtx(n);
            return ve(d, {
                code: le.invalid_type,
                expected: _e.object,
                received: d.parsedType
            }),
            Ve
        }
        const {status: e, ctx: r} = this._processInputParams(n)
          , {shape: o, keys: i} = this._getCached()
          , s = [];
        if (!(this._def.catchall instanceof Qa && this._def.unknownKeys === "strip"))
            for (const d in r.data)
                i.includes(d) || s.push(d);
        const l = [];
        for (const d of i) {
            const p = o[d]
              , g = r.data[d];
            l.push({
                key: {
                    status: "valid",
                    value: d
                },
                value: p._parse(new Na(r,g,r.path,d)),
                alwaysSet: d in r.data
            })
        }
        if (this._def.catchall instanceof Qa) {
            const d = this._def.unknownKeys;
            if (d === "passthrough")
                for (const p of s)
                    l.push({
                        key: {
                            status: "valid",
                            value: p
                        },
                        value: {
                            status: "valid",
                            value: r.data[p]
                        }
                    });
            else if (d === "strict")
                s.length > 0 && (ve(r, {
                    code: le.unrecognized_keys,
                    keys: s
                }),
                e.dirty());
            else if (d !== "strip")
                throw new Error("Internal ZodObject error: invalid unknownKeys value.")
        } else {
            const d = this._def.catchall;
            for (const p of s) {
                const g = r.data[p];
                l.push({
                    key: {
                        status: "valid",
                        value: p
                    },
                    value: d._parse(new Na(r,g,r.path,p)),
                    alwaysSet: p in r.data
                })
            }
        }
        return r.common.async ? Promise.resolve().then(async () => {
            const d = [];
            for (const p of l) {
                const g = await p.key
                  , v = await p.value;
                d.push({
                    key: g,
                    value: v,
                    alwaysSet: p.alwaysSet
                })
            }
            return d
        }
        ).then(d => Qt.mergeObjectSync(e, d)) : Qt.mergeObjectSync(e, l)
    }
    get shape() {
        return this._def.shape()
    }
    strict(n) {
        return Te.errToObj,
        new Ct({
            ...this._def,
            unknownKeys: "strict",
            ...n !== void 0 ? {
                errorMap: (a, e) => {
                    var r, o, i, s;
                    const l = (i = (o = (r = this._def).errorMap) === null || o === void 0 ? void 0 : o.call(r, a, e).message) !== null && i !== void 0 ? i : e.defaultError;
                    return a.code === "unrecognized_keys" ? {
                        message: (s = Te.errToObj(n).message) !== null && s !== void 0 ? s : l
                    } : {
                        message: l
                    }
                }
            } : {}
        })
    }
    strip() {
        return new Ct({
            ...this._def,
            unknownKeys: "strip"
        })
    }
    passthrough() {
        return new Ct({
            ...this._def,
            unknownKeys: "passthrough"
        })
    }
    extend(n) {
        return new Ct({
            ...this._def,
            shape: () => ({
                ...this._def.shape(),
                ...n
            })
        })
    }
    merge(n) {
        return new Ct({
            unknownKeys: n._def.unknownKeys,
            catchall: n._def.catchall,
            shape: () => ({
                ...this._def.shape(),
                ...n._def.shape()
            }),
            typeName: Ne.ZodObject
        })
    }
    setKey(n, a) {
        return this.augment({
            [n]: a
        })
    }
    catchall(n) {
        return new Ct({
            ...this._def,
            catchall: n
        })
    }
    pick(n) {
        const a = {};
        return Xe.objectKeys(n).forEach(e => {
            n[e] && this.shape[e] && (a[e] = this.shape[e])
        }
        ),
        new Ct({
            ...this._def,
            shape: () => a
        })
    }
    omit(n) {
        const a = {};
        return Xe.objectKeys(this.shape).forEach(e => {
            n[e] || (a[e] = this.shape[e])
        }
        ),
        new Ct({
            ...this._def,
            shape: () => a
        })
    }
    deepPartial() {
        return Wn(this)
    }
    partial(n) {
        const a = {};
        return Xe.objectKeys(this.shape).forEach(e => {
            const r = this.shape[e];
            n && !n[e] ? a[e] = r : a[e] = r.optional()
        }
        ),
        new Ct({
            ...this._def,
            shape: () => a
        })
    }
    required(n) {
        const a = {};
        return Xe.objectKeys(this.shape).forEach(e => {
            if (n && !n[e])
                a[e] = this.shape[e];
            else {
                let o = this.shape[e];
                for (; o instanceof La; )
                    o = o._def.innerType;
                a[e] = o
            }
        }
        ),
        new Ct({
            ...this._def,
            shape: () => a
        })
    }
    keyof() {
        return Jc(Xe.objectKeys(this.shape))
    }
}
Ct.create = (t, n) => new Ct({
    shape: () => t,
    unknownKeys: "strip",
    catchall: Qa.create(),
    typeName: Ne.ZodObject,
    ...Ge(n)
});
Ct.strictCreate = (t, n) => new Ct({
    shape: () => t,
    unknownKeys: "strict",
    catchall: Qa.create(),
    typeName: Ne.ZodObject,
    ...Ge(n)
});
Ct.lazycreate = (t, n) => new Ct({
    shape: t,
    unknownKeys: "strip",
    catchall: Qa.create(),
    typeName: Ne.ZodObject,
    ...Ge(n)
});
class Fr extends Ye {
    _parse(n) {
        const {ctx: a} = this._processInputParams(n)
          , e = this._def.options;
        function r(o) {
            for (const s of o)
                if (s.result.status === "valid")
                    return s.result;
            for (const s of o)
                if (s.result.status === "dirty")
                    return a.common.issues.push(...s.ctx.common.issues),
                    s.result;
            const i = o.map(s => new ia(s.ctx.common.issues));
            return ve(a, {
                code: le.invalid_union,
                unionErrors: i
            }),
            Ve
        }
        if (a.common.async)
            return Promise.all(e.map(async o => {
                const i = {
                    ...a,
                    common: {
                        ...a.common,
                        issues: []
                    },
                    parent: null
                };
                return {
                    result: await o._parseAsync({
                        data: a.data,
                        path: a.path,
                        parent: i
                    }),
                    ctx: i
                }
            }
            )).then(r);
        {
            let o;
            const i = [];
            for (const l of e) {
                const d = {
                    ...a,
                    common: {
                        ...a.common,
                        issues: []
                    },
                    parent: null
                }
                  , p = l._parseSync({
                    data: a.data,
                    path: a.path,
                    parent: d
                });
                if (p.status === "valid")
                    return p;
                p.status === "dirty" && !o && (o = {
                    result: p,
                    ctx: d
                }),
                d.common.issues.length && i.push(d.common.issues)
            }
            if (o)
                return a.common.issues.push(...o.ctx.common.issues),
                o.result;
            const s = i.map(l => new ia(l));
            return ve(a, {
                code: le.invalid_union,
                unionErrors: s
            }),
            Ve
        }
    }
    get options() {
        return this._def.options
    }
}
Fr.create = (t, n) => new Fr({
    options: t,
    typeName: Ne.ZodUnion,
    ...Ge(n)
});
const Wa = t => t instanceof Yr ? Wa(t.schema) : t instanceof Ta ? Wa(t.innerType()) : t instanceof Wr ? [t.value] : t instanceof vn ? t.options : t instanceof $r ? Xe.objectValues(t.enum) : t instanceof qr ? Wa(t._def.innerType) : t instanceof Vr ? [void 0] : t instanceof Ur ? [null] : t instanceof La ? [void 0, ...Wa(t.unwrap())] : t instanceof fn ? [null, ...Wa(t.unwrap())] : t instanceof ls || t instanceof Zr ? Wa(t.unwrap()) : t instanceof zr ? Wa(t._def.innerType) : [];
class Yo extends Ye {
    _parse(n) {
        const {ctx: a} = this._processInputParams(n);
        if (a.parsedType !== _e.object)
            return ve(a, {
                code: le.invalid_type,
                expected: _e.object,
                received: a.parsedType
            }),
            Ve;
        const e = this.discriminator
          , r = a.data[e]
          , o = this.optionsMap.get(r);
        return o ? a.common.async ? o._parseAsync({
            data: a.data,
            path: a.path,
            parent: a
        }) : o._parseSync({
            data: a.data,
            path: a.path,
            parent: a
        }) : (ve(a, {
            code: le.invalid_union_discriminator,
            options: Array.from(this.optionsMap.keys()),
            path: [e]
        }),
        Ve)
    }
    get discriminator() {
        return this._def.discriminator
    }
    get options() {
        return this._def.options
    }
    get optionsMap() {
        return this._def.optionsMap
    }
    static create(n, a, e) {
        const r = new Map;
        for (const o of a) {
            const i = Wa(o.shape[n]);
            if (!i.length)
                throw new Error(`A discriminator value for key \`${n}\` could not be extracted from all schema options`);
            for (const s of i) {
                if (r.has(s))
                    throw new Error(`Discriminator property ${String(n)} has duplicate value ${String(s)}`);
                r.set(s, o)
            }
        }
        return new Yo({
            typeName: Ne.ZodDiscriminatedUnion,
            discriminator: n,
            options: a,
            optionsMap: r,
            ...Ge(e)
        })
    }
}
function Li(t, n) {
    const a = $a(t)
      , e = $a(n);
    if (t === n)
        return {
            valid: !0,
            data: t
        };
    if (a === _e.object && e === _e.object) {
        const r = Xe.objectKeys(n)
          , o = Xe.objectKeys(t).filter(s => r.indexOf(s) !== -1)
          , i = {
            ...t,
            ...n
        };
        for (const s of o) {
            const l = Li(t[s], n[s]);
            if (!l.valid)
                return {
                    valid: !1
                };
            i[s] = l.data
        }
        return {
            valid: !0,
            data: i
        }
    } else if (a === _e.array && e === _e.array) {
        if (t.length !== n.length)
            return {
                valid: !1
            };
        const r = [];
        for (let o = 0; o < t.length; o++) {
            const i = t[o]
              , s = n[o]
              , l = Li(i, s);
            if (!l.valid)
                return {
                    valid: !1
                };
            r.push(l.data)
        }
        return {
            valid: !0,
            data: r
        }
    } else
        return a === _e.date && e === _e.date && +t == +n ? {
            valid: !0,
            data: t
        } : {
            valid: !1
        }
}
class jr extends Ye {
    _parse(n) {
        const {status: a, ctx: e} = this._processInputParams(n)
          , r = (o, i) => {
            if (xi(o) || xi(i))
                return Ve;
            const s = Li(o.value, i.value);
            return s.valid ? ((Bi(o) || Bi(i)) && a.dirty(),
            {
                status: a.value,
                value: s.data
            }) : (ve(e, {
                code: le.invalid_intersection_types
            }),
            Ve)
        }
        ;
        return e.common.async ? Promise.all([this._def.left._parseAsync({
            data: e.data,
            path: e.path,
            parent: e
        }), this._def.right._parseAsync({
            data: e.data,
            path: e.path,
            parent: e
        })]).then( ([o,i]) => r(o, i)) : r(this._def.left._parseSync({
            data: e.data,
            path: e.path,
            parent: e
        }), this._def.right._parseSync({
            data: e.data,
            path: e.path,
            parent: e
        }))
    }
}
jr.create = (t, n, a) => new jr({
    left: t,
    right: n,
    typeName: Ne.ZodIntersection,
    ...Ge(a)
});
class Ha extends Ye {
    _parse(n) {
        const {status: a, ctx: e} = this._processInputParams(n);
        if (e.parsedType !== _e.array)
            return ve(e, {
                code: le.invalid_type,
                expected: _e.array,
                received: e.parsedType
            }),
            Ve;
        if (e.data.length < this._def.items.length)
            return ve(e, {
                code: le.too_small,
                minimum: this._def.items.length,
                inclusive: !0,
                exact: !1,
                type: "array"
            }),
            Ve;
        !this._def.rest && e.data.length > this._def.items.length && (ve(e, {
            code: le.too_big,
            maximum: this._def.items.length,
            inclusive: !0,
            exact: !1,
            type: "array"
        }),
        a.dirty());
        const o = [...e.data].map( (i, s) => {
            const l = this._def.items[s] || this._def.rest;
            return l ? l._parse(new Na(e,i,e.path,s)) : null
        }
        ).filter(i => !!i);
        return e.common.async ? Promise.all(o).then(i => Qt.mergeArray(a, i)) : Qt.mergeArray(a, o)
    }
    get items() {
        return this._def.items
    }
    rest(n) {
        return new Ha({
            ...this._def,
            rest: n
        })
    }
}
Ha.create = (t, n) => {
    if (!Array.isArray(t))
        throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
    return new Ha({
        items: t,
        typeName: Ne.ZodTuple,
        rest: null,
        ...Ge(n)
    })
}
;
class Gr extends Ye {
    get keySchema() {
        return this._def.keyType
    }
    get valueSchema() {
        return this._def.valueType
    }
    _parse(n) {
        const {status: a, ctx: e} = this._processInputParams(n);
        if (e.parsedType !== _e.object)
            return ve(e, {
                code: le.invalid_type,
                expected: _e.object,
                received: e.parsedType
            }),
            Ve;
        const r = []
          , o = this._def.keyType
          , i = this._def.valueType;
        for (const s in e.data)
            r.push({
                key: o._parse(new Na(e,s,e.path,s)),
                value: i._parse(new Na(e,e.data[s],e.path,s)),
                alwaysSet: s in e.data
            });
        return e.common.async ? Qt.mergeObjectAsync(a, r) : Qt.mergeObjectSync(a, r)
    }
    get element() {
        return this._def.valueType
    }
    static create(n, a, e) {
        return a instanceof Ye ? new Gr({
            keyType: n,
            valueType: a,
            typeName: Ne.ZodRecord,
            ...Ge(e)
        }) : new Gr({
            keyType: ba.create(),
            valueType: n,
            typeName: Ne.ZodRecord,
            ...Ge(a)
        })
    }
}
class Mo extends Ye {
    get keySchema() {
        return this._def.keyType
    }
    get valueSchema() {
        return this._def.valueType
    }
    _parse(n) {
        const {status: a, ctx: e} = this._processInputParams(n);
        if (e.parsedType !== _e.map)
            return ve(e, {
                code: le.invalid_type,
                expected: _e.map,
                received: e.parsedType
            }),
            Ve;
        const r = this._def.keyType
          , o = this._def.valueType
          , i = [...e.data.entries()].map( ([s,l], d) => ({
            key: r._parse(new Na(e,s,e.path,[d, "key"])),
            value: o._parse(new Na(e,l,e.path,[d, "value"]))
        }));
        if (e.common.async) {
            const s = new Map;
            return Promise.resolve().then(async () => {
                for (const l of i) {
                    const d = await l.key
                      , p = await l.value;
                    if (d.status === "aborted" || p.status === "aborted")
                        return Ve;
                    (d.status === "dirty" || p.status === "dirty") && a.dirty(),
                    s.set(d.value, p.value)
                }
                return {
                    status: a.value,
                    value: s
                }
            }
            )
        } else {
            const s = new Map;
            for (const l of i) {
                const d = l.key
                  , p = l.value;
                if (d.status === "aborted" || p.status === "aborted")
                    return Ve;
                (d.status === "dirty" || p.status === "dirty") && a.dirty(),
                s.set(d.value, p.value)
            }
            return {
                status: a.value,
                value: s
            }
        }
    }
}
Mo.create = (t, n, a) => new Mo({
    valueType: n,
    keyType: t,
    typeName: Ne.ZodMap,
    ...Ge(a)
});
class Bn extends Ye {
    _parse(n) {
        const {status: a, ctx: e} = this._processInputParams(n);
        if (e.parsedType !== _e.set)
            return ve(e, {
                code: le.invalid_type,
                expected: _e.set,
                received: e.parsedType
            }),
            Ve;
        const r = this._def;
        r.minSize !== null && e.data.size < r.minSize.value && (ve(e, {
            code: le.too_small,
            minimum: r.minSize.value,
            type: "set",
            inclusive: !0,
            exact: !1,
            message: r.minSize.message
        }),
        a.dirty()),
        r.maxSize !== null && e.data.size > r.maxSize.value && (ve(e, {
            code: le.too_big,
            maximum: r.maxSize.value,
            type: "set",
            inclusive: !0,
            exact: !1,
            message: r.maxSize.message
        }),
        a.dirty());
        const o = this._def.valueType;
        function i(l) {
            const d = new Set;
            for (const p of l) {
                if (p.status === "aborted")
                    return Ve;
                p.status === "dirty" && a.dirty(),
                d.add(p.value)
            }
            return {
                status: a.value,
                value: d
            }
        }
        const s = [...e.data.values()].map( (l, d) => o._parse(new Na(e,l,e.path,d)));
        return e.common.async ? Promise.all(s).then(l => i(l)) : i(s)
    }
    min(n, a) {
        return new Bn({
            ...this._def,
            minSize: {
                value: n,
                message: Te.toString(a)
            }
        })
    }
    max(n, a) {
        return new Bn({
            ...this._def,
            maxSize: {
                value: n,
                message: Te.toString(a)
            }
        })
    }
    size(n, a) {
        return this.min(n, a).max(n, a)
    }
    nonempty(n) {
        return this.min(1, n)
    }
}
Bn.create = (t, n) => new Bn({
    valueType: t,
    minSize: null,
    maxSize: null,
    typeName: Ne.ZodSet,
    ...Ge(n)
});
class Jn extends Ye {
    constructor() {
        super(...arguments),
        this.validate = this.implement
    }
    _parse(n) {
        const {ctx: a} = this._processInputParams(n);
        if (a.parsedType !== _e.function)
            return ve(a, {
                code: le.invalid_type,
                expected: _e.function,
                received: a.parsedType
            }),
            Ve;
        function e(s, l) {
            return Io({
                data: s,
                path: a.path,
                errorMaps: [a.common.contextualErrorMap, a.schemaErrorMap, Co(), nr].filter(d => !!d),
                issueData: {
                    code: le.invalid_arguments,
                    argumentsError: l
                }
            })
        }
        function r(s, l) {
            return Io({
                data: s,
                path: a.path,
                errorMaps: [a.common.contextualErrorMap, a.schemaErrorMap, Co(), nr].filter(d => !!d),
                issueData: {
                    code: le.invalid_return_type,
                    returnTypeError: l
                }
            })
        }
        const o = {
            errorMap: a.common.contextualErrorMap
        }
          , i = a.data;
        if (this._def.returns instanceof or) {
            const s = this;
            return aa(async function(...l) {
                const d = new ia([])
                  , p = await s._def.args.parseAsync(l, o).catch(f => {
                    throw d.addIssue(e(l, f)),
                    d
                }
                )
                  , g = await Reflect.apply(i, this, p);
                return await s._def.returns._def.type.parseAsync(g, o).catch(f => {
                    throw d.addIssue(r(g, f)),
                    d
                }
                )
            })
        } else {
            const s = this;
            return aa(function(...l) {
                const d = s._def.args.safeParse(l, o);
                if (!d.success)
                    throw new ia([e(l, d.error)]);
                const p = Reflect.apply(i, this, d.data)
                  , g = s._def.returns.safeParse(p, o);
                if (!g.success)
                    throw new ia([r(p, g.error)]);
                return g.data
            })
        }
    }
    parameters() {
        return this._def.args
    }
    returnType() {
        return this._def.returns
    }
    args(...n) {
        return new Jn({
            ...this._def,
            args: Ha.create(n).rest(Pn.create())
        })
    }
    returns(n) {
        return new Jn({
            ...this._def,
            returns: n
        })
    }
    implement(n) {
        return this.parse(n)
    }
    strictImplement(n) {
        return this.parse(n)
    }
    static create(n, a, e) {
        return new Jn({
            args: n || Ha.create([]).rest(Pn.create()),
            returns: a || Pn.create(),
            typeName: Ne.ZodFunction,
            ...Ge(e)
        })
    }
}
class Yr extends Ye {
    get schema() {
        return this._def.getter()
    }
    _parse(n) {
        const {ctx: a} = this._processInputParams(n);
        return this._def.getter()._parse({
            data: a.data,
            path: a.path,
            parent: a
        })
    }
}
Yr.create = (t, n) => new Yr({
    getter: t,
    typeName: Ne.ZodLazy,
    ...Ge(n)
});
class Wr extends Ye {
    _parse(n) {
        if (n.data !== this._def.value) {
            const a = this._getOrReturnCtx(n);
            return ve(a, {
                received: a.data,
                code: le.invalid_literal,
                expected: this._def.value
            }),
            Ve
        }
        return {
            status: "valid",
            value: n.data
        }
    }
    get value() {
        return this._def.value
    }
}
Wr.create = (t, n) => new Wr({
    value: t,
    typeName: Ne.ZodLiteral,
    ...Ge(n)
});
function Jc(t, n) {
    return new vn({
        values: t,
        typeName: Ne.ZodEnum,
        ...Ge(n)
    })
}
class vn extends Ye {
    constructor() {
        super(...arguments),
        Tr.set(this, void 0)
    }
    _parse(n) {
        if (typeof n.data != "string") {
            const a = this._getOrReturnCtx(n)
              , e = this._def.values;
            return ve(a, {
                expected: Xe.joinValues(e),
                received: a.parsedType,
                code: le.invalid_type
            }),
            Ve
        }
        if (Po(this, Tr) || Zc(this, Tr, new Set(this._def.values)),
        !Po(this, Tr).has(n.data)) {
            const a = this._getOrReturnCtx(n)
              , e = this._def.values;
            return ve(a, {
                received: a.data,
                code: le.invalid_enum_value,
                options: e
            }),
            Ve
        }
        return aa(n.data)
    }
    get options() {
        return this._def.values
    }
    get enum() {
        const n = {};
        for (const a of this._def.values)
            n[a] = a;
        return n
    }
    get Values() {
        const n = {};
        for (const a of this._def.values)
            n[a] = a;
        return n
    }
    get Enum() {
        const n = {};
        for (const a of this._def.values)
            n[a] = a;
        return n
    }
    extract(n, a=this._def) {
        return vn.create(n, {
            ...this._def,
            ...a
        })
    }
    exclude(n, a=this._def) {
        return vn.create(this.options.filter(e => !n.includes(e)), {
            ...this._def,
            ...a
        })
    }
}
Tr = new WeakMap;
vn.create = Jc;
class $r extends Ye {
    constructor() {
        super(...arguments),
        Cr.set(this, void 0)
    }
    _parse(n) {
        const a = Xe.getValidEnumValues(this._def.values)
          , e = this._getOrReturnCtx(n);
        if (e.parsedType !== _e.string && e.parsedType !== _e.number) {
            const r = Xe.objectValues(a);
            return ve(e, {
                expected: Xe.joinValues(r),
                received: e.parsedType,
                code: le.invalid_type
            }),
            Ve
        }
        if (Po(this, Cr) || Zc(this, Cr, new Set(Xe.getValidEnumValues(this._def.values))),
        !Po(this, Cr).has(n.data)) {
            const r = Xe.objectValues(a);
            return ve(e, {
                received: e.data,
                code: le.invalid_enum_value,
                options: r
            }),
            Ve
        }
        return aa(n.data)
    }
    get enum() {
        return this._def.values
    }
}
Cr = new WeakMap;
$r.create = (t, n) => new $r({
    values: t,
    typeName: Ne.ZodNativeEnum,
    ...Ge(n)
});
class or extends Ye {
    unwrap() {
        return this._def.type
    }
    _parse(n) {
        const {ctx: a} = this._processInputParams(n);
        if (a.parsedType !== _e.promise && a.common.async === !1)
            return ve(a, {
                code: le.invalid_type,
                expected: _e.promise,
                received: a.parsedType
            }),
            Ve;
        const e = a.parsedType === _e.promise ? a.data : Promise.resolve(a.data);
        return aa(e.then(r => this._def.type.parseAsync(r, {
            path: a.path,
            errorMap: a.common.contextualErrorMap
        })))
    }
}
or.create = (t, n) => new or({
    type: t,
    typeName: Ne.ZodPromise,
    ...Ge(n)
});
class Ta extends Ye {
    innerType() {
        return this._def.schema
    }
    sourceType() {
        return this._def.schema._def.typeName === Ne.ZodEffects ? this._def.schema.sourceType() : this._def.schema
    }
    _parse(n) {
        const {status: a, ctx: e} = this._processInputParams(n)
          , r = this._def.effect || null
          , o = {
            addIssue: i => {
                ve(e, i),
                i.fatal ? a.abort() : a.dirty()
            }
            ,
            get path() {
                return e.path
            }
        };
        if (o.addIssue = o.addIssue.bind(o),
        r.type === "preprocess") {
            const i = r.transform(e.data, o);
            if (e.common.async)
                return Promise.resolve(i).then(async s => {
                    if (a.value === "aborted")
                        return Ve;
                    const l = await this._def.schema._parseAsync({
                        data: s,
                        path: e.path,
                        parent: e
                    });
                    return l.status === "aborted" ? Ve : l.status === "dirty" || a.value === "dirty" ? qn(l.value) : l
                }
                );
            {
                if (a.value === "aborted")
                    return Ve;
                const s = this._def.schema._parseSync({
                    data: i,
                    path: e.path,
                    parent: e
                });
                return s.status === "aborted" ? Ve : s.status === "dirty" || a.value === "dirty" ? qn(s.value) : s
            }
        }
        if (r.type === "refinement") {
            const i = s => {
                const l = r.refinement(s, o);
                if (e.common.async)
                    return Promise.resolve(l);
                if (l instanceof Promise)
                    throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
                return s
            }
            ;
            if (e.common.async === !1) {
                const s = this._def.schema._parseSync({
                    data: e.data,
                    path: e.path,
                    parent: e
                });
                return s.status === "aborted" ? Ve : (s.status === "dirty" && a.dirty(),
                i(s.value),
                {
                    status: a.value,
                    value: s.value
                })
            } else
                return this._def.schema._parseAsync({
                    data: e.data,
                    path: e.path,
                    parent: e
                }).then(s => s.status === "aborted" ? Ve : (s.status === "dirty" && a.dirty(),
                i(s.value).then( () => ({
                    status: a.value,
                    value: s.value
                }))))
        }
        if (r.type === "transform")
            if (e.common.async === !1) {
                const i = this._def.schema._parseSync({
                    data: e.data,
                    path: e.path,
                    parent: e
                });
                if (!On(i))
                    return i;
                const s = r.transform(i.value, o);
                if (s instanceof Promise)
                    throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
                return {
                    status: a.value,
                    value: s
                }
            } else
                return this._def.schema._parseAsync({
                    data: e.data,
                    path: e.path,
                    parent: e
                }).then(i => On(i) ? Promise.resolve(r.transform(i.value, o)).then(s => ({
                    status: a.value,
                    value: s
                })) : i);
        Xe.assertNever(r)
    }
}
Ta.create = (t, n, a) => new Ta({
    schema: t,
    typeName: Ne.ZodEffects,
    effect: n,
    ...Ge(a)
});
Ta.createWithPreprocess = (t, n, a) => new Ta({
    schema: n,
    effect: {
        type: "preprocess",
        transform: t
    },
    typeName: Ne.ZodEffects,
    ...Ge(a)
});
class La extends Ye {
    _parse(n) {
        return this._getType(n) === _e.undefined ? aa(void 0) : this._def.innerType._parse(n)
    }
    unwrap() {
        return this._def.innerType
    }
}
La.create = (t, n) => new La({
    innerType: t,
    typeName: Ne.ZodOptional,
    ...Ge(n)
});
class fn extends Ye {
    _parse(n) {
        return this._getType(n) === _e.null ? aa(null) : this._def.innerType._parse(n)
    }
    unwrap() {
        return this._def.innerType
    }
}
fn.create = (t, n) => new fn({
    innerType: t,
    typeName: Ne.ZodNullable,
    ...Ge(n)
});
class qr extends Ye {
    _parse(n) {
        const {ctx: a} = this._processInputParams(n);
        let e = a.data;
        return a.parsedType === _e.undefined && (e = this._def.defaultValue()),
        this._def.innerType._parse({
            data: e,
            path: a.path,
            parent: a
        })
    }
    removeDefault() {
        return this._def.innerType
    }
}
qr.create = (t, n) => new qr({
    innerType: t,
    typeName: Ne.ZodDefault,
    defaultValue: typeof n.default == "function" ? n.default : () => n.default,
    ...Ge(n)
});
class zr extends Ye {
    _parse(n) {
        const {ctx: a} = this._processInputParams(n)
          , e = {
            ...a,
            common: {
                ...a.common,
                issues: []
            }
        }
          , r = this._def.innerType._parse({
            data: e.data,
            path: e.path,
            parent: {
                ...e
            }
        });
        return Nr(r) ? r.then(o => ({
            status: "valid",
            value: o.status === "valid" ? o.value : this._def.catchValue({
                get error() {
                    return new ia(e.common.issues)
                },
                input: e.data
            })
        })) : {
            status: "valid",
            value: r.status === "valid" ? r.value : this._def.catchValue({
                get error() {
                    return new ia(e.common.issues)
                },
                input: e.data
            })
        }
    }
    removeCatch() {
        return this._def.innerType
    }
}
zr.create = (t, n) => new zr({
    innerType: t,
    typeName: Ne.ZodCatch,
    catchValue: typeof n.catch == "function" ? n.catch : () => n.catch,
    ...Ge(n)
});
class Ao extends Ye {
    _parse(n) {
        if (this._getType(n) !== _e.nan) {
            const e = this._getOrReturnCtx(n);
            return ve(e, {
                code: le.invalid_type,
                expected: _e.nan,
                received: e.parsedType
            }),
            Ve
        }
        return {
            status: "valid",
            value: n.data
        }
    }
}
Ao.create = t => new Ao({
    typeName: Ne.ZodNaN,
    ...Ge(t)
});
const zm = Symbol("zod_brand");
class ls extends Ye {
    _parse(n) {
        const {ctx: a} = this._processInputParams(n)
          , e = a.data;
        return this._def.type._parse({
            data: e,
            path: a.path,
            parent: a
        })
    }
    unwrap() {
        return this._def.type
    }
}
class oo extends Ye {
    _parse(n) {
        const {status: a, ctx: e} = this._processInputParams(n);
        if (e.common.async)
            return (async () => {
                const o = await this._def.in._parseAsync({
                    data: e.data,
                    path: e.path,
                    parent: e
                });
                return o.status === "aborted" ? Ve : o.status === "dirty" ? (a.dirty(),
                qn(o.value)) : this._def.out._parseAsync({
                    data: o.value,
                    path: e.path,
                    parent: e
                })
            }
            )();
        {
            const r = this._def.in._parseSync({
                data: e.data,
                path: e.path,
                parent: e
            });
            return r.status === "aborted" ? Ve : r.status === "dirty" ? (a.dirty(),
            {
                status: "dirty",
                value: r.value
            }) : this._def.out._parseSync({
                data: r.value,
                path: e.path,
                parent: e
            })
        }
    }
    static create(n, a) {
        return new oo({
            in: n,
            out: a,
            typeName: Ne.ZodPipeline
        })
    }
}
class Zr extends Ye {
    _parse(n) {
        const a = this._def.innerType._parse(n)
          , e = r => (On(r) && (r.value = Object.freeze(r.value)),
        r);
        return Nr(a) ? a.then(r => e(r)) : e(a)
    }
    unwrap() {
        return this._def.innerType
    }
}
Zr.create = (t, n) => new Zr({
    innerType: t,
    typeName: Ne.ZodReadonly,
    ...Ge(n)
});
function eu(t, n={}, a) {
    return t ? rr.create().superRefine( (e, r) => {
        var o, i;
        if (!t(e)) {
            const s = typeof n == "function" ? n(e) : typeof n == "string" ? {
                message: n
            } : n
              , l = (i = (o = s.fatal) !== null && o !== void 0 ? o : a) !== null && i !== void 0 ? i : !0
              , d = typeof s == "string" ? {
                message: s
            } : s;
            r.addIssue({
                code: "custom",
                ...d,
                fatal: l
            })
        }
    }
    ) : rr.create()
}
const Zm = {
    object: Ct.lazycreate
};
var Ne;
(function(t) {
    t.ZodString = "ZodString",
    t.ZodNumber = "ZodNumber",
    t.ZodNaN = "ZodNaN",
    t.ZodBigInt = "ZodBigInt",
    t.ZodBoolean = "ZodBoolean",
    t.ZodDate = "ZodDate",
    t.ZodSymbol = "ZodSymbol",
    t.ZodUndefined = "ZodUndefined",
    t.ZodNull = "ZodNull",
    t.ZodAny = "ZodAny",
    t.ZodUnknown = "ZodUnknown",
    t.ZodNever = "ZodNever",
    t.ZodVoid = "ZodVoid",
    t.ZodArray = "ZodArray",
    t.ZodObject = "ZodObject",
    t.ZodUnion = "ZodUnion",
    t.ZodDiscriminatedUnion = "ZodDiscriminatedUnion",
    t.ZodIntersection = "ZodIntersection",
    t.ZodTuple = "ZodTuple",
    t.ZodRecord = "ZodRecord",
    t.ZodMap = "ZodMap",
    t.ZodSet = "ZodSet",
    t.ZodFunction = "ZodFunction",
    t.ZodLazy = "ZodLazy",
    t.ZodLiteral = "ZodLiteral",
    t.ZodEnum = "ZodEnum",
    t.ZodEffects = "ZodEffects",
    t.ZodNativeEnum = "ZodNativeEnum",
    t.ZodOptional = "ZodOptional",
    t.ZodNullable = "ZodNullable",
    t.ZodDefault = "ZodDefault",
    t.ZodCatch = "ZodCatch",
    t.ZodPromise = "ZodPromise",
    t.ZodBranded = "ZodBranded",
    t.ZodPipeline = "ZodPipeline",
    t.ZodReadonly = "ZodReadonly"
}
)(Ne || (Ne = {}));
const Km = (t, n={
    message: `Input not instance of ${t.name}`
}) => eu(a => a instanceof t, n)
  , tu = ba.create
  , au = gn.create
  , Qm = Ao.create
  , Xm = pn.create
  , nu = Hr.create
  , Jm = xn.create
  , eg = Eo.create
  , tg = Vr.create
  , ag = Ur.create
  , ng = rr.create
  , rg = Pn.create
  , og = Qa.create
  , ig = Do.create
  , sg = _a.create
  , lg = Ct.create
  , cg = Ct.strictCreate
  , ug = Fr.create
  , dg = Yo.create
  , mg = jr.create
  , gg = Ha.create
  , pg = Gr.create
  , vg = Mo.create
  , fg = Bn.create
  , hg = Jn.create
  , yg = Yr.create
  , bg = Wr.create
  , _g = vn.create
  , wg = $r.create
  , kg = or.create
  , cl = Ta.create
  , Sg = La.create
  , Tg = fn.create
  , Cg = Ta.createWithPreprocess
  , Ig = oo.create
  , Pg = () => tu().optional()
  , Eg = () => au().optional()
  , Dg = () => nu().optional()
  , Mg = {
    string: t => ba.create({
        ...t,
        coerce: !0
    }),
    number: t => gn.create({
        ...t,
        coerce: !0
    }),
    boolean: t => Hr.create({
        ...t,
        coerce: !0
    }),
    bigint: t => pn.create({
        ...t,
        coerce: !0
    }),
    date: t => xn.create({
        ...t,
        coerce: !0
    })
}
  , Ag = Ve;
var c = Object.freeze({
    __proto__: null,
    defaultErrorMap: nr,
    setErrorMap: Cm,
    getErrorMap: Co,
    makeIssue: Io,
    EMPTY_PATH: Im,
    addIssueToContext: ve,
    ParseStatus: Qt,
    INVALID: Ve,
    DIRTY: qn,
    OK: aa,
    isAborted: xi,
    isDirty: Bi,
    isValid: On,
    isAsync: Nr,
    get util() {
        return Xe
    },
    get objectUtil() {
        return Oi
    },
    ZodParsedType: _e,
    getParsedType: $a,
    ZodType: Ye,
    datetimeRegex: Xc,
    ZodString: ba,
    ZodNumber: gn,
    ZodBigInt: pn,
    ZodBoolean: Hr,
    ZodDate: xn,
    ZodSymbol: Eo,
    ZodUndefined: Vr,
    ZodNull: Ur,
    ZodAny: rr,
    ZodUnknown: Pn,
    ZodNever: Qa,
    ZodVoid: Do,
    ZodArray: _a,
    ZodObject: Ct,
    ZodUnion: Fr,
    ZodDiscriminatedUnion: Yo,
    ZodIntersection: jr,
    ZodTuple: Ha,
    ZodRecord: Gr,
    ZodMap: Mo,
    ZodSet: Bn,
    ZodFunction: Jn,
    ZodLazy: Yr,
    ZodLiteral: Wr,
    ZodEnum: vn,
    ZodNativeEnum: $r,
    ZodPromise: or,
    ZodEffects: Ta,
    ZodTransformer: Ta,
    ZodOptional: La,
    ZodNullable: fn,
    ZodDefault: qr,
    ZodCatch: zr,
    ZodNaN: Ao,
    BRAND: zm,
    ZodBranded: ls,
    ZodPipeline: oo,
    ZodReadonly: Zr,
    custom: eu,
    Schema: Ye,
    ZodSchema: Ye,
    late: Zm,
    get ZodFirstPartyTypeKind() {
        return Ne
    },
    coerce: Mg,
    any: ng,
    array: sg,
    bigint: Xm,
    boolean: nu,
    date: Jm,
    discriminatedUnion: dg,
    effect: cl,
    enum: _g,
    function: hg,
    instanceof: Km,
    intersection: mg,
    lazy: yg,
    literal: bg,
    map: vg,
    nan: Qm,
    nativeEnum: wg,
    never: og,
    null: ag,
    nullable: Tg,
    number: au,
    object: lg,
    oboolean: Dg,
    onumber: Eg,
    optional: Sg,
    ostring: Pg,
    pipeline: Ig,
    preprocess: Cg,
    promise: kg,
    record: pg,
    set: fg,
    strictObject: cg,
    string: tu,
    symbol: eg,
    transformer: cl,
    tuple: gg,
    undefined: tg,
    union: ug,
    unknown: rg,
    void: ig,
    NEVER: Ag,
    ZodIssueCode: le,
    quotelessJson: Tm,
    ZodError: ia
});
const Og = c.union([c.literal("left"), c.literal("right"), c.literal("center"), c.literal("justify"), c.literal("start"), c.literal("end"), c.literal("match-parent")])
  , xg = c.union([c.literal("stretch"), c.literal("center"), c.literal("flex-start"), c.literal("flex-end"), c.literal("baseline"), c.literal("initial"), c.literal("inherit")])
  , ru = c.union([c.literal("flex-start"), c.literal("flex-end"), c.literal("center"), c.literal("space-between"), c.literal("space-around"), c.literal("space-evenly"), c.literal("initial"), c.literal("inherit")])
  , ou = c.union([c.literal("alternate"), c.literal("author"), c.literal("bookmark"), c.literal("external"), c.literal("help"), c.literal("license"), c.literal("next"), c.literal("nofollow"), c.literal("noopener"), c.literal("noreferrer"), c.literal("prev"), c.literal("search"), c.literal("tag")])
  , Bg = c.union([c.literal("row"), c.literal("row-reverse"), c.literal("column"), c.literal("column-reverse")])
  , Lg = c.string().regex(/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/)
  , Rg = c.string().regex(/^rgb\((\d{1,3}),(\d{1,3}),(\d{1,3})\)$/)
  , Ng = c.string().regex(/^rgba\((\d{1,3}),(\d{1,3}),(\d{1,3}),(\d(\.\d+)?|1(\.0+)?)\)$/)
  , ut = c.union([Lg, Rg, Ng])
  , Oo = c.string().regex(/^\d+px$/)
  , Fa = c.object({
    styles: c.object({
        align: xg,
        justify: ru,
        text: Og,
        "m-element-margin": c.string().regex(/^\d+px \d+px \d+px \d+px$/),
        "z-index": c.number(),
        "grid-row": c.string(),
        "grid-column": c.string(),
        "m-grid-row": c.string(),
        "m-grid-column": c.string()
    })
})
  , hn = c.object({
    top: c.number(),
    left: c.number(),
    width: c.number(),
    height: c.number(),
    fontSize: c.number().optional()
})
  , iu = c.object({
    name: c.string(),
    type: c.string()
})
  , Hg = c.object({
    svg: c.string(),
    icon: c.string(),
    link: c.string().optional(),
    url: c.string().optional()
})
  , Vg = c.union([c.literal("GridGallery"), c.literal("GridTextBox"), c.literal("GridShape"), c.literal("GridImage"), c.literal("GridButton"), c.literal("GridMap"), c.literal("GridVideo"), c.literal("GridInstagramFeed"), c.literal("GridSocialIcons"), c.literal("GridForm"), c.literal("GridEmbed"), c.literal("GridStripeButton"), c.literal("GridEcommerceButton"), c.literal("SearchBar")])
  , pa = c.object({
    type: Vg,
    initialElementId: c.string(),
    mobile: hn,
    desktop: hn,
    animation: iu.optional(),
    settings: Fa,
    aiData: c.record(c.unknown()).and(c.object({
        type: c.string().optional()
    })).optional()
})
  , Ug = c.union([c.literal("external"), c.literal("download"), c.literal("anchored-section"), c.literal("email"), c.literal("phone"), c.literal("page")])
  , cs = pa.extend({
    href: c.string(),
    rel: ou,
    target: c.union([c.literal("_blank"), c.literal("_self"), c.literal("_parent"), c.literal("_top")]),
    content: c.string(),
    linkType: Ug,
    fontColor: ut,
    fontWeight: c.number(),
    borderColor: ut,
    borderWidth: c.number(),
    borderRadius: c.number(),
    fontColorHover: ut,
    backgroundColor: ut,
    borderColorHover: ut,
    backgroundColorHover: ut,
    settings: Fa.and(c.object({
        type: c.string(),
        isFormButton: c.boolean().optional()
    })),
    linkedPageId: c.string().optional()
})
  , Fg = cs.extend({
    type: c.literal("GridStripeButton"),
    priceId: c.string(),
    paymentType: c.string()
})
  , jg = cs.extend({
    type: c.literal("GridEcommerceButton"),
    productId: c.string(),
    productVariantId: c.string()
})
  , Gg = pa.extend({
    type: c.literal("GridMap"),
    settings: Fa.and(c.object({
        src: c.string()
    }))
})
  , Yg = pa.extend({
    type: c.literal("GridVideo"),
    settings: Fa.and(c.object({
        jpg: c.string(),
        src: c.string(),
        webp: c.string(),
        provider: c.union([c.literal("youtube"), c.literal("vimeo")]),
        initialSrc: c.string()
    }))
})
  , Wg = pa.extend({
    type: c.literal("GridTextBox"),
    content: c.string()
})
  , $g = pa.extend({
    type: c.literal("GridShape"),
    svg: c.string(),
    color: ut,
    shape: c.string()
})
  , qg = pa.extend({
    type: c.literal("GridImage"),
    rel: ou,
    href: c.string(),
    mobile: hn.and(c.object({
        borderRadius: c.string()
    })),
    desktop: hn.and(c.object({
        borderRadius: c.string()
    })),
    settings: Fa.and(c.object({
        alt: c.string(),
        path: c.string(),
        origin: c.string(),
        clickAction: c.string()
    }))
})
  , zg = pa.extend({
    type: c.literal("GridInstagramFeed"),
    settings: Fa.and(c.object({
        username: c.string().optional(),
        apiVersion: c.union([c.literal("instagram_basic_display"), c.literal("instagram_api_with_instagram_login")]).optional(),
        "item-gap": Oo,
        "m-item-gap": Oo,
        "items-per-row": c.number(),
        "m-items-per-row": c.number()
    })),
    "item-count": c.number()
})
  , Zg = pa.extend({
    type: c.literal("GridSocialIcons"),
    useBrandColors: c.boolean(),
    links: c.array(Hg),
    settings: Fa.and(c.object({
        "icon-size": Oo,
        "icon-color": ut,
        "icon-spacing": ru,
        "icon-direction": Bg,
        "icon-color-hover": ut,
        "space-between-icons": Oo
    }))
})
  , Kg = pa.extend({
    type: c.literal("GridGallery"),
    images: c.array(c.object({
        alt: c.string(),
        path: c.string(),
        origin: c.union([c.literal("assets"), c.literal("unsplash"), c.literal("other")])
    })),
    desktop: hn.and(c.object({
        columnGap: c.number(),
        columnCount: c.number()
    })),
    mobile: hn.and(c.object({
        columnGap: c.number(),
        columnCount: c.number()
    })),
    settings: Fa.and(c.object({
        layout: c.string(),
        imageClickAction: c.union([c.literal("lightbox"), c.literal("none")])
    }))
})
  , Qg = pa.extend({
    type: c.literal("GridEmbed"),
    content: c.string(),
    settings: Fa.and(c.object({
        styles: c.object({
            height: c.number(),
            heightMobile: c.number().optional()
        })
    }))
})
  , Xg = pa.extend({
    type: c.literal("SearchBar"),
    placeholderText: c.string(),
    noResultsText: c.string(),
    fillColor: ut,
    fillColorHover: ut,
    resultItemHoverColor: ut,
    textAndIconColor: ut,
    textAndIconColorHover: ut,
    borderColor: ut,
    borderColorHover: ut,
    borderRadius: c.number(),
    fontFamily: c.string()
})
  , su = cs.extend({
    type: c.literal("GridButton")
})
  , Da = c.object({
    "font-family": c.string(),
    "font-size": c.string(),
    "m-font-size": c.string(),
    "font-style": c.string(),
    "font-weight": c.union([c.literal(100), c.literal(200), c.literal(300), c.literal(400), c.literal(500), c.literal(600), c.literal(700), c.literal(800), c.literal(900), c.literal("100"), c.literal("200"), c.literal("300"), c.literal("400"), c.literal("500"), c.literal("600"), c.literal("700"), c.literal("800"), c.literal("900"), c.literal("normal"), c.literal("bold")]),
    "line-height": c.string(),
    "text-decoration": c.string(),
    "text-transform": c.string(),
    "letter-spacing": c.union([c.string(), c.number()]),
    color: c.string().optional(),
    "color-hover": c.string().optional()
})
  , ul = c.object({
    "padding-y": c.string(),
    "m-padding-y": c.string(),
    "padding-x": c.string(),
    "m-padding-x": c.string(),
    "font-family": c.string(),
    "font-size": c.string(),
    "m-font-size": c.string(),
    "font-style": c.string(),
    "font-weight": c.union([c.literal(100), c.literal(200), c.literal(300), c.literal(400), c.literal(500), c.literal(600), c.literal(700), c.literal(800), c.literal(900)]),
    "line-height": c.string(),
    "text-decoration": c.string(),
    "text-transform": c.string(),
    "letter-spacing": c.string(),
    "background-color-null": c.string(),
    "background-color-null-hover": c.string(),
    "border-null": c.string(),
    "border-null-hover": c.string(),
    "border-radius": c.number(),
    "box-shadow-null": c.string(),
    "box-shadow-null-hover": c.string(),
    "box-shadow-x": c.string(),
    "box-shadow-x-hover": c.string(),
    "box-shadow-blur": c.string(),
    "box-shadow-blur-hover": c.string(),
    "box-shadow-spread": c.string(),
    "box-shadow-spread-hover": c.string(),
    "box-shadow-y": c.string(),
    "box-shadow-y-hover": c.string(),
    "box-shadow-color": c.string(),
    "box-shadow-color-hover": c.string(),
    "transition-duration": c.string(),
    "transition-timing-function": c.string()
})
  , Jg = c.union([c.literal("BlockSlideshow"), c.literal("BlockGrid"), c.literal("BlockNavigation"), c.literal("BlockBlogList"), c.literal("BlockBlogHeader"), c.literal("BlockEcommerceProduct"), c.literal("BlockEcommerceModal"), c.literal("BlockEcommerceProductList"), c.literal("BlockLayout"), c.literal("BlockImageSlideshow"), c.literal("BlockStickyBar")])
  , ep = c.union([c.literal("path"), c.literal("origin"), c.literal("color"), c.literal("gradient"), c.literal("image"), c.literal("video")])
  , tp = c.object({
    angle: c.number().min(0).max(360),
    isAnimated: c.boolean(),
    colors: c.array(c.object({
        value: c.string()
    }))
})
  , ap = c.record(c.unknown()).and(c.object({
    translations: c.record(c.string()),
    lang: c.string().optional()
}))
  , np = c.object({
    id: c.string(),
    seo_settings: c.object({
        title: c.string().optional(),
        noindex: c.boolean().optional(),
        keywords: c.array(c.string()).optional(),
        description: c.string().optional(),
        focusKeyword: c.string().optional(),
        ogImageOrigin: c.string().optional(),
        ogImagePath: c.string().optional(),
        ogImageAlt: c.string().optional(),
        slug: c.string().optional()
    })
});
c.union([c.literal(""), c.literal("order=ASC&sort_by=price"), c.literal("order=DESC&sort_by=price"), c.literal("order=DESC&sort_by=created_at")]);
const rp = c.object({
    styles: c.record(c.unknown()).optional(),
    categories: c.array(c.string()).optional(),
    logoSvg: c.string().optional()
})
  , op = c.union([c.literal(""), c.literal("order=ASC&sort_by=price"), c.literal("order=DESC&sort_by=price"), c.literal("order=DESC&sort_by=created_at"), c.literal("order=ASC&sort_by=collection_order")])
  , ip = c.object({
    type: Jg,
    settings: rp.and(c.record(c.unknown())),
    slot: c.string().optional(),
    background: c.record(c.unknown()).and(c.object({
        path: c.string().optional().nullable(),
        origin: c.string().optional().nullable(),
        color: c.string().optional(),
        gradient: tp.optional(),
        current: ep.optional(),
        "overlay-opacity": c.string().optional(),
        alt: c.string().optional(),
        video: c.object({
            videoSrc: c.string(),
            videoThumbnailSrc: c.string()
        }).optional()
    })).optional(),
    components: c.array(c.string()).optional(),
    zindexes: c.array(c.string()).optional(),
    desktop: c.record(c.unknown()).and(c.object({
        minHeight: c.number().optional()
    })).optional(),
    mobile: c.record(c.unknown()).and(c.object({
        minHeight: c.number().optional()
    })).optional(),
    initialBlockId: c.string().optional(),
    locale: c.string().optional(),
    shouldSnapToGuides: c.boolean().optional(),
    shouldSnapToElements: c.boolean().optional(),
    snapRowGap: c.number().optional(),
    snapRowHeight: c.number().optional(),
    isMobileAutoPositioningEnabled: c.boolean().optional(),
    isQuantityPickerEnabled: c.boolean().optional(),
    attachment: c.union([c.literal("unset"), c.literal("fixed")]).optional(),
    htmlId: c.string().optional(),
    isButtonEnabled: c.boolean().optional(),
    buttonDisplay: c.string().optional(),
    aiData: c.record(c.unknown()).and(c.object({
        type: c.string().optional()
    })).optional(),
    items: c.array(c.object({
        type: c.string(),
        content: c.string(),
        styles: c.record(c.unknown())
    })).optional(),
    productSorting: c.object({
        enabled: c.boolean(),
        textColor: c.string(),
        sortingOptions: c.array(c.object({
            id: c.string(),
            value: op,
            label: c.string(),
            isEnabled: c.boolean()
        }))
    }).optional(),
    productIds: c.array(c.string()).optional(),
    productCategoryId: c.string().optional(),
    isCategoryListEnabled: c.boolean().optional(),
    isFullWidth: c.boolean().optional(),
    isTotalProductCountShown: c.boolean().optional(),
    columnCount: c.number().optional(),
    productsPerPage: c.number().optional(),
    scrollBehaviour: c.union([c.literal("pagination"), c.literal("scroll")]).optional(),
    animation: iu.optional()
})
  , sp = c.object({
    noindex: c.boolean().optional(),
    title: c.string().optional(),
    password: c.string().optional(),
    ogImageAlt: c.string().optional().nullable(),
    ogImagePath: c.string().optional().nullable(),
    ogImageOrigin: c.string().optional().nullable(),
    passwordDesign: c.string().optional(),
    passwordBackText: c.string().optional(),
    passwordButtonText: c.string().optional(),
    passwordHeadingText: c.string().optional(),
    passwordSubheadingText: c.string().optional(),
    passwordPlaceholderText: c.string().optional()
})
  , lp = c.object({
    type: c.string().optional(),
    locale: c.string().optional(),
    initialPageId: c.string().optional(),
    name: c.string().optional(),
    slug: c.string().optional(),
    date: c.string().optional(),
    isDraft: c.boolean().optional(),
    isScheduled: c.boolean().optional(),
    categories: c.array(c.string()).optional(),
    coverImageAlt: c.string().optional().nullable(),
    coverImagePath: c.string().optional(),
    coverImageOrigin: c.string().optional(),
    minutesToRead: c.string().optional(),
    meta: sp.optional(),
    footerSlotIsHidden: c.boolean().optional(),
    pageId: c.string().optional(),
    blocks: c.array(c.string()).optional(),
    productId: c.union([c.string(), c.number()]).optional()
})
  , cp = c.union([c.literal("Link"), c.literal("Page"), c.literal("Folder"), c.literal("Homepage")])
  , up = c.object({
    linkType: cp.optional(),
    locale: c.string().optional(),
    href: c.string().optional(),
    name: c.string().optional(),
    target: c.string().optional(),
    rel: c.string().optional(),
    innerLinkType: c.string().optional(),
    innerLinkPageId: c.string().optional(),
    subItems: c.array(c.unknown()).optional(),
    navItemId: c.string().optional(),
    linkedPageId: c.string().optional(),
    isHidden: c.boolean().optional()
})
  , dp = c.record(lp)
  , mp = c.record(ip)
  , gp = pa.extend({
    type: c.literal("GridForm"),
    formId: c.string(),
    mobile: hn.and(c.object({
        inputTextSize: c.number(),
        labelTextSize: c.number(),
        submitButtonFontSize: c.number(),
        formElementsVerticalSpacing: c.number()
    })),
    desktop: hn.and(c.object({
        inputTextSize: c.number(),
        labelTextSize: c.number(),
        submitButtonFontSize: c.number(),
        formElementsVerticalSpacing: c.number()
    })),
    settings: Fa.and(c.object({
        theme: c.string(),
        schema: c.array(c.object({
            id: c.string(),
            svg: c.string(),
            name: c.string(),
            type: c.string(),
            fieldType: c.string(),
            inputLabel: c.string(),
            validation: c.array(c.array(c.string())),
            placeholder: c.string(),
            validationType: c.string(),
            "validation-messages": c.object({
                email: c.string(),
                required: c.string()
            })
        })),
        styles: c.object({
            formSpacing: c.string()
        }),
        successMessage: c.string()
    })),
    formPadding: c.number(),
    inputFillColor: ut,
    inputTextColor: ut,
    labelTextColor: ut,
    formBorderWidth: c.number(),
    innerBackground: c.object({
        color: ut,
        image: c.string(),
        current: c.string()
    }),
    formBorderRadius: c.number(),
    inputBorderColor: ut,
    inputBorderWidth: c.number(),
    submitButtonData: su,
    inputBorderRadius: c.number(),
    formBackgroundColor: c.string(),
    inputFillColorHover: ut,
    inputTextColorHover: ut,
    inputBorderColorHover: ut,
    submitButtonFontColor: ut,
    submitButtonBorderColor: ut,
    submitButtonBorderRadius: c.number(),
    submitButtonFontColorHover: ut,
    submitButtonBackgroundColor: ut,
    submitButtonBorderColorHover: ut,
    submitButtonBackgroundColorHover: ut
})
  , pp = c.union([su, Fg, jg, Gg, Yg, Wg, $g, qg, zg, Zg, Kg, Qg, Xg, gp])
  , vp = c.record(pp)
  , fp = c.object({
    googleAdsIds: c.array(c.string()).optional(),
    GAId: c.string().optional(),
    shouldAddWWWPrefixToDomain: c.boolean(),
    version: c.number(),
    template: c.string(),
    isFirstLoad: c.boolean().optional(),
    ecommerceStoreId: c.string().optional(),
    demoEcommerceStoreId: c.string().optional(),
    customMeta: c.string().optional(),
    customBodyElements: c.string().optional(),
    customHeadElements: c.string().optional(),
    typographyStylesId: c.string().optional(),
    colorSetId: c.string().optional(),
    buttonSetId: c.string().optional(),
    facebookPixel: c.string().optional(),
    googleAdSense: c.string().optional(),
    googleAdMob: c.string().optional(),
    googleTagManager: c.string().optional(),
    googleAnalytics: c.string().optional(),
    hotjar: c.string().optional(),
    metaTitle: c.string().optional(),
    metaDescription: c.string().optional(),
    ogImagePath: c.string().optional().nullable(),
    ogImageOrigin: c.string().optional().nullable(),
    ogImageAlt: c.string().optional().nullable(),
    faviconPath: c.string().optional(),
    faviconOrigin: c.string().optional(),
    curatedTemplate: c.object({
        link: c.string().optional(),
        author: c.string().optional()
    }).optional(),
    stripePublicApiKey: c.string().optional(),
    whatsAppNumber: c.string().optional(),
    whatsAppMessage: c.string().optional(),
    isCookieBarEnabled: c.boolean().optional(),
    jivoChat: c.string().optional(),
    qa: c.boolean().optional(),
    ecommerceType: c.string().optional(),
    defaultLocale: c.string().optional(),
    isLayout: c.boolean(),
    migrationToLayoutModifications: c.object({
        splitSlideshows: c.record(c.any()).optional(),
        imageObjectFitRemoved: c.boolean().optional(),
        unsnappedElementSections: c.record(c.any()).optional()
    }).optional(),
    isPrivateModeActive: c.boolean(),
    aiWebsiteType: c.string().optional(),
    isCustomCodeDisabled: c.boolean().optional(),
    payseraVerificationCode: c.string().optional(),
    isExistingStoreWithDynamicTemplate: c.boolean().optional()
})
  , hp = c.object({
    h1: Da,
    h2: Da,
    h3: Da,
    h4: Da,
    h5: Da,
    h6: Da,
    "body-small": Da,
    body: Da,
    "body-large": Da,
    "nav-link": Da,
    font: c.object({
        primary: c.string(),
        secondary: c.string()
    }),
    "grid-button-primary": ul,
    "grid-button-secondary": ul
})
  , yp = c.record(c.object({
    token: c.string()
}))
  , bp = c.object({
    metaTitle: c.string().optional(),
    name: c.string().optional(),
    homePageId: c.string(),
    pages: dp,
    blocks: mp,
    elements: vp,
    metaHtmlLanguage: c.string().optional(),
    nav: c.array(up),
    isNavHidden: c.boolean(),
    locale: c.string(),
    cookieBannerAcceptText: c.string().optional(),
    cookieBannerDeclineText: c.string().optional(),
    cookieBannerDisclaimer: c.string().optional(),
    blogReadingTimeText: c.string().optional(),
    orderPosition: c.number().optional()
})
  , _p = c.object({
    name: c.string()
})
  , wp = c.record(_p)
  , kp = c.record(c.unknown())
  , Sp = c.record(c.unknown())
  , Tp = c.object({
    family: c.string(),
    type: c.string(),
    weights: c.array(c.union([c.string(), c.number()])).optional()
})
  , Cp = c.object({
    hasChangedLogo: c.boolean().optional()
})
  , Ip = c.record(bp);
c.object({
    country: c.string(),
    flagPath: c.string(),
    href: c.string(),
    isHidden: c.boolean(),
    locale: c.string(),
    name: c.string()
});
c.object({
    country_code: c.string(),
    provinces: c.array(c.string())
});
c.object({
    builderCompletedSteps: Cp.optional(),
    meta: fp,
    domain: c.string().optional().nullable(),
    freeDomain: c.string().optional(),
    blogCategories: wp,
    languages: Ip,
    styles: hp,
    forms: yp,
    navigationBlock: kp.optional(),
    user: Sp.optional(),
    siteId: c.string().optional(),
    fonts: c.array(Tp).optional(),
    ecommerceShoppingCart: ap.optional(),
    ecommerceSeoChanges: c.array(np).optional()
});
const Ri = {
    EXTERNAL: "external",
    DOWNLOAD: "download",
    ANCHORED_SECTION: "anchored-section",
    EMAIL: "email",
    PHONE: "phone",
    PAGE: "page"
}
  , Pp = (t, n) => {
    const a = []
      , e = t.length;
    let r = 0;
    for (; r < e; )
        a.push(t.slice(r, r + n)),
        r += n;
    return a
}
  , Pa = "https://api-ecommerce.hostinger.com/store"
  , Ep = async t => (await (await fetch(`${Pa}/${t}/regions`)).json()).regions
  , Dp = async t => {
    const n = new URLSearchParams;
    return n.set("region_id", t),
    (await (await fetch(`${Pa}/shipping-options?${n.toString()}`)).json()).shipping_options
}
  , Mp = async (t, n={}) => {
    const {sort: a, offset: e, limit: r, collectionId: o, toDate: i} = n
      , s = new URLSearchParams(a);
    return typeof e == "number" && r && (s.set("offset", e.toString()),
    s.set("limit", r.toString())),
    o && s.set("collection_ids[]", o),
    i && s.set("to_date", i),
    await (await fetch(`${Pa}/${t}/products?${s.toString()}`)).json()
}
  , dl = async (t, n) => {
    const e = Pp(n || [], 1)?.map(async i => {
        const s = new URLSearchParams;
        return i.forEach(d => s.append("ids[]", d)),
        (await fetch(`${Pa}/${t}/products?${s.toString()}`)).json()
    }
    );
    return (await Promise.allSettled(e)).filter(i => i.status === "fulfilled").map(i => i.value).flatMap( ({products: i}) => i)
}
  , Ap = async t => await (await fetch(`${Pa}/${t}/products/seo-settings`)).json()
  , lu = async ({storeId: t, productId: n, slug: a}) => (await (await fetch(`${Pa}/${t}/products/${n || a}${a ? "?field=slug" : ""}`)).json()).product
  , cu = async (t, n) => {
    const a = n.map(o => `product_ids[]=${o}`).join("&");
    return (await (await fetch(`${Pa}/${t}/variants?fields=inventory_quantity&${a}`)).json()).variants
}
  , Op = async ({items: t, successUrl: n, cancelUrl: a, checkoutUrl: e, locale: r, storeId: o}) => fetch(`${Pa}/${o}/checkout`, {
    method: "POST",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
    },
    credentials: "omit",
    body: JSON.stringify({
        items: t,
        successUrl: n,
        cancelUrl: a,
        checkoutUrl: e,
        locale: r,
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
    })
}).then(async i => {
    const s = await i.json();
    if (i.ok)
        return s.url;
    throw s
}
)
  , xp = async (t, n) => fetch(`${Pa}/time-slots`, {
    method: "POST",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
    },
    credentials: "omit",
    body: JSON.stringify({
        booking_event_id: t,
        time_zone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        date: n
    })
}).then(async a => {
    const e = await a.json();
    if (a.ok)
        return e.slots;
    throw e
}
)
  , Bp = async ({bookingId: t, fromDate: n, toDate: a}) => fetch(`${Pa}/availability`, {
    method: "POST",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
    },
    credentials: "omit",
    body: JSON.stringify({
        booking_event_id: t,
        time_zone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        from_date: n,
        to_date: a
    })
}).then(async e => {
    const r = await e.json();
    if (e.ok)
        return r.disabled_dates;
    throw r
}
)
  , Lp = async t => await (await fetch(`${Pa}/${t}/collections`)).json()
  , us = "https://cdn.zyrosite.com/cdn-builder-placeholders"
  , Vt = `${us}/ecommerce-product`
  , wt = `${us}/instagram`
  , Rp = `${us}/password-page`;
var st = (t => (t.PHYSICAL = "physical",
t.DIGITAL = "digital",
t.DONATION = "donation",
t.BOOKING = "booking",
t.SERVICE = "service",
t))(st || {})
  , zn = (t => (t.DEFAULT = "default",
t.PRICE_LTH = "priceLTH",
t.PRICE_HTL = "priceHTL",
t.MOST_RECENT = "mostRecent",
t))(zn || {})
  , ua = (t => (t.CONTAIN = "contain",
t.COVER = "cover",
t.LANDSCAPE = "landscape",
t.PORTRAIT = "portrait",
t))(ua || {})
  , rn = (t => (t.NO_EFFECT = "no_effect",
t.ZOOM = "zoom",
t.SWAP_IMAGE = "swap_image",
t))(rn || {})
  , sn = (t => (t.PAGINATION = "pagination",
t.SCROLL = "scroll",
t))(sn || {});
const ha = {
    id: -1,
    title: "Product name",
    subtitle: null,
    description: `This is a sample product description. You can use it to describe your product,		from its size, weight, and color to other characteristics like material, and so on.
		
Make sure you highlight the best qualities and the most important functions		that the product has. Make your customers want it and tell them how the product		could help make their life easier or simply more beautiful. After you have added		your product description in the store settings, it will appear here automatically`,
    images: [],
    options: [],
    product_collections: [],
    ribbon_text: null,
    site_product_selection: null,
    type: {
        value: st.PHYSICAL
    },
    thumbnail: null,
    variants: [{
        id: "",
        manage_inventory: !1,
        prices: [{
            amount: 0,
            currency_code: "USD",
            sale_amount: null,
            currency: {
                code: "USD",
                decimal_digits: 2,
                template: "$$1",
                name: "US Dollar",
                symbol: "$",
                symbol_native: "$",
                name_plural: "US dollars",
                rounding: 0,
                min_amount: 0
            }
        }],
        options: []
    }],
    seo_settings: {},
    purchasable: !0,
    additional_info: []
};
({
    ...ha,
    images: `${Vt}`,
    thumbnail: `${Vt}`
},
{
    ...ha,
    images: `${Vt}`,
    thumbnail: `${Vt}`
}),
{
    ...ha,
    images: `${Vt}`,
    thumbnail: `${Vt}`
},
{
    ...ha,
    images: `${Vt}`,
    thumbnail: `${Vt}`
},
{
    ...ha,
    images: `${Vt}`,
    thumbnail: `${Vt}`
},
{
    ...ha,
    images: `${Vt}`,
    thumbnail: `${Vt}`
},
{
    ...ha,
    images: `${Vt}`,
    thumbnail: `${Vt}`
},
{
    ...ha,
    images: `${Vt}`,
    thumbnail: `${Vt}`
};
const Ni = "hours"
  , ml = {
    INSUFFICIENT_INVENTORY: "insufficient_inventory",
    BOOKING_UNAVAILABLE: "booking_slot_not_available"
}
  , Np = "demo_01G0E9P2R0CFTNBWEEFCEV8EG5"
  , Hi = "shopping-cart-items"
  , Hp = 864e5
  , uu = "site_product_selection"
  , ds = "lowest_price_first"
  , Zn = 250
  , Vp = {
    [zn.DEFAULT]: "",
    [zn.PRICE_LTH]: "order=ASC&sort_by=price",
    [zn.PRICE_HTL]: "order=DESC&sort_by=price",
    [zn.MOST_RECENT]: "order=DESC&sort_by=created_at"
};
var Er = (t => (t.IMAGE = "image",
t.VIDEO = "video",
t))(Er || {});
const ms = [st.BOOKING, st.DIGITAL]
  , Kn = t => t?.ecommerceStoreId ?? t?.demoEcommerceStoreId ?? Np
  , gl = E(null)
  , ft = E({})
  , pl = E(!1)
  , vl = E([])
  , kt = () => {
    const t = u( () => ft.value.pages || {})
      , n = u( () => ft.value.blocks)
      , a = u( () => Object.fromEntries(Object.entries(n.value).filter( ([,{type: P}]) => P === Mi)))
      , e = u( () => ft.value.elements)
      , r = u( () => ft.value.nav)
      , o = u( () => ft.value.homePageId)
      , i = u( () => ft.value.isNavHidden)
      , s = u( () => ft.value.cookieBannerAcceptText)
      , l = u( () => ft.value.cookieBannerDisclaimer)
      , d = u( () => ft.value.cookieBannerDeclineText)
      , p = u( () => ft.value.blogReadingTimeText)
      , g = u( () => ft.value.meta)
      , v = u( () => ft.value.metaTitle)
      , f = u( () => ft.value.forms)
      , b = u( () => ft.value.styles)
      , D = u( () => ft.value.domain)
      , T = u( () => ft.value.siteId)
      , w = u( () => Kn(ft.value.meta))
      , S = u( () => ft.value.ecommerceShoppingCart)
      , B = u( () => ft.value.isDynamicProductPageEnabled)
      , I = u( () => ft.value.blogCategories)
      , R = u( () => ft.value.languageSwitcherLanguages)
      , $ = u( () => ft.value.currentPageId)
      , G = u( () => t.value[$.value])
      , ee = u( () => ft.value.currentLocale)
      , K = u( () => ft.value.languageKeys)
      , M = u( () => g.value.googleAdsIds && g.value.googleAdsIds.length)
      , j = async P => {
        try {
            const H = await Ap(P);
            vl.value = H.products
        } catch (H) {
            console.error(H)
        }
    }
      , q = P => {
        gl.value = P
    }
      , Y = P => {
        ft.value = P
    }
      , L = P => {
        pl.value = P
    }
      , _ = ({pageId: P}) => {
        if (!t.value[P])
            return null;
        const H = t.value[P].slug;
        return [mn, g.value.defaultLocale].includes(ee.value) ? o.value === P ? "/" : `/${H}` : o.value === P ? `/${ee.value}` : `/${ee.value}/${H}`
    }
    ;
    return {
        website: gl,
        pageData: ft,
        pages: t,
        blocks: n,
        ecommerceProductListBlocks: a,
        elements: e,
        nav: r,
        homePageId: o,
        isNavHidden: i,
        cookieBannerAcceptText: s,
        cookieBannerDisclaimer: l,
        cookieBannerDeclineText: d,
        blogReadingTimeText: p,
        meta: g,
        metaTitle: v,
        forms: f,
        styles: b,
        domain: D,
        siteId: T,
        ecommerceStoreId: w,
        ecommerceShoppingCart: S,
        blogCategories: I,
        languageSwitcherLanguages: R,
        currentPageId: $,
        currentLocale: ee,
        languageKeys: K,
        currentPageData: G,
        setWebsite: q,
        setPageData: Y,
        getPagePathFromId: _,
        getButtonHref: ({isFormButton: P, linkedPageId: H, linkType: k, href: h}) => P ? null : h || k === Ri.PAGE && H && _({
            pageId: H
        }) || h,
        setIsSiteEngine: L,
        isSiteEngine: pl,
        fetchProductSeo: j,
        productSeo: vl,
        isDynamicProductPageEnabled: B,
        hasGoogleAdsApp: M
    }
}
  , fl = E(!0)
  , du = () => {
    const t = n => {
        fl.value = n
    }
    ;
    return {
        hasUserScrolled: u( () => !fl.value),
        setIntersectingState: t
    }
}
  , Up = re({
    __name: "StickyTrigger",
    setup(t, {expose: n}) {
        n();
        const a = {
            threshold: 1
        }
          , e = E(null)
          , r = E(null)
          , {setIntersectingState: o} = du();
        Pe( () => {
            r.value = new IntersectionObserver( ([{isIntersecting: s}]) => {
                o(s)
            }
            ,a),
            e.value && r.value.observe(e.value)
        }
        ),
        Kt( () => {
            r.value?.disconnect()
        }
        );
        const i = {
            OBSERVER_OPTIONS: a,
            stickyTriggerRef: e,
            observer: r,
            setIntersectingState: o
        };
        return Object.defineProperty(i, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        i
    }
})
  , Fp = {
    ref: "stickyTriggerRef",
    class: "sticky-trigger"
};
function jp(t, n, a, e, r, o) {
    return m(),
    y("div", Fp, null, 512)
}
const Gp = oe(Up, [["render", jp]])
  , hl = 1600
  , yl = 1224
  , bl = 12
  , _l = 1224
  , Xa = 1920
  , Yp = (t, n) => {
    const [a,e,r,o] = n.split("/").map(Number.parseFloat)
      , {styles: i} = t.settings ?? {}
      , s = Number.parseFloat(i?.["row-size"]) ?? 48
      , l = Number.parseFloat(i?.["column-gap"]) ?? 24
      , d = Number.parseFloat(i?.["row-gap"]) ?? 16
      , p = (yl - (bl - 1) * l) / bl
      , g = (Xa - hl) / 2 + l
      , v = (hl - yl) / 2 - l;
    let f = Xa;
    const b = r - a
      , D = b * s + (b - 1) * d;
    return e !== 1 && (f -= g),
    o !== 17 && (f -= g),
    e > 2 && (f -= v),
    o < 16 && (f -= v),
    e > 3 && (f -= (e - 3) * (p + l)),
    o < 15 && (f -= (15 - o) * (p + l)),
    o - e === 1 && (f = p),
    {
        width: f,
        height: D
    }
}
  , wl = t => Object.prototype.toString.call(t) === "[object Object]"
  , Kr = t => {
    const n = t.split(" ")
      , a = n.length;
    if (a < 1 || a > 4)
        throw new Error(`Cannot parse ${a} sides`);
    return ( (r, o=r, i=r, s=o) => ({
        top: r,
        right: o,
        bottom: i,
        left: s
    }))(...n)
}
  , Wp = ["padding", "m-padding", "block-padding"]
  , $p = ["border-radius"]
  , ma = (t, n="") => wl(t) ? Object.entries(t).reduce( (a, [e,r]) => {
    const o = n ? `${n}-${e}` : `--${e}`;
    if (wl(r))
        return {
            ...a,
            ...ma(r, o)
        };
    const i = Wp.includes(e) ? Object.entries(Kr(r)).reduce( (s, [l,d]) => ({
        ...s,
        [`${o}-${l}`]: d,
        [o]: r
    }), {}) : {
        [o]: r
    };
    return {
        ...a,
        ...$p.includes(e) ? {
            [o]: `${r}px`
        } : i
    }
}
, {}) : {}
  , mu = (t, n, a) => !t || !n ? null : t === "assets" ? `https://assets.zyrosite.com/${a}/${n}` : t === "unsplash" ? `https://images.unsplash.com/${n}` : n
  , qp = t => typeof t != "string" ? "" : t.charAt(0).toUpperCase() + t.slice(1)
  , er = t => {
    const n = t.split(/[/\\]/).pop()
      , a = n.lastIndexOf(".");
    return n === "" || a < 1 ? "" : n.slice(a + 1).toLowerCase()
}
  , zp = [Hd, "https://assets.zyrosite.space", "https://assets.zyrosite.com", "https://cdn.zyrosite.com"]
  , Zp = "https://images.unsplash.com"
  , Kp = "cdn-cgi/image"
  , gs = [{
    width: 360,
    height: 640
}]
  , ps = [1, 2, 2.625, 3]
  , Qp = [{
    width: 1440
}, {
    width: 1920
}]
  , vs = [1, 2]
  , fs = 16
  , xo = (t, n=fs) => [`(min-width: ${Br}px) ${t}px`, `calc(100vw - ${n * 2}px)`].join(", ")
  , Xp = (t, n, a={}) => {
    const e = a.fit || (a.shouldContain ? "scale-down" : "crop")
      , r = ["format=auto", a.width && `w=${a.width}`, a.height && `h=${a.height}`, `fit=${e}`, a.isLossless && "q=100", a.format && `f=${a.format}`, a.trim && `trim=${a.trim}`, a.quality && !a.isLossless && `q=${a.quality}`].filter(i => !!i).join(",");
    let[,o] = n.split(t);
    for (; o.startsWith("/"); )
        o = o.replace("/", "");
    return `${t}/${Kp}/${r}/${o}`
}
  , Jp = (t, n={}) => {
    const a = new URL(t);
    return a.searchParams.set("auto", n.format || "format"),
    a.searchParams.set("fit", n.shouldContain ? "clip" : "crop"),
    n.width && a.searchParams.set("w", n.width),
    n.height && a.searchParams.set("h", n.height),
    n.isLossless && a.searchParams.set("q", 100),
    a.href
}
  , Et = (t, n, a, e={}) => {
    const r = mu(t, n, a);
    if (!r)
        return null;
    if (er(r) === "svg" || er(r) === "ico" || er(r) === "gif")
        return r;
    const o = zp.find(i => r.includes(i));
    return o ? Xp(o, r, e) : r.includes(Zp) ? Jp(r, e) : r
}
  , Ja = (t, n, a, e={}) => {
    const r = Qp.map(s => vs.map(l => {
        const d = Math.round(s.width * l);
        return `${Et(t, n, a, {
            ...e,
            width: d
        })} ${d}w`
    }
    )).join(",");
    return `${gs.map(s => ps.map(l => {
        const d = Math.round(s.width * l)
          , p = {
            ...e,
            width: d
        };
        return e.isMobileFullScreen && (p.height = Math.round(s.height * l)),
        `${Et(t, n, a, p)} ${d}w`
    }
    )).join(",")},${r}`
}
  , In = (t, n, a, e={}) => {
    if (!e.width)
        return Ja(t, n, a, e);
    const r = vs.map(l => {
        const d = Math.round(e.width * l)
          , p = Math.round(e.height * l);
        return `${Et(t, n, a, {
            ...e,
            width: d,
            height: p
        })} ${d}w`
    }
    ).join(",")
      , o = (e.mobilePadding ?? fs) * 2;
    return `${gs.map(l => {
        const d = l.width - o;
        return ps.map(p => {
            const g = e.width / e.height
              , v = Math.round(d * p)
              , f = Math.round(v / g);
            return `${Et(t, n, a, {
                ...e,
                width: v,
                height: f
            })} ${v}w`
        }
        ).join(",")
    }
    ).join(",")},${r}`
}
  , ev = (t, n, a, e={}) => {
    if (!e.width)
        return Ja(t, n, a, e);
    const r = vs.map(s => {
        const l = Math.round(e.width * s)
          , d = Math.round(e.height * s);
        return `${Et(t, n, a, {
            ...e,
            width: l,
            height: d
        })} ${l}w`
    }
    ).join(",")
      , o = (e.mobilePadding ?? fs) * 2;
    return `${gs.map(s => {
        const l = Math.round((s.width - o + e.columnGap) / e.columnCount - e.columnGap);
        return ps.map(d => {
            const p = Math.round(l * d)
              , g = Math.round(l * d);
            return `${Et(t, n, a, {
                ...e,
                width: g,
                height: !e.isMasonryLayout && g
            })} ${p}w`
        }
        ).join(",")
    }
    ).join(",")},${r}`
}
  , tv = t => {
    if (!t.toSorted)
        return t;
    const {withPositions: n, reorderedLanguages: a} = t.reduce( (e, r) => (Number.isInteger(r.orderPosition) && r.orderPosition >= 0 ? e.withPositions.push(r) : e.reorderedLanguages.push(r),
    e), {
        withPositions: [],
        reorderedLanguages: []
    });
    return n.toSorted( (e, r) => e.orderPosition - r.orderPosition).forEach(e => {
        a.splice(e.orderPosition, 0, e)
    }
    ),
    a
}
  , av = (t, n=!1) => {
    const a = E("z-cookies-consent")
      , e = E("1")
      , r = u( () => !!e.value)
      , o = u( () => e.value === "1")
      , i = u( () => e.value !== "0");
    return Pe( () => {
        const d = fm(window.location.hostname);
        a.value = `z-cookies-consent-${d}`,
        e.value = hm(a.value)
    }
    ),
    {
        acceptCookies: () => {
            rl(a.value, 1, 365),
            e.value = "1",
            !n && ym({
                siteMeta: t,
                areCookiesAllowed: i.value
            })
        }
        ,
        declineCookies: () => {
            rl(a.value, 0, 1),
            e.value = "0"
        }
        ,
        hasUserConsentedCookieBanner: r,
        hasUserAcceptedCookies: o,
        areCookiesAllowed: i
    }
}
  , nv = re({
    __name: "CookieBanner",
    props: {
        disclaimer: {
            type: String,
            required: !0
        },
        acceptText: {
            type: String,
            default: "Accept"
        },
        declineText: {
            type: String,
            default: "Decline"
        },
        siteMeta: {
            type: Object,
            required: !0
        },
        isPreviewMode: {
            type: Boolean,
            default: !1
        }
    },
    setup(t, {expose: n}) {
        n();
        const a = t
          , {acceptCookies: e, declineCookies: r, hasUserConsentedCookieBanner: o} = av(a.siteMeta, a.isPreviewMode)
          , i = {
            props: a,
            acceptCookies: e,
            declineCookies: r,
            hasUserConsentedCookieBanner: o,
            get isAppPrerendering() {
                return bm
            }
        };
        return Object.defineProperty(i, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        i
    }
})
  , rv = {
    key: 0,
    class: "cookie-banner"
}
  , ov = {
    class: "cookie-banner__frame"
}
  , iv = {
    class: "cookie-banner__text"
}
  , sv = {
    class: "cookie-banner__controls"
};
function lv(t, n, a, e, r, o) {
    return !e.isAppPrerendering && !e.hasUserConsentedCookieBanner ? (m(),
    y("div", rv, [C("div", ov, [C("p", iv, ae(a.disclaimer), 1), C("div", sv, [C("button", {
        class: "control-button primary",
        onClick: n[0] || (n[0] = (...i) => e.acceptCookies && e.acceptCookies(...i))
    }, ae(a.acceptText), 1), C("button", {
        class: "control-button",
        onClick: n[1] || (n[1] = (...i) => e.declineCookies && e.declineCookies(...i))
    }, ae(a.declineText), 1)])])])) : x("", !0)
}
const cv = oe(nv, [["render", lv]])
  , uv = t => {
    const n = t.colors.map(a => a.value).join(", ");
    return `linear-gradient(${t.angle}deg, ${n})`
}
  , dv = re({
    __name: "BlockBackground",
    props: {
        type: {
            default: Ya.COLOR
        },
        alt: {},
        overlayOpacity: {},
        src: {},
        srcset: {},
        isEager: {
            type: Boolean
        },
        gradient: {},
        color: {},
        isFixed: {
            type: Boolean
        },
        isMobile: {
            type: Boolean,
            default: !1
        },
        isOpacityDisabled: {
            type: Boolean,
            default: !1
        },
        videoPoster: {}
    },
    setup(t, {expose: n}) {
        n(),
        ht(g => ({
            "2acd084c": o.value,
            "6a072896": i.value.xStart,
            "6bbc0135": i.value.yStart,
            c01d2be2: i.value.xEnd,
            e8e6c9f8: l.value
        }));
        const a = t
          , e = u( () => a.type === Ya.VIDEO)
          , r = u( () => a.type === Ya.IMAGE)
          , o = u( () => a.type === Ya.GRADIENT && a.gradient ? uv(a.gradient) : a.isOpacityDisabled ? a.type === Ya.COLOR ? a.color : "rgb(255, 255, 255)" : a.type === Ya.COLOR ? a.color : "transparent")
          , i = u( () => {
            const v = ((a.gradient?.angle || 0) + 90) * Math.PI / 180
              , f = `${Math.round(50 - 50 * Math.cos(v))}%`
              , b = `${Math.round(50 - 50 * Math.sin(v))}%`
              , D = `${Math.round(50 + 50 * Math.cos(v))}%`
              , T = `${Math.round(50 + 50 * Math.sin(v))}%`;
            return {
                xStart: f,
                yStart: b,
                xEnd: D,
                yEnd: T
            }
        }
        )
          , s = u( () => [Ya.IMAGE, Ya.VIDEO].includes(a.type) && !a.isOpacityDisabled && a.overlayOpacity)
          , l = u( () => {
            const g = a.overlayOpacity ? a.overlayOpacity : 0;
            return s.value && !a.isOpacityDisabled && g
        }
        )
          , d = E(null);
        Pe( () => {
            Nt( () => {
                d.value?.classList.add("transition-with-bg")
            }
            )
        }
        );
        const p = {
            props: a,
            isVideoBackground: e,
            isImageBackground: r,
            backgroundColor: o,
            gradientBackgroundPosition: i,
            isBackgroundOverlayShown: s,
            backgroundOverlayOpacity: l,
            blockBackgroundRef: d,
            get BACKGROUND_TYPES() {
                return Ya
            }
        };
        return Object.defineProperty(p, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        p
    }
})
  , mv = ["alt", "src", "srcset", "loading"]
  , gv = ["src", "poster"];
function pv(t, n, a, e, r, o) {
    return m(),
    y("div", {
        ref: "blockBackgroundRef",
        class: J(["block-background", {
            "block-background--fixed": a.isFixed,
            "block-background--animated-gradient": a.type === e.BACKGROUND_TYPES.GRADIENT && a.gradient?.isAnimated
        }])
    }, [e.isImageBackground ? (m(),
    y("img", {
        key: a.src,
        alt: a.alt,
        src: a.src,
        srcset: a.srcset,
        width: "100vw",
        sizes: "(max-width: 500px) 800px, 100vw",
        loading: a.isEager ? "eager" : "lazy",
        class: J(["block-background__image", {
            "block-background__image--fixed": a.isFixed
        }])
    }, null, 10, mv)) : x("", !0), e.isVideoBackground ? (m(),
    y("video", {
        key: a.src,
        src: a.src,
        autoplay: "",
        muted: "",
        loop: "",
        playsinline: "",
        class: J(["block-background__image", {
            "block-background__video--fixed": a.isFixed
        }]),
        poster: a.videoPoster
    }, null, 10, gv)) : x("", !0), e.isBackgroundOverlayShown ? (m(),
    y("div", {
        key: 2,
        class: J(["block-background__overlay", {
            "block-background__overlay--fixed": a.isFixed
        }])
    }, null, 2)) : x("", !0)], 2)
}
const hs = oe(dv, [["render", pv]])
  , vv = re({
    props: {
        categories: {
            type: Array,
            default: () => []
        },
        blogCategories: {
            type: Object,
            default: () => ({})
        }
    },
    methods: {
        getCategoryNameById(t) {
            return this.blogCategories[t]?.name?.toUpperCase()
        }
    }
})
  , fv = {
    class: "categories"
}
  , hv = ["onClick"];
function yv(t, n, a, e, r, o) {
    return m(),
    y("p", fv, [(m(!0),
    y(ge, null, Ce(t.categories, (i, s) => (m(),
    y("span", {
        key: i,
        class: "categories__item",
        onClick: l => t.$emit("filter-category", t.categories[s])
    }, ae(t.getCategoryNameById(i)), 9, hv))), 128))])
}
const gu = oe(vv, [["render", yv], ["__scopeId", "data-v-17a7aef3"]])
  , bv = re({
    __name: "BlockBlogListItemMeta",
    props: {
        authorName: {
            type: String,
            default: ""
        },
        minutesAmount: {
            type: String,
            default: "0"
        },
        blogReadingTimeText: {
            type: String,
            default: ""
        },
        date: {
            type: String,
            default: ""
        },
        showAvatar: {
            type: Boolean,
            default: !0
        },
        showName: {
            type: Boolean,
            default: !0
        },
        showDate: {
            type: Boolean,
            default: !0
        },
        showMinutes: {
            type: Boolean,
            default: !0
        }
    },
    setup(t, {expose: n}) {
        n();
        const a = {
            get DEFAULT_MIN_READ_TEXT() {
                return Vd
            }
        };
        return Object.defineProperty(a, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        a
    }
})
  , _v = {
    class: "blog-list-item-meta"
}
  , wv = {
    class: "font-secondary"
}
  , kv = {
    class: "blog-list-item-meta__author-name"
}
  , Sv = {
    class: "blog-list-item-meta__subtitle"
}
  , Tv = {
    key: 0
}
  , Cv = {
    key: 1
};
function Iv(t, n, a, e, r, o) {
    const i = lt("qa");
    return m(),
    y("div", _v, [C("div", wv, [se((m(),
    y("p", kv, [qe(ae(a.authorName), 1)])), [[da, a.showName], [i, "blog-author"]]), se(C("p", Sv, [a.showDate && a.date ? (m(),
    y("span", Tv, ae(a.date), 1)) : x("", !0), a.showMinutes ? (m(),
    y("span", Cv, ae(`${a.minutesAmount} ${a.blogReadingTimeText || e.DEFAULT_MIN_READ_TEXT}`), 1)) : x("", !0)], 512), [[da, a.showDate || a.showMinutes]])])])
}
const pu = oe(bv, [["render", Iv], ["__scopeId", "data-v-d92226f1"]])
  , vu = t => new Date(t).toLocaleDateString("en-US")
  , ys = re({
    name: "BlockBlogHeader",
    components: {
        BlockBlogListItemMeta: pu,
        BlockBlogListItemCategories: gu
    },
    props: {
        data: {
            type: Object,
            required: !0
        },
        currentBlogPage: {
            type: Object,
            required: !0
        },
        blogCategories: {
            type: Object,
            default: () => ({})
        },
        blogReadingTimeText: {
            type: [String, void 0],
            default: void 0
        }
    },
    setup(t) {
        const a = u( () => `${t.data.settings.blogTitleFontSize || 32}px`);
        return {
            getFormattedNumericDate: vu,
            DATA_ATTRIBUTE_ANIMATION_ROLE: Ka,
            DATA_ATTRIBUTE_ANIMATION_ROLE_BLOCK_ELEMENT: gr,
            blogTitleTextSize: a
        }
    },
    computed: {
        categories() {
            return this.currentBlogPage?.categories ?? []
        },
        meta() {
            return this.currentBlogPage?.meta ?? {}
        },
        authorName() {
            return this.meta?.authorName
        },
        shownItems() {
            return this.data?.settings?.shownItems ?? {}
        },
        areCategoriesShown() {
            return this.shownItems.categories && this.categories.length
        }
    }
})
  , kl = () => {
    ht(t => ({
        "0327e7ea": t.blogTitleTextSize
    }))
}
  , Sl = ys.setup;
ys.setup = Sl ? (t, n) => (kl(),
Sl(t, n)) : kl;
const Pv = {
    class: "block-blog-header__content"
}
  , Ev = {
    class: "font-primary block-blog-header__title"
}
  , Dv = {
    key: 0,
    class: "font-secondary block-blog-header__description"
};
function Mv(t, n, a, e, r, o) {
    const i = mt("BlockBlogListItemCategories")
      , s = mt("BlockBlogListItemMeta")
      , l = lt("qa");
    return se((m(),
    y("div", pt({
        class: "block-blog-header",
        [t.DATA_ATTRIBUTE_ANIMATION_ROLE || ""]: t.DATA_ATTRIBUTE_ANIMATION_ROLE_BLOCK_ELEMENT
    }), [C("div", Pv, [se((m(),
    y("h1", Ev, [qe(ae(t.meta.title), 1)])), [[l, "blog-label-posttitle"]]), t.shownItems.description ? se((m(),
    y("p", Dv, [qe(ae(t.meta.description), 1)])), [[l, "blog-label-postdescription"]]) : x("", !0), t.areCategoriesShown ? se((m(),
    z(i, {
        key: 1,
        class: "font-secondary",
        categories: t.categories,
        "blog-categories": t.blogCategories
    }, null, 8, ["categories", "blog-categories"])), [[l, "blog-label-category"]]) : x("", !0), Ae(s, Je({
        authorName: t.authorName,
        minutesAmount: t.currentBlogPage.minutesToRead,
        date: t.getFormattedNumericDate(t.currentBlogPage.date),
        showAvatar: t.shownItems.avatar,
        showName: t.shownItems.authorFullName,
        showDate: t.shownItems.date,
        showMinutes: t.shownItems.minutesToRead
    }, {
        "blog-reading-time-text": t.blogReadingTimeText
    }), null, 16, ["blog-reading-time-text"])])], 16)), [[l, "blog-postinformation"]])
}
const Av = oe(ys, [["render", Mv], ["__scopeId", "data-v-c599b443"]])
  , Vi = E(!1)
  , Tl = E(null)
  , Ui = ({blockId: t}) => ({
    isSearchOpenedInCurrentBlock: u( () => Tl.value === t && Vi.value),
    toggleSearchDropdown: e => {
        Tl.value = t,
        Vi.value = e
    }
})
  , Dr = 16
  , Va = 1224
  , Ua = 360
  , fu = Ua - Dr * 2
  , Cl = 16
  , Ov = re({
    __name: "BlockLayoutWrapper",
    props: {
        isMobileLegacy: {
            type: Boolean,
            default: !1
        },
        isBlockResponsive: {
            type: Boolean,
            default: !1
        },
        isForcedOnTop: {
            type: Boolean,
            default: !1
        },
        isInPreviewMode: {
            type: Boolean,
            default: !1
        }
    },
    setup(t, {expose: n}) {
        n(),
        ht(l => ({
            c467b54c: o.value,
            "2c660f9c": r.value,
            "6ced7b1e": e.value,
            "1f9bbfe2": i.value
        }));
        const a = t
          , e = u( () => a.isBlockResponsive && !a.isInPreviewMode ? `0 ${Dr * 100 / Ua}vw` : `0 ${Dr}px`)
          , r = u( () => `${Ua}px`)
          , o = u( () => `${Va}px`)
          , i = u( () => `0 ${Dr}px`)
          , s = {
            props: a,
            mobileBlockPaddingCSSVar: e,
            mobileMaxWidthCSSVar: r,
            maxWidthCSSVar: o,
            tabletBlockPaddingCSSVar: i
        };
        return Object.defineProperty(s, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        s
    }
});
function xv(t, n, a, e, r, o) {
    return m(),
    y("div", {
        class: J(["block-layout", {
            "block-layout--legacy": a.isMobileLegacy,
            "block-layout--layout": !a.isMobileLegacy,
            "block-layout--forcedOnTop": a.isForcedOnTop
        }])
    }, [ne(t.$slots, "default")], 2)
}
const Bv = oe(Ov, [["render", xv]])
  , Il = ({blockElements: t, elementPositionKey: n}) => t?.length ? Math.max(...t.map(a => a[n].top + a[n].height)) : 0
  , Lv = [Nc, Hc]
  , Rv = ({lowestElementBottom: t, sectionMinHeight: n}) => {
    const e = t >= n ? 0 : n - t;
    return t ? `${e}px` : "1fr"
}
  , Bo = ({blockElementsWithPosition: t}) => {
    try {
        const n = t.flatMap( ({position: e}) => [e.top, e.height + e.top]);
        return [...new Set([0, ...n])].sort( (e, r) => e - r)
    } catch (n) {
        console.error(n)
    }
}
  , Fi = ({rowTopsUniqueSorted: t, columnsLeftUniqueSorted: n, elementPosition: a}) => {
    const {top: e, left: r, width: o, height: i} = a
      , s = t.indexOf(e) + 1
      , l = t.indexOf(e + i) + 1
      , d = n.indexOf(r) + 1
      , p = n.indexOf(r + o) + 1;
    return {
        rowStart: s,
        rowEnd: l,
        columnStart: d,
        columnEnd: p
    }
}
  , Lo = ({blockElementsWithPosition: t, blockWidth: n}) => {
    const a = t.flatMap( ({position: r}) => [r.left, r.width + r.left]);
    return [...new Set([0, ...a, n])].sort( (r, o) => r - o)
}
  , Qr = ({blockElements: t, elementPositionKey: n}) => t.map(a => ({
    ...a,
    position: a[n]
}))
  , Pl = ({blockElements: t, elementPositionKey: n, buildResponsiveGrid: a}) => {
    const e = n === Aa ? fu : Va
      , r = Qr({
        blockElements: t,
        elementPositionKey: n
    });
    return Lo({
        blockElementsWithPosition: r,
        blockWidth: e
    }).map( (l, d, p) => d === 0 ? l : l - p[d - 1]).filter(l => l !== 0).map(l => a ? `${l / e * 100}%` : `${l}px`).join(" ")
}
  , Nv = ({gridRows: t}) => t.filter(n => n !== 0)
  , Hv = ({gridRows: t}) => t.map(n => `${n}px`)
  , Vv = ({gridRows: t}) => t.map(n => `minmax(${n}px, auto)`)
  , Uv = ({gridRows: t, responsiveRows: n, isMobile: a}) => t.map( (e, r) => n.includes(r + 1) ? "auto" : `${e * 100 / (a ? Ua : Va)}vw`)
  , ri = ({gridRows: t, lastRowHeight: n}) => `${t.join(" ")} ${n}`
  , go = ({blockElements: t, elementPositionKey: n, buildResponsiveGrid: a, responsiveRows: e, lowestElementBottom: r, sectionMinHeight: o}) => {
    const i = n === Aa
      , s = Qr({
        blockElements: t,
        elementPositionKey: n
    })
      , d = Bo({
        blockElementsWithPosition: s
    }).map( (f, b, D) => b === 0 ? f : f - D[b - 1])
      , p = Rv({
        lowestElementBottom: r,
        sectionMinHeight: o
    })
      , g = Nv({
        gridRows: d
    });
    if (!a) {
        const f = Hv({
            gridRows: g
        });
        return ri({
            gridRows: f,
            lastRowHeight: p
        })
    }
    if (!e) {
        const f = Vv({
            gridRows: g
        });
        return ri({
            gridRows: f,
            lastRowHeight: p
        })
    }
    const v = Uv({
        gridRows: g,
        responsiveRows: e,
        isMobile: i
    });
    return ri({
        gridRows: v,
        lastRowHeight: p
    })
}
  , El = ({blockElements: t, elementPositionKey: n}) => {
    const a = Qr({
        blockElements: t,
        elementPositionKey: n
    })
      , e = Bo({
        blockElementsWithPosition: a
    })
      , r = Lo({
        blockElementsWithPosition: a,
        blockWidth: n === Aa ? fu : Va
    });
    return t.filter(o => !Lv.includes(o.type)).reduce( (o, i) => {
        const {rowEnd: s, rowStart: l} = Fi({
            rowTopsUniqueSorted: e,
            columnsLeftUniqueSorted: r,
            elementPosition: i[n]
        })
          , d = s > l ? s - l : 1
          , p = [...new Array(d).keys()].map( (g, v) => l + v);
        return o.some(g => p.includes(g)) ? o : [...o, s - 1]
    }
    , [])
}
  , Fv = (t, n) => {
    const a = Qr({
        blockElements: t,
        elementPositionKey: Cn
    })
      , e = Bo({
        blockElementsWithPosition: a
    })
      , r = Lo({
        blockElementsWithPosition: a,
        blockWidth: Va
    })
      , o = Qr({
        blockElements: t,
        elementPositionKey: Aa
    })
      , i = Bo({
        blockElementsWithPosition: o
    })
      , s = Lo({
        blockElementsWithPosition: o,
        blockWidth: Va
    });
    return t.map(l => {
        const {rowStart: d, rowEnd: p, columnStart: g, columnEnd: v} = Fi({
            rowTopsUniqueSorted: e,
            columnsLeftUniqueSorted: r,
            elementPosition: l.desktop
        })
          , {rowStart: f, rowEnd: b, columnStart: D, columnEnd: T} = Fi({
            rowTopsUniqueSorted: i,
            columnsLeftUniqueSorted: s,
            elementPosition: l.mobile
        });
        return {
            ...l,
            settings: {
                ...l.settings,
                styles: {
                    ...l.settings?.styles || {},
                    "z-index": n.indexOf(l.elementId) + 1,
                    "grid-row": `${d}/${p}`,
                    "grid-column": `${g}/${v}`,
                    "m-grid-row": `${f}/${b}`,
                    "m-grid-column": `${D}/${T}`
                }
            }
        }
    }
    )
}
  , ji = ({blockData: t, siteElements: n, shouldBuildResponsive: a=!0}={}) => {
    const e = E(a)
      , r = u( () => t.value.components.map(I => ({
        ...n.value[I],
        elementId: I
    })))
      , o = u( () => r?.value?.length ? Il({
        blockElements: r.value,
        elementPositionKey: Aa
    }) : null)
      , i = u( () => r?.value?.length ? Il({
        blockElements: r.value,
        elementPositionKey: Cn
    }) : null)
      , s = u( () => t.value.mobile?.minHeight && o.value ? "auto" : `${t.value.mobile?.minHeight || Cl}px`)
      , l = u( () => t.value.desktop?.minHeight && i.value ? "auto" : `${t.value.desktop?.minHeight}px`)
      , d = u( () => t.value.components.some(I => !n.value[I].mobile))
      , p = u( () => go({
        blockElements: r.value,
        elementPositionKey: Cn,
        buildResponsiveGrid: e.value
    }))
      , g = u( () => Pl({
        blockElements: r.value,
        elementPositionKey: Cn,
        buildResponsiveGrid: e.value
    }))
      , v = u( () => Pl({
        blockElements: r.value,
        elementPositionKey: Aa,
        buildResponsiveGrid: e.value
    }))
      , f = u( () => El({
        blockElements: r.value,
        elementPositionKey: Aa
    }))
      , b = u( () => go({
        blockElements: r.value,
        elementPositionKey: Aa,
        buildResponsiveGrid: e.value,
        responsiveRows: f.value,
        lowestElementBottom: o.value,
        sectionMinHeight: t.value.mobile?.minHeight
    }))
      , D = u( () => go({
        blockElements: r.value,
        elementPositionKey: Aa,
        buildResponsiveGrid: e.value
    }))
      , T = u( () => El({
        blockElements: r.value,
        elementPositionKey: Cn
    }))
      , w = u( () => go({
        blockElements: r.value,
        elementPositionKey: Cn,
        buildResponsiveGrid: e.value,
        responsiveRows: T.value,
        lowestElementBottom: i.value,
        sectionMinHeight: t.value.desktop?.minHeight
    }))
      , S = u( () => Fv(r.value, t.value.zindexes))
      , B = u( () => ({
        "--m-grid-template-rows": b.value,
        "--t-grid-template-rows": D.value,
        "--small-desktop-grid-template-rows": w.value,
        "--grid-template-rows": p.value,
        "--m-grid-template-columns": v.value,
        "--grid-template-columns": g.value,
        "--m-block-min-height": s.value,
        "--t-block-min-height": `${t.value.mobile?.minHeight || Cl}px`,
        "--small-desktop-block-min-height": l.value,
        "--block-min-height": `${t.value.desktop.minHeight}px`
    }));
    return {
        blockElements: r,
        layoutElements: S,
        buildResponsiveGrid: e,
        layoutCSSVars: B,
        isMobileLegacy: d
    }
}
  , jv = re({
    name: "LayoutElementWrapper",
    props: {
        elementData: {
            type: Object,
            required: !0
        },
        isForcedOnTop: {
            type: Boolean,
            default: !1
        },
        isMobileLegacy: {
            type: Boolean,
            default: !1
        },
        isMobileView: {
            type: Boolean,
            default: !1
        }
    },
    computed: {
        settings() {
            return this.elementData.settings
        },
        styles() {
            return this.settings.styles
        },
        innerBackgroundValue() {
            const {innerBackground: t} = this.elementData;
            if (!t)
                return {};
            const n = t[t.current];
            return t.current !== "image" ? {
                "--gridItemInnerBackground": n
            } : {
                "--gridItemInnerBackground": `url(${n})`,
                "--gridItemInnerBackgroundOverlayOpacity": "overlay-opacity"in t ? t["overlay-opacity"] : null
            }
        },
        isHiddenDesktop() {
            return this.elementData.desktop.isHidden
        },
        isHiddenMobile() {
            return this.elementData.mobile.isHidden
        },
        computedStyles() {
            return {
                ...ma(this.styles),
                ...this.innerBackgroundValue,
                ...this.isHiddenDesktop && !this.isMobileView && {
                    "--hidden-element-z-index": 0
                },
                ...this.isHiddenMobile && this.isMobileView && {
                    "--m-hidden-element-z-index": 0
                },
                ...this.isForcedOnTop && {
                    "--z-index": Ud
                }
            }
        }
    }
});
function Gv(t, n, a, e, r, o) {
    return m(),
    y("div", {
        class: J(["layout-element", {
            "layout-element--legacy": t.isMobileLegacy,
            "layout-element--layout": !t.isMobileLegacy
        }]),
        style: ze(t.computedStyles)
    }, [ne(t.$slots, "default")], 6)
}
const Yv = oe(jv, [["render", Gv]])
  , Wv = re({
    __name: "GridButton",
    props: {
        tagName: {
            default: "a"
        },
        href: {
            default: null
        },
        target: {
            default: null
        },
        rel: {
            default: null
        },
        type: {
            default: "primary"
        },
        buttonType: {
            default: null
        },
        content: {
            default: ""
        },
        isDisabled: {
            type: Boolean,
            default: !1
        },
        isLoading: {
            type: Boolean,
            default: !1
        },
        fontSizeMobile: {
            default: null
        },
        fontSizeDesktop: {
            default: null
        },
        fontFamily: {
            default: null
        },
        fontWeight: {
            default: null
        },
        borderWidth: {
            default: null
        },
        borderRadius: {
            default: null
        },
        backgroundColor: {
            default: null
        },
        fontColor: {
            default: null
        },
        borderColor: {
            default: null
        },
        backgroundColorHover: {
            default: null
        },
        fontColorHover: {
            default: null
        },
        borderColorHover: {
            default: null
        },
        mobileElementWidth: {
            default: 0
        },
        mobileElementHeight: {
            default: 0
        },
        isInBuilder: {
            type: Boolean,
            default: !1
        }
    },
    emits: ["click", "drag", "dragstart"],
    setup(t, {expose: n}) {
        n();
        const a = t
          , e = u( () => `${a.mobileElementWidth * 100 / Ua}vw`)
          , r = u( () => `${a.mobileElementHeight * 100 / Ua}vw`)
          , o = u( () => ({
            "--font-size-mobile": a.fontSizeMobile ? `${a.fontSizeMobile}px` : null,
            "--font-size-desktop": a.fontSizeDesktop ? `${a.fontSizeDesktop}px` : null,
            "--font-family": a.fontFamily,
            "--font-weight": a.fontWeight,
            "--border-radius": a.borderRadius === 0 || a.borderRadius ? `${a.borderRadius}px` : null,
            "--border-width": a.borderWidth === 0 || a.borderWidth ? `${a.borderWidth}px` : "0px",
            "--background-color": a.backgroundColor,
            "--font-color": a.fontColor,
            "--border-color": a.borderColor || "rgb(26, 26, 26)",
            "--background-color-hover": a.backgroundColorHover,
            "--font-color-hover": a.fontColorHover,
            "--border-color-hover": a.borderColorHover,
            "--m-height": a.isInBuilder ? "100%" : r.value,
            "--m-width": a.isInBuilder ? "100%" : e.value
        }))
          , i = u( () => ({
            "grid-button--empty": !a.content,
            [`grid-button--${a.type}`]: a.type,
            loading: a.isLoading
        }))
          , s = {
            props: a,
            mobileWidthCSSVar: e,
            mobileHeightCSSVar: r,
            buttonCSSVars: o,
            computedClass: i
        };
        return Object.defineProperty(s, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        s
    }
});
function $v(t, n, a, e, r, o) {
    return m(),
    z(dn(a.tagName), {
        type: a.buttonType,
        name: a.buttonType,
        href: a.href,
        disabled: a.isDisabled,
        target: a.target,
        rel: a.rel,
        class: J(["grid-button", e.computedClass]),
        "aria-hidden": a.isLoading,
        style: ze(e.buttonCSSVars),
        onClick: n[0] || (n[0] = i => t.$emit("click", i)),
        onDrag: n[1] || (n[1] = i => t.$emit("drag", i)),
        onDragstart: n[2] || (n[2] = i => t.$emit("dragstart", i))
    }, {
        default: ye( () => [qe(ae(a.content), 1)]),
        _: 1
    }, 40, ["type", "name", "href", "disabled", "target", "rel", "class", "aria-hidden", "style"])
}
const Hn = oe(Wv, [["render", $v], ["__scopeId", "data-v-4a176f12"]])
  , Xr = (t, {href: n}={}) => ({
    href: n,
    type: u( () => t.data.settings?.type),
    fontSizeMobile: u( () => t.data.mobile?.fontSize),
    fontSizeDesktop: u( () => t.data.desktop?.fontSize),
    fontFamily: u( () => t.data.fontFamily),
    fontWeight: u( () => t.data.fontWeight),
    borderWidth: u( () => t.data.borderWidth),
    borderRadius: u( () => t.data.borderRadius),
    backgroundColor: u( () => t.data.backgroundColor),
    fontColor: u( () => t.data.fontColor),
    borderColor: u( () => t.data.borderColor),
    backgroundColorHover: u( () => t.data.backgroundColorHover),
    fontColorHover: u( () => t.data.fontColorHover),
    borderColorHover: u( () => t.data.borderColorHover),
    buttonType: u( () => t.data.settings.isFormButton ? "submit" : null),
    tagName: u( () => t.data.settings.isFormButton ? "button" : "a"),
    target: u( () => t.data.target),
    rel: u( () => t.data.rel),
    content: u( () => t.data.content),
    mobileElementWidth: u( () => t.data.mobile.width),
    mobileElementHeight: u( () => t.data.mobile.height)
})
  , qv = {
    __name: "GridButtonProviderUser",
    props: {
        data: {
            type: Object,
            required: !0
        },
        currentLocale: {
            type: String,
            required: !0
        },
        mobileElementWidth: {
            type: Number,
            default: null
        },
        mobileElementHeight: {
            type: Number,
            default: null
        }
    },
    setup(t, {expose: n}) {
        n();
        const a = t
          , {getButtonHref: e} = kt()
          , {tagName: r, href: o, target: i, rel: s, type: l, buttonType: d, content: p, fontSizeMobile: g, fontSizeDesktop: v, fontFamily: f, fontWeight: b, borderWidth: D, borderRadius: T, backgroundColor: w, fontColor: S, borderColor: B, backgroundColorHover: I, fontColorHover: R, borderColorHover: $} = Xr(a, {
            href: u( () => e({
                isFormButton: a.data.settings.isFormButton,
                linkedPageId: a.data.linkedPageId,
                linkType: a.data.linkType,
                href: a.data.href
            }))
        })
          , G = {
            props: a,
            getButtonHref: e,
            tagName: r,
            href: o,
            target: i,
            rel: s,
            type: l,
            buttonType: d,
            content: p,
            fontSizeMobile: g,
            fontSizeDesktop: v,
            fontFamily: f,
            fontWeight: b,
            borderWidth: D,
            borderRadius: T,
            backgroundColor: w,
            fontColor: S,
            borderColor: B,
            backgroundColorHover: I,
            fontColorHover: R,
            borderColorHover: $,
            computed: u,
            get useSiteGlobal() {
                return kt
            },
            GridButton: Hn,
            get useGridButton() {
                return Xr
            }
        };
        return Object.defineProperty(G, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        G
    }
};
function zv(t, n, a, e, r, o) {
    return m(),
    z(e.GridButton, {
        "tag-name": e.tagName,
        href: e.href,
        target: e.target,
        rel: e.rel,
        type: e.type,
        "button-type": e.buttonType,
        content: e.content,
        "font-size-mobile": e.fontSizeMobile,
        "font-size-desktop": e.fontSizeDesktop,
        "font-family": e.fontFamily,
        "font-weight": e.fontWeight,
        "border-width": e.borderWidth,
        "border-radius": e.borderRadius,
        "background-color": e.backgroundColor,
        "font-color": e.fontColor,
        "border-color": e.borderColor,
        "background-color-hover": e.backgroundColorHover,
        "font-color-hover": e.fontColorHover,
        "border-color-hover": e.borderColorHover,
        "mobile-element-width": a.mobileElementWidth,
        "mobile-element-height": a.mobileElementHeight
    }, null, 8, ["tag-name", "href", "target", "rel", "type", "button-type", "content", "font-size-mobile", "font-size-desktop", "font-family", "font-weight", "border-width", "border-radius", "background-color", "font-color", "border-color", "background-color-hover", "font-color-hover", "border-color-hover", "mobile-element-width", "mobile-element-height"])
}
const Zv = oe(qv, [["render", zv]])
  , Kv = t => {
    const n = u( () => t.data.settings?.productId)
      , a = u( () => t.data.settings?.productVariantId);
    return {
        productId: n,
        productVariantId: a
    }
}
  , oi = E("")
  , Dl = E({})
  , Ml = E("")
  , Ca = () => ({
    openEcommerceModal: e => {
        oi.value = e
    }
    ,
    closeEcommerceModal: () => {
        oi.value = null
    }
    ,
    openEcommerceModalName: oi,
    productPreviewData: Dl,
    quickPreviewProductId: Ml,
    setProductPreviewData: (e, r) => {
        Dl.value = e,
        Ml.value = r
    }
})
  , Al = t => t.variants.reduce( (n, a) => {
    const e = n.prices[0]?.sale_amount || n.prices[0]?.amount
      , r = a.prices[0]?.sale_amount || a.prices[0]?.amount;
    return e < r ? n : a
}
)
  , Jr = (t, n) => t.id === n?.id && t.value === n?.value
  , Gi = t => ms.includes(t.type.value) && !t.variants[0].prices[0].amount
  , Qv = (t, n) => t.find(a => {
    const e = a.variant_id === n.variants[0].id;
    if (a.custom_field_values?.length) {
        const r = a.custom_field_values.some(o => n.custom_field_values?.some(i => Jr(o, i)));
        return e && r
    }
    return e
}
)
  , Xv = t => t.map(n => {
    const a = {
        ...n
    };
    return a.custom_fields?.length ? (delete a.custom_fields,
    {
        ...a,
        custom_field_values: n.custom_fields.map(e => ({
            custom_field_id: e.id,
            value: e.value || ""
        }))
    }) : a
}
)
  , Jv = t => t.reduce( (n, a) => Qv(n, a) ? n.map(r => {
    const o = r.variant_id === a.variants[0].id
      , i = r.custom_field_values?.every(s => a.custom_field_values?.some(l => l.id === s.id && l.value === s.value)) ?? !0;
    return o && i ? {
        variant_id: r.variant_id,
        quantity: r.quantity + 1,
        custom_field_values: r.custom_field_values
    } : r
}
) : [...n, {
    custom_field_values: a.custom_field_values,
    variant_id: a.variants[0].id,
    quantity: 1,
    time_slot: a.variants[0].booking_event?.time_slot,
    time_zone: a.variants[0].booking_event?.time_zone
}], [])
  , io = () => {
    const {openEcommerceModal: t} = Ca()
      , {meta: n, ecommerceShoppingCart: a, isSiteEngine: e, hasGoogleAdsApp: r} = kt();
    let o = "";
    const i = E("");
    Pe( () => {
        o = n.value?.ecommerceStoreId,
        i.value = `${window.location.origin}${window.location.pathname}`
    }
    );
    function s(p) {
        const g = p.some(D => D.type.value === st.DIGITAL)
          , v = p.some(D => D.type.value === st.DONATION)
          , f = p.some(D => D.type.value === st.BOOKING);
        let b = "";
        return f ? b = `&product=${st.BOOKING}` : v ? b = `&product=${st.DONATION}` : g && (b = `&product=${st.DIGITAL}`),
        `${i.value}?open-modal=EcommerceCheckoutSuccess${b}`
    }
    async function l(p) {
        const g = Xv(p)
          , v = Jv(g)
          , f = a.value?.lang || "en";
        let b = await Op({
            items: v,
            cancelUrl: i.value,
            successUrl: s(g),
            ...!e.value && {
                checkoutUrl: `${window.location.origin}/checkout`
            },
            locale: f,
            storeId: o
        });
        return b = new URL(b),
        b.searchParams.set("lang", f),
        b.toString()
    }
    async function d(p) {
        if (!o) {
            t("EcommerceCheckoutFailed");
            return
        }
        try {
            r.value && Go("begin_checkout", _m(p));
            const g = await l(p);
            window.location.assign(g)
        } catch (g) {
            g.code === ml.INSUFFICIENT_INVENTORY ? t("EcommerceOutOfStock") : g.code === ml.BOOKING_UNAVAILABLE ? t("EcommerceBookingUnavailable") : t("EcommerceCheckoutFailed")
        }
    }
    return {
        initiateCheckout: d,
        storeId: o,
        cancelUrl: i,
        createCheckoutUrl: l
    }
}
  , ef = () => new Promise(t => {
    setTimeout( () => {
        const n = window.localStorage.getItem(Hi);
        if (!n)
            return t([]);
        const a = JSON.parse(n);
        return a.payload.length ? Date.now() > a.expiry ? (window.localStorage.removeItem(Hi),
        t([])) : t(a.payload) : t([])
    }
    , 0)
}
)
  , ii = E([])
  , _n = E([])
  , fr = E([])
  , Ol = E(null)
  , xl = E(!1)
  , Bl = E(!1)
  , Ll = E({})
  , po = E({})
  , Rl = E(!1)
  , tf = E(!1)
  , af = (t, n) => t.find(a => {
    const e = a.product.variants[0].id === n.variants[0].id;
    if (a.product.custom_fields?.length) {
        const r = a.product.custom_fields.some(o => n.custom_fields?.some(i => Jr(o, i)));
        return e && r
    }
    return e
}
)
  , Ia = ({blockId: t}={
    blockId: "global"
}) => {
    const {meta: n, pages: a, ecommerceProductListBlocks: e} = kt()
      , r = u( () => n.value[Fd] === jd)
      , o = u( () => !!n.value?.ecommerceStoreId)
      , i = u( () => Ll.value[t || ""] ?? !1)
      , s = u( () => po.value[t || ""] ?? !1)
      , l = u( () => Object.keys(e.value).every(Y => po.value[Y] ?? !1))
      , d = u( () => _n.value.reduce( (Y, L) => af(Y, L) ? Y.map(A => {
        const P = A.product.variants[0].id === L.variants[0].id
          , H = A.product.custom_fields?.length ? A.product.custom_fields?.some(k => L.custom_fields?.some(h => Jr(k, h))) : !0;
        return P && H ? {
            ...A,
            quantity: A.quantity + 1
        } : A
    }
    ) : [...Y, {
        product: L,
        quantity: 1
    }], []))
      , p = u( () => {
        const L = _n.value.filter(A => Gi(A)).map(A => A.id).filter( (A, P, H) => H.indexOf(A) === P);
        return _n.value.reduce( (A, P) => L.includes(P.id) ? A : A + 1, 0) + L.length
    }
    )
      , g = (Y, L) => {
        if (!Y || !L || _n.value.length >= Zn)
            return !1;
        const _ = Y?.variants?.find(A => A.id === L);
        if (!_)
            return !1;
        if (_.manage_inventory) {
            const P = d.value.find(k => k.product.id === Y.id && k.product.variants.some(h => h.id === _.id))?.quantity || 0
              , H = fr.value.find(k => k.id === L)?.inventory_quantity;
            return P < H
        }
        return !0
    }
      , v = u( () => Object.values(a.value).filter(Y => Y.type === Vc))
      , f = u( () => Object.values(a.value).find(Y => Y.type === Uc))
      , b = Y => {
        t && (Ll.value[t] = Y)
    }
      , D = Y => {
        t && (po.value[t] = Y)
    }
      , T = Y => {
        Rl.value = Y
    }
      , w = Y => {
        Bl.value = Y
    }
      , S = Y => {
        ii.value = Y
    }
      , B = Y => {
        xl.value = Y
    }
      , I = Y => {
        _n.value = Y || [];
        const L = {
            payload: Y,
            expiry: Date.now() + Hp
        };
        window.localStorage.setItem(Hi, JSON.stringify(L))
    }
      , R = Y => {
        Ol.value = Y
    }
      , $ = Y => {
        const L = fr.value.filter(_ => Y.findIndex(A => A.id === _.id) === -1);
        fr.value = [...L, ...Y]
    }
      , G = ({cartItems: Y, products: L}) => (Y || _n.value).reduce( (_, A) => {
        const P = L.find(Q => Q.id === A.id)
          , H = P?.variants.find(Q => A.variants.some(V => Q.id === V.id))
          , k = A?.custom_fields?.find(Q => A.custom_fields.some(V => Q.id === V.id && Q.value === V.value))
          , h = _.reduce( (Q, V) => {
            const O = V.variants.some(fe => fe.id === H?.id)
              , pe = P?.custom_fields?.length ? V.custom_fields?.every(fe => Jr(fe, k)) : !0;
            return O && pe ? Q + 1 : Q
        }
        , 0)
          , W = fr.value.find(Q => Q.id === H?.id)?.inventory_quantity
          , U = !H?.manage_inventory || h < W
          , te = P?.type.value === st.BOOKING ? {
            ...A.variants[0].booking_event,
            time_slot: A.variants[0].booking_event.time_slot,
            date: A.variants[0].booking_event.date
        } : null;
        return P && H && U && k ? [..._, {
            ...P,
            custom_fields: A.custom_fields,
            variants: [{
                ...H,
                booking_event: te
            }]
        }] : P && H && U ? [..._, {
            ...P,
            variants: [{
                ...H,
                booking_event: te
            }]
        }] : _
    }
    , [])
      , ee = async Y => {
        const L = Kn(n.value);
        if (!L || !Y)
            return;
        const _ = Y.map( ({id: A}) => A);
        try {
            const A = await cu(L, _);
            $(A)
        } catch (A) {
            console.error(A)
        }
    }
    ;
    return {
        shoppingCartItems: _n,
        selectedBookingProduct: Ol,
        variantsQuantity: fr,
        isShoppingCartOpen: xl,
        isCheckoutLoading: Bl,
        isLoading: i,
        isLoaded: s,
        isProductPageLoaded: tf,
        isStoreTypeZyro: r,
        isEcommerceStoreCreated: o,
        quantifiedCartItemsList: d,
        canAddToCart: g,
        legacyProductPages: v,
        setIsLoading: b,
        setIsLoaded: D,
        setIsCheckoutLoading: w,
        setCategories: S,
        setShoppingCartOpen: B,
        setShoppingCartItems: I,
        setSelectedBookingProduct: R,
        setVariantsQuantity: $,
        fetchCartProducts: async () => {
            const Y = Kn(n.value);
            if (!Y)
                return;
            const L = await ef();
            I(L);
            const _ = L.map( ({id: P}) => String(P))
              , A = [...new Set(_)];
            if (!A.length) {
                s.value || D(!0);
                return
            }
            try {
                const P = await dl(Y, A);
                await ee(P);
                const H = G({
                    cartItems: L,
                    products: P
                });
                I(H)
            } catch (P) {
                console.error(P);
                return
            } finally {
                b(!1),
                D(!0)
            }
        }
        ,
        updateVariantsQuantity: ee,
        refreshCartItems: G,
        fetchCategories: async (Y, L) => {
            if (!L || ii.value.length)
                return [];
            try {
                return await Lp(Y)
            } catch (_) {
                return console.error(_),
                []
            }
        }
        ,
        categories: ii,
        setIsCategoriesLoaded: T,
        isCategoriesLoaded: Rl,
        shoppingCartItemCount: p,
        getShippingData: async () => {
            const Y = Kn(n.value);
            if (!Y)
                return [];
            try {
                const _ = (await Ep(Y)).flatMap(async ({id: P, name: H}) => {
                    const k = await Dp(P);
                    return {
                        name: H,
                        shippingOptions: k
                    }
                }
                );
                return await Promise.all(_)
            } catch (L) {
                return console.error(L),
                []
            } finally {
                b(!1),
                D(!0)
            }
        }
        ,
        getProductsByIds: async Y => {
            const L = Kn(n.value);
            if (!L)
                return [];
            try {
                return await dl(L, Y)
            } catch (_) {
                return console.error(_),
                []
            } finally {
                b(!1),
                D(!0)
            }
        }
        ,
        dynamicPageTemplateData: f,
        ecommerceProductListBlocks: e,
        areAllEcommerceProductListBlocksLoaded: l,
        isLoadedValues: po
    }
}
  , nf = re({
    __name: "GridEcommerceButtonProviderUser",
    props: {
        data: {},
        isCartVisible: {
            type: Boolean
        },
        mobileElementWidth: {},
        mobileElementHeight: {},
        isInPreviewMode: {
            type: Boolean
        }
    },
    setup(t, {expose: n}) {
        n();
        const a = t
          , {getButtonHref: e, ecommerceStoreId: r} = kt()
          , {canAddToCart: o, isShoppingCartOpen: i, shoppingCartItems: s, setShoppingCartOpen: l, setShoppingCartItems: d, setSelectedBookingProduct: p, updateVariantsQuantity: g} = Ia()
          , {initiateCheckout: v} = io()
          , {openEcommerceModal: f} = Ca()
          , {content: b, type: D, fontSizeMobile: T, fontSizeDesktop: w, fontFamily: S, fontWeight: B, borderRadius: I, backgroundColor: R, fontColor: $, borderColor: G, borderWidth: ee, backgroundColorHover: K, fontColorHover: M, borderColorHover: j} = Xr(a, {
            href: u( () => e({
                isFormButton: a.data.settings?.isFormButton,
                linkedPageId: a.data.linkedPageId,
                linkType: a.data.linkType,
                href: a.data.href
            }))
        })
          , {productId: q, productVariantId: Y} = Kv(a)
          , L = E({})
          , _ = E(!1)
          , A = u( () => !o(L.value, Y.value))
          , P = () => {
            i.value || l(!0)
        }
          , H = async () => {
            if (L.value?.type?.value === st.BOOKING) {
                p(L.value),
                f("EcommerceBookingEventSelect");
                return
            }
            if (ar() || a.isInPreviewMode) {
                f("EcommerceMessageButtonDisabled");
                return
            }
            const h = L.value?.variants.find(U => U.id === Y.value)
              , W = {
                ...L.value,
                variants: [h]
            };
            a.isCartVisible ? (d([...s.value, W]),
            P()) : (_.value = !0,
            await v([W]).then( () => {
                _.value = !1
            }
            ))
        }
        ;
        Pe(async () => {
            q.value !== -1 && (L.value = await lu({
                storeId: r.value,
                productId: q.value
            }),
            g([L.value]))
        }
        );
        const k = {
            props: a,
            getButtonHref: e,
            ecommerceStoreId: r,
            canAddToCart: o,
            isShoppingCartOpen: i,
            shoppingCartItems: s,
            setShoppingCartOpen: l,
            setShoppingCartItems: d,
            setSelectedBookingProduct: p,
            updateVariantsQuantity: g,
            initiateCheckout: v,
            openEcommerceModal: f,
            content: b,
            type: D,
            fontSizeMobile: T,
            fontSizeDesktop: w,
            fontFamily: S,
            fontWeight: B,
            borderRadius: I,
            backgroundColor: R,
            fontColor: $,
            borderColor: G,
            borderWidth: ee,
            backgroundColorHover: K,
            fontColorHover: M,
            borderColorHover: j,
            productId: q,
            productVariantId: Y,
            product: L,
            isLoading: _,
            isAddToCartDisabled: A,
            manageCartOpenState: P,
            handleClick: H,
            GridButton: Hn
        };
        return Object.defineProperty(k, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        k
    }
});
function rf(t, n, a, e, r, o) {
    const i = lt("qa");
    return se((m(),
    z(e.GridButton, {
        "tag-name": "button",
        content: e.content,
        type: e.type,
        "is-disabled": e.isAddToCartDisabled,
        "is-loading": e.isLoading,
        "font-size-mobile": e.fontSizeMobile,
        "font-size-desktop": e.fontSizeDesktop,
        "font-family": e.fontFamily,
        "font-weight": e.fontWeight,
        "border-radius": e.borderRadius,
        "border-width": e.borderWidth,
        "background-color": e.backgroundColor,
        "font-color": e.fontColor,
        "border-color": e.borderColor,
        "background-color-hover": e.backgroundColorHover,
        "font-color-hover": e.fontColorHover,
        "border-color-hover": e.borderColorHover,
        "mobile-element-width": a.mobileElementWidth,
        "mobile-element-height": a.mobileElementHeight,
        onClick: e.handleClick
    }, null, 8, ["content", "type", "is-disabled", "is-loading", "font-size-mobile", "font-size-desktop", "font-family", "font-weight", "border-radius", "border-width", "background-color", "font-color", "border-color", "background-color-hover", "font-color-hover", "border-color-hover", "mobile-element-width", "mobile-element-height"])), [[i, "button-ecommerce-checkout"]])
}
const of = oe(nf, [["render", rf]])
  , sf = re({
    __name: "GridEmbed",
    props: {
        srcdoc: {
            default: ""
        },
        shouldRender: {
            type: Boolean,
            default: !1
        },
        isSandBoxed: {
            type: Boolean
        },
        id: {}
    },
    emits: ["iframe-height-updated"],
    setup(t, {expose: n, emit: a}) {
        n(),
        ht(p => ({
            "235e916e": s.value
        }));
        const e = t
          , r = a
          , o = E()
          , i = E(0)
          , s = u( () => i.value ? `${i.value}px` : "auto")
          , l = p => {
            p.data.action === "iframeHeightUpdated" && e.id === p.data.id && i.value !== p.data.height && (i.value = p.data.height,
            r("iframe-height-updated", i.value))
        }
        ;
        Pe( () => {
            window.addEventListener("message", l)
        }
        ),
        Od( () => {
            window.removeEventListener("message", l)
        }
        );
        const d = {
            props: e,
            emit: r,
            gridEmbedIframeRef: o,
            height: i,
            heightStyle: s,
            heightUpdateEventListener: l
        };
        return Object.defineProperty(d, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        d
    }
})
  , lf = ["id"]
  , cf = ["srcdoc"];
function uf(t, n, a, e, r, o) {
    const i = lt("qa");
    return se((m(),
    y("div", {
        id: a.id,
        class: "grid-embed"
    }, [a.shouldRender ? se((m(),
    y("iframe", Je({
        key: 0,
        ref: "gridEmbedIframeRef",
        class: "grid-embed__iframe",
        srcdoc: a.srcdoc,
        title: "custom code element"
    }, {
        ...a.isSandBoxed && {
            sandbox: "allow-scripts"
        }
    }), null, 16, cf)), [[i, "builder-gridelement-gridembed-iframe"]]) : x("", !0)], 8, lf)), [[i, "builder-gridelement-gridembed"]])
}
const df = oe(sf, [["render", uf], ["__scopeId", "data-v-0b938be5"]])
  , mf = `
<style>
	html {
		overflow: hidden;
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
 	}

 	iframe {
 		max-width: 100%;
 	}
</style>
`
  , gf = t => `
<script>
	const heightObserver = new ResizeObserver(([{ contentRect }]) => {
		window.parent.postMessage({ action: 'iframeHeightUpdated', height: contentRect.height, id: '${t}' }, '*');
	});

	heightObserver.observe(document.documentElement);
<\/script>
`
  , pf = (t, n) => {
    const a = document.createElement("div");
    a.innerHTML = t;
    const e = [...a.children].reduce( (r, o) => o.tagName === "STYLE" ? {
        ...r,
        styles: `${r.styles} ${o.outerHTML}`
    } : o.tagName === "SCRIPT" ? {
        ...r,
        scripts: `${r.scripts} ${o.outerHTML}`
    } : {
        ...r,
        html: `${r.html} ${o.outerHTML}`
    }, {
        styles: mf,
        scripts: gf(n),
        html: ""
    });
    return `<!DOCTYPE html>
	<head>${e.styles}</head>
	<body>${e.html}${e.scripts}</body>
</html>`
}
  , vf = "500px"
  , hu = (t, n=vf) => {
    const a = E(!1)
      , e = E(null);
    try {
        Pe( () => {
            e.value = new IntersectionObserver( ([{isIntersecting: o}]) => {
                o && (a.value = !0,
                e.value?.disconnect())
            }
            ,{
                threshold: 0,
                rootMargin: n
            })
        }
        );
        const r = os( () => {
            if (t.value && e.value) {
                const o = t.value.$el ?? t.value;
                e.value.observe(o),
                r()
            }
        }
        );
        Kt( () => e.value?.disconnect())
    } catch (r) {
        console.error(r)
    }
    return {
        isObserved: a
    }
}
  , ff = re({
    __name: "GridEmbedProviderUser",
    props: {
        data: {},
        id: {},
        isInPreviewMode: {
            type: Boolean
        }
    },
    setup(t, {expose: n}) {
        n();
        const a = t
          , e = E(null)
          , {isObserved: r} = hu(e)
          , o = E();
        Pe( () => {
            o.value = pf(a.data.content ?? "", a.id)
        }
        );
        const i = {
            props: a,
            gridEmbedRef: e,
            isObserved: r,
            srcdoc: o,
            GridEmbed: df
        };
        return Object.defineProperty(i, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        i
    }
});
function hf(t, n, a, e, r, o) {
    return m(),
    z(e.GridEmbed, {
        id: a.id,
        ref: "gridEmbedRef",
        "should-render": e.isObserved,
        srcdoc: e.srcdoc,
        "is-sand-boxed": a.isInPreviewMode,
        height: a.data.settings?.styles.height,
        "height-mobile": a.data.settings?.styles.heightMobile
    }, null, 8, ["id", "should-render", "srcdoc", "is-sand-boxed", "height", "height-mobile"])
}
const yf = oe(ff, [["render", hf]])
  , bf = /^[\p{L}\p{N}+._&-]{1,80}@[\p{L}\p{N}.-]{1,80}\.[A-Za-z]{1,15}$/u
  , _f = /^\+*\({0,1}\d{1,4}\){0,1}[\d./s-]*$/
  , wf = /^\d+$/
  , si = ({value: t="", validation: n, validationMessages: a, name: e}) => {
    const r = [];
    return n.includes("required") && !t.replace(/ /g, "") && r.push({
        message: a.required,
        name: e
    }),
    t.replace(/ /g, "") && (n.includes("email") && !bf.test(t) && r.push({
        message: a.email,
        name: e
    }),
    n.includes("phone") && !_f.test(t) && r.push({
        message: a.phone,
        name: e
    })),
    r
}
  , kf = re({
    props: {
        id: {
            type: String,
            default: null
        },
        modelValue: {
            type: String,
            default: ""
        },
        label: {
            type: String,
            default: null
        },
        placeholder: {
            type: String,
            default: null
        },
        isRequired: {
            type: Boolean,
            default: !1
        },
        isRequiredAsteriskVisible: {
            type: Boolean,
            default: !0
        },
        isInteractive: {
            type: Boolean,
            default: !0
        },
        areErrorsShown: {
            type: Boolean,
            default: !1
        },
        validationErrors: {
            type: Array,
            required: !1,
            default: () => []
        },
        theme: {
            type: String,
            required: !0
        },
        tag: {
            type: String,
            default: "input",
            validator: t => ["textarea", "input"].includes(t)
        }
    },
    emits: ["update:model-value"],
    data() {
        return {
            gridInputValue: ""
        }
    },
    computed: {
        computedClasses() {
            return [{
                "input__component--error": this.validationErrors.length && this.areErrorsShown
            }, {
                "input__component--textarea": this.tag === "textarea"
            }, {
                "input__component--read-only": !this.isInteractive
            }, `input__component--${this.theme}`]
        }
    }
})
  , Sf = ["placeholder", "value", "readonly", "tabindex"]
  , Tf = ["placeholder", "value", "readonly", "tabindex"]
  , Cf = {
    key: 2
};
function If(t, n, a, e, r, o) {
    return m(),
    y("div", {
        class: J(["input", `input--${t.theme}`])
    }, [C("label", {
        class: J(["input__label", `input__label--${t.theme}`])
    }, ae(t.label) + ae(t.isRequired && t.isRequiredAsteriskVisible ? "*" : ""), 3), t.tag === "input" ? (m(),
    y("input", {
        key: 0,
        placeholder: t.placeholder,
        type: "text",
        class: J(["input__component", t.computedClasses]),
        value: t.modelValue,
        readonly: !t.isInteractive,
        tabindex: t.isInteractive ? 0 : -1,
        onInput: n[0] || (n[0] = i => t.$emit("update:model-value", i.target.value)),
        onClick: n[1] || (n[1] = xe( () => {}
        , ["prevent"])),
        onDragstart: n[2] || (n[2] = xe( () => {}
        , ["prevent"])),
        onDrag: n[3] || (n[3] = xe( () => {}
        , ["prevent"]))
    }, null, 42, Sf)) : x("", !0), t.tag === "textarea" ? (m(),
    y("textarea", {
        key: 1,
        placeholder: t.placeholder,
        type: "text",
        class: J(["input__component", t.computedClasses]),
        value: t.modelValue,
        readonly: !t.isInteractive,
        tabindex: t.isInteractive ? 0 : -1,
        onInput: n[4] || (n[4] = i => t.$emit("update:model-value", i.target.value)),
        onClick: n[5] || (n[5] = xe( () => {}
        , ["prevent"])),
        onDragstart: n[6] || (n[6] = xe( () => {}
        , ["prevent"])),
        onDrag: n[7] || (n[7] = xe( () => {}
        , ["prevent"]))
    }, null, 42, Tf)) : x("", !0), t.validationErrors.length && t.areErrorsShown ? (m(),
    y("div", Cf, [(m(!0),
    y(ge, null, Ce(t.validationErrors, i => (m(),
    y("p", {
        key: i,
        class: "input__error-message text-body-2"
    }, ae(i), 1))), 128))])) : x("", !0)], 2)
}
const Pf = oe(kf, [["render", If], ["__scopeId", "data-v-96d5b5e0"]])
  , Ef = re({
    name: "GridSelectInput",
    props: {
        name: {
            type: String,
            required: !0
        },
        id: {
            type: String,
            required: !0
        },
        tag: {
            type: String,
            required: !0
        },
        selectedOptions: {
            type: Array,
            required: !0
        },
        isInteractive: {
            type: Boolean,
            default: !0
        },
        theme: {
            type: String,
            required: !0
        },
        isSelected: {
            type: Boolean,
            required: !0
        }
    },
    emits: ["select-option", "remove-selection", "add-selection"],
    computed: {
        labelClasses() {
            return [{
                "input__label--read-only": !this.isInteractive
            }, `select-input--${this.theme}`]
        },
        inputClasses() {
            return [{
                "input__component--read-only": !this.isInteractive
            }]
        }
    },
    methods: {
        selectOption() {
            if (!this.isInteractive)
                return;
            const t = {
                id: this.id,
                value: this.name
            };
            this.tag !== "checkbox" ? this.$emit("select-option", t) : this.isSelected ? this.$emit("remove-selection", t) : this.$emit("add-selection", t)
        }
    }
})
  , Df = ["for"]
  , Mf = ["id", "type", "checked", "tabindex"];
function Af(t, n, a, e, r, o) {
    return m(),
    y("label", {
        class: J(["select-input", t.labelClasses]),
        for: t.id
    }, [(m(),
    y("input", {
        id: t.id,
        key: t.isSelected,
        type: t.tag,
        class: J(["select-input__input", t.inputClasses]),
        checked: t.isSelected,
        tabindex: t.isInteractive ? 0 : -1,
        onInput: n[0] || (n[0] = xe( (...i) => t.selectOption && t.selectOption(...i), ["stop"])),
        onDragstart: n[1] || (n[1] = xe( () => {}
        , ["prevent"])),
        onDrag: n[2] || (n[2] = xe( () => {}
        , ["prevent"]))
    }, null, 42, Mf)), qe(" " + ae(t.name), 1)], 10, Df)
}
const Of = oe(Ef, [["render", Af], ["__scopeId", "data-v-3b89e969"]])
  , xf = re({
    name: "GridSelectInputsWrapper",
    components: {
        GridSelectInput: Of
    },
    props: {
        label: {
            type: String,
            default: null
        },
        isRequired: {
            type: Boolean,
            default: !1
        },
        isTextArea: {
            type: Boolean,
            default: !1
        },
        isInteractive: {
            type: Boolean,
            default: !0
        },
        areErrorsShown: {
            type: Boolean,
            default: !1
        },
        validationErrors: {
            type: Array,
            required: !1,
            default: () => []
        },
        theme: {
            type: String,
            required: !0
        },
        tag: {
            type: String,
            required: !0,
            validator: t => ["radio", "checkbox"].includes(t)
        },
        options: {
            type: Array,
            required: !0
        }
    },
    emits: ["input"],
    data() {
        return {
            selectedOptions: []
        }
    },
    watch: {
        selectedOptions() {
            const t = this.selectedOptions.map( ({value: n}) => n).toString();
            this.$emit("input", t)
        }
    },
    methods: {
        isSelected(t) {
            return this.selectedOptions.some( ({id: n}) => n === t)
        },
        removeSelection(t) {
            const n = this.selectedOptions.filter(a => a.id !== t.id);
            this.selectedOptions = n
        },
        addSelection(t) {
            this.selectedOptions = [...this.selectedOptions, t]
        },
        selectOption(t) {
            this.selectedOptions = [t]
        }
    }
})
  , Bf = {
    key: 0
};
function Lf(t, n, a, e, r, o) {
    const i = mt("GridSelectInput");
    return m(),
    y("div", {
        class: J(["input", `input--${t.theme}`])
    }, [C("label", {
        class: J(["input__label input__label--read-only", [`input__label--${t.theme}`]])
    }, ae(t.label) + ae(t.isRequired ? "*" : ""), 3), (m(!0),
    y(ge, null, Ce(t.options, s => (m(),
    y("div", {
        key: s.id,
        class: "input__options"
    }, [Ae(i, {
        id: s.id,
        name: s.value,
        tag: t.tag,
        "is-selected": t.isSelected(s.id),
        theme: t.theme,
        "is-interactive": t.isInteractive,
        "selected-options": t.selectedOptions,
        onRemoveSelection: t.removeSelection,
        onAddSelection: t.addSelection,
        onSelectOption: t.selectOption
    }, null, 8, ["id", "name", "tag", "is-selected", "theme", "is-interactive", "selected-options", "onRemoveSelection", "onAddSelection", "onSelectOption"])]))), 128)), t.validationErrors.length && t.areErrorsShown ? (m(),
    y("div", Bf, [(m(!0),
    y(ge, null, Ce(t.validationErrors, s => (m(),
    y("p", {
        key: s,
        class: "input__error-message text-body-2"
    }, ae(s), 1))), 128))])) : x("", !0)], 2)
}
const Rf = oe(xf, [["render", Lf], ["__scopeId", "data-v-49afb3bf"]])
  , Nf = {
    __name: "GridForm",
    props: {
        id: {
            type: String,
            required: !0
        },
        settings: {
            type: Object,
            required: !0
        },
        submitButtonData: {
            type: Object,
            required: !0
        },
        formId: {
            type: String,
            default: null
        },
        isError: {
            type: Boolean,
            default: !1
        },
        showSuccessMessage: {
            type: Boolean,
            default: !1
        },
        isUserSite: {
            type: Boolean,
            default: !1
        },
        theme: {
            type: String,
            validator: t => ["dark", "light"].includes(t),
            default: "light"
        },
        formJustify: {
            type: String,
            default: null
        },
        formButtonJustifySelf: {
            type: String,
            default: null
        },
        mobileFormButtonJustifySelf: {
            type: String,
            default: null
        },
        formBackgroundColor: {
            type: String,
            default: null
        },
        formBorderWidth: {
            type: String,
            default: null
        },
        formBorderColor: {
            type: String,
            default: null
        },
        formBorderRadius: {
            type: String,
            default: null
        },
        formPadding: {
            type: String,
            default: null
        },
        submitButtonBackgroundColor: {
            type: String,
            default: null
        },
        submitButtonBackgroundColorHover: {
            type: String,
            default: null
        },
        submitButtonFontColor: {
            type: String,
            default: null
        },
        submitButtonFontColorHover: {
            type: String,
            default: null
        },
        submitButtonBorderColor: {
            type: String,
            default: null
        },
        submitButtonBorderColorHover: {
            type: String,
            default: null
        },
        submitButtonFontFamily: {
            type: String,
            default: null
        },
        submitButtonFontWeight: {
            type: Number,
            default: null
        },
        submitButtonFontSizeMobile: {
            type: Number,
            default: null
        },
        submitButtonFontSizeDesktop: {
            type: Number,
            default: null
        },
        submitButtonBorderWidth: {
            type: Number,
            default: null
        },
        submitButtonBorderRadius: {
            type: Number,
            default: null
        },
        inputFillColor: {
            type: String,
            default: null
        },
        inputFillColorHover: {
            type: String,
            default: null
        },
        formFontFamily: {
            type: String,
            default: null
        },
        formFontWeight: {
            type: Number,
            default: null
        },
        labelTextColor: {
            type: String,
            default: null
        },
        labelTextSize: {
            type: Number,
            default: null
        },
        mobileLabelTextSize: {
            type: Number,
            default: null
        },
        inputTextColor: {
            type: String,
            default: null
        },
        inputTextColorHover: {
            type: String,
            default: null
        },
        inputTextSize: {
            type: Number,
            default: null
        },
        mobileInputTextSize: {
            type: Number,
            default: null
        },
        inputBorderColor: {
            type: String,
            default: null
        },
        inputBorderColorHover: {
            type: String,
            default: null
        },
        inputBorderWidth: {
            type: Number,
            default: null
        },
        inputBorderRadius: {
            type: Number,
            default: null
        },
        elementsVerticalSpacing: {
            type: Number,
            default: null
        },
        mobileElementsVerticalSpacing: {
            type: Number,
            default: null
        }
    },
    emits: ["on-submit"],
    setup(t, {expose: n, emit: a}) {
        n();
        const e = t
          , r = a
          , o = E([])
          , i = E({})
          , s = E({})
          , l = E(!1)
          , d = u( () => e.settings.schema.reduce( (T, w) => ({
            ...T,
            [w.name]: {
                validation: w.validation.flat(),
                validationMessages: w["validation-messages"]
            }
        }), {}))
          , p = u( () => {
            const T = Number.isInteger(e.elementsVerticalSpacing) ? `${e.elementsVerticalSpacing}px` : null
              , w = Number.isInteger(e.mobileElementsVerticalSpacing) ? `${e.mobileElementsVerticalSpacing}px` : null;
            return {
                "--form-flex": e.formJustify ? null : "0 1 100%",
                "--form-button-justify-self": e.formButtonJustifySelf,
                "--m-form-button-justify-self": e.mobileFormButtonJustifySelf,
                "--form-background-color": e.formBackgroundColor,
                "--form-border-width": `${e.formBorderWidth}px`,
                "--form-border-color": e.formBorderColor,
                "--form-border-radius": `${e.formBorderRadius}px`,
                "--form-padding": e.formPadding ? `${e.formPadding}px` : null,
                "--form-font-family": e.formFontFamily,
                "--form-font-weight": e.formFontWeight,
                "--input-fill-color": e.inputFillColor,
                "--input-fill-color--hover": e.inputFillColorHover || e.inputFillColor,
                "--label-text-color": e.labelTextColor,
                "--label-text-size": e.labelTextSize ? `${e.labelTextSize}px` : null,
                "--m-label-text-size": e.mobileLabelTextSize ? `${e.mobileLabelTextSize}px` : null,
                "--input-text-color": e.inputTextColor,
                "--input-text-color--hover": e.inputTextColorHover || e.inputTextColor,
                "--input-text-size": e.inputTextSize ? `${e.inputTextSize}px` : null,
                "--m-input-text-size": e.mobileInputTextSize ? `${e.mobileInputTextSize}px` : null,
                "--input-height": e.inputTextSize ? "auto" : "48px",
                "--input-border-color": e.inputBorderColor,
                "--input-border-color--hover": e.inputBorderColorHover || e.inputBorderColor,
                "--input-border-width": e.inputBorderWidth ? `${e.inputBorderWidth}px` : null,
                "--input-border-radius": e.inputBorderRadius ? `${e.inputBorderRadius}px` : null,
                "--form-elements-vertical-spacing": T,
                "--m-form-elements-vertical-spacing": w,
                "--form-spacing": "var(--formSpacing)",
                "--grid-item-inner-padding": "var(--gridItemInnerPadding)",
                "--grid-item-inner-background": "var(--gridItemInnerBackground)"
            }
        }
        )
          , g = () => e.settings.schema.flatMap( ({name: T}) => {
            const w = si({
                value: s.value[T]?.value,
                ...d.value[T],
                name: T
            })
              , S = w.map( ({message: B}) => B);
            return i.value = {
                ...i.value,
                [T]: S
            },
            w
        }
        )
          , v = (T, w) => {
            i.value = {
                ...i.value,
                [T]: si({
                    value: w,
                    ...d.value[T],
                    name: T
                }).map( ({message: S}) => S)
            },
            s.value = {
                ...s.value,
                [T]: {
                    value: w,
                    type: e.settings.schema.find( ({name: S}) => S === T).validationType || "text"
                }
            }
        }
          , f = () => {
            s.value = Object.fromEntries(Object.entries(s.value).map( ([T,{value: w, type: S}]) => [T, {
                value: w.trim(),
                type: S
            }]))
        }
          , D = {
            props: e,
            emit: r,
            formInputs: o,
            validationErrors: i,
            formValues: s,
            areErrorsVisible: l,
            validationRules: d,
            formCSSVars: p,
            validateForm: g,
            updateField: v,
            trimFormValues: f,
            handleSubmit: () => {
                f();
                const T = g();
                if (l.value = T.length > 0,
                !l.value) {
                    r("on-submit", s.value);
                    return
                }
                const w = o.value.find( ({id: S}) => S === T[0].name);
                w && w.$el.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                })
            }
            ,
            computed: u,
            ref: E,
            get validateInput() {
                return si
            },
            GridButton: Hn,
            GridInput: Pf,
            GridSelectInputsWrapper: Rf
        };
        return Object.defineProperty(D, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        D
    }
}
  , Hf = ["id"]
  , Vf = ["name"];
function Uf(t, n, a, e, r, o) {
    const i = lt("qa");
    return m(),
    y("div", {
        id: a.id,
        class: J(["form", {
            "form--single-field": a.settings.type === "singleField"
        }]),
        style: ze(e.formCSSVars)
    }, [C("form", {
        class: J(["form__control", {
            "form__control--invisible": a.showSuccessMessage || a.isError
        }]),
        name: a.formId,
        onSubmit: xe(e.handleSubmit, ["prevent"])
    }, [(m(!0),
    y(ge, null, Ce(a.settings.schema, s => (m(),
    y(ge, {
        key: s.id
    }, [s.type === "GridInput" ? se((m(),
    z(e.GridInput, {
        key: 0,
        id: s.name,
        ref_for: !0,
        ref: "formInputs",
        theme: a.theme,
        tag: s.tag,
        placeholder: s.placeholder,
        label: s.inputLabel,
        "is-required": e.validationRules[s.name].validation.includes("required"),
        "is-required-asterisk-visible": a.settings.schema.length > 1,
        "validation-errors": e.validationErrors[s.name],
        "are-errors-shown": e.areErrorsVisible,
        "is-interactive": a.isUserSite,
        "model-value": e.formValues[s.name]?.value,
        "onUpdate:modelValue": l => e.updateField(s.name, l)
    }, null, 8, ["id", "theme", "tag", "placeholder", "label", "is-required", "is-required-asterisk-visible", "validation-errors", "are-errors-shown", "is-interactive", "model-value", "onUpdate:modelValue"])), [[i, `form-field-${s.inputLabel}`]]) : x("", !0), s.type === "GridSelectInput" ? se((m(),
    z(e.GridSelectInputsWrapper, {
        key: 1,
        theme: a.theme,
        tag: s.tag,
        options: s.options,
        placeholder: s.placeholder,
        label: s.inputLabel,
        "is-required": e.validationRules[s.name].validation.includes("required"),
        "validation-errors": e.validationErrors[s.name],
        "are-errors-shown": e.areErrorsVisible,
        "is-interactive": a.isUserSite,
        onInput: l => e.updateField(s.name, l)
    }, null, 8, ["theme", "tag", "options", "placeholder", "label", "is-required", "validation-errors", "are-errors-shown", "is-interactive", "onInput"])), [[i, `form-field-${s.inputLabel}`]]) : x("", !0)], 64))), 128)), se(Ae(e.GridButton, {
        content: a.submitButtonData.content,
        type: a.submitButtonData.settings.type,
        "background-color": a.submitButtonBackgroundColor,
        "background-color-hover": a.submitButtonBackgroundColorHover,
        "font-color": a.submitButtonFontColor,
        "font-color-hover": a.submitButtonFontColorHover,
        "border-color": a.submitButtonBorderColor,
        "border-color-hover": a.submitButtonBorderColorHover,
        "font-family": a.submitButtonFontFamily,
        "font-weight": a.submitButtonFontWeight,
        "font-size-mobile": a.submitButtonFontSizeMobile,
        "font-size-desktop": a.submitButtonFontSizeDesktop,
        "border-width": a.submitButtonBorderWidth,
        "border-radius": a.submitButtonBorderRadius,
        class: "form__button",
        "button-type": "submit",
        "tag-name": "button"
    }, null, 8, ["content", "type", "background-color", "background-color-hover", "font-color", "font-color-hover", "border-color", "border-color-hover", "font-family", "font-weight", "font-size-mobile", "font-size-desktop", "border-width", "border-radius"]), [[i, "form-button-submit"]])], 42, Vf), ne(t.$slots, "default", {}, void 0, !0)], 14, Hf)
}
const Ff = oe(Nf, [["render", Uf], ["__scopeId", "data-v-882afdaf"]])
  , jf = re({
    __name: "ZyroLoader",
    props: {
        color: {
            default: "var(--color-dark)"
        },
        secondaryColor: {
            default: "transparent"
        },
        size: {
            default: "40px"
        },
        weight: {
            default: "4px"
        }
    },
    setup(t, {expose: n}) {
        n(),
        ht(e => ({
            "42b67250": e.size,
            "75767d07": e.weight,
            "1338e6f4": e.color,
            "3bb5d1de": e.secondaryColor
        }));
        const a = {};
        return Object.defineProperty(a, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        a
    }
})
  , Gf = {
    class: "loader"
}
  , Yf = is('<div class="loader__element" data-v-bc3d69bf></div><div class="loader__element" data-v-bc3d69bf></div><div class="loader__element" data-v-bc3d69bf></div><div class="loader__element" data-v-bc3d69bf></div><div class="loader__element" data-v-bc3d69bf></div>', 5)
  , Wf = [Yf];
function $f(t, n, a, e, r, o) {
    return m(),
    y("div", Gf, Wf)
}
const bs = oe(jf, [["render", $f], ["__scopeId", "data-v-bc3d69bf"]])
  , qf = "light"
  , zf = 200
  , Zf = {
    SHOW_MESSAGE: "showMessage",
    LINK_TO_PAGE: "linkToPage"
}
  , Kf = re({
    __name: "PostSubmitElement",
    props: {
        successMessage: {
            default: ""
        },
        isError: {
            type: Boolean,
            default: !1
        },
        isLoading: {
            type: Boolean,
            default: !1
        },
        showSuccessMessage: {
            type: Boolean,
            default: !1
        },
        theme: {
            default: qf
        },
        hasBorderWidth: {
            type: Boolean,
            default: !1
        },
        isInPreviewMode: {
            type: Boolean
        }
    },
    setup(t, {expose: n}) {
        n();
        const a = t
          , e = E(null)
          , r = u( () => ({
            "--submit-element-border": a.hasBorderWidth ? "" : "var(--color-gray)"
        }));
        Fe(e, () => {
            e.value && e.value.scrollIntoView({
                behavior: "smooth",
                block: "center"
            })
        }
        );
        const o = {
            props: a,
            postSubmitRef: e,
            submitElementCSSVars: r,
            ZyroLoader: bs
        };
        return Object.defineProperty(o, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        o
    }
})
  , yu = t => (sa("data-v-f643cf2b"),
t = t(),
la(),
t)
  , Qf = {
    key: 1,
    class: "success-message__heading"
}
  , Xf = {
    key: 0
}
  , Jf = {
    key: 2
}
  , eh = yu( () => C("div", {
    class: "submit-message__heading"
}, " Something went wrong ", -1))
  , th = yu( () => C("div", null, " Please try again later ", -1))
  , ah = [eh, th];
function nh(t, n, a, e, r, o) {
    return a.isLoading || a.showSuccessMessage || a.isError ? (m(),
    y("div", {
        key: 0,
        ref: "postSubmitRef",
        class: J(["submit-message", `submit-message--${a.theme}`]),
        style: ze(e.submitElementCSSVars)
    }, [a.isLoading ? (m(),
    z(e.ZyroLoader, {
        key: 0,
        color: "var(--grid-button-primary-background-color)"
    })) : a.showSuccessMessage && !a.isError ? (m(),
    y("div", Qf, [qe(ae(a.successMessage) + " ", 1), a.isInPreviewMode ? (m(),
    y("div", Xf, " Note: Forms submitted in preview mode won't appear in Form submissions. ")) : x("", !0)])) : x("", !0), a.isError && !a.isLoading ? (m(),
    y("div", Jf, ah)) : x("", !0)], 6)) : x("", !0)
}
const rh = oe(Kf, [["render", nh], ["__scopeId", "data-v-f643cf2b"]])
  , oh = re({
    components: {
        GridForm: Ff,
        PostSubmitElement: rh
    },
    props: {
        id: {
            type: String,
            required: !0
        },
        data: {
            type: Object,
            required: !0
        },
        currentLocale: {
            type: String,
            required: !0
        },
        isInPreviewMode: {
            type: Boolean,
            default: !1
        }
    },
    setup() {
        const {meta: t, forms: n, getPagePathFromId: a, hasGoogleAdsApp: e} = kt();
        return {
            meta: t,
            forms: n,
            getPagePathFromId: a,
            hasGoogleAdsApp: e
        }
    },
    data() {
        return {
            isLoading: !1,
            showSuccessMessage: !1,
            isError: !1
        }
    },
    methods: {
        async saveData({token: t, model: n, elementId: a}) {
            await fetch(`https://builder-backend.hostinger.com/u1/data/v3/post/${t}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json;charset=UTF-8"
                },
                credentials: "omit",
                mode: "cors",
                body: JSON.stringify({
                    elementId: a,
                    formData: n
                })
            }).then(e => {
                if (!e.ok)
                    throw new Error(e.statusText);
                return e
            }
            )
        },
        async onSubmit(t) {
            if (this.meta.isDemoTemplate || this.isInPreviewMode) {
                this.showSuccessMessage = !0;
                return
            }
            this.isLoading = !0;
            let n = !1;
            setTimeout( () => {
                n = !0,
                this.isLoading = !(this.showSuccessMessage || this.isError)
            }
            , zf);
            try {
                await this.saveData({
                    token: this.forms[this.data.formId].token,
                    model: Object.fromEntries(Object.entries(t).map( ([o,i]) => [o, i])),
                    elementId: this.data.elementId
                }),
                this.hasGoogleAdsApp && Go("contact"),
                this.showSuccessMessage = !0;
                const {submitAction: a} = this.data.settings;
                if (!a || a.id === Zf.SHOW_MESSAGE)
                    return;
                const {pageId: e} = this.data.settings.submitRedirectPage
                  , r = this.getPagePathFromId({
                    pageId: e
                });
                this.$router.push({
                    path: r
                })
            } catch (a) {
                console.error(a),
                this.isError = !0
            } finally {
                n && (this.isLoading = !1)
            }
        }
    }
});
function ih(t, n, a, e, r, o) {
    const i = mt("PostSubmitElement")
      , s = mt("GridForm");
    return m(),
    z(s, {
        id: t.id,
        "form-id": t.data.formId,
        settings: t.data.settings,
        "submit-button-data": t.data.submitButtonData,
        "submit-button-background-color": t.data.submitButtonBackgroundColor,
        "submit-button-background-color-hover": t.data.submitButtonBackgroundColorHover,
        "submit-button-font-color": t.data.submitButtonFontColor,
        "submit-button-font-color-hover": t.data.submitButtonFontColorHover,
        "submit-button-border-color": t.data.submitButtonBorderColor,
        "submit-button-border-color-hover": t.data.submitButtonBorderColorHover,
        "submit-button-font-family": t.data.submitButtonFontFamily,
        "submit-button-font-weight": t.data.submitButtonFontWeight,
        "submit-button-font-size-mobile": t.data.mobile?.submitButtonFontSize,
        "submit-button-font-size-desktop": t.data.desktop?.submitButtonFontSize,
        "submit-button-border-width": t.data.submitButtonBorderWidth,
        "submit-button-border-radius": t.data.submitButtonBorderRadius,
        "show-success-message": t.showSuccessMessage,
        "is-error": t.isError,
        "is-user-site": !0,
        theme: t.data.settings.theme,
        "form-justify": t.data.settings.styles.justify,
        "form-button-justify-self": t.data.submitButtonData.settings.styles.align,
        "mobile-form-button-justify-self": t.data.submitButtonData.settings.styles["m-align"],
        "form-background-color": t.data.formBackgroundColor,
        "form-border-width": t.data.formBorderWidth,
        "form-border-color": t.data.formBorderColor,
        "form-border-radius": t.data.formBorderRadius,
        "form-padding": t.data.formPadding,
        "input-fill-color": t.data.inputFillColor,
        "input-fill-color-hover": t.data.inputFillColorHover,
        "form-font-family": t.data.formFontFamily,
        "form-font-weight": t.data.formFontWeight,
        "label-text-color": t.data.labelTextColor,
        "label-text-size": t.data.desktop?.labelTextSize,
        "mobile-label-text-size": t.data.mobile?.labelTextSize,
        "input-text-color": t.data.inputTextColor,
        "input-text-color-hover": t.data.inputTextColorHover,
        "input-text-size": t.data.desktop?.inputTextSize,
        "mobile-input-text-size": t.data.mobile?.inputTextSize,
        "input-border-color": t.data.inputBorderColor,
        "input-border-color-hover": t.data.inputBorderColorHover,
        "input-border-width": t.data.inputBorderWidth,
        "input-border-radius": t.data.inputBorderRadius,
        "elements-vertical-spacing": t.data.desktop?.formElementsVerticalSpacing,
        "mobile-elements-vertical-spacing": t.data.mobile?.formElementsVerticalSpacing,
        onOnSubmit: t.onSubmit
    }, {
        default: ye( () => [Ae(i, {
            "show-success-message": t.showSuccessMessage,
            "success-message": t.data.settings.successMessage,
            "is-loading": t.isLoading,
            "is-error": t.isError,
            theme: t.data.settings.theme,
            "has-border-width": t.data.formBorderWidth !== 0,
            "is-in-preview-mode": t.isInPreviewMode
        }, null, 8, ["show-success-message", "success-message", "is-loading", "is-error", "theme", "has-border-width", "is-in-preview-mode"])]),
        _: 1
    }, 8, ["id", "form-id", "settings", "submit-button-data", "submit-button-background-color", "submit-button-background-color-hover", "submit-button-font-color", "submit-button-font-color-hover", "submit-button-border-color", "submit-button-border-color-hover", "submit-button-font-family", "submit-button-font-weight", "submit-button-font-size-mobile", "submit-button-font-size-desktop", "submit-button-border-width", "submit-button-border-radius", "show-success-message", "is-error", "theme", "form-justify", "form-button-justify-self", "mobile-form-button-justify-self", "form-background-color", "form-border-width", "form-border-color", "form-border-radius", "form-padding", "input-fill-color", "input-fill-color-hover", "form-font-family", "form-font-weight", "label-text-color", "label-text-size", "mobile-label-text-size", "input-text-color", "input-text-color-hover", "input-text-size", "mobile-input-text-size", "input-border-color", "input-border-color-hover", "input-border-width", "input-border-radius", "elements-vertical-spacing", "mobile-elements-vertical-spacing", "onOnSubmit"])
}
const sh = oe(oh, [["render", ih]])
  , lh = re({
    __name: "GridImage",
    props: {
        src: {},
        alt: {},
        href: {
            default: null
        },
        preventDrag: {
            type: Boolean
        },
        sizes: {},
        srcset: {},
        tagName: {
            default: Gd
        },
        target: {
            default: null
        },
        rel: {
            default: null
        },
        isLightboxEnabled: {
            type: Boolean
        },
        isUnstyled: {
            type: Boolean
        },
        resetMobilePosition: {
            type: Boolean,
            default: !0
        },
        elementWidth: {
            default: 0
        },
        elementHeight: {
            default: 0
        },
        mobileBorderRadius: {
            default: 0
        },
        desktopBorderRadius: {
            default: 0
        },
        cropCssVars: {
            default: null
        },
        isOverflowVisible: {
            type: Boolean
        },
        isEager: {
            type: Boolean
        },
        isMobileImage: {
            type: Boolean
        },
        isInBuilder: {
            type: Boolean
        },
        isSvg: {
            type: Boolean
        },
        shapeMaskSource: {
            default: null
        },
        isInPreviewMode: {
            type: Boolean
        },
        overlayOpacity: {
            default: 0
        }
    },
    emits: ["image-load", "image-click"],
    setup(t, {expose: n, emit: a}) {
        n(),
        ht(B => ({
            e850387c: b.value,
            "02ba89d0": T.value,
            "5a5dc38a": f.value,
            "27d941ce": g.value,
            "1214e07c": v.value,
            f5ac7700: D.value,
            "96f62728": l.value,
            "57d4fd89": d.value
        }));
        const e = t
          , r = a
          , o = E(null)
          , i = E(!1)
          , s = u( () => e.elementHeight !== null && e.elementHeight > 0 && e.isMobileImage)
          , l = u( () => e.isInBuilder ? "100%" : e.isInPreviewMode ? `${e.elementWidth}px` : s.value ? `${e.elementWidth * 100 / Ua}vw` : "100%")
          , d = u( () => e.isInBuilder ? "auto" : e.isInPreviewMode ? `${e.elementHeight}px` : s.value ? `${e.elementHeight * 100 / Ua}vw` : "auto")
          , p = u( () => ({
            "--overflow": e.isOverflowVisible ? "visible" : null,
            ...e.cropCssVars
        }))
          , g = u( () => e.isInBuilder ? "100%" : `${e.elementWidth * 100 / Va}vw`)
          , v = u( () => e.isInBuilder ? "100%" : `${e.elementHeight * 100 / Va}vw`)
          , f = u( () => e.overlayOpacity ? `rgba(0, 0, 0, ${e.overlayOpacity / 100})` : null)
          , b = u( () => e.shapeMaskSource ? null : e.desktopBorderRadius ? e.desktopBorderRadius : e.mobileBorderRadius ? e.mobileBorderRadius : null)
          , D = u( () => e.shapeMaskSource ? null : e.mobileBorderRadius ? e.mobileBorderRadius : e.desktopBorderRadius ? e.desktopBorderRadius : null)
          , T = u( () => e.shapeMaskSource && `url('${e.shapeMaskSource}')`)
          , w = () => {
            r("image-load"),
            i.value = !0
        }
        ;
        Pe( () => {
            if (o.value) {
                if (o.value?.complete) {
                    w();
                    return
                }
                o.value.addEventListener("load", w)
            }
        }
        ),
        ro( () => {
            o.value && o.value.removeEventListener("load", w)
        }
        );
        const S = {
            props: e,
            emit: r,
            imageRef: o,
            isLoaded: i,
            isMobileLayoutImage: s,
            mobileWidthCSSVar: l,
            mobileHeightCSSVar: d,
            imageCSSVars: p,
            smallDesktopWidthCSSVar: g,
            smallDesktopHeightCSSVar: v,
            overlayOpacityCSSVar: f,
            desktopBorderRadiusCSSVar: b,
            mobileBorderRadiusCSSVar: D,
            shapeMaskSourceCssVar: T,
            handleImageLoadEvent: w,
            get ANCHOR_TAG() {
                return Yd
            },
            get DATA_ATTRIBUTE_ANIMATION_ROLE() {
                return Ka
            },
            get DATA_ATTRIBUTE_SELECTOR() {
                return Wd
            },
            get DATA_ATTRIBUTE_SELECTOR_IMAGE() {
                return $d
            },
            get DATA_ATTRIBUTE_ANIMATION_ROLE_IMAGE() {
                return ss
            }
        };
        return Object.defineProperty(S, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        S
    }
})
  , ch = ["alt", "src", "srcset", "sizes", "height", "width", "loading"];
function uh(t, n, a, e, r, o) {
    const i = lt("qa");
    return m(),
    z(dn(a.tagName), pt({
        href: a.href,
        target: a.target,
        rel: a.rel,
        title: a.alt,
        style: e.imageCSSVars,
        class: ["image", {
            "image--zoom": a.isLightboxEnabled,
            "image--grid": !a.isUnstyled,
            "image--unstyled": a.isUnstyled,
            "image--link": a.tagName === e.ANCHOR_TAG,
            loaded: e.isLoaded
        }],
        [e.DATA_ATTRIBUTE_SELECTOR || ""]: e.DATA_ATTRIBUTE_SELECTOR_IMAGE,
        [e.DATA_ATTRIBUTE_ANIMATION_ROLE || ""]: e.DATA_ATTRIBUTE_ANIMATION_ROLE_IMAGE,
        onClick: n[0] || (n[0] = s => t.$emit("image-click", s))
    }), {
        default: ye( () => [se(C("img", Je({
            ref: "imageRef",
            alt: a.alt,
            src: a.src,
            srcset: a.srcset,
            sizes: a.sizes,
            height: a.elementHeight,
            width: a.elementWidth,
            loading: a.isEager ? "eager" : "lazy",
            class: {
                "image__image--unstyled": a.isUnstyled,
                "image__image--cropped": !!a.cropCssVars,
                image__image: !a.isUnstyled,
                "image__image--reset-m-position": a.resetMobilePosition,
                "image__image--svg": a.isSvg
            }
        }, Pr({
            drag: a.preventDrag ? s => s.preventDefault() : () => null,
            dragstart: a.preventDrag ? s => s.preventDefault() : () => null
        }, !0)), null, 16, ch), [[i, "builder-gridelement-gridimage"]]), ne(t.$slots, "default", {}, void 0, !0)]),
        _: 3
    }, 16, ["href", "target", "rel", "title", "style", "class"])
}
const bu = oe(lh, [["render", uh], ["__scopeId", "data-v-585f264b"]])
  , dh = re({
    __name: "GridGalleryList",
    props: {
        images: {},
        isMasonryLayout: {
            type: Boolean
        },
        loadImages: {
            type: Boolean,
            default: !0
        },
        isLightboxEnabled: {
            type: Boolean
        },
        columnCount: {},
        mobileColumnCount: {},
        columnGap: {},
        mobileColumnGap: {}
    },
    emits: ["image-click", "image-load"],
    setup(t, {expose: n, emit: a}) {
        n(),
        ht(l => ({
            94303370: e.columnCount,
            "367c8df5": o.value,
            "22c915f4": e.mobileColumnCount,
            "319e939a": i.value
        }));
        const e = t
          , r = a
          , o = u( () => `${e.columnGap}px`)
          , i = u( () => `${e.mobileColumnGap}px`)
          , s = {
            props: e,
            emit: r,
            columnGapPx: o,
            mobileColumnGapPx: i,
            GridImage: bu
        };
        return Object.defineProperty(s, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        s
    }
});
function mh(t, n, a, e, r, o) {
    return m(),
    y("div", {
        class: J({
            "gallery-list-masonry": e.props.isMasonryLayout,
            "gallery-list-grid": !e.props.isMasonryLayout
        })
    }, [(m(!0),
    y(ge, null, Ce(a.images, (i, s) => (m(),
    y("div", {
        key: `${s}${i.src}`,
        class: J({
            "gallery-list-masonry__image-wrapper": e.props.isMasonryLayout,
            "gallery-list-grid__image-wrapper": !e.props.isMasonryLayout
        })
    }, [(m(),
    z(e.GridImage, {
        key: `${s}${i.src}`,
        class: J({
            "gallery-list-masonry__image": e.props.isMasonryLayout,
            "gallery-list-grid__image": !e.props.isMasonryLayout
        }),
        alt: i.alt,
        src: e.props.loadImages ? i.src : "",
        srcset: i.srcset,
        sizes: i.sizes,
        "element-width": i.width,
        "element-height": i.height,
        "is-lightbox-enabled": e.props.isLightboxEnabled,
        "reset-mobile-position": !1,
        "prevent-drag": "",
        "is-eager": "",
        "is-unstyled": e.props.isMasonryLayout,
        onImageClick: l => e.emit("image-click", a.images, s),
        onImageLoad: n[0] || (n[0] = l => e.emit("image-load"))
    }, null, 8, ["class", "alt", "src", "srcset", "sizes", "element-width", "element-height", "is-lightbox-enabled", "is-unstyled", "onImageClick"]))], 2))), 128))], 2)
}
const gh = oe(dh, [["render", mh]])
  , ph = re({
    __name: "GridGallery",
    props: {
        columnCount: {},
        columnGap: {},
        mobileColumnCount: {},
        mobileColumnGap: {},
        gridImages: {},
        isLightboxEnabled: {
            type: Boolean,
            default: !1
        },
        isMasonryLayout: {
            type: Boolean,
            default: !1
        },
        loadImages: {
            type: Boolean,
            default: !0
        }
    },
    emits: ["image-click", "image-load"],
    setup(t, {expose: n, emit: a}) {
        n();
        const e = t
          , r = a
          , o = {
            "image-click": (p, g) => r("image-click", p, g),
            "image-load": () => r("image-load")
        }
          , i = p => e.gridImages.reduce( (g, v, f) => g.map( (b, D) => D === f % p ? [...b, v] : b), Array(p).fill([])).flat()
          , s = u( () => i(e.columnCount))
          , l = u( () => i(e.mobileColumnCount))
          , d = {
            props: e,
            emit: r,
            galleryListListeners: o,
            getMasonryImages: i,
            masonryImages: s,
            masonryImagesMobile: l,
            GalleryList: gh
        };
        return Object.defineProperty(d, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        d
    }
})
  , vh = {
    class: "grid-gallery"
};
function fh(t, n, a, e, r, o) {
    return m(),
    y("div", vh, [a.isMasonryLayout ? (m(),
    y(ge, {
        key: 0
    }, [Ae(e.GalleryList, Je({
        class: "grid-gallery-masonry--desktop"
    }, {
        images: e.masonryImages,
        ...e.props
    }, Pr(e.galleryListListeners)), null, 16), Ae(e.GalleryList, Je({
        class: "grid-gallery-masonry--mobile"
    }, {
        images: e.masonryImagesMobile,
        ...e.props
    }, Pr(e.galleryListListeners)), null, 16)], 64)) : (m(),
    z(e.GalleryList, Je({
        key: 1
    }, {
        images: e.props.gridImages,
        ...e.props
    }, Pr(e.galleryListListeners)), null, 16))])
}
const hh = oe(ph, [["render", fh], ["__scopeId", "data-v-6ebbc3c6"]])
  , yh = t => {
    const n = u( () => t.data.images.length > 0)
      , a = u( () => Number.parseInt(t.data.desktop.columnCount || 1, 10))
      , e = u( () => Number.parseInt(t.data.desktop.columnGap || 0, 10))
      , r = u( () => Number.parseInt(t.data.mobile.columnCount || 1, 10))
      , o = u( () => Number.parseInt(t.data.mobile.columnGap || 0, 10))
      , i = u( () => t.data.settings.layout === "masonry");
    return {
        hasGridImages: n,
        columnCount: a,
        columnGap: e,
        isMasonryLayout: i,
        mobileColumnCount: r,
        mobileColumnGap: o
    }
}
  , Pt = {
    Backspace: "Backspace",
    ShiftLeft: "ShiftLeft",
    Escape: "Escape",
    Space: "Space",
    ArrowLeft: "ArrowLeft",
    ArrowUp: "ArrowUp",
    ArrowRight: "ArrowRight",
    ArrowDown: "ArrowDown",
    Delete: "Delete",
    KeyX: "KeyX",
    KeyC: "KeyC",
    KeyD: "KeyD",
    KeyY: "KeyY",
    KeyZ: "KeyZ",
    OSLeft: "OSLeft",
    NumLockSlash: "NumLockSlash",
    KeySlash: "Slash",
    Enter: "Enter",
    BracketLeft: "BracketLeft",
    BracketRight: "BracketRight"
}
  , bh = {
    8: Pt.Backspace,
    16: Pt.ShiftLeft,
    27: Pt.Escape,
    32: Pt.Space,
    37: Pt.ArrowLeft,
    38: Pt.ArrowUp,
    39: Pt.ArrowRight,
    40: Pt.ArrowDown,
    46: Pt.Delete,
    67: Pt.KeyC,
    68: Pt.KeyD,
    88: Pt.KeyX,
    89: Pt.KeyY,
    90: Pt.KeyZ,
    91: Pt.OSLeft,
    111: Pt.NumLockSlash,
    191: Pt.KeySlash,
    219: Pt.BracketLeft,
    221: Pt.BracketRight
}
  , li = t => {
    let n;
    return t ? t.code !== void 0 ? n = t.code === "MetaLeft" ? "OSLeft" : t.code : t.keyCode !== void 0 && (n = bh[t.keyCode]) : n = void 0,
    n
}
  , wn = E([])
  , kn = E(null)
  , ir = () => {
    const t = qc()
      , n = u( () => t?.name === Fc)
      , a = u( () => wn.value.length > 0)
      , e = u( () => wn.value.length > 1)
      , r = u( () => wn.value.length - 1)
      , o = u( () => kn.value === wn.value.length - 1)
      , i = u( () => kn.value === 0)
      , s = u( () => wn.value[kn.value])
      , l = T => {
        kn.value = T
    }
      , d = T => {
        wn.value = Array.isArray(T) ? T : [T]
    }
      , p = () => i.value ? l(r.value) : l(kn.value - 1)
      , g = () => o.value ? l(0) : l(kn.value + 1)
      , v = () => {
        d([]),
        l(null)
    }
      , f = () => {
        e.value || v()
    }
      , b = (T, w=0) => {
        n.value || (d(T),
        l(w))
    }
      , D = T => {
        li(T) === Pt.ArrowRight && g(),
        li(T) === Pt.ArrowLeft && p(),
        li(T) === Pt.Escape && v()
    }
    ;
    return {
        lightboxImages: u( () => wn.value),
        currentLightboxImageIndex: u( () => kn.value),
        currentLightboxImage: s,
        lastImageIndex: r,
        isFirstImage: i,
        isLastImage: o,
        isLightboxOpen: a,
        isImageGalleryMode: e,
        setLightboxImages: d,
        setCurrentLightboxImageIndex: l,
        goToNextImage: g,
        goToPreviousImage: p,
        handleLightboxNav: D,
        closeLightbox: v,
        addImagesToLightbox: b,
        onLightboxClickOutside: f
    }
}
  , _h = "lightbox"
  , wh = re({
    name: "GridGalleryProviderUser",
    components: {
        GridGallery: hh
    },
    props: {
        data: {
            type: Object,
            required: !0
        },
        mobileBlockPadding: {
            type: String,
            default: "0px"
        },
        elementWidth: {
            type: Number,
            default: null
        },
        elementHeight: {
            type: Number,
            default: null
        }
    },
    emits: ["image-load"],
    setup(t) {
        const {siteId: n} = kt()
          , {columnCount: a, columnGap: e, isMasonryLayout: r, mobileColumnCount: o, mobileColumnGap: i} = yh(t)
          , {addImagesToLightbox: s} = ir()
          , l = u( () => {
            const {right: S} = Kr(t.mobileBlockPadding ?? "");
            return Number.parseInt(S, 10) || 0
        }
        )
          , d = E(!1)
          , p = () => {
            d.value = window.matchMedia(`(max-width: ${Br}px)`).matches
        }
        ;
        Pe( () => {
            p(),
            window.addEventListener("resize", p)
        }
        ),
        ro( () => {
            window.removeEventListener("resize", p)
        }
        );
        const g = u( () => d.value ? o.value : a.value)
          , v = u( () => Math.ceil((e.value + t.elementWidth) / g.value) - e.value)
          , f = u( () => !r.value && v.value)
          , b = u( () => [`(min-width: ${Br}px) ${v.value}px`, `${100 / g.value}vw`].join(", "))
          , D = u( () => t.data.images.map(S => {
            const B = u( () => Et(S.origin, S.path, n.value, {
                width: v.value,
                height: f.value
            }))
              , I = u( () => ev(S.origin, S.path, n.value, {
                width: v.value,
                height: f.value,
                columnCount: g.value,
                columnGap: e.value,
                mobilePadding: l.value,
                isMasonryLayout: r.value
            }));
            return {
                ...S,
                src: B.value,
                srcset: I.value,
                sizes: b.value,
                width: v.value,
                height: f.value
            }
        }
        ))
          , T = u( () => t.data.settings.imageClickAction === _h);
        return {
            gridImages: D,
            isLightboxEnabled: T,
            handleGalleryImageClick: (S, B) => {
                if (T.value) {
                    const I = S.map(R => ({
                        alt: R.alt,
                        src: mu(R.origin, R.path, n.value)
                    }));
                    s(I, B)
                }
            }
            ,
            columnCount: a,
            columnGap: e,
            isMasonryLayout: r,
            mobileColumnCount: o,
            mobileColumnGap: i
        }
    }
});
function kh(t, n, a, e, r, o) {
    const i = mt("GridGallery");
    return m(),
    z(i, {
        "grid-images": t.gridImages,
        "is-lightbox-enabled": t.isLightboxEnabled,
        "column-count": t.columnCount,
        "column-gap": t.columnGap,
        "mobile-column-count": t.mobileColumnCount,
        "mobile-column-gap": t.mobileColumnGap,
        "is-masonry-layout": t.isMasonryLayout,
        onImageClick: t.handleGalleryImageClick,
        onImageLoad: n[0] || (n[0] = s => t.$emit("image-load"))
    }, null, 8, ["grid-images", "is-lightbox-enabled", "column-count", "column-gap", "mobile-column-count", "mobile-column-gap", "is-masonry-layout", "onImageClick"])
}
const Sh = oe(wh, [["render", kh]])
  , Th = (t, n, a) => Math.min(Math.max(t, n), a)
  , Nl = 1920
  , Hl = ({isAspectRatioBiggerThanContainer: t, scale: n, containerHeight: a, containerWidth: e, naturalImageHeight: r, naturalImageWidth: o}) => {
    if (t) {
        const i = a / r;
        return Math.round(o * i * n)
    }
    return Math.round(e * n)
}
  , Vl = ({isAspectRatioBiggerThanContainer: t, scale: n, containerHeight: a, containerWidth: e, naturalImageHeight: r, naturalImageWidth: o}) => {
    if (!t) {
        const i = e / o;
        return Math.round(r * i * n)
    }
    return Math.round(a * n)
}
  , vo = ({offsetInPx: t, imageSize: n, containerSize: a, offsetInPercent: e}) => {
    if (!t)
        return e;
    const r = (n - a) / 100;
    return Th(e + t / r, 0, 100)
}
  , fo = ({imageSize: t, containerSize: n, offset: a}) => (n - t) * (a / 100)
  , Ul = ({prefix: t, left: n, top: a, scale: e, isAspectRatioLargerThanContainer: r}) => ({
    [`--${t}-left`]: `${n}px`,
    [`--${t}-top`]: `${a}px`,
    [`--${t}-scale`]: e,
    [`--${t}-width`]: r ? "auto" : "100%",
    [`--${t}-height`]: r ? "100%" : "auto"
})
  , Fl = ({left: t, top: n, imageWidth: a, imageHeight: e, containerWidth: r, containerHeight: o}) => ({
    left: Math.round(Math.abs(t)),
    top: Math.round(Math.abs(n)),
    right: Math.round(a - r - Math.abs(t)),
    bottom: Math.round(e - o - Math.abs(n)),
    imageWidth: a,
    imageHeight: e
})
  , Ch = (t, n) => {
    if (t > Nl) {
        const a = Nl / t;
        return {
            width: Math.round(t * a),
            height: Math.round(n * a)
        }
    }
    return {
        width: t,
        height: n
    }
}
  , jl = (t, {dragDeltaYPosition: n, dragDeltaXPosition: a, href: e}={}) => {
    const r = u( () => Ch(t.data.fullResolutionWidth, t.data.fullResolutionHeight))
      , o = u( () => r.value.width)
      , i = u( () => r.value.height)
      , s = () => o.value / i.value
      , l = u( () => t.data.desktop?.crop)
      , d = u( () => t.renderedPosition || t.data.desktop)
      , p = u( () => d.value.width)
      , g = u( () => d.value.height)
      , v = u( () => p.value / g.value)
      , f = u( () => s() > v.value)
      , b = u( () => Hl({
        isAspectRatioBiggerThanContainer: f.value,
        scale: l.value.scale,
        containerHeight: g.value,
        containerWidth: p.value,
        naturalImageHeight: i.value,
        naturalImageWidth: o.value
    }))
      , D = u( () => Vl({
        isAspectRatioBiggerThanContainer: f.value,
        scale: l.value.scale,
        containerHeight: g.value,
        containerWidth: p.value,
        naturalImageHeight: i.value,
        naturalImageWidth: o.value
    }))
      , T = u( () => vo({
        offsetInPx: -n?.value,
        imageSize: D.value,
        containerSize: g.value,
        offsetInPercent: l.value.top
    }))
      , w = u( () => fo({
        imageSize: D.value,
        containerSize: g.value,
        offset: T.value
    }))
      , S = u( () => vo({
        offsetInPx: -a?.value,
        imageSize: b.value,
        containerSize: p.value,
        offsetInPercent: l.value.left
    }))
      , B = u( () => fo({
        imageSize: b.value,
        containerSize: p.value,
        offset: S.value
    }))
      , I = u( () => Fl({
        left: B.value,
        top: w.value,
        imageWidth: b.value,
        imageHeight: D.value,
        containerWidth: p.value,
        containerHeight: g.value
    }))
      , R = u( () => t.data.mobile.crop || l.value)
      , $ = u( () => t.renderedPosition || t.data.mobile)
      , G = u( () => $.value.width)
      , ee = u( () => $.value.height)
      , K = u( () => G.value / ee.value)
      , M = u( () => s() > K.value)
      , j = u( () => Hl({
        isAspectRatioBiggerThanContainer: M.value,
        scale: R.value.scale,
        containerHeight: ee.value,
        containerWidth: G.value,
        naturalImageHeight: i.value,
        naturalImageWidth: o.value
    }))
      , q = u( () => Vl({
        isAspectRatioBiggerThanContainer: M.value,
        scale: R.value.scale,
        containerHeight: ee.value,
        containerWidth: G.value,
        naturalImageHeight: i.value,
        naturalImageWidth: o.value
    }))
      , Y = u( () => vo({
        offsetInPx: -n?.value,
        imageSize: q.value,
        containerSize: ee.value,
        offsetInPercent: R.value.top
    }))
      , L = u( () => fo({
        imageSize: q.value,
        containerSize: ee.value,
        offset: Y.value
    }))
      , _ = u( () => vo({
        offsetInPx: -a?.value,
        imageSize: j.value,
        containerSize: G.value,
        offsetInPercent: R.value.left
    }))
      , A = u( () => fo({
        imageSize: j.value,
        containerSize: G.value,
        offset: _.value
    }))
      , P = u( () => Fl({
        left: A.value,
        top: L.value,
        imageWidth: j.value,
        imageHeight: q.value,
        containerWidth: G.value,
        containerHeight: ee.value
    }))
      , H = u( () => {
        const h = !["svg", "ico", "gif"].includes(er(t.data.settings.path));
        if (!l.value || !o.value || !i.value || !h)
            return null;
        const W = Ul({
            prefix: "desktop",
            left: B.value,
            top: w.value,
            scale: l.value.scale,
            isAspectRatioLargerThanContainer: f.value
        })
          , U = Ul({
            prefix: "mobile",
            left: A.value,
            top: L.value,
            scale: R.value.scale,
            isAspectRatioLargerThanContainer: M.value
        });
        return {
            ...W,
            ...U
        }
    }
    )
      , k = u( () => {
        const {right: h} = Kr(t.data?.settings?.styles?.["m-block-padding"] ?? "")
          , W = h ? Number.parseInt(h, 10) : null;
        return xo(t.data.desktop.width, W)
    }
    );
    return {
        href: e,
        cropCSSVars: H,
        desktopCropParams: I,
        mobileCropParams: P,
        desktopTop: w,
        desktopLeft: B,
        mobileLeft: A,
        mobileTop: L,
        desktopTopPercentWithOffset: T,
        desktopLeftPercentWithOffset: S,
        sizes: k
    }
}
  , Ih = {
    __name: "GridImageProviderUser",
    props: {
        id: {
            type: String,
            required: !0
        },
        data: {
            type: Object,
            required: !0
        },
        lcp: {
            type: Object,
            default: () => ({})
        },
        mobileBlockPadding: {
            type: String,
            default: "0px"
        },
        elementWidth: {
            type: Number,
            default: null
        },
        elementHeight: {
            type: Number,
            default: null
        },
        mobileElementWidth: {
            type: Number,
            default: null
        },
        mobileElementHeight: {
            type: Number,
            default: null
        },
        resetMobilePosition: {
            type: Boolean,
            default: !0
        },
        currentLocale: {
            type: String,
            required: !0
        },
        mobileBorderRadius: {
            type: [Number, String],
            default: 0
        },
        desktopBorderRadius: {
            type: [Number, String],
            default: 0
        },
        shapeMaskSource: {
            type: String,
            default: null
        },
        isInPreviewMode: {
            type: Boolean,
            default: !1
        },
        overlayOpacity: {
            type: Number,
            default: 0
        }
    },
    setup(t, {expose: n}) {
        n(),
        ht(Y => ({
            "0860cbd8": R.value,
            bfff275c: $.value
        }));
        const a = t
          , {addImagesToLightbox: e} = ir()
          , {siteId: r, getPagePathFromId: o} = kt()
          , {sizes: i, cropCSSVars: s, desktopCropParams: l, mobileCropParams: d, href: p} = jl(a, {
            href: u( () => a.data.linkType === Ri.PAGE && o({
                pageId: a.data.linkedPageId
            }) || a.data.href)
        })
          , g = Y => {
            const {fullResolutionWidth: L, fullResolutionHeight: _} = a.data
              , {left: A, top: P, right: H, bottom: k, imageWidth: h, imageHeight: W} = Y
              , U = A / h
              , te = P / W
              , Q = H / h
              , V = k / W;
            return {
                left: L * U,
                top: _ * te,
                right: L * Q,
                bottom: _ * V
            }
        }
          , v = Y => {
            const {top: L, right: _, bottom: A, left: P} = g(Y);
            return `${L};${_};${A};${P}`
        }
          , f = u( () => [a.data.settings.origin, a.data.settings.path, r.value])
          , b = u( () => s.value ? Et(...f.value, {
            width: a.elementWidth,
            height: a.elementHeight,
            shouldContain: !1,
            trim: v(l.value)
        }) : Et(...f.value, {
            width: a.elementWidth,
            height: a.elementHeight,
            shouldContain: a.data.settings.styles["object-fit"] === "contain"
        }))
          , D = u( () => er(a.data.settings.path) === "svg")
          , T = u( () => a.mobileElementWidth && a.mobileElementHeight)
          , w = u( () => !a.mobileElementHeight || a.mobileElementHeight < 0 ? b.value : s.value ? Et(...f.value, {
            width: a.mobileElementWidth,
            height: a.mobileElementHeight,
            shouldContain: !1,
            trim: v(d.value)
        }) : Et(...f.value, {
            width: a.mobileElementWidth,
            height: a.mobileElementHeight,
            shouldContain: !1
        }))
          , S = u( () => s.value ? In(...f.value, {
            width: a.elementWidth,
            height: a.elementHeight,
            shouldContain: !1,
            mobilePadding: 0,
            trim: v(l.value)
        }) : In(...f.value, {
            width: a.elementWidth,
            height: a.elementHeight,
            shouldContain: a.data.settings.styles["object-fit"] === "contain"
        }))
          , B = u( () => !a.mobileElementHeight || a.mobileElementHeight < 0 ? S.value : s.value ? In(...f.value, {
            width: a.mobileElementWidth,
            height: a.mobileElementHeight,
            shouldContain: !1,
            mobilePadding: 0,
            trim: v(d.value)
        }) : In(...f.value, {
            width: a.mobileElementWidth,
            height: a.mobileElementHeight,
            mobilePadding: 0,
            shouldContain: !1
        }))
          , I = () => {
            a.data.settings.clickAction === ti && e({
                src: Et(a.data.settings.origin, a.data.settings.path, r.value),
                srcset: Ja(a.data.settings.origin, a.data.settings.path, r.value),
                alt: a.data.settings.alt
            })
        }
          , R = u( () => `${a.elementHeight}px`)
          , $ = u( () => `${a.mobileElementHeight}px`)
          , G = u( () => a.data.settings.alt)
          , ee = u( () => a.data.settings.clickAction === Qs ? "a" : "div")
          , K = u( () => a.data.target)
          , M = u( () => a.data.rel)
          , j = u( () => a.data.settings.clickAction === ti)
          , q = {
            props: a,
            addImagesToLightbox: e,
            siteId: r,
            getPagePathFromId: o,
            sizes: i,
            cropCSSVars: s,
            desktopCropParams: l,
            mobileCropParams: d,
            href: p,
            calculateFullResolutionTrim: g,
            constructTrimParamForCloudflare: v,
            imagePathParams: f,
            src: b,
            isSvg: D,
            isMobileLayout: T,
            mobileSrc: w,
            srcset: S,
            mobileSrcset: B,
            handleImageClick: I,
            elementHeightCssVar: R,
            mobileElementHeightCssVar: $,
            alt: G,
            tagName: ee,
            target: K,
            rel: M,
            isLightboxEnabled: j,
            computed: u,
            GridImage: bu,
            get useLightbox() {
                return ir
            },
            get IMAGE_CLICK_ACTION_LINK() {
                return Qs
            },
            get IMAGE_CLICK_ACTION_LIGHTBOX() {
                return ti
            },
            get getOptimizedSrc() {
                return Et
            },
            get getGridItemSrcset() {
                return In
            },
            get getFullWidthSrcset() {
                return Ja
            },
            get useGridImage() {
                return jl
            },
            get getExtension() {
                return er
            },
            get useSiteGlobal() {
                return kt
            },
            get LINK_TYPE() {
                return Ri
            }
        };
        return Object.defineProperty(q, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        q
    }
}
  , Ph = ["id"];
function Eh(t, n, a, e, r, o) {
    return m(),
    y("div", {
        id: a.id,
        class: J(["image-wrapper", {
            "image-wrapper--layout": e.isMobileLayout
        }])
    }, [Ae(e.GridImage, {
        class: "image-wrapper--desktop",
        alt: e.alt,
        href: e.href,
        sizes: e.sizes,
        src: e.src,
        srcset: e.srcset,
        "tag-name": e.tagName,
        target: e.target,
        rel: e.rel,
        "is-eager": a.lcp.type === "grid-image" && a.lcp.id === a.id,
        "is-lightbox-enabled": e.isLightboxEnabled,
        "element-height": a.elementHeight,
        "element-width": a.elementWidth,
        "shape-mask-source": a.shapeMaskSource,
        "reset-mobile-position": a.resetMobilePosition,
        "mobile-border-radius": a.mobileBorderRadius,
        "desktop-border-radius": a.desktopBorderRadius,
        "is-in-preview-mode": a.isInPreviewMode,
        "overlay-opacity": a.overlayOpacity,
        onImageClick: e.handleImageClick
    }, null, 8, ["alt", "href", "sizes", "src", "srcset", "tag-name", "target", "rel", "is-eager", "is-lightbox-enabled", "element-height", "element-width", "shape-mask-source", "reset-mobile-position", "mobile-border-radius", "desktop-border-radius", "is-in-preview-mode", "overlay-opacity"]), e.isMobileLayout ? (m(),
    z(e.GridImage, {
        key: 0,
        "is-mobile-image": !0,
        class: "image-wrapper--mobile",
        alt: e.alt,
        href: e.href,
        sizes: e.sizes,
        src: e.mobileSrc,
        srcset: e.mobileSrcset,
        "tag-name": e.tagName,
        "is-svg": e.isSvg,
        target: e.target,
        rel: e.rel,
        "is-eager": a.lcp.type === "grid-image" && a.lcp.id === a.id,
        "is-lightbox-enabled": e.isLightboxEnabled,
        "element-height": a.mobileElementHeight,
        "element-width": a.mobileElementWidth,
        "shape-mask-source": a.shapeMaskSource,
        "reset-mobile-position": a.resetMobilePosition,
        "mobile-border-radius": a.mobileBorderRadius,
        "desktop-border-radius": a.desktopBorderRadius,
        "overlay-opacity": a.overlayOpacity,
        "is-in-preview-mode": a.isInPreviewMode,
        onImageClick: e.handleImageClick
    }, null, 8, ["alt", "href", "sizes", "src", "srcset", "tag-name", "is-svg", "target", "rel", "is-eager", "is-lightbox-enabled", "element-height", "element-width", "shape-mask-source", "reset-mobile-position", "mobile-border-radius", "desktop-border-radius", "overlay-opacity", "is-in-preview-mode"])) : x("", !0)], 10, Ph)
}
const Dh = oe(Ih, [["render", Eh], ["__scopeId", "data-v-f3eaee1e"]])
  , Mh = re({
    props: {
        src: {
            type: String,
            default: null
        },
        alt: {
            type: String,
            default: null
        },
        poster: {
            type: String,
            default: null
        }
    },
    emits: ["media-load"]
})
  , Ah = ["src", "poster"]
  , Oh = ["src", "alt"];
function xh(t, n, a, e, r, o) {
    return t.src.includes("video") || t.src.includes(".mp4") ? (m(),
    y("video", {
        key: 0,
        src: t.src,
        poster: t.poster,
        class: "media-item",
        controls: "",
        onProgressOnce: n[0] || (n[0] = i => t.$emit("media-load"))
    }, null, 40, Ah)) : (m(),
    y("img", {
        key: 1,
        src: t.src,
        alt: t.alt,
        class: "media-item",
        onLoad: n[1] || (n[1] = i => t.$emit("media-load"))
    }, null, 40, Oh))
}
const Bh = oe(Mh, [["render", xh], ["__scopeId", "data-v-a7175d28"]])
  , Lh = re({
    components: {
        GridInstagramFeedMediaItemFigure: Bh
    },
    props: {
        src: {
            type: String,
            default: null
        },
        alt: {
            type: String,
            default: null
        },
        href: {
            type: String,
            default: null
        },
        poster: {
            type: String,
            default: null
        }
    },
    data() {
        return {
            DATA_ATTRIBUTE_ANIMATION_ROLE: Ka,
            DATA_ATTRIBUTE_ANIMATION_ROLE_IMAGE: ss,
            isLoaded: !1
        }
    }
})
  , Rh = ["href"]
  , Nh = {
    key: 1
}
  , Hh = {
    key: 2,
    class: "placeholder"
};
function Vh(t, n, a, e, r, o) {
    const i = mt("GridInstagramFeedMediaItemFigure");
    return m(),
    y("div", pt({
        class: ["media-wrapper", {
            loaded: t.isLoaded
        }],
        [t.DATA_ATTRIBUTE_ANIMATION_ROLE || ""]: t.DATA_ATTRIBUTE_ANIMATION_ROLE_IMAGE
    }), [t.src && t.href ? (m(),
    y("a", {
        key: 0,
        title: "Open instagram page of this image",
        href: t.href,
        rel: "noopener",
        target: "_blank"
    }, [Ae(i, {
        src: t.src,
        alt: t.alt,
        poster: t.poster,
        onMediaLoad: n[0] || (n[0] = s => t.isLoaded = !0)
    }, null, 8, ["src", "alt", "poster"])], 8, Rh)) : t.src && !t.href ? (m(),
    y("div", Nh, [Ae(i, {
        src: t.src,
        alt: t.alt,
        poster: t.poster,
        onMediaLoad: n[1] || (n[1] = s => t.isLoaded = !0)
    }, null, 8, ["src", "alt", "poster"])])) : (m(),
    y("div", Hh))], 16)
}
const Uh = oe(Lh, [["render", Vh], ["__scopeId", "data-v-1ae00c6d"]])
  , Fh = re({
    components: {
        GridInstagramFeedMediaItem: Uh
    },
    props: {
        id: {
            type: String,
            required: !0
        },
        media: {
            type: Array,
            default: () => []
        }
    }
})
  , jh = ["id"];
function Gh(t, n, a, e, r, o) {
    const i = mt("GridInstagramFeedMediaItem");
    return m(),
    y("div", {
        id: t.id,
        class: "instagram-feed"
    }, [(m(!0),
    y(ge, null, Ce(t.media, s => (m(),
    z(i, {
        key: s.src,
        src: s.src,
        href: s.href,
        alt: s.alt,
        poster: s.poster
    }, null, 8, ["src", "href", "alt", "poster"]))), 128))], 8, jh)
}
const Yh = oe(Fh, [["render", Gh]])
  , Gl = [{
    alt: "Workstation",
    id: "qc2YaEHSYsc",
    src: `${wt}/workstation.jpg`
}, {
    alt: "Waterfall between rocks",
    id: "ifnzcFXUmH0",
    src: `${wt}/waterfall-between-rocks.jpg`
}, {
    alt: "Trees with snow",
    id: "J2vryWaTqlB",
    src: `${wt}/trees-with-snow.png`
}, {
    alt: "Tree buds",
    id: "ZzmFPZuw7S1",
    src: `${wt}/tree-buds.jpg`
}, {
    alt: "Tiger drinking water",
    id: "k37Jfax7a6k",
    src: `${wt}/tiger-drinking-water.jpg`
}, {
    alt: "Tall well preserved buildings",
    id: "gTNSQDsXWp7",
    src: `${wt}/tall-well-preserved-buildings.jpg`
}, {
    alt: "Sunny beautiful wall",
    id: "QEdmdqjqcMf",
    src: `${wt}/sunny-beautiful-wall.jpg`
}, {
    alt: "Stereo gear",
    id: "iUXujDl2onh",
    src: `${wt}/stereo-gear.jpg`
}, {
    alt: "Rooftop oasis",
    id: "LWHjQE4HOv7",
    src: `${wt}/rooftop-oasis.jpg`
}, {
    alt: "Rocky beach",
    id: "o4qz1QOQcpJ",
    src: `${wt}/rocky-beach.jpg`
}, {
    alt: "Photographer holding camera",
    id: "VAHQ4wGABhK",
    src: `${wt}/photographer-holding-camera.jpg`
}, {
    alt: "Koi fishes",
    id: "zg35JVHQ4wG",
    src: `${wt}/koi-fishes.jpg`
}, {
    alt: "Human head artificially created",
    id: "zg35JVl8GY2",
    src: `${wt}/human-head-artificially-created.jpg`
}, {
    alt: "Horse eating grass",
    id: "dBwJoATZJBH",
    src: `${wt}/horse-eating-grass.jpg`
}, {
    alt: "Fluffy decoration in water",
    id: "HR21NDsphkV",
    src: `${wt}/fluffy-docoration-in-water.jpg`
}, {
    alt: "Elk looking at camera",
    id: "oLq0J4X2h2P",
    src: `${wt}/elk-looking-at-camera.jpg`
}, {
    alt: "Dog running in snow",
    id: "dbULY2RIxXc",
    src: `${wt}/dog-running-in-snow.jpg`
}, {
    alt: "Clean workspace",
    id: "WRmXHA1JA8H",
    src: `${wt}/clean-workspace.jpg`
}, {
    alt: "Cinematic food shot",
    id: "YgbHW4EtzbY",
    src: `${wt}/cinematic-food-shot.jpg`
}, {
    alt: "Christmas houses",
    id: "Eyoj1y8hvYz",
    src: `${wt}/christmas-houses.jpg`
}, {
    alt: "Bird sitting on branch",
    id: "yQKxjLtI8eg",
    src: `${wt}/bird-sitting-on-branch.jpg`
}, {
    alt: "Beautiful entry to private property",
    id: "1StnvFtqFjR",
    src: `${wt}/beautiful-entry-to-private-property.jpg`
}, {
    alt: "African animals",
    id: "nPjqWNmfFf0",
    src: `${wt}/african-animals.jpg`
}, {
    alt: "Workspace",
    id: "7gsm5H6lHSH",
    src: `${wt}/workspace.jpg`
}]
  , Wh = "https://graph.instagram.com/me/media"
  , $h = ["id", "permalink", "caption", "media_url", "thumbnail_url"]
  , qh = {
    INSTAGRAM_BASIC_DISPLAY: "instagram_basic_display",
    INSTAGRAM_API_WITH_INSTAGRAM_LOGIN: "instagram_api_with_instagram_login"
}
  , zh = ({elementId: t, elementData: n, siteId: a, getInstagramTokenHandler: e, getInstagramFeedHandler: r, cleanupCallback: o}) => {
    const i = u( () => n.value.settings["item-count"])
      , s = E(null)
      , l = E([])
      , d = u( () => n.value.settings.apiVersion === qh.INSTAGRAM_API_WITH_INSTAGRAM_LOGIN)
      , p = u( () => l.value.length > 0 ? l.value.filter( ({src: f}) => typeof f < "u").slice(0, i.value) : new Array(i.value).fill({}))
      , g = async () => {
        if (d.value)
            return r({
                siteId: a,
                elementId: t.value
            });
        const f = new URL(Wh);
        f.searchParams.set("fields", $h.join(",")),
        f.searchParams.set("access_token", s.value);
        const b = await fetch(f.toString());
        return b.ok ? (await b.json()).data : Promise.reject(new Error("Failed to fetch Instagram media"))
    }
    ;
    return {
        media: p,
        init: async () => {
            try {
                d.value || (s.value = await e({
                    siteId: a,
                    elementId: t.value
                }))
            } catch {
                l.value = Gl;
                return
            }
            try {
                const f = await g();
                l.value = f.map(b => ({
                    id: b.id,
                    src: b.media_url,
                    alt: b.caption,
                    href: b.permalink,
                    poster: b.thumbnail_url
                }))
            } catch (f) {
                throw l.value = Gl,
                o && o(),
                f
            }
        }
        ,
        itemGap: u( () => n.value.settings.styles["item-gap"]),
        isNewInstagramApi: d
    }
}
  , Zh = re({
    components: {
        GridInstagramFeed: Yh
    },
    props: {
        id: {
            type: String,
            required: !0
        },
        data: {
            type: Object,
            required: !0
        }
    },
    emits: ["media-loaded"],
    setup(t, n) {
        const {siteId: a} = kt()
          , e = u( () => t.id)
          , r = u( () => t.data)
          , o = async ({siteId: l, elementId: d}) => (await (await fetch(`https://builder-backend.hostinger.com/u1/instagram/token/${l}/${d}`)).json()).accessToken
          , {media: i, init: s} = zh({
            elementId: e,
            elementData: r,
            siteId: a.value,
            getInstagramTokenHandler: o,
            getInstagramFeedHandler: async ({siteId: l, elementId: d}) => (await fetch(`https://builder-backend.hostinger.com/u1/instagram/feed/${l}/${d}`)).json()
        });
        return Pe( () => {
            s()
        }
        ),
        Fe(i, async l => {
            l?.length && (await Nt(),
            n.emit("media-loaded"))
        }
        , {
            immediate: !1
        }),
        {
            media: i
        }
    }
});
function Kh(t, n, a, e, r, o) {
    const i = mt("GridInstagramFeed");
    return m(),
    z(i, {
        id: t.id,
        media: t.media
    }, null, 8, ["id", "media"])
}
const Qh = oe(Zh, [["render", Kh]])
  , Xh = re({
    __name: "GridMap",
    props: {
        isIframeLoaded: {
            type: Boolean
        },
        shouldRender: {
            type: Boolean,
            default: !0
        },
        src: {}
    },
    setup(t, {expose: n}) {
        n();
        const e = {
            props: t
        };
        return Object.defineProperty(e, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        e
    }
})
  , Jh = ["src"]
  , ey = {
    "data-qa": "grid-map-pin",
    class: "grid-map__pin"
};
function ty(t, n, a, e, r, o) {
    return m(),
    y("div", {
        class: J(["grid-map", {
            "grid-map--loading": !a.isIframeLoaded
        }])
    }, [C("iframe", {
        ref: "iframeRef",
        class: "grid-map__frame",
        "data-qa": "grid-map-iframe",
        width: "100%",
        height: "100%",
        src: e.props.shouldRender ? e.props.src : ""
    }, null, 8, Jh), se(C("div", ey, null, 512), [[da, !a.isIframeLoaded]])], 2)
}
const ay = oe(Xh, [["render", ty], ["__scopeId", "data-v-d752c768"]])
  , ny = (t, n) => {
    try {
        const {isObserved: a} = hu(n)
          , e = E(!1)
          , r = Za({
            src: u( () => t.data.settings?.src),
            shouldRender: u( () => a.value),
            isIframeLoaded: u( () => e.value)
        })
          , o = os( () => {
            const i = n.value?.$refs;
            i && (i.iframeRef.addEventListener("load", () => {
                e.value = !0
            }
            ),
            o())
        }
        );
        return {
            composedProps: r
        }
    } catch (a) {
        console.error(a)
    }
}
  , ry = re({
    name: "GridMapProviderUser",
    components: {
        GridMap: ay
    },
    props: {
        data: {
            type: Object,
            required: !0
        }
    },
    setup(t) {
        const n = E(null)
          , {composedProps: a} = ny(t, n);
        return {
            mapRef: n,
            composedProps: a
        }
    }
});
function oy(t, n, a, e, r, o) {
    const i = mt("GridMap");
    return m(),
    z(i, Je({
        ref: "mapRef"
    }, t.composedProps), null, 16)
}
const iy = oe(ry, [["render", oy]])
  , sy = re({
    __name: "GridSocialIcons",
    props: {
        links: {
            default: () => []
        },
        preventLinks: {
            type: Boolean,
            default: !1
        },
        direction: {
            default: "row"
        },
        directionMobile: {
            default: null
        },
        preventSpacing: {
            type: Boolean,
            default: !1
        },
        fullHeight: {
            type: Boolean,
            default: !1
        }
    },
    setup(t, {expose: n}) {
        n();
        const a = t
          , e = u( () => ["social-icons", `social-icons--${a.direction}`])
          , r = u( () => ({
            "--m-icon-direction": a.directionMobile || a.direction,
            "--icon-padding-vertical": a.direction === "column" ? "var(--space-between-icons)" : "0",
            "--icon-padding-horizontal": a.direction === "row" ? "var(--space-between-icons)" : "0",
            ...a.fullHeight && {
                height: "100%"
            },
            ...a.preventSpacing && {
                "--space-between-icons": "0px"
            },
            ...a.directionMobile && {
                "--m-icon-padding-vertical": a.directionMobile === "column" ? "var(--space-between-icons)" : "0",
                "--m-icon-padding-horizontal": a.directionMobile === "row" ? "var(--space-between-icons)" : "0"
            }
        }))
          , o = {
            props: a,
            computedClass: e,
            computedStyles: r,
            get capitalizeFirstLetter() {
                return qp
            }
        };
        return Object.defineProperty(o, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        o
    }
})
  , ly = ["href", "title", "innerHTML"];
function cy(t, n, a, e, r, o) {
    return m(),
    y("div", {
        class: J(e.computedClass),
        style: ze(e.computedStyles)
    }, [(m(!0),
    y(ge, null, Ce(a.links, ({link: i, icon: s, svg: l}) => (m(),
    y("a", Je({
        key: i,
        href: i,
        target: "_blank",
        rel: "noopener",
        title: `Go to ${e.capitalizeFirstLetter(s)} page`,
        class: "social-icons__link"
    }, Pr({
        dragstart: a.preventLinks ? d => d.preventDefault() : () => null,
        click: a.preventLinks ? d => d.preventDefault() : () => null
    }, !0), {
        innerHTML: l
    }), null, 16, ly))), 128))], 6)
}
const _u = oe(sy, [["render", cy], ["__scopeId", "data-v-17c99e7b"]])
  , uy = t => {
    const n = u( () => t.data.settings.styles);
    return Za({
        links: u( () => t.data.links),
        direction: u( () => n.value["icon-direction"]),
        directionMobile: u( () => n.value["m-icon-direction"]),
        fullHeight: u( () => !n.value.justify),
        preventSpacing: u( () => n.value["icon-spacing"] !== "center" || n.value["icon-direction"] === "column" ? !n.value.justify : !n.value.align)
    })
}
  , dy = re({
    components: {
        GridSocialIcons: _u
    },
    props: {
        data: {
            type: Object,
            required: !0
        }
    },
    setup(t, n) {
        return {
            composedProps: uy(t)
        }
    }
});
function my(t, n, a, e, r, o) {
    const i = mt("GridSocialIcons");
    return m(),
    z(i, pt(qt(t.composedProps)), null, 16)
}
const gy = oe(dy, [["render", my]])
  , py = E(null)
  , vy = t => {
    const n = u( () => t.data.settings?.priceId || "")
      , a = u( () => t.data.settings?.paymentType || "payment");
    return {
        stripeInstance: py,
        priceId: n,
        paymentType: a
    }
}
  , fy = "https://js.stripe.com/v3"
  , hy = re({
    name: "GridStripeButtonProviderUser",
    components: {
        GridButton: Hn
    },
    props: {
        data: {
            type: Object,
            required: !0
        },
        successPageSlug: {
            type: String,
            required: !0
        },
        cancellationPageSlug: {
            type: String,
            required: !0
        },
        stripePublicApiKey: {
            type: String,
            default: ""
        }
    },
    setup(t) {
        const {getButtonHref: n} = kt()
          , {content: a, type: e} = Xr(t, {
            href: u( () => n({
                isFormButton: t.data.settings.isFormButton,
                linkedPageId: t.data.linkedPageId,
                linkType: t.data.linkType,
                href: t.data.href
            }))
        })
          , {stripeInstance: r, priceId: o, paymentType: i} = vy(t)
          , s = E(!1)
          , l = () => new Promise( (p, g) => {
            if (!!(r.value && window.Stripe)) {
                p();
                return
            }
            const f = document.createElement("script");
            f.addEventListener("load", () => {
                window.Stripe && (r.value = window.Stripe(t.stripePublicApiKey),
                p())
            }
            ),
            f.addEventListener("error", () => {
                g()
            }
            ),
            f.src = fy,
            document.head.appendChild(f)
        }
        );
        return {
            content: a,
            type: e,
            isLoadingStripeScript: s,
            handleClick: async () => {
                o.value && (s.value = !0,
                await l(),
                s.value = !1,
                r.value.redirectToCheckout({
                    lineItems: [{
                        price: o.value,
                        quantity: 1
                    }],
                    mode: i.value,
                    successUrl: `${window.location.origin}/${t.successPageSlug}`,
                    cancelUrl: `${window.location.origin}/${t.cancellationPageSlug}`
                }).then(p => {
                    p.error && console.error(p.error.message)
                }
                ))
            }
        }
    }
});
function yy(t, n, a, e, r, o) {
    const i = mt("GridButton")
      , s = lt("qa");
    return se((m(),
    z(i, {
        "tag-name": "button",
        content: t.content,
        type: t.type,
        "is-disabled": t.isLoadingStripeScript,
        onClick: t.handleClick
    }, null, 8, ["content", "type", "is-disabled", "onClick"])), [[s, "button-stripe-checkout"]])
}
const by = oe(hy, [["render", yy]])
  , _y = {
    __name: "GridTextBox",
    props: {
        textAlign: {
            type: String,
            default: null
        },
        textAlignMobile: {
            type: String,
            default: null
        },
        backgroundColor: {
            type: String,
            default: null
        },
        content: {
            type: String,
            default: null
        }
    },
    setup(t, {expose: n}) {
        n(),
        ht(s => ({
            e4116cd0: r.value,
            "5142e07a": e.value,
            dc01974c: o.value
        }));
        const a = t
          , e = u( () => a.backgroundColor)
          , r = u( () => a.textAlign === "justify" ? "normal" : "break-spaces")
          , o = u( () => a.textAlignMobile && a.textAlignMobile === "justify" ? "normal" : r.value)
          , i = {
            props: a,
            backgroundColor: e,
            whiteSpace: r,
            whiteSpaceMobile: o,
            computed: u
        };
        return Object.defineProperty(i, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        i
    }
}
  , wy = ["innerHTML"]
  , ky = {
    key: 1,
    class: "text-box"
};
function Sy(t, n, a, e, r, o) {
    return a.content ? (m(),
    y("div", {
        key: 0,
        class: "text-box",
        innerHTML: a.content
    }, null, 8, wy)) : (m(),
    y("div", ky, [ne(t.$slots, "default")]))
}
const wu = oe(_y, [["render", Sy]])
  , Ty = {
    __name: "GridTextBoxProviderUser",
    props: {
        data: {
            type: Object,
            required: !0
        }
    },
    setup(t, {expose: n}) {
        n();
        const a = {
            GridTextBox: wu
        };
        return Object.defineProperty(a, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        a
    }
};
function Cy(t, n, a, e, r, o) {
    return m(),
    z(e.GridTextBox, {
        "text-align": a.data.settings.styles.text,
        "text-align-mobile": a.data.settings.styles["m-text"],
        "background-color": a.data.backgroundColor,
        content: a.data.content
    }, null, 8, ["text-align", "text-align-mobile", "background-color", "content"])
}
const Iy = oe(Ty, [["render", Cy]])
  , ta = {
    YOUTUBE: "youtube",
    VIMEO: "vimeo"
}
  , so = "0"
  , Ro = "1"
  , Py = so
  , Ey = so
  , Dy = Ro
  , My = so
  , Ay = so
  , Oy = Ro
  , xy = /t=\d+/g
  , $t = {
    AUTOPLAY: "autoplay",
    LOOP: "loop",
    CONTROLS: "controls",
    AUTOPAUSE: "autopause",
    PLAYLIST: "playlist",
    PLAYSINLINE: "playsinline",
    ALBUM: "h",
    MUTE: {
        [ta.YOUTUBE]: "mute",
        [ta.VIMEO]: "muted"
    },
    TIME: "t",
    START: "start"
}
  , By = {
    [ta.YOUTUBE]: "https://www.youtube.com/embed/",
    [ta.VIMEO]: "https://player.vimeo.com/video/"
}
  , Yi = {
    [ta.YOUTUBE]: /^.*(?:youtu\.be\/|vi?\/|u\/\w\/|embed\/|watch\/|shorts\/|\?vi?=|&vi?=)([^#&?]{11}).*/,
    [ta.VIMEO]: /https:\/\/(?:vimeo.com|player.vimeo.com)\/(?:video\/)?(\d*)(.*)/
}
  , Ly = "https://vimeo.com/api/oembed.json?url=https://vimeo.com"
  , Ry = re({
    __name: "GridVideo",
    props: {
        renderIframe: {
            type: Boolean
        },
        renderPicture: {
            type: Boolean,
            default: !0
        },
        src: {},
        provider: {
            default: ta.YOUTUBE
        },
        jpg: {
            default: ""
        },
        webp: {
            default: ""
        }
    },
    setup(t, {expose: n}) {
        n(),
        ht(i => ({
            "127083ae": r.value
        }));
        const a = t
          , e = E(!1)
          , r = u( () => e.value ? "transparent" : "var(--color-dark)")
          , o = {
            props: a,
            isIframeLoaded: e,
            backgroundColor: r
        };
        return Object.defineProperty(o, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        o
    }
})
  , Ny = {
    class: "video"
}
  , Hy = ["src"]
  , Vy = ["srcset"]
  , Uy = ["src"];
function Fy(t, n, a, e, r, o) {
    const i = lt("qa");
    return m(),
    y("div", Ny, [e.props.renderIframe ? se((m(),
    y("iframe", {
        key: 0,
        src: e.props.src,
        class: "video__frame",
        allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
        allowfullscreen: "",
        width: "100%",
        height: "100%",
        onLoad: n[0] || (n[0] = s => e.isIframeLoaded = !0)
    }, null, 40, Hy)), [[i, "builder-element-video-iframe"]]) : e.props.renderPicture && (e.props.jpg || e.props.webp) ? (m(),
    y(ge, {
        key: 1
    }, [se((m(),
    y("picture", null, [C("source", {
        type: "image/webp",
        srcset: e.props.webp
    }, null, 8, Vy), se(C("img", {
        referrerpolicy: "origin",
        class: "video__placeholder",
        height: "100%",
        width: "100%",
        src: e.props.jpg
    }, null, 8, Uy), [[i, "builder-gridelement-gridvideo"]])])), [[i, "builder-element-video-picture"]]), se(C("button", {
        type: "button",
        class: J(`video__play video__play--${e.props.provider}`)
    }, null, 2), [[i, "builder-element-video-button"]])], 64)) : x("", !0)])
}
const jy = oe(Ry, [["render", Fy], ["__scopeId", "data-v-1ed13e03"]])
  , Yl = {
    jpg: "https://i.ytimg.com/vi/hqdefault.jpg",
    webp: "https://i.ytimg.com/vi_webp/hqdefault.webp"
}
  , Gy = async t => {
    const n = await fetch(`${Ly}/${t}`);
    if (!n.ok)
        return Yl;
    const a = await n.json();
    if (!a.thumbnail_url)
        return Yl;
    const e = a.thumbnail_url.replace("_295x166", "_720");
    return {
        jpg: e.replace(".webp", ".jpg"),
        webp: e.replace(".jpg", ".webp")
    }
}
  , Yy = async (t, n) => {
    switch (t) {
    case ta.YOUTUBE:
        return {
            jpg: `https://i.ytimg.com/vi/${n}/hqdefault.jpg`,
            webp: `https://i.ytimg.com/vi_webp/${n}/hqdefault.webp`
        };
    case ta.VIMEO:
        return Gy(n);
    default:
        return {
            jpg: null,
            webp: null
        }
    }
}
  , ku = (t, n, a, e) => {
    const r = n === ta.VIMEO ? t.split("/")[1] : null
      , o = n === ta.VIMEO ? t.split("/")[0] : t
      , i = e.match(xy)
      , s = n === ta.YOUTUBE && i ? {
        [$t.START]: i[0].slice(2) ?? 0
    } : {}
      , l = $t.MUTE[n]
      , d = new URLSearchParams({
        [$t.ALBUM]: r,
        [$t.PLAYLIST]: o,
        [$t.AUTOPLAY]: a?.[$t.AUTOPLAY] ?? Py,
        [$t.CONTROLS]: a?.[$t.CONTROLS] ?? Dy,
        [$t.LOOP]: a?.[$t.LOOP] ?? Ey,
        [$t.AUTOPAUSE]: My,
        [$t.PLAYSINLINE]: Oy,
        [l]: Ay,
        ...s
    }).toString();
    return `${By[n]}${o}?${d}`
}
  , Wy = async (t, n) => {
    const a = Object.entries(Yi).find( ([,p]) => t?.match(p))
      , e = a && a.length === 2;
    if (!e)
        return {
            url: t,
            isUrlValid: !1
        };
    const [r,o] = a
      , i = t.match(o)
      , s = [i[1], i[2]].join("")
      , {jpg: l, webp: d} = await Yy(r, s);
    return {
        src: ku(s, r, n, t),
        isUrlValid: e,
        jpg: l,
        webp: d,
        provider: r,
        id: s
    }
}
  , $y = t => {
    const n = Za({
        src: null,
        provider: null,
        width: null,
        height: null,
        webp: null,
        jpg: null
    })
      , a = Za({
        src: u( () => n.src ?? t.data.settings.src),
        provider: u( () => n.provider ?? t.data.settings.provider),
        width: u( () => n.width ?? t.data.settings.width),
        height: u( () => n.height ?? t.data.settings.height),
        webp: u( () => n.webp ?? t.data.settings.webp),
        jpg: u( () => n.jpg ?? t.data.settings.jpg)
    });
    os( () => {
        (t.data.settings.src !== a.src || !t.data.settings.jpg) && Wy(t.data.settings.src).then(d => {
            Object.entries(d).forEach( ([p,g]) => {
                n[p] = g
            }
            )
        }
        )
    }
    );
    const e = E(null)
      , r = u( () => t.data.settings.src?.includes(`${[$t.AUTOPLAY]}=${Ro}`) ?? !1)
      , o = u( () => {
        const d = $t.MUTE[a.provider];
        return r.value ? a.src.replace(`${[d]}=${so}`, `${[d]}=${Ro}`) : a.src
    }
    )
      , i = E(!1)
      , s = E(!1);
    return {
        composedProps: a,
        composedSource: o,
        init: () => {
            const d = new IntersectionObserver( ([{isIntersecting: p}]) => {
                p && (r.value ? i.value = !0 : s.value = !0,
                d.disconnect())
            }
            ,{
                threshold: 0
            });
            d.observe(e.value.$el),
            i.value = !0
        }
        ,
        renderIframe: i,
        renderPicture: s,
        videoRef: e
    }
}
  , qy = re({
    name: "GridVideoProviderUser",
    components: {
        GridVideo: jy
    },
    props: {
        data: {
            type: Object,
            required: !0
        }
    },
    setup(t) {
        const {composedProps: n, composedSource: a, init: e, videoRef: r, renderIframe: o, renderPicture: i} = $y(t);
        return Pe( () => {
            e()
        }
        ),
        {
            videoRef: r,
            composedProps: n,
            composedSource: a,
            renderIframe: o,
            renderPicture: i
        }
    }
});
function zy(t, n, a, e, r, o) {
    const i = mt("GridVideo");
    return m(),
    z(i, Je({
        ref: "videoRef"
    }, t.composedProps, {
        src: t.composedSource,
        "render-iframe": t.renderIframe,
        "render-picture": t.renderPicture,
        onClickOnce: n[0] || (n[0] = s => t.renderIframe = !0)
    }), null, 16, ["src", "render-iframe", "render-picture"])
}
const Zy = oe(qy, [["render", zy]])
  , Ky = re({
    __name: "GridShape",
    props: {
        svg: {}
    },
    setup(t, {expose: n}) {
        n();
        const a = {};
        return Object.defineProperty(a, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        a
    }
})
  , Qy = ["innerHTML"];
function Xy(t, n, a, e, r, o) {
    return m(),
    y("div", {
        class: "grid-shape",
        innerHTML: a.svg
    }, null, 8, Qy)
}
const Jy = oe(Ky, [["render", Xy]])
  , eb = re({
    name: "GridShapeProviderUser",
    components: {
        GridShape: Jy
    },
    props: {
        data: {
            type: Object,
            required: !0
        },
        isInPreviewMode: {
            type: Boolean,
            default: !1
        }
    },
    computed: {
        cssVars() {
            const t = this.data.mobile.height * 100 / Ua
              , n = this.data.desktop.height * 100 / Va;
            return {
                "--shape-height": `${this.data.desktop.height}px`,
                "--m-shape-height": this.isInPreviewMode ? `${this.data.mobile.height}px` : `${t}vw`,
                "--t-shape-height": `${this.data.mobile.height}px`,
                "--small-desktop-shape-height": `${n}vw`,
                "--shape-color": `${this.data.color}`
            }
        }
    }
});
function tb(t, n, a, e, r, o) {
    const i = mt("GridShape");
    return m(),
    z(i, {
        svg: t.data.svg,
        style: ze(t.cssVars)
    }, null, 8, ["svg", "style"])
}
const ab = oe(eb, [["render", tb]])
  , nb = re({
    __name: "ProductMediaElement",
    props: {
        mediaType: {
            default: Er.IMAGE
        },
        alt: {},
        src: {},
        isEager: {
            type: Boolean,
            default: !1
        },
        objectFit: {
            default: "cover"
        },
        imageRatio: {},
        width: {
            default: 0
        },
        height: {
            default: 0
        },
        enableSrcset: {
            type: Boolean,
            default: !1
        },
        imageOrigin: {
            default: "other"
        },
        isLossless: {
            type: Boolean,
            default: !1
        },
        siteId: {
            default: ""
        },
        secondaryImageSrc: {},
        isVideoAutoplayDisabled: {
            type: Boolean
        },
        isVideoDisabled: {
            type: Boolean
        }
    },
    setup(t, {expose: n}) {
        n();
        const a = t
          , e = E(a.src)
          , r = E()
          , o = E(!1)
          , i = u( () => a.enableSrcset ? xo(a.width) : void 0)
          , s = f => {
            const b = f.match(Yi[ta.YOUTUBE])?.[1];
            return ku(b, ta.YOUTUBE, {
                [$t.AUTOPLAY]: 1,
                [$t.CONTROLS]: 1
            }, f)
        }
          , l = f => a.mediaType === Er.VIDEO ? `https://i.ytimg.com/vi_webp/${f.match(Yi[ta.YOUTUBE])?.[1]}/hqdefault.webp` : f
          , d = f => {
            const b = l(f);
            return Et(a.imageOrigin, b, a.siteId, {
                width: a.width,
                height: a.height,
                shouldContain: a.objectFit === "contain",
                isLossless: a.isLossless
            })
        }
          , p = f => {
            if (!a.enableSrcset)
                return;
            const b = l(f);
            return In(a.imageOrigin, b, a.siteId, {
                width: a.width,
                height: a.height,
                shouldContain: a.objectFit === "contain",
                isLossless: a.isLossless
            })
        }
          , g = () => {
            if (!a.secondaryImageSrc)
                return;
            const f = new Image
              , b = p(a.secondaryImageSrc);
            f.src = d(a.secondaryImageSrc),
            b && (f.srcset = b)
        }
        ;
        Fe( () => a.imageRatio, (f, b) => {
            f !== b && (e.value = d(a.src),
            r.value = p(a.src))
        }
        ),
        Fe( () => a.src, () => {
            e.value = d(a.src),
            r.value = p(a.src)
        }
        ),
        Fe( () => a.secondaryImageSrc, () => {
            g()
        }
        ),
        Pe( () => {
            e.value = d(a.src),
            r.value = p(a.src),
            g()
        }
        );
        const v = {
            props: a,
            imageUrl: e,
            srcset: r,
            isLoaded: o,
            sizes: i,
            getVideoUrl: s,
            getMediaImageUrl: l,
            getOptimizedImageUrl: d,
            getSrcSet: p,
            preloadSecondaryImage: g,
            get EcommerceProductMediaType() {
                return Er
            }
        };
        return Object.defineProperty(v, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        v
    }
})
  , rb = ["src"]
  , ob = ["loading", "src", "alt", "srcset", "sizes"];
function ib(t, n, a, e, r, o) {
    return m(),
    z(ra, {
        appear: "",
        name: "fade",
        mode: "out-in"
    }, {
        default: ye( () => [!a.isVideoDisabled && a.mediaType === e.EcommerceProductMediaType.VIDEO && !a.isVideoAutoplayDisabled ? (m(),
        y("iframe", {
            key: 0,
            src: e.getVideoUrl(a.src),
            allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
            allowfullscreen: "",
            width: 140,
            height: 140
        }, null, 8, rb)) : (m(),
        y("img", Je({
            key: 1
        }, t.$attrs, {
            loading: a.isEager ? "eager" : "lazy",
            src: e.imageUrl,
            alt: a.alt,
            srcset: e.srcset,
            sizes: e.sizes,
            class: ["ecommerce-product-image", {
                "ecommerce-product-image--loading": !e.isLoaded
            }],
            onLoad: n[0] || (n[0] = i => e.isLoaded = !0),
            onError: n[1] || (n[1] = i => e.isLoaded = !0)
        }), null, 16, ob))]),
        _: 1
    })
}
const Wo = oe(nb, [["render", ib]]);
function $o(t) {
    return Lc() ? (Rc(t),
    !0) : !1
}
function tr(t) {
    return typeof t == "function" ? t() : N(t)
}
const _s = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const sb = t => t != null
  , lb = Object.prototype.toString
  , cb = t => lb.call(t) === "[object Object]"
  , Mr = () => {}
  , Wi = ub();
function ub() {
    var t, n;
    return _s && ((t = window?.navigator) == null ? void 0 : t.userAgent) && (/iP(ad|hone|od)/.test(window.navigator.userAgent) || ((n = window?.navigator) == null ? void 0 : n.maxTouchPoints) > 2 && /iPad|Macintosh/.test(window?.navigator.userAgent))
}
function db(t) {
    return Bc()
}
function mb(...t) {
    if (t.length !== 1)
        return An(...t);
    const n = t[0];
    return typeof n == "function" ? xd(Bd( () => ({
        get: n,
        set: Mr
    }))) : E(n)
}
function Su(t, n=!0, a) {
    db() ? Pe(t, a) : n ? t() : Nt(t)
}
function na(t) {
    var n;
    const a = tr(t);
    return (n = a?.$el) != null ? n : a
}
const lo = _s ? window : void 0
  , gb = _s ? window.document : void 0;
function En(...t) {
    let n, a, e, r;
    if (typeof t[0] == "string" || Array.isArray(t[0]) ? ([a,e,r] = t,
    n = lo) : [n,a,e,r] = t,
    !n)
        return Mr;
    Array.isArray(a) || (a = [a]),
    Array.isArray(e) || (e = [e]);
    const o = []
      , i = () => {
        o.forEach(p => p()),
        o.length = 0
    }
      , s = (p, g, v, f) => (p.addEventListener(g, v, f),
    () => p.removeEventListener(g, v, f))
      , l = Fe( () => [na(n), tr(r)], ([p,g]) => {
        if (i(),
        !p)
            return;
        const v = cb(g) ? {
            ...g
        } : g;
        o.push(...a.flatMap(f => e.map(b => s(p, f, b, v))))
    }
    , {
        immediate: !0,
        flush: "post"
    })
      , d = () => {
        l(),
        i()
    }
    ;
    return $o(d),
    d
}
let Wl = !1;
function qo(t, n, a={}) {
    const {window: e=lo, ignore: r=[], capture: o=!0, detectIframe: i=!1} = a;
    if (!e)
        return Mr;
    Wi && !Wl && (Wl = !0,
    Array.from(e.document.body.children).forEach(v => v.addEventListener("click", Mr)),
    e.document.documentElement.addEventListener("click", Mr));
    let s = !0;
    const l = v => r.some(f => {
        if (typeof f == "string")
            return Array.from(e.document.querySelectorAll(f)).some(b => b === v.target || v.composedPath().includes(b));
        {
            const b = na(f);
            return b && (v.target === b || v.composedPath().includes(b))
        }
    }
    )
      , p = [En(e, "click", v => {
        const f = na(t);
        if (!(!f || f === v.target || v.composedPath().includes(f))) {
            if (v.detail === 0 && (s = !l(v)),
            !s) {
                s = !0;
                return
            }
            n(v)
        }
    }
    , {
        passive: !0,
        capture: o
    }), En(e, "pointerdown", v => {
        const f = na(t);
        s = !l(v) && !!(f && !v.composedPath().includes(f))
    }
    , {
        passive: !0
    }), i && En(e, "blur", v => {
        setTimeout( () => {
            var f;
            const b = na(t);
            ((f = e.document.activeElement) == null ? void 0 : f.tagName) === "IFRAME" && !b?.contains(e.document.activeElement) && n(v)
        }
        , 0)
    }
    )].filter(Boolean);
    return () => p.forEach(v => v())
}
function pb() {
    const t = E(!1)
      , n = Bc();
    return n && Pe( () => {
        t.value = !0
    }
    , n),
    t
}
function Tu(t) {
    const n = pb();
    return u( () => (n.value,
    !!t()))
}
function vb(t, n, a={}) {
    const {window: e=lo, ...r} = a;
    let o;
    const i = Tu( () => e && "MutationObserver"in e)
      , s = () => {
        o && (o.disconnect(),
        o = void 0)
    }
      , l = u( () => {
        const v = tr(t)
          , f = (Array.isArray(v) ? v : [v]).map(na).filter(sb);
        return new Set(f)
    }
    )
      , d = Fe( () => l.value, v => {
        s(),
        i.value && e && v.size && (o = new MutationObserver(n),
        v.forEach(f => o.observe(f, r)))
    }
    , {
        immediate: !0,
        flush: "post"
    })
      , p = () => o?.takeRecords()
      , g = () => {
        s(),
        d()
    }
    ;
    return $o(g),
    {
        isSupported: i,
        stop: g,
        takeRecords: p
    }
}
function fb(t={}) {
    const {document: n=gb} = t;
    if (!n)
        return E("visible");
    const a = E(n.visibilityState);
    return En(n, "visibilitychange", () => {
        a.value = n.visibilityState
    }
    ),
    a
}
function Cu(t, n, a={}) {
    const {window: e=lo, ...r} = a;
    let o;
    const i = Tu( () => e && "ResizeObserver"in e)
      , s = () => {
        o && (o.disconnect(),
        o = void 0)
    }
      , l = u( () => Array.isArray(t) ? t.map(g => na(g)) : [na(t)])
      , d = Fe(l, g => {
        if (s(),
        i.value && e) {
            o = new ResizeObserver(n);
            for (const v of g)
                v && o.observe(v, r)
        }
    }
    , {
        immediate: !0,
        flush: "post"
    })
      , p = () => {
        s(),
        d()
    }
    ;
    return $o(p),
    {
        isSupported: i,
        stop: p
    }
}
function hb(t, n={}) {
    const {reset: a=!0, windowResize: e=!0, windowScroll: r=!0, immediate: o=!0} = n
      , i = E(0)
      , s = E(0)
      , l = E(0)
      , d = E(0)
      , p = E(0)
      , g = E(0)
      , v = E(0)
      , f = E(0);
    function b() {
        const D = na(t);
        if (!D) {
            a && (i.value = 0,
            s.value = 0,
            l.value = 0,
            d.value = 0,
            p.value = 0,
            g.value = 0,
            v.value = 0,
            f.value = 0);
            return
        }
        const T = D.getBoundingClientRect();
        i.value = T.height,
        s.value = T.bottom,
        l.value = T.left,
        d.value = T.right,
        p.value = T.top,
        g.value = T.width,
        v.value = T.x,
        f.value = T.y
    }
    return Cu(t, b),
    Fe( () => na(t), D => !D && b()),
    vb(t, b, {
        attributeFilter: ["style", "class"]
    }),
    r && En("scroll", b, {
        capture: !0,
        passive: !0
    }),
    e && En("resize", b, {
        passive: !0
    }),
    Su( () => {
        o && b()
    }
    ),
    {
        height: i,
        bottom: s,
        left: l,
        right: d,
        top: p,
        width: g,
        x: v,
        y: f,
        update: b
    }
}
function yb(t, n={
    width: 0,
    height: 0
}, a={}) {
    const {window: e=lo, box: r="content-box"} = a
      , o = u( () => {
        var g, v;
        return (v = (g = na(t)) == null ? void 0 : g.namespaceURI) == null ? void 0 : v.includes("svg")
    }
    )
      , i = E(n.width)
      , s = E(n.height)
      , {stop: l} = Cu(t, ([g]) => {
        const v = r === "border-box" ? g.borderBoxSize : r === "content-box" ? g.contentBoxSize : g.devicePixelContentBoxSize;
        if (e && o.value) {
            const f = na(t);
            if (f) {
                const b = e.getComputedStyle(f);
                i.value = Number.parseFloat(b.width),
                s.value = Number.parseFloat(b.height)
            }
        } else if (v) {
            const f = Array.isArray(v) ? v : [v];
            i.value = f.reduce( (b, {inlineSize: D}) => b + D, 0),
            s.value = f.reduce( (b, {blockSize: D}) => b + D, 0)
        } else
            i.value = g.contentRect.width,
            s.value = g.contentRect.height
    }
    , a);
    Su( () => {
        const g = na(t);
        g && (i.value = "offsetWidth"in g ? g.offsetWidth : n.width,
        s.value = "offsetHeight"in g ? g.offsetHeight : n.height)
    }
    );
    const d = Fe( () => na(t), g => {
        i.value = g ? n.width : 0,
        s.value = g ? n.height : 0
    }
    );
    function p() {
        l(),
        d()
    }
    return {
        width: i,
        height: s,
        stop: p
    }
}
function ci(t) {
    return typeof Window < "u" && t instanceof Window ? t.document.documentElement : typeof Document < "u" && t instanceof Document ? t.documentElement : t
}
function Iu(t) {
    const n = window.getComputedStyle(t);
    if (n.overflowX === "scroll" || n.overflowY === "scroll" || n.overflowX === "auto" && t.clientWidth < t.scrollWidth || n.overflowY === "auto" && t.clientHeight < t.scrollHeight)
        return !0;
    {
        const a = t.parentNode;
        return !a || a.tagName === "BODY" ? !1 : Iu(a)
    }
}
function bb(t) {
    const n = t || window.event
      , a = n.target;
    return Iu(a) ? !1 : n.touches.length > 1 ? !0 : (n.preventDefault && n.preventDefault(),
    !1)
}
const ho = new WeakMap;
function Pu(t, n=!1) {
    const a = E(n);
    let e = null;
    Fe(mb(t), i => {
        const s = ci(tr(i));
        if (s) {
            const l = s;
            ho.get(l) || ho.set(l, l.style.overflow),
            a.value && (l.style.overflow = "hidden")
        }
    }
    , {
        immediate: !0
    });
    const r = () => {
        const i = ci(tr(t));
        !i || a.value || (Wi && (e = En(i, "touchmove", s => {
            bb(s)
        }
        , {
            passive: !1
        })),
        i.style.overflow = "hidden",
        a.value = !0)
    }
      , o = () => {
        var i;
        const s = ci(tr(t));
        !s || !a.value || (Wi && e?.(),
        s.style.overflow = (i = ho.get(s)) != null ? i : "",
        ho.delete(s),
        a.value = !1)
    }
    ;
    return $o(o),
    u({
        get() {
            return a.value
        },
        set(i) {
            i ? r() : o()
        }
    })
}
const $l = 45
  , _b = re({
    __name: "SiteElementSearchBar",
    props: {
        placeholderText: {},
        noResultsText: {},
        fillColor: {},
        fillColorHover: {},
        textAndIconColor: {},
        textAndIconColorHover: {},
        resultItemHoverColor: {},
        fontFamily: {},
        borderColor: {},
        borderColorHover: {},
        borderRadius: {},
        translations: {},
        siteId: {},
        searchTerm: {
            default: ""
        },
        results: {
            default: null
        },
        isLoading: {
            type: Boolean,
            default: !1
        }
    },
    emits: ["update:search-term", "is-dropdown-open"],
    setup(t, {expose: n, emit: a}) {
        n(),
        ht(S => ({
            "267fbace": S.fontFamily,
            f40754b4: S.textAndIconColor,
            "02e01b36": S.textAndIconColorHover,
            "53b91c91": v.value,
            a5727d5e: S.borderColor,
            "20c4e4da": S.fillColor,
            d7a57b2a: S.borderColorHover,
            "42d4ec82": S.fillColorHover,
            "4bcb8afd": S.resultItemHoverColor,
            "47e68280": e
        }));
        const e = `${$l}px`
          , r = a
          , o = t
          , i = E(null)
          , s = E(!1)
          , l = E([])
          , d = E(-1)
          , p = u( () => o.isLoading)
          , g = u( () => o.results)
          , v = u( () => `${o.borderRadius}px`)
          , f = () => {
            o.results && d.value < o.results.length - 1 && (d.value += 1)
        }
          , b = () => {
            d.value > 0 && (d.value -= 1)
        }
          , D = () => {
            const S = l.value[d.value];
            if (!S)
                return;
            const B = new MouseEvent("click",{
                bubbles: !0,
                cancelable: !0,
                view: window
            });
            S.dispatchEvent(B)
        }
          , T = () => {
            s.value = !1,
            r("update:search-term", ""),
            d.value = -1
        }
        ;
        Fe([g, p], () => {
            s.value = !!g.value || p.value,
            r("is-dropdown-open", s.value)
        }
        ),
        Pe( () => {
            qo(i, () => {
                T()
            }
            )
        }
        );
        const w = {
            IMAGE_DIMENSIONS_PX: $l,
            IMAGE_DIMENSIONS_PX_STRING: e,
            emit: r,
            props: o,
            searchBarRef: i,
            isSearchResultDropdownVisible: s,
            itemLinksRefs: l,
            highlightedItemIndex: d,
            isLoading: p,
            results: g,
            borderRadiusInPx: v,
            highlightNextItem: f,
            highlightPreviousItem: b,
            redirectToHighlightedItem: D,
            dropdownCloseHandler: T,
            ZyroLoader: bs,
            ProductMediaElement: Wo
        };
        return Object.defineProperty(w, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        w
    }
})
  , wb = {
    ref: "searchBarRef",
    class: "site-element-search-bar",
    "aria-owns": "search-results",
    tabindex: "0",
    "aria-haspopup": "listbox"
}
  , kb = {
    class: "site-element-search-bar__input-wrapper"
}
  , Sb = ["placeholder", "value", "onKeydown"]
  , Tb = {
    key: 0,
    id: "search-results",
    role: "listbox",
    class: "site-element-search-bar__dropdown"
}
  , Cb = {
    key: 1,
    class: "site-element-search-bar__dropdown-no-results"
}
  , Ib = ["area-selected"]
  , Pb = ["href", "onMouseover", "onFocus", "onKeydown"]
  , Eb = {
    class: "search-result-item__content"
}
  , Db = {
    class: "search-result-item__title"
}
  , Mb = {
    class: "search-result-item__price"
}
  , Ab = {
    key: 0
}
  , Ob = {
    key: 0
}
  , xb = {
    key: 0,
    class: "search-result-item__sale-price"
}
  , Bb = {
    key: 1
};
function Lb(t, n, a, e, r, o) {
    return m(),
    y("div", wb, [C("div", kb, [C("input", {
        class: "site-element-search-bar__input",
        placeholder: e.props.placeholderText,
        value: e.props.searchTerm,
        onInput: n[0] || (n[0] = i => e.emit("update:search-term", i.target.value)),
        onKeydown: [He(xe(e.highlightNextItem, ["prevent"]), ["down"]), He(xe(e.highlightPreviousItem, ["prevent"]), ["up"]), He(e.redirectToHighlightedItem, ["enter"])]
    }, null, 40, Sb), e.isSearchResultDropdownVisible ? (m(),
    y("div", {
        key: 0,
        class: "site-element-search-bar__dropdown-close",
        onClick: e.dropdownCloseHandler
    })) : x("", !0)]), e.isSearchResultDropdownVisible ? (m(),
    y("ul", Tb, [e.props.isLoading ? (m(),
    z(e.ZyroLoader, {
        key: 0,
        size: "30px",
        color: e.props.textAndIconColorHover,
        class: "site-element-search-bar__loader"
    }, null, 8, ["color"])) : !e.props.results || e.props.results.length === 0 ? (m(),
    y("p", Cb, ae(a.noResultsText), 1)) : (m(!0),
    y(ge, {
        key: 2
    }, Ce(e.props.results, (i, s) => (m(),
    y("li", {
        key: i.id,
        role: "option",
        "area-selected": s === e.highlightedItemIndex
    }, [C("a", {
        ref_for: !0,
        ref: "itemLinksRefs",
        href: i.href,
        class: J(["search-result-item", {
            "search-result-item--highlighted": s === e.highlightedItemIndex
        }]),
        onMouseover: l => e.highlightedItemIndex = s,
        onFocus: l => e.highlightedItemIndex = s,
        onKeydown: He(xe(e.redirectToHighlightedItem, ["prevent"]), ["enter"])
    }, [i.thumbnail ? (m(),
    z(e.ProductMediaElement, {
        key: 0,
        src: i.thumbnail,
        alt: i.title,
        class: "search-result-item__image",
        width: e.IMAGE_DIMENSIONS_PX,
        height: e.IMAGE_DIMENSIONS_PX,
        "site-id": e.props.siteId,
        "enable-srcset": ""
    }, null, 8, ["src", "alt", "site-id"])) : x("", !0), C("div", Eb, [C("h3", Db, ae(i.title), 1), C("p", Mb, [i.isInStock ? (m(),
    y("span", Ab, [i.price?.length ? (m(),
    y("span", Ob, [i.oldPrice ? (m(),
    y("span", xb, ae(i.oldPrice), 1)) : x("", !0), qe(" " + ae(i.price), 1)])) : x("", !0)])) : (m(),
    y("span", Bb, ae(a.translations.soldOut), 1))])])], 42, Pb)], 8, Ib))), 128))])) : x("", !0)], 512)
}
const Rb = oe(_b, [["render", Lb]])
  , Nb = (t, n) => {
    let a;
    return function() {
        const r = () => Reflect.apply(t, this, arguments);
        clearTimeout(a),
        a = setTimeout(r, n)
    }
}
  , Hb = {
    6: 18,
    5: 15,
    4: 12,
    3: 9,
    2: 6,
    1: 3
}
  , Vb = t => t?.variants[0].booking_event?.length_unit === Ni;
function $i(t) {
    return t?.variants[0].booking_event?.length || 0
}
const ws = (t, n) => {
    const a = e => Math.round(e * 100) / 100;
    return Vb(t) ? `${a($i(t) / 1e3 / 60 / 60)} ${n.hourShort}` : `${a($i(t) / 1e3 / 60)} ${n.minuteShort}`
}
  , Ar = t => t[uu] !== ds ? !1 : !t.variants.every( (n, a, e) => {
    const r = e[0]?.prices?.[0] ?? e[0]
      , o = n?.prices?.[0] ?? n
      , i = r.sale_amount ?? r.amount
      , s = o.sale_amount ?? o.amount;
    return i === s
}
)
  , Ir = ({variantsQuantity: t, variantId: n}) => t.find(a => a.id === n)?.inventory_quantity || 0
  , Eu = ({product: t, variantsQuantity: n}) => t.variants.reduce( (a, e) => a + Ir({
    variantsQuantity: n,
    variantId: e.id
}), 0)
  , Ub = ({product: t, variantsQuantity: n}) => t.variants[0].manage_inventory ? Eu({
    product: t,
    variantsQuantity: n
}) > 0 : !0
  , Fb = ({variants: t}) => t.reduce( (n, a) => (n.sale_amount || n.amount) <= (a.sale_amount || a.amount) ? n : a);
function yn({amount: t, currency: n, isPriceDisplayedWithCurrency: a=!0}) {
    if (!n)
        return a ? "€0.00" : "0.00";
    const e = Number(t) || 0
      , o = Number(e / 10 ** n.decimal_digits).toFixed(n.decimal_digits);
    return a ? n.template.replace("$1", o) : o
}
const jb = "https://builder-backend.hostinger.com/public"
  , Gb = async ({query: t, indices: n, pageSize: a=5, storeId: e}) => {
    if (!t)
        return [];
    const r = await fetch(`${jb}/search`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            query: t,
            indices: n,
            storeId: e,
            pageSize: a
        })
    })
      , {results: o} = await r.json();
    return o.products.hits
}
  , ql = 400
  , Yb = re({
    __name: "SiteElementSearchBarProviderSiteEngine",
    props: {
        data: {
            type: Object,
            required: !0
        },
        blockId: {
            type: String,
            required: !0
        }
    },
    setup(t, {expose: n}) {
        n();
        const a = t
          , {meta: e, siteId: r, ecommerceShoppingCart: o} = kt()
          , i = u( () => o.value?.translations || {})
          , {toggleSearchDropdown: s} = Ui({
            blockId: a.blockId
        })
          , l = E("")
          , d = E(!1)
          , p = E(null)
          , g = u( () => e.value.ecommerceStoreId)
          , v = u( () => p.value ? p.value.map(T => {
            const w = T.site_product_selection === ds ? Fb({
                variants: T.variants
            }) : T.variants[0]
              , {amount: S, sale_amount: B, currency_decimal_digits: I, currency_template: R, manage_inventory: $} = w
              , G = {
                decimal_digits: I,
                template: R
            }
              , ee = `/product-redirect/${T.id}`
              , K = S && Ar(T) ? `${i.value.from} ` : ""
              , M = S ? `${K}${yn({
                amount: B || S,
                currency: G
            })}` : ""
              , j = B ? yn({
                amount: S,
                currency: G
            }) : null
              , q = !$ || !!S && Ub({
                product: T,
                variantsQuantity: T.variants
            });
            return {
                id: T.id,
                thumbnail: T.thumbnail,
                title: T.title,
                href: ee,
                price: M,
                oldPrice: j,
                isInStock: q
            }
        }
        ) : null)
          , f = Nb(async () => {
            d.value = !0,
            l.value && g.value ? p.value = await Gb({
                query: l.value,
                indices: [qd],
                storeId: g.value
            }) : p.value = null,
            d.value = !1
        }
        , ql)
          , D = {
            TIMEOUT_MS_SEARCH_DEBOUNCE: ql,
            props: a,
            meta: e,
            siteId: r,
            ecommerceShoppingCart: o,
            ecommerceTranslations: i,
            toggleSearchDropdown: s,
            searchTerm: l,
            isLoading: d,
            results: p,
            storeId: g,
            computedResults: v,
            searchHandler: f,
            updateSearchTerm: ({newValue: T}) => {
                l.value = T,
                f()
            }
            ,
            SiteElementSearchBar: Rb
        };
        return Object.defineProperty(D, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        D
    }
});
function Wb(t, n, a, e, r, o) {
    return m(),
    z(e.SiteElementSearchBar, {
        "placeholder-text": e.props.data.placeholderText,
        "no-results-text": e.props.data.noResultsText,
        "fill-color": e.props.data.fillColor,
        "fill-color-hover": e.props.data.fillColorHover,
        "text-and-icon-color": e.props.data.textAndIconColor,
        "text-and-icon-color-hover": e.props.data.textAndIconColorHover,
        "font-family": e.props.data.fontFamily,
        "border-color": e.props.data.borderColor,
        "border-color-hover": e.props.data.borderColorHover,
        "border-radius": e.props.data.borderRadius,
        "is-loading": e.isLoading,
        "result-item-hover-color": e.props.data.resultItemHoverColor,
        results: e.computedResults,
        "search-term": e.searchTerm,
        "site-id": e.siteId,
        translations: e.ecommerceTranslations,
        "onUpdate:searchTerm": n[0] || (n[0] = i => e.updateSearchTerm({
            newValue: i
        })),
        onIsDropdownOpen: e.toggleSearchDropdown
    }, null, 8, ["placeholder-text", "no-results-text", "fill-color", "fill-color-hover", "text-and-icon-color", "text-and-icon-color-hover", "font-family", "border-color", "border-color-hover", "border-radius", "is-loading", "result-item-hover-color", "results", "search-term", "site-id", "translations", "onIsDropdownOpen"])
}
const $b = oe(Yb, [["render", Wb]])
  , hr = E(!1)
  , yr = E(!1)
  , ui = E("")
  , di = E("")
  , Fn = E(null)
  , mi = E(!1)
  , jn = E(null)
  , sr = ({elementData: t, data: n, elementId: a, blockId: e}={}) => {
    const r = E(null)
      , o = E(null)
      , i = E(null)
      , s = t || n || {}
      , l = w => `transition transition--${w}`
      , d = u( () => {
        const w = a && zd.includes(s.type)
          , S = !a && !Zd.includes(s.type);
        if (w || S)
            return "";
        const B = l(s.animation?.name);
        return Xs.includes(s.type) ? `${B} transition--root-hidden` : B
    }
    )
      , p = u( () => {
        const w = Fn.value && a === Fn.value
          , S = jn.value && e === jn.value;
        return !hr.value || Fn.value && !w || jn.value && !S ? "" : ui.value
    }
    )
      , g = u( () => yr.value ? Lr : null)
      , v = async w => {
        w.forEach( ({target: S, isIntersecting: B}) => {
            if (!B) {
                S.removeAttribute(Rr);
                return
            }
            i.value?.unobserve(S),
            S.setAttribute(Rr, Lr)
        }
        )
    }
      , f = ({root: w=null}={}) => {
        s.animation?.name && (i.value = new IntersectionObserver(v,{
            threshold: 0,
            root: w
        }))
    }
      , b = async w => {
        if (s.animation?.name)
            if (await Nt(),
            Xs.includes(s.type)) {
                const S = w?.querySelectorAll(`[${Ka}="${ss}"]`)
                  , B = w?.querySelectorAll(`[${Ka}="${gr}"]`);
                [...S, ...B].forEach(R => i.value?.observe(R))
            } else
                i.value?.observe(w)
    }
      , D = () => {
        r.value && o.value && (window.clearTimeout(r.value),
        window.clearTimeout(o.value)),
        hr.value = !1,
        yr.value = !1
    }
      , T = ({animation: w, id: S=null, block: B=null}) => {
        D(),
        w !== "none" && (jn.value = B,
        Fn.value = S,
        di.value = w,
        hr.value = !0,
        ui.value = l(di.value),
        r.value = setTimeout( () => {
            yr.value = !0
        }
        , 500),
        o.value = setTimeout( () => {
            hr.value = !1,
            yr.value = !1,
            Fn.value = null,
            jn.value = null
        }
        , 2e3))
    }
    ;
    return Fe(mi, async w => {
        w && (await Nt(),
        mi.value = !1)
    }
    ),
    {
        intersectionObserver: i,
        animationClass: d,
        animationInEditorClass: ui,
        animationInEditorComponentId: Fn,
        animationInEditorBlockId: jn,
        isAnimationDisplayedInEditor: hr,
        isAnimationDisplayedInEditorActive: yr,
        animationInEditorName: di,
        addIntersectionObserver: f,
        observe: b,
        displayAnimationInEditor: T,
        shouldMountAnimationsInPreview: mi,
        customAnimationClass: p,
        animationAttributeStateValue: g,
        addTransition: v
    }
}
  , qb = {
    __name: "LayoutElementProviderUser",
    props: {
        elementId: {
            type: String,
            required: !0
        },
        blockId: {
            type: String,
            required: !0
        },
        elementData: {
            type: Object,
            required: !0
        },
        overrideWidth: {
            type: Number,
            default: null
        },
        overrideHeight: {
            type: Number,
            default: null
        },
        isMobileLegacy: {
            type: Boolean,
            default: !1
        },
        lcp: {
            type: Object,
            default: () => ({})
        },
        siteLanguagePages: {
            type: Object,
            required: !0
        },
        stripePublicApiKey: {
            type: String,
            default: ""
        },
        currentLocale: {
            type: String,
            required: !0
        },
        isCartVisible: {
            type: Boolean,
            default: !1
        },
        isInPreviewMode: {
            type: Boolean,
            default: !1
        }
    },
    setup(t, {expose: n}) {
        n(),
        ht(S => ({
            "5b7a317c": f.value,
            "1b164342": b.value
        }));
        const a = t
          , e = E(null)
          , {intersectionObserver: r, animationClass: o, addIntersectionObserver: i, observe: s} = sr({
            elementData: a.elementData,
            elementId: a.elementId
        })
          , l = u( () => Object.values(a.siteLanguagePages)[0])
          , d = u( () => a.elementData.mobile?.isHidden || !1)
          , p = u( () => a.elementData.desktop?.isHidden || !1)
          , g = u( () => a.elementData.type !== ai ? "" : (a.siteLanguagePages[a.elementData.settings?.successPageId] || l.value).slug)
          , v = u( () => a.elementData.type !== ai ? "" : (a.siteLanguagePages[a.elementData.settings?.cancellationPageId] || l.value).slug)
          , f = u( () => `${a.elementData.desktop.height}px`)
          , b = u( () => `${a.elementData.mobile.height}px`)
          , D = async () => {
            await s(e.value?.$el)
        }
          , T = async () => {
            const B = [Js, el].includes(a.elementData.type)
              , R = e.value?.$el.getBoundingClientRect().height > window.innerHeight
              , $ = !B && R && e.value ? e.value.$el.parentElement : null;
            i({
                root: $
            }),
            B || await D()
        }
        ;
        Pe(async () => {
            await T()
        }
        ),
        Kt( () => r.value?.disconnect());
        const w = {
            props: a,
            elementRef: e,
            intersectionObserver: r,
            animationClass: o,
            addIntersectionObserver: i,
            observe: s,
            firstLanguagePage: l,
            isMobileElementHidden: d,
            isDesktopElementHidden: p,
            stripeSuccessPageSlug: g,
            stripeCancellationPageSlug: v,
            elementHeightDesktop: f,
            elementHeightMobile: b,
            observeElement: D,
            initiateAnimations: T,
            get ELEMENT_TYPE_BUTTON() {
                return jc
            },
            get ELEMENT_TYPE_STRIPE_BUTTON() {
                return ai
            },
            get ELEMENT_TYPE_ECOMMERCE_BUTTON() {
                return Kd
            },
            get ELEMENT_TYPE_MAP() {
                return Nc
            },
            get ELEMENT_TYPE_VIDEO() {
                return Hc
            },
            get ELEMENT_TYPE_IMAGE() {
                return Qd
            },
            get ELEMENT_TYPE_TEXT_BOX() {
                return Xd
            },
            get ELEMENT_TYPE_FORM() {
                return Jd
            },
            get ELEMENT_TYPE_INSTAGRAM_FEED() {
                return Js
            },
            get ELEMENT_TYPE_SOCIAL_ICONS() {
                return Gc
            },
            get ELEMENT_TYPE_GALLERY() {
                return el
            },
            get ELEMENT_TYPE_EMBED() {
                return em
            },
            get ELEMENT_TYPE_SHAPE() {
                return tm
            },
            get ELEMENT_TYPE_SEARCH_BAR() {
                return am
            },
            LayoutElementWrapper: Yv,
            GridButtonProviderUser: Zv,
            GridEcommerceButtonProviderUser: of,
            GridEmbedProviderUser: yf,
            GridFormProviderUser: sh,
            GridGalleryProviderUser: Sh,
            GridImageProviderUser: Dh,
            GridInstagramFeedProviderUser: Qh,
            GridMapProviderUser: iy,
            GridSocialIconsProviderUser: gy,
            GridStripeButtonProviderUser: by,
            GridTextBoxProviderUser: Iy,
            GridVideoProviderUser: Zy,
            GridShapeProviderUser: ab,
            SiteElementSearchBarProviderSiteEngine: $b,
            get useSiteEngineAnimations() {
                return sr
            },
            computed: u,
            onMounted: Pe,
            onBeforeUnmount: Kt,
            ref: E,
            get isSearchDropdownOpen() {
                return Vi
            }
        };
        return Object.defineProperty(w, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        w
    }
};
function zb(t, n, a, e, r, o) {
    const i = lt("qa");
    return se((m(),
    z(e.LayoutElementWrapper, {
        ref: "elementRef",
        class: J(["layout-element", [{
            "layout-element--desktop-element-hidden": e.isDesktopElementHidden,
            "layout-element--mobile-element-hidden": e.isMobileElementHidden
        }, e.animationClass]]),
        "element-data": a.elementData,
        "is-forced-on-top": e.isSearchDropdownOpen && a.elementData.type === e.ELEMENT_TYPE_SEARCH_BAR,
        "is-mobile-legacy": a.isMobileLegacy
    }, {
        default: ye( () => [a.elementData.type === e.ELEMENT_TYPE_BUTTON ? se((m(),
        z(e.GridButtonProviderUser, {
            key: 0,
            id: a.elementId,
            data: a.elementData,
            "current-locale": a.currentLocale,
            "mobile-element-width": a.elementData.mobile.width,
            "mobile-element-height": a.elementData.mobile.height,
            class: "layout-element__component layout-element__component--GridButton"
        }, null, 8, ["id", "data", "current-locale", "mobile-element-width", "mobile-element-height"])), [[i, `${a.elementData.type}:${a.elementId}`]]) : x("", !0), a.elementData.type === e.ELEMENT_TYPE_STRIPE_BUTTON ? se((m(),
        z(e.GridStripeButtonProviderUser, {
            key: 1,
            id: a.elementId,
            data: a.elementData,
            "success-page-slug": e.stripeSuccessPageSlug,
            "cancellation-page-slug": e.stripeCancellationPageSlug,
            "stripe-public-api-key": a.stripePublicApiKey,
            class: "layout-element__component layout-element__component--GridStripeButton"
        }, null, 8, ["id", "data", "success-page-slug", "cancellation-page-slug", "stripe-public-api-key"])), [[i, `${a.elementData.type}:${a.elementId}`]]) : x("", !0), a.elementData.type === e.ELEMENT_TYPE_ECOMMERCE_BUTTON ? se((m(),
        z(e.GridEcommerceButtonProviderUser, {
            key: 2,
            id: a.elementId,
            data: a.elementData,
            "is-cart-visible": a.isCartVisible,
            "mobile-element-width": a.elementData.mobile.width,
            "mobile-element-height": a.elementData.mobile.height,
            "is-in-preview-mode": e.props.isInPreviewMode,
            class: "layout-element__component layout-element__component--GridEcommerceButton"
        }, null, 8, ["id", "data", "is-cart-visible", "mobile-element-width", "mobile-element-height", "is-in-preview-mode"])), [[i, `${a.elementData.type}:${a.elementId}`]]) : x("", !0), a.elementData.type === e.ELEMENT_TYPE_FORM ? se((m(),
        z(e.GridFormProviderUser, {
            key: 3,
            id: a.elementId,
            data: a.elementData,
            "current-locale": a.currentLocale,
            "is-in-preview-mode": e.props.isInPreviewMode,
            class: "layout-element__component layout-element__component--GridForm"
        }, null, 8, ["id", "data", "current-locale", "is-in-preview-mode"])), [[i, `${a.elementData.type}:${a.elementId}`]]) : x("", !0), a.elementData.type === e.ELEMENT_TYPE_VIDEO ? se((m(),
        z(e.GridVideoProviderUser, {
            key: 4,
            id: a.elementId,
            data: a.elementData,
            class: "layout-element__component layout-element__component--GridVideo"
        }, null, 8, ["id", "data"])), [[i, `${a.elementData.type}:${a.elementId}`]]) : x("", !0), a.elementData.type === e.ELEMENT_TYPE_TEXT_BOX ? se((m(),
        z(e.GridTextBoxProviderUser, {
            key: 5,
            id: a.elementId,
            data: a.elementData,
            class: "layout-element__component layout-element__component--GridTextBox"
        }, null, 8, ["id", "data"])), [[i, `${a.elementData.type}:${a.elementId}`]]) : x("", !0), a.elementData.type === e.ELEMENT_TYPE_MAP ? se((m(),
        z(e.GridMapProviderUser, {
            key: 6,
            id: a.elementId,
            data: a.elementData,
            class: "layout-element__component layout-element__component--GridMap"
        }, null, 8, ["id", "data"])), [[i, `${a.elementData.type}:${a.elementId}`]]) : x("", !0), a.elementData.type === e.ELEMENT_TYPE_SOCIAL_ICONS ? se((m(),
        z(e.GridSocialIconsProviderUser, {
            key: 7,
            id: a.elementId,
            data: a.elementData,
            class: "layout-element__component layout-element__component--GridSocialIcons"
        }, null, 8, ["id", "data"])), [[i, `${a.elementData.type}:${a.elementId}`]]) : x("", !0), a.elementData.type === e.ELEMENT_TYPE_GALLERY ? se((m(),
        z(e.GridGalleryProviderUser, {
            key: 8,
            id: a.elementId,
            data: a.elementData,
            "element-width": a.elementData.desktop.width,
            "element-height": a.elementData.desktop.height,
            class: "layout-element__component layout-element__component--GridGallery",
            onImageLoad: e.observeElement
        }, null, 8, ["id", "data", "element-width", "element-height"])), [[i, `${a.elementData.type}:${a.elementId}`]]) : x("", !0), a.elementData.type === e.ELEMENT_TYPE_IMAGE ? se((m(),
        z(e.GridImageProviderUser, {
            key: 9,
            id: a.elementId,
            lcp: a.lcp,
            data: a.elementData,
            "mobile-element-width": a.elementData.mobile.width,
            "mobile-element-height": a.elementData.mobile.height,
            "element-width": a.elementData.desktop.width,
            "element-height": a.elementData.desktop.height,
            "reset-mobile-position": a.isMobileLegacy,
            "current-locale": a.currentLocale,
            "mobile-border-radius": a.elementData.mobile.borderRadius,
            "desktop-border-radius": a.elementData.desktop.borderRadius,
            "shape-mask-source": a.elementData.shapeMaskSource,
            "overlay-opacity": a.elementData.overlayOpacity,
            "is-in-preview-mode": e.props.isInPreviewMode,
            class: "layout-element__component layout-element__component--GridImage"
        }, null, 8, ["id", "lcp", "data", "mobile-element-width", "mobile-element-height", "element-width", "element-height", "reset-mobile-position", "current-locale", "mobile-border-radius", "desktop-border-radius", "shape-mask-source", "overlay-opacity", "is-in-preview-mode"])), [[i, `${a.elementData.type}:${a.elementId}`]]) : x("", !0), a.elementData.type === e.ELEMENT_TYPE_INSTAGRAM_FEED ? se((m(),
        z(e.GridInstagramFeedProviderUser, {
            key: 10,
            id: a.elementId,
            data: a.elementData,
            class: "layout-element__component layout-element__component--GridInstagramFeed",
            onMediaLoaded: e.observeElement
        }, null, 8, ["id", "data"])), [[i, `${a.elementData.type}:${a.elementId}`]]) : x("", !0), a.elementData.type === e.ELEMENT_TYPE_EMBED ? se((m(),
        z(e.GridEmbedProviderUser, {
            key: 11,
            id: a.elementId,
            data: a.elementData,
            "is-in-preview-mode": e.props.isInPreviewMode,
            class: "layout-element__component layout-element__component--GridEmbed"
        }, null, 8, ["id", "data", "is-in-preview-mode"])), [[i, `${a.elementData.type}:${a.elementId}`]]) : x("", !0), a.elementData.type === e.ELEMENT_TYPE_SHAPE ? se((m(),
        z(e.GridShapeProviderUser, {
            key: 12,
            id: a.elementId,
            data: a.elementData,
            "is-in-preview-mode": e.props.isInPreviewMode,
            class: "layout-element__component layout-element__component--GridShape"
        }, null, 8, ["id", "data", "is-in-preview-mode"])), [[i, `${a.elementData.type}:${a.elementId}`]]) : x("", !0), a.elementData.type === e.ELEMENT_TYPE_SEARCH_BAR ? se((m(),
        z(e.SiteElementSearchBarProviderSiteEngine, {
            key: 13,
            id: a.elementId,
            data: a.elementData,
            class: "layout-element__component",
            "block-id": a.blockId
        }, null, 8, ["id", "data", "block-id"])), [[i, `${a.elementData.type}:${a.elementId}`]]) : x("", !0), ne(t.$slots, "default", {}, void 0, !0)]),
        _: 3
    }, 8, ["class", "element-data", "is-forced-on-top", "is-mobile-legacy"])), [[i, `layout-element-wrapper:${a.elementId}`]])
}
const Zb = oe(qb, [["render", zb], ["__scopeId", "data-v-5567603e"]])
  , Kb = {
    __name: "BlockLayoutProviderUser",
    props: {
        blockId: {
            type: String,
            required: !0
        },
        data: {
            type: Object,
            required: !0
        },
        components: {
            type: Object,
            default: () => ({})
        },
        lcp: {
            type: Object,
            default: () => ({})
        },
        siteLanguagePages: {
            type: Object,
            required: !0
        },
        stripePublicApiKey: {
            type: String,
            default: ""
        },
        currentLocale: {
            type: String,
            required: !0
        },
        isCartVisible: {
            type: Boolean,
            default: !1
        },
        isInPreviewMode: {
            type: Boolean,
            default: !1
        }
    },
    setup(t, {expose: n}) {
        n();
        const a = t
          , {isSearchOpenedInCurrentBlock: e} = Ui({
            blockId: a.blockId
        })
          , {components: r} = Di(a)
          , o = u( () => a.data)
          , {layoutElements: i, layoutCSSVars: s, isMobileLegacy: l} = ji({
            blockData: o,
            siteElements: r,
            shouldBuildResponsive: !a.isInPreviewMode
        })
          , d = {
            props: a,
            isSearchOpenedInCurrentBlock: e,
            siteElements: r,
            blockData: o,
            layoutElements: i,
            layoutCSSVars: s,
            isMobileLegacy: l,
            toRefs: Di,
            computed: u,
            get useSearchElementDropdown() {
                return Ui
            },
            BlockLayoutWrapper: Bv,
            get useBlockLayout() {
                return ji
            },
            LayoutElementProviderUser: Zb
        };
        return Object.defineProperty(d, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        d
    }
};
function Qb(t, n, a, e, r, o) {
    return m(),
    z(e.BlockLayoutWrapper, {
        ref: "blockLayout",
        style: ze(e.layoutCSSVars),
        "is-mobile-legacy": e.isMobileLegacy,
        "is-block-responsive": "",
        "is-forced-on-top": e.isSearchOpenedInCurrentBlock,
        "is-in-preview-mode": e.props.isInPreviewMode
    }, {
        default: ye( () => [(m(!0),
        y(ge, null, Ce(e.layoutElements, i => (m(),
        z(e.LayoutElementProviderUser, {
            key: i.elementId,
            "is-mobile-legacy": e.isMobileLegacy,
            "element-id": i.elementId,
            "element-data": i,
            lcp: a.lcp,
            "is-cart-visible": a.isCartVisible,
            "current-locale": a.currentLocale,
            "site-language-pages": a.siteLanguagePages,
            "stripe-public-api-key": a.stripePublicApiKey,
            "block-id": a.blockId,
            "is-in-preview-mode": e.props.isInPreviewMode
        }, null, 8, ["is-mobile-legacy", "element-id", "element-data", "lcp", "is-cart-visible", "current-locale", "site-language-pages", "stripe-public-api-key", "block-id", "is-in-preview-mode"]))), 128))]),
        _: 1
    }, 8, ["style", "is-mobile-legacy", "is-forced-on-top", "is-in-preview-mode"])
}
const Xb = oe(Kb, [["render", Qb]])
  , Jb = re({
    __name: "ZyroPagination",
    props: {
        currentPage: {},
        pageCount: {},
        color: {
            default: null
        }
    },
    emits: ["change-page"],
    setup(t, {expose: n, emit: a}) {
        n();
        const e = t
          , r = a
          , o = u( () => ({
            "--button-color": e.color
        }))
          , i = u( () => {
            if (5 > e.pageCount)
                return [...new Array(e.pageCount + 1).keys()].slice(1);
            const d = 4 / 2
              , p = Array.from({
                length: 4
            }).fill(0);
            if (e.currentPage <= d + 1) {
                p[0] = 1;
                const v = p.map( (f, b) => p[0] + b);
                return v.push(e.pageCount),
                v
            }
            if (e.currentPage >= e.pageCount - d + 1) {
                const v = p.map( (f, b) => e.pageCount - b);
                return v.reverse().unshift(1),
                v
            }
            p[0] = e.currentPage - d + 1;
            const g = p.map( (v, f) => p[0] + f);
            return g.unshift(1),
            g[g.length - 1] = e.pageCount,
            g
        }
        )
          , s = {
            props: e,
            emit: r,
            computedStyle: o,
            paginationTriggersList: i
        };
        return Object.defineProperty(s, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        s
    }
})
  , Du = t => (sa("data-v-b1b387fa"),
t = t(),
la(),
t)
  , e_ = ["disabled"]
  , t_ = Du( () => C("svg", {
    width: "8",
    height: "14",
    viewBox: "0 0 8 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
}, [C("path", {
    d: "M7 1L1 7L7 13",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
})], -1))
  , a_ = [t_]
  , n_ = ["data-testId", "disabled", "onClick"]
  , r_ = ["disabled"]
  , o_ = Du( () => C("svg", {
    width: "8",
    height: "14",
    viewBox: "0 0 8 14",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
}, [C("path", {
    d: "M1 13L7 7L1 1",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
})], -1))
  , i_ = [o_];
function s_(t, n, a, e, r, o) {
    return a.pageCount > 1 ? (m(),
    y("div", {
        key: 0,
        class: "pagination",
        style: ze(e.computedStyle)
    }, [C("button", {
        disabled: a.currentPage === 1,
        class: "pagination__button",
        "data-testId": "button-previous",
        onClick: n[0] || (n[0] = i => e.emit("change-page", Math.max(1, a.currentPage - 1)))
    }, a_, 8, e_), (m(!0),
    y(ge, null, Ce(e.paginationTriggersList, i => (m(),
    y("button", {
        key: `${i}-trigger`,
        class: J(["pagination__button pagination__trigger", {
            "pagination__trigger--current": i === a.currentPage
        }]),
        "data-testId": `button-${i}`,
        disabled: a.currentPage === i,
        onClick: s => e.emit("change-page", i)
    }, ae(i), 11, n_))), 128)), C("button", {
        disabled: a.currentPage === a.pageCount,
        class: "pagination__button",
        "data-testId": "button-next",
        onClick: n[1] || (n[1] = i => e.emit("change-page", Math.min(a.pageCount, a.currentPage + 1)))
    }, i_, 8, r_)], 4)) : x("", !0)
}
const Mu = oe(Jb, [["render", s_], ["__scopeId", "data-v-b1b387fa"]])
  , qi = 1800
  , l_ = 1080
  , zl = 100
  , c_ = {
    __name: "BlockBlogListItem",
    props: {
        post: {
            type: Object,
            default: () => ({})
        },
        authorName: {
            type: String,
            default: null
        },
        shownItems: {
            type: Object,
            default: () => ({
                authorFullName: !0,
                coverImage: !0,
                title: !0,
                description: !0,
                date: !0,
                categories: !0,
                avatar: !0,
                minutesToRead: !0
            })
        },
        coverObjectFit: {
            type: String,
            default: "cover"
        },
        cursor: {
            type: String,
            default: "pointer"
        },
        blogCategories: {
            type: Object,
            default: () => ({})
        },
        isAnimationActive: {
            type: Boolean,
            default: !1
        },
        blogReadingTimeText: {
            type: [String, void 0],
            default: void 0
        },
        blogTitleTextSize: {
            type: Number,
            default: 24
        }
    },
    emits: ["post-click", "filter-category"],
    setup(t, {expose: n}) {
        n(),
        ht(g => ({
            "9f566116": r.value
        }));
        const a = t
          , e = E()
          , r = u( () => `${a.blogTitleTextSize}px`)
          , o = u( () => a.post?.coverImageAlt ?? "")
          , i = u( () => xo(qi, null))
          , s = u( () => a.post?.categories ?? [])
          , l = u( () => !!a.shownItems.coverImage && (a.post?.coverImageSrc || a.post?.coverImageSrcset))
          , d = u( () => {
            const g = e.value?.getBoundingClientRect();
            if (!g || !window || !document)
                return !0;
            const {top: v} = g
              , {innerHeight: f} = window
              , {clientHeight: b} = document.documentElement;
            return v <= (f || b) + zl
        }
        )
          , p = {
            props: a,
            VERTICAL_VIEWPORT_OFFSET: zl,
            coverImageContainerRef: e,
            blogTitleTextSize: r,
            coverImageAlt: o,
            sizes: i,
            categories: s,
            isCoverImageShown: l,
            isElementInViewport: d,
            BlockBlogListItemCategories: gu,
            BlockBlogListItemMeta: pu,
            get BLOG_POST_COVER_IMAGE_MAX_WIDTH() {
                return qi
            },
            get getFormattedNumericDate() {
                return vu
            },
            get getGridItemSizes() {
                return xo
            },
            get DATA_ATTRIBUTE_ANIMATION_ROLE() {
                return Ka
            },
            get DATA_ATTRIBUTE_ANIMATION_ROLE_BLOCK_ELEMENT() {
                return gr
            },
            get DATA_ATTRIBUTE_ANIMATION_STATE() {
                return Rr
            },
            get DATA_ATTRIBUTE_ANIMATION_STATE_ACTIVE() {
                return Lr
            },
            computed: u,
            ref: E
        };
        return Object.defineProperty(p, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        p
    }
}
  , u_ = ["href"]
  , d_ = {
    class: "block-blog-list-item__cover-image-wrapper"
}
  , m_ = ["alt", "src", "srcset", "sizes", "loading"]
  , g_ = ["href"];
function p_(t, n, a, e, r, o) {
    const i = lt("qa");
    return m(),
    y("div", pt({
        class: "block-blog-list-item",
        [e.DATA_ATTRIBUTE_ANIMATION_ROLE || ""]: e.DATA_ATTRIBUTE_ANIMATION_ROLE_BLOCK_ELEMENT,
        [e.DATA_ATTRIBUTE_ANIMATION_STATE || ""]: a.isAnimationActive ? e.DATA_ATTRIBUTE_ANIMATION_STATE_ACTIVE : null
    }), [ne(t.$slots, "block-blog-list-item-overlay", {}, void 0, !0), e.isCoverImageShown ? se((m(),
    y("a", {
        key: 0,
        ref: "coverImageContainerRef",
        href: a.post.slug,
        class: "block-blog-list-item__cover-image-container",
        onClick: n[0] || (n[0] = xe(s => t.$emit("post-click"), ["prevent"]))
    }, [C("div", d_, [C("img", {
        class: "block-blog-list-item__cover-image",
        alt: e.coverImageAlt,
        src: a.post.coverImageSrc,
        srcset: a.post.coverImageSrcset,
        sizes: e.sizes,
        loading: e.isElementInViewport ? void 0 : "lazy"
    }, null, 8, m_)])], 8, u_)), [[i, "blog-list-item-image"]]) : x("", !0), se(Ae(e.BlockBlogListItemCategories, {
        class: "font-secondary",
        categories: e.categories,
        "blog-categories": a.blogCategories,
        onFilterCategory: n[1] || (n[1] = s => t.$emit("filter-category", s))
    }, null, 8, ["categories", "blog-categories"]), [[da, a.shownItems.categories && e.categories.length]]), C("a", {
        class: "block-blog-list-item__content",
        href: a.post.slug,
        onClick: n[2] || (n[2] = xe(s => t.$emit("post-click"), ["prevent"]))
    }, [se(C("h3", {
        class: "font-primary block-blog-list-item__title"
    }, ae(a.post.meta.title), 513), [[da, a.shownItems.title]]), se(C("p", {
        class: "block-blog-list-item__description font-secondary"
    }, ae(a.post.meta.description), 513), [[da, a.shownItems.description]]), Ae(e.BlockBlogListItemMeta, Je({
        authorName: a.authorName,
        minutesAmount: a.post.minutesToRead,
        date: e.getFormattedNumericDate(a.post.date),
        showAvatar: a.shownItems.avatar,
        showName: a.shownItems.authorFullName,
        showDate: a.shownItems.date,
        showMinutes: a.shownItems.minutesToRead
    }, {
        "blog-reading-time-text": a.blogReadingTimeText
    }), null, 16, ["blog-reading-time-text"])], 8, g_)], 16)
}
const v_ = oe(c_, [["render", p_], ["__scopeId", "data-v-cf99ac1e"]])
  , f_ = "Show all posts"
  , Zl = 46
  , Kl = 24
  , h_ = {
    __name: "BlockBlogList",
    props: {
        blockId: {
            type: String,
            required: !0
        },
        data: {
            type: Object,
            required: !0
        },
        lcp: {
            type: Object,
            default: () => ({})
        },
        posts: {
            type: Object,
            default: () => ({})
        },
        blogCategories: {
            type: Object,
            default: () => ({})
        },
        blogReadingTimeText: {
            type: [String, void 0],
            default: void 0
        },
        isInPreviewMode: {
            type: Boolean,
            default: !1
        }
    },
    emits: ["post-click"],
    setup(t, {expose: n, emit: a}) {
        n(),
        ht(B => ({
            "76b1e704": d.value,
            "482abca0": l.value
        }));
        const e = t
          , r = a
          , o = E(0)
          , i = E(null)
          , s = E(!1)
          , l = u( () => Number.parseInt(e.data.settings.postColumnCount, 10))
          , d = u( () => `${Zl}px`)
          , p = u( () => e.data.settings.blogTitleFontSize || Kl)
          , g = u( () => {
            const {categories: B, showAllPosts: I, showWithoutCategories: R} = e.data.settings
              , $ = I ? e.posts : Object.fromEntries(Object.entries(e.posts).filter( ([,G]) => {
                const ee = B.some(M => G.categories.includes(M));
                return R && G.categories.length === 0 || ee
            }
            ));
            return i.value ? Object.fromEntries(Object.entries($).filter( ([,G]) => G.categories.includes(i.value))) : $
        }
        )
          , v = u( () => {
            const B = new Date().setHours(0, 0, 0, 0);
            return Object.fromEntries(Object.entries(g.value).filter( ([,I]) => {
                if (I?.isScheduled) {
                    const R = new Date(I.date).setHours(0, 0, 0, 0);
                    return R && B >= R && !I.isDraft
                }
                return !I.isDraft
            }
            ))
        }
        )
          , f = u( () => Object.values(v.value).sort( (B, I) => Date.parse(I.date) - Date.parse(B.date)))
          , b = u( () => f.value.slice((o.value > 0 ? o.value - 1 : 0) * e.data.settings.postsPerPage, o.value * e.data.settings.postsPerPage))
          , D = u( () => Math.ceil(Object.keys(v.value).length / e.data.settings.postsPerPage))
          , T = () => {
            const B = new URLSearchParams(window.location.search)
              , I = Number.parseInt(B.get("page"), 10) || 1;
            I !== o.value && (o.value = I)
        }
          , w = B => {
            o.value = B,
            s.value = !0;
            const I = new URL(window.location);
            I.searchParams.set("page", o.value),
            window.history.pushState(null, "", I.toString()),
            To({
                linkToSection: `#${e.blockId}`,
                isPreviewMode: e.isInPreviewMode
            })
        }
        ;
        Fe(b, B => {
            B.length === 0 && o.value > 1 && (o.value -= 1)
        }
        ),
        Fe(i, () => {
            s.value = !0
        }
        ),
        Pe( () => {
            e.isInPreviewMode && setTimeout( () => {
                s.value = !0
            }
            , 100);
            const B = new URLSearchParams(window.location.search)
              , I = Number.parseInt(B.get("page"), 10) || 1;
            o.value !== I && (o.value = I),
            window.addEventListener("popstate", () => {
                T()
            }
            )
        }
        ),
        Kt( () => {
            window.removeEventListener("popstate", T)
        }
        );
        const S = {
            SHOW_ALL_POSTS_LABEL: f_,
            BLOG_LIST_PADDING_X: Zl,
            props: e,
            emit: r,
            currentPage: o,
            filteredCategoryId: i,
            isAnimationActive: s,
            postColumnCount: l,
            blogListPaddingXCssVar: d,
            BLOG_TITLE_FONT_SIZE_FALLBACK: Kl,
            blogTitleTextSize: p,
            postsToRender: g,
            activePostsToRender: v,
            sortedPosts: f,
            currentPageItems: b,
            pageCount: D,
            handleBrowserNavigationPageChange: T,
            setCurrentPage: w,
            get scrollToSection() {
                return To
            },
            ZyroPagination: Mu,
            BlockBlogListItem: v_,
            ref: E,
            onMounted: Pe,
            onBeforeUnmount: Kt,
            computed: u,
            watch: Fe
        };
        return Object.defineProperty(S, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        S
    }
}
  , y_ = ["id"]
  , b_ = {
    key: 0,
    class: "block-blog-list__filter"
}
  , __ = {
    key: 2,
    class: "block-blog-list__empty-block"
};
function w_(t, n, a, e, r, o) {
    const i = lt("qa");
    return se((m(),
    y("div", {
        id: a.blockId,
        ref: "blogList",
        class: "block-blog-list"
    }, [e.filteredCategoryId ? (m(),
    y("div", b_, [qe(ae(a.blogCategories[e.filteredCategoryId].name) + " ", 1), C("button", {
        class: "block-blog-list__filter-button",
        onClick: n[0] || (n[0] = s => e.filteredCategoryId = null)
    }, ae(e.SHOW_ALL_POSTS_LABEL))])) : x("", !0), e.currentPageItems.length ? (m(),
    y("div", {
        key: 1,
        class: J(["block-blog-list__list", {
            "block-blog-list__list--one-col": e.postColumnCount === 1
        }])
    }, [(m(!0),
    y(ge, null, Ce(e.currentPageItems, (s, l) => se((m(),
    z(e.BlockBlogListItem, {
        key: `post-${l}`,
        post: s,
        "author-name": s.meta.authorName,
        "cover-object-fit": a.data.settings.styles["cover-object-fit"],
        "shown-items": a.data.settings.shownItems,
        "blog-categories": a.blogCategories,
        "is-animation-active": e.isAnimationActive,
        "blog-reading-time-text": a.blogReadingTimeText,
        "blog-title-text-size": e.blogTitleTextSize,
        onFilterCategory: n[1] || (n[1] = d => e.filteredCategoryId = d),
        onPostClick: d => e.emit("post-click", s)
    }, {
        "block-blog-list-item-overlay": ye( () => [ne(t.$slots, "block-blog-list-overlay", {
            post: s
        }, void 0, !0)]),
        _: 2
    }, 1032, ["post", "author-name", "cover-object-fit", "shown-items", "blog-categories", "is-animation-active", "blog-reading-time-text", "blog-title-text-size", "onPostClick"])), [[i, "blog-list-item"]])), 128))], 2)) : (m(),
    y("div", __, [ne(t.$slots, "block-blog-list-empty-block", {}, void 0, !0)])), Ae(e.ZyroPagination, {
        class: "block-blog-list__pagination",
        "current-page": e.currentPage,
        "page-count": e.pageCount,
        onChangePage: e.setCurrentPage
    }, null, 8, ["current-page", "page-count"])], 8, y_)), [[i, "builder-section-blog"]])
}
const k_ = oe(h_, [["render", w_], ["__scopeId", "data-v-91ca82a4"]])
  , S_ = re({
    name: "BlockBlogListProviderUser",
    components: {
        BlockBlogList: k_
    },
    props: {
        blockId: {
            type: String,
            required: !0
        },
        data: {
            type: Object,
            required: !0
        },
        currentLocale: {
            type: String,
            default: mn
        },
        isInPreviewMode: {
            type: Boolean,
            default: !1
        }
    },
    setup() {
        const {blogReadingTimeText: t, siteId: n, pages: a, blogCategories: e, meta: r} = kt();
        return {
            blogReadingTimeText: t,
            siteId: n,
            pages: a,
            blogCategories: e,
            meta: r
        }
    },
    computed: {
        publishedBlogPages() {
            return Object.fromEntries(Object.entries(this.pages).filter( ([,t]) => t.type === Ai && !t.isDraft))
        },
        blogPosts() {
            const t = this.currentLocale === this.meta.defaultLocale;
            return Object.fromEntries(Object.entries(this.publishedBlogPages).map( ([n,a]) => {
                const e = In(a.coverImageOrigin, a.coverImagePath, this.siteId, {
                    width: qi,
                    height: l_
                });
                return [n, {
                    id: n,
                    ...a,
                    coverImageSrcset: e,
                    slug: `/${t ? "" : `${this.currentLocale}/`}${a.slug}`
                }]
            }
            ))
        }
    }
});
function T_(t, n, a, e, r, o) {
    const i = mt("BlockBlogList");
    return m(),
    z(i, {
        data: t.data,
        "block-id": t.blockId,
        posts: t.blogPosts,
        "blog-categories": t.blogCategories,
        "blog-reading-time-text": t.blogReadingTimeText,
        "is-in-preview-mode": t.isInPreviewMode
    }, null, 8, ["data", "block-id", "posts", "blog-categories", "blog-reading-time-text", "is-in-preview-mode"])
}
const C_ = oe(S_, [["render", T_]])
  , ks = re({
    props: {
        columnCount: {
            type: Number,
            default: 3
        },
        imageRatio: {
            type: String,
            default: "original"
        },
        isCategoryListEnabled: {
            type: Boolean,
            default: !1
        },
        isFullWidth: {
            type: Boolean,
            default: !1
        }
    }
})
  , Ql = () => {
    ht(t => ({
        "1bed821c": t.columnCount
    }))
}
  , Xl = ks.setup;
ks.setup = Xl ? (t, n) => (Ql(),
Xl(t, n)) : Ql;
const Au = t => (sa("data-v-4ad892a8"),
t = t(),
la(),
t)
  , I_ = {
    key: 0,
    class: "skeleton-loader__categories"
}
  , P_ = {
    class: "skeleton-loader__wrapper"
}
  , E_ = {
    key: 0,
    class: "skeleton-loader__category"
}
  , D_ = {
    class: "skeleton-loader__list"
}
  , M_ = Au( () => C("div", {
    class: "skeleton-loader__text"
}, null, -1))
  , A_ = Au( () => C("div", {
    class: "skeleton-loader__text"
}, null, -1));
function O_(t, n, a, e, r, o) {
    return m(),
    y("div", {
        class: J(["skeleton-loader", {
            "skeleton-loader--full-width": t.isFullWidth
        }])
    }, [t.isCategoryListEnabled ? (m(),
    y("div", I_)) : x("", !0), C("div", P_, [t.isCategoryListEnabled ? (m(),
    y("div", E_)) : x("", !0), C("div", D_, [(m(!0),
    y(ge, null, Ce(t.columnCount, i => (m(),
    y("div", {
        key: i,
        class: "skeleton-loader__item"
    }, [C("div", {
        class: J(["skeleton-loader__image-placeholder", `skeleton-loader__image-placeholder--${t.imageRatio}`])
    }, null, 2), M_, A_]))), 128))])])], 2)
}
const x_ = oe(ks, [["render", O_], ["__scopeId", "data-v-4ad892a8"]])
  , B_ = re({
    props: {
        textColorVars: {
            type: Object,
            default: () => ({})
        },
        emptyPageMessage: {
            type: String,
            required: !0
        }
    },
    computed: {
        computedStyles() {
            return {
                ...ma(this.textColorVars)
            }
        }
    }
})
  , L_ = C("svg", {
    class: "product-list-empty-state__icon",
    width: "41",
    height: "40",
    viewBox: "0 0 41 40",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
}, [C("path", {
    d: "M10.5 3.33334L5.5 10V33.3333C5.5 34.2174 5.85119 35.0652 6.47631 35.6904C7.10143 36.3155 7.94928 36.6667 8.83333 36.6667H32.1667C33.0507 36.6667 33.8986 36.3155 34.5237 35.6904C35.1488 35.0652 35.5 34.2174 35.5 33.3333V10L30.5 3.33334H10.5Z",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
}), C("path", {
    d: "M5.5 10H35.5",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
}), C("path", {
    d: "M27.1663 16.6667C27.1663 18.4348 26.464 20.1305 25.2137 21.3807C23.9635 22.631 22.2678 23.3334 20.4997 23.3334C18.7316 23.3334 17.0359 22.631 15.7856 21.3807C14.5354 20.1305 13.833 18.4348 13.833 16.6667",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
})], -1);
function R_(t, n, a, e, r, o) {
    return m(),
    y("div", {
        class: "product-list-empty-state",
        style: ze(t.computedStyles)
    }, [L_, C("h6", null, ae(t.emptyPageMessage), 1)], 4)
}
const N_ = oe(B_, [["render", R_]])
  , H_ = {
    props: {
        text: {
            type: String,
            default: ""
        },
        ribbonStyle: {
            type: Object,
            default: () => ({})
        }
    },
    computed: {
        computedStyles() {
            return {
                ...ma(this.ribbonStyle)
            }
        }
    }
}
  , V_ = {
    class: "ecommerce-product-ribbon__text"
};
function U_(t, n, a, e, r, o) {
    return m(),
    y("div", {
        class: "ecommerce-product-ribbon",
        style: ze(o.computedStyles)
    }, [C("p", V_, ae(a.text), 1)], 4)
}
const F_ = oe(H_, [["render", U_]])
  , j_ = re({
    __name: "ProductListItem",
    props: {
        id: {},
        imageUrl: {},
        secondaryImage: {},
        title: {},
        price: {
            default: null
        },
        textAlign: {
            default: "left"
        },
        isEager: {
            type: Boolean,
            default: !1
        },
        imageWidth: {},
        imageHeight: {},
        duration: {},
        productType: {
            default: st.PHYSICAL
        },
        translations: {
            default: () => ({})
        },
        isStoreQuantityTracked: {
            type: Boolean
        },
        quantity: {},
        isButtonEnabled: {
            type: Boolean,
            default: !1
        },
        buttonDisplay: {
            default: ""
        },
        buttonText: {
            default: ""
        },
        buttonStyle: {
            default: () => ({})
        },
        buttonType: {
            default: "primary"
        },
        buttonBorderWidth: {
            default: 0
        },
        isPriceRangeShown: {
            type: Boolean
        },
        ribbon: {
            default: ""
        },
        ribbonStyle: {
            default: () => ({})
        },
        siteId: {
            default: ""
        },
        isPurchasable: {
            type: Boolean
        },
        imageRatio: {
            default: ua.COVER
        },
        imageHoverEffect: {},
        imageBorderRadius: {},
        isMobileView: {
            type: Boolean
        },
        isButtonFullWidth: {
            type: Boolean
        },
        isCartVisible: {
            type: Boolean,
            default: !0
        },
        isAddToCartDisabled: {
            type: Boolean,
            default: !1
        }
    },
    emits: ["button-click"],
    setup(t, {expose: n}) {
        n(),
        ht(K => ({
            "020dccbc": $.value,
            "3c7ccb35": w.value
        }));
        const a = {
            [Ka]: gr
        }
          , e = `${Vt}/placeholder.png`
          , r = t
          , o = E()
          , i = E(!1)
          , s = u( () => r.imageHoverEffect === rn.SWAP_IMAGE && r.secondaryImage?.url ? r.secondaryImage?.url : null)
          , l = u( () => !r.isStoreQuantityTracked || r.quantity > 0)
          , d = u( () => r.productType === st.BOOKING)
          , p = u( () => ms.includes(r.productType))
          , g = u( () => p.value && !r.price?.amount)
          , v = u( () => r.productType === st.DIGITAL && !r.price?.amount)
          , f = u( () => r.buttonText ? r.buttonText : d.value ? r.translations?.bookNow || "Book now" : v.value && !r.isCartVisible ? r.translations?.download || "Download" : r.translations?.addToBag || "Add to bag")
          , b = u( () => ({
            normal: r.buttonStyle[`grid-button-${r.buttonType}-border-color`],
            hover: r.buttonStyle[`grid-button-${r.buttonType}-border-color-hover`]
        }))
          , D = u( () => ({
            normal: r.buttonStyle[`grid-button-${r.buttonType}-background-color`],
            hover: r.buttonStyle[`grid-button-${r.buttonType}-background-color-hover`]
        }))
          , T = u( () => ({
            ...ma(r.buttonStyle)
        }))
          , w = u( () => r.imageRatio === ua.CONTAIN ? "contain" : "cover")
          , S = u( () => r.secondaryImage?.url && i.value && r.imageHoverEffect === rn.SWAP_IMAGE)
          , B = u( () => S.value ? r.secondaryImage?.url || "" : r.imageUrl || e)
          , I = u( () => S.value ? r.secondaryImage?.type : Er.IMAGE)
          , R = u( () => r.imageHoverEffect === rn.ZOOM && i.value)
          , $ = u( () => r.imageRatio === ua.CONTAIN ? "0%" : r.imageBorderRadius)
          , G = u( () => g.value ? r.translations?.free || "Free" : yn({
            amount: r.price?.amount,
            currency: r.price?.currency
        }));
        Fe( () => r.imageHoverEffect, K => {
            r.isMobileView || (clearTimeout(o.value),
            K === rn.SWAP_IMAGE ? (i.value = !0,
            o.value = setTimeout( () => {
                i.value = !1
            }
            , 1e3)) : K === rn.ZOOM ? (i.value = !0,
            o.value = setTimeout( () => {
                i.value = !1
            }
            , 1e3)) : i.value = !1)
        }
        );
        const ee = {
            CUSTOM_ATTRIBUTES: a,
            PRODUCT_PLACEHOLDER_IMAGE: e,
            props: r,
            animationTimeout: o,
            isProductHovered: i,
            secondaryImageSrc: s,
            isInStock: l,
            isProductTypeBooking: d,
            isFreeTypeProduct: p,
            isFreeTypeProductFree: g,
            isFreeDigitalProduct: v,
            blockButtonText: f,
            buttonBorderColor: b,
            buttonBackgroundColor: D,
            computedStyles: T,
            objectFit: w,
            isSecodaryImageShown: S,
            imageSrc: B,
            mediaType: I,
            isImageZoomedIn: R,
            imageBorderRadius: $,
            formattedPrice: G,
            GridButton: Hn,
            get EcommerceProductType() {
                return st
            },
            get ImageHoverEffect() {
                return rn
            },
            get formatPrice() {
                return yn
            },
            ProductMediaElement: Wo,
            ProductRibbon: F_
        };
        return Object.defineProperty(ee, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        ee
    }
})
  , G_ = {
    class: "product-list-item__details"
}
  , Y_ = {
    class: "product-list-item__title"
}
  , W_ = {
    key: 0,
    class: "product-list-item__price-range"
}
  , $_ = {
    key: 0,
    class: "product-list-item__price-content"
}
  , q_ = {
    key: 1,
    class: "product-list-item__duration"
}
  , z_ = {
    key: 1,
    class: "product-list-item__text"
};
function Z_(t, n, a, e, r, o) {
    const i = lt("qa");
    return m(),
    y("div", Je({
        class: ["product-list-item", `product-list-item--${a.textAlign}`],
        style: e.computedStyles
    }, e.CUSTOM_ATTRIBUTES), [C("div", {
        class: "product-list-item__content",
        onMouseenter: n[0] || (n[0] = s => e.isProductHovered = !a.isMobileView),
        onMouseleave: n[1] || (n[1] = s => e.isProductHovered = !1)
    }, [a.ribbon ? (m(),
    z(e.ProductRibbon, {
        key: 0,
        text: a.ribbon,
        "ribbon-style": a.ribbonStyle
    }, null, 8, ["text", "ribbon-style"])) : x("", !0), se((m(),
    y("div", {
        class: J(`
					product-list-item__image-wrapper
					product-list-item__image-wrapper--${a.imageRatio}
					${a.imageHoverEffect === e.ImageHoverEffect.NO_EFFECT ? "product-list-item__image-wrapper--bg-animation" : ""}
				`)
    }, [Ae(e.ProductMediaElement, {
        src: e.imageSrc,
        "secondary-image-src": e.secondaryImageSrc,
        "media-type": e.mediaType,
        alt: a.title,
        class: J(`
						product-list-item__image
						product-list-item__image ${e.isImageZoomedIn ? "product-list-item__image--zoomed-in" : ""}
						${a.imageHoverEffect === e.ImageHoverEffect.ZOOM ? "product-list-item__image--zoom-animation" : ""}
					`),
        "is-eager": a.isEager,
        width: a.imageWidth,
        height: a.imageHeight,
        "site-id": a.siteId,
        "object-fit": e.objectFit,
        "image-ratio": a.imageRatio,
        "enable-srcset": "",
        "is-video-disabled": "",
        "is-lossless": !0
    }, null, 8, ["src", "secondary-image-src", "media-type", "alt", "class", "is-eager", "width", "height", "site-id", "object-fit", "image-ratio"])], 2)), [[i, "product-list-section-item-image"]]), C("div", G_, [se((m(),
    y("h6", Y_, [qe(ae(a.title), 1)])), [[i, "product-list-section-item-title"]]), a.price ? se((m(),
    y("div", {
        key: 0,
        class: J(["product-list-item__price-wrapper", {
            "product-list-item__price-wrapper--with-booking": a.productType === e.EcommerceProductType.BOOKING
        }])
    }, [e.isInStock ? (m(),
    y(ge, {
        key: 0
    }, [C("p", null, [a.isPriceRangeShown && !a.price.sale_amount ? (m(),
    y("span", W_, ae(a.translations.from), 1)) : x("", !0), C("span", {
        class: J({
            "product-list-item__price": a.price.sale_amount,
            "product-list-item__booking-price": a.productType === e.EcommerceProductType.BOOKING
        })
    }, ae(e.formattedPrice), 3)]), a.price.sale_amount ? (m(),
    y("p", $_, [a.isPriceRangeShown ? (m(),
    y(ge, {
        key: 0
    }, [qe(ae(a.translations.from), 1)], 64)) : x("", !0), qe(" " + ae(e.formatPrice({
        amount: a.price.sale_amount,
        currency: a.price.currency
    })), 1)])) : x("", !0), a.productType === e.EcommerceProductType.BOOKING ? (m(),
    y("p", q_, ae(a.duration), 1)) : x("", !0)], 64)) : (m(),
    y("p", z_, ae(a.translations.soldOut), 1))], 2)), [[i, "product-list-section-item-price"]]) : x("", !0)])], 32), a.isButtonEnabled && a.isPurchasable ? (m(),
    y("div", {
        key: 0,
        class: J(["product-list-item__button-wrapper", {
            "product-list-item__button-wrapper--hidden": !e.isInStock,
            "product-list-item__button-wrapper--with-hover": a.buttonDisplay === "hover"
        }]),
        onClick: n[3] || (n[3] = xe( () => {}
        , ["prevent", "stop"]))
    }, [se(Ae(e.GridButton, {
        type: a.buttonType,
        content: e.blockButtonText,
        class: J(["product-list-item__button", [`product-list-item__button--${a.buttonType}`, {
            "product-list-item__button--full-width": a.isButtonFullWidth
        }]]),
        "tag-name": "button",
        disabled: a.isAddToCartDisabled,
        "border-width": a.buttonBorderWidth,
        "border-color": e.buttonBorderColor.normal,
        "border-color-hover": e.buttonBorderColor.hover,
        "background-color": e.buttonBackgroundColor.normal,
        "background-color-hover": e.buttonBackgroundColor.hover,
        onClick: n[2] || (n[2] = s => t.$emit("button-click"))
    }, null, 8, ["type", "content", "class", "disabled", "border-width", "border-color", "border-color-hover", "background-color", "background-color-hover"]), [[i, "productlistsection-btn-addtobag"]])], 2)) : x("", !0)], 16)
}
const K_ = oe(j_, [["render", Z_], ["__scopeId", "data-v-97b06111"]])
  , Q_ = re({
    __name: "ProductSortDropdown",
    props: {
        productSorting: {},
        sorting: {},
        translations: {}
    },
    emits: ["sort-changed"],
    setup(t, {expose: n, emit: a}) {
        n();
        const e = t
          , r = a
          , o = u( () => ({
            color: e.productSorting.textColor || "#000"
        }))
          , i = {
            props: e,
            emit: r,
            computedSelectStyles: o
        };
        return Object.defineProperty(i, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        i
    }
})
  , X_ = {
    class: "product-list-sorting"
}
  , J_ = {
    class: "product-list-sorting__select-wrapper"
}
  , e0 = ["value"]
  , t0 = ["value"];
function a0(t, n, a, e, r, o) {
    return m(),
    y("div", X_, [C("label", {
        for: "sorting-options",
        style: ze(e.computedSelectStyles),
        class: "product-list-sorting__label"
    }, ae(a.translations.sortBy) + ": ", 5), C("div", J_, [C("select", {
        id: "sorting-options",
        class: "product-list-sorting__select",
        value: e.props.sorting,
        style: ze(e.computedSelectStyles),
        onChange: n[0] || (n[0] = i => e.emit("sort-changed", i))
    }, [(m(!0),
    y(ge, null, Ce(a.productSorting.sortingOptions, i => (m(),
    y("option", {
        key: i.id,
        value: i.value
    }, ae(a.translations[i.id]), 9, t0))), 128))], 44, e0)])])
}
const n0 = oe(Q_, [["render", a0], ["__scopeId", "data-v-b7b2b138"]])
  , Ou = t => {
    const n = new URL(window.location.href);
    return t ? n.searchParams.set("category", t) : n.searchParams.delete("category"),
    n.href
}
  , r0 = re({
    __name: "CategoryList",
    props: {
        categories: {},
        currentCategoryId: {
            default: ""
        },
        translations: {},
        isMobileView: {
            type: Boolean,
            default: !1
        },
        isLinkDisabled: {
            type: Boolean,
            default: !1
        },
        defaultCategory: {},
        blockId: {}
    },
    emits: ["category-click"],
    setup(t, {expose: n, emit: a}) {
        n();
        const e = t
          , r = a
          , o = qc()
          , i = E({})
          , s = g => e.isLinkDisabled ? o.fullPath : Ou(g)
          , l = g => {
            r("category-click", g),
            To({
                linkToSection: `#${e.blockId}`
            })
        }
          , d = () => {
            i.value = e.categories?.reduce( (g, v) => (g[v.id] = s(v.id),
            g), {}) || {},
            i.value.all = s("")
        }
        ;
        Pe( () => {
            d()
        }
        );
        const p = {
            props: e,
            emit: r,
            route: o,
            categoryUrls: i,
            getCategoryUrl: s,
            handleCategoryClick: l,
            setCategoryUrls: d,
            get DATA_ATTRIBUTE_PREVENT_NATIVE_CLICK() {
                return Yc
            }
        };
        return Object.defineProperty(p, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        p
    }
})
  , o0 = {
    class: "category-list"
}
  , i0 = {
    class: "category-list__title"
}
  , s0 = {
    class: "category-list__list"
}
  , l0 = ["href"]
  , c0 = ["href", "onClick"]
  , u0 = {
    class: "category-list__slot"
};
function d0(t, n, a, e, r, o) {
    return m(),
    y("div", o0, [C("h2", i0, ae(a.translations.browseBy), 1), C("ul", s0, [C("li", null, [C("a", pt({
        class: ["category-list__link text-body", {
            "text-body-small": a.isMobileView,
            active: !a.currentCategoryId
        }],
        href: e.categoryUrls.all,
        [e.DATA_ATTRIBUTE_PREVENT_NATIVE_CLICK || ""]: !0,
        onClick: n[0] || (n[0] = xe(i => e.handleCategoryClick(""), ["prevent"]))
    }), ae(a.defaultCategory.title), 17, l0)]), (m(!0),
    y(ge, null, Ce(a.categories, i => (m(),
    y("li", {
        key: i.id
    }, [C("a", pt({
        class: ["category-list__link text-body", {
            "text-body-small": a.isMobileView,
            active: a.currentCategoryId === i.id
        }],
        href: e.categoryUrls[i.id],
        [e.DATA_ATTRIBUTE_PREVENT_NATIVE_CLICK || ""]: !0,
        onClick: xe(s => e.handleCategoryClick(i.id), ["prevent"])
    }), ae(i.title), 17, c0)]))), 128))]), C("div", u0, [ne(t.$slots, "mobile", {}, void 0, !0)])])
}
const m0 = oe(r0, [["render", d0], ["__scopeId", "data-v-a4084316"]])
  , g0 = re({
    __name: "ProductListPagination",
    props: {
        blockId: {},
        isLoading: {
            type: Boolean,
            default: !1
        },
        scrollBehaviour: {
            default: sn.PAGINATION
        },
        currentPage: {},
        pageCount: {}
    },
    emits: ["page-changed", "set-is-animation-active"],
    setup(t, {expose: n, emit: a}) {
        n();
        const e = t
          , r = a
          , o = E(null)
          , i = E(null)
          , s = async v => {
            r("set-is-animation-active", !1),
            r("page-changed", v),
            await Nt(),
            r("set-is-animation-active", !0);
            const f = document.getElementById(e.blockId)
              , b = f?.getBoundingClientRect();
            b && b.top >= 0 && b.bottom <= window.innerHeight || f?.scrollIntoView({
                behavior: "smooth"
            })
        }
          , l = async v => {
            !v || e.currentPage >= e.pageCount || r("page-changed", e.currentPage + 1)
        }
          , d = () => {
            o.value.observe(i.value)
        }
          , p = () => {
            o.value = new IntersectionObserver( ([{isIntersecting: v}]) => {
                l(v)
            }
            ,{
                threshold: 1
            }),
            i.value && d()
        }
        ;
        Pe( () => {
            p()
        }
        ),
        Fe( () => e.isLoading, async v => {
            await Nt(),
            v ? o.value?.disconnect() : d()
        }
        ),
        Fe( () => e.scrollBehaviour, async v => {
            await Nt(),
            v === sn.PAGINATION ? o.value?.disconnect() : d()
        }
        );
        const g = {
            props: e,
            emit: r,
            scrollObserver: o,
            infiniteScrollTriggerRef: i,
            handlePageChange: s,
            handleIntersect: l,
            observeScroll: d,
            addScrollIntersectionObserver: p,
            ZyroPagination: Mu,
            get EcommerceProductListScrollBehaviour() {
                return sn
            }
        };
        return Object.defineProperty(g, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        g
    }
})
  , p0 = {
    ref: "infiniteScrollTriggerRef",
    class: "infinite-scroll-trigger"
}
  , v0 = {
    key: 0,
    class: "loader"
}
  , f0 = is('<div class="loader__element" data-v-b4554d16></div><div class="loader__element" data-v-b4554d16></div><div class="loader__element" data-v-b4554d16></div><div class="loader__element" data-v-b4554d16></div><div class="loader__element" data-v-b4554d16></div>', 5)
  , h0 = [f0];
function y0(t, n, a, e, r, o) {
    return m(),
    y("div", null, [a.scrollBehaviour === e.EcommerceProductListScrollBehaviour.PAGINATION ? (m(),
    z(e.ZyroPagination, {
        key: 0,
        "current-page": a.currentPage,
        "page-count": a.pageCount,
        class: "product-list-pagination",
        color: "var(--body-color)",
        onChangePage: n[0] || (n[0] = i => e.handlePageChange(i))
    }, null, 8, ["current-page", "page-count"])) : (m(),
    y(ge, {
        key: 1
    }, [C("div", p0, null, 512), a.isLoading ? (m(),
    y("div", v0, h0)) : x("", !0)], 64))])
}
const b0 = oe(g0, [["render", y0], ["__scopeId", "data-v-b4554d16"]])
  , Jl = 200
  , _0 = re({
    __name: "BlockEcommerceProductList",
    props: {
        blockId: {},
        pageCount: {},
        currentPage: {},
        products: {},
        totalProductCount: {},
        legacyProductPages: {
            default: () => ({})
        },
        blockStyle: {
            default: () => ({})
        },
        textColorVars: {
            default: () => ({})
        },
        isProductListShown: {
            type: Boolean,
            default: !0
        },
        isLoading: {
            type: Boolean
        },
        isCategoriesLoaded: {
            type: Boolean
        },
        isEager: {
            type: Boolean
        },
        columnCount: {},
        translations: {},
        productCategoryId: {
            default: ""
        },
        isButtonEnabled: {
            type: Boolean
        },
        buttonDisplay: {
            default: ""
        },
        buttonText: {
            default: ""
        },
        buttonStyle: {
            default: () => ({})
        },
        buttonType: {
            default: "primary"
        },
        buttonBorderWidth: {
            default: 0
        },
        ribbonStyle: {
            default: () => ({})
        },
        isProductListItemLinkDisabled: {
            type: Boolean
        },
        siteId: {},
        variantsQuantity: {},
        productSorting: {
            default: () => ({
                enabled: !1
            })
        },
        sorting: {
            default: Vp[zn.DEFAULT]
        },
        imageRatio: {
            default: ua.COVER
        },
        categories: {},
        isCategoryListEnabled: {
            type: Boolean,
            default: !1
        },
        backgroundColor: {
            default: "var(--color-light)"
        },
        isMobileView: {
            type: Boolean,
            default: !1
        },
        imageHoverEffect: {
            default: rn.NO_EFFECT
        },
        isCategoryItemLinkDisabled: {
            type: Boolean
        },
        isFullWidth: {
            type: Boolean
        },
        isTotalProductCountShown: {
            type: Boolean
        },
        columnGap: {
            default: 24
        },
        rowGap: {
            default: void 0
        },
        isListCentered: {
            type: Boolean
        },
        isButtonFullWidth: {
            type: Boolean
        },
        scrollBehaviour: {},
        isCartVisible: {
            type: Boolean,
            default: !0
        },
        canAddToCart: {
            type: Function,
            default: () => !0
        },
        isDynamicProductPageEnabled: {
            type: Boolean,
            default: !1
        }
    },
    emits: ["product-click", "button-click", "page-changed", "sort-changed", "category-click"],
    setup(t, {expose: n, emit: a}) {
        n(),
        ht(U => ({
            92000830: Y.value,
            "04c45638": f.value,
            "2095ebf5": I.value,
            "733c1d09": R.value,
            "6908d577": w.value
        }));
        const e = t
          , r = a
          , o = An( () => e.isMobileView)
          , i = E(!1)
          , s = E(null)
          , l = E(null)
          , d = E(0)
          , p = E(null)
          , {height: g} = yb(l)
          , v = u( () => o.value ? 1 : 3)
          , f = u( () => e.columnCount || v.value)
          , b = u( () => ({
            [Rr]: i.value ? Lr : null
        }))
          , D = u( () => e.translations.onlineStoreNoProducts || "No publicly visible products")
          , T = u( () => e.blockStyle?.textAlign)
          , w = u( () => {
            const U = (f.value - 1) * e.columnGap
              , te = e.isCategoryListEnabled ? Jl : 0
              , Q = d.value || typeof window < "u" && window?.innerWidth || _l
              , O = (e.isFullWidth ? Q : _l) - U - te;
            return Math.floor(O / f.value)
        }
        )
          , S = u( () => e.imageRatio === ua.LANDSCAPE ? {
            width: 16,
            height: 9
        } : e.imageRatio === ua.PORTRAIT ? {
            width: 4,
            height: 5
        } : {
            width: 1,
            height: 1
        })
          , B = u( () => {
            const U = w.value * S.value.height / S.value.width;
            return Math.floor(U)
        }
        )
          , I = u( () => `${e.columnGap}px`)
          , R = u( () => `${e.rowGap ?? e.columnGap}px`)
          , $ = u( () => ({
            id: "",
            title: e.translations.allProducts || "All products"
        }))
          , G = u( () => e.categories?.find( ({id: te}) => te === e.productCategoryId)?.title || $.value.title)
          , ee = u( () => ma(e.textColorVars))
          , K = u( () => e.totalProductCount > 1 ? `${e.totalProductCount} ${e.translations.products || "products"}` : `${e.totalProductCount} ${e.translations.product || "product"}`)
          , M = u( () => e.isListCentered && e.products.length === 1)
          , j = u( () => e.productSorting.enabled && e.productSorting.sortingOptions?.length)
          , q = u( () => e.scrollBehaviour !== sn.PAGINATION ? e.isLoading && e.currentPage === 1 : e.isLoading)
          , Y = u( () => g.value ? `${g.value}px` : "auto")
          , L = U => {
            if (e.isProductListItemLinkDisabled)
                return;
            const te = U.seo_settings?.slug;
            return te ? `${window.location.origin}/${te}` : window.location.href
        }
          , _ = U => Ar(U) ? Al(U).prices[0] : U.variants[0].prices[0]
          , A = U => Ar(U) && Al(U).image_url || U.thumbnail
          , P = U => U.images?.[1] || U.media?.[1] || {}
          , H = () => {
            s.value && p.value.observe(s.value)
        }
          , k = U => U.type.value === st.BOOKING ? U.variants[0].id : U.variants.find( ({id: te}) => {
            const Q = e.variantsQuantity.find(V => V.id === te);
            return Q && Q.inventory_quantity > 0
        }
        )?.id || U.variants[0].id
          , h = () => {
            p.value = new ResizeObserver(U => {
                const {width: te} = U[0].contentRect;
                d.value = te
            }
            ),
            e.isFullWidth && H()
        }
        ;
        Fe( () => e.isFullWidth, U => {
            U ? H() : p.value?.disconnect()
        }
        ),
        Pe( () => {
            h()
        }
        );
        const W = {
            MAX_WIDTH_CATEGORY_LIST: Jl,
            props: e,
            emit: r,
            isMobileView: o,
            isAnimationActive: i,
            blockProductListRef: s,
            productListContentContainerRef: l,
            blockListWidth: d,
            resizeObserver: p,
            productListHeightRef: g,
            columnCountDefaultValue: v,
            columnCountValue: f,
            customAttributes: b,
            emptyPageMessage: D,
            textAlign: T,
            imageWidth: w,
            imageAspectRatioValues: S,
            imageHeight: B,
            columnGapSize: I,
            rowGapSize: R,
            defaultCategory: $,
            currentCategoryTitle: G,
            computedStyles: ee,
            productCountText: K,
            isSingleColumnCentered: M,
            isSortingShown: j,
            isSkeletonLoaderShown: q,
            productListHeight: Y,
            getItemProductPageUrl: L,
            getSmallestProductPrice: _,
            getProductImage: A,
            getSecondaryProductImage: P,
            observeList: H,
            getProductVariantId: k,
            addBlockResizeObserver: h,
            ListSkeletonLoader: x_,
            ProductListEmptyState: N_,
            ProductListItem: K_,
            ProductSortDropdown: n0,
            CategoryList: m0,
            ProductListPagination: b0,
            get getFormattedBookingDuration() {
                return ws
            },
            get isProductPriceRangeShown() {
                return Ar
            },
            get getFullProductQuantity() {
                return Eu
            }
        };
        return Object.defineProperty(W, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        W
    }
})
  , w0 = ["id"]
  , k0 = {
    ref: "productListContentContainerRef",
    class: "block-product-list__content-container"
}
  , S0 = {
    key: 0,
    class: "block-product-list__category"
}
  , T0 = {
    key: 2,
    style: {
        width: "100%"
    }
}
  , C0 = {
    ref: "productList",
    class: "product-list"
}
  , I0 = {
    key: 0,
    class: "product-list__header"
}
  , P0 = {
    key: 0,
    class: "product-list__total-count"
}
  , E0 = ["href"]
  , D0 = {
    key: 3,
    class: "block-product-list__empty-state"
};
function M0(t, n, a, e, r, o) {
    return m(),
    y("div", {
        id: a.blockId,
        ref: "blockProductListRef",
        style: ze(e.computedStyles),
        class: J(["block-product-list", {
            "block-product-list--with-categories": a.isCategoryListEnabled
        }])
    }, [C("div", {
        class: J(["block-product-list__wrapper", {
            "block-product-list__wrapper--full-width": a.isFullWidth
        }])
    }, [a.isCategoriesLoaded && a.isCategoryListEnabled ? (m(),
    z(e.CategoryList, {
        key: 0,
        class: "category-list",
        translations: a.translations,
        categories: a.categories,
        "current-category-id": a.productCategoryId,
        "is-mobile-view": e.isMobileView,
        "default-category": e.defaultCategory,
        "is-link-disabled": a.isCategoryItemLinkDisabled,
        "block-id": a.blockId,
        onCategoryClick: n[1] || (n[1] = i => e.emit("category-click", i))
    }, {
        mobile: ye( () => [!a.isTotalProductCountShown && e.isSortingShown ? (m(),
        z(e.ProductSortDropdown, {
            key: 0,
            "product-sorting": a.productSorting,
            sorting: a.sorting,
            translations: a.translations,
            class: "product-list__sort",
            onSortChanged: n[0] || (n[0] = i => e.emit("sort-changed", i))
        }, null, 8, ["product-sorting", "sorting", "translations"])) : x("", !0)]),
        _: 1
    }, 8, ["translations", "categories", "current-category-id", "is-mobile-view", "default-category", "is-link-disabled", "block-id"])) : x("", !0), C("div", k0, [a.isCategoryListEnabled && a.isCategoriesLoaded ? (m(),
    y("h3", S0, ae(e.currentCategoryTitle), 1)) : x("", !0), e.isSkeletonLoaderShown ? (m(),
    z(e.ListSkeletonLoader, {
        key: 1,
        "column-count": e.columnCountValue,
        "image-ratio": a.imageRatio,
        "is-category-list-enabled": a.isCategoryListEnabled && !a.isCategoriesLoaded,
        "is-full-width": a.isFullWidth
    }, null, 8, ["column-count", "image-ratio", "is-category-list-enabled", "is-full-width"])) : a.isProductListShown ? (m(),
    y("div", T0, [C("div", C0, [a.isTotalProductCountShown || e.isSortingShown ? (m(),
    y("div", I0, [a.isTotalProductCountShown ? (m(),
    y("p", P0, ae(e.productCountText), 1)) : x("", !0), e.isSortingShown ? (m(),
    z(e.ProductSortDropdown, {
        key: 1,
        "product-sorting": a.productSorting,
        sorting: a.sorting,
        translations: a.translations,
        class: J(["product-list__sort", {
            "product-list__sort--hidden-mobile": !a.isTotalProductCountShown && a.isCategoryListEnabled
        }]),
        onSortChanged: n[2] || (n[2] = i => e.emit("sort-changed", i))
    }, null, 8, ["product-sorting", "sorting", "translations", "class"])) : x("", !0)])) : x("", !0), C("div", {
        class: J(["product-list__content", {
            "product-list__content--single-column": e.isSingleColumnCentered
        }])
    }, [(m(!0),
    y(ge, null, Ce(a.products, (i, s) => (m(),
    y("a", {
        key: `product-${s}-${i.id}`,
        href: e.getItemProductPageUrl(i),
        class: "product-list__link"
    }, [Ae(e.ProductListItem, Je(e.customAttributes, {
        id: i.id,
        products: a.products,
        "image-url": e.getProductImage(i),
        "secondary-image": e.getSecondaryProductImage(i),
        title: i.title,
        ribbon: i.ribbon_text,
        price: e.getSmallestProductPrice(i),
        "text-align": e.textAlign,
        "is-eager": a.isEager && s === 0,
        duration: e.getFormattedBookingDuration(i, a.translations),
        "image-width": e.imageWidth,
        "image-height": e.imageHeight,
        "image-ratio": a.imageRatio,
        "image-hover-effect": a.imageHoverEffect,
        "image-border-radius": a.blockStyle?.imageBorderRadius,
        "is-store-quantity-tracked": i.variants[0].manage_inventory,
        "is-price-range-shown": e.isProductPriceRangeShown(i),
        quantity: e.getFullProductQuantity({
            product: i,
            variantsQuantity: a.variantsQuantity
        }),
        "product-type": i.type.value,
        translations: a.translations,
        "is-mobile-view": e.isMobileView,
        "is-button-enabled": a.isButtonEnabled,
        "button-display": a.buttonDisplay,
        "button-text": a.buttonText,
        "button-style": a.buttonStyle,
        "button-type": a.buttonType,
        "button-border-width": a.buttonBorderWidth,
        "ribbon-style": a.ribbonStyle,
        "is-purchasable": i.purchasable ?? !0,
        "is-button-full-width": a.isButtonFullWidth,
        "site-id": a.siteId,
        "is-cart-visible": a.isCartVisible,
        "is-add-to-cart-disabled": !a.canAddToCart(i, e.getProductVariantId(i)),
        onClick: l => t.$emit("product-click", i),
        onButtonClick: l => t.$emit("button-click", i)
    }), null, 16, ["id", "products", "image-url", "secondary-image", "title", "ribbon", "price", "text-align", "is-eager", "duration", "image-width", "image-height", "image-ratio", "image-hover-effect", "image-border-radius", "is-store-quantity-tracked", "is-price-range-shown", "quantity", "product-type", "translations", "is-mobile-view", "is-button-enabled", "button-display", "button-text", "button-style", "button-type", "button-border-width", "ribbon-style", "is-purchasable", "is-button-full-width", "site-id", "is-cart-visible", "is-add-to-cart-disabled", "onClick", "onButtonClick"])], 8, E0))), 128))], 2), Ae(e.ProductListPagination, {
        "block-id": a.blockId,
        "is-loading": a.isLoading,
        "scroll-behaviour": a.scrollBehaviour,
        "current-page": a.currentPage,
        "page-count": a.pageCount,
        onSetIsAnimationActive: n[3] || (n[3] = i => e.isAnimationActive = i),
        onPageChanged: n[4] || (n[4] = i => e.emit("page-changed", i))
    }, null, 8, ["block-id", "is-loading", "scroll-behaviour", "current-page", "page-count"])], 512)])) : (m(),
    y("div", D0, [Ae(e.ProductListEmptyState, {
        "text-color-vars": a.textColorVars,
        "empty-page-message": e.emptyPageMessage
    }, null, 8, ["text-color-vars", "empty-page-message"])]))], 512)], 2)], 14, w0)
}
const A0 = oe(_0, [["render", M0], ["__scopeId", "data-v-1227024b"]])
  , O0 = t => {
    const n = u( () => t.isMobileView ? "mobile" : "desktop")
      , a = u( () => t.data.settings?.styles)
      , e = u( () => t.data.settings?.imageHoverEffect)
      , r = u( () => t.data.textColorVars)
      , o = u( () => t.data[n.value]?.columnCount)
      , i = u( () => t.data[n.value]?.columnGap)
      , s = u( () => t.data[n.value]?.rowGap)
      , l = u( () => t.data.productCategoryId)
      , d = u( () => t.data.isButtonEnabled ?? !1)
      , p = u( () => t.data.buttonDisplay)
      , g = u( () => t.data.buttonText)
      , v = u( () => t.data.buttonStyle)
      , f = u( () => t.data.buttonType)
      , b = u( () => t.data.buttonBorderWidth)
      , D = u( () => t.data.ribbonStyle)
      , T = u( () => t.data.imageRatio)
      , w = u( () => t.data.background.color)
      , S = u( () => t.data.isCategoryListEnabled)
      , B = u( () => t.data.isFullWidth)
      , I = u( () => t.data.isTotalProductCountShown)
      , R = u( () => t.data.isListCentered)
      , $ = u( () => t.data.isButtonFullWidth)
      , G = u( () => ({
        ...t.data.productSorting,
        sortingOptions: t.data.productSorting?.sortingOptions?.filter(M => M.isEnabled)
    }))
      , ee = u( () => t.data.productsPerPage || Hb[o.value || 2])
      , K = u( () => t.data.scrollBehaviour || sn.PAGINATION);
    return {
        textColorVars: r,
        blockStyle: a,
        imageHoverEffect: e,
        columnCount: o,
        productsPerPage: ee,
        productCategoryId: l,
        isButtonEnabled: d,
        buttonDisplay: p,
        buttonText: g,
        buttonStyle: v,
        buttonType: f,
        buttonBorderWidth: b,
        ribbonStyle: D,
        imageRatio: T,
        backgroundColor: w,
        isCategoryListEnabled: S,
        productSorting: G,
        isFullWidth: B,
        isTotalProductCountShown: I,
        columnGap: i,
        rowGap: s,
        isListCentered: R,
        isButtonFullWidth: $,
        scrollBehaviour: K
    }
}
  , x0 = re({
    __name: "BlockEcommerceProductListProviderUser",
    props: {
        blockId: {},
        data: {},
        lcp: {},
        ecommerceTranslations: {},
        currentLocale: {
            default: mn
        },
        blocks: {
            default: () => ({})
        },
        isCartVisible: {
            type: Boolean,
            default: !1
        },
        isInPreviewMode: {
            type: Boolean,
            default: !1
        },
        isMobileView: {
            type: Boolean,
            default: !1
        },
        isDynamicProductPageEnabled: {
            type: Boolean,
            default: !1
        }
    },
    setup(t, {expose: n}) {
        n();
        const a = t
          , {meta: e, siteId: r, hasGoogleAdsApp: o, pageData: i} = kt()
          , {isLoading: s, legacyProductPages: l, isShoppingCartOpen: d, shoppingCartItems: p, categories: g, fetchCategories: v, setCategories: f, setIsLoading: b, setIsLoaded: D, isCategoriesLoaded: T, setShoppingCartOpen: w, setShoppingCartItems: S, setIsCheckoutLoading: B, setSelectedBookingProduct: I, setVariantsQuantity: R, setIsCategoriesLoaded: $, canAddToCart: G, dynamicPageTemplateData: ee} = Ia({
            blockId: a.blockId
        })
          , {openEcommerceModal: K, closeEcommerceModal: M, setProductPreviewData: j} = Ca()
          , {initiateCheckout: q} = io()
          , {blockStyle: Y, textColorVars: L, columnCount: _, productsPerPage: A, productCategoryId: P, isButtonEnabled: H, buttonDisplay: k, buttonText: h, buttonStyle: W, buttonType: U, buttonBorderWidth: te, ribbonStyle: Q, imageRatio: V, productSorting: O, backgroundColor: pe, isCategoryListEnabled: fe, imageHoverEffect: ue, isFullWidth: Oe, isTotalProductCountShown: he, columnGap: X, rowGap: ce, isButtonFullWidth: Me, isListCentered: de, scrollBehaviour: Ue} = O0(a)
          , nt = E(1)
          , Ft = E([])
          , St = E(0)
          , Tt = E(P.value)
          , Ee = E([])
          , je = E(a.data.productSorting?.enabled && a.data.productSorting?.sortingOptions?.find( ({isEnabled: Qe}) => Qe)?.value || "")
          , ot = E(!1)
          , rt = u( () => Math.ceil(St.value / A.value))
          , vt = u( () => a.isMobileView ? a.data.mobile?.isHidden : a.data.desktop?.isHidden)
          , gt = async ({sort: Qe, page: Bt, categoryId: Wt=Tt.value, toDate: va=i.value.buildDate ? new Date(Number.parseInt(i.value.buildDate, 10)).toISOString() : void 0}) => {
            const ca = Kn(e.value);
            if (ca) {
                D(!1),
                b(!0);
                try {
                    const tn = Ue.value === sn.PAGINATION ? (Bt - 1) * A.value : 0
                      , Ga = Ue.value === sn.PAGINATION ? A.value : Bt * A.value
                      , Ed = (await Promise.allSettled([v(ca, fe.value), Mp(ca, {
                        offset: tn,
                        limit: Ga,
                        collectionId: Wt,
                        sort: !Qe && Wt ? "order=ASC&sort_by=collection_order" : Qe,
                        toDate: va
                    })])).map(Un => Un.status === "fulfilled" ? Un.value : {})
                      , [qs,ei] = Ed
                      , Dd = ei.products.map( ({id: Un}) => Un)
                      , zs = await cu(ca, Dd);
                    qs.collections?.length && f(qs.collections.sort( (Un, Md) => Un.title.localeCompare(Md.title))),
                    Ft.value = ei.products,
                    St.value = ei.count,
                    Ee.value = zs,
                    R(zs)
                } catch (tn) {
                    console.error(tn)
                } finally {
                    b(!1),
                    D(!0),
                    $(!0)
                }
            }
        }
          , Lt = E(!1)
          , F = u( () => `store-page-${a.blockId}`)
          , Z = u( () => !!Ft.value?.length)
          , Se = u( () => s.value || !Lt.value)
          , Be = Qe => {
            nt.value = Qe,
            gt({
                page: Qe,
                sort: je.value,
                categoryId: Tt.value
            })
        }
          , We = Qe => {
            const Bt = Qe.target.value;
            je.value = Bt,
            gt({
                sort: Bt,
                page: nt.value,
                categoryId: Tt.value
            })
        }
          , _t = (Qe, Bt) => {
            if (nt.value = 1,
            Tt.value = Qe,
            !a.isInPreviewMode) {
                const Wt = Ou(Qe);
                window.history.pushState({}, "", Wt)
            }
            gt({
                sort: je.value,
                page: Bt || nt.value,
                categoryId: Tt.value
            })
        }
          , Ht = Qe => {
            Tt.value !== Qe && _t(Qe)
        }
          , me = async Qe => {
            if (a.isInPreviewMode) {
                K("EcommerceMessageButtonDisabled");
                return
            }
            const Bt = Qe.custom_fields?.some(va => va.is_required);
            if (Qe.options.length || Bt) {
                const va = Object.values(l.value).find(Ga => Ga.productId === Qe.id)
                  , ca = Object.keys(a.blocks).filter(Ga => a.blocks[Ga].type === "BlockEcommerceProduct")
                  , tn = a.isDynamicProductPageEnabled ? ca.find(Ga => ee.value?.blocks?.includes(Ga)) : ca.find(Ga => va?.blocks?.includes(Ga));
                if (!tn) {
                    if (!va) {
                        window.location.assign("/");
                        return
                    }
                    window.location.assign(`/${Qe.seo_settings.slug}`);
                    return
                }
                j(a.blocks[tn], Qe.id),
                K("EcommerceProductPreview");
                return
            }
            const Wt = [{
                ...Qe,
                variants: [Qe.variants[0]]
            }];
            if (await M(),
            Qe.type.value === st.BOOKING) {
                I(Qe),
                K("EcommerceBookingEventSelect");
                return
            }
            if (Qe.type.value === st.DIGITAL && p.value.some(ca => ca.id === Qe.id)) {
                w(!0);
                return
            }
            if (a.isCartVisible) {
                if (S([...p.value, ...Wt]),
                o.value && Go("add_to_cart", $c(Wt[0])),
                d.value)
                    return;
                w(!0)
            } else
                B(!0),
                await q(Wt).then( () => {
                    B(!1)
                }
                )
        }
          , Re = () => {
            const Bt = new URLSearchParams(window.location.search).get(F.value) || "1"
              , Wt = Number.parseInt(Bt, 10);
            Wt !== nt.value && (nt.value = Wt)
        }
          , De = () => {
            const Bt = new URLSearchParams(window.location.search).get("category");
            Bt === Tt.value || !Bt || (Tt.value = Bt,
            gt({
                sort: je.value,
                page: nt.value,
                categoryId: Bt || ""
            }))
        }
          , xt = () => {
            Re(),
            De()
        }
          , Yt = () => {
            if (typeof window > "u")
                return;
            const Qe = new URLSearchParams(window.location.search)
              , Bt = Qe.get(F.value) || "1"
              , Wt = Number.parseInt(Bt, 10)
              , va = Qe.get("category")
              , ca = Wt !== nt.value;
            if (ca && !va)
                nt.value = Wt,
                Be(Wt);
            else if (va) {
                const tn = ca ? Wt : nt.value;
                _t(va, tn)
            } else
                gt({
                    sort: je.value,
                    page: nt.value,
                    categoryId: Tt.value
                });
            ot.value = !0
        }
        ;
        Pe( () => {
            Lt.value = !0,
            window.addEventListener("popstate", () => {
                xt()
            }
            )
        }
        ),
        Kt( () => {
            window.removeEventListener("popstate", xt)
        }
        ),
        Fe(vt, async () => {
            await Nt(),
            !vt.value && !ot.value && Yt()
        }
        , {
            immediate: !0
        });
        const en = {
            props: a,
            meta: e,
            siteId: r,
            hasGoogleAdsApp: o,
            pageData: i,
            isEcommerceLoading: s,
            legacyProductPages: l,
            isShoppingCartOpen: d,
            shoppingCartItems: p,
            categories: g,
            fetchCategories: v,
            setCategories: f,
            setIsLoading: b,
            setIsLoaded: D,
            isCategoriesLoaded: T,
            setShoppingCartOpen: w,
            setShoppingCartItems: S,
            setIsCheckoutLoading: B,
            setSelectedBookingProduct: I,
            setVariantsQuantity: R,
            setIsCategoriesLoaded: $,
            canAddToCart: G,
            dynamicPageTemplateData: ee,
            openEcommerceModal: K,
            closeEcommerceModal: M,
            setProductPreviewData: j,
            initiateCheckout: q,
            blockStyle: Y,
            textColorVars: L,
            columnCount: _,
            productsPerPage: A,
            productCategoryId: P,
            isButtonEnabled: H,
            buttonDisplay: k,
            buttonText: h,
            buttonStyle: W,
            buttonType: U,
            buttonBorderWidth: te,
            ribbonStyle: Q,
            imageRatio: V,
            productSorting: O,
            backgroundColor: pe,
            isCategoryListEnabled: fe,
            imageHoverEffect: ue,
            isFullWidth: Oe,
            isTotalProductCountShown: he,
            columnGap: X,
            rowGap: ce,
            isButtonFullWidth: Me,
            isListCentered: de,
            scrollBehaviour: Ue,
            currentPage: nt,
            products: Ft,
            totalProductCount: St,
            currentCategoryId: Tt,
            variantsQuantity: Ee,
            sorting: je,
            isInitialDataFetched: ot,
            pageCount: rt,
            isBlockHidden: vt,
            fetchListProducts: gt,
            isClientLoaded: Lt,
            blockStorePageQuery: F,
            isProductListShown: Z,
            isLoading: Se,
            handlePageChange: Be,
            handleSortChange: We,
            handleCategoryChange: _t,
            handleCategoryClick: Ht,
            handleButtonClick: me,
            handleBrowserNavigationPageChange: Re,
            handleBrowserNavigationCategoryChange: De,
            handleWindowPopState: xt,
            getInitialData: Yt,
            BlockEcommerceProductList: A0
        };
        return Object.defineProperty(en, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        en
    }
});
function B0(t, n, a, e, r, o) {
    return m(),
    z(e.BlockEcommerceProductList, {
        "block-id": a.blockId,
        "block-style": e.blockStyle,
        "text-color-vars": e.textColorVars,
        "is-product-list-shown": e.isProductListShown,
        "products-per-page": e.productsPerPage,
        "column-count": e.columnCount,
        "page-count": e.pageCount,
        "total-product-count": e.totalProductCount,
        "current-page": e.currentPage,
        "legacy-product-pages": e.legacyProductPages,
        "product-category-id": e.currentCategoryId,
        "is-button-enabled": e.isButtonEnabled,
        "button-display": e.buttonDisplay,
        "button-text": e.buttonText,
        "button-style": e.buttonStyle,
        "button-type": e.buttonType,
        "button-border-width": e.buttonBorderWidth,
        "is-loading": e.isLoading,
        "is-categories-loaded": e.isCategoriesLoaded,
        "ribbon-style": e.ribbonStyle,
        products: e.products,
        translations: a.ecommerceTranslations,
        "image-ratio": e.imageRatio,
        "image-hover-effect": e.imageHoverEffect,
        "is-eager": a.lcp.type === "block-ecommerce-product-list" && a.lcp.id === a.blockId,
        "site-id": e.siteId,
        "variants-quantity": e.variantsQuantity,
        "product-sorting": e.productSorting,
        sorting: e.sorting,
        "background-color": e.backgroundColor,
        "is-category-list-enabled": e.isCategoryListEnabled,
        categories: e.categories,
        "is-full-width": e.isFullWidth,
        "is-total-product-count-shown": e.isTotalProductCountShown,
        "column-gap": e.columnGap,
        "row-gap": e.rowGap,
        "is-category-item-link-disabled": a.isInPreviewMode,
        "is-button-full-width": e.isButtonFullWidth,
        "is-list-centered": e.isListCentered,
        "is-mobile-view": a.isMobileView,
        "scroll-behaviour": e.scrollBehaviour,
        "is-cart-visible": a.isCartVisible,
        "can-add-to-cart": e.canAddToCart,
        "is-dynamic-product-page-enabled": a.isDynamicProductPageEnabled,
        onPageChanged: e.handlePageChange,
        onSortChanged: e.handleSortChange,
        onButtonClick: e.handleButtonClick,
        onCategoryClick: e.handleCategoryClick
    }, null, 8, ["block-id", "block-style", "text-color-vars", "is-product-list-shown", "products-per-page", "column-count", "page-count", "total-product-count", "current-page", "legacy-product-pages", "product-category-id", "is-button-enabled", "button-display", "button-text", "button-style", "button-type", "button-border-width", "is-loading", "is-categories-loaded", "ribbon-style", "products", "translations", "image-ratio", "image-hover-effect", "is-eager", "site-id", "variants-quantity", "product-sorting", "sorting", "background-color", "is-category-list-enabled", "categories", "is-full-width", "is-total-product-count-shown", "column-gap", "row-gap", "is-category-item-link-disabled", "is-button-full-width", "is-list-centered", "is-mobile-view", "scroll-behaviour", "is-cart-visible", "can-add-to-cart", "is-dynamic-product-page-enabled"])
}
const L0 = oe(x0, [["render", B0]])
  , xu = ({move: t={
    swipe: !1,
    drag: !1
}, onMoveLeft: n= () => {}
, onMoveRight: a= () => {}
, onMoveUp: e= () => {}
, onMoveDown: r= () => {}
}) => {
    let o = null
      , i = null;
    const s = t.swipe && t.drag
      , l = t.swipe || t.drag;
    function d(T) {
        return T.touches
    }
    function p(T) {
        const w = d(T)[0];
        o = w.clientX,
        i = w.clientY
    }
    function g(T) {
        const w = new Image;
        w.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=",
        T.dataTransfer.setDragImage(w, 0, 0),
        o = T.clientX,
        i = T.clientY
    }
    const v = (T, w) => {
        Math.abs(T) > Math.abs(w) ? T > 0 ? n() : a() : w > 0 ? e() : r(),
        o = null,
        i = null
    }
      , f = T => {
        if (!o || !i)
            return;
        const w = T.touches[0].clientX
          , S = T.touches[0].clientY
          , B = o - w
          , I = i - S;
        v(B, I)
    }
      , b = T => {
        if (!o || !i)
            return;
        const w = o - T.clientX
          , S = i - T.clientY;
        v(w, S)
    }
    ;
    return {
        enableMoveEvents: (T=!0, w=null) => {
            const S = w === null ? document : w
              , B = T ? "addEventListener" : "removeEventListener";
            if (s)
                S[B]("touchstart", p, !1),
                S[B]("touchmove", f, !1),
                S[B]("dragstart", g, !1),
                S[B]("drag", b, !1);
            else if (l) {
                const I = t.swipe ? p : g
                  , R = t.swipe ? f : b;
                S[B](t.swipe ? "touchstart" : "dragstart", I, !1),
                S[B](t.swipe ? "touchmove" : "drag", R, !1)
            }
        }
    }
}
  , R0 = re({
    __name: "Carousel",
    props: {
        mediaItems: {},
        productTitle: {},
        arrowsColor: {
            default: "unset"
        },
        navigationThumbnailArrowsColor: {
            default: "unset"
        },
        galleryPlacement: {
            default: "left"
        },
        imageRatio: {
            default: "unset"
        },
        imageBorderRadius: {
            default: "unset"
        },
        isEager: {
            type: Boolean,
            default: !1
        },
        variantImage: {
            default: null
        },
        isQuickPreview: {
            type: Boolean,
            default: !1
        },
        isVariantImagePreselected: {
            type: Boolean,
            default: !1
        },
        siteId: {
            default: ""
        }
    },
    emits: ["image-click"],
    setup(t, {expose: n}) {
        n();
        const a = `${Vt}/placeholder.png`
          , e = t
          , r = {
            url: a,
            type: "image"
        }
          , o = E()
          , i = E(0)
          , s = E("")
          , l = E(0)
          , d = E(0)
          , p = An( () => e.mediaItems.length ? e.mediaItems : [r])
          , g = u( () => e.galleryPlacement === "left")
          , v = u( () => {
            let P = 0;
            switch (!0) {
            case i.value < (g.value ? 920 : 900):
                P = 4;
                break;
            case i.value < (g.value ? 1060 : 1020):
                P = 5;
                break;
            case i.value < (g.value ? 1250 : 1160):
                P = 6;
                break;
            case i.value < (g.value ? 1400 : 1320):
                P = 7;
                break;
            default:
                P = g.value ? 7 : 8
            }
            return d.value !== 0 && d.value + P < e.mediaItems.length ? P - 1 : P
        }
        )
          , f = u( () => e.mediaItems.slice(d.value, d.value + v.value))
          , b = u( () => f.value.some(P => P.url === e.mediaItems[l.value].url))
          , D = u( () => e.mediaItems.length > 1)
          , T = u( () => D.value && !e.isQuickPreview)
          , w = u( () => e.mediaItems.length < v.value ? !1 : d.value + v.value < e.mediaItems.length)
          , S = u( () => {
            switch (e.imageRatio) {
            case ua.COVER:
            case ua.LANDSCAPE:
            case ua.PORTRAIT:
                return "cover";
            default:
                return "contain"
            }
        }
        )
          , B = u( () => e.isQuickPreview ? nm : rm)
          , I = u( () => {
            const P = g.value ? om : B.value;
            switch (e.imageRatio) {
            case ua.LANDSCAPE:
                return P * .75;
            case ua.PORTRAIT:
                return P * 1.333;
            default:
                return
            }
        }
        )
          , R = u( () => ({
            "--image-max-width": `${B.value}px`,
            "--image-max-width-small": `${tl}px`,
            "--image-object-fit": S.value,
            "--image-border-radius": S.value === "cover" ? e.imageBorderRadius : 0,
            "--arrow-color": e.arrowsColor,
            "--thumbnail-arrow-color": e.navigationThumbnailArrowsColor
        }))
          , $ = () => {
            e.mediaItems.length - l.value < v.value ? d.value = e.mediaItems.length - v.value : d.value = l.value
        }
          , G = () => {
            i.value = window.innerWidth,
            v.value < e.mediaItems.length && $()
        }
          , ee = P => f.value[P].url === e.mediaItems[l.value].url
          , K = P => {
            l.value = e.mediaItems.findIndex(H => H.url === f.value[P].url)
        }
          , M = () => {
            s.value = "right",
            l.value = l.value === e.mediaItems.length - 1 ? 0 : l.value + 1,
            b.value || (d.value + v.value === e.mediaItems.length ? d.value = 0 : ($(),
            v.value !== f.value.length && $()))
        }
          , j = () => {
            s.value = "left",
            l.value = l.value === 0 ? e.mediaItems.length - 1 : l.value - 1,
            b.value || (d.value === 0 ? d.value = e.mediaItems.length - v.value : $())
        }
          , q = () => {
            const P = v.value;
            d.value += 1;
            const H = v.value;
            P !== H && w.value && q()
        }
          , Y = () => {
            d.value -= 1
        }
          , L = P => {
            if (!D.value)
                return;
            const {enableMoveEvents: H} = xu({
                move: {
                    drag: !1,
                    swipe: !0
                },
                onMoveLeft: M,
                onMoveRight: j
            });
            H(P, o.value)
        }
          , _ = () => {
            const P = e.mediaItems.findIndex(H => H.url === e.variantImage);
            P > -1 && (l.value = P)
        }
        ;
        Fe( () => e.variantImage, () => {
            _(),
            b.value || $()
        }
        ),
        Pe( () => {
            i.value = window.innerWidth,
            window.addEventListener("resize", G),
            e.isVariantImagePreselected && _(),
            L(!0)
        }
        ),
        Kt( () => {
            window.removeEventListener("resize", G),
            L(!1)
        }
        );
        const A = {
            PRODUCT_PLACEHOLDER_IMAGE: a,
            props: e,
            placeholderImageData: r,
            carouselRef: o,
            windowWidth: i,
            slideDirection: s,
            currentIndex: l,
            imageListStartIndex: d,
            mediaItems: p,
            isGalleryLeft: g,
            imagePreviewAmount: v,
            thumbnails: f,
            isThumbnailVisible: b,
            isMoreThanOneImage: D,
            isArrowsShown: T,
            isRightImageArrowShown: w,
            objectFit: S,
            imageMaxWidth: B,
            imageMaxHeight: I,
            carouselStyle: R,
            presetThumbnailPosition: $,
            resizeEventHandler: G,
            isImageMatch: ee,
            handleThumbnailClick: K,
            goToNextSlide: M,
            goToPreviousSlide: j,
            moveImageListRight: q,
            moveImageListLeft: Y,
            enableCarouselMoveEvents: L,
            setVariantImage: _,
            ProductMediaElement: Wo,
            get PRODUCT_IMAGE_MAX_WIDTH_SMALL_PX() {
                return tl
            }
        };
        return Object.defineProperty(A, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        A
    }
})
  , N0 = C("span", {
    class: "product-carousel__arrow product-carousel__arrow--left"
}, null, -1)
  , H0 = [N0]
  , V0 = C("span", {
    class: "product-carousel__arrow product-carousel__arrow--right"
}, null, -1)
  , U0 = [V0]
  , F0 = ["onClick"]
  , j0 = {
    class: "product-carousel__dots-wrapper"
}
  , G0 = ["onClick"];
function Y0(t, n, a, e, r, o) {
    const i = lt("qa");
    return m(),
    y("div", {
        class: J(["product-carousel", {
            "product-carousel--left": e.isGalleryLeft
        }]),
        style: ze(e.carouselStyle)
    }, [C("div", {
        ref: "carouselRef",
        class: J(`
				product-carousel__image-wrapper
				product-carousel__image-wrapper--${a.imageRatio}${e.isGalleryLeft ? "-left" : ""}
			`)
    }, [e.isArrowsShown ? (m(),
    y(ge, {
        key: 0
    }, [se((m(),
    y("button", {
        class: "product-carousel__slider-button product-carousel__slider-button--left",
        onClick: e.goToPreviousSlide
    }, H0)), [[i, "product-carousel-button-prev"]]), se((m(),
    y("button", {
        class: "product-carousel__slider-button product-carousel__slider-button--right",
        onClick: e.goToNextSlide
    }, U0)), [[i, "product-carousel-button-next"]])], 64)) : x("", !0), Ae(ra, {
        name: `slide-${e.slideDirection}`,
        mode: "out-in",
        class: "product-carousel__image-content"
    }, {
        default: ye( () => [(m(),
        z(e.ProductMediaElement, {
            key: e.mediaItems[e.currentIndex].url,
            src: e.mediaItems[e.currentIndex].url,
            "media-type": e.mediaItems[e.currentIndex].type,
            alt: a.productTitle,
            class: "product-carousel__image product-carousel__main-image",
            "is-eager": a.isEager,
            "object-fit": e.objectFit,
            width: e.imageMaxWidth,
            height: e.imageMaxHeight,
            "enable-srcset": "",
            onClick: n[0] || (n[0] = s => t.$emit("image-click", e.currentIndex))
        }, null, 8, ["src", "media-type", "alt", "is-eager", "object-fit", "width", "height"]))]),
        _: 1
    }, 8, ["name"])], 2), e.isMoreThanOneImage ? (m(),
    y(ge, {
        key: 0
    }, [a.isQuickPreview ? x("", !0) : (m(),
    y("div", {
        key: 0,
        class: J(["product-carousel__image-list", {
            "product-carousel__image-list-left": e.isGalleryLeft
        }])
    }, [e.imageListStartIndex !== 0 ? se((m(),
    y("button", {
        key: 0,
        class: J(["product-carousel__image-arrow", {
            "product-carousel__image-arrow--left": !e.isGalleryLeft,
            "product-carousel__image-arrow--top": e.isGalleryLeft
        }]),
        onClick: e.moveImageListLeft
    }, null, 2)), [[i, "product-carousel-image-button-left"]]) : x("", !0), C("div", {
        class: J({
            "product-carousel__image-list-element-wrapper-left": e.isGalleryLeft
        })
    }, [(m(!0),
    y(ge, null, Ce(e.thumbnails, (s, l) => (m(),
    y("button", {
        key: `image-${l}-${s.url}`,
        class: J(["product-carousel__image-list-element", {
            "product-carousel__image-list-element--active": e.isImageMatch(l)
        }]),
        onClick: d => e.handleThumbnailClick(l)
    }, [Ae(e.ProductMediaElement, {
        src: s.url,
        alt: a.productTitle,
        "media-type": s.type,
        class: "product-carousel__image",
        "is-eager": a.isEager,
        "object-fit": a.imageRatio,
        "is-video-autoplay-disabled": "",
        "site-id": a.siteId,
        width: e.PRODUCT_IMAGE_MAX_WIDTH_SMALL_PX,
        height: e.PRODUCT_IMAGE_MAX_WIDTH_SMALL_PX
    }, null, 8, ["src", "alt", "media-type", "is-eager", "object-fit", "site-id", "width", "height"])], 10, F0))), 128))], 2), e.isRightImageArrowShown ? se((m(),
    y("button", {
        key: 1,
        class: J(["product-carousel__image-arrow", {
            "product-carousel__image-arrow--right": !e.isGalleryLeft,
            "product-carousel__image-arrow--bottom": e.isGalleryLeft
        }]),
        onClick: e.moveImageListRight
    }, null, 2)), [[i, "product-carousel-image-button-right"]]) : x("", !0)], 2)), C("div", j0, [(m(!0),
    y(ge, null, Ce(e.mediaItems, (s, l) => (m(),
    y("button", {
        key: `image-dot-${l}`,
        class: "product-carousel__dot-button",
        onClick: d => e.currentIndex = l
    }, [C("span", {
        class: J(["product-carousel__dot", {
            "product-carousel__dot--active": l === e.currentIndex
        }])
    }, null, 2)], 8, G0))), 128))])], 64)) : x("", !0)], 6)
}
const W0 = oe(R0, [["render", Y0]])
  , $0 = re({
    __name: "OptionSelect",
    props: {
        title: {},
        labelKey: {
            default: "value"
        },
        options: {
            default: () => ({})
        },
        value: {
            default: ""
        }
    },
    emits: ["set-value"],
    setup(t, {expose: n, emit: a}) {
        n();
        const e = a
          , o = {
            emit: e,
            updateSelectedValue: i => {
                const s = i.target?.value;
                e("set-value", s)
            }
        };
        return Object.defineProperty(o, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        o
    }
})
  , q0 = {
    class: "option-select"
}
  , z0 = ["for"]
  , Z0 = {
    class: "option-select__select-wrapper"
}
  , K0 = ["id", "value"]
  , Q0 = ["value"];
function X0(t, n, a, e, r, o) {
    const i = lt("qa");
    return m(),
    y("div", q0, [C("label", {
        for: `option-${a.title}`,
        class: "option-select__label"
    }, ae(a.title), 9, z0), C("div", Z0, [se((m(),
    y("select", {
        id: `option-${a.title}`,
        value: a.value,
        class: "option-select__select",
        onChange: n[0] || (n[0] = s => e.updateSelectedValue(s))
    }, [(m(!0),
    y(ge, null, Ce(a.options, (s, l) => (m(),
    y("option", {
        key: `option-${l}`,
        value: s.id
    }, ae(s[a.labelKey]), 9, Q0))), 128))], 40, K0)), [[i, "product-section-select-button"]])])])
}
const J0 = oe($0, [["render", X0], ["__scopeId", "data-v-9731672d"]])
  , ew = {
    props: {
        imageBorderRadius: {
            type: String,
            default: "0"
        },
        textAlign: {
            type: String,
            default: ""
        }
    },
    computed: {
        computedStyles() {
            return {
                "--image-border-radius": this.imageBorderRadius
            }
        }
    }
}
  , Bu = t => (sa("data-v-13b9db75"),
t = t(),
la(),
t)
  , tw = Bu( () => C("div", {
    class: "skeleton-loader__image"
}, null, -1))
  , aw = Bu( () => C("div", {
    class: "skeleton-loader__title skeleton-loader__text"
}, null, -1));
function nw(t, n, a, e, r, o) {
    return m(),
    y("div", {
        class: "skeleton-loader",
        style: ze(o.computedStyles)
    }, [tw, C("div", {
        class: J(["skeleton-loader__wrapper", {
            "skeleton-loader__wrapper--center": a.textAlign === "center"
        }])
    }, [aw, (m(),
    y(ge, null, Ce(10, i => C("div", {
        key: i,
        class: "skeleton-loader__text"
    })), 64))], 2)], 4)
}
const rw = oe(ew, [["render", nw], ["__scopeId", "data-v-13b9db75"]])
  , ow = re({
    name: "QuantityPicker",
    props: {
        qaSelector: {
            type: String,
            default: ""
        },
        isStockAvailable: {
            type: Boolean,
            default: !0
        },
        quantity: {
            type: Number,
            required: !0
        },
        size: {
            type: Number,
            default: 48
        },
        fontSize: {
            type: Number,
            default: 16
        },
        isCartStyle: {
            type: Boolean,
            default: !1
        },
        isInputDisabled: {
            type: Boolean,
            default: !1
        },
        isLimitReached: {
            type: Boolean,
            default: !1
        }
    },
    emits: ["quantity-change"],
    data() {
        return {
            inputValue: this.quantity
        }
    },
    computed: {
        computedStyles() {
            return {
                "--size": `${this.size}px`,
                "--font-size": `${this.fontSize}px`
            }
        },
        isIncreaseDisabled() {
            return !this.isStockAvailable || this.isLimitReached
        }
    },
    watch: {
        quantity(t) {
            this.inputValue = t
        }
    },
    methods: {
        handleQuantityInput(t) {
            const n = t.target?.value;
            if (n.match(wf))
                this.$emit("quantity-change", Number(t.target.value));
            else if (n === "")
                return;
            this.inputValue = this.quantity
        },
        handleEmptyInput(t) {
            t.target?.value === "" && (this.$emit("quantity-change", 1),
            this.inputValue = 1)
        }
    }
})
  , iw = ["disabled"]
  , sw = ["disabled"];
function lw(t, n, a, e, r, o) {
    const i = lt("qa");
    return m(),
    y("span", {
        class: J(["quantity-picker", {
            "quantity-picker--cart-style": t.isCartStyle
        }]),
        style: ze(t.computedStyles)
    }, [se((m(),
    y("button", {
        class: J(["quantity-picker__control", {
            "quantity-picker__control--rounded quantity-picker__control--bigger": t.isCartStyle
        }]),
        onClick: n[0] || (n[0] = s => t.$emit("quantity-change", t.quantity - 1))
    }, [qe(" - ")], 2)), [[i, `${t.qaSelector}-btn-decrease`]]), se(C("input", {
        "onUpdate:modelValue": n[1] || (n[1] = s => t.inputValue = s),
        disabled: t.isInputDisabled,
        class: J(["quantity-picker__amount", {
            "quantity-picker__amount--borderless": t.isCartStyle
        }]),
        onInput: n[2] || (n[2] = (...s) => t.handleQuantityInput && t.handleQuantityInput(...s)),
        onBlur: n[3] || (n[3] = (...s) => t.handleEmptyInput && t.handleEmptyInput(...s))
    }, null, 42, iw), [[Oc, t.inputValue], [i, `${t.qaSelector}-text-qty`]]), se((m(),
    y("button", {
        class: J(["quantity-picker__control", {
            "quantity-picker__control--rounded quantity-picker__control--bigger": t.isCartStyle
        }]),
        disabled: t.isIncreaseDisabled,
        onClick: n[4] || (n[4] = s => t.$emit("quantity-change", t.quantity + 1))
    }, [qe(" + ")], 10, sw)), [[i, `${t.qaSelector}-btn-increaseq`]])], 6)
}
const Lu = oe(ow, [["render", lw], ["__scopeId", "data-v-bab50c5a"]])
  , cw = re({
    __name: "AdditionalInfoSections",
    props: {
        productDescription: {},
        data: {}
    },
    setup(t, {expose: n}) {
        n();
        const a = E(0)
          , e = E({})
          , s = {
            activeTab: a,
            infoButtonRef: e,
            setActiveTab: l => {
                if (a.value === l) {
                    a.value = -1;
                    return
                }
                a.value = l,
                setTimeout( () => {
                    e.value[l].scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    })
                }
                , 200)
            }
            ,
            unsetHeightForTransition: l => {
                l.style.height = "0"
            }
            ,
            setScrollHeightForTransition: l => {
                l.style.height = `${l.scrollHeight}px`,
                setTimeout( () => {
                    l.style.height = ""
                }
                , 200)
            }
        };
        return Object.defineProperty(s, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        s
    }
})
  , uw = {
    class: "additional-info-sections"
}
  , dw = ["id"]
  , mw = ["aria-expanded", "aria-controls", "onClick"]
  , gw = {
    class: "additional-info-sections__item-title"
}
  , pw = ["id", "innerHTML"];
function vw(t, n, a, e, r, o) {
    return m(),
    y("section", uw, [(m(!0),
    y(ge, null, Ce(a.data, (i, s) => (m(),
    y("div", {
        id: i.id,
        key: i.id,
        class: "additional-info-sections__item"
    }, [C("button", {
        ref_for: !0,
        ref: l => e.infoButtonRef[s] = l,
        class: "additional-info-sections__button",
        "aria-expanded": e.activeTab === s,
        "aria-controls": `additional-info-${i.id}`,
        onClick: l => e.setActiveTab(s)
    }, [C("h2", gw, ae(i.title), 1), C("span", {
        class: J(["additional-info-sections__icon", {
            "additional-info-sections__icon--active": e.activeTab === s
        }])
    }, null, 2)], 8, mw), Ae(ra, {
        name: "accordion",
        onEnter: e.setScrollHeightForTransition,
        onBeforeEnter: e.unsetHeightForTransition,
        onBeforeLeave: e.setScrollHeightForTransition,
        onLeave: e.unsetHeightForTransition
    }, {
        default: ye( () => [se(C("p", {
            id: `additional-info-${i.id}`,
            class: "additional-info-sections__item-description",
            innerHTML: i.description
        }, null, 8, pw), [[da, e.activeTab === s]])]),
        _: 2
    }, 1024)], 8, dw))), 128))])
}
const fw = oe(cw, [["render", vw], ["__scopeId", "data-v-013f5865"]])
  , ec = 700
  , hw = re({
    __name: "CustomField",
    props: {
        customField: {
            default: () => ({})
        },
        translations: {
            default: () => ({})
        },
        isButtonClicked: {
            type: Boolean
        }
    },
    emits: ["update:modelValue"],
    setup(t, {expose: n, emit: a}) {
        n();
        const e = t
          , r = a
          , o = E(!1)
          , i = E("")
          , s = u( () => {
            const g = [];
            return o.value && (e.customField.is_required && !i.value && g.push(e.translations.textIsRequired),
            i.value?.length > ec && g.push(e.translations.textIsTooLong)),
            g
        }
        )
          , l = u( () => e.customField.title.toLowerCase().replace(/\s/g, "-"))
          , d = g => {
            o.value = !0,
            i.value = g.target.value,
            r("update:modelValue", {
                message: i.value,
                errors: s.value.length
            })
        }
        ;
        Pe( () => {
            i.value = e.customField.value || ""
        }
        ),
        Fe( () => e.isButtonClicked, g => {
            g && !o.value && (o.value = !0)
        }
        );
        const p = {
            MESSAGE_MAX_LENTH: ec,
            props: e,
            emit: r,
            isInputDirty: o,
            message: i,
            errorMessages: s,
            fieldId: l,
            handleInputChange: d
        };
        return Object.defineProperty(p, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        p
    }
})
  , yw = {
    class: "custom-field"
}
  , bw = ["for"]
  , _w = ["id", "value"];
function ww(t, n, a, e, r, o) {
    return m(),
    y("div", yw, [C("label", {
        for: e.fieldId
    }, ae(a.customField.title), 9, bw), C("input", {
        id: e.fieldId,
        class: "custom-field__input",
        value: e.message,
        onInput: e.handleInputChange
    }, null, 40, _w), C("div", {
        class: J(["custom-field__error", {
            "custom-field__error--visible": e.errorMessages.length > 0
        }])
    }, ae(e.errorMessages[0] || ""), 3)])
}
const kw = oe(hw, [["render", ww], ["__scopeId", "data-v-a502439a"]])
  , ko = t => [Uc, Vc].includes(t)
  , gi = 5
  , br = 1
  , Sw = re({
    __name: "BlockEcommerceProduct",
    props: {
        blockId: {},
        productData: {},
        blockStyle: {
            default: () => ({})
        },
        textColorVars: {
            default: () => ({})
        },
        blockButtonText: {
            default: ""
        },
        blockButtonStyle: {
            default: () => ({})
        },
        blockButtonType: {
            default: "primary"
        },
        blockButtonBorderWidth: {
            default: 0
        },
        navigationArrowsColor: {
            default: ""
        },
        navigationThumbnailArrowsColor: {
            default: ""
        },
        galleryPlacement: {
            default: ""
        },
        imageRatio: {
            default: "cover"
        },
        imageBorderRadius: {
            default: "0%"
        },
        isLoading: {
            type: Boolean,
            default: !1
        },
        isCheckoutLoading: {
            type: Boolean,
            default: !1
        },
        canAddToCart: {
            type: Function,
            default: () => !0
        },
        isEager: {
            type: Boolean,
            default: !1
        },
        translations: {},
        quantifiedCartItemsList: {
            default: () => []
        },
        isQuantityPickerEnabled: {
            type: Boolean
        },
        legacyProductPages: {
            default: () => ({})
        },
        isQuickPreview: {
            type: Boolean,
            default: !1
        },
        isCartVisible: {
            type: Boolean
        },
        siteId: {},
        shoppingCartItems: {
            default: () => []
        },
        variantsQuantity: {},
        currentPageType: {
            default: "default"
        },
        isMobileView: {
            type: Boolean
        }
    },
    emits: ["buy-button-click", "click-more", "image-click", "open-cart"],
    setup(t, {expose: n, emit: a}) {
        n();
        const e = {
            [Ka]: gr
        }
          , r = [st.BOOKING, st.DIGITAL]
          , o = t
          , i = a
          , s = E(1)
          , l = E("")
          , d = E(!1)
          , p = E(!1)
          , g = E(ha)
          , v = E(!0)
          , f = u( () => ko(o.currentPageType))
          , b = u( () => ({
            normal: o.blockButtonStyle[`grid-button-${o.blockButtonType}-background-color`],
            hover: o.blockButtonStyle[`grid-button-${o.blockButtonType}-background-color-hover`]
        }))
          , D = u( () => ({
            hover: o.blockButtonStyle[`grid-button-${o.blockButtonType}-border-color-hover`],
            normal: o.blockButtonStyle[`grid-button-${o.blockButtonType}-border-color`]
        }))
          , T = u( () => o.blockStyle?.textAlign)
          , w = u( () => o.productData)
          , S = u( () => w.value.options.length ? w.value.options.map(Ee => ({
            ...Ee.values.filter( (je, ot, rt) => rt.findIndex(vt => vt.value === je.value) === ot)
        })) : [])
          , B = u( () => g.value?.variants[0])
          , I = u( () => o.productData.purchasable === void 0 || o.productData.purchasable)
          , R = Ee => {
            const je = B.value?.options.find(ot => ot.option_id === S.value[Ee][0].option_id);
            return Object.values(S.value[Ee]).find(ot => je?.value === ot.value)?.id
        }
          , $ = u( () => g.value.id ? B.value?.prices[0] : w.value?.variants[0].prices[0])
          , G = u( () => o.quantifiedCartItemsList.find(Ee => Ee.product.variants[0].id === B.value?.id)?.quantity || 0)
          , ee = u( () => o.isCartVisible ? s.value + G.value : s.value)
          , K = u( () => B.value?.manage_inventory ? ee.value < Ir({
            variantsQuantity: o.variantsQuantity,
            variantId: B.value?.id
        }) : !0)
          , M = u( () => ({
            ...ma({
                ...o.textColorVars,
                ...o.blockButtonStyle
            })
        }))
          , j = u( () => !w.value?.options.length || w.value?.options.length && g.value)
          , q = u( () => w.value?.type.value === st.BOOKING)
          , Y = u( () => ms.includes(w.value?.type.value))
          , L = u( () => !o.canAddToCart(o.productData, g.value?.variants[0].id))
          , _ = u( () => Y.value && !$.value?.amount)
          , A = u( () => w.value?.type.value === st.DIGITAL && !$.value?.amount)
          , P = u( () => o.blockButtonText ? o.blockButtonText : q.value ? o.translations?.bookNow || "Book now" : A.value && !o.isCartVisible ? o.translations?.download || "Download" : o.translations?.addToBag || "Add to bag")
          , H = u( () => _.value ? o.translations?.free || "Free" : yn({
            amount: $.value?.amount,
            currency: $.value?.currency
        }))
          , k = u( () => w.value?.variants[0].booking_event?.location)
          , h = u( () => ws(w.value, o.translations))
          , W = u( () => B.value?.manage_inventory && Ir({
            variantsQuantity: o.variantsQuantity,
            variantId: B.value?.id
        }) === 0)
          , U = u( () => !!B.value?.manage_inventory)
          , te = u( () => {
            const Ee = Ir({
                variantsQuantity: o.variantsQuantity,
                variantId: B.value?.id
            });
            return W.value || G.value === Ee ? o.translations.outOfStock : `${Ee <= gi ? Ee : `${gi}+`} ${o.translations.inStock} `
        }
        )
          , Q = u( () => [...w.value?.additional_info || []].sort( (Ee, je) => Ee.order - je.order))
          , V = u( () => w.value?.description && !o.isQuickPreview)
          , O = u( () => Q.value && !o.isQuickPreview)
          , pe = u( () => Q.value.length && o.isMobileView)
          , fe = u( () => w.value?.images || w.value?.media || [])
          , ue = u( () => w.value?.custom_fields || [])
          , Oe = u( () => o.isQuantityPickerEnabled && !_.value)
          , he = u( () => !r.includes(w.value?.type.value) && Oe.value && I.value)
          , X = u( () => `${window.location.origin}/${w.value.seo_settings.slug}`)
          , ce = Ee => ({
            ...w.value,
            variants: [Ee]
        })
          , Me = () => {
            if (!w.value)
                return ha;
            if (w.value[uu] === ds) {
                const je = w.value.variants.reduce( (vt, gt) => {
                    const Lt = vt.prices[0]?.sale_amount || vt.prices[0]?.amount
                      , F = gt.prices[0]?.sale_amount || gt.prices[0]?.amount;
                    return Lt <= F ? vt : gt
                }
                )
                  , ot = S.value.map(vt => Object.values(vt).find(gt => je.options.some(Lt => Lt.value === gt.value)) || {})
                  , rt = {
                    ...je,
                    options: [...ot]
                };
                return ce(rt)
            }
            const Ee = w.value.variants.find(je => je.options.every(ot => S.value.some(rt => rt[0].value === ot.value)));
            return ce(Ee || w.value.variants[0])
        }
          , de = () => {
            if (p.value = !0,
            !v.value)
                return;
            const Ee = new Array(s.value).fill(g.value);
            if (Ee[0].type.value === st.DIGITAL && o.shoppingCartItems.some(rt => rt.id === Ee[0].id)) {
                i("open-cart");
                return
            }
            s.value = br,
            i("buy-button-click", Ee)
        }
          , Ue = Ee => {
            s.value = br;
            const je = w.value.options.map(gt => gt.values.find(Lt => Lt.id === Ee)).find(gt => gt) || {}
              , rt = [...B.value?.options.filter(gt => gt.option_id !== je.option_id), je]
              , vt = w.value.variants.find(gt => gt.options.every(Lt => rt.some(F => F.value === Lt.value && F.option_id === Lt.option_id)));
            vt && (g.value = ce(vt))
        }
          , nt = Ee => {
            const je = B.value?.manage_inventory;
            if (d.value = o.shoppingCartItems.length + Ee >= Zn,
            je) {
                const ot = Ir({
                    variantsQuantity: o.variantsQuantity,
                    variantId: B.value?.id
                });
                if (G.value + Ee > ot || d.value) {
                    const rt = Math.min(ot - G.value, Zn - o.shoppingCartItems.length);
                    s.value = rt;
                    return
                }
            } else if (d.value) {
                s.value = Zn - o.shoppingCartItems.length;
                return
            }
            if (Ee <= 0) {
                s.value = br;
                return
            }
            s.value = Ee
        }
          , Ft = (Ee, je) => {
            v.value = Ee.errors === 0,
            v.value && (g.value = {
                ...g.value,
                custom_fields: ue.value.map( (ot, rt) => rt !== je ? ot : {
                    ...ot,
                    value: Ee.message
                })
            })
        }
          , St = () => {
            g.value = Me(),
            v.value = !o.productData?.custom_fields?.some(Ee => Ee.is_required && !Ee.value)
        }
        ;
        Pe( () => {
            w.value && St()
        }
        ),
        Fe(w, (Ee, je) => {
            JSON.stringify(Ee) !== JSON.stringify(je) && St()
        }
        ),
        Fe(g, (Ee, je) => {
            je?.id === -1 && !Ee?.site_product_selection || JSON.stringify(Ee) !== JSON.stringify(je) && Ee?.variants[0].image_url && (l.value = Ee.variants[0].image_url)
        }
        ),
        Fe( () => o.shoppingCartItems, Ee => {
            const je = Ee?.length || 0;
            s.value = br,
            d.value = je + s.value >= Zn
        }
        , {
            immediate: !0
        });
        const Tt = {
            MAX_STOCK_AMOUNT_TO_SHOW: gi,
            DEFAULT_PICKER_VALUE: br,
            CUSTOM_ATTRIBUTES: e,
            PRODUCT_TYPES_WITHOUT_QUANTITY_PICKER: r,
            props: o,
            emit: i,
            selectedQuantity: s,
            variantImage: l,
            isLimitReached: d,
            isButtonClicked: p,
            selectedVariant: g,
            isAddToBagEnabled: v,
            isBlockInProductPage: f,
            buttonBackgroundColor: b,
            buttonBorderColor: D,
            textAlign: T,
            productData: w,
            uniqueOptionSelections: S,
            selectedValueVariant: B,
            isPurchasable: I,
            selectedOption: R,
            priceData: $,
            quantityInCart: G,
            totalQuantitySelected: ee,
            isStockAvailable: K,
            computedStyles: M,
            isPriceShown: j,
            isProductTypeBooking: q,
            isFreeTypeProduct: Y,
            isAddToCartDisabled: L,
            isFreeTypeProductFree: _,
            isFreeDigitalProduct: A,
            buttonText: P,
            formattedPrice: H,
            location: k,
            formattedBookingDuration: h,
            isOutOfStock: W,
            isStockInfoShown: U,
            stockInfoText: te,
            productAdditionalInfo: Q,
            isDescriptionVisible: V,
            isAdditionalInfoVisible: O,
            isDescriptionShownOnMobileWithAdditionalSections: pe,
            productImages: fe,
            customFields: ue,
            isQuantityPickerShown: Oe,
            isQuantityPickerVisible: he,
            productPageUrl: X,
            getProductWithSelectedVariant: ce,
            getInitiallySelectedVariant: Me,
            handleButtonClick: de,
            handleVariantOptionChange: Ue,
            handleQuantityChange: nt,
            handleCustomFieldUpdate: Ft,
            setInitialProductData: St,
            Carousel: W0,
            OptionSelect: J0,
            GridButton: Hn,
            get formatPrice() {
                return yn
            },
            get isProductPriceRangeShown() {
                return Ar
            },
            ProductSkeletonLoader: rw,
            QuantityPicker: Lu,
            AdditionalInfoSections: fw,
            CustomField: kw
        };
        return Object.defineProperty(Tt, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        Tt
    }
})
  , Tw = ["id"]
  , Cw = {
    class: "block-product__image-content-wrapper"
}
  , Iw = ["innerHTML"]
  , Pw = {
    class: "block-product__content-wrapper"
}
  , Ew = {
    class: "block-product__price-data-wrapper"
}
  , Dw = {
    class: "block-product__additional-info"
}
  , Mw = {
    key: 0,
    class: "block-product__price body-large"
}
  , Aw = {
    key: 1,
    class: "block-product__duration body-large"
}
  , Ow = {
    key: 2,
    class: "block-product__location"
}
  , xw = {
    key: 3,
    class: "block-product__input-field-wrapper"
}
  , Bw = {
    key: 4,
    class: "block-product__input-field-wrapper"
}
  , Lw = {
    key: 0,
    class: "block-product__stock-text"
}
  , Rw = {
    key: 0,
    class: "block-product__button-wrapper"
}
  , Nw = ["innerHTML"]
  , Hw = ["href"];
function Vw(t, n, a, e, r, o) {
    const i = lt("qa");
    return m(),
    y("div", Je({
        id: a.blockId,
        class: "block-product-wrapper"
    }, e.CUSTOM_ATTRIBUTES), [a.isLoading ? (m(),
    z(e.ProductSkeletonLoader, {
        key: 0,
        "image-border-radius": a.imageBorderRadius,
        "text-align": e.textAlign
    }, null, 8, ["image-border-radius", "text-align"])) : (m(),
    y("div", {
        key: 1,
        class: J(["block-product", {
            "block-product--centered": e.textAlign === "center",
            "block-product--in-preview": a.isQuickPreview
        }]),
        style: ze(e.computedStyles)
    }, [C("div", Cw, [Ae(e.Carousel, {
        "media-items": e.productImages,
        "product-title": e.productData.title,
        "arrows-color": a.navigationArrowsColor,
        "navigation-thumbnail-arrows-color": a.navigationThumbnailArrowsColor,
        "gallery-placement": a.galleryPlacement,
        "image-ratio": a.imageRatio,
        "image-border-radius": a.imageBorderRadius,
        "is-eager": a.isEager,
        "site-id": a.siteId,
        "variant-image": e.variantImage,
        "is-quick-preview": a.isQuickPreview,
        "is-variant-image-preselected": e.isProductPriceRangeShown(e.productData),
        onImageClick: n[0] || (n[0] = s => t.$emit("image-click", s))
    }, null, 8, ["media-items", "product-title", "arrows-color", "navigation-thumbnail-arrows-color", "gallery-placement", "image-ratio", "image-border-radius", "is-eager", "site-id", "variant-image", "is-quick-preview", "is-variant-image-preselected"]), e.isDescriptionVisible && e.productAdditionalInfo.length && !a.isMobileView ? (m(),
    y("p", {
        key: 0,
        class: "block-product__description block-product__description--under-image",
        innerHTML: e.productData.description
    }, null, 8, Iw)) : x("", !0)]), C("div", Pw, [C("div", Ew, [se((m(),
    z(dn(e.isBlockInProductPage ? "h1" : "h2"), {
        class: "block-product__title"
    }, {
        default: ye( () => [qe(ae(e.productData.title), 1)]),
        _: 1
    })), [[i, "builder-product-section-title"]]), !a.isQuickPreview && e.productData.subtitle ? (m(),
    z(dn(e.isBlockInProductPage ? "h2" : "h3"), {
        key: 0,
        class: "block-product__subtitle"
    }, {
        default: ye( () => [qe(ae(e.productData.subtitle), 1)]),
        _: 1
    })) : x("", !0), Object.keys(e.priceData || {})?.length ? (m(),
    y("p", {
        key: 1,
        class: J(["block-product__price-wrapper", {
            "block-product__price-wrapper--with-duration": e.isProductTypeBooking
        }])
    }, [e.isPriceShown ? (m(),
    y("span", {
        key: 0,
        class: J(["block-product__price body-large", {
            "block-product__price--sale": e.priceData.sale_amount
        }])
    }, ae(e.formattedPrice), 3)) : x("", !0), C("span", Dw, [e.priceData.sale_amount && e.isPriceShown ? (m(),
    y("span", Mw, ae(e.formatPrice({
        amount: e.priceData.sale_amount,
        currency: e.priceData.currency
    })), 1)) : x("", !0), e.isProductTypeBooking ? (m(),
    y("span", Aw, ae(e.formattedBookingDuration), 1)) : x("", !0)])], 2)) : x("", !0), e.isProductTypeBooking ? (m(),
    y("p", Ow, ae(e.location), 1)) : x("", !0), e.productData.options.length ? (m(),
    y("div", xw, [(m(!0),
    y(ge, null, Ce(e.productData.options, (s, l) => (m(),
    z(e.OptionSelect, {
        key: `option-${l}`,
        value: e.selectedOption(l),
        options: e.uniqueOptionSelections[l],
        title: s.title,
        class: J(["block-product__input-field", {
            "block-product__input-field--centered": e.textAlign === "center"
        }]),
        "label-key": "value",
        onSetValue: n[1] || (n[1] = d => e.handleVariantOptionChange(d))
    }, null, 8, ["value", "options", "title", "class"]))), 128))])) : x("", !0), e.customFields.length ? (m(),
    y("div", Bw, [(m(!0),
    y(ge, null, Ce(e.customFields, (s, l) => (m(),
    z(e.CustomField, {
        key: `custom-field-${l}`,
        class: J(["block-product__input-field", {
            "block-product__input-field--centered": e.textAlign === "center"
        }]),
        "custom-field": s,
        translations: a.translations,
        "is-button-clicked": e.isButtonClicked,
        "onUpdate:modelValue": d => e.handleCustomFieldUpdate(d, l)
    }, null, 8, ["class", "custom-field", "translations", "is-button-clicked", "onUpdate:modelValue"]))), 128))])) : x("", !0), e.isQuantityPickerVisible ? (m(),
    y("div", {
        key: 5,
        class: J(["block-product__quantity-wrapper", {
            "block-product__quantity-wrapper--disabled": e.isOutOfStock || e.isAddToCartDisabled
        }])
    }, [Ae(e.QuantityPicker, {
        "qa-selector": "productpage",
        quantity: e.selectedQuantity,
        "is-limit-reached": e.isLimitReached,
        "is-stock-available": e.isStockAvailable,
        onQuantityChange: e.handleQuantityChange
    }, null, 8, ["quantity", "is-limit-reached", "is-stock-available"]), e.isStockInfoShown ? (m(),
    y("p", Lw, ae(e.stockInfoText), 1)) : x("", !0)], 2)) : x("", !0)]), e.isPurchasable ? (m(),
    y("div", Rw, [se(Ae(e.GridButton, {
        type: a.blockButtonType,
        content: e.buttonText,
        class: J(["block-product__button", `block-product__button--${a.blockButtonType}`]),
        "is-loading": a.isCheckoutLoading,
        "tag-name": "button",
        disabled: e.isAddToCartDisabled,
        "border-width": a.blockButtonBorderWidth,
        "border-color": e.buttonBorderColor.normal,
        "border-color-hover": e.buttonBorderColor.hover,
        "background-color": e.buttonBackgroundColor.normal,
        "background-color-hover": e.buttonBackgroundColor.hover,
        onClick: e.handleButtonClick
    }, null, 8, ["type", "content", "class", "is-loading", "disabled", "border-width", "border-color", "border-color-hover", "background-color", "background-color-hover"]), [[i, "productsection-btn-addtobag"]])])) : x("", !0), e.isDescriptionVisible && (e.isDescriptionShownOnMobileWithAdditionalSections || !e.productAdditionalInfo.length) ? se((m(),
    y("p", {
        key: 1,
        class: "block-product__description",
        innerHTML: e.productData.description
    }, null, 8, Nw)), [[i, "builder-product-section-description"]]) : x("", !0), e.isAdditionalInfoVisible ? (m(),
    z(e.AdditionalInfoSections, {
        key: 2,
        data: e.productAdditionalInfo,
        "product-description": e.productData.description
    }, null, 8, ["data", "product-description"])) : a.isQuickPreview ? (m(),
    y("a", {
        key: 3,
        href: e.productPageUrl,
        class: "block-product__link body-small"
    }, ae(a.translations.moreDetails), 9, Hw)) : x("", !0)])], 6))], 16, Tw)
}
const Uw = oe(Sw, [["render", Vw]])
  , Fw = t => {
    const n = u( () => t.quickPreviewProductId || t.data.product.id)
      , a = u( () => t.data.settings?.styles)
      , e = u( () => t.data.textColorVars)
      , r = u( () => t.data.buttonText)
      , o = u( () => t.data.buttonStyle)
      , i = u( () => t.data.buttonType)
      , s = u( () => t.data.buttonBorderWidth)
      , l = u( () => t.data.navigationArrowsColor)
      , d = u( () => t.data.navigationThumbnailArrowsColor)
      , p = u( () => t.data.galleryPlacement)
      , g = u( () => t.data.imageRatio)
      , v = u( () => t.data.imageBorderRadius)
      , f = u( () => t.data.isQuantityPickerEnabled ?? !0);
    return {
        productId: n,
        blockStyle: a,
        blockButtonText: r,
        blockButtonStyle: o,
        blockButtonType: i,
        blockButtonBorderWidth: s,
        textColorVars: e,
        imageBorderRadius: v,
        navigationArrowsColor: l,
        navigationThumbnailArrowsColor: d,
        galleryPlacement: p,
        imageRatio: g,
        isQuantityPickerEnabled: f
    }
}
  , jw = (t, n) => {
    const a = document.head.getElementsByTagName("script")
      , e = Array.from(a).find(l => l.type === "application/ld+json" && !!l.textContent?.includes("https://schema.org/"));
    if (!e || !e.textContent)
        return;
    const r = JSON.parse(e.textContent)
      , o = t.variants.length > 1
      , i = t.variants[0].manage_inventory ? !!n[0].inventory_quantity : !0;
    if (r.offers["@type"] === "AggregateOffer" && o && (r.offers.offerCount = t.variants.length),
    !o && i)
        return;
    o ? delete r.offers.availability : r.offers.availability = "https://schema.org/OutOfStock",
    e.textContent = JSON.stringify(r),
    document.head.removeChild(e);
    const s = document.createElement("script");
    s.type = "application/ld+json",
    s.textContent = JSON.stringify(r),
    document.head.appendChild(s)
}
  , Gw = re({
    __name: "BlockEcommerceProductProviderUser",
    props: {
        blockId: {
            default: ""
        },
        data: {},
        lcp: {
            default: () => ({})
        },
        ecommerceTranslations: {
            default: () => ({})
        },
        isQuickPreview: {
            type: Boolean,
            default: !1
        },
        legacyProductPages: {
            default: () => []
        },
        isCartVisible: {
            type: Boolean,
            default: !1
        },
        currentPageType: {
            default: "default"
        },
        isInPreviewMode: {
            type: Boolean,
            default: !1
        },
        isMobileView: {
            type: Boolean
        },
        quickPreviewProductId: {},
        currentPreviewProductPageId: {}
    },
    setup(t, {expose: n}) {
        n();
        const a = t
          , {siteId: e, ecommerceStoreId: r, hasGoogleAdsApp: o} = kt()
          , {quantifiedCartItemsList: i, canAddToCart: s, isShoppingCartOpen: l, shoppingCartItems: d, variantsQuantity: p, isCheckoutLoading: g, setShoppingCartOpen: v, setShoppingCartItems: f, setIsCheckoutLoading: b, setSelectedBookingProduct: D, updateVariantsQuantity: T} = Ia()
          , {openEcommerceModal: w, closeEcommerceModal: S} = Ca()
          , {initiateCheckout: B} = io()
          , {addImagesToLightbox: I} = ir()
          , {productId: R, blockStyle: $, blockButtonText: G, blockButtonStyle: ee, blockButtonType: K, blockButtonBorderWidth: M, textColorVars: j, imageBorderRadius: q, navigationArrowsColor: Y, navigationThumbnailArrowsColor: L, galleryPlacement: _, imageRatio: A, isQuantityPickerEnabled: P} = Fw(a)
          , H = E(!0)
          , k = E(null)
          , h = E(ha)
          , W = () => {
            setTimeout( () => {
                k.value = Lr
            }
            , 100)
        }
          , U = () => {
            l.value || v(!0)
        }
          , te = fe => {
            const Oe = (h.value.images || h.value.media || []).map(he => ({
                alt: h.value.title,
                src: he.url
            }));
            I(Oe, fe)
        }
          , Q = async fe => {
            if (await S(),
            h.value.type.value === st.BOOKING) {
                D(fe[0]),
                w("EcommerceBookingEventSelect");
                return
            }
            if (ar() || a.isInPreviewMode) {
                w("EcommerceMessageButtonDisabled");
                return
            }
            a.isCartVisible ? (f([...d.value, ...fe]),
            o.value && Go("add_to_cart", $c(fe[0])),
            U()) : (b(!0),
            await B(fe),
            b(!1))
        }
          , V = async () => {
            const fe = {
                storeId: r.value
            };
            H.value = !0;
            try {
                if (ko(a.currentPageType) && !a.isQuickPreview && !a.isInPreviewMode)
                    fe.slug = window?.location?.pathname?.split("/")?.[1] || "";
                else if (ko(a.currentPageType) && a.isInPreviewMode && a.currentPreviewProductPageId)
                    fe.productId = a.currentPreviewProductPageId;
                else if (R.value !== -1)
                    fe.productId = R.value;
                else
                    return;
                const ue = await lu(fe);
                await T([ue]),
                ue && (h.value = ue)
            } catch (ue) {
                console.error(ue)
            } finally {
                H.value = !1
            }
        }
          , O = async () => {
            W(),
            await V()
        }
        ;
        Pe( () => {
            O()
        }
        ),
        Kt( () => {
            S()
        }
        ),
        ko(a.currentPageType) && (Fe( () => a.currentPreviewProductPageId, (fe, ue) => {
            fe !== ue && O()
        }
        ),
        Fe(h, () => {
            h.value && jw(h.value, p.value)
        }
        ));
        const pe = {
            props: a,
            siteId: e,
            ecommerceStoreId: r,
            hasGoogleAdsApp: o,
            quantifiedCartItemsList: i,
            canAddToCart: s,
            isShoppingCartOpen: l,
            shoppingCartItems: d,
            variantsQuantity: p,
            isCheckoutLoading: g,
            setShoppingCartOpen: v,
            setShoppingCartItems: f,
            setIsCheckoutLoading: b,
            setSelectedBookingProduct: D,
            updateVariantsQuantity: T,
            openEcommerceModal: w,
            closeEcommerceModal: S,
            initiateCheckout: B,
            addImagesToLightbox: I,
            productId: R,
            blockStyle: $,
            blockButtonText: G,
            blockButtonStyle: ee,
            blockButtonType: K,
            blockButtonBorderWidth: M,
            textColorVars: j,
            imageBorderRadius: q,
            navigationArrowsColor: Y,
            navigationThumbnailArrowsColor: L,
            galleryPlacement: _,
            imageRatio: A,
            isQuantityPickerEnabled: P,
            isLoading: H,
            animationState: k,
            product: h,
            setAnimationState: W,
            manageCartOpenState: U,
            handleImageClick: te,
            handleBuyButtonClick: Q,
            fetchProductData: V,
            initiateProduct: O,
            get DATA_ATTRIBUTE_ANIMATION_STATE() {
                return Rr
            },
            BlockEcommerceProduct: Uw
        };
        return Object.defineProperty(pe, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        pe
    }
});
function Yw(t, n, a, e, r, o) {
    return m(),
    z(e.BlockEcommerceProduct, Je({
        blockId: a.blockId,
        blockStyle: e.blockStyle,
        blockButtonText: e.blockButtonText,
        blockButtonStyle: e.blockButtonStyle,
        blockButtonType: e.blockButtonType,
        blockButtonBorderWidth: e.blockButtonBorderWidth,
        textColorVars: e.textColorVars,
        imageBorderRadius: e.imageBorderRadius,
        navigationArrowsColor: e.navigationArrowsColor,
        navigationThumbnailArrowsColor: e.navigationThumbnailArrowsColor,
        galleryPlacement: e.galleryPlacement,
        imageRatio: e.imageRatio,
        isQuantityPickerEnabled: e.isQuantityPickerEnabled,
        quantifiedCartItemsList: e.quantifiedCartItemsList,
        isCheckoutLoading: e.isCheckoutLoading,
        legacyProductPages: a.legacyProductPages,
        isQuickPreview: a.isQuickPreview,
        currentPageType: a.currentPageType
    }, {
        "is-mobile-view": a.isMobileView,
        "product-data": e.product,
        "can-add-to-cart": e.canAddToCart,
        "is-loading": e.isLoading,
        translations: a.ecommerceTranslations,
        "is-cart-visible": a.isCartVisible,
        "is-eager": a.lcp.type === "block-ecommerce-product" && a.lcp.id === a.blockId,
        [e.DATA_ATTRIBUTE_ANIMATION_STATE || ""]: e.animationState,
        "site-id": e.siteId,
        "shopping-cart-items": e.shoppingCartItems,
        "variants-quantity": e.variantsQuantity,
        onBuyButtonClick: e.handleBuyButtonClick,
        onImageClick: e.handleImageClick,
        onOpenCart: e.manageCartOpenState
    }), null, 16, ["is-mobile-view", "product-data", "can-add-to-cart", "is-loading", "translations", "is-cart-visible", "is-eager", "site-id", "shopping-cart-items", "variants-quantity"])
}
const Ru = oe(Gw, [["render", Yw]])
  , Ww = E({})
  , zi = "forward"
  , tc = "backward"
  , $w = ({isAutoplayEnabled: t, isLoopEnabled: n, autoplayInterval: a, isTransitioning: e, slides: r}={}) => {
    const o = E(0)
      , i = E("")
      , s = E(null)
      , l = u( () => r.value.length)
      , d = u( () => o.value === r.value.length - 1)
      , p = u( () => o.value === 0)
      , g = u( () => (!d.value || n.value) && l.value > 1 && !e.value)
      , v = u( () => (!p.value || n.value) && l.value > 1 && !e.value)
      , f = () => {
        if (g.value) {
            if (i.value = zi,
            n.value && d.value) {
                o.value = 0;
                return
            }
            o.value += 1
        }
    }
      , b = () => {
        if (v.value) {
            if (i.value = tc,
            n.value && p.value) {
                o.value = r.value.length - 1;
                return
            }
            o.value -= 1
        }
    }
      , D = B => {
        i.value = B > o.value ? zi : tc,
        o.value = B
    }
      , T = () => {
        s.value = setInterval( () => {
            !n.value && d.value || f()
        }
        , a.value * 1e3)
    }
      , w = () => {
        s.value && (clearInterval(s.value),
        s.value = null)
    }
      , S = () => {
        w(),
        t.value && T()
    }
    ;
    return t && (t.value && T(),
    Fe(t, () => {
        t.value ? T() : w()
    }
    ),
    Fe(fb(), B => {
        B === "visible" ? T() : w()
    }
    )),
    a && Fe(a, () => {
        S()
    }
    ),
    {
        slideshowRefs: Ww,
        slideToNext: f,
        slideToPrevious: b,
        slideTo: D,
        slideDirection: i,
        slideCount: l,
        currentSlideIndex: o,
        slides: r,
        isLoopEnabled: n,
        isAutoplayEnabled: t,
        autoplayInterval: a,
        resetAutoplayInterval: S,
        setAutoplayInterval: T,
        clearAutoplayInterval: w,
        canSlideToNext: g,
        canSlideToPrevious: v
    }
}
  , Ss = re({
    props: {
        slides: {
            type: Array,
            required: !0
        },
        isLoopEnabled: {
            type: Boolean,
            default: !1
        },
        currentSlideIndex: {
            type: Number,
            default: 0
        },
        slideDirection: {
            type: String,
            default: zi
        },
        arrowColor: {
            type: String,
            default: "rgb(255, 255, 255)"
        },
        dotColor: {
            type: String,
            default: "rgb(255, 255, 255)"
        },
        isNextButtonDisabled: {
            type: Boolean,
            default: !1
        },
        isPreviousButtonDisabled: {
            type: Boolean,
            default: !1
        },
        isNavigationArrowsVisible: {
            type: Boolean,
            default: !0
        },
        isNavigationDotsVisible: {
            type: Boolean,
            default: !0
        },
        isTransitioning: {
            type: Boolean,
            default: !1
        },
        desktopMinHeight: {
            type: Number,
            required: !0
        },
        mobileMinHeight: {
            type: Number,
            required: !0
        },
        websiteId: {
            type: String,
            default: ""
        }
    },
    emits: ["transition-start", "transition-end", "next-slide", "previous-slide", "dot-click"],
    setup() {
        return {
            FULL_WIDTH: Xa,
            getOptimizedSrc: Et
        }
    },
    computed: {
        isNextSlideButtonVisible() {
            if (this.isLoopEnabled)
                return this.isNavigationArrowsVisible;
            const t = this.currentSlideIndex === this.slides.length - 1;
            return this.isNavigationArrowsVisible && !t
        },
        isPreviousSlideButtonVisible() {
            if (this.isLoopEnabled)
                return this.isNavigationArrowsVisible;
            const t = this.isNavigationArrowsVisible && this.currentSlideIndex === 0;
            return this.isNavigationArrowsVisible && !t
        }
    }
})
  , ac = () => {
    ht(t => ({
        fd06db1c: t.desktopMinHeight,
        "1f7ca1af": t.arrowColor,
        "56d289af": t.dotColor,
        "3b9747e2": t.mobileMinHeight
    }))
}
  , nc = Ss.setup;
Ss.setup = nc ? (t, n) => (ac(),
nc(t, n)) : ac;
const Nu = t => (sa("data-v-f3299b46"),
t = t(),
la(),
t)
  , qw = {
    class: "slideshow"
}
  , zw = ["alt", "src"]
  , Zw = ["disabled"]
  , Kw = Nu( () => C("svg", {
    width: "14",
    height: "26",
    viewBox: "0 0 14 26",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
}, [C("path", {
    d: "M1 25L13 13L1 1",
    stroke: "currentColor",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
})], -1))
  , Qw = [Kw]
  , Xw = ["disabled"]
  , Jw = Nu( () => C("svg", {
    width: "14",
    height: "26",
    viewBox: "0 0 14 26",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
}, [C("path", {
    d: "M1 25L13 13L1 1",
    stroke: "currentColor",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
})], -1))
  , ek = [Jw]
  , tk = {
    key: 2,
    class: "slideshow__dots"
}
  , ak = ["onClick"];
function nk(t, n, a, e, r, o) {
    return m(),
    y("div", qw, [Ae(Ad, {
        name: `slide-${t.slideDirection}`,
        onLeave: n[0] || (n[0] = i => t.$emit("transition-start")),
        onAfterLeave: n[1] || (n[1] = i => t.$emit("transition-end"))
    }, {
        default: ye( () => [(m(!0),
        y(ge, null, Ce(t.slides, (i, s) => se((m(),
        y("img", {
            key: `${i.path}-${s}`,
            alt: i.alt || "",
            class: "slide",
            src: t.getOptimizedSrc(i.origin, i.path, t.websiteId, {
                width: t.FULL_WIDTH
            })
        }, null, 8, zw)), [[da, t.currentSlideIndex === s]])), 128))]),
        _: 1
    }, 8, ["name"]), t.isNextSlideButtonVisible ? (m(),
    y("button", {
        key: 0,
        class: J(["slideshow-nav-button slideshow-nav-button--right", {
            "is-transitioning": t.isTransitioning
        }]),
        disabled: t.isNextButtonDisabled,
        onClick: n[2] || (n[2] = i => t.$emit("next-slide"))
    }, Qw, 10, Zw)) : x("", !0), t.isPreviousSlideButtonVisible ? (m(),
    y("button", {
        key: 1,
        class: J(["slideshow-nav-button slideshow-nav-button--left", {
            "is-transitioning": t.isTransitioning
        }]),
        disabled: t.isPreviousButtonDisabled,
        onClick: n[3] || (n[3] = i => t.$emit("previous-slide"))
    }, ek, 10, Xw)) : x("", !0), t.isNavigationDotsVisible ? (m(),
    y("div", tk, [(m(!0),
    y(ge, null, Ce(t.slides, (i, s) => (m(),
    y("button", {
        key: `${i.path}-${s}`,
        class: J(["dot", {
            "dot--current": t.currentSlideIndex === s
        }]),
        onClick: l => t.$emit("dot-click", s)
    }, null, 10, ak))), 128))])) : x("", !0)])
}
const rk = oe(Ss, [["render", nk], ["__scopeId", "data-v-f3299b46"]])
  , ok = re({
    components: {
        BlockImageSlideshow: rk
    },
    props: {
        blockId: {
            type: String,
            required: !0
        },
        data: {
            type: Object,
            default: () => ({})
        },
        websiteId: {
            type: String,
            default: ""
        }
    },
    setup(t) {
        const {data: n} = Di(t)
          , a = E(!1)
          , e = u( () => `${n.value.desktop.minHeight}px`)
          , r = u( () => `${n.value.mobile.minHeight}px`)
          , o = u( () => n.value.settings.styles.navigationDotsColor)
          , i = u( () => n.value.settings.styles.navigationArrowsColor)
          , s = u( () => n.value.slides)
          , l = u( () => n.value.isLoopEnabled)
          , d = u( () => n.value.isAutoplayEnabled)
          , p = u( () => n.value.autoplayInterval)
          , g = u( () => n.value.isNavigationDotsVisible)
          , v = u( () => n.value.isNavigationArrowsVisible)
          , f = u( () => n.value.desktop.minHeight)
          , b = u( () => n.value.mobile.minHeight)
          , {slideDirection: D, currentSlideIndex: T, canSlideToNext: w, canSlideToPrevious: S, slideToNext: B, slideToPrevious: I, slideTo: R, resetAutoplayInterval: $, clearAutoplayInterval: G} = $w({
            isAutoplayEnabled: d,
            isLoopEnabled: l,
            autoplayInterval: p,
            isTransitioning: a,
            slides: s
        });
        return {
            canSlideToNext: w,
            canSlideToPrevious: S,
            desktopHeight: e,
            mobileHeight: r,
            slides: s,
            currentSlideIndex: T,
            slideDirection: D,
            isLoopEnabled: l,
            isTransitioning: a,
            resetAutoplayInterval: $,
            dotColor: o,
            arrowColor: i,
            isNavigationDotsVisible: g,
            isNavigationArrowsVisible: v,
            clearAutoplayInterval: G,
            slideToNext: B,
            slideToPrevious: I,
            slideTo: R,
            desktopMinHeight: f,
            mobileMinHeight: b
        }
    }
});
function ik(t, n, a, e, r, o) {
    const i = mt("BlockImageSlideshow");
    return m(),
    z(i, {
        slides: t.slides,
        "is-loop-enabled": t.isLoopEnabled,
        "current-slide-index": t.currentSlideIndex,
        "slide-direction": t.slideDirection,
        "dot-color": t.dotColor,
        "is-navigation-arrows-visible": t.isNavigationArrowsVisible,
        "is-navigation-dots-visible": t.isNavigationDotsVisible,
        "arrow-color": t.arrowColor,
        "is-next-button-disabled": !t.canSlideToNext,
        "is-previous-button-disabled": !t.canSlideToPrevious,
        "desktop-min-height": t.desktopMinHeight,
        "mobile-min-height": t.mobileMinHeight,
        "website-id": t.websiteId,
        onTransitionStart: n[0] || (n[0] = s => t.isTransitioning = !0),
        onTransitionEnd: n[1] || (n[1] = s => t.isTransitioning = !1),
        onMouseenter: t.clearAutoplayInterval,
        onMouseleave: t.resetAutoplayInterval,
        onNextSlide: t.slideToNext,
        onPreviousSlide: t.slideToPrevious,
        onDotClick: t.slideTo
    }, null, 8, ["slides", "is-loop-enabled", "current-slide-index", "slide-direction", "dot-color", "is-navigation-arrows-visible", "is-navigation-dots-visible", "arrow-color", "is-next-button-disabled", "is-previous-button-disabled", "desktop-min-height", "mobile-min-height", "website-id", "onMouseenter", "onMouseleave", "onNextSlide", "onPreviousSlide", "onDotClick"])
}
const sk = oe(ok, [["render", ik]])
  , rc = 360
  , lk = {
    __name: "BlockUser",
    props: {
        id: {
            type: String,
            required: !0
        },
        data: {
            type: Object,
            required: !0
        },
        lcp: {
            type: Object,
            default: () => ({})
        },
        currentLocale: {
            type: String,
            default: mn
        },
        style: {
            type: Object,
            default: () => ({})
        },
        ecommerceTranslations: {
            type: Object,
            default: () => ({})
        },
        isCartVisible: {
            type: Boolean,
            default: !1
        },
        pageId: {
            type: String,
            required: !0
        },
        currentPageType: {
            type: String,
            default: "default"
        },
        isInPreviewMode: {
            type: Boolean,
            default: !1
        },
        screenWidth: {
            type: Number,
            default: 0
        },
        isFirstVisibleDesktopBlock: {
            type: Boolean,
            default: !1
        },
        isFirstVisibleMobileBlock: {
            type: Boolean,
            default: !1
        },
        isSiteEngine: {
            type: Boolean,
            default: !1
        },
        isDynamicProductPageEnabled: {
            type: Boolean,
            default: !1
        },
        currentPreviewProductPageId: {
            type: String,
            default: ""
        }
    },
    setup(t, {expose: n}) {
        n();
        const a = t
          , e = E(null)
          , {legacyProductPages: r, isLoaded: o} = Ia({
            blockId: a.id
        })
          , {blocks: i, elements: s, pages: l, siteId: d, blogReadingTimeText: p, blogCategories: g, siteId: v, meta: f} = kt()
          , {addIntersectionObserver: b, observe: D, intersectionObserver: T, animationClass: w} = sr({
            data: a.data
        })
          , S = u( () => a.currentLocale)
          , B = u( () => a.screenWidth <= Xn)
          , I = u( () => a.screenWidth <= Br)
          , R = u( () => a.data.desktop?.isHidden ? a.isInPreviewMode ? a.screenWidth > Xn : !0 : !1)
          , $ = u( () => a.data.mobile?.isHidden ? a.isInPreviewMode ? B.value : !0 : !1)
          , G = u( () => ({
            ...a.style,
            ...ma(a.data?.settings?.styles)
        }))
          , ee = u( () => {
            if (!a.data?.settings?.styles["m-block-padding"])
                return !1;
            const {top: P, bottom: H} = Kr(a.data.settings.styles["m-block-padding"]);
            return Number.parseInt(P, 10) + Number.parseInt(H, 10) > rc
        }
        )
          , K = u( () => a.data.background?.current === "video" ? a.data.background.video.videoSrc : Et(a.data.background.origin, a.data.background.path, v.value, {
            width: Xa
        }))
          , M = u( () => Ja(a.data.background.origin, a.data.background.path, v.value, {
            isMobileFullScreen: ee.value
        }))
          , j = u( () => a.data.slot === "footer")
          , q = u( () => {
            if (a.data.type !== al)
                return null;
            const [,P] = Object.entries(l.value).find( ([H,k]) => k.type === Ai && H === a.pageId);
            return P
        }
        )
          , Y = u( () => f.value.stripePublicApiKey)
          , L = u( () => a.data.type === Mi)
          , _ = async () => {
            b(),
            (!L.value || o.value) && await D(e.value)
        }
        ;
        Pe(async () => {
            await _()
        }
        ),
        Kt( () => T.value?.disconnect()),
        Fe([S, o], async ([P,H], [k]) => {
            (H || P !== k) && L.value && await D(e.value)
        }
        );
        const A = {
            MOBILE_FULL_HEIGT_THRESHOLD: rc,
            props: a,
            blockRef: e,
            legacyProductPages: r,
            isEcommerceProductsLoaded: o,
            siteBlocks: i,
            siteElements: s,
            siteLanguagePages: l,
            websiteId: d,
            blogReadingTimeText: p,
            blogCategories: g,
            siteId: v,
            meta: f,
            addIntersectionObserver: b,
            observe: D,
            intersectionObserver: T,
            animationClass: w,
            currentSiteLocale: S,
            isMobile: B,
            isLayoutMobile: I,
            isDesktopBlockHidden: R,
            isMobileBlockHidden: $,
            computedStyles: G,
            isMobileFullScreen: ee,
            backgroundSrc: K,
            backgroundSrcSet: M,
            isBlockFooter: j,
            currentBlogPage: q,
            stripePublicApiKey: Y,
            isEcommerceBlock: L,
            initiateAnimations: _,
            computed: u,
            onMounted: Pe,
            onBeforeUnmount: Kt,
            ref: E,
            watch: Fe,
            BlockBackground: hs,
            BlockBlogHeader: Av,
            get PAGE_TYPE_BLOG() {
                return Ai
            },
            get SYSTEM_LOCALE() {
                return mn
            },
            get BLOCK_TYPE_LAYOUT() {
                return im
            },
            get BLOCK_TYPE_BLOG_HEADER() {
                return al
            },
            get BLOCK_TYPE_BLOG_LIST() {
                return sm
            },
            get BLOCK_TYPE_IMAGE_SLIDESHOW() {
                return lm
            },
            get BLOCK_TYPE_ECOMMERCE_PRODUCT() {
                return cm
            },
            get BLOCK_TYPE_ECOMMERCE_PRODUCT_LIST() {
                return Mi
            },
            get MEDIA_MOBILE_SCREEN_BREAKPOINT() {
                return Xn
            },
            get MEDIA_MOBILE_BREAKPOINT() {
                return Br
            },
            get FULL_WIDTH() {
                return Xa
            },
            get getFullWidthSrcset() {
                return Ja
            },
            get getOptimizedSrc() {
                return Et
            },
            get useSiteGlobal() {
                return kt
            },
            get objectToCssVariables() {
                return ma
            },
            get parseCSSSides() {
                return Kr
            },
            BlockLayoutProviderUser: Xb,
            BlockBlogListProviderUser: C_,
            BlockEcommerceProductListProviderUser: L0,
            BlockEcommerceProductProviderUser: Ru,
            BlockImageSlideshowProviderUser: sk,
            get useSiteEngineAnimations() {
                return sr
            },
            get useEcommerceGlobal() {
                return Ia
            }
        };
        return Object.defineProperty(A, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        A
    }
}
  , ck = ["id"];
function uk(t, n, a, e, r, o) {
    return m(),
    y("section", {
        id: a.id,
        ref: "blockRef",
        class: J(["block", [e.animationClass, {
            "block--footer": e.isBlockFooter,
            "block--desktop-hidden": e.isDesktopBlockHidden,
            "block--mobile-hidden": e.isMobileBlockHidden,
            "block--desktop-first-visible": a.isFirstVisibleDesktopBlock,
            "block--mobile-first-visible": a.isFirstVisibleMobileBlock
        }]]),
        style: ze(e.computedStyles)
    }, [a.data.background ? (m(),
    z(e.BlockBackground, {
        key: 0,
        "overlay-opacity": a.data.background["overlay-opacity"],
        type: a.data.background.current,
        color: a.data.background.color,
        gradient: a.data.background.gradient,
        src: e.backgroundSrc,
        srcset: e.backgroundSrcSet,
        "is-eager": a.lcp.type === "block-background" && a.lcp.id === a.id,
        "is-fixed": a.data.attachment === "fixed",
        alt: a.data.background && a.data.background.alt,
        "is-mobile": e.isMobile,
        "video-poster": a.data.background?.video?.videoThumbnailSrc
    }, null, 8, ["overlay-opacity", "type", "color", "gradient", "src", "srcset", "is-eager", "is-fixed", "alt", "is-mobile", "video-poster"])) : x("", !0), a.data.type === e.BLOCK_TYPE_LAYOUT ? (m(),
    z(e.BlockLayoutProviderUser, {
        key: 1,
        lcp: a.lcp,
        data: a.data,
        "block-id": a.id,
        components: e.siteElements,
        "current-locale": a.currentLocale,
        "is-cart-visible": a.isCartVisible,
        "site-language-pages": e.siteLanguagePages,
        "stripe-public-api-key": e.stripePublicApiKey,
        "is-in-preview-mode": e.props.isInPreviewMode
    }, null, 8, ["lcp", "data", "block-id", "components", "current-locale", "is-cart-visible", "site-language-pages", "stripe-public-api-key", "is-in-preview-mode"])) : x("", !0), a.data.type === e.BLOCK_TYPE_BLOG_HEADER ? (m(),
    z(e.BlockBlogHeader, {
        key: 2,
        data: a.data,
        "current-blog-page": e.currentBlogPage,
        "blog-categories": e.blogCategories,
        "blog-reading-time-text": e.blogReadingTimeText
    }, null, 8, ["data", "current-blog-page", "blog-categories", "blog-reading-time-text"])) : x("", !0), a.data.type === e.BLOCK_TYPE_BLOG_LIST ? (m(),
    z(e.BlockBlogListProviderUser, {
        key: 3,
        data: a.data,
        "block-id": a.id,
        "current-locale": a.currentLocale,
        "is-in-preview-mode": e.props.isInPreviewMode
    }, null, 8, ["data", "block-id", "current-locale", "is-in-preview-mode"])) : x("", !0), a.data.type === e.BLOCK_TYPE_IMAGE_SLIDESHOW ? (m(),
    z(e.BlockImageSlideshowProviderUser, {
        key: 4,
        data: a.data,
        "block-id": a.id,
        "website-id": e.websiteId
    }, null, 8, ["data", "block-id", "website-id"])) : x("", !0), a.data.type === e.BLOCK_TYPE_ECOMMERCE_PRODUCT ? (m(),
    z(e.BlockEcommerceProductProviderUser, {
        key: 5,
        lcp: a.lcp,
        data: a.data,
        "block-id": a.id,
        "legacy-product-pages": e.legacyProductPages,
        "is-cart-visible": a.isCartVisible,
        "ecommerce-translations": a.ecommerceTranslations,
        "current-page-type": a.currentPageType,
        "is-in-preview-mode": e.props.isInPreviewMode,
        "is-mobile-view": e.isLayoutMobile,
        "is-site-engine": e.props.isSiteEngine,
        "current-preview-product-page-id": a.currentPreviewProductPageId
    }, null, 8, ["lcp", "data", "block-id", "legacy-product-pages", "is-cart-visible", "ecommerce-translations", "current-page-type", "is-in-preview-mode", "is-mobile-view", "is-site-engine", "current-preview-product-page-id"])) : x("", !0), a.data.type === e.BLOCK_TYPE_ECOMMERCE_PRODUCT_LIST ? (m(),
    z(e.BlockEcommerceProductListProviderUser, {
        key: 6,
        lcp: a.lcp,
        data: a.data,
        "block-id": a.id,
        blocks: e.siteBlocks,
        "current-locale": a.currentLocale,
        "is-cart-visible": a.isCartVisible,
        "ecommerce-translations": a.ecommerceTranslations,
        "is-in-preview-mode": e.props.isInPreviewMode,
        "is-mobile-view": e.isLayoutMobile,
        "is-site-engine": e.props.isSiteEngine,
        "is-dynamic-product-page-enabled": a.isDynamicProductPageEnabled
    }, null, 8, ["lcp", "data", "block-id", "blocks", "current-locale", "is-cart-visible", "ecommerce-translations", "is-in-preview-mode", "is-mobile-view", "is-site-engine", "is-dynamic-product-page-enabled"])) : x("", !0)], 14, ck)
}
const dk = oe(lk, [["render", uk], ["__scopeId", "data-v-19c33b65"]])
  , mk = re({
    __name: "BlockStickyBarLayout",
    props: {
        blockStyles: {}
    },
    setup(t, {expose: n}) {
        n(),
        ht(l => ({
            "16a0e642": r.value,
            d9a2834e: N(Wc),
            ab06013e: e.value,
            "550975b2": o.value
        }));
        const a = t
          , e = u( () => `${Ua}px`)
          , r = u( () => `${Va}px`)
          , o = u( () => `0 ${Dr}px`)
          , i = u( () => ma(a.blockStyles))
          , s = {
            props: a,
            mobileMaxWidthCSSVar: e,
            maxWidthCSSVar: r,
            tabletBlockPaddingCSSVar: o,
            computedStyles: i
        };
        return Object.defineProperty(s, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        s
    }
});
function gk(t, n, a, e, r, o) {
    return m(),
    y("div", {
        class: "block-sticky-bar-layout",
        style: ze(e.computedStyles)
    }, [ne(t.$slots, "default", {}, void 0, !0)], 4)
}
const pk = oe(mk, [["render", gk], ["__scopeId", "data-v-c5b36853"]])
  , vk = re({
    __name: "BlockStickyBarProviderUser",
    props: {
        data: {},
        components: {},
        isInPreviewMode: {
            type: Boolean
        },
        lcp: {},
        screenWidth: {
            default: 0
        }
    },
    setup(t, {expose: n}) {
        n(),
        ht(R => ({
            b0d8ca1a: N(Wc)
        }));
        const a = {
            [Ka]: gr
        }
          , e = t
          , {siteId: r} = kt()
          , {layoutCSSVars: o} = ji({
            blockData: u( () => e.data),
            siteElements: u( () => e.components),
            shouldBuildResponsive: !e.isInPreviewMode
        })
          , {addIntersectionObserver: i, observe: s, intersectionObserver: l, animationClass: d} = sr({
            data: e.data,
            blockId: wo
        })
          , p = E(null)
          , g = u( () => e.data.background?.origin || null)
          , v = u( () => e.data.background?.path || null)
          , f = u( () => e.screenWidth <= Xn)
          , b = u( () => e.data.desktop?.isHidden ? e.isInPreviewMode ? e.screenWidth > Xn : !0 : !1)
          , D = u( () => e.data.mobile?.isHidden ? e.isInPreviewMode ? f.value : !0 : !1)
          , T = u( () => Et(g.value, v.value, r.value, {
            width: Xa
        }))
          , w = u( () => Ja(g.value, v.value, r.value, {
            isMobileFullScreen: !1
        }))
          , S = u( () => e.data.attachment === "fixed")
          , B = async () => {
            i(),
            p.value && await s(p.value)
        }
        ;
        Pe(async () => {
            await B()
        }
        ),
        Kt( () => l.value?.disconnect());
        const I = {
            CUSTOM_ATTRIBUTES: a,
            props: e,
            siteId: r,
            layoutCSSVars: o,
            addIntersectionObserver: i,
            observe: s,
            intersectionObserver: l,
            animationClass: d,
            blockRef: p,
            backgroundOrigin: g,
            backgroundPath: v,
            isMobile: f,
            isDesktopBlockHidden: b,
            isMobileBlockHidden: D,
            backgroundSrc: T,
            backgroundSrcSet: w,
            isBlockBackgroundFixed: S,
            initiateAnimations: B,
            BlockBackground: hs,
            BlockStickyBarLayout: pk,
            GridTextBox: wu
        };
        return Object.defineProperty(I, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        I
    }
});
function fk(t, n, a, e, r, o) {
    return m(),
    y("section", {
        ref: "blockRef",
        class: J(["block-sticky-bar", [{
            "block-sticky-bar--desktop-hidden": e.isDesktopBlockHidden,
            "block-sticky-bar--mobile-hidden": e.isMobileBlockHidden
        }]])
    }, [a.data.background ? (m(),
    z(e.BlockBackground, {
        key: 0,
        class: "block-sticky-bar__background",
        "overlay-opacity": a.data.background["overlay-opacity"],
        type: a.data.background.current,
        gradient: a.data.background.gradient,
        color: a.data.background.color,
        src: e.backgroundSrc,
        srcset: e.backgroundSrcSet,
        "is-fixed": e.isBlockBackgroundFixed,
        alt: a.data.background && a.data.background.alt
    }, null, 8, ["overlay-opacity", "type", "gradient", "color", "src", "srcset", "is-fixed", "alt"])) : x("", !0), Ae(e.BlockStickyBarLayout, {
        "block-styles": a.data.settings.styles,
        style: ze(e.layoutCSSVars),
        class: J(e.animationClass)
    }, {
        default: ye( () => [(m(!0),
        y(ge, null, Ce(a.data.items, (i, s) => (m(),
        z(e.GridTextBox, Je({
            key: `sticky-element-${s}`,
            class: "block-sticky-bar__element",
            "text-align": "flex-start",
            "text-align-mobile": "flex-start",
            content: i.content
        }, e.CUSTOM_ATTRIBUTES), null, 16, ["content"]))), 128))]),
        _: 1
    }, 8, ["block-styles", "style", "class"])], 2)
}
const hk = oe(vk, [["render", fk], ["__scopeId", "data-v-a94e2aa2"]])
  , yk = "https://builder-backend.hostinger.com/u1/sites"
  , bk = {
    verifyPagePassword: async ({siteId: t, pageId: n, locale: a, password: e}) => fetch(`${yk}/verify-page-password`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            siteId: t,
            pageId: n,
            language: a,
            password: e
        })
    })
}
  , _k = {
    src: "/_astro-1737709465131/lock.CUuFZ5nx.svg",
    width: 40,
    height: 40,
    format: "svg"
}
  , wk = re({
    __name: "PasswordPage",
    props: {
        siteId: {},
        pageId: {},
        locale: {},
        currentPageData: {},
        isCurrentPageHomepage: {
            type: Boolean,
            default: !1
        },
        inPreviewMode: {
            type: Boolean,
            default: !1
        },
        defaultLocale: {},
        homepageName: {}
    },
    setup(t, {expose: n}) {
        n();
        const a = t
          , {pageData: e, setPageData: r} = kt()
          , o = E(!1)
          , i = E("")
          , s = E("")
          , l = u( () => a.currentPageData?.meta?.passwordDesign ?? "")
          , d = u( () => a.currentPageData?.meta?.passwordHeadingText ?? "Guest Area")
          , p = u( () => a.currentPageData?.meta?.passwordSubheadingText ?? "Please enter the password to access the page")
          , g = u( () => a.currentPageData?.meta?.passwordButtonText ?? "Enter")
          , v = u( () => a.currentPageData?.meta?.passwordPlaceholderText ?? "Type password")
          , f = u( () => a.currentPageData?.meta?.passwordBackText ?? "Back to")
          , b = u( () => l.value === um)
          , D = u( () => l.value === dm)
          , T = async () => {
            if (i.value) {
                o.value = !0;
                try {
                    const I = await bk.verifyPagePassword({
                        siteId: a.siteId,
                        pageId: a.pageId,
                        locale: a.locale,
                        password: i.value
                    });
                    if (I.ok) {
                        const {pageData: R} = await I.json();
                        r({
                            ...e.value,
                            pages: {
                                ...e.value.pages,
                                ...R.pages
                            },
                            blocks: {
                                ...e.value.blocks,
                                ...R.blocks
                            },
                            elements: {
                                ...e.value.elements,
                                ...R.elements
                            }
                        });
                        return
                    }
                    I.status === 401 ? s.value = "Please enter the correct password" : I.status === 429 ? s.value = "Too many attempts. Please try again later" : s.value = "An error occurred. Please try again later"
                } catch {
                    s.value = "An error occurred. Please try again later"
                } finally {
                    o.value = !1
                }
            }
        }
          , w = u( () => a.locale && a.locale !== a.defaultLocale ? `/${a.locale}` : "/")
          , S = u( () => !a.inPreviewMode && !a.isCurrentPageHomepage);
        Pe( () => {
            document.body.style.overflow = "hidden"
        }
        ),
        Kt( () => {
            document.body.style.overflow = ""
        }
        );
        const B = {
            props: a,
            pageData: e,
            setPageData: r,
            isLoading: o,
            password: i,
            errorMessage: s,
            passwordPageStyle: l,
            passwordPageHeading: d,
            passwordPageSubheading: p,
            passwordPageButtonText: g,
            passwordPlaceholder: v,
            passwordBackText: f,
            isCalmTheme: b,
            isPopularTheme: D,
            handleUnlockSubmit: T,
            homepageLink: w,
            isHomepageLinkShown: S,
            get PASSWORD_PAGE_PLACEHOLDERS_BASE_PATH() {
                return Rp
            },
            ZyroLoader: bs
        };
        return Object.defineProperty(B, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        B
    }
})
  , kk = t => (sa("data-v-827bb7d1"),
t = t(),
la(),
t)
  , Sk = {
    key: 0,
    class: "password-page__background-wave-wrapper"
}
  , Tk = kk( () => C("div", {
    class: "password-page__background-wave"
}, null, -1))
  , Ck = [Tk]
  , Ik = ["src"]
  , Pk = {
    key: 0,
    class: "password-page__icon-lock",
    src: _k
}
  , Ek = {
    class: "password-page__heading"
}
  , Dk = {
    for: "password",
    class: "password-page__label"
}
  , Mk = ["placeholder"]
  , Ak = {
    key: 1,
    class: "password-page__error-message"
}
  , Ok = ["disabled"]
  , xk = {
    key: 1
}
  , Bk = {
    key: 2,
    class: "password-page__homepage-link"
}
  , Lk = ["href"];
function Rk(t, n, a, e, r, o) {
    const i = lt("qa");
    return m(),
    y("main", {
        class: J(["password-page", {
            "password-page--calm": e.isCalmTheme,
            "password-page--popular": e.isPopularTheme
        }])
    }, [e.isCalmTheme ? se((m(),
    y("div", Sk, Ck)), [[i, "password-page-background-calm"]]) : x("", !0), e.isPopularTheme ? se((m(),
    y("img", {
        key: 1,
        class: "password-page__background-image",
        src: `${e.PASSWORD_PAGE_PLACEHOLDERS_BASE_PATH}/guest-area-background-popular.png`
    }, null, 8, Ik)), [[i, "password-page-background-popular"]]) : x("", !0), C("form", {
        class: "password-page__form",
        onSubmit: xe(e.handleUnlockSubmit, ["prevent"])
    }, [e.isCalmTheme ? (m(),
    y("img", Pk)) : x("", !0), se((m(),
    y("h1", Ek, [qe(ae(e.passwordPageHeading), 1)])), [[i, "password-page-heading"]]), se((m(),
    y("label", Dk, [qe(ae(e.passwordPageSubheading), 1)])), [[i, "password-page-subheading"]]), se(C("input", {
        id: "password",
        "onUpdate:modelValue": n[0] || (n[0] = s => e.password = s),
        type: "password",
        autocomplete: "off",
        autocapitalize: "off",
        autocorrect: "off",
        name: "password",
        placeholder: e.passwordPlaceholder,
        required: "",
        class: J(["password-page__input", {
            "password-page__input--error": e.errorMessage
        }]),
        onBlur: n[1] || (n[1] = s => e.errorMessage = "")
    }, null, 42, Mk), [[Oc, e.password], [i, "password-page-placeholder"]]), e.errorMessage ? (m(),
    y("p", Ak, ae(e.errorMessage), 1)) : x("", !0), se((m(),
    y("button", {
        class: "password-page__button",
        disabled: e.isLoading,
        type: "submit"
    }, [e.isLoading ? (m(),
    z(e.ZyroLoader, {
        key: 0,
        size: "24px"
    })) : (m(),
    y("span", xk, ae(e.passwordPageButtonText), 1))], 8, Ok)), [[i, "password-page-button"]]), e.isHomepageLinkShown ? se((m(),
    y("p", Bk, [qe(ae(e.passwordBackText) + " ", 1), C("a", {
        href: e.homepageLink,
        class: "password-page__homepage-link-text"
    }, ae(a.homepageName), 9, Lk)])), [[i, "password-page-footer"]]) : x("", !0)], 32)], 2)
}
const Nk = oe(wk, [["render", Rk], ["__scopeId", "data-v-827bb7d1"]])
  , Hk = {}
  , Vk = is('<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-334df6f8><path d="M2 4H3.33333H14" stroke="var(--color-gray-dark)" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" data-v-334df6f8></path><path d="M5.3335 4.00004V2.66671C5.3335 2.31309 5.47397 1.97395 5.72402 1.7239C5.97407 1.47385 6.31321 1.33337 6.66683 1.33337H9.3335C9.68712 1.33337 10.0263 1.47385 10.2763 1.7239C10.5264 1.97395 10.6668 2.31309 10.6668 2.66671V4.00004M12.6668 4.00004V13.3334C12.6668 13.687 12.5264 14.0261 12.2763 14.2762C12.0263 14.5262 11.6871 14.6667 11.3335 14.6667H4.66683C4.31321 14.6667 3.97407 14.5262 3.72402 14.2762C3.47397 14.0261 3.3335 13.687 3.3335 13.3334V4.00004H12.6668Z" stroke="var(--color-gray-dark)" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" data-v-334df6f8></path><path d="M6.6665 7.33337V11.3334" stroke="var(--color-gray-dark)" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" data-v-334df6f8></path><path d="M9.3335 7.33337V11.3334" stroke="var(--color-gray-dark)" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" data-v-334df6f8></path></svg>', 1)
  , Uk = [Vk];
function Fk(t, n) {
    return m(),
    y("button", {
        class: "delete-button",
        onClick: n[0] || (n[0] = a => t.$emit("handle-button-click"))
    }, Uk)
}
const jk = oe(Hk, [["render", Fk], ["__scopeId", "data-v-334df6f8"]])
  , Gk = {}
  , Yk = t => (sa("data-v-76122c3e"),
t = t(),
la(),
t)
  , Wk = {
    class: "close-button"
}
  , $k = Yk( () => C("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
}, [C("path", {
    d: "M12 4L4 12",
    stroke: "currentColor",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
}), C("path", {
    d: "M4 4L12 12",
    stroke: "currentColor",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
})], -1))
  , qk = [$k];
function zk(t, n) {
    return m(),
    y("button", Wk, qk)
}
const Ts = oe(Gk, [["render", zk], ["__scopeId", "data-v-76122c3e"]])
  , Zk = re({
    name: "Drawer",
    components: {
        CloseButton: Ts
    },
    props: {
        placement: {
            type: String,
            default: "right",
            validator: t => ["right", "left"].includes(t)
        },
        width: {
            type: String,
            default: "350px"
        },
        alwaysShowCloseButton: {
            type: Boolean,
            default: !0
        },
        isOpen: {
            type: Boolean,
            default: !1
        },
        topPositionMobile: {
            type: String,
            default: "0px"
        },
        isMobile: {
            type: Boolean,
            default: !1
        }
    },
    emits: ["close-drawer"],
    setup(t, n) {
        const a = E(null);
        return Pe( () => {
            qo(a, () => {
                t.isMobile || n.emit("close-drawer")
            }
            )
        }
        ),
        {
            siteDrawerRef: a
        }
    },
    computed: {
        computedStyles() {
            return {
                "--sidebar-width": this.width,
                "--sidebar-top-mobile": this.topPositionMobile
            }
        }
    },
    methods: {
        closeDrawer() {
            this.$emit("close-drawer")
        }
    }
})
  , Kk = {
    class: "site-drawer__content"
};
function Qk(t, n, a, e, r, o) {
    const i = mt("CloseButton")
      , s = lt("qa");
    return m(),
    y("div", null, [t.isOpen && !t.isMobile ? (m(),
    y("div", {
        key: 0,
        class: J(["site-drawer-overlay", {
            "site-drawer-overlay--open": t.isOpen
        }]),
        onTouchend: n[0] || (n[0] = xe( () => {}
        , ["stop", "prevent"]))
    }, null, 34)) : x("", !0), Ae(ra, {
        name: t.placement === "right" ? "drawer-slide-right" : "drawer-slide-left"
    }, {
        default: ye( () => [t.isOpen ? (m(),
        y("aside", {
            key: 0,
            ref: "siteDrawerRef",
            class: J([{
                "site-drawer--left": t.placement === "left",
                "site-drawer--right": t.placement === "right"
            }, "site-drawer"]),
            style: ze(t.computedStyles)
        }, [C("div", Kk, [se((m(),
        y("span", {
            class: J(["site-drawer__close-button", {
                "site-drawer__close-button--hide-mobile": !t.alwaysShowCloseButton
            }]),
            onClick: n[1] || (n[1] = (...l) => t.closeDrawer && t.closeDrawer(...l))
        }, [Ae(i)], 2)), [[s, "builder-sitedrawer-btn-close"]]), ne(t.$slots, "default", {}, void 0, !0)])], 6)) : x("", !0)]),
        _: 3
    }, 8, ["name"])])
}
const Xk = oe(Zk, [["render", Qk], ["__scopeId", "data-v-3c448ca7"]])
  , oc = 90
  , Jk = re({
    __name: "EcommerceShoppingCart",
    props: {
        stickyBarHeight: {
            default: 0
        },
        isLoading: {
            type: Boolean
        },
        isShoppingCartOpen: {
            type: Boolean
        },
        translations: {
            default: () => ({})
        },
        language: {},
        isHeaderSticky: {
            type: Boolean
        },
        isNavHidden: {
            type: Boolean,
            default: !1
        },
        siteId: {
            default: ""
        },
        quantifiedCartItemsList: {
            default: () => []
        },
        shoppingCartItems: {
            default: () => []
        },
        variantsQuantity: {
            default: () => []
        },
        isMobile: {
            type: Boolean
        }
    },
    emits: ["close-shopping-cart", "checkout-button-click", "set-shopping-cart-items"],
    setup(t, {expose: n, emit: a}) {
        n();
        const e = t
          , r = a
          , o = E(!1)
          , i = E("0px")
          , s = E(null)
          , l = E(!0)
          , d = E(0)
          , p = u( () => e.quantifiedCartItemsList.reduce( (_, A) => _ + (A.product?.variants[0]?.prices[0]?.sale_amount || A.product?.variants[0]?.prices[0]?.amount || 0) * A.quantity, 0))
          , g = u( () => e.quantifiedCartItemsList[0]?.product?.variants[0]?.prices[0]?.currency)
          , v = u( () => ({
            "--image-width": `${oc}px`
        }))
          , f = u( () => e.shoppingCartItems.length >= Zn)
          , b = _ => {
            if (_.product.variants[0].manage_inventory) {
                const P = e.variantsQuantity.find(H => H.id === _.product.variants[0].id)?.inventory_quantity || 0;
                return _.quantity < P
            }
            return !0
        }
          , D = _ => {
            r("set-shopping-cart-items", [...e.shoppingCartItems, _.product])
        }
          , T = _ => {
            const A = [...e.shoppingCartItems]
              , P = e.shoppingCartItems.filter(k => k.variants[0].id === _.product.variants[0].id)
              , H = e.shoppingCartItems.lastIndexOf(P[P.length - 1]);
            A.splice(H, 1),
            r("set-shopping-cart-items", A)
        }
          , w = (_, A) => {
            if (_ > A.quantity) {
                D(A);
                return
            }
            T(A)
        }
          , S = _ => {
            const A = e.shoppingCartItems.reduce( (P, H) => {
                const k = H.variants[0].id === _.variants[0].id
                  , h = _.custom_fields?.every(W => H.custom_fields?.some(U => Jr(U, W)));
                return k && h ? P : [...P, H]
            }
            , []);
            r("set-shopping-cart-items", A)
        }
          , B = () => {
            r("close-shopping-cart")
        }
          , I = () => {
            const _ = Number(d.value) + e.stickyBarHeight;
            o.value = e.isHeaderSticky || (e.isNavHidden ? !1 : window.scrollY <= _ * .4)
        }
          , R = () => {
            const _ = d.value + e.stickyBarHeight
              , A = e.isHeaderSticky ? _ : _ - window.scrollY;
            i.value = `${o.value ? Math.floor(A) - 1 : 0}px`
        }
          , $ = () => {
            I(),
            R()
        }
          , G = () => {
            d.value = document.querySelector(".block-header")?.clientHeight || 0
        }
          , ee = _ => new Date(_.product?.variants[0]?.booking_event?.date).toLocaleDateString(e.language) || null
          , K = _ => {
            const A = new Date(_.product?.variants[0]?.booking_event?.time_slot)
              , P = A.getTime()
              , H = new Date(P + $i(_.product))
              , k = A.toLocaleTimeString(e.language, {
                hour: "2-digit",
                minute: "2-digit"
            })
              , h = H.toLocaleTimeString(e.language, {
                hour: "2-digit",
                minute: "2-digit"
            });
            return `${k} - ${h}`
        }
          , M = _ => _.product?.type.value === st.BOOKING
          , j = _ => _.product?.type.value === st.DIGITAL
          , q = _ => _.product.variants[0].image_url || _.product.thumbnail
          , Y = _ => Gi(_.product) ? e.translations.free || "Free" : yn({
            amount: _.product.variants[0].prices[0].amount,
            currency: _.product.variants[0].prices[0].currency
        });
        Fe( () => e.isShoppingCartOpen, _ => {
            document.documentElement.style.overflow = _ ? "hidden" : "auto"
        }
        ),
        Fe(d, () => {
            $()
        }
        ),
        Pe( () => {
            const _ = document.querySelector(".block-header");
            _ && (s.value = new ResizeObserver( () => {
                G()
            }
            ),
            s.value.observe(_)),
            window.addEventListener("scroll", $)
        }
        ),
        Kt( () => {
            s.value?.disconnect(),
            window.removeEventListener("scroll", $)
        }
        );
        const L = {
            IMAGE_WIDTH_PX: oc,
            props: e,
            emits: r,
            isHeaderVisible: o,
            topPositionMobile: i,
            resizeObserver: s,
            isCustomFieldValid: l,
            headerHeight: d,
            totalPrice: p,
            currencyCode: g,
            computedStyle: v,
            isLimitReached: f,
            isStockAvailable: b,
            increaseQuantity: D,
            decreaseQuantity: T,
            handleQuantityChange: w,
            removeProduct: S,
            closeShoppingCart: B,
            setHeaderVisibility: I,
            setTopPositionMobile: R,
            setHeaderVisibilityValues: $,
            setHeaderHeight: G,
            getFormattedSelectedDate: ee,
            getFormattedTime: K,
            getIsProductTypeBooking: M,
            getIsProductTypeDigital: j,
            getProductImage: q,
            getProductPrice: Y,
            DeleteButton: jk,
            Drawer: Xk,
            get formatPrice() {
                return yn
            },
            ProductMediaElement: Wo,
            QuantityPicker: Lu,
            get getFormattedBookingDuration() {
                return ws
            },
            get getIsFreeProductTypeFree() {
                return Gi
            }
        };
        return Object.defineProperty(L, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        L
    }
})
  , Hu = t => (sa("data-v-2cca3641"),
t = t(),
la(),
t)
  , e1 = {
    class: "cart"
}
  , t1 = {
    class: "cart__content"
}
  , a1 = {
    key: 0,
    class: "cart__content-title cart__content-title--with-margin"
}
  , n1 = {
    key: 1,
    class: "cart__content-title"
}
  , r1 = {
    class: "cart__list"
}
  , o1 = {
    class: "cart__title"
}
  , i1 = {
    key: 0,
    class: "cart__text"
}
  , s1 = {
    key: 1,
    class: "cart__text cart__sale-price"
}
  , l1 = {
    class: "cart__text cart__duration"
}
  , c1 = {
    class: "cart__time-wrapper"
}
  , u1 = Hu( () => C("svg", {
    width: "16",
    height: "18",
    viewBox: "0 0 16 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    class: "cart__time-icon"
}, [C("path", {
    d: "M5.5 8.3335H3.83333V10.0002H5.5V8.3335ZM8.83333 8.3335H7.16667V10.0002H8.83333V8.3335ZM12.1667 8.3335H10.5V10.0002H12.1667V8.3335ZM13.8333 2.50016H13V0.833496H11.3333V2.50016H4.66667V0.833496H3V2.50016H2.16667C1.24167 2.50016 0.5 3.25016 0.5 4.16683V15.8335C0.5 16.2755 0.675595 16.6994 0.988155 17.012C1.30072 17.3246 1.72464 17.5002 2.16667 17.5002H13.8333C14.2754 17.5002 14.6993 17.3246 15.0118 17.012C15.3244 16.6994 15.5 16.2755 15.5 15.8335V4.16683C15.5 3.7248 15.3244 3.30088 15.0118 2.98832C14.6993 2.67576 14.2754 2.50016 13.8333 2.50016ZM13.8333 15.8335H2.16667V6.66683H13.8333V15.8335Z",
    fill: "currentColor"
})], -1))
  , d1 = {
    class: "cart__text cart__text--lighter"
}
  , m1 = {
    class: "cart__time-wrapper"
}
  , g1 = Hu( () => C("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    class: "cart__time-icon"
}, [C("path", {
    d: "M9.00001 15.6665C12.6667 15.6665 15.6667 12.6665 15.6667 8.99984C15.6667 5.33317 12.6667 2.33317 9.00001 2.33317C5.33334 2.33317 2.33334 5.33317 2.33334 8.99984C2.33334 12.6665 5.33334 15.6665 9.00001 15.6665ZM9.00001 0.666504C13.5833 0.666504 17.3333 4.4165 17.3333 8.99984C17.3333 13.5832 13.5833 17.3332 9.00001 17.3332C4.41667 17.3332 0.666672 13.5832 0.666672 8.99984C0.666672 4.4165 4.41667 0.666504 9.00001 0.666504ZM13.1667 8.58317V9.83317H8.16667V4.83317H9.41667V8.58317H13.1667Z",
    fill: "currentColor"
})], -1))
  , p1 = {
    class: "cart__text cart__text--lighter"
}
  , v1 = {
    key: 3,
    class: "cart__quantity"
}
  , f1 = {
    class: "cart__quantity-title"
}
  , h1 = {
    key: 0,
    class: "cart__footer"
}
  , y1 = {
    class: "cart__title cart__title--with-slot"
}
  , b1 = ["disabled"];
function _1(t, n, a, e, r, o) {
    const i = lt("qa");
    return m(),
    z(e.Drawer, {
        "is-open": a.isShoppingCartOpen,
        "top-position-mobile": e.topPositionMobile,
        style: ze(e.computedStyle),
        "is-mobile": a.isMobile,
        class: "cart-drawer",
        onCloseDrawer: e.closeShoppingCart
    }, {
        default: ye( () => [C("div", e1, [C("div", t1, [a.quantifiedCartItemsList.length ? (m(),
        y("p", n1, ae(a.translations.shoppingBag), 1)) : se((m(),
        y("p", a1, [qe(ae(a.translations.shoppingBagEmpty), 1)])), [[i, "shoppingcart-text-emptystate"]]), C("ul", r1, [(m(!0),
        y(ge, null, Ce(a.quantifiedCartItemsList, s => (m(),
        y("li", {
            key: s.product.variants[0].id,
            class: "cart__list-item"
        }, [s.product.thumbnail ? (m(),
        z(e.ProductMediaElement, {
            key: 0,
            src: e.getProductImage(s),
            alt: s.product.title,
            class: "cart__list-item-image",
            width: e.IMAGE_WIDTH_PX,
            height: e.IMAGE_WIDTH_PX,
            "site-id": a.siteId,
            "enable-srcset": ""
        }, null, 8, ["src", "alt", "site-id"])) : x("", !0), C("div", null, [se((m(),
        y("p", o1, [qe(ae(s.product.title), 1)])), [[i, "shoppingcart-text-product"]]), s.product.options.length ? se((m(),
        y("p", i1, [qe(ae(s.product.variants[0].title), 1)])), [[i, "shoppingcart-text-variant"]]) : x("", !0), se((m(),
        y("p", {
            class: J(["cart__text cart__price", {
                "cart__price--strikethrough": s.product.variants[0].prices[0].sale_amount
            }])
        }, [qe(ae(e.getProductPrice(s)), 1)], 2)), [[i, "shoppingcart-text-price"]]), s.product.variants[0].prices[0].sale_amount ? se((m(),
        y("p", s1, [qe(ae(e.formatPrice({
            amount: s.product.variants[0].prices[0].sale_amount,
            currency: s.product.variants[0].prices[0].currency
        })), 1)])), [[i, "shoppingcart-text-saleprice"]]) : x("", !0), e.getIsProductTypeBooking(s) ? (m(),
        y(ge, {
            key: 2
        }, [se((m(),
        y("p", l1, [qe(ae(e.getFormattedBookingDuration(s.product, a.translations)), 1)])), [[i, "shoppingcart-text-duration"]]), C("div", c1, [u1, C("p", d1, ae(e.getFormattedSelectedDate(s)), 1)]), C("div", m1, [g1, C("p", p1, ae(e.getFormattedTime(s)), 1)])], 64)) : !e.getIsFreeProductTypeFree(s.product) && !e.getIsProductTypeDigital(s) ? (m(),
        y("p", v1, [C("span", f1, ae(a.translations.quantityShort) + ": ", 1), Ae(e.QuantityPicker, {
            "qa-selector": "shoppingcart",
            "is-cart-style": "",
            size: 26,
            "font-size": 14,
            quantity: s.quantity,
            "is-input-disabled": "",
            "is-limit-reached": e.isLimitReached,
            "is-stock-available": e.isStockAvailable(s),
            onQuantityChange: l => e.handleQuantityChange(l, s)
        }, null, 8, ["quantity", "is-limit-reached", "is-stock-available", "onQuantityChange"])])) : x("", !0), s.product.custom_fields?.length ? (m(!0),
        y(ge, {
            key: 4
        }, Ce(s.product.custom_fields, (l, d) => (m(),
        y("div", {
            key: `${l.id}-${d}`,
            class: "cart__text cart__custom-field"
        }, [C("p", null, ae(l.title), 1), C("p", null, ae(l.value), 1)]))), 128)) : x("", !0)]), se(Ae(e.DeleteButton, {
            class: "cart__remove-button",
            onHandleButtonClick: l => e.removeProduct(s.product)
        }, null, 8, ["onHandleButtonClick"]), [[i, "shoppingcart-btn-delete"]])]))), 128))])]), a.quantifiedCartItemsList.length ? (m(),
        y("div", h1, [se((m(),
        y("p", y1, [qe(ae(a.translations.subtotal) + ": ", 1), C("span", null, ae(e.formatPrice({
            amount: e.totalPrice,
            currency: e.currencyCode
        })), 1)])), [[i, "shoppingcart-text-subtotal"]]), se((m(),
        y("button", {
            class: J(["cart__text cart__checkout-button", {
                loading: a.isLoading
            }]),
            disabled: !e.isCustomFieldValid,
            onClick: n[0] || (n[0] = s => t.$emit("checkout-button-click"))
        }, [qe(ae(a.translations.checkout), 1)], 10, b1)), [[i, "shoppingcart-btn-checkout"]])])) : x("", !0)])]),
        _: 1
    }, 8, ["is-open", "top-position-mobile", "style", "is-mobile"])
}
const w1 = oe(Jk, [["render", _1], ["__scopeId", "data-v-2cca3641"]])
  , k1 = re({
    __name: "EcommerceShoppingCartProviderUser",
    props: {
        stickyBarHeight: {
            default: 0
        },
        ecommerceTranslations: {},
        language: {},
        isHeaderSticky: {
            type: Boolean,
            default: !1
        },
        isNavHidden: {
            type: Boolean,
            default: !1
        },
        isInPreviewMode: {
            type: Boolean,
            default: !1
        },
        isMobile: {
            type: Boolean
        }
    },
    setup(t, {expose: n}) {
        n();
        const a = t
          , {siteId: e} = kt()
          , {quantifiedCartItemsList: r, isShoppingCartOpen: o, isCheckoutLoading: i, shoppingCartItems: s, variantsQuantity: l, fetchCartProducts: d, setShoppingCartOpen: p, setShoppingCartItems: g, setIsCheckoutLoading: v} = Ia()
          , {openEcommerceModal: f} = Ca()
          , {initiateCheckout: b} = io()
          , D = async () => {
            await d()
        }
          , T = async () => {
            if (ar() || a.isInPreviewMode) {
                f("EcommerceMessageButtonDisabled");
                return
            }
            i.value || (v(!0),
            await b(s.value).then( () => {
                p(!1),
                v(!1)
            }
            ))
        }
        ;
        Pe(async () => {
            await D()
        }
        );
        const w = {
            props: a,
            siteId: e,
            quantifiedCartItemsList: r,
            isShoppingCartOpen: o,
            isCheckoutLoading: i,
            shoppingCartItems: s,
            variantsQuantity: l,
            fetchCartProducts: d,
            setShoppingCartOpen: p,
            setShoppingCartItems: g,
            setIsCheckoutLoading: v,
            openEcommerceModal: f,
            initiateCheckout: b,
            loadProducts: D,
            initCheckout: T,
            EcommerceShoppingCart: w1
        };
        return Object.defineProperty(w, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        w
    }
});
function S1(t, n, a, e, r, o) {
    const i = lt("qa");
    return se((m(),
    z(e.EcommerceShoppingCart, {
        "is-shopping-cart-open": e.isShoppingCartOpen,
        "is-loading": e.isCheckoutLoading,
        "sticky-bar-height": a.stickyBarHeight,
        "is-header-sticky": a.isHeaderSticky,
        "is-nav-hidden": a.isNavHidden,
        translations: a.ecommerceTranslations,
        language: a.language,
        "site-id": e.siteId,
        "quantified-cart-items-list": e.quantifiedCartItemsList,
        "shopping-cart-items": e.shoppingCartItems,
        "variants-quantity": e.variantsQuantity,
        "is-mobile": a.isMobile,
        onCheckoutButtonClick: e.initCheckout,
        onCloseShoppingCart: n[0] || (n[0] = s => e.setShoppingCartOpen(!1)),
        onSetShoppingCartItems: e.setShoppingCartItems
    }, null, 8, ["is-shopping-cart-open", "is-loading", "sticky-bar-height", "is-header-sticky", "is-nav-hidden", "translations", "language", "site-id", "quantified-cart-items-list", "shopping-cart-items", "variants-quantity", "is-mobile", "onSetShoppingCartItems"])), [[i, "user-section-zyroecommerceshoppingcart"]])
}
const T1 = oe(k1, [["render", S1]])
  , C1 = re({
    components: {
        CloseButton: Ts
    },
    props: {
        backgroundColor: {
            type: String,
            default: "var(--color-light)"
        },
        padding: {
            type: String,
            default: "16px"
        },
        width: {
            type: String,
            default: "auto"
        },
        maxWidth: {
            type: String,
            default: "unset"
        },
        overflow: {
            type: String,
            default: "unset"
        },
        height: {
            type: String,
            default: "auto"
        },
        mobileHeight: {
            type: String,
            default: ""
        }
    },
    setup() {
        const {closeEcommerceModal: t} = Ca();
        return {
            closeEcommerceModal: t
        }
    },
    computed: {
        modalStyle() {
            return {
                "--modal-background-color": this.backgroundColor,
                "--padding": this.padding,
                "--width": this.width,
                "--max-width": this.maxWidth,
                "--overflow": this.overflow,
                "--height": this.height,
                "--mobile-height": this.mobileHeight || this.height
            }
        }
    },
    mounted() {
        this.$refs.modal?.focus()
    },
    methods: {
        handleCloseModalAction() {
            this.closeEcommerceModal();
            const t = new URLSearchParams(window.location.search);
            if (!t.get("open-modal"))
                return;
            t.delete("open-modal"),
            t.delete("product");
            const n = t.toString();
            n && window.history.pushState(null, null, `?${n}`)
        }
    }
})
  , I1 = {
    class: "modal-wrapper"
};
function P1(t, n, a, e, r, o) {
    const i = mt("CloseButton");
    return m(),
    z(ra, {
        name: "fade"
    }, {
        default: ye( () => [C("div", I1, [C("div", {
            tabindex: "-1",
            class: "modal-backdrop",
            onClick: n[0] || (n[0] = (...s) => t.handleCloseModalAction && t.handleCloseModalAction(...s))
        }), C("div", {
            ref: "modal",
            style: ze(t.modalStyle),
            class: "modal",
            tabindex: "0",
            "aria-modal": "true",
            onKeydown: n[1] || (n[1] = He( (...s) => t.handleCloseModalAction && t.handleCloseModalAction(...s), ["esc"]))
        }, [Ae(i, {
            class: "modal__close-button",
            onClick: t.handleCloseModalAction
        }, null, 8, ["onClick"]), ne(t.$slots, "default", {}, void 0, !0)], 36)])]),
        _: 3
    })
}
const pr = oe(C1, [["render", P1], ["__scopeId", "data-v-35831679"]])
  , E1 = {
    __name: "EcommerceProductPreview",
    props: {
        translations: {
            type: Object,
            default: () => {}
        },
        isQuickPreview: {
            type: Boolean,
            default: !1
        },
        currentLocale: {
            type: String,
            required: !0
        },
        isCartVisible: {
            type: Boolean,
            default: !1
        }
    },
    setup(t, {expose: n}) {
        n();
        const a = t
          , {productPreviewData: e, quickPreviewProductId: r} = Ca()
          , {siteId: o} = kt()
          , {legacyProductPages: i} = Ia()
          , s = u( () => Et(e.value.background.origin, e.value.background.path, o.value, {
            width: Xa
        }))
          , l = u( () => Ja(e.value.background.origin, e.value.background.path, o.value, {
            isMobileFullScreen: !1
        }))
          , d = {
            props: a,
            productPreviewData: e,
            quickPreviewProductId: r,
            siteId: o,
            legacyProductPages: i,
            backgroundSrc: s,
            backgroundSrcSet: l,
            BlockBackground: hs,
            ModalLayout: pr,
            BlockEcommerceProductProviderUser: Ru,
            computed: u,
            get useEcommerceModal() {
                return Ca
            },
            get getFullWidthSrcset() {
                return Ja
            },
            get getOptimizedSrc() {
                return Et
            },
            get FULL_WIDTH() {
                return Xa
            },
            get useEcommerceGlobal() {
                return Ia
            },
            get useSiteGlobal() {
                return kt
            }
        };
        return Object.defineProperty(d, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        d
    }
}
  , D1 = {
    class: "ecommerce-product-preview__content-wrapper"
};
function M1(t, n, a, e, r, o) {
    const i = lt("qa");
    return m(),
    z(e.ModalLayout, {
        ref: "modal",
        "max-width": "905px",
        width: "100%",
        padding: "0",
        height: "auto",
        overflow: "auto",
        class: "ecommerce-product-preview"
    }, {
        default: ye( () => [se((m(),
        y("div", D1, [e.productPreviewData.background ? (m(),
        z(e.BlockBackground, {
            key: 0,
            "overlay-opacity": e.productPreviewData.background["overlay-opacity"],
            type: e.productPreviewData.background.current,
            color: e.productPreviewData.background.color,
            gradient: e.productPreviewData.background.gradient,
            src: e.backgroundSrc,
            srcset: e.backgroundSrcSet,
            "is-fixed": e.productPreviewData.attachment === "fixed",
            alt: e.productPreviewData.background && e.productPreviewData.background.alt,
            "video-poster": e.productPreviewData.background.video?.videoThumbnailSrc,
            class: "ecommerce-product-preview__background"
        }, null, 8, ["overlay-opacity", "type", "color", "gradient", "src", "srcset", "is-fixed", "alt", "video-poster"])) : x("", !0), Ae(e.BlockEcommerceProductProviderUser, {
            class: "ecommerce-product-preview__content",
            "is-quick-preview": a.isQuickPreview,
            data: e.productPreviewData,
            "quick-preview-product-id": e.quickPreviewProductId,
            "legacy-product-pages": e.legacyProductPages,
            "is-cart-visible": a.isCartVisible,
            "ecommerce-translations": a.translations
        }, null, 8, ["is-quick-preview", "data", "quick-preview-product-id", "legacy-product-pages", "is-cart-visible", "ecommerce-translations"])])), [[i, "productpreview-modal"]])]),
        _: 1
    }, 512)
}
const A1 = oe(E1, [["render", M1], ["__scopeId", "data-v-fac2fb64"]]);
function ga(t) {
    "@babel/helpers - typeof";
    return ga = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
        return typeof n
    }
    : function(n) {
        return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
    }
    ,
    ga(t)
}
function Le(t) {
    if (t === null || t === !0 || t === !1)
        return NaN;
    var n = Number(t);
    return isNaN(n) ? n : n < 0 ? Math.ceil(n) : Math.floor(n)
}
function ke(t, n) {
    if (n.length < t)
        throw new TypeError(t + " argument" + (t > 1 ? "s" : "") + " required, but only " + n.length + " present")
}
function Ie(t) {
    ke(1, arguments);
    var n = Object.prototype.toString.call(t);
    return t instanceof Date || ga(t) === "object" && n === "[object Date]" ? new Date(t.getTime()) : typeof t == "number" || n === "[object Number]" ? new Date(t) : ((typeof t == "string" || n === "[object String]") && typeof console < "u" && (console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),
    console.warn(new Error().stack)),
    new Date(NaN))
}
function qa(t, n) {
    ke(2, arguments);
    var a = Ie(t)
      , e = Le(n);
    return isNaN(e) ? new Date(NaN) : (e && a.setDate(a.getDate() + e),
    a)
}
function wa(t, n) {
    ke(2, arguments);
    var a = Ie(t)
      , e = Le(n);
    if (isNaN(e))
        return new Date(NaN);
    if (!e)
        return a;
    var r = a.getDate()
      , o = new Date(a.getTime());
    o.setMonth(a.getMonth() + e + 1, 0);
    var i = o.getDate();
    return r >= i ? o : (a.setFullYear(o.getFullYear(), o.getMonth(), r),
    a)
}
function Vu(t, n) {
    if (ke(2, arguments),
    !n || ga(n) !== "object")
        return new Date(NaN);
    var a = n.years ? Le(n.years) : 0
      , e = n.months ? Le(n.months) : 0
      , r = n.weeks ? Le(n.weeks) : 0
      , o = n.days ? Le(n.days) : 0
      , i = n.hours ? Le(n.hours) : 0
      , s = n.minutes ? Le(n.minutes) : 0
      , l = n.seconds ? Le(n.seconds) : 0
      , d = Ie(t)
      , p = e || a ? wa(d, e + a * 12) : d
      , g = o || r ? qa(p, o + r * 7) : p
      , v = s + i * 60
      , f = l + v * 60
      , b = f * 1e3
      , D = new Date(g.getTime() + b);
    return D
}
function O1(t, n) {
    ke(2, arguments);
    var a = Ie(t).getTime()
      , e = Le(n);
    return new Date(a + e)
}
var x1 = {};
function ja() {
    return x1
}
function Ln(t, n) {
    var a, e, r, o, i, s, l, d;
    ke(1, arguments);
    var p = ja()
      , g = Le((a = (e = (r = (o = n?.weekStartsOn) !== null && o !== void 0 ? o : n == null || (i = n.locale) === null || i === void 0 || (s = i.options) === null || s === void 0 ? void 0 : s.weekStartsOn) !== null && r !== void 0 ? r : p.weekStartsOn) !== null && e !== void 0 ? e : (l = p.locale) === null || l === void 0 || (d = l.options) === null || d === void 0 ? void 0 : d.weekStartsOn) !== null && a !== void 0 ? a : 0);
    if (!(g >= 0 && g <= 6))
        throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    var v = Ie(t)
      , f = v.getDay()
      , b = (f < g ? 7 : 0) + f - g;
    return v.setDate(v.getDate() - b),
    v.setHours(0, 0, 0, 0),
    v
}
function No(t) {
    return ke(1, arguments),
    Ln(t, {
        weekStartsOn: 1
    })
}
function B1(t) {
    ke(1, arguments);
    var n = Ie(t)
      , a = n.getFullYear()
      , e = new Date(0);
    e.setFullYear(a + 1, 0, 4),
    e.setHours(0, 0, 0, 0);
    var r = No(e)
      , o = new Date(0);
    o.setFullYear(a, 0, 4),
    o.setHours(0, 0, 0, 0);
    var i = No(o);
    return n.getTime() >= r.getTime() ? a + 1 : n.getTime() >= i.getTime() ? a : a - 1
}
function L1(t) {
    ke(1, arguments);
    var n = B1(t)
      , a = new Date(0);
    a.setFullYear(n, 0, 4),
    a.setHours(0, 0, 0, 0);
    var e = No(a);
    return e
}
function Ho(t) {
    var n = new Date(Date.UTC(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds()));
    return n.setUTCFullYear(t.getFullYear()),
    t.getTime() - n.getTime()
}
function ic(t) {
    ke(1, arguments);
    var n = Ie(t);
    return n.setHours(0, 0, 0, 0),
    n
}
var R1 = 864e5;
function N1(t, n) {
    ke(2, arguments);
    var a = ic(t)
      , e = ic(n)
      , r = a.getTime() - Ho(a)
      , o = e.getTime() - Ho(e);
    return Math.round((r - o) / R1)
}
function H1(t, n) {
    ke(2, arguments);
    var a = Le(n)
      , e = a * 3;
    return wa(t, e)
}
function Cs(t, n) {
    ke(2, arguments);
    var a = Le(n);
    return wa(t, a * 12)
}
var Is = 6e4
  , Ps = 36e5
  , V1 = 1e3;
function Uu(t) {
    return ke(1, arguments),
    t instanceof Date || ga(t) === "object" && Object.prototype.toString.call(t) === "[object Date]"
}
function Or(t) {
    if (ke(1, arguments),
    !Uu(t) && typeof t != "number")
        return !1;
    var n = Ie(t);
    return !isNaN(Number(n))
}
function sc(t) {
    ke(1, arguments);
    var n = Ie(t)
      , a = Math.floor(n.getMonth() / 3) + 1;
    return a
}
function Fu(t, n) {
    var a;
    ke(1, arguments);
    var e = t || {}
      , r = Ie(e.start)
      , o = Ie(e.end)
      , i = o.getTime();
    if (!(r.getTime() <= i))
        throw new RangeError("Invalid interval");
    var s = []
      , l = r;
    l.setHours(0, 0, 0, 0);
    var d = Number((a = void 0) !== null && a !== void 0 ? a : 1);
    if (d < 1 || isNaN(d))
        throw new RangeError("`options.step` must be a number greater than 1");
    for (; l.getTime() <= i; )
        s.push(Ie(l)),
        l.setDate(l.getDate() + d),
        l.setHours(0, 0, 0, 0);
    return s
}
function eo(t) {
    ke(1, arguments);
    var n = Ie(t)
      , a = n.getMonth()
      , e = a - a % 3;
    return n.setMonth(e, 1),
    n.setHours(0, 0, 0, 0),
    n
}
function U1(t) {
    ke(1, arguments);
    var n = t || {}
      , a = Ie(n.start)
      , e = Ie(n.end)
      , r = e.getTime();
    if (!(a.getTime() <= r))
        throw new RangeError("Invalid interval");
    var o = eo(a)
      , i = eo(e);
    r = i.getTime();
    for (var s = [], l = o; l.getTime() <= r; )
        s.push(Ie(l)),
        l = H1(l, 1);
    return s
}
function F1(t) {
    ke(1, arguments);
    var n = Ie(t)
      , a = n.getFullYear();
    return n.setFullYear(a + 1, 0, 0),
    n.setHours(23, 59, 59, 999),
    n
}
function j1(t) {
    ke(1, arguments);
    var n = Ie(t)
      , a = new Date(0);
    return a.setFullYear(n.getFullYear(), 0, 1),
    a.setHours(0, 0, 0, 0),
    a
}
function G1(t, n) {
    var a, e, r, o, i, s, l, d;
    ke(1, arguments);
    var p = ja()
      , g = Le((a = (e = (r = (o = n?.weekStartsOn) !== null && o !== void 0 ? o : n == null || (i = n.locale) === null || i === void 0 || (s = i.options) === null || s === void 0 ? void 0 : s.weekStartsOn) !== null && r !== void 0 ? r : p.weekStartsOn) !== null && e !== void 0 ? e : (l = p.locale) === null || l === void 0 || (d = l.options) === null || d === void 0 ? void 0 : d.weekStartsOn) !== null && a !== void 0 ? a : 0);
    if (!(g >= 0 && g <= 6))
        throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    var v = Ie(t)
      , f = v.getDay()
      , b = (f < g ? -7 : 0) + 6 - (f - g);
    return v.setDate(v.getDate() + b),
    v.setHours(23, 59, 59, 999),
    v
}
function lc(t) {
    ke(1, arguments);
    var n = Ie(t)
      , a = n.getMonth()
      , e = a - a % 3 + 3;
    return n.setMonth(e, 0),
    n.setHours(23, 59, 59, 999),
    n
}
function ju(t, n) {
    ke(2, arguments);
    var a = Le(n);
    return O1(t, -a)
}
var Y1 = 864e5;
function W1(t) {
    ke(1, arguments);
    var n = Ie(t)
      , a = n.getTime();
    n.setUTCMonth(0, 1),
    n.setUTCHours(0, 0, 0, 0);
    var e = n.getTime()
      , r = a - e;
    return Math.floor(r / Y1) + 1
}
function lr(t) {
    ke(1, arguments);
    var n = 1
      , a = Ie(t)
      , e = a.getUTCDay()
      , r = (e < n ? 7 : 0) + e - n;
    return a.setUTCDate(a.getUTCDate() - r),
    a.setUTCHours(0, 0, 0, 0),
    a
}
function Gu(t) {
    ke(1, arguments);
    var n = Ie(t)
      , a = n.getUTCFullYear()
      , e = new Date(0);
    e.setUTCFullYear(a + 1, 0, 4),
    e.setUTCHours(0, 0, 0, 0);
    var r = lr(e)
      , o = new Date(0);
    o.setUTCFullYear(a, 0, 4),
    o.setUTCHours(0, 0, 0, 0);
    var i = lr(o);
    return n.getTime() >= r.getTime() ? a + 1 : n.getTime() >= i.getTime() ? a : a - 1
}
function $1(t) {
    ke(1, arguments);
    var n = Gu(t)
      , a = new Date(0);
    a.setUTCFullYear(n, 0, 4),
    a.setUTCHours(0, 0, 0, 0);
    var e = lr(a);
    return e
}
var q1 = 6048e5;
function Yu(t) {
    ke(1, arguments);
    var n = Ie(t)
      , a = lr(n).getTime() - $1(n).getTime();
    return Math.round(a / q1) + 1
}
function Rn(t, n) {
    var a, e, r, o, i, s, l, d;
    ke(1, arguments);
    var p = ja()
      , g = Le((a = (e = (r = (o = n?.weekStartsOn) !== null && o !== void 0 ? o : n == null || (i = n.locale) === null || i === void 0 || (s = i.options) === null || s === void 0 ? void 0 : s.weekStartsOn) !== null && r !== void 0 ? r : p.weekStartsOn) !== null && e !== void 0 ? e : (l = p.locale) === null || l === void 0 || (d = l.options) === null || d === void 0 ? void 0 : d.weekStartsOn) !== null && a !== void 0 ? a : 0);
    if (!(g >= 0 && g <= 6))
        throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    var v = Ie(t)
      , f = v.getUTCDay()
      , b = (f < g ? 7 : 0) + f - g;
    return v.setUTCDate(v.getUTCDate() - b),
    v.setUTCHours(0, 0, 0, 0),
    v
}
function Es(t, n) {
    var a, e, r, o, i, s, l, d;
    ke(1, arguments);
    var p = Ie(t)
      , g = p.getUTCFullYear()
      , v = ja()
      , f = Le((a = (e = (r = (o = n?.firstWeekContainsDate) !== null && o !== void 0 ? o : n == null || (i = n.locale) === null || i === void 0 || (s = i.options) === null || s === void 0 ? void 0 : s.firstWeekContainsDate) !== null && r !== void 0 ? r : v.firstWeekContainsDate) !== null && e !== void 0 ? e : (l = v.locale) === null || l === void 0 || (d = l.options) === null || d === void 0 ? void 0 : d.firstWeekContainsDate) !== null && a !== void 0 ? a : 1);
    if (!(f >= 1 && f <= 7))
        throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    var b = new Date(0);
    b.setUTCFullYear(g + 1, 0, f),
    b.setUTCHours(0, 0, 0, 0);
    var D = Rn(b, n)
      , T = new Date(0);
    T.setUTCFullYear(g, 0, f),
    T.setUTCHours(0, 0, 0, 0);
    var w = Rn(T, n);
    return p.getTime() >= D.getTime() ? g + 1 : p.getTime() >= w.getTime() ? g : g - 1
}
function z1(t, n) {
    var a, e, r, o, i, s, l, d;
    ke(1, arguments);
    var p = ja()
      , g = Le((a = (e = (r = (o = n?.firstWeekContainsDate) !== null && o !== void 0 ? o : n == null || (i = n.locale) === null || i === void 0 || (s = i.options) === null || s === void 0 ? void 0 : s.firstWeekContainsDate) !== null && r !== void 0 ? r : p.firstWeekContainsDate) !== null && e !== void 0 ? e : (l = p.locale) === null || l === void 0 || (d = l.options) === null || d === void 0 ? void 0 : d.firstWeekContainsDate) !== null && a !== void 0 ? a : 1)
      , v = Es(t, n)
      , f = new Date(0);
    f.setUTCFullYear(v, 0, g),
    f.setUTCHours(0, 0, 0, 0);
    var b = Rn(f, n);
    return b
}
var Z1 = 6048e5;
function Wu(t, n) {
    ke(1, arguments);
    var a = Ie(t)
      , e = Rn(a, n).getTime() - z1(a, n).getTime();
    return Math.round(e / Z1) + 1
}
function dt(t, n) {
    for (var a = t < 0 ? "-" : "", e = Math.abs(t).toString(); e.length < n; )
        e = "0" + e;
    return a + e
}
var an = {
    y: function(n, a) {
        var e = n.getUTCFullYear()
          , r = e > 0 ? e : 1 - e;
        return dt(a === "yy" ? r % 100 : r, a.length)
    },
    M: function(n, a) {
        var e = n.getUTCMonth();
        return a === "M" ? String(e + 1) : dt(e + 1, 2)
    },
    d: function(n, a) {
        return dt(n.getUTCDate(), a.length)
    },
    a: function(n, a) {
        var e = n.getUTCHours() / 12 >= 1 ? "pm" : "am";
        switch (a) {
        case "a":
        case "aa":
            return e.toUpperCase();
        case "aaa":
            return e;
        case "aaaaa":
            return e[0];
        case "aaaa":
        default:
            return e === "am" ? "a.m." : "p.m."
        }
    },
    h: function(n, a) {
        return dt(n.getUTCHours() % 12 || 12, a.length)
    },
    H: function(n, a) {
        return dt(n.getUTCHours(), a.length)
    },
    m: function(n, a) {
        return dt(n.getUTCMinutes(), a.length)
    },
    s: function(n, a) {
        return dt(n.getUTCSeconds(), a.length)
    },
    S: function(n, a) {
        var e = a.length
          , r = n.getUTCMilliseconds()
          , o = Math.floor(r * Math.pow(10, e - 3));
        return dt(o, a.length)
    }
}
  , Gn = {
    am: "am",
    pm: "pm",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
}
  , K1 = {
    G: function(n, a, e) {
        var r = n.getUTCFullYear() > 0 ? 1 : 0;
        switch (a) {
        case "G":
        case "GG":
        case "GGG":
            return e.era(r, {
                width: "abbreviated"
            });
        case "GGGGG":
            return e.era(r, {
                width: "narrow"
            });
        case "GGGG":
        default:
            return e.era(r, {
                width: "wide"
            })
        }
    },
    y: function(n, a, e) {
        if (a === "yo") {
            var r = n.getUTCFullYear()
              , o = r > 0 ? r : 1 - r;
            return e.ordinalNumber(o, {
                unit: "year"
            })
        }
        return an.y(n, a)
    },
    Y: function(n, a, e, r) {
        var o = Es(n, r)
          , i = o > 0 ? o : 1 - o;
        if (a === "YY") {
            var s = i % 100;
            return dt(s, 2)
        }
        return a === "Yo" ? e.ordinalNumber(i, {
            unit: "year"
        }) : dt(i, a.length)
    },
    R: function(n, a) {
        var e = Gu(n);
        return dt(e, a.length)
    },
    u: function(n, a) {
        var e = n.getUTCFullYear();
        return dt(e, a.length)
    },
    Q: function(n, a, e) {
        var r = Math.ceil((n.getUTCMonth() + 1) / 3);
        switch (a) {
        case "Q":
            return String(r);
        case "QQ":
            return dt(r, 2);
        case "Qo":
            return e.ordinalNumber(r, {
                unit: "quarter"
            });
        case "QQQ":
            return e.quarter(r, {
                width: "abbreviated",
                context: "formatting"
            });
        case "QQQQQ":
            return e.quarter(r, {
                width: "narrow",
                context: "formatting"
            });
        case "QQQQ":
        default:
            return e.quarter(r, {
                width: "wide",
                context: "formatting"
            })
        }
    },
    q: function(n, a, e) {
        var r = Math.ceil((n.getUTCMonth() + 1) / 3);
        switch (a) {
        case "q":
            return String(r);
        case "qq":
            return dt(r, 2);
        case "qo":
            return e.ordinalNumber(r, {
                unit: "quarter"
            });
        case "qqq":
            return e.quarter(r, {
                width: "abbreviated",
                context: "standalone"
            });
        case "qqqqq":
            return e.quarter(r, {
                width: "narrow",
                context: "standalone"
            });
        case "qqqq":
        default:
            return e.quarter(r, {
                width: "wide",
                context: "standalone"
            })
        }
    },
    M: function(n, a, e) {
        var r = n.getUTCMonth();
        switch (a) {
        case "M":
        case "MM":
            return an.M(n, a);
        case "Mo":
            return e.ordinalNumber(r + 1, {
                unit: "month"
            });
        case "MMM":
            return e.month(r, {
                width: "abbreviated",
                context: "formatting"
            });
        case "MMMMM":
            return e.month(r, {
                width: "narrow",
                context: "formatting"
            });
        case "MMMM":
        default:
            return e.month(r, {
                width: "wide",
                context: "formatting"
            })
        }
    },
    L: function(n, a, e) {
        var r = n.getUTCMonth();
        switch (a) {
        case "L":
            return String(r + 1);
        case "LL":
            return dt(r + 1, 2);
        case "Lo":
            return e.ordinalNumber(r + 1, {
                unit: "month"
            });
        case "LLL":
            return e.month(r, {
                width: "abbreviated",
                context: "standalone"
            });
        case "LLLLL":
            return e.month(r, {
                width: "narrow",
                context: "standalone"
            });
        case "LLLL":
        default:
            return e.month(r, {
                width: "wide",
                context: "standalone"
            })
        }
    },
    w: function(n, a, e, r) {
        var o = Wu(n, r);
        return a === "wo" ? e.ordinalNumber(o, {
            unit: "week"
        }) : dt(o, a.length)
    },
    I: function(n, a, e) {
        var r = Yu(n);
        return a === "Io" ? e.ordinalNumber(r, {
            unit: "week"
        }) : dt(r, a.length)
    },
    d: function(n, a, e) {
        return a === "do" ? e.ordinalNumber(n.getUTCDate(), {
            unit: "date"
        }) : an.d(n, a)
    },
    D: function(n, a, e) {
        var r = W1(n);
        return a === "Do" ? e.ordinalNumber(r, {
            unit: "dayOfYear"
        }) : dt(r, a.length)
    },
    E: function(n, a, e) {
        var r = n.getUTCDay();
        switch (a) {
        case "E":
        case "EE":
        case "EEE":
            return e.day(r, {
                width: "abbreviated",
                context: "formatting"
            });
        case "EEEEE":
            return e.day(r, {
                width: "narrow",
                context: "formatting"
            });
        case "EEEEEE":
            return e.day(r, {
                width: "short",
                context: "formatting"
            });
        case "EEEE":
        default:
            return e.day(r, {
                width: "wide",
                context: "formatting"
            })
        }
    },
    e: function(n, a, e, r) {
        var o = n.getUTCDay()
          , i = (o - r.weekStartsOn + 8) % 7 || 7;
        switch (a) {
        case "e":
            return String(i);
        case "ee":
            return dt(i, 2);
        case "eo":
            return e.ordinalNumber(i, {
                unit: "day"
            });
        case "eee":
            return e.day(o, {
                width: "abbreviated",
                context: "formatting"
            });
        case "eeeee":
            return e.day(o, {
                width: "narrow",
                context: "formatting"
            });
        case "eeeeee":
            return e.day(o, {
                width: "short",
                context: "formatting"
            });
        case "eeee":
        default:
            return e.day(o, {
                width: "wide",
                context: "formatting"
            })
        }
    },
    c: function(n, a, e, r) {
        var o = n.getUTCDay()
          , i = (o - r.weekStartsOn + 8) % 7 || 7;
        switch (a) {
        case "c":
            return String(i);
        case "cc":
            return dt(i, a.length);
        case "co":
            return e.ordinalNumber(i, {
                unit: "day"
            });
        case "ccc":
            return e.day(o, {
                width: "abbreviated",
                context: "standalone"
            });
        case "ccccc":
            return e.day(o, {
                width: "narrow",
                context: "standalone"
            });
        case "cccccc":
            return e.day(o, {
                width: "short",
                context: "standalone"
            });
        case "cccc":
        default:
            return e.day(o, {
                width: "wide",
                context: "standalone"
            })
        }
    },
    i: function(n, a, e) {
        var r = n.getUTCDay()
          , o = r === 0 ? 7 : r;
        switch (a) {
        case "i":
            return String(o);
        case "ii":
            return dt(o, a.length);
        case "io":
            return e.ordinalNumber(o, {
                unit: "day"
            });
        case "iii":
            return e.day(r, {
                width: "abbreviated",
                context: "formatting"
            });
        case "iiiii":
            return e.day(r, {
                width: "narrow",
                context: "formatting"
            });
        case "iiiiii":
            return e.day(r, {
                width: "short",
                context: "formatting"
            });
        case "iiii":
        default:
            return e.day(r, {
                width: "wide",
                context: "formatting"
            })
        }
    },
    a: function(n, a, e) {
        var r = n.getUTCHours()
          , o = r / 12 >= 1 ? "pm" : "am";
        switch (a) {
        case "a":
        case "aa":
            return e.dayPeriod(o, {
                width: "abbreviated",
                context: "formatting"
            });
        case "aaa":
            return e.dayPeriod(o, {
                width: "abbreviated",
                context: "formatting"
            }).toLowerCase();
        case "aaaaa":
            return e.dayPeriod(o, {
                width: "narrow",
                context: "formatting"
            });
        case "aaaa":
        default:
            return e.dayPeriod(o, {
                width: "wide",
                context: "formatting"
            })
        }
    },
    b: function(n, a, e) {
        var r = n.getUTCHours(), o;
        switch (r === 12 ? o = Gn.noon : r === 0 ? o = Gn.midnight : o = r / 12 >= 1 ? "pm" : "am",
        a) {
        case "b":
        case "bb":
            return e.dayPeriod(o, {
                width: "abbreviated",
                context: "formatting"
            });
        case "bbb":
            return e.dayPeriod(o, {
                width: "abbreviated",
                context: "formatting"
            }).toLowerCase();
        case "bbbbb":
            return e.dayPeriod(o, {
                width: "narrow",
                context: "formatting"
            });
        case "bbbb":
        default:
            return e.dayPeriod(o, {
                width: "wide",
                context: "formatting"
            })
        }
    },
    B: function(n, a, e) {
        var r = n.getUTCHours(), o;
        switch (r >= 17 ? o = Gn.evening : r >= 12 ? o = Gn.afternoon : r >= 4 ? o = Gn.morning : o = Gn.night,
        a) {
        case "B":
        case "BB":
        case "BBB":
            return e.dayPeriod(o, {
                width: "abbreviated",
                context: "formatting"
            });
        case "BBBBB":
            return e.dayPeriod(o, {
                width: "narrow",
                context: "formatting"
            });
        case "BBBB":
        default:
            return e.dayPeriod(o, {
                width: "wide",
                context: "formatting"
            })
        }
    },
    h: function(n, a, e) {
        if (a === "ho") {
            var r = n.getUTCHours() % 12;
            return r === 0 && (r = 12),
            e.ordinalNumber(r, {
                unit: "hour"
            })
        }
        return an.h(n, a)
    },
    H: function(n, a, e) {
        return a === "Ho" ? e.ordinalNumber(n.getUTCHours(), {
            unit: "hour"
        }) : an.H(n, a)
    },
    K: function(n, a, e) {
        var r = n.getUTCHours() % 12;
        return a === "Ko" ? e.ordinalNumber(r, {
            unit: "hour"
        }) : dt(r, a.length)
    },
    k: function(n, a, e) {
        var r = n.getUTCHours();
        return r === 0 && (r = 24),
        a === "ko" ? e.ordinalNumber(r, {
            unit: "hour"
        }) : dt(r, a.length)
    },
    m: function(n, a, e) {
        return a === "mo" ? e.ordinalNumber(n.getUTCMinutes(), {
            unit: "minute"
        }) : an.m(n, a)
    },
    s: function(n, a, e) {
        return a === "so" ? e.ordinalNumber(n.getUTCSeconds(), {
            unit: "second"
        }) : an.s(n, a)
    },
    S: function(n, a) {
        return an.S(n, a)
    },
    X: function(n, a, e, r) {
        var o = r._originalDate || n
          , i = o.getTimezoneOffset();
        if (i === 0)
            return "Z";
        switch (a) {
        case "X":
            return uc(i);
        case "XXXX":
        case "XX":
            return Sn(i);
        case "XXXXX":
        case "XXX":
        default:
            return Sn(i, ":")
        }
    },
    x: function(n, a, e, r) {
        var o = r._originalDate || n
          , i = o.getTimezoneOffset();
        switch (a) {
        case "x":
            return uc(i);
        case "xxxx":
        case "xx":
            return Sn(i);
        case "xxxxx":
        case "xxx":
        default:
            return Sn(i, ":")
        }
    },
    O: function(n, a, e, r) {
        var o = r._originalDate || n
          , i = o.getTimezoneOffset();
        switch (a) {
        case "O":
        case "OO":
        case "OOO":
            return "GMT" + cc(i, ":");
        case "OOOO":
        default:
            return "GMT" + Sn(i, ":")
        }
    },
    z: function(n, a, e, r) {
        var o = r._originalDate || n
          , i = o.getTimezoneOffset();
        switch (a) {
        case "z":
        case "zz":
        case "zzz":
            return "GMT" + cc(i, ":");
        case "zzzz":
        default:
            return "GMT" + Sn(i, ":")
        }
    },
    t: function(n, a, e, r) {
        var o = r._originalDate || n
          , i = Math.floor(o.getTime() / 1e3);
        return dt(i, a.length)
    },
    T: function(n, a, e, r) {
        var o = r._originalDate || n
          , i = o.getTime();
        return dt(i, a.length)
    }
};
function cc(t, n) {
    var a = t > 0 ? "-" : "+"
      , e = Math.abs(t)
      , r = Math.floor(e / 60)
      , o = e % 60;
    if (o === 0)
        return a + String(r);
    var i = n;
    return a + String(r) + i + dt(o, 2)
}
function uc(t, n) {
    if (t % 60 === 0) {
        var a = t > 0 ? "-" : "+";
        return a + dt(Math.abs(t) / 60, 2)
    }
    return Sn(t, n)
}
function Sn(t, n) {
    var a = n || ""
      , e = t > 0 ? "-" : "+"
      , r = Math.abs(t)
      , o = dt(Math.floor(r / 60), 2)
      , i = dt(r % 60, 2);
    return e + o + a + i
}
var dc = function(n, a) {
    switch (n) {
    case "P":
        return a.date({
            width: "short"
        });
    case "PP":
        return a.date({
            width: "medium"
        });
    case "PPP":
        return a.date({
            width: "long"
        });
    case "PPPP":
    default:
        return a.date({
            width: "full"
        })
    }
}
  , $u = function(n, a) {
    switch (n) {
    case "p":
        return a.time({
            width: "short"
        });
    case "pp":
        return a.time({
            width: "medium"
        });
    case "ppp":
        return a.time({
            width: "long"
        });
    case "pppp":
    default:
        return a.time({
            width: "full"
        })
    }
}
  , Q1 = function(n, a) {
    var e = n.match(/(P+)(p+)?/) || []
      , r = e[1]
      , o = e[2];
    if (!o)
        return dc(n, a);
    var i;
    switch (r) {
    case "P":
        i = a.dateTime({
            width: "short"
        });
        break;
    case "PP":
        i = a.dateTime({
            width: "medium"
        });
        break;
    case "PPP":
        i = a.dateTime({
            width: "long"
        });
        break;
    case "PPPP":
    default:
        i = a.dateTime({
            width: "full"
        });
        break
    }
    return i.replace("{{date}}", dc(r, a)).replace("{{time}}", $u(o, a))
}
  , Zi = {
    p: $u,
    P: Q1
}
  , X1 = ["D", "DD"]
  , J1 = ["YY", "YYYY"];
function qu(t) {
    return X1.indexOf(t) !== -1
}
function zu(t) {
    return J1.indexOf(t) !== -1
}
function Vo(t, n, a) {
    if (t === "YYYY")
        throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(n, "`) for formatting years to the input `").concat(a, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
    if (t === "YY")
        throw new RangeError("Use `yy` instead of `YY` (in `".concat(n, "`) for formatting years to the input `").concat(a, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
    if (t === "D")
        throw new RangeError("Use `d` instead of `D` (in `".concat(n, "`) for formatting days of the month to the input `").concat(a, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
    if (t === "DD")
        throw new RangeError("Use `dd` instead of `DD` (in `".concat(n, "`) for formatting days of the month to the input `").concat(a, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"))
}
var eS = {
    lessThanXSeconds: {
        one: "less than a second",
        other: "less than {{count}} seconds"
    },
    xSeconds: {
        one: "1 second",
        other: "{{count}} seconds"
    },
    halfAMinute: "half a minute",
    lessThanXMinutes: {
        one: "less than a minute",
        other: "less than {{count}} minutes"
    },
    xMinutes: {
        one: "1 minute",
        other: "{{count}} minutes"
    },
    aboutXHours: {
        one: "about 1 hour",
        other: "about {{count}} hours"
    },
    xHours: {
        one: "1 hour",
        other: "{{count}} hours"
    },
    xDays: {
        one: "1 day",
        other: "{{count}} days"
    },
    aboutXWeeks: {
        one: "about 1 week",
        other: "about {{count}} weeks"
    },
    xWeeks: {
        one: "1 week",
        other: "{{count}} weeks"
    },
    aboutXMonths: {
        one: "about 1 month",
        other: "about {{count}} months"
    },
    xMonths: {
        one: "1 month",
        other: "{{count}} months"
    },
    aboutXYears: {
        one: "about 1 year",
        other: "about {{count}} years"
    },
    xYears: {
        one: "1 year",
        other: "{{count}} years"
    },
    overXYears: {
        one: "over 1 year",
        other: "over {{count}} years"
    },
    almostXYears: {
        one: "almost 1 year",
        other: "almost {{count}} years"
    }
}
  , tS = function(n, a, e) {
    var r, o = eS[n];
    return typeof o == "string" ? r = o : a === 1 ? r = o.one : r = o.other.replace("{{count}}", a.toString()),
    e != null && e.addSuffix ? e.comparison && e.comparison > 0 ? "in " + r : r + " ago" : r
};
function pi(t) {
    return function() {
        var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
          , a = n.width ? String(n.width) : t.defaultWidth
          , e = t.formats[a] || t.formats[t.defaultWidth];
        return e
    }
}
var aS = {
    full: "EEEE, MMMM do, y",
    long: "MMMM do, y",
    medium: "MMM d, y",
    short: "MM/dd/yyyy"
}
  , nS = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a"
}
  , rS = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}"
}
  , oS = {
    date: pi({
        formats: aS,
        defaultWidth: "full"
    }),
    time: pi({
        formats: nS,
        defaultWidth: "full"
    }),
    dateTime: pi({
        formats: rS,
        defaultWidth: "full"
    })
}
  , iS = {
    lastWeek: "'last' eeee 'at' p",
    yesterday: "'yesterday at' p",
    today: "'today at' p",
    tomorrow: "'tomorrow at' p",
    nextWeek: "eeee 'at' p",
    other: "P"
}
  , sS = function(n, a, e, r) {
    return iS[n]
};
function _r(t) {
    return function(n, a) {
        var e = a != null && a.context ? String(a.context) : "standalone", r;
        if (e === "formatting" && t.formattingValues) {
            var o = t.defaultFormattingWidth || t.defaultWidth
              , i = a != null && a.width ? String(a.width) : o;
            r = t.formattingValues[i] || t.formattingValues[o]
        } else {
            var s = t.defaultWidth
              , l = a != null && a.width ? String(a.width) : t.defaultWidth;
            r = t.values[l] || t.values[s]
        }
        var d = t.argumentCallback ? t.argumentCallback(n) : n;
        return r[d]
    }
}
var lS = {
    narrow: ["B", "A"],
    abbreviated: ["BC", "AD"],
    wide: ["Before Christ", "Anno Domini"]
}
  , cS = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["Q1", "Q2", "Q3", "Q4"],
    wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}
  , uS = {
    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
    abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
}
  , dS = {
    narrow: ["S", "M", "T", "W", "T", "F", "S"],
    short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
}
  , mS = {
    narrow: {
        am: "a",
        pm: "p",
        midnight: "mi",
        noon: "n",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "midnight",
        noon: "noon",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    },
    wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "midnight",
        noon: "noon",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
    }
}
  , gS = {
    narrow: {
        am: "a",
        pm: "p",
        midnight: "mi",
        noon: "n",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "midnight",
        noon: "noon",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
    },
    wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "midnight",
        noon: "noon",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
    }
}
  , pS = function(n, a) {
    var e = Number(n)
      , r = e % 100;
    if (r > 20 || r < 10)
        switch (r % 10) {
        case 1:
            return e + "st";
        case 2:
            return e + "nd";
        case 3:
            return e + "rd"
        }
    return e + "th"
}
  , vS = {
    ordinalNumber: pS,
    era: _r({
        values: lS,
        defaultWidth: "wide"
    }),
    quarter: _r({
        values: cS,
        defaultWidth: "wide",
        argumentCallback: function(n) {
            return n - 1
        }
    }),
    month: _r({
        values: uS,
        defaultWidth: "wide"
    }),
    day: _r({
        values: dS,
        defaultWidth: "wide"
    }),
    dayPeriod: _r({
        values: mS,
        defaultWidth: "wide",
        formattingValues: gS,
        defaultFormattingWidth: "wide"
    })
};
function wr(t) {
    return function(n) {
        var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
          , e = a.width
          , r = e && t.matchPatterns[e] || t.matchPatterns[t.defaultMatchWidth]
          , o = n.match(r);
        if (!o)
            return null;
        var i = o[0], s = e && t.parsePatterns[e] || t.parsePatterns[t.defaultParseWidth], l = Array.isArray(s) ? hS(s, function(g) {
            return g.test(i)
        }) : fS(s, function(g) {
            return g.test(i)
        }), d;
        d = t.valueCallback ? t.valueCallback(l) : l,
        d = a.valueCallback ? a.valueCallback(d) : d;
        var p = n.slice(i.length);
        return {
            value: d,
            rest: p
        }
    }
}
function fS(t, n) {
    for (var a in t)
        if (t.hasOwnProperty(a) && n(t[a]))
            return a
}
function hS(t, n) {
    for (var a = 0; a < t.length; a++)
        if (n(t[a]))
            return a
}
function yS(t) {
    return function(n) {
        var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
          , e = n.match(t.matchPattern);
        if (!e)
            return null;
        var r = e[0]
          , o = n.match(t.parsePattern);
        if (!o)
            return null;
        var i = t.valueCallback ? t.valueCallback(o[0]) : o[0];
        i = a.valueCallback ? a.valueCallback(i) : i;
        var s = n.slice(r.length);
        return {
            value: i,
            rest: s
        }
    }
}
var bS = /^(\d+)(th|st|nd|rd)?/i
  , _S = /\d+/i
  , wS = {
    narrow: /^(b|a)/i,
    abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
    wide: /^(before christ|before common era|anno domini|common era)/i
}
  , kS = {
    any: [/^b/i, /^(a|c)/i]
}
  , SS = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](th|st|nd|rd)? quarter/i
}
  , TS = {
    any: [/1/i, /2/i, /3/i, /4/i]
}
  , CS = {
    narrow: /^[jfmasond]/i,
    abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
    wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}
  , IS = {
    narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
    any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
}
  , PS = {
    narrow: /^[smtwf]/i,
    short: /^(su|mo|tu|we|th|fr|sa)/i,
    abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
    wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}
  , ES = {
    narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
    any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}
  , DS = {
    narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
    any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}
  , MS = {
    any: {
        am: /^a/i,
        pm: /^p/i,
        midnight: /^mi/i,
        noon: /^no/i,
        morning: /morning/i,
        afternoon: /afternoon/i,
        evening: /evening/i,
        night: /night/i
    }
}
  , AS = {
    ordinalNumber: yS({
        matchPattern: bS,
        parsePattern: _S,
        valueCallback: function(n) {
            return parseInt(n, 10)
        }
    }),
    era: wr({
        matchPatterns: wS,
        defaultMatchWidth: "wide",
        parsePatterns: kS,
        defaultParseWidth: "any"
    }),
    quarter: wr({
        matchPatterns: SS,
        defaultMatchWidth: "wide",
        parsePatterns: TS,
        defaultParseWidth: "any",
        valueCallback: function(n) {
            return n + 1
        }
    }),
    month: wr({
        matchPatterns: CS,
        defaultMatchWidth: "wide",
        parsePatterns: IS,
        defaultParseWidth: "any"
    }),
    day: wr({
        matchPatterns: PS,
        defaultMatchWidth: "wide",
        parsePatterns: ES,
        defaultParseWidth: "any"
    }),
    dayPeriod: wr({
        matchPatterns: DS,
        defaultMatchWidth: "any",
        parsePatterns: MS,
        defaultParseWidth: "any"
    })
}
  , Zu = {
    code: "en-US",
    formatDistance: tS,
    formatLong: oS,
    formatRelative: sS,
    localize: vS,
    match: AS,
    options: {
        weekStartsOn: 0,
        firstWeekContainsDate: 1
    }
}
  , OS = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g
  , xS = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g
  , BS = /^'([^]*?)'?$/
  , LS = /''/g
  , RS = /[a-zA-Z]/;
function ln(t, n, a) {
    var e, r, o, i, s, l, d, p, g, v, f, b, D, T, w, S, B, I;
    ke(2, arguments);
    var R = String(n)
      , $ = ja()
      , G = (e = (r = a?.locale) !== null && r !== void 0 ? r : $.locale) !== null && e !== void 0 ? e : Zu
      , ee = Le((o = (i = (s = (l = a?.firstWeekContainsDate) !== null && l !== void 0 ? l : a == null || (d = a.locale) === null || d === void 0 || (p = d.options) === null || p === void 0 ? void 0 : p.firstWeekContainsDate) !== null && s !== void 0 ? s : $.firstWeekContainsDate) !== null && i !== void 0 ? i : (g = $.locale) === null || g === void 0 || (v = g.options) === null || v === void 0 ? void 0 : v.firstWeekContainsDate) !== null && o !== void 0 ? o : 1);
    if (!(ee >= 1 && ee <= 7))
        throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    var K = Le((f = (b = (D = (T = a?.weekStartsOn) !== null && T !== void 0 ? T : a == null || (w = a.locale) === null || w === void 0 || (S = w.options) === null || S === void 0 ? void 0 : S.weekStartsOn) !== null && D !== void 0 ? D : $.weekStartsOn) !== null && b !== void 0 ? b : (B = $.locale) === null || B === void 0 || (I = B.options) === null || I === void 0 ? void 0 : I.weekStartsOn) !== null && f !== void 0 ? f : 0);
    if (!(K >= 0 && K <= 6))
        throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    if (!G.localize)
        throw new RangeError("locale must contain localize property");
    if (!G.formatLong)
        throw new RangeError("locale must contain formatLong property");
    var M = Ie(t);
    if (!Or(M))
        throw new RangeError("Invalid time value");
    var j = Ho(M)
      , q = ju(M, j)
      , Y = {
        firstWeekContainsDate: ee,
        weekStartsOn: K,
        locale: G,
        _originalDate: M
    }
      , L = R.match(xS).map(function(_) {
        var A = _[0];
        if (A === "p" || A === "P") {
            var P = Zi[A];
            return P(_, G.formatLong)
        }
        return _
    }).join("").match(OS).map(function(_) {
        if (_ === "''")
            return "'";
        var A = _[0];
        if (A === "'")
            return NS(_);
        var P = K1[A];
        if (P)
            return !(a != null && a.useAdditionalWeekYearTokens) && zu(_) && Vo(_, n, String(t)),
            !(a != null && a.useAdditionalDayOfYearTokens) && qu(_) && Vo(_, n, String(t)),
            P(q, _, G.localize, Y);
        if (A.match(RS))
            throw new RangeError("Format string contains an unescaped latin alphabet character `" + A + "`");
        return _
    }).join("");
    return L
}
function NS(t) {
    var n = t.match(BS);
    return n ? n[1].replace(LS, "'") : t
}
function HS(t, n) {
    if (t == null)
        throw new TypeError("assign requires that input parameter not be null or undefined");
    for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    return t
}
function VS(t) {
    ke(1, arguments);
    var n = Ie(t)
      , a = n.getDay();
    return a
}
function US(t) {
    ke(1, arguments);
    var n = Ie(t)
      , a = n.getFullYear()
      , e = n.getMonth()
      , r = new Date(0);
    return r.setFullYear(a, e + 1, 0),
    r.setHours(0, 0, 0, 0),
    r.getDate()
}
function ka(t) {
    ke(1, arguments);
    var n = Ie(t)
      , a = n.getHours();
    return a
}
var FS = 6048e5;
function jS(t) {
    ke(1, arguments);
    var n = Ie(t)
      , a = No(n).getTime() - L1(n).getTime();
    return Math.round(a / FS) + 1
}
function Ra(t) {
    ke(1, arguments);
    var n = Ie(t)
      , a = n.getMinutes();
    return a
}
function et(t) {
    ke(1, arguments);
    var n = Ie(t)
      , a = n.getMonth();
    return a
}
function cr(t) {
    ke(1, arguments);
    var n = Ie(t)
      , a = n.getSeconds();
    return a
}
function GS(t, n) {
    var a, e, r, o, i, s, l, d;
    ke(1, arguments);
    var p = Ie(t)
      , g = p.getFullYear()
      , v = ja()
      , f = Le((a = (e = (r = (o = n?.firstWeekContainsDate) !== null && o !== void 0 ? o : n == null || (i = n.locale) === null || i === void 0 || (s = i.options) === null || s === void 0 ? void 0 : s.firstWeekContainsDate) !== null && r !== void 0 ? r : v.firstWeekContainsDate) !== null && e !== void 0 ? e : (l = v.locale) === null || l === void 0 || (d = l.options) === null || d === void 0 ? void 0 : d.firstWeekContainsDate) !== null && a !== void 0 ? a : 1);
    if (!(f >= 1 && f <= 7))
        throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    var b = new Date(0);
    b.setFullYear(g + 1, 0, f),
    b.setHours(0, 0, 0, 0);
    var D = Ln(b, n)
      , T = new Date(0);
    T.setFullYear(g, 0, f),
    T.setHours(0, 0, 0, 0);
    var w = Ln(T, n);
    return p.getTime() >= D.getTime() ? g + 1 : p.getTime() >= w.getTime() ? g : g - 1
}
function YS(t, n) {
    var a, e, r, o, i, s, l, d;
    ke(1, arguments);
    var p = ja()
      , g = Le((a = (e = (r = (o = n?.firstWeekContainsDate) !== null && o !== void 0 ? o : n == null || (i = n.locale) === null || i === void 0 || (s = i.options) === null || s === void 0 ? void 0 : s.firstWeekContainsDate) !== null && r !== void 0 ? r : p.firstWeekContainsDate) !== null && e !== void 0 ? e : (l = p.locale) === null || l === void 0 || (d = l.options) === null || d === void 0 ? void 0 : d.firstWeekContainsDate) !== null && a !== void 0 ? a : 1)
      , v = GS(t, n)
      , f = new Date(0);
    f.setFullYear(v, 0, g),
    f.setHours(0, 0, 0, 0);
    var b = Ln(f, n);
    return b
}
var WS = 6048e5;
function $S(t, n) {
    ke(1, arguments);
    var a = Ie(t)
      , e = Ln(a, n).getTime() - YS(a, n).getTime();
    return Math.round(e / WS) + 1
}
function $e(t) {
    return ke(1, arguments),
    Ie(t).getFullYear()
}
function to(t, n) {
    ke(2, arguments);
    var a = Ie(t)
      , e = Ie(n);
    return a.getTime() > e.getTime()
}
function ao(t, n) {
    ke(2, arguments);
    var a = Ie(t)
      , e = Ie(n);
    return a.getTime() < e.getTime()
}
function Qn(t, n) {
    ke(2, arguments);
    var a = Ie(t)
      , e = Ie(n);
    return a.getTime() === e.getTime()
}
function mc(t, n) {
    (n == null || n > t.length) && (n = t.length);
    for (var a = 0, e = new Array(n); a < n; a++)
        e[a] = t[a];
    return e
}
function qS(t, n) {
    if (t) {
        if (typeof t == "string")
            return mc(t, n);
        var a = Object.prototype.toString.call(t).slice(8, -1);
        if (a === "Object" && t.constructor && (a = t.constructor.name),
        a === "Map" || a === "Set")
            return Array.from(t);
        if (a === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
            return mc(t, n)
    }
}
function gc(t, n) {
    var a = typeof Symbol < "u" && t[Symbol.iterator] || t["@@iterator"];
    if (!a) {
        if (Array.isArray(t) || (a = qS(t)) || n) {
            a && (t = a);
            var e = 0
              , r = function() {};
            return {
                s: r,
                n: function() {
                    return e >= t.length ? {
                        done: !0
                    } : {
                        done: !1,
                        value: t[e++]
                    }
                },
                e: function(d) {
                    throw d
                },
                f: r
            }
        }
        throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
    }
    var o = !0, i = !1, s;
    return {
        s: function() {
            a = a.call(t)
        },
        n: function() {
            var d = a.next();
            return o = d.done,
            d
        },
        e: function(d) {
            i = !0,
            s = d
        },
        f: function() {
            try {
                !o && a.return != null && a.return()
            } finally {
                if (i)
                    throw s
            }
        }
    }
}
function we(t) {
    if (t === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t
}
function Ki(t, n) {
    return Ki = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, r) {
        return e.__proto__ = r,
        e
    }
    ,
    Ki(t, n)
}
function tt(t, n) {
    if (typeof n != "function" && n !== null)
        throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(n && n.prototype, {
        constructor: {
            value: t,
            writable: !0,
            configurable: !0
        }
    }),
    Object.defineProperty(t, "prototype", {
        writable: !1
    }),
    n && Ki(t, n)
}
function Uo(t) {
    return Uo = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(a) {
        return a.__proto__ || Object.getPrototypeOf(a)
    }
    ,
    Uo(t)
}
function Ku() {
    try {
        var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}))
    } catch {}
    return (Ku = function() {
        return !!t
    }
    )()
}
function zS(t, n) {
    if (n && (ga(n) === "object" || typeof n == "function"))
        return n;
    if (n !== void 0)
        throw new TypeError("Derived constructors may only return object or undefined");
    return we(t)
}
function at(t) {
    var n = Ku();
    return function() {
        var e = Uo(t), r;
        if (n) {
            var o = Uo(this).constructor;
            r = Reflect.construct(e, arguments, o)
        } else
            r = e.apply(this, arguments);
        return zS(this, r)
    }
}
function Ze(t, n) {
    if (!(t instanceof n))
        throw new TypeError("Cannot call a class as a function")
}
function ZS(t, n) {
    if (ga(t) != "object" || !t)
        return t;
    var a = t[Symbol.toPrimitive];
    if (a !== void 0) {
        var e = a.call(t, n || "default");
        if (ga(e) != "object")
            return e;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return (n === "string" ? String : Number)(t)
}
function Qu(t) {
    var n = ZS(t, "string");
    return ga(n) == "symbol" ? n : String(n)
}
function KS(t, n) {
    for (var a = 0; a < n.length; a++) {
        var e = n[a];
        e.enumerable = e.enumerable || !1,
        e.configurable = !0,
        "value"in e && (e.writable = !0),
        Object.defineProperty(t, Qu(e.key), e)
    }
}
function Ke(t, n, a) {
    return n && KS(t.prototype, n),
    Object.defineProperty(t, "prototype", {
        writable: !1
    }),
    t
}
function be(t, n, a) {
    return n = Qu(n),
    n in t ? Object.defineProperty(t, n, {
        value: a,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : t[n] = a,
    t
}
var QS = 10
  , Xu = function() {
    function t() {
        Ze(this, t),
        be(this, "priority", void 0),
        be(this, "subPriority", 0)
    }
    return Ke(t, [{
        key: "validate",
        value: function(a, e) {
            return !0
        }
    }]),
    t
}()
  , XS = function(t) {
    tt(a, t);
    var n = at(a);
    function a(e, r, o, i, s) {
        var l;
        return Ze(this, a),
        l = n.call(this),
        l.value = e,
        l.validateValue = r,
        l.setValue = o,
        l.priority = i,
        s && (l.subPriority = s),
        l
    }
    return Ke(a, [{
        key: "validate",
        value: function(r, o) {
            return this.validateValue(r, this.value, o)
        }
    }, {
        key: "set",
        value: function(r, o, i) {
            return this.setValue(r, o, this.value, i)
        }
    }]),
    a
}(Xu)
  , JS = function(t) {
    tt(a, t);
    var n = at(a);
    function a() {
        var e;
        Ze(this, a);
        for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
        return e = n.call.apply(n, [this].concat(o)),
        be(we(e), "priority", QS),
        be(we(e), "subPriority", -1),
        e
    }
    return Ke(a, [{
        key: "set",
        value: function(r, o) {
            if (o.timestampIsSet)
                return r;
            var i = new Date(0);
            return i.setFullYear(r.getUTCFullYear(), r.getUTCMonth(), r.getUTCDate()),
            i.setHours(r.getUTCHours(), r.getUTCMinutes(), r.getUTCSeconds(), r.getUTCMilliseconds()),
            i
        }
    }]),
    a
}(Xu)
  , ct = function() {
    function t() {
        Ze(this, t),
        be(this, "incompatibleTokens", void 0),
        be(this, "priority", void 0),
        be(this, "subPriority", void 0)
    }
    return Ke(t, [{
        key: "run",
        value: function(a, e, r, o) {
            var i = this.parse(a, e, r, o);
            return i ? {
                setter: new XS(i.value,this.validate,this.set,this.priority,this.subPriority),
                rest: i.rest
            } : null
        }
    }, {
        key: "validate",
        value: function(a, e, r) {
            return !0
        }
    }]),
    t
}()
  , eT = function(t) {
    tt(a, t);
    var n = at(a);
    function a() {
        var e;
        Ze(this, a);
        for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
        return e = n.call.apply(n, [this].concat(o)),
        be(we(e), "priority", 140),
        be(we(e), "incompatibleTokens", ["R", "u", "t", "T"]),
        e
    }
    return Ke(a, [{
        key: "parse",
        value: function(r, o, i) {
            switch (o) {
            case "G":
            case "GG":
            case "GGG":
                return i.era(r, {
                    width: "abbreviated"
                }) || i.era(r, {
                    width: "narrow"
                });
            case "GGGGG":
                return i.era(r, {
                    width: "narrow"
                });
            case "GGGG":
            default:
                return i.era(r, {
                    width: "wide"
                }) || i.era(r, {
                    width: "abbreviated"
                }) || i.era(r, {
                    width: "narrow"
                })
            }
        }
    }, {
        key: "set",
        value: function(r, o, i) {
            return o.era = i,
            r.setUTCFullYear(i, 0, 1),
            r.setUTCHours(0, 0, 0, 0),
            r
        }
    }]),
    a
}(ct)
  , Mt = {
    month: /^(1[0-2]|0?\d)/,
    date: /^(3[0-1]|[0-2]?\d)/,
    dayOfYear: /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/,
    week: /^(5[0-3]|[0-4]?\d)/,
    hour23h: /^(2[0-3]|[0-1]?\d)/,
    hour24h: /^(2[0-4]|[0-1]?\d)/,
    hour11h: /^(1[0-1]|0?\d)/,
    hour12h: /^(1[0-2]|0?\d)/,
    minute: /^[0-5]?\d/,
    second: /^[0-5]?\d/,
    singleDigit: /^\d/,
    twoDigits: /^\d{1,2}/,
    threeDigits: /^\d{1,3}/,
    fourDigits: /^\d{1,4}/,
    anyDigitsSigned: /^-?\d+/,
    singleDigitSigned: /^-?\d/,
    twoDigitsSigned: /^-?\d{1,2}/,
    threeDigitsSigned: /^-?\d{1,3}/,
    fourDigitsSigned: /^-?\d{1,4}/
}
  , Oa = {
    basicOptionalMinutes: /^([+-])(\d{2})(\d{2})?|Z/,
    basic: /^([+-])(\d{2})(\d{2})|Z/,
    basicOptionalSeconds: /^([+-])(\d{2})(\d{2})((\d{2}))?|Z/,
    extended: /^([+-])(\d{2}):(\d{2})|Z/,
    extendedOptionalSeconds: /^([+-])(\d{2}):(\d{2})(:(\d{2}))?|Z/
};
function At(t, n) {
    return t && {
        value: n(t.value),
        rest: t.rest
    }
}
function It(t, n) {
    var a = n.match(t);
    return a ? {
        value: parseInt(a[0], 10),
        rest: n.slice(a[0].length)
    } : null
}
function xa(t, n) {
    var a = n.match(t);
    if (!a)
        return null;
    if (a[0] === "Z")
        return {
            value: 0,
            rest: n.slice(1)
        };
    var e = a[1] === "+" ? 1 : -1
      , r = a[2] ? parseInt(a[2], 10) : 0
      , o = a[3] ? parseInt(a[3], 10) : 0
      , i = a[5] ? parseInt(a[5], 10) : 0;
    return {
        value: e * (r * Ps + o * Is + i * V1),
        rest: n.slice(a[0].length)
    }
}
function Ju(t) {
    return It(Mt.anyDigitsSigned, t)
}
function Dt(t, n) {
    switch (t) {
    case 1:
        return It(Mt.singleDigit, n);
    case 2:
        return It(Mt.twoDigits, n);
    case 3:
        return It(Mt.threeDigits, n);
    case 4:
        return It(Mt.fourDigits, n);
    default:
        return It(new RegExp("^\\d{1," + t + "}"), n)
    }
}
function Fo(t, n) {
    switch (t) {
    case 1:
        return It(Mt.singleDigitSigned, n);
    case 2:
        return It(Mt.twoDigitsSigned, n);
    case 3:
        return It(Mt.threeDigitsSigned, n);
    case 4:
        return It(Mt.fourDigitsSigned, n);
    default:
        return It(new RegExp("^-?\\d{1," + t + "}"), n)
    }
}
function Ds(t) {
    switch (t) {
    case "morning":
        return 4;
    case "evening":
        return 17;
    case "pm":
    case "noon":
    case "afternoon":
        return 12;
    case "am":
    case "midnight":
    case "night":
    default:
        return 0
    }
}
function ed(t, n) {
    var a = n > 0, e = a ? n : 1 - n, r;
    if (e <= 50)
        r = t || 100;
    else {
        var o = e + 50
          , i = Math.floor(o / 100) * 100
          , s = t >= o % 100;
        r = t + i - (s ? 100 : 0)
    }
    return a ? r : 1 - r
}
function td(t) {
    return t % 400 === 0 || t % 4 === 0 && t % 100 !== 0
}
var tT = function(t) {
    tt(a, t);
    var n = at(a);
    function a() {
        var e;
        Ze(this, a);
        for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
        return e = n.call.apply(n, [this].concat(o)),
        be(we(e), "priority", 130),
        be(we(e), "incompatibleTokens", ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"]),
        e
    }
    return Ke(a, [{
        key: "parse",
        value: function(r, o, i) {
            var s = function(d) {
                return {
                    year: d,
                    isTwoDigitYear: o === "yy"
                }
            };
            switch (o) {
            case "y":
                return At(Dt(4, r), s);
            case "yo":
                return At(i.ordinalNumber(r, {
                    unit: "year"
                }), s);
            default:
                return At(Dt(o.length, r), s)
            }
        }
    }, {
        key: "validate",
        value: function(r, o) {
            return o.isTwoDigitYear || o.year > 0
        }
    }, {
        key: "set",
        value: function(r, o, i) {
            var s = r.getUTCFullYear();
            if (i.isTwoDigitYear) {
                var l = ed(i.year, s);
                return r.setUTCFullYear(l, 0, 1),
                r.setUTCHours(0, 0, 0, 0),
                r
            }
            var d = !("era"in o) || o.era === 1 ? i.year : 1 - i.year;
            return r.setUTCFullYear(d, 0, 1),
            r.setUTCHours(0, 0, 0, 0),
            r
        }
    }]),
    a
}(ct)
  , aT = function(t) {
    tt(a, t);
    var n = at(a);
    function a() {
        var e;
        Ze(this, a);
        for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
        return e = n.call.apply(n, [this].concat(o)),
        be(we(e), "priority", 130),
        be(we(e), "incompatibleTokens", ["y", "R", "u", "Q", "q", "M", "L", "I", "d", "D", "i", "t", "T"]),
        e
    }
    return Ke(a, [{
        key: "parse",
        value: function(r, o, i) {
            var s = function(d) {
                return {
                    year: d,
                    isTwoDigitYear: o === "YY"
                }
            };
            switch (o) {
            case "Y":
                return At(Dt(4, r), s);
            case "Yo":
                return At(i.ordinalNumber(r, {
                    unit: "year"
                }), s);
            default:
                return At(Dt(o.length, r), s)
            }
        }
    }, {
        key: "validate",
        value: function(r, o) {
            return o.isTwoDigitYear || o.year > 0
        }
    }, {
        key: "set",
        value: function(r, o, i, s) {
            var l = Es(r, s);
            if (i.isTwoDigitYear) {
                var d = ed(i.year, l);
                return r.setUTCFullYear(d, 0, s.firstWeekContainsDate),
                r.setUTCHours(0, 0, 0, 0),
                Rn(r, s)
            }
            var p = !("era"in o) || o.era === 1 ? i.year : 1 - i.year;
            return r.setUTCFullYear(p, 0, s.firstWeekContainsDate),
            r.setUTCHours(0, 0, 0, 0),
            Rn(r, s)
        }
    }]),
    a
}(ct)
  , nT = function(t) {
    tt(a, t);
    var n = at(a);
    function a() {
        var e;
        Ze(this, a);
        for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
        return e = n.call.apply(n, [this].concat(o)),
        be(we(e), "priority", 130),
        be(we(e), "incompatibleTokens", ["G", "y", "Y", "u", "Q", "q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]),
        e
    }
    return Ke(a, [{
        key: "parse",
        value: function(r, o) {
            return Fo(o === "R" ? 4 : o.length, r)
        }
    }, {
        key: "set",
        value: function(r, o, i) {
            var s = new Date(0);
            return s.setUTCFullYear(i, 0, 4),
            s.setUTCHours(0, 0, 0, 0),
            lr(s)
        }
    }]),
    a
}(ct)
  , rT = function(t) {
    tt(a, t);
    var n = at(a);
    function a() {
        var e;
        Ze(this, a);
        for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
        return e = n.call.apply(n, [this].concat(o)),
        be(we(e), "priority", 130),
        be(we(e), "incompatibleTokens", ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"]),
        e
    }
    return Ke(a, [{
        key: "parse",
        value: function(r, o) {
            return Fo(o === "u" ? 4 : o.length, r)
        }
    }, {
        key: "set",
        value: function(r, o, i) {
            return r.setUTCFullYear(i, 0, 1),
            r.setUTCHours(0, 0, 0, 0),
            r
        }
    }]),
    a
}(ct)
  , oT = function(t) {
    tt(a, t);
    var n = at(a);
    function a() {
        var e;
        Ze(this, a);
        for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
        return e = n.call.apply(n, [this].concat(o)),
        be(we(e), "priority", 120),
        be(we(e), "incompatibleTokens", ["Y", "R", "q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"]),
        e
    }
    return Ke(a, [{
        key: "parse",
        value: function(r, o, i) {
            switch (o) {
            case "Q":
            case "QQ":
                return Dt(o.length, r);
            case "Qo":
                return i.ordinalNumber(r, {
                    unit: "quarter"
                });
            case "QQQ":
                return i.quarter(r, {
                    width: "abbreviated",
                    context: "formatting"
                }) || i.quarter(r, {
                    width: "narrow",
                    context: "formatting"
                });
            case "QQQQQ":
                return i.quarter(r, {
                    width: "narrow",
                    context: "formatting"
                });
            case "QQQQ":
            default:
                return i.quarter(r, {
                    width: "wide",
                    context: "formatting"
                }) || i.quarter(r, {
                    width: "abbreviated",
                    context: "formatting"
                }) || i.quarter(r, {
                    width: "narrow",
                    context: "formatting"
                })
            }
        }
    }, {
        key: "validate",
        value: function(r, o) {
            return o >= 1 && o <= 4
        }
    }, {
        key: "set",
        value: function(r, o, i) {
            return r.setUTCMonth((i - 1) * 3, 1),
            r.setUTCHours(0, 0, 0, 0),
            r
        }
    }]),
    a
}(ct)
  , iT = function(t) {
    tt(a, t);
    var n = at(a);
    function a() {
        var e;
        Ze(this, a);
        for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
        return e = n.call.apply(n, [this].concat(o)),
        be(we(e), "priority", 120),
        be(we(e), "incompatibleTokens", ["Y", "R", "Q", "M", "L", "w", "I", "d", "D", "i", "e", "c", "t", "T"]),
        e
    }
    return Ke(a, [{
        key: "parse",
        value: function(r, o, i) {
            switch (o) {
            case "q":
            case "qq":
                return Dt(o.length, r);
            case "qo":
                return i.ordinalNumber(r, {
                    unit: "quarter"
                });
            case "qqq":
                return i.quarter(r, {
                    width: "abbreviated",
                    context: "standalone"
                }) || i.quarter(r, {
                    width: "narrow",
                    context: "standalone"
                });
            case "qqqqq":
                return i.quarter(r, {
                    width: "narrow",
                    context: "standalone"
                });
            case "qqqq":
            default:
                return i.quarter(r, {
                    width: "wide",
                    context: "standalone"
                }) || i.quarter(r, {
                    width: "abbreviated",
                    context: "standalone"
                }) || i.quarter(r, {
                    width: "narrow",
                    context: "standalone"
                })
            }
        }
    }, {
        key: "validate",
        value: function(r, o) {
            return o >= 1 && o <= 4
        }
    }, {
        key: "set",
        value: function(r, o, i) {
            return r.setUTCMonth((i - 1) * 3, 1),
            r.setUTCHours(0, 0, 0, 0),
            r
        }
    }]),
    a
}(ct)
  , sT = function(t) {
    tt(a, t);
    var n = at(a);
    function a() {
        var e;
        Ze(this, a);
        for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
        return e = n.call.apply(n, [this].concat(o)),
        be(we(e), "incompatibleTokens", ["Y", "R", "q", "Q", "L", "w", "I", "D", "i", "e", "c", "t", "T"]),
        be(we(e), "priority", 110),
        e
    }
    return Ke(a, [{
        key: "parse",
        value: function(r, o, i) {
            var s = function(d) {
                return d - 1
            };
            switch (o) {
            case "M":
                return At(It(Mt.month, r), s);
            case "MM":
                return At(Dt(2, r), s);
            case "Mo":
                return At(i.ordinalNumber(r, {
                    unit: "month"
                }), s);
            case "MMM":
                return i.month(r, {
                    width: "abbreviated",
                    context: "formatting"
                }) || i.month(r, {
                    width: "narrow",
                    context: "formatting"
                });
            case "MMMMM":
                return i.month(r, {
                    width: "narrow",
                    context: "formatting"
                });
            case "MMMM":
            default:
                return i.month(r, {
                    width: "wide",
                    context: "formatting"
                }) || i.month(r, {
                    width: "abbreviated",
                    context: "formatting"
                }) || i.month(r, {
                    width: "narrow",
                    context: "formatting"
                })
            }
        }
    }, {
        key: "validate",
        value: function(r, o) {
            return o >= 0 && o <= 11
        }
    }, {
        key: "set",
        value: function(r, o, i) {
            return r.setUTCMonth(i, 1),
            r.setUTCHours(0, 0, 0, 0),
            r
        }
    }]),
    a
}(ct)
  , lT = function(t) {
    tt(a, t);
    var n = at(a);
    function a() {
        var e;
        Ze(this, a);
        for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
        return e = n.call.apply(n, [this].concat(o)),
        be(we(e), "priority", 110),
        be(we(e), "incompatibleTokens", ["Y", "R", "q", "Q", "M", "w", "I", "D", "i", "e", "c", "t", "T"]),
        e
    }
    return Ke(a, [{
        key: "parse",
        value: function(r, o, i) {
            var s = function(d) {
                return d - 1
            };
            switch (o) {
            case "L":
                return At(It(Mt.month, r), s);
            case "LL":
                return At(Dt(2, r), s);
            case "Lo":
                return At(i.ordinalNumber(r, {
                    unit: "month"
                }), s);
            case "LLL":
                return i.month(r, {
                    width: "abbreviated",
                    context: "standalone"
                }) || i.month(r, {
                    width: "narrow",
                    context: "standalone"
                });
            case "LLLLL":
                return i.month(r, {
                    width: "narrow",
                    context: "standalone"
                });
            case "LLLL":
            default:
                return i.month(r, {
                    width: "wide",
                    context: "standalone"
                }) || i.month(r, {
                    width: "abbreviated",
                    context: "standalone"
                }) || i.month(r, {
                    width: "narrow",
                    context: "standalone"
                })
            }
        }
    }, {
        key: "validate",
        value: function(r, o) {
            return o >= 0 && o <= 11
        }
    }, {
        key: "set",
        value: function(r, o, i) {
            return r.setUTCMonth(i, 1),
            r.setUTCHours(0, 0, 0, 0),
            r
        }
    }]),
    a
}(ct);
function cT(t, n, a) {
    ke(2, arguments);
    var e = Ie(t)
      , r = Le(n)
      , o = Wu(e, a) - r;
    return e.setUTCDate(e.getUTCDate() - o * 7),
    e
}
var uT = function(t) {
    tt(a, t);
    var n = at(a);
    function a() {
        var e;
        Ze(this, a);
        for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
        return e = n.call.apply(n, [this].concat(o)),
        be(we(e), "priority", 100),
        be(we(e), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "i", "t", "T"]),
        e
    }
    return Ke(a, [{
        key: "parse",
        value: function(r, o, i) {
            switch (o) {
            case "w":
                return It(Mt.week, r);
            case "wo":
                return i.ordinalNumber(r, {
                    unit: "week"
                });
            default:
                return Dt(o.length, r)
            }
        }
    }, {
        key: "validate",
        value: function(r, o) {
            return o >= 1 && o <= 53
        }
    }, {
        key: "set",
        value: function(r, o, i, s) {
            return Rn(cT(r, i, s), s)
        }
    }]),
    a
}(ct);
function dT(t, n) {
    ke(2, arguments);
    var a = Ie(t)
      , e = Le(n)
      , r = Yu(a) - e;
    return a.setUTCDate(a.getUTCDate() - r * 7),
    a
}
var mT = function(t) {
    tt(a, t);
    var n = at(a);
    function a() {
        var e;
        Ze(this, a);
        for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
        return e = n.call.apply(n, [this].concat(o)),
        be(we(e), "priority", 100),
        be(we(e), "incompatibleTokens", ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "e", "c", "t", "T"]),
        e
    }
    return Ke(a, [{
        key: "parse",
        value: function(r, o, i) {
            switch (o) {
            case "I":
                return It(Mt.week, r);
            case "Io":
                return i.ordinalNumber(r, {
                    unit: "week"
                });
            default:
                return Dt(o.length, r)
            }
        }
    }, {
        key: "validate",
        value: function(r, o) {
            return o >= 1 && o <= 53
        }
    }, {
        key: "set",
        value: function(r, o, i) {
            return lr(dT(r, i))
        }
    }]),
    a
}(ct)
  , gT = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  , pT = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  , vT = function(t) {
    tt(a, t);
    var n = at(a);
    function a() {
        var e;
        Ze(this, a);
        for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
        return e = n.call.apply(n, [this].concat(o)),
        be(we(e), "priority", 90),
        be(we(e), "subPriority", 1),
        be(we(e), "incompatibleTokens", ["Y", "R", "q", "Q", "w", "I", "D", "i", "e", "c", "t", "T"]),
        e
    }
    return Ke(a, [{
        key: "parse",
        value: function(r, o, i) {
            switch (o) {
            case "d":
                return It(Mt.date, r);
            case "do":
                return i.ordinalNumber(r, {
                    unit: "date"
                });
            default:
                return Dt(o.length, r)
            }
        }
    }, {
        key: "validate",
        value: function(r, o) {
            var i = r.getUTCFullYear()
              , s = td(i)
              , l = r.getUTCMonth();
            return s ? o >= 1 && o <= pT[l] : o >= 1 && o <= gT[l]
        }
    }, {
        key: "set",
        value: function(r, o, i) {
            return r.setUTCDate(i),
            r.setUTCHours(0, 0, 0, 0),
            r
        }
    }]),
    a
}(ct)
  , fT = function(t) {
    tt(a, t);
    var n = at(a);
    function a() {
        var e;
        Ze(this, a);
        for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
        return e = n.call.apply(n, [this].concat(o)),
        be(we(e), "priority", 90),
        be(we(e), "subpriority", 1),
        be(we(e), "incompatibleTokens", ["Y", "R", "q", "Q", "M", "L", "w", "I", "d", "E", "i", "e", "c", "t", "T"]),
        e
    }
    return Ke(a, [{
        key: "parse",
        value: function(r, o, i) {
            switch (o) {
            case "D":
            case "DD":
                return It(Mt.dayOfYear, r);
            case "Do":
                return i.ordinalNumber(r, {
                    unit: "date"
                });
            default:
                return Dt(o.length, r)
            }
        }
    }, {
        key: "validate",
        value: function(r, o) {
            var i = r.getUTCFullYear()
              , s = td(i);
            return s ? o >= 1 && o <= 366 : o >= 1 && o <= 365
        }
    }, {
        key: "set",
        value: function(r, o, i) {
            return r.setUTCMonth(0, i),
            r.setUTCHours(0, 0, 0, 0),
            r
        }
    }]),
    a
}(ct);
function Ms(t, n, a) {
    var e, r, o, i, s, l, d, p;
    ke(2, arguments);
    var g = ja()
      , v = Le((e = (r = (o = (i = a?.weekStartsOn) !== null && i !== void 0 ? i : a == null || (s = a.locale) === null || s === void 0 || (l = s.options) === null || l === void 0 ? void 0 : l.weekStartsOn) !== null && o !== void 0 ? o : g.weekStartsOn) !== null && r !== void 0 ? r : (d = g.locale) === null || d === void 0 || (p = d.options) === null || p === void 0 ? void 0 : p.weekStartsOn) !== null && e !== void 0 ? e : 0);
    if (!(v >= 0 && v <= 6))
        throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    var f = Ie(t)
      , b = Le(n)
      , D = f.getUTCDay()
      , T = b % 7
      , w = (T + 7) % 7
      , S = (w < v ? 7 : 0) + b - D;
    return f.setUTCDate(f.getUTCDate() + S),
    f
}
var hT = function(t) {
    tt(a, t);
    var n = at(a);
    function a() {
        var e;
        Ze(this, a);
        for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
        return e = n.call.apply(n, [this].concat(o)),
        be(we(e), "priority", 90),
        be(we(e), "incompatibleTokens", ["D", "i", "e", "c", "t", "T"]),
        e
    }
    return Ke(a, [{
        key: "parse",
        value: function(r, o, i) {
            switch (o) {
            case "E":
            case "EE":
            case "EEE":
                return i.day(r, {
                    width: "abbreviated",
                    context: "formatting"
                }) || i.day(r, {
                    width: "short",
                    context: "formatting"
                }) || i.day(r, {
                    width: "narrow",
                    context: "formatting"
                });
            case "EEEEE":
                return i.day(r, {
                    width: "narrow",
                    context: "formatting"
                });
            case "EEEEEE":
                return i.day(r, {
                    width: "short",
                    context: "formatting"
                }) || i.day(r, {
                    width: "narrow",
                    context: "formatting"
                });
            case "EEEE":
            default:
                return i.day(r, {
                    width: "wide",
                    context: "formatting"
                }) || i.day(r, {
                    width: "abbreviated",
                    context: "formatting"
                }) || i.day(r, {
                    width: "short",
                    context: "formatting"
                }) || i.day(r, {
                    width: "narrow",
                    context: "formatting"
                })
            }
        }
    }, {
        key: "validate",
        value: function(r, o) {
            return o >= 0 && o <= 6
        }
    }, {
        key: "set",
        value: function(r, o, i, s) {
            return r = Ms(r, i, s),
            r.setUTCHours(0, 0, 0, 0),
            r
        }
    }]),
    a
}(ct)
  , yT = function(t) {
    tt(a, t);
    var n = at(a);
    function a() {
        var e;
        Ze(this, a);
        for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
        return e = n.call.apply(n, [this].concat(o)),
        be(we(e), "priority", 90),
        be(we(e), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "c", "t", "T"]),
        e
    }
    return Ke(a, [{
        key: "parse",
        value: function(r, o, i, s) {
            var l = function(p) {
                var g = Math.floor((p - 1) / 7) * 7;
                return (p + s.weekStartsOn + 6) % 7 + g
            };
            switch (o) {
            case "e":
            case "ee":
                return At(Dt(o.length, r), l);
            case "eo":
                return At(i.ordinalNumber(r, {
                    unit: "day"
                }), l);
            case "eee":
                return i.day(r, {
                    width: "abbreviated",
                    context: "formatting"
                }) || i.day(r, {
                    width: "short",
                    context: "formatting"
                }) || i.day(r, {
                    width: "narrow",
                    context: "formatting"
                });
            case "eeeee":
                return i.day(r, {
                    width: "narrow",
                    context: "formatting"
                });
            case "eeeeee":
                return i.day(r, {
                    width: "short",
                    context: "formatting"
                }) || i.day(r, {
                    width: "narrow",
                    context: "formatting"
                });
            case "eeee":
            default:
                return i.day(r, {
                    width: "wide",
                    context: "formatting"
                }) || i.day(r, {
                    width: "abbreviated",
                    context: "formatting"
                }) || i.day(r, {
                    width: "short",
                    context: "formatting"
                }) || i.day(r, {
                    width: "narrow",
                    context: "formatting"
                })
            }
        }
    }, {
        key: "validate",
        value: function(r, o) {
            return o >= 0 && o <= 6
        }
    }, {
        key: "set",
        value: function(r, o, i, s) {
            return r = Ms(r, i, s),
            r.setUTCHours(0, 0, 0, 0),
            r
        }
    }]),
    a
}(ct)
  , bT = function(t) {
    tt(a, t);
    var n = at(a);
    function a() {
        var e;
        Ze(this, a);
        for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
        return e = n.call.apply(n, [this].concat(o)),
        be(we(e), "priority", 90),
        be(we(e), "incompatibleTokens", ["y", "R", "u", "q", "Q", "M", "L", "I", "d", "D", "E", "i", "e", "t", "T"]),
        e
    }
    return Ke(a, [{
        key: "parse",
        value: function(r, o, i, s) {
            var l = function(p) {
                var g = Math.floor((p - 1) / 7) * 7;
                return (p + s.weekStartsOn + 6) % 7 + g
            };
            switch (o) {
            case "c":
            case "cc":
                return At(Dt(o.length, r), l);
            case "co":
                return At(i.ordinalNumber(r, {
                    unit: "day"
                }), l);
            case "ccc":
                return i.day(r, {
                    width: "abbreviated",
                    context: "standalone"
                }) || i.day(r, {
                    width: "short",
                    context: "standalone"
                }) || i.day(r, {
                    width: "narrow",
                    context: "standalone"
                });
            case "ccccc":
                return i.day(r, {
                    width: "narrow",
                    context: "standalone"
                });
            case "cccccc":
                return i.day(r, {
                    width: "short",
                    context: "standalone"
                }) || i.day(r, {
                    width: "narrow",
                    context: "standalone"
                });
            case "cccc":
            default:
                return i.day(r, {
                    width: "wide",
                    context: "standalone"
                }) || i.day(r, {
                    width: "abbreviated",
                    context: "standalone"
                }) || i.day(r, {
                    width: "short",
                    context: "standalone"
                }) || i.day(r, {
                    width: "narrow",
                    context: "standalone"
                })
            }
        }
    }, {
        key: "validate",
        value: function(r, o) {
            return o >= 0 && o <= 6
        }
    }, {
        key: "set",
        value: function(r, o, i, s) {
            return r = Ms(r, i, s),
            r.setUTCHours(0, 0, 0, 0),
            r
        }
    }]),
    a
}(ct);
function _T(t, n) {
    ke(2, arguments);
    var a = Le(n);
    a % 7 === 0 && (a = a - 7);
    var e = 1
      , r = Ie(t)
      , o = r.getUTCDay()
      , i = a % 7
      , s = (i + 7) % 7
      , l = (s < e ? 7 : 0) + a - o;
    return r.setUTCDate(r.getUTCDate() + l),
    r
}
var wT = function(t) {
    tt(a, t);
    var n = at(a);
    function a() {
        var e;
        Ze(this, a);
        for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
        return e = n.call.apply(n, [this].concat(o)),
        be(we(e), "priority", 90),
        be(we(e), "incompatibleTokens", ["y", "Y", "u", "q", "Q", "M", "L", "w", "d", "D", "E", "e", "c", "t", "T"]),
        e
    }
    return Ke(a, [{
        key: "parse",
        value: function(r, o, i) {
            var s = function(d) {
                return d === 0 ? 7 : d
            };
            switch (o) {
            case "i":
            case "ii":
                return Dt(o.length, r);
            case "io":
                return i.ordinalNumber(r, {
                    unit: "day"
                });
            case "iii":
                return At(i.day(r, {
                    width: "abbreviated",
                    context: "formatting"
                }) || i.day(r, {
                    width: "short",
                    context: "formatting"
                }) || i.day(r, {
                    width: "narrow",
                    context: "formatting"
                }), s);
            case "iiiii":
                return At(i.day(r, {
                    width: "narrow",
                    context: "formatting"
                }), s);
            case "iiiiii":
                return At(i.day(r, {
                    width: "short",
                    context: "formatting"
                }) || i.day(r, {
                    width: "narrow",
                    context: "formatting"
                }), s);
            case "iiii":
            default:
                return At(i.day(r, {
                    width: "wide",
                    context: "formatting"
                }) || i.day(r, {
                    width: "abbreviated",
                    context: "formatting"
                }) || i.day(r, {
                    width: "short",
                    context: "formatting"
                }) || i.day(r, {
                    width: "narrow",
                    context: "formatting"
                }), s)
            }
        }
    }, {
        key: "validate",
        value: function(r, o) {
            return o >= 1 && o <= 7
        }
    }, {
        key: "set",
        value: function(r, o, i) {
            return r = _T(r, i),
            r.setUTCHours(0, 0, 0, 0),
            r
        }
    }]),
    a
}(ct)
  , kT = function(t) {
    tt(a, t);
    var n = at(a);
    function a() {
        var e;
        Ze(this, a);
        for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
        return e = n.call.apply(n, [this].concat(o)),
        be(we(e), "priority", 80),
        be(we(e), "incompatibleTokens", ["b", "B", "H", "k", "t", "T"]),
        e
    }
    return Ke(a, [{
        key: "parse",
        value: function(r, o, i) {
            switch (o) {
            case "a":
            case "aa":
            case "aaa":
                return i.dayPeriod(r, {
                    width: "abbreviated",
                    context: "formatting"
                }) || i.dayPeriod(r, {
                    width: "narrow",
                    context: "formatting"
                });
            case "aaaaa":
                return i.dayPeriod(r, {
                    width: "narrow",
                    context: "formatting"
                });
            case "aaaa":
            default:
                return i.dayPeriod(r, {
                    width: "wide",
                    context: "formatting"
                }) || i.dayPeriod(r, {
                    width: "abbreviated",
                    context: "formatting"
                }) || i.dayPeriod(r, {
                    width: "narrow",
                    context: "formatting"
                })
            }
        }
    }, {
        key: "set",
        value: function(r, o, i) {
            return r.setUTCHours(Ds(i), 0, 0, 0),
            r
        }
    }]),
    a
}(ct)
  , ST = function(t) {
    tt(a, t);
    var n = at(a);
    function a() {
        var e;
        Ze(this, a);
        for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
        return e = n.call.apply(n, [this].concat(o)),
        be(we(e), "priority", 80),
        be(we(e), "incompatibleTokens", ["a", "B", "H", "k", "t", "T"]),
        e
    }
    return Ke(a, [{
        key: "parse",
        value: function(r, o, i) {
            switch (o) {
            case "b":
            case "bb":
            case "bbb":
                return i.dayPeriod(r, {
                    width: "abbreviated",
                    context: "formatting"
                }) || i.dayPeriod(r, {
                    width: "narrow",
                    context: "formatting"
                });
            case "bbbbb":
                return i.dayPeriod(r, {
                    width: "narrow",
                    context: "formatting"
                });
            case "bbbb":
            default:
                return i.dayPeriod(r, {
                    width: "wide",
                    context: "formatting"
                }) || i.dayPeriod(r, {
                    width: "abbreviated",
                    context: "formatting"
                }) || i.dayPeriod(r, {
                    width: "narrow",
                    context: "formatting"
                })
            }
        }
    }, {
        key: "set",
        value: function(r, o, i) {
            return r.setUTCHours(Ds(i), 0, 0, 0),
            r
        }
    }]),
    a
}(ct)
  , TT = function(t) {
    tt(a, t);
    var n = at(a);
    function a() {
        var e;
        Ze(this, a);
        for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
        return e = n.call.apply(n, [this].concat(o)),
        be(we(e), "priority", 80),
        be(we(e), "incompatibleTokens", ["a", "b", "t", "T"]),
        e
    }
    return Ke(a, [{
        key: "parse",
        value: function(r, o, i) {
            switch (o) {
            case "B":
            case "BB":
            case "BBB":
                return i.dayPeriod(r, {
                    width: "abbreviated",
                    context: "formatting"
                }) || i.dayPeriod(r, {
                    width: "narrow",
                    context: "formatting"
                });
            case "BBBBB":
                return i.dayPeriod(r, {
                    width: "narrow",
                    context: "formatting"
                });
            case "BBBB":
            default:
                return i.dayPeriod(r, {
                    width: "wide",
                    context: "formatting"
                }) || i.dayPeriod(r, {
                    width: "abbreviated",
                    context: "formatting"
                }) || i.dayPeriod(r, {
                    width: "narrow",
                    context: "formatting"
                })
            }
        }
    }, {
        key: "set",
        value: function(r, o, i) {
            return r.setUTCHours(Ds(i), 0, 0, 0),
            r
        }
    }]),
    a
}(ct)
  , CT = function(t) {
    tt(a, t);
    var n = at(a);
    function a() {
        var e;
        Ze(this, a);
        for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
        return e = n.call.apply(n, [this].concat(o)),
        be(we(e), "priority", 70),
        be(we(e), "incompatibleTokens", ["H", "K", "k", "t", "T"]),
        e
    }
    return Ke(a, [{
        key: "parse",
        value: function(r, o, i) {
            switch (o) {
            case "h":
                return It(Mt.hour12h, r);
            case "ho":
                return i.ordinalNumber(r, {
                    unit: "hour"
                });
            default:
                return Dt(o.length, r)
            }
        }
    }, {
        key: "validate",
        value: function(r, o) {
            return o >= 1 && o <= 12
        }
    }, {
        key: "set",
        value: function(r, o, i) {
            var s = r.getUTCHours() >= 12;
            return s && i < 12 ? r.setUTCHours(i + 12, 0, 0, 0) : !s && i === 12 ? r.setUTCHours(0, 0, 0, 0) : r.setUTCHours(i, 0, 0, 0),
            r
        }
    }]),
    a
}(ct)
  , IT = function(t) {
    tt(a, t);
    var n = at(a);
    function a() {
        var e;
        Ze(this, a);
        for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
        return e = n.call.apply(n, [this].concat(o)),
        be(we(e), "priority", 70),
        be(we(e), "incompatibleTokens", ["a", "b", "h", "K", "k", "t", "T"]),
        e
    }
    return Ke(a, [{
        key: "parse",
        value: function(r, o, i) {
            switch (o) {
            case "H":
                return It(Mt.hour23h, r);
            case "Ho":
                return i.ordinalNumber(r, {
                    unit: "hour"
                });
            default:
                return Dt(o.length, r)
            }
        }
    }, {
        key: "validate",
        value: function(r, o) {
            return o >= 0 && o <= 23
        }
    }, {
        key: "set",
        value: function(r, o, i) {
            return r.setUTCHours(i, 0, 0, 0),
            r
        }
    }]),
    a
}(ct)
  , PT = function(t) {
    tt(a, t);
    var n = at(a);
    function a() {
        var e;
        Ze(this, a);
        for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
        return e = n.call.apply(n, [this].concat(o)),
        be(we(e), "priority", 70),
        be(we(e), "incompatibleTokens", ["h", "H", "k", "t", "T"]),
        e
    }
    return Ke(a, [{
        key: "parse",
        value: function(r, o, i) {
            switch (o) {
            case "K":
                return It(Mt.hour11h, r);
            case "Ko":
                return i.ordinalNumber(r, {
                    unit: "hour"
                });
            default:
                return Dt(o.length, r)
            }
        }
    }, {
        key: "validate",
        value: function(r, o) {
            return o >= 0 && o <= 11
        }
    }, {
        key: "set",
        value: function(r, o, i) {
            var s = r.getUTCHours() >= 12;
            return s && i < 12 ? r.setUTCHours(i + 12, 0, 0, 0) : r.setUTCHours(i, 0, 0, 0),
            r
        }
    }]),
    a
}(ct)
  , ET = function(t) {
    tt(a, t);
    var n = at(a);
    function a() {
        var e;
        Ze(this, a);
        for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
        return e = n.call.apply(n, [this].concat(o)),
        be(we(e), "priority", 70),
        be(we(e), "incompatibleTokens", ["a", "b", "h", "H", "K", "t", "T"]),
        e
    }
    return Ke(a, [{
        key: "parse",
        value: function(r, o, i) {
            switch (o) {
            case "k":
                return It(Mt.hour24h, r);
            case "ko":
                return i.ordinalNumber(r, {
                    unit: "hour"
                });
            default:
                return Dt(o.length, r)
            }
        }
    }, {
        key: "validate",
        value: function(r, o) {
            return o >= 1 && o <= 24
        }
    }, {
        key: "set",
        value: function(r, o, i) {
            var s = i <= 24 ? i % 24 : i;
            return r.setUTCHours(s, 0, 0, 0),
            r
        }
    }]),
    a
}(ct)
  , DT = function(t) {
    tt(a, t);
    var n = at(a);
    function a() {
        var e;
        Ze(this, a);
        for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
        return e = n.call.apply(n, [this].concat(o)),
        be(we(e), "priority", 60),
        be(we(e), "incompatibleTokens", ["t", "T"]),
        e
    }
    return Ke(a, [{
        key: "parse",
        value: function(r, o, i) {
            switch (o) {
            case "m":
                return It(Mt.minute, r);
            case "mo":
                return i.ordinalNumber(r, {
                    unit: "minute"
                });
            default:
                return Dt(o.length, r)
            }
        }
    }, {
        key: "validate",
        value: function(r, o) {
            return o >= 0 && o <= 59
        }
    }, {
        key: "set",
        value: function(r, o, i) {
            return r.setUTCMinutes(i, 0, 0),
            r
        }
    }]),
    a
}(ct)
  , MT = function(t) {
    tt(a, t);
    var n = at(a);
    function a() {
        var e;
        Ze(this, a);
        for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
        return e = n.call.apply(n, [this].concat(o)),
        be(we(e), "priority", 50),
        be(we(e), "incompatibleTokens", ["t", "T"]),
        e
    }
    return Ke(a, [{
        key: "parse",
        value: function(r, o, i) {
            switch (o) {
            case "s":
                return It(Mt.second, r);
            case "so":
                return i.ordinalNumber(r, {
                    unit: "second"
                });
            default:
                return Dt(o.length, r)
            }
        }
    }, {
        key: "validate",
        value: function(r, o) {
            return o >= 0 && o <= 59
        }
    }, {
        key: "set",
        value: function(r, o, i) {
            return r.setUTCSeconds(i, 0),
            r
        }
    }]),
    a
}(ct)
  , AT = function(t) {
    tt(a, t);
    var n = at(a);
    function a() {
        var e;
        Ze(this, a);
        for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
        return e = n.call.apply(n, [this].concat(o)),
        be(we(e), "priority", 30),
        be(we(e), "incompatibleTokens", ["t", "T"]),
        e
    }
    return Ke(a, [{
        key: "parse",
        value: function(r, o) {
            var i = function(l) {
                return Math.floor(l * Math.pow(10, -o.length + 3))
            };
            return At(Dt(o.length, r), i)
        }
    }, {
        key: "set",
        value: function(r, o, i) {
            return r.setUTCMilliseconds(i),
            r
        }
    }]),
    a
}(ct)
  , OT = function(t) {
    tt(a, t);
    var n = at(a);
    function a() {
        var e;
        Ze(this, a);
        for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
        return e = n.call.apply(n, [this].concat(o)),
        be(we(e), "priority", 10),
        be(we(e), "incompatibleTokens", ["t", "T", "x"]),
        e
    }
    return Ke(a, [{
        key: "parse",
        value: function(r, o) {
            switch (o) {
            case "X":
                return xa(Oa.basicOptionalMinutes, r);
            case "XX":
                return xa(Oa.basic, r);
            case "XXXX":
                return xa(Oa.basicOptionalSeconds, r);
            case "XXXXX":
                return xa(Oa.extendedOptionalSeconds, r);
            case "XXX":
            default:
                return xa(Oa.extended, r)
            }
        }
    }, {
        key: "set",
        value: function(r, o, i) {
            return o.timestampIsSet ? r : new Date(r.getTime() - i)
        }
    }]),
    a
}(ct)
  , xT = function(t) {
    tt(a, t);
    var n = at(a);
    function a() {
        var e;
        Ze(this, a);
        for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
        return e = n.call.apply(n, [this].concat(o)),
        be(we(e), "priority", 10),
        be(we(e), "incompatibleTokens", ["t", "T", "X"]),
        e
    }
    return Ke(a, [{
        key: "parse",
        value: function(r, o) {
            switch (o) {
            case "x":
                return xa(Oa.basicOptionalMinutes, r);
            case "xx":
                return xa(Oa.basic, r);
            case "xxxx":
                return xa(Oa.basicOptionalSeconds, r);
            case "xxxxx":
                return xa(Oa.extendedOptionalSeconds, r);
            case "xxx":
            default:
                return xa(Oa.extended, r)
            }
        }
    }, {
        key: "set",
        value: function(r, o, i) {
            return o.timestampIsSet ? r : new Date(r.getTime() - i)
        }
    }]),
    a
}(ct)
  , BT = function(t) {
    tt(a, t);
    var n = at(a);
    function a() {
        var e;
        Ze(this, a);
        for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
        return e = n.call.apply(n, [this].concat(o)),
        be(we(e), "priority", 40),
        be(we(e), "incompatibleTokens", "*"),
        e
    }
    return Ke(a, [{
        key: "parse",
        value: function(r) {
            return Ju(r)
        }
    }, {
        key: "set",
        value: function(r, o, i) {
            return [new Date(i * 1e3), {
                timestampIsSet: !0
            }]
        }
    }]),
    a
}(ct)
  , LT = function(t) {
    tt(a, t);
    var n = at(a);
    function a() {
        var e;
        Ze(this, a);
        for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
        return e = n.call.apply(n, [this].concat(o)),
        be(we(e), "priority", 20),
        be(we(e), "incompatibleTokens", "*"),
        e
    }
    return Ke(a, [{
        key: "parse",
        value: function(r) {
            return Ju(r)
        }
    }, {
        key: "set",
        value: function(r, o, i) {
            return [new Date(i), {
                timestampIsSet: !0
            }]
        }
    }]),
    a
}(ct)
  , RT = {
    G: new eT,
    y: new tT,
    Y: new aT,
    R: new nT,
    u: new rT,
    Q: new oT,
    q: new iT,
    M: new sT,
    L: new lT,
    w: new uT,
    I: new mT,
    d: new vT,
    D: new fT,
    E: new hT,
    e: new yT,
    c: new bT,
    i: new wT,
    a: new kT,
    b: new ST,
    B: new TT,
    h: new CT,
    H: new IT,
    K: new PT,
    k: new ET,
    m: new DT,
    s: new MT,
    S: new AT,
    X: new OT,
    x: new xT,
    t: new BT,
    T: new LT
}
  , NT = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g
  , HT = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g
  , VT = /^'([^]*?)'?$/
  , UT = /''/g
  , FT = /\S/
  , jT = /[a-zA-Z]/;
function Qi(t, n, a, e) {
    var r, o, i, s, l, d, p, g, v, f, b, D, T, w;
    ke(3, arguments);
    var S = String(t)
      , B = String(n)
      , I = ja()
      , R = (r = (o = void 0) !== null && o !== void 0 ? o : I.locale) !== null && r !== void 0 ? r : Zu;
    if (!R.match)
        throw new RangeError("locale must contain match property");
    var $ = Le((i = (s = (l = (d = void 0) !== null && d !== void 0 ? d : void 0) !== null && l !== void 0 ? l : I.firstWeekContainsDate) !== null && s !== void 0 ? s : (p = I.locale) === null || p === void 0 || (g = p.options) === null || g === void 0 ? void 0 : g.firstWeekContainsDate) !== null && i !== void 0 ? i : 1);
    if (!($ >= 1 && $ <= 7))
        throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
    var G = Le((v = (f = (b = (D = void 0) !== null && D !== void 0 ? D : void 0) !== null && b !== void 0 ? b : I.weekStartsOn) !== null && f !== void 0 ? f : (T = I.locale) === null || T === void 0 || (w = T.options) === null || w === void 0 ? void 0 : w.weekStartsOn) !== null && v !== void 0 ? v : 0);
    if (!(G >= 0 && G <= 6))
        throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
    if (B === "")
        return S === "" ? Ie(a) : new Date(NaN);
    var ee = {
        firstWeekContainsDate: $,
        weekStartsOn: G,
        locale: R
    }, K = [new JS], M = B.match(HT).map(function(Q) {
        var V = Q[0];
        if (V in Zi) {
            var O = Zi[V];
            return O(Q, R.formatLong)
        }
        return Q
    }).join("").match(NT), j = [], q = gc(M), Y;
    try {
        var L = function() {
            var V = Y.value;
            !(e != null && e.useAdditionalWeekYearTokens) && zu(V) && Vo(V, B, t),
            !(e != null && e.useAdditionalDayOfYearTokens) && qu(V) && Vo(V, B, t);
            var O = V[0]
              , pe = RT[O];
            if (pe) {
                var fe = pe.incompatibleTokens;
                if (Array.isArray(fe)) {
                    var ue = j.find(function(he) {
                        return fe.includes(he.token) || he.token === O
                    });
                    if (ue)
                        throw new RangeError("The format string mustn't contain `".concat(ue.fullToken, "` and `").concat(V, "` at the same time"))
                } else if (pe.incompatibleTokens === "*" && j.length > 0)
                    throw new RangeError("The format string mustn't contain `".concat(V, "` and any other token at the same time"));
                j.push({
                    token: O,
                    fullToken: V
                });
                var Oe = pe.run(S, V, R.match, ee);
                if (!Oe)
                    return {
                        v: new Date(NaN)
                    };
                K.push(Oe.setter),
                S = Oe.rest
            } else {
                if (O.match(jT))
                    throw new RangeError("Format string contains an unescaped latin alphabet character `" + O + "`");
                if (V === "''" ? V = "'" : O === "'" && (V = GT(V)),
                S.indexOf(V) === 0)
                    S = S.slice(V.length);
                else
                    return {
                        v: new Date(NaN)
                    }
            }
        };
        for (q.s(); !(Y = q.n()).done; ) {
            var _ = L();
            if (ga(_) === "object")
                return _.v
        }
    } catch (Q) {
        q.e(Q)
    } finally {
        q.f()
    }
    if (S.length > 0 && FT.test(S))
        return new Date(NaN);
    var A = K.map(function(Q) {
        return Q.priority
    }).sort(function(Q, V) {
        return V - Q
    }).filter(function(Q, V, O) {
        return O.indexOf(Q) === V
    }).map(function(Q) {
        return K.filter(function(V) {
            return V.priority === Q
        }).sort(function(V, O) {
            return O.subPriority - V.subPriority
        })
    }).map(function(Q) {
        return Q[0]
    })
      , P = Ie(a);
    if (isNaN(P.getTime()))
        return new Date(NaN);
    var H = ju(P, Ho(P)), k = {}, h = gc(A), W;
    try {
        for (h.s(); !(W = h.n()).done; ) {
            var U = W.value;
            if (!U.validate(H, ee))
                return new Date(NaN);
            var te = U.set(H, k, ee);
            Array.isArray(te) ? (H = te[0],
            HS(k, te[1])) : H = te
        }
    } catch (Q) {
        h.e(Q)
    } finally {
        h.f()
    }
    return H
}
function GT(t) {
    return t.match(VT)[1].replace(UT, "'")
}
function pc(t, n) {
    ke(2, arguments);
    var a = eo(t)
      , e = eo(n);
    return a.getTime() === e.getTime()
}
function YT(t, n) {
    ke(2, arguments);
    var a = Le(n);
    return qa(t, -a)
}
function WT(t, n) {
    var a;
    ke(1, arguments);
    var e = Le((a = void 0) !== null && a !== void 0 ? a : 2);
    if (e !== 2 && e !== 1 && e !== 0)
        throw new RangeError("additionalDigits must be 0, 1 or 2");
    if (!(typeof t == "string" || Object.prototype.toString.call(t) === "[object String]"))
        return new Date(NaN);
    var r = ZT(t), o;
    if (r.date) {
        var i = KT(r.date, e);
        o = QT(i.restDateString, i.year)
    }
    if (!o || isNaN(o.getTime()))
        return new Date(NaN);
    var s = o.getTime(), l = 0, d;
    if (r.time && (l = XT(r.time),
    isNaN(l)))
        return new Date(NaN);
    if (r.timezone) {
        if (d = JT(r.timezone),
        isNaN(d))
            return new Date(NaN)
    } else {
        var p = new Date(s + l)
          , g = new Date(0);
        return g.setFullYear(p.getUTCFullYear(), p.getUTCMonth(), p.getUTCDate()),
        g.setHours(p.getUTCHours(), p.getUTCMinutes(), p.getUTCSeconds(), p.getUTCMilliseconds()),
        g
    }
    return new Date(s + l + d)
}
var yo = {
    dateTimeDelimiter: /[T ]/,
    timeZoneDelimiter: /[Z ]/i,
    timezone: /([Z+-].*)$/
}
  , $T = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/
  , qT = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/
  , zT = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function ZT(t) {
    var n = {}, a = t.split(yo.dateTimeDelimiter), e;
    if (a.length > 2)
        return n;
    if (/:/.test(a[0]) ? e = a[0] : (n.date = a[0],
    e = a[1],
    yo.timeZoneDelimiter.test(n.date) && (n.date = t.split(yo.timeZoneDelimiter)[0],
    e = t.substr(n.date.length, t.length))),
    e) {
        var r = yo.timezone.exec(e);
        r ? (n.time = e.replace(r[1], ""),
        n.timezone = r[1]) : n.time = e
    }
    return n
}
function KT(t, n) {
    var a = new RegExp("^(?:(\\d{4}|[+-]\\d{" + (4 + n) + "})|(\\d{2}|[+-]\\d{" + (2 + n) + "})$)")
      , e = t.match(a);
    if (!e)
        return {
            year: NaN,
            restDateString: ""
        };
    var r = e[1] ? parseInt(e[1]) : null
      , o = e[2] ? parseInt(e[2]) : null;
    return {
        year: o === null ? r : o * 100,
        restDateString: t.slice((e[1] || e[2]).length)
    }
}
function QT(t, n) {
    if (n === null)
        return new Date(NaN);
    var a = t.match($T);
    if (!a)
        return new Date(NaN);
    var e = !!a[4]
      , r = kr(a[1])
      , o = kr(a[2]) - 1
      , i = kr(a[3])
      , s = kr(a[4])
      , l = kr(a[5]) - 1;
    if (e)
        return rC(n, s, l) ? eC(n, s, l) : new Date(NaN);
    var d = new Date(0);
    return !aC(n, o, i) || !nC(n, r) ? new Date(NaN) : (d.setUTCFullYear(n, o, Math.max(r, i)),
    d)
}
function kr(t) {
    return t ? parseInt(t) : 1
}
function XT(t) {
    var n = t.match(qT);
    if (!n)
        return NaN;
    var a = vi(n[1])
      , e = vi(n[2])
      , r = vi(n[3]);
    return oC(a, e, r) ? a * Ps + e * Is + r * 1e3 : NaN
}
function vi(t) {
    return t && parseFloat(t.replace(",", ".")) || 0
}
function JT(t) {
    if (t === "Z")
        return 0;
    var n = t.match(zT);
    if (!n)
        return 0;
    var a = n[1] === "+" ? -1 : 1
      , e = parseInt(n[2])
      , r = n[3] && parseInt(n[3]) || 0;
    return iC(e, r) ? a * (e * Ps + r * Is) : NaN
}
function eC(t, n, a) {
    var e = new Date(0);
    e.setUTCFullYear(t, 0, 4);
    var r = e.getUTCDay() || 7
      , o = (n - 1) * 7 + a + 1 - r;
    return e.setUTCDate(e.getUTCDate() + o),
    e
}
var tC = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function ad(t) {
    return t % 400 === 0 || t % 4 === 0 && t % 100 !== 0
}
function aC(t, n, a) {
    return n >= 0 && n <= 11 && a >= 1 && a <= (tC[n] || (ad(t) ? 29 : 28))
}
function nC(t, n) {
    return n >= 1 && n <= (ad(t) ? 366 : 365)
}
function rC(t, n, a) {
    return n >= 1 && n <= 53 && a >= 0 && a <= 6
}
function oC(t, n, a) {
    return t === 24 ? n === 0 && a === 0 : a >= 0 && a < 60 && n >= 0 && n < 60 && t >= 0 && t < 25
}
function iC(t, n) {
    return n >= 0 && n <= 59
}
function nd(t, n) {
    ke(2, arguments);
    var a = Ie(t)
      , e = Le(n)
      , r = a.getFullYear()
      , o = a.getDate()
      , i = new Date(0);
    i.setFullYear(r, e, 15),
    i.setHours(0, 0, 0, 0);
    var s = US(i);
    return a.setMonth(e, Math.min(o, s)),
    a
}
function bt(t, n) {
    if (ke(2, arguments),
    ga(n) !== "object" || n === null)
        throw new RangeError("values parameter must be an object");
    var a = Ie(t);
    return isNaN(a.getTime()) ? new Date(NaN) : (n.year != null && a.setFullYear(n.year),
    n.month != null && (a = nd(a, n.month)),
    n.date != null && a.setDate(Le(n.date)),
    n.hours != null && a.setHours(Le(n.hours)),
    n.minutes != null && a.setMinutes(Le(n.minutes)),
    n.seconds != null && a.setSeconds(Le(n.seconds)),
    n.milliseconds != null && a.setMilliseconds(Le(n.milliseconds)),
    a)
}
function rd(t, n) {
    ke(2, arguments);
    var a = Ie(t)
      , e = Le(n);
    return a.setHours(e),
    a
}
function As(t, n) {
    ke(2, arguments);
    var a = Ie(t)
      , e = Le(n);
    return a.setMilliseconds(e),
    a
}
function od(t, n) {
    ke(2, arguments);
    var a = Ie(t)
      , e = Le(n);
    return a.setMinutes(e),
    a
}
function Os(t, n) {
    ke(2, arguments);
    var a = Ie(t)
      , e = Le(n);
    return a.setSeconds(e),
    a
}
function Ba(t, n) {
    ke(2, arguments);
    var a = Ie(t)
      , e = Le(n);
    return isNaN(a.getTime()) ? new Date(NaN) : (a.setFullYear(e),
    a)
}
function ur(t, n) {
    ke(2, arguments);
    var a = Le(n);
    return wa(t, -a)
}
function sC(t, n) {
    if (ke(2, arguments),
    !n || ga(n) !== "object")
        return new Date(NaN);
    var a = n.years ? Le(n.years) : 0
      , e = n.months ? Le(n.months) : 0
      , r = n.weeks ? Le(n.weeks) : 0
      , o = n.days ? Le(n.days) : 0
      , i = n.hours ? Le(n.hours) : 0
      , s = n.minutes ? Le(n.minutes) : 0
      , l = n.seconds ? Le(n.seconds) : 0
      , d = ur(t, e + a * 12)
      , p = YT(d, o + r * 7)
      , g = s + i * 60
      , v = l + g * 60
      , f = v * 1e3
      , b = new Date(p.getTime() - f);
    return b
}
function id(t, n) {
    ke(2, arguments);
    var a = Le(n);
    return Cs(t, -a)
}
function vr() {
    return m(),
    y("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 32 32",
        fill: "currentColor",
        "aria-hidden": "true",
        class: "dp__icon"
    }, [C("path", {
        d: "M29.333 8c0-2.208-1.792-4-4-4h-18.667c-2.208 0-4 1.792-4 4v18.667c0 2.208 1.792 4 4 4h18.667c2.208 0 4-1.792 4-4v-18.667zM26.667 8v18.667c0 0.736-0.597 1.333-1.333 1.333 0 0-18.667 0-18.667 0-0.736 0-1.333-0.597-1.333-1.333 0 0 0-18.667 0-18.667 0-0.736 0.597-1.333 1.333-1.333 0 0 18.667 0 18.667 0 0.736 0 1.333 0.597 1.333 1.333z"
    }), C("path", {
        d: "M20 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
    }), C("path", {
        d: "M9.333 2.667v5.333c0 0.736 0.597 1.333 1.333 1.333s1.333-0.597 1.333-1.333v-5.333c0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
    }), C("path", {
        d: "M4 14.667h24c0.736 0 1.333-0.597 1.333-1.333s-0.597-1.333-1.333-1.333h-24c-0.736 0-1.333 0.597-1.333 1.333s0.597 1.333 1.333 1.333z"
    })])
}
vr.compatConfig = {
    MODE: 3
};
function sd() {
    return m(),
    y("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 32 32",
        fill: "currentColor",
        "aria-hidden": "true",
        class: "dp__icon"
    }, [C("path", {
        d: "M23.057 7.057l-16 16c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l16-16c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0z"
    }), C("path", {
        d: "M7.057 8.943l16 16c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885l-16-16c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"
    })])
}
sd.compatConfig = {
    MODE: 3
};
function xs() {
    return m(),
    y("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 32 32",
        fill: "currentColor",
        "aria-hidden": "true",
        class: "dp__icon"
    }, [C("path", {
        d: "M20.943 23.057l-7.057-7.057c0 0 7.057-7.057 7.057-7.057 0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-8 8c-0.521 0.521-0.521 1.365 0 1.885l8 8c0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
    })])
}
xs.compatConfig = {
    MODE: 3
};
function Bs() {
    return m(),
    y("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 32 32",
        fill: "currentColor",
        "aria-hidden": "true",
        class: "dp__icon"
    }, [C("path", {
        d: "M12.943 24.943l8-8c0.521-0.521 0.521-1.365 0-1.885l-8-8c-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885l7.057 7.057c0 0-7.057 7.057-7.057 7.057-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0z"
    })])
}
Bs.compatConfig = {
    MODE: 3
};
function Ls() {
    return m(),
    y("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 32 32",
        fill: "currentColor",
        "aria-hidden": "true",
        class: "dp__icon"
    }, [C("path", {
        d: "M16 1.333c-8.095 0-14.667 6.572-14.667 14.667s6.572 14.667 14.667 14.667c8.095 0 14.667-6.572 14.667-14.667s-6.572-14.667-14.667-14.667zM16 4c6.623 0 12 5.377 12 12s-5.377 12-12 12c-6.623 0-12-5.377-12-12s5.377-12 12-12z"
    }), C("path", {
        d: "M14.667 8v8c0 0.505 0.285 0.967 0.737 1.193l5.333 2.667c0.658 0.329 1.46 0.062 1.789-0.596s0.062-1.46-0.596-1.789l-4.596-2.298c0 0 0-7.176 0-7.176 0-0.736-0.597-1.333-1.333-1.333s-1.333 0.597-1.333 1.333z"
    })])
}
Ls.compatConfig = {
    MODE: 3
};
function Rs() {
    return m(),
    y("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 32 32",
        fill: "currentColor",
        "aria-hidden": "true",
        class: "dp__icon"
    }, [C("path", {
        d: "M24.943 19.057l-8-8c-0.521-0.521-1.365-0.521-1.885 0l-8 8c-0.52 0.52-0.52 1.365 0 1.885s1.365 0.52 1.885 0l7.057-7.057c0 0 7.057 7.057 7.057 7.057 0.52 0.52 1.365 0.52 1.885 0s0.52-1.365 0-1.885z"
    })])
}
Rs.compatConfig = {
    MODE: 3
};
function Ns() {
    return m(),
    y("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 32 32",
        fill: "currentColor",
        "aria-hidden": "true",
        class: "dp__icon"
    }, [C("path", {
        d: "M7.057 12.943l8 8c0.521 0.521 1.365 0.521 1.885 0l8-8c0.52-0.52 0.52-1.365 0-1.885s-1.365-0.52-1.885 0l-7.057 7.057c0 0-7.057-7.057-7.057-7.057-0.52-0.52-1.365-0.52-1.885 0s-0.52 1.365 0 1.885z"
    })])
}
Ns.compatConfig = {
    MODE: 3
};
function Hs(t) {
    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
}
var ld = {
    exports: {}
};
(function(t) {
    function n(a) {
        return a && a.__esModule ? a : {
            default: a
        }
    }
    t.exports = n,
    t.exports.__esModule = !0,
    t.exports.default = t.exports
}
)(ld);
var lC = ld.exports
  , Xi = {
    exports: {}
};
(function(t, n) {
    Object.defineProperty(n, "__esModule", {
        value: !0
    }),
    n.default = a;
    function a(e) {
        if (e === null || e === !0 || e === !1)
            return NaN;
        var r = Number(e);
        return isNaN(r) ? r : r < 0 ? Math.ceil(r) : Math.floor(r)
    }
    t.exports = n.default
}
)(Xi, Xi.exports);
var cC = Xi.exports;
const uC = Hs(cC);
var Ji = {
    exports: {}
};
(function(t, n) {
    Object.defineProperty(n, "__esModule", {
        value: !0
    }),
    n.default = a;
    function a(e) {
        var r = new Date(Date.UTC(e.getFullYear(), e.getMonth(), e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds(), e.getMilliseconds()));
        return r.setUTCFullYear(e.getFullYear()),
        e.getTime() - r.getTime()
    }
    t.exports = n.default
}
)(Ji, Ji.exports);
var dC = Ji.exports;
const vc = Hs(dC);
function mC(t, n) {
    var a = fC(n);
    return a.formatToParts ? pC(a, t) : vC(a, t)
}
var gC = {
    year: 0,
    month: 1,
    day: 2,
    hour: 3,
    minute: 4,
    second: 5
};
function pC(t, n) {
    try {
        for (var a = t.formatToParts(n), e = [], r = 0; r < a.length; r++) {
            var o = gC[a[r].type];
            o >= 0 && (e[o] = parseInt(a[r].value, 10))
        }
        return e
    } catch (i) {
        if (i instanceof RangeError)
            return [NaN];
        throw i
    }
}
function vC(t, n) {
    var a = t.format(n).replace(/\u200E/g, "")
      , e = /(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(a);
    return [e[3], e[1], e[2], e[4], e[5], e[6]]
}
var fi = {};
function fC(t) {
    if (!fi[t]) {
        var n = new Intl.DateTimeFormat("en-US",{
            hour12: !1,
            timeZone: "America/New_York",
            year: "numeric",
            month: "numeric",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        }).format(new Date("2014-06-25T04:00:00.123Z"))
          , a = n === "06/25/2014, 00:00:00" || n === "‎06‎/‎25‎/‎2014‎ ‎00‎:‎00‎:‎00";
        fi[t] = a ? new Intl.DateTimeFormat("en-US",{
            hour12: !1,
            timeZone: t,
            year: "numeric",
            month: "numeric",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        }) : new Intl.DateTimeFormat("en-US",{
            hourCycle: "h23",
            timeZone: t,
            year: "numeric",
            month: "numeric",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        })
    }
    return fi[t]
}
function Vs(t, n, a, e, r, o, i) {
    var s = new Date(0);
    return s.setUTCFullYear(t, n, a),
    s.setUTCHours(e, r, o, i),
    s
}
var fc = 36e5
  , hC = 6e4
  , hi = {
    timezone: /([Z+-].*)$/,
    timezoneZ: /^(Z)$/,
    timezoneHH: /^([+-]\d{2})$/,
    timezoneHHMM: /^([+-]\d{2}):?(\d{2})$/
};
function Us(t, n, a) {
    var e, r;
    if (t === "" || (e = hi.timezoneZ.exec(t),
    e))
        return 0;
    var o;
    if (e = hi.timezoneHH.exec(t),
    e)
        return o = parseInt(e[1], 10),
        hc(o) ? -(o * fc) : NaN;
    if (e = hi.timezoneHHMM.exec(t),
    e) {
        o = parseInt(e[1], 10);
        var i = parseInt(e[2], 10);
        return hc(o, i) ? (r = Math.abs(o) * fc + i * hC,
        o > 0 ? -r : r) : NaN
    }
    if (_C(t)) {
        n = new Date(n || Date.now());
        var s = a ? n : yC(n)
          , l = es(s, t)
          , d = a ? l : bC(n, l, t);
        return -d
    }
    return NaN
}
function yC(t) {
    return Vs(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), t.getSeconds(), t.getMilliseconds())
}
function es(t, n) {
    var a = mC(t, n)
      , e = Vs(a[0], a[1] - 1, a[2], a[3] % 24, a[4], a[5], 0).getTime()
      , r = t.getTime()
      , o = r % 1e3;
    return r -= o >= 0 ? o : 1e3 + o,
    e - r
}
function bC(t, n, a) {
    var e = t.getTime()
      , r = e - n
      , o = es(new Date(r), a);
    if (n === o)
        return n;
    r -= o - n;
    var i = es(new Date(r), a);
    return o === i ? o : Math.max(o, i)
}
function hc(t, n) {
    return -23 <= t && t <= 23 && (n == null || 0 <= n && n <= 59)
}
var yc = {};
function _C(t) {
    if (yc[t])
        return !0;
    try {
        return new Intl.DateTimeFormat(void 0,{
            timeZone: t
        }),
        yc[t] = !0,
        !0
    } catch {
        return !1
    }
}
var cd = /(Z|[+-]\d{2}(?::?\d{2})?| UTC| [a-zA-Z]+\/[a-zA-Z_]+(?:\/[a-zA-Z_]+)?)$/
  , yi = 36e5
  , bc = 6e4
  , wC = 2
  , Jt = {
    dateTimePattern: /^([0-9W+-]+)(T| )(.*)/,
    datePattern: /^([0-9W+-]+)(.*)/,
    plainTime: /:/,
    YY: /^(\d{2})$/,
    YYY: [/^([+-]\d{2})$/, /^([+-]\d{3})$/, /^([+-]\d{4})$/],
    YYYY: /^(\d{4})/,
    YYYYY: [/^([+-]\d{4})/, /^([+-]\d{5})/, /^([+-]\d{6})/],
    MM: /^-(\d{2})$/,
    DDD: /^-?(\d{3})$/,
    MMDD: /^-?(\d{2})-?(\d{2})$/,
    Www: /^-?W(\d{2})$/,
    WwwD: /^-?W(\d{2})-?(\d{1})$/,
    HH: /^(\d{2}([.,]\d*)?)$/,
    HHMM: /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
    HHMMSS: /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
    timeZone: cd
};
function ts(t, n) {
    if (arguments.length < 1)
        throw new TypeError("1 argument required, but only " + arguments.length + " present");
    if (t === null)
        return new Date(NaN);
    var a = n || {}
      , e = a.additionalDigits == null ? wC : uC(a.additionalDigits);
    if (e !== 2 && e !== 1 && e !== 0)
        throw new RangeError("additionalDigits must be 0, 1 or 2");
    if (t instanceof Date || typeof t == "object" && Object.prototype.toString.call(t) === "[object Date]")
        return new Date(t.getTime());
    if (typeof t == "number" || Object.prototype.toString.call(t) === "[object Number]")
        return new Date(t);
    if (!(typeof t == "string" || Object.prototype.toString.call(t) === "[object String]"))
        return new Date(NaN);
    var r = kC(t)
      , o = SC(r.date, e)
      , i = o.year
      , s = o.restDateString
      , l = TC(s, i);
    if (isNaN(l))
        return new Date(NaN);
    if (l) {
        var d = l.getTime(), p = 0, g;
        if (r.time && (p = CC(r.time),
        isNaN(p)))
            return new Date(NaN);
        if (r.timeZone || a.timeZone) {
            if (g = Us(r.timeZone || a.timeZone, new Date(d + p)),
            isNaN(g))
                return new Date(NaN)
        } else
            g = vc(new Date(d + p)),
            g = vc(new Date(d + p + g));
        return new Date(d + p + g)
    } else
        return new Date(NaN)
}
function kC(t) {
    var n = {}, a = Jt.dateTimePattern.exec(t), e;
    if (a ? (n.date = a[1],
    e = a[3]) : (a = Jt.datePattern.exec(t),
    a ? (n.date = a[1],
    e = a[2]) : (n.date = null,
    e = t)),
    e) {
        var r = Jt.timeZone.exec(e);
        r ? (n.time = e.replace(r[1], ""),
        n.timeZone = r[1].trim()) : n.time = e
    }
    return n
}
function SC(t, n) {
    var a = Jt.YYY[n], e = Jt.YYYYY[n], r;
    if (r = Jt.YYYY.exec(t) || e.exec(t),
    r) {
        var o = r[1];
        return {
            year: parseInt(o, 10),
            restDateString: t.slice(o.length)
        }
    }
    if (r = Jt.YY.exec(t) || a.exec(t),
    r) {
        var i = r[1];
        return {
            year: parseInt(i, 10) * 100,
            restDateString: t.slice(i.length)
        }
    }
    return {
        year: null
    }
}
function TC(t, n) {
    if (n === null)
        return null;
    var a, e, r, o;
    if (t.length === 0)
        return e = new Date(0),
        e.setUTCFullYear(n),
        e;
    if (a = Jt.MM.exec(t),
    a)
        return e = new Date(0),
        r = parseInt(a[1], 10) - 1,
        wc(n, r) ? (e.setUTCFullYear(n, r),
        e) : new Date(NaN);
    if (a = Jt.DDD.exec(t),
    a) {
        e = new Date(0);
        var i = parseInt(a[1], 10);
        return EC(n, i) ? (e.setUTCFullYear(n, 0, i),
        e) : new Date(NaN)
    }
    if (a = Jt.MMDD.exec(t),
    a) {
        e = new Date(0),
        r = parseInt(a[1], 10) - 1;
        var s = parseInt(a[2], 10);
        return wc(n, r, s) ? (e.setUTCFullYear(n, r, s),
        e) : new Date(NaN)
    }
    if (a = Jt.Www.exec(t),
    a)
        return o = parseInt(a[1], 10) - 1,
        kc(n, o) ? _c(n, o) : new Date(NaN);
    if (a = Jt.WwwD.exec(t),
    a) {
        o = parseInt(a[1], 10) - 1;
        var l = parseInt(a[2], 10) - 1;
        return kc(n, o, l) ? _c(n, o, l) : new Date(NaN)
    }
    return null
}
function CC(t) {
    var n, a, e;
    if (n = Jt.HH.exec(t),
    n)
        return a = parseFloat(n[1].replace(",", ".")),
        bi(a) ? a % 24 * yi : NaN;
    if (n = Jt.HHMM.exec(t),
    n)
        return a = parseInt(n[1], 10),
        e = parseFloat(n[2].replace(",", ".")),
        bi(a, e) ? a % 24 * yi + e * bc : NaN;
    if (n = Jt.HHMMSS.exec(t),
    n) {
        a = parseInt(n[1], 10),
        e = parseInt(n[2], 10);
        var r = parseFloat(n[3].replace(",", "."));
        return bi(a, e, r) ? a % 24 * yi + e * bc + r * 1e3 : NaN
    }
    return null
}
function _c(t, n, a) {
    n = n || 0,
    a = a || 0;
    var e = new Date(0);
    e.setUTCFullYear(t, 0, 4);
    var r = e.getUTCDay() || 7
      , o = n * 7 + a + 1 - r;
    return e.setUTCDate(e.getUTCDate() + o),
    e
}
var IC = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
  , PC = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function ud(t) {
    return t % 400 === 0 || t % 4 === 0 && t % 100 !== 0
}
function wc(t, n, a) {
    if (n < 0 || n > 11)
        return !1;
    if (a != null) {
        if (a < 1)
            return !1;
        var e = ud(t);
        if (e && a > PC[n] || !e && a > IC[n])
            return !1
    }
    return !0
}
function EC(t, n) {
    if (n < 1)
        return !1;
    var a = ud(t);
    return !(a && n > 366 || !a && n > 365)
}
function kc(t, n, a) {
    return !(n < 0 || n > 52 || a != null && (a < 0 || a > 6))
}
function bi(t, n, a) {
    return !(t != null && (t < 0 || t >= 25) || n != null && (n < 0 || n >= 60) || a != null && (a < 0 || a >= 60))
}
var as = {
    exports: {}
}
  , ns = {
    exports: {}
};
(function(t, n) {
    Object.defineProperty(n, "__esModule", {
        value: !0
    }),
    n.default = a;
    function a(e, r) {
        if (e == null)
            throw new TypeError("assign requires that input parameter not be null or undefined");
        for (var o in r)
            Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
        return e
    }
    t.exports = n.default
}
)(ns, ns.exports);
var DC = ns.exports;
(function(t, n) {
    var a = lC.default;
    Object.defineProperty(n, "__esModule", {
        value: !0
    }),
    n.default = r;
    var e = a(DC);
    function r(o) {
        return (0,
        e.default)({}, o)
    }
    t.exports = n.default
}
)(as, as.exports);
var MC = as.exports;
const AC = Hs(MC);
function OC(t, n, a) {
    var e = ts(t, a)
      , r = Us(n, e, !0)
      , o = new Date(e.getTime() - r)
      , i = new Date(0);
    return i.setFullYear(o.getUTCFullYear(), o.getUTCMonth(), o.getUTCDate()),
    i.setHours(o.getUTCHours(), o.getUTCMinutes(), o.getUTCSeconds(), o.getUTCMilliseconds()),
    i
}
function xC(t, n, a) {
    if (typeof t == "string" && !t.match(cd)) {
        var e = AC(a);
        return e.timeZone = n,
        ts(t, e)
    }
    var r = ts(t, a)
      , o = Vs(r.getFullYear(), r.getMonth(), r.getDate(), r.getHours(), r.getMinutes(), r.getSeconds(), r.getMilliseconds()).getTime()
      , i = Us(n, new Date(o));
    return new Date(o + i)
}
function Sc(t) {
    return n => new Intl.DateTimeFormat(t,{
        weekday: "short",
        timeZone: "UTC"
    }).format(new Date(`2017-01-0${n}T00:00:00+00:00`)).slice(0, 2)
}
function BC(t) {
    return n => ln(new Date(`2017-01-0${n}T00:00:00+00:00`), "EEEEEE", {
        locale: t
    })
}
const LC = (t, n, a) => {
    const e = [1, 2, 3, 4, 5, 6, 7];
    let r;
    if (t !== null)
        try {
            r = e.map(BC(t))
        } catch {
            r = e.map(Sc(n))
        }
    else
        r = e.map(Sc(n));
    const o = r.slice(0, a)
      , i = r.slice(a + 1, r.length);
    return [r[a]].concat(...i).concat(...o)
}
  , Fs = (t, n) => {
    const a = [];
    for (let e = +t[0]; e <= +t[1]; e++)
        a.push({
            value: +e,
            text: `${e}`
        });
    return n ? a.reverse() : a
}
  , dd = (t, n, a) => {
    const e = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(o => {
        const i = o < 10 ? `0${o}` : o;
        return new Date(`2017-${i}-01T00:00:00+00:00`)
    }
    );
    if (t !== null)
        try {
            const o = a === "long" ? "MMMM" : "MMM";
            return e.map( (i, s) => {
                const l = ln(i, o, {
                    locale: t
                });
                return {
                    text: l.charAt(0).toUpperCase() + l.substring(1),
                    value: s
                }
            }
            )
        } catch {}
    const r = new Intl.DateTimeFormat(n,{
        month: a,
        timeZone: "UTC"
    });
    return e.map( (o, i) => {
        const s = r.format(o);
        return {
            text: s.charAt(0).toUpperCase() + s.substring(1),
            value: i
        }
    }
    )
}
  , RC = t => [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11][t]
  , Rt = t => {
    const n = N(t);
    return n != null && n.$el ? n?.$el : n
}
  , NC = t => Object.assign({
    type: "dot"
}, t)
  , md = t => Array.isArray(t) ? !!t[0] && !!t[1] : !1
  , jo = {
    prop: t => `"${t}" prop must be enabled!`,
    dateArr: t => `You need to use array as "model-value" binding in order to support "${t}"`
}
  , Ut = t => t
  , Tc = t => t === 0 ? t : !t || isNaN(+t) ? null : +t
  , Cc = t => t === null
  , HC = t => {
    if (t)
        return [...t.querySelectorAll("input, button, select, textarea, a[href]")][0]
}
  , VC = t => {
    const n = []
      , a = e => e.filter(r => r);
    for (let e = 0; e < t.length; e += 3) {
        const r = [t[e], t[e + 1], t[e + 2]];
        n.push(a(r))
    }
    return n
}
  , no = (t, n, a) => {
    const e = a != null
      , r = n != null;
    if (!e && !r)
        return !1;
    const o = +a
      , i = +n;
    return e && r ? +t > o || +t < i : e ? +t > o : r ? +t < i : !1
}
  , dr = (t, n) => VC(t).map(a => a.map(e => {
    const {active: r, disabled: o, isBetween: i, highlighted: s} = n(e);
    return {
        ...e,
        active: r,
        disabled: o,
        className: {
            dp__overlay_cell_active: r,
            dp__overlay_cell: !r,
            dp__overlay_cell_disabled: o,
            dp__overlay_cell_pad: !0,
            dp__overlay_cell_active_disabled: o && r,
            dp__cell_in_between: i,
            "dp--highlighted": s
        }
    }
}
))
  , cn = (t, n, a=!1) => {
    t && n.allowStopPropagation && (a && t.stopImmediatePropagation(),
    t.stopPropagation())
}
  , UC = () => ["a[href]", "area[href]", "input:not([disabled]):not([type='hidden'])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "[tabindex]:not([tabindex='-1'])", "[data-datepicker-instance]"].join(", ");
function FC(t, n) {
    let a = [...document.querySelectorAll(UC())];
    a = a.filter(r => !t.contains(r) || r.hasAttribute("data-datepicker-instance"));
    const e = a.indexOf(t);
    if (e >= 0 && (n ? e - 1 >= 0 : e + 1 <= a.length))
        return a[e + (n ? -1 : 1)]
}
const jC = (t, n) => {
    let a;
    return function(...e) {
        clearTimeout(a),
        a = setTimeout( () => {
            t(...e)
        }
        , n)
    }
}
  , Ic = (t, n, a, e, r) => {
    const o = Qi(t, n.slice(0, t.length), new Date);
    return Or(o) && Uu(o) ? e || r ? o : bt(o, {
        hours: +a.hours,
        minutes: +a?.minutes,
        seconds: +a?.seconds,
        milliseconds: 0
    }) : null
}
  , GC = (t, n, a, e, r) => {
    const o = Array.isArray(a) ? a[0] : a;
    if (typeof n == "string")
        return Ic(t, n, o, e, r);
    if (Array.isArray(n)) {
        let i = null;
        for (const s of n)
            if (i = Ic(t, s, o, e, r),
            i)
                break;
        return i
    }
    return typeof n == "function" ? n(t) : null
}
  , ie = t => t ? new Date(t) : new Date
  , YC = (t, n, a) => {
    if (n) {
        const r = (t.getMonth() + 1).toString().padStart(2, "0")
          , o = t.getDate().toString().padStart(2, "0")
          , i = t.getHours().toString().padStart(2, "0")
          , s = t.getMinutes().toString().padStart(2, "0")
          , l = a ? t.getSeconds().toString().padStart(2, "0") : "00";
        return `${t.getFullYear()}-${r}-${o}T${i}:${s}:${l}.000Z`
    }
    const e = Date.UTC(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate(), t.getUTCHours(), t.getUTCMinutes(), t.getUTCSeconds());
    return new Date(e).toISOString()
}
  , Zt = t => {
    let n = ie(JSON.parse(JSON.stringify(t)));
    return n = rd(n, 0),
    n = od(n, 0),
    n = Os(n, 0),
    n = As(n, 0),
    n
}
  , un = (t, n, a, e) => {
    let r = t ? ie(t) : ie();
    return (n || n === 0) && (r = rd(r, +n)),
    (a || a === 0) && (r = od(r, +a)),
    (e || e === 0) && (r = Os(r, +e)),
    As(r, 0)
}
  , Gt = (t, n) => !t || !n ? !1 : ao(Zt(t), Zt(n))
  , it = (t, n) => !t || !n ? !1 : Qn(Zt(t), Zt(n))
  , zt = (t, n) => !t || !n ? !1 : to(Zt(t), Zt(n))
  , zo = (t, n, a) => t != null && t[0] && t != null && t[1] ? zt(a, t[0]) && Gt(a, t[1]) : t != null && t[0] && n ? zt(a, t[0]) && Gt(a, n) || Gt(a, t[0]) && zt(a, n) : !1
  , ya = t => {
    const n = bt(new Date(t), {
        date: 1
    });
    return Zt(n)
}
  , _i = (t, n, a) => n && (a || a === 0) ? Object.fromEntries(["hours", "minutes", "seconds"].map(e => e === n ? [e, a] : [e, isNaN(+t[e]) ? void 0 : +t[e]])) : {
    hours: isNaN(+t.hours) ? void 0 : +t.hours,
    minutes: isNaN(+t.minutes) ? void 0 : +t.minutes,
    seconds: isNaN(+t.seconds) ? void 0 : +t.seconds
}
  , Dn = t => ({
    hours: ka(t),
    minutes: Ra(t),
    seconds: cr(t)
})
  , gd = (t, n) => {
    if (n) {
        const a = $e(ie(n));
        if (a > t)
            return 12;
        if (a === t)
            return et(ie(n))
    }
}
  , pd = (t, n) => {
    if (n) {
        const a = $e(ie(n));
        return a < t ? -1 : a === t ? et(ie(n)) : void 0
    }
}
  , mr = t => {
    if (t)
        return $e(ie(t))
}
  , Sa = (t, n) => n ? OC(t, n) : t
  , vd = (t, n) => n ? xC(t, n) : t
  , WC = t => t instanceof Date ? t : WT(t)
  , fd = (t, n) => {
    const a = zt(t, n) ? n : t
      , e = zt(n, t) ? n : t;
    return Fu({
        start: a,
        end: e
    })
}
  , $C = t => {
    const n = wa(t, 1);
    return {
        month: et(n),
        year: $e(n)
    }
}
  , So = (t, n, a) => {
    const e = Ln(Sa(t, n), {
        weekStartsOn: +a
    })
      , r = G1(Sa(t, n), {
        weekStartsOn: +a
    });
    return [e, r]
}
  , hd = (t, n) => {
    const a = {
        hours: ka(ie()),
        minutes: Ra(ie()),
        seconds: n ? cr(ie()) : 0
    };
    return Object.assign(a, t)
}
  , on = (t, n, a) => [bt(ie(t), {
    date: 1
}), bt(ie(), {
    month: n,
    year: a,
    date: 1
})]
  , za = (t, n, a) => {
    let e = t ? ie(t) : ie();
    return (n || n === 0) && (e = nd(e, n)),
    a && (e = Ba(e, a)),
    e
}
  , yd = (t, n, a, e, r) => {
    if (!e || r && !n || !r && !a)
        return !1;
    const o = r ? wa(t, 1) : ur(t, 1)
      , i = [et(o), $e(o)];
    return r ? !zC(...i, n) : !qC(...i, a)
}
  , qC = (t, n, a) => Gt(...on(a, t, n)) || it(...on(a, t, n))
  , zC = (t, n, a) => zt(...on(a, t, n)) || it(...on(a, t, n))
  , bd = (t, n, a, e, r, o, i) => {
    if (typeof n == "function" && !i)
        return n(t);
    const s = a ? {
        locale: a
    } : void 0;
    return Array.isArray(t) ? `${ln(t[0], o, s)}${r && !t[1] ? "" : e}${t[1] ? ln(t[1], o, s) : ""}` : ln(t, o, s)
}
  , Yn = t => {
    if (t)
        return null;
    throw new Error(jo.prop("partial-range"))
}
  , bo = (t, n) => {
    if (n)
        return t();
    throw new Error(jo.prop("range"))
}
  , rs = t => Array.isArray(t) ? Or(t[0]) && (t[1] ? Or(t[1]) : !0) : t ? Or(t) : !1
  , ZC = (t, n) => bt(n ?? ie(), {
    hours: +t.hours || 0,
    minutes: +t.minutes || 0,
    seconds: +t.seconds || 0
})
  , wi = (t, n, a, e) => {
    if (!t)
        return !0;
    if (e) {
        const r = a === "max" ? ao(t, n) : to(t, n)
          , o = {
            seconds: 0,
            milliseconds: 0
        };
        return r || Qn(bt(t, o), bt(n, o))
    }
    return a === "max" ? t.getTime() <= n.getTime() : t.getTime() >= n.getTime()
}
  , ki = (t, n, a) => t ? ZC(t, n) : ie(a ?? n)
  , Pc = (t, n, a, e, r) => {
    if (Array.isArray(e)) {
        const i = ki(t, e[0], n)
          , s = ki(t, e[1], n);
        return wi(e[0], i, a, !!n) && wi(e[1], s, a, !!n) && r
    }
    const o = ki(t, e, n);
    return wi(e, o, a, !!n) && r
}
  , Si = t => bt(ie(), Dn(t))
  , KC = (t, n) => Array.isArray(t) ? t.map(a => ie(a)).filter(a => $e(ie(a)) === n).map(a => et(a)) : []
  , _d = (t, n, a) => typeof t == "function" ? t({
    month: n,
    year: a
}) : !!t.months.find(e => e.month === n && e.year === a)
  , js = (t, n) => typeof t == "function" ? t(n) : t.years.includes(n)
  , Sr = Za({
    menuFocused: !1,
    shiftKeyInMenu: !1
})
  , wd = () => {
    const t = a => {
        Sr.menuFocused = a
    }
      , n = a => {
        Sr.shiftKeyInMenu !== a && (Sr.shiftKeyInMenu = a)
    }
    ;
    return {
        control: u( () => ({
            shiftKeyInMenu: Sr.shiftKeyInMenu,
            menuFocused: Sr.menuFocused
        })),
        setMenuFocused: t,
        setShiftKey: n
    }
}
  , yt = Za({
    monthYear: [],
    calendar: [],
    time: [],
    actionRow: [],
    selectionGrid: [],
    timePicker: {
        0: [],
        1: []
    },
    monthPicker: []
})
  , Ti = E(null)
  , _o = E(!1)
  , Ci = E(!1)
  , Ii = E(!1)
  , Pi = E(!1)
  , Xt = E(0)
  , jt = E(0)
  , bn = () => {
    const t = u( () => _o.value ? [...yt.selectionGrid, yt.actionRow].filter(g => g.length) : Ci.value ? [...yt.timePicker[0], ...yt.timePicker[1], Pi.value ? [] : [Ti.value], yt.actionRow].filter(g => g.length) : Ii.value ? [...yt.monthPicker, yt.actionRow] : [yt.monthYear, ...yt.calendar, yt.time, yt.actionRow].filter(g => g.length))
      , n = g => {
        Xt.value = g ? Xt.value + 1 : Xt.value - 1;
        let v = null;
        t.value[jt.value] && (v = t.value[jt.value][Xt.value]),
        v || (Xt.value = g ? Xt.value - 1 : Xt.value + 1)
    }
      , a = g => {
        jt.value === 0 && !g || jt.value === t.value.length && g || (jt.value = g ? jt.value + 1 : jt.value - 1,
        t.value[jt.value] ? t.value[jt.value] && !t.value[jt.value][Xt.value] && Xt.value !== 0 && (Xt.value = t.value[jt.value].length - 1) : jt.value = g ? jt.value - 1 : jt.value + 1)
    }
      , e = g => {
        let v = null;
        t.value[jt.value] && (v = t.value[jt.value][Xt.value]),
        v ? v.focus({
            preventScroll: !_o.value
        }) : Xt.value = g ? Xt.value - 1 : Xt.value + 1
    }
      , r = () => {
        n(!0),
        e(!0)
    }
      , o = () => {
        n(!1),
        e(!1)
    }
      , i = () => {
        a(!1),
        e(!0)
    }
      , s = () => {
        a(!0),
        e(!0)
    }
      , l = (g, v) => {
        yt[v] = g
    }
      , d = (g, v) => {
        yt[v] = g
    }
      , p = () => {
        Xt.value = 0,
        jt.value = 0
    }
    ;
    return {
        buildMatrix: l,
        buildMultiLevelMatrix: d,
        setTimePickerBackRef: g => {
            Ti.value = g
        }
        ,
        setSelectionGrid: g => {
            _o.value = g,
            p(),
            g || (yt.selectionGrid = [])
        }
        ,
        setTimePicker: (g, v=!1) => {
            Ci.value = g,
            Pi.value = v,
            p(),
            g || (yt.timePicker[0] = [],
            yt.timePicker[1] = [])
        }
        ,
        setTimePickerElements: (g, v=0) => {
            yt.timePicker[v] = g
        }
        ,
        arrowRight: r,
        arrowLeft: o,
        arrowUp: i,
        arrowDown: s,
        clearArrowNav: () => {
            yt.monthYear = [],
            yt.calendar = [],
            yt.time = [],
            yt.actionRow = [],
            yt.selectionGrid = [],
            yt.timePicker[0] = [],
            yt.timePicker[1] = [],
            _o.value = !1,
            Ci.value = !1,
            Pi.value = !1,
            Ii.value = !1,
            p(),
            Ti.value = null
        }
        ,
        setMonthPicker: g => {
            Ii.value = g,
            p()
        }
        ,
        refSets: yt
    }
}
  , Ec = t => ({
    menuAppearTop: "dp-menu-appear-top",
    menuAppearBottom: "dp-menu-appear-bottom",
    open: "dp-slide-down",
    close: "dp-slide-up",
    next: "calendar-next",
    previous: "calendar-prev",
    vNext: "dp-slide-up",
    vPrevious: "dp-slide-down",
    ...t ?? {}
})
  , QC = t => ({
    toggleOverlay: "Toggle overlay",
    menu: "Datepicker menu",
    input: "Datepicker input",
    calendarWrap: "Calendar wrapper",
    calendarDays: "Calendar days",
    openTimePicker: "Open time picker",
    closeTimePicker: "Close time Picker",
    incrementValue: n => `Increment ${n}`,
    decrementValue: n => `Decrement ${n}`,
    openTpOverlay: n => `Open ${n} overlay`,
    amPmButton: "Switch AM/PM mode",
    openYearsOverlay: "Open years overlay",
    openMonthsOverlay: "Open months overlay",
    nextMonth: "Next month",
    prevMonth: "Previous month",
    nextYear: "Next year",
    prevYear: "Previous year",
    day: () => "",
    ...t ?? {}
})
  , Dc = t => t ? typeof t == "boolean" ? t ? 2 : 0 : +t >= 2 ? +t : 2 : 0
  , XC = t => {
    const n = typeof t == "object" && t
      , a = {
        static: !0,
        solo: !1
    };
    if (!t)
        return {
            ...a,
            count: Dc(!1)
        };
    const e = n ? t : {}
      , r = n ? e.count ?? !0 : t
      , o = Dc(r);
    return Object.assign(a, e, {
        count: o
    })
}
  , JC = (t, n, a) => t || (typeof a == "string" ? a : n)
  , eI = t => typeof t == "boolean" ? t ? Ec({}) : !1 : Ec(t)
  , tI = t => {
    const n = {
        enterSubmit: !0,
        tabSubmit: !0,
        openMenu: !0,
        selectOnFocus: !1,
        rangeSeparator: " - "
    };
    return typeof t == "object" ? {
        ...n,
        ...t ?? {},
        enabled: !0
    } : {
        ...n,
        enabled: t
    }
}
  , aI = t => ({
    months: [],
    years: [],
    times: {
        hours: [],
        minutes: [],
        seconds: []
    },
    ...t ?? {}
})
  , nI = t => ({
    showSelect: !0,
    showCancel: !0,
    showNow: !1,
    showPreview: !0,
    ...t ?? {}
})
  , rI = t => {
    const n = {
        input: !1
    };
    return typeof t == "object" ? {
        ...n,
        ...t ?? {},
        enabled: !0
    } : {
        enabled: t,
        ...n
    }
}
  , oI = t => ({
    allowStopPropagation: !0,
    closeOnScroll: !1,
    modeHeight: 255,
    allowPreventDefault: !1,
    closeOnClearValue: !0,
    closeOnAutoApply: !0,
    noSwipe: !1,
    keepActionRow: !1,
    onClickOutside: void 0,
    tabOutClosesMenu: !0,
    ...t ?? {}
})
  , iI = (t, n, a) => {
    const e = {
        dates: Array.isArray(t) ? t.map(r => ie(r)) : [],
        years: [],
        months: [],
        quarters: [],
        weeks: [],
        weekdays: n,
        options: {
            highlightDisabled: a
        }
    };
    return typeof t == "function" ? t : {
        ...e,
        ...t ?? {}
    }
}
  , sI = t => typeof t == "object" ? {
    type: t.type,
    hideOnOffsetDates: t.hideOnOffsetDates ?? !1
} : {
    type: t,
    hideOnOffsetDates: !1
}
  , Ot = t => {
    const n = () => {
        const w = t.enableSeconds ? ":ss" : "";
        return t.is24 ? `HH:mm${w}` : `hh:mm${w} aa`
    }
      , a = () => t.format ? t.format : t.monthPicker ? "MM/yyyy" : t.timePicker ? n() : t.weekPicker ? "MM/dd/yyyy" : t.yearPicker ? "yyyy" : t.quarterPicker ? "QQQ/yyyy" : t.enableTimePicker ? `MM/dd/yyyy, ${n()}` : "MM/dd/yyyy"
      , e = w => hd(w, t.enableSeconds)
      , r = () => t.range ? t.startTime && Array.isArray(t.startTime) ? [e(t.startTime[0]), e(t.startTime[1])] : null : t.startTime && !Array.isArray(t.startTime) ? e(t.startTime) : null
      , o = u( () => XC(t.multiCalendars))
      , i = u( () => r())
      , s = u( () => QC(t.ariaLabels))
      , l = u( () => aI(t.filters))
      , d = u( () => eI(t.transitions))
      , p = u( () => nI(t.actionRow))
      , g = u( () => JC(t.previewFormat, t.format, a()))
      , v = u( () => tI(t.textInput))
      , f = u( () => rI(t.inline))
      , b = u( () => oI(t.config))
      , D = u( () => iI(t.highlight, t.highlightWeekDays, t.highlightDisabledDays))
      , T = u( () => sI(t.weekNumbers));
    return {
        defaultedTransitions: d,
        defaultedMultiCalendars: o,
        defaultedStartTime: i,
        defaultedAriaLabels: s,
        defaultedFilters: l,
        defaultedActionRow: p,
        defaultedPreviewFormat: g,
        defaultedTextInput: v,
        defaultedInline: f,
        defaultedConfig: b,
        defaultedHighlight: D,
        defaultedWeekNumbers: T,
        getDefaultPattern: a,
        getDefaultStartTime: r
    }
}
  , lI = (t, n, a) => {
    const e = E()
      , {defaultedTextInput: r, getDefaultPattern: o} = Ot(n)
      , i = E("")
      , s = An(n, "format");
    Fe(e, () => {
        t("internal-model-change", e.value)
    }
    ),
    Fe(s, () => {
        L()
    }
    );
    const l = h => vd(h, n.timezone)
      , d = h => Sa(h, n.timezone)
      , p = (h, W, U=!1) => bd(h, n.format, n.formatLocale, r.value.rangeSeparator, n.modelAuto, W ?? o(), U)
      , g = h => h ? n.modelType ? A(h) : {
        hours: ka(h),
        minutes: Ra(h),
        seconds: n.enableSeconds ? cr(h) : 0
    } : null
      , v = h => n.modelType ? A(h) : {
        month: et(h),
        year: $e(h)
    }
      , f = h => Array.isArray(h) ? n.multiDates ? h.map(W => b(W, Ba(ie(), W))) : bo( () => [Ba(ie(), h[0]), h[1] ? Ba(ie(), h[1]) : Yn(n.partialRange)], n.range) : Ba(ie(), +h)
      , b = (h, W) => (typeof h == "string" || typeof h == "number") && n.modelType ? _(h) : W
      , D = h => Array.isArray(h) ? [b(h[0], un(null, +h[0].hours, +h[0].minutes, h[0].seconds)), b(h[1], un(null, +h[1].hours, +h[1].minutes, h[1].seconds))] : b(h, un(null, h.hours, h.minutes, h.seconds))
      , T = h => Array.isArray(h) ? n.multiDates ? h.map(W => b(W, za(null, +W.month, +W.year))) : bo( () => [b(h[0], za(null, +h[0].month, +h[0].year)), b(h[1], h[1] ? za(null, +h[1].month, +h[1].year) : Yn(n.partialRange))], n.range) : b(h, za(null, +h.month, +h.year))
      , w = h => {
        if (Array.isArray(h))
            return h.map(W => _(W));
        throw new Error(jo.dateArr("multi-dates"))
    }
      , S = h => {
        if (Array.isArray(h))
            return [ie(h[0]), ie(h[1])];
        throw new Error(jo.dateArr("week-picker"))
    }
      , B = h => n.modelAuto ? Array.isArray(h) ? [_(h[0]), _(h[1])] : n.autoApply ? [_(h)] : [_(h), null] : Array.isArray(h) ? bo( () => [_(h[0]), h[1] ? _(h[1]) : Yn(n.partialRange)], n.range) : _(h)
      , I = () => {
        Array.isArray(e.value) && n.range && e.value.length === 1 && e.value.push(Yn(n.partialRange))
    }
      , R = () => {
        const h = e.value;
        return [A(h[0]), h[1] ? A(h[1]) : Yn(n.partialRange)]
    }
      , $ = () => e.value[1] ? R() : A(Ut(e.value[0]))
      , G = () => (e.value || []).map(h => A(h))
      , ee = () => (I(),
    n.modelAuto ? $() : n.multiDates ? G() : Array.isArray(e.value) ? bo( () => R(), n.range) : A(Ut(e.value)))
      , K = h => !h || Array.isArray(h) && !h.length ? null : n.timePicker ? D(Ut(h)) : n.monthPicker ? T(Ut(h)) : n.yearPicker ? f(Ut(h)) : n.multiDates ? w(Ut(h)) : n.weekPicker ? S(Ut(h)) : B(Ut(h))
      , M = h => {
        const W = K(h);
        rs(Ut(W)) ? (e.value = Ut(W),
        L()) : (e.value = null,
        i.value = "")
    }
      , j = () => {
        const h = W => ln(W, r.value.format);
        return `${h(e.value[0])} ${r.value.rangeSeparator} ${e.value[1] ? h(e.value[1]) : ""}`
    }
      , q = () => a.value && e.value ? Array.isArray(e.value) ? j() : ln(e.value, r.value.format) : p(e.value)
      , Y = () => e.value ? n.multiDates ? e.value.map(h => p(h)).join("; ") : r.value.enabled && typeof r.value.format == "string" ? q() : p(e.value) : ""
      , L = () => {
        !n.format || typeof n.format == "string" || r.value.enabled && typeof r.value.format == "string" ? i.value = Y() : i.value = n.format(e.value)
    }
      , _ = h => {
        if (n.utc) {
            const W = new Date(h);
            return n.utc === "preserve" ? new Date(W.getTime() + W.getTimezoneOffset() * 6e4) : W
        }
        return n.modelType ? n.modelType === "date" || n.modelType === "timestamp" ? d(new Date(h)) : n.modelType === "format" && (typeof n.format == "string" || !n.format) ? Qi(h, o(), new Date) : d(Qi(h, n.modelType, new Date)) : d(new Date(h))
    }
      , A = h => h ? n.utc ? YC(h, n.utc === "preserve", n.enableSeconds) : n.modelType ? n.modelType === "timestamp" ? +l(h) : n.modelType === "format" && (typeof n.format == "string" || !n.format) ? p(l(h)) : p(l(h), n.modelType, !0) : l(h) : ""
      , P = (h, W=!1) => {
        if (t("update:model-value", h),
        n.emitTimezone && W) {
            const U = Array.isArray(h) ? h.map(te => Sa(Ut(te)), n.emitTimezone) : Sa(Ut(h), n.emitTimezone);
            t("update:model-timezone-value", U)
        }
    }
      , H = h => Array.isArray(e.value) ? n.multiDates ? e.value.map(W => h(W)) : [h(e.value[0]), e.value[1] ? h(e.value[1]) : Yn(n.partialRange)] : h(Ut(e.value))
      , k = h => P(Ut(H(h)));
    return {
        inputValue: i,
        internalModelValue: e,
        checkBeforeEmit: () => e.value ? n.range ? n.partialRange ? e.value.length >= 1 : e.value.length === 2 : !!e.value : !1,
        parseExternalModelValue: M,
        formatInputValue: L,
        emitModelValue: () => (L(),
        n.monthPicker ? k(v) : n.timePicker ? k(g) : n.yearPicker ? k($e) : n.weekPicker ? P(e.value.map(h => A(h)), !0) : P(ee(), !0))
    }
}
  , cI = (t, n) => {
    const {defaultedFilters: a} = Ot(t)
      , {validateMonthYearInRange: e} = Vn(t)
      , r = (d, p) => {
        let g = d;
        return a.value.months.includes(et(g)) ? (g = p ? wa(d, 1) : ur(d, 1),
        r(g, p)) : g
    }
      , o = (d, p) => {
        let g = d;
        return a.value.years.includes($e(g)) ? (g = p ? Cs(d, 1) : id(d, 1),
        o(g, p)) : g
    }
      , i = (d, p=!1) => {
        const g = bt(new Date, {
            month: t.month,
            year: t.year
        });
        let v = d ? wa(g, 1) : ur(g, 1);
        t.disableYearSelect && (v = Ba(v, t.year));
        let f = et(v)
          , b = $e(v);
        a.value.months.includes(f) && (v = r(v, d),
        f = et(v),
        b = $e(v)),
        a.value.years.includes(b) && (v = o(v, d),
        b = $e(v)),
        e(f, b, d, t.preventMinMaxNavigation) && s(f, b, p)
    }
      , s = (d, p, g) => {
        n("update-month-year", {
            month: d,
            year: p,
            fromNav: g
        })
    }
      , l = u( () => d => yd(bt(new Date, {
        month: t.month,
        year: t.year
    }), t.maxDate, t.minDate, t.preventMinMaxNavigation, d));
    return {
        handleMonthYearChange: i,
        isDisabled: l,
        updateMonthYear: s
    }
}
;
var $n = (t => (t.center = "center",
t.left = "left",
t.right = "right",
t))($n || {})
  , fa = (t => (t.month = "month",
t.year = "year",
t))(fa || {})
  , Tn = (t => (t.top = "top",
t.bottom = "bottom",
t))(Tn || {})
  , Mn = (t => (t.header = "header",
t.calendar = "calendar",
t.timePicker = "timePicker",
t))(Mn || {})
  , Ma = (t => (t.month = "month",
t.year = "year",
t.calendar = "calendar",
t.time = "time",
t.minutes = "minutes",
t.hours = "hours",
t.seconds = "seconds",
t))(Ma || {});
const uI = ({menuRef: t, menuRefInner: n, inputRef: a, pickerWrapperRef: e, inline: r, emit: o, props: i, slots: s}) => {
    const l = E({})
      , d = E(!1)
      , p = E({
        top: "0",
        left: "0"
    })
      , g = E(!1)
      , v = An(i, "teleportCenter");
    Fe(v, () => {
        p.value = JSON.parse(JSON.stringify({})),
        I()
    }
    );
    const f = _ => {
        if (i.teleport) {
            const A = _.getBoundingClientRect();
            return {
                left: A.left + window.scrollX,
                top: A.top + window.scrollY
            }
        }
        return {
            top: 0,
            left: 0
        }
    }
      , b = (_, A) => {
        p.value.left = `${_ + A - l.value.width}px`
    }
      , D = _ => {
        p.value.left = `${_}px`
    }
      , T = (_, A) => {
        i.position === $n.left && D(_),
        i.position === $n.right && b(_, A),
        i.position === $n.center && (p.value.left = `${_ + A / 2 - l.value.width / 2}px`)
    }
      , w = _ => {
        const {width: A, height: P} = _.getBoundingClientRect()
          , {top: H, left: k} = i.altPosition ? i.altPosition(_) : f(_);
        return {
            top: +H,
            left: +k,
            width: A,
            height: P
        }
    }
      , S = () => {
        p.value.left = "50%",
        p.value.top = "50%",
        p.value.transform = "translate(-50%, -50%)",
        p.value.position = "fixed",
        delete p.value.opacity
    }
      , B = () => {
        const _ = Rt(a)
          , {top: A, left: P, transform: H} = i.altPosition(_);
        p.value = {
            top: `${A}px`,
            left: `${P}px`,
            transform: H ?? ""
        }
    }
      , I = (_=!0) => {
        var A;
        if (!r.value.enabled) {
            if (v.value)
                return S();
            if (i.altPosition !== null)
                return B();
            if (_) {
                const P = i.teleport ? (A = n.value) == null ? void 0 : A.$el : t.value;
                P && (l.value = P.getBoundingClientRect()),
                o("recalculate-position")
            }
            return j()
        }
    }
      , R = ({inputEl: _, left: A, width: P}) => {
        window.screen.width > 768 && !d.value && T(A, P),
        ee(_)
    }
      , $ = _ => {
        const {top: A, left: P, height: H, width: k} = w(_);
        p.value.top = `${H + A + +i.offset}px`,
        g.value = !1,
        d.value || (p.value.left = `${P + k / 2 - l.value.width / 2}px`),
        R({
            inputEl: _,
            left: P,
            width: k
        })
    }
      , G = _ => {
        const {top: A, left: P, width: H} = w(_);
        p.value.top = `${A - +i.offset - l.value.height}px`,
        g.value = !0,
        R({
            inputEl: _,
            left: P,
            width: H
        })
    }
      , ee = _ => {
        if (i.autoPosition) {
            const {left: A, width: P} = w(_)
              , {left: H, right: k} = l.value;
            if (!d.value) {
                if (Math.abs(H) !== Math.abs(k)) {
                    if (H <= 0)
                        return d.value = !0,
                        D(A);
                    if (k >= document.documentElement.clientWidth)
                        return d.value = !0,
                        b(A, P)
                }
                return T(A, P)
            }
        }
    }
      , K = () => {
        const _ = Rt(a);
        if (_) {
            const {height: A} = l.value
              , {top: P, height: H} = _.getBoundingClientRect()
              , k = window.innerHeight - P - H
              , h = P;
            return A <= k ? Tn.bottom : A > k && A <= h ? Tn.top : k >= h ? Tn.bottom : Tn.top
        }
        return Tn.bottom
    }
      , M = _ => K() === Tn.bottom ? $(_) : G(_)
      , j = () => {
        const _ = Rt(a);
        if (_)
            return i.autoPosition ? M(_) : $(_)
    }
      , q = function(_) {
        if (_) {
            const A = _.scrollHeight > _.clientHeight
              , P = window.getComputedStyle(_).overflowY.indexOf("hidden") !== -1;
            return A && !P
        }
        return !0
    }
      , Y = function(_) {
        return !_ || _ === document.body || _.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? window : q(_) ? _ : Y(_.parentNode)
    }
      , L = _ => {
        if (_)
            switch (i.position) {
            case $n.left:
                return {
                    left: 0,
                    transform: "translateX(0)"
                };
            case $n.right:
                return {
                    left: `${_.width}px`,
                    transform: "translateX(-100%)"
                };
            default:
                return {
                    left: `${_.width / 2}px`,
                    transform: "translateX(-50%)"
                }
            }
        return {}
    }
    ;
    return {
        openOnTop: g,
        menuStyle: p,
        xCorrect: d,
        setMenuPosition: I,
        getScrollableParent: Y,
        shadowRender: (_, A) => {
            var P, H, k;
            const h = document.createElement("div")
              , W = (P = Rt(a)) == null ? void 0 : P.getBoundingClientRect();
            h.setAttribute("id", "dp--temp-container");
            const U = (H = e.value) != null && H.clientWidth ? e.value : document.body;
            U.append(h);
            const te = L(W)
              , Q = Rd(_, {
                ...A,
                shadow: !0,
                style: {
                    opacity: 0,
                    position: "absolute",
                    ...te
                }
            }, Object.fromEntries(Object.keys(s).filter(V => ["right-sidebar", "left-sidebar"].includes(V)).map(V => [V, s[V]])));
            Zs(Q, h),
            l.value = (k = Q.el) == null ? void 0 : k.getBoundingClientRect(),
            Zs(null, h),
            U.removeChild(h)
        }
    }
}
  , nn = [{
    name: "clock-icon",
    use: ["time", "calendar", "shared"]
}, {
    name: "arrow-left",
    use: ["month-year", "calendar", "shared", "year-mode"]
}, {
    name: "arrow-right",
    use: ["month-year", "calendar", "shared", "year-mode"]
}, {
    name: "arrow-up",
    use: ["time", "calendar", "month-year", "shared"]
}, {
    name: "arrow-down",
    use: ["time", "calendar", "month-year", "shared"]
}, {
    name: "calendar-icon",
    use: ["month-year", "time", "calendar", "shared", "year-mode"]
}, {
    name: "day",
    use: ["calendar", "shared"]
}, {
    name: "month-overlay-value",
    use: ["calendar", "month-year", "shared"]
}, {
    name: "year-overlay-value",
    use: ["calendar", "month-year", "shared", "year-mode"]
}, {
    name: "year-overlay",
    use: ["month-year", "shared"]
}, {
    name: "month-overlay",
    use: ["month-year", "shared"]
}, {
    name: "month-overlay-header",
    use: ["month-year", "shared"]
}, {
    name: "year-overlay-header",
    use: ["month-year", "shared"]
}, {
    name: "hours-overlay-value",
    use: ["calendar", "time", "shared"]
}, {
    name: "minutes-overlay-value",
    use: ["calendar", "time", "shared"]
}, {
    name: "seconds-overlay-value",
    use: ["calendar", "time", "shared"]
}, {
    name: "hours",
    use: ["calendar", "time", "shared"]
}, {
    name: "minutes",
    use: ["calendar", "time", "shared"]
}, {
    name: "month",
    use: ["calendar", "month-year", "shared"]
}, {
    name: "year",
    use: ["calendar", "month-year", "shared", "year-mode"]
}, {
    name: "action-buttons",
    use: ["action"]
}, {
    name: "action-preview",
    use: ["action"]
}, {
    name: "calendar-header",
    use: ["calendar", "shared"]
}, {
    name: "marker-tooltip",
    use: ["calendar", "shared"]
}, {
    name: "action-extra",
    use: ["menu"]
}, {
    name: "time-picker-overlay",
    use: ["calendar", "time", "shared"]
}, {
    name: "am-pm-button",
    use: ["calendar", "time", "shared"]
}, {
    name: "left-sidebar",
    use: ["menu"]
}, {
    name: "right-sidebar",
    use: ["menu"]
}, {
    name: "month-year",
    use: ["month-year", "shared"]
}, {
    name: "time-picker",
    use: ["menu", "shared"]
}, {
    name: "action-row",
    use: ["action"]
}, {
    name: "marker",
    use: ["calendar", "shared"]
}, {
    name: "quarter",
    use: ["shared"]
}]
  , dI = [{
    name: "trigger"
}, {
    name: "input-icon"
}, {
    name: "clear-icon"
}, {
    name: "dp-input"
}]
  , mI = {
    all: () => nn,
    monthYear: () => nn.filter(t => t.use.includes("month-year")),
    input: () => dI,
    timePicker: () => nn.filter(t => t.use.includes("time")),
    action: () => nn.filter(t => t.use.includes("action")),
    calendar: () => nn.filter(t => t.use.includes("calendar")),
    menu: () => nn.filter(t => t.use.includes("menu")),
    shared: () => nn.filter(t => t.use.includes("shared")),
    yearMode: () => nn.filter(t => t.use.includes("year-mode"))
}
  , oa = (t, n, a) => {
    const e = [];
    return mI[n]().forEach(r => {
        t[r.name] && e.push(r.name)
    }
    ),
    a != null && a.length && a.forEach(r => {
        r.slot && e.push(r.slot)
    }
    ),
    e
}
  , co = t => {
    const n = u( () => e => t.value ? e ? t.value.open : t.value.close : "")
      , a = u( () => e => t.value ? e ? t.value.menuAppearTop : t.value.menuAppearBottom : "");
    return {
        transitionName: n,
        showTransition: !!t.value,
        menuTransition: a
    }
}
  , uo = (t, n) => {
    const a = ie(Sa(new Date, t.timezone))
      , e = E([{
        month: et(a),
        year: $e(a)
    }])
      , r = Za({
        hours: t.range ? [ka(a), ka(a)] : ka(a),
        minutes: t.range ? [Ra(a), Ra(a)] : Ra(a),
        seconds: t.range ? [0, 0] : 0
    })
      , o = u({
        get: () => t.internalModelValue,
        set: l => {
            !t.readonly && !t.disabled && n("update:internal-model-value", l)
        }
    })
      , i = u( () => l => e.value[l] ? e.value[l].month : 0)
      , s = u( () => l => e.value[l] ? e.value[l].year : 0);
    return {
        calendars: e,
        time: r,
        modelValue: o,
        month: i,
        year: s
    }
}
  , gI = (t, n) => {
    const {defaultedMultiCalendars: a, defaultedHighlight: e} = Ot(n)
      , {isDisabled: r, matchDate: o} = Vn(n)
      , i = E(null)
      , s = E(ie(Sa(new Date, n.timezone)))
      , l = k => {
        !k.current && n.hideOffsetDates || (i.value = k.value)
    }
      , d = () => {
        i.value = null
    }
      , p = k => Array.isArray(t.value) && n.range && t.value[0] && i.value ? k ? zt(i.value, t.value[0]) : Gt(i.value, t.value[0]) : !0
      , g = (k, h) => {
        const W = () => t.value ? h ? t.value[0] || null : t.value[1] : null
          , U = t.value && Array.isArray(t.value) ? W() : null;
        return it(ie(k.value), U)
    }
      , v = k => {
        const h = Array.isArray(t.value) ? t.value[0] : null;
        return k ? !Gt(i.value ?? null, h) : !0
    }
      , f = (k, h=!0) => (n.range || n.weekPicker) && Array.isArray(t.value) && t.value.length === 2 ? n.hideOffsetDates && !k.current ? !1 : it(ie(k.value), t.value[h ? 0 : 1]) : n.range ? g(k, h) && v(h) || it(k.value, Array.isArray(t.value) ? t.value[0] : null) && p(h) : !1
      , b = (k, h, W) => Array.isArray(t.value) && t.value[0] && t.value.length === 1 ? k ? !1 : W ? zt(t.value[0], h.value) : Gt(t.value[0], h.value) : !1
      , D = k => !t.value || n.hideOffsetDates && !k.current ? !1 : n.range ? n.modelAuto && Array.isArray(t.value) ? it(k.value, t.value[0] ? t.value[0] : s.value) : !1 : n.multiDates && Array.isArray(t.value) ? t.value.some(h => it(h, k.value)) : it(k.value, t.value ? t.value : s.value)
      , T = k => {
        if (n.autoRange || n.weekPicker) {
            if (i.value) {
                if (n.hideOffsetDates && !k.current)
                    return !1;
                const h = qa(i.value, +n.autoRange)
                  , W = So(ie(i.value), n.timezone, n.weekStart);
                return n.weekPicker ? it(W[1], ie(k.value)) : it(h, ie(k.value))
            }
            return !1
        }
        return !1
    }
      , w = k => {
        if (n.autoRange || n.weekPicker) {
            if (i.value) {
                const h = qa(i.value, +n.autoRange);
                if (n.hideOffsetDates && !k.current)
                    return !1;
                const W = So(ie(i.value), n.timezone, n.weekStart);
                return n.weekPicker ? zt(k.value, W[0]) && Gt(k.value, W[1]) : zt(k.value, i.value) && Gt(k.value, h)
            }
            return !1
        }
        return !1
    }
      , S = k => {
        if (n.autoRange || n.weekPicker) {
            if (i.value) {
                if (n.hideOffsetDates && !k.current)
                    return !1;
                const h = So(ie(i.value), n.timezone, n.weekStart);
                return n.weekPicker ? it(h[0], k.value) : it(i.value, k.value)
            }
            return !1
        }
        return !1
    }
      , B = k => zo(t.value, i.value, k.value)
      , I = () => n.modelAuto && Array.isArray(n.internalModelValue) ? !!n.internalModelValue[0] : !1
      , R = () => n.modelAuto ? md(n.internalModelValue) : !0
      , $ = k => {
        if (Array.isArray(t.value) && t.value.length || n.weekPicker)
            return !1;
        const h = n.range ? !f(k) && !f(k, !1) : !0;
        return !r(k.value) && !D(k) && !(!k.current && n.hideOffsetDates) && h
    }
      , G = k => n.range ? n.modelAuto ? I() && D(k) : !1 : D(k)
      , ee = k => {
        var h;
        return e.value ? typeof e.value == "function" ? e.value(k.value) : o(k.value, (h = n.arrMapValues) != null && h.highlightedDates ? n.arrMapValues.highlightedDates : e.value.dates) : !1
    }
      , K = k => {
        const h = r(k.value);
        return h && (typeof e.value == "function" ? !e.value(k.value, h) : !e.value.options.highlightDisabled)
    }
      , M = k => {
        var h;
        return typeof e.value == "function" ? e.value(k.value) : (h = e.value.weekdays) == null ? void 0 : h.includes(k.value.getDay())
    }
      , j = k => (n.range || n.weekPicker) && (!(a.value.count > 0) || k.current) && R() && !(!k.current && n.hideOffsetDates) && !D(k) ? B(k) : !1
      , q = k => {
        const {isRangeStart: h, isRangeEnd: W} = _(k)
          , U = n.range ? h || W : !1;
        return {
            dp__cell_offset: !k.current,
            dp__pointer: !n.disabled && !(!k.current && n.hideOffsetDates) && !r(k.value),
            dp__cell_disabled: r(k.value),
            dp__cell_highlight: !K(k) && (ee(k) || M(k)) && !G(k) && !U && !S(k) && !(j(k) && n.weekPicker) && !W,
            dp__cell_highlight_active: !K(k) && (ee(k) || M(k)) && G(k),
            dp__today: !n.noToday && it(k.value, s.value) && k.current
        }
    }
      , Y = k => ({
        dp__active_date: G(k),
        dp__date_hover: $(k)
    })
      , L = k => ({
        ...A(k),
        ...P(k),
        dp__range_between_week: j(k) && n.weekPicker
    })
      , _ = k => {
        const h = a.value.count > 0 ? k.current && f(k) && R() : f(k) && R()
          , W = a.value.count > 0 ? k.current && f(k, !1) && R() : f(k, !1) && R();
        return {
            isRangeStart: h,
            isRangeEnd: W
        }
    }
      , A = k => {
        const {isRangeStart: h, isRangeEnd: W} = _(k);
        return {
            dp__range_start: h,
            dp__range_end: W,
            dp__range_between: j(k) && !n.weekPicker,
            dp__date_hover_start: b($(k), k, !0),
            dp__date_hover_end: b($(k), k, !1)
        }
    }
      , P = k => ({
        ...A(k),
        dp__cell_auto_range: w(k),
        dp__cell_auto_range_start: S(k),
        dp__cell_auto_range_end: T(k)
    })
      , H = k => n.range ? n.autoRange ? P(k) : n.modelAuto ? {
        ...Y(k),
        ...A(k)
    } : A(k) : n.weekPicker ? L(k) : Y(k);
    return {
        setHoverDate: l,
        clearHoverDate: d,
        getDayClassData: k => n.hideOffsetDates && !k.current ? {} : {
            ...q(k),
            ...H(k),
            [n.dayClass ? n.dayClass(k.value) : ""]: !0,
            [n.calendarCellClassName]: !!n.calendarCellClassName
        }
    }
}
  , Vn = t => {
    const {defaultedFilters: n, defaultedHighlight: a} = Ot(t)
      , e = () => {
        if (t.timezone)
            return t.timezone;
        if (t.utc)
            return "UTC"
    }
      , r = M => {
        const j = Zt(o(ie(M))).toISOString()
          , [q] = j.split("T");
        return q
    }
      , o = M => t.utc === "preserve" ? vd(M, e()) : Sa(M, e())
      , i = M => {
        var j;
        const q = t.maxDate ? zt(M, o(ie(t.maxDate))) : !1
          , Y = t.minDate ? Gt(M, o(ie(t.minDate))) : !1
          , L = p(o(M), (j = t.arrMapValues) != null && j.disabledDates ? t.arrMapValues.disabledDates : t.disabledDates)
          , _ = n.value.months.map(h => +h).includes(et(M))
          , A = t.disabledWeekDays.length ? t.disabledWeekDays.some(h => +h === VS(M)) : !1
          , P = v(M)
          , H = $e(M)
          , k = H < +t.yearRange[0] || H > +t.yearRange[1];
        return !(q || Y || L || _ || k || A || P)
    }
      , s = (M, j) => Gt(...on(t.minDate, M, j)) || it(...on(t.minDate, M, j))
      , l = (M, j) => zt(...on(t.maxDate, M, j)) || it(...on(t.maxDate, M, j))
      , d = (M, j, q) => {
        let Y = !1;
        return t.maxDate && q && l(M, j) && (Y = !0),
        t.minDate && !q && s(M, j) && (Y = !0),
        Y
    }
      , p = (M, j) => M ? j instanceof Map ? !!j.get(r(M)) : Array.isArray(j) ? j.some(q => it(o(ie(q)), M)) : j ? j(ie(JSON.parse(JSON.stringify(M)))) : !1 : !0
      , g = (M, j, q, Y) => {
        let L = !1;
        return Y ? t.minDate && t.maxDate ? L = d(M, j, q) : (t.minDate && s(M, j) || t.maxDate && l(M, j)) && (L = !0) : L = !0,
        L
    }
      , v = M => {
        var j, q, Y, L, _;
        return Array.isArray(t.allowedDates) && !((j = t.allowedDates) != null && j.length) ? !0 : (q = t.arrMapValues) != null && q.allowedDates ? !p(M, (Y = t.arrMapValues) == null ? void 0 : Y.allowedDates) : (L = t.allowedDates) != null && L.length ? !((_ = t.allowedDates) != null && _.some(A => it(Zt(A), o(Zt(M))))) : !1
    }
      , f = M => !i(M)
      , b = M => t.noDisabledRange ? !Fu({
        start: M[0],
        end: M[1]
    }).some(j => f(j)) : !0
      , D = (M, j, q=0) => {
        if (Array.isArray(j) && j[q]) {
            const Y = N1(M, j[q])
              , L = fd(j[q], M)
              , _ = L.length === 1 ? 0 : L.filter(P => f(P)).length
              , A = Math.abs(Y) - _;
            if (t.minRange && t.maxRange)
                return A >= +t.minRange && A <= +t.maxRange;
            if (t.minRange)
                return A >= +t.minRange;
            if (t.maxRange)
                return A <= +t.maxRange
        }
        return !0
    }
      , T = M => new Map(M.map(j => [r(j), !0]))
      , w = M => Array.isArray(M) && M.length > 0
      , S = () => {
        const M = {
            disabledDates: null,
            allowedDates: null,
            highlightedDates: null
        };
        return w(t.allowedDates) && (M.allowedDates = T(t.allowedDates)),
        typeof a.value != "function" && w(a.value.dates) && (M.highlightedDates = T(a.value.dates)),
        w(t.disabledDates) && (M.disabledDates = T(t.disabledDates)),
        M
    }
      , B = () => !t.enableTimePicker || t.monthPicker || t.yearPicker || t.ignoreTimeValidation
      , I = M => Array.isArray(M) ? [M[0] ? Si(M[0]) : null, M[1] ? Si(M[1]) : null] : Si(M)
      , R = (M, j, q) => M.find(Y => +Y.hours === ka(j) && Y.minutes === "*" ? !0 : +Y.minutes === Ra(j) && +Y.hours === ka(j)) && q
      , $ = (M, j, q) => {
        const [Y,L] = M
          , [_,A] = j;
        return !R(Y, _, q) && !R(L, A, q) && q
    }
      , G = (M, j) => {
        const q = Array.isArray(j) ? j : [j];
        return Array.isArray(t.disabledTimes) ? Array.isArray(t.disabledTimes[0]) ? $(t.disabledTimes, q, M) : !q.some(Y => R(t.disabledTimes, Y, M)) : M
    }
      , ee = (M, j) => {
        const q = Array.isArray(j) ? [Dn(j[0]), j[1] ? Dn(j[1]) : void 0] : Dn(j)
          , Y = !t.disabledTimes(q);
        return M && Y
    }
      , K = (M, j) => t.disabledTimes ? Array.isArray(t.disabledTimes) ? G(j, M) : ee(j, M) : j;
    return {
        isDisabled: f,
        validateDate: i,
        validateMonthYearInRange: g,
        isDateRangeAllowed: b,
        checkMinMaxRange: D,
        matchDate: p,
        mapDatesArrToMap: S,
        isValidTime: M => {
            let j = !0;
            if (!M || B())
                return !0;
            const q = !t.minDate && !t.maxDate ? I(M) : M;
            return (t.maxTime || t.maxDate) && (j = Pc(t.maxTime, t.maxDate, "max", Ut(q), j)),
            (t.minTime || t.minDate) && (j = Pc(t.minTime, t.minDate, "min", Ut(q), j)),
            K(M, j)
        }
    }
}
  , Zo = () => {
    const t = u( () => (e, r) => e?.includes(r))
      , n = u( () => (e, r) => e.count ? e.solo ? !0 : r === 0 : !0)
      , a = u( () => (e, r) => e.count ? e.solo ? !0 : r === e.count - 1 : !0);
    return {
        hideNavigationButtons: t,
        showLeftIcon: n,
        showRightIcon: a
    }
}
  , pI = (t, n, a) => {
    const e = E(0)
      , r = Za({
        [Mn.timePicker]: !t.enableTimePicker || t.timePicker || t.monthPicker,
        [Mn.calendar]: !1,
        [Mn.header]: !1
    })
      , o = u( () => t.monthPicker)
      , i = g => {
        var v;
        if ((v = t.flow) != null && v.length) {
            if (!g && o.value)
                return p();
            r[g] = !0,
            Object.keys(r).filter(f => !r[f]).length || p()
        }
    }
      , s = () => {
        var g;
        (g = t.flow) != null && g.length && e.value !== -1 && (e.value += 1,
        n("flow-step", e.value),
        p())
    }
      , l = () => {
        e.value = -1
    }
      , d = (g, v, ...f) => {
        t.flow[e.value] === g && a.value && a.value[v](...f)
    }
      , p = () => {
        d(Ma.month, "toggleMonthPicker", !0),
        d(Ma.year, "toggleYearPicker", !0),
        d(Ma.calendar, "toggleTimePicker", !1, !0),
        d(Ma.time, "toggleTimePicker", !0, !0);
        const g = t.flow[e.value];
        (g === Ma.hours || g === Ma.minutes || g === Ma.seconds) && d(g, "toggleTimePicker", !0, !0, g)
    }
    ;
    return {
        childMount: i,
        updateFlowStep: s,
        resetFlow: l,
        flowStep: e
    }
}
  , Ko = {
    multiCalendars: {
        type: [Boolean, Number, String, Object],
        default: void 0
    },
    modelValue: {
        type: [String, Date, Array, Object, Number],
        default: null
    },
    modelType: {
        type: String,
        default: null
    },
    position: {
        type: String,
        default: "center"
    },
    dark: {
        type: Boolean,
        default: !1
    },
    format: {
        type: [String, Function],
        default: () => null
    },
    autoPosition: {
        type: Boolean,
        default: !0
    },
    altPosition: {
        type: Function,
        default: null
    },
    transitions: {
        type: [Boolean, Object],
        default: !0
    },
    formatLocale: {
        type: Object,
        default: null
    },
    utc: {
        type: [Boolean, String],
        default: !1
    },
    ariaLabels: {
        type: Object,
        default: () => ({})
    },
    offset: {
        type: [Number, String],
        default: 10
    },
    hideNavigation: {
        type: Array,
        default: () => []
    },
    timezone: {
        type: String,
        default: null
    },
    emitTimezone: {
        type: String,
        default: null
    },
    vertical: {
        type: Boolean,
        default: !1
    },
    disableMonthYearSelect: {
        type: Boolean,
        default: !1
    },
    disableYearSelect: {
        type: Boolean,
        default: !1
    },
    menuClassName: {
        type: String,
        default: null
    },
    dayClass: {
        type: Function,
        default: null
    },
    yearRange: {
        type: Array,
        default: () => [1900, 2100]
    },
    calendarCellClassName: {
        type: String,
        default: null
    },
    enableTimePicker: {
        type: Boolean,
        default: !0
    },
    autoApply: {
        type: Boolean,
        default: !1
    },
    disabledDates: {
        type: [Array, Function],
        default: () => []
    },
    monthNameFormat: {
        type: String,
        default: "short"
    },
    startDate: {
        type: [Date, String],
        default: null
    },
    startTime: {
        type: [Object, Array],
        default: null
    },
    hideOffsetDates: {
        type: Boolean,
        default: !1
    },
    autoRange: {
        type: [Number, String],
        default: null
    },
    noToday: {
        type: Boolean,
        default: !1
    },
    disabledWeekDays: {
        type: Array,
        default: () => []
    },
    allowedDates: {
        type: Array,
        default: null
    },
    nowButtonLabel: {
        type: String,
        default: "Now"
    },
    markers: {
        type: Array,
        default: () => []
    },
    escClose: {
        type: Boolean,
        default: !0
    },
    spaceConfirm: {
        type: Boolean,
        default: !0
    },
    monthChangeOnArrows: {
        type: Boolean,
        default: !0
    },
    presetDates: {
        type: Array,
        default: () => []
    },
    flow: {
        type: Array,
        default: () => []
    },
    partialFlow: {
        type: Boolean,
        default: !1
    },
    preventMinMaxNavigation: {
        type: Boolean,
        default: !1
    },
    minRange: {
        type: [Number, String],
        default: null
    },
    maxRange: {
        type: [Number, String],
        default: null
    },
    multiDatesLimit: {
        type: [Number, String],
        default: null
    },
    reverseYears: {
        type: Boolean,
        default: !1
    },
    weekPicker: {
        type: Boolean,
        default: !1
    },
    filters: {
        type: Object,
        default: () => ({})
    },
    arrowNavigation: {
        type: Boolean,
        default: !1
    },
    disableTimeRangeValidation: {
        type: Boolean,
        default: !1
    },
    highlight: {
        type: [Array, Function, Object],
        default: null
    },
    highlightWeekDays: {
        type: Array,
        default: null
    },
    highlightDisabledDays: {
        type: Boolean,
        default: !1
    },
    teleport: {
        type: [String, Boolean, Object],
        default: null
    },
    teleportCenter: {
        type: Boolean,
        default: !1
    },
    locale: {
        type: String,
        default: "en-Us"
    },
    weekNumName: {
        type: String,
        default: "W"
    },
    weekStart: {
        type: [Number, String],
        default: 1
    },
    weekNumbers: {
        type: [String, Function, Object],
        default: null
    },
    calendarClassName: {
        type: String,
        default: null
    },
    monthChangeOnScroll: {
        type: [Boolean, String],
        default: !0
    },
    dayNames: {
        type: [Function, Array],
        default: null
    },
    monthPicker: {
        type: Boolean,
        default: !1
    },
    customProps: {
        type: Object,
        default: null
    },
    yearPicker: {
        type: Boolean,
        default: !1
    },
    modelAuto: {
        type: Boolean,
        default: !1
    },
    selectText: {
        type: String,
        default: "Select"
    },
    cancelText: {
        type: String,
        default: "Cancel"
    },
    previewFormat: {
        type: [String, Function],
        default: () => ""
    },
    multiDates: {
        type: Boolean,
        default: !1
    },
    partialRange: {
        type: Boolean,
        default: !0
    },
    ignoreTimeValidation: {
        type: Boolean,
        default: !1
    },
    minDate: {
        type: [Date, String],
        default: null
    },
    maxDate: {
        type: [Date, String],
        default: null
    },
    minTime: {
        type: Object,
        default: null
    },
    maxTime: {
        type: Object,
        default: null
    },
    name: {
        type: String,
        default: null
    },
    placeholder: {
        type: String,
        default: ""
    },
    hideInputIcon: {
        type: Boolean,
        default: !1
    },
    clearable: {
        type: Boolean,
        default: !0
    },
    state: {
        type: Boolean,
        default: null
    },
    required: {
        type: Boolean,
        default: !1
    },
    autocomplete: {
        type: String,
        default: "off"
    },
    inputClassName: {
        type: String,
        default: null
    },
    fixedStart: {
        type: Boolean,
        default: !1
    },
    fixedEnd: {
        type: Boolean,
        default: !1
    },
    timePicker: {
        type: Boolean,
        default: !1
    },
    enableSeconds: {
        type: Boolean,
        default: !1
    },
    is24: {
        type: Boolean,
        default: !0
    },
    noHoursOverlay: {
        type: Boolean,
        default: !1
    },
    noMinutesOverlay: {
        type: Boolean,
        default: !1
    },
    noSecondsOverlay: {
        type: Boolean,
        default: !1
    },
    hoursGridIncrement: {
        type: [String, Number],
        default: 1
    },
    minutesGridIncrement: {
        type: [String, Number],
        default: 5
    },
    secondsGridIncrement: {
        type: [String, Number],
        default: 5
    },
    hoursIncrement: {
        type: [Number, String],
        default: 1
    },
    minutesIncrement: {
        type: [Number, String],
        default: 1
    },
    secondsIncrement: {
        type: [Number, String],
        default: 1
    },
    range: {
        type: Boolean,
        default: !1
    },
    uid: {
        type: String,
        default: null
    },
    disabled: {
        type: Boolean,
        default: !1
    },
    readonly: {
        type: Boolean,
        default: !1
    },
    inline: {
        type: [Boolean, Object],
        default: !1
    },
    textInput: {
        type: [Boolean, Object],
        default: !1
    },
    noDisabledRange: {
        type: Boolean,
        default: !1
    },
    sixWeeks: {
        type: [Boolean, String],
        default: !1
    },
    actionRow: {
        type: Object,
        default: () => ({})
    },
    focusStartDate: {
        type: Boolean,
        default: !1
    },
    disabledTimes: {
        type: [Function, Array],
        default: void 0
    },
    showLastInRange: {
        type: Boolean,
        default: !0
    },
    timePickerInline: {
        type: Boolean,
        default: !1
    },
    calendar: {
        type: Function,
        default: null
    },
    config: {
        type: Object,
        default: void 0
    },
    quarterPicker: {
        type: Boolean,
        default: !1
    },
    yearFirst: {
        type: Boolean,
        default: !1
    }
}
  , Ea = {
    ...Ko,
    shadow: {
        type: Boolean,
        default: !1
    },
    flowStep: {
        type: Number,
        default: 0
    },
    internalModelValue: {
        type: [Date, Array],
        default: null
    },
    arrMapValues: {
        type: Object,
        default: () => ({})
    },
    noOverlayFocus: {
        type: Boolean,
        default: !1
    }
}
  , vI = {
    key: 1,
    class: "dp__input_wrap"
}
  , fI = ["id", "name", "inputmode", "placeholder", "disabled", "readonly", "required", "value", "autocomplete", "aria-label", "aria-disabled", "aria-invalid"]
  , hI = {
    key: 2,
    class: "dp__clear_icon"
}
  , yI = re({
    compatConfig: {
        MODE: 3
    },
    __name: "DatepickerInput",
    props: {
        isMenuOpen: {
            type: Boolean,
            default: !1
        },
        inputValue: {
            type: String,
            default: ""
        },
        ...Ko
    },
    emits: ["clear", "open", "update:input-value", "set-input-date", "close", "select-date", "set-empty-date", "toggle", "focus-prev", "focus", "blur", "real-blur"],
    setup(t, {expose: n, emit: a}) {
        const e = a
          , r = t
          , {defaultedTextInput: o, defaultedAriaLabels: i, defaultedInline: s, defaultedConfig: l, getDefaultPattern: d, getDefaultStartTime: p} = Ot(r)
          , {checkMinMaxRange: g} = Vn(r)
          , v = E()
          , f = E(null)
          , b = E(!1)
          , D = E(!1)
          , T = u( () => ({
            dp__pointer: !r.disabled && !r.readonly && !o.value.enabled,
            dp__disabled: r.disabled,
            dp__input_readonly: !o.value.enabled,
            dp__input: !0,
            dp__input_icon_pad: !r.hideInputIcon,
            dp__input_valid: !!r.state,
            dp__input_invalid: r.state === !1,
            dp__input_focus: b.value || r.isMenuOpen,
            dp__input_reg: !o.value.enabled,
            [r.inputClassName]: !!r.inputClassName
        }))
          , w = () => {
            e("set-input-date", null),
            r.autoApply && (e("set-empty-date"),
            v.value = null)
        }
          , S = L => {
            const _ = p();
            return GC(L, o.value.format ?? d(), _ ?? hd({}, r.enableSeconds), r.inputValue, D.value)
        }
          , B = L => {
            const {rangeSeparator: _} = o.value
              , [A,P] = L.split(`${_}`);
            if (A) {
                const H = S(A.trim())
                  , k = P ? S(P.trim()) : null
                  , h = H && k ? [H, k] : [H];
                g(k, h, 0) && (v.value = H ? h : null)
            }
        }
          , I = () => {
            D.value = !0
        }
          , R = L => {
            if (r.range)
                B(L);
            else if (r.multiDates) {
                const _ = L.split(";");
                v.value = _.map(A => S(A.trim())).filter(A => A)
            } else
                v.value = S(L)
        }
          , $ = L => {
            var _;
            const A = typeof L == "string" ? L : (_ = L.target) == null ? void 0 : _.value;
            A !== "" ? (o.value.openMenu && !r.isMenuOpen && e("open"),
            R(A),
            e("set-input-date", v.value)) : w(),
            D.value = !1,
            e("update:input-value", A)
        }
          , G = L => {
            o.value.enabled ? (R(L.target.value),
            o.value.enterSubmit && rs(v.value) && r.inputValue !== "" ? (e("set-input-date", v.value, !0),
            v.value = null) : o.value.enterSubmit && r.inputValue === "" && (v.value = null,
            e("clear"))) : M(L)
        }
          , ee = L => {
            o.value.enabled && o.value.tabSubmit && R(L.target.value),
            o.value.tabSubmit && rs(v.value) && r.inputValue !== "" ? (e("set-input-date", v.value, !0, !0),
            v.value = null) : o.value.tabSubmit && r.inputValue === "" && (v.value = null,
            e("clear", !0))
        }
          , K = () => {
            var L;
            b.value = !0,
            e("focus"),
            o.value.enabled && o.value.selectOnFocus && ((L = f.value) == null || L.select())
        }
          , M = L => {
            L.preventDefault(),
            cn(L, l.value, !0),
            o.value.enabled && o.value.openMenu && !s.value.input && !r.isMenuOpen ? e("open") : o.value.enabled || e("toggle")
        }
          , j = () => {
            e("real-blur"),
            b.value = !1,
            (!r.isMenuOpen || s.value.enabled && s.value.input) && e("blur"),
            r.autoApply && o.value.enabled && v.value && !r.isMenuOpen && (e("set-input-date", v.value),
            e("select-date"),
            v.value = null)
        }
          , q = L => {
            cn(L, l.value, !0),
            e("clear")
        }
          , Y = L => {
            if (!o.value.enabled) {
                if (L.code === "Tab")
                    return;
                L.preventDefault()
            }
        }
        ;
        return n({
            focusInput: () => {
                var L;
                (L = f.value) == null || L.focus({
                    preventScroll: !0
                })
            }
            ,
            setParsedDate: L => {
                v.value = L
            }
        }),
        (L, _) => {
            var A;
            return m(),
            y("div", {
                onClick: M
            }, [L.$slots.trigger && !L.$slots["dp-input"] && !N(s).enabled ? ne(L.$slots, "trigger", {
                key: 0
            }) : x("", !0), !L.$slots.trigger && (!N(s).enabled || N(s).input) ? (m(),
            y("div", vI, [L.$slots["dp-input"] && !L.$slots.trigger && !N(s).enabled ? ne(L.$slots, "dp-input", {
                key: 0,
                value: t.inputValue,
                isMenuOpen: t.isMenuOpen,
                onInput: $,
                onEnter: G,
                onTab: ee,
                onClear: q,
                onBlur: j,
                onKeypress: Y,
                onPaste: I,
                openMenu: () => L.$emit("open"),
                closeMenu: () => L.$emit("close"),
                toggleMenu: () => L.$emit("toggle")
            }) : x("", !0), L.$slots["dp-input"] ? x("", !0) : (m(),
            y("input", {
                key: 1,
                id: L.uid ? `dp-input-${L.uid}` : void 0,
                ref_key: "inputRef",
                ref: f,
                name: L.name,
                class: J(T.value),
                inputmode: N(o).enabled ? "text" : "none",
                placeholder: L.placeholder,
                disabled: L.disabled,
                readonly: L.readonly,
                required: L.required,
                value: t.inputValue,
                autocomplete: L.autocomplete,
                "aria-label": (A = N(i)) == null ? void 0 : A.input,
                "aria-disabled": L.disabled || void 0,
                "aria-invalid": L.state === !1 ? !0 : void 0,
                onInput: $,
                onKeydown: [He(G, ["enter"]), He(ee, ["tab"]), Y],
                onBlur: j,
                onFocus: K,
                onKeypress: Y,
                onPaste: I
            }, null, 42, fI)), C("div", {
                onClick: _[2] || (_[2] = P => e("toggle"))
            }, [L.$slots["input-icon"] && !L.hideInputIcon ? (m(),
            y("span", {
                key: 0,
                class: "dp__input_icon",
                onClick: _[0] || (_[0] = P => e("toggle"))
            }, [ne(L.$slots, "input-icon")])) : x("", !0), !L.$slots["input-icon"] && !L.hideInputIcon && !L.$slots["dp-input"] ? (m(),
            z(N(vr), {
                key: 1,
                class: "dp__input_icon dp__input_icons",
                onClick: _[1] || (_[1] = P => e("toggle"))
            })) : x("", !0)]), L.$slots["clear-icon"] && t.inputValue && L.clearable && !L.disabled && !L.readonly ? (m(),
            y("span", hI, [ne(L.$slots, "clear-icon", {
                clear: q
            })])) : x("", !0), L.clearable && !L.$slots["clear-icon"] && t.inputValue && !L.disabled && !L.readonly ? (m(),
            z(N(sd), {
                key: 3,
                class: "dp__clear_icon dp__input_icons",
                onClick: _[3] || (_[3] = xe(P => q(P), ["prevent"]))
            })) : x("", !0)])) : x("", !0)])
        }
    }
})
  , bI = ["title"]
  , _I = {
    class: "dp__action_buttons"
}
  , wI = ["disabled"]
  , kI = re({
    compatConfig: {
        MODE: 3
    },
    __name: "ActionRow",
    props: {
        menuMount: {
            type: Boolean,
            default: !1
        },
        calendarWidth: {
            type: Number,
            default: 0
        },
        ...Ea
    },
    emits: ["close-picker", "select-date", "select-now", "invalid-select"],
    setup(t, {emit: n}) {
        const a = n
          , e = t
          , {defaultedActionRow: r, defaultedPreviewFormat: o, defaultedMultiCalendars: i, defaultedTextInput: s, defaultedInline: l, getDefaultPattern: d} = Ot(e)
          , {isValidTime: p} = Vn(e)
          , {buildMatrix: g} = bn()
          , v = E(null)
          , f = E(null);
        Pe( () => {
            e.arrowNavigation && g([Rt(v), Rt(f)], "actionRow")
        }
        );
        const b = u( () => e.range && !e.partialRange && e.internalModelValue ? e.internalModelValue.length === 2 : !0)
          , D = u( () => !T.value || !w.value || !b.value)
          , T = u( () => !e.enableTimePicker || e.ignoreTimeValidation ? !0 : p(e.internalModelValue))
          , w = u( () => e.monthPicker ? e.range && Array.isArray(e.internalModelValue) ? !e.internalModelValue.filter(M => !ee(M)).length : ee(e.internalModelValue) : !0)
          , S = () => {
            const M = o.value;
            return e.timePicker || e.monthPicker,
            M(Ut(e.internalModelValue))
        }
          , B = () => {
            const M = e.internalModelValue;
            return i.value.count > 0 ? `${I(M[0])} - ${I(M[1])}` : [I(M[0]), I(M[1])]
        }
          , I = M => bd(M, o.value, e.formatLocale, s.value.rangeSeparator, e.modelAuto, d())
          , R = u( () => !e.internalModelValue || !e.menuMount ? "" : typeof o.value == "string" ? Array.isArray(e.internalModelValue) ? e.internalModelValue.length === 2 && e.internalModelValue[1] ? B() : e.multiDates ? e.internalModelValue.map(M => `${I(M)}`) : e.modelAuto ? `${I(e.internalModelValue[0])}` : `${I(e.internalModelValue[0])} -` : I(e.internalModelValue) : S())
          , $ = () => e.multiDates ? "; " : " - "
          , G = u( () => Array.isArray(R.value) ? R.value.join($()) : R.value)
          , ee = M => {
            if (!e.monthPicker)
                return !0;
            let j = !0;
            const q = ie(ya(M));
            if (e.minDate && e.maxDate) {
                const Y = ie(ya(e.minDate))
                  , L = ie(ya(e.maxDate));
                return zt(q, Y) && Gt(q, L) || it(q, Y) || it(q, L)
            }
            if (e.minDate) {
                const Y = ie(ya(e.minDate));
                j = zt(q, Y) || it(q, Y)
            }
            if (e.maxDate) {
                const Y = ie(ya(e.maxDate));
                j = Gt(q, Y) || it(q, Y)
            }
            return j
        }
          , K = () => {
            T.value && w.value && b.value ? a("select-date") : a("invalid-select")
        }
        ;
        return (M, j) => (m(),
        y("div", {
            class: "dp__action_row",
            style: ze(t.calendarWidth ? {
                width: `${t.calendarWidth}px`
            } : {})
        }, [M.$slots["action-row"] ? ne(M.$slots, "action-row", pt(Je({
            key: 0
        }, {
            internalModelValue: M.internalModelValue,
            disabled: D.value,
            selectDate: () => M.$emit("select-date"),
            closePicker: () => M.$emit("close-picker")
        }))) : (m(),
        y(ge, {
            key: 1
        }, [N(r).showPreview ? (m(),
        y("div", {
            key: 0,
            class: "dp__selection_preview",
            title: G.value
        }, [M.$slots["action-preview"] ? ne(M.$slots, "action-preview", {
            key: 0,
            value: M.internalModelValue
        }) : x("", !0), M.$slots["action-preview"] ? x("", !0) : (m(),
        y(ge, {
            key: 1
        }, [qe(ae(G.value), 1)], 64))], 8, bI)) : x("", !0), C("div", _I, [M.$slots["action-buttons"] ? ne(M.$slots, "action-buttons", {
            key: 0,
            value: M.internalModelValue
        }) : x("", !0), M.$slots["action-buttons"] ? x("", !0) : (m(),
        y(ge, {
            key: 1
        }, [!N(l).enabled && N(r).showCancel ? (m(),
        y("button", {
            key: 0,
            ref_key: "cancelButtonRef",
            ref: v,
            type: "button",
            class: "dp__action_button dp__action_cancel",
            onClick: j[0] || (j[0] = q => M.$emit("close-picker")),
            onKeydown: [j[1] || (j[1] = He(q => M.$emit("close-picker"), ["enter"])), j[2] || (j[2] = He(q => M.$emit("close-picker"), ["space"]))]
        }, ae(M.cancelText), 545)) : x("", !0), N(r).showNow ? (m(),
        y("button", {
            key: 1,
            ref_key: "cancelButtonRef",
            ref: v,
            type: "button",
            class: "dp__action_button dp__action_cancel",
            onClick: j[3] || (j[3] = q => M.$emit("select-now")),
            onKeydown: [j[4] || (j[4] = He(q => M.$emit("select-now"), ["enter"])), j[5] || (j[5] = He(q => M.$emit("select-now"), ["space"]))]
        }, ae(M.nowButtonLabel), 545)) : x("", !0), N(r).showSelect ? (m(),
        y("button", {
            key: 2,
            ref_key: "selectButtonRef",
            ref: f,
            type: "button",
            class: "dp__action_button dp__action_select",
            disabled: D.value,
            onKeydown: [He(K, ["enter"]), He(K, ["space"])],
            onClick: K
        }, ae(M.selectText), 41, wI)) : x("", !0)], 64))])], 64))], 4))
    }
})
  , SI = ["onKeydown"]
  , TI = {
    class: "dp__selection_grid_header"
}
  , CI = ["aria-selected", "aria-disabled", "onClick", "onKeydown", "onMouseover"]
  , II = ["aria-label"]
  , mo = re({
    __name: "SelectionOverlay",
    props: {
        items: {},
        type: {},
        isLast: {
            type: Boolean
        },
        arrowNavigation: {
            type: Boolean
        },
        skipButtonRef: {
            type: Boolean
        },
        headerRefs: {},
        hideNavigation: {},
        escClose: {
            type: Boolean
        },
        useRelative: {
            type: Boolean
        },
        height: {},
        textInput: {
            type: [Boolean, Object]
        },
        config: {},
        noOverlayFocus: {
            type: Boolean
        },
        focusValue: {}
    },
    emits: ["selected", "toggle", "reset-flow", "hover-value"],
    setup(t, {expose: n, emit: a}) {
        const {setSelectionGrid: e, buildMultiLevelMatrix: r, setMonthPicker: o} = bn()
          , i = a
          , s = t
          , {defaultedAriaLabels: l, defaultedTextInput: d, defaultedConfig: p} = Ot(s)
          , {hideNavigationButtons: g} = Zo()
          , v = E(!1)
          , f = E(null)
          , b = E(null)
          , D = E([])
          , T = E()
          , w = E(null)
          , S = E(0)
          , B = E(null);
        Nd( () => {
            f.value = null
        }
        ),
        Pe( () => {
            Nt().then( () => j()),
            s.noOverlayFocus || R(),
            I(!0)
        }
        ),
        ro( () => I(!1));
        const I = k => {
            var h;
            s.arrowNavigation && ((h = s.headerRefs) != null && h.length ? o(k) : e(k))
        }
          , R = () => {
            var k;
            const h = Rt(b);
            h && (d.value.enabled || (f.value ? (k = f.value) == null || k.focus({
                preventScroll: !0
            }) : h.focus({
                preventScroll: !0
            })),
            v.value = h.clientHeight < h.scrollHeight)
        }
          , $ = u( () => ({
            dp__overlay: !0,
            "dp--overlay-absolute": !s.useRelative,
            "dp--overlay-relative": s.useRelative
        }))
          , G = u( () => s.useRelative ? {
            height: `${s.height}px`,
            width: "260px"
        } : void 0)
          , ee = u( () => ({
            dp__overlay_col: !0
        }))
          , K = u( () => ({
            dp__btn: !0,
            dp__button: !0,
            dp__overlay_action: !0,
            dp__over_action_scroll: v.value,
            dp__button_bottom: s.isLast
        }))
          , M = u( () => {
            var k, h;
            return {
                dp__overlay_container: !0,
                dp__container_flex: ((k = s.items) == null ? void 0 : k.length) <= 6,
                dp__container_block: ((h = s.items) == null ? void 0 : h.length) > 6
            }
        }
        );
        Fe( () => s.items, () => j(), {
            deep: !0
        });
        const j = () => {
            Nt().then( () => {
                const k = Rt(f)
                  , h = Rt(b)
                  , W = Rt(w)
                  , U = Rt(B)
                  , te = W ? W.getBoundingClientRect().height : 0;
                h && (h.getBoundingClientRect().height ? S.value = h.getBoundingClientRect().height - te : S.value = p.value.modeHeight - te),
                k && U && (U.scrollTop = k.offsetTop - U.offsetTop - (S.value / 2 - k.getBoundingClientRect().height) - te)
            }
            )
        }
          , q = k => {
            k.disabled || i("selected", k.value)
        }
          , Y = () => {
            i("toggle"),
            i("reset-flow")
        }
          , L = () => {
            s.escClose && Y()
        }
          , _ = (k, h, W, U) => {
            k && ((h.active || h.value === s.focusValue) && (f.value = k),
            s.arrowNavigation && (Array.isArray(D.value[W]) ? D.value[W][U] = k : D.value[W] = [k],
            A()))
        }
          , A = () => {
            var k, h;
            const W = (k = s.headerRefs) != null && k.length ? [s.headerRefs].concat(D.value) : D.value.concat([s.skipButtonRef ? [] : [w.value]]);
            r(Ut(W), (h = s.headerRefs) != null && h.length ? "monthPicker" : "selectionGrid")
        }
          , P = k => {
            s.arrowNavigation || cn(k, p.value, !0)
        }
          , H = k => {
            T.value = k,
            i("hover-value", k)
        }
        ;
        return n({
            focusGrid: R
        }),
        (k, h) => {
            var W;
            return m(),
            y("div", {
                ref_key: "gridWrapRef",
                ref: b,
                class: J($.value),
                style: ze(G.value),
                role: "dialog",
                tabindex: "0",
                onKeydown: [He(xe(L, ["prevent"]), ["esc"]), h[0] || (h[0] = He(xe(U => P(U), ["prevent"]), ["left"])), h[1] || (h[1] = He(xe(U => P(U), ["prevent"]), ["up"])), h[2] || (h[2] = He(xe(U => P(U), ["prevent"]), ["down"])), h[3] || (h[3] = He(xe(U => P(U), ["prevent"]), ["right"]))]
            }, [C("div", {
                ref_key: "containerRef",
                ref: B,
                class: J(M.value),
                role: "grid",
                style: ze({
                    height: `${S.value}px`
                })
            }, [C("div", TI, [ne(k.$slots, "header")]), k.$slots.overlay ? ne(k.$slots, "overlay", {
                key: 0
            }) : (m(!0),
            y(ge, {
                key: 1
            }, Ce(k.items, (U, te) => (m(),
            y("div", {
                key: te,
                class: J(["dp__overlay_row", {
                    dp__flex_row: k.items.length >= 3
                }]),
                role: "row"
            }, [(m(!0),
            y(ge, null, Ce(U, (Q, V) => (m(),
            y("div", {
                key: Q.value,
                ref_for: !0,
                ref: O => _(O, Q, te, V),
                role: "gridcell",
                class: J(ee.value),
                "aria-selected": Q.active,
                "aria-disabled": Q.disabled || void 0,
                tabindex: "0",
                onClick: O => q(Q),
                onKeydown: [He(xe(O => q(Q), ["prevent"]), ["enter"]), He(xe(O => q(Q), ["prevent"]), ["space"])],
                onMouseover: O => H(Q.value)
            }, [C("div", {
                class: J(Q.className)
            }, [k.$slots.item ? ne(k.$slots, "item", {
                key: 0,
                item: Q
            }) : x("", !0), k.$slots.item ? x("", !0) : (m(),
            y(ge, {
                key: 1
            }, [qe(ae(Q.text), 1)], 64))], 2)], 42, CI))), 128))], 2))), 128))], 6), k.$slots["button-icon"] ? se((m(),
            y("button", {
                key: 0,
                ref_key: "toggleButton",
                ref: w,
                type: "button",
                "aria-label": (W = N(l)) == null ? void 0 : W.toggleOverlay,
                class: J(K.value),
                tabindex: "0",
                onClick: Y,
                onKeydown: [He(Y, ["enter"]), He(Y, ["tab"])]
            }, [ne(k.$slots, "button-icon")], 42, II)), [[da, !N(g)(k.hideNavigation, k.type)]]) : x("", !0)], 46, SI)
        }
    }
})
  , Qo = re({
    __name: "InstanceWrap",
    props: {
        multiCalendars: {},
        stretch: {
            type: Boolean
        }
    },
    setup(t) {
        const n = t
          , a = u( () => n.multiCalendars > 0 ? [...Array(n.multiCalendars).keys()] : [0])
          , e = u( () => ({
            dp__instance_calendar: n.multiCalendars > 0
        }));
        return (r, o) => (m(),
        y("div", {
            class: J({
                dp__menu_inner: !r.stretch,
                "dp--menu--inner-stretched": r.stretch,
                dp__flex_display: r.multiCalendars > 0
            })
        }, [(m(!0),
        y(ge, null, Ce(a.value, (i, s) => (m(),
        y("div", {
            key: i,
            class: J(e.value)
        }, [ne(r.$slots, "default", {
            instance: i,
            index: s
        })], 2))), 128))], 2))
    }
})
  , PI = ["aria-label", "aria-disabled"]
  , xr = re({
    compatConfig: {
        MODE: 3
    },
    __name: "ArrowBtn",
    props: {
        ariaLabel: {},
        disabled: {
            type: Boolean
        }
    },
    emits: ["activate", "set-ref"],
    setup(t, {emit: n}) {
        const a = n
          , e = E(null);
        return Pe( () => a("set-ref", e)),
        (r, o) => (m(),
        y("button", {
            ref_key: "elRef",
            ref: e,
            type: "button",
            class: "dp__btn dp--arrow-btn-nav",
            tabindex: "0",
            "aria-label": r.ariaLabel,
            "aria-disabled": r.disabled || void 0,
            onClick: o[0] || (o[0] = i => r.$emit("activate")),
            onKeydown: [o[1] || (o[1] = He(xe(i => r.$emit("activate"), ["prevent"]), ["enter"])), o[2] || (o[2] = He(xe(i => r.$emit("activate"), ["prevent"]), ["space"]))]
        }, [C("span", {
            class: J(["dp__inner_nav", {
                dp__inner_nav_disabled: r.disabled
            }])
        }, [ne(r.$slots, "default")], 2)], 40, PI))
    }
})
  , EI = {
    class: "dp--year-mode-picker"
}
  , DI = ["aria-label"]
  , kd = re({
    __name: "YearModePicker",
    props: {
        ...Ea,
        showYearPicker: {
            type: Boolean,
            default: !1
        },
        items: {
            type: Array,
            default: () => []
        },
        instance: {
            type: Number,
            default: 0
        },
        year: {
            type: Number,
            default: 0
        },
        isDisabled: {
            type: Function,
            default: () => !1
        }
    },
    emits: ["toggle-year-picker", "year-select", "handle-year"],
    setup(t, {emit: n}) {
        const a = n
          , e = t
          , {showRightIcon: r, showLeftIcon: o} = Zo()
          , {defaultedConfig: i, defaultedMultiCalendars: s, defaultedAriaLabels: l, defaultedTransitions: d} = Ot(e)
          , {showTransition: p, transitionName: g} = co(d)
          , v = (D=!1, T) => {
            a("toggle-year-picker", {
                flow: D,
                show: T
            })
        }
          , f = D => {
            a("year-select", D)
        }
          , b = (D=!1) => {
            a("handle-year", D)
        }
        ;
        return (D, T) => {
            var w, S, B;
            return m(),
            y("div", EI, [N(o)(N(s), t.instance) ? (m(),
            z(xr, {
                key: 0,
                ref: "mpPrevIconRef",
                "aria-label": (w = N(l)) == null ? void 0 : w.prevYear,
                disabled: t.isDisabled(!1),
                onActivate: T[0] || (T[0] = I => b(!1))
            }, {
                default: ye( () => [D.$slots["arrow-left"] ? ne(D.$slots, "arrow-left", {
                    key: 0
                }) : x("", !0), D.$slots["arrow-left"] ? x("", !0) : (m(),
                z(N(xs), {
                    key: 1
                }))]),
                _: 3
            }, 8, ["aria-label", "disabled"])) : x("", !0), C("button", {
                ref: "mpYearButtonRef",
                class: "dp__btn dp--year-select",
                type: "button",
                "aria-label": (S = N(l)) == null ? void 0 : S.openYearsOverlay,
                onClick: T[1] || (T[1] = () => v(!1)),
                onKeydown: T[2] || (T[2] = He( () => v(!1), ["enter"]))
            }, [D.$slots.year ? ne(D.$slots, "year", {
                key: 0,
                year: t.year
            }) : x("", !0), D.$slots.year ? x("", !0) : (m(),
            y(ge, {
                key: 1
            }, [qe(ae(t.year), 1)], 64))], 40, DI), N(r)(N(s), t.instance) ? (m(),
            z(xr, {
                key: 1,
                ref: "mpNextIconRef",
                "aria-label": (B = N(l)) == null ? void 0 : B.nextYear,
                disabled: t.isDisabled(!0),
                onActivate: T[3] || (T[3] = I => b(!0))
            }, {
                default: ye( () => [D.$slots["arrow-right"] ? ne(D.$slots, "arrow-right", {
                    key: 0
                }) : x("", !0), D.$slots["arrow-right"] ? x("", !0) : (m(),
                z(N(Bs), {
                    key: 1
                }))]),
                _: 3
            }, 8, ["aria-label", "disabled"])) : x("", !0), Ae(ra, {
                name: N(g)(t.showYearPicker),
                css: N(p)
            }, {
                default: ye( () => [t.showYearPicker ? (m(),
                z(mo, {
                    key: 0,
                    items: t.items,
                    "text-input": D.textInput,
                    "esc-close": D.escClose,
                    config: D.config,
                    "is-last": D.autoApply && !N(i).keepActionRow,
                    "hide-navigation": D.hideNavigation,
                    type: "year",
                    onToggle: v,
                    onSelected: T[4] || (T[4] = I => f(I))
                }, ea({
                    "button-icon": ye( () => [D.$slots["calendar-icon"] ? ne(D.$slots, "calendar-icon", {
                        key: 0
                    }) : x("", !0), D.$slots["calendar-icon"] ? x("", !0) : (m(),
                    z(N(vr), {
                        key: 1
                    }))]),
                    _: 2
                }, [D.$slots["year-overlay-value"] ? {
                    name: "item",
                    fn: ye( ({item: I}) => [ne(D.$slots, "year-overlay-value", {
                        text: I.text,
                        value: I.value
                    })]),
                    key: "0"
                } : void 0]), 1032, ["items", "text-input", "esc-close", "config", "is-last", "hide-navigation"])) : x("", !0)]),
                _: 3
            }, 8, ["name", "css"])])
        }
    }
})
  , Gs = (t, n, a) => {
    if (n.value && Array.isArray(n.value))
        if (n.value.some(e => it(t, e))) {
            const e = n.value.filter(r => !it(r, t));
            n.value = e.length ? e : null
        } else
            (a && +a > n.value.length || !a) && n.value.push(t);
    else
        n.value = [t]
}
  , Ys = (t, n, a) => {
    let e = t.value ? t.value.slice() : [];
    return e.length === 2 && e[1] !== null && (e = []),
    e.length ? Gt(n, e[0]) ? (e.unshift(n),
    a("range-start", e[0]),
    a("range-start", e[1])) : (e[1] = n,
    a("range-end", n)) : (e = [n],
    a("range-start", n)),
    t.value = e,
    e
}
  , Xo = (t, n, a, e) => {
    t[0] && t[1] && a && n("auto-apply"),
    t[0] && !t[1] && e && a && n("auto-apply")
}
  , Sd = t => {
    Array.isArray(t.value) && t.value.length <= 2 && t.range ? t.modelValue.value = t.value.map(n => Sa(ie(n), t.timezone)) : Array.isArray(t.value) || (t.modelValue.value = Sa(ie(t.value), t.timezone))
}
  , Td = ({multiCalendars: t, highlight: n, calendars: a, modelValue: e, props: r, year: o, month: i, emit: s}) => {
    const l = u( () => Fs(r.yearRange, r.reverseYears))
      , d = E([!1])
      , p = u( () => (I, R) => {
        const $ = bt(ya(new Date), {
            month: i.value(I),
            year: o.value(I)
        });
        return yd($, r.maxDate, r.minDate, r.preventMinMaxNavigation, R)
    }
    )
      , g = () => {
        for (let I = 0; I < t.value.count; I++)
            if (I === 0)
                a.value[I] = a.value[0];
            else {
                const R = bt(ie(), a.value[I - 1]);
                a.value[I] = {
                    month: et(R),
                    year: $e(Cs(R, 1))
                }
            }
    }
      , v = I => {
        if (!I)
            return g();
        const R = bt(ie(), a.value[I]);
        return a.value[0].year = $e(id(R, t.value.count - 1)),
        g()
    }
      , f = I => r.focusStartDate ? I[0] : I[1] ? I[1] : I[0]
      , b = () => {
        if (e.value) {
            const I = Array.isArray(e.value) ? f(e.value) : e.value;
            a.value[0] = {
                month: et(I),
                year: $e(I)
            }
        }
    }
    ;
    Pe( () => {
        b(),
        t.value.count && g()
    }
    );
    const D = (I, R) => {
        a.value[R].year = I,
        t.value.count && !t.value.solo && v(R)
    }
      , T = u( () => I => dr(l.value, R => {
        const $ = o.value(I) === R.value
          , G = no(R.value, mr(r.minDate), mr(r.maxDate))
          , ee = js(n.value, R.value);
        return {
            active: $,
            disabled: G,
            highlighted: ee
        }
    }
    ))
      , w = (I, R) => {
        D(I, R),
        B(R)
    }
      , S = (I, R=!1) => {
        if (!p.value(I, R)) {
            const $ = R ? o.value(I) + 1 : o.value(I) - 1;
            D($, I)
        }
    }
      , B = (I, R=!1, $) => {
        R || s("reset-flow"),
        $ !== void 0 ? d.value[I] = $ : d.value[I] = !d.value[I],
        d.value || s("overlay-closed")
    }
    ;
    return {
        isDisabled: p,
        groupedYears: T,
        showYearPicker: d,
        selectYear: D,
        toggleYearPicker: B,
        handleYearSelect: w,
        handleYear: S
    }
}
  , MI = (t, n) => {
    const {defaultedMultiCalendars: a, defaultedAriaLabels: e, defaultedTransitions: r, defaultedConfig: o, defaultedHighlight: i} = Ot(t)
      , {modelValue: s, year: l, month: d, calendars: p} = uo(t, n)
      , g = u( () => dd(t.formatLocale, t.locale, t.monthNameFormat))
      , v = E(null)
      , {selectYear: f, groupedYears: b, showYearPicker: D, toggleYearPicker: T, handleYearSelect: w, handleYear: S, isDisabled: B} = Td({
        modelValue: s,
        multiCalendars: a,
        highlight: i,
        calendars: p,
        year: l,
        month: d,
        props: t,
        emit: n
    });
    Pe( () => {
        t.startDate && (s.value && t.focusStartDate || !s.value) && f($e(ie(t.startDate)), 0)
    }
    );
    const I = P => P ? {
        month: et(P),
        year: $e(P)
    } : {
        month: null,
        year: null
    }
      , R = () => s.value ? Array.isArray(s.value) ? s.value.map(P => I(P)) : I(s.value) : I()
      , $ = (P, H) => {
        const k = p.value[P]
          , h = R();
        return Array.isArray(h) ? h.some(W => W.year === k?.year && W.month === H) : k?.year === h.year && H === h.month
    }
      , G = (P, H, k) => {
        var h, W;
        const U = R();
        return Array.isArray(U) ? l.value(H) === ((h = U[k]) == null ? void 0 : h.year) && P === ((W = U[k]) == null ? void 0 : W.month) : !1
    }
      , ee = (P, H) => {
        if (t.range) {
            const k = R();
            if (Array.isArray(s.value) && Array.isArray(k)) {
                const h = G(P, H, 0) || G(P, H, 1)
                  , W = za(ya(ie()), P, l.value(H));
                return zo(s.value, v.value, W) && !h
            }
            return !1
        }
        return !1
    }
      , K = u( () => P => dr(g.value, H => {
        const k = $(P, H.value)
          , h = no(H.value, gd(l.value(P), t.minDate), pd(l.value(P), t.maxDate)) || KC(t.disabledDates, l.value(P)).includes(H.value)
          , W = ee(H.value, P)
          , U = _d(i.value, H.value, l.value(P));
        return {
            active: k,
            disabled: h,
            isBetween: W,
            highlighted: U
        }
    }
    ))
      , M = (P, H) => za(ya(ie()), P, l.value(H))
      , j = (P, H) => {
        const k = s.value ? s.value : ya(new Date);
        s.value = za(k, P, l.value(H)),
        n("auto-apply")
    }
      , q = (P, H) => {
        const k = Ys(s, M(P, H), n);
        Xo(k, n, t.autoApply, t.modelAuto)
    }
      , Y = (P, H) => {
        Gs(M(P, H), s, t.multiDatesLimit),
        n("auto-apply", !0)
    }
      , L = (P, H) => (p.value[H].month = P,
    A(H, p.value[H].year, P),
    t.multiDates ? Y(P, H) : t.range ? q(P, H) : j(P, H))
      , _ = (P, H) => {
        f(P, H),
        A(H, P, null)
    }
      , A = (P, H, k) => {
        let h = k;
        if (!h && h !== 0) {
            const W = R();
            h = Array.isArray(W) ? W[P].month : W.month
        }
        n("update-month-year", {
            instance: P,
            year: H,
            month: h
        })
    }
    ;
    return {
        groupedMonths: K,
        groupedYears: b,
        year: l,
        isDisabled: B,
        defaultedMultiCalendars: a,
        defaultedAriaLabels: e,
        defaultedTransitions: r,
        defaultedConfig: o,
        showYearPicker: D,
        modelValue: s,
        presetDate: (P, H) => {
            Sd({
                value: P,
                modelValue: s,
                range: t.range,
                timezone: H ? void 0 : t.timezone
            }),
            n("auto-apply")
        }
        ,
        setHoverDate: (P, H) => {
            v.value = M(P, H)
        }
        ,
        selectMonth: L,
        selectYear: _,
        toggleYearPicker: T,
        handleYearSelect: w,
        handleYear: S,
        getModelMonthYear: R
    }
}
  , AI = re({
    compatConfig: {
        MODE: 3
    },
    __name: "MonthPicker",
    props: {
        ...Ea
    },
    emits: ["update:internal-model-value", "overlay-closed", "reset-flow", "range-start", "range-end", "auto-apply", "update-month-year", "mount"],
    setup(t, {expose: n, emit: a}) {
        const e = a
          , r = Nn()
          , o = oa(r, "yearMode")
          , i = t;
        Pe( () => {
            i.shadow || e("mount", null)
        }
        );
        const {groupedMonths: s, groupedYears: l, year: d, isDisabled: p, defaultedMultiCalendars: g, defaultedConfig: v, showYearPicker: f, modelValue: b, presetDate: D, setHoverDate: T, selectMonth: w, selectYear: S, toggleYearPicker: B, handleYearSelect: I, handleYear: R, getModelMonthYear: $} = MI(i, e);
        return n({
            getSidebarProps: () => ({
                modelValue: b,
                year: d,
                getModelMonthYear: $,
                selectMonth: w,
                selectYear: S,
                handleYear: R
            }),
            presetDate: D,
            toggleYearPicker: G => B(0, G)
        }),
        (G, ee) => (m(),
        z(Qo, {
            "multi-calendars": N(g).count,
            stretch: ""
        }, {
            default: ye( ({instance: K}) => [G.$slots["month-year"] ? ne(G.$slots, "month-year", pt(Je({
                key: 0
            }, {
                year: N(d),
                months: N(s)(K),
                years: N(l)(K),
                selectMonth: N(w),
                selectYear: N(S),
                instance: K
            }))) : (m(),
            z(mo, {
                key: 1,
                items: N(s)(K),
                "arrow-navigation": G.arrowNavigation,
                "is-last": G.autoApply && !N(v).keepActionRow,
                "esc-close": G.escClose,
                height: N(v).modeHeight,
                config: G.config,
                "no-overlay-focus": !!(G.noOverlayFocus || G.textInput),
                "use-relative": "",
                type: "month",
                onSelected: M => N(w)(M, K),
                onHoverValue: M => N(T)(M, K)
            }, {
                header: ye( () => [Ae(kd, Je(G.$props, {
                    items: N(l)(K),
                    instance: K,
                    "show-year-picker": N(f)[K],
                    year: N(d)(K),
                    "is-disabled": M => N(p)(K, M),
                    onHandleYear: M => N(R)(K, M),
                    onYearSelect: M => N(I)(M, K),
                    onToggleYearPicker: M => N(B)(K, M?.flow, M?.show)
                }), ea({
                    _: 2
                }, [Ce(N(o), (M, j) => ({
                    name: M,
                    fn: ye(q => [ne(G.$slots, M, pt(qt(q)))])
                }))]), 1040, ["items", "instance", "show-year-picker", "year", "is-disabled", "onHandleYear", "onYearSelect", "onToggleYearPicker"])]),
                _: 2
            }, 1032, ["items", "arrow-navigation", "is-last", "esc-close", "height", "config", "no-overlay-focus", "onSelected", "onHoverValue"]))]),
            _: 3
        }, 8, ["multi-calendars"]))
    }
})
  , OI = (t, n) => {
    const {modelValue: a} = uo(t, n)
      , e = E(null)
      , {defaultedHighlight: r, defaultedFilters: o} = Ot(t)
      , i = E();
    Pe( () => {
        t.startDate && (a.value && t.focusStartDate || !a.value) && (i.value = $e(ie(t.startDate)))
    }
    );
    const s = g => Array.isArray(a.value) ? a.value.some(v => $e(v) === g) : a.value ? $e(a.value) === g : !1
      , l = g => t.range && Array.isArray(a.value) ? zo(a.value, e.value, p(g)) : !1
      , d = u( () => dr(Fs(t.yearRange, t.reverseYears), g => {
        const v = s(g.value)
          , f = no(g.value, mr(t.minDate), mr(t.maxDate)) || o.value.years.includes(g.value)
          , b = l(g.value) && !v
          , D = js(r.value, g.value);
        return {
            active: v,
            disabled: f,
            isBetween: b,
            highlighted: D
        }
    }
    ))
      , p = g => Ba(ya(new Date), g);
    return {
        groupedYears: d,
        modelValue: a,
        focusYear: i,
        setHoverValue: g => {
            e.value = Ba(ya(new Date), g)
        }
        ,
        selectYear: g => {
            var v;
            if (t.multiDates)
                return a.value ? Array.isArray(a.value) && (((v = a.value) == null ? void 0 : v.map(f => $e(f))).includes(g) ? a.value = a.value.filter(f => $e(f) !== g) : a.value.push(Ba(Zt(ie()), g))) : a.value = [Ba(Zt(ie()), g)],
                n("auto-apply", !0);
            if (t.range) {
                const f = Ys(a, p(g), n);
                return Xo(f, n, t.autoApply, t.modelAuto)
            }
            a.value = p(g),
            n("auto-apply")
        }
    }
}
  , xI = re({
    compatConfig: {
        MODE: 3
    },
    __name: "YearPicker",
    props: {
        ...Ea
    },
    emits: ["update:internal-model-value", "reset-flow", "range-start", "range-end", "auto-apply"],
    setup(t, {expose: n, emit: a}) {
        const e = a
          , r = t
          , {groupedYears: o, modelValue: i, focusYear: s, selectYear: l, setHoverValue: d} = OI(r, e)
          , {defaultedConfig: p} = Ot(r);
        return n({
            getSidebarProps: () => ({
                modelValue: i,
                selectYear: l
            })
        }),
        (g, v) => (m(),
        y("div", null, [g.$slots["month-year"] ? ne(g.$slots, "month-year", pt(Je({
            key: 0
        }, {
            years: N(o),
            selectYear: N(l)
        }))) : (m(),
        z(mo, {
            key: 1,
            items: N(o),
            "is-last": g.autoApply && !N(p).keepActionRow,
            height: N(p).modeHeight,
            config: g.config,
            "no-overlay-focus": !!(g.noOverlayFocus || g.textInput),
            "focus-value": N(s),
            type: "year",
            "use-relative": "",
            onSelected: N(l),
            onHoverValue: N(d)
        }, ea({
            _: 2
        }, [g.$slots["year-overlay-value"] ? {
            name: "item",
            fn: ye( ({item: f}) => [ne(g.$slots, "year-overlay-value", {
                text: f.text,
                value: f.value
            })]),
            key: "0"
        } : void 0]), 1032, ["items", "is-last", "height", "config", "no-overlay-focus", "focus-value", "onSelected", "onHoverValue"]))]))
    }
})
  , BI = {
    key: 0,
    class: "dp__time_input"
}
  , LI = ["aria-label", "onKeydown", "onClick"]
  , RI = C("span", {
    class: "dp__tp_inline_btn_bar dp__tp_btn_in_l"
}, null, -1)
  , NI = C("span", {
    class: "dp__tp_inline_btn_bar dp__tp_btn_in_r"
}, null, -1)
  , HI = ["aria-label", "disabled", "onKeydown", "onClick"]
  , VI = ["aria-label", "onKeydown", "onClick"]
  , UI = C("span", {
    class: "dp__tp_inline_btn_bar dp__tp_btn_in_l"
}, null, -1)
  , FI = C("span", {
    class: "dp__tp_inline_btn_bar dp__tp_btn_in_r"
}, null, -1)
  , jI = {
    key: 0
}
  , GI = ["aria-label", "onKeydown"]
  , YI = re({
    compatConfig: {
        MODE: 3
    },
    __name: "TimeInput",
    props: {
        hours: {
            type: Number,
            default: 0
        },
        minutes: {
            type: Number,
            default: 0
        },
        seconds: {
            type: Number,
            default: 0
        },
        closeTimePickerBtn: {
            type: Object,
            default: null
        },
        order: {
            type: Number,
            default: 0
        },
        disabledTimesConfig: {
            type: Function,
            default: null
        },
        validateTime: {
            type: Function,
            default: () => !1
        },
        ...Ea
    },
    emits: ["set-hours", "set-minutes", "update:hours", "update:minutes", "update:seconds", "reset-flow", "mounted", "overlay-closed", "am-pm-change"],
    setup(t, {expose: n, emit: a}) {
        const e = a
          , r = t
          , {setTimePickerElements: o, setTimePickerBackRef: i} = bn()
          , {defaultedAriaLabels: s, defaultedTransitions: l, defaultedFilters: d, defaultedConfig: p} = Ot(r)
          , {transitionName: g, showTransition: v} = co(l)
          , f = Za({
            hours: !1,
            minutes: !1,
            seconds: !1
        })
          , b = E("AM")
          , D = E(null)
          , T = E([]);
        Pe( () => {
            e("mounted")
        }
        );
        const w = O => bt(new Date, {
            hours: O.hours,
            minutes: O.minutes,
            seconds: r.enableSeconds ? O.seconds : 0,
            milliseconds: 0
        })
          , S = u( () => O => L(O, r[O]) || I(O, r[O]))
          , B = u( () => ({
            hours: r.hours,
            minutes: r.minutes,
            seconds: r.seconds
        }))
          , I = (O, pe) => r.range && !r.disableTimeRangeValidation ? !r.validateTime(O, pe) : !1
          , R = (O, pe) => {
            if (r.range && !r.disableTimeRangeValidation) {
                const fe = pe ? +r[`${O}Increment`] : -+r[`${O}Increment`]
                  , ue = r[O] + fe;
                return !r.validateTime(O, ue)
            }
            return !1
        }
          , $ = u( () => O => !A(+r[O] + +r[`${O}Increment`], O) || R(O, !0))
          , G = u( () => O => !A(+r[O] - +r[`${O}Increment`], O) || R(O, !1))
          , ee = (O, pe) => Vu(bt(ie(), O), pe)
          , K = (O, pe) => sC(bt(ie(), O), pe)
          , M = u( () => ({
            dp__time_col: !0,
            dp__time_col_block: !r.timePickerInline,
            dp__time_col_reg_block: !r.enableSeconds && r.is24 && !r.timePickerInline,
            dp__time_col_reg_inline: !r.enableSeconds && r.is24 && r.timePickerInline,
            dp__time_col_reg_with_button: !r.enableSeconds && !r.is24,
            dp__time_col_sec: r.enableSeconds && r.is24,
            dp__time_col_sec_with_button: r.enableSeconds && !r.is24
        }))
          , j = u( () => {
            const O = [{
                type: "hours"
            }, {
                type: "",
                separator: !0
            }, {
                type: "minutes"
            }];
            return r.enableSeconds ? O.concat([{
                type: "",
                separator: !0
            }, {
                type: "seconds"
            }]) : O
        }
        )
          , q = u( () => j.value.filter(O => !O.separator))
          , Y = u( () => O => {
            if (O === "hours") {
                const pe = W(+r.hours);
                return {
                    text: pe < 10 ? `0${pe}` : `${pe}`,
                    value: pe
                }
            }
            return {
                text: r[O] < 10 ? `0${r[O]}` : `${r[O]}`,
                value: r[O]
            }
        }
        )
          , L = (O, pe) => {
            var fe;
            if (!r.disabledTimesConfig)
                return !1;
            const ue = r.disabledTimesConfig(r.order, O === "hours" ? pe : void 0);
            return ue[O] ? !!((fe = ue[O]) != null && fe.includes(pe)) : !0
        }
          , _ = O => {
            const pe = r.is24 ? 24 : 12
              , fe = O === "hours" ? pe : 60
              , ue = +r[`${O}GridIncrement`]
              , Oe = O === "hours" && !r.is24 ? ue : 0
              , he = [];
            for (let X = Oe; X < fe; X += ue)
                he.push({
                    value: X,
                    text: X < 10 ? `0${X}` : `${X}`
                });
            return O === "hours" && !r.is24 && he.push({
                value: 0,
                text: "12"
            }),
            dr(he, X => ({
                active: !1,
                disabled: d.value.times[O].includes(X.value) || !A(X.value, O) || L(O, X.value) || I(O, X.value)
            }))
        }
          , A = (O, pe) => {
            const fe = r.minTime ? w(_i(r.minTime)) : null
              , ue = r.maxTime ? w(_i(r.maxTime)) : null
              , Oe = w(_i(B.value, pe, O));
            return fe && ue ? (ao(Oe, ue) || Qn(Oe, ue)) && (to(Oe, fe) || Qn(Oe, fe)) : fe ? to(Oe, fe) || Qn(Oe, fe) : ue ? ao(Oe, ue) || Qn(Oe, ue) : !0
        }
          , P = O => r[`no${O[0].toUpperCase() + O.slice(1)}Overlay`]
          , H = O => {
            P(O) || (f[O] = !f[O],
            f[O] || e("overlay-closed"))
        }
          , k = O => O === "hours" ? ka : O === "minutes" ? Ra : cr
          , h = (O, pe=!0) => {
            const fe = pe ? ee : K
              , ue = pe ? +r[`${O}Increment`] : -+r[`${O}Increment`];
            A(+r[O] + ue, O) && e(`update:${O}`, k(O)(fe({
                [O]: +r[O]
            }, {
                [O]: +r[`${O}Increment`]
            })))
        }
          , W = O => r.is24 ? O : (O >= 12 ? b.value = "PM" : b.value = "AM",
        RC(O))
          , U = () => {
            b.value === "PM" ? (b.value = "AM",
            e("update:hours", r.hours - 12)) : (b.value = "PM",
            e("update:hours", r.hours + 12)),
            e("am-pm-change", b.value)
        }
          , te = O => {
            f[O] = !0
        }
          , Q = (O, pe, fe) => {
            if (O && r.arrowNavigation) {
                Array.isArray(T.value[pe]) ? T.value[pe][fe] = O : T.value[pe] = [O];
                const ue = T.value.reduce( (Oe, he) => he.map( (X, ce) => [...Oe[ce] || [], he[ce]]), []);
                i(r.closeTimePickerBtn),
                D.value && (ue[1] = ue[1].concat(D.value)),
                o(ue, r.order)
            }
        }
          , V = (O, pe) => (H(O),
        O === "hours" && !r.is24 ? e(`update:${O}`, b.value === "PM" ? pe + 12 : pe) : e(`update:${O}`, pe));
        return n({
            openChildCmp: te
        }),
        (O, pe) => {
            var fe;
            return O.disabled ? x("", !0) : (m(),
            y("div", BI, [(m(!0),
            y(ge, null, Ce(j.value, (ue, Oe) => {
                var he, X, ce;
                return m(),
                y("div", {
                    key: Oe,
                    class: J(M.value)
                }, [ue.separator ? (m(),
                y(ge, {
                    key: 0
                }, [qe(" : ")], 64)) : (m(),
                y(ge, {
                    key: 1
                }, [C("button", {
                    ref_for: !0,
                    ref: Me => Q(Me, Oe, 0),
                    type: "button",
                    class: J({
                        dp__btn: !0,
                        dp__inc_dec_button: !O.timePickerInline,
                        dp__inc_dec_button_inline: O.timePickerInline,
                        dp__tp_inline_btn_top: O.timePickerInline,
                        dp__inc_dec_button_disabled: $.value(ue.type)
                    }),
                    "aria-label": (he = N(s)) == null ? void 0 : he.incrementValue(ue.type),
                    tabindex: "0",
                    onKeydown: [He(xe(Me => h(ue.type), ["prevent"]), ["enter"]), He(xe(Me => h(ue.type), ["prevent"]), ["space"])],
                    onClick: Me => h(ue.type)
                }, [r.timePickerInline ? (m(),
                y(ge, {
                    key: 1
                }, [RI, NI], 64)) : (m(),
                y(ge, {
                    key: 0
                }, [O.$slots["arrow-up"] ? ne(O.$slots, "arrow-up", {
                    key: 0
                }) : x("", !0), O.$slots["arrow-up"] ? x("", !0) : (m(),
                z(N(Rs), {
                    key: 1
                }))], 64))], 42, LI), C("button", {
                    ref_for: !0,
                    ref: Me => Q(Me, Oe, 1),
                    type: "button",
                    "aria-label": (X = N(s)) == null ? void 0 : X.openTpOverlay(ue.type),
                    class: J({
                        dp__time_display: !0,
                        dp__time_display_block: !O.timePickerInline,
                        dp__time_display_inline: O.timePickerInline,
                        "dp--time-invalid": S.value(ue.type),
                        "dp--time-overlay-btn": !S.value(ue.type)
                    }),
                    disabled: P(ue.type),
                    tabindex: "0",
                    onKeydown: [He(xe(Me => H(ue.type), ["prevent"]), ["enter"]), He(xe(Me => H(ue.type), ["prevent"]), ["space"])],
                    onClick: Me => H(ue.type)
                }, [O.$slots[ue.type] ? ne(O.$slots, ue.type, {
                    key: 0,
                    text: Y.value(ue.type).text,
                    value: Y.value(ue.type).value
                }) : x("", !0), O.$slots[ue.type] ? x("", !0) : (m(),
                y(ge, {
                    key: 1
                }, [qe(ae(Y.value(ue.type).text), 1)], 64))], 42, HI), C("button", {
                    ref_for: !0,
                    ref: Me => Q(Me, Oe, 2),
                    type: "button",
                    class: J({
                        dp__btn: !0,
                        dp__inc_dec_button: !O.timePickerInline,
                        dp__inc_dec_button_inline: O.timePickerInline,
                        dp__tp_inline_btn_bottom: O.timePickerInline,
                        dp__inc_dec_button_disabled: G.value(ue.type)
                    }),
                    "aria-label": (ce = N(s)) == null ? void 0 : ce.decrementValue(ue.type),
                    tabindex: "0",
                    onKeydown: [He(xe(Me => h(ue.type, !1), ["prevent"]), ["enter"]), He(xe(Me => h(ue.type, !1), ["prevent"]), ["space"])],
                    onClick: Me => h(ue.type, !1)
                }, [r.timePickerInline ? (m(),
                y(ge, {
                    key: 1
                }, [UI, FI], 64)) : (m(),
                y(ge, {
                    key: 0
                }, [O.$slots["arrow-down"] ? ne(O.$slots, "arrow-down", {
                    key: 0
                }) : x("", !0), O.$slots["arrow-down"] ? x("", !0) : (m(),
                z(N(Ns), {
                    key: 1
                }))], 64))], 42, VI)], 64))], 2)
            }
            ), 128)), O.is24 ? x("", !0) : (m(),
            y("div", jI, [O.$slots["am-pm-button"] ? ne(O.$slots, "am-pm-button", {
                key: 0,
                toggle: U,
                value: b.value
            }) : x("", !0), O.$slots["am-pm-button"] ? x("", !0) : (m(),
            y("button", {
                key: 1,
                ref_key: "amPmButton",
                ref: D,
                type: "button",
                class: "dp__pm_am_button",
                role: "button",
                "aria-label": (fe = N(s)) == null ? void 0 : fe.amPmButton,
                tabindex: "0",
                onClick: U,
                onKeydown: [He(xe(U, ["prevent"]), ["enter"]), He(xe(U, ["prevent"]), ["space"])]
            }, ae(b.value), 41, GI))])), (m(!0),
            y(ge, null, Ce(q.value, (ue, Oe) => (m(),
            z(ra, {
                key: Oe,
                name: N(g)(f[ue.type]),
                css: N(v)
            }, {
                default: ye( () => [f[ue.type] ? (m(),
                z(mo, {
                    key: 0,
                    items: _(ue.type),
                    "is-last": O.autoApply && !N(p).keepActionRow,
                    "esc-close": O.escClose,
                    type: ue.type,
                    "text-input": O.textInput,
                    config: O.config,
                    "arrow-navigation": O.arrowNavigation,
                    onSelected: he => V(ue.type, he),
                    onToggle: he => H(ue.type),
                    onResetFlow: pe[0] || (pe[0] = he => O.$emit("reset-flow"))
                }, ea({
                    "button-icon": ye( () => [O.$slots["clock-icon"] ? ne(O.$slots, "clock-icon", {
                        key: 0
                    }) : x("", !0), O.$slots["clock-icon"] ? x("", !0) : (m(),
                    z(dn(O.timePickerInline ? N(vr) : N(Ls)), {
                        key: 1
                    }))]),
                    _: 2
                }, [O.$slots[`${ue.type}-overlay-value`] ? {
                    name: "item",
                    fn: ye( ({item: he}) => [ne(O.$slots, `${ue.type}-overlay-value`, {
                        text: he.text,
                        value: he.value
                    })]),
                    key: "0"
                } : void 0]), 1032, ["items", "is-last", "esc-close", "type", "text-input", "config", "arrow-navigation", "onSelected", "onToggle"])) : x("", !0)]),
                _: 2
            }, 1032, ["name", "css"]))), 128))]))
        }
    }
})
  , WI = {
    class: "dp--tp-wrap"
}
  , $I = ["aria-label", "tabindex"]
  , qI = ["tabindex"]
  , zI = ["aria-label"]
  , Cd = re({
    compatConfig: {
        MODE: 3
    },
    __name: "TimePicker",
    props: {
        hours: {
            type: [Number, Array],
            default: 0
        },
        minutes: {
            type: [Number, Array],
            default: 0
        },
        seconds: {
            type: [Number, Array],
            default: 0
        },
        disabledTimesConfig: {
            type: Function,
            default: null
        },
        validateTime: {
            type: Function,
            default: () => !1
        },
        ...Ea
    },
    emits: ["update:hours", "update:minutes", "update:seconds", "mount", "reset-flow", "overlay-opened", "overlay-closed", "am-pm-change"],
    setup(t, {expose: n, emit: a}) {
        const e = a
          , r = t
          , {buildMatrix: o, setTimePicker: i} = bn()
          , s = Nn()
          , {defaultedTransitions: l, defaultedAriaLabels: d, defaultedTextInput: p, defaultedConfig: g} = Ot(r)
          , {transitionName: v, showTransition: f} = co(l)
          , {hideNavigationButtons: b} = Zo()
          , D = E(null)
          , T = E(null)
          , w = E([])
          , S = E(null);
        Pe( () => {
            e("mount"),
            !r.timePicker && r.arrowNavigation ? o([Rt(D.value)], "time") : i(!0, r.timePicker)
        }
        );
        const B = u( () => r.range && r.modelAuto ? md(r.internalModelValue) : !0)
          , I = E(!1)
          , R = _ => ({
            hours: Array.isArray(r.hours) ? r.hours[_] : r.hours,
            minutes: Array.isArray(r.minutes) ? r.minutes[_] : r.minutes,
            seconds: Array.isArray(r.seconds) ? r.seconds[_] : r.seconds
        })
          , $ = u( () => {
            const _ = [];
            if (r.range)
                for (let A = 0; A < 2; A++)
                    _.push(R(A));
            else
                _.push(R(0));
            return _
        }
        )
          , G = (_, A=!1, P="") => {
            A || e("reset-flow"),
            I.value = _,
            e(_ ? "overlay-opened" : "overlay-closed"),
            r.arrowNavigation && i(_),
            Nt( () => {
                P !== "" && w.value[0] && w.value[0].openChildCmp(P)
            }
            )
        }
          , ee = u( () => ({
            dp__btn: !0,
            dp__button: !0,
            dp__button_bottom: r.autoApply && !g.value.keepActionRow
        }))
          , K = oa(s, "timePicker")
          , M = (_, A, P) => r.range ? A === 0 ? [_, $.value[1][P]] : [$.value[0][P], _] : _
          , j = _ => {
            e("update:hours", _)
        }
          , q = _ => {
            e("update:minutes", _)
        }
          , Y = _ => {
            e("update:seconds", _)
        }
          , L = () => {
            if (S.value && !p.value.enabled && !r.noOverlayFocus) {
                const _ = HC(S.value);
                _ && _.focus({
                    preventScroll: !0
                })
            }
        }
        ;
        return n({
            toggleTimePicker: G
        }),
        (_, A) => {
            var P;
            return m(),
            y("div", WI, [!_.timePicker && !_.timePickerInline ? se((m(),
            y("button", {
                key: 0,
                ref_key: "openTimePickerBtn",
                ref: D,
                type: "button",
                class: J(ee.value),
                "aria-label": (P = N(d)) == null ? void 0 : P.openTimePicker,
                tabindex: _.noOverlayFocus ? void 0 : 0,
                onKeydown: [A[0] || (A[0] = He(H => G(!0), ["enter"])), A[1] || (A[1] = He(H => G(!0), ["space"]))],
                onClick: A[2] || (A[2] = H => G(!0))
            }, [_.$slots["clock-icon"] ? ne(_.$slots, "clock-icon", {
                key: 0
            }) : x("", !0), _.$slots["clock-icon"] ? x("", !0) : (m(),
            z(N(Ls), {
                key: 1
            }))], 42, $I)), [[da, !N(b)(_.hideNavigation, "time")]]) : x("", !0), Ae(ra, {
                name: N(v)(I.value),
                css: N(f) && !_.timePickerInline
            }, {
                default: ye( () => {
                    var H;
                    return [I.value || _.timePicker || _.timePickerInline ? (m(),
                    y("div", {
                        key: 0,
                        ref_key: "overlayRef",
                        ref: S,
                        class: J({
                            dp__overlay: !_.timePickerInline,
                            "dp--overlay-absolute": !r.timePicker && !_.timePickerInline,
                            "dp--overlay-relative": r.timePicker
                        }),
                        style: ze(_.timePicker ? {
                            height: `${N(g).modeHeight}px`
                        } : void 0),
                        tabindex: _.timePickerInline ? void 0 : 0
                    }, [C("div", {
                        class: J(_.timePickerInline ? "dp__time_picker_inline_container" : "dp__overlay_container dp__container_flex dp__time_picker_overlay_container"),
                        style: {
                            display: "flex"
                        }
                    }, [_.$slots["time-picker-overlay"] ? ne(_.$slots, "time-picker-overlay", {
                        key: 0,
                        hours: t.hours,
                        minutes: t.minutes,
                        seconds: t.seconds,
                        setHours: j,
                        setMinutes: q,
                        setSeconds: Y
                    }) : x("", !0), _.$slots["time-picker-overlay"] ? x("", !0) : (m(),
                    y("div", {
                        key: 1,
                        class: J(_.timePickerInline ? "dp__flex" : "dp__overlay_row dp__flex_row")
                    }, [(m(!0),
                    y(ge, null, Ce($.value, (k, h) => se((m(),
                    z(YI, Je({
                        key: h
                    }, {
                        ..._.$props,
                        order: h,
                        hours: k.hours,
                        minutes: k.minutes,
                        seconds: k.seconds,
                        closeTimePickerBtn: T.value,
                        disabledTimesConfig: t.disabledTimesConfig,
                        disabled: h === 0 ? _.fixedStart : _.fixedEnd
                    }, {
                        ref_for: !0,
                        ref_key: "timeInputRefs",
                        ref: w,
                        "validate-time": (W, U) => t.validateTime(W, M(U, h, W)),
                        "onUpdate:hours": W => j(M(W, h, "hours")),
                        "onUpdate:minutes": W => q(M(W, h, "minutes")),
                        "onUpdate:seconds": W => Y(M(W, h, "seconds")),
                        onMounted: L,
                        onOverlayClosed: L,
                        onAmPmChange: A[3] || (A[3] = W => _.$emit("am-pm-change", W))
                    }), ea({
                        _: 2
                    }, [Ce(N(K), (W, U) => ({
                        name: W,
                        fn: ye(te => [ne(_.$slots, W, pt(qt(te)))])
                    }))]), 1040, ["validate-time", "onUpdate:hours", "onUpdate:minutes", "onUpdate:seconds"])), [[da, h === 0 ? !0 : B.value]])), 128))], 2)), !_.timePicker && !_.timePickerInline ? se((m(),
                    y("button", {
                        key: 2,
                        ref_key: "closeTimePickerBtn",
                        ref: T,
                        type: "button",
                        class: J(ee.value),
                        "aria-label": (H = N(d)) == null ? void 0 : H.closeTimePicker,
                        tabindex: "0",
                        onKeydown: [A[4] || (A[4] = He(k => G(!1), ["enter"])), A[5] || (A[5] = He(k => G(!1), ["space"]))],
                        onClick: A[6] || (A[6] = k => G(!1))
                    }, [_.$slots["calendar-icon"] ? ne(_.$slots, "calendar-icon", {
                        key: 0
                    }) : x("", !0), _.$slots["calendar-icon"] ? x("", !0) : (m(),
                    z(N(vr), {
                        key: 1
                    }))], 42, zI)), [[da, !N(b)(_.hideNavigation, "time")]]) : x("", !0)], 2)], 14, qI)) : x("", !0)]
                }
                ),
                _: 3
            }, 8, ["name", "css"])])
        }
    }
})
  , Id = (t, n, a, e) => {
    const r = (w, S) => Array.isArray(n[w]) ? n[w][S] : n[w]
      , o = w => t.enableSeconds ? Array.isArray(n.seconds) ? n.seconds[w] : n.seconds : 0
      , i = (w, S) => w ? S !== void 0 ? un(w, r("hours", S), r("minutes", S), o(S)) : un(w, n.hours, n.minutes, o()) : Os(ie(), o(S))
      , s = (w, S) => {
        n[w] = S
    }
      , l = (w, S) => {
        const B = Object.fromEntries(Object.keys(n).map(I => I === w ? [I, S] : [I, n[I]].slice()));
        if (t.range && !t.disableTimeRangeValidation) {
            const I = $ => a.value ? un(a.value[$], B.hours[$], B.minutes[$], B.seconds[$]) : null
              , R = $ => As(a.value[$], 0);
            return !(it(I(0), I(1)) && (to(I(0), R(1)) || ao(I(1), R(0))))
        }
        return !0
    }
      , d = (w, S) => {
        l(w, S) && (s(w, S),
        e && e())
    }
      , p = w => {
        d("hours", w)
    }
      , g = w => {
        d("minutes", w)
    }
      , v = w => {
        d("seconds", w)
    }
      , f = (w, S, B, I) => {
        S && p(w),
        !S && !B && g(w),
        B && v(w),
        a.value && I(a.value)
    }
      , b = w => {
        if (w) {
            const S = Array.isArray(w)
              , B = S ? [+w[0].hours, +w[1].hours] : +w.hours
              , I = S ? [+w[0].minutes, +w[1].minutes] : +w.minutes
              , R = S ? [+w[0].seconds, +w[1].seconds] : +w.seconds;
            s("hours", B),
            s("minutes", I),
            t.enableSeconds && s("seconds", R)
        }
    }
      , D = (w, S) => {
        const B = {
            hours: Array.isArray(n.hours) ? n.hours[w] : n.hours,
            disabledArr: []
        };
        return (S || S === 0) && (B.hours = S),
        Array.isArray(t.disabledTimes) && (B.disabledArr = t.range && Array.isArray(t.disabledTimes[w]) ? t.disabledTimes[w] : t.disabledTimes),
        B
    }
      , T = u( () => (w, S) => {
        var B;
        if (Array.isArray(t.disabledTimes)) {
            const {disabledArr: I, hours: R} = D(w, S)
              , $ = I.filter(G => +G.hours === R);
            return ((B = $[0]) == null ? void 0 : B.minutes) === "*" ? {
                hours: [R],
                minutes: void 0,
                seconds: void 0
            } : {
                hours: [],
                minutes: $?.map(G => +G.minutes) ?? [],
                seconds: $?.map(G => G.seconds ? +G.seconds : void 0) ?? []
            }
        }
        return {
            hours: [],
            minutes: [],
            seconds: []
        }
    }
    );
    return {
        setTime: s,
        updateHours: p,
        updateMinutes: g,
        updateSeconds: v,
        getSetDateTime: i,
        updateTimeValues: f,
        getSecondsValue: o,
        assignStartTime: b,
        validateTime: l,
        disabledTimesConfig: T
    }
}
  , ZI = (t, n) => {
    const {modelValue: a, time: e} = uo(t, n)
      , {defaultedStartTime: r} = Ot(t)
      , {updateTimeValues: o, getSetDateTime: i, setTime: s, assignStartTime: l, disabledTimesConfig: d, validateTime: p} = Id(t, e, a)
      , g = S => {
        const {hours: B, minutes: I, seconds: R} = S;
        return {
            hours: +B,
            minutes: +I,
            seconds: R ? +R : 0
        }
    }
      , v = () => {
        if (t.startTime) {
            if (Array.isArray(t.startTime)) {
                const B = g(t.startTime[0])
                  , I = g(t.startTime[1]);
                return [bt(ie(), B), bt(ie(), I)]
            }
            const S = g(t.startTime);
            return bt(ie(), S)
        }
        return t.range ? [null, null] : null
    }
      , f = () => {
        if (t.range) {
            const [S,B] = v();
            a.value = [i(S, 0), i(B, 1)]
        } else
            a.value = i(v())
    }
      , b = S => Array.isArray(S) ? [Dn(ie(S[0])), Dn(ie(S[1]))] : [Dn(S ?? ie())]
      , D = (S, B, I) => {
        s("hours", S),
        s("minutes", B),
        s("seconds", t.enableSeconds ? I : 0)
    }
      , T = () => {
        const [S,B] = b(a.value);
        return t.range ? D([S.hours, B.hours], [S.minutes, B.minutes], [S.seconds, B.minutes]) : D(S.hours, S.minutes, S.seconds)
    }
    ;
    Pe( () => {
        if (!t.shadow)
            return l(r.value),
            a.value ? T() : f()
    }
    );
    const w = () => {
        Array.isArray(a.value) ? a.value = a.value.map( (S, B) => S && i(S, B)) : a.value = i(a.value),
        n("time-update")
    }
    ;
    return {
        modelValue: a,
        time: e,
        disabledTimesConfig: d,
        updateTime: (S, B=!0, I=!1) => {
            o(S, B, I, w)
        }
        ,
        validateTime: p
    }
}
  , KI = re({
    compatConfig: {
        MODE: 3
    },
    __name: "TimePickerSolo",
    props: {
        ...Ea
    },
    emits: ["update:internal-model-value", "time-update", "am-pm-change"],
    setup(t, {expose: n, emit: a}) {
        const e = a
          , r = t
          , o = Nn()
          , i = oa(o, "timePicker")
          , {time: s, modelValue: l, disabledTimesConfig: d, updateTime: p, validateTime: g} = ZI(r, e);
        return n({
            getSidebarProps: () => ({
                modelValue: l,
                time: s,
                updateTime: p
            })
        }),
        (v, f) => (m(),
        z(Qo, {
            "multi-calendars": 0,
            stretch: ""
        }, {
            default: ye( () => [Ae(Cd, Je(v.$props, {
                hours: N(s).hours,
                minutes: N(s).minutes,
                seconds: N(s).seconds,
                "internal-model-value": v.internalModelValue,
                "disabled-times-config": N(d),
                "validate-time": N(g),
                "onUpdate:hours": f[0] || (f[0] = b => N(p)(b)),
                "onUpdate:minutes": f[1] || (f[1] = b => N(p)(b, !1)),
                "onUpdate:seconds": f[2] || (f[2] = b => N(p)(b, !1, !0)),
                onAmPmChange: f[3] || (f[3] = b => v.$emit("am-pm-change", b))
            }), ea({
                _: 2
            }, [Ce(N(i), (b, D) => ({
                name: b,
                fn: ye(T => [ne(v.$slots, b, pt(qt(T)))])
            }))]), 1040, ["hours", "minutes", "seconds", "internal-model-value", "disabled-times-config", "validate-time"])]),
            _: 3
        }))
    }
})
  , QI = {
    class: "dp__month_year_row"
}
  , XI = ["aria-label", "onClick", "onKeydown"]
  , JI = re({
    compatConfig: {
        MODE: 3
    },
    __name: "DpHeader",
    props: {
        month: {
            type: Number,
            default: 0
        },
        year: {
            type: Number,
            default: 0
        },
        instance: {
            type: Number,
            default: 0
        },
        years: {
            type: Array,
            default: () => []
        },
        months: {
            type: Array,
            default: () => []
        },
        ...Ea
    },
    emits: ["update-month-year", "mount", "reset-flow", "overlay-closed"],
    setup(t, {expose: n, emit: a}) {
        const e = a
          , r = t
          , {defaultedTransitions: o, defaultedAriaLabels: i, defaultedMultiCalendars: s, defaultedFilters: l, defaultedConfig: d, defaultedHighlight: p} = Ot(r)
          , {transitionName: g, showTransition: v} = co(o)
          , {buildMatrix: f} = bn()
          , {handleMonthYearChange: b, isDisabled: D, updateMonthYear: T} = cI(r, e)
          , {showLeftIcon: w, showRightIcon: S} = Zo()
          , B = E(!1)
          , I = E(!1)
          , R = E([null, null, null, null]);
        Pe( () => {
            e("mount")
        }
        );
        const $ = h => ({
            get: () => r[h],
            set: W => {
                const U = h === fa.month ? fa.year : fa.month;
                e("update-month-year", {
                    [h]: W,
                    [U]: r[U]
                }),
                h === fa.month ? L(!0) : _(!0)
            }
        })
          , G = u($(fa.month))
          , ee = u($(fa.year))
          , K = u( () => h => ({
            month: r.month,
            year: r.year,
            items: h === fa.month ? r.months : r.years,
            instance: r.instance,
            updateMonthYear: T,
            toggle: h === fa.month ? L : _
        }))
          , M = u( () => r.months.find(W => W.value === r.month) || {
            text: "",
            value: 0
        })
          , j = u( () => dr(r.months, h => {
            const W = r.month === h.value
              , U = no(h.value, gd(r.year, r.minDate), pd(r.year, r.maxDate)) || l.value.months.includes(h.value)
              , te = _d(p.value, h.value, r.year);
            return {
                active: W,
                disabled: U,
                highlighted: te
            }
        }
        ))
          , q = u( () => dr(r.years, h => {
            const W = r.year === h.value
              , U = no(h.value, mr(r.minDate), mr(r.maxDate)) || l.value.years.includes(h.value)
              , te = js(p.value, h.value);
            return {
                active: W,
                disabled: U,
                highlighted: te
            }
        }
        ))
          , Y = (h, W) => {
            W !== void 0 ? h.value = W : h.value = !h.value,
            h.value || e("overlay-closed")
        }
          , L = (h=!1, W) => {
            A(h),
            Y(B, W)
        }
          , _ = (h=!1, W) => {
            A(h),
            Y(I, W)
        }
          , A = h => {
            h || e("reset-flow")
        }
          , P = (h, W) => {
            r.arrowNavigation && (R.value[W] = Rt(h),
            f(R.value, "monthYear"))
        }
          , H = u( () => {
            var h, W;
            return [{
                type: fa.month,
                index: 1,
                toggle: L,
                modelValue: G.value,
                updateModelValue: U => G.value = U,
                text: M.value.text,
                showSelectionGrid: B.value,
                items: j.value,
                ariaLabel: (h = i.value) == null ? void 0 : h.openMonthsOverlay
            }, {
                type: fa.year,
                index: 2,
                toggle: _,
                modelValue: ee.value,
                updateModelValue: U => ee.value = U,
                text: r.year,
                showSelectionGrid: I.value,
                items: q.value,
                ariaLabel: (W = i.value) == null ? void 0 : W.openYearsOverlay
            }]
        }
        )
          , k = u( () => r.disableYearSelect ? [H.value[0]] : r.yearFirst ? [...H.value].reverse() : H.value);
        return n({
            toggleMonthPicker: L,
            toggleYearPicker: _,
            handleMonthYearChange: b
        }),
        (h, W) => {
            var U, te, Q;
            return m(),
            y("div", QI, [h.$slots["month-year"] ? ne(h.$slots, "month-year", pt(Je({
                key: 0
            }, {
                month: t.month,
                year: t.year,
                months: t.months,
                years: t.years,
                updateMonthYear: N(T),
                handleMonthYearChange: N(b),
                instance: t.instance
            }))) : (m(),
            y(ge, {
                key: 1
            }, [N(w)(N(s), t.instance) && !h.vertical ? (m(),
            z(xr, {
                key: 0,
                "aria-label": (U = N(i)) == null ? void 0 : U.prevMonth,
                disabled: N(D)(!1),
                onActivate: W[0] || (W[0] = V => N(b)(!1, !0)),
                onSetRef: W[1] || (W[1] = V => P(V, 0))
            }, {
                default: ye( () => [h.$slots["arrow-left"] ? ne(h.$slots, "arrow-left", {
                    key: 0
                }) : x("", !0), h.$slots["arrow-left"] ? x("", !0) : (m(),
                z(N(xs), {
                    key: 1
                }))]),
                _: 3
            }, 8, ["aria-label", "disabled"])) : x("", !0), C("div", {
                class: J(["dp__month_year_wrap", {
                    dp__year_disable_select: h.disableYearSelect
                }])
            }, [(m(!0),
            y(ge, null, Ce(k.value, (V, O) => (m(),
            y(ge, {
                key: V.type
            }, [C("button", {
                ref_for: !0,
                ref: pe => P(pe, O + 1),
                type: "button",
                class: "dp__btn dp__month_year_select",
                tabindex: "0",
                "aria-label": V.ariaLabel,
                onClick: V.toggle,
                onKeydown: [He(xe(V.toggle, ["prevent"]), ["enter"]), He(xe(V.toggle, ["prevent"]), ["space"])]
            }, [h.$slots[V.type] ? ne(h.$slots, V.type, {
                key: 0,
                text: V.text,
                value: r[V.type]
            }) : x("", !0), h.$slots[V.type] ? x("", !0) : (m(),
            y(ge, {
                key: 1
            }, [qe(ae(V.text), 1)], 64))], 40, XI), Ae(ra, {
                name: N(g)(V.showSelectionGrid),
                css: N(v)
            }, {
                default: ye( () => [V.showSelectionGrid ? (m(),
                z(mo, {
                    key: 0,
                    items: V.items,
                    "arrow-navigation": h.arrowNavigation,
                    "hide-navigation": h.hideNavigation,
                    "is-last": h.autoApply && !N(d).keepActionRow,
                    "skip-button-ref": !1,
                    config: h.config,
                    type: V.type,
                    "header-refs": [],
                    "esc-close": h.escClose,
                    "text-input": h.textInput,
                    onSelected: V.updateModelValue,
                    onToggle: V.toggle
                }, ea({
                    "button-icon": ye( () => [h.$slots["calendar-icon"] ? ne(h.$slots, "calendar-icon", {
                        key: 0
                    }) : x("", !0), h.$slots["calendar-icon"] ? x("", !0) : (m(),
                    z(N(vr), {
                        key: 1
                    }))]),
                    _: 2
                }, [h.$slots[`${V.type}-overlay-value`] ? {
                    name: "item",
                    fn: ye( ({item: pe}) => [ne(h.$slots, `${V.type}-overlay-value`, {
                        text: pe.text,
                        value: pe.value
                    })]),
                    key: "0"
                } : void 0, h.$slots[`${V.type}-overlay`] ? {
                    name: "overlay",
                    fn: ye( () => [ne(h.$slots, `${V.type}-overlay`, pt(qt(K.value(V.type))))]),
                    key: "1"
                } : void 0, h.$slots[`${V.type}-overlay-header`] ? {
                    name: "header",
                    fn: ye( () => [ne(h.$slots, `${V.type}-overlay-header`, {
                        toggle: V.toggle
                    })]),
                    key: "2"
                } : void 0]), 1032, ["items", "arrow-navigation", "hide-navigation", "is-last", "config", "type", "esc-close", "text-input", "onSelected", "onToggle"])) : x("", !0)]),
                _: 2
            }, 1032, ["name", "css"])], 64))), 128))], 2), N(w)(N(s), t.instance) && h.vertical ? (m(),
            z(xr, {
                key: 1,
                "aria-label": (te = N(i)) == null ? void 0 : te.prevMonth,
                disabled: N(D)(!1),
                onActivate: W[2] || (W[2] = V => N(b)(!1, !0))
            }, {
                default: ye( () => [h.$slots["arrow-up"] ? ne(h.$slots, "arrow-up", {
                    key: 0
                }) : x("", !0), h.$slots["arrow-up"] ? x("", !0) : (m(),
                z(N(Rs), {
                    key: 1
                }))]),
                _: 3
            }, 8, ["aria-label", "disabled"])) : x("", !0), N(S)(N(s), t.instance) ? (m(),
            z(xr, {
                key: 2,
                ref: "rightIcon",
                disabled: N(D)(!0),
                "aria-label": (Q = N(i)) == null ? void 0 : Q.nextMonth,
                onActivate: W[3] || (W[3] = V => N(b)(!0, !0)),
                onSetRef: W[4] || (W[4] = V => P(V, h.disableYearSelect ? 2 : 3))
            }, {
                default: ye( () => [h.$slots[h.vertical ? "arrow-down" : "arrow-right"] ? ne(h.$slots, h.vertical ? "arrow-down" : "arrow-right", {
                    key: 0
                }) : x("", !0), h.$slots[h.vertical ? "arrow-down" : "arrow-right"] ? x("", !0) : (m(),
                z(dn(h.vertical ? N(Ns) : N(Bs)), {
                    key: 1
                }))]),
                _: 3
            }, 8, ["disabled", "aria-label"])) : x("", !0)], 64))])
        }
    }
})
  , eP = ["aria-label"]
  , tP = {
    class: "dp__calendar_header",
    role: "row"
}
  , aP = {
    key: 0,
    class: "dp__calendar_header_item",
    role: "gridcell"
}
  , nP = C("div", {
    class: "dp__calendar_header_separator"
}, null, -1)
  , rP = ["aria-label"]
  , oP = {
    key: 0,
    role: "gridcell",
    class: "dp__calendar_item dp__week_num"
}
  , iP = {
    class: "dp__cell_inner"
}
  , sP = ["id", "aria-selected", "aria-disabled", "aria-label", "onClick", "onKeydown", "onMouseenter", "onMouseleave"]
  , lP = re({
    compatConfig: {
        MODE: 3
    },
    __name: "DpCalendar",
    props: {
        mappedDates: {
            type: Array,
            default: () => []
        },
        instance: {
            type: Number,
            default: 0
        },
        month: {
            type: Number,
            default: 0
        },
        year: {
            type: Number,
            default: 0
        },
        ...Ea
    },
    emits: ["select-date", "set-hover-date", "handle-scroll", "mount", "handle-swipe", "handle-space", "tooltip-open", "tooltip-close"],
    setup(t, {expose: n, emit: a}) {
        const e = a
          , r = t
          , {buildMultiLevelMatrix: o} = bn()
          , {defaultedTransitions: i, defaultedConfig: s, defaultedAriaLabels: l, defaultedMultiCalendars: d, defaultedWeekNumbers: p} = Ot(r)
          , g = E(null)
          , v = E({
            bottom: "",
            left: "",
            transform: ""
        })
          , f = E([])
          , b = E(null)
          , D = E(!0)
          , T = E("")
          , w = E({
            startX: 0,
            endX: 0,
            startY: 0,
            endY: 0
        })
          , S = E([])
          , B = E({
            left: "50%"
        })
          , I = u( () => r.calendar ? r.calendar(r.mappedDates) : r.mappedDates)
          , R = u( () => r.dayNames ? Array.isArray(r.dayNames) ? r.dayNames : r.dayNames(r.locale, +r.weekStart) : LC(r.formatLocale, r.locale, +r.weekStart));
        Pe( () => {
            e("mount", {
                cmp: "calendar",
                refs: f
            }),
            s.value.noSwipe || b.value && (b.value.addEventListener("touchstart", _, {
                passive: !1
            }),
            b.value.addEventListener("touchend", A, {
                passive: !1
            }),
            b.value.addEventListener("touchmove", P, {
                passive: !1
            })),
            r.monthChangeOnScroll && b.value && b.value.addEventListener("wheel", h, {
                passive: !1
            })
        }
        );
        const $ = V => V ? r.vertical ? "vNext" : "next" : r.vertical ? "vPrevious" : "previous"
          , G = (V, O) => {
            if (r.transitions) {
                const pe = Zt(za(ie(), r.month, r.year));
                T.value = zt(Zt(za(ie(), V, O)), pe) ? i.value[$(!0)] : i.value[$(!1)],
                D.value = !1,
                Nt( () => {
                    D.value = !0
                }
                )
            }
        }
          , ee = u( () => ({
            [r.calendarClassName]: !!r.calendarClassName
        }))
          , K = u( () => V => {
            const O = NC(V);
            return {
                dp__marker_dot: O.type === "dot",
                dp__marker_line: O.type === "line"
            }
        }
        )
          , M = u( () => V => it(V, g.value))
          , j = u( () => ({
            dp__calendar: !0,
            dp__calendar_next: d.value.count > 0 && r.instance !== 0
        }))
          , q = u( () => V => r.hideOffsetDates ? V.current : !0)
          , Y = async (V, O, pe) => {
            var fe, ue;
            if (e("set-hover-date", V),
            (ue = (fe = V.marker) == null ? void 0 : fe.tooltip) != null && ue.length) {
                const Oe = Rt(f.value[O][pe]);
                if (Oe) {
                    const {width: he, height: X} = Oe.getBoundingClientRect();
                    g.value = V.value;
                    let ce = {
                        left: `${he / 2}px`
                    }
                      , Me = -50;
                    if (await Nt(),
                    S.value[0]) {
                        const {left: de, width: Ue} = S.value[0].getBoundingClientRect();
                        de < 0 && (ce = {
                            left: "0"
                        },
                        Me = 0,
                        B.value.left = `${he / 2}px`),
                        window.innerWidth < de + Ue && (ce = {
                            right: "0"
                        },
                        Me = 0,
                        B.value.left = `${Ue - he / 2}px`)
                    }
                    v.value = {
                        bottom: `${X}px`,
                        ...ce,
                        transform: `translateX(${Me}%)`
                    },
                    e("tooltip-open", V.marker)
                }
            }
        }
          , L = V => {
            g.value && (g.value = null,
            v.value = JSON.parse(JSON.stringify({
                bottom: "",
                left: "",
                transform: ""
            })),
            e("tooltip-close", V.marker))
        }
          , _ = V => {
            w.value.startX = V.changedTouches[0].screenX,
            w.value.startY = V.changedTouches[0].screenY
        }
          , A = V => {
            w.value.endX = V.changedTouches[0].screenX,
            w.value.endY = V.changedTouches[0].screenY,
            H()
        }
          , P = V => {
            r.vertical && !r.inline && V.preventDefault()
        }
          , H = () => {
            const V = r.vertical ? "Y" : "X";
            Math.abs(w.value[`start${V}`] - w.value[`end${V}`]) > 10 && e("handle-swipe", w.value[`start${V}`] > w.value[`end${V}`] ? "right" : "left")
        }
          , k = (V, O, pe) => {
            V && (Array.isArray(f.value[O]) ? f.value[O][pe] = V : f.value[O] = [V]),
            r.arrowNavigation && o(f.value, "calendar")
        }
          , h = V => {
            r.monthChangeOnScroll && (V.preventDefault(),
            e("handle-scroll", V))
        }
          , W = V => p.value.type === "local" ? $S(V.value, {
            weekStartsOn: +r.weekStart
        }) : p.value.type === "iso" ? jS(V.value) : typeof p.value.type == "function" ? p.value.type(V.value) : ""
          , U = V => {
            const O = V[0];
            return p.value.hideOnOffsetDates ? V.some(pe => pe.current) ? W(O) : "" : W(O)
        }
          , te = (V, O) => {
            cn(V, s.value),
            e("select-date", O)
        }
          , Q = V => {
            cn(V, s.value)
        }
        ;
        return n({
            triggerTransition: G
        }),
        (V, O) => {
            var pe;
            return m(),
            y("div", {
                class: J(j.value)
            }, [C("div", {
                ref_key: "calendarWrapRef",
                ref: b,
                role: "grid",
                class: J(ee.value),
                "aria-label": (pe = N(l)) == null ? void 0 : pe.calendarWrap
            }, [(m(),
            y(ge, {
                key: 0
            }, [C("div", tP, [V.weekNumbers ? (m(),
            y("div", aP, ae(V.weekNumName), 1)) : x("", !0), (m(!0),
            y(ge, null, Ce(R.value, (fe, ue) => (m(),
            y("div", {
                key: ue,
                class: "dp__calendar_header_item",
                role: "gridcell"
            }, [V.$slots["calendar-header"] ? ne(V.$slots, "calendar-header", {
                key: 0,
                day: fe,
                index: ue
            }) : x("", !0), V.$slots["calendar-header"] ? x("", !0) : (m(),
            y(ge, {
                key: 1
            }, [qe(ae(fe), 1)], 64))]))), 128))]), nP, Ae(ra, {
                name: T.value,
                css: !!V.transitions
            }, {
                default: ye( () => {
                    var fe;
                    return [D.value ? (m(),
                    y("div", {
                        key: 0,
                        class: "dp__calendar",
                        role: "rowgroup",
                        "aria-label": ((fe = N(l)) == null ? void 0 : fe.calendarDays) || void 0
                    }, [(m(!0),
                    y(ge, null, Ce(I.value, (ue, Oe) => (m(),
                    y("div", {
                        key: Oe,
                        class: "dp__calendar_row",
                        role: "row"
                    }, [V.weekNumbers ? (m(),
                    y("div", oP, [C("div", iP, ae(U(ue.days)), 1)])) : x("", !0), (m(!0),
                    y(ge, null, Ce(ue.days, (he, X) => {
                        var ce, Me, de;
                        return m(),
                        y("div", {
                            id: he.value.toISOString().split("T")[0],
                            ref_for: !0,
                            ref: Ue => k(Ue, Oe, X),
                            key: X + Oe,
                            role: "gridcell",
                            class: "dp__calendar_item",
                            "aria-selected": he.classData.dp__active_date || he.classData.dp__range_start || he.classData.dp__range_start,
                            "aria-disabled": he.classData.dp__cell_disabled || void 0,
                            "aria-label": (Me = (ce = N(l)) == null ? void 0 : ce.day) == null ? void 0 : Me.call(ce, he),
                            tabindex: "0",
                            onClick: xe(Ue => te(Ue, he), ["prevent"]),
                            onKeydown: [He(Ue => V.$emit("select-date", he), ["enter"]), He(Ue => V.$emit("handle-space", he), ["space"])],
                            onMouseenter: Ue => Y(he, Oe, X),
                            onMouseleave: Ue => L(he)
                        }, [C("div", {
                            class: J(["dp__cell_inner", he.classData])
                        }, [V.$slots.day && q.value(he) ? ne(V.$slots, "day", {
                            key: 0,
                            day: +he.text,
                            date: he.value
                        }) : x("", !0), V.$slots.day ? x("", !0) : (m(),
                        y(ge, {
                            key: 1
                        }, [qe(ae(he.text), 1)], 64)), he.marker && q.value(he) ? (m(),
                        y(ge, {
                            key: 2
                        }, [V.$slots.marker ? ne(V.$slots, "marker", {
                            key: 0,
                            marker: he.marker,
                            day: +he.text,
                            date: he.value
                        }) : (m(),
                        y("div", {
                            key: 1,
                            class: J(K.value(he.marker)),
                            style: ze(he.marker.color ? {
                                backgroundColor: he.marker.color
                            } : {})
                        }, null, 6))], 64)) : x("", !0), M.value(he.value) ? (m(),
                        y("div", {
                            key: 3,
                            ref_for: !0,
                            ref_key: "activeTooltip",
                            ref: S,
                            class: "dp__marker_tooltip",
                            style: ze(v.value)
                        }, [(de = he.marker) != null && de.tooltip ? (m(),
                        y("div", {
                            key: 0,
                            class: "dp__tooltip_content",
                            onClick: Q
                        }, [(m(!0),
                        y(ge, null, Ce(he.marker.tooltip, (Ue, nt) => (m(),
                        y("div", {
                            key: nt,
                            class: "dp__tooltip_text"
                        }, [V.$slots["marker-tooltip"] ? ne(V.$slots, "marker-tooltip", {
                            key: 0,
                            tooltip: Ue,
                            day: he.value
                        }) : x("", !0), V.$slots["marker-tooltip"] ? x("", !0) : (m(),
                        y(ge, {
                            key: 1
                        }, [C("div", {
                            class: "dp__tooltip_mark",
                            style: ze(Ue.color ? {
                                backgroundColor: Ue.color
                            } : {})
                        }, null, 4), C("div", null, ae(Ue.text), 1)], 64))]))), 128)), C("div", {
                            class: "dp__arrow_bottom_tp",
                            style: ze(B.value)
                        }, null, 4)])) : x("", !0)], 4)) : x("", !0)], 2)], 40, sP)
                    }
                    ), 128))]))), 128))], 8, rP)) : x("", !0)]
                }
                ),
                _: 3
            }, 8, ["name", "css"])], 64))], 10, eP)], 2)
        }
    }
})
  , Mc = t => Array.isArray(t)
  , cP = (t, n, a, e) => {
    const r = E([])
      , {modelValue: o, calendars: i, time: s} = uo(t, n)
      , {defaultedMultiCalendars: l, defaultedStartTime: d} = Ot(t)
      , {validateMonthYearInRange: p, isDisabled: g, isDateRangeAllowed: v, checkMinMaxRange: f} = Vn(t)
      , {updateTimeValues: b, getSetDateTime: D, setTime: T, assignStartTime: w, validateTime: S, disabledTimesConfig: B} = Id(t, s, o, e)
      , I = u( () => F => i.value[F] ? i.value[F].month : 0)
      , R = u( () => F => i.value[F] ? i.value[F].year : 0)
      , $ = (F, Z, Se) => {
        var Be, We;
        i.value[F] || (i.value[F] = {
            month: 0,
            year: 0
        }),
        i.value[F].month = Cc(Z) ? (Be = i.value[F]) == null ? void 0 : Be.month : Z,
        i.value[F].year = Cc(Se) ? (We = i.value[F]) == null ? void 0 : We.year : Se
    }
      , G = () => {
        t.autoApply && n("select-date")
    }
    ;
    Fe(o, (F, Z) => {
        JSON.stringify(F) !== JSON.stringify(Z) && M()
    }
    ),
    Pe( () => {
        t.shadow || (o.value || (h(),
        d.value && w(d.value)),
        M(!0),
        t.focusStartDate && t.startDate && h())
    }
    );
    const ee = u( () => {
        var F;
        return (F = t.flow) != null && F.length && !t.partialFlow ? t.flowStep === t.flow.length : !0
    }
    )
      , K = () => {
        t.autoApply && ee.value && n("auto-apply", t.partialFlow)
    }
      , M = (F=!1) => {
        if (o.value)
            return Array.isArray(o.value) ? (r.value = o.value,
            A(F)) : q(o.value, F);
        if (l.value.count && F && !t.startDate)
            return j(ie(), F)
    }
      , j = (F, Z=!1) => {
        if ((!l.value.count || !l.value.static || Z) && $(0, et(F), $e(F)),
        l.value.count && (!l.value.solo || !o.value))
            for (let Se = 1; Se < l.value.count; Se++) {
                const Be = bt(ie(), {
                    month: I.value(Se - 1),
                    year: R.value(Se - 1)
                })
                  , We = Vu(Be, {
                    months: 1
                });
                i.value[Se] = {
                    month: et(We),
                    year: $e(We)
                }
            }
    }
      , q = (F, Z) => {
        j(F),
        T("hours", ka(F)),
        T("minutes", Ra(F)),
        T("seconds", cr(F)),
        l.value.count && Z && k()
    }
      , Y = F => {
        if (l.value.count) {
            if (l.value.solo)
                return 0;
            const Z = et(F[0])
              , Se = et(F[1]);
            return Math.abs(Se - Z) < l.value.count ? 0 : 1
        }
        return 1
    }
      , L = (F, Z) => {
        F[1] && t.showLastInRange ? j(F[Y(F)], Z) : j(F[0], Z);
        const Se = (Be, We) => [Be(F[0]), F[1] ? Be(F[1]) : s[We][1]];
        T("hours", Se(ka, "hours")),
        T("minutes", Se(Ra, "minutes")),
        T("seconds", Se(cr, "seconds"))
    }
      , _ = (F, Z) => {
        if ((t.range || t.weekPicker) && !t.multiDates)
            return L(F, Z);
        if (t.multiDates && Z) {
            const Se = F[F.length - 1];
            return q(Se, Z)
        }
    }
      , A = F => {
        const Z = o.value;
        _(Z, F),
        l.value.count && l.value.solo && k()
    }
      , P = (F, Z) => {
        const Se = bt(ie(), {
            month: I.value(Z),
            year: R.value(Z)
        })
          , Be = F < 0 ? wa(Se, 1) : ur(Se, 1);
        p(et(Be), $e(Be), F < 0, t.preventMinMaxNavigation) && ($(Z, et(Be), $e(Be)),
        n("update-month-year", {
            instance: Z,
            month: et(Be),
            year: $e(Be)
        }),
        l.value.count && !l.value.solo && H(Z),
        a())
    }
      , H = F => {
        for (let Z = F - 1; Z >= 0; Z--) {
            const Se = ur(bt(ie(), {
                month: I.value(Z + 1),
                year: R.value(Z + 1)
            }), 1);
            $(Z, et(Se), $e(Se))
        }
        for (let Z = F + 1; Z <= l.value.count - 1; Z++) {
            const Se = wa(bt(ie(), {
                month: I.value(Z - 1),
                year: R.value(Z - 1)
            }), 1);
            $(Z, et(Se), $e(Se))
        }
    }
      , k = () => {
        if (Array.isArray(o.value) && o.value.length === 2) {
            const F = ie(ie(o.value[1] ? o.value[1] : wa(o.value[0], 1)))
              , [Z,Se] = [et(o.value[0]), $e(o.value[0])]
              , [Be,We] = [et(o.value[1]), $e(o.value[1])];
            (Z !== Be || Z === Be && Se !== We) && l.value.solo && $(1, et(F), $e(F))
        } else
            o.value && !Array.isArray(o.value) && ($(0, et(o.value), $e(o.value)),
            j(ie()))
    }
      , h = () => {
        t.startDate && ($(0, et(ie(t.startDate)), $e(ie(t.startDate))),
        l.value.count && H(0))
    }
      , W = jC( (F, Z) => {
        t.monthChangeOnScroll && P(t.monthChangeOnScroll !== "inverse" ? -F.deltaY : F.deltaY, Z)
    }
    , 50)
      , U = (F, Z, Se=!1) => {
        t.monthChangeOnArrows && t.vertical === Se && te(F, Z)
    }
      , te = (F, Z) => {
        P(F === "right" ? -1 : 1, Z)
    }
      , Q = F => t.markers.find(Z => it(WC(F.value), Sa(ie(Z.date), t.timezone)))
      , V = (F, Z) => {
        switch (t.sixWeeks === !0 ? "append" : t.sixWeeks) {
        case "prepend":
            return [!0, !1];
        case "center":
            return [F == 0, !0];
        case "fair":
            return [F == 0 || Z > F, !0];
        case "append":
            return [!1, !1];
        default:
            return [!1, !1]
        }
    }
      , O = (F, Z, Se, Be) => {
        if (t.sixWeeks && F.length < 6) {
            const We = 6 - F.length
              , _t = (Z.getDay() + 7 - Be) % 7
              , Ht = 6 - (Se.getDay() + 7 - Be) % 7
              , [me,Re] = V(_t, Ht);
            for (let De = 1; De <= We; De++)
                if (Re ? !!(De % 2) == me : me) {
                    const xt = F[0].days[0]
                      , Yt = pe(qa(xt.value, -7), et(Z));
                    F.unshift({
                        days: Yt
                    })
                } else {
                    const xt = F[F.length - 1]
                      , Yt = xt.days[xt.days.length - 1]
                      , en = pe(qa(Yt.value, 1), et(Z));
                    F.push({
                        days: en
                    })
                }
        }
        return F
    }
      , pe = (F, Z) => {
        const Se = ie(F)
          , Be = [];
        for (let We = 0; We < 7; We++) {
            const _t = qa(Se, We)
              , Ht = et(_t) !== Z;
            Be.push({
                text: t.hideOffsetDates && Ht ? "" : _t.getDate(),
                value: _t,
                current: !Ht,
                classData: {}
            })
        }
        return Be
    }
      , fe = (F, Z) => {
        const Se = []
          , Be = new Date(Z,F)
          , We = new Date(Z,F + 1,0)
          , _t = t.weekStart
          , Ht = Ln(Be, {
            weekStartsOn: _t
        })
          , me = Re => {
            const De = pe(Re, F);
            if (Se.push({
                days: De
            }),
            !Se[Se.length - 1].days.some(xt => it(Zt(xt.value), Zt(We)))) {
                const xt = qa(Re, 7);
                me(xt)
            }
        }
        ;
        return me(Ht),
        O(Se, Be, We, _t)
    }
      , ue = F => (o.value = So(ie(F.value), t.timezone, t.weekStart),
    n("date-update", F.value),
    K())
      , Oe = F => {
        const Z = un(ie(F.value), s.hours, s.minutes, Ft());
        n("date-update", Z),
        t.multiDates ? Gs(Z, o, t.multiDatesLimit) : o.value = Z,
        e(),
        Nt().then( () => {
            K()
        }
        )
    }
      , he = F => t.noDisabledRange ? fd(r.value[0], F).some(Z => g(Z)) : !1
      , X = () => {
        r.value = o.value ? o.value.slice() : [],
        r.value.length === 2 && !(t.fixedStart || t.fixedEnd) && (r.value = [])
    }
      , ce = (F, Z) => {
        const Se = [ie(F.value), qa(ie(F.value), +t.autoRange)];
        v(Se) ? (Z && Me(F.value),
        r.value = Se) : n("invalid-date", F.value)
    }
      , Me = F => {
        const Z = et(ie(F))
          , Se = $e(ie(F));
        if ($(0, Z, Se),
        l.value.count > 0)
            for (let Be = 1; Be < l.value.count; Be++) {
                const We = $C(bt(ie(F), {
                    year: I.value(Be - 1),
                    month: R.value(Be - 1)
                }));
                $(Be, We.month, We.year)
            }
    }
      , de = F => Array.isArray(o.value) && o.value.length === 2 ? t.fixedStart && (zt(F, o.value[0]) || it(F, o.value[0])) ? [o.value[0], F] : t.fixedEnd && (Gt(F, o.value[1]) || it(F, o.value[1])) ? [F, o.value[1]] : (n("invalid-fixed-range", F),
    o.value) : []
      , Ue = F => {
        if (he(F.value) || !f(F.value, o.value, t.fixedStart ? 0 : 1))
            return n("invalid-date", F.value);
        r.value = de(ie(F.value))
    }
      , nt = (F, Z) => {
        if (X(),
        t.autoRange)
            return ce(F, Z);
        if (t.fixedStart || t.fixedEnd)
            return Ue(F);
        r.value[0] ? f(ie(F.value), o.value) && !he(F.value) ? Gt(ie(F.value), ie(r.value[0])) ? (r.value.unshift(ie(F.value)),
        n("range-end", r.value[0])) : (r.value[1] = ie(F.value),
        n("range-end", r.value[1])) : (t.autoApply && n("auto-apply-invalid", F.value),
        n("invalid-date", F.value)) : (r.value[0] = ie(F.value),
        n("range-start", r.value[0]))
    }
      , Ft = (F=!0) => t.enableSeconds ? Array.isArray(s.seconds) ? F ? s.seconds[0] : s.seconds[1] : s.seconds : 0
      , St = F => {
        r.value[F] = un(r.value[F], s.hours[F], s.minutes[F], Ft(F !== 1))
    }
      , Tt = () => {
        var F, Z;
        r.value[0] && r.value[1] && +((F = r.value) == null ? void 0 : F[0]) > +((Z = r.value) == null ? void 0 : Z[1]) && (r.value.reverse(),
        n("range-start", r.value[0]),
        n("range-end", r.value[1]))
    }
      , Ee = () => {
        r.value.length && (r.value[0] && !r.value[1] ? St(0) : (St(0),
        St(1),
        e()),
        Tt(),
        o.value = r.value.slice(),
        Xo(r.value, n, t.autoApply, t.modelAuto))
    }
      , je = (F, Z=!1) => {
        if (g(F.value) || !F.current && t.hideOffsetDates)
            return n("invalid-date", F.value);
        if (t.weekPicker)
            return ue(F);
        if (!t.range)
            return Oe(F);
        Mc(s.hours) && Mc(s.minutes) && !t.multiDates && (nt(F, Z),
        Ee())
    }
      , ot = (F, Z) => {
        var Se;
        $(F, Z.month, Z.year),
        l.value.count && !l.value.solo && H(F),
        n("update-month-year", {
            instance: F,
            month: Z.month,
            year: Z.year
        }),
        a(l.value.solo ? F : void 0);
        const Be = (Se = t.flow) != null && Se.length ? t.flow[t.flowStep] : void 0;
        !Z.fromNav && (Be === Ma.month || Be === Ma.year) && e()
    }
      , rt = (F, Z) => {
        Sd({
            value: F,
            modelValue: o,
            range: t.range,
            timezone: Z ? void 0 : t.timezone
        }),
        G(),
        t.multiCalendars && Nt().then( () => M(!0))
    }
      , vt = () => {
        t.range ? o.value && Array.isArray(o.value) && o.value[0] ? o.value = Gt(ie(), o.value[0]) ? [ie(), o.value[0]] : [o.value[0], ie()] : o.value = [ie()] : o.value = ie(),
        G()
    }
      , gt = () => {
        if (Array.isArray(o.value))
            if (t.multiDates) {
                const F = Lt();
                o.value[o.value.length - 1] = D(F)
            } else
                o.value = o.value.map( (F, Z) => F && D(F, Z));
        else
            o.value = D(o.value);
        n("time-update")
    }
      , Lt = () => Array.isArray(o.value) && o.value.length ? o.value[o.value.length - 1] : null;
    return {
        calendars: i,
        modelValue: o,
        month: I,
        year: R,
        time: s,
        disabledTimesConfig: B,
        validateTime: S,
        getCalendarDays: fe,
        getMarker: Q,
        handleScroll: W,
        handleSwipe: te,
        handleArrow: U,
        selectDate: je,
        updateMonthYear: ot,
        presetDate: rt,
        selectCurrentDate: vt,
        updateTime: (F, Z=!0, Se=!1) => {
            b(F, Z, Se, gt)
        }
    }
}
  , uP = {
    key: 0
}
  , dP = re({
    __name: "DatePicker",
    props: {
        ...Ea
    },
    emits: ["tooltip-open", "tooltip-close", "mount", "update:internal-model-value", "update-flow-step", "reset-flow", "auto-apply", "focus-menu", "select-date", "range-start", "range-end", "invalid-fixed-range", "time-update", "am-pm-change", "time-picker-open", "time-picker-close", "recalculate-position", "update-month-year", "auto-apply-invalid", "date-update", "invalid-date"],
    setup(t, {expose: n, emit: a}) {
        const e = a
          , r = t
          , {calendars: o, month: i, year: s, modelValue: l, time: d, disabledTimesConfig: p, validateTime: g, getCalendarDays: v, getMarker: f, handleArrow: b, handleScroll: D, handleSwipe: T, selectDate: w, updateMonthYear: S, presetDate: B, selectCurrentDate: I, updateTime: R} = cP(r, e, k, h)
          , $ = Nn()
          , {setHoverDate: G, getDayClassData: ee, clearHoverDate: K} = gI(l, r)
          , {defaultedMultiCalendars: M} = Ot(r)
          , j = E([])
          , q = E([])
          , Y = E(null)
          , L = oa($, "calendar")
          , _ = oa($, "monthYear")
          , A = oa($, "timePicker")
          , P = U => {
            r.shadow || e("mount", U)
        }
        ;
        Fe(o, () => {
            r.shadow || setTimeout( () => {
                e("recalculate-position")
            }
            , 0)
        }
        , {
            deep: !0
        });
        const H = u( () => U => v(i.value(U), s.value(U)).map(te => ({
            ...te,
            days: te.days.map(Q => (Q.marker = f(Q),
            Q.classData = ee(Q),
            Q))
        })));
        function k(U) {
            var te;
            U || U === 0 ? (te = q.value[U]) == null || te.triggerTransition(i.value(U), s.value(U)) : q.value.forEach( (Q, V) => Q.triggerTransition(i.value(V), s.value(V)))
        }
        function h() {
            e("update-flow-step")
        }
        const W = (U, te=!1) => {
            w(U, te),
            r.spaceConfirm && e("select-date")
        }
        ;
        return n({
            clearHoverDate: K,
            presetDate: B,
            selectCurrentDate: I,
            toggleMonthPicker: (U, te, Q=0) => {
                var V;
                (V = j.value[Q]) == null || V.toggleMonthPicker(U, te)
            }
            ,
            toggleYearPicker: (U, te, Q=0) => {
                var V;
                (V = j.value[Q]) == null || V.toggleYearPicker(U, te)
            }
            ,
            toggleTimePicker: (U, te, Q) => {
                var V;
                (V = Y.value) == null || V.toggleTimePicker(U, te, Q)
            }
            ,
            handleArrow: b,
            updateMonthYear: S,
            getSidebarProps: () => ({
                modelValue: l,
                month: i,
                year: s,
                time: d,
                updateTime: R,
                updateMonthYear: S,
                selectDate: w,
                presetDate: B
            })
        }),
        (U, te) => (m(),
        y(ge, null, [Ae(Qo, {
            "multi-calendars": N(M).count
        }, {
            default: ye( ({instance: Q, index: V}) => [U.disableMonthYearSelect ? x("", !0) : (m(),
            z(JI, Je({
                key: 0,
                ref: O => {
                    O && (j.value[V] = O)
                }
                ,
                months: N(dd)(U.formatLocale, U.locale, U.monthNameFormat),
                years: N(Fs)(U.yearRange, U.reverseYears),
                month: N(i)(Q),
                year: N(s)(Q),
                instance: Q
            }, U.$props, {
                onMount: te[0] || (te[0] = O => P(N(Mn).header)),
                onResetFlow: te[1] || (te[1] = O => U.$emit("reset-flow")),
                onUpdateMonthYear: O => N(S)(Q, O),
                onOverlayClosed: te[2] || (te[2] = O => U.$emit("focus-menu"))
            }), ea({
                _: 2
            }, [Ce(N(_), (O, pe) => ({
                name: O,
                fn: ye(fe => [ne(U.$slots, O, pt(qt(fe)))])
            }))]), 1040, ["months", "years", "month", "year", "instance", "onUpdateMonthYear"])), Ae(lP, Je({
                ref: O => {
                    O && (q.value[V] = O)
                }
                ,
                "mapped-dates": H.value(Q),
                month: N(i)(Q),
                year: N(s)(Q),
                instance: Q
            }, U.$props, {
                onSelectDate: O => N(w)(O, Q !== 1),
                onHandleSpace: O => W(O, Q !== 1),
                onSetHoverDate: te[3] || (te[3] = O => N(G)(O)),
                onHandleScroll: O => N(D)(O, Q),
                onHandleSwipe: O => N(T)(O, Q),
                onMount: te[4] || (te[4] = O => P(N(Mn).calendar)),
                onResetFlow: te[5] || (te[5] = O => U.$emit("reset-flow")),
                onTooltipOpen: te[6] || (te[6] = O => U.$emit("tooltip-open", O)),
                onTooltipClose: te[7] || (te[7] = O => U.$emit("tooltip-close", O))
            }), ea({
                _: 2
            }, [Ce(N(L), (O, pe) => ({
                name: O,
                fn: ye(fe => [ne(U.$slots, O, pt(qt({
                    ...fe
                })))])
            }))]), 1040, ["mapped-dates", "month", "year", "instance", "onSelectDate", "onHandleSpace", "onHandleScroll", "onHandleSwipe"])]),
            _: 3
        }, 8, ["multi-calendars"]), U.enableTimePicker ? (m(),
        y("div", uP, [U.$slots["time-picker"] ? ne(U.$slots, "time-picker", pt(Je({
            key: 0
        }, {
            time: N(d),
            updateTime: N(R)
        }))) : (m(),
        z(Cd, Je({
            key: 1,
            ref_key: "timePickerRef",
            ref: Y
        }, U.$props, {
            hours: N(d).hours,
            minutes: N(d).minutes,
            seconds: N(d).seconds,
            "internal-model-value": U.internalModelValue,
            "disabled-times-config": N(p),
            "validate-time": N(g),
            onMount: te[8] || (te[8] = Q => P(N(Mn).timePicker)),
            "onUpdate:hours": te[9] || (te[9] = Q => N(R)(Q)),
            "onUpdate:minutes": te[10] || (te[10] = Q => N(R)(Q, !1)),
            "onUpdate:seconds": te[11] || (te[11] = Q => N(R)(Q, !1, !0)),
            onResetFlow: te[12] || (te[12] = Q => U.$emit("reset-flow")),
            onOverlayClosed: te[13] || (te[13] = Q => U.$emit("time-picker-close")),
            onOverlayOpened: te[14] || (te[14] = Q => U.$emit("time-picker-open", Q)),
            onAmPmChange: te[15] || (te[15] = Q => U.$emit("am-pm-change", Q))
        }), ea({
            _: 2
        }, [Ce(N(A), (Q, V) => ({
            name: Q,
            fn: ye(O => [ne(U.$slots, Q, pt(qt(O)))])
        }))]), 1040, ["hours", "minutes", "seconds", "internal-model-value", "disabled-times-config", "validate-time"]))])) : x("", !0)], 64))
    }
})
  , mP = (t, n) => {
    const a = E()
      , {defaultedMultiCalendars: e, defaultedConfig: r, defaultedHighlight: o} = Ot(t)
      , {modelValue: i, year: s, month: l, calendars: d} = uo(t, n)
      , {isDisabled: p} = Vn(t)
      , {selectYear: g, groupedYears: v, showYearPicker: f, isDisabled: b, toggleYearPicker: D, handleYearSelect: T, handleYear: w} = Td({
        modelValue: i,
        multiCalendars: e,
        highlight: o,
        calendars: d,
        month: l,
        year: s,
        props: t,
        emit: n
    })
      , S = (K, M) => [K, M].map(j => ln(j, "MMMM", {
        locale: t.formatLocale
    })).join("-")
      , B = u( () => K => i.value ? Array.isArray(i.value) ? i.value.some(M => pc(K, M)) : pc(i.value, K) : !1)
      , I = K => {
        if (t.range) {
            if (Array.isArray(i.value)) {
                const M = it(K, i.value[0]) || it(K, i.value[1]);
                return zo(i.value, a.value, K) && !M
            }
            return !1
        }
        return !1
    }
      , R = u( () => K => {
        const M = bt(new Date, {
            year: s.value(K)
        });
        return U1({
            start: j1(M),
            end: F1(M)
        }).map(j => {
            const q = eo(j)
              , Y = lc(j)
              , L = p(j)
              , _ = I(q)
              , A = typeof o.value == "function" ? o.value({
                quarter: sc(q),
                year: $e(q)
            }) : !!o.value.quarters.find(P => P.quarter === sc(q) && P.year === $e(q));
            return {
                text: S(q, Y),
                value: q,
                active: B.value(q),
                highlighted: A,
                disabled: L,
                isBetween: _
            }
        }
        )
    }
    )
      , $ = K => {
        Gs(K, i, t.multiDatesLimit),
        n("auto-apply", !0)
    }
      , G = K => {
        const M = Ys(i, K, n);
        Xo(M, n, t.autoApply, t.modelAuto)
    }
      , ee = K => {
        i.value = K,
        n("auto-apply")
    }
    ;
    return {
        defaultedConfig: r,
        defaultedMultiCalendars: e,
        groupedYears: v,
        year: s,
        isDisabled: b,
        quarters: R,
        showYearPicker: f,
        modelValue: i,
        setHoverDate: K => {
            a.value = K
        }
        ,
        selectYear: g,
        selectQuarter: (K, M, j) => {
            if (!j)
                return d.value[M].month = et(lc(K)),
                t.multiDates ? $(K) : t.range ? G(K) : ee(K)
        }
        ,
        toggleYearPicker: D,
        handleYearSelect: T,
        handleYear: w
    }
}
  , gP = {
    class: "dp--quarter-items"
}
  , pP = ["disabled", "onClick", "onMouseover"]
  , vP = re({
    compatConfig: {
        MODE: 3
    },
    __name: "QuarterPicker",
    props: {
        ...Ea
    },
    emits: ["update:internal-model-value", "reset-flow", "overlay-closed", "auto-apply", "range-start", "range-end"],
    setup(t, {expose: n, emit: a}) {
        const e = a
          , r = t
          , o = Nn()
          , i = oa(o, "yearMode")
          , {defaultedMultiCalendars: s, defaultedConfig: l, groupedYears: d, year: p, isDisabled: g, quarters: v, modelValue: f, showYearPicker: b, setHoverDate: D, selectQuarter: T, toggleYearPicker: w, handleYearSelect: S, handleYear: B} = mP(r, e);
        return n({
            getSidebarProps: () => ({
                modelValue: f,
                year: p,
                selectQuarter: T,
                handleYearSelect: S,
                handleYear: B
            })
        }),
        (I, R) => (m(),
        z(Qo, {
            "multi-calendars": N(s).count,
            stretch: ""
        }, {
            default: ye( ({instance: $}) => [C("div", {
                class: "dp-quarter-picker-wrap",
                style: ze({
                    minHeight: `${N(l).modeHeight}px`
                })
            }, [C("div", null, [Ae(kd, Je(I.$props, {
                items: N(d)($),
                instance: $,
                "show-year-picker": N(b)[$],
                year: N(p)($),
                "is-disabled": G => N(g)($, G),
                onHandleYear: G => N(B)($, G),
                onYearSelect: G => N(S)(G, $),
                onToggleYearPicker: G => N(w)($, G?.flow, G?.show)
            }), ea({
                _: 2
            }, [Ce(N(i), (G, ee) => ({
                name: G,
                fn: ye(K => [ne(I.$slots, G, pt(qt(K)))])
            }))]), 1040, ["items", "instance", "show-year-picker", "year", "is-disabled", "onHandleYear", "onYearSelect", "onToggleYearPicker"])]), C("div", gP, [(m(!0),
            y(ge, null, Ce(N(v)($), (G, ee) => (m(),
            y("div", {
                key: ee
            }, [C("button", {
                type: "button",
                class: J(["dp--qr-btn", {
                    "dp--qr-btn-active": G.active,
                    "dp--qr-btn-between": G.isBetween,
                    "dp--qr-btn-disabled": G.disabled,
                    "dp--highlighted": G.highlighted
                }]),
                disabled: G.disabled,
                onClick: K => N(T)(G.value, $, G.disabled),
                onMouseover: K => N(D)(G.value)
            }, [I.$slots.quarter ? ne(I.$slots, "quarter", {
                key: 0,
                value: G.value,
                text: G.text
            }) : (m(),
            y(ge, {
                key: 1
            }, [qe(ae(G.text), 1)], 64))], 42, pP)]))), 128))])], 4)]),
            _: 3
        }, 8, ["multi-calendars"]))
    }
})
  , fP = ["id"]
  , hP = {
    key: 0,
    class: "dp__sidebar_left"
}
  , yP = {
    key: 1,
    class: "dp--preset-dates"
}
  , bP = ["onClick", "onKeydown"]
  , _P = {
    key: 2,
    class: "dp__sidebar_right"
}
  , wP = {
    key: 3,
    class: "dp__action_extra"
}
  , Ac = re({
    compatConfig: {
        MODE: 3
    },
    __name: "DatepickerMenu",
    props: {
        ...Ko,
        shadow: {
            type: Boolean,
            default: !1
        },
        openOnTop: {
            type: Boolean,
            default: !1
        },
        internalModelValue: {
            type: [Date, Array],
            default: null
        },
        arrMapValues: {
            type: Object,
            default: () => ({})
        },
        noOverlayFocus: {
            type: Boolean,
            default: !1
        }
    },
    emits: ["close-picker", "select-date", "auto-apply", "time-update", "flow-step", "update-month-year", "invalid-select", "update:internal-model-value", "recalculate-position", "invalid-fixed-range", "tooltip-open", "tooltip-close", "time-picker-open", "time-picker-close", "am-pm-change", "range-start", "range-end", "auto-apply-invalid", "date-update", "invalid-date"],
    setup(t, {expose: n, emit: a}) {
        const e = a
          , r = t
          , o = u( () => {
            const {openOnTop: X, ...ce} = r;
            return {
                ...ce,
                flowStep: ee.value,
                noOverlayFocus: r.noOverlayFocus
            }
        }
        )
          , {setMenuFocused: i, setShiftKey: s, control: l} = wd()
          , d = Nn()
          , {defaultedTextInput: p, defaultedInline: g, defaultedConfig: v} = Ot(r)
          , f = E(null)
          , b = E(0)
          , D = E(null)
          , T = E(null)
          , w = E(!1)
          , S = E(null);
        Pe( () => {
            if (!r.shadow) {
                w.value = !0,
                B(),
                window.addEventListener("resize", B);
                const X = Rt(D);
                if (X && !p.value.enabled && !g.value.enabled && (i(!0),
                Y()),
                X) {
                    const ce = Me => {
                        v.value.allowPreventDefault && Me.preventDefault(),
                        cn(Me, v.value, !0)
                    }
                    ;
                    X.addEventListener("pointerdown", ce),
                    X.addEventListener("mousedown", ce)
                }
            }
        }
        ),
        ro( () => {
            window.removeEventListener("resize", B)
        }
        );
        const B = () => {
            const X = Rt(T);
            X && (b.value = X.getBoundingClientRect().width)
        }
          , {arrowRight: I, arrowLeft: R, arrowDown: $, arrowUp: G} = bn()
          , {flowStep: ee, updateFlowStep: K, childMount: M, resetFlow: j} = pI(r, e, S)
          , q = u( () => r.monthPicker ? AI : r.yearPicker ? xI : r.timePicker ? KI : r.quarterPicker ? vP : dP)
          , Y = () => {
            const X = Rt(D);
            X && X.focus({
                preventScroll: !0
            })
        }
          , L = u( () => {
            var X;
            return ((X = S.value) == null ? void 0 : X.getSidebarProps()) || {}
        }
        )
          , _ = () => {
            r.openOnTop && e("recalculate-position")
        }
          , A = oa(d, "action")
          , P = u( () => r.monthPicker || r.yearPicker ? oa(d, "monthYear") : r.timePicker ? oa(d, "timePicker") : oa(d, "shared"))
          , H = u( () => r.openOnTop ? "dp__arrow_bottom" : "dp__arrow_top")
          , k = u( () => ({
            dp__menu_disabled: r.disabled,
            dp__menu_readonly: r.readonly
        }))
          , h = u( () => ({
            dp__menu: !0,
            dp__menu_index: !g.value.enabled,
            dp__relative: g.value.enabled,
            [r.menuClassName]: !!r.menuClassName
        }))
          , W = X => {
            cn(X, v.value, !0)
        }
          , U = () => {
            r.escClose && e("close-picker")
        }
          , te = X => {
            if (r.arrowNavigation) {
                if (X === "up")
                    return G();
                if (X === "down")
                    return $();
                if (X === "left")
                    return R();
                if (X === "right")
                    return I()
            } else
                X === "left" || X === "up" ? fe("handleArrow", "left", 0, X === "up") : fe("handleArrow", "right", 0, X === "down")
        }
          , Q = X => {
            s(X.shiftKey),
            !r.disableMonthYearSelect && X.code === "Tab" && X.target.classList.contains("dp__menu") && l.value.shiftKeyInMenu && (X.preventDefault(),
            cn(X, v.value, !0),
            e("close-picker"))
        }
          , V = () => {
            Y(),
            e("time-picker-close")
        }
          , O = X => {
            var ce, Me, de;
            (ce = S.value) == null || ce.toggleTimePicker(!1, !1),
            (Me = S.value) == null || Me.toggleMonthPicker(!1, !1, X),
            (de = S.value) == null || de.toggleYearPicker(!1, !1, X)
        }
          , pe = (X, ce=0) => {
            var Me, de, Ue;
            return X === "month" ? (Me = S.value) == null ? void 0 : Me.toggleMonthPicker(!1, !0, ce) : X === "year" ? (de = S.value) == null ? void 0 : de.toggleYearPicker(!1, !0, ce) : X === "time" ? (Ue = S.value) == null ? void 0 : Ue.toggleTimePicker(!0, !1) : O(ce)
        }
          , fe = (X, ...ce) => {
            var Me, de;
            (Me = S.value) != null && Me[X] && ((de = S.value) == null || de[X](...ce))
        }
          , ue = () => {
            fe("selectCurrentDate")
        }
          , Oe = (X, ce) => {
            fe("presetDate", X, ce)
        }
          , he = () => {
            fe("clearHoverDate")
        }
        ;
        return n({
            updateMonthYear: (X, ce) => {
                fe("updateMonthYear", X, ce)
            }
            ,
            switchView: pe
        }),
        (X, ce) => {
            var Me;
            return m(),
            y("div", {
                id: X.uid ? `dp-menu-${X.uid}` : void 0,
                ref_key: "dpMenuRef",
                ref: D,
                tabindex: "0",
                role: "dialog",
                class: J(h.value),
                onMouseleave: he,
                onClick: W,
                onKeydown: [He(U, ["esc"]), ce[18] || (ce[18] = He(xe(de => te("left"), ["prevent"]), ["left"])), ce[19] || (ce[19] = He(xe(de => te("up"), ["prevent"]), ["up"])), ce[20] || (ce[20] = He(xe(de => te("down"), ["prevent"]), ["down"])), ce[21] || (ce[21] = He(xe(de => te("right"), ["prevent"]), ["right"])), Q]
            }, [(X.disabled || X.readonly) && N(g).enabled ? (m(),
            y("div", {
                key: 0,
                class: J(k.value)
            }, null, 2)) : x("", !0), !N(g).enabled && !X.teleportCenter ? (m(),
            y("div", {
                key: 1,
                class: J(H.value)
            }, null, 2)) : x("", !0), C("div", {
                ref_key: "innerMenuRef",
                ref: T,
                class: J({
                    dp__menu_content_wrapper: ((Me = X.presetDates) == null ? void 0 : Me.length) || !!X.$slots["left-sidebar"] || !!X.$slots["right-sidebar"]
                }),
                style: ze({
                    "--dp-menu-width": `${b.value}px`
                })
            }, [X.$slots["left-sidebar"] ? (m(),
            y("div", hP, [ne(X.$slots, "left-sidebar", pt(qt(L.value)))])) : x("", !0), X.presetDates.length ? (m(),
            y("div", yP, [(m(!0),
            y(ge, null, Ce(X.presetDates, (de, Ue) => (m(),
            y(ge, {
                key: Ue
            }, [de.slot ? ne(X.$slots, de.slot, {
                key: 0,
                presetDate: Oe,
                label: de.label,
                value: de.value
            }) : (m(),
            y("button", {
                key: 1,
                type: "button",
                style: ze(de.style || {}),
                class: "dp__btn dp--preset-range",
                onClick: xe(nt => Oe(de.value, de.noTz), ["prevent"]),
                onKeydown: [He(xe(nt => Oe(de.value, de.noTz), ["prevent"]), ["enter"]), He(xe(nt => Oe(de.value, de.noTz), ["prevent"]), ["space"])]
            }, ae(de.label), 45, bP))], 64))), 128))])) : x("", !0), C("div", {
                ref_key: "calendarWrapperRef",
                ref: f,
                class: "dp__instance_calendar",
                role: "document"
            }, [(m(),
            z(dn(q.value), Je({
                ref_key: "dynCmpRef",
                ref: S
            }, o.value, {
                "flow-step": N(ee),
                onMount: N(M),
                onUpdateFlowStep: N(K),
                onResetFlow: N(j),
                onFocusMenu: Y,
                onSelectDate: ce[0] || (ce[0] = de => X.$emit("select-date")),
                onDateUpdate: ce[1] || (ce[1] = de => X.$emit("date-update", de)),
                onTooltipOpen: ce[2] || (ce[2] = de => X.$emit("tooltip-open", de)),
                onTooltipClose: ce[3] || (ce[3] = de => X.$emit("tooltip-close", de)),
                onAutoApply: ce[4] || (ce[4] = de => X.$emit("auto-apply", de)),
                onRangeStart: ce[5] || (ce[5] = de => X.$emit("range-start", de)),
                onRangeEnd: ce[6] || (ce[6] = de => X.$emit("range-end", de)),
                onInvalidFixedRange: ce[7] || (ce[7] = de => X.$emit("invalid-fixed-range", de)),
                onTimeUpdate: ce[8] || (ce[8] = de => X.$emit("time-update")),
                onAmPmChange: ce[9] || (ce[9] = de => X.$emit("am-pm-change", de)),
                onTimePickerOpen: ce[10] || (ce[10] = de => X.$emit("time-picker-open", de)),
                onTimePickerClose: V,
                onRecalculatePosition: _,
                onUpdateMonthYear: ce[11] || (ce[11] = de => X.$emit("update-month-year", de)),
                onAutoApplyInvalid: ce[12] || (ce[12] = de => X.$emit("auto-apply-invalid", de)),
                onInvalidDate: ce[13] || (ce[13] = de => X.$emit("invalid-date", de)),
                "onUpdate:internalModelValue": ce[14] || (ce[14] = de => X.$emit("update:internal-model-value", de))
            }), ea({
                _: 2
            }, [Ce(P.value, (de, Ue) => ({
                name: de,
                fn: ye(nt => [ne(X.$slots, de, pt(qt({
                    ...nt
                })))])
            }))]), 1040, ["flow-step", "onMount", "onUpdateFlowStep", "onResetFlow"]))], 512), X.$slots["right-sidebar"] ? (m(),
            y("div", _P, [ne(X.$slots, "right-sidebar", pt(qt(L.value)))])) : x("", !0), X.$slots["action-extra"] ? (m(),
            y("div", wP, [X.$slots["action-extra"] ? ne(X.$slots, "action-extra", {
                key: 0,
                selectCurrentDate: ue
            }) : x("", !0)])) : x("", !0)], 6), !X.autoApply || N(v).keepActionRow ? (m(),
            z(kI, Je({
                key: 2,
                "menu-mount": w.value
            }, o.value, {
                "calendar-width": b.value,
                onClosePicker: ce[15] || (ce[15] = de => X.$emit("close-picker")),
                onSelectDate: ce[16] || (ce[16] = de => X.$emit("select-date")),
                onInvalidSelect: ce[17] || (ce[17] = de => X.$emit("invalid-select")),
                onSelectNow: ue
            }), ea({
                _: 2
            }, [Ce(N(A), (de, Ue) => ({
                name: de,
                fn: ye(nt => [ne(X.$slots, de, pt(qt({
                    ...nt
                })))])
            }))]), 1040, ["menu-mount", "calendar-width"])) : x("", !0)], 42, fP)
        }
    }
})
  , kP = typeof window < "u" ? window : void 0
  , Ei = () => {}
  , SP = t => Lc() ? (Rc(t),
!0) : !1
  , TP = (t, n, a, e) => {
    if (!t)
        return Ei;
    let r = Ei;
    const o = Fe( () => N(t), s => {
        r(),
        s && (s.addEventListener(n, a, e),
        r = () => {
            s.removeEventListener(n, a, e),
            r = Ei
        }
        )
    }
    , {
        immediate: !0,
        flush: "post"
    })
      , i = () => {
        o(),
        r()
    }
    ;
    return SP(i),
    i
}
  , CP = (t, n, a, e={}) => {
    const {window: r=kP, event: o="pointerdown"} = e;
    return r ? TP(r, o, i => {
        const s = Rt(t)
          , l = Rt(n);
        !s || !l || s === i.target || i.composedPath().includes(s) || i.composedPath().includes(l) || a(i)
    }
    , {
        passive: !0
    }) : void 0
}
  , IP = re({
    compatConfig: {
        MODE: 3
    },
    __name: "VueDatePicker",
    props: {
        ...Ko
    },
    emits: ["update:model-value", "update:model-timezone-value", "text-submit", "closed", "cleared", "open", "focus", "blur", "internal-model-change", "recalculate-position", "flow-step", "update-month-year", "invalid-select", "invalid-fixed-range", "tooltip-open", "tooltip-close", "time-picker-open", "time-picker-close", "am-pm-change", "range-start", "range-end", "date-update", "invalid-date"],
    setup(t, {expose: n, emit: a}) {
        const e = a
          , r = t
          , o = Nn()
          , i = E(!1)
          , s = An(r, "modelValue")
          , l = An(r, "timezone")
          , d = E(null)
          , p = E(null)
          , g = E(null)
          , v = E(!1)
          , f = E(null)
          , b = E(!1)
          , D = E(!1)
          , {setMenuFocused: T, setShiftKey: w} = wd()
          , {clearArrowNav: S} = bn()
          , {mapDatesArrToMap: B, validateDate: I, isValidTime: R} = Vn(r)
          , {defaultedTransitions: $, defaultedTextInput: G, defaultedInline: ee, defaultedConfig: K} = Ot(r)
          , {menuTransition: M, showTransition: j} = co($);
        Pe( () => {
            te(r.modelValue),
            Nt().then( () => {
                if (!ee.value.enabled) {
                    const me = k(f.value);
                    me?.addEventListener("scroll", X),
                    window?.addEventListener("resize", ce)
                }
            }
            ),
            ee.value.enabled && (i.value = !0),
            window?.addEventListener("keyup", Me),
            window?.addEventListener("keydown", de)
        }
        );
        const q = u( () => B());
        ro( () => {
            if (!ee.value.enabled) {
                const me = k(f.value);
                me?.removeEventListener("scroll", X),
                window?.removeEventListener("resize", ce)
            }
            window?.removeEventListener("keyup", Me),
            window?.removeEventListener("keydown", de)
        }
        );
        const Y = oa(o, "all", r.presetDates)
          , L = oa(o, "input");
        Fe([s, l], () => {
            te(s.value)
        }
        , {
            deep: !0
        });
        const {openOnTop: _, menuStyle: A, xCorrect: P, setMenuPosition: H, getScrollableParent: k, shadowRender: h} = uI({
            menuRef: d,
            menuRefInner: p,
            inputRef: g,
            pickerWrapperRef: f,
            inline: ee,
            emit: e,
            props: r,
            slots: o
        })
          , {inputValue: W, internalModelValue: U, parseExternalModelValue: te, emitModelValue: Q, formatInputValue: V, checkBeforeEmit: O} = lI(e, r, v)
          , pe = u( () => ({
            dp__main: !0,
            dp__theme_dark: r.dark,
            dp__theme_light: !r.dark,
            dp__flex_display: ee.value.enabled,
            dp__flex_display_with_input: ee.value.input
        }))
          , fe = u( () => r.dark ? "dp__theme_dark" : "dp__theme_light")
          , ue = u( () => ({
            to: typeof r.teleport == "boolean" ? "body" : r.teleport,
            disabled: !r.teleport || ee.value.enabled
        }))
          , Oe = u( () => ({
            class: "dp__outer_menu_wrap"
        }))
          , he = u( () => ee.value.enabled && (r.timePicker || r.monthPicker || r.yearPicker || r.quarterPicker))
          , X = () => {
            i.value && (K.value.closeOnScroll ? rt() : H())
        }
          , ce = () => {
            i.value && H()
        }
          , Me = me => {
            me.key === "Tab" && !ee.value.enabled && !r.teleport && K.value.tabOutClosesMenu && (f.value.contains(document.activeElement) || rt()),
            D.value = me.shiftKey
        }
          , de = me => {
            D.value = me.shiftKey
        }
          , Ue = () => {
            !r.disabled && !r.readonly && (h(Ac, r),
            H(!1),
            i.value = !0,
            i.value && e("open"),
            i.value || ot(),
            te(r.modelValue))
        }
          , nt = () => {
            var me;
            W.value = "",
            ot(),
            (me = g.value) == null || me.setParsedDate(null),
            e("update:model-value", null),
            e("update:model-timezone-value", null),
            e("cleared"),
            K.value.closeOnClearValue && rt()
        }
          , Ft = () => {
            const me = U.value;
            return !me || !Array.isArray(me) && I(me) ? !0 : Array.isArray(me) ? r.multiDates || me.length === 2 && I(me[0]) && I(me[1]) ? !0 : r.partialRange && !r.timePicker ? I(me[0]) : !1 : !1
        }
          , St = () => {
            O() && Ft() ? (Q(),
            rt()) : e("invalid-select", U.value)
        }
          , Tt = me => {
            Ee(),
            Q(),
            K.value.closeOnAutoApply && !me && rt()
        }
          , Ee = () => {
            g.value && G.value.enabled && g.value.setParsedDate(U.value)
        }
          , je = (me=!1) => {
            r.autoApply && R(U.value) && Ft() && (r.range && Array.isArray(U.value) ? (r.partialRange || U.value.length === 2) && Tt(me) : Tt(me))
        }
          , ot = () => {
            G.value.enabled || (U.value = null)
        }
          , rt = () => {
            ee.value.enabled || (i.value && (i.value = !1,
            P.value = !1,
            T(!1),
            w(!1),
            S(),
            e("closed"),
            W.value && te(s.value)),
            ot(),
            e("blur"))
        }
          , vt = (me, Re, De=!1) => {
            if (!me) {
                U.value = null;
                return
            }
            const xt = Array.isArray(me) ? !me.some(en => !I(en)) : I(me)
              , Yt = R(me);
            xt && Yt && (U.value = me,
            Re && (b.value = De,
            St(),
            e("text-submit")))
        }
          , gt = () => {
            r.autoApply && R(U.value) && Q(),
            Ee()
        }
          , Lt = () => i.value ? rt() : Ue()
          , F = me => {
            U.value = me
        }
          , Z = () => {
            G.value.enabled && (v.value = !0,
            V()),
            e("focus")
        }
          , Se = () => {
            if (G.value.enabled && (v.value = !1,
            te(r.modelValue),
            b.value)) {
                const me = FC(f.value, D.value);
                me?.focus()
            }
            e("blur")
        }
          , Be = me => {
            p.value && p.value.updateMonthYear(0, {
                month: Tc(me.month),
                year: Tc(me.year)
            })
        }
          , We = me => {
            te(me ?? r.modelValue)
        }
          , _t = (me, Re) => {
            var De;
            (De = p.value) == null || De.switchView(me, Re)
        }
          , Ht = me => K.value.onClickOutside ? K.value.onClickOutside(me) : rt();
        return CP(d, g, () => Ht(Ft)),
        n({
            closeMenu: rt,
            selectDate: St,
            clearValue: nt,
            openMenu: Ue,
            onScroll: X,
            formatInputValue: V,
            updateInternalModelValue: F,
            setMonthYear: Be,
            parseModel: We,
            switchView: _t,
            toggleMenu: Lt
        }),
        (me, Re) => (m(),
        y("div", {
            ref_key: "pickerWrapperRef",
            ref: f,
            class: J(pe.value),
            "data-datepicker-instance": ""
        }, [Ae(yI, Je({
            ref_key: "inputRef",
            ref: g,
            "input-value": N(W),
            "onUpdate:inputValue": Re[0] || (Re[0] = De => Ks(W) ? W.value = De : null),
            "is-menu-open": i.value
        }, me.$props, {
            onClear: nt,
            onOpen: Ue,
            onSetInputDate: vt,
            onSetEmptyDate: N(Q),
            onSelectDate: St,
            onToggle: Lt,
            onClose: rt,
            onFocus: Z,
            onBlur: Se,
            onRealBlur: Re[1] || (Re[1] = De => v.value = !1)
        }), ea({
            _: 2
        }, [Ce(N(L), (De, xt) => ({
            name: De,
            fn: ye(Yt => [ne(me.$slots, De, pt(qt(Yt)))])
        }))]), 1040, ["input-value", "is-menu-open", "onSetEmptyDate"]), Ae(Ld, pt(qt(ue.value)), {
            default: ye( () => [Ae(ra, {
                name: N(M)(N(_)),
                css: N(j) && !N(ee).enabled
            }, {
                default: ye( () => [i.value ? (m(),
                y("div", Je({
                    key: 0,
                    ref_key: "dpWrapMenuRef",
                    ref: d
                }, Oe.value, {
                    class: {
                        "dp--menu-wrapper": !N(ee).enabled
                    },
                    style: N(ee).enabled ? void 0 : N(A)
                }), [Ae(Ac, Je({
                    ref_key: "dpMenuRef",
                    ref: p
                }, me.$props, {
                    "internal-model-value": N(U),
                    "onUpdate:internalModelValue": Re[2] || (Re[2] = De => Ks(U) ? U.value = De : null),
                    class: {
                        [fe.value]: !0,
                        "dp--menu-wrapper": me.teleport
                    },
                    "open-on-top": N(_),
                    "arr-map-values": q.value,
                    "no-overlay-focus": he.value,
                    onClosePicker: rt,
                    onSelectDate: St,
                    onAutoApply: je,
                    onTimeUpdate: gt,
                    onFlowStep: Re[3] || (Re[3] = De => me.$emit("flow-step", De)),
                    onUpdateMonthYear: Re[4] || (Re[4] = De => me.$emit("update-month-year", De)),
                    onInvalidSelect: Re[5] || (Re[5] = De => me.$emit("invalid-select", N(U))),
                    onAutoApplyInvalid: Re[6] || (Re[6] = De => me.$emit("invalid-select", De)),
                    onInvalidFixedRange: Re[7] || (Re[7] = De => me.$emit("invalid-fixed-range", De)),
                    onRecalculatePosition: N(H),
                    onTooltipOpen: Re[8] || (Re[8] = De => me.$emit("tooltip-open", De)),
                    onTooltipClose: Re[9] || (Re[9] = De => me.$emit("tooltip-close", De)),
                    onTimePickerOpen: Re[10] || (Re[10] = De => me.$emit("time-picker-open", De)),
                    onTimePickerClose: Re[11] || (Re[11] = De => me.$emit("time-picker-close", De)),
                    onAmPmChange: Re[12] || (Re[12] = De => me.$emit("am-pm-change", De)),
                    onRangeStart: Re[13] || (Re[13] = De => me.$emit("range-start", De)),
                    onRangeEnd: Re[14] || (Re[14] = De => me.$emit("range-end", De)),
                    onDateUpdate: Re[15] || (Re[15] = De => me.$emit("date-update", De)),
                    onInvalidDate: Re[16] || (Re[16] = De => me.$emit("invalid-date", De))
                }), ea({
                    _: 2
                }, [Ce(N(Y), (De, xt) => ({
                    name: De,
                    fn: ye(Yt => [ne(me.$slots, De, pt(qt({
                        ...Yt
                    })))])
                }))]), 1040, ["internal-model-value", "class", "open-on-top", "arr-map-values", "no-overlay-focus", "onRecalculatePosition"])], 16)) : x("", !0)]),
                _: 3
            }, 8, ["name", "css"])]),
            _: 3
        }, 16)], 2))
    }
})
  , Ws = ( () => {
    const t = IP;
    return t.install = n => {
        n.component("Vue3DatePicker", t)
    }
    ,
    t
}
)()
  , PP = Object.freeze(Object.defineProperty({
    __proto__: null,
    default: Ws
}, Symbol.toStringTag, {
    value: "Module"
}));
Object.entries(PP).forEach( ([t,n]) => {
    t !== "default" && (Ws[t] = n)
}
);
const EP = {
    props: {
        month: {
            type: Number,
            default: 0
        },
        year: {
            type: Number,
            default: 0
        },
        customProps: {
            type: Object,
            default: null
        }
    },
    emits: ["update-month-year"],
    computed: {
        getLanguage() {
            return this.customProps.language === "br" ? "pt-BR" : this.customProps.language
        },
        calendarTitle() {
            return new Date(this.year,this.month).toLocaleDateString(this.getLanguage, {
                year: "numeric",
                month: "long"
            })
        }
    },
    methods: {
        onNextClick() {
            let t = this.month
              , n = this.year;
            this.month === 11 ? (t = 0,
            n = this.year + 1) : t += 1,
            this.updateDate(t, n)
        },
        onPreviousClick() {
            let t = this.month
              , n = this.year;
            this.month === 0 ? (t = 11,
            n = this.year - 1) : t -= 1,
            this.updateDate(t, n)
        },
        updateDate(t, n) {
            this.$emit("update-month-year", {
                instance: 0,
                month: t,
                year: n
            })
        }
    }
}
  , Pd = t => (sa("data-v-707c7e3f"),
t = t(),
la(),
t)
  , DP = {
    class: "date-picker-header"
}
  , MP = Pd( () => C("div", {
    class: "date-picker-header__arrow"
}, [C("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
}, [C("path", {
    d: "M12.5 5L7.5 10L12.5 15",
    stroke: "black",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
})])], -1))
  , AP = [MP]
  , OP = Pd( () => C("div", {
    class: "date-picker-header__arrow date-picker-header__arrow--next"
}, [C("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 20 20",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
}, [C("path", {
    d: "M12.5 5L7.5 10L12.5 15",
    stroke: "black",
    "stroke-width": "1.5",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
})])], -1))
  , xP = [OP];
function BP(t, n, a, e, r, o) {
    return m(),
    y("div", DP, [C("button", {
        class: "date-picker-header__button",
        onClick: n[0] || (n[0] = (...i) => o.onPreviousClick && o.onPreviousClick(...i))
    }, AP), qe(" " + ae(o.calendarTitle) + " ", 1), C("button", {
        class: "date-picker-header__button",
        onClick: n[1] || (n[1] = (...i) => o.onNextClick && o.onNextClick(...i))
    }, xP)])
}
const LP = oe(EP, [["render", BP], ["__scopeId", "data-v-707c7e3f"]])
  , RP = re({
    components: {
        ModalLayout: pr,
        DatePicker: Ws
    },
    props: {
        translations: {
            type: Object,
            default: () => {}
        },
        language: {
            type: String,
            default: "en"
        },
        isCartVisible: {
            type: Boolean,
            default: !1
        },
        isInPreviewMode: {
            type: Boolean,
            default: !1
        }
    },
    setup(t) {
        const {isStoreTypeZyro: n, products: a, selectedBookingProduct: e, shoppingCartItems: r, setSelectedBookingProduct: o} = Ia()
          , {openEcommerceModal: i} = Ca()
          , {initiateCheckout: s} = io()
          , l = u( () => LP);
        return {
            initiateCheckout: s,
            openEcommerceModal: i,
            datePickerHeader: l,
            isStoreTypeZyro: n,
            products: a,
            selectedBookingProduct: e,
            shoppingCartItems: r,
            setSelectedBookingProduct: o
        }
    },
    data() {
        return {
            isTimeSelected: !1,
            selectedTimeSlot: null,
            selectedDate: new Date,
            timeSlots: [],
            isSlotsLoading: !1,
            isCalendarLoading: !1,
            isCheckoutLoading: !1,
            disabledDates: []
        }
    },
    computed: {
        isModalEnabled() {
            return this.isStoreTypeZyro && !!this.selectedBookingProduct
        },
        bookingEvent() {
            return this.selectedBookingProduct?.variants[0].booking_event
        },
        title() {
            return this.selectedBookingProduct?.title
        },
        location() {
            return this.bookingEvent?.location
        },
        duration() {
            return this.bookingEvent?.length || null
        },
        durationUnit() {
            return this.bookingEvent?.length_unit
        },
        aggregatedDuration() {
            const t = this.durationUnit === Ni ? this.duration / 1e3 / 60 / 60 : this.duration / 1e3 / 60
              , n = this.durationUnit === Ni ? this.translations.hourShort : this.translations.minuteShort;
            return `${t} ${n}`
        },
        eventStartDate() {
            return this.selectedTimeSlot ? new Date(this.selectedTimeSlot) : null
        },
        eventEndDate() {
            if (!this.selectedTimeSlot)
                return null;
            const n = this.eventStartDate.getTime() + this.duration;
            return new Date(n)
        },
        calculatedTime() {
            if (!this.selectedTimeSlot)
                return "--:--";
            const t = this.getVisibleDate(this.eventStartDate)
              , n = this.getVisibleDate(this.eventEndDate);
            return `${t} - ${n}`
        },
        dayNames() {
            const t = []
              , n = new Date;
            n.setDate(n.getDate() - n.getDay());
            for (let a = 0; a < 7; a += 1)
                n.setDate(n.getDate() + 1),
                t.push(new Date(n).toLocaleDateString(this.getLanguage, {
                    weekday: "short"
                }));
            return t
        },
        formattedSelectedDate() {
            const t = this.selectedDate?.toLocaleDateString(this.language);
            if (this.eventStartDate?.toDateString() !== this.eventEndDate?.toDateString()) {
                const n = this.eventEndDate.toLocaleDateString(this.language);
                return `${t} - ${n}`
            }
            return t
        },
        selectedMonthAndWeekday() {
            if (!this.selectedDate)
                return null;
            const t = this.selectedDate?.toLocaleDateString(this.getLanguage, {
                month: "long",
                day: "numeric"
            });
            return `${this.selectedDate?.toLocaleDateString(this.getLanguage, {
                weekday: "long"
            })}, ${t}`
        },
        getLanguage() {
            switch (this.language) {
            case "br":
                return "pt-BR";
            case "ar":
                return "es-AR";
            default:
                return this.language
            }
        }
    },
    watch: {
        async selectedDate() {
            this.selectedTimeSlot = null,
            this.isTimeSelected = !1,
            await this.loadTimeSlots()
        }
    },
    async mounted() {
        this.isModalEnabled && this.setDefaultData()
    },
    methods: {
        closeEcommerceModal() {
            this.setSelectedBookingProduct(null),
            this.$refs.modal.handleCloseModalAction()
        },
        async setDefaultData() {
            if (await this.loadAvailability(),
            this.disabledDates.some(t => t.toDateString() === this.selectedDate.toDateString())) {
                const n = this.getAllDaysInCurrentMonth().filter(a => !this.disabledDates.some(e => e.toDateString() === a.toDateString())).sort( (a, e) => new Date(a.date) - new Date(e.date));
                this.selectedDate = n.shift()
            }
            await this.loadTimeSlots()
        },
        async handleSubmit() {
            if (ar() || this.isInPreviewMode) {
                this.openEcommerceModal("EcommerceMessageButtonDisabled");
                return
            }
            this.isCheckoutLoading = !0;
            const t = {
                ...this.selectedBookingProduct
            }
              , {timeZone: n} = Intl.DateTimeFormat().resolvedOptions();
            t.variants[0].booking_event = {
                ...t.variants[0].booking_event,
                time_slot: this.selectedTimeSlot,
                time_zone: n,
                length: t.variants[0].booking_event.length,
                length_unit: t.variants[0].booking_event.length_unit,
                date: this.selectedDate
            },
            await this.initiateCheckout([t]),
            this.isCheckoutLoading = !1,
            this.closeEcommerceModal()
        },
        selectTimeSlot(t) {
            this.isTimeSelected = !0,
            this.selectedTimeSlot = t
        },
        async loadTimeSlots() {
            this.isSlotsLoading = !0;
            const t = new Intl.DateTimeFormat("lt").format(this.selectedDate);
            this.timeSlots = await xp(this.bookingEvent.id, t).then(n => (this.isSlotsLoading = !1,
            n))
        },
        async loadAvailability({data: t={}}={}) {
            this.isCalendarLoading = !0;
            const n = Object.keys(t).length ? new Date(t.year,t.month) : this.selectedDate
              , a = new Date(n.getFullYear(),n.getMonth() + 1,0);
            this.disabledDates = await Bp({
                bookingId: this.bookingEvent.id,
                fromDate: new Intl.DateTimeFormat("lt").format(n),
                toDate: new Intl.DateTimeFormat("lt").format(a)
            }).then(e => (this.isCalendarLoading = !1,
            e.map(r => {
                const o = r.split("-");
                return new Date(o[0],o[1] - 1,o[2])
            }
            )))
        },
        getAllDaysInCurrentMonth() {
            const t = new Date().getMonth()
              , n = new Date(new Date().getFullYear(),t,new Date().getDate())
              , a = [];
            for (; n.getMonth() === t; )
                a.push(new Date(n)),
                n.setDate(n.getDate() + 1);
            return a
        },
        getVisibleDate(t) {
            return t.toLocaleTimeString(this.getLanguage, {
                hour: "2-digit",
                minute: "2-digit"
            })
        }
    }
})
  , NP = {
    class: "ecommerce-booking-modal"
}
  , HP = {
    class: "ecommerce-booking-modal__content"
}
  , VP = {
    class: "ecommerce-booking-modal__info"
}
  , UP = {
    class: "ecommerce-booking-modal__title"
}
  , FP = {
    class: "ecommerce-booking-modal__icons"
}
  , jP = {
    class: "ecommerce-booking-modal__text-wrapper"
}
  , GP = C("div", {
    class: "ecommerce-booking-modal__icon"
}, [C("svg", {
    width: "16",
    height: "18",
    viewBox: "0 0 16 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
}, [C("path", {
    d: "M5.5 8.3335H3.83333V10.0002H5.5V8.3335ZM8.83333 8.3335H7.16667V10.0002H8.83333V8.3335ZM12.1667 8.3335H10.5V10.0002H12.1667V8.3335ZM13.8333 2.50016H13V0.833496H11.3333V2.50016H4.66667V0.833496H3V2.50016H2.16667C1.24167 2.50016 0.5 3.25016 0.5 4.16683V15.8335C0.5 16.2755 0.675595 16.6994 0.988155 17.012C1.30072 17.3246 1.72464 17.5002 2.16667 17.5002H13.8333C14.2754 17.5002 14.6993 17.3246 15.0118 17.012C15.3244 16.6994 15.5 16.2755 15.5 15.8335V4.16683C15.5 3.7248 15.3244 3.30088 15.0118 2.98832C14.6993 2.67576 14.2754 2.50016 13.8333 2.50016ZM13.8333 15.8335H2.16667V6.66683H13.8333V15.8335Z",
    fill: "#474B4F"
})])], -1)
  , YP = {
    class: "ecommerce-booking-modal__text"
}
  , WP = {
    class: "ecommerce-booking-modal__text-wrapper"
}
  , $P = C("div", {
    class: "ecommerce-booking-modal__icon"
}, [C("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
}, [C("path", {
    d: "M9.00001 15.6665C12.6667 15.6665 15.6667 12.6665 15.6667 8.99984C15.6667 5.33317 12.6667 2.33317 9.00001 2.33317C5.33334 2.33317 2.33334 5.33317 2.33334 8.99984C2.33334 12.6665 5.33334 15.6665 9.00001 15.6665ZM9.00001 0.666504C13.5833 0.666504 17.3333 4.4165 17.3333 8.99984C17.3333 13.5832 13.5833 17.3332 9.00001 17.3332C4.41667 17.3332 0.666672 13.5832 0.666672 8.99984C0.666672 4.4165 4.41667 0.666504 9.00001 0.666504ZM13.1667 8.58317V9.83317H8.16667V4.83317H9.41667V8.58317H13.1667Z",
    fill: "#474B4F"
})])], -1)
  , qP = {
    class: "ecommerce-booking-modal__text"
}
  , zP = {
    class: "ecommerce-booking-modal__text-wrapper"
}
  , ZP = C("div", {
    class: "ecommerce-booking-modal__icon"
}, [C("svg", {
    width: "12",
    height: "18",
    viewBox: "0 0 12 18",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
}, [C("path", {
    d: "M6.00001 2.33317C8.33334 2.33317 10.1667 4.1665 10.1667 6.49984C10.1667 8.9165 7.75001 12.4998 6.00001 14.7498C4.25001 12.4998 1.83334 8.9165 1.83334 6.49984C1.83334 4.1665 3.66667 2.33317 6.00001 2.33317ZM6.00001 0.666504C2.75001 0.666504 0.166672 3.24984 0.166672 6.49984C0.166672 10.8332 6.00001 17.3332 6.00001 17.3332C6.00001 17.3332 11.8333 10.8332 11.8333 6.49984C11.8333 3.24984 9.25001 0.666504 6.00001 0.666504ZM5.41667 10.6665L9.50001 6.49984L8.33334 5.33317L5.41667 8.33317L4.08334 6.99984L2.91667 8.1665L5.41667 10.6665Z",
    fill: "#474B4F"
})])], -1)
  , KP = {
    class: "ecommerce-booking-modal__text"
}
  , QP = {
    class: "ecommerce-booking-modal__availability"
}
  , XP = {
    class: "ecommerce-booking-modal__time-title"
}
  , JP = {
    class: "ecommerce-booking-modal__calendar-wrapper"
}
  , eE = {
    class: "ecommerce-booking-modal__time-wrapper"
}
  , tE = {
    class: "ecommerce-booking-modal__selected-day"
}
  , aE = {
    class: "ecommerce-booking-modal__time-slot-wrapper"
}
  , nE = {
    key: 0,
    class: "ecommerce-booking-modal__time-slot-loader"
}
  , rE = ["onClick"]
  , oE = {
    class: "ecommerce-booking-modal__buttons"
}
  , iE = ["disabled"];
function sE(t, n, a, e, r, o) {
    const i = mt("DatePicker")
      , s = mt("ModalLayout")
      , l = lt("qa");
    return t.isModalEnabled ? (m(),
    z(s, {
        key: 0,
        ref: "modal",
        padding: "0",
        "max-width": "1048px",
        "mobile-height": "100%",
        width: "100vw",
        "background-color": "transparent"
    }, {
        default: ye( () => [C("div", NP, [C("div", HP, [C("div", VP, [C("p", UP, ae(t.title), 1), C("div", FP, [se((m(),
        y("div", jP, [GP, C("p", YP, ae(t.formattedSelectedDate), 1)])), [[l, "ecommerce-booking-modal-date"]]), se((m(),
        y("div", WP, [$P, C("p", qP, ae(t.calculatedTime) + " (" + ae(t.aggregatedDuration) + ") ", 1)])), [[l, "ecommerce-booking-modal-duration-time"]])]), se((m(),
        y("div", zP, [ZP, C("p", KP, ae(t.location), 1)])), [[l, "ecommerce-booking-modal-location"]])]), C("div", QP, [C("p", XP, ae(t.translations.selectDateAndTime), 1), C("div", JP, [Ae(i, {
            modelValue: t.selectedDate,
            "onUpdate:modelValue": n[0] || (n[0] = d => t.selectedDate = d),
            inline: "",
            "hide-offset-dates": "",
            "auto-apply": "",
            class: J(["ecommerce-booking-modal-calendar", {
                "ecommerce-booking-modal-calendar--loading": t.isCalendarLoading
            }]),
            "disabled-dates": t.disabledDates,
            "min-date": new Date,
            locale: t.getLanguage,
            "no-swipe": "",
            "month-change-on-scroll": !1,
            "enable-time-picker": !1,
            "custom-props": {
                language: t.getLanguage
            },
            "month-year-component": t.datePickerHeader,
            onUpdateMonthYear: n[1] || (n[1] = d => t.loadAvailability({
                data: d
            }))
        }, {
            "calendar-header": ye( ({index: d}) => [C("div", null, ae(t.dayNames[d]), 1)]),
            _: 1
        }, 8, ["modelValue", "class", "disabled-dates", "min-date", "locale", "custom-props", "month-year-component"]), C("div", eE, [C("div", null, [C("p", tE, ae(t.selectedMonthAndWeekday), 1)]), C("div", aE, [t.isSlotsLoading ? (m(),
        y("div", nE)) : (m(!0),
        y(ge, {
            key: 1
        }, Ce(t.timeSlots, (d, p) => se((m(),
        y("button", {
            key: `time-${p}`,
            class: J(["ecommerce-booking-modal__time-slot", {
                "ecommerce-booking-modal__time-slot--active": t.selectedTimeSlot === d
            }]),
            onClick: g => t.selectTimeSlot(d)
        }, [qe(ae(t.getVisibleDate(new Date(d))), 1)], 10, rE)), [[l, "ecommerce-booking-modal-time-slot"]])), 128))])])])])]), C("div", oE, [C("button", {
            class: "ecommerce-booking-modal__button",
            onClick: n[2] || (n[2] = (...d) => t.closeEcommerceModal && t.closeEcommerceModal(...d))
        }, ae(t.translations.cancel), 1), se((m(),
        y("button", {
            class: J(["ecommerce-booking-modal__button ecommerce-booking-modal__button--save", {
                loading: t.isCheckoutLoading
            }]),
            disabled: !t.isTimeSelected,
            onClick: n[3] || (n[3] = (...d) => t.handleSubmit && t.handleSubmit(...d))
        }, [qe(ae(t.translations.book), 1)], 10, iE)), [[l, "commerce-booking-modal-button-save"]])])])]),
        _: 1
    }, 512)) : x("", !0)
}
const lE = oe(RP, [["render", sE]])
  , cE = re({
    name: "EcommerceModalContent",
    props: {
        title: {
            type: String,
            required: !0
        },
        text: {
            type: String,
            required: !0
        },
        buttonText: {
            type: String,
            required: !0
        },
        qaSelector: {
            type: String,
            default: "success"
        }
    },
    emits: ["handle-close"]
})
  , uE = {
    class: "payment-info"
}
  , dE = {
    class: "payment-info__content"
}
  , mE = {
    class: "payment-info__title"
}
  , gE = {
    class: "payment-info__text body-large"
};
function pE(t, n, a, e, r, o) {
    const i = lt("qa");
    return se((m(),
    y("div", uE, [C("div", dE, [C("h5", mE, ae(t.title), 1), C("p", gE, ae(t.text), 1), C("button", {
        class: "payment-info__button",
        type: "primary",
        onClick: n[0] || (n[0] = s => t.$emit("handle-close"))
    }, ae(t.buttonText), 1)])])), [[i, `ecommerce-modal-checkout-${t.qaSelector}`]])
}
const Jo = oe(cE, [["render", pE], ["__scopeId", "data-v-98b20e5c"]])
  , vE = re({
    components: {
        ModalLayout: pr,
        ModalContent: Jo
    },
    props: {
        translations: {
            type: Object,
            default: () => {}
        }
    }
});
function fE(t, n, a, e, r, o) {
    const i = mt("ModalContent")
      , s = mt("ModalLayout");
    return m(),
    z(s, {
        ref: "modal"
    }, {
        default: ye( () => [Ae(i, {
            "qa-selector": "booking-unavailable",
            title: t.translations.checkoutModalBookingUnavailable,
            text: t.translations.checkoutModalChooseDifferentTime,
            "button-text": t.translations.gotIt,
            onHandleClose: n[0] || (n[0] = l => t.$refs.modal.handleCloseModalAction())
        }, null, 8, ["title", "text", "button-text"])]),
        _: 1
    }, 512)
}
const hE = oe(vE, [["render", fE]])
  , yE = re({
    components: {
        ModalLayout: pr,
        ModalContent: Jo
    },
    props: {
        translations: {
            type: Object,
            default: () => {}
        }
    }
});
function bE(t, n, a, e, r, o) {
    const i = mt("ModalContent")
      , s = mt("ModalLayout");
    return m(),
    z(s, {
        ref: "modal"
    }, {
        default: ye( () => [Ae(i, {
            "qa-selector": "failed",
            title: t.translations.checkoutModalCantAcceptOrders,
            text: t.translations.checkoutModalPleaseContact,
            "button-text": t.translations.close,
            onHandleClose: n[0] || (n[0] = l => t.$refs.modal.handleCloseModalAction())
        }, null, 8, ["title", "text", "button-text"])]),
        _: 1
    }, 512)
}
const _E = oe(yE, [["render", bE]])
  , wE = re({
    __name: "EcommerceCheckoutSuccess",
    props: {
        translations: {
            default: () => ({})
        }
    },
    setup(t, {expose: n}) {
        n();
        const a = t
          , {isEcommerceStoreCreated: e, setShoppingCartItems: r} = Ia()
          , o = E({
            title: a.translations.checkoutModalThanksForOrder,
            text: a.translations.checkoutModalOrderReceived,
            buttonText: a.translations.gotIt,
            modalType: "success-order"
        })
          , i = E(null);
        Pe( () => {
            const d = new URLSearchParams(window.location.search).get("product");
            d !== st.BOOKING && r([]),
            d === st.BOOKING ? o.value = {
                ...o.value,
                text: a.translations.checkoutModalSuccessfullyBooked,
                modalType: "success-orderbooking"
            } : d === st.DONATION ? o.value = {
                ...o.value,
                title: a.translations.checkoutModalThanksForDonation,
                text: a.translations.checkoutModalDonationReceived,
                modalType: "success-orderdonation"
            } : d === st.DIGITAL && (o.value = {
                ...o.value,
                text: a.translations.checkoutModalDigitalProductEmail,
                modalType: "success-orderdigital"
            })
        }
        );
        const s = {
            props: a,
            isEcommerceStoreCreated: e,
            setShoppingCartItems: r,
            modalContent: o,
            modalRef: i,
            ModalContent: Jo,
            ModalLayout: pr
        };
        return Object.defineProperty(s, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        s
    }
});
function kE(t, n, a, e, r, o) {
    return e.isEcommerceStoreCreated ? (m(),
    z(e.ModalLayout, {
        key: 0,
        ref: "modalRef"
    }, {
        default: ye( () => [Ae(e.ModalContent, {
            title: e.modalContent.title,
            text: e.modalContent.text,
            "button-text": e.modalContent.buttonText,
            "qa-selector": e.modalContent.modalType,
            onHandleClose: n[0] || (n[0] = i => e.modalRef.handleCloseModalAction())
        }, null, 8, ["title", "text", "button-text", "qa-selector"])]),
        _: 1
    }, 512)) : x("", !0)
}
const SE = oe(wE, [["render", kE]])
  , TE = re({
    components: {
        CloseButton: Ts
    },
    props: {
        translations: {
            type: Object,
            default: () => {}
        }
    },
    setup() {
        const {closeEcommerceModal: t} = Ca()
          , n = setTimeout( () => {
            t()
        }
        , 6e3);
        return Kt( () => {
            clearTimeout(n)
        }
        ),
        {
            closeEcommerceModal: t
        }
    }
})
  , CE = t => (sa("data-v-2b2551b7"),
t = t(),
la(),
t)
  , IE = {
    class: "notification"
}
  , PE = CE( () => C("svg", {
    class: "notification__icon",
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
}, [C("path", {
    d: "M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
}), C("path", {
    d: "M12.01 16L12.01 12",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
}), C("path", {
    d: "M12.01 8L12 8",
    stroke: "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
})], -1))
  , EE = {
    class: "notification__content"
};
function DE(t, n, a, e, r, o) {
    const i = mt("CloseButton")
      , s = lt("qa");
    return m(),
    z(ra, {
        name: "fade"
    }, {
        default: ye( () => [se((m(),
        y("div", IE, [PE, C("p", EE, ae(t.translations.checkoutModalDisabledPreview), 1), Ae(i, {
            class: "notification__close",
            title: "Close",
            onClick: n[0] || (n[0] = l => t.closeEcommerceModal())
        })])), [[s, "builder-message-ecommercedisabled"]])]),
        _: 1
    })
}
const ME = oe(TE, [["render", DE], ["__scopeId", "data-v-2b2551b7"]])
  , AE = re({
    components: {
        ModalLayout: pr,
        ModalContent: Jo
    },
    props: {
        translations: {
            type: Object,
            default: () => {}
        }
    }
});
function OE(t, n, a, e, r, o) {
    const i = mt("ModalContent")
      , s = mt("ModalLayout");
    return m(),
    z(s, {
        ref: "modal"
    }, {
        default: ye( () => [Ae(i, {
            "qa-selector": "outofstock",
            title: t.translations.checkoutModalOutOfStock,
            text: t.translations.checkoutModalTryOrChoose,
            "button-text": t.translations.gotIt,
            onHandleClose: n[0] || (n[0] = l => t.$refs.modal.handleCloseModalAction())
        }, null, 8, ["title", "text", "button-text"])]),
        _: 1
    }, 512)
}
const xE = oe(AE, [["render", OE]])
  , BE = "open-modal"
  , LE = re({
    components: {
        EcommerceProductPreview: A1,
        EcommerceBookingEventSelect: lE,
        EcommerceBookingUnavailable: hE,
        EcommerceCheckoutFailed: _E,
        EcommerceCheckoutSuccess: SE,
        EcommerceMessageButtonDisabled: ME,
        EcommerceOutOfStock: xE
    },
    props: {
        ecommerceTranslations: {
            type: Object,
            default: () => ({})
        },
        language: {
            type: String,
            default: "en"
        },
        currentLocale: {
            type: String,
            required: !0
        },
        isCartVisible: {
            type: Boolean,
            default: !1
        },
        isInPreviewMode: {
            type: Boolean,
            default: !1
        }
    },
    setup() {
        const {openEcommerceModal: t, closeEcommerceModal: n, openEcommerceModalName: a} = Ca();
        return Pe( () => {
            const r = new URLSearchParams(window.location.search).get(BE);
            r && t(r)
        }
        ),
        {
            openEcommerceModal: t,
            closeEcommerceModal: n,
            openEcommerceModalName: a
        }
    }
});
function RE(t, n, a, e, r, o) {
    return t.openEcommerceModalName ? (m(),
    z(dn(t.openEcommerceModalName), {
        key: 0,
        translations: t.ecommerceTranslations,
        language: t.language,
        "current-locale": t.currentLocale,
        "is-cart-visible": t.isCartVisible,
        "is-in-preview-mode": t.isInPreviewMode,
        "is-quick-preview": ""
    }, null, 8, ["translations", "language", "current-locale", "is-cart-visible", "is-in-preview-mode"])) : x("", !0)
}
const NE = oe(LE, [["render", RE]])
  , HE = re({
    __name: "Flag",
    props: {
        alt: {},
        src: {
            default: void 0
        }
    },
    setup(t, {expose: n}) {
        n();
        const a = {};
        return Object.defineProperty(a, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        a
    }
})
  , VE = {
    class: "flag"
}
  , UE = ["src", "alt"]
  , FE = C("div", {
    class: "flag__shadow"
}, null, -1);
function jE(t, n, a, e, r, o) {
    return m(),
    y("div", VE, [C("img", {
        class: "flag__img",
        src: a.src,
        alt: a.alt
    }, null, 8, UE), FE])
}
const GE = oe(HE, [["render", jE]])
  , YE = re({
    __name: "LanguageSwitcher",
    props: {
        languages: {},
        currentLocale: {}
    },
    setup(t, {expose: n}) {
        n(),
        ht(f => ({
            35108948: s.value.visibility,
            "34359e71": s.value.height,
            "45cadb2e": s.value.iconTransform
        }));
        const a = {
            CLOSED: "closed",
            OPEN: "open"
        }
          , e = {
            HIDDEN: "hidden",
            VISIBLE: "visible"
        }
          , r = {
            state: a.CLOSED,
            visibility: e.HIDDEN,
            height: "0",
            iconTransform: "none"
        }
          , o = {
            state: a.OPEN,
            visibility: e.VISIBLE,
            height: "auto",
            iconTransform: "rotate(180deg)"
        }
          , i = t
          , s = E({
            ...r
        })
          , l = E(null)
          , d = async () => {
            s.value = {
                ...s.value.state === a.CLOSED ? o : r
            },
            await Nt(),
            l.value?.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "start"
            })
        }
          , p = u( () => {
            const f = i.languages.filter( ({isHidden: b}) => !b).map(b => ({
                ...b,
                src: `${mm}/${b.flagPath}`,
                alt: `${b.locale} flag`
            }));
            return tv(f)
        }
        )
          , g = u( () => p.value.find( ({locale: f}) => f === i.currentLocale))
          , v = {
            DROPDOWN_STATES: a,
            DROPDOWN_VISIBILITY: e,
            initialDropdownStyles: r,
            openDropdownStyles: o,
            props: i,
            dropdownStyles: s,
            languageSwitcherRef: l,
            toggleDropdown: d,
            languageSwitcherLanguages: p,
            selectedLanguage: g,
            Flag: GE
        };
        return Object.defineProperty(v, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        v
    }
})
  , WE = {
    ref: "languageSwitcherRef",
    class: "language-switcher",
    tabindex: "0"
}
  , $E = {
    key: 1,
    class: "language-switcher__locale"
}
  , qE = C("svg", {
    class: "language-switcher__icon",
    width: "10",
    height: "7",
    viewBox: "0 0 10 7",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
}, [C("path", {
    d: "M5 6.5L0.669873 0.5L9.33013 0.500001L5 6.5Z",
    fill: "currentColor"
})], -1)
  , zE = {
    class: "language-switcher__dropdown-area"
}
  , ZE = {
    class: "language-switcher__dropdown"
}
  , KE = ["href"];
function QE(t, n, a, e, r, o) {
    const i = lt("qa");
    return m(),
    y("div", WE, [se((m(),
    y("div", {
        class: "language-switcher__button",
        onClick: e.toggleDropdown
    }, [e.selectedLanguage?.country ? se((m(),
    z(e.Flag, {
        key: 0,
        class: "language-switcher__flag",
        src: e.selectedLanguage.src,
        alt: e.selectedLanguage.alt
    }, null, 8, ["src", "alt"])), [[i, `navigation-selected-language-${e.selectedLanguage.name}`]]) : (m(),
    y("div", $E, ae(e.selectedLanguage?.locale), 1)), qE])), [[i, "navigation-language-switcher"]]), C("div", zE, [C("ul", ZE, [(m(!0),
    y(ge, null, Ce(e.languageSwitcherLanguages, s => se((m(),
    y("li", {
        key: s.locale,
        class: "language-switcher__dropdown-item"
    }, [C("a", {
        href: s.href,
        class: J(["language-switcher__dropdown-link", {
            "--current": s.locale === a.currentLocale
        }])
    }, [s.country ? (m(),
    z(e.Flag, {
        key: 0,
        class: "language-switcher__dropdown-flag",
        src: s.src,
        alt: s.alt
    }, null, 8, ["src", "alt"])) : x("", !0), qe(" " + ae(s.name), 1)], 10, KE)])), [[i, `navigation-language-switcher-${s.locale}`]])), 128))])])], 512)
}
const XE = oe(YE, [["render", QE]])
  , JE = re({
    __name: "ZyroHamburger",
    props: {
        title: {
            type: String,
            default: "Menu"
        },
        isOpen: {
            type: Boolean,
            required: !0
        },
        color: {
            type: String,
            default: "var(--nav-link-text-color)"
        }
    },
    setup(t, {expose: n}) {
        n(),
        ht(o => ({
            "165ebbac": e.value
        }));
        const a = t
          , e = u( () => a.color)
          , r = {
            props: a,
            burgerColor: e
        };
        return Object.defineProperty(r, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        r
    }
})
  , $s = t => (sa("data-v-ccf9b649"),
t = t(),
la(),
t)
  , eD = ["title"]
  , tD = $s( () => C("span", {
    class: "burger__bun"
}, null, -1))
  , aD = $s( () => C("span", {
    class: "burger__meat"
}, null, -1))
  , nD = $s( () => C("span", {
    class: "burger__bun"
}, null, -1))
  , rD = [tD, aD, nD];
function oD(t, n, a, e, r, o) {
    return m(),
    y("button", {
        type: "button",
        class: J(["burger", {
            "burger--open": a.isOpen
        }]),
        title: a.title
    }, rD, 10, eD)
}
const iD = oe(JE, [["render", oD], ["__scopeId", "data-v-ccf9b649"]])
  , sD = re({
    name: "BlockHeaderBackground",
    props: {
        type: {
            type: String,
            default: "color"
        },
        imageUrl: {
            type: String,
            default: null
        },
        color: {
            type: String,
            default: ""
        },
        isTransparent: {
            type: Boolean,
            default: !1
        },
        overlayOpacity: {
            type: Number,
            default: 0
        }
    },
    computed: {
        backgroundImage() {
            return this.type === "image" && this.imageUrl
        },
        backgroundColor() {
            return this.type === "color" ? this.color : "transparent"
        },
        backgroundCSSVars() {
            return {
                "--background-color": this.isTransparent ? "transparent" : this.backgroundColor,
                ...!!this.backgroundImage && {
                    "--background-image": `url(${this.backgroundImage})`
                },
                ...!!this.overlayOpacity && {
                    "--overlay-opacity": this.overlayOpacity
                }
            }
        }
    }
});
function lD(t, n, a, e, r, o) {
    return m(),
    y("div", {
        class: J(["background", {
            "background--with-image": t.backgroundImage
        }]),
        style: ze(t.backgroundCSSVars)
    }, null, 6)
}
const cD = oe(sD, [["render", lD]])
  , uD = re({
    __name: "BlockHeaderCart",
    props: {
        cartIconSize: {},
        cartText: {},
        itemsInCart: {}
    },
    emits: ["cart-click"],
    setup(t, {expose: n, emit: a}) {
        n(),
        ht(s => ({
            "9936818a": o.value
        }));
        const e = t
          , r = a
          , o = u( () => e.cartIconSize)
          , i = {
            props: e,
            emit: r,
            cartIconSize: o
        };
        return Object.defineProperty(i, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        i
    }
})
  , dD = t => (sa("data-v-e7b040a0"),
t = t(),
la(),
t)
  , mD = {
    class: "block-header-cart-wrapper"
}
  , gD = {
    class: "block-header-cart"
}
  , pD = {
    class: "block-header-cart__icon-container"
}
  , vD = {
    class: "block-header-cart__icon-wrapper"
}
  , fD = dD( () => C("svg", {
    width: "19",
    height: "24",
    viewBox: "0 0 19 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    class: "block-header-cart__icon"
}, [C("path", {
    "fill-rule": "evenodd",
    "clip-rule": "evenodd",
    d: `M5.94636 5.35922C6.29451 3.00506 7.9363 1.39824 9.67973
						1.39824C11.4232 1.39824 13.0649 3.00506
						13.4131 5.35922H5.94636ZM4.53847 5.35922C4.90317 2.43147
						6.95866 0.000183105 9.67973 0.000183105C12.4008
						0.000183105 14.4563 2.43147 14.821 5.35922H17.2816H18.6797V6.75728V21.2039C18.6797
						22.7481 17.4278 24 15.8836
						24H3.4758C1.93155 24 0.679688 22.7481 0.679688
						21.2039V6.75728V5.35922H2.07775H4.53847ZM2.07775 6.75728H4.52596V9.08752C4.52596
						9.47359 4.83893 9.78655 5.22499 9.78655C5.61105 9.78655 5.92402 9.47359
						5.92402 9.08752V6.75728H13.5259V9.08752C13.5259 9.47359
						13.8389 9.78655 14.2249 9.78655C14.611 9.78655 14.9239
						9.47359 14.9239 9.08752V6.75728H17.2816V21.2039C17.2816 21.976 16.6557 22.6019
						15.8836 22.6019H3.4758C2.70368 22.6019 2.07775 21.976 2.07775 21.2039V6.75728Z`,
    fill: "currentColor"
})], -1))
  , hD = {
    key: 0,
    class: "block-header-cart__item-amount"
}
  , yD = {
    key: 0,
    class: "block-header-cart__cart-text"
};
function bD(t, n, a, e, r, o) {
    const i = lt("qa");
    return m(),
    y("div", mD, [C("span", gD, [se((m(),
    y("button", {
        class: "block-header-cart__button",
        title: "Go to cart",
        onClick: n[0] || (n[0] = s => e.emit("cart-click"))
    }, [C("div", pD, [C("div", vD, [fD, a.itemsInCart ? (m(),
    y("div", hD, ae(a.itemsInCart), 1)) : x("", !0)]), a.cartText?.length ? (m(),
    y("span", yD, ae(a.cartText), 1)) : x("", !0)])])), [[i, "header-btn-shoppingbag"]])])])
}
const _D = oe(uD, [["render", bD], ["__scopeId", "data-v-e7b040a0"]])
  , wD = re({
    __name: "BlockHeaderItemContent",
    props: {
        item: {}
    },
    setup(t, {expose: n}) {
        n();
        const a = t
          , e = u( () => `${a.item.isCurrent ? "navigationblock-page-active-" : "navigationblock-page-"}${a.item.name}`)
          , r = {
            props: a,
            linkDataQa: e
        };
        return Object.defineProperty(r, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        r
    }
})
  , kD = t => (sa("data-v-5a96fcab"),
t = t(),
la(),
t)
  , SD = ["target", "rel", "href", "textContent"]
  , TD = ["textContent"]
  , CD = {
    key: 2,
    class: "item-content__icon-container-wrapper"
}
  , ID = kD( () => C("span", {
    class: "item-content__icon-container"
}, [C("svg", {
    class: "item-content__icon",
    width: "10",
    height: "7",
    viewBox: "0 0 10 7",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
}, [C("path", {
    d: "M5 6.5L0.669873 0.5L9.33013 0.500001L5 6.5Z",
    fill: "currentColor"
})])], -1))
  , PD = [ID];
function ED(t, n, a, e, r, o) {
    const i = lt("qa");
    return m(),
    y("div", {
        class: J(["item-content-wrapper", {
            "item-content-wrapper--active": a.item.isCurrent
        }])
    }, [a.item.href ? se((m(),
    y("a", {
        key: 0,
        class: "item-content",
        target: a.item.target,
        rel: a.item.rel,
        href: a.item.href,
        textContent: ae(a.item.name)
    }, null, 8, SD)), [[i, e.linkDataQa]]) : se((m(),
    y("span", {
        key: 1,
        class: "item-content",
        textContent: ae(a.item.name)
    }, null, 8, TD)), [[i, e.linkDataQa]]), a.item.hasDropdown ? (m(),
    y("div", CD, PD)) : x("", !0)], 2)
}
const DD = oe(wD, [["render", ED], ["__scopeId", "data-v-5a96fcab"]])
  , MD = re({
    __name: "BlockHeaderItem",
    props: {
        item: {},
        areDropdownsHidden: {
            type: Boolean
        }
    },
    setup(t, {expose: n}) {
        n();
        const e = {
            props: t,
            BlockHeaderItemContent: DD
        };
        return Object.defineProperty(e, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        e
    }
})
  , AD = {
    class: "block-header-item"
}
  , OD = {
    class: "block-header-item__label"
}
  , xD = {
    key: 0,
    type: "checkbox",
    class: "block-header-item__mobile-dropdown-trigger"
}
  , BD = {
    key: 1,
    class: "block-header-item__dropdown-area"
}
  , LD = {
    class: "block-header-item__dropdown"
};
function RD(t, n, a, e, r, o) {
    const i = mt("BlockHeaderItem", !0)
      , s = lt("qa");
    return m(),
    y("li", AD, [C("label", OD, [!e.props.areDropdownsHidden && e.props.item.hasDropdown ? (m(),
    y("input", xD)) : x("", !0), se(Ae(e.BlockHeaderItemContent, {
        item: a.item,
        class: "block-header-item__item",
        "aria-haspopup": a.item.hasDropdown
    }, null, 8, ["item", "aria-haspopup"]), [[s, `navigation-item-${a.item.name}`]]), !e.props.areDropdownsHidden && e.props.item.hasDropdown ? (m(),
    y("div", BD, [C("ul", LD, [(m(!0),
    y(ge, null, Ce(e.props.item.subItems, l => (m(),
    z(i, {
        key: l.id,
        item: l
    }, null, 8, ["item"]))), 128))])])) : x("", !0)])])
}
const ND = oe(MD, [["render", RD], ["__scopeId", "data-v-6773ab13"]])
  , HD = re({
    __name: "BlockHeaderLogo",
    props: {
        logoSrc: {},
        logoSvg: {},
        href: {},
        height: {},
        heightMobile: {},
        maxWidth: {},
        maxWidthMobile: {},
        siteName: {}
    },
    setup(t, {expose: n}) {
        n(),
        ht(d => ({
            "12ae7940": i.value,
            "2951b4ed": r.value,
            "31149d1f": s.value,
            "509fe624": o.value
        }));
        const a = t
          , e = u( () => a.siteName ? `${a.siteName} logo` : "")
          , r = u( () => `${a.height}px`)
          , o = u( () => `${a.heightMobile}px`)
          , i = u( () => a.maxWidth)
          , s = u( () => a.maxWidthMobile || i.value)
          , l = {
            props: a,
            logoAltTag: e,
            height: r,
            mHeight: o,
            width: i,
            mWidth: s
        };
        return Object.defineProperty(l, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        l
    }
})
  , VD = ["href"]
  , UD = ["innerHTML"]
  , FD = ["src", "alt"];
function jD(t, n, a, e, r, o) {
    const i = lt("qa");
    return m(),
    y("a", {
        class: "block-header-logo",
        href: e.props.href ?? ""
    }, [e.props.logoSvg ? (m(),
    y("div", {
        key: 0,
        class: "block-header-logo__image",
        innerHTML: e.props.logoSvg
    }, null, 8, UD)) : e.props.logoSrc ? se((m(),
    y("img", {
        key: 1,
        class: "block-header-logo__image",
        src: e.props.logoSrc,
        alt: e.logoAltTag
    }, null, 8, FD)), [[i, "builder-siteheader-img-logo"]]) : x("", !0)], 8, VD)
}
const GD = oe(HD, [["render", jD], ["__scopeId", "data-v-7d84e8d8"]])
  , YD = re({
    __name: "BlockHeaderLayout",
    props: {
        layout: {},
        mobileLayout: {},
        isLogoVisible: {
            type: Boolean
        },
        isLanguageSwitcherVisible: {
            type: Boolean
        },
        areSocialIconLinksVisible: {
            type: Boolean
        },
        isCartVisible: {
            type: Boolean
        },
        isButtonVisible: {
            type: Boolean
        },
        isMobileMenuDropdownOpen: {
            type: Boolean
        },
        isMobileMenuDropdownFullScreen: {
            type: Boolean
        },
        mobileLinksAlignment: {}
    },
    setup(t, {expose: n}) {
        n(),
        ht(g => ({
            "627588a4": d.value,
            "7d9c8432": s.value
        }));
        const a = t
          , e = E(null)
          , r = E(null)
          , o = E(0)
          , i = Pu(r)
          , s = u( () => `${o.value}px`)
          , l = u( () => [a.isLanguageSwitcherVisible, a.areSocialIconLinksVisible, a.isCartVisible, a.isButtonVisible].filter(Boolean).length)
          , d = u( () => `${a.isLogoVisible ? "min-content" : ""} auto ${l.value > 0 ? `repeat(${l.value}, min-content)` : ""}`);
        Pe( () => {
            r.value = document.body,
            o.value = document.querySelector(".block-sticky-bar")?.clientHeight ?? 0
        }
        ),
        Fe( () => a.isMobileMenuDropdownOpen, g => {
            g ? (e?.value && (e.value.scrollTop = 0),
            i.value = !0) : i.value = !1
        }
        );
        const p = {
            props: a,
            dropdownRef: e,
            bodyElement: r,
            stickyBarHeight: o,
            isBodyScrollLocked: i,
            stickyBarHeightPx: s,
            visibleNonCenteredRightElementsCount: l,
            nonCenteredLayoutColumns: d,
            get BLOCK_HEADER_LAYOUTS() {
                return gm
            }
        };
        return Object.defineProperty(p, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        p
    }
})
  , WD = {
    key: 1,
    class: "block-header-layout-desktop block-header-layout-desktop--desktop-3"
}
  , $D = {
    class: "block-header-layout-desktop__right-side"
}
  , qD = {
    key: 2,
    class: "block-header-layout-desktop block-header-layout-desktop--desktop-4"
}
  , zD = {
    class: "block-header-layout-desktop__right-side"
}
  , ZD = {
    key: 3,
    class: "block-header-layout-desktop block-header-layout-desktop--desktop-5"
}
  , KD = {
    class: "block-header-layout-desktop__right-side"
};
function QD(t, n, a, e, r, o) {
    return m(),
    y(ge, null, [e.props.layout === e.BLOCK_HEADER_LAYOUTS.DESKTOP_1 || e.props.layout === e.BLOCK_HEADER_LAYOUTS.DESKTOP_2 ? (m(),
    y("div", {
        key: 0,
        class: J(`block-header-layout-desktop block-header-layout-desktop--${e.props.layout}`)
    }, [ne(t.$slots, "logo", {}, void 0, !0), ne(t.$slots, "nav", {}, void 0, !0), ne(t.$slots, "language-switcher", {}, void 0, !0), ne(t.$slots, "social-icons", {}, void 0, !0), ne(t.$slots, "cart", {}, void 0, !0), ne(t.$slots, "button", {}, void 0, !0)], 2)) : e.props.layout === e.BLOCK_HEADER_LAYOUTS.DESKTOP_3 ? (m(),
    y("div", WD, [ne(t.$slots, "logo", {}, void 0, !0), ne(t.$slots, "nav", {}, void 0, !0), C("div", $D, [ne(t.$slots, "language-switcher", {}, void 0, !0), ne(t.$slots, "social-icons", {}, void 0, !0), ne(t.$slots, "cart", {}, void 0, !0), ne(t.$slots, "button", {}, void 0, !0)])])) : e.props.layout === e.BLOCK_HEADER_LAYOUTS.DESKTOP_4 ? (m(),
    y("div", qD, [ne(t.$slots, "nav", {}, void 0, !0), ne(t.$slots, "logo", {}, void 0, !0), C("div", zD, [ne(t.$slots, "language-switcher", {}, void 0, !0), ne(t.$slots, "social-icons", {}, void 0, !0), ne(t.$slots, "cart", {}, void 0, !0), ne(t.$slots, "button", {}, void 0, !0)])])) : e.props.layout === e.BLOCK_HEADER_LAYOUTS.DESKTOP_5 ? (m(),
    y("div", ZD, [ne(t.$slots, "logo", {}, void 0, !0), ne(t.$slots, "social-icons", {}, void 0, !0), ne(t.$slots, "nav", {}, void 0, !0), C("div", KD, [ne(t.$slots, "language-switcher", {}, void 0, !0), ne(t.$slots, "cart", {}, void 0, !0), ne(t.$slots, "button", {}, void 0, !0)])])) : x("", !0), C("div", {
        class: J(["block-header-layout-mobile", `block-header-layout-mobile--${e.props.mobileLayout}`])
    }, [ne(t.$slots, "logo", {}, void 0, !0), ne(t.$slots, "cart", {}, void 0, !0), ne(t.$slots, "hamburger-menu", {}, void 0, !0), C("div", {
        ref: "dropdownRef",
        class: J(["block-header-layout-mobile__dropdown", [`block-header-layout-mobile__dropdown--link-align-${e.props.mobileLinksAlignment}`, {
            "block-header-layout-mobile__dropdown--open": e.props.isMobileMenuDropdownOpen
        }, {
            "block-header-layout-mobile__dropdown--full-screen": e.props.isMobileMenuDropdownFullScreen
        }]])
    }, [ne(t.$slots, "nav", {}, void 0, !0), ne(t.$slots, "language-switcher", {}, void 0, !0), ne(t.$slots, "social-icons", {}, void 0, !0), ne(t.$slots, "button", {}, void 0, !0)], 2)], 2)], 64)
}
const XD = oe(YD, [["render", QD], ["__scopeId", "data-v-2f044965"]])
  , JD = re({
    __name: "BlockHeaderButton",
    props: {
        elementId: {},
        data: {}
    },
    setup(t, {expose: n}) {
        n();
        const a = t
          , {getButtonHref: e} = kt()
          , {tagName: r, href: o, target: i, rel: s, type: l, content: d, fontSizeMobile: p, fontSizeDesktop: g, fontFamily: v, fontWeight: f, borderWidth: b, borderRadius: D, backgroundColor: T, fontColor: w, borderColor: S, backgroundColorHover: B, fontColorHover: I, borderColorHover: R, mobileElementWidth: $, mobileElementHeight: G} = Xr(a, {
            href: u( () => e({
                isFormButton: !1,
                linkedPageId: a.data.linkedPageId,
                linkType: a.data.linkType,
                href: a.data.href
            }))
        })
          , ee = {
            props: a,
            getButtonHref: e,
            tagName: r,
            href: o,
            target: i,
            rel: s,
            type: l,
            content: d,
            fontSizeMobile: p,
            fontSizeDesktop: g,
            fontFamily: v,
            fontWeight: f,
            borderWidth: b,
            borderRadius: D,
            backgroundColor: T,
            fontColor: w,
            borderColor: S,
            backgroundColorHover: B,
            fontColorHover: I,
            borderColorHover: R,
            mobileElementWidth: $,
            mobileElementHeight: G,
            GridButton: Hn
        };
        return Object.defineProperty(ee, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        ee
    }
});
function eM(t, n, a, e, r, o) {
    return m(),
    z(e.GridButton, {
        "data-element-ref": a.elementId,
        "tag-name": e.tagName,
        href: e.href,
        target: e.target,
        rel: e.rel,
        type: e.type,
        content: e.content,
        "font-size-mobile": e.fontSizeMobile,
        "font-size-desktop": e.fontSizeDesktop,
        "font-family": e.fontFamily,
        "font-weight": e.fontWeight,
        "border-width": e.borderWidth,
        "border-radius": e.borderRadius,
        "background-color": e.backgroundColor,
        "font-color": e.fontColor,
        "border-color": e.borderColor,
        "background-color-hover": e.backgroundColorHover,
        "font-color-hover": e.fontColorHover,
        "border-color-hover": e.borderColorHover,
        "mobile-element-width": e.mobileElementWidth,
        "mobile-element-height": e.mobileElementHeight,
        onClick: n[0] || (n[0] = xe( () => {}
        , ["prevent"])),
        onDrag: n[1] || (n[1] = xe( () => {}
        , ["prevent"])),
        onDragstart: n[2] || (n[2] = xe( () => {}
        , ["prevent"]))
    }, null, 8, ["data-element-ref", "tag-name", "href", "target", "rel", "type", "content", "font-size-mobile", "font-size-desktop", "font-family", "font-weight", "border-width", "border-radius", "background-color", "font-color", "border-color", "background-color-hover", "font-color-hover", "border-color-hover", "mobile-element-width", "mobile-element-height"])
}
const tM = oe(JD, [["render", eM]])
  , aM = re({
    __name: "BlockHeader",
    props: {
        siteName: {
            default: ""
        },
        headerLayout: {},
        mHeaderLayout: {},
        languageSwitcherLanguages: {},
        items: {},
        logoHref: {
            default: ""
        },
        logoSrc: {
            default: ""
        },
        logoSvg: {
            default: ""
        },
        backgroundImageUrl: {},
        isOpen: {
            type: Boolean,
            default: !1
        },
        isSticky: {
            type: Boolean
        },
        isTransparent: {
            type: Boolean
        },
        isLogoVisible: {
            type: Boolean,
            default: !1
        },
        isCartVisible: {
            type: Boolean
        },
        isLanguageSwitcherVisible: {
            type: Boolean
        },
        currentLocale: {
            default: ""
        },
        backgroundColor: {
            default: ""
        },
        navLinkTextColor: {
            default: ""
        },
        navLinkTextColorHover: {
            default: ""
        },
        cartText: {
            default: ""
        },
        itemsInCart: {
            default: 0
        },
        areDropdownsHidden: {
            type: Boolean
        },
        background: {},
        cartIconSize: {},
        logoMaxWidth: {},
        heightMobile: {},
        logoHeight: {},
        logoHeightMobile: {},
        logoMaxWidthMobile: {},
        fontFamily: {
            default: ""
        },
        fontWeight: {
            default: 400
        },
        socialIconsLinks: {
            default: () => []
        },
        socialIconsStyles: {
            default: () => ({})
        },
        buttonElementId: {
            default: ""
        },
        buttonElementData: {
            default: () => ({})
        },
        isMobileMenuDropdownFullScreen: {
            type: Boolean,
            default: !1
        },
        mobileLinksAlignment: {}
    },
    emits: ["toggle-visibility", "cart-click", "logo-click", "button-click", "navigation-click", "social-icons-click", "language-switcher-click"],
    setup(t, {expose: n, emit: a}) {
        n();
        const e = t
          , r = a
          , {hasUserScrolled: o} = du()
          , i = E(null)
          , s = u( () => e.socialIconsLinks.length > 0)
          , l = u( () => !!Object.keys(e.buttonElementData).length)
          , d = u( () => o.value && e.isSticky)
          , p = u( () => e.isSticky && !o.value || !e.isSticky)
          , g = u( () => e.isTransparent && p.value && !e.isOpen)
          , v = u( () => ({
            ...e.fontFamily && {
                "--nav-link-font-family": e.fontFamily
            },
            ...e.fontWeight && {
                "--nav-link-font-weight": e.fontWeight
            },
            "--nav-link-text-color": e.navLinkTextColor || "var(--nav-link-color)",
            "--nav-link-text-color-hover": e.navLinkTextColorHover || "var(--nav-link-color-hover)",
            "--header-height-mobile": `${e.heightMobile}px`,
            ...s.value && {
                "--space-between-icons": "16px",
                "--icon-color": e.socialIconsStyles["icon-color"],
                "--icon-size": e.socialIconsStyles["icon-size"],
                "--icon-color-hover": e.socialIconsStyles["icon-color-hover"]
            }
        }));
        Pe( () => {
            qo(i, () => {
                e.isOpen && r("toggle-visibility")
            }
            )
        }
        );
        const f = {
            props: e,
            emit: r,
            hasUserScrolled: o,
            headerRef: i,
            isSocialIconsLinksVisible: s,
            isButtonVisible: l,
            isWithShadow: d,
            shouldForceTransparency: p,
            isCurrentlyTransparent: g,
            computedStyles: v,
            LanguageSwitcher: XE,
            ZyroHamburger: iD,
            BlockHeaderBackground: cD,
            BlockHeaderCart: _D,
            BlockHeaderItem: ND,
            BlockHeaderLogo: GD,
            BlockHeaderLayout: XD,
            get BLOCK_HEADER_CLASS() {
                return pm
            },
            GridSocialIcons: _u,
            BlockHeaderButton: tM
        };
        return Object.defineProperty(f, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        f
    }
})
  , nM = {
    class: "block-header__nav-links"
};
function rM(t, n, a, e, r, o) {
    const i = lt("qa");
    return m(),
    y("header", {
        ref: "headerRef",
        class: J({
            [e.BLOCK_HEADER_CLASS]: !0,
            "block-header--with-shadow": e.isWithShadow
        }),
        style: ze(e.computedStyles)
    }, [e.props.background ? (m(),
    z(e.BlockHeaderBackground, {
        key: 0,
        type: e.props.background.current,
        "image-url": e.props.backgroundImageUrl,
        color: e.props.background.color,
        "overlay-opacity": Number(e.props.background["overlay-opacity"]),
        "is-transparent": e.isCurrentlyTransparent
    }, null, 8, ["type", "image-url", "color", "overlay-opacity", "is-transparent"])) : x("", !0), Ae(e.BlockHeaderLayout, {
        layout: e.props.headerLayout,
        "mobile-layout": e.props.mHeaderLayout,
        "is-logo-visible": e.props.isLogoVisible,
        "is-language-switcher-visible": e.props.isLanguageSwitcherVisible,
        "are-social-icon-links-visible": e.isSocialIconsLinksVisible,
        "is-cart-visible": e.props.isCartVisible,
        "is-button-visible": e.isButtonVisible,
        "is-mobile-menu-dropdown-open": e.props.isOpen,
        "is-mobile-menu-dropdown-full-screen": e.props.isMobileMenuDropdownFullScreen,
        "mobile-links-alignment": e.props.mobileLinksAlignment
    }, {
        "hamburger-menu": ye( () => [e.props.items.length || e.props.isLanguageSwitcherVisible ? se((m(),
        z(e.ZyroHamburger, {
            key: 0,
            class: "block-header__hamburger-menu",
            "is-open": e.props.isOpen,
            onClick: n[0] || (n[0] = xe(s => t.$emit("toggle-visibility"), ["stop"]))
        }, null, 8, ["is-open"])), [[i, "builder-siteheader-btn-hamburger"]]) : x("", !0)]),
        logo: ye( () => [e.props.isLogoVisible ? (m(),
        z(e.BlockHeaderLogo, {
            key: 0,
            class: "block-header__logo",
            "logo-src": e.props.logoSrc,
            "logo-svg": e.props.logoSvg,
            href: e.props.logoHref,
            "site-name": e.props.siteName,
            "max-width": e.props.logoMaxWidth,
            "max-width-mobile": e.props.logoMaxWidthMobile,
            height: e.props.logoHeight,
            "height-mobile": e.props.logoHeightMobile,
            onClick: n[1] || (n[1] = s => t.$emit("logo-click"))
        }, null, 8, ["logo-src", "logo-svg", "href", "site-name", "max-width", "max-width-mobile", "height", "height-mobile"])) : x("", !0)]),
        nav: ye( () => [C("nav", {
            class: "block-header__nav",
            onClick: n[2] || (n[2] = s => e.emit("navigation-click"))
        }, [se((m(),
        y("ul", nM, [(m(!0),
        y(ge, null, Ce(e.props.items, s => (m(),
        z(e.BlockHeaderItem, {
            key: s.id,
            item: s,
            "are-dropdowns-hidden": e.props.areDropdownsHidden
        }, null, 8, ["item", "are-dropdowns-hidden"]))), 128))])), [[i, "builder-siteheader-emptyspace"]])])]),
        "social-icons": ye( () => [e.props.socialIconsLinks.length ? (m(),
        z(e.GridSocialIcons, {
            key: 0,
            class: "block-header__social-icons",
            links: e.props.socialIconsLinks
        }, null, 8, ["links"])) : x("", !0)]),
        "language-switcher": ye( () => [e.props.isLanguageSwitcherVisible ? (m(),
        z(e.LanguageSwitcher, {
            key: 0,
            class: J(["block-header__language-switcher", {
                "mouse-disabled": e.props.areDropdownsHidden
            }]),
            languages: e.props.languageSwitcherLanguages,
            "current-locale": e.props.currentLocale
        }, null, 8, ["class", "languages", "current-locale"])) : x("", !0)]),
        cart: ye( () => [e.props.isCartVisible ? (m(),
        z(e.BlockHeaderCart, {
            key: 0,
            class: "block-header__cart",
            "cart-text": e.props.cartText,
            "items-in-cart": e.props.itemsInCart,
            "cart-icon-size": e.props.cartIconSize,
            onCartClick: n[3] || (n[3] = s => t.$emit("cart-click"))
        }, null, 8, ["cart-text", "items-in-cart", "cart-icon-size"])) : x("", !0)]),
        button: ye( () => [e.isButtonVisible && e.props.buttonElementId ? (m(),
        z(e.BlockHeaderButton, {
            key: 0,
            class: "block-header__button",
            "element-id": e.props.buttonElementId,
            data: e.props.buttonElementData
        }, null, 8, ["element-id", "data"])) : x("", !0)]),
        _: 1
    }, 8, ["layout", "mobile-layout", "is-logo-visible", "is-language-switcher-visible", "are-social-icon-links-visible", "is-cart-visible", "is-button-visible", "is-mobile-menu-dropdown-open", "is-mobile-menu-dropdown-full-screen", "mobile-links-alignment"])], 6)
}
const oM = oe(aM, [["render", rM], ["__scopeId", "data-v-6a1ef1e7"]])
  , iM = t => {
    const a = t.current === "image" ? `url(${t[t.current]})` : t[t.current];
    return {
        [`--background-${t.current}`]: a
    }
}
  , sM = ({siteId: t, meta: n, blocks: a, nav: e, pages: r, elements: o, languageMetaTitle: i, languageSwitcherLanguages: s, currentLocale: l, currentPageId: d, shoppingCartItemCount: p, isOpen: g, getPagePathFromId: v}) => {
    const {defaultLocale: f} = n
      , {background: b, settings: D, fontWeight: T, fontFamily: w, navLinkTextColor: S, navLinkTextColorHover: B, mobile: I, desktop: R} = a.header
      , {imageOrigin: $, imagePath: G} = b
      , {cartText: ee, isCartVisible: K, isLanguageSwitcherHidden: M, isSticky: j, logoPlacement: q, navigationPlacement: Y, showLogo: L, styles: _, logoImageOrigin: A, logoImagePath: P, logoSvg: H, headerLayout: k, mHeaderLayout: h, isMobileMenuDropdownFullScreen: W, mobileLinksAlignment: U} = D
      , te = {
        ...ma(_),
        ...iM(b)
    }
      , Q = () => {
        const Ue = Number.parseInt(_["logo-width"], 10);
        return Et(A, P, t, {
            width: Ue * 2,
            quality: 95
        })
    }
      , V = () => Et($, G, t, {
        width: Xa
    })
      , O = Ue => {
        const {navItemId: nt, linkType: Ft, linkedPageId: St, isHidden: Tt, rel: Ee, href: je, target: ot, name: rt, subItems: vt=[]} = Ue;
        return {
            navItemId: nt,
            hasDropdown: !!vt.length,
            isCurrent: d === St,
            subItems: vt.map(O),
            target: ot,
            name: Ft === nl ? r[St]?.name : rt,
            isHidden: Tt,
            rel: Ee,
            href: Ft === nl ? v({
                pageId: St
            }) : je,
            locale: l
        }
    }
      , pe = e.filter( ({isHidden: Ue}) => !Ue).map(O)
      , fe = K && n.ecommerceType === "zyro"
      , ue = !!s.length && !M && l !== mn
      , Oe = i ?? n.metaTitle
      , he = a.header.components.find(Ue => o[Ue].type === Gc)
      , X = o[he]?.links || []
      , ce = o[he]?.settings?.styles || {}
      , Me = a.header.components.find(Ue => o[Ue].type === jc)
      , de = o[Me];
    return {
        background: b,
        backgroundColor: b.color,
        backgroundImageUrl: V(),
        backgroundColorContrast: _.contrastBackgroundColor,
        cartText: ee,
        cartIconSize: _.cartIconSize,
        currentLocale: l,
        height: R.height,
        heightMobile: I.height,
        fontFamily: w,
        navLinkTextColor: S,
        navLinkTextColorHover: B,
        fontWeight: T,
        isTransparent: b.isTransparent,
        items: pe,
        isCartVisible: fe,
        itemsInCart: p,
        isSticky: j,
        isLanguageSwitcherVisible: ue,
        isLogoVisible: L,
        isOpen: g,
        languageSwitcherLanguages: s,
        logoHeight: R.logoHeight,
        logoHeightMobile: I.logoHeight,
        logoHref: l !== f && l !== mn ? `/${l}` : "/",
        logoMaxWidth: _["logo-width"],
        logoMaxWidthMobile: _["m-logo-width"],
        logoPlacement: q,
        logoPlacementMobile: D["m-logoPlacement"] || q,
        logoSrc: Q(),
        logoSvg: H,
        style: te,
        siteName: Oe,
        socialIconsLinks: X,
        socialIconsStyles: ce,
        buttonElementId: Me,
        buttonElementData: de,
        navigationPlacement: Y,
        navigationPlacementMobile: D["m-navigationPlacement"] || Y,
        headerLayout: k,
        mHeaderLayout: h,
        isMobileMenuDropdownFullScreen: W,
        mobileLinksAlignment: U
    }
}
  , lM = re({
    __name: "Lightbox",
    setup(t, {expose: n}) {
        n();
        const {currentLightboxImageIndex: a, currentLightboxImage: e, closeLightbox: r, isLightboxOpen: o, isImageGalleryMode: i, handleLightboxNav: s, goToNextImage: l, goToPreviousImage: d} = ir()
          , p = E(null)
          , g = E(null)
          , v = Pu(p, !0)
          , {enableMoveEvents: f} = xu({
            move: {
                drag: !0,
                swipe: !0
            },
            onMoveLeft: l,
            onMoveRight: d
        });
        Pe(async () => {
            p.value = document.body,
            qo(g, D => {
                D.target.matches("[data-lightbox-button],[data-lightbox-nav]") || r()
            }
            ),
            f(),
            window.document.addEventListener("keydown", s)
        }
        ),
        Kt( () => {
            v.value = !1,
            r(),
            f(!1),
            document.removeEventListener("keydown", s)
        }
        );
        const b = {
            currentLightboxImageIndex: a,
            currentLightboxImage: e,
            closeLightbox: r,
            isLightboxOpen: o,
            isImageGalleryMode: i,
            handleLightboxNav: s,
            goToNextImage: l,
            goToPreviousImage: d,
            bodyElement: p,
            lightboxRef: g,
            isBodyScrollLocked: v,
            enableMoveEvents: f
        };
        return Object.defineProperty(b, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        b
    }
})
  , cM = {
    key: 0,
    class: "lightbox",
    role: "dialog",
    "aria-modal": "true"
}
  , uM = {
    class: "lightbox__container"
}
  , dM = C("button", {
    class: "lightbox__button lightbox__button--nav lightbox__button--prev",
    "data-lightbox-button": ""
}, null, -1)
  , mM = [dM]
  , gM = ["src", "alt"]
  , pM = C("button", {
    "data-lightbox-button": "",
    class: "lightbox__button lightbox__button--nav lightbox__button--next"
}, null, -1)
  , vM = [pM];
function fM(t, n, a, e, r, o) {
    const i = lt("qa");
    return m(),
    z(ra, {
        name: "fade",
        appear: ""
    }, {
        default: ye( () => [e.isLightboxOpen ? se((m(),
        y("div", cM, [C("button", {
            class: "lightbox__button lightbox__button--close",
            title: "close-ligthbox-button",
            "data-lightbox-button": "",
            onClick: n[0] || (n[0] = (...s) => e.closeLightbox && e.closeLightbox(...s))
        }), C("div", uM, [C("div", {
            class: J(["lightbox__nav", {
                "lightbox__nav--multiple": e.isImageGalleryMode,
                "lightbox__nav--single": !e.isImageGalleryMode
            }]),
            "data-lightbox-nav": "",
            onClick: n[1] || (n[1] = (...s) => e.goToPreviousImage && e.goToPreviousImage(...s))
        }, mM, 2), Ae(ra, {
            name: "fade",
            mode: "out-in"
        }, {
            default: ye( () => [(m(),
            y("img", {
                key: `${e.currentLightboxImage.src}${e.currentLightboxImageIndex}`,
                ref: "lightboxRef",
                class: J(["lightbox__image", {
                    "lightbox__image--multiple": e.isImageGalleryMode,
                    "lightbox__image--single": !e.isImageGalleryMode
                }]),
                src: e.currentLightboxImage.src,
                alt: e.currentLightboxImage.alt
            }, null, 10, gM))]),
            _: 1
        }), C("div", {
            class: J(["lightbox__nav", {
                "lightbox__nav--multiple": e.isImageGalleryMode,
                "lightbox__nav--single": !e.isImageGalleryMode
            }]),
            "data-lightbox-nav": "",
            onClick: n[2] || (n[2] = (...s) => e.goToNextImage && e.goToNextImage(...s))
        }, vM, 2)])])), [[i, "lightbox"]]) : x("", !0)]),
        _: 1
    })
}
const hM = oe(lM, [["render", fM]])
  , yM = re({
    __name: "Page",
    props: {
        pageData: {},
        isInPreviewMode: {
            type: Boolean
        },
        isPreviewMobileView: {
            type: Boolean
        },
        currentPreviewProductPageId: {}
    },
    setup(t, {expose: n}) {
        n(),
        ht(Z => ({
            "304f46bd": de.value
        }));
        const a = t
          , {pages: e, blocks: r, elements: o, nav: i, meta: s, metaTitle: l, ecommerceShoppingCart: d, cookieBannerDisclaimer: p, cookieBannerAcceptText: g, cookieBannerDeclineText: v, currentLocale: f, languageSwitcherLanguages: b, siteId: D, homePageId: T, styles: w, isNavHidden: S, currentPageId: B, currentPageData: I, getPagePathFromId: R, setPageData: $, isDynamicProductPageEnabled: G} = kt()
          , {isStoreTypeZyro: ee, shoppingCartItemCount: K, setShoppingCartOpen: M, areAllEcommerceProductListBlocksLoaded: j, isShoppingCartOpen: q} = Ia()
          , {isLightboxOpen: Y} = ir()
          , L = Sm()
          , {shouldMountAnimationsInPreview: _} = sr()
          , A = E(!1)
          , P = E(null)
          , H = E(0)
          , {width: k} = hb(P)
          , h = u( () => k.value <= Xn)
          , W = u( () => I.value.type)
          , U = u( () => W.value === vm)
          , te = u( () => ma(w.value))
          , Q = u( () => !S.value && !U.value)
          , V = u( () => r.value[wo] && !U.value)
          , O = u( () => B.value === T.value)
          , pe = u( () => e.value?.[T.value]?.name ?? "")
          , fe = u( () => r.value.header.settings.isSticky)
          , ue = u( () => !I.value?.meta?.password || a.isInPreviewMode)
          , Oe = u( () => {
            if (!I.value || I.value.footerSlotIsHidden || U.value)
                return [];
            const Z = Object.keys(r.value).find(Se => r.value[Se].slot === "footer");
            return Z ? [Z] : []
        }
        )
          , he = u( () => I.value ? [...I.value.blocks.filter(Z => Z !== wo), ...Oe.value] : [])
          , X = u( () => sM({
            siteId: D.value,
            meta: s.value,
            blocks: r.value,
            nav: i.value,
            pages: e.value,
            elements: o.value,
            languageMetaTitle: l.value,
            currentLocale: f.value,
            currentPageId: B.value,
            shoppingCartItemCount: K.value,
            languageSwitcherLanguages: b.value,
            getPagePathFromId: ({pageId: Z}) => R({
                pageId: Z
            }),
            isOpen: A.value
        }))
          , ce = u( () => X.value.height)
          , Me = u( () => X.value.heightMobile)
          , de = u( () => `${Me.value + H.value}px`)
          , Ue = u( () => s.value.defaultLocale ?? mn)
          , nt = u( () => ee.value ? d.value?.translations ?? {} : {})
          , Ft = u( () => ee.value ? d.value?.lang ?? "en" : null)
          , St = u( () => he.value.find(Z => !r.value[Z][Cn]?.isHidden))
          , Tt = u( () => he.value.find(Z => !r.value[Z][Aa]?.isHidden))
          , Ee = u( () => {
            const {isTransparent: Z} = r.value.header.background ?? {};
            if (Z && Q.value && Me.value)
                return `${Me.value}px`
        }
        )
          , je = u( () => {
            const {isTransparent: Z} = r.value.header.background ?? {};
            if (Z && Q.value && ce.value)
                return `${ce.value}px`
        }
        )
          , ot = Z => ({
            ...St.value === Z && {
                "--header-height": je.value
            },
            ...Tt.value === Z && {
                "--header-height-mobile": Ee.value
            }
        })
          , rt = u( () => {
            const [Z] = I.value?.blocks ?? [];
            if (r.value?.[Z]?.background?.current === "image")
                return {
                    type: "block-background",
                    id: Z
                };
            if (r.value?.[Z]?.type === "BlockBlogList")
                return {
                    type: "block-blog-list",
                    id: Z
                };
            if (r.value?.[Z]?.type === "BlockEcommerceProduct")
                return {
                    type: "block-ecommerce-product",
                    id: Z
                };
            if (r.value?.[Z]?.type === "BlockEcommerceProductList")
                return {
                    type: "block-ecommerce-product-list",
                    id: Z
                };
            const Be = he.value.filter(We => (r?.value?.[We]?.components?.length ?? 0) > 0).flatMap(We => (r?.value?.[We]?.components ?? []).map(_t => ({
                blockId: We,
                elementId: _t
            }))).filter( ({elementId: We}) => o.value[We]?.type === "GridImage").map( ({blockId: We, elementId: _t}) => {
                const Ht = o.value[_t]
                  , me = Ht.mobile ?? Ht.desktop
                  , {width: Re, height: De} = me ?? Yp(r.value[We], Ht.settings.styles.position);
                return {
                    elementId: _t,
                    imageRatio: De / Re
                }
            }
            )[0];
            return Be ? {
                type: "grid-image",
                id: Be?.elementId
            } : {}
        }
        )
          , vt = async ({hash: Z, isPreviewMode: Se}) => {
            j.value || await new Promise(Be => {
                const We = setInterval( () => {
                    j.value && (clearInterval(We),
                    Be(null))
                }
                , 50)
            }
            ),
            await Nt(),
            Z || window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth"
            }),
            To({
                linkToSection: Z,
                isPreviewMode: Se
            })
        }
          , gt = Z => {
            const {target: Se, href: Be} = Z
              , _t = Se === "_blank" || ar() || a.isInPreviewMode ? "_blank" : "_self";
            window.open(Be, _t)
        }
          , Lt = async Z => {
            if (!Z.target)
                return;
            const Se = Z.target.closest("a");
            if (!Se)
                return;
            const {href: Be, pathname: We, origin: _t, hash: Ht, target: me} = Se;
            if (!Be || Se.hasAttribute(Yc))
                return;
            if (Z.preventDefault(),
            window.location.origin !== _t) {
                gt(Se);
                return
            }
            const De = window.location.pathname === We
              , xt = me === "_blank"
              , Yt = Be.replace(_t, "")
              , en = `${window.location.pathname}${window.location.search}${window.location.hash}`
              , Qe = u( () => L?.currentRoute?.value.name === Fc);
            if (De && !xt && vt({
                hash: Ht,
                isPreviewMode: a.isInPreviewMode
            }),
            xt && !a.isInPreviewMode && !ar())
                window.open(Be, me);
            else if (xt && a.isInPreviewMode || en !== Yt) {
                if (a.isInPreviewMode || Qe.value) {
                    const Bt = Yt.split("#")[0];
                    await L.push(Bt)
                } else
                    window.location.assign(Yt);
                Ht && vt({
                    hash: Ht,
                    isPreviewMode: a.isInPreviewMode
                }),
                A.value = !1
            }
        }
        ;
        Fe( () => a.pageData, Z => {
            $(Z)
        }
        , {
            immediate: !0
        }),
        Fe( () => a.pageData, async () => {
            a.isInPreviewMode && (_.value = !0)
        }
        ),
        Pe( () => {
            H.value = document.querySelector(".block-sticky-bar")?.clientHeight ?? 0;
            const {hash: Z} = window.location;
            Z && vt({
                hash: Z,
                isPreviewMode: a.isInPreviewMode
            })
        }
        );
        const F = {
            props: a,
            pages: e,
            blocks: r,
            elements: o,
            nav: i,
            meta: s,
            metaTitle: l,
            ecommerceShoppingCart: d,
            cookieBannerDisclaimer: p,
            cookieBannerAcceptText: g,
            cookieBannerDeclineText: v,
            currentLocale: f,
            languageSwitcherLanguages: b,
            siteId: D,
            homePageId: T,
            styles: w,
            isNavHidden: S,
            currentPageId: B,
            currentPage: I,
            getPagePathFromId: R,
            setPageData: $,
            isDynamicProductPageEnabled: G,
            isStoreTypeZyro: ee,
            shoppingCartItemCount: K,
            setShoppingCartOpen: M,
            areAllEcommerceProductListBlocksLoaded: j,
            isShoppingCartOpen: q,
            isLightboxOpen: Y,
            router: L,
            shouldMountAnimationsInPreview: _,
            isNavOpen: A,
            blockListRef: P,
            stickyBarHeight: H,
            screenWidth: k,
            isMobile: h,
            currentPageType: W,
            isCurrentPagePrivate: U,
            pageCSSVars: te,
            isHeaderVisible: Q,
            isStickyBarVisible: V,
            isCurrentPageHomepage: O,
            homepageName: pe,
            isHeaderSettingsSticky: fe,
            shouldRenderPage: ue,
            pageBlocksSlotFooter: Oe,
            currentPageBlocks: he,
            headerProps: X,
            headerHeight: ce,
            headerHeightMobile: Me,
            topBarHeightMobilePx: de,
            defaultLocale: Ue,
            ecommerceTranslations: nt,
            language: Ft,
            firstVisibleDesktopBlockId: St,
            firstVisibleMobileBlockId: Tt,
            visibleMobileHeaderHeight: Ee,
            visibleDesktopHeaderHeight: je,
            getHeaderHeightStyles: ot,
            lcp: rt,
            scrollToHash: vt,
            redirectToThirdPartyLink: gt,
            handleGlobalClick: Lt,
            StickyTrigger: Gp,
            CookieBanner: cv,
            BlockUser: dk,
            BlockStickyBarProviderUser: hk,
            PasswordPage: Nk,
            EcommerceShoppingCartProviderUser: T1,
            EcommerceModalRoot: NE,
            BlockHeader: oM,
            Lightbox: hM,
            get BLOCK_STICKY_BAR_ID() {
                return wo
            }
        };
        return Object.defineProperty(F, "__isScriptSetup", {
            enumerable: !1,
            value: !0
        }),
        F
    }
})
  , bM = {
    ref: "blockListRef",
    class: "blocks"
};
function _M(t, n, a, e, r, o) {
    return m(),
    y(ge, null, [e.shouldRenderPage ? (m(),
    y("main", {
        key: 0,
        style: ze(e.pageCSSVars),
        class: "page",
        onClick: e.handleGlobalClick
    }, [e.isHeaderSettingsSticky ? (m(),
    z(e.StickyTrigger, {
        key: 0
    })) : x("", !0), !e.isHeaderSettingsSticky && e.isStickyBarVisible ? (m(),
    z(e.BlockStickyBarProviderUser, {
        key: 1,
        "data-block-id": e.BLOCK_STICKY_BAR_ID,
        data: e.blocks[e.BLOCK_STICKY_BAR_ID],
        components: e.elements,
        lcp: e.lcp
    }, null, 8, ["data-block-id", "data", "components", "lcp"])) : x("", !0), C("div", {
        class: J(["top-blocks", {
            "top-blocks--sticky": e.headerProps.isSticky,
            "top-blocks--preview-mode": e.props.isInPreviewMode
        }])
    }, [e.isHeaderSettingsSticky && e.isStickyBarVisible ? (m(),
    z(e.BlockStickyBarProviderUser, {
        key: 0,
        "data-block-id": e.BLOCK_STICKY_BAR_ID,
        data: e.blocks[e.BLOCK_STICKY_BAR_ID],
        components: e.elements,
        lcp: e.lcp
    }, null, 8, ["data-block-id", "data", "components", "lcp"])) : x("", !0), e.isHeaderVisible ? (m(),
    z(e.BlockHeader, Je({
        key: 1
    }, e.headerProps, {
        "is-in-preview-mode": e.props.isInPreviewMode,
        "is-preview-mobile-view": a.isPreviewMobileView,
        "block-sticky-bar": e.blocks[e.BLOCK_STICKY_BAR_ID],
        onToggleVisibility: n[0] || (n[0] = i => e.isNavOpen = !e.isNavOpen),
        onCartClick: n[1] || (n[1] = i => e.setShoppingCartOpen(!e.isShoppingCartOpen))
    }), null, 16, ["is-in-preview-mode", "is-preview-mobile-view", "block-sticky-bar"])) : x("", !0)], 2), C("div", bM, [(m(!0),
    y(ge, null, Ce(e.currentPageBlocks, i => (m(),
    z(e.BlockUser, {
        id: e.blocks[i].htmlId || i,
        key: `${e.currentPageId}-${i}`,
        data: e.blocks[i],
        blocks: e.blocks,
        lcp: e.lcp,
        "page-id": e.currentPageId,
        "ecommerce-translations": e.ecommerceTranslations,
        "current-page-type": e.currentPageType,
        components: e.elements,
        "screen-width": e.screenWidth,
        style: ze(e.getHeaderHeightStyles(i)),
        "current-locale": e.currentLocale,
        "is-cart-visible": e.headerProps.isCartVisible,
        "is-in-preview-mode": e.props.isInPreviewMode,
        "is-first-visible-desktop-block": e.firstVisibleDesktopBlockId === i,
        "is-first-visible-mobile-block": e.firstVisibleMobileBlockId === i,
        "is-dynamic-product-page-enabled": e.isDynamicProductPageEnabled,
        "current-preview-product-page-id": a.currentPreviewProductPageId
    }, null, 8, ["id", "data", "blocks", "lcp", "page-id", "ecommerce-translations", "current-page-type", "components", "screen-width", "style", "current-locale", "is-cart-visible", "is-in-preview-mode", "is-first-visible-desktop-block", "is-first-visible-mobile-block", "is-dynamic-product-page-enabled", "current-preview-product-page-id"]))), 128))], 512), e.meta.isCookieBarEnabled && !e.isCurrentPagePrivate ? (m(),
    z(e.CookieBanner, {
        key: 2,
        disclaimer: e.cookieBannerDisclaimer || "",
        "accept-text": e.cookieBannerAcceptText,
        "decline-text": e.cookieBannerDeclineText,
        "site-meta": e.meta
    }, null, 8, ["disclaimer", "accept-text", "decline-text", "site-meta"])) : x("", !0), e.headerProps.isCartVisible ? (m(),
    z(e.EcommerceShoppingCartProviderUser, {
        key: 3,
        "ecommerce-translations": e.ecommerceTranslations,
        language: e.language,
        "sticky-bar-height": e.stickyBarHeight,
        "is-header-sticky": e.headerProps.isSticky,
        "is-nav-hidden": !e.isHeaderVisible,
        "is-in-preview-mode": e.props.isInPreviewMode,
        "is-mobile": e.isMobile
    }, null, 8, ["ecommerce-translations", "language", "sticky-bar-height", "is-header-sticky", "is-nav-hidden", "is-in-preview-mode", "is-mobile"])) : x("", !0), Ae(e.EcommerceModalRoot, {
        "ecommerce-translations": e.ecommerceTranslations,
        language: e.language,
        "current-locale": e.currentLocale,
        "is-cart-visible": e.headerProps.isCartVisible,
        "is-in-preview-mode": e.props.isInPreviewMode
    }, null, 8, ["ecommerce-translations", "language", "current-locale", "is-cart-visible", "is-in-preview-mode"])], 4)) : (m(),
    z(e.PasswordPage, {
        key: 1,
        "site-id": e.siteId,
        "page-id": e.currentPageId,
        locale: e.currentLocale,
        "default-locale": e.defaultLocale,
        "in-preview-mode": a.isInPreviewMode,
        "current-page-data": e.currentPage,
        "homepage-name": e.homepageName,
        "is-current-page-homepage": e.isCurrentPageHomepage
    }, null, 8, ["site-id", "page-id", "locale", "default-locale", "in-preview-mode", "current-page-data", "homepage-name", "is-current-page-homepage"])), e.isLightboxOpen ? (m(),
    z(e.Lightbox, {
        key: 2
    })) : x("", !0)], 64)
}
const PM = oe(yM, [["render", _M]]);
export {PM as default};
