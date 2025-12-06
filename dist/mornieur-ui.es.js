import ne from "react";
import oe, { css as x } from "styled-components";
var T = { exports: {} }, R = {};
var D;
function ae() {
  if (D) return R;
  D = 1;
  var a = Symbol.for("react.transitional.element"), i = Symbol.for("react.fragment");
  function m(b, s, c) {
    var E = null;
    if (c !== void 0 && (E = "" + c), s.key !== void 0 && (E = "" + s.key), "key" in s) {
      c = {};
      for (var p in s)
        p !== "key" && (c[p] = s[p]);
    } else c = s;
    return s = c.ref, {
      $$typeof: a,
      type: b,
      key: E,
      ref: s !== void 0 ? s : null,
      props: c
    };
  }
  return R.Fragment = i, R.jsx = m, R.jsxs = m, R;
}
var _ = {};
var L;
function se() {
  return L || (L = 1, process.env.NODE_ENV !== "production" && (function() {
    function a(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === ee ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case k:
          return "Fragment";
        case V:
          return "Profiler";
        case z:
          return "StrictMode";
        case H:
          return "Suspense";
        case Z:
          return "SuspenseList";
        case K:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case J:
            return "Portal";
          case B:
            return (e.displayName || "Context") + ".Provider";
          case G:
            return (e._context.displayName || "Context") + ".Consumer";
          case X:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case Q:
            return r = e.displayName || null, r !== null ? r : a(e.type) || "Memo";
          case j:
            r = e._payload, e = e._init;
            try {
              return a(e(r));
            } catch {
            }
        }
      return null;
    }
    function i(e) {
      return "" + e;
    }
    function m(e) {
      try {
        i(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var t = r.error, n = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          n
        ), i(e);
      }
    }
    function b(e) {
      if (e === k) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === j)
        return "<...>";
      try {
        var r = a(e);
        return r ? "<" + r + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function s() {
      var e = y.A;
      return e === null ? null : e.getOwner();
    }
    function c() {
      return Error("react-stack-top-frame");
    }
    function E(e) {
      if (N.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function p(e, r) {
      function t() {
        F || (F = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      t.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: t,
        configurable: !0
      });
    }
    function U() {
      var e = a(this.type);
      return $[e] || ($[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function q(e, r, t, n, l, u, A, w) {
      return t = u.ref, e = {
        $$typeof: h,
        type: e,
        key: r,
        props: u,
        _owner: l
      }, (t !== void 0 ? t : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: U
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: A
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: w
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function g(e, r, t, n, l, u, A, w) {
      var o = r.children;
      if (o !== void 0)
        if (n)
          if (re(o)) {
            for (n = 0; n < o.length; n++)
              P(o[n]);
            Object.freeze && Object.freeze(o);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else P(o);
      if (N.call(r, "key")) {
        o = a(e);
        var f = Object.keys(r).filter(function(te) {
          return te !== "key";
        });
        n = 0 < f.length ? "{key: someKey, " + f.join(": ..., ") + ": ...}" : "{key: someKey}", I[o + n] || (f = 0 < f.length ? "{" + f.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          n,
          o,
          f,
          o
        ), I[o + n] = !0);
      }
      if (o = null, t !== void 0 && (m(t), o = "" + t), E(r) && (m(r.key), o = "" + r.key), "key" in r) {
        t = {};
        for (var S in r)
          S !== "key" && (t[S] = r[S]);
      } else t = r;
      return o && p(
        t,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), q(
        e,
        o,
        u,
        l,
        s(),
        t,
        A,
        w
      );
    }
    function P(e) {
      typeof e == "object" && e !== null && e.$$typeof === h && e._store && (e._store.validated = 1);
    }
    var v = ne, h = Symbol.for("react.transitional.element"), J = Symbol.for("react.portal"), k = Symbol.for("react.fragment"), z = Symbol.for("react.strict_mode"), V = Symbol.for("react.profiler"), G = Symbol.for("react.consumer"), B = Symbol.for("react.context"), X = Symbol.for("react.forward_ref"), H = Symbol.for("react.suspense"), Z = Symbol.for("react.suspense_list"), Q = Symbol.for("react.memo"), j = Symbol.for("react.lazy"), K = Symbol.for("react.activity"), ee = Symbol.for("react.client.reference"), y = v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, N = Object.prototype.hasOwnProperty, re = Array.isArray, O = console.createTask ? console.createTask : function() {
      return null;
    };
    v = {
      "react-stack-bottom-frame": function(e) {
        return e();
      }
    };
    var F, $ = {}, C = v["react-stack-bottom-frame"].bind(
      v,
      c
    )(), Y = O(b(c)), I = {};
    _.Fragment = k, _.jsx = function(e, r, t, n, l) {
      var u = 1e4 > y.recentlyCreatedOwnerStacks++;
      return g(
        e,
        r,
        t,
        !1,
        n,
        l,
        u ? Error("react-stack-top-frame") : C,
        u ? O(b(e)) : Y
      );
    }, _.jsxs = function(e, r, t, n, l) {
      var u = 1e4 > y.recentlyCreatedOwnerStacks++;
      return g(
        e,
        r,
        t,
        !0,
        n,
        l,
        u ? Error("react-stack-top-frame") : C,
        u ? O(b(e)) : Y
      );
    };
  })()), _;
}
var M;
function ce() {
  return M || (M = 1, process.env.NODE_ENV === "production" ? T.exports = ae() : T.exports = se()), T.exports;
}
var ue = ce();
const d = {
  // Brand
  primary: "#FF6B6F",
  secondary: "#FF8A3D",
  accent: "#FFC347",
  white: "#FFFFFF",
  black: "#000000"
}, W = {
  3: "12px",
  4: "16px"
}, le = {
  medium: "8px"
}, ie = {
  body: "'Inter', sans-serif"
}, fe = oe.button`
  font-family: ${ie.body};
  border-radius: ${le.medium};
  padding: ${W[3]} ${W[4]};
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;

  ${({ variant: a = "primary" }) => {
  switch (a) {
    case "secondary":
      return x`
          background-color: ${d.secondary};
          color: ${d.white};
        `;
    case "accent":
      return x`
          background-color: ${d.accent};
          color: ${d.black};
        `;
    case "primary":
    default:
      return x`
          background-color: ${d.primary};
          color: ${d.white};
        `;
  }
}}
`, be = ({ variant: a = "primary", ...i }) => /* @__PURE__ */ ue.jsx(fe, { variant: a, ...i });
export {
  be as Button
};
