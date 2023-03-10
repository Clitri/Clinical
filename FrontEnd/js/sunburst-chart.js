// Version 1.16.3 sunburst-chart - https://github.com/vasturiano/sunburst-chart
!(function (t, n) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = n())
    : "function" == typeof define && define.amd
    ? define(n)
    : ((t =
        "undefined" != typeof globalThis ? globalThis : t || self).Sunburst =
        n());
})(this, function () {
  "use strict";
  function t(t) {
    return (
      (function (t) {
        if (Array.isArray(t)) return n(t);
      })(t) ||
      (function (t) {
        if (
          ("undefined" != typeof Symbol && null != t[Symbol.iterator]) ||
          null != t["@@iterator"]
        )
          return Array.from(t);
      })(t) ||
      (function (t, e) {
        if (!t) return;
        if ("string" == typeof t) return n(t, e);
        var r = Object.prototype.toString.call(t).slice(8, -1);
        "Object" === r && t.constructor && (r = t.constructor.name);
        if ("Map" === r || "Set" === r) return Array.from(t);
        if (
          "Arguments" === r ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)
        )
          return n(t, e);
      })(t) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function n(t, n) {
    (null == n || n > t.length) && (n = t.length);
    for (var e = 0, r = new Array(n); e < n; e++) r[e] = t[e];
    return r;
  }
  !(function (t, n) {
    void 0 === n && (n = {});
    var e = n.insertAt;
    if (t && "undefined" != typeof document) {
      var r = document.head || document.getElementsByTagName("head")[0],
        i = document.createElement("style");
      (i.type = "text/css"),
        "top" === e && r.firstChild
          ? r.insertBefore(i, r.firstChild)
          : r.appendChild(i),
        i.styleSheet
          ? (i.styleSheet.cssText = t)
          : i.appendChild(document.createTextNode(t));
    }
  })(
    ".sunburst-viz .slice path {\n  cursor: pointer;\n}\n\n.sunburst-viz text {\n  font-family: sans-serif;\n  font-size: 12px;\n  dominant-baseline: middle;\n  text-anchor: middle;\n  pointer-events: none;\n  fill: #222;\n}\n\n.sunburst-viz .text-contour {\n  fill: none;\n  stroke: white;\n  stroke-width: 5;\n  stroke-linejoin: 'round';\n}\n\n.sunburst-viz .main-arc {\n  stroke-width: 1px;\n  transition: opacity .4s;\n}\n\n.sunburst-viz .main-arc:hover {\n  opacity: 0.85;\n  transition: opacity .05s;\n}\n\n.sunburst-viz .hidden-arc {\n  fill: none;\n}\n\n.sunburst-viz .tooltip {\n  max-width: 320px;\n  white-space: nowrap;\n}\n\n.sunburst-viz .tooltip-title {\n  font-weight: bold;\n  text-align: center;\n  margin-bottom: 5px;\n}\n\n.sunburst-viz {\n  position: relative;\n}\n"
  );
  var e = "http://www.w3.org/1999/xhtml",
    r = {
      svg: "http://www.w3.org/2000/svg",
      xhtml: e,
      xlink: "http://www.w3.org/1999/xlink",
      xml: "http://www.w3.org/XML/1998/namespace",
      xmlns: "http://www.w3.org/2000/xmlns/",
    };
  function i(t) {
    var n = (t += ""),
      e = n.indexOf(":");
    return (
      e >= 0 && "xmlns" !== (n = t.slice(0, e)) && (t = t.slice(e + 1)),
      r.hasOwnProperty(n) ? { space: r[n], local: t } : t
    );
  }
  function o(t) {
    return function () {
      var n = this.ownerDocument,
        r = this.namespaceURI;
      return r === e && n.documentElement.namespaceURI === e
        ? n.createElement(t)
        : n.createElementNS(r, t);
    };
  }
  function a(t) {
    return function () {
      return this.ownerDocument.createElementNS(t.space, t.local);
    };
  }
  function u(t) {
    var n = i(t);
    return (n.local ? a : o)(n);
  }
  function s() {}
  function c(t) {
    return null == t
      ? s
      : function () {
          return this.querySelector(t);
        };
  }
  function l(t) {
    return null == t ? [] : Array.isArray(t) ? t : Array.from(t);
  }
  function h() {
    return [];
  }
  function f(t) {
    return null == t
      ? h
      : function () {
          return this.querySelectorAll(t);
        };
  }
  function p(t) {
    return function () {
      return this.matches(t);
    };
  }
  function _(t) {
    return function (n) {
      return n.matches(t);
    };
  }
  var d = Array.prototype.find;
  function y() {
    return this.firstElementChild;
  }
  var g = Array.prototype.filter;
  function v() {
    return Array.from(this.children);
  }
  function m(t) {
    return new Array(t.length);
  }
  function x(t, n) {
    (this.ownerDocument = t.ownerDocument),
      (this.namespaceURI = t.namespaceURI),
      (this._next = null),
      (this._parent = t),
      (this.__data__ = n);
  }
  function w(t) {
    return function () {
      return t;
    };
  }
  function b(t, n, e, r, i, o) {
    for (var a, u = 0, s = n.length, c = o.length; u < c; ++u)
      (a = n[u]) ? ((a.__data__ = o[u]), (r[u] = a)) : (e[u] = new x(t, o[u]));
    for (; u < s; ++u) (a = n[u]) && (i[u] = a);
  }
  function M(t, n, e, r, i, o, a) {
    var u,
      s,
      c,
      l = new Map(),
      h = n.length,
      f = o.length,
      p = new Array(h);
    for (u = 0; u < h; ++u)
      (s = n[u]) &&
        ((p[u] = c = a.call(s, s.__data__, u, n) + ""),
        l.has(c) ? (i[u] = s) : l.set(c, s));
    for (u = 0; u < f; ++u)
      (c = a.call(t, o[u], u, o) + ""),
        (s = l.get(c))
          ? ((r[u] = s), (s.__data__ = o[u]), l.delete(c))
          : (e[u] = new x(t, o[u]));
    for (u = 0; u < h; ++u) (s = n[u]) && l.get(p[u]) === s && (i[u] = s);
  }
  function T(t) {
    return t.__data__;
  }
  function S(t) {
    return "object" == typeof t && "length" in t ? t : Array.from(t);
  }
  function N(t, n) {
    return t < n ? -1 : t > n ? 1 : t >= n ? 0 : NaN;
  }
  function C(t) {
    return function () {
      this.removeAttribute(t);
    };
  }
  function A(t) {
    return function () {
      this.removeAttributeNS(t.space, t.local);
    };
  }
  function k(t, n) {
    return function () {
      this.setAttribute(t, n);
    };
  }
  function E(t, n) {
    return function () {
      this.setAttributeNS(t.space, t.local, n);
    };
  }
  function U(t, n) {
    return function () {
      var e = n.apply(this, arguments);
      null == e ? this.removeAttribute(t) : this.setAttribute(t, e);
    };
  }
  function D(t, n) {
    return function () {
      var e = n.apply(this, arguments);
      null == e
        ? this.removeAttributeNS(t.space, t.local)
        : this.setAttributeNS(t.space, t.local, e);
    };
  }
  function P(t) {
    return (
      (t.ownerDocument && t.ownerDocument.defaultView) ||
      (t.document && t) ||
      t.defaultView
    );
  }
  function $(t) {
    return function () {
      this.style.removeProperty(t);
    };
  }
  function O(t, n, e) {
    return function () {
      this.style.setProperty(t, n, e);
    };
  }
  function F(t, n, e) {
    return function () {
      var r = n.apply(this, arguments);
      null == r
        ? this.style.removeProperty(t)
        : this.style.setProperty(t, r, e);
    };
  }
  function H(t, n) {
    return (
      t.style.getPropertyValue(n) ||
      P(t).getComputedStyle(t, null).getPropertyValue(n)
    );
  }
  function Y(t) {
    return function () {
      delete this[t];
    };
  }
  function I(t, n) {
    return function () {
      this[t] = n;
    };
  }
  function L(t, n) {
    return function () {
      var e = n.apply(this, arguments);
      null == e ? delete this[t] : (this[t] = e);
    };
  }
  function q(t) {
    return t.trim().split(/^|\s+/);
  }
  function j(t) {
    return t.classList || new R(t);
  }
  function R(t) {
    (this._node = t), (this._names = q(t.getAttribute("class") || ""));
  }
  function z(t, n) {
    for (var e = j(t), r = -1, i = n.length; ++r < i; ) e.add(n[r]);
  }
  function B(t, n) {
    for (var e = j(t), r = -1, i = n.length; ++r < i; ) e.remove(n[r]);
  }
  function X(t) {
    return function () {
      z(this, t);
    };
  }
  function V(t) {
    return function () {
      B(this, t);
    };
  }
  function Z(t, n) {
    return function () {
      (n.apply(this, arguments) ? z : B)(this, t);
    };
  }
  function W() {
    this.textContent = "";
  }
  function Q(t) {
    return function () {
      this.textContent = t;
    };
  }
  function G(t) {
    return function () {
      var n = t.apply(this, arguments);
      this.textContent = null == n ? "" : n;
    };
  }
  function J() {
    this.innerHTML = "";
  }
  function K(t) {
    return function () {
      this.innerHTML = t;
    };
  }
  function tt(t) {
    return function () {
      var n = t.apply(this, arguments);
      this.innerHTML = null == n ? "" : n;
    };
  }
  function nt() {
    this.nextSibling && this.parentNode.appendChild(this);
  }
  function et() {
    this.previousSibling &&
      this.parentNode.insertBefore(this, this.parentNode.firstChild);
  }
  function rt() {
    return null;
  }
  function it() {
    var t = this.parentNode;
    t && t.removeChild(this);
  }
  function ot() {
    var t = this.cloneNode(!1),
      n = this.parentNode;
    return n ? n.insertBefore(t, this.nextSibling) : t;
  }
  function at() {
    var t = this.cloneNode(!0),
      n = this.parentNode;
    return n ? n.insertBefore(t, this.nextSibling) : t;
  }
  function ut(t) {
    return t
      .trim()
      .split(/^|\s+/)
      .map(function (t) {
        var n = "",
          e = t.indexOf(".");
        return (
          e >= 0 && ((n = t.slice(e + 1)), (t = t.slice(0, e))),
          { type: t, name: n }
        );
      });
  }
  function st(t) {
    return function () {
      var n = this.__on;
      if (n) {
        for (var e, r = 0, i = -1, o = n.length; r < o; ++r)
          (e = n[r]),
            (t.type && e.type !== t.type) || e.name !== t.name
              ? (n[++i] = e)
              : this.removeEventListener(e.type, e.listener, e.options);
        ++i ? (n.length = i) : delete this.__on;
      }
    };
  }
  function ct(t, n, e) {
    return function () {
      var r,
        i = this.__on,
        o = (function (t) {
          return function (n) {
            t.call(this, n, this.__data__);
          };
        })(n);
      if (i)
        for (var a = 0, u = i.length; a < u; ++a)
          if ((r = i[a]).type === t.type && r.name === t.name)
            return (
              this.removeEventListener(r.type, r.listener, r.options),
              this.addEventListener(r.type, (r.listener = o), (r.options = e)),
              void (r.value = n)
            );
      this.addEventListener(t.type, o, e),
        (r = { type: t.type, name: t.name, value: n, listener: o, options: e }),
        i ? i.push(r) : (this.__on = [r]);
    };
  }
  function lt(t, n, e) {
    var r = P(t),
      i = r.CustomEvent;
    "function" == typeof i
      ? (i = new i(n, e))
      : ((i = r.document.createEvent("Event")),
        e
          ? (i.initEvent(n, e.bubbles, e.cancelable), (i.detail = e.detail))
          : i.initEvent(n, !1, !1)),
      t.dispatchEvent(i);
  }
  function ht(t, n) {
    return function () {
      return lt(this, t, n);
    };
  }
  function ft(t, n) {
    return function () {
      return lt(this, t, n.apply(this, arguments));
    };
  }
  (x.prototype = {
    constructor: x,
    appendChild: function (t) {
      return this._parent.insertBefore(t, this._next);
    },
    insertBefore: function (t, n) {
      return this._parent.insertBefore(t, n);
    },
    querySelector: function (t) {
      return this._parent.querySelector(t);
    },
    querySelectorAll: function (t) {
      return this._parent.querySelectorAll(t);
    },
  }),
    (R.prototype = {
      add: function (t) {
        this._names.indexOf(t) < 0 &&
          (this._names.push(t),
          this._node.setAttribute("class", this._names.join(" ")));
      },
      remove: function (t) {
        var n = this._names.indexOf(t);
        n >= 0 &&
          (this._names.splice(n, 1),
          this._node.setAttribute("class", this._names.join(" ")));
      },
      contains: function (t) {
        return this._names.indexOf(t) >= 0;
      },
    });
  var pt = [null];
  function _t(t, n) {
    (this._groups = t), (this._parents = n);
  }
  function dt() {
    return new _t([[document.documentElement]], pt);
  }
  function yt(t) {
    return "string" == typeof t
      ? new _t([[document.querySelector(t)]], [document.documentElement])
      : new _t([[t]], pt);
  }
  _t.prototype = dt.prototype = {
    constructor: _t,
    select: function (t) {
      "function" != typeof t && (t = c(t));
      for (
        var n = this._groups, e = n.length, r = new Array(e), i = 0;
        i < e;
        ++i
      )
        for (
          var o, a, u = n[i], s = u.length, l = (r[i] = new Array(s)), h = 0;
          h < s;
          ++h
        )
          (o = u[h]) &&
            (a = t.call(o, o.__data__, h, u)) &&
            ("__data__" in o && (a.__data__ = o.__data__), (l[h] = a));
      return new _t(r, this._parents);
    },
    selectAll: function (t) {
      t =
        "function" == typeof t
          ? (function (t) {
              return function () {
                return l(t.apply(this, arguments));
              };
            })(t)
          : f(t);
      for (
        var n = this._groups, e = n.length, r = [], i = [], o = 0;
        o < e;
        ++o
      )
        for (var a, u = n[o], s = u.length, c = 0; c < s; ++c)
          (a = u[c]) && (r.push(t.call(a, a.__data__, c, u)), i.push(a));
      return new _t(r, i);
    },
    selectChild: function (t) {
      return this.select(
        null == t
          ? y
          : (function (t) {
              return function () {
                return d.call(this.children, t);
              };
            })("function" == typeof t ? t : _(t))
      );
    },
    selectChildren: function (t) {
      return this.selectAll(
        null == t
          ? v
          : (function (t) {
              return function () {
                return g.call(this.children, t);
              };
            })("function" == typeof t ? t : _(t))
      );
    },
    filter: function (t) {
      "function" != typeof t && (t = p(t));
      for (
        var n = this._groups, e = n.length, r = new Array(e), i = 0;
        i < e;
        ++i
      )
        for (var o, a = n[i], u = a.length, s = (r[i] = []), c = 0; c < u; ++c)
          (o = a[c]) && t.call(o, o.__data__, c, a) && s.push(o);
      return new _t(r, this._parents);
    },
    data: function (t, n) {
      if (!arguments.length) return Array.from(this, T);
      var e = n ? M : b,
        r = this._parents,
        i = this._groups;
      "function" != typeof t && (t = w(t));
      for (
        var o = i.length,
          a = new Array(o),
          u = new Array(o),
          s = new Array(o),
          c = 0;
        c < o;
        ++c
      ) {
        var l = r[c],
          h = i[c],
          f = h.length,
          p = S(t.call(l, l && l.__data__, c, r)),
          _ = p.length,
          d = (u[c] = new Array(_)),
          y = (a[c] = new Array(_)),
          g = (s[c] = new Array(f));
        e(l, h, d, y, g, p, n);
        for (var v, m, x = 0, N = 0; x < _; ++x)
          if ((v = d[x])) {
            for (x >= N && (N = x + 1); !(m = y[N]) && ++N < _; );
            v._next = m || null;
          }
      }
      return ((a = new _t(a, r))._enter = u), (a._exit = s), a;
    },
    enter: function () {
      return new _t(this._enter || this._groups.map(m), this._parents);
    },
    exit: function () {
      return new _t(this._exit || this._groups.map(m), this._parents);
    },
    join: function (t, n, e) {
      var r = this.enter(),
        i = this,
        o = this.exit();
      return (
        "function" == typeof t
          ? (r = t(r)) && (r = r.selection())
          : (r = r.append(t + "")),
        null != n && (i = n(i)) && (i = i.selection()),
        null == e ? o.remove() : e(o),
        r && i ? r.merge(i).order() : i
      );
    },
    merge: function (t) {
      for (
        var n = t.selection ? t.selection() : t,
          e = this._groups,
          r = n._groups,
          i = e.length,
          o = r.length,
          a = Math.min(i, o),
          u = new Array(i),
          s = 0;
        s < a;
        ++s
      )
        for (
          var c,
            l = e[s],
            h = r[s],
            f = l.length,
            p = (u[s] = new Array(f)),
            _ = 0;
          _ < f;
          ++_
        )
          (c = l[_] || h[_]) && (p[_] = c);
      for (; s < i; ++s) u[s] = e[s];
      return new _t(u, this._parents);
    },
    selection: function () {
      return this;
    },
    order: function () {
      for (var t = this._groups, n = -1, e = t.length; ++n < e; )
        for (var r, i = t[n], o = i.length - 1, a = i[o]; --o >= 0; )
          (r = i[o]) &&
            (a &&
              4 ^ r.compareDocumentPosition(a) &&
              a.parentNode.insertBefore(r, a),
            (a = r));
      return this;
    },
    sort: function (t) {
      function n(n, e) {
        return n && e ? t(n.__data__, e.__data__) : !n - !e;
      }
      t || (t = N);
      for (
        var e = this._groups, r = e.length, i = new Array(r), o = 0;
        o < r;
        ++o
      ) {
        for (
          var a, u = e[o], s = u.length, c = (i[o] = new Array(s)), l = 0;
          l < s;
          ++l
        )
          (a = u[l]) && (c[l] = a);
        c.sort(n);
      }
      return new _t(i, this._parents).order();
    },
    call: function () {
      var t = arguments[0];
      return (arguments[0] = this), t.apply(null, arguments), this;
    },
    nodes: function () {
      return Array.from(this);
    },
    node: function () {
      for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
        for (var r = t[n], i = 0, o = r.length; i < o; ++i) {
          var a = r[i];
          if (a) return a;
        }
      return null;
    },
    size: function () {
      let t = 0;
      for (const n of this) ++t;
      return t;
    },
    empty: function () {
      return !this.node();
    },
    each: function (t) {
      for (var n = this._groups, e = 0, r = n.length; e < r; ++e)
        for (var i, o = n[e], a = 0, u = o.length; a < u; ++a)
          (i = o[a]) && t.call(i, i.__data__, a, o);
      return this;
    },
    attr: function (t, n) {
      var e = i(t);
      if (arguments.length < 2) {
        var r = this.node();
        return e.local ? r.getAttributeNS(e.space, e.local) : r.getAttribute(e);
      }
      return this.each(
        (null == n
          ? e.local
            ? A
            : C
          : "function" == typeof n
          ? e.local
            ? D
            : U
          : e.local
          ? E
          : k)(e, n)
      );
    },
    style: function (t, n, e) {
      return arguments.length > 1
        ? this.each(
            (null == n ? $ : "function" == typeof n ? F : O)(
              t,
              n,
              null == e ? "" : e
            )
          )
        : H(this.node(), t);
    },
    property: function (t, n) {
      return arguments.length > 1
        ? this.each((null == n ? Y : "function" == typeof n ? L : I)(t, n))
        : this.node()[t];
    },
    classed: function (t, n) {
      var e = q(t + "");
      if (arguments.length < 2) {
        for (var r = j(this.node()), i = -1, o = e.length; ++i < o; )
          if (!r.contains(e[i])) return !1;
        return !0;
      }
      return this.each(("function" == typeof n ? Z : n ? X : V)(e, n));
    },
    text: function (t) {
      return arguments.length
        ? this.each(null == t ? W : ("function" == typeof t ? G : Q)(t))
        : this.node().textContent;
    },
    html: function (t) {
      return arguments.length
        ? this.each(null == t ? J : ("function" == typeof t ? tt : K)(t))
        : this.node().innerHTML;
    },
    raise: function () {
      return this.each(nt);
    },
    lower: function () {
      return this.each(et);
    },
    append: function (t) {
      var n = "function" == typeof t ? t : u(t);
      return this.select(function () {
        return this.appendChild(n.apply(this, arguments));
      });
    },
    insert: function (t, n) {
      var e = "function" == typeof t ? t : u(t),
        r = null == n ? rt : "function" == typeof n ? n : c(n);
      return this.select(function () {
        return this.insertBefore(
          e.apply(this, arguments),
          r.apply(this, arguments) || null
        );
      });
    },
    remove: function () {
      return this.each(it);
    },
    clone: function (t) {
      return this.select(t ? at : ot);
    },
    datum: function (t) {
      return arguments.length
        ? this.property("__data__", t)
        : this.node().__data__;
    },
    on: function (t, n, e) {
      var r,
        i,
        o = ut(t + ""),
        a = o.length;
      if (!(arguments.length < 2)) {
        for (u = n ? ct : st, r = 0; r < a; ++r) this.each(u(o[r], n, e));
        return this;
      }
      var u = this.node().__on;
      if (u)
        for (var s, c = 0, l = u.length; c < l; ++c)
          for (r = 0, s = u[c]; r < a; ++r)
            if ((i = o[r]).type === s.type && i.name === s.name) return s.value;
    },
    dispatch: function (t, n) {
      return this.each(("function" == typeof n ? ft : ht)(t, n));
    },
    [Symbol.iterator]: function* () {
      for (var t = this._groups, n = 0, e = t.length; n < e; ++n)
        for (var r, i = t[n], o = 0, a = i.length; o < a; ++o)
          (r = i[o]) && (yield r);
    },
  };
  var gt = 0;
  function vt() {
    this._ = "@" + (++gt).toString(36);
  }
  function mt(t, n) {
    return null == t || null == n
      ? NaN
      : t < n
      ? -1
      : t > n
      ? 1
      : t >= n
      ? 0
      : NaN;
  }
  function xt(t, n) {
    return null == t || null == n
      ? NaN
      : n < t
      ? -1
      : n > t
      ? 1
      : n >= t
      ? 0
      : NaN;
  }
  function wt(t) {
    let n, e, r;
    function i(t, r, i = 0, o = t.length) {
      if (i < o) {
        if (0 !== n(r, r)) return o;
        do {
          const n = (i + o) >>> 1;
          e(t[n], r) < 0 ? (i = n + 1) : (o = n);
        } while (i < o);
      }
      return i;
    }
    return (
      2 !== t.length
        ? ((n = mt), (e = (n, e) => mt(t(n), e)), (r = (n, e) => t(n) - e))
        : ((n = t === mt || t === xt ? t : bt), (e = t), (r = t)),
      {
        left: i,
        center: function (t, n, e = 0, o = t.length) {
          const a = i(t, n, e, o - 1);
          return a > e && r(t[a - 1], n) > -r(t[a], n) ? a - 1 : a;
        },
        right: function (t, r, i = 0, o = t.length) {
          if (i < o) {
            if (0 !== n(r, r)) return o;
            do {
              const n = (i + o) >>> 1;
              e(t[n], r) <= 0 ? (i = n + 1) : (o = n);
            } while (i < o);
          }
          return i;
        },
      }
    );
  }
  function bt() {
    return 0;
  }
  vt.prototype = {
    constructor: vt,
    get: function (t) {
      for (var n = this._; !(n in t); ) if (!(t = t.parentNode)) return;
      return t[n];
    },
    set: function (t, n) {
      return (t[this._] = n);
    },
    remove: function (t) {
      return this._ in t && delete t[this._];
    },
    toString: function () {
      return this._;
    },
  };
  const Mt = wt(mt).right;
  wt(function (t) {
    return null === t ? NaN : +t;
  }).center;
  var Tt = Math.sqrt(50),
    St = Math.sqrt(10),
    Nt = Math.sqrt(2);
  function Ct(t, n, e) {
    var r = (n - t) / Math.max(0, e),
      i = Math.floor(Math.log(r) / Math.LN10),
      o = r / Math.pow(10, i);
    return i >= 0
      ? (o >= Tt ? 10 : o >= St ? 5 : o >= Nt ? 2 : 1) * Math.pow(10, i)
      : -Math.pow(10, -i) / (o >= Tt ? 10 : o >= St ? 5 : o >= Nt ? 2 : 1);
  }
  function At(t, n) {
    switch (arguments.length) {
      case 0:
        break;
      case 1:
        this.range(t);
        break;
      default:
        this.range(n).domain(t);
    }
    return this;
  }
  function kt(t, n, e) {
    (t.prototype = n.prototype = e), (e.constructor = t);
  }
  function Et(t, n) {
    var e = Object.create(t.prototype);
    for (var r in n) e[r] = n[r];
    return e;
  }
  function Ut() {}
  var Dt = 0.7,
    Pt = 1 / Dt,
    $t = "\\s*([+-]?\\d+)\\s*",
    Ot = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",
    Ft = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
    Ht = /^#([0-9a-f]{3,8})$/,
    Yt = new RegExp(`^rgb\\(${$t},${$t},${$t}\\)$`),
    It = new RegExp(`^rgb\\(${Ft},${Ft},${Ft}\\)$`),
    Lt = new RegExp(`^rgba\\(${$t},${$t},${$t},${Ot}\\)$`),
    qt = new RegExp(`^rgba\\(${Ft},${Ft},${Ft},${Ot}\\)$`),
    jt = new RegExp(`^hsl\\(${Ot},${Ft},${Ft}\\)$`),
    Rt = new RegExp(`^hsla\\(${Ot},${Ft},${Ft},${Ot}\\)$`),
    zt = {
      aliceblue: 15792383,
      antiquewhite: 16444375,
      aqua: 65535,
      aquamarine: 8388564,
      azure: 15794175,
      beige: 16119260,
      bisque: 16770244,
      black: 0,
      blanchedalmond: 16772045,
      blue: 255,
      blueviolet: 9055202,
      brown: 10824234,
      burlywood: 14596231,
      cadetblue: 6266528,
      chartreuse: 8388352,
      chocolate: 13789470,
      coral: 16744272,
      cornflowerblue: 6591981,
      cornsilk: 16775388,
      crimson: 14423100,
      cyan: 65535,
      darkblue: 139,
      darkcyan: 35723,
      darkgoldenrod: 12092939,
      darkgray: 11119017,
      darkgreen: 25600,
      darkgrey: 11119017,
      darkkhaki: 12433259,
      darkmagenta: 9109643,
      darkolivegreen: 5597999,
      darkorange: 16747520,
      darkorchid: 10040012,
      darkred: 9109504,
      darksalmon: 15308410,
      darkseagreen: 9419919,
      darkslateblue: 4734347,
      darkslategray: 3100495,
      darkslategrey: 3100495,
      darkturquoise: 52945,
      darkviolet: 9699539,
      deeppink: 16716947,
      deepskyblue: 49151,
      dimgray: 6908265,
      dimgrey: 6908265,
      dodgerblue: 2003199,
      firebrick: 11674146,
      floralwhite: 16775920,
      forestgreen: 2263842,
      fuchsia: 16711935,
      gainsboro: 14474460,
      ghostwhite: 16316671,
      gold: 16766720,
      goldenrod: 14329120,
      gray: 8421504,
      green: 32768,
      greenyellow: 11403055,
      grey: 8421504,
      honeydew: 15794160,
      hotpink: 16738740,
      indianred: 13458524,
      indigo: 4915330,
      ivory: 16777200,
      khaki: 15787660,
      lavender: 15132410,
      lavenderblush: 16773365,
      lawngreen: 8190976,
      lemonchiffon: 16775885,
      lightblue: 11393254,
      lightcoral: 15761536,
      lightcyan: 14745599,
      lightgoldenrodyellow: 16448210,
      lightgray: 13882323,
      lightgreen: 9498256,
      lightgrey: 13882323,
      lightpink: 16758465,
      lightsalmon: 16752762,
      lightseagreen: 2142890,
      lightskyblue: 8900346,
      lightslategray: 7833753,
      lightslategrey: 7833753,
      lightsteelblue: 11584734,
      lightyellow: 16777184,
      lime: 65280,
      limegreen: 3329330,
      linen: 16445670,
      magenta: 16711935,
      maroon: 8388608,
      mediumaquamarine: 6737322,
      mediumblue: 205,
      mediumorchid: 12211667,
      mediumpurple: 9662683,
      mediumseagreen: 3978097,
      mediumslateblue: 8087790,
      mediumspringgreen: 64154,
      mediumturquoise: 4772300,
      mediumvioletred: 13047173,
      midnightblue: 1644912,
      mintcream: 16121850,
      mistyrose: 16770273,
      moccasin: 16770229,
      navajowhite: 16768685,
      navy: 128,
      oldlace: 16643558,
      olive: 8421376,
      olivedrab: 7048739,
      orange: 16753920,
      orangered: 16729344,
      orchid: 14315734,
      palegoldenrod: 15657130,
      palegreen: 10025880,
      paleturquoise: 11529966,
      palevioletred: 14381203,
      papayawhip: 16773077,
      peachpuff: 16767673,
      peru: 13468991,
      pink: 16761035,
      plum: 14524637,
      powderblue: 11591910,
      purple: 8388736,
      rebeccapurple: 6697881,
      red: 16711680,
      rosybrown: 12357519,
      royalblue: 4286945,
      saddlebrown: 9127187,
      salmon: 16416882,
      sandybrown: 16032864,
      seagreen: 3050327,
      seashell: 16774638,
      sienna: 10506797,
      silver: 12632256,
      skyblue: 8900331,
      slateblue: 6970061,
      slategray: 7372944,
      slategrey: 7372944,
      snow: 16775930,
      springgreen: 65407,
      steelblue: 4620980,
      tan: 13808780,
      teal: 32896,
      thistle: 14204888,
      tomato: 16737095,
      turquoise: 4251856,
      violet: 15631086,
      wheat: 16113331,
      white: 16777215,
      whitesmoke: 16119285,
      yellow: 16776960,
      yellowgreen: 10145074,
    };
  function Bt() {
    return this.rgb().formatHex();
  }
  function Xt() {
    return this.rgb().formatRgb();
  }
  function Vt(t) {
    var n, e;
    return (
      (t = (t + "").trim().toLowerCase()),
      (n = Ht.exec(t))
        ? ((e = n[1].length),
          (n = parseInt(n[1], 16)),
          6 === e
            ? Zt(n)
            : 3 === e
            ? new Jt(
                ((n >> 8) & 15) | ((n >> 4) & 240),
                ((n >> 4) & 15) | (240 & n),
                ((15 & n) << 4) | (15 & n),
                1
              )
            : 8 === e
            ? Wt(
                (n >> 24) & 255,
                (n >> 16) & 255,
                (n >> 8) & 255,
                (255 & n) / 255
              )
            : 4 === e
            ? Wt(
                ((n >> 12) & 15) | ((n >> 8) & 240),
                ((n >> 8) & 15) | ((n >> 4) & 240),
                ((n >> 4) & 15) | (240 & n),
                (((15 & n) << 4) | (15 & n)) / 255
              )
            : null)
        : (n = Yt.exec(t))
        ? new Jt(n[1], n[2], n[3], 1)
        : (n = It.exec(t))
        ? new Jt((255 * n[1]) / 100, (255 * n[2]) / 100, (255 * n[3]) / 100, 1)
        : (n = Lt.exec(t))
        ? Wt(n[1], n[2], n[3], n[4])
        : (n = qt.exec(t))
        ? Wt((255 * n[1]) / 100, (255 * n[2]) / 100, (255 * n[3]) / 100, n[4])
        : (n = jt.exec(t))
        ? on(n[1], n[2] / 100, n[3] / 100, 1)
        : (n = Rt.exec(t))
        ? on(n[1], n[2] / 100, n[3] / 100, n[4])
        : zt.hasOwnProperty(t)
        ? Zt(zt[t])
        : "transparent" === t
        ? new Jt(NaN, NaN, NaN, 0)
        : null
    );
  }
  function Zt(t) {
    return new Jt((t >> 16) & 255, (t >> 8) & 255, 255 & t, 1);
  }
  function Wt(t, n, e, r) {
    return r <= 0 && (t = n = e = NaN), new Jt(t, n, e, r);
  }
  function Qt(t) {
    return (
      t instanceof Ut || (t = Vt(t)),
      t ? new Jt((t = t.rgb()).r, t.g, t.b, t.opacity) : new Jt()
    );
  }
  function Gt(t, n, e, r) {
    return 1 === arguments.length ? Qt(t) : new Jt(t, n, e, null == r ? 1 : r);
  }
  function Jt(t, n, e, r) {
    (this.r = +t), (this.g = +n), (this.b = +e), (this.opacity = +r);
  }
  function Kt() {
    return `#${rn(this.r)}${rn(this.g)}${rn(this.b)}`;
  }
  function tn() {
    const t = nn(this.opacity);
    return `${
      1 === t ? "rgb(" : "rgba("
    }${en(this.r)}, ${en(this.g)}, ${en(this.b)}${1 === t ? ")" : `, ${t})`}`;
  }
  function nn(t) {
    return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
  }
  function en(t) {
    return Math.max(0, Math.min(255, Math.round(t) || 0));
  }
  function rn(t) {
    return ((t = en(t)) < 16 ? "0" : "") + t.toString(16);
  }
  function on(t, n, e, r) {
    return (
      r <= 0
        ? (t = n = e = NaN)
        : e <= 0 || e >= 1
        ? (t = n = NaN)
        : n <= 0 && (t = NaN),
      new un(t, n, e, r)
    );
  }
  function an(t) {
    if (t instanceof un) return new un(t.h, t.s, t.l, t.opacity);
    if ((t instanceof Ut || (t = Vt(t)), !t)) return new un();
    if (t instanceof un) return t;
    var n = (t = t.rgb()).r / 255,
      e = t.g / 255,
      r = t.b / 255,
      i = Math.min(n, e, r),
      o = Math.max(n, e, r),
      a = NaN,
      u = o - i,
      s = (o + i) / 2;
    return (
      u
        ? ((a =
            n === o
              ? (e - r) / u + 6 * (e < r)
              : e === o
              ? (r - n) / u + 2
              : (n - e) / u + 4),
          (u /= s < 0.5 ? o + i : 2 - o - i),
          (a *= 60))
        : (u = s > 0 && s < 1 ? 0 : a),
      new un(a, u, s, t.opacity)
    );
  }
  function un(t, n, e, r) {
    (this.h = +t), (this.s = +n), (this.l = +e), (this.opacity = +r);
  }
  function sn(t) {
    return (t = (t || 0) % 360) < 0 ? t + 360 : t;
  }
  function cn(t) {
    return Math.max(0, Math.min(1, t || 0));
  }
  function ln(t, n, e) {
    return (
      255 *
      (t < 60
        ? n + ((e - n) * t) / 60
        : t < 180
        ? e
        : t < 240
        ? n + ((e - n) * (240 - t)) / 60
        : n)
    );
  }
  kt(Ut, Vt, {
    copy(t) {
      return Object.assign(new this.constructor(), this, t);
    },
    displayable() {
      return this.rgb().displayable();
    },
    hex: Bt,
    formatHex: Bt,
    formatHex8: function () {
      return this.rgb().formatHex8();
    },
    formatHsl: function () {
      return an(this).formatHsl();
    },
    formatRgb: Xt,
    toString: Xt,
  }),
    kt(
      Jt,
      Gt,
      Et(Ut, {
        brighter(t) {
          return (
            (t = null == t ? Pt : Math.pow(Pt, t)),
            new Jt(this.r * t, this.g * t, this.b * t, this.opacity)
          );
        },
        darker(t) {
          return (
            (t = null == t ? Dt : Math.pow(Dt, t)),
            new Jt(this.r * t, this.g * t, this.b * t, this.opacity)
          );
        },
        rgb() {
          return this;
        },
        clamp() {
          return new Jt(en(this.r), en(this.g), en(this.b), nn(this.opacity));
        },
        displayable() {
          return (
            -0.5 <= this.r &&
            this.r < 255.5 &&
            -0.5 <= this.g &&
            this.g < 255.5 &&
            -0.5 <= this.b &&
            this.b < 255.5 &&
            0 <= this.opacity &&
            this.opacity <= 1
          );
        },
        hex: Kt,
        formatHex: Kt,
        formatHex8: function () {
          return `#${rn(this.r)}${rn(this.g)}${rn(this.b)}${rn(
            255 * (isNaN(this.opacity) ? 1 : this.opacity)
          )}`;
        },
        formatRgb: tn,
        toString: tn,
      })
    ),
    kt(
      un,
      function (t, n, e, r) {
        return 1 === arguments.length
          ? an(t)
          : new un(t, n, e, null == r ? 1 : r);
      },
      Et(Ut, {
        brighter(t) {
          return (
            (t = null == t ? Pt : Math.pow(Pt, t)),
            new un(this.h, this.s, this.l * t, this.opacity)
          );
        },
        darker(t) {
          return (
            (t = null == t ? Dt : Math.pow(Dt, t)),
            new un(this.h, this.s, this.l * t, this.opacity)
          );
        },
        rgb() {
          var t = (this.h % 360) + 360 * (this.h < 0),
            n = isNaN(t) || isNaN(this.s) ? 0 : this.s,
            e = this.l,
            r = e + (e < 0.5 ? e : 1 - e) * n,
            i = 2 * e - r;
          return new Jt(
            ln(t >= 240 ? t - 240 : t + 120, i, r),
            ln(t, i, r),
            ln(t < 120 ? t + 240 : t - 120, i, r),
            this.opacity
          );
        },
        clamp() {
          return new un(sn(this.h), cn(this.s), cn(this.l), nn(this.opacity));
        },
        displayable() {
          return (
            ((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
            0 <= this.l &&
            this.l <= 1 &&
            0 <= this.opacity &&
            this.opacity <= 1
          );
        },
        formatHsl() {
          const t = nn(this.opacity);
          return `${1 === t ? "hsl(" : "hsla("}${sn(this.h)}, ${
            100 * cn(this.s)
          }%, ${100 * cn(this.l)}%${1 === t ? ")" : `, ${t})`}`;
        },
      })
    );
  const hn = Math.PI / 180,
    fn = 180 / Math.PI,
    pn = 0.96422,
    _n = 0.82521,
    dn = 4 / 29,
    yn = 6 / 29,
    gn = 3 * yn * yn;
  function vn(t) {
    if (t instanceof mn) return new mn(t.l, t.a, t.b, t.opacity);
    if (t instanceof Sn) return Nn(t);
    t instanceof Jt || (t = Qt(t));
    var n,
      e,
      r = Mn(t.r),
      i = Mn(t.g),
      o = Mn(t.b),
      a = xn((0.2225045 * r + 0.7168786 * i + 0.0606169 * o) / 1);
    return (
      r === i && i === o
        ? (n = e = a)
        : ((n = xn((0.4360747 * r + 0.3850649 * i + 0.1430804 * o) / pn)),
          (e = xn((0.0139322 * r + 0.0971045 * i + 0.7141733 * o) / _n))),
      new mn(116 * a - 16, 500 * (n - a), 200 * (a - e), t.opacity)
    );
  }
  function mn(t, n, e, r) {
    (this.l = +t), (this.a = +n), (this.b = +e), (this.opacity = +r);
  }
  function xn(t) {
    return t > 0.008856451679035631 ? Math.pow(t, 1 / 3) : t / gn + dn;
  }
  function wn(t) {
    return t > yn ? t * t * t : gn * (t - dn);
  }
  function bn(t) {
    return (
      255 * (t <= 0.0031308 ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - 0.055)
    );
  }
  function Mn(t) {
    return (t /= 255) <= 0.04045
      ? t / 12.92
      : Math.pow((t + 0.055) / 1.055, 2.4);
  }
  function Tn(t) {
    if (t instanceof Sn) return new Sn(t.h, t.c, t.l, t.opacity);
    if ((t instanceof mn || (t = vn(t)), 0 === t.a && 0 === t.b))
      return new Sn(NaN, 0 < t.l && t.l < 100 ? 0 : NaN, t.l, t.opacity);
    var n = Math.atan2(t.b, t.a) * fn;
    return new Sn(
      n < 0 ? n + 360 : n,
      Math.sqrt(t.a * t.a + t.b * t.b),
      t.l,
      t.opacity
    );
  }
  function Sn(t, n, e, r) {
    (this.h = +t), (this.c = +n), (this.l = +e), (this.opacity = +r);
  }
  function Nn(t) {
    if (isNaN(t.h)) return new mn(t.l, 0, 0, t.opacity);
    var n = t.h * hn;
    return new mn(t.l, Math.cos(n) * t.c, Math.sin(n) * t.c, t.opacity);
  }
  kt(
    mn,
    function (t, n, e, r) {
      return 1 === arguments.length
        ? vn(t)
        : new mn(t, n, e, null == r ? 1 : r);
    },
    Et(Ut, {
      brighter(t) {
        return new mn(
          this.l + 18 * (null == t ? 1 : t),
          this.a,
          this.b,
          this.opacity
        );
      },
      darker(t) {
        return new mn(
          this.l - 18 * (null == t ? 1 : t),
          this.a,
          this.b,
          this.opacity
        );
      },
      rgb() {
        var t = (this.l + 16) / 116,
          n = isNaN(this.a) ? t : t + this.a / 500,
          e = isNaN(this.b) ? t : t - this.b / 200;
        return new Jt(
          bn(
            3.1338561 * (n = pn * wn(n)) -
              1.6168667 * (t = 1 * wn(t)) -
              0.4906146 * (e = _n * wn(e))
          ),
          bn(-0.9787684 * n + 1.9161415 * t + 0.033454 * e),
          bn(0.0719453 * n - 0.2289914 * t + 1.4052427 * e),
          this.opacity
        );
      },
    })
  ),
    kt(
      Sn,
      function (t, n, e, r) {
        return 1 === arguments.length
          ? Tn(t)
          : new Sn(t, n, e, null == r ? 1 : r);
      },
      Et(Ut, {
        brighter(t) {
          return new Sn(
            this.h,
            this.c,
            this.l + 18 * (null == t ? 1 : t),
            this.opacity
          );
        },
        darker(t) {
          return new Sn(
            this.h,
            this.c,
            this.l - 18 * (null == t ? 1 : t),
            this.opacity
          );
        },
        rgb() {
          return Nn(this).rgb();
        },
      })
    );
  var Cn = -0.14861,
    An = 1.78277,
    kn = -0.29227,
    En = -0.90649,
    Un = 1.97294,
    Dn = Un * En,
    Pn = Un * An,
    $n = An * kn - En * Cn;
  function On(t) {
    if (t instanceof Hn) return new Hn(t.h, t.s, t.l, t.opacity);
    t instanceof Jt || (t = Qt(t));
    var n = t.r / 255,
      e = t.g / 255,
      r = t.b / 255,
      i = ($n * r + Dn * n - Pn * e) / ($n + Dn - Pn),
      o = r - i,
      a = (Un * (e - i) - kn * o) / En,
      u = Math.sqrt(a * a + o * o) / (Un * i * (1 - i)),
      s = u ? Math.atan2(a, o) * fn - 120 : NaN;
    return new Hn(s < 0 ? s + 360 : s, u, i, t.opacity);
  }
  function Fn(t, n, e, r) {
    return 1 === arguments.length ? On(t) : new Hn(t, n, e, null == r ? 1 : r);
  }
  function Hn(t, n, e, r) {
    (this.h = +t), (this.s = +n), (this.l = +e), (this.opacity = +r);
  }
  kt(
    Hn,
    Fn,
    Et(Ut, {
      brighter(t) {
        return (
          (t = null == t ? Pt : Math.pow(Pt, t)),
          new Hn(this.h, this.s, this.l * t, this.opacity)
        );
      },
      darker(t) {
        return (
          (t = null == t ? Dt : Math.pow(Dt, t)),
          new Hn(this.h, this.s, this.l * t, this.opacity)
        );
      },
      rgb() {
        var t = isNaN(this.h) ? 0 : (this.h + 120) * hn,
          n = +this.l,
          e = isNaN(this.s) ? 0 : this.s * n * (1 - n),
          r = Math.cos(t),
          i = Math.sin(t);
        return new Jt(
          255 * (n + e * (Cn * r + An * i)),
          255 * (n + e * (kn * r + En * i)),
          255 * (n + e * (Un * r)),
          this.opacity
        );
      },
    })
  );
  var Yn = (t) => () => t;
  function In(t, n) {
    return function (e) {
      return t + e * n;
    };
  }
  function Ln(t) {
    return 1 == (t = +t)
      ? qn
      : function (n, e) {
          return e - n
            ? (function (t, n, e) {
                return (
                  (t = Math.pow(t, e)),
                  (n = Math.pow(n, e) - t),
                  (e = 1 / e),
                  function (r) {
                    return Math.pow(t + r * n, e);
                  }
                );
              })(n, e, t)
            : Yn(isNaN(n) ? e : n);
        };
  }
  function qn(t, n) {
    var e = n - t;
    return e ? In(t, e) : Yn(isNaN(t) ? n : t);
  }
  var jn = (function t(n) {
    var e = Ln(n);
    function r(t, n) {
      var r = e((t = Gt(t)).r, (n = Gt(n)).r),
        i = e(t.g, n.g),
        o = e(t.b, n.b),
        a = qn(t.opacity, n.opacity);
      return function (n) {
        return (
          (t.r = r(n)), (t.g = i(n)), (t.b = o(n)), (t.opacity = a(n)), t + ""
        );
      };
    }
    return (r.gamma = t), r;
  })(1);
  function Rn(t, n) {
    n || (n = []);
    var e,
      r = t ? Math.min(n.length, t.length) : 0,
      i = n.slice();
    return function (o) {
      for (e = 0; e < r; ++e) i[e] = t[e] * (1 - o) + n[e] * o;
      return i;
    };
  }
  function zn(t, n) {
    var e,
      r = n ? n.length : 0,
      i = t ? Math.min(r, t.length) : 0,
      o = new Array(i),
      a = new Array(r);
    for (e = 0; e < i; ++e) o[e] = Gn(t[e], n[e]);
    for (; e < r; ++e) a[e] = n[e];
    return function (t) {
      for (e = 0; e < i; ++e) a[e] = o[e](t);
      return a;
    };
  }
  function Bn(t, n) {
    var e = new Date();
    return (
      (t = +t),
      (n = +n),
      function (r) {
        return e.setTime(t * (1 - r) + n * r), e;
      }
    );
  }
  function Xn(t, n) {
    return (
      (t = +t),
      (n = +n),
      function (e) {
        return t * (1 - e) + n * e;
      }
    );
  }
  function Vn(t, n) {
    var e,
      r = {},
      i = {};
    for (e in ((null !== t && "object" == typeof t) || (t = {}),
    (null !== n && "object" == typeof n) || (n = {}),
    n))
      e in t ? (r[e] = Gn(t[e], n[e])) : (i[e] = n[e]);
    return function (t) {
      for (e in r) i[e] = r[e](t);
      return i;
    };
  }
  var Zn = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
    Wn = new RegExp(Zn.source, "g");
  function Qn(t, n) {
    var e,
      r,
      i,
      o = (Zn.lastIndex = Wn.lastIndex = 0),
      a = -1,
      u = [],
      s = [];
    for (t += "", n += ""; (e = Zn.exec(t)) && (r = Wn.exec(n)); )
      (i = r.index) > o &&
        ((i = n.slice(o, i)), u[a] ? (u[a] += i) : (u[++a] = i)),
        (e = e[0]) === (r = r[0])
          ? u[a]
            ? (u[a] += r)
            : (u[++a] = r)
          : ((u[++a] = null), s.push({ i: a, x: Xn(e, r) })),
        (o = Wn.lastIndex);
    return (
      o < n.length && ((i = n.slice(o)), u[a] ? (u[a] += i) : (u[++a] = i)),
      u.length < 2
        ? s[0]
          ? (function (t) {
              return function (n) {
                return t(n) + "";
              };
            })(s[0].x)
          : (function (t) {
              return function () {
                return t;
              };
            })(n)
        : ((n = s.length),
          function (t) {
            for (var e, r = 0; r < n; ++r) u[(e = s[r]).i] = e.x(t);
            return u.join("");
          })
    );
  }
  function Gn(t, n) {
    var e,
      r,
      i = typeof n;
    return null == n || "boolean" === i
      ? Yn(n)
      : ("number" === i
          ? Xn
          : "string" === i
          ? (e = Vt(n))
            ? ((n = e), jn)
            : Qn
          : n instanceof Vt
          ? jn
          : n instanceof Date
          ? Bn
          : ((r = n),
            !ArrayBuffer.isView(r) || r instanceof DataView
              ? Array.isArray(n)
                ? zn
                : ("function" != typeof n.valueOf &&
                    "function" != typeof n.toString) ||
                  isNaN(n)
                ? Vn
                : Xn
              : Rn))(t, n);
  }
  function Jn(t, n) {
    return (
      (t = +t),
      (n = +n),
      function (e) {
        return Math.round(t * (1 - e) + n * e);
      }
    );
  }
  var Kn,
    te = 180 / Math.PI,
    ne = {
      translateX: 0,
      translateY: 0,
      rotate: 0,
      skewX: 0,
      scaleX: 1,
      scaleY: 1,
    };
  function ee(t, n, e, r, i, o) {
    var a, u, s;
    return (
      (a = Math.sqrt(t * t + n * n)) && ((t /= a), (n /= a)),
      (s = t * e + n * r) && ((e -= t * s), (r -= n * s)),
      (u = Math.sqrt(e * e + r * r)) && ((e /= u), (r /= u), (s /= u)),
      t * r < n * e && ((t = -t), (n = -n), (s = -s), (a = -a)),
      {
        translateX: i,
        translateY: o,
        rotate: Math.atan2(n, t) * te,
        skewX: Math.atan(s) * te,
        scaleX: a,
        scaleY: u,
      }
    );
  }
  function re(t, n, e, r) {
    function i(t) {
      return t.length ? t.pop() + " " : "";
    }
    return function (o, a) {
      var u = [],
        s = [];
      return (
        (o = t(o)),
        (a = t(a)),
        (function (t, r, i, o, a, u) {
          if (t !== i || r !== o) {
            var s = a.push("translate(", null, n, null, e);
            u.push({ i: s - 4, x: Xn(t, i) }, { i: s - 2, x: Xn(r, o) });
          } else (i || o) && a.push("translate(" + i + n + o + e);
        })(o.translateX, o.translateY, a.translateX, a.translateY, u, s),
        (function (t, n, e, o) {
          t !== n
            ? (t - n > 180 ? (n += 360) : n - t > 180 && (t += 360),
              o.push({ i: e.push(i(e) + "rotate(", null, r) - 2, x: Xn(t, n) }))
            : n && e.push(i(e) + "rotate(" + n + r);
        })(o.rotate, a.rotate, u, s),
        (function (t, n, e, o) {
          t !== n
            ? o.push({ i: e.push(i(e) + "skewX(", null, r) - 2, x: Xn(t, n) })
            : n && e.push(i(e) + "skewX(" + n + r);
        })(o.skewX, a.skewX, u, s),
        (function (t, n, e, r, o, a) {
          if (t !== e || n !== r) {
            var u = o.push(i(o) + "scale(", null, ",", null, ")");
            a.push({ i: u - 4, x: Xn(t, e) }, { i: u - 2, x: Xn(n, r) });
          } else
            (1 === e && 1 === r) || o.push(i(o) + "scale(" + e + "," + r + ")");
        })(o.scaleX, o.scaleY, a.scaleX, a.scaleY, u, s),
        (o = a = null),
        function (t) {
          for (var n, e = -1, r = s.length; ++e < r; ) u[(n = s[e]).i] = n.x(t);
          return u.join("");
        }
      );
    };
  }
  var ie = re(
      function (t) {
        const n = new (
          "function" == typeof DOMMatrix ? DOMMatrix : WebKitCSSMatrix
        )(t + "");
        return n.isIdentity ? ne : ee(n.a, n.b, n.c, n.d, n.e, n.f);
      },
      "px, ",
      "px)",
      "deg)"
    ),
    oe = re(
      function (t) {
        return null == t
          ? ne
          : (Kn ||
              (Kn = document.createElementNS(
                "http://www.w3.org/2000/svg",
                "g"
              )),
            Kn.setAttribute("transform", t),
            (t = Kn.transform.baseVal.consolidate())
              ? ee((t = t.matrix).a, t.b, t.c, t.d, t.e, t.f)
              : ne);
      },
      ", ",
      ")",
      ")"
    );
  function ae(t) {
    return ((t = Math.exp(t)) + 1 / t) / 2;
  }
  function ue(t) {
    return (function n(e) {
      function r(n, r) {
        var i = t((n = Fn(n)).h, (r = Fn(r)).h),
          o = qn(n.s, r.s),
          a = qn(n.l, r.l),
          u = qn(n.opacity, r.opacity);
        return function (t) {
          return (
            (n.h = i(t)),
            (n.s = o(t)),
            (n.l = a(Math.pow(t, e))),
            (n.opacity = u(t)),
            n + ""
          );
        };
      }
      return (e = +e), (r.gamma = n), r;
    })(1);
  }
  function se(t) {
    return +t;
  }
  !(function t(n, e, r) {
    function i(t, i) {
      var o,
        a,
        u = t[0],
        s = t[1],
        c = t[2],
        l = i[0],
        h = i[1],
        f = i[2],
        p = l - u,
        _ = h - s,
        d = p * p + _ * _;
      if (d < 1e-12)
        (a = Math.log(f / c) / n),
          (o = function (t) {
            return [u + t * p, s + t * _, c * Math.exp(n * t * a)];
          });
      else {
        var y = Math.sqrt(d),
          g = (f * f - c * c + r * d) / (2 * c * e * y),
          v = (f * f - c * c - r * d) / (2 * f * e * y),
          m = Math.log(Math.sqrt(g * g + 1) - g),
          x = Math.log(Math.sqrt(v * v + 1) - v);
        (a = (x - m) / n),
          (o = function (t) {
            var r,
              i = t * a,
              o = ae(m),
              l =
                (c / (e * y)) *
                (o * ((r = n * i + m), ((r = Math.exp(2 * r)) - 1) / (r + 1)) -
                  (function (t) {
                    return ((t = Math.exp(t)) - 1 / t) / 2;
                  })(m));
            return [u + l * p, s + l * _, (c * o) / ae(n * i + m)];
          });
      }
      return (o.duration = (1e3 * a * n) / Math.SQRT2), o;
    }
    return (
      (i.rho = function (n) {
        var e = Math.max(0.001, +n),
          r = e * e;
        return t(e, r, r * r);
      }),
      i
    );
  })(Math.SQRT2, 2, 4),
    ue(function (t, n) {
      var e = n - t;
      return e
        ? In(t, e > 180 || e < -180 ? e - 360 * Math.round(e / 360) : e)
        : Yn(isNaN(t) ? n : t);
    }),
    ue(qn);
  var ce = [0, 1];
  function le(t) {
    return t;
  }
  function he(t, n) {
    return (n -= t = +t)
      ? function (e) {
          return (e - t) / n;
        }
      : ((e = isNaN(n) ? NaN : 0.5),
        function () {
          return e;
        });
    var e;
  }
  function fe(t, n, e) {
    var r = t[0],
      i = t[1],
      o = n[0],
      a = n[1];
    return (
      i < r ? ((r = he(i, r)), (o = e(a, o))) : ((r = he(r, i)), (o = e(o, a))),
      function (t) {
        return o(r(t));
      }
    );
  }
  function pe(t, n, e) {
    var r = Math.min(t.length, n.length) - 1,
      i = new Array(r),
      o = new Array(r),
      a = -1;
    for (
      t[r] < t[0] && ((t = t.slice().reverse()), (n = n.slice().reverse()));
      ++a < r;

    )
      (i[a] = he(t[a], t[a + 1])), (o[a] = e(n[a], n[a + 1]));
    return function (n) {
      var e = Mt(t, n, 1, r) - 1;
      return o[e](i[e](n));
    };
  }
  function _e(t, n) {
    return n
      .domain(t.domain())
      .range(t.range())
      .interpolate(t.interpolate())
      .clamp(t.clamp())
      .unknown(t.unknown());
  }
  function de() {
    var t,
      n,
      e,
      r,
      i,
      o,
      a = ce,
      u = ce,
      s = Gn,
      c = le;
    function l() {
      var t,
        n,
        e,
        s = Math.min(a.length, u.length);
      return (
        c !== le &&
          ((t = a[0]),
          (n = a[s - 1]),
          t > n && ((e = t), (t = n), (n = e)),
          (c = function (e) {
            return Math.max(t, Math.min(n, e));
          })),
        (r = s > 2 ? pe : fe),
        (i = o = null),
        h
      );
    }
    function h(n) {
      return null == n || isNaN((n = +n))
        ? e
        : (i || (i = r(a.map(t), u, s)))(t(c(n)));
    }
    return (
      (h.invert = function (e) {
        return c(n((o || (o = r(u, a.map(t), Xn)))(e)));
      }),
      (h.domain = function (t) {
        return arguments.length ? ((a = Array.from(t, se)), l()) : a.slice();
      }),
      (h.range = function (t) {
        return arguments.length ? ((u = Array.from(t)), l()) : u.slice();
      }),
      (h.rangeRound = function (t) {
        return (u = Array.from(t)), (s = Jn), l();
      }),
      (h.clamp = function (t) {
        return arguments.length ? ((c = !!t || le), l()) : c !== le;
      }),
      (h.interpolate = function (t) {
        return arguments.length ? ((s = t), l()) : s;
      }),
      (h.unknown = function (t) {
        return arguments.length ? ((e = t), h) : e;
      }),
      function (e, r) {
        return (t = e), (n = r), l();
      }
    );
  }
  function ye() {
    return de()(le, le);
  }
  function ge(t, n) {
    if (
      (e = (t = n ? t.toExponential(n - 1) : t.toExponential()).indexOf("e")) <
      0
    )
      return null;
    var e,
      r = t.slice(0, e);
    return [r.length > 1 ? r[0] + r.slice(2) : r, +t.slice(e + 1)];
  }
  function ve(t) {
    return (t = ge(Math.abs(t))) ? t[1] : NaN;
  }
  var me,
    xe =
      /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
  function we(t) {
    if (!(n = xe.exec(t))) throw new Error("invalid format: " + t);
    var n;
    return new be({
      fill: n[1],
      align: n[2],
      sign: n[3],
      symbol: n[4],
      zero: n[5],
      width: n[6],
      comma: n[7],
      precision: n[8] && n[8].slice(1),
      trim: n[9],
      type: n[10],
    });
  }
  function be(t) {
    (this.fill = void 0 === t.fill ? " " : t.fill + ""),
      (this.align = void 0 === t.align ? ">" : t.align + ""),
      (this.sign = void 0 === t.sign ? "-" : t.sign + ""),
      (this.symbol = void 0 === t.symbol ? "" : t.symbol + ""),
      (this.zero = !!t.zero),
      (this.width = void 0 === t.width ? void 0 : +t.width),
      (this.comma = !!t.comma),
      (this.precision = void 0 === t.precision ? void 0 : +t.precision),
      (this.trim = !!t.trim),
      (this.type = void 0 === t.type ? "" : t.type + "");
  }
  function Me(t, n) {
    var e = ge(t, n);
    if (!e) return t + "";
    var r = e[0],
      i = e[1];
    return i < 0
      ? "0." + new Array(-i).join("0") + r
      : r.length > i + 1
      ? r.slice(0, i + 1) + "." + r.slice(i + 1)
      : r + new Array(i - r.length + 2).join("0");
  }
  (we.prototype = be.prototype),
    (be.prototype.toString = function () {
      return (
        this.fill +
        this.align +
        this.sign +
        this.symbol +
        (this.zero ? "0" : "") +
        (void 0 === this.width ? "" : Math.max(1, 0 | this.width)) +
        (this.comma ? "," : "") +
        (void 0 === this.precision
          ? ""
          : "." + Math.max(0, 0 | this.precision)) +
        (this.trim ? "~" : "") +
        this.type
      );
    });
  var Te = {
    "%": (t, n) => (100 * t).toFixed(n),
    b: (t) => Math.round(t).toString(2),
    c: (t) => t + "",
    d: function (t) {
      return Math.abs((t = Math.round(t))) >= 1e21
        ? t.toLocaleString("en").replace(/,/g, "")
        : t.toString(10);
    },
    e: (t, n) => t.toExponential(n),
    f: (t, n) => t.toFixed(n),
    g: (t, n) => t.toPrecision(n),
    o: (t) => Math.round(t).toString(8),
    p: (t, n) => Me(100 * t, n),
    r: Me,
    s: function (t, n) {
      var e = ge(t, n);
      if (!e) return t + "";
      var r = e[0],
        i = e[1],
        o = i - (me = 3 * Math.max(-8, Math.min(8, Math.floor(i / 3)))) + 1,
        a = r.length;
      return o === a
        ? r
        : o > a
        ? r + new Array(o - a + 1).join("0")
        : o > 0
        ? r.slice(0, o) + "." + r.slice(o)
        : "0." + new Array(1 - o).join("0") + ge(t, Math.max(0, n + o - 1))[0];
    },
    X: (t) => Math.round(t).toString(16).toUpperCase(),
    x: (t) => Math.round(t).toString(16),
  };
  function Se(t) {
    return t;
  }
  var Ne,
    Ce,
    Ae,
    ke = Array.prototype.map,
    Ee = [
      "y",
      "z",
      "a",
      "f",
      "p",
      "n",
      "??",
      "m",
      "",
      "k",
      "M",
      "G",
      "T",
      "P",
      "E",
      "Z",
      "Y",
    ];
  function Ue(t) {
    var n,
      e,
      r =
        void 0 === t.grouping || void 0 === t.thousands
          ? Se
          : ((n = ke.call(t.grouping, Number)),
            (e = t.thousands + ""),
            function (t, r) {
              for (
                var i = t.length, o = [], a = 0, u = n[0], s = 0;
                i > 0 &&
                u > 0 &&
                (s + u + 1 > r && (u = Math.max(1, r - s)),
                o.push(t.substring((i -= u), i + u)),
                !((s += u + 1) > r));

              )
                u = n[(a = (a + 1) % n.length)];
              return o.reverse().join(e);
            }),
      i = void 0 === t.currency ? "" : t.currency[0] + "",
      o = void 0 === t.currency ? "" : t.currency[1] + "",
      a = void 0 === t.decimal ? "." : t.decimal + "",
      u =
        void 0 === t.numerals
          ? Se
          : (function (t) {
              return function (n) {
                return n.replace(/[0-9]/g, function (n) {
                  return t[+n];
                });
              };
            })(ke.call(t.numerals, String)),
      s = void 0 === t.percent ? "%" : t.percent + "",
      c = void 0 === t.minus ? "???" : t.minus + "",
      l = void 0 === t.nan ? "NaN" : t.nan + "";
    function h(t) {
      var n = (t = we(t)).fill,
        e = t.align,
        h = t.sign,
        f = t.symbol,
        p = t.zero,
        _ = t.width,
        d = t.comma,
        y = t.precision,
        g = t.trim,
        v = t.type;
      "n" === v
        ? ((d = !0), (v = "g"))
        : Te[v] || (void 0 === y && (y = 12), (g = !0), (v = "g")),
        (p || ("0" === n && "=" === e)) && ((p = !0), (n = "0"), (e = "="));
      var m =
          "$" === f
            ? i
            : "#" === f && /[boxX]/.test(v)
            ? "0" + v.toLowerCase()
            : "",
        x = "$" === f ? o : /[%p]/.test(v) ? s : "",
        w = Te[v],
        b = /[defgprs%]/.test(v);
      function M(t) {
        var i,
          o,
          s,
          f = m,
          M = x;
        if ("c" === v) (M = w(t) + M), (t = "");
        else {
          var T = (t = +t) < 0 || 1 / t < 0;
          if (
            ((t = isNaN(t) ? l : w(Math.abs(t), y)),
            g &&
              (t = (function (t) {
                t: for (var n, e = t.length, r = 1, i = -1; r < e; ++r)
                  switch (t[r]) {
                    case ".":
                      i = n = r;
                      break;
                    case "0":
                      0 === i && (i = r), (n = r);
                      break;
                    default:
                      if (!+t[r]) break t;
                      i > 0 && (i = 0);
                  }
                return i > 0 ? t.slice(0, i) + t.slice(n + 1) : t;
              })(t)),
            T && 0 == +t && "+" !== h && (T = !1),
            (f =
              (T ? ("(" === h ? h : c) : "-" === h || "(" === h ? "" : h) + f),
            (M =
              ("s" === v ? Ee[8 + me / 3] : "") +
              M +
              (T && "(" === h ? ")" : "")),
            b)
          )
            for (i = -1, o = t.length; ++i < o; )
              if (48 > (s = t.charCodeAt(i)) || s > 57) {
                (M = (46 === s ? a + t.slice(i + 1) : t.slice(i)) + M),
                  (t = t.slice(0, i));
                break;
              }
        }
        d && !p && (t = r(t, 1 / 0));
        var S = f.length + t.length + M.length,
          N = S < _ ? new Array(_ - S + 1).join(n) : "";
        switch (
          (d &&
            p &&
            ((t = r(N + t, N.length ? _ - M.length : 1 / 0)), (N = "")),
          e)
        ) {
          case "<":
            t = f + t + M + N;
            break;
          case "=":
            t = f + N + t + M;
            break;
          case "^":
            t = N.slice(0, (S = N.length >> 1)) + f + t + M + N.slice(S);
            break;
          default:
            t = N + f + t + M;
        }
        return u(t);
      }
      return (
        (y =
          void 0 === y
            ? 6
            : /[gprs]/.test(v)
            ? Math.max(1, Math.min(21, y))
            : Math.max(0, Math.min(20, y))),
        (M.toString = function () {
          return t + "";
        }),
        M
      );
    }
    return {
      format: h,
      formatPrefix: function (t, n) {
        var e = h((((t = we(t)).type = "f"), t)),
          r = 3 * Math.max(-8, Math.min(8, Math.floor(ve(n) / 3))),
          i = Math.pow(10, -r),
          o = Ee[8 + r / 3];
        return function (t) {
          return e(i * t) + o;
        };
      },
    };
  }
  function De(t, n, e, r) {
    var i,
      o = (function (t, n, e) {
        var r = Math.abs(n - t) / Math.max(0, e),
          i = Math.pow(10, Math.floor(Math.log(r) / Math.LN10)),
          o = r / i;
        return (
          o >= Tt ? (i *= 10) : o >= St ? (i *= 5) : o >= Nt && (i *= 2),
          n < t ? -i : i
        );
      })(t, n, e);
    switch ((r = we(null == r ? ",f" : r)).type) {
      case "s":
        var a = Math.max(Math.abs(t), Math.abs(n));
        return (
          null != r.precision ||
            isNaN(
              (i = (function (t, n) {
                return Math.max(
                  0,
                  3 * Math.max(-8, Math.min(8, Math.floor(ve(n) / 3))) -
                    ve(Math.abs(t))
                );
              })(o, a))
            ) ||
            (r.precision = i),
          Ae(r, a)
        );
      case "":
      case "e":
      case "g":
      case "p":
      case "r":
        null != r.precision ||
          isNaN(
            (i = (function (t, n) {
              return (
                (t = Math.abs(t)),
                (n = Math.abs(n) - t),
                Math.max(0, ve(n) - ve(t)) + 1
              );
            })(o, Math.max(Math.abs(t), Math.abs(n))))
          ) ||
          (r.precision = i - ("e" === r.type));
        break;
      case "f":
      case "%":
        null != r.precision ||
          isNaN(
            (i = (function (t) {
              return Math.max(0, -ve(Math.abs(t)));
            })(o))
          ) ||
          (r.precision = i - 2 * ("%" === r.type));
    }
    return Ce(r);
  }
  function Pe(t) {
    var n = t.domain;
    return (
      (t.ticks = function (t) {
        var e = n();
        return (function (t, n, e) {
          var r,
            i,
            o,
            a,
            u = -1;
          if (((e = +e), (t = +t) == (n = +n) && e > 0)) return [t];
          if (
            ((r = n < t) && ((i = t), (t = n), (n = i)),
            0 === (a = Ct(t, n, e)) || !isFinite(a))
          )
            return [];
          if (a > 0) {
            let e = Math.round(t / a),
              r = Math.round(n / a);
            for (
              e * a < t && ++e,
                r * a > n && --r,
                o = new Array((i = r - e + 1));
              ++u < i;

            )
              o[u] = (e + u) * a;
          } else {
            a = -a;
            let e = Math.round(t * a),
              r = Math.round(n * a);
            for (
              e / a < t && ++e,
                r / a > n && --r,
                o = new Array((i = r - e + 1));
              ++u < i;

            )
              o[u] = (e + u) / a;
          }
          return r && o.reverse(), o;
        })(e[0], e[e.length - 1], null == t ? 10 : t);
      }),
      (t.tickFormat = function (t, e) {
        var r = n();
        return De(r[0], r[r.length - 1], null == t ? 10 : t, e);
      }),
      (t.nice = function (e) {
        null == e && (e = 10);
        var r,
          i,
          o = n(),
          a = 0,
          u = o.length - 1,
          s = o[a],
          c = o[u],
          l = 10;
        for (
          c < s && ((i = s), (s = c), (c = i), (i = a), (a = u), (u = i));
          l-- > 0;

        ) {
          if ((i = Ct(s, c, e)) === r) return (o[a] = s), (o[u] = c), n(o);
          if (i > 0) (s = Math.floor(s / i) * i), (c = Math.ceil(c / i) * i);
          else {
            if (!(i < 0)) break;
            (s = Math.ceil(s * i) / i), (c = Math.floor(c * i) / i);
          }
          r = i;
        }
        return t;
      }),
      t
    );
  }
  function $e() {
    var t = ye();
    return (
      (t.copy = function () {
        return _e(t, $e());
      }),
      At.apply(t, arguments),
      Pe(t)
    );
  }
  function Oe(t) {
    return function (n) {
      return n < 0 ? -Math.pow(-n, t) : Math.pow(n, t);
    };
  }
  function Fe(t) {
    return t < 0 ? -Math.sqrt(-t) : Math.sqrt(t);
  }
  function He(t) {
    return t < 0 ? -t * t : t * t;
  }
  function Ye(t) {
    var n = t(le, le),
      e = 1;
    function r() {
      return 1 === e ? t(le, le) : 0.5 === e ? t(Fe, He) : t(Oe(e), Oe(1 / e));
    }
    return (
      (n.exponent = function (t) {
        return arguments.length ? ((e = +t), r()) : e;
      }),
      Pe(n)
    );
  }
  function Ie() {
    var t = Ye(de());
    return (
      (t.copy = function () {
        return _e(t, Ie()).exponent(t.exponent());
      }),
      At.apply(t, arguments),
      t
    );
  }
  (Ne = Ue({ thousands: ",", grouping: [3], currency: ["$", ""] })),
    (Ce = Ne.format),
    (Ae = Ne.formatPrefix);
  var Le = new Date(),
    qe = new Date();
  function je(t, n, e, r) {
    function i(n) {
      return t((n = 0 === arguments.length ? new Date() : new Date(+n))), n;
    }
    return (
      (i.floor = function (n) {
        return t((n = new Date(+n))), n;
      }),
      (i.ceil = function (e) {
        return t((e = new Date(e - 1))), n(e, 1), t(e), e;
      }),
      (i.round = function (t) {
        var n = i(t),
          e = i.ceil(t);
        return t - n < e - t ? n : e;
      }),
      (i.offset = function (t, e) {
        return n((t = new Date(+t)), null == e ? 1 : Math.floor(e)), t;
      }),
      (i.range = function (e, r, o) {
        var a,
          u = [];
        if (
          ((e = i.ceil(e)),
          (o = null == o ? 1 : Math.floor(o)),
          !(e < r && o > 0))
        )
          return u;
        do {
          u.push((a = new Date(+e))), n(e, o), t(e);
        } while (a < e && e < r);
        return u;
      }),
      (i.filter = function (e) {
        return je(
          function (n) {
            if (n >= n) for (; t(n), !e(n); ) n.setTime(n - 1);
          },
          function (t, r) {
            if (t >= t)
              if (r < 0) for (; ++r <= 0; ) for (; n(t, -1), !e(t); );
              else for (; --r >= 0; ) for (; n(t, 1), !e(t); );
          }
        );
      }),
      e &&
        ((i.count = function (n, r) {
          return (
            Le.setTime(+n), qe.setTime(+r), t(Le), t(qe), Math.floor(e(Le, qe))
          );
        }),
        (i.every = function (t) {
          return (
            (t = Math.floor(t)),
            isFinite(t) && t > 0
              ? t > 1
                ? i.filter(
                    r
                      ? function (n) {
                          return r(n) % t == 0;
                        }
                      : function (n) {
                          return i.count(0, n) % t == 0;
                        }
                  )
                : i
              : null
          );
        })),
      i
    );
  }
  var Re = je(
    function () {},
    function (t, n) {
      t.setTime(+t + n);
    },
    function (t, n) {
      return n - t;
    }
  );
  (Re.every = function (t) {
    return (
      (t = Math.floor(t)),
      isFinite(t) && t > 0
        ? t > 1
          ? je(
              function (n) {
                n.setTime(Math.floor(n / t) * t);
              },
              function (n, e) {
                n.setTime(+n + e * t);
              },
              function (n, e) {
                return (e - n) / t;
              }
            )
          : Re
        : null
    );
  }),
    Re.range;
  const ze = 1e3,
    Be = 6e4,
    Xe = 36e5,
    Ve = 864e5,
    Ze = 6048e5;
  var We = je(
    function (t) {
      t.setTime(t - t.getMilliseconds());
    },
    function (t, n) {
      t.setTime(+t + n * ze);
    },
    function (t, n) {
      return (n - t) / ze;
    },
    function (t) {
      return t.getUTCSeconds();
    }
  );
  We.range;
  var Qe = je(
    function (t) {
      t.setTime(t - t.getMilliseconds() - t.getSeconds() * ze);
    },
    function (t, n) {
      t.setTime(+t + n * Be);
    },
    function (t, n) {
      return (n - t) / Be;
    },
    function (t) {
      return t.getMinutes();
    }
  );
  Qe.range;
  var Ge = je(
    function (t) {
      t.setTime(
        t - t.getMilliseconds() - t.getSeconds() * ze - t.getMinutes() * Be
      );
    },
    function (t, n) {
      t.setTime(+t + n * Xe);
    },
    function (t, n) {
      return (n - t) / Xe;
    },
    function (t) {
      return t.getHours();
    }
  );
  Ge.range;
  var Je = je(
    (t) => t.setHours(0, 0, 0, 0),
    (t, n) => t.setDate(t.getDate() + n),
    (t, n) =>
      (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * Be) / Ve,
    (t) => t.getDate() - 1
  );
  function Ke(t) {
    return je(
      function (n) {
        n.setDate(n.getDate() - ((n.getDay() + 7 - t) % 7)),
          n.setHours(0, 0, 0, 0);
      },
      function (t, n) {
        t.setDate(t.getDate() + 7 * n);
      },
      function (t, n) {
        return (
          (n - t - (n.getTimezoneOffset() - t.getTimezoneOffset()) * Be) / Ze
        );
      }
    );
  }
  Je.range;
  var tr = Ke(0),
    nr = Ke(1),
    er = Ke(2),
    rr = Ke(3),
    ir = Ke(4),
    or = Ke(5),
    ar = Ke(6);
  tr.range, nr.range, er.range, rr.range, ir.range, or.range, ar.range;
  var ur = je(
    function (t) {
      t.setDate(1), t.setHours(0, 0, 0, 0);
    },
    function (t, n) {
      t.setMonth(t.getMonth() + n);
    },
    function (t, n) {
      return (
        n.getMonth() - t.getMonth() + 12 * (n.getFullYear() - t.getFullYear())
      );
    },
    function (t) {
      return t.getMonth();
    }
  );
  ur.range;
  var sr = je(
    function (t) {
      t.setMonth(0, 1), t.setHours(0, 0, 0, 0);
    },
    function (t, n) {
      t.setFullYear(t.getFullYear() + n);
    },
    function (t, n) {
      return n.getFullYear() - t.getFullYear();
    },
    function (t) {
      return t.getFullYear();
    }
  );
  (sr.every = function (t) {
    return isFinite((t = Math.floor(t))) && t > 0
      ? je(
          function (n) {
            n.setFullYear(Math.floor(n.getFullYear() / t) * t),
              n.setMonth(0, 1),
              n.setHours(0, 0, 0, 0);
          },
          function (n, e) {
            n.setFullYear(n.getFullYear() + e * t);
          }
        )
      : null;
  }),
    sr.range;
  var cr = je(
    function (t) {
      t.setUTCSeconds(0, 0);
    },
    function (t, n) {
      t.setTime(+t + n * Be);
    },
    function (t, n) {
      return (n - t) / Be;
    },
    function (t) {
      return t.getUTCMinutes();
    }
  );
  cr.range;
  var lr = je(
    function (t) {
      t.setUTCMinutes(0, 0, 0);
    },
    function (t, n) {
      t.setTime(+t + n * Xe);
    },
    function (t, n) {
      return (n - t) / Xe;
    },
    function (t) {
      return t.getUTCHours();
    }
  );
  lr.range;
  var hr = je(
    function (t) {
      t.setUTCHours(0, 0, 0, 0);
    },
    function (t, n) {
      t.setUTCDate(t.getUTCDate() + n);
    },
    function (t, n) {
      return (n - t) / Ve;
    },
    function (t) {
      return t.getUTCDate() - 1;
    }
  );
  function fr(t) {
    return je(
      function (n) {
        n.setUTCDate(n.getUTCDate() - ((n.getUTCDay() + 7 - t) % 7)),
          n.setUTCHours(0, 0, 0, 0);
      },
      function (t, n) {
        t.setUTCDate(t.getUTCDate() + 7 * n);
      },
      function (t, n) {
        return (n - t) / Ze;
      }
    );
  }
  hr.range;
  var pr = fr(0),
    _r = fr(1),
    dr = fr(2),
    yr = fr(3),
    gr = fr(4),
    vr = fr(5),
    mr = fr(6);
  pr.range, _r.range, dr.range, yr.range, gr.range, vr.range, mr.range;
  var xr = je(
    function (t) {
      t.setUTCDate(1), t.setUTCHours(0, 0, 0, 0);
    },
    function (t, n) {
      t.setUTCMonth(t.getUTCMonth() + n);
    },
    function (t, n) {
      return (
        n.getUTCMonth() -
        t.getUTCMonth() +
        12 * (n.getUTCFullYear() - t.getUTCFullYear())
      );
    },
    function (t) {
      return t.getUTCMonth();
    }
  );
  xr.range;
  var wr = je(
    function (t) {
      t.setUTCMonth(0, 1), t.setUTCHours(0, 0, 0, 0);
    },
    function (t, n) {
      t.setUTCFullYear(t.getUTCFullYear() + n);
    },
    function (t, n) {
      return n.getUTCFullYear() - t.getUTCFullYear();
    },
    function (t) {
      return t.getUTCFullYear();
    }
  );
  function br(t) {
    if (0 <= t.y && t.y < 100) {
      var n = new Date(-1, t.m, t.d, t.H, t.M, t.S, t.L);
      return n.setFullYear(t.y), n;
    }
    return new Date(t.y, t.m, t.d, t.H, t.M, t.S, t.L);
  }
  function Mr(t) {
    if (0 <= t.y && t.y < 100) {
      var n = new Date(Date.UTC(-1, t.m, t.d, t.H, t.M, t.S, t.L));
      return n.setUTCFullYear(t.y), n;
    }
    return new Date(Date.UTC(t.y, t.m, t.d, t.H, t.M, t.S, t.L));
  }
  function Tr(t, n, e) {
    return { y: t, m: n, d: e, H: 0, M: 0, S: 0, L: 0 };
  }
  (wr.every = function (t) {
    return isFinite((t = Math.floor(t))) && t > 0
      ? je(
          function (n) {
            n.setUTCFullYear(Math.floor(n.getUTCFullYear() / t) * t),
              n.setUTCMonth(0, 1),
              n.setUTCHours(0, 0, 0, 0);
          },
          function (n, e) {
            n.setUTCFullYear(n.getUTCFullYear() + e * t);
          }
        )
      : null;
  }),
    wr.range;
  var Sr,
    Nr,
    Cr,
    Ar = { "-": "", _: " ", 0: "0" },
    kr = /^\s*\d+/,
    Er = /^%/,
    Ur = /[\\^$*+?|[\]().{}]/g;
  function Dr(t, n, e) {
    var r = t < 0 ? "-" : "",
      i = (r ? -t : t) + "",
      o = i.length;
    return r + (o < e ? new Array(e - o + 1).join(n) + i : i);
  }
  function Pr(t) {
    return t.replace(Ur, "\\$&");
  }
  function $r(t) {
    return new RegExp("^(?:" + t.map(Pr).join("|") + ")", "i");
  }
  function Or(t) {
    return new Map(t.map((t, n) => [t.toLowerCase(), n]));
  }
  function Fr(t, n, e) {
    var r = kr.exec(n.slice(e, e + 1));
    return r ? ((t.w = +r[0]), e + r[0].length) : -1;
  }
  function Hr(t, n, e) {
    var r = kr.exec(n.slice(e, e + 1));
    return r ? ((t.u = +r[0]), e + r[0].length) : -1;
  }
  function Yr(t, n, e) {
    var r = kr.exec(n.slice(e, e + 2));
    return r ? ((t.U = +r[0]), e + r[0].length) : -1;
  }
  function Ir(t, n, e) {
    var r = kr.exec(n.slice(e, e + 2));
    return r ? ((t.V = +r[0]), e + r[0].length) : -1;
  }
  function Lr(t, n, e) {
    var r = kr.exec(n.slice(e, e + 2));
    return r ? ((t.W = +r[0]), e + r[0].length) : -1;
  }
  function qr(t, n, e) {
    var r = kr.exec(n.slice(e, e + 4));
    return r ? ((t.y = +r[0]), e + r[0].length) : -1;
  }
  function jr(t, n, e) {
    var r = kr.exec(n.slice(e, e + 2));
    return r
      ? ((t.y = +r[0] + (+r[0] > 68 ? 1900 : 2e3)), e + r[0].length)
      : -1;
  }
  function Rr(t, n, e) {
    var r = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(n.slice(e, e + 6));
    return r
      ? ((t.Z = r[1] ? 0 : -(r[2] + (r[3] || "00"))), e + r[0].length)
      : -1;
  }
  function zr(t, n, e) {
    var r = kr.exec(n.slice(e, e + 1));
    return r ? ((t.q = 3 * r[0] - 3), e + r[0].length) : -1;
  }
  function Br(t, n, e) {
    var r = kr.exec(n.slice(e, e + 2));
    return r ? ((t.m = r[0] - 1), e + r[0].length) : -1;
  }
  function Xr(t, n, e) {
    var r = kr.exec(n.slice(e, e + 2));
    return r ? ((t.d = +r[0]), e + r[0].length) : -1;
  }
  function Vr(t, n, e) {
    var r = kr.exec(n.slice(e, e + 3));
    return r ? ((t.m = 0), (t.d = +r[0]), e + r[0].length) : -1;
  }
  function Zr(t, n, e) {
    var r = kr.exec(n.slice(e, e + 2));
    return r ? ((t.H = +r[0]), e + r[0].length) : -1;
  }
  function Wr(t, n, e) {
    var r = kr.exec(n.slice(e, e + 2));
    return r ? ((t.M = +r[0]), e + r[0].length) : -1;
  }
  function Qr(t, n, e) {
    var r = kr.exec(n.slice(e, e + 2));
    return r ? ((t.S = +r[0]), e + r[0].length) : -1;
  }
  function Gr(t, n, e) {
    var r = kr.exec(n.slice(e, e + 3));
    return r ? ((t.L = +r[0]), e + r[0].length) : -1;
  }
  function Jr(t, n, e) {
    var r = kr.exec(n.slice(e, e + 6));
    return r ? ((t.L = Math.floor(r[0] / 1e3)), e + r[0].length) : -1;
  }
  function Kr(t, n, e) {
    var r = Er.exec(n.slice(e, e + 1));
    return r ? e + r[0].length : -1;
  }
  function ti(t, n, e) {
    var r = kr.exec(n.slice(e));
    return r ? ((t.Q = +r[0]), e + r[0].length) : -1;
  }
  function ni(t, n, e) {
    var r = kr.exec(n.slice(e));
    return r ? ((t.s = +r[0]), e + r[0].length) : -1;
  }
  function ei(t, n) {
    return Dr(t.getDate(), n, 2);
  }
  function ri(t, n) {
    return Dr(t.getHours(), n, 2);
  }
  function ii(t, n) {
    return Dr(t.getHours() % 12 || 12, n, 2);
  }
  function oi(t, n) {
    return Dr(1 + Je.count(sr(t), t), n, 3);
  }
  function ai(t, n) {
    return Dr(t.getMilliseconds(), n, 3);
  }
  function ui(t, n) {
    return ai(t, n) + "000";
  }
  function si(t, n) {
    return Dr(t.getMonth() + 1, n, 2);
  }
  function ci(t, n) {
    return Dr(t.getMinutes(), n, 2);
  }
  function li(t, n) {
    return Dr(t.getSeconds(), n, 2);
  }
  function hi(t) {
    var n = t.getDay();
    return 0 === n ? 7 : n;
  }
  function fi(t, n) {
    return Dr(tr.count(sr(t) - 1, t), n, 2);
  }
  function pi(t) {
    var n = t.getDay();
    return n >= 4 || 0 === n ? ir(t) : ir.ceil(t);
  }
  function _i(t, n) {
    return (t = pi(t)), Dr(ir.count(sr(t), t) + (4 === sr(t).getDay()), n, 2);
  }
  function di(t) {
    return t.getDay();
  }
  function yi(t, n) {
    return Dr(nr.count(sr(t) - 1, t), n, 2);
  }
  function gi(t, n) {
    return Dr(t.getFullYear() % 100, n, 2);
  }
  function vi(t, n) {
    return Dr((t = pi(t)).getFullYear() % 100, n, 2);
  }
  function mi(t, n) {
    return Dr(t.getFullYear() % 1e4, n, 4);
  }
  function xi(t, n) {
    var e = t.getDay();
    return Dr(
      (t = e >= 4 || 0 === e ? ir(t) : ir.ceil(t)).getFullYear() % 1e4,
      n,
      4
    );
  }
  function wi(t) {
    var n = t.getTimezoneOffset();
    return (
      (n > 0 ? "-" : ((n *= -1), "+")) +
      Dr((n / 60) | 0, "0", 2) +
      Dr(n % 60, "0", 2)
    );
  }
  function bi(t, n) {
    return Dr(t.getUTCDate(), n, 2);
  }
  function Mi(t, n) {
    return Dr(t.getUTCHours(), n, 2);
  }
  function Ti(t, n) {
    return Dr(t.getUTCHours() % 12 || 12, n, 2);
  }
  function Si(t, n) {
    return Dr(1 + hr.count(wr(t), t), n, 3);
  }
  function Ni(t, n) {
    return Dr(t.getUTCMilliseconds(), n, 3);
  }
  function Ci(t, n) {
    return Ni(t, n) + "000";
  }
  function Ai(t, n) {
    return Dr(t.getUTCMonth() + 1, n, 2);
  }
  function ki(t, n) {
    return Dr(t.getUTCMinutes(), n, 2);
  }
  function Ei(t, n) {
    return Dr(t.getUTCSeconds(), n, 2);
  }
  function Ui(t) {
    var n = t.getUTCDay();
    return 0 === n ? 7 : n;
  }
  function Di(t, n) {
    return Dr(pr.count(wr(t) - 1, t), n, 2);
  }
  function Pi(t) {
    var n = t.getUTCDay();
    return n >= 4 || 0 === n ? gr(t) : gr.ceil(t);
  }
  function $i(t, n) {
    return (
      (t = Pi(t)), Dr(gr.count(wr(t), t) + (4 === wr(t).getUTCDay()), n, 2)
    );
  }
  function Oi(t) {
    return t.getUTCDay();
  }
  function Fi(t, n) {
    return Dr(_r.count(wr(t) - 1, t), n, 2);
  }
  function Hi(t, n) {
    return Dr(t.getUTCFullYear() % 100, n, 2);
  }
  function Yi(t, n) {
    return Dr((t = Pi(t)).getUTCFullYear() % 100, n, 2);
  }
  function Ii(t, n) {
    return Dr(t.getUTCFullYear() % 1e4, n, 4);
  }
  function Li(t, n) {
    var e = t.getUTCDay();
    return Dr(
      (t = e >= 4 || 0 === e ? gr(t) : gr.ceil(t)).getUTCFullYear() % 1e4,
      n,
      4
    );
  }
  function qi() {
    return "+0000";
  }
  function ji() {
    return "%";
  }
  function Ri(t) {
    return +t;
  }
  function zi(t) {
    return Math.floor(+t / 1e3);
  }
  !(function (t) {
    (Sr = (function (t) {
      var n = t.dateTime,
        e = t.date,
        r = t.time,
        i = t.periods,
        o = t.days,
        a = t.shortDays,
        u = t.months,
        s = t.shortMonths,
        c = $r(i),
        l = Or(i),
        h = $r(o),
        f = Or(o),
        p = $r(a),
        _ = Or(a),
        d = $r(u),
        y = Or(u),
        g = $r(s),
        v = Or(s),
        m = {
          a: function (t) {
            return a[t.getDay()];
          },
          A: function (t) {
            return o[t.getDay()];
          },
          b: function (t) {
            return s[t.getMonth()];
          },
          B: function (t) {
            return u[t.getMonth()];
          },
          c: null,
          d: ei,
          e: ei,
          f: ui,
          g: vi,
          G: xi,
          H: ri,
          I: ii,
          j: oi,
          L: ai,
          m: si,
          M: ci,
          p: function (t) {
            return i[+(t.getHours() >= 12)];
          },
          q: function (t) {
            return 1 + ~~(t.getMonth() / 3);
          },
          Q: Ri,
          s: zi,
          S: li,
          u: hi,
          U: fi,
          V: _i,
          w: di,
          W: yi,
          x: null,
          X: null,
          y: gi,
          Y: mi,
          Z: wi,
          "%": ji,
        },
        x = {
          a: function (t) {
            return a[t.getUTCDay()];
          },
          A: function (t) {
            return o[t.getUTCDay()];
          },
          b: function (t) {
            return s[t.getUTCMonth()];
          },
          B: function (t) {
            return u[t.getUTCMonth()];
          },
          c: null,
          d: bi,
          e: bi,
          f: Ci,
          g: Yi,
          G: Li,
          H: Mi,
          I: Ti,
          j: Si,
          L: Ni,
          m: Ai,
          M: ki,
          p: function (t) {
            return i[+(t.getUTCHours() >= 12)];
          },
          q: function (t) {
            return 1 + ~~(t.getUTCMonth() / 3);
          },
          Q: Ri,
          s: zi,
          S: Ei,
          u: Ui,
          U: Di,
          V: $i,
          w: Oi,
          W: Fi,
          x: null,
          X: null,
          y: Hi,
          Y: Ii,
          Z: qi,
          "%": ji,
        },
        w = {
          a: function (t, n, e) {
            var r = p.exec(n.slice(e));
            return r
              ? ((t.w = _.get(r[0].toLowerCase())), e + r[0].length)
              : -1;
          },
          A: function (t, n, e) {
            var r = h.exec(n.slice(e));
            return r
              ? ((t.w = f.get(r[0].toLowerCase())), e + r[0].length)
              : -1;
          },
          b: function (t, n, e) {
            var r = g.exec(n.slice(e));
            return r
              ? ((t.m = v.get(r[0].toLowerCase())), e + r[0].length)
              : -1;
          },
          B: function (t, n, e) {
            var r = d.exec(n.slice(e));
            return r
              ? ((t.m = y.get(r[0].toLowerCase())), e + r[0].length)
              : -1;
          },
          c: function (t, e, r) {
            return T(t, n, e, r);
          },
          d: Xr,
          e: Xr,
          f: Jr,
          g: jr,
          G: qr,
          H: Zr,
          I: Zr,
          j: Vr,
          L: Gr,
          m: Br,
          M: Wr,
          p: function (t, n, e) {
            var r = c.exec(n.slice(e));
            return r
              ? ((t.p = l.get(r[0].toLowerCase())), e + r[0].length)
              : -1;
          },
          q: zr,
          Q: ti,
          s: ni,
          S: Qr,
          u: Hr,
          U: Yr,
          V: Ir,
          w: Fr,
          W: Lr,
          x: function (t, n, r) {
            return T(t, e, n, r);
          },
          X: function (t, n, e) {
            return T(t, r, n, e);
          },
          y: jr,
          Y: qr,
          Z: Rr,
          "%": Kr,
        };
      function b(t, n) {
        return function (e) {
          var r,
            i,
            o,
            a = [],
            u = -1,
            s = 0,
            c = t.length;
          for (e instanceof Date || (e = new Date(+e)); ++u < c; )
            37 === t.charCodeAt(u) &&
              (a.push(t.slice(s, u)),
              null != (i = Ar[(r = t.charAt(++u))])
                ? (r = t.charAt(++u))
                : (i = "e" === r ? " " : "0"),
              (o = n[r]) && (r = o(e, i)),
              a.push(r),
              (s = u + 1));
          return a.push(t.slice(s, u)), a.join("");
        };
      }
      function M(t, n) {
        return function (e) {
          var r,
            i,
            o = Tr(1900, void 0, 1);
          if (T(o, t, (e += ""), 0) != e.length) return null;
          if ("Q" in o) return new Date(o.Q);
          if ("s" in o) return new Date(1e3 * o.s + ("L" in o ? o.L : 0));
          if (
            (n && !("Z" in o) && (o.Z = 0),
            "p" in o && (o.H = (o.H % 12) + 12 * o.p),
            void 0 === o.m && (o.m = "q" in o ? o.q : 0),
            "V" in o)
          ) {
            if (o.V < 1 || o.V > 53) return null;
            "w" in o || (o.w = 1),
              "Z" in o
                ? ((i = (r = Mr(Tr(o.y, 0, 1))).getUTCDay()),
                  (r = i > 4 || 0 === i ? _r.ceil(r) : _r(r)),
                  (r = hr.offset(r, 7 * (o.V - 1))),
                  (o.y = r.getUTCFullYear()),
                  (o.m = r.getUTCMonth()),
                  (o.d = r.getUTCDate() + ((o.w + 6) % 7)))
                : ((i = (r = br(Tr(o.y, 0, 1))).getDay()),
                  (r = i > 4 || 0 === i ? nr.ceil(r) : nr(r)),
                  (r = Je.offset(r, 7 * (o.V - 1))),
                  (o.y = r.getFullYear()),
                  (o.m = r.getMonth()),
                  (o.d = r.getDate() + ((o.w + 6) % 7)));
          } else
            ("W" in o || "U" in o) &&
              ("w" in o || (o.w = "u" in o ? o.u % 7 : "W" in o ? 1 : 0),
              (i =
                "Z" in o
                  ? Mr(Tr(o.y, 0, 1)).getUTCDay()
                  : br(Tr(o.y, 0, 1)).getDay()),
              (o.m = 0),
              (o.d =
                "W" in o
                  ? ((o.w + 6) % 7) + 7 * o.W - ((i + 5) % 7)
                  : o.w + 7 * o.U - ((i + 6) % 7)));
          return "Z" in o
            ? ((o.H += (o.Z / 100) | 0), (o.M += o.Z % 100), Mr(o))
            : br(o);
        };
      }
      function T(t, n, e, r) {
        for (var i, o, a = 0, u = n.length, s = e.length; a < u; ) {
          if (r >= s) return -1;
          if (37 === (i = n.charCodeAt(a++))) {
            if (
              ((i = n.charAt(a++)),
              !(o = w[i in Ar ? n.charAt(a++) : i]) || (r = o(t, e, r)) < 0)
            )
              return -1;
          } else if (i != e.charCodeAt(r++)) return -1;
        }
        return r;
      }
      return (
        (m.x = b(e, m)),
        (m.X = b(r, m)),
        (m.c = b(n, m)),
        (x.x = b(e, x)),
        (x.X = b(r, x)),
        (x.c = b(n, x)),
        {
          format: function (t) {
            var n = b((t += ""), m);
            return (
              (n.toString = function () {
                return t;
              }),
              n
            );
          },
          parse: function (t) {
            var n = M((t += ""), !1);
            return (
              (n.toString = function () {
                return t;
              }),
              n
            );
          },
          utcFormat: function (t) {
            var n = b((t += ""), x);
            return (
              (n.toString = function () {
                return t;
              }),
              n
            );
          },
          utcParse: function (t) {
            var n = M((t += ""), !0);
            return (
              (n.toString = function () {
                return t;
              }),
              n
            );
          },
        }
      );
    })(t)),
      Sr.format,
      Sr.parse,
      (Nr = Sr.utcFormat),
      (Cr = Sr.utcParse);
  })({
    dateTime: "%x, %X",
    date: "%-m/%-d/%Y",
    time: "%-I:%M:%S %p",
    periods: ["AM", "PM"],
    days: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    months: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    shortMonths: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
  });
  var Bi = "%Y-%m-%dT%H:%M:%S.%LZ";
  function Xi(t) {
    var n = 0,
      e = t.children,
      r = e && e.length;
    if (r) for (; --r >= 0; ) n += e[r].value;
    else n = 1;
    t.value = n;
  }
  function Vi(t, n) {
    t instanceof Map
      ? ((t = [void 0, t]), void 0 === n && (n = Wi))
      : void 0 === n && (n = Zi);
    for (var e, r, i, o, a, u = new Ji(t), s = [u]; (e = s.pop()); )
      if ((i = n(e.data)) && (a = (i = Array.from(i)).length))
        for (e.children = i, o = a - 1; o >= 0; --o)
          s.push((r = i[o] = new Ji(i[o]))),
            (r.parent = e),
            (r.depth = e.depth + 1);
    return u.eachBefore(Gi);
  }
  function Zi(t) {
    return t.children;
  }
  function Wi(t) {
    return Array.isArray(t) ? t[1] : null;
  }
  function Qi(t) {
    void 0 !== t.data.value && (t.value = t.data.value), (t.data = t.data.data);
  }
  function Gi(t) {
    var n = 0;
    do {
      t.height = n;
    } while ((t = t.parent) && t.height < ++n);
  }
  function Ji(t) {
    (this.data = t), (this.depth = this.height = 0), (this.parent = null);
  }
  function Ki(t) {
    (t.x0 = Math.round(t.x0)),
      (t.y0 = Math.round(t.y0)),
      (t.x1 = Math.round(t.x1)),
      (t.y1 = Math.round(t.y1));
  }
  function to(t, n, e, r, i) {
    for (
      var o,
        a = t.children,
        u = -1,
        s = a.length,
        c = t.value && (r - n) / t.value;
      ++u < s;

    )
      ((o = a[u]).y0 = e), (o.y1 = i), (o.x0 = n), (o.x1 = n += o.value * c);
  }
  function no() {
    var t = 1,
      n = 1,
      e = 0,
      r = !1;
    function i(i) {
      var o = i.height + 1;
      return (
        (i.x0 = i.y0 = e),
        (i.x1 = t),
        (i.y1 = n / o),
        i.eachBefore(
          (function (t, n) {
            return function (r) {
              r.children &&
                to(
                  r,
                  r.x0,
                  (t * (r.depth + 1)) / n,
                  r.x1,
                  (t * (r.depth + 2)) / n
                );
              var i = r.x0,
                o = r.y0,
                a = r.x1 - e,
                u = r.y1 - e;
              a < i && (i = a = (i + a) / 2),
                u < o && (o = u = (o + u) / 2),
                (r.x0 = i),
                (r.y0 = o),
                (r.x1 = a),
                (r.y1 = u);
            };
          })(n, o)
        ),
        r && i.eachBefore(Ki),
        i
      );
    }
    return (
      (i.round = function (t) {
        return arguments.length ? ((r = !!t), i) : r;
      }),
      (i.size = function (e) {
        return arguments.length ? ((t = +e[0]), (n = +e[1]), i) : [t, n];
      }),
      (i.padding = function (t) {
        return arguments.length ? ((e = +t), i) : e;
      }),
      i
    );
  }
  function eo(t, n, e, r, i) {
    for (
      var o,
        a = t.children,
        u = -1,
        s = a.length,
        c = t.value && (i - e) / t.value;
      ++u < s;

    )
      ((o = a[u]).x0 = n), (o.x1 = r), (o.y0 = e), (o.y1 = e += o.value * c);
  }
  Date.prototype.toISOString || Nr(Bi),
    +new Date("2000-01-01T00:00:00.000Z") || Cr(Bi),
    (Ji.prototype = Vi.prototype =
      {
        constructor: Ji,
        count: function () {
          return this.eachAfter(Xi);
        },
        each: function (t, n) {
          let e = -1;
          for (const r of this) t.call(n, r, ++e, this);
          return this;
        },
        eachAfter: function (t, n) {
          for (var e, r, i, o = this, a = [o], u = [], s = -1; (o = a.pop()); )
            if ((u.push(o), (e = o.children)))
              for (r = 0, i = e.length; r < i; ++r) a.push(e[r]);
          for (; (o = u.pop()); ) t.call(n, o, ++s, this);
          return this;
        },
        eachBefore: function (t, n) {
          for (var e, r, i = this, o = [i], a = -1; (i = o.pop()); )
            if ((t.call(n, i, ++a, this), (e = i.children)))
              for (r = e.length - 1; r >= 0; --r) o.push(e[r]);
          return this;
        },
        find: function (t, n) {
          let e = -1;
          for (const r of this) if (t.call(n, r, ++e, this)) return r;
        },
        sum: function (t) {
          return this.eachAfter(function (n) {
            for (
              var e = +t(n.data) || 0, r = n.children, i = r && r.length;
              --i >= 0;

            )
              e += r[i].value;
            n.value = e;
          });
        },
        sort: function (t) {
          return this.eachBefore(function (n) {
            n.children && n.children.sort(t);
          });
        },
        path: function (t) {
          for (
            var n = this,
              e = (function (t, n) {
                if (t === n) return t;
                var e = t.ancestors(),
                  r = n.ancestors(),
                  i = null;
                (t = e.pop()), (n = r.pop());
                for (; t === n; ) (i = t), (t = e.pop()), (n = r.pop());
                return i;
              })(n, t),
              r = [n];
            n !== e;

          )
            (n = n.parent), r.push(n);
          for (var i = r.length; t !== e; ) r.splice(i, 0, t), (t = t.parent);
          return r;
        },
        ancestors: function () {
          for (var t = this, n = [t]; (t = t.parent); ) n.push(t);
          return n;
        },
        descendants: function () {
          return Array.from(this);
        },
        leaves: function () {
          var t = [];
          return (
            this.eachBefore(function (n) {
              n.children || t.push(n);
            }),
            t
          );
        },
        links: function () {
          var t = this,
            n = [];
          return (
            t.each(function (e) {
              e !== t && n.push({ source: e.parent, target: e });
            }),
            n
          );
        },
        copy: function () {
          return Vi(this).eachBefore(Qi);
        },
        [Symbol.iterator]: function* () {
          var t,
            n,
            e,
            r,
            i = this,
            o = [i];
          do {
            for (t = o.reverse(), o = []; (i = t.pop()); )
              if ((yield i, (n = i.children)))
                for (e = 0, r = n.length; e < r; ++e) o.push(n[e]);
          } while (o.length);
        },
      }),
    Object.create(Ji.prototype);
  var ro = (1 + Math.sqrt(5)) / 2;
  function io(t, n, e, r, i, o) {
    for (
      var a,
        u,
        s,
        c,
        l,
        h,
        f,
        p,
        _,
        d,
        y,
        g = [],
        v = n.children,
        m = 0,
        x = 0,
        w = v.length,
        b = n.value;
      m < w;

    ) {
      (s = i - e), (c = o - r);
      do {
        l = v[x++].value;
      } while (!l && x < w);
      for (
        h = f = l,
          y = l * l * (d = Math.max(c / s, s / c) / (b * t)),
          _ = Math.max(f / y, y / h);
        x < w;
        ++x
      ) {
        if (
          ((l += u = v[x].value),
          u < h && (h = u),
          u > f && (f = u),
          (y = l * l * d),
          (p = Math.max(f / y, y / h)) > _)
        ) {
          l -= u;
          break;
        }
        _ = p;
      }
      g.push((a = { value: l, dice: s < c, children: v.slice(m, x) })),
        a.dice
          ? to(a, e, r, i, b ? (r += (c * l) / b) : o)
          : eo(a, e, r, b ? (e += (s * l) / b) : i, o),
        (b -= l),
        (m = x);
    }
    return g;
  }
  !(function t(n) {
    function e(t, e, r, i, o) {
      io(n, t, e, r, i, o);
    }
    return (
      (e.ratio = function (n) {
        return t((n = +n) > 1 ? n : 1);
      }),
      e
    );
  })(ro),
    (function t(n) {
      function e(t, e, r, i, o) {
        if ((a = t._squarify) && a.ratio === n)
          for (
            var a, u, s, c, l, h = -1, f = a.length, p = t.value;
            ++h < f;

          ) {
            for (
              s = (u = a[h]).children, c = u.value = 0, l = s.length;
              c < l;
              ++c
            )
              u.value += s[c].value;
            u.dice
              ? to(u, e, r, i, p ? (r += ((o - r) * u.value) / p) : o)
              : eo(u, e, r, p ? (e += ((i - e) * u.value) / p) : i, o),
              (p -= u.value);
          }
        else (t._squarify = a = io(n, t, e, r, i, o)), (a.ratio = n);
      }
      return (
        (e.ratio = function (n) {
          return t((n = +n) > 1 ? n : 1);
        }),
        e
      );
    })(ro);
  const oo = Math.PI,
    ao = 2 * oo,
    uo = 1e-6,
    so = ao - uo;
  function co() {
    (this._x0 = this._y0 = this._x1 = this._y1 = null), (this._ = "");
  }
  function lo() {
    return new co();
  }
  function ho(t) {
    return function () {
      return t;
    };
  }
  co.prototype = lo.prototype = {
    constructor: co,
    moveTo: function (t, n) {
      this._ +=
        "M" + (this._x0 = this._x1 = +t) + "," + (this._y0 = this._y1 = +n);
    },
    closePath: function () {
      null !== this._x1 &&
        ((this._x1 = this._x0), (this._y1 = this._y0), (this._ += "Z"));
    },
    lineTo: function (t, n) {
      this._ += "L" + (this._x1 = +t) + "," + (this._y1 = +n);
    },
    quadraticCurveTo: function (t, n, e, r) {
      this._ +=
        "Q" + +t + "," + +n + "," + (this._x1 = +e) + "," + (this._y1 = +r);
    },
    bezierCurveTo: function (t, n, e, r, i, o) {
      this._ +=
        "C" +
        +t +
        "," +
        +n +
        "," +
        +e +
        "," +
        +r +
        "," +
        (this._x1 = +i) +
        "," +
        (this._y1 = +o);
    },
    arcTo: function (t, n, e, r, i) {
      (t = +t), (n = +n), (e = +e), (r = +r), (i = +i);
      var o = this._x1,
        a = this._y1,
        u = e - t,
        s = r - n,
        c = o - t,
        l = a - n,
        h = c * c + l * l;
      if (i < 0) throw new Error("negative radius: " + i);
      if (null === this._x1)
        this._ += "M" + (this._x1 = t) + "," + (this._y1 = n);
      else if (h > uo)
        if (Math.abs(l * u - s * c) > uo && i) {
          var f = e - o,
            p = r - a,
            _ = u * u + s * s,
            d = f * f + p * p,
            y = Math.sqrt(_),
            g = Math.sqrt(h),
            v = i * Math.tan((oo - Math.acos((_ + h - d) / (2 * y * g))) / 2),
            m = v / g,
            x = v / y;
          Math.abs(m - 1) > uo &&
            (this._ += "L" + (t + m * c) + "," + (n + m * l)),
            (this._ +=
              "A" +
              i +
              "," +
              i +
              ",0,0," +
              +(l * f > c * p) +
              "," +
              (this._x1 = t + x * u) +
              "," +
              (this._y1 = n + x * s));
        } else this._ += "L" + (this._x1 = t) + "," + (this._y1 = n);
      else;
    },
    arc: function (t, n, e, r, i, o) {
      (t = +t), (n = +n), (o = !!o);
      var a = (e = +e) * Math.cos(r),
        u = e * Math.sin(r),
        s = t + a,
        c = n + u,
        l = 1 ^ o,
        h = o ? r - i : i - r;
      if (e < 0) throw new Error("negative radius: " + e);
      null === this._x1
        ? (this._ += "M" + s + "," + c)
        : (Math.abs(this._x1 - s) > uo || Math.abs(this._y1 - c) > uo) &&
          (this._ += "L" + s + "," + c),
        e &&
          (h < 0 && (h = (h % ao) + ao),
          h > so
            ? (this._ +=
                "A" +
                e +
                "," +
                e +
                ",0,1," +
                l +
                "," +
                (t - a) +
                "," +
                (n - u) +
                "A" +
                e +
                "," +
                e +
                ",0,1," +
                l +
                "," +
                (this._x1 = s) +
                "," +
                (this._y1 = c))
            : h > uo &&
              (this._ +=
                "A" +
                e +
                "," +
                e +
                ",0," +
                +(h >= oo) +
                "," +
                l +
                "," +
                (this._x1 = t + e * Math.cos(i)) +
                "," +
                (this._y1 = n + e * Math.sin(i))));
    },
    rect: function (t, n, e, r) {
      this._ +=
        "M" +
        (this._x0 = this._x1 = +t) +
        "," +
        (this._y0 = this._y1 = +n) +
        "h" +
        +e +
        "v" +
        +r +
        "h" +
        -e +
        "Z";
    },
    toString: function () {
      return this._;
    },
  };
  const fo = Math.abs,
    po = Math.atan2,
    _o = Math.cos,
    yo = Math.max,
    go = Math.min,
    vo = Math.sin,
    mo = Math.sqrt,
    xo = 1e-12,
    wo = Math.PI,
    bo = wo / 2,
    Mo = 2 * wo;
  function To(t) {
    return t > 1 ? 0 : t < -1 ? wo : Math.acos(t);
  }
  function So(t) {
    return t >= 1 ? bo : t <= -1 ? -bo : Math.asin(t);
  }
  function No(t) {
    return t.innerRadius;
  }
  function Co(t) {
    return t.outerRadius;
  }
  function Ao(t) {
    return t.startAngle;
  }
  function ko(t) {
    return t.endAngle;
  }
  function Eo(t) {
    return t && t.padAngle;
  }
  function Uo(t, n, e, r, i, o, a, u) {
    var s = e - t,
      c = r - n,
      l = a - i,
      h = u - o,
      f = h * s - l * c;
    if (!(f * f < xo))
      return [t + (f = (l * (n - o) - h * (t - i)) / f) * s, n + f * c];
  }
  function Do(t, n, e, r, i, o, a) {
    var u = t - e,
      s = n - r,
      c = (a ? o : -o) / mo(u * u + s * s),
      l = c * s,
      h = -c * u,
      f = t + l,
      p = n + h,
      _ = e + l,
      d = r + h,
      y = (f + _) / 2,
      g = (p + d) / 2,
      v = _ - f,
      m = d - p,
      x = v * v + m * m,
      w = i - o,
      b = f * d - _ * p,
      M = (m < 0 ? -1 : 1) * mo(yo(0, w * w * x - b * b)),
      T = (b * m - v * M) / x,
      S = (-b * v - m * M) / x,
      N = (b * m + v * M) / x,
      C = (-b * v + m * M) / x,
      A = T - y,
      k = S - g,
      E = N - y,
      U = C - g;
    return (
      A * A + k * k > E * E + U * U && ((T = N), (S = C)),
      {
        cx: T,
        cy: S,
        x01: -l,
        y01: -h,
        x11: T * (i / w - 1),
        y11: S * (i / w - 1),
      }
    );
  }
  function Po() {}
  function $o(t, n, e) {
    t._context.bezierCurveTo(
      (2 * t._x0 + t._x1) / 3,
      (2 * t._y0 + t._y1) / 3,
      (t._x0 + 2 * t._x1) / 3,
      (t._y0 + 2 * t._y1) / 3,
      (t._x0 + 4 * t._x1 + n) / 6,
      (t._y0 + 4 * t._y1 + e) / 6
    );
  }
  function Oo(t) {
    this._context = t;
  }
  function Fo(t, n) {
    (this._basis = new Oo(t)), (this._beta = n);
  }
  function Ho(t, n, e) {
    t._context.bezierCurveTo(
      t._x1 + t._k * (t._x2 - t._x0),
      t._y1 + t._k * (t._y2 - t._y0),
      t._x2 + t._k * (t._x1 - n),
      t._y2 + t._k * (t._y1 - e),
      t._x2,
      t._y2
    );
  }
  function Yo(t, n) {
    (this._context = t), (this._k = (1 - n) / 6);
  }
  function Io(t, n) {
    (this._context = t), (this._k = (1 - n) / 6);
  }
  function Lo(t, n) {
    (this._context = t), (this._k = (1 - n) / 6);
  }
  function qo(t, n, e) {
    var r = t._x1,
      i = t._y1,
      o = t._x2,
      a = t._y2;
    if (t._l01_a > xo) {
      var u = 2 * t._l01_2a + 3 * t._l01_a * t._l12_a + t._l12_2a,
        s = 3 * t._l01_a * (t._l01_a + t._l12_a);
      (r = (r * u - t._x0 * t._l12_2a + t._x2 * t._l01_2a) / s),
        (i = (i * u - t._y0 * t._l12_2a + t._y2 * t._l01_2a) / s);
    }
    if (t._l23_a > xo) {
      var c = 2 * t._l23_2a + 3 * t._l23_a * t._l12_a + t._l12_2a,
        l = 3 * t._l23_a * (t._l23_a + t._l12_a);
      (o = (o * c + t._x1 * t._l23_2a - n * t._l12_2a) / l),
        (a = (a * c + t._y1 * t._l23_2a - e * t._l12_2a) / l);
    }
    t._context.bezierCurveTo(r, i, o, a, t._x2, t._y2);
  }
  function jo(t, n) {
    (this._context = t), (this._alpha = n);
  }
  function Ro(t, n) {
    (this._context = t), (this._alpha = n);
  }
  function zo(t, n) {
    (this._context = t), (this._alpha = n);
  }
  function Bo(t) {
    return t < 0 ? -1 : 1;
  }
  function Xo(t, n, e) {
    var r = t._x1 - t._x0,
      i = n - t._x1,
      o = (t._y1 - t._y0) / (r || (i < 0 && -0)),
      a = (e - t._y1) / (i || (r < 0 && -0)),
      u = (o * i + a * r) / (r + i);
    return (
      (Bo(o) + Bo(a)) * Math.min(Math.abs(o), Math.abs(a), 0.5 * Math.abs(u)) ||
      0
    );
  }
  function Vo(t, n) {
    var e = t._x1 - t._x0;
    return e ? ((3 * (t._y1 - t._y0)) / e - n) / 2 : n;
  }
  function Zo(t, n, e) {
    var r = t._x0,
      i = t._y0,
      o = t._x1,
      a = t._y1,
      u = (o - r) / 3;
    t._context.bezierCurveTo(r + u, i + u * n, o - u, a - u * e, o, a);
  }
  function Wo(t) {
    this._context = t;
  }
  (Oo.prototype = {
    areaStart: function () {
      this._line = 0;
    },
    areaEnd: function () {
      this._line = NaN;
    },
    lineStart: function () {
      (this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0);
    },
    lineEnd: function () {
      switch (this._point) {
        case 3:
          $o(this, this._x1, this._y1);
        case 2:
          this._context.lineTo(this._x1, this._y1);
      }
      (this._line || (0 !== this._line && 1 === this._point)) &&
        this._context.closePath(),
        (this._line = 1 - this._line);
    },
    point: function (t, n) {
      switch (((t = +t), (n = +n), this._point)) {
        case 0:
          (this._point = 1),
            this._line
              ? this._context.lineTo(t, n)
              : this._context.moveTo(t, n);
          break;
        case 1:
          this._point = 2;
          break;
        case 2:
          (this._point = 3),
            this._context.lineTo(
              (5 * this._x0 + this._x1) / 6,
              (5 * this._y0 + this._y1) / 6
            );
        default:
          $o(this, t, n);
      }
      (this._x0 = this._x1),
        (this._x1 = t),
        (this._y0 = this._y1),
        (this._y1 = n);
    },
  }),
    (Fo.prototype = {
      lineStart: function () {
        (this._x = []), (this._y = []), this._basis.lineStart();
      },
      lineEnd: function () {
        var t = this._x,
          n = this._y,
          e = t.length - 1;
        if (e > 0)
          for (
            var r, i = t[0], o = n[0], a = t[e] - i, u = n[e] - o, s = -1;
            ++s <= e;

          )
            (r = s / e),
              this._basis.point(
                this._beta * t[s] + (1 - this._beta) * (i + r * a),
                this._beta * n[s] + (1 - this._beta) * (o + r * u)
              );
        (this._x = this._y = null), this._basis.lineEnd();
      },
      point: function (t, n) {
        this._x.push(+t), this._y.push(+n);
      },
    }),
    (function t(n) {
      function e(t) {
        return 1 === n ? new Oo(t) : new Fo(t, n);
      }
      return (
        (e.beta = function (n) {
          return t(+n);
        }),
        e
      );
    })(0.85),
    (Yo.prototype = {
      areaStart: function () {
        this._line = 0;
      },
      areaEnd: function () {
        this._line = NaN;
      },
      lineStart: function () {
        (this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN),
          (this._point = 0);
      },
      lineEnd: function () {
        switch (this._point) {
          case 2:
            this._context.lineTo(this._x2, this._y2);
            break;
          case 3:
            Ho(this, this._x1, this._y1);
        }
        (this._line || (0 !== this._line && 1 === this._point)) &&
          this._context.closePath(),
          (this._line = 1 - this._line);
      },
      point: function (t, n) {
        switch (((t = +t), (n = +n), this._point)) {
          case 0:
            (this._point = 1),
              this._line
                ? this._context.lineTo(t, n)
                : this._context.moveTo(t, n);
            break;
          case 1:
            (this._point = 2), (this._x1 = t), (this._y1 = n);
            break;
          case 2:
            this._point = 3;
          default:
            Ho(this, t, n);
        }
        (this._x0 = this._x1),
          (this._x1 = this._x2),
          (this._x2 = t),
          (this._y0 = this._y1),
          (this._y1 = this._y2),
          (this._y2 = n);
      },
    }),
    (function t(n) {
      function e(t) {
        return new Yo(t, n);
      }
      return (
        (e.tension = function (n) {
          return t(+n);
        }),
        e
      );
    })(0),
    (Io.prototype = {
      areaStart: Po,
      areaEnd: Po,
      lineStart: function () {
        (this._x0 =
          this._x1 =
          this._x2 =
          this._x3 =
          this._x4 =
          this._x5 =
          this._y0 =
          this._y1 =
          this._y2 =
          this._y3 =
          this._y4 =
          this._y5 =
            NaN),
          (this._point = 0);
      },
      lineEnd: function () {
        switch (this._point) {
          case 1:
            this._context.moveTo(this._x3, this._y3), this._context.closePath();
            break;
          case 2:
            this._context.lineTo(this._x3, this._y3), this._context.closePath();
            break;
          case 3:
            this.point(this._x3, this._y3),
              this.point(this._x4, this._y4),
              this.point(this._x5, this._y5);
        }
      },
      point: function (t, n) {
        switch (((t = +t), (n = +n), this._point)) {
          case 0:
            (this._point = 1), (this._x3 = t), (this._y3 = n);
            break;
          case 1:
            (this._point = 2),
              this._context.moveTo((this._x4 = t), (this._y4 = n));
            break;
          case 2:
            (this._point = 3), (this._x5 = t), (this._y5 = n);
            break;
          default:
            Ho(this, t, n);
        }
        (this._x0 = this._x1),
          (this._x1 = this._x2),
          (this._x2 = t),
          (this._y0 = this._y1),
          (this._y1 = this._y2),
          (this._y2 = n);
      },
    }),
    (function t(n) {
      function e(t) {
        return new Io(t, n);
      }
      return (
        (e.tension = function (n) {
          return t(+n);
        }),
        e
      );
    })(0),
    (Lo.prototype = {
      areaStart: function () {
        this._line = 0;
      },
      areaEnd: function () {
        this._line = NaN;
      },
      lineStart: function () {
        (this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN),
          (this._point = 0);
      },
      lineEnd: function () {
        (this._line || (0 !== this._line && 3 === this._point)) &&
          this._context.closePath(),
          (this._line = 1 - this._line);
      },
      point: function (t, n) {
        switch (((t = +t), (n = +n), this._point)) {
          case 0:
            this._point = 1;
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            (this._point = 3),
              this._line
                ? this._context.lineTo(this._x2, this._y2)
                : this._context.moveTo(this._x2, this._y2);
            break;
          case 3:
            this._point = 4;
          default:
            Ho(this, t, n);
        }
        (this._x0 = this._x1),
          (this._x1 = this._x2),
          (this._x2 = t),
          (this._y0 = this._y1),
          (this._y1 = this._y2),
          (this._y2 = n);
      },
    }),
    (function t(n) {
      function e(t) {
        return new Lo(t, n);
      }
      return (
        (e.tension = function (n) {
          return t(+n);
        }),
        e
      );
    })(0),
    (jo.prototype = {
      areaStart: function () {
        this._line = 0;
      },
      areaEnd: function () {
        this._line = NaN;
      },
      lineStart: function () {
        (this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN),
          (this._l01_a =
            this._l12_a =
            this._l23_a =
            this._l01_2a =
            this._l12_2a =
            this._l23_2a =
            this._point =
              0);
      },
      lineEnd: function () {
        switch (this._point) {
          case 2:
            this._context.lineTo(this._x2, this._y2);
            break;
          case 3:
            this.point(this._x2, this._y2);
        }
        (this._line || (0 !== this._line && 1 === this._point)) &&
          this._context.closePath(),
          (this._line = 1 - this._line);
      },
      point: function (t, n) {
        if (((t = +t), (n = +n), this._point)) {
          var e = this._x2 - t,
            r = this._y2 - n;
          this._l23_a = Math.sqrt(
            (this._l23_2a = Math.pow(e * e + r * r, this._alpha))
          );
        }
        switch (this._point) {
          case 0:
            (this._point = 1),
              this._line
                ? this._context.lineTo(t, n)
                : this._context.moveTo(t, n);
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            this._point = 3;
          default:
            qo(this, t, n);
        }
        (this._l01_a = this._l12_a),
          (this._l12_a = this._l23_a),
          (this._l01_2a = this._l12_2a),
          (this._l12_2a = this._l23_2a),
          (this._x0 = this._x1),
          (this._x1 = this._x2),
          (this._x2 = t),
          (this._y0 = this._y1),
          (this._y1 = this._y2),
          (this._y2 = n);
      },
    }),
    (function t(n) {
      function e(t) {
        return n ? new jo(t, n) : new Yo(t, 0);
      }
      return (
        (e.alpha = function (n) {
          return t(+n);
        }),
        e
      );
    })(0.5),
    (Ro.prototype = {
      areaStart: Po,
      areaEnd: Po,
      lineStart: function () {
        (this._x0 =
          this._x1 =
          this._x2 =
          this._x3 =
          this._x4 =
          this._x5 =
          this._y0 =
          this._y1 =
          this._y2 =
          this._y3 =
          this._y4 =
          this._y5 =
            NaN),
          (this._l01_a =
            this._l12_a =
            this._l23_a =
            this._l01_2a =
            this._l12_2a =
            this._l23_2a =
            this._point =
              0);
      },
      lineEnd: function () {
        switch (this._point) {
          case 1:
            this._context.moveTo(this._x3, this._y3), this._context.closePath();
            break;
          case 2:
            this._context.lineTo(this._x3, this._y3), this._context.closePath();
            break;
          case 3:
            this.point(this._x3, this._y3),
              this.point(this._x4, this._y4),
              this.point(this._x5, this._y5);
        }
      },
      point: function (t, n) {
        if (((t = +t), (n = +n), this._point)) {
          var e = this._x2 - t,
            r = this._y2 - n;
          this._l23_a = Math.sqrt(
            (this._l23_2a = Math.pow(e * e + r * r, this._alpha))
          );
        }
        switch (this._point) {
          case 0:
            (this._point = 1), (this._x3 = t), (this._y3 = n);
            break;
          case 1:
            (this._point = 2),
              this._context.moveTo((this._x4 = t), (this._y4 = n));
            break;
          case 2:
            (this._point = 3), (this._x5 = t), (this._y5 = n);
            break;
          default:
            qo(this, t, n);
        }
        (this._l01_a = this._l12_a),
          (this._l12_a = this._l23_a),
          (this._l01_2a = this._l12_2a),
          (this._l12_2a = this._l23_2a),
          (this._x0 = this._x1),
          (this._x1 = this._x2),
          (this._x2 = t),
          (this._y0 = this._y1),
          (this._y1 = this._y2),
          (this._y2 = n);
      },
    }),
    (function t(n) {
      function e(t) {
        return n ? new Ro(t, n) : new Io(t, 0);
      }
      return (
        (e.alpha = function (n) {
          return t(+n);
        }),
        e
      );
    })(0.5),
    (zo.prototype = {
      areaStart: function () {
        this._line = 0;
      },
      areaEnd: function () {
        this._line = NaN;
      },
      lineStart: function () {
        (this._x0 = this._x1 = this._x2 = this._y0 = this._y1 = this._y2 = NaN),
          (this._l01_a =
            this._l12_a =
            this._l23_a =
            this._l01_2a =
            this._l12_2a =
            this._l23_2a =
            this._point =
              0);
      },
      lineEnd: function () {
        (this._line || (0 !== this._line && 3 === this._point)) &&
          this._context.closePath(),
          (this._line = 1 - this._line);
      },
      point: function (t, n) {
        if (((t = +t), (n = +n), this._point)) {
          var e = this._x2 - t,
            r = this._y2 - n;
          this._l23_a = Math.sqrt(
            (this._l23_2a = Math.pow(e * e + r * r, this._alpha))
          );
        }
        switch (this._point) {
          case 0:
            this._point = 1;
            break;
          case 1:
            this._point = 2;
            break;
          case 2:
            (this._point = 3),
              this._line
                ? this._context.lineTo(this._x2, this._y2)
                : this._context.moveTo(this._x2, this._y2);
            break;
          case 3:
            this._point = 4;
          default:
            qo(this, t, n);
        }
        (this._l01_a = this._l12_a),
          (this._l12_a = this._l23_a),
          (this._l01_2a = this._l12_2a),
          (this._l12_2a = this._l23_2a),
          (this._x0 = this._x1),
          (this._x1 = this._x2),
          (this._x2 = t),
          (this._y0 = this._y1),
          (this._y1 = this._y2),
          (this._y2 = n);
      },
    }),
    (function t(n) {
      function e(t) {
        return n ? new zo(t, n) : new Lo(t, 0);
      }
      return (
        (e.alpha = function (n) {
          return t(+n);
        }),
        e
      );
    })(0.5),
    (Wo.prototype = {
      areaStart: function () {
        this._line = 0;
      },
      areaEnd: function () {
        this._line = NaN;
      },
      lineStart: function () {
        (this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN),
          (this._point = 0);
      },
      lineEnd: function () {
        switch (this._point) {
          case 2:
            this._context.lineTo(this._x1, this._y1);
            break;
          case 3:
            Zo(this, this._t0, Vo(this, this._t0));
        }
        (this._line || (0 !== this._line && 1 === this._point)) &&
          this._context.closePath(),
          (this._line = 1 - this._line);
      },
      point: function (t, n) {
        var e = NaN;
        if (((n = +n), (t = +t) !== this._x1 || n !== this._y1)) {
          switch (this._point) {
            case 0:
              (this._point = 1),
                this._line
                  ? this._context.lineTo(t, n)
                  : this._context.moveTo(t, n);
              break;
            case 1:
              this._point = 2;
              break;
            case 2:
              (this._point = 3), Zo(this, Vo(this, (e = Xo(this, t, n))), e);
              break;
            default:
              Zo(this, this._t0, (e = Xo(this, t, n)));
          }
          (this._x0 = this._x1),
            (this._x1 = t),
            (this._y0 = this._y1),
            (this._y1 = n),
            (this._t0 = e);
        }
      },
    }),
    (Object.create(Wo.prototype).point = function (t, n) {
      Wo.prototype.point.call(this, n, t);
    });
  var Qo = { value: () => {} };
  function Go() {
    for (var t, n = 0, e = arguments.length, r = {}; n < e; ++n) {
      if (!(t = arguments[n] + "") || t in r || /[\s.]/.test(t))
        throw new Error("illegal type: " + t);
      r[t] = [];
    }
    return new Jo(r);
  }
  function Jo(t) {
    this._ = t;
  }
  function Ko(t, n) {
    return t
      .trim()
      .split(/^|\s+/)
      .map(function (t) {
        var e = "",
          r = t.indexOf(".");
        if (
          (r >= 0 && ((e = t.slice(r + 1)), (t = t.slice(0, r))),
          t && !n.hasOwnProperty(t))
        )
          throw new Error("unknown type: " + t);
        return { type: t, name: e };
      });
  }
  function ta(t, n) {
    for (var e, r = 0, i = t.length; r < i; ++r)
      if ((e = t[r]).name === n) return e.value;
  }
  function na(t, n, e) {
    for (var r = 0, i = t.length; r < i; ++r)
      if (t[r].name === n) {
        (t[r] = Qo), (t = t.slice(0, r).concat(t.slice(r + 1)));
        break;
      }
    return null != e && t.push({ name: n, value: e }), t;
  }
  Jo.prototype = Go.prototype = {
    constructor: Jo,
    on: function (t, n) {
      var e,
        r = this._,
        i = Ko(t + "", r),
        o = -1,
        a = i.length;
      if (!(arguments.length < 2)) {
        if (null != n && "function" != typeof n)
          throw new Error("invalid callback: " + n);
        for (; ++o < a; )
          if ((e = (t = i[o]).type)) r[e] = na(r[e], t.name, n);
          else if (null == n) for (e in r) r[e] = na(r[e], t.name, null);
        return this;
      }
      for (; ++o < a; )
        if ((e = (t = i[o]).type) && (e = ta(r[e], t.name))) return e;
    },
    copy: function () {
      var t = {},
        n = this._;
      for (var e in n) t[e] = n[e].slice();
      return new Jo(t);
    },
    call: function (t, n) {
      if ((e = arguments.length - 2) > 0)
        for (var e, r, i = new Array(e), o = 0; o < e; ++o)
          i[o] = arguments[o + 2];
      if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
      for (o = 0, e = (r = this._[t]).length; o < e; ++o)
        r[o].value.apply(n, i);
    },
    apply: function (t, n, e) {
      if (!this._.hasOwnProperty(t)) throw new Error("unknown type: " + t);
      for (var r = this._[t], i = 0, o = r.length; i < o; ++i)
        r[i].value.apply(n, e);
    },
  };
  var ea,
    ra,
    ia = 0,
    oa = 0,
    aa = 0,
    ua = 0,
    sa = 0,
    ca = 0,
    la = "object" == typeof performance && performance.now ? performance : Date,
    ha =
      "object" == typeof window && window.requestAnimationFrame
        ? window.requestAnimationFrame.bind(window)
        : function (t) {
            setTimeout(t, 17);
          };
  function fa() {
    return sa || (ha(pa), (sa = la.now() + ca));
  }
  function pa() {
    sa = 0;
  }
  function _a() {
    this._call = this._time = this._next = null;
  }
  function da(t, n, e) {
    var r = new _a();
    return r.restart(t, n, e), r;
  }
  function ya() {
    (sa = (ua = la.now()) + ca), (ia = oa = 0);
    try {
      !(function () {
        fa(), ++ia;
        for (var t, n = ea; n; )
          (t = sa - n._time) >= 0 && n._call.call(void 0, t), (n = n._next);
        --ia;
      })();
    } finally {
      (ia = 0),
        (function () {
          var t,
            n,
            e = ea,
            r = 1 / 0;
          for (; e; )
            e._call
              ? (r > e._time && (r = e._time), (t = e), (e = e._next))
              : ((n = e._next),
                (e._next = null),
                (e = t ? (t._next = n) : (ea = n)));
          (ra = t), va(r);
        })(),
        (sa = 0);
    }
  }
  function ga() {
    var t = la.now(),
      n = t - ua;
    n > 1e3 && ((ca -= n), (ua = t));
  }
  function va(t) {
    ia ||
      (oa && (oa = clearTimeout(oa)),
      t - sa > 24
        ? (t < 1 / 0 && (oa = setTimeout(ya, t - la.now() - ca)),
          aa && (aa = clearInterval(aa)))
        : (aa || ((ua = la.now()), (aa = setInterval(ga, 1e3))),
          (ia = 1),
          ha(ya)));
  }
  function ma(t, n, e) {
    var r = new _a();
    return (
      (n = null == n ? 0 : +n),
      r.restart(
        (e) => {
          r.stop(), t(e + n);
        },
        n,
        e
      ),
      r
    );
  }
  _a.prototype = da.prototype = {
    constructor: _a,
    restart: function (t, n, e) {
      if ("function" != typeof t)
        throw new TypeError("callback is not a function");
      (e = (null == e ? fa() : +e) + (null == n ? 0 : +n)),
        this._next ||
          ra === this ||
          (ra ? (ra._next = this) : (ea = this), (ra = this)),
        (this._call = t),
        (this._time = e),
        va();
    },
    stop: function () {
      this._call && ((this._call = null), (this._time = 1 / 0), va());
    },
  };
  var xa = Go("start", "end", "cancel", "interrupt"),
    wa = [];
  function ba(t, n, e, r, i, o) {
    var a = t.__transition;
    if (a) {
      if (e in a) return;
    } else t.__transition = {};
    !(function (t, n, e) {
      var r,
        i = t.__transition;
      function o(t) {
        (e.state = 1),
          e.timer.restart(a, e.delay, e.time),
          e.delay <= t && a(t - e.delay);
      }
      function a(o) {
        var c, l, h, f;
        if (1 !== e.state) return s();
        for (c in i)
          if ((f = i[c]).name === e.name) {
            if (3 === f.state) return ma(a);
            4 === f.state
              ? ((f.state = 6),
                f.timer.stop(),
                f.on.call("interrupt", t, t.__data__, f.index, f.group),
                delete i[c])
              : +c < n &&
                ((f.state = 6),
                f.timer.stop(),
                f.on.call("cancel", t, t.__data__, f.index, f.group),
                delete i[c]);
          }
        if (
          (ma(function () {
            3 === e.state &&
              ((e.state = 4), e.timer.restart(u, e.delay, e.time), u(o));
          }),
          (e.state = 2),
          e.on.call("start", t, t.__data__, e.index, e.group),
          2 === e.state)
        ) {
          for (
            e.state = 3, r = new Array((h = e.tween.length)), c = 0, l = -1;
            c < h;
            ++c
          )
            (f = e.tween[c].value.call(t, t.__data__, e.index, e.group)) &&
              (r[++l] = f);
          r.length = l + 1;
        }
      }
      function u(n) {
        for (
          var i =
              n < e.duration
                ? e.ease.call(null, n / e.duration)
                : (e.timer.restart(s), (e.state = 5), 1),
            o = -1,
            a = r.length;
          ++o < a;

        )
          r[o].call(t, i);
        5 === e.state &&
          (e.on.call("end", t, t.__data__, e.index, e.group), s());
      }
      function s() {
        for (var r in ((e.state = 6), e.timer.stop(), delete i[n], i)) return;
        delete t.__transition;
      }
      (i[n] = e), (e.timer = da(o, 0, e.time));
    })(t, e, {
      name: n,
      index: r,
      group: i,
      on: xa,
      tween: wa,
      time: o.time,
      delay: o.delay,
      duration: o.duration,
      ease: o.ease,
      timer: null,
      state: 0,
    });
  }
  function Ma(t, n) {
    var e = Sa(t, n);
    if (e.state > 0) throw new Error("too late; already scheduled");
    return e;
  }
  function Ta(t, n) {
    var e = Sa(t, n);
    if (e.state > 3) throw new Error("too late; already running");
    return e;
  }
  function Sa(t, n) {
    var e = t.__transition;
    if (!e || !(e = e[n])) throw new Error("transition not found");
    return e;
  }
  function Na(t, n) {
    var e, r;
    return function () {
      var i = Ta(this, t),
        o = i.tween;
      if (o !== e)
        for (var a = 0, u = (r = e = o).length; a < u; ++a)
          if (r[a].name === n) {
            (r = r.slice()).splice(a, 1);
            break;
          }
      i.tween = r;
    };
  }
  function Ca(t, n, e) {
    var r, i;
    if ("function" != typeof e) throw new Error();
    return function () {
      var o = Ta(this, t),
        a = o.tween;
      if (a !== r) {
        i = (r = a).slice();
        for (var u = { name: n, value: e }, s = 0, c = i.length; s < c; ++s)
          if (i[s].name === n) {
            i[s] = u;
            break;
          }
        s === c && i.push(u);
      }
      o.tween = i;
    };
  }
  function Aa(t, n, e) {
    var r = t._id;
    return (
      t.each(function () {
        var t = Ta(this, r);
        (t.value || (t.value = {}))[n] = e.apply(this, arguments);
      }),
      function (t) {
        return Sa(t, r).value[n];
      }
    );
  }
  function ka(t, n) {
    var e;
    return (
      "number" == typeof n
        ? Xn
        : n instanceof Vt
        ? jn
        : (e = Vt(n))
        ? ((n = e), jn)
        : Qn
    )(t, n);
  }
  function Ea(t) {
    return function () {
      this.removeAttribute(t);
    };
  }
  function Ua(t) {
    return function () {
      this.removeAttributeNS(t.space, t.local);
    };
  }
  function Da(t, n, e) {
    var r,
      i,
      o = e + "";
    return function () {
      var a = this.getAttribute(t);
      return a === o ? null : a === r ? i : (i = n((r = a), e));
    };
  }
  function Pa(t, n, e) {
    var r,
      i,
      o = e + "";
    return function () {
      var a = this.getAttributeNS(t.space, t.local);
      return a === o ? null : a === r ? i : (i = n((r = a), e));
    };
  }
  function $a(t, n, e) {
    var r, i, o;
    return function () {
      var a,
        u,
        s = e(this);
      if (null != s)
        return (a = this.getAttribute(t)) === (u = s + "")
          ? null
          : a === r && u === i
          ? o
          : ((i = u), (o = n((r = a), s)));
      this.removeAttribute(t);
    };
  }
  function Oa(t, n, e) {
    var r, i, o;
    return function () {
      var a,
        u,
        s = e(this);
      if (null != s)
        return (a = this.getAttributeNS(t.space, t.local)) === (u = s + "")
          ? null
          : a === r && u === i
          ? o
          : ((i = u), (o = n((r = a), s)));
      this.removeAttributeNS(t.space, t.local);
    };
  }
  function Fa(t, n) {
    return function (e) {
      this.setAttribute(t, n.call(this, e));
    };
  }
  function Ha(t, n) {
    return function (e) {
      this.setAttributeNS(t.space, t.local, n.call(this, e));
    };
  }
  function Ya(t, n) {
    var e, r;
    function i() {
      var i = n.apply(this, arguments);
      return i !== r && (e = (r = i) && Ha(t, i)), e;
    }
    return (i._value = n), i;
  }
  function Ia(t, n) {
    var e, r;
    function i() {
      var i = n.apply(this, arguments);
      return i !== r && (e = (r = i) && Fa(t, i)), e;
    }
    return (i._value = n), i;
  }
  function La(t, n) {
    return function () {
      Ma(this, t).delay = +n.apply(this, arguments);
    };
  }
  function qa(t, n) {
    return (
      (n = +n),
      function () {
        Ma(this, t).delay = n;
      }
    );
  }
  function ja(t, n) {
    return function () {
      Ta(this, t).duration = +n.apply(this, arguments);
    };
  }
  function Ra(t, n) {
    return (
      (n = +n),
      function () {
        Ta(this, t).duration = n;
      }
    );
  }
  function za(t, n) {
    if ("function" != typeof n) throw new Error();
    return function () {
      Ta(this, t).ease = n;
    };
  }
  function Ba(t, n, e) {
    var r,
      i,
      o = (function (t) {
        return (t + "")
          .trim()
          .split(/^|\s+/)
          .every(function (t) {
            var n = t.indexOf(".");
            return n >= 0 && (t = t.slice(0, n)), !t || "start" === t;
          });
      })(n)
        ? Ma
        : Ta;
    return function () {
      var a = o(this, t),
        u = a.on;
      u !== r && (i = (r = u).copy()).on(n, e), (a.on = i);
    };
  }
  var Xa = dt.prototype.constructor;
  function Va(t) {
    return function () {
      this.style.removeProperty(t);
    };
  }
  function Za(t, n, e) {
    return function (r) {
      this.style.setProperty(t, n.call(this, r), e);
    };
  }
  function Wa(t, n, e) {
    var r, i;
    function o() {
      var o = n.apply(this, arguments);
      return o !== i && (r = (i = o) && Za(t, o, e)), r;
    }
    return (o._value = n), o;
  }
  function Qa(t) {
    return function (n) {
      this.textContent = t.call(this, n);
    };
  }
  function Ga(t) {
    var n, e;
    function r() {
      var r = t.apply(this, arguments);
      return r !== e && (n = (e = r) && Qa(r)), n;
    }
    return (r._value = t), r;
  }
  var Ja = 0;
  function Ka(t, n, e, r) {
    (this._groups = t), (this._parents = n), (this._name = e), (this._id = r);
  }
  function tu(t) {
    return dt().transition(t);
  }
  function nu() {
    return ++Ja;
  }
  var eu = dt.prototype;
  Ka.prototype = tu.prototype = {
    constructor: Ka,
    select: function (t) {
      var n = this._name,
        e = this._id;
      "function" != typeof t && (t = c(t));
      for (
        var r = this._groups, i = r.length, o = new Array(i), a = 0;
        a < i;
        ++a
      )
        for (
          var u, s, l = r[a], h = l.length, f = (o[a] = new Array(h)), p = 0;
          p < h;
          ++p
        )
          (u = l[p]) &&
            (s = t.call(u, u.__data__, p, l)) &&
            ("__data__" in u && (s.__data__ = u.__data__),
            (f[p] = s),
            ba(f[p], n, e, p, f, Sa(u, e)));
      return new Ka(o, this._parents, n, e);
    },
    selectAll: function (t) {
      var n = this._name,
        e = this._id;
      "function" != typeof t && (t = f(t));
      for (
        var r = this._groups, i = r.length, o = [], a = [], u = 0;
        u < i;
        ++u
      )
        for (var s, c = r[u], l = c.length, h = 0; h < l; ++h)
          if ((s = c[h])) {
            for (
              var p,
                _ = t.call(s, s.__data__, h, c),
                d = Sa(s, e),
                y = 0,
                g = _.length;
              y < g;
              ++y
            )
              (p = _[y]) && ba(p, n, e, y, _, d);
            o.push(_), a.push(s);
          }
      return new Ka(o, a, n, e);
    },
    selectChild: eu.selectChild,
    selectChildren: eu.selectChildren,
    filter: function (t) {
      "function" != typeof t && (t = p(t));
      for (
        var n = this._groups, e = n.length, r = new Array(e), i = 0;
        i < e;
        ++i
      )
        for (var o, a = n[i], u = a.length, s = (r[i] = []), c = 0; c < u; ++c)
          (o = a[c]) && t.call(o, o.__data__, c, a) && s.push(o);
      return new Ka(r, this._parents, this._name, this._id);
    },
    merge: function (t) {
      if (t._id !== this._id) throw new Error();
      for (
        var n = this._groups,
          e = t._groups,
          r = n.length,
          i = e.length,
          o = Math.min(r, i),
          a = new Array(r),
          u = 0;
        u < o;
        ++u
      )
        for (
          var s,
            c = n[u],
            l = e[u],
            h = c.length,
            f = (a[u] = new Array(h)),
            p = 0;
          p < h;
          ++p
        )
          (s = c[p] || l[p]) && (f[p] = s);
      for (; u < r; ++u) a[u] = n[u];
      return new Ka(a, this._parents, this._name, this._id);
    },
    selection: function () {
      return new Xa(this._groups, this._parents);
    },
    transition: function () {
      for (
        var t = this._name,
          n = this._id,
          e = nu(),
          r = this._groups,
          i = r.length,
          o = 0;
        o < i;
        ++o
      )
        for (var a, u = r[o], s = u.length, c = 0; c < s; ++c)
          if ((a = u[c])) {
            var l = Sa(a, n);
            ba(a, t, e, c, u, {
              time: l.time + l.delay + l.duration,
              delay: 0,
              duration: l.duration,
              ease: l.ease,
            });
          }
      return new Ka(r, this._parents, t, e);
    },
    call: eu.call,
    nodes: eu.nodes,
    node: eu.node,
    size: eu.size,
    empty: eu.empty,
    each: eu.each,
    on: function (t, n) {
      var e = this._id;
      return arguments.length < 2
        ? Sa(this.node(), e).on.on(t)
        : this.each(Ba(e, t, n));
    },
    attr: function (t, n) {
      var e = i(t),
        r = "transform" === e ? oe : ka;
      return this.attrTween(
        t,
        "function" == typeof n
          ? (e.local ? Oa : $a)(e, r, Aa(this, "attr." + t, n))
          : null == n
          ? (e.local ? Ua : Ea)(e)
          : (e.local ? Pa : Da)(e, r, n)
      );
    },
    attrTween: function (t, n) {
      var e = "attr." + t;
      if (arguments.length < 2) return (e = this.tween(e)) && e._value;
      if (null == n) return this.tween(e, null);
      if ("function" != typeof n) throw new Error();
      var r = i(t);
      return this.tween(e, (r.local ? Ya : Ia)(r, n));
    },
    style: function (t, n, e) {
      var r = "transform" == (t += "") ? ie : ka;
      return null == n
        ? this.styleTween(
            t,
            (function (t, n) {
              var e, r, i;
              return function () {
                var o = H(this, t),
                  a = (this.style.removeProperty(t), H(this, t));
                return o === a
                  ? null
                  : o === e && a === r
                  ? i
                  : (i = n((e = o), (r = a)));
              };
            })(t, r)
          ).on("end.style." + t, Va(t))
        : "function" == typeof n
        ? this.styleTween(
            t,
            (function (t, n, e) {
              var r, i, o;
              return function () {
                var a = H(this, t),
                  u = e(this),
                  s = u + "";
                return (
                  null == u &&
                    (this.style.removeProperty(t), (s = u = H(this, t))),
                  a === s
                    ? null
                    : a === r && s === i
                    ? o
                    : ((i = s), (o = n((r = a), u)))
                );
              };
            })(t, r, Aa(this, "style." + t, n))
          ).each(
            (function (t, n) {
              var e,
                r,
                i,
                o,
                a = "style." + n,
                u = "end." + a;
              return function () {
                var s = Ta(this, t),
                  c = s.on,
                  l = null == s.value[a] ? o || (o = Va(n)) : void 0;
                (c === e && i === l) || (r = (e = c).copy()).on(u, (i = l)),
                  (s.on = r);
              };
            })(this._id, t)
          )
        : this.styleTween(
            t,
            (function (t, n, e) {
              var r,
                i,
                o = e + "";
              return function () {
                var a = H(this, t);
                return a === o ? null : a === r ? i : (i = n((r = a), e));
              };
            })(t, r, n),
            e
          ).on("end.style." + t, null);
    },
    styleTween: function (t, n, e) {
      var r = "style." + (t += "");
      if (arguments.length < 2) return (r = this.tween(r)) && r._value;
      if (null == n) return this.tween(r, null);
      if ("function" != typeof n) throw new Error();
      return this.tween(r, Wa(t, n, null == e ? "" : e));
    },
    text: function (t) {
      return this.tween(
        "text",
        "function" == typeof t
          ? (function (t) {
              return function () {
                var n = t(this);
                this.textContent = null == n ? "" : n;
              };
            })(Aa(this, "text", t))
          : (function (t) {
              return function () {
                this.textContent = t;
              };
            })(null == t ? "" : t + "")
      );
    },
    textTween: function (t) {
      var n = "text";
      if (arguments.length < 1) return (n = this.tween(n)) && n._value;
      if (null == t) return this.tween(n, null);
      if ("function" != typeof t) throw new Error();
      return this.tween(n, Ga(t));
    },
    remove: function () {
      return this.on(
        "end.remove",
        (function (t) {
          return function () {
            var n = this.parentNode;
            for (var e in this.__transition) if (+e !== t) return;
            n && n.removeChild(this);
          };
        })(this._id)
      );
    },
    tween: function (t, n) {
      var e = this._id;
      if (((t += ""), arguments.length < 2)) {
        for (
          var r, i = Sa(this.node(), e).tween, o = 0, a = i.length;
          o < a;
          ++o
        )
          if ((r = i[o]).name === t) return r.value;
        return null;
      }
      return this.each((null == n ? Na : Ca)(e, t, n));
    },
    delay: function (t) {
      var n = this._id;
      return arguments.length
        ? this.each(("function" == typeof t ? La : qa)(n, t))
        : Sa(this.node(), n).delay;
    },
    duration: function (t) {
      var n = this._id;
      return arguments.length
        ? this.each(("function" == typeof t ? ja : Ra)(n, t))
        : Sa(this.node(), n).duration;
    },
    ease: function (t) {
      var n = this._id;
      return arguments.length ? this.each(za(n, t)) : Sa(this.node(), n).ease;
    },
    easeVarying: function (t) {
      if ("function" != typeof t) throw new Error();
      return this.each(
        (function (t, n) {
          return function () {
            var e = n.apply(this, arguments);
            if ("function" != typeof e) throw new Error();
            Ta(this, t).ease = e;
          };
        })(this._id, t)
      );
    },
    end: function () {
      var t,
        n,
        e = this,
        r = e._id,
        i = e.size();
      return new Promise(function (o, a) {
        var u = { value: a },
          s = {
            value: function () {
              0 == --i && o();
            },
          };
        e.each(function () {
          var e = Ta(this, r),
            i = e.on;
          i !== t &&
            ((n = (t = i).copy())._.cancel.push(u),
            n._.interrupt.push(u),
            n._.end.push(s)),
            (e.on = n);
        }),
          0 === i && o();
      });
    },
    [Symbol.iterator]: eu[Symbol.iterator],
  };
  function ru(t) {
    return 1.0009775171065494 * (Math.pow(2, -10 * t) - 0.0009765625);
  }
  !(function t(n) {
    function e(t) {
      return Math.pow(t, n);
    }
    return (n = +n), (e.exponent = t), e;
  })(3),
    (function t(n) {
      function e(t) {
        return 1 - Math.pow(1 - t, n);
      }
      return (n = +n), (e.exponent = t), e;
    })(3),
    (function t(n) {
      function e(t) {
        return ((t *= 2) <= 1 ? Math.pow(t, n) : 2 - Math.pow(2 - t, n)) / 2;
      }
      return (n = +n), (e.exponent = t), e;
    })(3);
  var iu = 1.70158;
  !(function t(n) {
    function e(t) {
      return (t = +t) * t * (n * (t - 1) + t);
    }
    return (n = +n), (e.overshoot = t), e;
  })(iu),
    (function t(n) {
      function e(t) {
        return --t * t * ((t + 1) * n + t) + 1;
      }
      return (n = +n), (e.overshoot = t), e;
    })(iu),
    (function t(n) {
      function e(t) {
        return (
          ((t *= 2) < 1
            ? t * t * ((n + 1) * t - n)
            : (t -= 2) * t * ((n + 1) * t + n) + 2) / 2
        );
      }
      return (n = +n), (e.overshoot = t), e;
    })(iu);
  var ou = 2 * Math.PI;
  !(function t(n, e) {
    var r = Math.asin(1 / (n = Math.max(1, n))) * (e /= ou);
    function i(t) {
      return n * ru(-(--t)) * Math.sin((r - t) / e);
    }
    return (
      (i.amplitude = function (n) {
        return t(n, e * ou);
      }),
      (i.period = function (e) {
        return t(n, e);
      }),
      i
    );
  })(1, 0.3),
    (function t(n, e) {
      var r = Math.asin(1 / (n = Math.max(1, n))) * (e /= ou);
      function i(t) {
        return 1 - n * ru((t = +t)) * Math.sin((t + r) / e);
      }
      return (
        (i.amplitude = function (n) {
          return t(n, e * ou);
        }),
        (i.period = function (e) {
          return t(n, e);
        }),
        i
      );
    })(1, 0.3),
    (function t(n, e) {
      var r = Math.asin(1 / (n = Math.max(1, n))) * (e /= ou);
      function i(t) {
        return (
          ((t = 2 * t - 1) < 0
            ? n * ru(-t) * Math.sin((r - t) / e)
            : 2 - n * ru(t) * Math.sin((r + t) / e)) / 2
        );
      }
      return (
        (i.amplitude = function (n) {
          return t(n, e * ou);
        }),
        (i.period = function (e) {
          return t(n, e);
        }),
        i
      );
    })(1, 0.3);
  var au = {
    time: null,
    delay: 0,
    duration: 250,
    ease: function (t) {
      return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
    },
  };
  function uu(t, n) {
    for (var e; !(e = t.__transition) || !(e = e[n]); )
      if (!(t = t.parentNode)) throw new Error(`transition ${n} not found`);
    return e;
  }
  function su(t, n, e) {
    var r, i, o, a, u;
    function s() {
      var c = Date.now() - a;
      c < n && c >= 0
        ? (r = setTimeout(s, n - c))
        : ((r = null), e || ((u = t.apply(o, i)), (o = i = null)));
    }
    null == n && (n = 100);
    var c = function () {
      (o = this), (i = arguments), (a = Date.now());
      var c = e && !r;
      return (
        r || (r = setTimeout(s, n)),
        c && ((u = t.apply(o, i)), (o = i = null)),
        u
      );
    };
    return (
      (c.clear = function () {
        r && (clearTimeout(r), (r = null));
      }),
      (c.flush = function () {
        r && ((u = t.apply(o, i)), (o = i = null), clearTimeout(r), (r = null));
      }),
      c
    );
  }
  (dt.prototype.interrupt = function (t) {
    return this.each(function () {
      !(function (t, n) {
        var e,
          r,
          i,
          o = t.__transition,
          a = !0;
        if (o) {
          for (i in ((n = null == n ? null : n + ""), o))
            (e = o[i]).name === n
              ? ((r = e.state > 2 && e.state < 5),
                (e.state = 6),
                e.timer.stop(),
                e.on.call(
                  r ? "interrupt" : "cancel",
                  t,
                  t.__data__,
                  e.index,
                  e.group
                ),
                delete o[i])
              : (a = !1);
          a && delete t.__transition;
        }
      })(this, t);
    });
  }),
    (dt.prototype.transition = function (t) {
      var n, e;
      t instanceof Ka
        ? ((n = t._id), (t = t._name))
        : ((n = nu()), ((e = au).time = fa()), (t = null == t ? null : t + ""));
      for (var r = this._groups, i = r.length, o = 0; o < i; ++o)
        for (var a, u = r[o], s = u.length, c = 0; c < s; ++c)
          (a = u[c]) && ba(a, t, n, c, u, e || uu(a, n));
      return new Ka(r, this._parents, t, n);
    }),
    (su.debounce = su);
  var cu = su;
  function lu(t, n) {
    for (var e = 0; e < n.length; e++) {
      var r = n[e];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        "value" in r && (r.writable = !0),
        Object.defineProperty(t, r.key, r);
    }
  }
  function hu(t, n, e) {
    return (
      n && lu(t.prototype, n),
      e && lu(t, e),
      Object.defineProperty(t, "prototype", { writable: !1 }),
      t
    );
  }
  function fu(t, n) {
    return (
      (function (t) {
        if (Array.isArray(t)) return t;
      })(t) ||
      (function (t, n) {
        var e =
          null == t
            ? null
            : ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
              t["@@iterator"];
        if (null == e) return;
        var r,
          i,
          o = [],
          a = !0,
          u = !1;
        try {
          for (
            e = e.call(t);
            !(a = (r = e.next()).done) &&
            (o.push(r.value), !n || o.length !== n);
            a = !0
          );
        } catch (t) {
          (u = !0), (i = t);
        } finally {
          try {
            a || null == e.return || e.return();
          } finally {
            if (u) throw i;
          }
        }
        return o;
      })(t, n) ||
      (function (t, n) {
        if (!t) return;
        if ("string" == typeof t) return pu(t, n);
        var e = Object.prototype.toString.call(t).slice(8, -1);
        "Object" === e && t.constructor && (e = t.constructor.name);
        if ("Map" === e || "Set" === e) return Array.from(t);
        if (
          "Arguments" === e ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
        )
          return pu(t, n);
      })(t, n) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function pu(t, n) {
    (null == n || n > t.length) && (n = t.length);
    for (var e = 0, r = new Array(n); e < n; e++) r[e] = t[e];
    return r;
  }
  var _u = hu(function t(n, e) {
    var r = e.default,
      i = void 0 === r ? null : r,
      o = e.triggerUpdate,
      a = void 0 === o || o,
      u = e.onChange,
      s = void 0 === u ? function (t, n) {} : u;
    !(function (t, n) {
      if (!(t instanceof n))
        throw new TypeError("Cannot call a class as a function");
    })(this, t),
      (this.name = n),
      (this.defaultVal = i),
      (this.triggerUpdate = a),
      (this.onChange = s);
  });
  function du(t) {
    var n = t.stateInit,
      e =
        void 0 === n
          ? function () {
              return {};
            }
          : n,
      r = t.props,
      i = void 0 === r ? {} : r,
      o = t.methods,
      a = void 0 === o ? {} : o,
      u = t.aliases,
      s = void 0 === u ? {} : u,
      c = t.init,
      l = void 0 === c ? function () {} : c,
      h = t.update,
      f = void 0 === h ? function () {} : h,
      p = Object.keys(i).map(function (t) {
        return new _u(t, i[t]);
      });
    return function () {
      var t =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        n = Object.assign({}, e instanceof Function ? e(t) : e, {
          initialised: !1,
        }),
        r = {};
      function i(n) {
        return o(n, t), u(), i;
      }
      var o = function (t, e) {
          l.call(i, t, n, e), (n.initialised = !0);
        },
        u = cu(function () {
          n.initialised && (f.call(i, n, r), (r = {}));
        }, 1);
      return (
        p.forEach(function (t) {
          i[t.name] = (function (t) {
            var e = t.name,
              o = t.triggerUpdate,
              a = void 0 !== o && o,
              s = t.onChange,
              c = void 0 === s ? function (t, n) {} : s,
              l = t.defaultVal,
              h = void 0 === l ? null : l;
            return function (t) {
              var o = n[e];
              if (!arguments.length) return o;
              var s = void 0 === t ? h : t;
              return (
                (n[e] = s),
                c.call(i, s, n, o),
                !r.hasOwnProperty(e) && (r[e] = o),
                a && u(),
                i
              );
            };
          })(t);
        }),
        Object.keys(a).forEach(function (t) {
          i[t] = function () {
            for (
              var e, r = arguments.length, o = new Array(r), u = 0;
              u < r;
              u++
            )
              o[u] = arguments[u];
            return (e = a[t]).call.apply(e, [i, n].concat(o));
          };
        }),
        Object.entries(s).forEach(function (t) {
          var n = fu(t, 2),
            e = n[0],
            r = n[1];
          return (i[e] = i[r]);
        }),
        (i.resetProps = function () {
          return (
            p.forEach(function (t) {
              i[t.name](t.defaultVal);
            }),
            i
          );
        }),
        i.resetProps(),
        (n._rerender = u),
        i
      );
    };
  }
  var yu = function (t) {
    return t instanceof Function
      ? t
      : "string" == typeof t
      ? function (n) {
          return n[t];
        }
      : function (n) {
          return t;
        };
  };
  function gu(t) {
    return (
      (gu =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            }),
      gu(t)
    );
  }
  !(function (t, n) {
    void 0 === n && (n = {});
    var e = n.insertAt;
    if (t && "undefined" != typeof document) {
      var r = document.head || document.getElementsByTagName("head")[0],
        i = document.createElement("style");
      (i.type = "text/css"),
        "top" === e && r.firstChild
          ? r.insertBefore(i, r.firstChild)
          : r.appendChild(i),
        i.styleSheet
          ? (i.styleSheet.cssText = t)
          : i.appendChild(document.createTextNode(t));
    }
  })(
    ".tooltip {\n  position: absolute;\n  padding: 5px;\n  border-radius: 3px;\n  font: 12px sans-serif;\n  color: #eee;\n  background: rgba(0,0,0,0.65);\n  pointer-events: none;\n}\n"
  );
  var vu = du({
      props: { content: { default: !1 } },
      init: function (t, n) {
        var e = yt(
          !!t && "object" === gu(t) && !!t.node && "function" == typeof t.node
            ? t.node()
            : t
        );
        (n.tooltipEl = e.append("div").attr("class", "tooltip")),
          (n.mouseInside = !1),
          e.on("mousemove.tooltip", function (t) {
            n.mouseInside = !0;
            var r = (function (t, n) {
                if (
                  ((t = (function (t) {
                    let n;
                    for (; (n = t.sourceEvent); ) t = n;
                    return t;
                  })(t)),
                  void 0 === n && (n = t.currentTarget),
                  n)
                ) {
                  var e = n.ownerSVGElement || n;
                  if (e.createSVGPoint) {
                    var r = e.createSVGPoint();
                    return (
                      (r.x = t.clientX),
                      (r.y = t.clientY),
                      [
                        (r = r.matrixTransform(n.getScreenCTM().inverse())).x,
                        r.y,
                      ]
                    );
                  }
                  if (n.getBoundingClientRect) {
                    var i = n.getBoundingClientRect();
                    return [
                      t.clientX - i.left - n.clientLeft,
                      t.clientY - i.top - n.clientTop,
                    ];
                  }
                }
                return [t.pageX, t.pageY];
              })(t),
              i = e.node(),
              o = i.offsetWidth,
              a = i.offsetHeight;
            n.tooltipEl
              .style("left", r[0] + "px")
              .style("top", r[1] + "px")
              .style(
                "transform",
                "translate(-"
                  .concat((r[0] / o) * 100, "%, ")
                  .concat(a - r[1] < 100 ? "calc(-100% - 6px)" : "21px", ")")
              );
          }),
          e.on("mouseover.tooltip", function () {
            (n.mouseInside = !0),
              n.content && n.tooltipEl.style("display", "inline");
          }),
          e.on("mouseout.tooltip", function () {
            (n.mouseInside = !1), n.tooltipEl.style("display", "none");
          });
      },
      update: function (t) {
        t.tooltipEl.style(
          "display",
          t.content && t.mouseInside ? "inline" : "none"
        ),
          t.tooltipEl.html(t.content || "");
      },
    }),
    mu = du({
      props: {
        width: { default: window.innerWidth },
        height: { default: window.innerHeight },
        data: {
          onChange: function (t, n) {
            n.needsReparse = !0;
          },
        },
        children: {
          default: "children",
          onChange: function (t, n) {
            n.needsReparse = !0;
          },
        },
        sort: {
          onChange: function (t, n) {
            n.needsReparse = !0;
          },
        },
        label: {
          default: function (t) {
            return t.name;
          },
        },
        labelOrientation: { default: "auto" },
        size: {
          default: "value",
          onChange: function (t, n) {
            n.needsReparse = !0;
          },
        },
        color: {
          default: function (t) {
            return "lightgrey";
          },
        },
        strokeColor: {
          default: function (t) {
            return "white";
          },
        },
        nodeClassName: {},
        minSliceAngle: { default: 0.2 },
        maxLevels: {},
        excludeRoot: {
          default: !1,
          onChange: function (t, n) {
            n.needsReparse = !0;
          },
        },
        centerRadius: { default: 0.1 },
        radiusScaleExponent: { default: 0.5 },
        showLabels: { default: !0 },
        tooltipContent: {
          default: function (t) {
            return "";
          },
          triggerUpdate: !1,
        },
        tooltipTitle: { default: null, triggerUpdate: !1 },
        showTooltip: {
          default: function (t) {
            return !0;
          },
          triggerUpdate: !1,
        },
        focusOnNode: {
          onChange: function (t, n) {
            t &&
              n.initialised &&
              (function t(e) {
                n.svg
                  .selectAll(".slice")
                  .filter(function (t) {
                    return t === e;
                  })
                  .each(function (n) {
                    this.parentNode.appendChild(this), n.parent && t(n.parent);
                  });
              })(t.__dataNode);
          },
        },
        onClick: { triggerUpdate: !1 },
        onHover: { triggerUpdate: !1 },
        transitionDuration: { default: 750, triggerUpdate: !1 },
      },
      methods: {
        _parseData: function (t) {
          if (t.data) {
            var n = Vi(t.data, yu(t.children)).sum(yu(t.size));
            if ((t.sort && n.sort(t.sort), no().padding(0)(n), t.excludeRoot)) {
              var e = $e().domain([n.y1 - n.y0, 1]);
              n.descendants().forEach(function (t) {
                (t.y0 = e(t.y0)), (t.y1 = e(t.y1));
              });
            }
            n.descendants().forEach(function (t, n) {
              (t.id = n), (t.data.__dataNode = t);
            }),
              (t.layoutData = n.descendants());
          }
        },
      },
      aliases: { onNodeClick: "onClick" },
      init: function (t, n) {
        var e = this;
        (n.chartId = Math.round(1e12 * Math.random())),
          (n.radiusScale = Ie()),
          (n.angleScale = $e()
            .domain([0, 10])
            .range([0, 2 * Math.PI])
            .clamp(!0)),
          (n.arc = (function () {
            var t = No,
              n = Co,
              e = ho(0),
              r = null,
              i = Ao,
              o = ko,
              a = Eo,
              u = null;
            function s() {
              var s,
                c,
                l = +t.apply(this, arguments),
                h = +n.apply(this, arguments),
                f = i.apply(this, arguments) - bo,
                p = o.apply(this, arguments) - bo,
                _ = fo(p - f),
                d = p > f;
              if (
                (u || (u = s = lo()),
                h < l && ((c = h), (h = l), (l = c)),
                h > xo)
              )
                if (_ > Mo - xo)
                  u.moveTo(h * _o(f), h * vo(f)),
                    u.arc(0, 0, h, f, p, !d),
                    l > xo &&
                      (u.moveTo(l * _o(p), l * vo(p)), u.arc(0, 0, l, p, f, d));
                else {
                  var y,
                    g,
                    v = f,
                    m = p,
                    x = f,
                    w = p,
                    b = _,
                    M = _,
                    T = a.apply(this, arguments) / 2,
                    S =
                      T > xo &&
                      (r ? +r.apply(this, arguments) : mo(l * l + h * h)),
                    N = go(fo(h - l) / 2, +e.apply(this, arguments)),
                    C = N,
                    A = N;
                  if (S > xo) {
                    var k = So((S / l) * vo(T)),
                      E = So((S / h) * vo(T));
                    (b -= 2 * k) > xo
                      ? ((x += k *= d ? 1 : -1), (w -= k))
                      : ((b = 0), (x = w = (f + p) / 2)),
                      (M -= 2 * E) > xo
                        ? ((v += E *= d ? 1 : -1), (m -= E))
                        : ((M = 0), (v = m = (f + p) / 2));
                  }
                  var U = h * _o(v),
                    D = h * vo(v),
                    P = l * _o(w),
                    $ = l * vo(w);
                  if (N > xo) {
                    var O,
                      F = h * _o(m),
                      H = h * vo(m),
                      Y = l * _o(x),
                      I = l * vo(x);
                    if (_ < wo && (O = Uo(U, D, Y, I, F, H, P, $))) {
                      var L = U - O[0],
                        q = D - O[1],
                        j = F - O[0],
                        R = H - O[1],
                        z =
                          1 /
                          vo(
                            To(
                              (L * j + q * R) /
                                (mo(L * L + q * q) * mo(j * j + R * R))
                            ) / 2
                          ),
                        B = mo(O[0] * O[0] + O[1] * O[1]);
                      (C = go(N, (l - B) / (z - 1))),
                        (A = go(N, (h - B) / (z + 1)));
                    }
                  }
                  M > xo
                    ? A > xo
                      ? ((y = Do(Y, I, U, D, h, A, d)),
                        (g = Do(F, H, P, $, h, A, d)),
                        u.moveTo(y.cx + y.x01, y.cy + y.y01),
                        A < N
                          ? u.arc(
                              y.cx,
                              y.cy,
                              A,
                              po(y.y01, y.x01),
                              po(g.y01, g.x01),
                              !d
                            )
                          : (u.arc(
                              y.cx,
                              y.cy,
                              A,
                              po(y.y01, y.x01),
                              po(y.y11, y.x11),
                              !d
                            ),
                            u.arc(
                              0,
                              0,
                              h,
                              po(y.cy + y.y11, y.cx + y.x11),
                              po(g.cy + g.y11, g.cx + g.x11),
                              !d
                            ),
                            u.arc(
                              g.cx,
                              g.cy,
                              A,
                              po(g.y11, g.x11),
                              po(g.y01, g.x01),
                              !d
                            )))
                      : (u.moveTo(U, D), u.arc(0, 0, h, v, m, !d))
                    : u.moveTo(U, D),
                    l > xo && b > xo
                      ? C > xo
                        ? ((y = Do(P, $, F, H, l, -C, d)),
                          (g = Do(U, D, Y, I, l, -C, d)),
                          u.lineTo(y.cx + y.x01, y.cy + y.y01),
                          C < N
                            ? u.arc(
                                y.cx,
                                y.cy,
                                C,
                                po(y.y01, y.x01),
                                po(g.y01, g.x01),
                                !d
                              )
                            : (u.arc(
                                y.cx,
                                y.cy,
                                C,
                                po(y.y01, y.x01),
                                po(y.y11, y.x11),
                                !d
                              ),
                              u.arc(
                                0,
                                0,
                                l,
                                po(y.cy + y.y11, y.cx + y.x11),
                                po(g.cy + g.y11, g.cx + g.x11),
                                d
                              ),
                              u.arc(
                                g.cx,
                                g.cy,
                                C,
                                po(g.y11, g.x11),
                                po(g.y01, g.x01),
                                !d
                              )))
                        : u.arc(0, 0, l, w, x, d)
                      : u.lineTo(P, $);
                }
              else u.moveTo(0, 0);
              if ((u.closePath(), s)) return (u = null), s + "" || null;
            }
            return (
              (s.centroid = function () {
                var e =
                    (+t.apply(this, arguments) + +n.apply(this, arguments)) / 2,
                  r =
                    (+i.apply(this, arguments) + +o.apply(this, arguments)) /
                      2 -
                    wo / 2;
                return [_o(r) * e, vo(r) * e];
              }),
              (s.innerRadius = function (n) {
                return arguments.length
                  ? ((t = "function" == typeof n ? n : ho(+n)), s)
                  : t;
              }),
              (s.outerRadius = function (t) {
                return arguments.length
                  ? ((n = "function" == typeof t ? t : ho(+t)), s)
                  : n;
              }),
              (s.cornerRadius = function (t) {
                return arguments.length
                  ? ((e = "function" == typeof t ? t : ho(+t)), s)
                  : e;
              }),
              (s.padRadius = function (t) {
                return arguments.length
                  ? ((r =
                      null == t ? null : "function" == typeof t ? t : ho(+t)),
                    s)
                  : r;
              }),
              (s.startAngle = function (t) {
                return arguments.length
                  ? ((i = "function" == typeof t ? t : ho(+t)), s)
                  : i;
              }),
              (s.endAngle = function (t) {
                return arguments.length
                  ? ((o = "function" == typeof t ? t : ho(+t)), s)
                  : o;
              }),
              (s.padAngle = function (t) {
                return arguments.length
                  ? ((a = "function" == typeof t ? t : ho(+t)), s)
                  : a;
              }),
              (s.context = function (t) {
                return arguments.length ? ((u = null == t ? null : t), s) : u;
              }),
              s
            );
          })()
            .startAngle(function (t) {
              return n.angleScale(t.x0);
            })
            .endAngle(function (t) {
              return n.angleScale(t.x1);
            })
            .innerRadius(function (t) {
              return Math.max(0, n.radiusScale(t.y0));
            })
            .outerRadius(function (t) {
              return Math.max(0, n.radiusScale(t.y1));
            }));
        var r = yt(t).append("div").attr("class", "sunburst-viz");
        (n.svg = r.append("svg")),
          (n.canvas = n.svg.append("g")),
          (n.tooltip = vu()(r)),
          n.svg
            .on("click", function () {
              return (n.onClick || e.focusOnNode)(null);
            })
            .on("mouseover", function () {
              return n.onHover && n.onHover(null);
            });
      },
      update: function (n) {
        var e = this;
        n.needsReparse && (this._parseData(), (n.needsReparse = !1));
        var r = Math.min(n.width, n.height) / 2;
        if (
          (n.radiusScale.range([
            r * Math.max(0, Math.min(1, n.centerRadius)),
            r,
          ]),
          n.radiusScaleExponent > 0 &&
            n.radiusScale.exponent(n.radiusScaleExponent),
          n.svg
            .style("width", n.width + "px")
            .style("height", n.height + "px")
            .attr(
              "viewBox",
              ""
                .concat(-n.width / 2, " ")
                .concat(-n.height / 2, " ")
                .concat(n.width, " ")
                .concat(n.height)
            ),
          n.layoutData)
        ) {
          var i = (n.focusOnNode &&
              n.focusOnNode.__dataNode.y0 >= 0 &&
              n.focusOnNode.__dataNode) || { x0: 0, x1: 1, y0: 0, y1: 1 },
            o = n.canvas.selectAll(".slice").data(
              n.layoutData.filter(function (t) {
                return (
                  t.x1 > i.x0 &&
                  t.x0 < i.x1 &&
                  (t.x1 - t.x0) / (i.x1 - i.x0) > n.minSliceAngle / 360 &&
                  (!n.maxLevels ||
                    t.depth - (i.depth || (n.excludeRoot ? 1 : 0)) <
                      n.maxLevels) &&
                  (t.y0 >= 0 || i.parent)
                );
              }),
              function (t) {
                return t.id;
              }
            ),
            a = yu(n.label),
            u = yu(n.color),
            s = yu(n.strokeColor),
            c = yu(n.nodeClassName),
            l = tu().duration(n.transitionDuration),
            h = n.layoutData[0].y1 - n.layoutData[0].y0,
            f = Math.min(
              1,
              i.y0 +
                h *
                  Math.min(
                    i.hasOwnProperty("height") ? i.height + 1 : 1 / 0,
                    n.maxLevels || 1 / 0
                  )
            );
          n.svg.transition(l).tween("scale", function () {
            var t = Gn(n.angleScale.domain(), [i.x0, i.x1]),
              e = Gn(n.radiusScale.domain(), [i.y0, f]);
            return function (r) {
              n.angleScale.domain(t(r)), n.radiusScale.domain(e(r));
            };
          });
          var p = o.exit().transition(l).remove();
          p.select("path.main-arc").attrTween("d", function (t) {
            return function () {
              return n.arc(t);
            };
          }),
            p.select("path.hidden-arc").attrTween("d", function (t) {
              return function () {
                return x(t);
              };
            });
          var _ = o
            .enter()
            .append("g")
            .style("opacity", 0)
            .on("click", function (t, r) {
              t.stopPropagation(), (n.onClick || e.focusOnNode)(r.data);
            })
            .on("mouseover", function (t, e) {
              t.stopPropagation(),
                n.onHover && n.onHover(e.data),
                n.tooltip.content(
                  !!n.showTooltip(e.data, e) &&
                    '<div class="tooltip-title">'
                      .concat(
                        n.tooltipTitle
                          ? n.tooltipTitle(e.data, e)
                          : (function (t) {
                              var n = [],
                                e = t;
                              for (; e; ) n.unshift(e), (e = e.parent);
                              return n;
                            })(e)
                              .slice(n.excludeRoot ? 1 : 0)
                              .map(function (t) {
                                return a(t.data);
                              })
                              .join(" &rarr; "),
                        "</div>"
                      )
                      .concat(n.tooltipContent(e.data, e))
                );
            })
            .on("mouseout", function () {
              return n.tooltip.content(!1);
            });
          _.append("path")
            .attr("class", "main-arc")
            .style("stroke", function (t) {
              return s(t.data, t.parent);
            })
            .style("fill", function (t) {
              return u(t.data, t.parent);
            }),
            _.append("path")
              .attr("class", "hidden-arc")
              .attr("id", function (t) {
                return "hidden-arc-".concat(n.chartId, "-").concat(t.id);
              });
          var d = _.append("text").attr("class", "angular-label");
          d
            .append("textPath")
            .attr("class", "text-contour")
            .attr("startOffset", "50%")
            .attr("xlink:href", function (t) {
              return "#hidden-arc-".concat(n.chartId, "-").concat(t.id);
            }),
            d
              .append("textPath")
              .attr("class", "text-stroke")
              .attr("startOffset", "50%")
              .attr("xlink:href", function (t) {
                return "#hidden-arc-".concat(n.chartId, "-").concat(t.id);
              });
          var y = _.append("g").attr("class", "radial-label");
          y.append("text").attr("class", "text-contour"),
            y.append("text").attr("class", "text-stroke");
          var g = o.merge(_);
          g.style("opacity", 1).attr("class", function (n) {
            return ["slice"]
              .concat(
                t(
                  ""
                    .concat(c(n.data) || "")
                    .split(" ")
                    .map(function (t) {
                      return t.trim();
                    })
                )
              )
              .filter(function (t) {
                return t;
              })
              .join(" ");
          }),
            g
              .select("path.main-arc")
              .transition(l)
              .attrTween("d", function (t) {
                return function () {
                  return n.arc(t);
                };
              })
              .style("stroke", function (t) {
                return s(t.data, t.parent);
              })
              .style("fill", function (t) {
                return u(t.data, t.parent);
              });
          var v =
              n.showLabels &&
              ["angular", "auto"].includes(n.labelOrientation.toLowerCase()),
            m =
              n.showLabels &&
              ["radial", "auto"].includes(n.labelOrientation.toLowerCase());
          v &&
            g
              .select("path.hidden-arc")
              .transition(l)
              .attrTween("d", function (t) {
                return function () {
                  return x(t);
                };
              }),
            g.select("text.angular-label").select("textPath.text-contour"),
            g.select("text.angular-label").select("textPath.text-stroke"),
            g.select("g.radial-label").select("text.text-contour"),
            g.select("g.radial-label").select("text.text-stroke"),
            g
              .select(".angular-label")
              .transition(l)
              .styleTween("display", function (t) {
                return function () {
                  return v &&
                    ("auto" === n.labelOrientation ? "angular" === M(t) : w(t))
                    ? null
                    : "none";
                };
              }),
            g
              .select(".radial-label")
              .transition(l)
              .styleTween("display", function (t) {
                return function () {
                  return m &&
                    ("auto" === n.labelOrientation ? "radial" === M(t) : b(t))
                    ? null
                    : "none";
                };
              }),
            v &&
              g
                .selectAll("text.angular-label")
                .selectAll("textPath")
                .text(function (t) {
                  return a(t.data);
                }),
            m &&
              g
                .selectAll("g.radial-label")
                .selectAll("text")
                .text(function (t) {
                  return a(t.data);
                })
                .transition(l)
                .attrTween("transform", function (t) {
                  return function () {
                    return (function (t) {
                      var e =
                          (n.angleScale(t.x0) + n.angleScale(t.x1) - Math.PI) /
                          2,
                        r = Math.max(
                          0,
                          (n.radiusScale(t.y0) + n.radiusScale(t.y1)) / 2
                        ),
                        i = r * Math.cos(e),
                        o = r * Math.sin(e),
                        a = (180 * e) / Math.PI;
                      return (
                        e > Math.PI / 2 && e < (3 * Math.PI) / 2 && (a += 180),
                        "translate("
                          .concat(i, ", ")
                          .concat(o, ") rotate(")
                          .concat(a, ")")
                      );
                    })(t);
                  };
                });
        }
        function x(t) {
          var e = Math.PI / 2,
            r = [n.angleScale(t.x0) - e, n.angleScale(t.x1) - e],
            i = Math.max(0, (n.radiusScale(t.y0) + n.radiusScale(t.y1)) / 2);
          if (!(i && r[1] - r[0])) return "";
          var o = (r[1] + r[0]) / 2,
            a = o > 0 && o < Math.PI;
          a && r.reverse();
          var u = lo();
          return u.arc(0, 0, i, r[0], r[1], a), u.toString();
        }
        function w(t) {
          var e = n.angleScale(t.x1) - n.angleScale(t.x0),
            r =
              Math.max(0, (n.radiusScale(t.y0) + n.radiusScale(t.y1)) / 2) * e;
          return 7 * a(t.data).toString().length < r;
        }
        function b(t) {
          if (
            n.radiusScale(t.y0) * (n.angleScale(t.x1) - n.angleScale(t.x0)) <
            14
          )
            return !1;
          var e = n.radiusScale(t.y1) - n.radiusScale(t.y0);
          return 7 * a(t.data).toString().length < e;
        }
        function M(t) {
          var e = ((n.angleScale(t.x0) + n.angleScale(t.x1)) / 2) % Math.PI;
          return e > Math.PI / 4 && e < (3 * Math.PI) / 4
            ? b(t)
              ? "radial"
              : w(t)
              ? "angular"
              : null
            : w(t)
            ? "angular"
            : b(t)
            ? "radial"
            : null;
        }
      },
    });
  return mu;
});
