/* Start of /jquery.min.js */
/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */
!(function (e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document)
              throw new Error("jQuery requires a window with a document");
            return t(e);
          })
    : t(e);
})("undefined" != typeof window ? window : this, function (C, e) {
  "use strict";
  var t = [],
    r = Object.getPrototypeOf,
    s = t.slice,
    g = t.flat
      ? function (e) {
          return t.flat.call(e);
        }
      : function (e) {
          return t.concat.apply([], e);
        },
    u = t.push,
    i = t.indexOf,
    n = {},
    o = n.toString,
    v = n.hasOwnProperty,
    a = v.toString,
    l = a.call(Object),
    y = {},
    m = function (e) {
      return "function" == typeof e && "number" != typeof e.nodeType;
    },
    x = function (e) {
      return null != e && e === e.window;
    },
    E = C.document,
    c = { type: !0, src: !0, nonce: !0, noModule: !0 };
  function b(e, t, n) {
    var r,
      i,
      o = (n = n || E).createElement("script");
    if (((o.text = e), t))
      for (r in c)
        (i = t[r] || (t.getAttribute && t.getAttribute(r))) &&
          o.setAttribute(r, i);
    n.head.appendChild(o).parentNode.removeChild(o);
  }
  function w(e) {
    return null == e
      ? e + ""
      : "object" == typeof e || "function" == typeof e
      ? n[o.call(e)] || "object"
      : typeof e;
  }
  var f = "3.5.1",
    S = function (e, t) {
      return new S.fn.init(e, t);
    };
  function p(e) {
    var t = !!e && "length" in e && e.length,
      n = w(e);
    return (
      !m(e) &&
      !x(e) &&
      ("array" === n ||
        0 === t ||
        ("number" == typeof t && 0 < t && t - 1 in e))
    );
  }
  (S.fn = S.prototype =
    {
      jquery: f,
      constructor: S,
      length: 0,
      toArray: function () {
        return s.call(this);
      },
      get: function (e) {
        return null == e
          ? s.call(this)
          : e < 0
          ? this[e + this.length]
          : this[e];
      },
      pushStack: function (e) {
        var t = S.merge(this.constructor(), e);
        return (t.prevObject = this), t;
      },
      each: function (e) {
        return S.each(this, e);
      },
      map: function (n) {
        return this.pushStack(
          S.map(this, function (e, t) {
            return n.call(e, t, e);
          })
        );
      },
      slice: function () {
        return this.pushStack(s.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      even: function () {
        return this.pushStack(
          S.grep(this, function (e, t) {
            return (t + 1) % 2;
          })
        );
      },
      odd: function () {
        return this.pushStack(
          S.grep(this, function (e, t) {
            return t % 2;
          })
        );
      },
      eq: function (e) {
        var t = this.length,
          n = +e + (e < 0 ? t : 0);
        return this.pushStack(0 <= n && n < t ? [this[n]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor();
      },
      push: u,
      sort: t.sort,
      splice: t.splice,
    }),
    (S.extend = S.fn.extend =
      function () {
        var e,
          t,
          n,
          r,
          i,
          o,
          a = arguments[0] || {},
          s = 1,
          u = arguments.length,
          l = !1;
        for (
          "boolean" == typeof a && ((l = a), (a = arguments[s] || {}), s++),
            "object" == typeof a || m(a) || (a = {}),
            s === u && ((a = this), s--);
          s < u;
          s++
        )
          if (null != (e = arguments[s]))
            for (t in e)
              (r = e[t]),
                "__proto__" !== t &&
                  a !== r &&
                  (l && r && (S.isPlainObject(r) || (i = Array.isArray(r)))
                    ? ((n = a[t]),
                      (o =
                        i && !Array.isArray(n)
                          ? []
                          : i || S.isPlainObject(n)
                          ? n
                          : {}),
                      (i = !1),
                      (a[t] = S.extend(l, o, r)))
                    : void 0 !== r && (a[t] = r));
        return a;
      }),
    S.extend({
      expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isPlainObject: function (e) {
        var t, n;
        return (
          !(!e || "[object Object]" !== o.call(e)) &&
          (!(t = r(e)) ||
            ("function" ==
              typeof (n = v.call(t, "constructor") && t.constructor) &&
              a.call(n) === l))
        );
      },
      isEmptyObject: function (e) {
        var t;
        for (t in e) return !1;
        return !0;
      },
      globalEval: function (e, t, n) {
        b(e, { nonce: t && t.nonce }, n);
      },
      each: function (e, t) {
        var n,
          r = 0;
        if (p(e)) {
          for (n = e.length; r < n; r++)
            if (!1 === t.call(e[r], r, e[r])) break;
        } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
        return e;
      },
      makeArray: function (e, t) {
        var n = t || [];
        return (
          null != e &&
            (p(Object(e))
              ? S.merge(n, "string" == typeof e ? [e] : e)
              : u.call(n, e)),
          n
        );
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : i.call(t, e, n);
      },
      merge: function (e, t) {
        for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
        return (e.length = i), e;
      },
      grep: function (e, t, n) {
        for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
          !t(e[i], i) !== a && r.push(e[i]);
        return r;
      },
      map: function (e, t, n) {
        var r,
          i,
          o = 0,
          a = [];
        if (p(e))
          for (r = e.length; o < r; o++)
            null != (i = t(e[o], o, n)) && a.push(i);
        else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
        return g(a);
      },
      guid: 1,
      support: y,
    }),
    "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]),
    S.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
        " "
      ),
      function (e, t) {
        n["[object " + t + "]"] = t.toLowerCase();
      }
    );
  var d = (function (n) {
    var e,
      d,
      b,
      o,
      i,
      h,
      f,
      g,
      w,
      u,
      l,
      T,
      C,
      a,
      E,
      v,
      s,
      c,
      y,
      S = "sizzle" + 1 * new Date(),
      p = n.document,
      k = 0,
      r = 0,
      m = ue(),
      x = ue(),
      A = ue(),
      N = ue(),
      D = function (e, t) {
        return e === t && (l = !0), 0;
      },
      j = {}.hasOwnProperty,
      t = [],
      q = t.pop,
      L = t.push,
      H = t.push,
      O = t.slice,
      P = function (e, t) {
        for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
        return -1;
      },
      R =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      M = "[\\x20\\t\\r\\n\\f]",
      I =
        "(?:\\\\[\\da-fA-F]{1,6}" +
        M +
        "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
      W =
        "\\[" +
        M +
        "*(" +
        I +
        ")(?:" +
        M +
        "*([*^$|!~]?=)" +
        M +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        I +
        "))|)" +
        M +
        "*\\]",
      F =
        ":(" +
        I +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        W +
        ")*)|.*)\\)|)",
      B = new RegExp(M + "+", "g"),
      $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
      _ = new RegExp("^" + M + "*," + M + "*"),
      z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
      U = new RegExp(M + "|>"),
      X = new RegExp(F),
      V = new RegExp("^" + I + "$"),
      G = {
        ID: new RegExp("^#(" + I + ")"),
        CLASS: new RegExp("^\\.(" + I + ")"),
        TAG: new RegExp("^(" + I + "|[*])"),
        ATTR: new RegExp("^" + W),
        PSEUDO: new RegExp("^" + F),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            M +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            M +
            "*(?:([+-]|)" +
            M +
            "*(\\d+)|))" +
            M +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + R + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            M +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            M +
            "*((?:-\\d)?\\d*)" +
            M +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      Y = /HTML$/i,
      Q = /^(?:input|select|textarea|button)$/i,
      J = /^h\d$/i,
      K = /^[^{]+\{\s*\[native \w/,
      Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ee = /[+~]/,
      te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])", "g"),
      ne = function (e, t) {
        var n = "0x" + e.slice(1) - 65536;
        return (
          t ||
          (n < 0
            ? String.fromCharCode(n + 65536)
            : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
        );
      },
      re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      ie = function (e, t) {
        return t
          ? "\0" === e
            ? "\ufffd"
            : e.slice(0, -1) +
              "\\" +
              e.charCodeAt(e.length - 1).toString(16) +
              " "
          : "\\" + e;
      },
      oe = function () {
        T();
      },
      ae = be(
        function (e) {
          return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase();
        },
        { dir: "parentNode", next: "legend" }
      );
    try {
      H.apply((t = O.call(p.childNodes)), p.childNodes),
        t[p.childNodes.length].nodeType;
    } catch (e) {
      H = {
        apply: t.length
          ? function (e, t) {
              L.apply(e, O.call(t));
            }
          : function (e, t) {
              var n = e.length,
                r = 0;
              while ((e[n++] = t[r++]));
              e.length = n - 1;
            },
      };
    }
    function se(t, e, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f = e && e.ownerDocument,
        p = e ? e.nodeType : 9;
      if (
        ((n = n || []),
        "string" != typeof t || !t || (1 !== p && 9 !== p && 11 !== p))
      )
        return n;
      if (!r && (T(e), (e = e || C), E)) {
        if (11 !== p && (u = Z.exec(t)))
          if ((i = u[1])) {
            if (9 === p) {
              if (!(a = e.getElementById(i))) return n;
              if (a.id === i) return n.push(a), n;
            } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i)
              return n.push(a), n;
          } else {
            if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
            if (
              (i = u[3]) &&
              d.getElementsByClassName &&
              e.getElementsByClassName
            )
              return H.apply(n, e.getElementsByClassName(i)), n;
          }
        if (
          d.qsa &&
          !N[t + " "] &&
          (!v || !v.test(t)) &&
          (1 !== p || "object" !== e.nodeName.toLowerCase())
        ) {
          if (((c = t), (f = e), 1 === p && (U.test(t) || z.test(t)))) {
            ((f = (ee.test(t) && ye(e.parentNode)) || e) === e && d.scope) ||
              ((s = e.getAttribute("id"))
                ? (s = s.replace(re, ie))
                : e.setAttribute("id", (s = S))),
              (o = (l = h(t)).length);
            while (o--) l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
            c = l.join(",");
          }
          try {
            return H.apply(n, f.querySelectorAll(c)), n;
          } catch (e) {
            N(t, !0);
          } finally {
            s === S && e.removeAttribute("id");
          }
        }
      }
      return g(t.replace($, "$1"), e, n, r);
    }
    function ue() {
      var r = [];
      return function e(t, n) {
        return (
          r.push(t + " ") > b.cacheLength && delete e[r.shift()],
          (e[t + " "] = n)
        );
      };
    }
    function le(e) {
      return (e[S] = !0), e;
    }
    function ce(e) {
      var t = C.createElement("fieldset");
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function fe(e, t) {
      var n = e.split("|"),
        r = n.length;
      while (r--) b.attrHandle[n[r]] = t;
    }
    function pe(e, t) {
      var n = t && e,
        r =
          n &&
          1 === e.nodeType &&
          1 === t.nodeType &&
          e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n) while ((n = n.nextSibling)) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function de(t) {
      return function (e) {
        return "input" === e.nodeName.toLowerCase() && e.type === t;
      };
    }
    function he(n) {
      return function (e) {
        var t = e.nodeName.toLowerCase();
        return ("input" === t || "button" === t) && e.type === n;
      };
    }
    function ge(t) {
      return function (e) {
        return "form" in e
          ? e.parentNode && !1 === e.disabled
            ? "label" in e
              ? "label" in e.parentNode
                ? e.parentNode.disabled === t
                : e.disabled === t
              : e.isDisabled === t || (e.isDisabled !== !t && ae(e) === t)
            : e.disabled === t
          : "label" in e && e.disabled === t;
      };
    }
    function ve(a) {
      return le(function (o) {
        return (
          (o = +o),
          le(function (e, t) {
            var n,
              r = a([], e.length, o),
              i = r.length;
            while (i--) e[(n = r[i])] && (e[n] = !(t[n] = e[n]));
          })
        );
      });
    }
    function ye(e) {
      return e && "undefined" != typeof e.getElementsByTagName && e;
    }
    for (e in ((d = se.support = {}),
    (i = se.isXML =
      function (e) {
        var t = e.namespaceURI,
          n = (e.ownerDocument || e).documentElement;
        return !Y.test(t || (n && n.nodeName) || "HTML");
      }),
    (T = se.setDocument =
      function (e) {
        var t,
          n,
          r = e ? e.ownerDocument || e : p;
        return (
          r != C &&
            9 === r.nodeType &&
            r.documentElement &&
            ((a = (C = r).documentElement),
            (E = !i(C)),
            p != C &&
              (n = C.defaultView) &&
              n.top !== n &&
              (n.addEventListener
                ? n.addEventListener("unload", oe, !1)
                : n.attachEvent && n.attachEvent("onunload", oe)),
            (d.scope = ce(function (e) {
              return (
                a.appendChild(e).appendChild(C.createElement("div")),
                "undefined" != typeof e.querySelectorAll &&
                  !e.querySelectorAll(":scope fieldset div").length
              );
            })),
            (d.attributes = ce(function (e) {
              return (e.className = "i"), !e.getAttribute("className");
            })),
            (d.getElementsByTagName = ce(function (e) {
              return (
                e.appendChild(C.createComment("")),
                !e.getElementsByTagName("*").length
              );
            })),
            (d.getElementsByClassName = K.test(C.getElementsByClassName)),
            (d.getById = ce(function (e) {
              return (
                (a.appendChild(e).id = S),
                !C.getElementsByName || !C.getElementsByName(S).length
              );
            })),
            d.getById
              ? ((b.filter.ID = function (e) {
                  var t = e.replace(te, ne);
                  return function (e) {
                    return e.getAttribute("id") === t;
                  };
                }),
                (b.find.ID = function (e, t) {
                  if ("undefined" != typeof t.getElementById && E) {
                    var n = t.getElementById(e);
                    return n ? [n] : [];
                  }
                }))
              : ((b.filter.ID = function (e) {
                  var n = e.replace(te, ne);
                  return function (e) {
                    var t =
                      "undefined" != typeof e.getAttributeNode &&
                      e.getAttributeNode("id");
                    return t && t.value === n;
                  };
                }),
                (b.find.ID = function (e, t) {
                  if ("undefined" != typeof t.getElementById && E) {
                    var n,
                      r,
                      i,
                      o = t.getElementById(e);
                    if (o) {
                      if ((n = o.getAttributeNode("id")) && n.value === e)
                        return [o];
                      (i = t.getElementsByName(e)), (r = 0);
                      while ((o = i[r++]))
                        if ((n = o.getAttributeNode("id")) && n.value === e)
                          return [o];
                    }
                    return [];
                  }
                })),
            (b.find.TAG = d.getElementsByTagName
              ? function (e, t) {
                  return "undefined" != typeof t.getElementsByTagName
                    ? t.getElementsByTagName(e)
                    : d.qsa
                    ? t.querySelectorAll(e)
                    : void 0;
                }
              : function (e, t) {
                  var n,
                    r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                  if ("*" === e) {
                    while ((n = o[i++])) 1 === n.nodeType && r.push(n);
                    return r;
                  }
                  return o;
                }),
            (b.find.CLASS =
              d.getElementsByClassName &&
              function (e, t) {
                if ("undefined" != typeof t.getElementsByClassName && E)
                  return t.getElementsByClassName(e);
              }),
            (s = []),
            (v = []),
            (d.qsa = K.test(C.querySelectorAll)) &&
              (ce(function (e) {
                var t;
                (a.appendChild(e).innerHTML =
                  "<a id='" +
                  S +
                  "'></a><select id='" +
                  S +
                  "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  e.querySelectorAll("[msallowcapture^='']").length &&
                    v.push("[*^$]=" + M + "*(?:''|\"\")"),
                  e.querySelectorAll("[selected]").length ||
                    v.push("\\[" + M + "*(?:value|" + R + ")"),
                  e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="),
                  (t = C.createElement("input")).setAttribute("name", ""),
                  e.appendChild(t),
                  e.querySelectorAll("[name='']").length ||
                    v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"),
                  e.querySelectorAll(":checked").length || v.push(":checked"),
                  e.querySelectorAll("a#" + S + "+*").length ||
                    v.push(".#.+[+~]"),
                  e.querySelectorAll("\\\f"),
                  v.push("[\\r\\n\\f]");
              }),
              ce(function (e) {
                e.innerHTML =
                  "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = C.createElement("input");
                t.setAttribute("type", "hidden"),
                  e.appendChild(t).setAttribute("name", "D"),
                  e.querySelectorAll("[name=d]").length &&
                    v.push("name" + M + "*[*^$|!~]?="),
                  2 !== e.querySelectorAll(":enabled").length &&
                    v.push(":enabled", ":disabled"),
                  (a.appendChild(e).disabled = !0),
                  2 !== e.querySelectorAll(":disabled").length &&
                    v.push(":enabled", ":disabled"),
                  e.querySelectorAll("*,:x"),
                  v.push(",.*:");
              })),
            (d.matchesSelector = K.test(
              (c =
                a.matches ||
                a.webkitMatchesSelector ||
                a.mozMatchesSelector ||
                a.oMatchesSelector ||
                a.msMatchesSelector)
            )) &&
              ce(function (e) {
                (d.disconnectedMatch = c.call(e, "*")),
                  c.call(e, "[s!='']:x"),
                  s.push("!=", F);
              }),
            (v = v.length && new RegExp(v.join("|"))),
            (s = s.length && new RegExp(s.join("|"))),
            (t = K.test(a.compareDocumentPosition)),
            (y =
              t || K.test(a.contains)
                ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                      r = t && t.parentNode;
                    return (
                      e === r ||
                      !(
                        !r ||
                        1 !== r.nodeType ||
                        !(n.contains
                          ? n.contains(r)
                          : e.compareDocumentPosition &&
                            16 & e.compareDocumentPosition(r))
                      )
                    );
                  }
                : function (e, t) {
                    if (t) while ((t = t.parentNode)) if (t === e) return !0;
                    return !1;
                  }),
            (D = t
              ? function (e, t) {
                  if (e === t) return (l = !0), 0;
                  var n =
                    !e.compareDocumentPosition - !t.compareDocumentPosition;
                  return (
                    n ||
                    (1 &
                      (n =
                        (e.ownerDocument || e) == (t.ownerDocument || t)
                          ? e.compareDocumentPosition(t)
                          : 1) ||
                    (!d.sortDetached && t.compareDocumentPosition(e) === n)
                      ? e == C || (e.ownerDocument == p && y(p, e))
                        ? -1
                        : t == C || (t.ownerDocument == p && y(p, t))
                        ? 1
                        : u
                        ? P(u, e) - P(u, t)
                        : 0
                      : 4 & n
                      ? -1
                      : 1)
                  );
                }
              : function (e, t) {
                  if (e === t) return (l = !0), 0;
                  var n,
                    r = 0,
                    i = e.parentNode,
                    o = t.parentNode,
                    a = [e],
                    s = [t];
                  if (!i || !o)
                    return e == C
                      ? -1
                      : t == C
                      ? 1
                      : i
                      ? -1
                      : o
                      ? 1
                      : u
                      ? P(u, e) - P(u, t)
                      : 0;
                  if (i === o) return pe(e, t);
                  n = e;
                  while ((n = n.parentNode)) a.unshift(n);
                  n = t;
                  while ((n = n.parentNode)) s.unshift(n);
                  while (a[r] === s[r]) r++;
                  return r
                    ? pe(a[r], s[r])
                    : a[r] == p
                    ? -1
                    : s[r] == p
                    ? 1
                    : 0;
                })),
          C
        );
      }),
    (se.matches = function (e, t) {
      return se(e, null, null, t);
    }),
    (se.matchesSelector = function (e, t) {
      if (
        (T(e),
        d.matchesSelector &&
          E &&
          !N[t + " "] &&
          (!s || !s.test(t)) &&
          (!v || !v.test(t)))
      )
        try {
          var n = c.call(e, t);
          if (
            n ||
            d.disconnectedMatch ||
            (e.document && 11 !== e.document.nodeType)
          )
            return n;
        } catch (e) {
          N(t, !0);
        }
      return 0 < se(t, C, null, [e]).length;
    }),
    (se.contains = function (e, t) {
      return (e.ownerDocument || e) != C && T(e), y(e, t);
    }),
    (se.attr = function (e, t) {
      (e.ownerDocument || e) != C && T(e);
      var n = b.attrHandle[t.toLowerCase()],
        r = n && j.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
      return void 0 !== r
        ? r
        : d.attributes || !E
        ? e.getAttribute(t)
        : (r = e.getAttributeNode(t)) && r.specified
        ? r.value
        : null;
    }),
    (se.escape = function (e) {
      return (e + "").replace(re, ie);
    }),
    (se.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }),
    (se.uniqueSort = function (e) {
      var t,
        n = [],
        r = 0,
        i = 0;
      if (
        ((l = !d.detectDuplicates),
        (u = !d.sortStable && e.slice(0)),
        e.sort(D),
        l)
      ) {
        while ((t = e[i++])) t === e[i] && (r = n.push(i));
        while (r--) e.splice(n[r], 1);
      }
      return (u = null), e;
    }),
    (o = se.getText =
      function (e) {
        var t,
          n = "",
          r = 0,
          i = e.nodeType;
        if (i) {
          if (1 === i || 9 === i || 11 === i) {
            if ("string" == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) n += o(e);
          } else if (3 === i || 4 === i) return e.nodeValue;
        } else while ((t = e[r++])) n += o(t);
        return n;
      }),
    ((b = se.selectors =
      {
        cacheLength: 50,
        createPseudo: le,
        match: G,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: !0 },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: !0 },
          "~": { dir: "previousSibling" },
        },
        preFilter: {
          ATTR: function (e) {
            return (
              (e[1] = e[1].replace(te, ne)),
              (e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne)),
              "~=" === e[2] && (e[3] = " " + e[3] + " "),
              e.slice(0, 4)
            );
          },
          CHILD: function (e) {
            return (
              (e[1] = e[1].toLowerCase()),
              "nth" === e[1].slice(0, 3)
                ? (e[3] || se.error(e[0]),
                  (e[4] = +(e[4]
                    ? e[5] + (e[6] || 1)
                    : 2 * ("even" === e[3] || "odd" === e[3]))),
                  (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                : e[3] && se.error(e[0]),
              e
            );
          },
          PSEUDO: function (e) {
            var t,
              n = !e[6] && e[2];
            return G.CHILD.test(e[0])
              ? null
              : (e[3]
                  ? (e[2] = e[4] || e[5] || "")
                  : n &&
                    X.test(n) &&
                    (t = h(n, !0)) &&
                    (t = n.indexOf(")", n.length - t) - n.length) &&
                    ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                e.slice(0, 3));
          },
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(te, ne).toLowerCase();
            return "*" === e
              ? function () {
                  return !0;
                }
              : function (e) {
                  return e.nodeName && e.nodeName.toLowerCase() === t;
                };
          },
          CLASS: function (e) {
            var t = m[e + " "];
            return (
              t ||
              ((t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) &&
                m(e, function (e) {
                  return t.test(
                    ("string" == typeof e.className && e.className) ||
                      ("undefined" != typeof e.getAttribute &&
                        e.getAttribute("class")) ||
                      ""
                  );
                }))
            );
          },
          ATTR: function (n, r, i) {
            return function (e) {
              var t = se.attr(e, n);
              return null == t
                ? "!=" === r
                : !r ||
                    ((t += ""),
                    "=" === r
                      ? t === i
                      : "!=" === r
                      ? t !== i
                      : "^=" === r
                      ? i && 0 === t.indexOf(i)
                      : "*=" === r
                      ? i && -1 < t.indexOf(i)
                      : "$=" === r
                      ? i && t.slice(-i.length) === i
                      : "~=" === r
                      ? -1 < (" " + t.replace(B, " ") + " ").indexOf(i)
                      : "|=" === r &&
                        (t === i || t.slice(0, i.length + 1) === i + "-"));
            };
          },
          CHILD: function (h, e, t, g, v) {
            var y = "nth" !== h.slice(0, 3),
              m = "last" !== h.slice(-4),
              x = "of-type" === e;
            return 1 === g && 0 === v
              ? function (e) {
                  return !!e.parentNode;
                }
              : function (e, t, n) {
                  var r,
                    i,
                    o,
                    a,
                    s,
                    u,
                    l = y !== m ? "nextSibling" : "previousSibling",
                    c = e.parentNode,
                    f = x && e.nodeName.toLowerCase(),
                    p = !n && !x,
                    d = !1;
                  if (c) {
                    if (y) {
                      while (l) {
                        a = e;
                        while ((a = a[l]))
                          if (
                            x
                              ? a.nodeName.toLowerCase() === f
                              : 1 === a.nodeType
                          )
                            return !1;
                        u = l = "only" === h && !u && "nextSibling";
                      }
                      return !0;
                    }
                    if (((u = [m ? c.firstChild : c.lastChild]), m && p)) {
                      (d =
                        (s =
                          (r =
                            (i =
                              (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] || [])[0] === k &&
                          r[1]) && r[2]),
                        (a = s && c.childNodes[s]);
                      while ((a = (++s && a && a[l]) || (d = s = 0) || u.pop()))
                        if (1 === a.nodeType && ++d && a === e) {
                          i[h] = [k, s, d];
                          break;
                        }
                    } else if (
                      (p &&
                        (d = s =
                          (r =
                            (i =
                              (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]),
                      !1 === d)
                    )
                      while ((a = (++s && a && a[l]) || (d = s = 0) || u.pop()))
                        if (
                          (x
                            ? a.nodeName.toLowerCase() === f
                            : 1 === a.nodeType) &&
                          ++d &&
                          (p &&
                            ((i =
                              (o = a[S] || (a[S] = {}))[a.uniqueID] ||
                              (o[a.uniqueID] = {}))[h] = [k, d]),
                          a === e)
                        )
                          break;
                    return (d -= v) === g || (d % g == 0 && 0 <= d / g);
                  }
                };
          },
          PSEUDO: function (e, o) {
            var t,
              a =
                b.pseudos[e] ||
                b.setFilters[e.toLowerCase()] ||
                se.error("unsupported pseudo: " + e);
            return a[S]
              ? a(o)
              : 1 < a.length
              ? ((t = [e, e, "", o]),
                b.setFilters.hasOwnProperty(e.toLowerCase())
                  ? le(function (e, t) {
                      var n,
                        r = a(e, o),
                        i = r.length;
                      while (i--) e[(n = P(e, r[i]))] = !(t[n] = r[i]);
                    })
                  : function (e) {
                      return a(e, 0, t);
                    })
              : a;
          },
        },
        pseudos: {
          not: le(function (e) {
            var r = [],
              i = [],
              s = f(e.replace($, "$1"));
            return s[S]
              ? le(function (e, t, n, r) {
                  var i,
                    o = s(e, null, r, []),
                    a = e.length;
                  while (a--) (i = o[a]) && (e[a] = !(t[a] = i));
                })
              : function (e, t, n) {
                  return (r[0] = e), s(r, null, n, i), (r[0] = null), !i.pop();
                };
          }),
          has: le(function (t) {
            return function (e) {
              return 0 < se(t, e).length;
            };
          }),
          contains: le(function (t) {
            return (
              (t = t.replace(te, ne)),
              function (e) {
                return -1 < (e.textContent || o(e)).indexOf(t);
              }
            );
          }),
          lang: le(function (n) {
            return (
              V.test(n || "") || se.error("unsupported lang: " + n),
              (n = n.replace(te, ne).toLowerCase()),
              function (e) {
                var t;
                do {
                  if (
                    (t = E
                      ? e.lang
                      : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                  )
                    return (
                      (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                    );
                } while ((e = e.parentNode) && 1 === e.nodeType);
                return !1;
              }
            );
          }),
          target: function (e) {
            var t = n.location && n.location.hash;
            return t && t.slice(1) === e.id;
          },
          root: function (e) {
            return e === a;
          },
          focus: function (e) {
            return (
              e === C.activeElement &&
              (!C.hasFocus || C.hasFocus()) &&
              !!(e.type || e.href || ~e.tabIndex)
            );
          },
          enabled: ge(!1),
          disabled: ge(!0),
          checked: function (e) {
            var t = e.nodeName.toLowerCase();
            return (
              ("input" === t && !!e.checked) || ("option" === t && !!e.selected)
            );
          },
          selected: function (e) {
            return (
              e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
            );
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0;
          },
          parent: function (e) {
            return !b.pseudos.empty(e);
          },
          header: function (e) {
            return J.test(e.nodeName);
          },
          input: function (e) {
            return Q.test(e.nodeName);
          },
          button: function (e) {
            var t = e.nodeName.toLowerCase();
            return ("input" === t && "button" === e.type) || "button" === t;
          },
          text: function (e) {
            var t;
            return (
              "input" === e.nodeName.toLowerCase() &&
              "text" === e.type &&
              (null == (t = e.getAttribute("type")) ||
                "text" === t.toLowerCase())
            );
          },
          first: ve(function () {
            return [0];
          }),
          last: ve(function (e, t) {
            return [t - 1];
          }),
          eq: ve(function (e, t, n) {
            return [n < 0 ? n + t : n];
          }),
          even: ve(function (e, t) {
            for (var n = 0; n < t; n += 2) e.push(n);
            return e;
          }),
          odd: ve(function (e, t) {
            for (var n = 1; n < t; n += 2) e.push(n);
            return e;
          }),
          lt: ve(function (e, t, n) {
            for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; ) e.push(r);
            return e;
          }),
          gt: ve(function (e, t, n) {
            for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r);
            return e;
          }),
        },
      }).pseudos.nth = b.pseudos.eq),
    { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
      b.pseudos[e] = de(e);
    for (e in { submit: !0, reset: !0 }) b.pseudos[e] = he(e);
    function me() {}
    function xe(e) {
      for (var t = 0, n = e.length, r = ""; t < n; t++) r += e[t].value;
      return r;
    }
    function be(s, e, t) {
      var u = e.dir,
        l = e.next,
        c = l || u,
        f = t && "parentNode" === c,
        p = r++;
      return e.first
        ? function (e, t, n) {
            while ((e = e[u])) if (1 === e.nodeType || f) return s(e, t, n);
            return !1;
          }
        : function (e, t, n) {
            var r,
              i,
              o,
              a = [k, p];
            if (n) {
              while ((e = e[u]))
                if ((1 === e.nodeType || f) && s(e, t, n)) return !0;
            } else
              while ((e = e[u]))
                if (1 === e.nodeType || f)
                  if (
                    ((i =
                      (o = e[S] || (e[S] = {}))[e.uniqueID] ||
                      (o[e.uniqueID] = {})),
                    l && l === e.nodeName.toLowerCase())
                  )
                    e = e[u] || e;
                  else {
                    if ((r = i[c]) && r[0] === k && r[1] === p)
                      return (a[2] = r[2]);
                    if (((i[c] = a)[2] = s(e, t, n))) return !0;
                  }
            return !1;
          };
    }
    function we(i) {
      return 1 < i.length
        ? function (e, t, n) {
            var r = i.length;
            while (r--) if (!i[r](e, t, n)) return !1;
            return !0;
          }
        : i[0];
    }
    function Te(e, t, n, r, i) {
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
        (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
      return a;
    }
    function Ce(d, h, g, v, y, e) {
      return (
        v && !v[S] && (v = Ce(v)),
        y && !y[S] && (y = Ce(y, e)),
        le(function (e, t, n, r) {
          var i,
            o,
            a,
            s = [],
            u = [],
            l = t.length,
            c =
              e ||
              (function (e, t, n) {
                for (var r = 0, i = t.length; r < i; r++) se(e, t[r], n);
                return n;
              })(h || "*", n.nodeType ? [n] : n, []),
            f = !d || (!e && h) ? c : Te(c, s, d, n, r),
            p = g ? (y || (e ? d : l || v) ? [] : t) : f;
          if ((g && g(f, p, n, r), v)) {
            (i = Te(p, u)), v(i, [], n, r), (o = i.length);
            while (o--) (a = i[o]) && (p[u[o]] = !(f[u[o]] = a));
          }
          if (e) {
            if (y || d) {
              if (y) {
                (i = []), (o = p.length);
                while (o--) (a = p[o]) && i.push((f[o] = a));
                y(null, (p = []), i, r);
              }
              o = p.length;
              while (o--)
                (a = p[o]) &&
                  -1 < (i = y ? P(e, a) : s[o]) &&
                  (e[i] = !(t[i] = a));
            }
          } else (p = Te(p === t ? p.splice(l, p.length) : p)), y ? y(null, t, p, r) : H.apply(t, p);
        })
      );
    }
    function Ee(e) {
      for (
        var i,
          t,
          n,
          r = e.length,
          o = b.relative[e[0].type],
          a = o || b.relative[" "],
          s = o ? 1 : 0,
          u = be(
            function (e) {
              return e === i;
            },
            a,
            !0
          ),
          l = be(
            function (e) {
              return -1 < P(i, e);
            },
            a,
            !0
          ),
          c = [
            function (e, t, n) {
              var r =
                (!o && (n || t !== w)) ||
                ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
              return (i = null), r;
            },
          ];
        s < r;
        s++
      )
        if ((t = b.relative[e[s].type])) c = [be(we(c), t)];
        else {
          if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
            for (n = ++s; n < r; n++) if (b.relative[e[n].type]) break;
            return Ce(
              1 < s && we(c),
              1 < s &&
                xe(
                  e
                    .slice(0, s - 1)
                    .concat({ value: " " === e[s - 2].type ? "*" : "" })
                ).replace($, "$1"),
              t,
              s < n && Ee(e.slice(s, n)),
              n < r && Ee((e = e.slice(n))),
              n < r && xe(e)
            );
          }
          c.push(t);
        }
      return we(c);
    }
    return (
      (me.prototype = b.filters = b.pseudos),
      (b.setFilters = new me()),
      (h = se.tokenize =
        function (e, t) {
          var n,
            r,
            i,
            o,
            a,
            s,
            u,
            l = x[e + " "];
          if (l) return t ? 0 : l.slice(0);
          (a = e), (s = []), (u = b.preFilter);
          while (a) {
            for (o in ((n && !(r = _.exec(a))) ||
              (r && (a = a.slice(r[0].length) || a), s.push((i = []))),
            (n = !1),
            (r = z.exec(a)) &&
              ((n = r.shift()),
              i.push({ value: n, type: r[0].replace($, " ") }),
              (a = a.slice(n.length))),
            b.filter))
              !(r = G[o].exec(a)) ||
                (u[o] && !(r = u[o](r))) ||
                ((n = r.shift()),
                i.push({ value: n, type: o, matches: r }),
                (a = a.slice(n.length)));
            if (!n) break;
          }
          return t ? a.length : a ? se.error(e) : x(e, s).slice(0);
        }),
      (f = se.compile =
        function (e, t) {
          var n,
            v,
            y,
            m,
            x,
            r,
            i = [],
            o = [],
            a = A[e + " "];
          if (!a) {
            t || (t = h(e)), (n = t.length);
            while (n--) (a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
            (a = A(
              e,
              ((v = o),
              (m = 0 < (y = i).length),
              (x = 0 < v.length),
              (r = function (e, t, n, r, i) {
                var o,
                  a,
                  s,
                  u = 0,
                  l = "0",
                  c = e && [],
                  f = [],
                  p = w,
                  d = e || (x && b.find.TAG("*", i)),
                  h = (k += null == p ? 1 : Math.random() || 0.1),
                  g = d.length;
                for (
                  i && (w = t == C || t || i);
                  l !== g && null != (o = d[l]);
                  l++
                ) {
                  if (x && o) {
                    (a = 0), t || o.ownerDocument == C || (T(o), (n = !E));
                    while ((s = v[a++]))
                      if (s(o, t || C, n)) {
                        r.push(o);
                        break;
                      }
                    i && (k = h);
                  }
                  m && ((o = !s && o) && u--, e && c.push(o));
                }
                if (((u += l), m && l !== u)) {
                  a = 0;
                  while ((s = y[a++])) s(c, f, t, n);
                  if (e) {
                    if (0 < u) while (l--) c[l] || f[l] || (f[l] = q.call(r));
                    f = Te(f);
                  }
                  H.apply(r, f),
                    i &&
                      !e &&
                      0 < f.length &&
                      1 < u + y.length &&
                      se.uniqueSort(r);
                }
                return i && ((k = h), (w = p)), c;
              }),
              m ? le(r) : r)
            )).selector = e;
          }
          return a;
        }),
      (g = se.select =
        function (e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = "function" == typeof e && e,
            c = !r && h((e = l.selector || e));
          if (((n = n || []), 1 === c.length)) {
            if (
              2 < (o = c[0] = c[0].slice(0)).length &&
              "ID" === (a = o[0]).type &&
              9 === t.nodeType &&
              E &&
              b.relative[o[1].type]
            ) {
              if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0]))
                return n;
              l && (t = t.parentNode), (e = e.slice(o.shift().value.length));
            }
            i = G.needsContext.test(e) ? 0 : o.length;
            while (i--) {
              if (((a = o[i]), b.relative[(s = a.type)])) break;
              if (
                (u = b.find[s]) &&
                (r = u(
                  a.matches[0].replace(te, ne),
                  (ee.test(o[0].type) && ye(t.parentNode)) || t
                ))
              ) {
                if ((o.splice(i, 1), !(e = r.length && xe(o))))
                  return H.apply(n, r), n;
                break;
              }
            }
          }
          return (
            (l || f(e, c))(
              r,
              t,
              !E,
              n,
              !t || (ee.test(e) && ye(t.parentNode)) || t
            ),
            n
          );
        }),
      (d.sortStable = S.split("").sort(D).join("") === S),
      (d.detectDuplicates = !!l),
      T(),
      (d.sortDetached = ce(function (e) {
        return 1 & e.compareDocumentPosition(C.createElement("fieldset"));
      })),
      ce(function (e) {
        return (
          (e.innerHTML = "<a href='#'></a>"),
          "#" === e.firstChild.getAttribute("href")
        );
      }) ||
        fe("type|href|height|width", function (e, t, n) {
          if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }),
      (d.attributes &&
        ce(function (e) {
          return (
            (e.innerHTML = "<input/>"),
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
          );
        })) ||
        fe("value", function (e, t, n) {
          if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }),
      ce(function (e) {
        return null == e.getAttribute("disabled");
      }) ||
        fe(R, function (e, t, n) {
          var r;
          if (!n)
            return !0 === e[t]
              ? t.toLowerCase()
              : (r = e.getAttributeNode(t)) && r.specified
              ? r.value
              : null;
        }),
      se
    );
  })(C);
  (S.find = d),
    (S.expr = d.selectors),
    (S.expr[":"] = S.expr.pseudos),
    (S.uniqueSort = S.unique = d.uniqueSort),
    (S.text = d.getText),
    (S.isXMLDoc = d.isXML),
    (S.contains = d.contains),
    (S.escapeSelector = d.escape);
  var h = function (e, t, n) {
      var r = [],
        i = void 0 !== n;
      while ((e = e[t]) && 9 !== e.nodeType)
        if (1 === e.nodeType) {
          if (i && S(e).is(n)) break;
          r.push(e);
        }
      return r;
    },
    T = function (e, t) {
      for (var n = []; e; e = e.nextSibling)
        1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    k = S.expr.match.needsContext;
  function A(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function D(e, n, r) {
    return m(n)
      ? S.grep(e, function (e, t) {
          return !!n.call(e, t, e) !== r;
        })
      : n.nodeType
      ? S.grep(e, function (e) {
          return (e === n) !== r;
        })
      : "string" != typeof n
      ? S.grep(e, function (e) {
          return -1 < i.call(n, e) !== r;
        })
      : S.filter(n, e, r);
  }
  (S.filter = function (e, t, n) {
    var r = t[0];
    return (
      n && (e = ":not(" + e + ")"),
      1 === t.length && 1 === r.nodeType
        ? S.find.matchesSelector(r, e)
          ? [r]
          : []
        : S.find.matches(
            e,
            S.grep(t, function (e) {
              return 1 === e.nodeType;
            })
          )
    );
  }),
    S.fn.extend({
      find: function (e) {
        var t,
          n,
          r = this.length,
          i = this;
        if ("string" != typeof e)
          return this.pushStack(
            S(e).filter(function () {
              for (t = 0; t < r; t++) if (S.contains(i[t], this)) return !0;
            })
          );
        for (n = this.pushStack([]), t = 0; t < r; t++) S.find(e, i[t], n);
        return 1 < r ? S.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(D(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(D(this, e || [], !0));
      },
      is: function (e) {
        return !!D(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1)
          .length;
      },
    });
  var j,
    q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((S.fn.init = function (e, t, n) {
    var r, i;
    if (!e) return this;
    if (((n = n || j), "string" == typeof e)) {
      if (
        !(r =
          "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length
            ? [null, e, null]
            : q.exec(e)) ||
        (!r[1] && t)
      )
        return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (r[1]) {
        if (
          ((t = t instanceof S ? t[0] : t),
          S.merge(
            this,
            S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)
          ),
          N.test(r[1]) && S.isPlainObject(t))
        )
          for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        return this;
      }
      return (
        (i = E.getElementById(r[2])) && ((this[0] = i), (this.length = 1)), this
      );
    }
    return e.nodeType
      ? ((this[0] = e), (this.length = 1), this)
      : m(e)
      ? void 0 !== n.ready
        ? n.ready(e)
        : e(S)
      : S.makeArray(e, this);
  }).prototype = S.fn),
    (j = S(E));
  var L = /^(?:parents|prev(?:Until|All))/,
    H = { children: !0, contents: !0, next: !0, prev: !0 };
  function O(e, t) {
    while ((e = e[t]) && 1 !== e.nodeType);
    return e;
  }
  S.fn.extend({
    has: function (e) {
      var t = S(e, this),
        n = t.length;
      return this.filter(function () {
        for (var e = 0; e < n; e++) if (S.contains(this, t[e])) return !0;
      });
    },
    closest: function (e, t) {
      var n,
        r = 0,
        i = this.length,
        o = [],
        a = "string" != typeof e && S(e);
      if (!k.test(e))
        for (; r < i; r++)
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (
              n.nodeType < 11 &&
              (a
                ? -1 < a.index(n)
                : 1 === n.nodeType && S.find.matchesSelector(n, e))
            ) {
              o.push(n);
              break;
            }
      return this.pushStack(1 < o.length ? S.uniqueSort(o) : o);
    },
    index: function (e) {
      return e
        ? "string" == typeof e
          ? i.call(S(e), this[0])
          : i.call(this, e.jquery ? e[0] : e)
        : this[0] && this[0].parentNode
        ? this.first().prevAll().length
        : -1;
    },
    add: function (e, t) {
      return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))));
    },
    addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    },
  }),
    S.each(
      {
        parent: function (e) {
          var t = e.parentNode;
          return t && 11 !== t.nodeType ? t : null;
        },
        parents: function (e) {
          return h(e, "parentNode");
        },
        parentsUntil: function (e, t, n) {
          return h(e, "parentNode", n);
        },
        next: function (e) {
          return O(e, "nextSibling");
        },
        prev: function (e) {
          return O(e, "previousSibling");
        },
        nextAll: function (e) {
          return h(e, "nextSibling");
        },
        prevAll: function (e) {
          return h(e, "previousSibling");
        },
        nextUntil: function (e, t, n) {
          return h(e, "nextSibling", n);
        },
        prevUntil: function (e, t, n) {
          return h(e, "previousSibling", n);
        },
        siblings: function (e) {
          return T((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return T(e.firstChild);
        },
        contents: function (e) {
          return null != e.contentDocument && r(e.contentDocument)
            ? e.contentDocument
            : (A(e, "template") && (e = e.content || e),
              S.merge([], e.childNodes));
        },
      },
      function (r, i) {
        S.fn[r] = function (e, t) {
          var n = S.map(this, i, e);
          return (
            "Until" !== r.slice(-5) && (t = e),
            t && "string" == typeof t && (n = S.filter(t, n)),
            1 < this.length &&
              (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()),
            this.pushStack(n)
          );
        };
      }
    );
  var P = /[^\x20\t\r\n\f]+/g;
  function R(e) {
    return e;
  }
  function M(e) {
    throw e;
  }
  function I(e, t, n, r) {
    var i;
    try {
      e && m((i = e.promise))
        ? i.call(e).done(t).fail(n)
        : e && m((i = e.then))
        ? i.call(e, t, n)
        : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  (S.Callbacks = function (r) {
    var e, n;
    r =
      "string" == typeof r
        ? ((e = r),
          (n = {}),
          S.each(e.match(P) || [], function (e, t) {
            n[t] = !0;
          }),
          n)
        : S.extend({}, r);
    var i,
      t,
      o,
      a,
      s = [],
      u = [],
      l = -1,
      c = function () {
        for (a = a || r.once, o = i = !0; u.length; l = -1) {
          t = u.shift();
          while (++l < s.length)
            !1 === s[l].apply(t[0], t[1]) &&
              r.stopOnFalse &&
              ((l = s.length), (t = !1));
        }
        r.memory || (t = !1), (i = !1), a && (s = t ? [] : "");
      },
      f = {
        add: function () {
          return (
            s &&
              (t && !i && ((l = s.length - 1), u.push(t)),
              (function n(e) {
                S.each(e, function (e, t) {
                  m(t)
                    ? (r.unique && f.has(t)) || s.push(t)
                    : t && t.length && "string" !== w(t) && n(t);
                });
              })(arguments),
              t && !i && c()),
            this
          );
        },
        remove: function () {
          return (
            S.each(arguments, function (e, t) {
              var n;
              while (-1 < (n = S.inArray(t, s, n)))
                s.splice(n, 1), n <= l && l--;
            }),
            this
          );
        },
        has: function (e) {
          return e ? -1 < S.inArray(e, s) : 0 < s.length;
        },
        empty: function () {
          return s && (s = []), this;
        },
        disable: function () {
          return (a = u = []), (s = t = ""), this;
        },
        disabled: function () {
          return !s;
        },
        lock: function () {
          return (a = u = []), t || i || (s = t = ""), this;
        },
        locked: function () {
          return !!a;
        },
        fireWith: function (e, t) {
          return (
            a ||
              ((t = [e, (t = t || []).slice ? t.slice() : t]),
              u.push(t),
              i || c()),
            this
          );
        },
        fire: function () {
          return f.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!o;
        },
      };
    return f;
  }),
    S.extend({
      Deferred: function (e) {
        var o = [
            [
              "notify",
              "progress",
              S.Callbacks("memory"),
              S.Callbacks("memory"),
              2,
            ],
            [
              "resolve",
              "done",
              S.Callbacks("once memory"),
              S.Callbacks("once memory"),
              0,
              "resolved",
            ],
            [
              "reject",
              "fail",
              S.Callbacks("once memory"),
              S.Callbacks("once memory"),
              1,
              "rejected",
            ],
          ],
          i = "pending",
          a = {
            state: function () {
              return i;
            },
            always: function () {
              return s.done(arguments).fail(arguments), this;
            },
            catch: function (e) {
              return a.then(null, e);
            },
            pipe: function () {
              var i = arguments;
              return S.Deferred(function (r) {
                S.each(o, function (e, t) {
                  var n = m(i[t[4]]) && i[t[4]];
                  s[t[1]](function () {
                    var e = n && n.apply(this, arguments);
                    e && m(e.promise)
                      ? e
                          .promise()
                          .progress(r.notify)
                          .done(r.resolve)
                          .fail(r.reject)
                      : r[t[0] + "With"](this, n ? [e] : arguments);
                  });
                }),
                  (i = null);
              }).promise();
            },
            then: function (t, n, r) {
              var u = 0;
              function l(i, o, a, s) {
                return function () {
                  var n = this,
                    r = arguments,
                    e = function () {
                      var e, t;
                      if (!(i < u)) {
                        if ((e = a.apply(n, r)) === o.promise())
                          throw new TypeError("Thenable self-resolution");
                        (t =
                          e &&
                          ("object" == typeof e || "function" == typeof e) &&
                          e.then),
                          m(t)
                            ? s
                              ? t.call(e, l(u, o, R, s), l(u, o, M, s))
                              : (u++,
                                t.call(
                                  e,
                                  l(u, o, R, s),
                                  l(u, o, M, s),
                                  l(u, o, R, o.notifyWith)
                                ))
                            : (a !== R && ((n = void 0), (r = [e])),
                              (s || o.resolveWith)(n, r));
                      }
                    },
                    t = s
                      ? e
                      : function () {
                          try {
                            e();
                          } catch (e) {
                            S.Deferred.exceptionHook &&
                              S.Deferred.exceptionHook(e, t.stackTrace),
                              u <= i + 1 &&
                                (a !== M && ((n = void 0), (r = [e])),
                                o.rejectWith(n, r));
                          }
                        };
                  i
                    ? t()
                    : (S.Deferred.getStackHook &&
                        (t.stackTrace = S.Deferred.getStackHook()),
                      C.setTimeout(t));
                };
              }
              return S.Deferred(function (e) {
                o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)),
                  o[1][3].add(l(0, e, m(t) ? t : R)),
                  o[2][3].add(l(0, e, m(n) ? n : M));
              }).promise();
            },
            promise: function (e) {
              return null != e ? S.extend(e, a) : a;
            },
          },
          s = {};
        return (
          S.each(o, function (e, t) {
            var n = t[2],
              r = t[5];
            (a[t[1]] = n.add),
              r &&
                n.add(
                  function () {
                    i = r;
                  },
                  o[3 - e][2].disable,
                  o[3 - e][3].disable,
                  o[0][2].lock,
                  o[0][3].lock
                ),
              n.add(t[3].fire),
              (s[t[0]] = function () {
                return (
                  s[t[0] + "With"](this === s ? void 0 : this, arguments), this
                );
              }),
              (s[t[0] + "With"] = n.fireWith);
          }),
          a.promise(s),
          e && e.call(s, s),
          s
        );
      },
      when: function (e) {
        var n = arguments.length,
          t = n,
          r = Array(t),
          i = s.call(arguments),
          o = S.Deferred(),
          a = function (t) {
            return function (e) {
              (r[t] = this),
                (i[t] = 1 < arguments.length ? s.call(arguments) : e),
                --n || o.resolveWith(r, i);
            };
          };
        if (
          n <= 1 &&
          (I(e, o.done(a(t)).resolve, o.reject, !n),
          "pending" === o.state() || m(i[t] && i[t].then))
        )
          return o.then();
        while (t--) I(i[t], a(t), o.reject);
        return o.promise();
      },
    });
  var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (S.Deferred.exceptionHook = function (e, t) {
    C.console &&
      C.console.warn &&
      e &&
      W.test(e.name) &&
      C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t);
  }),
    (S.readyException = function (e) {
      C.setTimeout(function () {
        throw e;
      });
    });
  var F = S.Deferred();
  function B() {
    E.removeEventListener("DOMContentLoaded", B),
      C.removeEventListener("load", B),
      S.ready();
  }
  (S.fn.ready = function (e) {
    return (
      F.then(e)["catch"](function (e) {
        S.readyException(e);
      }),
      this
    );
  }),
    S.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --S.readyWait : S.isReady) ||
          ((S.isReady = !0) !== e && 0 < --S.readyWait) ||
          F.resolveWith(E, [S]);
      },
    }),
    (S.ready.then = F.then),
    "complete" === E.readyState ||
    ("loading" !== E.readyState && !E.documentElement.doScroll)
      ? C.setTimeout(S.ready)
      : (E.addEventListener("DOMContentLoaded", B),
        C.addEventListener("load", B));
  var $ = function (e, t, n, r, i, o, a) {
      var s = 0,
        u = e.length,
        l = null == n;
      if ("object" === w(n))
        for (s in ((i = !0), n)) $(e, t, s, n[s], !0, o, a);
      else if (
        void 0 !== r &&
        ((i = !0),
        m(r) || (a = !0),
        l &&
          (a
            ? (t.call(e, r), (t = null))
            : ((l = t),
              (t = function (e, t, n) {
                return l.call(S(e), n);
              }))),
        t)
      )
        for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
      return i ? e : l ? t.call(e) : u ? t(e[0], n) : o;
    },
    _ = /^-ms-/,
    z = /-([a-z])/g;
  function U(e, t) {
    return t.toUpperCase();
  }
  function X(e) {
    return e.replace(_, "ms-").replace(z, U);
  }
  var V = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  };
  function G() {
    this.expando = S.expando + G.uid++;
  }
  (G.uid = 1),
    (G.prototype = {
      cache: function (e) {
        var t = e[this.expando];
        return (
          t ||
            ((t = {}),
            V(e) &&
              (e.nodeType
                ? (e[this.expando] = t)
                : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0,
                  }))),
          t
        );
      },
      set: function (e, t, n) {
        var r,
          i = this.cache(e);
        if ("string" == typeof t) i[X(t)] = n;
        else for (r in t) i[X(r)] = t[r];
        return i;
      },
      get: function (e, t) {
        return void 0 === t
          ? this.cache(e)
          : e[this.expando] && e[this.expando][X(t)];
      },
      access: function (e, t, n) {
        return void 0 === t || (t && "string" == typeof t && void 0 === n)
          ? this.get(e, t)
          : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          r = e[this.expando];
        if (void 0 !== r) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t)
              ? t.map(X)
              : (t = X(t)) in r
              ? [t]
              : t.match(P) || []).length;
            while (n--) delete r[t[n]];
          }
          (void 0 === t || S.isEmptyObject(r)) &&
            (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
        }
      },
      hasData: function (e) {
        var t = e[this.expando];
        return void 0 !== t && !S.isEmptyObject(t);
      },
    });
  var Y = new G(),
    Q = new G(),
    J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    K = /[A-Z]/g;
  function Z(e, t, n) {
    var r, i;
    if (void 0 === n && 1 === e.nodeType)
      if (
        ((r = "data-" + t.replace(K, "-$&").toLowerCase()),
        "string" == typeof (n = e.getAttribute(r)))
      ) {
        try {
          n =
            "true" === (i = n) ||
            ("false" !== i &&
              ("null" === i
                ? null
                : i === +i + ""
                ? +i
                : J.test(i)
                ? JSON.parse(i)
                : i));
        } catch (e) {}
        Q.set(e, t, n);
      } else n = void 0;
    return n;
  }
  S.extend({
    hasData: function (e) {
      return Q.hasData(e) || Y.hasData(e);
    },
    data: function (e, t, n) {
      return Q.access(e, t, n);
    },
    removeData: function (e, t) {
      Q.remove(e, t);
    },
    _data: function (e, t, n) {
      return Y.access(e, t, n);
    },
    _removeData: function (e, t) {
      Y.remove(e, t);
    },
  }),
    S.fn.extend({
      data: function (n, e) {
        var t,
          r,
          i,
          o = this[0],
          a = o && o.attributes;
        if (void 0 === n) {
          if (
            this.length &&
            ((i = Q.get(o)), 1 === o.nodeType && !Y.get(o, "hasDataAttrs"))
          ) {
            t = a.length;
            while (t--)
              a[t] &&
                0 === (r = a[t].name).indexOf("data-") &&
                ((r = X(r.slice(5))), Z(o, r, i[r]));
            Y.set(o, "hasDataAttrs", !0);
          }
          return i;
        }
        return "object" == typeof n
          ? this.each(function () {
              Q.set(this, n);
            })
          : $(
              this,
              function (e) {
                var t;
                if (o && void 0 === e)
                  return void 0 !== (t = Q.get(o, n))
                    ? t
                    : void 0 !== (t = Z(o, n))
                    ? t
                    : void 0;
                this.each(function () {
                  Q.set(this, n, e);
                });
              },
              null,
              e,
              1 < arguments.length,
              null,
              !0
            );
      },
      removeData: function (e) {
        return this.each(function () {
          Q.remove(this, e);
        });
      },
    }),
    S.extend({
      queue: function (e, t, n) {
        var r;
        if (e)
          return (
            (t = (t || "fx") + "queue"),
            (r = Y.get(e, t)),
            n &&
              (!r || Array.isArray(n)
                ? (r = Y.access(e, t, S.makeArray(n)))
                : r.push(n)),
            r || []
          );
      },
      dequeue: function (e, t) {
        t = t || "fx";
        var n = S.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = S._queueHooks(e, t);
        "inprogress" === i && ((i = n.shift()), r--),
          i &&
            ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(
              e,
              function () {
                S.dequeue(e, t);
              },
              o
            )),
          !r && o && o.empty.fire();
      },
      _queueHooks: function (e, t) {
        var n = t + "queueHooks";
        return (
          Y.get(e, n) ||
          Y.access(e, n, {
            empty: S.Callbacks("once memory").add(function () {
              Y.remove(e, [t + "queue", n]);
            }),
          })
        );
      },
    }),
    S.fn.extend({
      queue: function (t, n) {
        var e = 2;
        return (
          "string" != typeof t && ((n = t), (t = "fx"), e--),
          arguments.length < e
            ? S.queue(this[0], t)
            : void 0 === n
            ? this
            : this.each(function () {
                var e = S.queue(this, t, n);
                S._queueHooks(this, t),
                  "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          S.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || "fx", []);
      },
      promise: function (e, t) {
        var n,
          r = 1,
          i = S.Deferred(),
          o = this,
          a = this.length,
          s = function () {
            --r || i.resolveWith(o, [o]);
          };
        "string" != typeof e && ((t = e), (e = void 0)), (e = e || "fx");
        while (a--)
          (n = Y.get(o[a], e + "queueHooks")) &&
            n.empty &&
            (r++, n.empty.add(s));
        return s(), i.promise(t);
      },
    });
  var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$", "i"),
    ne = ["Top", "Right", "Bottom", "Left"],
    re = E.documentElement,
    ie = function (e) {
      return S.contains(e.ownerDocument, e);
    },
    oe = { composed: !0 };
  re.getRootNode &&
    (ie = function (e) {
      return (
        S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
      );
    });
  var ae = function (e, t) {
    return (
      "none" === (e = t || e).style.display ||
      ("" === e.style.display && ie(e) && "none" === S.css(e, "display"))
    );
  };
  function se(e, t, n, r) {
    var i,
      o,
      a = 20,
      s = r
        ? function () {
            return r.cur();
          }
        : function () {
            return S.css(e, t, "");
          },
      u = s(),
      l = (n && n[3]) || (S.cssNumber[t] ? "" : "px"),
      c =
        e.nodeType &&
        (S.cssNumber[t] || ("px" !== l && +u)) &&
        te.exec(S.css(e, t));
    if (c && c[3] !== l) {
      (u /= 2), (l = l || c[3]), (c = +u || 1);
      while (a--)
        S.style(e, t, c + l),
          (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0),
          (c /= o);
      (c *= 2), S.style(e, t, c + l), (n = n || []);
    }
    return (
      n &&
        ((c = +c || +u || 0),
        (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
        r && ((r.unit = l), (r.start = c), (r.end = i))),
      i
    );
  }
  var ue = {};
  function le(e, t) {
    for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
      (r = e[c]).style &&
        ((n = r.style.display),
        t
          ? ("none" === n &&
              ((l[c] = Y.get(r, "display") || null),
              l[c] || (r.style.display = "")),
            "" === r.style.display &&
              ae(r) &&
              (l[c] =
                ((u = a = o = void 0),
                (a = (i = r).ownerDocument),
                (s = i.nodeName),
                (u = ue[s]) ||
                  ((o = a.body.appendChild(a.createElement(s))),
                  (u = S.css(o, "display")),
                  o.parentNode.removeChild(o),
                  "none" === u && (u = "block"),
                  (ue[s] = u)))))
          : "none" !== n && ((l[c] = "none"), Y.set(r, "display", n)));
    for (c = 0; c < f; c++) null != l[c] && (e[c].style.display = l[c]);
    return e;
  }
  S.fn.extend({
    show: function () {
      return le(this, !0);
    },
    hide: function () {
      return le(this);
    },
    toggle: function (e) {
      return "boolean" == typeof e
        ? e
          ? this.show()
          : this.hide()
        : this.each(function () {
            ae(this) ? S(this).show() : S(this).hide();
          });
    },
  });
  var ce,
    fe,
    pe = /^(?:checkbox|radio)$/i,
    de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
    he = /^$|^module$|\/(?:java|ecma)script/i;
  (ce = E.createDocumentFragment().appendChild(E.createElement("div"))),
    (fe = E.createElement("input")).setAttribute("type", "radio"),
    fe.setAttribute("checked", "checked"),
    fe.setAttribute("name", "t"),
    ce.appendChild(fe),
    (y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (ce.innerHTML = "<textarea>x</textarea>"),
    (y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue),
    (ce.innerHTML = "<option></option>"),
    (y.option = !!ce.lastChild);
  var ge = {
    thead: [1, "<table>", "</table>"],
    col: [2, "<table><colgroup>", "</colgroup></table>"],
    tr: [2, "<table><tbody>", "</tbody></table>"],
    td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
    _default: [0, "", ""],
  };
  function ve(e, t) {
    var n;
    return (
      (n =
        "undefined" != typeof e.getElementsByTagName
          ? e.getElementsByTagName(t || "*")
          : "undefined" != typeof e.querySelectorAll
          ? e.querySelectorAll(t || "*")
          : []),
      void 0 === t || (t && A(e, t)) ? S.merge([e], n) : n
    );
  }
  function ye(e, t) {
    for (var n = 0, r = e.length; n < r; n++)
      Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"));
  }
  (ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead),
    (ge.th = ge.td),
    y.option ||
      (ge.optgroup = ge.option =
        [1, "<select multiple='multiple'>", "</select>"]);
  var me = /<|&#?\w+;/;
  function xe(e, t, n, r, i) {
    for (
      var o,
        a,
        s,
        u,
        l,
        c,
        f = t.createDocumentFragment(),
        p = [],
        d = 0,
        h = e.length;
      d < h;
      d++
    )
      if ((o = e[d]) || 0 === o)
        if ("object" === w(o)) S.merge(p, o.nodeType ? [o] : o);
        else if (me.test(o)) {
          (a = a || f.appendChild(t.createElement("div"))),
            (s = (de.exec(o) || ["", ""])[1].toLowerCase()),
            (u = ge[s] || ge._default),
            (a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2]),
            (c = u[0]);
          while (c--) a = a.lastChild;
          S.merge(p, a.childNodes), ((a = f.firstChild).textContent = "");
        } else p.push(t.createTextNode(o));
    (f.textContent = ""), (d = 0);
    while ((o = p[d++]))
      if (r && -1 < S.inArray(o, r)) i && i.push(o);
      else if (
        ((l = ie(o)), (a = ve(f.appendChild(o), "script")), l && ye(a), n)
      ) {
        c = 0;
        while ((o = a[c++])) he.test(o.type || "") && n.push(o);
      }
    return f;
  }
  var be = /^key/,
    we = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    Te = /^([^.]*)(?:\.(.+)|)/;
  function Ce() {
    return !0;
  }
  function Ee() {
    return !1;
  }
  function Se(e, t) {
    return (
      (e ===
        (function () {
          try {
            return E.activeElement;
          } catch (e) {}
        })()) ==
      ("focus" === t)
    );
  }
  function ke(e, t, n, r, i, o) {
    var a, s;
    if ("object" == typeof t) {
      for (s in ("string" != typeof n && ((r = r || n), (n = void 0)), t))
        ke(e, s, n, r, t[s], o);
      return e;
    }
    if (
      (null == r && null == i
        ? ((i = n), (r = n = void 0))
        : null == i &&
          ("string" == typeof n
            ? ((i = r), (r = void 0))
            : ((i = r), (r = n), (n = void 0))),
      !1 === i)
    )
      i = Ee;
    else if (!i) return e;
    return (
      1 === o &&
        ((a = i),
        ((i = function (e) {
          return S().off(e), a.apply(this, arguments);
        }).guid = a.guid || (a.guid = S.guid++))),
      e.each(function () {
        S.event.add(this, t, i, r, n);
      })
    );
  }
  function Ae(e, i, o) {
    o
      ? (Y.set(e, i, !1),
        S.event.add(e, i, {
          namespace: !1,
          handler: function (e) {
            var t,
              n,
              r = Y.get(this, i);
            if (1 & e.isTrigger && this[i]) {
              if (r.length)
                (S.event.special[i] || {}).delegateType && e.stopPropagation();
              else if (
                ((r = s.call(arguments)),
                Y.set(this, i, r),
                (t = o(this, i)),
                this[i](),
                r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : (n = {}),
                r !== n)
              )
                return (
                  e.stopImmediatePropagation(), e.preventDefault(), n.value
                );
            } else
              r.length &&
                (Y.set(this, i, {
                  value: S.event.trigger(
                    S.extend(r[0], S.Event.prototype),
                    r.slice(1),
                    this
                  ),
                }),
                e.stopImmediatePropagation());
          },
        }))
      : void 0 === Y.get(e, i) && S.event.add(e, i, Ce);
  }
  (S.event = {
    global: {},
    add: function (t, e, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = Y.get(t);
      if (V(t)) {
        n.handler && ((n = (o = n).handler), (i = o.selector)),
          i && S.find.matchesSelector(re, i),
          n.guid || (n.guid = S.guid++),
          (u = v.events) || (u = v.events = Object.create(null)),
          (a = v.handle) ||
            (a = v.handle =
              function (e) {
                return "undefined" != typeof S && S.event.triggered !== e.type
                  ? S.event.dispatch.apply(t, arguments)
                  : void 0;
              }),
          (l = (e = (e || "").match(P) || [""]).length);
        while (l--)
          (d = g = (s = Te.exec(e[l]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            d &&
              ((f = S.event.special[d] || {}),
              (d = (i ? f.delegateType : f.bindType) || d),
              (f = S.event.special[d] || {}),
              (c = S.extend(
                {
                  type: d,
                  origType: g,
                  data: r,
                  handler: n,
                  guid: n.guid,
                  selector: i,
                  needsContext: i && S.expr.match.needsContext.test(i),
                  namespace: h.join("."),
                },
                o
              )),
              (p = u[d]) ||
                (((p = u[d] = []).delegateCount = 0),
                (f.setup && !1 !== f.setup.call(t, r, h, a)) ||
                  (t.addEventListener && t.addEventListener(d, a))),
              f.add &&
                (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)),
              i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
              (S.event.global[d] = !0));
      }
    },
    remove: function (e, t, n, r, i) {
      var o,
        a,
        s,
        u,
        l,
        c,
        f,
        p,
        d,
        h,
        g,
        v = Y.hasData(e) && Y.get(e);
      if (v && (u = v.events)) {
        l = (t = (t || "").match(P) || [""]).length;
        while (l--)
          if (
            ((d = g = (s = Te.exec(t[l]) || [])[1]),
            (h = (s[2] || "").split(".").sort()),
            d)
          ) {
            (f = S.event.special[d] || {}),
              (p = u[(d = (r ? f.delegateType : f.bindType) || d)] || []),
              (s =
                s[2] &&
                new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")),
              (a = o = p.length);
            while (o--)
              (c = p[o]),
                (!i && g !== c.origType) ||
                  (n && n.guid !== c.guid) ||
                  (s && !s.test(c.namespace)) ||
                  (r && r !== c.selector && ("**" !== r || !c.selector)) ||
                  (p.splice(o, 1),
                  c.selector && p.delegateCount--,
                  f.remove && f.remove.call(e, c));
            a &&
              !p.length &&
              ((f.teardown && !1 !== f.teardown.call(e, h, v.handle)) ||
                S.removeEvent(e, d, v.handle),
              delete u[d]);
          } else for (d in u) S.event.remove(e, d + t[l], n, r, !0);
        S.isEmptyObject(u) && Y.remove(e, "handle events");
      }
    },
    dispatch: function (e) {
      var t,
        n,
        r,
        i,
        o,
        a,
        s = new Array(arguments.length),
        u = S.event.fix(e),
        l = (Y.get(this, "events") || Object.create(null))[u.type] || [],
        c = S.event.special[u.type] || {};
      for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
      if (
        ((u.delegateTarget = this),
        !c.preDispatch || !1 !== c.preDispatch.call(this, u))
      ) {
        (a = S.event.handlers.call(this, u, l)), (t = 0);
        while ((i = a[t++]) && !u.isPropagationStopped()) {
          (u.currentTarget = i.elem), (n = 0);
          while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped())
            (u.rnamespace &&
              !1 !== o.namespace &&
              !u.rnamespace.test(o.namespace)) ||
              ((u.handleObj = o),
              (u.data = o.data),
              void 0 !==
                (r = (
                  (S.event.special[o.origType] || {}).handle || o.handler
                ).apply(i.elem, s)) &&
                !1 === (u.result = r) &&
                (u.preventDefault(), u.stopPropagation()));
        }
        return c.postDispatch && c.postDispatch.call(this, u), u.result;
      }
    },
    handlers: function (e, t) {
      var n,
        r,
        i,
        o,
        a,
        s = [],
        u = t.delegateCount,
        l = e.target;
      if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
        for (; l !== this; l = l.parentNode || this)
          if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
            for (o = [], a = {}, n = 0; n < u; n++)
              void 0 === a[(i = (r = t[n]).selector + " ")] &&
                (a[i] = r.needsContext
                  ? -1 < S(i, this).index(l)
                  : S.find(i, this, null, [l]).length),
                a[i] && o.push(r);
            o.length && s.push({ elem: l, handlers: o });
          }
      return (
        (l = this), u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s
      );
    },
    addProp: function (t, e) {
      Object.defineProperty(S.Event.prototype, t, {
        enumerable: !0,
        configurable: !0,
        get: m(e)
          ? function () {
              if (this.originalEvent) return e(this.originalEvent);
            }
          : function () {
              if (this.originalEvent) return this.originalEvent[t];
            },
        set: function (e) {
          Object.defineProperty(this, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: e,
          });
        },
      });
    },
    fix: function (e) {
      return e[S.expando] ? e : new S.Event(e);
    },
    special: {
      load: { noBubble: !0 },
      click: {
        setup: function (e) {
          var t = this || e;
          return (
            pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click", Ce),
            !1
          );
        },
        trigger: function (e) {
          var t = this || e;
          return (
            pe.test(t.type) && t.click && A(t, "input") && Ae(t, "click"), !0
          );
        },
        _default: function (e) {
          var t = e.target;
          return (
            (pe.test(t.type) &&
              t.click &&
              A(t, "input") &&
              Y.get(t, "click")) ||
            A(t, "a")
          );
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result &&
            e.originalEvent &&
            (e.originalEvent.returnValue = e.result);
        },
      },
    },
  }),
    (S.removeEvent = function (e, t, n) {
      e.removeEventListener && e.removeEventListener(t, n);
    }),
    (S.Event = function (e, t) {
      if (!(this instanceof S.Event)) return new S.Event(e, t);
      e && e.type
        ? ((this.originalEvent = e),
          (this.type = e.type),
          (this.isDefaultPrevented =
            e.defaultPrevented ||
            (void 0 === e.defaultPrevented && !1 === e.returnValue)
              ? Ce
              : Ee),
          (this.target =
            e.target && 3 === e.target.nodeType
              ? e.target.parentNode
              : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && S.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[S.expando] = !0);
    }),
    (S.Event.prototype = {
      constructor: S.Event,
      isDefaultPrevented: Ee,
      isPropagationStopped: Ee,
      isImmediatePropagationStopped: Ee,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = Ce),
          e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = Ce),
          e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = Ce),
          e && !this.isSimulated && e.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    S.each(
      {
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        code: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function (e) {
          var t = e.button;
          return null == e.which && be.test(e.type)
            ? null != e.charCode
              ? e.charCode
              : e.keyCode
            : !e.which && void 0 !== t && we.test(e.type)
            ? 1 & t
              ? 1
              : 2 & t
              ? 3
              : 4 & t
              ? 2
              : 0
            : e.which;
        },
      },
      S.event.addProp
    ),
    S.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
      S.event.special[e] = {
        setup: function () {
          return Ae(this, e, Se), !1;
        },
        trigger: function () {
          return Ae(this, e), !0;
        },
        delegateType: t,
      };
    }),
    S.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (e, i) {
        S.event.special[e] = {
          delegateType: i,
          bindType: i,
          handle: function (e) {
            var t,
              n = e.relatedTarget,
              r = e.handleObj;
            return (
              (n && (n === this || S.contains(this, n))) ||
                ((e.type = r.origType),
                (t = r.handler.apply(this, arguments)),
                (e.type = i)),
              t
            );
          },
        };
      }
    ),
    S.fn.extend({
      on: function (e, t, n, r) {
        return ke(this, e, t, n, r);
      },
      one: function (e, t, n, r) {
        return ke(this, e, t, n, r, 1);
      },
      off: function (e, t, n) {
        var r, i;
        if (e && e.preventDefault && e.handleObj)
          return (
            (r = e.handleObj),
            S(e.delegateTarget).off(
              r.namespace ? r.origType + "." + r.namespace : r.origType,
              r.selector,
              r.handler
            ),
            this
          );
        if ("object" == typeof e) {
          for (i in e) this.off(i, t, e[i]);
          return this;
        }
        return (
          (!1 !== t && "function" != typeof t) || ((n = t), (t = void 0)),
          !1 === n && (n = Ee),
          this.each(function () {
            S.event.remove(this, e, n, t);
          })
        );
      },
    });
  var Ne = /<script|<style|<link/i,
    De = /checked\s*(?:[^=]|=\s*.checked.)/i,
    je = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function qe(e, t) {
    return (
      (A(e, "table") &&
        A(11 !== t.nodeType ? t : t.firstChild, "tr") &&
        S(e).children("tbody")[0]) ||
      e
    );
  }
  function Le(e) {
    return (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e;
  }
  function He(e) {
    return (
      "true/" === (e.type || "").slice(0, 5)
        ? (e.type = e.type.slice(5))
        : e.removeAttribute("type"),
      e
    );
  }
  function Oe(e, t) {
    var n, r, i, o, a, s;
    if (1 === t.nodeType) {
      if (Y.hasData(e) && (s = Y.get(e).events))
        for (i in (Y.remove(t, "handle events"), s))
          for (n = 0, r = s[i].length; n < r; n++) S.event.add(t, i, s[i][n]);
      Q.hasData(e) && ((o = Q.access(e)), (a = S.extend({}, o)), Q.set(t, a));
    }
  }
  function Pe(n, r, i, o) {
    r = g(r);
    var e,
      t,
      a,
      s,
      u,
      l,
      c = 0,
      f = n.length,
      p = f - 1,
      d = r[0],
      h = m(d);
    if (h || (1 < f && "string" == typeof d && !y.checkClone && De.test(d)))
      return n.each(function (e) {
        var t = n.eq(e);
        h && (r[0] = d.call(this, e, t.html())), Pe(t, r, i, o);
      });
    if (
      f &&
      ((t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild),
      1 === e.childNodes.length && (e = t),
      t || o)
    ) {
      for (s = (a = S.map(ve(e, "script"), Le)).length; c < f; c++)
        (u = e),
          c !== p &&
            ((u = S.clone(u, !0, !0)), s && S.merge(a, ve(u, "script"))),
          i.call(n[c], u, c);
      if (s)
        for (l = a[a.length - 1].ownerDocument, S.map(a, He), c = 0; c < s; c++)
          (u = a[c]),
            he.test(u.type || "") &&
              !Y.access(u, "globalEval") &&
              S.contains(l, u) &&
              (u.src && "module" !== (u.type || "").toLowerCase()
                ? S._evalUrl &&
                  !u.noModule &&
                  S._evalUrl(
                    u.src,
                    { nonce: u.nonce || u.getAttribute("nonce") },
                    l
                  )
                : b(u.textContent.replace(je, ""), u, l));
    }
    return n;
  }
  function Re(e, t, n) {
    for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
      n || 1 !== r.nodeType || S.cleanData(ve(r)),
        r.parentNode &&
          (n && ie(r) && ye(ve(r, "script")), r.parentNode.removeChild(r));
    return e;
  }
  S.extend({
    htmlPrefilter: function (e) {
      return e;
    },
    clone: function (e, t, n) {
      var r,
        i,
        o,
        a,
        s,
        u,
        l,
        c = e.cloneNode(!0),
        f = ie(e);
      if (
        !(
          y.noCloneChecked ||
          (1 !== e.nodeType && 11 !== e.nodeType) ||
          S.isXMLDoc(e)
        )
      )
        for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++)
          (s = o[r]),
            (u = a[r]),
            void 0,
            "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type)
              ? (u.checked = s.checked)
              : ("input" !== l && "textarea" !== l) ||
                (u.defaultValue = s.defaultValue);
      if (t)
        if (n)
          for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++)
            Oe(o[r], a[r]);
        else Oe(e, c);
      return (
        0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")), c
      );
    },
    cleanData: function (e) {
      for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if (V(n)) {
          if ((t = n[Y.expando])) {
            if (t.events)
              for (r in t.events)
                i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
            n[Y.expando] = void 0;
          }
          n[Q.expando] && (n[Q.expando] = void 0);
        }
    },
  }),
    S.fn.extend({
      detach: function (e) {
        return Re(this, e, !0);
      },
      remove: function (e) {
        return Re(this, e);
      },
      text: function (e) {
        return $(
          this,
          function (e) {
            return void 0 === e
              ? S.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return Pe(this, arguments, function (e) {
          (1 !== this.nodeType &&
            11 !== this.nodeType &&
            9 !== this.nodeType) ||
            qe(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return Pe(this, arguments, function (e) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var t = qe(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return Pe(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return Pe(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++)
          1 === e.nodeType && (S.cleanData(ve(e, !1)), (e.textContent = ""));
        return this;
      },
      clone: function (e, t) {
        return (
          (e = null != e && e),
          (t = null == t ? e : t),
          this.map(function () {
            return S.clone(this, e, t);
          })
        );
      },
      html: function (e) {
        return $(
          this,
          function (e) {
            var t = this[0] || {},
              n = 0,
              r = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if (
              "string" == typeof e &&
              !Ne.test(e) &&
              !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]
            ) {
              e = S.htmlPrefilter(e);
              try {
                for (; n < r; n++)
                  1 === (t = this[n] || {}).nodeType &&
                    (S.cleanData(ve(t, !1)), (t.innerHTML = e));
                t = 0;
              } catch (e) {}
            }
            t && this.empty().append(e);
          },
          null,
          e,
          arguments.length
        );
      },
      replaceWith: function () {
        var n = [];
        return Pe(
          this,
          arguments,
          function (e) {
            var t = this.parentNode;
            S.inArray(this, n) < 0 &&
              (S.cleanData(ve(this)), t && t.replaceChild(e, this));
          },
          n
        );
      },
    }),
    S.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (e, a) {
        S.fn[e] = function (e) {
          for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++)
            (t = o === i ? this : this.clone(!0)),
              S(r[o])[a](t),
              u.apply(n, t.get());
          return this.pushStack(n);
        };
      }
    );
  var Me = new RegExp("^(" + ee + ")(?!px)[a-z%]+$", "i"),
    Ie = function (e) {
      var t = e.ownerDocument.defaultView;
      return (t && t.opener) || (t = C), t.getComputedStyle(e);
    },
    We = function (e, t, n) {
      var r,
        i,
        o = {};
      for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
      for (i in ((r = n.call(e)), t)) e.style[i] = o[i];
      return r;
    },
    Fe = new RegExp(ne.join("|"), "i");
  function Be(e, t, n) {
    var r,
      i,
      o,
      a,
      s = e.style;
    return (
      (n = n || Ie(e)) &&
        ("" !== (a = n.getPropertyValue(t) || n[t]) ||
          ie(e) ||
          (a = S.style(e, t)),
        !y.pixelBoxStyles() &&
          Me.test(a) &&
          Fe.test(t) &&
          ((r = s.width),
          (i = s.minWidth),
          (o = s.maxWidth),
          (s.minWidth = s.maxWidth = s.width = a),
          (a = n.width),
          (s.width = r),
          (s.minWidth = i),
          (s.maxWidth = o))),
      void 0 !== a ? a + "" : a
    );
  }
  function $e(e, t) {
    return {
      get: function () {
        if (!e()) return (this.get = t).apply(this, arguments);
        delete this.get;
      },
    };
  }
  !(function () {
    function e() {
      if (l) {
        (u.style.cssText =
          "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
          (l.style.cssText =
            "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
          re.appendChild(u).appendChild(l);
        var e = C.getComputedStyle(l);
        (n = "1%" !== e.top),
          (s = 12 === t(e.marginLeft)),
          (l.style.right = "60%"),
          (o = 36 === t(e.right)),
          (r = 36 === t(e.width)),
          (l.style.position = "absolute"),
          (i = 12 === t(l.offsetWidth / 3)),
          re.removeChild(u),
          (l = null);
      }
    }
    function t(e) {
      return Math.round(parseFloat(e));
    }
    var n,
      r,
      i,
      o,
      a,
      s,
      u = E.createElement("div"),
      l = E.createElement("div");
    l.style &&
      ((l.style.backgroundClip = "content-box"),
      (l.cloneNode(!0).style.backgroundClip = ""),
      (y.clearCloneStyle = "content-box" === l.style.backgroundClip),
      S.extend(y, {
        boxSizingReliable: function () {
          return e(), r;
        },
        pixelBoxStyles: function () {
          return e(), o;
        },
        pixelPosition: function () {
          return e(), n;
        },
        reliableMarginLeft: function () {
          return e(), s;
        },
        scrollboxSize: function () {
          return e(), i;
        },
        reliableTrDimensions: function () {
          var e, t, n, r;
          return (
            null == a &&
              ((e = E.createElement("table")),
              (t = E.createElement("tr")),
              (n = E.createElement("div")),
              (e.style.cssText = "position:absolute;left:-11111px"),
              (t.style.height = "1px"),
              (n.style.height = "9px"),
              re.appendChild(e).appendChild(t).appendChild(n),
              (r = C.getComputedStyle(t)),
              (a = 3 < parseInt(r.height)),
              re.removeChild(e)),
            a
          );
        },
      }));
  })();
  var _e = ["Webkit", "Moz", "ms"],
    ze = E.createElement("div").style,
    Ue = {};
  function Xe(e) {
    var t = S.cssProps[e] || Ue[e];
    return (
      t ||
      (e in ze
        ? e
        : (Ue[e] =
            (function (e) {
              var t = e[0].toUpperCase() + e.slice(1),
                n = _e.length;
              while (n--) if ((e = _e[n] + t) in ze) return e;
            })(e) || e))
    );
  }
  var Ve = /^(none|table(?!-c[ea]).+)/,
    Ge = /^--/,
    Ye = { position: "absolute", visibility: "hidden", display: "block" },
    Qe = { letterSpacing: "0", fontWeight: "400" };
  function Je(e, t, n) {
    var r = te.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t;
  }
  function Ke(e, t, n, r, i, o) {
    var a = "width" === t ? 1 : 0,
      s = 0,
      u = 0;
    if (n === (r ? "border" : "content")) return 0;
    for (; a < 4; a += 2)
      "margin" === n && (u += S.css(e, n + ne[a], !0, i)),
        r
          ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)),
            "margin" !== n &&
              (u -= S.css(e, "border" + ne[a] + "Width", !0, i)))
          : ((u += S.css(e, "padding" + ne[a], !0, i)),
            "padding" !== n
              ? (u += S.css(e, "border" + ne[a] + "Width", !0, i))
              : (s += S.css(e, "border" + ne[a] + "Width", !0, i)));
    return (
      !r &&
        0 <= o &&
        (u +=
          Math.max(
            0,
            Math.ceil(
              e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5
            )
          ) || 0),
      u
    );
  }
  function Ze(e, t, n) {
    var r = Ie(e),
      i =
        (!y.boxSizingReliable() || n) &&
        "border-box" === S.css(e, "boxSizing", !1, r),
      o = i,
      a = Be(e, t, r),
      s = "offset" + t[0].toUpperCase() + t.slice(1);
    if (Me.test(a)) {
      if (!n) return a;
      a = "auto";
    }
    return (
      ((!y.boxSizingReliable() && i) ||
        (!y.reliableTrDimensions() && A(e, "tr")) ||
        "auto" === a ||
        (!parseFloat(a) && "inline" === S.css(e, "display", !1, r))) &&
        e.getClientRects().length &&
        ((i = "border-box" === S.css(e, "boxSizing", !1, r)),
        (o = s in e) && (a = e[s])),
      (a = parseFloat(a) || 0) +
        Ke(e, t, n || (i ? "border" : "content"), o, r, a) +
        "px"
    );
  }
  function et(e, t, n, r, i) {
    return new et.prototype.init(e, t, n, r, i);
  }
  S.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = Be(e, "opacity");
            return "" === n ? "1" : n;
          }
        },
      },
    },
    cssNumber: {
      animationIterationCount: !0,
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      gridArea: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnStart: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowStart: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: {},
    style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var i,
          o,
          a,
          s = X(t),
          u = Ge.test(t),
          l = e.style;
        if (
          (u || (t = Xe(s)), (a = S.cssHooks[t] || S.cssHooks[s]), void 0 === n)
        )
          return a && "get" in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        "string" === (o = typeof n) &&
          (i = te.exec(n)) &&
          i[1] &&
          ((n = se(e, t, i)), (o = "number")),
          null != n &&
            n == n &&
            ("number" !== o ||
              u ||
              (n += (i && i[3]) || (S.cssNumber[s] ? "" : "px")),
            y.clearCloneStyle ||
              "" !== n ||
              0 !== t.indexOf("background") ||
              (l[t] = "inherit"),
            (a && "set" in a && void 0 === (n = a.set(e, n, r))) ||
              (u ? l.setProperty(t, n) : (l[t] = n)));
      }
    },
    css: function (e, t, n, r) {
      var i,
        o,
        a,
        s = X(t);
      return (
        Ge.test(t) || (t = Xe(s)),
        (a = S.cssHooks[t] || S.cssHooks[s]) &&
          "get" in a &&
          (i = a.get(e, !0, n)),
        void 0 === i && (i = Be(e, t, r)),
        "normal" === i && t in Qe && (i = Qe[t]),
        "" === n || n
          ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i)
          : i
      );
    },
  }),
    S.each(["height", "width"], function (e, u) {
      S.cssHooks[u] = {
        get: function (e, t, n) {
          if (t)
            return !Ve.test(S.css(e, "display")) ||
              (e.getClientRects().length && e.getBoundingClientRect().width)
              ? Ze(e, u, n)
              : We(e, Ye, function () {
                  return Ze(e, u, n);
                });
        },
        set: function (e, t, n) {
          var r,
            i = Ie(e),
            o = !y.scrollboxSize() && "absolute" === i.position,
            a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i),
            s = n ? Ke(e, u, n, a, i) : 0;
          return (
            a &&
              o &&
              (s -= Math.ceil(
                e["offset" + u[0].toUpperCase() + u.slice(1)] -
                  parseFloat(i[u]) -
                  Ke(e, u, "border", !1, i) -
                  0.5
              )),
            s &&
              (r = te.exec(t)) &&
              "px" !== (r[3] || "px") &&
              ((e.style[u] = t), (t = S.css(e, u))),
            Je(0, t, s)
          );
        },
      };
    }),
    (S.cssHooks.marginLeft = $e(y.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(Be(e, "marginLeft")) ||
            e.getBoundingClientRect().left -
              We(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
              })) + "px"
        );
    })),
    S.each({ margin: "", padding: "", border: "Width" }, function (i, o) {
      (S.cssHooks[i + o] = {
        expand: function (e) {
          for (
            var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e];
            t < 4;
            t++
          )
            n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
          return n;
        },
      }),
        "margin" !== i && (S.cssHooks[i + o].set = Je);
    }),
    S.fn.extend({
      css: function (e, t) {
        return $(
          this,
          function (e, t, n) {
            var r,
              i,
              o = {},
              a = 0;
            if (Array.isArray(t)) {
              for (r = Ie(e), i = t.length; a < i; a++)
                o[t[a]] = S.css(e, t[a], !1, r);
              return o;
            }
            return void 0 !== n ? S.style(e, t, n) : S.css(e, t);
          },
          e,
          t,
          1 < arguments.length
        );
      },
    }),
    (((S.Tween = et).prototype = {
      constructor: et,
      init: function (e, t, n, r, i, o) {
        (this.elem = e),
          (this.prop = n),
          (this.easing = i || S.easing._default),
          (this.options = t),
          (this.start = this.now = this.cur()),
          (this.end = r),
          (this.unit = o || (S.cssNumber[n] ? "" : "px"));
      },
      cur: function () {
        var e = et.propHooks[this.prop];
        return e && e.get ? e.get(this) : et.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = et.propHooks[this.prop];
        return (
          this.options.duration
            ? (this.pos = t =
                S.easing[this.easing](
                  e,
                  this.options.duration * e,
                  0,
                  1,
                  this.options.duration
                ))
            : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : et.propHooks._default.set(this),
          this
        );
      },
    }).init.prototype = et.prototype),
    ((et.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType ||
            (null != e.elem[e.prop] && null == e.elem.style[e.prop])
            ? e.elem[e.prop]
            : (t = S.css(e.elem, e.prop, "")) && "auto" !== t
            ? t
            : 0;
        },
        set: function (e) {
          S.fx.step[e.prop]
            ? S.fx.step[e.prop](e)
            : 1 !== e.elem.nodeType ||
              (!S.cssHooks[e.prop] && null == e.elem.style[Xe(e.prop)])
            ? (e.elem[e.prop] = e.now)
            : S.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }).scrollTop = et.propHooks.scrollLeft =
      {
        set: function (e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        },
      }),
    (S.easing = {
      linear: function (e) {
        return e;
      },
      swing: function (e) {
        return 0.5 - Math.cos(e * Math.PI) / 2;
      },
      _default: "swing",
    }),
    (S.fx = et.prototype.init),
    (S.fx.step = {});
  var tt,
    nt,
    rt,
    it,
    ot = /^(?:toggle|show|hide)$/,
    at = /queueHooks$/;
  function st() {
    nt &&
      (!1 === E.hidden && C.requestAnimationFrame
        ? C.requestAnimationFrame(st)
        : C.setTimeout(st, S.fx.interval),
      S.fx.tick());
  }
  function ut() {
    return (
      C.setTimeout(function () {
        tt = void 0;
      }),
      (tt = Date.now())
    );
  }
  function lt(e, t) {
    var n,
      r = 0,
      i = { height: e };
    for (t = t ? 1 : 0; r < 4; r += 2 - t)
      i["margin" + (n = ne[r])] = i["padding" + n] = e;
    return t && (i.opacity = i.width = e), i;
  }
  function ct(e, t, n) {
    for (
      var r,
        i = (ft.tweeners[t] || []).concat(ft.tweeners["*"]),
        o = 0,
        a = i.length;
      o < a;
      o++
    )
      if ((r = i[o].call(n, t, e))) return r;
  }
  function ft(o, e, t) {
    var n,
      a,
      r = 0,
      i = ft.prefilters.length,
      s = S.Deferred().always(function () {
        delete u.elem;
      }),
      u = function () {
        if (a) return !1;
        for (
          var e = tt || ut(),
            t = Math.max(0, l.startTime + l.duration - e),
            n = 1 - (t / l.duration || 0),
            r = 0,
            i = l.tweens.length;
          r < i;
          r++
        )
          l.tweens[r].run(n);
        return (
          s.notifyWith(o, [l, n, t]),
          n < 1 && i
            ? t
            : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1)
        );
      },
      l = s.promise({
        elem: o,
        props: S.extend({}, e),
        opts: S.extend(!0, { specialEasing: {}, easing: S.easing._default }, t),
        originalProperties: e,
        originalOptions: t,
        startTime: tt || ut(),
        duration: t.duration,
        tweens: [],
        createTween: function (e, t) {
          var n = S.Tween(
            o,
            l.opts,
            e,
            t,
            l.opts.specialEasing[e] || l.opts.easing
          );
          return l.tweens.push(n), n;
        },
        stop: function (e) {
          var t = 0,
            n = e ? l.tweens.length : 0;
          if (a) return this;
          for (a = !0; t < n; t++) l.tweens[t].run(1);
          return (
            e
              ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e]))
              : s.rejectWith(o, [l, e]),
            this
          );
        },
      }),
      c = l.props;
    for (
      !(function (e, t) {
        var n, r, i, o, a;
        for (n in e)
          if (
            ((i = t[(r = X(n))]),
            (o = e[n]),
            Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
            n !== r && ((e[r] = o), delete e[n]),
            (a = S.cssHooks[r]) && ("expand" in a))
          )
            for (n in ((o = a.expand(o)), delete e[r], o))
              (n in e) || ((e[n] = o[n]), (t[n] = i));
          else t[r] = i;
      })(c, l.opts.specialEasing);
      r < i;
      r++
    )
      if ((n = ft.prefilters[r].call(l, o, c, l.opts)))
        return (
          m(n.stop) &&
            (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)),
          n
        );
    return (
      S.map(c, ct, l),
      m(l.opts.start) && l.opts.start.call(o, l),
      l
        .progress(l.opts.progress)
        .done(l.opts.done, l.opts.complete)
        .fail(l.opts.fail)
        .always(l.opts.always),
      S.fx.timer(S.extend(u, { elem: o, anim: l, queue: l.opts.queue })),
      l
    );
  }
  (S.Animation = S.extend(ft, {
    tweeners: {
      "*": [
        function (e, t) {
          var n = this.createTween(e, t);
          return se(n.elem, e, te.exec(t), n), n;
        },
      ],
    },
    tweener: function (e, t) {
      m(e) ? ((t = e), (e = ["*"])) : (e = e.match(P));
      for (var n, r = 0, i = e.length; r < i; r++)
        (n = e[r]),
          (ft.tweeners[n] = ft.tweeners[n] || []),
          ft.tweeners[n].unshift(t);
    },
    prefilters: [
      function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l,
          c,
          f = "width" in t || "height" in t,
          p = this,
          d = {},
          h = e.style,
          g = e.nodeType && ae(e),
          v = Y.get(e, "fxshow");
        for (r in (n.queue ||
          (null == (a = S._queueHooks(e, "fx")).unqueued &&
            ((a.unqueued = 0),
            (s = a.empty.fire),
            (a.empty.fire = function () {
              a.unqueued || s();
            })),
          a.unqueued++,
          p.always(function () {
            p.always(function () {
              a.unqueued--, S.queue(e, "fx").length || a.empty.fire();
            });
          })),
        t))
          if (((i = t[r]), ot.test(i))) {
            if (
              (delete t[r],
              (o = o || "toggle" === i),
              i === (g ? "hide" : "show"))
            ) {
              if ("show" !== i || !v || void 0 === v[r]) continue;
              g = !0;
            }
            d[r] = (v && v[r]) || S.style(e, r);
          }
        if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
          for (r in (f &&
            1 === e.nodeType &&
            ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
            null == (l = v && v.display) && (l = Y.get(e, "display")),
            "none" === (c = S.css(e, "display")) &&
              (l
                ? (c = l)
                : (le([e], !0),
                  (l = e.style.display || l),
                  (c = S.css(e, "display")),
                  le([e]))),
            ("inline" === c || ("inline-block" === c && null != l)) &&
              "none" === S.css(e, "float") &&
              (u ||
                (p.done(function () {
                  h.display = l;
                }),
                null == l && ((c = h.display), (l = "none" === c ? "" : c))),
              (h.display = "inline-block"))),
          n.overflow &&
            ((h.overflow = "hidden"),
            p.always(function () {
              (h.overflow = n.overflow[0]),
                (h.overflowX = n.overflow[1]),
                (h.overflowY = n.overflow[2]);
            })),
          (u = !1),
          d))
            u ||
              (v
                ? "hidden" in v && (g = v.hidden)
                : (v = Y.access(e, "fxshow", { display: l })),
              o && (v.hidden = !g),
              g && le([e], !0),
              p.done(function () {
                for (r in (g || le([e]), Y.remove(e, "fxshow"), d))
                  S.style(e, r, d[r]);
              })),
              (u = ct(g ? v[r] : 0, r, p)),
              r in v ||
                ((v[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
      },
    ],
    prefilter: function (e, t) {
      t ? ft.prefilters.unshift(e) : ft.prefilters.push(e);
    },
  })),
    (S.speed = function (e, t, n) {
      var r =
        e && "object" == typeof e
          ? S.extend({}, e)
          : {
              complete: n || (!n && t) || (m(e) && e),
              duration: e,
              easing: (n && t) || (t && !m(t) && t),
            };
      return (
        S.fx.off
          ? (r.duration = 0)
          : "number" != typeof r.duration &&
            (r.duration in S.fx.speeds
              ? (r.duration = S.fx.speeds[r.duration])
              : (r.duration = S.fx.speeds._default)),
        (null != r.queue && !0 !== r.queue) || (r.queue = "fx"),
        (r.old = r.complete),
        (r.complete = function () {
          m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue);
        }),
        r
      );
    }),
    S.fn.extend({
      fadeTo: function (e, t, n, r) {
        return this.filter(ae)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: t }, e, n, r);
      },
      animate: function (t, e, n, r) {
        var i = S.isEmptyObject(t),
          o = S.speed(e, n, r),
          a = function () {
            var e = ft(this, S.extend({}, t), o);
            (i || Y.get(this, "finish")) && e.stop(!0);
          };
        return (
          (a.finish = a),
          i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        );
      },
      stop: function (i, e, o) {
        var a = function (e) {
          var t = e.stop;
          delete e.stop, t(o);
        };
        return (
          "string" != typeof i && ((o = e), (e = i), (i = void 0)),
          e && this.queue(i || "fx", []),
          this.each(function () {
            var e = !0,
              t = null != i && i + "queueHooks",
              n = S.timers,
              r = Y.get(this);
            if (t) r[t] && r[t].stop && a(r[t]);
            else for (t in r) r[t] && r[t].stop && at.test(t) && a(r[t]);
            for (t = n.length; t--; )
              n[t].elem !== this ||
                (null != i && n[t].queue !== i) ||
                (n[t].anim.stop(o), (e = !1), n.splice(t, 1));
            (!e && o) || S.dequeue(this, i);
          })
        );
      },
      finish: function (a) {
        return (
          !1 !== a && (a = a || "fx"),
          this.each(function () {
            var e,
              t = Y.get(this),
              n = t[a + "queue"],
              r = t[a + "queueHooks"],
              i = S.timers,
              o = n ? n.length : 0;
            for (
              t.finish = !0,
                S.queue(this, a, []),
                r && r.stop && r.stop.call(this, !0),
                e = i.length;
              e--;

            )
              i[e].elem === this &&
                i[e].queue === a &&
                (i[e].anim.stop(!0), i.splice(e, 1));
            for (e = 0; e < o; e++)
              n[e] && n[e].finish && n[e].finish.call(this);
            delete t.finish;
          })
        );
      },
    }),
    S.each(["toggle", "show", "hide"], function (e, r) {
      var i = S.fn[r];
      S.fn[r] = function (e, t, n) {
        return null == e || "boolean" == typeof e
          ? i.apply(this, arguments)
          : this.animate(lt(r, !0), e, t, n);
      };
    }),
    S.each(
      {
        slideDown: lt("show"),
        slideUp: lt("hide"),
        slideToggle: lt("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (e, r) {
        S.fn[e] = function (e, t, n) {
          return this.animate(r, e, t, n);
        };
      }
    ),
    (S.timers = []),
    (S.fx.tick = function () {
      var e,
        t = 0,
        n = S.timers;
      for (tt = Date.now(); t < n.length; t++)
        (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || S.fx.stop(), (tt = void 0);
    }),
    (S.fx.timer = function (e) {
      S.timers.push(e), S.fx.start();
    }),
    (S.fx.interval = 13),
    (S.fx.start = function () {
      nt || ((nt = !0), st());
    }),
    (S.fx.stop = function () {
      nt = null;
    }),
    (S.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (S.fn.delay = function (r, e) {
      return (
        (r = (S.fx && S.fx.speeds[r]) || r),
        (e = e || "fx"),
        this.queue(e, function (e, t) {
          var n = C.setTimeout(e, r);
          t.stop = function () {
            C.clearTimeout(n);
          };
        })
      );
    }),
    (rt = E.createElement("input")),
    (it = E.createElement("select").appendChild(E.createElement("option"))),
    (rt.type = "checkbox"),
    (y.checkOn = "" !== rt.value),
    (y.optSelected = it.selected),
    ((rt = E.createElement("input")).value = "t"),
    (rt.type = "radio"),
    (y.radioValue = "t" === rt.value);
  var pt,
    dt = S.expr.attrHandle;
  S.fn.extend({
    attr: function (e, t) {
      return $(this, S.attr, e, t, 1 < arguments.length);
    },
    removeAttr: function (e) {
      return this.each(function () {
        S.removeAttr(this, e);
      });
    },
  }),
    S.extend({
      attr: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return "undefined" == typeof e.getAttribute
            ? S.prop(e, t, n)
            : ((1 === o && S.isXMLDoc(e)) ||
                (i =
                  S.attrHooks[t.toLowerCase()] ||
                  (S.expr.match.bool.test(t) ? pt : void 0)),
              void 0 !== n
                ? null === n
                  ? void S.removeAttr(e, t)
                  : i && "set" in i && void 0 !== (r = i.set(e, n, t))
                  ? r
                  : (e.setAttribute(t, n + ""), n)
                : i && "get" in i && null !== (r = i.get(e, t))
                ? r
                : null == (r = S.find.attr(e, t))
                ? void 0
                : r);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!y.radioValue && "radio" === t && A(e, "input")) {
              var n = e.value;
              return e.setAttribute("type", t), n && (e.value = n), t;
            }
          },
        },
      },
      removeAttr: function (e, t) {
        var n,
          r = 0,
          i = t && t.match(P);
        if (i && 1 === e.nodeType) while ((n = i[r++])) e.removeAttribute(n);
      },
    }),
    (pt = {
      set: function (e, t, n) {
        return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n;
      },
    }),
    S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var a = dt[t] || S.find.attr;
      dt[t] = function (e, t, n) {
        var r,
          i,
          o = t.toLowerCase();
        return (
          n ||
            ((i = dt[o]),
            (dt[o] = r),
            (r = null != a(e, t, n) ? o : null),
            (dt[o] = i)),
          r
        );
      };
    });
  var ht = /^(?:input|select|textarea|button)$/i,
    gt = /^(?:a|area)$/i;
  function vt(e) {
    return (e.match(P) || []).join(" ");
  }
  function yt(e) {
    return (e.getAttribute && e.getAttribute("class")) || "";
  }
  function mt(e) {
    return Array.isArray(e) ? e : ("string" == typeof e && e.match(P)) || [];
  }
  S.fn.extend({
    prop: function (e, t) {
      return $(this, S.prop, e, t, 1 < arguments.length);
    },
    removeProp: function (e) {
      return this.each(function () {
        delete this[S.propFix[e] || e];
      });
    },
  }),
    S.extend({
      prop: function (e, t, n) {
        var r,
          i,
          o = e.nodeType;
        if (3 !== o && 8 !== o && 2 !== o)
          return (
            (1 === o && S.isXMLDoc(e)) ||
              ((t = S.propFix[t] || t), (i = S.propHooks[t])),
            void 0 !== n
              ? i && "set" in i && void 0 !== (r = i.set(e, n, t))
                ? r
                : (e[t] = n)
              : i && "get" in i && null !== (r = i.get(e, t))
              ? r
              : e[t]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = S.find.attr(e, "tabindex");
            return t
              ? parseInt(t, 10)
              : ht.test(e.nodeName) || (gt.test(e.nodeName) && e.href)
              ? 0
              : -1;
          },
        },
      },
      propFix: { for: "htmlFor", class: "className" },
    }),
    y.optSelected ||
      (S.propHooks.selected = {
        get: function (e) {
          var t = e.parentNode;
          return t && t.parentNode && t.parentNode.selectedIndex, null;
        },
        set: function (e) {
          var t = e.parentNode;
          t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex);
        },
      }),
    S.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        S.propFix[this.toLowerCase()] = this;
      }
    ),
    S.fn.extend({
      addClass: function (t) {
        var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
        if (m(t))
          return this.each(function (e) {
            S(this).addClass(t.call(this, e, yt(this)));
          });
        if ((e = mt(t)).length)
          while ((n = this[u++]))
            if (((i = yt(n)), (r = 1 === n.nodeType && " " + vt(i) + " "))) {
              a = 0;
              while ((o = e[a++]))
                r.indexOf(" " + o + " ") < 0 && (r += o + " ");
              i !== (s = vt(r)) && n.setAttribute("class", s);
            }
        return this;
      },
      removeClass: function (t) {
        var e,
          n,
          r,
          i,
          o,
          a,
          s,
          u = 0;
        if (m(t))
          return this.each(function (e) {
            S(this).removeClass(t.call(this, e, yt(this)));
          });
        if (!arguments.length) return this.attr("class", "");
        if ((e = mt(t)).length)
          while ((n = this[u++]))
            if (((i = yt(n)), (r = 1 === n.nodeType && " " + vt(i) + " "))) {
              a = 0;
              while ((o = e[a++]))
                while (-1 < r.indexOf(" " + o + " "))
                  r = r.replace(" " + o + " ", " ");
              i !== (s = vt(r)) && n.setAttribute("class", s);
            }
        return this;
      },
      toggleClass: function (i, t) {
        var o = typeof i,
          a = "string" === o || Array.isArray(i);
        return "boolean" == typeof t && a
          ? t
            ? this.addClass(i)
            : this.removeClass(i)
          : m(i)
          ? this.each(function (e) {
              S(this).toggleClass(i.call(this, e, yt(this), t), t);
            })
          : this.each(function () {
              var e, t, n, r;
              if (a) {
                (t = 0), (n = S(this)), (r = mt(i));
                while ((e = r[t++]))
                  n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
              } else (void 0 !== i && "boolean" !== o) || ((e = yt(this)) && Y.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || ""));
            });
      },
      hasClass: function (e) {
        var t,
          n,
          r = 0;
        t = " " + e + " ";
        while ((n = this[r++]))
          if (1 === n.nodeType && -1 < (" " + vt(yt(n)) + " ").indexOf(t))
            return !0;
        return !1;
      },
    });
  var xt = /\r/g;
  S.fn.extend({
    val: function (n) {
      var r,
        e,
        i,
        t = this[0];
      return arguments.length
        ? ((i = m(n)),
          this.each(function (e) {
            var t;
            1 === this.nodeType &&
              (null == (t = i ? n.call(this, e, S(this).val()) : n)
                ? (t = "")
                : "number" == typeof t
                ? (t += "")
                : Array.isArray(t) &&
                  (t = S.map(t, function (e) {
                    return null == e ? "" : e + "";
                  })),
              ((r =
                S.valHooks[this.type] ||
                S.valHooks[this.nodeName.toLowerCase()]) &&
                "set" in r &&
                void 0 !== r.set(this, t, "value")) ||
                (this.value = t));
          }))
        : t
        ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) &&
          "get" in r &&
          void 0 !== (e = r.get(t, "value"))
          ? e
          : "string" == typeof (e = t.value)
          ? e.replace(xt, "")
          : null == e
          ? ""
          : e
        : void 0;
    },
  }),
    S.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = S.find.attr(e, "value");
            return null != t ? t : vt(S.text(e));
          },
        },
        select: {
          get: function (e) {
            var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = "select-one" === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length;
            for (r = o < 0 ? u : a ? o : 0; r < u; r++)
              if (
                ((n = i[r]).selected || r === o) &&
                !n.disabled &&
                (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))
              ) {
                if (((t = S(n).val()), a)) return t;
                s.push(t);
              }
            return s;
          },
          set: function (e, t) {
            var n,
              r,
              i = e.options,
              o = S.makeArray(t),
              a = i.length;
            while (a--)
              ((r = i[a]).selected =
                -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
            return n || (e.selectedIndex = -1), o;
          },
        },
      },
    }),
    S.each(["radio", "checkbox"], function () {
      (S.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t))
            return (e.checked = -1 < S.inArray(S(e).val(), t));
        },
      }),
        y.checkOn ||
          (S.valHooks[this].get = function (e) {
            return null === e.getAttribute("value") ? "on" : e.value;
          });
    }),
    (y.focusin = "onfocusin" in C);
  var bt = /^(?:focusinfocus|focusoutblur)$/,
    wt = function (e) {
      e.stopPropagation();
    };
  S.extend(S.event, {
    trigger: function (e, t, n, r) {
      var i,
        o,
        a,
        s,
        u,
        l,
        c,
        f,
        p = [n || E],
        d = v.call(e, "type") ? e.type : e,
        h = v.call(e, "namespace") ? e.namespace.split(".") : [];
      if (
        ((o = f = a = n = n || E),
        3 !== n.nodeType &&
          8 !== n.nodeType &&
          !bt.test(d + S.event.triggered) &&
          (-1 < d.indexOf(".") && ((d = (h = d.split(".")).shift()), h.sort()),
          (u = d.indexOf(":") < 0 && "on" + d),
          ((e = e[S.expando]
            ? e
            : new S.Event(d, "object" == typeof e && e)).isTrigger = r ? 2 : 3),
          (e.namespace = h.join(".")),
          (e.rnamespace = e.namespace
            ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (e.result = void 0),
          e.target || (e.target = n),
          (t = null == t ? [e] : S.makeArray(t, [e])),
          (c = S.event.special[d] || {}),
          r || !c.trigger || !1 !== c.trigger.apply(n, t)))
      ) {
        if (!r && !c.noBubble && !x(n)) {
          for (
            s = c.delegateType || d, bt.test(s + d) || (o = o.parentNode);
            o;
            o = o.parentNode
          )
            p.push(o), (a = o);
          a === (n.ownerDocument || E) &&
            p.push(a.defaultView || a.parentWindow || C);
        }
        i = 0;
        while ((o = p[i++]) && !e.isPropagationStopped())
          (f = o),
            (e.type = 1 < i ? s : c.bindType || d),
            (l =
              (Y.get(o, "events") || Object.create(null))[e.type] &&
              Y.get(o, "handle")) && l.apply(o, t),
            (l = u && o[u]) &&
              l.apply &&
              V(o) &&
              ((e.result = l.apply(o, t)),
              !1 === e.result && e.preventDefault());
        return (
          (e.type = d),
          r ||
            e.isDefaultPrevented() ||
            (c._default && !1 !== c._default.apply(p.pop(), t)) ||
            !V(n) ||
            (u &&
              m(n[d]) &&
              !x(n) &&
              ((a = n[u]) && (n[u] = null),
              (S.event.triggered = d),
              e.isPropagationStopped() && f.addEventListener(d, wt),
              n[d](),
              e.isPropagationStopped() && f.removeEventListener(d, wt),
              (S.event.triggered = void 0),
              a && (n[u] = a))),
          e.result
        );
      }
    },
    simulate: function (e, t, n) {
      var r = S.extend(new S.Event(), n, { type: e, isSimulated: !0 });
      S.event.trigger(r, null, t);
    },
  }),
    S.fn.extend({
      trigger: function (e, t) {
        return this.each(function () {
          S.event.trigger(e, t, this);
        });
      },
      triggerHandler: function (e, t) {
        var n = this[0];
        if (n) return S.event.trigger(e, t, n, !0);
      },
    }),
    y.focusin ||
      S.each({ focus: "focusin", blur: "focusout" }, function (n, r) {
        var i = function (e) {
          S.event.simulate(r, e.target, S.event.fix(e));
        };
        S.event.special[r] = {
          setup: function () {
            var e = this.ownerDocument || this.document || this,
              t = Y.access(e, r);
            t || e.addEventListener(n, i, !0), Y.access(e, r, (t || 0) + 1);
          },
          teardown: function () {
            var e = this.ownerDocument || this.document || this,
              t = Y.access(e, r) - 1;
            t
              ? Y.access(e, r, t)
              : (e.removeEventListener(n, i, !0), Y.remove(e, r));
          },
        };
      });
  var Tt = C.location,
    Ct = { guid: Date.now() },
    Et = /\?/;
  S.parseXML = function (e) {
    var t;
    if (!e || "string" != typeof e) return null;
    try {
      t = new C.DOMParser().parseFromString(e, "text/xml");
    } catch (e) {
      t = void 0;
    }
    return (
      (t && !t.getElementsByTagName("parsererror").length) ||
        S.error("Invalid XML: " + e),
      t
    );
  };
  var St = /\[\]$/,
    kt = /\r?\n/g,
    At = /^(?:submit|button|image|reset|file)$/i,
    Nt = /^(?:input|select|textarea|keygen)/i;
  function Dt(n, e, r, i) {
    var t;
    if (Array.isArray(e))
      S.each(e, function (e, t) {
        r || St.test(n)
          ? i(n, t)
          : Dt(
              n + "[" + ("object" == typeof t && null != t ? e : "") + "]",
              t,
              r,
              i
            );
      });
    else if (r || "object" !== w(e)) i(n, e);
    else for (t in e) Dt(n + "[" + t + "]", e[t], r, i);
  }
  (S.param = function (e, t) {
    var n,
      r = [],
      i = function (e, t) {
        var n = m(t) ? t() : t;
        r[r.length] =
          encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n);
      };
    if (null == e) return "";
    if (Array.isArray(e) || (e.jquery && !S.isPlainObject(e)))
      S.each(e, function () {
        i(this.name, this.value);
      });
    else for (n in e) Dt(n, e[n], t, i);
    return r.join("&");
  }),
    S.fn.extend({
      serialize: function () {
        return S.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = S.prop(this, "elements");
          return e ? S.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return (
              this.name &&
              !S(this).is(":disabled") &&
              Nt.test(this.nodeName) &&
              !At.test(e) &&
              (this.checked || !pe.test(e))
            );
          })
          .map(function (e, t) {
            var n = S(this).val();
            return null == n
              ? null
              : Array.isArray(n)
              ? S.map(n, function (e) {
                  return { name: t.name, value: e.replace(kt, "\r\n") };
                })
              : { name: t.name, value: n.replace(kt, "\r\n") };
          })
          .get();
      },
    });
  var jt = /%20/g,
    qt = /#.*$/,
    Lt = /([?&])_=[^&]*/,
    Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Ot = /^(?:GET|HEAD)$/,
    Pt = /^\/\//,
    Rt = {},
    Mt = {},
    It = "*/".concat("*"),
    Wt = E.createElement("a");
  function Ft(o) {
    return function (e, t) {
      "string" != typeof e && ((t = e), (e = "*"));
      var n,
        r = 0,
        i = e.toLowerCase().match(P) || [];
      if (m(t))
        while ((n = i[r++]))
          "+" === n[0]
            ? ((n = n.slice(1) || "*"), (o[n] = o[n] || []).unshift(t))
            : (o[n] = o[n] || []).push(t);
    };
  }
  function Bt(t, i, o, a) {
    var s = {},
      u = t === Mt;
    function l(e) {
      var r;
      return (
        (s[e] = !0),
        S.each(t[e] || [], function (e, t) {
          var n = t(i, o, a);
          return "string" != typeof n || u || s[n]
            ? u
              ? !(r = n)
              : void 0
            : (i.dataTypes.unshift(n), l(n), !1);
        }),
        r
      );
    }
    return l(i.dataTypes[0]) || (!s["*"] && l("*"));
  }
  function $t(e, t) {
    var n,
      r,
      i = S.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    return r && S.extend(!0, e, r), e;
  }
  (Wt.href = Tt.href),
    S.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: Tt.href,
        type: "GET",
        isLocal:
          /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
            Tt.protocol
          ),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": It,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": JSON.parse,
          "text xml": S.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? $t($t(e, S.ajaxSettings), t) : $t(S.ajaxSettings, e);
      },
      ajaxPrefilter: Ft(Rt),
      ajaxTransport: Ft(Mt),
      ajax: function (e, t) {
        "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
        var c,
          f,
          p,
          n,
          d,
          r,
          h,
          g,
          i,
          o,
          v = S.ajaxSetup({}, t),
          y = v.context || v,
          m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event,
          x = S.Deferred(),
          b = S.Callbacks("once memory"),
          w = v.statusCode || {},
          a = {},
          s = {},
          u = "canceled",
          T = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (h) {
                if (!n) {
                  n = {};
                  while ((t = Ht.exec(p)))
                    n[t[1].toLowerCase() + " "] = (
                      n[t[1].toLowerCase() + " "] || []
                    ).concat(t[2]);
                }
                t = n[e.toLowerCase() + " "];
              }
              return null == t ? null : t.join(", ");
            },
            getAllResponseHeaders: function () {
              return h ? p : null;
            },
            setRequestHeader: function (e, t) {
              return (
                null == h &&
                  ((e = s[e.toLowerCase()] = s[e.toLowerCase()] || e),
                  (a[e] = t)),
                this
              );
            },
            overrideMimeType: function (e) {
              return null == h && (v.mimeType = e), this;
            },
            statusCode: function (e) {
              var t;
              if (e)
                if (h) T.always(e[T.status]);
                else for (t in e) w[t] = [w[t], e[t]];
              return this;
            },
            abort: function (e) {
              var t = e || u;
              return c && c.abort(t), l(0, t), this;
            },
          };
        if (
          (x.promise(T),
          (v.url = ((e || v.url || Tt.href) + "").replace(
            Pt,
            Tt.protocol + "//"
          )),
          (v.type = t.method || t.type || v.method || v.type),
          (v.dataTypes = (v.dataType || "*").toLowerCase().match(P) || [""]),
          null == v.crossDomain)
        ) {
          r = E.createElement("a");
          try {
            (r.href = v.url),
              (r.href = r.href),
              (v.crossDomain =
                Wt.protocol + "//" + Wt.host != r.protocol + "//" + r.host);
          } catch (e) {
            v.crossDomain = !0;
          }
        }
        if (
          (v.data &&
            v.processData &&
            "string" != typeof v.data &&
            (v.data = S.param(v.data, v.traditional)),
          Bt(Rt, v, t, T),
          h)
        )
          return T;
        for (i in ((g = S.event && v.global) &&
          0 == S.active++ &&
          S.event.trigger("ajaxStart"),
        (v.type = v.type.toUpperCase()),
        (v.hasContent = !Ot.test(v.type)),
        (f = v.url.replace(qt, "")),
        v.hasContent
          ? v.data &&
            v.processData &&
            0 ===
              (v.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
            (v.data = v.data.replace(jt, "+"))
          : ((o = v.url.slice(f.length)),
            v.data &&
              (v.processData || "string" == typeof v.data) &&
              ((f += (Et.test(f) ? "&" : "?") + v.data), delete v.data),
            !1 === v.cache &&
              ((f = f.replace(Lt, "$1")),
              (o = (Et.test(f) ? "&" : "?") + "_=" + Ct.guid++ + o)),
            (v.url = f + o)),
        v.ifModified &&
          (S.lastModified[f] &&
            T.setRequestHeader("If-Modified-Since", S.lastModified[f]),
          S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])),
        ((v.data && v.hasContent && !1 !== v.contentType) || t.contentType) &&
          T.setRequestHeader("Content-Type", v.contentType),
        T.setRequestHeader(
          "Accept",
          v.dataTypes[0] && v.accepts[v.dataTypes[0]]
            ? v.accepts[v.dataTypes[0]] +
                ("*" !== v.dataTypes[0] ? ", " + It + "; q=0.01" : "")
            : v.accepts["*"]
        ),
        v.headers))
          T.setRequestHeader(i, v.headers[i]);
        if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h))
          return T.abort();
        if (
          ((u = "abort"),
          b.add(v.complete),
          T.done(v.success),
          T.fail(v.error),
          (c = Bt(Mt, v, t, T)))
        ) {
          if (((T.readyState = 1), g && m.trigger("ajaxSend", [T, v]), h))
            return T;
          v.async &&
            0 < v.timeout &&
            (d = C.setTimeout(function () {
              T.abort("timeout");
            }, v.timeout));
          try {
            (h = !1), c.send(a, l);
          } catch (e) {
            if (h) throw e;
            l(-1, e);
          }
        } else l(-1, "No Transport");
        function l(e, t, n, r) {
          var i,
            o,
            a,
            s,
            u,
            l = t;
          h ||
            ((h = !0),
            d && C.clearTimeout(d),
            (c = void 0),
            (p = r || ""),
            (T.readyState = 0 < e ? 4 : 0),
            (i = (200 <= e && e < 300) || 304 === e),
            n &&
              (s = (function (e, t, n) {
                var r,
                  i,
                  o,
                  a,
                  s = e.contents,
                  u = e.dataTypes;
                while ("*" === u[0])
                  u.shift(),
                    void 0 === r &&
                      (r = e.mimeType || t.getResponseHeader("Content-Type"));
                if (r)
                  for (i in s)
                    if (s[i] && s[i].test(r)) {
                      u.unshift(i);
                      break;
                    }
                if (u[0] in n) o = u[0];
                else {
                  for (i in n) {
                    if (!u[0] || e.converters[i + " " + u[0]]) {
                      o = i;
                      break;
                    }
                    a || (a = i);
                  }
                  o = o || a;
                }
                if (o) return o !== u[0] && u.unshift(o), n[o];
              })(v, T, n)),
            !i &&
              -1 < S.inArray("script", v.dataTypes) &&
              (v.converters["text script"] = function () {}),
            (s = (function (e, t, n, r) {
              var i,
                o,
                a,
                s,
                u,
                l = {},
                c = e.dataTypes.slice();
              if (c[1])
                for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
              o = c.shift();
              while (o)
                if (
                  (e.responseFields[o] && (n[e.responseFields[o]] = t),
                  !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                  (u = o),
                  (o = c.shift()))
                )
                  if ("*" === o) o = u;
                  else if ("*" !== u && u !== o) {
                    if (!(a = l[u + " " + o] || l["* " + o]))
                      for (i in l)
                        if (
                          (s = i.split(" "))[1] === o &&
                          (a = l[u + " " + s[0]] || l["* " + s[0]])
                        ) {
                          !0 === a
                            ? (a = l[i])
                            : !0 !== l[i] && ((o = s[0]), c.unshift(s[1]));
                          break;
                        }
                    if (!0 !== a)
                      if (a && e["throws"]) t = a(t);
                      else
                        try {
                          t = a(t);
                        } catch (e) {
                          return {
                            state: "parsererror",
                            error: a
                              ? e
                              : "No conversion from " + u + " to " + o,
                          };
                        }
                  }
              return { state: "success", data: t };
            })(v, s, T, i)),
            i
              ? (v.ifModified &&
                  ((u = T.getResponseHeader("Last-Modified")) &&
                    (S.lastModified[f] = u),
                  (u = T.getResponseHeader("etag")) && (S.etag[f] = u)),
                204 === e || "HEAD" === v.type
                  ? (l = "nocontent")
                  : 304 === e
                  ? (l = "notmodified")
                  : ((l = s.state), (o = s.data), (i = !(a = s.error))))
              : ((a = l), (!e && l) || ((l = "error"), e < 0 && (e = 0))),
            (T.status = e),
            (T.statusText = (t || l) + ""),
            i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]),
            T.statusCode(w),
            (w = void 0),
            g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]),
            b.fireWith(y, [T, l]),
            g &&
              (m.trigger("ajaxComplete", [T, v]),
              --S.active || S.event.trigger("ajaxStop")));
        }
        return T;
      },
      getJSON: function (e, t, n) {
        return S.get(e, t, n, "json");
      },
      getScript: function (e, t) {
        return S.get(e, void 0, t, "script");
      },
    }),
    S.each(["get", "post"], function (e, i) {
      S[i] = function (e, t, n, r) {
        return (
          m(t) && ((r = r || n), (n = t), (t = void 0)),
          S.ajax(
            S.extend(
              { url: e, type: i, dataType: r, data: t, success: n },
              S.isPlainObject(e) && e
            )
          )
        );
      };
    }),
    S.ajaxPrefilter(function (e) {
      var t;
      for (t in e.headers)
        "content-type" === t.toLowerCase() &&
          (e.contentType = e.headers[t] || "");
    }),
    (S._evalUrl = function (e, t, n) {
      return S.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        cache: !0,
        async: !1,
        global: !1,
        converters: { "text script": function () {} },
        dataFilter: function (e) {
          S.globalEval(e, t, n);
        },
      });
    }),
    S.fn.extend({
      wrapAll: function (e) {
        var t;
        return (
          this[0] &&
            (m(e) && (e = e.call(this[0])),
            (t = S(e, this[0].ownerDocument).eq(0).clone(!0)),
            this[0].parentNode && t.insertBefore(this[0]),
            t
              .map(function () {
                var e = this;
                while (e.firstElementChild) e = e.firstElementChild;
                return e;
              })
              .append(this)),
          this
        );
      },
      wrapInner: function (n) {
        return m(n)
          ? this.each(function (e) {
              S(this).wrapInner(n.call(this, e));
            })
          : this.each(function () {
              var e = S(this),
                t = e.contents();
              t.length ? t.wrapAll(n) : e.append(n);
            });
      },
      wrap: function (t) {
        var n = m(t);
        return this.each(function (e) {
          S(this).wrapAll(n ? t.call(this, e) : t);
        });
      },
      unwrap: function (e) {
        return (
          this.parent(e)
            .not("body")
            .each(function () {
              S(this).replaceWith(this.childNodes);
            }),
          this
        );
      },
    }),
    (S.expr.pseudos.hidden = function (e) {
      return !S.expr.pseudos.visible(e);
    }),
    (S.expr.pseudos.visible = function (e) {
      return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length);
    }),
    (S.ajaxSettings.xhr = function () {
      try {
        return new C.XMLHttpRequest();
      } catch (e) {}
    });
  var _t = { 0: 200, 1223: 204 },
    zt = S.ajaxSettings.xhr();
  (y.cors = !!zt && "withCredentials" in zt),
    (y.ajax = zt = !!zt),
    S.ajaxTransport(function (i) {
      var o, a;
      if (y.cors || (zt && !i.crossDomain))
        return {
          send: function (e, t) {
            var n,
              r = i.xhr();
            if (
              (r.open(i.type, i.url, i.async, i.username, i.password),
              i.xhrFields)
            )
              for (n in i.xhrFields) r[n] = i.xhrFields[n];
            for (n in (i.mimeType &&
              r.overrideMimeType &&
              r.overrideMimeType(i.mimeType),
            i.crossDomain ||
              e["X-Requested-With"] ||
              (e["X-Requested-With"] = "XMLHttpRequest"),
            e))
              r.setRequestHeader(n, e[n]);
            (o = function (e) {
              return function () {
                o &&
                  ((o =
                    a =
                    r.onload =
                    r.onerror =
                    r.onabort =
                    r.ontimeout =
                    r.onreadystatechange =
                      null),
                  "abort" === e
                    ? r.abort()
                    : "error" === e
                    ? "number" != typeof r.status
                      ? t(0, "error")
                      : t(r.status, r.statusText)
                    : t(
                        _t[r.status] || r.status,
                        r.statusText,
                        "text" !== (r.responseType || "text") ||
                          "string" != typeof r.responseText
                          ? { binary: r.response }
                          : { text: r.responseText },
                        r.getAllResponseHeaders()
                      ));
              };
            }),
              (r.onload = o()),
              (a = r.onerror = r.ontimeout = o("error")),
              void 0 !== r.onabort
                ? (r.onabort = a)
                : (r.onreadystatechange = function () {
                    4 === r.readyState &&
                      C.setTimeout(function () {
                        o && a();
                      });
                  }),
              (o = o("abort"));
            try {
              r.send((i.hasContent && i.data) || null);
            } catch (e) {
              if (o) throw e;
            }
          },
          abort: function () {
            o && o();
          },
        };
    }),
    S.ajaxPrefilter(function (e) {
      e.crossDomain && (e.contents.script = !1);
    }),
    S.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        "text script": function (e) {
          return S.globalEval(e), e;
        },
      },
    }),
    S.ajaxPrefilter("script", function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
    }),
    S.ajaxTransport("script", function (n) {
      var r, i;
      if (n.crossDomain || n.scriptAttrs)
        return {
          send: function (e, t) {
            (r = S("<script>")
              .attr(n.scriptAttrs || {})
              .prop({ charset: n.scriptCharset, src: n.url })
              .on(
                "load error",
                (i = function (e) {
                  r.remove(),
                    (i = null),
                    e && t("error" === e.type ? 404 : 200, e.type);
                })
              )),
              E.head.appendChild(r[0]);
          },
          abort: function () {
            i && i();
          },
        };
    });
  var Ut,
    Xt = [],
    Vt = /(=)\?(?=&|$)|\?\?/;
  S.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var e = Xt.pop() || S.expando + "_" + Ct.guid++;
      return (this[e] = !0), e;
    },
  }),
    S.ajaxPrefilter("json jsonp", function (e, t, n) {
      var r,
        i,
        o,
        a =
          !1 !== e.jsonp &&
          (Vt.test(e.url)
            ? "url"
            : "string" == typeof e.data &&
              0 ===
                (e.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) &&
              Vt.test(e.data) &&
              "data");
      if (a || "jsonp" === e.dataTypes[0])
        return (
          (r = e.jsonpCallback =
            m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
          a
            ? (e[a] = e[a].replace(Vt, "$1" + r))
            : !1 !== e.jsonp &&
              (e.url += (Et.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
          (e.converters["script json"] = function () {
            return o || S.error(r + " was not called"), o[0];
          }),
          (e.dataTypes[0] = "json"),
          (i = C[r]),
          (C[r] = function () {
            o = arguments;
          }),
          n.always(function () {
            void 0 === i ? S(C).removeProp(r) : (C[r] = i),
              e[r] && ((e.jsonpCallback = t.jsonpCallback), Xt.push(r)),
              o && m(i) && i(o[0]),
              (o = i = void 0);
          }),
          "script"
        );
    }),
    (y.createHTMLDocument =
      (((Ut = E.implementation.createHTMLDocument("").body).innerHTML =
        "<form></form><form></form>"),
      2 === Ut.childNodes.length)),
    (S.parseHTML = function (e, t, n) {
      return "string" != typeof e
        ? []
        : ("boolean" == typeof t && ((n = t), (t = !1)),
          t ||
            (y.createHTMLDocument
              ? (((r = (t =
                  E.implementation.createHTMLDocument("")).createElement(
                  "base"
                )).href = E.location.href),
                t.head.appendChild(r))
              : (t = E)),
          (o = !n && []),
          (i = N.exec(e))
            ? [t.createElement(i[1])]
            : ((i = xe([e], t, o)),
              o && o.length && S(o).remove(),
              S.merge([], i.childNodes)));
      var r, i, o;
    }),
    (S.fn.load = function (e, t, n) {
      var r,
        i,
        o,
        a = this,
        s = e.indexOf(" ");
      return (
        -1 < s && ((r = vt(e.slice(s))), (e = e.slice(0, s))),
        m(t)
          ? ((n = t), (t = void 0))
          : t && "object" == typeof t && (i = "POST"),
        0 < a.length &&
          S.ajax({ url: e, type: i || "GET", dataType: "html", data: t })
            .done(function (e) {
              (o = arguments),
                a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e);
            })
            .always(
              n &&
                function (e, t) {
                  a.each(function () {
                    n.apply(this, o || [e.responseText, t, e]);
                  });
                }
            ),
        this
      );
    }),
    (S.expr.pseudos.animated = function (t) {
      return S.grep(S.timers, function (e) {
        return t === e.elem;
      }).length;
    }),
    (S.offset = {
      setOffset: function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          u,
          l = S.css(e, "position"),
          c = S(e),
          f = {};
        "static" === l && (e.style.position = "relative"),
          (s = c.offset()),
          (o = S.css(e, "top")),
          (u = S.css(e, "left")),
          ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto")
            ? ((a = (r = c.position()).top), (i = r.left))
            : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
          m(t) && (t = t.call(e, n, S.extend({}, s))),
          null != t.top && (f.top = t.top - s.top + a),
          null != t.left && (f.left = t.left - s.left + i),
          "using" in t
            ? t.using.call(e, f)
            : ("number" == typeof f.top && (f.top += "px"),
              "number" == typeof f.left && (f.left += "px"),
              c.css(f));
      },
    }),
    S.fn.extend({
      offset: function (t) {
        if (arguments.length)
          return void 0 === t
            ? this
            : this.each(function (e) {
                S.offset.setOffset(this, t, e);
              });
        var e,
          n,
          r = this[0];
        return r
          ? r.getClientRects().length
            ? ((e = r.getBoundingClientRect()),
              (n = r.ownerDocument.defaultView),
              { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset })
            : { top: 0, left: 0 }
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n,
            r = this[0],
            i = { top: 0, left: 0 };
          if ("fixed" === S.css(r, "position")) t = r.getBoundingClientRect();
          else {
            (t = this.offset()),
              (n = r.ownerDocument),
              (e = r.offsetParent || n.documentElement);
            while (
              e &&
              (e === n.body || e === n.documentElement) &&
              "static" === S.css(e, "position")
            )
              e = e.parentNode;
            e &&
              e !== r &&
              1 === e.nodeType &&
              (((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0)),
              (i.left += S.css(e, "borderLeftWidth", !0)));
          }
          return {
            top: t.top - i.top - S.css(r, "marginTop", !0),
            left: t.left - i.left - S.css(r, "marginLeft", !0),
          };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          var e = this.offsetParent;
          while (e && "static" === S.css(e, "position")) e = e.offsetParent;
          return e || re;
        });
      },
    }),
    S.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (t, i) {
        var o = "pageYOffset" === i;
        S.fn[t] = function (e) {
          return $(
            this,
            function (e, t, n) {
              var r;
              if (
                (x(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView),
                void 0 === n)
              )
                return r ? r[i] : e[t];
              r
                ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset)
                : (e[t] = n);
            },
            t,
            e,
            arguments.length
          );
        };
      }
    ),
    S.each(["top", "left"], function (e, n) {
      S.cssHooks[n] = $e(y.pixelPosition, function (e, t) {
        if (t)
          return (t = Be(e, n)), Me.test(t) ? S(e).position()[n] + "px" : t;
      });
    }),
    S.each({ Height: "height", Width: "width" }, function (a, s) {
      S.each(
        { padding: "inner" + a, content: s, "": "outer" + a },
        function (r, o) {
          S.fn[o] = function (e, t) {
            var n = arguments.length && (r || "boolean" != typeof e),
              i = r || (!0 === e || !0 === t ? "margin" : "border");
            return $(
              this,
              function (e, t, n) {
                var r;
                return x(e)
                  ? 0 === o.indexOf("outer")
                    ? e["inner" + a]
                    : e.document.documentElement["client" + a]
                  : 9 === e.nodeType
                  ? ((r = e.documentElement),
                    Math.max(
                      e.body["scroll" + a],
                      r["scroll" + a],
                      e.body["offset" + a],
                      r["offset" + a],
                      r["client" + a]
                    ))
                  : void 0 === n
                  ? S.css(e, t, i)
                  : S.style(e, t, n, i);
              },
              s,
              n ? e : void 0,
              n
            );
          };
        }
      );
    }),
    S.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (e, t) {
        S.fn[t] = function (e) {
          return this.on(t, e);
        };
      }
    ),
    S.fn.extend({
      bind: function (e, t, n) {
        return this.on(e, null, t, n);
      },
      unbind: function (e, t) {
        return this.off(e, null, t);
      },
      delegate: function (e, t, n, r) {
        return this.on(t, e, n, r);
      },
      undelegate: function (e, t, n) {
        return 1 === arguments.length
          ? this.off(e, "**")
          : this.off(t, e || "**", n);
      },
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    }),
    S.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
        " "
      ),
      function (e, n) {
        S.fn[n] = function (e, t) {
          return 0 < arguments.length
            ? this.on(n, null, e, t)
            : this.trigger(n);
        };
      }
    );
  var Gt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  (S.proxy = function (e, t) {
    var n, r, i;
    if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), m(e)))
      return (
        (r = s.call(arguments, 2)),
        ((i = function () {
          return e.apply(t || this, r.concat(s.call(arguments)));
        }).guid = e.guid =
          e.guid || S.guid++),
        i
      );
  }),
    (S.holdReady = function (e) {
      e ? S.readyWait++ : S.ready(!0);
    }),
    (S.isArray = Array.isArray),
    (S.parseJSON = JSON.parse),
    (S.nodeName = A),
    (S.isFunction = m),
    (S.isWindow = x),
    (S.camelCase = X),
    (S.type = w),
    (S.now = Date.now),
    (S.isNumeric = function (e) {
      var t = S.type(e);
      return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e));
    }),
    (S.trim = function (e) {
      return null == e ? "" : (e + "").replace(Gt, "");
    }),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return S;
      });
  var Yt = C.jQuery,
    Qt = C.$;
  return (
    (S.noConflict = function (e) {
      return C.$ === S && (C.$ = Qt), e && C.jQuery === S && (C.jQuery = Yt), S;
    }),
    "undefined" == typeof e && (C.jQuery = C.$ = S),
    S
  );
});

/* End of /jquery.min.js*/
/* Start of /Bootstrap/bootstrap.js */
try {
  if ($telerik.$) {
    window.$ = $telerik.$;
  }
} catch (err) {}
try {
  if ($telerik.$) {
    window.jQuery = $telerik.$;
  }
} catch (err) {}
if ("undefined" == typeof jQuery) {
  throw new Error("Bootstrap's JavaScript requires jQuery");
}
+(function (t) {
  var e = t.fn.jquery.split(" ")[0].split(".");
  if ((e[0] < 2 && e[1] < 9) || (1 == e[0] && 9 == e[1] && e[2] < 1)) {
    throw new Error(
      "Bootstrap's JavaScript requires jQuery version 1.9.1 or higher"
    );
  }
})(jQuery),
  +(function (t) {
    function e(e) {
      return this.each(function () {
        var i = t(this),
          s = i.data("bs.alert");
        s || i.data("bs.alert", (s = new o(this))),
          "string" == typeof e && s[e].call(i);
      });
    }
    var i = '[data-dismiss="alert"]',
      o = function (e) {
        t(e).on("click", i, this.close);
      };
    (o.VERSION = "3.3.1"),
      (o.TRANSITION_DURATION = 150),
      (o.prototype.close = function (e) {
        function i() {
          a.detach().trigger("closed.bs.alert").remove();
        }
        var s = t(this),
          n = s.attr("data-target");
        n || ((n = s.attr("href")), (n = n && n.replace(/.*(?=#[^\s]*$)/, "")));
        var a = t(n);
        e && e.preventDefault(),
          a.length || (a = s.closest(".alert")),
          a.trigger((e = t.Event("close.bs.alert"))),
          e.isDefaultPrevented() ||
            (a.removeClass("in"),
            t.support.transition && a.hasClass("fade")
              ? a
                  .one("bsTransitionEnd", i)
                  .emulateTransitionEnd(o.TRANSITION_DURATION)
              : i());
      });
    var s = t.fn.alert;
    (t.fn.alert = e),
      (t.fn.alert.Constructor = o),
      (t.fn.alert.noConflict = function () {
        return (t.fn.alert = s), this;
      }),
      t(document).on("click.bs.alert.data-api", i, o.prototype.close);
  })(jQuery),
  +(function (t) {
    function e(e) {
      return this.each(function () {
        var o = t(this),
          s = o.data("bs.button"),
          n = "object" == typeof e && e;
        s || o.data("bs.button", (s = new i(this, n))),
          "toggle" == e ? s.toggle() : e && s.setState(e);
      });
    }
    var i = function (e, o) {
      (this.$element = t(e)),
        (this.options = t.extend({}, i.DEFAULTS, o)),
        (this.isLoading = !1);
    };
    (i.VERSION = "3.3.1"),
      (i.DEFAULTS = { loadingText: "loading..." }),
      (i.prototype.setState = function (e) {
        var i = "disabled",
          o = this.$element,
          s = o.is("input") ? "val" : "html",
          n = o.data();
        (e += "Text"),
          null == n.resetText && o.data("resetText", o[s]()),
          setTimeout(
            t.proxy(function () {
              o[s](null == n[e] ? this.options[e] : n[e]),
                "loadingText" == e
                  ? ((this.isLoading = !0), o.addClass(i).attr(i, i))
                  : this.isLoading &&
                    ((this.isLoading = !1), o.removeClass(i).removeAttr(i));
            }, this),
            0
          );
      }),
      (i.prototype.toggle = function () {
        var t = !0,
          e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
          var i = this.$element.find("input");
          "radio" == i.prop("type") &&
            (i.prop("checked") && this.$element.hasClass("active")
              ? (t = !1)
              : e.find(".active").removeClass("active")),
            t &&
              i
                .prop("checked", !this.$element.hasClass("active"))
                .trigger("change");
        } else {
          this.$element.attr("aria-pressed", !this.$element.hasClass("active"));
        }
        t && this.$element.toggleClass("active");
      });
    var o = t.fn.button;
    (t.fn.button = e),
      (t.fn.button.Constructor = i),
      (t.fn.button.noConflict = function () {
        return (t.fn.button = o), this;
      }),
      t(document)
        .on(
          "click.bs.button.data-api",
          '[data-toggle^="button"]',
          function (i) {
            var o = t(i.target);
            o.hasClass("btn") || (o = o.closest(".btn")),
              e.call(o, "toggle"),
              i.preventDefault();
          }
        )
        .on(
          "focus.bs.button.data-api blur.bs.button.data-api",
          '[data-toggle^="button"]',
          function (e) {
            t(e.target)
              .closest(".btn")
              .toggleClass("focus", /^focus(in)?$/.test(e.type));
          }
        );
  })(jQuery),
  +(function (t) {
    function e(e) {
      return this.each(function () {
        var o = t(this),
          s = o.data("bs.carousel"),
          n = t.extend({}, i.DEFAULTS, o.data(), "object" == typeof e && e),
          a = "string" == typeof e ? e : n.slide;
        s || o.data("bs.carousel", (s = new i(this, n))),
          "number" == typeof e
            ? s.to(e)
            : a
            ? s[a]()
            : n.interval && s.pause().cycle();
      });
    }
    var i = function (e, i) {
      (this.$element = t(e)),
        (this.$indicators = this.$element.find(".carousel-indicators")),
        (this.options = i),
        (this.paused =
          this.sliding =
          this.interval =
          this.$active =
          this.$items =
            null),
        this.options.keyboard &&
          this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)),
        "hover" == this.options.pause &&
          !("ontouchstart" in document.documentElement) &&
          this.$element
            .on("mouseenter.bs.carousel", t.proxy(this.pause, this))
            .on("mouseleave.bs.carousel", t.proxy(this.cycle, this));
    };
    (i.VERSION = "3.3.1"),
      (i.TRANSITION_DURATION = 600),
      (i.DEFAULTS = { interval: 5000, pause: "hover", wrap: !0, keyboard: !0 }),
      (i.prototype.keydown = function (t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
          switch (t.which) {
            case 37:
              this.prev();
              break;
            case 39:
              this.next();
              break;
            default:
              return;
          }
          t.preventDefault();
        }
      }),
      (i.prototype.cycle = function (e) {
        return (
          e || (this.paused = !1),
          this.interval && clearInterval(this.interval),
          this.options.interval &&
            !this.paused &&
            (this.interval = setInterval(
              t.proxy(this.next, this),
              this.options.interval
            )),
          this
        );
      }),
      (i.prototype.getItemIndex = function (t) {
        return (
          (this.$items = t.parent().children(".item")),
          this.$items.index(t || this.$active)
        );
      }),
      (i.prototype.getItemForDirection = function (t, e) {
        var i = "prev" == t ? -1 : 1,
          o = this.getItemIndex(e),
          s = (o + i) % this.$items.length;
        return this.$items.eq(s);
      }),
      (i.prototype.to = function (t) {
        var e = this,
          i = this.getItemIndex(
            (this.$active = this.$element.find(".item.active"))
          );
        return t > this.$items.length - 1 || 0 > t
          ? void 0
          : this.sliding
          ? this.$element.one("slid.bs.carousel", function () {
              e.to(t);
            })
          : i == t
          ? this.pause().cycle()
          : this.slide(t > i ? "next" : "prev", this.$items.eq(t));
      }),
      (i.prototype.pause = function (e) {
        return (
          e || (this.paused = !0),
          this.$element.find(".next, .prev").length &&
            t.support.transition &&
            (this.$element.trigger(t.support.transition.end), this.cycle(!0)),
          (this.interval = clearInterval(this.interval)),
          this
        );
      }),
      (i.prototype.next = function () {
        return this.sliding ? void 0 : this.slide("next");
      }),
      (i.prototype.prev = function () {
        return this.sliding ? void 0 : this.slide("prev");
      }),
      (i.prototype.slide = function (e, o) {
        var s = this.$element.find(".item.active"),
          n = o || this.getItemForDirection(e, s),
          a = this.interval,
          r = "next" == e ? "left" : "right",
          l = "next" == e ? "first" : "last",
          h = this;
        if (!n.length) {
          if (!this.options.wrap) {
            return;
          }
          n = this.$element.find(".item")[l]();
        }
        if (n.hasClass("active")) {
          return (this.sliding = !1);
        }
        var d = n[0],
          p = t.Event("slide.bs.carousel", { relatedTarget: d, direction: r });
        if ((this.$element.trigger(p), !p.isDefaultPrevented())) {
          if (
            ((this.sliding = !0), a && this.pause(), this.$indicators.length)
          ) {
            this.$indicators.find(".active").removeClass("active");
            var c = t(this.$indicators.children()[this.getItemIndex(n)]);
            c && c.addClass("active");
          }
          var f = t.Event("slid.bs.carousel", {
            relatedTarget: d,
            direction: r,
          });
          return (
            t.support.transition && this.$element.hasClass("slide")
              ? (n.addClass(e),
                n[0].offsetWidth,
                s.addClass(r),
                n.addClass(r),
                s
                  .one("bsTransitionEnd", function () {
                    n.removeClass([e, r].join(" ")).addClass("active"),
                      s.removeClass(["active", r].join(" ")),
                      (h.sliding = !1),
                      setTimeout(function () {
                        h.$element.trigger(f);
                      }, 0);
                  })
                  .emulateTransitionEnd(i.TRANSITION_DURATION))
              : (s.removeClass("active"),
                n.addClass("active"),
                (this.sliding = !1),
                this.$element.trigger(f)),
            a && this.cycle(),
            this
          );
        }
      });
    var o = t.fn.carousel;
    (t.fn.carousel = e),
      (t.fn.carousel.Constructor = i),
      (t.fn.carousel.noConflict = function () {
        return (t.fn.carousel = o), this;
      });
    var s = function (i) {
      var o,
        s = t(this),
        n = t(
          s.attr("data-target") ||
            ((o = s.attr("href")) && o.replace(/.*(?=#[^\s]+$)/, ""))
        );
      if (n.hasClass("carousel")) {
        var a = t.extend({}, n.data(), s.data()),
          r = s.attr("data-slide-to");
        r && (a.interval = !1),
          e.call(n, a),
          r && n.data("bs.carousel").to(r),
          i.preventDefault();
      }
    };
    t(document)
      .on("click.bs.carousel.data-api", "[data-slide]", s)
      .on("click.bs.carousel.data-api", "[data-slide-to]", s),
      t(window).on("load", function () {
        t('[data-ride="carousel"]').each(function () {
          var i = t(this);
          e.call(i, i.data());
        });
      });
  })(jQuery),
  +(function (t) {
    function e(e) {
      (e && 3 === e.which) ||
        (t(s).remove(),
        t(n).each(function () {
          var o = t(this),
            s = i(o),
            n = { relatedTarget: this };
          s.hasClass("open") &&
            (s.trigger((e = t.Event("hide.bs.dropdown", n))),
            e.isDefaultPrevented() ||
              (o.attr("aria-expanded", "false"),
              s.removeClass("open").trigger("hidden.bs.dropdown", n)));
        }));
    }
    function i(e) {
      var i = e.attr("data-target");
      i ||
        ((i = e.attr("href")),
        (i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, "")));
      var o = i && t(i);
      return o && o.length ? o : e.parent();
    }
    function o(e) {
      return this.each(function () {
        var i = t(this),
          o = i.data("bs.dropdown");
        o || i.data("bs.dropdown", (o = new a(this))),
          "string" == typeof e && o[e].call(i);
      });
    }
    var s = ".dropdown-backdrop",
      n = '[data-toggle="dropdown"]',
      a = function (e) {
        t(e).on("click.bs.dropdown", this.toggle);
      };
    (a.VERSION = "3.3.1"),
      (a.prototype.toggle = function (o) {
        var s = t(this);
        if (!s.is(".disabled, :disabled")) {
          var n = i(s),
            a = n.hasClass("open");
          if ((e(), !a)) {
            "ontouchstart" in document.documentElement &&
              !n.closest(".navbar-nav").length &&
              t('<div class="dropdown-backdrop"/>')
                .insertAfter(t(this))
                .on("click", e);
            var r = { relatedTarget: this };
            if (
              (n.trigger((o = t.Event("show.bs.dropdown", r))),
              o.isDefaultPrevented())
            ) {
              return;
            }
            s.trigger("focus").attr("aria-expanded", "true"),
              n.toggleClass("open").trigger("shown.bs.dropdown", r);
          }
          return !1;
        }
      }),
      (a.prototype.keydown = function (e) {
        if (
          /(38|40|27|32)/.test(e.which) &&
          !/input|textarea/i.test(e.target.tagName)
        ) {
          var o = t(this);
          if (
            (e.preventDefault(),
            e.stopPropagation(),
            !o.is(".disabled, :disabled"))
          ) {
            var s = i(o),
              a = s.hasClass("open");
            if ((!a && 27 != e.which) || (a && 27 == e.which)) {
              return (
                27 == e.which && s.find(n).trigger("focus"), o.trigger("click")
              );
            }
            var r = " li:not(.divider):visible a",
              l = s.find('[role="menu"]' + r + ', [role="listbox"]' + r);
            if (l.length) {
              var h = l.index(e.target);
              38 == e.which && h > 0 && h--,
                40 == e.which && h < l.length - 1 && h++,
                ~h || (h = 0),
                l.eq(h).trigger("focus");
            }
          }
        }
      });
    var r = t.fn.dropdown;
    (t.fn.dropdown = o),
      (t.fn.dropdown.Constructor = a),
      (t.fn.dropdown.noConflict = function () {
        return (t.fn.dropdown = r), this;
      }),
      t(document)
        .on("click.bs.dropdown.data-api", e)
        .on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
          t.stopPropagation();
        })
        .on("click.bs.dropdown.data-api", n, a.prototype.toggle)
        .on("keydown.bs.dropdown.data-api", n, a.prototype.keydown)
        .on(
          "keydown.bs.dropdown.data-api",
          '[role="menu"]',
          a.prototype.keydown
        )
        .on(
          "keydown.bs.dropdown.data-api",
          '[role="listbox"]',
          a.prototype.keydown
        );
  })(jQuery),
  +(function (t) {
    function e(e, o) {
      return this.each(function () {
        var s = t(this),
          n = s.data("bs.modal"),
          a = t.extend({}, i.DEFAULTS, s.data(), "object" == typeof e && e);
        n || s.data("bs.modal", (n = new i(this, a))),
          "string" == typeof e ? n[e](o) : a.show && n.show(o);
      });
    }
    var i = function (e, i) {
      (this.options = i),
        (this.$body = t(document.body)),
        (this.$element = t(e)),
        (this.$backdrop = this.isShown = null),
        (this.scrollbarWidth = 0),
        this.options.remote &&
          this.$element.find(".modal-content").load(
            this.options.remote,
            t.proxy(function () {
              this.$element.trigger("loaded.bs.modal");
            }, this)
          );
    };
    (i.VERSION = "3.3.1"),
      (i.TRANSITION_DURATION = 300),
      (i.BACKDROP_TRANSITION_DURATION = 150),
      (i.DEFAULTS = { backdrop: !0, keyboard: !0, show: !0 }),
      (i.prototype.toggle = function (t) {
        return this.isShown ? this.hide() : this.show(t);
      }),
      (i.prototype.show = function (e) {
        var o = this,
          s = t.Event("show.bs.modal", { relatedTarget: e });
        this.$element.trigger(s),
          this.isShown ||
            s.isDefaultPrevented() ||
            ((this.isShown = !0),
            this.checkScrollbar(),
            this.setScrollbar(),
            this.$body.addClass("modal-open"),
            this.escape(),
            this.resize(),
            this.$element.on(
              "click.dismiss.bs.modal",
              '[data-dismiss="modal"]',
              t.proxy(this.hide, this)
            ),
            this.backdrop(function () {
              var s = t.support.transition && o.$element.hasClass("fade");
              o.$element.parent().length || o.$element.appendTo(o.$body),
                o.$element.show().scrollTop(0),
                o.options.backdrop && o.adjustBackdrop(),
                o.adjustDialog(),
                s && o.$element[0].offsetWidth,
                o.$element.addClass("in").attr("aria-hidden", !1),
                o.enforceFocus();
              var n = t.Event("shown.bs.modal", { relatedTarget: e });
              s
                ? o.$element
                    .find(".modal-dialog")
                    .one("bsTransitionEnd", function () {
                      o.$element.trigger("focus").trigger(n);
                    })
                    .emulateTransitionEnd(i.TRANSITION_DURATION)
                : o.$element.trigger("focus").trigger(n);
            }));
      }),
      (i.prototype.hide = function (e) {
        e && e.preventDefault(),
          (e = t.Event("hide.bs.modal")),
          this.$element.trigger(e),
          this.isShown &&
            !e.isDefaultPrevented() &&
            ((this.isShown = !1),
            this.escape(),
            this.resize(),
            t(document).off("focusin.bs.modal"),
            this.$element
              .removeClass("in")
              .attr("aria-hidden", !0)
              .off("click.dismiss.bs.modal"),
            t.support.transition && this.$element.hasClass("fade")
              ? this.$element
                  .one("bsTransitionEnd", t.proxy(this.hideModal, this))
                  .emulateTransitionEnd(i.TRANSITION_DURATION)
              : this.hideModal());
      }),
      (i.prototype.enforceFocus = function () {
        t(document)
          .off("focusin.bs.modal")
          .on(
            "focusin.bs.modal",
            t.proxy(function (t) {
              this.$element[0] === t.target ||
                this.$element.has(t.target).length ||
                this.$element.trigger("focus");
            }, this)
          );
      }),
      (i.prototype.escape = function () {
        this.isShown && this.options.keyboard
          ? this.$element.on(
              "keydown.dismiss.bs.modal",
              t.proxy(function (t) {
                27 == t.which && this.hide();
              }, this)
            )
          : this.isShown || this.$element.off("keydown.dismiss.bs.modal");
      }),
      (i.prototype.resize = function () {
        this.isShown
          ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this))
          : t(window).off("resize.bs.modal");
      }),
      (i.prototype.hideModal = function () {
        var t = this;
        this.$element.hide(),
          this.backdrop(function () {
            t.$body.removeClass("modal-open"),
              t.resetAdjustments(),
              t.resetScrollbar(),
              t.$element.trigger("hidden.bs.modal");
          });
      }),
      (i.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), (this.$backdrop = null);
      }),
      (i.prototype.backdrop = function (e) {
        var o = this,
          s = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
          var n = t.support.transition && s;
          if (
            ((this.$backdrop = t('<div class="modal-backdrop ' + s + '" />')
              .prependTo(this.$element)
              .on(
                "click.dismiss.bs.modal",
                t.proxy(function (t) {
                  t.target === t.currentTarget &&
                    ("static" == this.options.backdrop
                      ? this.$element[0].focus.call(this.$element[0])
                      : this.hide.call(this));
                }, this)
              )),
            n && this.$backdrop[0].offsetWidth,
            this.$backdrop.addClass("in"),
            !e)
          ) {
            return;
          }
          n
            ? this.$backdrop
                .one("bsTransitionEnd", e)
                .emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION)
            : e();
        } else {
          if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var a = function () {
              o.removeBackdrop(), e && e();
            };
            t.support.transition && this.$element.hasClass("fade")
              ? this.$backdrop
                  .one("bsTransitionEnd", a)
                  .emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION)
              : a();
          } else {
            e && e();
          }
        }
      }),
      (i.prototype.handleUpdate = function () {
        this.options.backdrop && this.adjustBackdrop(), this.adjustDialog();
      }),
      (i.prototype.adjustBackdrop = function () {
        this.$backdrop
          .css("height", 0)
          .css("height", this.$element[0].scrollHeight);
      }),
      (i.prototype.adjustDialog = function () {
        var t =
          this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
          paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
          paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : "",
        });
      }),
      (i.prototype.resetAdjustments = function () {
        this.$element.css({ paddingLeft: "", paddingRight: "" });
      }),
      (i.prototype.checkScrollbar = function () {
        (this.bodyIsOverflowing =
          document.body.scrollHeight > document.documentElement.clientHeight),
          (this.scrollbarWidth = this.measureScrollbar());
      }),
      (i.prototype.setScrollbar = function () {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.bodyIsOverflowing &&
          this.$body.css("padding-right", t + this.scrollbarWidth);
      }),
      (i.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", "");
      }),
      (i.prototype.measureScrollbar = function () {
        var t = document.createElement("div");
        (t.className = "modal-scrollbar-measure"), this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e;
      });
    var o = t.fn.modal;
    (t.fn.modal = e),
      (t.fn.modal.Constructor = i),
      (t.fn.modal.noConflict = function () {
        return (t.fn.modal = o), this;
      }),
      t(document).on(
        "click.bs.modal.data-api",
        '[data-toggle="modal"]',
        function (i) {
          var o = t(this),
            s = o.attr("href"),
            n = t(
              o.attr("data-target") || (s && s.replace(/.*(?=#[^\s]+$)/, ""))
            ),
            a = n.data("bs.modal")
              ? "toggle"
              : t.extend({ remote: !/#/.test(s) && s }, n.data(), o.data());
          o.is("a") && i.preventDefault(),
            n.one("show.bs.modal", function (t) {
              t.isDefaultPrevented() ||
                n.one("hidden.bs.modal", function () {
                  o.is(":visible") && o.trigger("focus");
                });
            }),
            e.call(n, a, this);
        }
      );
  })(jQuery),
  +(function (t) {
    function e(e) {
      return this.each(function () {
        var o = t(this),
          s = o.data("bs.tooltip"),
          n = "object" == typeof e && e,
          a = n && n.selector;
        (s || "destroy" != e) &&
          (a
            ? (s || o.data("bs.tooltip", (s = {})),
              s[a] || (s[a] = new i(this, n)))
            : s || o.data("bs.tooltip", (s = new i(this, n))),
          "string" == typeof e && s[e]());
      });
    }
    var i = function (t, e) {
      (this.type =
        this.options =
        this.enabled =
        this.timeout =
        this.hoverState =
        this.$element =
          null),
        this.init("tooltip", t, e);
    };
    (i.VERSION = "3.3.1"),
      (i.TRANSITION_DURATION = 150),
      (i.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template:
          '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: { selector: "body", padding: 0 },
      }),
      (i.prototype.init = function (e, i, o) {
        (this.enabled = !0),
          (this.type = e),
          (this.$element = t(i)),
          (this.options = this.getOptions(o)),
          (this.$viewport =
            this.options.viewport &&
            t(this.options.viewport.selector || this.options.viewport));
        for (var s = this.options.trigger.split(" "), n = s.length; n--; ) {
          var a = s[n];
          if ("click" == a) {
            this.$element.on(
              "click." + this.type,
              this.options.selector,
              t.proxy(this.toggle, this)
            );
          } else {
            if ("manual" != a) {
              var r = "hover" == a ? "mouseenter" : "focusin",
                l = "hover" == a ? "mouseleave" : "focusout";
              this.$element.on(
                r + "." + this.type,
                this.options.selector,
                t.proxy(this.enter, this)
              ),
                this.$element.on(
                  l + "." + this.type,
                  this.options.selector,
                  t.proxy(this.leave, this)
                );
            }
          }
        }
        this.options.selector
          ? (this._options = t.extend({}, this.options, {
              trigger: "manual",
              selector: "",
            }))
          : this.fixTitle();
      }),
      (i.prototype.getDefaults = function () {
        return i.DEFAULTS;
      }),
      (i.prototype.getOptions = function (e) {
        return (
          (e = t.extend({}, this.getDefaults(), this.$element.data(), e)),
          e.delay &&
            "number" == typeof e.delay &&
            (e.delay = { show: e.delay, hide: e.delay }),
          e
        );
      }),
      (i.prototype.getDelegateOptions = function () {
        var e = {},
          i = this.getDefaults();
        return (
          this._options &&
            t.each(this._options, function (t, o) {
              i[t] != o && (e[t] = o);
            }),
          e
        );
      }),
      (i.prototype.enter = function (e) {
        var i =
          e instanceof this.constructor
            ? e
            : t(e.currentTarget).data("bs." + this.type);
        return i && i.$tip && i.$tip.is(":visible")
          ? void (i.hoverState = "in")
          : (i ||
              ((i = new this.constructor(
                e.currentTarget,
                this.getDelegateOptions()
              )),
              t(e.currentTarget).data("bs." + this.type, i)),
            clearTimeout(i.timeout),
            (i.hoverState = "in"),
            i.options.delay && i.options.delay.show
              ? void (i.timeout = setTimeout(function () {
                  "in" == i.hoverState && i.show();
                }, i.options.delay.show))
              : i.show());
      }),
      (i.prototype.leave = function (e) {
        var i =
          e instanceof this.constructor
            ? e
            : t(e.currentTarget).data("bs." + this.type);
        return (
          i ||
            ((i = new this.constructor(
              e.currentTarget,
              this.getDelegateOptions()
            )),
            t(e.currentTarget).data("bs." + this.type, i)),
          clearTimeout(i.timeout),
          (i.hoverState = "out"),
          i.options.delay && i.options.delay.hide
            ? void (i.timeout = setTimeout(function () {
                "out" == i.hoverState && i.hide();
              }, i.options.delay.hide))
            : i.hide()
        );
      }),
      (i.prototype.show = function () {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
          this.$element.trigger(e);
          var o = t.contains(
            this.$element[0].ownerDocument.documentElement,
            this.$element[0]
          );
          if (e.isDefaultPrevented() || !o) {
            return;
          }
          var s = this,
            n = this.tip(),
            a = this.getUID(this.type);
          this.setContent(),
            n.attr("id", a),
            this.$element.attr("aria-describedby", a),
            this.options.animation && n.addClass("fade");
          var r =
              "function" == typeof this.options.placement
                ? this.options.placement.call(this, n[0], this.$element[0])
                : this.options.placement,
            l = /\s?auto?\s?/i,
            h = l.test(r);
          h && (r = r.replace(l, "") || "top"),
            n
              .detach()
              .css({ top: 0, left: 0, display: "block" })
              .addClass(r)
              .data("bs." + this.type, this),
            this.options.container
              ? n.appendTo(this.options.container)
              : n.insertAfter(this.$element);
          var d = this.getPosition(),
            p = n[0].offsetWidth,
            c = n[0].offsetHeight;
          if (h) {
            var f = r,
              u = this.options.container
                ? t(this.options.container)
                : this.$element.parent(),
              g = this.getPosition(u);
            (r =
              "bottom" == r && d.bottom + c > g.bottom
                ? "top"
                : "top" == r && d.top - c < g.top
                ? "bottom"
                : "right" == r && d.right + p > g.width
                ? "left"
                : "left" == r && d.left - p < g.left
                ? "right"
                : r),
              n.removeClass(f).addClass(r);
          }
          var v = this.getCalculatedOffset(r, d, p, c);
          this.applyPlacement(v, r);
          var m = function () {
            var t = s.hoverState;
            s.$element.trigger("shown.bs." + s.type),
              (s.hoverState = null),
              "out" == t && s.leave(s);
          };
          t.support.transition && this.$tip.hasClass("fade")
            ? n
                .one("bsTransitionEnd", m)
                .emulateTransitionEnd(i.TRANSITION_DURATION)
            : m();
        }
      }),
      (i.prototype.applyPlacement = function (e, i) {
        var o = this.tip(),
          s = o[0].offsetWidth,
          n = o[0].offsetHeight,
          a = parseInt(o.css("margin-top"), 10),
          r = parseInt(o.css("margin-left"), 10);
        isNaN(a) && (a = 0),
          isNaN(r) && (r = 0),
          (e.top = e.top + a),
          (e.left = e.left + r),
          t.offset.setOffset(
            o[0],
            t.extend(
              {
                using: function (t) {
                  o.css({ top: Math.round(t.top), left: Math.round(t.left) });
                },
              },
              e
            ),
            0
          ),
          o.addClass("in");
        var l = o[0].offsetWidth,
          h = o[0].offsetHeight;
        "top" == i && h != n && (e.top = e.top + n - h);
        var d = this.getViewportAdjustedDelta(i, e, l, h);
        d.left ? (e.left += d.left) : (e.top += d.top);
        var p = /top|bottom/.test(i),
          c = p ? 2 * d.left - s + l : 2 * d.top - n + h,
          f = p ? "offsetWidth" : "offsetHeight";
        o.offset(e), this.replaceArrow(c, o[0][f], p);
      }),
      (i.prototype.replaceArrow = function (t, e, i) {
        this.arrow()
          .css(i ? "left" : "top", 50 * (1 - t / e) + "%")
          .css(i ? "top" : "left", "");
      }),
      (i.prototype.setContent = function () {
        var t = this.tip(),
          e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e),
          t.removeClass("fade in top bottom left right");
      }),
      (i.prototype.hide = function (e) {
        function o() {
          "in" != s.hoverState && n.detach(),
            s.$element
              .removeAttr("aria-describedby")
              .trigger("hidden.bs." + s.type),
            e && e();
        }
        var s = this,
          n = this.tip(),
          a = t.Event("hide.bs." + this.type);
        return (
          this.$element.trigger(a),
          a.isDefaultPrevented()
            ? void 0
            : (n.removeClass("in"),
              t.support.transition && this.$tip.hasClass("fade")
                ? n
                    .one("bsTransitionEnd", o)
                    .emulateTransitionEnd(i.TRANSITION_DURATION)
                : o(),
              (this.hoverState = null),
              this)
        );
      }),
      (i.prototype.fixTitle = function () {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) &&
          t
            .attr("data-original-title", t.attr("title") || "")
            .attr("title", "");
      }),
      (i.prototype.hasContent = function () {
        return this.getTitle();
      }),
      (i.prototype.getPosition = function (e) {
        e = e || this.$element;
        var i = e[0],
          o = "BODY" == i.tagName,
          s = i.getBoundingClientRect();
        null == s.width &&
          (s = t.extend({}, s, {
            width: s.right - s.left,
            height: s.bottom - s.top,
          }));
        var n = o ? { top: 0, left: 0 } : e.offset(),
          a = {
            scroll: o
              ? document.documentElement.scrollTop || document.body.scrollTop
              : e.scrollTop(),
          },
          r = o
            ? { width: t(window).width(), height: t(window).height() }
            : null;
        return t.extend({}, s, a, r, n);
      }),
      (i.prototype.getCalculatedOffset = function (t, e, i, o) {
        return "bottom" == t
          ? { top: e.top + e.height, left: e.left + e.width / 2 - i / 2 }
          : "top" == t
          ? { top: e.top - o, left: e.left + e.width / 2 - i / 2 }
          : "left" == t
          ? { top: e.top + e.height / 2 - o / 2, left: e.left - i }
          : { top: e.top + e.height / 2 - o / 2, left: e.left + e.width };
      }),
      (i.prototype.getViewportAdjustedDelta = function (t, e, i, o) {
        var s = { top: 0, left: 0 };
        if (!this.$viewport) {
          return s;
        }
        var n = (this.options.viewport && this.options.viewport.padding) || 0,
          a = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
          var r = e.top - n - a.scroll,
            l = e.top + n - a.scroll + o;
          r < a.top
            ? (s.top = a.top - r)
            : l > a.top + a.height && (s.top = a.top + a.height - l);
        } else {
          var h = e.left - n,
            d = e.left + n + i;
          h < a.left
            ? (s.left = a.left - h)
            : d > a.width && (s.left = a.left + a.width - d);
        }
        return s;
      }),
      (i.prototype.getTitle = function () {
        var t,
          e = this.$element,
          i = this.options;
        return (t =
          e.attr("data-original-title") ||
          ("function" == typeof i.title ? i.title.call(e[0]) : i.title));
      }),
      (i.prototype.getUID = function (t) {
        do t += ~~(1000000 * Math.random());
        while (document.getElementById(t));
        return t;
      }),
      (i.prototype.tip = function () {
        return (this.$tip = this.$tip || t(this.options.template));
      }),
      (i.prototype.arrow = function () {
        return (this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow"));
      }),
      (i.prototype.enable = function () {
        this.enabled = !0;
      }),
      (i.prototype.disable = function () {
        this.enabled = !1;
      }),
      (i.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled;
      }),
      (i.prototype.toggle = function (e) {
        var i = this;
        e &&
          ((i = t(e.currentTarget).data("bs." + this.type)),
          i ||
            ((i = new this.constructor(
              e.currentTarget,
              this.getDelegateOptions()
            )),
            t(e.currentTarget).data("bs." + this.type, i))),
          i.tip().hasClass("in") ? i.leave(i) : i.enter(i);
      }),
      (i.prototype.destroy = function () {
        var t = this;
        clearTimeout(this.timeout),
          this.hide(function () {
            t.$element.off("." + t.type).removeData("bs." + t.type);
          });
      });
    var o = t.fn.tooltip;
    (t.fn.tooltip = e),
      (t.fn.tooltip.Constructor = i),
      (t.fn.tooltip.noConflict = function () {
        return (t.fn.tooltip = o), this;
      });
  })(jQuery),
  +(function (t) {
    function e(e) {
      return this.each(function () {
        var o = t(this),
          s = o.data("bs.popover"),
          n = "object" == typeof e && e,
          a = n && n.selector;
        (s || "destroy" != e) &&
          (a
            ? (s || o.data("bs.popover", (s = {})),
              s[a] || (s[a] = new i(this, n)))
            : s || o.data("bs.popover", (s = new i(this, n))),
          "string" == typeof e && s[e]());
      });
    }
    var i = function (t, e) {
      this.init("popover", t, e);
    };
    if (!t.fn.tooltip) {
      throw new Error("Popover requires tooltip.js");
    }
    (i.VERSION = "3.3.1"),
      (i.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template:
          '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>',
      })),
      (i.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype)),
      (i.prototype.constructor = i),
      (i.prototype.getDefaults = function () {
        return i.DEFAULTS;
      }),
      (i.prototype.setContent = function () {
        var t = this.tip(),
          e = this.getTitle(),
          i = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e),
          t
            .find(".popover-content")
            .children()
            .detach()
            .end()
            [
              this.options.html
                ? "string" == typeof i
                  ? "html"
                  : "append"
                : "text"
            ](i),
          t.removeClass("fade top bottom left right in"),
          t.find(".popover-title").html() || t.find(".popover-title").hide();
      }),
      (i.prototype.hasContent = function () {
        return this.getTitle() || this.getContent();
      }),
      (i.prototype.getContent = function () {
        var t = this.$element,
          e = this.options;
        return (
          t.attr("data-content") ||
          ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
        );
      }),
      (i.prototype.arrow = function () {
        return (this.$arrow = this.$arrow || this.tip().find(".arrow"));
      }),
      (i.prototype.tip = function () {
        return this.$tip || (this.$tip = t(this.options.template)), this.$tip;
      });
    var o = t.fn.popover;
    (t.fn.popover = e),
      (t.fn.popover.Constructor = i),
      (t.fn.popover.noConflict = function () {
        return (t.fn.popover = o), this;
      });
  })(jQuery),
  +(function (t) {
    function e(e) {
      return this.each(function () {
        var o = t(this),
          s = o.data("bs.tab");
        s || o.data("bs.tab", (s = new i(this))),
          "string" == typeof e && s[e]();
      });
    }
    var i = function (e) {
      this.element = t(e);
    };
    (i.VERSION = "3.3.1"),
      (i.TRANSITION_DURATION = 150),
      (i.prototype.show = function () {
        var e = this.element,
          i = e.closest("ul:not(.dropdown-menu)"),
          o = e.data("target");
        if (
          (o ||
            ((o = e.attr("href")), (o = o && o.replace(/.*(?=#[^\s]*$)/, ""))),
          !e.parent("li").hasClass("active"))
        ) {
          var s = i.find(".active:last a"),
            n = t.Event("hide.bs.tab", { relatedTarget: e[0] }),
            a = t.Event("show.bs.tab", { relatedTarget: s[0] });
          if (
            (s.trigger(n),
            e.trigger(a),
            !a.isDefaultPrevented() && !n.isDefaultPrevented())
          ) {
            var r = t(o);
            this.activate(e.closest("li"), i),
              this.activate(r, r.parent(), function () {
                s.trigger({ type: "hidden.bs.tab", relatedTarget: e[0] }),
                  e.trigger({ type: "shown.bs.tab", relatedTarget: s[0] });
              });
          }
        }
      }),
      (i.prototype.activate = function (e, o, s) {
        function n() {
          a
            .removeClass("active")
            .find("> .dropdown-menu > .active")
            .removeClass("active")
            .end()
            .find('[data-toggle="tab"]')
            .attr("aria-expanded", !1),
            e
              .addClass("active")
              .find('[data-toggle="tab"]')
              .attr("aria-expanded", !0),
            r ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"),
            e.parent(".dropdown-menu") &&
              e
                .closest("li.dropdown")
                .addClass("active")
                .end()
                .find('[data-toggle="tab"]')
                .attr("aria-expanded", !0),
            s && s();
        }
        var a = o.find("> .active"),
          r =
            s &&
            t.support.transition &&
            ((a.length && a.hasClass("fade")) || !!o.find("> .fade").length);
        a.length && r
          ? a
              .one("bsTransitionEnd", n)
              .emulateTransitionEnd(i.TRANSITION_DURATION)
          : n(),
          a.removeClass("in");
      });
    var o = t.fn.tab;
    (t.fn.tab = e),
      (t.fn.tab.Constructor = i),
      (t.fn.tab.noConflict = function () {
        return (t.fn.tab = o), this;
      });
    var s = function (i) {
      i.preventDefault(), e.call(t(this), "show");
    };
    t(document)
      .on("click.bs.tab.data-api", '[data-toggle="tab"]', s)
      .on("click.bs.tab.data-api", '[data-toggle="pill"]', s);
  })(jQuery),
  +(function (t) {
    function e(e) {
      return this.each(function () {
        var o = t(this),
          s = o.data("bs.affix"),
          n = "object" == typeof e && e;
        s || o.data("bs.affix", (s = new i(this, n))),
          "string" == typeof e && s[e]();
      });
    }
    var i = function (e, o) {
      (this.options = t.extend({}, i.DEFAULTS, o)),
        (this.$target = t(this.options.target)
          .on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this))
          .on(
            "click.bs.affix.data-api",
            t.proxy(this.checkPositionWithEventLoop, this)
          )),
        (this.$element = t(e)),
        (this.affixed = this.unpin = this.pinnedOffset = null),
        this.checkPosition();
    };
    (i.VERSION = "3.3.1"),
      (i.RESET = "affix affix-top affix-bottom"),
      (i.DEFAULTS = { offset: 0, target: window }),
      (i.prototype.getState = function (t, e, i, o) {
        var s = this.$target.scrollTop(),
          n = this.$element.offset(),
          a = this.$target.height();
        if (null != i && "top" == this.affixed) {
          return i > s ? "top" : !1;
        }
        if ("bottom" == this.affixed) {
          return null != i
            ? s + this.unpin <= n.top
              ? !1
              : "bottom"
            : t - o >= s + a
            ? !1
            : "bottom";
        }
        var r = null == this.affixed,
          l = r ? s : n.top,
          h = r ? a : e;
        return null != i && i >= l
          ? "top"
          : null != o && l + h >= t - o
          ? "bottom"
          : !1;
      }),
      (i.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset) {
          return this.pinnedOffset;
        }
        this.$element.removeClass(i.RESET).addClass("affix");
        var t = this.$target.scrollTop(),
          e = this.$element.offset();
        return (this.pinnedOffset = e.top - t);
      }),
      (i.prototype.checkPositionWithEventLoop = function () {
        setTimeout(t.proxy(this.checkPosition, this), 1);
      }),
      (i.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
          var e = this.$element.height(),
            o = this.options.offset,
            s = o.top,
            n = o.bottom,
            a = t("body").height();
          "object" != typeof o && (n = s = o),
            "function" == typeof s && (s = o.top(this.$element)),
            "function" == typeof n && (n = o.bottom(this.$element));
          var r = this.getState(a, e, s, n);
          if (this.affixed != r) {
            null != this.unpin && this.$element.css("top", "");
            var l = "affix" + (r ? "-" + r : ""),
              h = t.Event(l + ".bs.affix");
            if ((this.$element.trigger(h), h.isDefaultPrevented())) {
              return;
            }
            (this.affixed = r),
              (this.unpin = "bottom" == r ? this.getPinnedOffset() : null),
              this.$element
                .removeClass(i.RESET)
                .addClass(l)
                .trigger(l.replace("affix", "affixed") + ".bs.affix");
          }
          "bottom" == r && this.$element.offset({ top: a - e - n });
        }
      });
    var o = t.fn.affix;
    (t.fn.affix = e),
      (t.fn.affix.Constructor = i),
      (t.fn.affix.noConflict = function () {
        return (t.fn.affix = o), this;
      }),
      t(window).on("load", function () {
        t('[data-spy="affix"]').each(function () {
          var i = t(this),
            o = i.data();
          (o.offset = o.offset || {}),
            null != o.offsetBottom && (o.offset.bottom = o.offsetBottom),
            null != o.offsetTop && (o.offset.top = o.offsetTop),
            e.call(i, o);
        });
      });
  })(jQuery),
  +(function (t) {
    function e(e) {
      var i,
        o =
          e.attr("data-target") ||
          ((i = e.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, ""));
      return t(o);
    }
    function i(e) {
      return this.each(function () {
        var i = t(this),
          s = i.data("bs.collapse"),
          n = t.extend({}, o.DEFAULTS, i.data(), "object" == typeof e && e);
        !s && n.toggle && "show" == e && (n.toggle = !1),
          s || i.data("bs.collapse", (s = new o(this, n))),
          "string" == typeof e && s[e]();
      });
    }
    var o = function (e, i) {
      (this.$element = t(e)),
        (this.options = t.extend({}, o.DEFAULTS, i)),
        (this.$trigger = t(this.options.trigger).filter(
          '[href="#' + e.id + '"], [data-target="#' + e.id + '"]'
        )),
        (this.transitioning = null),
        this.options.parent
          ? (this.$parent = this.getParent())
          : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
        this.options.toggle && this.toggle();
    };
    (o.VERSION = "3.3.1"),
      (o.TRANSITION_DURATION = 350),
      (o.DEFAULTS = { toggle: !0, trigger: '[data-toggle="collapse"]' }),
      (o.prototype.dimension = function () {
        var t = this.$element.hasClass("width");
        return t ? "width" : "height";
      }),
      (o.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
          var e,
            s =
              this.$parent &&
              this.$parent.find("> .panel").children(".in, .collapsing");
          if (
            !(
              s &&
              s.length &&
              ((e = s.data("bs.collapse")), e && e.transitioning)
            )
          ) {
            var n = t.Event("show.bs.collapse");
            if ((this.$element.trigger(n), !n.isDefaultPrevented())) {
              s &&
                s.length &&
                (i.call(s, "hide"), e || s.data("bs.collapse", null));
              var a = this.dimension();
              this.$element
                .removeClass("collapse")
                .addClass("collapsing")
                [a](0)
                .attr("aria-expanded", !0),
                this.$trigger
                  .removeClass("collapsed")
                  .attr("aria-expanded", !0),
                (this.transitioning = 1);
              var r = function () {
                this.$element
                  .removeClass("collapsing")
                  .addClass("collapse in")
                  [a](""),
                  (this.transitioning = 0),
                  this.$element.trigger("shown.bs.collapse");
              };
              if (!t.support.transition) {
                return r.call(this);
              }
              var l = t.camelCase(["scroll", a].join("-"));
              this.$element
                .one("bsTransitionEnd", t.proxy(r, this))
                .emulateTransitionEnd(o.TRANSITION_DURATION)
                [a](this.$element[0][l]);
            }
          }
        }
      }),
      (o.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
          var e = t.Event("hide.bs.collapse");
          if ((this.$element.trigger(e), !e.isDefaultPrevented())) {
            var i = this.dimension();
            this.$element[i](this.$element[i]())[0].offsetHeight,
              this.$element
                .addClass("collapsing")
                .removeClass("collapse in")
                .attr("aria-expanded", !1),
              this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
              (this.transitioning = 1);
            var s = function () {
              (this.transitioning = 0),
                this.$element
                  .removeClass("collapsing")
                  .addClass("collapse")
                  .trigger("hidden.bs.collapse");
            };
            return t.support.transition
              ? void this.$element[i](0)
                  .one("bsTransitionEnd", t.proxy(s, this))
                  .emulateTransitionEnd(o.TRANSITION_DURATION)
              : s.call(this);
          }
        }
      }),
      (o.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]();
      }),
      (o.prototype.getParent = function () {
        return t(this.options.parent)
          .find(
            '[data-toggle="collapse"][data-parent="' +
              this.options.parent +
              '"]'
          )
          .each(
            t.proxy(function (i, o) {
              var s = t(o);
              this.addAriaAndCollapsedClass(e(s), s);
            }, this)
          )
          .end();
      }),
      (o.prototype.addAriaAndCollapsedClass = function (t, e) {
        var i = t.hasClass("in");
        t.attr("aria-expanded", i),
          e.toggleClass("collapsed", !i).attr("aria-expanded", i);
      });
    var s = t.fn.collapse;
    (t.fn.collapse = i),
      (t.fn.collapse.Constructor = o),
      (t.fn.collapse.noConflict = function () {
        return (t.fn.collapse = s), this;
      }),
      t(document).on(
        "click.bs.collapse.data-api",
        '[data-toggle="collapse"]',
        function (o) {
          var s = t(this);
          s.attr("data-target") || o.preventDefault();
          var n = e(s),
            a = n.data("bs.collapse"),
            r = a ? "toggle" : t.extend({}, s.data(), { trigger: this });
          i.call(n, r);
        }
      );
  })(jQuery),
  +(function (t) {
    function e(i, o) {
      var s = t.proxy(this.process, this);
      (this.$body = t("body")),
        (this.$scrollElement = t(t(i).is("body") ? window : i)),
        (this.options = t.extend({}, e.DEFAULTS, o)),
        (this.selector = (this.options.target || "") + " .nav li > a"),
        (this.offsets = []),
        (this.targets = []),
        (this.activeTarget = null),
        (this.scrollHeight = 0),
        this.$scrollElement.on("scroll.bs.scrollspy", s),
        this.refresh(),
        this.process();
    }
    function i(i) {
      return this.each(function () {
        var o = t(this),
          s = o.data("bs.scrollspy"),
          n = "object" == typeof i && i;
        s || o.data("bs.scrollspy", (s = new e(this, n))),
          "string" == typeof i && s[i]();
      });
    }
    (e.VERSION = "3.3.1"),
      (e.DEFAULTS = { offset: 10 }),
      (e.prototype.getScrollHeight = function () {
        return (
          this.$scrollElement[0].scrollHeight ||
          Math.max(
            this.$body[0].scrollHeight,
            document.documentElement.scrollHeight
          )
        );
      }),
      (e.prototype.refresh = function () {
        var e = "offset",
          i = 0;
        t.isWindow(this.$scrollElement[0]) ||
          ((e = "position"), (i = this.$scrollElement.scrollTop())),
          (this.offsets = []),
          (this.targets = []),
          (this.scrollHeight = this.getScrollHeight());
        var o = this;
        this.$body
          .find(this.selector)
          .map(function () {
            var o = t(this),
              s = o.data("target") || o.attr("href"),
              n = /^#./.test(s) && t(s);
            return (
              (n && n.length && n.is(":visible") && [[n[e]().top + i, s]]) ||
              null
            );
          })
          .sort(function (t, e) {
            return t[0] - e[0];
          })
          .each(function () {
            o.offsets.push(this[0]), o.targets.push(this[1]);
          });
      }),
      (e.prototype.process = function () {
        var t,
          e = this.$scrollElement.scrollTop() + this.options.offset,
          i = this.getScrollHeight(),
          o = this.options.offset + i - this.$scrollElement.height(),
          s = this.offsets,
          n = this.targets,
          a = this.activeTarget;
        if ((this.scrollHeight != i && this.refresh(), e >= o)) {
          return a != (t = n[n.length - 1]) && this.activate(t);
        }
        if (a && e < s[0]) {
          return (this.activeTarget = null), this.clear();
        }
        for (t = s.length; t--; ) {
          a != n[t] &&
            e >= s[t] &&
            (!s[t + 1] || e <= s[t + 1]) &&
            this.activate(n[t]);
        }
      }),
      (e.prototype.activate = function (e) {
        (this.activeTarget = e), this.clear();
        var i =
            this.selector +
            '[data-target="' +
            e +
            '"],' +
            this.selector +
            '[href="' +
            e +
            '"]',
          o = t(i).parents("li").addClass("active");
        o.parent(".dropdown-menu").length &&
          (o = o.closest("li.dropdown").addClass("active")),
          o.trigger("activate.bs.scrollspy");
      }),
      (e.prototype.clear = function () {
        t(this.selector)
          .parentsUntil(this.options.target, ".active")
          .removeClass("active");
      });
    var o = t.fn.scrollspy;
    (t.fn.scrollspy = i),
      (t.fn.scrollspy.Constructor = e),
      (t.fn.scrollspy.noConflict = function () {
        return (t.fn.scrollspy = o), this;
      }),
      t(window).on("load.bs.scrollspy.data-api", function () {
        t('[data-spy="scroll"]').each(function () {
          var e = t(this);
          i.call(e, e.data());
        });
      });
  })(jQuery),
  +(function (t) {
    function e() {
      var t = document.createElement("bootstrap"),
        e = {
          WebkitTransition: "webkitTransitionEnd",
          MozTransition: "transitionend",
          OTransition: "oTransitionEnd otransitionend",
          transition: "transitionend",
        };
      for (var i in e) {
        if (void 0 !== t.style[i]) {
          return { end: e[i] };
        }
      }
      return !1;
    }
    (t.fn.emulateTransitionEnd = function (e) {
      var i = !1,
        o = this;
      t(this).one("bsTransitionEnd", function () {
        i = !0;
      });
      var s = function () {
        i || t(o).trigger(t.support.transition.end);
      };
      return setTimeout(s, e), this;
    }),
      t(function () {
        (t.support.transition = e()),
          t.support.transition &&
            (t.event.special.bsTransitionEnd = {
              bindType: t.support.transition.end,
              delegateType: t.support.transition.end,
              handle: function (e) {
                return t(e.target).is(this)
                  ? e.handleObj.handler.apply(this, arguments)
                  : void 0;
              },
            });
      });
  })(jQuery);
$(document).ready(function () {
  $('a[data-toggle="tab"]').on("shown.bs.tab", function (e) {
    var url = new String(e.target);
    var selectedTab = url.split("#")[1];
    var selectedTabIndex = $("[aria-controls=" + selectedTab + "]")
      .parent()
      .index();
    var previousUrl = new String(e.relatedTarget);
    var previousTab = previousUrl.split("#")[1];
    var previousTabIndex = $("[aria-controls=" + previousTab + "]")
      .parent()
      .index();
    var width = $("#" + selectedTab).outerWidth();
    if (previousTabIndex > selectedTabIndex) {
      $("#" + selectedTab).css("left", "+" + width + "px");
    } else {
      $("#" + selectedTab).css("left", "-" + width + "px");
    }
    var left = $("#" + selectedTab).offset().left;
    $("#" + selectedTab)
      .css({ left: left })
      .animate({ left: "0px" }, "fast");
  });
});
/* End of /Bootstrap/bootstrap.js*/
/* Start of /Bootstrap/bootstrap-tabcollapse.js */
try {
  if ($telerik.$) {
    window.$ = $telerik.$;
  }
} catch (err) {}
$(document).ready(function () {
  !(function ($) {
    "use strict";
    var TabCollapse = function (el, options) {
      this.options = options;
      this.$tabs = $(el);
      if (options.alwaysAccordion) {
        this.options.accordionClass = "";
        this.options.tabsClass = "hidden";
      }
      this._accordionVisible = false;
      this._initAccordion();
      this._checkStateOnResize();
      this.checkState();
    };
    TabCollapse.DEFAULTS = {
      accordionClass: "visible-xs",
      tabsClass: "hidden-xs",
      accordionTemplate: function (
        heading,
        groupId,
        parentId,
        active,
        isHidden,
        cssClass
      ) {
        var template =
          '<div class="panel panel-default accordion-caret ' +
          cssClass +
          (isHidden ? ' hidden"' : '"') +
          ">" +
          '   <div class="panel-heading accordion-toggle ' +
          cssClass +
          (active ? " active collapsed" : " collapsed") +
          '" data-toggle="collapse" data-target="#' +
          groupId +
          '">' +
          "           " +
          heading +
          "   </div>" +
          '   <div  id="' +
          groupId +
          '" class="panel-collapse collapse ' +
          cssClass +
          (active ? " active" : "") +
          '">' +
          '       <div class="panel-body js-tabcollapse-panel-body">' +
          "       </div>" +
          "   </div>" +
          "</div>";
        return template;
      },
    };
    TabCollapse.prototype.checkState = function () {
      if (this.options.alwaysAccordion) {
        this.showAccordion();
        this._accordionVisible = true;
      } else {
        if (this.$tabs.is(":visible") && this._accordionVisible) {
          this.showTabs();
          this._accordionVisible = false;
        } else if (this.$accordion.is(":visible") && !this._accordionVisible) {
          this.showAccordion();
          this._accordionVisible = true;
        }
      }
    };
    TabCollapse.prototype.showTabs = function () {
      this.$tabs.trigger($.Event("show-tabs.bs.tabcollapse"));
      var $panelBodies = this.$accordion.find(".js-tabcollapse-panel-body");
      $panelBodies.each(function () {
        var $panelBody = $(this),
          $tabPane = $panelBody.data("bs.tabcollapse.tabpane");
        $tabPane.append($panelBody.children("*").detach());
      });
      this.$accordion.html("");
      this.$tabs.trigger($.Event("shown-tabs.bs.tabcollapse"));
    };
    TabCollapse.prototype.showAccordion = function () {
      var selectedIndex = -1;
      var useRequestParameter = false;
      var selectedTab = getParameterByName("selectedtab");
      if (!isNaN(parseInt(selectedTab))) {
        selectedIndex = Number(selectedTab);
        useRequestParameter = true;
      }
      this.$tabs.trigger($.Event("show-accordion.bs.tabcollapse"));
      var $headings = this.$tabs.find(
          'li:not(.dropdown) [data-toggle="tab"], li:not(.dropdown) [data-toggle="pill"]'
        ),
        view = this;
      var index = 0;
      $headings.each(function () {
        var $heading = $(this);
        view.$accordion.append(
          view._createAccordionGroup(
            view.$accordion.attr("id"),
            $heading,
            useRequestParameter,
            selectedIndex === index
          )
        );
        index++;
      });
      this.$tabs.trigger($.Event("shown-accordion.bs.tabcollapse"));
    };
    TabCollapse.prototype._checkStateOnResize = function () {
      var view = this;
      $(window).resize(function () {
        clearTimeout(view._resizeTimeout);
        view._resizeTimeout = setTimeout(function () {
          view.checkState();
        }, 100);
      });
    };
    TabCollapse.prototype._initAccordion = function () {
      this.$accordion = $(
        '<div class="panel-group ' +
          this.options.accordionClass +
          '" id="' +
          this.$tabs.attr("id") +
          "-accordion" +
          '"></div>'
      );
      this.$tabs.after(this.$accordion);
      this.$tabs.addClass(this.options.tabsClass);
      this.$tabs.siblings(".tab-content").addClass(this.options.tabsClass);
    };
    TabCollapse.prototype._createAccordionGroup = function (
      parentId,
      $heading,
      useRequestParameter,
      requestIsSelected
    ) {
      var tabSelector = $heading.attr("data-target"),
        active = useRequestParameter
          ? requestIsSelected
          : $heading.parent().is(".active");
      var isHidden = $heading.hasClass("hidden");
      if (!tabSelector) {
        tabSelector = $heading.attr("href");
        tabSelector = tabSelector && tabSelector.replace(/.*(?=#[^\s]*$)/, "");
      }
      var currentTabClass = $(tabSelector).attr("class").trim();
      currentTabClass = currentTabClass.replace("tab-pane", "");
      currentTabClass = currentTabClass.replace("fade", "");
      currentTabClass = currentTabClass.replace("active", "");
      var cssClass =
        (currentTabClass.indexOf("hidden-lg") > -1 ? "hidden-lg " : "") +
        (currentTabClass.indexOf("hidden-md") > -1 ? "hidden-md " : "") +
        (currentTabClass.indexOf("hidden-sm") > -1 ? "hidden-sm " : "") +
        (currentTabClass.indexOf("hidden-xs") > -1 ? "hidden-xs " : "");
      cssClass += " " + currentTabClass;
      cssClass = cssClass.trim();
      var $tabPane = $(tabSelector),
        groupId = $tabPane.attr("id") + "-collapse",
        $panel = $(
          this.options.accordionTemplate(
            $heading.html(),
            groupId,
            parentId,
            active,
            isHidden,
            cssClass
          )
        );
      $panel
        .find(".panel-body")
        .append($tabPane.children("*").detach())
        .data("bs.tabcollapse.tabpane", $tabPane);
      return $panel;
    };
    $.fn.tabCollapse = function (option) {
      return this.each(function () {
        var $this = $(this);
        var editors = $this
          .parent()
          .first(".tab-content")
          .find(".AdminRichTextBox");
        if (!(editors && editors.length > 0)) {
          var data = $this.data("bs.tabcollapse");
          var options = $.extend(
            {},
            TabCollapse.DEFAULTS,
            $this.data(),
            typeof option == "object" && option
          );
          if (!data)
            $this.data("bs.tabcollapse", new TabCollapse(this, options));
        }
      });
    };
    $.fn.tabCollapse.Constructor = TabCollapse;
  })(window.jQuery);
  $(".nav-tabs").not(".notCollapsible").not(".alwaysAccordion").tabCollapse();
  $(".nav-horizontal").not(".notCollapsible").tabCollapse();
  $(".nav-tabs.alwaysAccordion").tabCollapse({ alwaysAccordion: true });
});
/* End of /Bootstrap/bootstrap-tabcollapse.js*/
/* Start of /JPlayer/jquery.jplayer.js */
try {
  if ($telerik.$) {
    window.jQuery = $telerik.$;
  }
} catch (err) {}
var isMobileCheck =
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
!(function (a, b) {
  "function" == typeof define && define.amd
    ? define(["jquery"], b)
    : b(
        "object" == typeof exports
          ? require("jquery")
          : a.jQuery
          ? a.jQuery
          : a.Zepto
      );
})(this, function (a, b) {
  (a.fn.jPlayer = function (c) {
    var d = "jPlayer",
      e = "string" == typeof c,
      f = Array.prototype.slice.call(arguments, 1),
      g = this;
    return (
      (c = !e && f.length ? a.extend.apply(null, [!0, c].concat(f)) : c),
      e && "_" === c.charAt(0)
        ? g
        : (this.each(
            e
              ? function () {
                  var e = a(this).data(d),
                    h = e && a.isFunction(e[c]) ? e[c].apply(e, f) : e;
                  return h !== e && h !== b ? ((g = h), !1) : void 0;
                }
              : function () {
                  var b = a(this).data(d);
                  b
                    ? b.option(c || {})
                    : a(this).data(d, new a.jPlayer(c, this));
                }
          ),
          g)
    );
  }),
    (a.jPlayer = function (b, c) {
      if (arguments.length) {
        (this.element = a(c)),
          (this.options = a.extend(!0, {}, this.options, b));
        var d = this;
        this.element.bind("remove.jPlayer", function () {
          d.destroy();
        }),
          this._init();
      }
    }),
    "function" != typeof a.fn.stop && (a.fn.stop = function () {}),
    (a.jPlayer.emulateMethods = "load play pause"),
    (a.jPlayer.emulateStatus =
      "src readyState networkState currentTime duration paused ended playbackRate"),
    (a.jPlayer.emulateOptions = "muted volume"),
    (a.jPlayer.reservedEvent = "ready flashreset resize repeat error warning"),
    (a.jPlayer.event = {}),
    a.each(
      [
        "ready",
        "setmedia",
        "flashreset",
        "resize",
        "repeat",
        "click",
        "error",
        "warning",
        "loadstart",
        "progress",
        "suspend",
        "abort",
        "emptied",
        "stalled",
        "play",
        "pause",
        "loadedmetadata",
        "loadeddata",
        "waiting",
        "playing",
        "canplay",
        "canplaythrough",
        "seeking",
        "seeked",
        "timeupdate",
        "ended",
        "ratechange",
        "durationchange",
        "volumechange",
      ],
      function () {
        a.jPlayer.event[this] = "jPlayer_" + this;
      }
    ),
    (a.jPlayer.htmlEvent = [
      "loadstart",
      "abort",
      "emptied",
      "stalled",
      "loadedmetadata",
      "canplay",
      "canplaythrough",
    ]),
    (a.jPlayer.pause = function () {
      a.jPlayer.prototype.destroyRemoved(),
        a.each(a.jPlayer.prototype.instances, function (a, b) {
          b.data("jPlayer").status.srcSet && b.jPlayer("pause");
        });
    }),
    (a.jPlayer.timeFormat = {
      showHour: !1,
      showMin: !0,
      showSec: !0,
      padHour: !1,
      padMin: !0,
      padSec: !0,
      sepHour: ":",
      sepMin: ":",
      sepSec: "",
    });
  var c = function () {
    this.init();
  };
  c.prototype = {
    init: function () {
      this.options = { timeFormat: a.jPlayer.timeFormat };
    },
    time: function (a) {
      a = a && "number" == typeof a ? a : 0;
      var b = new Date(1e3 * a),
        c = b.getUTCHours(),
        d = this.options.timeFormat.showHour
          ? b.getUTCMinutes()
          : b.getUTCMinutes() + 60 * c,
        e = this.options.timeFormat.showMin
          ? b.getUTCSeconds()
          : b.getUTCSeconds() + 60 * d,
        f = this.options.timeFormat.padHour && 10 > c ? "0" + c : c,
        g = this.options.timeFormat.padMin && 10 > d ? "0" + d : d,
        h = this.options.timeFormat.padSec && 10 > e ? "0" + e : e,
        i = "";
      return (
        (i += this.options.timeFormat.showHour
          ? f + this.options.timeFormat.sepHour
          : ""),
        (i += this.options.timeFormat.showMin
          ? g + this.options.timeFormat.sepMin
          : ""),
        (i += this.options.timeFormat.showSec
          ? h + this.options.timeFormat.sepSec
          : "")
      );
    },
  };
  var d = new c();
  (a.jPlayer.convertTime = function (a) {
    return d.time(a);
  }),
    (a.jPlayer.uaBrowser = function (a) {
      var b = a.toLowerCase(),
        c = /(webkit)[ \/]([\w.]+)/,
        d = /(opera)(?:.*version)?[ \/]([\w.]+)/,
        e = /(msie) ([\w.]+)/,
        f = /(mozilla)(?:.*? rv:([\w.]+))?/,
        g =
          c.exec(b) ||
          d.exec(b) ||
          e.exec(b) ||
          (b.indexOf("compatible") < 0 && f.exec(b)) ||
          [];
      return { browser: g[1] || "", version: g[2] || "0" };
    }),
    (a.jPlayer.uaPlatform = function (a) {
      var b = a.toLowerCase(),
        c = /(ipad|iphone|ipod|android|blackberry|playbook|windows ce|webos)/,
        d = /(ipad|playbook)/,
        e = /(android)/,
        f = /(mobile)/,
        g = c.exec(b) || [],
        h = d.exec(b) || (!f.exec(b) && e.exec(b)) || [];
      return (
        g[1] && (g[1] = g[1].replace(/\s/g, "_")),
        { platform: g[1] || "", tablet: h[1] || "" }
      );
    }),
    (a.jPlayer.browser = {}),
    (a.jPlayer.platform = {});
  var e = a.jPlayer.uaBrowser(navigator.userAgent);
  e.browser &&
    ((a.jPlayer.browser[e.browser] = !0),
    (a.jPlayer.browser.version = e.version));
  var f = a.jPlayer.uaPlatform(navigator.userAgent);
  f.platform &&
    ((a.jPlayer.platform[f.platform] = !0),
    (a.jPlayer.platform.mobile = !f.tablet),
    (a.jPlayer.platform.tablet = !!f.tablet)),
    (a.jPlayer.getDocMode = function () {
      var b;
      return (
        a.jPlayer.browser.msie &&
          (document.documentMode
            ? (b = document.documentMode)
            : ((b = 5),
              document.compatMode &&
                "CSS1Compat" === document.compatMode &&
                (b = 7))),
        b
      );
    }),
    (a.jPlayer.browser.documentMode = a.jPlayer.getDocMode()),
    (a.jPlayer.nativeFeatures = {
      init: function () {
        var a,
          b,
          c,
          d = document,
          e = d.createElement("video"),
          f = {
            w3c: [
              "fullscreenEnabled",
              "fullscreenElement",
              "requestFullscreen",
              "exitFullscreen",
              "fullscreenchange",
              "fullscreenerror",
            ],
            moz: [
              "mozFullScreenEnabled",
              "mozFullScreenElement",
              "mozRequestFullScreen",
              "mozCancelFullScreen",
              "mozfullscreenchange",
              "mozfullscreenerror",
            ],
            webkit: [
              "",
              "webkitCurrentFullScreenElement",
              "webkitRequestFullScreen",
              "webkitCancelFullScreen",
              "webkitfullscreenchange",
              "",
            ],
            webkitVideo: [
              "webkitSupportsFullscreen",
              "webkitDisplayingFullscreen",
              "webkitEnterFullscreen",
              "webkitExitFullscreen",
              "",
              "",
            ],
            ms: [
              "",
              "msFullscreenElement",
              "msRequestFullscreen",
              "msExitFullscreen",
              "MSFullscreenChange",
              "MSFullscreenError",
            ],
          },
          g = ["w3c", "moz", "webkit", "webkitVideo", "ms"];
        for (
          this.fullscreen = a =
            {
              support: {
                w3c: !!d[f.w3c[0]],
                moz: !!d[f.moz[0]],
                webkit: "function" == typeof d[f.webkit[3]],
                webkitVideo: "function" == typeof e[f.webkitVideo[2]],
                ms: "function" == typeof e[f.ms[2]],
              },
              used: {},
            },
            b = 0,
            c = g.length;
          c > b;
          b++
        ) {
          var h = g[b];
          if (a.support[h]) {
            (a.spec = h), (a.used[h] = !0);
            break;
          }
        }
        if (a.spec) {
          var i = f[a.spec];
          (a.api = {
            fullscreenEnabled: !0,
            fullscreenElement: function (a) {
              return (a = a ? a : d), a[i[1]];
            },
            requestFullscreen: function (a) {
              return a[i[2]]();
            },
            exitFullscreen: function (a) {
              return (a = a ? a : d), a[i[3]]();
            },
          }),
            (a.event = { fullscreenchange: i[4], fullscreenerror: i[5] });
        } else
          (a.api = {
            fullscreenEnabled: !1,
            fullscreenElement: function () {
              return null;
            },
            requestFullscreen: function () {},
            exitFullscreen: function () {},
          }),
            (a.event = {});
      },
    }),
    a.jPlayer.nativeFeatures.init(),
    (a.jPlayer.focus = null),
    (a.jPlayer.keyIgnoreElementNames = "A INPUT TEXTAREA SELECT BUTTON");
  var g = function (b) {
    var c,
      d = a.jPlayer.focus;
    d &&
      (a.each(a.jPlayer.keyIgnoreElementNames.split(/\s+/g), function (a, d) {
        return b.target.nodeName.toUpperCase() === d.toUpperCase()
          ? ((c = !0), !1)
          : void 0;
      }),
      c ||
        a.each(d.options.keyBindings, function (c, e) {
          return e &&
            a.isFunction(e.fn) &&
            (("number" == typeof e.key && b.which === e.key) ||
              ("string" == typeof e.key && b.key === e.key))
            ? (b.preventDefault(), e.fn(d), !1)
            : void 0;
        }));
  };
  (a.jPlayer.keys = function (b) {
    var c = "keydown.jPlayer";
    a(document.documentElement).unbind(c),
      b && a(document.documentElement).bind(c, g);
  }),
    a.jPlayer.keys(!0),
    (a.jPlayer.prototype = {
      count: 0,
      version: { script: "2.9.2", needFlash: "2.9.0", flash: "unknown" },
      options: {
        swfPath: "js",
        solution: "html, flash",
        supplied: "mp3",
        auroraFormats: "wav",
        preload: "metadata",
        volume: 0.8,
        muted: !1,
        remainingDuration: !1,
        toggleDuration: !1,
        captureDuration: !0,
        playbackRate: 1,
        defaultPlaybackRate: 1,
        minPlaybackRate: 0.5,
        maxPlaybackRate: 4,
        wmode: "opaque",
        backgroundColor: "#000000",
        cssSelectorAncestor: "#jp_container_1",
        cssSelector: {
          videoPlay: ".jp-video-play",
          play: ".jp-play",
          pause: ".jp-pause",
          stop: ".jp-stop",
          seekBar: ".jp-seek-bar",
          playBar: ".jp-play-bar",
          mute: ".jp-mute",
          unmute: ".jp-unmute",
          volumeBar: ".jp-volume-bar",
          volumeBarValue: ".jp-volume-bar-value",
          volumeMax: ".jp-volume-max",
          playbackRateBar: ".jp-playback-rate-bar",
          playbackRateBarValue: ".jp-playback-rate-bar-value",
          currentTime: ".jp-current-time",
          duration: ".jp-duration",
          title: ".jp-title",
          fullScreen: ".jp-full-screen",
          restoreScreen: ".jp-restore-screen",
          repeat: ".jp-repeat",
          repeatOff: ".jp-repeat-off",
          gui: ".jp-gui",
          noSolution: ".jp-no-solution",
        },
        stateClass: {
          playing: "jp-state-playing",
          seeking: "jp-state-seeking",
          muted: "jp-state-muted",
          looped: "jp-state-looped",
          fullScreen: "jp-state-full-screen",
          noVolume: "jp-state-no-volume",
        },
        useStateClassSkin: !1,
        autoBlur: !0,
        smoothPlayBar: !1,
        fullScreen: !1,
        fullWindow: !1,
        autohide: {
          restored: !1,
          full: !0,
          fadeIn: 200,
          fadeOut: 600,
          hold: 1e3,
        },
        loop: !1,
        repeat: function (b) {
          b.jPlayer.options.loop
            ? a(this)
                .unbind(".jPlayerRepeat")
                .bind(
                  a.jPlayer.event.ended + ".jPlayer.jPlayerRepeat",
                  function () {
                    a(this).jPlayer("play");
                  }
                )
            : a(this).unbind(".jPlayerRepeat");
        },
        nativeVideoControls: {},
        noFullWindow: {
          msie: /msie [0-6]\./,
          ipad: /ipad.*?os [0-4]\./,
          iphone: /iphone/,
          ipod: /ipod/,
          android_pad: /android [0-3]\.(?!.*?mobile)/,
          android_phone: /(?=.*android)(?!.*chrome)(?=.*mobile)/,
          blackberry: /blackberry/,
          windows_ce: /windows ce/,
          iemobile: /iemobile/,
          webos: /webos/,
        },
        noVolume: {
          ipad: /ipad/,
          iphone: /iphone/,
          ipod: /ipod/,
          android_pad: /android(?!.*?mobile)/,
          android_phone: /android.*?mobile/,
          blackberry: /blackberry/,
          windows_ce: /windows ce/,
          iemobile: /iemobile/,
          webos: /webos/,
          playbook: /playbook/,
        },
        timeFormat: {},
        keyEnabled: !1,
        audioFullScreen: !1,
        keyBindings: {
          play: {
            key: 80,
            fn: function (a) {
              a.status.paused ? a.play() : a.pause();
            },
          },
          fullScreen: {
            key: 70,
            fn: function (a) {
              (a.status.video || a.options.audioFullScreen) &&
                a._setOption("fullScreen", !a.options.fullScreen);
            },
          },
          muted: {
            key: 77,
            fn: function (a) {
              a._muted(!a.options.muted);
            },
          },
          volumeUp: {
            key: 190,
            fn: function (a) {
              a.volume(a.options.volume + 0.1);
            },
          },
          volumeDown: {
            key: 188,
            fn: function (a) {
              a.volume(a.options.volume - 0.1);
            },
          },
          loop: {
            key: 76,
            fn: function (a) {
              a._loop(!a.options.loop);
            },
          },
        },
        verticalVolume: !1,
        verticalPlaybackRate: !1,
        globalVolume: !1,
        idPrefix: "jp",
        noConflict: "jQuery",
        emulateHtml: !1,
        consoleAlerts: !0,
        errorAlerts: !1,
        warningAlerts: !1,
      },
      optionsAudio: {
        size: { width: "0px", height: "0px", cssClass: "" },
        sizeFull: { width: "0px", height: "0px", cssClass: "" },
      },
      optionsVideo: {
        size: { width: "480px", height: "270px", cssClass: "jp-video-270p" },
        sizeFull: { width: "100%", height: "100%", cssClass: "jp-video-full" },
      },
      instances: {},
      status: {
        src: "",
        media: {},
        paused: !0,
        format: {},
        formatType: "",
        waitForPlay: !0,
        waitForLoad: !0,
        srcSet: !1,
        video: !1,
        seekPercent: 0,
        currentPercentRelative: 0,
        currentPercentAbsolute: 0,
        currentTime: 0,
        duration: 0,
        remaining: 0,
        videoWidth: 0,
        videoHeight: 0,
        readyState: 0,
        networkState: 0,
        playbackRate: 1,
        ended: 0,
      },
      internal: { ready: !1 },
      solution: { html: !0, aurora: !0, flash: !0 },
      format: {
        mp3: { codec: "audio/mpeg", flashCanPlay: !0, media: "audio" },
        m4a: {
          codec: 'audio/mp4; codecs="mp4a.40.2"',
          flashCanPlay: !0,
          media: "audio",
        },
        m3u8a: {
          codec: 'application/vnd.apple.mpegurl; codecs="mp4a.40.2"',
          flashCanPlay: !1,
          media: "audio",
        },
        m3ua: { codec: "audio/mpegurl", flashCanPlay: !1, media: "audio" },
        oga: {
          codec: 'audio/ogg; codecs="vorbis, opus"',
          flashCanPlay: !1,
          media: "audio",
        },
        flac: { codec: "audio/x-flac", flashCanPlay: !1, media: "audio" },
        wav: {
          codec: 'audio/wav; codecs="1"',
          flashCanPlay: !1,
          media: "audio",
        },
        webma: {
          codec: 'audio/webm; codecs="vorbis"',
          flashCanPlay: !1,
          media: "audio",
        },
        fla: { codec: "audio/x-flv", flashCanPlay: !0, media: "audio" },
        rtmpa: {
          codec: 'audio/rtmp; codecs="rtmp"',
          flashCanPlay: !0,
          media: "audio",
        },
        m4v: {
          codec: 'video/mp4; codecs="avc1.42E01E, mp4a.40.2"',
          flashCanPlay: !0,
          media: "video",
        },
        m3u8v: {
          codec:
            'application/vnd.apple.mpegurl; codecs="avc1.42E01E, mp4a.40.2"',
          flashCanPlay: !1,
          media: "video",
        },
        m3uv: { codec: "audio/mpegurl", flashCanPlay: !1, media: "video" },
        ogv: {
          codec: 'video/ogg; codecs="theora, vorbis"',
          flashCanPlay: !1,
          media: "video",
        },
        webmv: {
          codec: 'video/webm; codecs="vorbis, vp8"',
          flashCanPlay: !1,
          media: "video",
        },
        flv: { codec: "video/x-flv", flashCanPlay: !0, media: "video" },
        rtmpv: {
          codec: 'video/rtmp; codecs="rtmp"',
          flashCanPlay: !0,
          media: "video",
        },
      },
      _init: function () {
        var c = this;
        if (
          (this.element.empty(),
          (this.status = a.extend({}, this.status)),
          (this.internal = a.extend({}, this.internal)),
          (this.options.timeFormat = a.extend(
            {},
            a.jPlayer.timeFormat,
            this.options.timeFormat
          )),
          (this.internal.cmdsIgnored =
            a.jPlayer.platform.ipad ||
            a.jPlayer.platform.iphone ||
            a.jPlayer.platform.ipod),
          (this.internal.domNode = this.element.get(0)),
          this.options.keyEnabled &&
            !a.jPlayer.focus &&
            (a.jPlayer.focus = this),
          (this.androidFix = {
            setMedia: !1,
            play: !1,
            pause: !1,
            time: 0 / 0,
          }),
          a.jPlayer.platform.android &&
            (this.options.preload =
              "auto" !== this.options.preload ? "metadata" : "auto"),
          (this.formats = []),
          (this.solutions = []),
          (this.require = {}),
          (this.htmlElement = {}),
          (this.html = {}),
          (this.html.audio = {}),
          (this.html.video = {}),
          (this.aurora = {}),
          (this.aurora.formats = []),
          (this.aurora.properties = []),
          (this.flash = {}),
          (this.css = {}),
          (this.css.cs = {}),
          (this.css.jq = {}),
          (this.ancestorJq = []),
          (this.options.volume = this._limitValue(this.options.volume, 0, 1)),
          a.each(
            this.options.supplied.toLowerCase().split(","),
            function (b, d) {
              var e = d.replace(/^\s+|\s+$/g, "");
              if (c.format[e]) {
                var f = !1;
                a.each(c.formats, function (a, b) {
                  return e === b ? ((f = !0), !1) : void 0;
                }),
                  f || c.formats.push(e);
              }
            }
          ),
          a.each(
            this.options.solution.toLowerCase().split(","),
            function (b, d) {
              var e = d.replace(/^\s+|\s+$/g, "");
              if (c.solution[e]) {
                var f = !1;
                a.each(c.solutions, function (a, b) {
                  return e === b ? ((f = !0), !1) : void 0;
                }),
                  f || c.solutions.push(e);
              }
            }
          ),
          a.each(
            this.options.auroraFormats.toLowerCase().split(","),
            function (b, d) {
              var e = d.replace(/^\s+|\s+$/g, "");
              if (c.format[e]) {
                var f = !1;
                a.each(c.aurora.formats, function (a, b) {
                  return e === b ? ((f = !0), !1) : void 0;
                }),
                  f || c.aurora.formats.push(e);
              }
            }
          ),
          (this.internal.instance = "jp_" + this.count),
          (this.instances[this.internal.instance] = this.element),
          this.element.attr("id") ||
            this.element.attr(
              "id",
              this.options.idPrefix + "_jplayer_" + this.count
            ),
          (this.internal.self = a.extend(
            {},
            { id: this.element.attr("id"), jq: this.element }
          )),
          (this.internal.audio = a.extend(
            {},
            { id: this.options.idPrefix + "_audio_" + this.count, jq: b }
          )),
          (this.internal.video = a.extend(
            {},
            { id: this.options.idPrefix + "_video_" + this.count, jq: b }
          )),
          (this.internal.flash = a.extend(
            {},
            {
              id: this.options.idPrefix + "_flash_" + this.count,
              jq: b,
              swf:
                this.options.swfPath +
                (".swf" !== this.options.swfPath.toLowerCase().slice(-4)
                  ? (this.options.swfPath &&
                    "/" !== this.options.swfPath.slice(-1)
                      ? "/"
                      : "") + "jplayer.swf"
                  : ""),
            }
          )),
          (this.internal.poster = a.extend(
            {},
            { id: this.options.idPrefix + "_poster_" + this.count, jq: b }
          )),
          a.each(a.jPlayer.event, function (a, d) {
            c.options[a] !== b &&
              (c.element.bind(d + ".jPlayer", c.options[a]),
              (c.options[a] = b));
          }),
          (this.require.audio = !1),
          (this.require.video = !1),
          a.each(this.formats, function (a, b) {
            c.require[c.format[b].media] = !0;
          }),
          (this.options = this.require.video
            ? a.extend(!0, {}, this.optionsVideo, this.options)
            : a.extend(!0, {}, this.optionsAudio, this.options)),
          this._setSize(),
          (this.status.nativeVideoControls = this._uaBlocklist(
            this.options.nativeVideoControls
          )),
          (this.status.noFullWindow = this._uaBlocklist(
            this.options.noFullWindow
          )),
          (this.status.noVolume = this._uaBlocklist(this.options.noVolume)),
          a.jPlayer.nativeFeatures.fullscreen.api.fullscreenEnabled &&
            this._fullscreenAddEventListeners(),
          this._restrictNativeVideoControls(),
          (this.htmlElement.poster = document.createElement("img")),
          (this.htmlElement.poster.id = this.internal.poster.id),
          (this.htmlElement.poster.onload = function () {
            (!c.status.video || c.status.waitForPlay) &&
              c.internal.poster.jq.show();
          }),
          this.element.append(this.htmlElement.poster),
          (this.internal.poster.jq = a("#" + this.internal.poster.id)),
          this.internal.poster.jq.css({
            width: this.status.width,
            height: this.status.height,
          }),
          this.internal.poster.jq.attr(
            "alt",
            this.options.media.title ? this.options.media.title : ""
          ),
          this.internal.poster.jq.attr(
            "title",
            this.options.media.title ? this.options.media.title : ""
          ),
          this.internal.poster.jq.hide(),
          this.internal.poster.jq.bind("click.jPlayer", function () {
            c._trigger(a.jPlayer.event.click);
          }),
          (this.html.audio.available = !1),
          this.require.audio &&
            ((this.htmlElement.audio = document.createElement("audio")),
            (this.htmlElement.audio.id = this.internal.audio.id),
            (this.html.audio.available =
              !!this.htmlElement.audio.canPlayType &&
              this._testCanPlayType(this.htmlElement.audio))),
          (this.html.video.available = !1),
          this.require.video &&
            ((this.htmlElement.video = document.createElement("video")),
            (this.htmlElement.video.id = this.internal.video.id),
            (this.html.video.available =
              !!this.htmlElement.video.canPlayType &&
              this._testCanPlayType(this.htmlElement.video))),
          (this.flash.available = this._checkForFlash(10.1)),
          (this.html.canPlay = {}),
          (this.aurora.canPlay = {}),
          (this.flash.canPlay = {}),
          a.each(this.formats, function (b, d) {
            (c.html.canPlay[d] =
              c.html[c.format[d].media].available &&
              "" !==
                c.htmlElement[c.format[d].media].canPlayType(
                  c.format[d].codec
                )),
              (c.aurora.canPlay[d] = a.inArray(d, c.aurora.formats) > -1),
              (c.flash.canPlay[d] =
                c.format[d].flashCanPlay && c.flash.available);
          }),
          (this.html.desired = !1),
          (this.aurora.desired = !1),
          (this.flash.desired = !1),
          a.each(this.solutions, function (b, d) {
            if (0 === b) c[d].desired = !0;
            else {
              var e = !1,
                f = !1;
              a.each(c.formats, function (a, b) {
                c[c.solutions[0]].canPlay[b] &&
                  ("video" === c.format[b].media ? (f = !0) : (e = !0));
              }),
                (c[d].desired =
                  (c.require.audio && !e) || (c.require.video && !f));
            }
          }),
          (this.html.support = {}),
          (this.aurora.support = {}),
          (this.flash.support = {}),
          a.each(this.formats, function (a, b) {
            (c.html.support[b] = c.html.canPlay[b] && c.html.desired),
              (c.aurora.support[b] = c.aurora.canPlay[b] && c.aurora.desired),
              (c.flash.support[b] = c.flash.canPlay[b] && c.flash.desired);
          }),
          (this.html.used = !1),
          (this.aurora.used = !1),
          (this.flash.used = !1),
          a.each(this.solutions, function (b, d) {
            a.each(c.formats, function (a, b) {
              return c[d].support[b] ? ((c[d].used = !0), !1) : void 0;
            });
          }),
          this._resetActive(),
          this._resetGate(),
          this._cssSelectorAncestor(this.options.cssSelectorAncestor),
          this.html.used || this.aurora.used || this.flash.used
            ? this.css.jq.noSolution.length && this.css.jq.noSolution.hide()
            : (this._error({
                type: a.jPlayer.error.NO_SOLUTION,
                context:
                  "{solution:'" +
                  this.options.solution +
                  "', supplied:'" +
                  this.options.supplied +
                  "'}",
                message: a.jPlayer.errorMsg.NO_SOLUTION,
                hint: a.jPlayer.errorHint.NO_SOLUTION,
              }),
              this.css.jq.noSolution.length && this.css.jq.noSolution.show()),
          this.flash.used)
        ) {
          var d,
            e =
              "jQuery=" +
              encodeURI(this.options.noConflict) +
              "&id=" +
              encodeURI(this.internal.self.id) +
              "&vol=" +
              this.options.volume +
              "&muted=" +
              this.options.muted;
          if (
            a.jPlayer.browser.msie &&
            (Number(a.jPlayer.browser.version) < 9 ||
              a.jPlayer.browser.documentMode < 9)
          ) {
            var f =
                '<object id="' +
                this.internal.flash.id +
                '" classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" width="0" height="0" tabindex="-1"></object>',
              g = [
                '<param name="movie" value="' +
                  this.internal.flash.swf +
                  '" />',
                '<param name="FlashVars" value="' + e + '" />',
                '<param name="allowScriptAccess" value="always" />',
                '<param name="bgcolor" value="' +
                  this.options.backgroundColor +
                  '" />',
                '<param name="wmode" value="' + this.options.wmode + '" />',
              ];
            d = document.createElement(f);
            for (var h = 0; h < g.length; h++)
              d.appendChild(document.createElement(g[h]));
          } else {
            var i = function (a, b, c) {
              var d = document.createElement("param");
              d.setAttribute("name", b),
                d.setAttribute("value", c),
                a.appendChild(d);
            };
            (d = document.createElement("object")),
              d.setAttribute("id", this.internal.flash.id),
              d.setAttribute("name", this.internal.flash.id),
              d.setAttribute("data", this.internal.flash.swf),
              d.setAttribute("type", "application/x-shockwave-flash"),
              d.setAttribute("width", "1"),
              d.setAttribute("height", "1"),
              d.setAttribute("tabindex", "-1"),
              i(d, "flashvars", e),
              i(d, "allowscriptaccess", "always"),
              i(d, "bgcolor", this.options.backgroundColor),
              i(d, "wmode", this.options.wmode);
          }
          this.element.append(d), (this.internal.flash.jq = a(d));
        }
        (this.status.playbackRateEnabled =
          this.html.used && !this.flash.used
            ? this._testPlaybackRate("audio")
            : !1),
          this._updatePlaybackRate(),
          this.html.used &&
            (this.html.audio.available &&
              (this._addHtmlEventListeners(
                this.htmlElement.audio,
                this.html.audio
              ),
              this.element.append(this.htmlElement.audio),
              (this.internal.audio.jq = a("#" + this.internal.audio.id))),
            this.html.video.available &&
              (this._addHtmlEventListeners(
                this.htmlElement.video,
                this.html.video
              ),
              this.element.append(this.htmlElement.video),
              (this.internal.video.jq = a("#" + this.internal.video.id)),
              this.internal.video.jq.css(
                this.status.nativeVideoControls
                  ? { width: this.status.width, height: this.status.height }
                  : { width: "0px", height: "0px" }
              ),
              this.internal.video.jq.bind("click.jPlayer", function () {
                c._trigger(a.jPlayer.event.click);
              }))),
          this.aurora.used,
          this.options.emulateHtml && this._emulateHtmlBridge(),
          (!this.html.used && !this.aurora.used) ||
            this.flash.used ||
            setTimeout(function () {
              (c.internal.ready = !0),
                (c.version.flash = "n/a"),
                c._trigger(a.jPlayer.event.repeat),
                c._trigger(a.jPlayer.event.ready);
            }, 100),
          this._updateNativeVideoControls(),
          this.css.jq.videoPlay.length && this.css.jq.videoPlay.hide(),
          a.jPlayer.prototype.count++;
      },
      destroy: function () {
        this.clearMedia(),
          this._removeUiClass(),
          this.css.jq.currentTime.length && this.css.jq.currentTime.text(""),
          this.css.jq.duration.length && this.css.jq.duration.text(""),
          a.each(this.css.jq, function (a, b) {
            b.length && b.unbind(".jPlayer");
          }),
          this.internal.poster.jq.unbind(".jPlayer"),
          this.internal.video.jq && this.internal.video.jq.unbind(".jPlayer"),
          this._fullscreenRemoveEventListeners(),
          this === a.jPlayer.focus && (a.jPlayer.focus = null),
          this.options.emulateHtml && this._destroyHtmlBridge(),
          this.element.removeData("jPlayer"),
          this.element.unbind(".jPlayer"),
          this.element.empty(),
          delete this.instances[this.internal.instance];
      },
      destroyRemoved: function () {
        var b = this;
        a.each(this.instances, function (a, c) {
          b.element !== c &&
            (c.data("jPlayer") ||
              (c.jPlayer("destroy"), delete b.instances[a]));
        });
      },
      enable: function () {},
      disable: function () {},
      _testCanPlayType: function (a) {
        try {
          return a.canPlayType(this.format.mp3.codec), !0;
        } catch (b) {
          return !1;
        }
      },
      _testPlaybackRate: function (a) {
        var b,
          c = 0.5;
        (a = "string" == typeof a ? a : "audio"),
          (b = document.createElement(a));
        try {
          return "playbackRate" in b
            ? ((b.playbackRate = c), b.playbackRate === c)
            : !1;
        } catch (d) {
          return !1;
        }
      },
      _uaBlocklist: function (b) {
        var c = navigator.userAgent.toLowerCase(),
          d = !1;
        return (
          a.each(b, function (a, b) {
            return b && b.test(c) ? ((d = !0), !1) : void 0;
          }),
          d
        );
      },
      _restrictNativeVideoControls: function () {
        this.require.audio &&
          this.status.nativeVideoControls &&
          ((this.status.nativeVideoControls = !1),
          (this.status.noFullWindow = !0));
      },
      _updateNativeVideoControls: function () {
        this.html.video.available &&
          this.html.used &&
          ((this.htmlElement.video.controls = this.status.nativeVideoControls),
          this._updateAutohide(),
          this.status.nativeVideoControls && this.require.video
            ? (this.internal.poster.jq.hide(),
              this.internal.video.jq.css({
                width: this.status.width,
                height: this.status.height,
              }))
            : this.status.waitForPlay &&
              this.status.video &&
              (this.internal.poster.jq.show(),
              this.internal.video.jq.css({ width: "0px", height: "0px" })));
      },
      _addHtmlEventListeners: function (b, c) {
        var d = this;
        (b.preload = this.options.preload),
          (b.muted = this.options.muted),
          (b.volume = this.options.volume),
          this.status.playbackRateEnabled &&
            ((b.defaultPlaybackRate = this.options.defaultPlaybackRate),
            (b.playbackRate = this.options.playbackRate)),
          b.addEventListener(
            "progress",
            function () {
              c.gate &&
                (d.internal.cmdsIgnored &&
                  this.readyState > 0 &&
                  (d.internal.cmdsIgnored = !1),
                d._getHtmlStatus(b),
                d._updateInterface(),
                d._trigger(a.jPlayer.event.progress));
            },
            !1
          ),
          b.addEventListener(
            "loadeddata",
            function () {
              c.gate &&
                ((d.androidFix.setMedia = !1),
                d.androidFix.play &&
                  ((d.androidFix.play = !1), d.play(d.androidFix.time)),
                d.androidFix.pause &&
                  ((d.androidFix.pause = !1), d.pause(d.androidFix.time)),
                d._trigger(a.jPlayer.event.loadeddata));
            },
            !1
          ),
          b.addEventListener(
            "timeupdate",
            function () {
              c.gate &&
                (d._getHtmlStatus(b),
                d._updateInterface(),
                d._trigger(a.jPlayer.event.timeupdate));
            },
            !1
          ),
          b.addEventListener(
            "durationchange",
            function () {
              c.gate &&
                (d._getHtmlStatus(b),
                d._updateInterface(),
                d._trigger(a.jPlayer.event.durationchange));
            },
            !1
          ),
          b.addEventListener(
            "play",
            function () {
              c.gate &&
                (d._updateButtons(!0),
                d._html_checkWaitForPlay(),
                d._trigger(a.jPlayer.event.play));
            },
            !1
          ),
          b.addEventListener(
            "playing",
            function () {
              c.gate &&
                (d._updateButtons(!0),
                d._seeked(),
                d._trigger(a.jPlayer.event.playing));
            },
            !1
          ),
          b.addEventListener(
            "pause",
            function () {
              c.gate &&
                (d._updateButtons(!1), d._trigger(a.jPlayer.event.pause));
            },
            !1
          ),
          b.addEventListener(
            "waiting",
            function () {
              c.gate && (d._seeking(), d._trigger(a.jPlayer.event.waiting));
            },
            !1
          ),
          b.addEventListener(
            "seeking",
            function () {
              c.gate && (d._seeking(), d._trigger(a.jPlayer.event.seeking));
            },
            !1
          ),
          b.addEventListener(
            "seeked",
            function () {
              c.gate && (d._seeked(), d._trigger(a.jPlayer.event.seeked));
            },
            !1
          ),
          b.addEventListener(
            "volumechange",
            function () {
              c.gate &&
                ((d.options.volume = b.volume),
                (d.options.muted = b.muted),
                d._updateMute(),
                d._updateVolume(),
                d._trigger(a.jPlayer.event.volumechange));
            },
            !1
          ),
          b.addEventListener(
            "ratechange",
            function () {
              c.gate &&
                ((d.options.defaultPlaybackRate = b.defaultPlaybackRate),
                (d.options.playbackRate = b.playbackRate),
                d._updatePlaybackRate(),
                d._trigger(a.jPlayer.event.ratechange));
            },
            !1
          ),
          b.addEventListener(
            "suspend",
            function () {
              c.gate && (d._seeked(), d._trigger(a.jPlayer.event.suspend));
            },
            !1
          ),
          b.addEventListener(
            "ended",
            function () {
              c.gate &&
                (a.jPlayer.browser.webkit ||
                  (d.htmlElement.media.currentTime = 0),
                d.htmlElement.media.pause(),
                d._updateButtons(!1),
                d._getHtmlStatus(b, !0),
                d._updateInterface(),
                d._trigger(a.jPlayer.event.ended));
            },
            !1
          ),
          b.addEventListener(
            "error",
            function () {
              c.gate &&
                (d._updateButtons(!1),
                d._seeked(),
                d.status.srcSet &&
                  (clearTimeout(d.internal.htmlDlyCmdId),
                  (d.status.waitForLoad = !0),
                  (d.status.waitForPlay = !0),
                  d.status.video &&
                    !d.status.nativeVideoControls &&
                    d.internal.video.jq.css({ width: "0px", height: "0px" }),
                  d._validString(d.status.media.poster) &&
                    !d.status.nativeVideoControls &&
                    d.internal.poster.jq.show(),
                  d.css.jq.videoPlay.length && d.css.jq.videoPlay.show(),
                  d._error({
                    type: a.jPlayer.error.URL,
                    context: d.status.src,
                    message: a.jPlayer.errorMsg.URL,
                    hint: a.jPlayer.errorHint.URL,
                  })));
            },
            !1
          ),
          a.each(a.jPlayer.htmlEvent, function (e, f) {
            b.addEventListener(
              this,
              function () {
                c.gate && d._trigger(a.jPlayer.event[f]);
              },
              !1
            );
          });
      },
      _addAuroraEventListeners: function (b, c) {
        var d = this;
        (b.volume = 100 * this.options.volume),
          b.on(
            "progress",
            function () {
              c.gate &&
                (d.internal.cmdsIgnored &&
                  this.readyState > 0 &&
                  (d.internal.cmdsIgnored = !1),
                d._getAuroraStatus(b),
                d._updateInterface(),
                d._trigger(a.jPlayer.event.progress),
                b.duration > 0 && d._trigger(a.jPlayer.event.timeupdate));
            },
            !1
          ),
          b.on(
            "ready",
            function () {
              c.gate && d._trigger(a.jPlayer.event.loadeddata);
            },
            !1
          ),
          b.on(
            "duration",
            function () {
              c.gate &&
                (d._getAuroraStatus(b),
                d._updateInterface(),
                d._trigger(a.jPlayer.event.durationchange));
            },
            !1
          ),
          b.on(
            "end",
            function () {
              c.gate &&
                (d._updateButtons(!1),
                d._getAuroraStatus(b, !0),
                d._updateInterface(),
                d._trigger(a.jPlayer.event.ended));
            },
            !1
          ),
          b.on(
            "error",
            function () {
              c.gate &&
                (d._updateButtons(!1),
                d._seeked(),
                d.status.srcSet &&
                  ((d.status.waitForLoad = !0),
                  (d.status.waitForPlay = !0),
                  d.status.video &&
                    !d.status.nativeVideoControls &&
                    d.internal.video.jq.css({ width: "0px", height: "0px" }),
                  d._validString(d.status.media.poster) &&
                    !d.status.nativeVideoControls &&
                    d.internal.poster.jq.show(),
                  d.css.jq.videoPlay.length && d.css.jq.videoPlay.show(),
                  d._error({
                    type: a.jPlayer.error.URL,
                    context: d.status.src,
                    message: a.jPlayer.errorMsg.URL,
                    hint: a.jPlayer.errorHint.URL,
                  })));
            },
            !1
          );
      },
      _getHtmlStatus: function (a, b) {
        var c = 0,
          d = 0,
          e = 0,
          f = 0;
        isFinite(a.duration) && (this.status.duration = a.duration),
          (c = a.currentTime),
          (d = this.status.duration > 0 ? (100 * c) / this.status.duration : 0),
          "object" == typeof a.seekable && a.seekable.length > 0
            ? ((e =
                this.status.duration > 0
                  ? (100 * a.seekable.end(a.seekable.length - 1)) /
                    this.status.duration
                  : 100),
              (f =
                this.status.duration > 0
                  ? (100 * a.currentTime) /
                    a.seekable.end(a.seekable.length - 1)
                  : 0))
            : ((e = 100), (f = d)),
          b && ((c = 0), (f = 0), (d = 0)),
          (this.status.seekPercent = e),
          (this.status.currentPercentRelative = f),
          (this.status.currentPercentAbsolute = d),
          (this.status.currentTime = c),
          (this.status.remaining =
            this.status.duration - this.status.currentTime),
          (this.status.videoWidth = a.videoWidth),
          (this.status.videoHeight = a.videoHeight),
          (this.status.readyState = a.readyState),
          (this.status.networkState = a.networkState),
          (this.status.playbackRate = a.playbackRate),
          (this.status.ended = a.ended);
      },
      _getAuroraStatus: function (a, b) {
        var c = 0,
          d = 0,
          e = 0,
          f = 0;
        (this.status.duration = a.duration / 1e3),
          (c = a.currentTime / 1e3),
          (d = this.status.duration > 0 ? (100 * c) / this.status.duration : 0),
          a.buffered > 0
            ? ((e =
                this.status.duration > 0
                  ? (a.buffered * this.status.duration) / this.status.duration
                  : 100),
              (f =
                this.status.duration > 0
                  ? c / (a.buffered * this.status.duration)
                  : 0))
            : ((e = 100), (f = d)),
          b && ((c = 0), (f = 0), (d = 0)),
          (this.status.seekPercent = e),
          (this.status.currentPercentRelative = f),
          (this.status.currentPercentAbsolute = d),
          (this.status.currentTime = c),
          (this.status.remaining =
            this.status.duration - this.status.currentTime),
          (this.status.readyState = 4),
          (this.status.networkState = 0),
          (this.status.playbackRate = 1),
          (this.status.ended = !1);
      },
      _resetStatus: function () {
        this.status = a.extend({}, this.status, a.jPlayer.prototype.status);
      },
      _trigger: function (b, c, d) {
        var e = a.Event(b);
        (e.jPlayer = {}),
          (e.jPlayer.version = a.extend({}, this.version)),
          (e.jPlayer.options = a.extend(!0, {}, this.options)),
          (e.jPlayer.status = a.extend(!0, {}, this.status)),
          (e.jPlayer.html = a.extend(!0, {}, this.html)),
          (e.jPlayer.aurora = a.extend(!0, {}, this.aurora)),
          (e.jPlayer.flash = a.extend(!0, {}, this.flash)),
          c && (e.jPlayer.error = a.extend({}, c)),
          d && (e.jPlayer.warning = a.extend({}, d)),
          this.element.trigger(e);
      },
      jPlayerFlashEvent: function (b, c) {
        if (b === a.jPlayer.event.ready)
          if (this.internal.ready) {
            if (this.flash.gate) {
              if (this.status.srcSet) {
                var d = this.status.currentTime,
                  e = this.status.paused;
                this.setMedia(this.status.media),
                  this.volumeWorker(this.options.volume),
                  d > 0 && (e ? this.pause(d) : this.play(d));
              }
              this._trigger(a.jPlayer.event.flashreset);
            }
          } else
            (this.internal.ready = !0),
              this.internal.flash.jq.css({ width: "0px", height: "0px" }),
              (this.version.flash = c.version),
              this.version.needFlash !== this.version.flash &&
                this._error({
                  type: a.jPlayer.error.VERSION,
                  context: this.version.flash,
                  message: a.jPlayer.errorMsg.VERSION + this.version.flash,
                  hint: a.jPlayer.errorHint.VERSION,
                }),
              this._trigger(a.jPlayer.event.repeat),
              this._trigger(b);
        if (this.flash.gate)
          switch (b) {
            case a.jPlayer.event.progress:
              this._getFlashStatus(c),
                this._updateInterface(),
                this._trigger(b);
              break;
            case a.jPlayer.event.timeupdate:
              this._getFlashStatus(c),
                this._updateInterface(),
                this._trigger(b);
              break;
            case a.jPlayer.event.play:
              this._seeked(), this._updateButtons(!0), this._trigger(b);
              break;
            case a.jPlayer.event.pause:
              this._updateButtons(!1), this._trigger(b);
              break;
            case a.jPlayer.event.ended:
              this._updateButtons(!1), this._trigger(b);
              break;
            case a.jPlayer.event.click:
              this._trigger(b);
              break;
            case a.jPlayer.event.error:
              (this.status.waitForLoad = !0),
                (this.status.waitForPlay = !0),
                this.status.video &&
                  this.internal.flash.jq.css({ width: "0px", height: "0px" }),
                this._validString(this.status.media.poster) &&
                  this.internal.poster.jq.show(),
                this.css.jq.videoPlay.length &&
                  this.status.video &&
                  this.css.jq.videoPlay.show(),
                this.status.video
                  ? this._flash_setVideo(this.status.media)
                  : this._flash_setAudio(this.status.media),
                this._updateButtons(!1),
                this._error({
                  type: a.jPlayer.error.URL,
                  context: c.src,
                  message: a.jPlayer.errorMsg.URL,
                  hint: a.jPlayer.errorHint.URL,
                });
              break;
            case a.jPlayer.event.seeking:
              this._seeking(), this._trigger(b);
              break;
            case a.jPlayer.event.seeked:
              this._seeked(), this._trigger(b);
              break;
            case a.jPlayer.event.ready:
              break;
            default:
              this._trigger(b);
          }
        return !1;
      },
      _getFlashStatus: function (a) {
        (this.status.seekPercent = a.seekPercent),
          (this.status.currentPercentRelative = a.currentPercentRelative),
          (this.status.currentPercentAbsolute = a.currentPercentAbsolute),
          (this.status.currentTime = a.currentTime),
          (this.status.duration = a.duration),
          (this.status.remaining = a.duration - a.currentTime),
          (this.status.videoWidth = a.videoWidth),
          (this.status.videoHeight = a.videoHeight),
          (this.status.readyState = 4),
          (this.status.networkState = 0),
          (this.status.playbackRate = 1),
          (this.status.ended = !1);
      },
      _updateButtons: function (a) {
        a === b ? (a = !this.status.paused) : (this.status.paused = !a),
          a ? this.addStateClass("playing") : this.removeStateClass("playing"),
          !this.status.noFullWindow && this.options.fullWindow
            ? this.addStateClass("fullScreen")
            : this.removeStateClass("fullScreen"),
          this.options.loop
            ? this.addStateClass("looped")
            : this.removeStateClass("looped"),
          this.css.jq.play.length &&
            this.css.jq.pause.length &&
            (a
              ? (this.css.jq.play.hide(), this.css.jq.pause.show())
              : (this.css.jq.play.show(), this.css.jq.pause.hide())),
          this.css.jq.restoreScreen.length &&
            this.css.jq.fullScreen.length &&
            (this.status.noFullWindow
              ? (this.css.jq.fullScreen.hide(),
                this.css.jq.restoreScreen.hide())
              : this.options.fullWindow
              ? (this.css.jq.fullScreen.hide(),
                this.css.jq.restoreScreen.show())
              : (this.css.jq.fullScreen.show(),
                this.css.jq.restoreScreen.hide())),
          this.css.jq.repeat.length &&
            this.css.jq.repeatOff.length &&
            (this.options.loop
              ? (this.css.jq.repeat.hide(), this.css.jq.repeatOff.show())
              : (this.css.jq.repeat.show(), this.css.jq.repeatOff.hide()));
      },
      _updateInterface: function () {
        this.css.jq.seekBar.length &&
          this.css.jq.seekBar.width(this.status.seekPercent + "%"),
          this.css.jq.playBar.length &&
            (this.options.smoothPlayBar
              ? this.css.jq.playBar
                  .stop()
                  .animate(
                    { width: this.status.currentPercentAbsolute + "%" },
                    250,
                    "linear"
                  )
              : this.css.jq.playBar.width(
                  this.status.currentPercentRelative + "%"
                ));
        var a = "";
        this.css.jq.currentTime.length &&
          ((a = this._convertTime(this.status.currentTime)),
          a !== this.css.jq.currentTime.text() &&
            this.css.jq.currentTime.text(
              this._convertTime(this.status.currentTime)
            ));
        var b = "",
          c = this.status.duration,
          d = this.status.remaining;
        this.css.jq.duration.length &&
          ("string" == typeof this.status.media.duration
            ? (b = this.status.media.duration)
            : ("number" == typeof this.status.media.duration &&
                ((c = this.status.media.duration),
                (d = c - this.status.currentTime)),
              (b = this.options.remainingDuration
                ? (d > 0 ? "-" : "") + this._convertTime(d)
                : this._convertTime(c))),
          b !== this.css.jq.duration.text() && this.css.jq.duration.text(b));
      },
      _convertTime: c.prototype.time,
      _seeking: function () {
        this.css.jq.seekBar.length &&
          this.css.jq.seekBar.addClass("jp-seeking-bg"),
          this.addStateClass("seeking");
      },
      _seeked: function () {
        this.css.jq.seekBar.length &&
          this.css.jq.seekBar.removeClass("jp-seeking-bg"),
          this.removeStateClass("seeking");
      },
      _resetGate: function () {
        (this.html.audio.gate = !1),
          (this.html.video.gate = !1),
          (this.aurora.gate = !1),
          (this.flash.gate = !1);
      },
      _resetActive: function () {
        (this.html.active = !1),
          (this.aurora.active = !1),
          (this.flash.active = !1);
      },
      _escapeHtml: function (a) {
        return a
          .split("&")
          .join("&amp;")
          .split("<")
          .join("&lt;")
          .split(">")
          .join("&gt;")
          .split('"')
          .join("&quot;");
      },
      _qualifyURL: function (a) {
        var b = document.createElement("div");
        return (
          (b.innerHTML = '<a href="' + this._escapeHtml(a) + '">x</a>'),
          b.firstChild.href
        );
      },
      _absoluteMediaUrls: function (b) {
        var c = this;
        return (
          a.each(b, function (a, d) {
            d &&
              c.format[a] &&
              "data:" !== d.substr(0, 5) &&
              (b[a] = c._qualifyURL(d));
          }),
          b
        );
      },
      addStateClass: function (a) {
        this.ancestorJq.length &&
          this.ancestorJq.addClass(this.options.stateClass[a]);
      },
      removeStateClass: function (a) {
        this.ancestorJq.length &&
          this.ancestorJq.removeClass(this.options.stateClass[a]);
      },
      setMedia: function (b) {
        var c = this,
          d = !1,
          e = this.status.media.poster !== b.poster;
        this._resetMedia(),
          this._resetGate(),
          this._resetActive(),
          (this.androidFix.setMedia = !1),
          (this.androidFix.play = !1),
          (this.androidFix.pause = !1),
          (b = this._absoluteMediaUrls(b)),
          a.each(this.formats, function (e, f) {
            var g = "video" === c.format[f].media;
            return (
              a.each(c.solutions, function (e, h) {
                if (c[h].support[f] && c._validString(b[f])) {
                  var i = "html" === h,
                    j = "aurora" === h;
                  return (
                    g
                      ? (i
                          ? ((c.html.video.gate = !0),
                            c._html_setVideo(b),
                            (c.html.active = !0))
                          : ((c.flash.gate = !0),
                            c._flash_setVideo(b),
                            (c.flash.active = !0)),
                        c.css.jq.videoPlay.length && c.css.jq.videoPlay.show(),
                        (c.status.video = !0))
                      : (i
                          ? ((c.html.audio.gate = !0),
                            c._html_setAudio(b),
                            (c.html.active = !0),
                            a.jPlayer.platform.android &&
                              (c.androidFix.setMedia = !0))
                          : j
                          ? ((c.aurora.gate = !0),
                            c._aurora_setAudio(b),
                            (c.aurora.active = !0))
                          : ((c.flash.gate = !0),
                            c._flash_setAudio(b),
                            (c.flash.active = !0)),
                        c.css.jq.videoPlay.length && c.css.jq.videoPlay.hide(),
                        (c.status.video = !1)),
                    (d = !0),
                    !1
                  );
                }
              }),
              d ? !1 : void 0
            );
          }),
          d
            ? ((this.status.nativeVideoControls && this.html.video.gate) ||
                (this._validString(b.poster) &&
                  (e
                    ? (this.htmlElement.poster.src = b.poster)
                    : this.internal.poster.jq.show())),
              "string" == typeof b.title &&
                (this.css.jq.title.length && this.css.jq.title.html(b.title),
                this.htmlElement.audio &&
                  this.htmlElement.audio.setAttribute("title", b.title),
                this.htmlElement.video &&
                  this.htmlElement.video.setAttribute("title", b.title)),
              (this.status.srcSet = !0),
              (this.status.media = a.extend({}, b)),
              this._updateButtons(!1),
              this._updateInterface(),
              this._trigger(a.jPlayer.event.setmedia))
            : this._error({
                type: a.jPlayer.error.NO_SUPPORT,
                context: "{supplied:'" + this.options.supplied + "'}",
                message: a.jPlayer.errorMsg.NO_SUPPORT,
                hint: a.jPlayer.errorHint.NO_SUPPORT,
              });
      },
      _resetMedia: function () {
        this._resetStatus(),
          this._updateButtons(!1),
          this._updateInterface(),
          this._seeked(),
          this.internal.poster.jq.hide(),
          clearTimeout(this.internal.htmlDlyCmdId),
          this.html.active
            ? this._html_resetMedia()
            : this.aurora.active
            ? this._aurora_resetMedia()
            : this.flash.active && this._flash_resetMedia();
      },
      clearMedia: function () {
        this._resetMedia(),
          this.html.active
            ? this._html_clearMedia()
            : this.aurora.active
            ? this._aurora_clearMedia()
            : this.flash.active && this._flash_clearMedia(),
          this._resetGate(),
          this._resetActive();
      },
      load: function () {
        this.status.srcSet
          ? this.html.active
            ? this._html_load()
            : this.aurora.active
            ? this._aurora_load()
            : this.flash.active && this._flash_load()
          : this._urlNotSetError("load");
      },
      focus: function () {
        this.options.keyEnabled && (a.jPlayer.focus = this);
      },
      play: function (a) {
        var b = "object" == typeof a;
        b && this.options.useStateClassSkin && !this.status.paused
          ? this.pause(a)
          : ((a = "number" == typeof a ? a : 0 / 0),
            this.status.srcSet
              ? (this.focus(),
                this.html.active
                  ? this._html_play(a)
                  : this.aurora.active
                  ? this._aurora_play(a)
                  : this.flash.active && this._flash_play(a))
              : this._urlNotSetError("play"));
      },
      videoPlay: function () {
        this.play();
      },
      pause: function (a) {
        (a = "number" == typeof a ? a : 0 / 0),
          this.status.srcSet
            ? this.html.active
              ? this._html_pause(a)
              : this.aurora.active
              ? this._aurora_pause(a)
              : this.flash.active && this._flash_pause(a)
            : this._urlNotSetError("pause");
      },
      tellOthers: function (b, c) {
        var d = this,
          e = "function" == typeof c,
          f = Array.prototype.slice.call(arguments);
        "string" == typeof b &&
          (e && f.splice(1, 1),
          a.jPlayer.prototype.destroyRemoved(),
          a.each(this.instances, function () {
            d.element !== this &&
              (!e || c.call(this.data("jPlayer"), d)) &&
              this.jPlayer.apply(this, f);
          }));
      },
      pauseOthers: function (a) {
        this.tellOthers(
          "pause",
          function () {
            return this.status.srcSet;
          },
          a
        );
      },
      stop: function () {
        this.status.srcSet
          ? this.html.active
            ? this._html_pause(0)
            : this.aurora.active
            ? this._aurora_pause(0)
            : this.flash.active && this._flash_pause(0)
          : this._urlNotSetError("stop");
      },
      playHead: function (a) {
        (a = this._limitValue(a, 0, 100)),
          this.status.srcSet
            ? this.html.active
              ? this._html_playHead(a)
              : this.aurora.active
              ? this._aurora_playHead(a)
              : this.flash.active && this._flash_playHead(a)
            : this._urlNotSetError("playHead");
      },
      _muted: function (a) {
        this.mutedWorker(a),
          this.options.globalVolume &&
            this.tellOthers(
              "mutedWorker",
              function () {
                return this.options.globalVolume;
              },
              a
            );
      },
      mutedWorker: function (b) {
        (this.options.muted = b),
          this.html.used && this._html_setProperty("muted", b),
          this.aurora.used && this._aurora_mute(b),
          this.flash.used && this._flash_mute(b),
          this.html.video.gate ||
            this.html.audio.gate ||
            (this._updateMute(b),
            this._updateVolume(this.options.volume),
            this._trigger(a.jPlayer.event.volumechange));
      },
      mute: function (a) {
        var c = "object" == typeof a;
        c && this.options.useStateClassSkin && this.options.muted
          ? this._muted(!1)
          : ((a = a === b ? !0 : !!a), this._muted(a));
      },
      unmute: function (a) {
        (a = a === b ? !0 : !!a), this._muted(!a);
      },
      _updateMute: function (a) {
        a === b && (a = this.options.muted),
          a ? this.addStateClass("muted") : this.removeStateClass("muted"),
          this.css.jq.mute.length &&
            this.css.jq.unmute.length &&
            (this.status.noVolume
              ? (this.css.jq.mute.hide(), this.css.jq.unmute.hide())
              : a
              ? (this.css.jq.mute.hide(), this.css.jq.unmute.show())
              : (this.css.jq.mute.show(), this.css.jq.unmute.hide()));
      },
      volume: function (a) {
        this.volumeWorker(a),
          this.options.globalVolume &&
            this.tellOthers(
              "volumeWorker",
              function () {
                return this.options.globalVolume;
              },
              a
            );
      },
      volumeWorker: function (b) {
        (b = this._limitValue(b, 0, 1)),
          (this.options.volume = b),
          this.html.used && this._html_setProperty("volume", b),
          this.aurora.used && this._aurora_volume(b),
          this.flash.used && this._flash_volume(b),
          this.html.video.gate ||
            this.html.audio.gate ||
            (this._updateVolume(b),
            this._trigger(a.jPlayer.event.volumechange));
      },
      volumeBar: function (b) {
        if (this.css.jq.volumeBar.length) {
          var c = a(b.currentTarget),
            d = c.offset(),
            e = b.pageX - d.left,
            f = c.width(),
            g = c.height() - b.pageY + d.top,
            h = c.height();
          this.volume(this.options.verticalVolume ? g / h : e / f);
        }
        this.options.muted && this._muted(!1);
      },
      _updateVolume: function (a) {
        a === b && (a = this.options.volume),
          (a = this.options.muted ? 0 : a),
          this.status.noVolume
            ? (this.addStateClass("noVolume"),
              this.css.jq.volumeBar.length && this.css.jq.volumeBar.hide(),
              this.css.jq.volumeBarValue.length &&
                this.css.jq.volumeBarValue.hide(),
              this.css.jq.volumeMax.length && this.css.jq.volumeMax.hide())
            : (this.removeStateClass("noVolume"),
              this.css.jq.volumeBar.length && this.css.jq.volumeBar.show(),
              this.css.jq.volumeBarValue.length &&
                (this.css.jq.volumeBarValue.show(),
                this.css.jq.volumeBarValue[
                  this.options.verticalVolume ? "height" : "width"
                ](100 * a + "%")),
              this.css.jq.volumeMax.length && this.css.jq.volumeMax.show());
      },
      volumeMax: function () {
        this.volume(1), this.options.muted && this._muted(!1);
      },
      _cssSelectorAncestor: function (b) {
        var c = this;
        (this.options.cssSelectorAncestor = b),
          this._removeUiClass(),
          (this.ancestorJq = b ? a(b) : []),
          b &&
            1 !== this.ancestorJq.length &&
            this._warning({
              type: a.jPlayer.warning.CSS_SELECTOR_COUNT,
              context: b,
              message:
                a.jPlayer.warningMsg.CSS_SELECTOR_COUNT +
                this.ancestorJq.length +
                " found for cssSelectorAncestor.",
              hint: a.jPlayer.warningHint.CSS_SELECTOR_COUNT,
            }),
          this._addUiClass(),
          a.each(this.options.cssSelector, function (a, b) {
            c._cssSelector(a, b);
          }),
          this._updateInterface(),
          this._updateButtons(),
          this._updateAutohide(),
          this._updateVolume(),
          this._updateMute();
      },
      _cssSelector: function (b, c) {
        var d = this;
        if ("string" == typeof c)
          if (a.jPlayer.prototype.options.cssSelector[b]) {
            if (
              (this.css.jq[b] &&
                this.css.jq[b].length &&
                this.css.jq[b].unbind(".jPlayer"),
              (this.options.cssSelector[b] = c),
              (this.css.cs[b] = this.options.cssSelectorAncestor + " " + c),
              (this.css.jq[b] = c ? a(this.css.cs[b]) : []),
              this.css.jq[b].length && this[b])
            ) {
              var e = function (c) {
                c.preventDefault(),
                  d[b](c),
                  d.options.autoBlur ? a(this).blur() : a(this).focus();
              };
              this.css.jq[b].bind("click.jPlayer", e);
            }
            c &&
              1 !== this.css.jq[b].length &&
              this._warning({
                type: a.jPlayer.warning.CSS_SELECTOR_COUNT,
                context: this.css.cs[b],
                message:
                  a.jPlayer.warningMsg.CSS_SELECTOR_COUNT +
                  this.css.jq[b].length +
                  " found for " +
                  b +
                  " method.",
                hint: a.jPlayer.warningHint.CSS_SELECTOR_COUNT,
              });
          } else
            this._warning({
              type: a.jPlayer.warning.CSS_SELECTOR_METHOD,
              context: b,
              message: a.jPlayer.warningMsg.CSS_SELECTOR_METHOD,
              hint: a.jPlayer.warningHint.CSS_SELECTOR_METHOD,
            });
        else
          this._warning({
            type: a.jPlayer.warning.CSS_SELECTOR_STRING,
            context: c,
            message: a.jPlayer.warningMsg.CSS_SELECTOR_STRING,
            hint: a.jPlayer.warningHint.CSS_SELECTOR_STRING,
          });
      },
      duration: function (a) {
        this.options.toggleDuration &&
          (this.options.captureDuration && a.stopPropagation(),
          this._setOption(
            "remainingDuration",
            !this.options.remainingDuration
          ));
      },
      seekBar: function (b) {
        if (this.css.jq.seekBar.length) {
          var c = a(b.currentTarget),
            d = c.offset(),
            e = b.pageX - d.left,
            f = c.width(),
            g = (100 * e) / f;
          this.playHead(g);
        }
      },
      playbackRate: function (a) {
        this._setOption("playbackRate", a);
      },
      playbackRateBar: function (b) {
        if (this.css.jq.playbackRateBar.length) {
          var c,
            d,
            e = a(b.currentTarget),
            f = e.offset(),
            g = b.pageX - f.left,
            h = e.width(),
            i = e.height() - b.pageY + f.top,
            j = e.height();
          (c = this.options.verticalPlaybackRate ? i / j : g / h),
            (d =
              c *
                (this.options.maxPlaybackRate - this.options.minPlaybackRate) +
              this.options.minPlaybackRate),
            this.playbackRate(d);
        }
      },
      _updatePlaybackRate: function () {
        var a = this.options.playbackRate,
          b =
            (a - this.options.minPlaybackRate) /
            (this.options.maxPlaybackRate - this.options.minPlaybackRate);
        this.status.playbackRateEnabled
          ? (this.css.jq.playbackRateBar.length &&
              this.css.jq.playbackRateBar.show(),
            this.css.jq.playbackRateBarValue.length &&
              (this.css.jq.playbackRateBarValue.show(),
              this.css.jq.playbackRateBarValue[
                this.options.verticalPlaybackRate ? "height" : "width"
              ](100 * b + "%")))
          : (this.css.jq.playbackRateBar.length &&
              this.css.jq.playbackRateBar.hide(),
            this.css.jq.playbackRateBarValue.length &&
              this.css.jq.playbackRateBarValue.hide());
      },
      repeat: function (a) {
        var b = "object" == typeof a;
        this._loop(
          b && this.options.useStateClassSkin && this.options.loop ? !1 : !0
        );
      },
      repeatOff: function () {
        this._loop(!1);
      },
      _loop: function (b) {
        this.options.loop !== b &&
          ((this.options.loop = b),
          this._updateButtons(),
          this._trigger(a.jPlayer.event.repeat));
      },
      option: function (c, d) {
        var e = c;
        if (0 === arguments.length) return a.extend(!0, {}, this.options);
        if ("string" == typeof c) {
          var f = c.split(".");
          if (d === b) {
            for (
              var g = a.extend(!0, {}, this.options), h = 0;
              h < f.length;
              h++
            ) {
              if (g[f[h]] === b)
                return (
                  this._warning({
                    type: a.jPlayer.warning.OPTION_KEY,
                    context: c,
                    message: a.jPlayer.warningMsg.OPTION_KEY,
                    hint: a.jPlayer.warningHint.OPTION_KEY,
                  }),
                  b
                );
              g = g[f[h]];
            }
            return g;
          }
          e = {};
          for (var i = e, j = 0; j < f.length; j++)
            j < f.length - 1 ? ((i[f[j]] = {}), (i = i[f[j]])) : (i[f[j]] = d);
        }
        return this._setOptions(e), this;
      },
      _setOptions: function (b) {
        var c = this;
        return (
          a.each(b, function (a, b) {
            c._setOption(a, b);
          }),
          this
        );
      },
      _setOption: function (b, c) {
        var d = this;
        switch (b) {
          case "volume":
            this.volume(c);
            break;
          case "muted":
            this._muted(c);
            break;
          case "globalVolume":
            this.options[b] = c;
            break;
          case "cssSelectorAncestor":
            this._cssSelectorAncestor(c);
            break;
          case "cssSelector":
            a.each(c, function (a, b) {
              d._cssSelector(a, b);
            });
            break;
          case "playbackRate":
            (this.options[b] = c =
              this._limitValue(
                c,
                this.options.minPlaybackRate,
                this.options.maxPlaybackRate
              )),
              this.html.used && this._html_setProperty("playbackRate", c),
              this._updatePlaybackRate();
            break;
          case "defaultPlaybackRate":
            (this.options[b] = c =
              this._limitValue(
                c,
                this.options.minPlaybackRate,
                this.options.maxPlaybackRate
              )),
              this.html.used &&
                this._html_setProperty("defaultPlaybackRate", c),
              this._updatePlaybackRate();
            break;
          case "minPlaybackRate":
            (this.options[b] = c =
              this._limitValue(c, 0.1, this.options.maxPlaybackRate - 0.1)),
              this._updatePlaybackRate();
            break;
          case "maxPlaybackRate":
            (this.options[b] = c =
              this._limitValue(c, this.options.minPlaybackRate + 0.1, 16)),
              this._updatePlaybackRate();
            break;
          case "fullScreen":
            if (this.options[b] !== c) {
              var e = a.jPlayer.nativeFeatures.fullscreen.used.webkitVideo;
              (!e || (e && !this.status.waitForPlay)) &&
                (e || (this.options[b] = c),
                c ? this._requestFullscreen() : this._exitFullscreen(),
                e || this._setOption("fullWindow", c));
            }
            break;
          case "fullWindow":
            this.options[b] !== c &&
              (this._removeUiClass(),
              (this.options[b] = c),
              this._refreshSize());
            break;
          case "size":
            this.options.fullWindow ||
              this.options[b].cssClass === c.cssClass ||
              this._removeUiClass(),
              (this.options[b] = a.extend({}, this.options[b], c)),
              this._refreshSize();
            break;
          case "sizeFull":
            this.options.fullWindow &&
              this.options[b].cssClass !== c.cssClass &&
              this._removeUiClass(),
              (this.options[b] = a.extend({}, this.options[b], c)),
              this._refreshSize();
            break;
          case "autohide":
            (this.options[b] = a.extend({}, this.options[b], c)),
              this._updateAutohide();
            break;
          case "loop":
            this._loop(c);
            break;
          case "remainingDuration":
            (this.options[b] = c), this._updateInterface();
            break;
          case "toggleDuration":
            this.options[b] = c;
            break;
          case "nativeVideoControls":
            (this.options[b] = a.extend({}, this.options[b], c)),
              (this.status.nativeVideoControls = this._uaBlocklist(
                this.options.nativeVideoControls
              )),
              this._restrictNativeVideoControls(),
              this._updateNativeVideoControls();
            break;
          case "noFullWindow":
            (this.options[b] = a.extend({}, this.options[b], c)),
              (this.status.nativeVideoControls = this._uaBlocklist(
                this.options.nativeVideoControls
              )),
              (this.status.noFullWindow = this._uaBlocklist(
                this.options.noFullWindow
              )),
              this._restrictNativeVideoControls(),
              this._updateButtons();
            break;
          case "noVolume":
            (this.options[b] = a.extend({}, this.options[b], c)),
              (this.status.noVolume = this._uaBlocklist(this.options.noVolume)),
              this._updateVolume(),
              this._updateMute();
            break;
          case "emulateHtml":
            this.options[b] !== c &&
              ((this.options[b] = c),
              c ? this._emulateHtmlBridge() : this._destroyHtmlBridge());
            break;
          case "timeFormat":
            this.options[b] = a.extend({}, this.options[b], c);
            break;
          case "keyEnabled":
            (this.options[b] = c),
              c || this !== a.jPlayer.focus || (a.jPlayer.focus = null);
            break;
          case "keyBindings":
            this.options[b] = a.extend(!0, {}, this.options[b], c);
            break;
          case "audioFullScreen":
            this.options[b] = c;
            break;
          case "autoBlur":
            this.options[b] = c;
        }
        return this;
      },
      _refreshSize: function () {
        this._setSize(),
          this._addUiClass(),
          this._updateSize(),
          this._updateButtons(),
          this._updateAutohide(),
          this._trigger(a.jPlayer.event.resize);
      },
      _setSize: function () {
        this.options.fullWindow
          ? ((this.status.width = this.options.sizeFull.width),
            (this.status.height = this.options.sizeFull.height),
            (this.status.cssClass = this.options.sizeFull.cssClass))
          : ((this.status.width = this.options.size.width),
            (this.status.height = this.options.size.height),
            (this.status.cssClass = this.options.size.cssClass)),
          this.element.css({
            width: this.status.width,
            height: this.status.height,
          });
      },
      _addUiClass: function () {
        this.ancestorJq.length &&
          this.ancestorJq.addClass(this.status.cssClass);
      },
      _removeUiClass: function () {
        this.ancestorJq.length &&
          this.ancestorJq.removeClass(this.status.cssClass);
      },
      _updateSize: function () {
        this.internal.poster.jq.css({
          width: this.status.width,
          height: this.status.height,
        }),
          (!this.status.waitForPlay && this.html.active && this.status.video) ||
          (this.html.video.available &&
            this.html.used &&
            this.status.nativeVideoControls)
            ? this.internal.video.jq.css({
                width: this.status.width,
                height: this.status.height,
              })
            : !this.status.waitForPlay &&
              this.flash.active &&
              this.status.video &&
              this.internal.flash.jq.css({
                width: this.status.width,
                height: this.status.height,
              });
      },
      _updateAutohide: function () {
        var a = this,
          b = "mousemove.jPlayer",
          c = ".jPlayerAutohide",
          d = b + c,
          e = function (b) {
            var c,
              d,
              e = !1;
            "undefined" != typeof a.internal.mouse
              ? ((c = a.internal.mouse.x - b.pageX),
                (d = a.internal.mouse.y - b.pageY),
                (e = Math.floor(c) > 0 || Math.floor(d) > 0))
              : (e = !0),
              (a.internal.mouse = { x: b.pageX, y: b.pageY }),
              e &&
                a.css.jq.gui.fadeIn(a.options.autohide.fadeIn, function () {
                  clearTimeout(a.internal.autohideId),
                    (a.internal.autohideId = setTimeout(function () {
                      a.css.jq.gui.fadeOut(a.options.autohide.fadeOut);
                    }, a.options.autohide.hold));
                });
          };
        this.css.jq.gui.length &&
          (this.css.jq.gui.stop(!0, !0),
          clearTimeout(this.internal.autohideId),
          delete this.internal.mouse,
          this.element.unbind(c),
          this.css.jq.gui.unbind(c),
          this.status.nativeVideoControls
            ? this.css.jq.gui.hide()
            : (this.options.fullWindow && this.options.autohide.full) ||
              (!this.options.fullWindow && this.options.autohide.restored)
            ? (this.element.bind(d, e),
              this.css.jq.gui.bind(d, e),
              this.css.jq.gui.hide())
            : this.css.jq.gui.show());
      },
      fullScreen: function (a) {
        var b = "object" == typeof a;
        b && this.options.useStateClassSkin && this.options.fullScreen
          ? this._setOption("fullScreen", !1)
          : this._setOption("fullScreen", !0);
      },
      restoreScreen: function () {
        this._setOption("fullScreen", !1);
      },
      _fullscreenAddEventListeners: function () {
        var b = this,
          c = a.jPlayer.nativeFeatures.fullscreen;
        c.api.fullscreenEnabled &&
          c.event.fullscreenchange &&
          ("function" != typeof this.internal.fullscreenchangeHandler &&
            (this.internal.fullscreenchangeHandler = function () {
              b._fullscreenchange();
            }),
          document.addEventListener(
            c.event.fullscreenchange,
            this.internal.fullscreenchangeHandler,
            !1
          ));
      },
      _fullscreenRemoveEventListeners: function () {
        var b = a.jPlayer.nativeFeatures.fullscreen;
        this.internal.fullscreenchangeHandler &&
          document.removeEventListener(
            b.event.fullscreenchange,
            this.internal.fullscreenchangeHandler,
            !1
          );
      },
      _fullscreenchange: function () {
        this.options.fullScreen &&
          !a.jPlayer.nativeFeatures.fullscreen.api.fullscreenElement() &&
          this._setOption("fullScreen", !1);
      },
      _requestFullscreen: function () {
        var b = this.ancestorJq.length ? this.ancestorJq[0] : this.element[0],
          c = a.jPlayer.nativeFeatures.fullscreen;
        c.used.webkitVideo && (b = this.htmlElement.video),
          c.api.fullscreenEnabled && c.api.requestFullscreen(b);
      },
      _exitFullscreen: function () {
        var b,
          c = a.jPlayer.nativeFeatures.fullscreen;
        c.used.webkitVideo && (b = this.htmlElement.video),
          c.api.fullscreenEnabled && c.api.exitFullscreen(b);
      },
      _html_initMedia: function (b) {
        var c = a(this.htmlElement.media).empty();
        a.each(b.track || [], function (a, b) {
          var d = document.createElement("track");
          d.setAttribute("kind", b.kind ? b.kind : ""),
            d.setAttribute("src", b.src ? b.src : ""),
            d.setAttribute("srclang", b.srclang ? b.srclang : ""),
            d.setAttribute("label", b.label ? b.label : ""),
            b.def && d.setAttribute("default", b.def),
            c.append(d);
        }),
          (this.htmlElement.media.src = this.status.src),
          "none" !== this.options.preload && this._html_load(),
          this._trigger(a.jPlayer.event.timeupdate);
      },
      _html_setFormat: function (b) {
        var c = this;
        a.each(this.formats, function (a, d) {
          return c.html.support[d] && b[d]
            ? ((c.status.src = b[d]),
              (c.status.format[d] = !0),
              (c.status.formatType = d),
              !1)
            : void 0;
        });
      },
      _html_setAudio: function (a) {
        this._html_setFormat(a),
          (this.htmlElement.media = this.htmlElement.audio),
          this._html_initMedia(a);
      },
      _html_setVideo: function (a) {
        this._html_setFormat(a),
          this.status.nativeVideoControls &&
            (this.htmlElement.video.poster = this._validString(a.poster)
              ? a.poster
              : ""),
          (this.htmlElement.media = this.htmlElement.video),
          this._html_initMedia(a);
      },
      _html_resetMedia: function () {
        this.htmlElement.media &&
          (this.htmlElement.media.id !== this.internal.video.id ||
            this.status.nativeVideoControls ||
            this.internal.video.jq.css({ width: "0px", height: "0px" }),
          this.htmlElement.media.pause());
      },
      _html_clearMedia: function () {
        this.htmlElement.media &&
          ((this.htmlElement.media.src = "about:blank"),
          this.htmlElement.media.load());
      },
      _html_load: function () {
        this.status.waitForLoad &&
          ((this.status.waitForLoad = !1), this.htmlElement.media.load()),
          clearTimeout(this.internal.htmlDlyCmdId);
      },
      _html_play: function (a) {
        var b = this,
          c = this.htmlElement.media;
        if (
          ((this.androidFix.pause = !1),
          this._html_load(),
          this.androidFix.setMedia)
        )
          (this.androidFix.play = !0), (this.androidFix.time = a);
        else if (isNaN(a)) c.play();
        else {
          this.internal.cmdsIgnored && c.play();
          try {
            if (
              c.seekable &&
              !("object" == typeof c.seekable && c.seekable.length > 0)
            )
              throw 1;
            (c.currentTime = a), c.play();
          } catch (d) {
            return void (this.internal.htmlDlyCmdId = setTimeout(function () {
              b.play(a);
            }, 250));
          }
        }
        this._html_checkWaitForPlay();
      },
      _html_pause: function (a) {
        var b = this,
          c = this.htmlElement.media;
        if (
          ((this.androidFix.play = !1),
          a > 0 ? this._html_load() : clearTimeout(this.internal.htmlDlyCmdId),
          c.pause(),
          this.androidFix.setMedia)
        )
          (this.androidFix.pause = !0), (this.androidFix.time = a);
        else if (!isNaN(a))
          try {
            if (
              c.seekable &&
              !("object" == typeof c.seekable && c.seekable.length > 0)
            )
              throw 1;
            c.currentTime = a;
          } catch (d) {
            return void (this.internal.htmlDlyCmdId = setTimeout(function () {
              b.pause(a);
            }, 250));
          }
        a > 0 && this._html_checkWaitForPlay();
      },
      _html_playHead: function (a) {
        var b = this,
          c = this.htmlElement.media;
        this._html_load();
        try {
          if ("object" == typeof c.seekable && c.seekable.length > 0)
            c.currentTime = (a * c.seekable.end(c.seekable.length - 1)) / 100;
          else {
            if (!(c.duration > 0) || isNaN(c.duration)) throw "e";
            c.currentTime = (a * c.duration) / 100;
          }
        } catch (d) {
          return void (this.internal.htmlDlyCmdId = setTimeout(function () {
            b.playHead(a);
          }, 250));
        }
        this.status.waitForLoad || this._html_checkWaitForPlay();
      },
      _html_checkWaitForPlay: function () {
        this.status.waitForPlay &&
          ((this.status.waitForPlay = !1),
          this.css.jq.videoPlay.length && this.css.jq.videoPlay.hide(),
          this.status.video &&
            (this.internal.poster.jq.hide(),
            this.internal.video.jq.css({
              width: this.status.width,
              height: this.status.height,
            })));
      },
      _html_setProperty: function (a, b) {
        this.html.audio.available && (this.htmlElement.audio[a] = b),
          this.html.video.available && (this.htmlElement.video[a] = b);
      },
      _aurora_setAudio: function (b) {
        var c = this;
        a.each(this.formats, function (a, d) {
          return c.aurora.support[d] && b[d]
            ? ((c.status.src = b[d]),
              (c.status.format[d] = !0),
              (c.status.formatType = d),
              !1)
            : void 0;
        }),
          (this.aurora.player = new AV.Player.fromURL(this.status.src)),
          this._addAuroraEventListeners(this.aurora.player, this.aurora),
          "auto" === this.options.preload &&
            (this._aurora_load(), (this.status.waitForLoad = !1));
      },
      _aurora_resetMedia: function () {
        this.aurora.player && this.aurora.player.stop();
      },
      _aurora_clearMedia: function () {},
      _aurora_load: function () {
        this.status.waitForLoad &&
          ((this.status.waitForLoad = !1), this.aurora.player.preload());
      },
      _aurora_play: function (b) {
        this.status.waitForLoad || isNaN(b) || this.aurora.player.seek(b),
          this.aurora.player.playing || this.aurora.player.play(),
          (this.status.waitForLoad = !1),
          this._aurora_checkWaitForPlay(),
          this._updateButtons(!0),
          this._trigger(a.jPlayer.event.play);
      },
      _aurora_pause: function (b) {
        isNaN(b) || this.aurora.player.seek(1e3 * b),
          this.aurora.player.pause(),
          b > 0 && this._aurora_checkWaitForPlay(),
          this._updateButtons(!1),
          this._trigger(a.jPlayer.event.pause);
      },
      _aurora_playHead: function (a) {
        this.aurora.player.duration > 0 &&
          this.aurora.player.seek((a * this.aurora.player.duration) / 100),
          this.status.waitForLoad || this._aurora_checkWaitForPlay();
      },
      _aurora_checkWaitForPlay: function () {
        this.status.waitForPlay && (this.status.waitForPlay = !1);
      },
      _aurora_volume: function (a) {
        this.aurora.player.volume = 100 * a;
      },
      _aurora_mute: function (a) {
        a
          ? ((this.aurora.properties.lastvolume = this.aurora.player.volume),
            (this.aurora.player.volume = 0))
          : (this.aurora.player.volume = this.aurora.properties.lastvolume),
          (this.aurora.properties.muted = a);
      },
      _flash_setAudio: function (b) {
        var c = this;
        try {
          a.each(this.formats, function (a, d) {
            if (c.flash.support[d] && b[d]) {
              switch (d) {
                case "m4a":
                case "fla":
                  c._getMovie().fl_setAudio_m4a(b[d]);
                  break;
                case "mp3":
                  c._getMovie().fl_setAudio_mp3(b[d]);
                  break;
                case "rtmpa":
                  c._getMovie().fl_setAudio_rtmp(b[d]);
              }
              return (
                (c.status.src = b[d]),
                (c.status.format[d] = !0),
                (c.status.formatType = d),
                !1
              );
            }
          }),
            "auto" === this.options.preload &&
              (this._flash_load(), (this.status.waitForLoad = !1));
        } catch (d) {
          this._flashError(d);
        }
      },
      _flash_setVideo: function (b) {
        var c = this;
        try {
          a.each(this.formats, function (a, d) {
            if (c.flash.support[d] && b[d]) {
              switch (d) {
                case "m4v":
                case "flv":
                  c._getMovie().fl_setVideo_m4v(b[d]);
                  break;
                case "rtmpv":
                  c._getMovie().fl_setVideo_rtmp(b[d]);
              }
              return (
                (c.status.src = b[d]),
                (c.status.format[d] = !0),
                (c.status.formatType = d),
                !1
              );
            }
          }),
            "auto" === this.options.preload &&
              (this._flash_load(), (this.status.waitForLoad = !1));
        } catch (d) {
          this._flashError(d);
        }
      },
      _flash_resetMedia: function () {
        this.internal.flash.jq.css({ width: "0px", height: "0px" }),
          this._flash_pause(0 / 0);
      },
      _flash_clearMedia: function () {
        try {
          this._getMovie().fl_clearMedia();
        } catch (a) {
          this._flashError(a);
        }
      },
      _flash_load: function () {
        try {
          this._getMovie().fl_load();
        } catch (a) {
          this._flashError(a);
        }
        this.status.waitForLoad = !1;
      },
      _flash_play: function (a) {
        try {
          this._getMovie().fl_play(a);
        } catch (b) {
          this._flashError(b);
        }
        (this.status.waitForLoad = !1), this._flash_checkWaitForPlay();
      },
      _flash_pause: function (a) {
        try {
          this._getMovie().fl_pause(a);
        } catch (b) {
          this._flashError(b);
        }
        a > 0 &&
          ((this.status.waitForLoad = !1), this._flash_checkWaitForPlay());
      },
      _flash_playHead: function (a) {
        try {
          this._getMovie().fl_play_head(a);
        } catch (b) {
          this._flashError(b);
        }
        this.status.waitForLoad || this._flash_checkWaitForPlay();
      },
      _flash_checkWaitForPlay: function () {
        this.status.waitForPlay &&
          ((this.status.waitForPlay = !1),
          this.css.jq.videoPlay.length && this.css.jq.videoPlay.hide(),
          this.status.video &&
            (this.internal.poster.jq.hide(),
            this.internal.flash.jq.css({
              width: this.status.width,
              height: this.status.height,
            })));
      },
      _flash_volume: function (a) {
        try {
          this._getMovie().fl_volume(a);
        } catch (b) {
          this._flashError(b);
        }
      },
      _flash_mute: function (a) {
        try {
          this._getMovie().fl_mute(a);
        } catch (b) {
          this._flashError(b);
        }
      },
      _getMovie: function () {
        return document[this.internal.flash.id];
      },
      _getFlashPluginVersion: function () {
        var a,
          b = 0;
        if (window.ActiveXObject)
          try {
            if ((a = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"))) {
              var c = a.GetVariable("$version");
              c &&
                ((c = c.split(" ")[1].split(",")),
                (b = parseInt(c[0], 10) + "." + parseInt(c[1], 10)));
            }
          } catch (d) {}
        else
          navigator.plugins &&
            navigator.mimeTypes.length > 0 &&
            ((a = navigator.plugins["Shockwave Flash"]),
            a &&
              (b = navigator.plugins["Shockwave Flash"].description.replace(
                /.*\s(\d+\.\d+).*/,
                "$1"
              )));
        return 1 * b;
      },
      _checkForFlash: function (a) {
        var b = !1;
        return this._getFlashPluginVersion() >= a && (b = !0), b;
      },
      _validString: function (a) {
        return a && "string" == typeof a;
      },
      _limitValue: function (a, b, c) {
        return b > a ? b : a > c ? c : a;
      },
      _urlNotSetError: function (b) {
        this._error({
          type: a.jPlayer.error.URL_NOT_SET,
          context: b,
          message: a.jPlayer.errorMsg.URL_NOT_SET,
          hint: a.jPlayer.errorHint.URL_NOT_SET,
        });
      },
      _flashError: function (b) {
        var c;
        (c = this.internal.ready ? "FLASH_DISABLED" : "FLASH"),
          this._error({
            type: a.jPlayer.error[c],
            context: this.internal.flash.swf,
            message: a.jPlayer.errorMsg[c] + b.message,
            hint: a.jPlayer.errorHint[c],
          }),
          this.internal.flash.jq.css({ width: "1px", height: "1px" });
      },
      _error: function (b) {
        this._trigger(a.jPlayer.event.error, b),
          this.options.errorAlerts &&
            this._alert(
              "Error!" +
                (b.message ? "\n" + b.message : "") +
                (b.hint ? "\n" + b.hint : "") +
                "\nContext: " +
                b.context
            );
      },
      _warning: function (c) {
        this._trigger(a.jPlayer.event.warning, b, c),
          this.options.warningAlerts &&
            this._alert(
              "Warning!" +
                (c.message ? "\n" + c.message : "") +
                (c.hint ? "\n" + c.hint : "") +
                "\nContext: " +
                c.context
            );
      },
      _alert: function (a) {
        var b =
          "jPlayer " +
          this.version.script +
          " : id='" +
          this.internal.self.id +
          "' : " +
          a;
        this.options.consoleAlerts
          ? window.console && window.console.log && window.console.log(b)
          : alert(b);
      },
      _emulateHtmlBridge: function () {
        var b = this;
        a.each(a.jPlayer.emulateMethods.split(/\s+/g), function (a, c) {
          b.internal.domNode[c] = function (a) {
            b[c](a);
          };
        }),
          a.each(a.jPlayer.event, function (c, d) {
            var e = !0;
            a.each(a.jPlayer.reservedEvent.split(/\s+/g), function (a, b) {
              return b === c ? ((e = !1), !1) : void 0;
            }),
              e &&
                b.element.bind(d + ".jPlayer.jPlayerHtml", function () {
                  b._emulateHtmlUpdate();
                  var a = document.createEvent("Event");
                  a.initEvent(c, !1, !0), b.internal.domNode.dispatchEvent(a);
                });
          });
      },
      _emulateHtmlUpdate: function () {
        var b = this;
        a.each(a.jPlayer.emulateStatus.split(/\s+/g), function (a, c) {
          b.internal.domNode[c] = b.status[c];
        }),
          a.each(a.jPlayer.emulateOptions.split(/\s+/g), function (a, c) {
            b.internal.domNode[c] = b.options[c];
          });
      },
      _destroyHtmlBridge: function () {
        var b = this;
        this.element.unbind(".jPlayerHtml");
        var c =
          a.jPlayer.emulateMethods +
          " " +
          a.jPlayer.emulateStatus +
          " " +
          a.jPlayer.emulateOptions;
        a.each(c.split(/\s+/g), function (a, c) {
          delete b.internal.domNode[c];
        });
      },
    }),
    (a.jPlayer.error = {
      FLASH: "e_flash",
      FLASH_DISABLED: "e_flash_disabled",
      NO_SOLUTION: "e_no_solution",
      NO_SUPPORT: "e_no_support",
      URL: "e_url",
      URL_NOT_SET: "e_url_not_set",
      VERSION: "e_version",
    }),
    (a.jPlayer.errorMsg = {
      FLASH:
        "jPlayer's Flash fallback is not configured correctly, or a command was issued before the jPlayer Ready event. Details: ",
      FLASH_DISABLED:
        "jPlayer's Flash fallback has been disabled by the browser due to the CSS rules you have used. Details: ",
      NO_SOLUTION:
        "No solution can be found by jPlayer in this browser. Neither HTML nor Flash can be used.",
      NO_SUPPORT:
        "It is not possible to play any media format provided in setMedia() on this browser using your current options.",
      URL: "Media URL could not be loaded.",
      URL_NOT_SET:
        "Attempt to issue media playback commands, while no media url is set.",
      VERSION:
        "jPlayer " +
        a.jPlayer.prototype.version.script +
        " needs Jplayer.swf version " +
        a.jPlayer.prototype.version.needFlash +
        " but found ",
    }),
    (a.jPlayer.errorHint = {
      FLASH: "Check your swfPath option and that Jplayer.swf is there.",
      FLASH_DISABLED:
        "Check that you have not display:none; the jPlayer entity or any ancestor.",
      NO_SOLUTION: "Review the jPlayer options: support and supplied.",
      NO_SUPPORT:
        "Video or audio formats defined in the supplied option are missing.",
      URL: "Check media URL is valid.",
      URL_NOT_SET: "Use setMedia() to set the media URL.",
      VERSION: "Update jPlayer files.",
    }),
    (a.jPlayer.warning = {
      CSS_SELECTOR_COUNT: "e_css_selector_count",
      CSS_SELECTOR_METHOD: "e_css_selector_method",
      CSS_SELECTOR_STRING: "e_css_selector_string",
      OPTION_KEY: "e_option_key",
    }),
    (a.jPlayer.warningMsg = {
      CSS_SELECTOR_COUNT:
        "The number of css selectors found did not equal one: ",
      CSS_SELECTOR_METHOD:
        "The methodName given in jPlayer('cssSelector') is not a valid jPlayer method.",
      CSS_SELECTOR_STRING:
        "The methodCssSelector given in jPlayer('cssSelector') is not a String or is empty.",
      OPTION_KEY: "The option requested in jPlayer('option') is undefined.",
    }),
    (a.jPlayer.warningHint = {
      CSS_SELECTOR_COUNT: "Check your css selector and the ancestor.",
      CSS_SELECTOR_METHOD: "Check your method name.",
      CSS_SELECTOR_STRING: "Check your css selector is a string.",
      OPTION_KEY: "Check your option name.",
    });
});
function setcookie(e, a, t, i, n, s) {
  var r = new Date();
  r.setTime(r.getTime()), t && (t = 1e3 * t * 60 * 60 * 24);
  var o = new Date(r.getTime() + t);
  document.cookie =
    e +
    "=" +
    escape(a) +
    (t ? ";expires=" + o.toGMTString() : "") +
    (i ? ";path=" + i : "") +
    (n ? ";domain=" + n : "") +
    (s ? ";secure" : "");
}
function getcookie(e) {
  var a = document.cookie.indexOf(e + "="),
    t = a + e.length + 1;
  if (!a && e != document.cookie.substring(0, e.length)) return null;
  if (-1 == a) return null;
  var i = document.cookie.indexOf(";", t);
  return (
    -1 == i && (i = document.cookie.length),
    unescape(document.cookie.substring(t, i))
  );
}
!(function (e) {
  e.fn.slider = function (a, t) {
    function i(e, a, t) {
      "function" == typeof e && e.call(a, t);
    }
    function n(e, a, t) {
      var i = a.data("setup"),
        n = i.handles,
        s = i.settings,
        r = i.pos;
      if (((e = 0 > e ? 0 : e > 100 ? 100 : e), 2 == s.handles))
        if (t.is(":first-child")) {
          var o = parseFloat(n[1][0].style[r]) - s.margin;
          e = e > o ? o : e;
        } else {
          var o = parseFloat(n[0][0].style[r]) + s.margin;
          e = o > e ? o : e;
        }
      if (s.step) {
        var d = l.from(s.range, s.step);
        e = Math.round(e / d) * d;
      }
      return e;
    }
    function s(e) {
      try {
        return [
          e.clientX ||
            e.originalEvent.clientX ||
            e.originalEvent.touches[0].clientX,
          e.clientY ||
            e.originalEvent.clientY ||
            e.originalEvent.touches[0].clientY,
        ];
      } catch (a) {
        return ["x", "y"];
      }
    }
    function r(e, a) {
      return parseFloat(e[0].style[a]);
    }
    var o = window.navigator.msPointerEnabled
      ? 2
      : "ontouchend" in document
      ? 3
      : 1;
    window.debug && console && console.log(o);
    var l = {
        to: function (e, a) {
          return (
            (a = e[0] < 0 ? a + Math.abs(e[0]) : a - e[0]),
            (100 * a) / this._length(e)
          );
        },
        from: function (e, a) {
          return (100 * a) / this._length(e);
        },
        is: function (e, a) {
          return (a * this._length(e)) / 100 + e[0];
        },
        _length: function (e) {
          return e[0] > e[1] ? e[0] - e[1] : e[1] - e[0];
        },
      },
      d = { handles: 1, serialization: { to: ["", ""], resolution: 0.01 } };
    methods = {
      create: function () {
        return this.each(function () {
          function t(e, a, t) {
            e.css(c, a + "%")
              .data("input")
              .val(l.is(h.range, a).toFixed(b));
          }
          var c,
            u,
            h = e.extend(d, a),
            v = "<span><div></div></span>",
            f = e(this).data("_isnS_", !0),
            p = [],
            m = "",
            y = function (e) {
              return !isNaN(parseFloat(e)) && isFinite(e);
            },
            g = (h.serialization.resolution =
              h.serialization.resolution || 0.01)
              .toString()
              .split("."),
            b = 1 == g[0] ? 0 : g[1].length;
          (h.start = y(h.start) ? [h.start, 0] : h.start),
            e.each(h, function (e, a) {
              y(a)
                ? (h[e] = parseFloat(a))
                : "object" == typeof a &&
                  y(a[0]) &&
                  ((a[0] = parseFloat(a[0])),
                  y(a[1]) && (a[1] = parseFloat(a[1])));
              var t = !1;
              switch (((a = "undefined" == typeof a ? "x" : a), e)) {
                case "range":
                case "start":
                  t = 2 != a.length || !y(a[0]) || !y(a[1]);
                  break;
                case "handles":
                  t = 1 > a || a > 2 || !y(a);
                  break;
                case "connect":
                  t = "lower" != a && "upper" != a && "boolean" != typeof a;
                  break;
                case "orientation":
                  t = "vertical" != a && "horizontal" != a;
                  break;
                case "margin":
                case "step":
                  t = "undefined" != typeof a && !y(a);
                  break;
                case "serialization":
                  t =
                    "object" != typeof a ||
                    !y(a.resolution) ||
                    ("object" == typeof a.to && a.to.length < h.handles);
                  break;
                case "slide":
                  t = "function" != typeof a;
              }
              t &&
                console &&
                console.error("Bad input for " + e + " on slider:", f);
            }),
            (h.margin = h.margin ? l.from(h.range, h.margin) : 0),
            (h.serialization.to instanceof jQuery ||
              "string" == typeof h.serialization.to ||
              h.serialization.to === !1) &&
              (h.serialization.to = [h.serialization.to]),
            "vertical" == h.orientation
              ? ((m += "vertical"), (c = "top"), (u = 1))
              : ((m += "horizontal"), (c = "left"), (u = 0)),
            (m += h.connect
              ? "lower" == h.connect
                ? " connect lower"
                : " connect"
              : ""),
            f.addClass(m);
          for (var P = 0; P < h.handles; P++) {
            p[P] = f.append(v).children(":last");
            var j = l.to(h.range, h.start[P]);
            p[P].css(c, j + "%"),
              100 == j && p[P].is(":first-child") && p[P].css("z-index", 2);
            var k = ".slider",
              x =
                (1 === o
                  ? "mousedown"
                  : 2 === o
                  ? "MSPointerDown"
                  : "touchstart") +
                k +
                "X",
              z =
                (1 === o
                  ? "mousemove"
                  : 2 === o
                  ? "MSPointerMove"
                  : "touchmove") + k,
              S =
                (1 === o ? "mouseup" : 2 === o ? "MSPointerUp" : "touchend") +
                k;
            p[P].find("div")
              .on(x, function (a) {
                if (
                  (e("body").bind("selectstart" + k, function () {
                    return !1;
                  }),
                  !f.hasClass("disabled"))
                ) {
                  e("body").addClass("TOUCH");
                  var t = e(this).addClass("active").parent(),
                    r = t.add(e(document)).add("body"),
                    o = parseFloat(t[0].style[c]),
                    d = s(a),
                    v = d,
                    m = !1;
                  e(document)
                    .on(z, function (e) {
                      e.preventDefault();
                      var a = s(e);
                      if ("x" != a[0]) {
                        (a[0] -= d[0]), (a[1] -= d[1]);
                        var r = [v[0] != a[0], v[1] != a[1]],
                          y = o + (100 * a[u]) / (u ? f.height() : f.width());
                        (y = n(y, f, t)),
                          r[u] &&
                            y != m &&
                            (t
                              .css(c, y + "%")
                              .data("input")
                              .val(l.is(h.range, y).toFixed(b)),
                            i(h.slide, f.data("_n", !0)),
                            (m = y),
                            t.css(
                              "z-index",
                              2 == p.length && 100 == y && t.is(":first-child")
                                ? 2
                                : 1
                            )),
                          (v = a);
                      }
                    })
                    .on(S, function () {
                      r.off(k),
                        e("body").removeClass("TOUCH"),
                        f
                          .find(".active")
                          .removeClass("active")
                          .end()
                          .data("_n") && f.data("_n", !1).change();
                    });
                }
              })
              .on("click", function (e) {
                e.stopPropagation();
              });
          }
          1 == o &&
            f.on("click", function (e) {
              if (!f.hasClass("disabled")) {
                var a = s(e),
                  r =
                    (100 * (a[u] - f.offset()[c])) /
                    (u ? f.height() : f.width()),
                  o =
                    p.length > 1
                      ? a[u] < (p[0].offset()[c] + p[1].offset()[c]) / 2
                        ? p[0]
                        : p[1]
                      : p[0];
                t(o, n(r, f, o), f), i(h.slide, f), f.change();
              }
            });
          for (var P = 0; P < p.length; P++) {
            var w = l.is(h.range, r(p[P], c)).toFixed(b);
            "string" == typeof h.serialization.to[P]
              ? p[P].data(
                  "input",
                  f
                    .append(
                      '<input type="hidden" name="' +
                        h.serialization.to[P] +
                        '">'
                    )
                    .find("input:last")
                    .val(w)
                    .change(function (e) {
                      e.stopPropagation();
                    })
                )
              : 0 == h.serialization.to[P]
              ? p[P].data("input", {
                  val: function (e) {
                    return "undefined" == typeof e
                      ? this.handle.data("noUiVal")
                      : void this.handle.data("noUiVal", e);
                  },
                  handle: p[P],
                })
              : p[P].data(
                  "input",
                  h.serialization.to[P].data("handleNR", P)
                    .val(w)
                    .change(function () {
                      var a = [null, null];
                      (a[e(this).data("handleNR")] = e(this).val()), f.val(a);
                    })
                );
          }
          e(this).data("setup", { settings: h, handles: p, pos: c, res: b });
        });
      },
      val: function () {
        if ("undefined" != typeof arguments[0]) {
          var a =
            "number" == typeof arguments[0] ? [arguments[0]] : arguments[0];
          return this.each(function () {
            for (
              var t = e(this).data("setup"), i = 0;
              i < t.handles.length;
              i++
            )
              if (null != a[i]) {
                var s = n(l.to(t.settings.range, a[i]), e(this), t.handles[i]);
                t.handles[i]
                  .css(t.pos, s + "%")
                  .data("input")
                  .val(l.is(t.settings.range, s).toFixed(t.res));
              }
          });
        }
        for (
          var t = e(this).data("setup").handles, i = [], s = 0;
          s < t.length;
          s++
        )
          i.push(parseFloat(t[s].data("input").val()));
        return 1 == i.length ? i[0] : i;
      },
      disabled: function () {
        return t
          ? e(this).addClass("disabled")
          : e(this).removeClass("disabled");
      },
    };
    var c = jQuery.fn.val;
    return (
      (jQuery.fn.val = function () {
        return this.data("_isnS_")
          ? methods.val.apply(this, arguments)
          : c.apply(this, arguments);
      }),
      "disabled" == a
        ? methods.disabled.apply(this)
        : methods.create.apply(this)
    );
  };
})(jQuery),
  (function (e) {
    function a(a, t, i, n) {
      var s = new Array();
      e.each(i.media, function (e, a) {
        "poster" != e && s.push(e);
      }),
        (formats = s.join(", "));
      var r = getcookie("jplayer-volume");
      r = null != r ? r : "0.5";
      var o = {
        ready: function () {
          e(this).jPlayer("setMedia", i.media),
            null != i.autoplay && e(t).jPlayer("play");
        },
        swfPath: "/Components/General/Resources/Scripts/JPlayer/Jplayer.swf",
        supplied: formats,
        solution: "html, flash",
        volume: r,
        size: i.size,
        smoothPlayBar: !1,
        keyEnabled: !0,
        cssSelectorAncestor: a,
        cssSelector: {
          videoPlay: ".video-play",
          play: ".play",
          pause: ".pause",
          seekBar: ".seekBar",
          playBar: ".playBar",
          volumeBar: ".currentVolume",
          volumeBarValue: ".currentVolume .curvol",
          currentTime: ".timer .current",
          duration: ".timer .duration",
          fullScreen: ".fullscreen",
          restoreScreen: ".smallscreen",
          gui: ".controls",
          noSolution: ".noSolution",
        },
        error: function (a) {
          a.jPlayer.error.type === e.jPlayer.error.URL_NOT_SET &&
            e(this).jPlayer("setMedia", i.media).jPlayer("play");
        },
        play: function () {
          e(a + " .video-play").fadeOut(),
            e(this).on("click", function () {
              e(t).jPlayer("pause");
            }),
            e(this).jPlayer("pauseOthers");
        },
        pause: function () {
          e(a + " .video-play").fadeIn(),
            e(a + " .playerScreen").unbind("click");
        },
        volumechange: function (t) {
          t.jPlayer.options.muted
            ? e(a + " .currentVolume").val(0)
            : e(a + " .currentVolume").val(t.jPlayer.options.volume),
            setcookie("jplayer-volume", t.jPlayer.options.volume, 386);
        },
        timeupdate: function (t) {
          e(a + " .seekBar").val(t.jPlayer.status.currentPercentRelative);
        },
      };
      e(a + " .currentVolume").slider({
        range: [0, 1],
        step: 0.01,
        start: r,
        handles: 1,
        slide: function () {
          var a = e(this).val();
          e(t).jPlayer("option", "muted", !1),
            e(t).jPlayer("option", "volume", a);
        },
      }),
        e.extend(o, n),
        e(t).jPlayer(o);
    }
    e.fn.mediaPlayer = function (t) {
      var i = "#" + e(this).attr("id"),
        n = "#" + e(this).find(".Player").attr("id");
      try {
        var s = e.parseJSON(e(this).find(".playerData").text());
      } catch (r) {
        var s = t;
      }
      var o = e(
        '<div class="playerScreen">			<a title="play" tabindex="0" href="javascript:void(0);" class="video-play"><div class="play-icon"></div></a>			</div>			<div class="controls">			<div class="progress">			<div class="seekBar">			<div class="playBar"></div>			</div></div>			<a title="play" tabindex="0" href="javascript:void(0);" class="play smooth left"></a>			<a title="pause" tabindex="0" href="javascript:void(0);" class="pause smooth left"></a>			<div class="seperator left"></div>			<div class="volumecontrol left"><div class="volumebar"><div class="currentVolume"><div class="curvol"></div></div></div></div>			<div class="seperator left"></div>			<div class="timer">			<div class="current">00:00</div>			<div class="seperate">/</div>			<div class="duration">00:00</div>			</div>			<div class="seperator left"></div>			<a title="fullscreen" href="javascript:void(0);" tabindex="0" class="fullscreen smooth right"></a>			<a title="smallscreen" href="javascript:void(0);" tabindex="0" class="smallscreen smooth right"></a>			<div class="seperator right"></div>			<div class="hd-video disabled right smooth" title="hd-video"></div><div class="seperator right"></div>'
      );
      if (
        (e(this).find(".playerData").remove(),
        e(this).append(o),
        "hd" in s.media)
      ) {
        var l = s.media.hd,
          d = s.media.sd;
        e(o).find(".hd-video").addClass("enabled"),
          e(o)
            .find(".hd-video")
            .on("click", function () {
              var a = e(n).data("jPlayer").status.currentTime;
              e(this).hasClass("disabled")
                ? (e(this).removeClass("disabled"),
                  e(n).jPlayer("setMedia", l),
                  e(n).jPlayer("play", a))
                : (e(this).addClass("disabled"),
                  e(n).jPlayer("setMedia", d),
                  e(n).jPlayer("play", a));
            }),
          (s.media = s.media.sd);
      } else e(o).find(".hd-video").addClass("disabled");
      e(this).hasClass("audioPlayer") &&
        (e(this).find(".fullscreen").remove(),
        e(this).find(".smallscreen").remove(),
        e(this).find(".controls").css("bottom", "0px"),
        (s.size.height = "45px")),
        a(i, n, s, t);
    };
  })(jQuery);
function CreatePlayer(player) {
  var height =
    player.attr("data-height") != null ? player.attr("data-height") : "0px";
  var width =
    player.attr("data-width") != null ? player.attr("data-width") : "150px";
  var name = player.attr("data-name");
  var poster = player.attr("data-poster");
  var file = "" + player.attr("data-file");
  var autoplay = player.attr("data-autoplay");
  var loop = player.attr("data-loop");
  var lcFile = "" + player.attr("data-extension");
  if (lcFile == "undefined") {
    lcFile = file.toLowerCase();
  }
  var isAudio = (lcFile.indexOf(".mp3") > -1) | (lcFile.indexOf(".wav") > -1);
  player
    .addClass("mediaPlayer darkskin")
    .children(".videoPlayer")
    .addClass("Player");
  if (isAudio) {
    player.addClass("audioPlayer");
  } else {
    if (player.attr("data-width") == null) {
      player.css({ minWidth: "150px" });
    } else if (player.attr("data-width") == "100%") {
      player.css({ width: "100%" });
    }
    if (player.attr("data-height") == null) {
      player.css({ minHeight: "160px" });
    }
  }
  var tempWidth = Number(width.replace("px", ""));
  if (isMobileCheck) {
    tempWidth = tempWidth > 300 ? "100%" : tempWidth + "px";
  } else {
    tempWidth = tempWidth + "px";
  }
  var jPLSetting = {
    name: name,
    media: {
      title: name,
      poster: poster,
      m4v: lcFile.indexOf(".mp4") > -1 ? file : "",
      flv: lcFile.indexOf(".flv") > -1 ? file : "",
      webmv: lcFile.indexOf(".webm") > -1 ? file : "",
      oggv: lcFile.indexOf(".ogg") > -1 ? file : "",
      mp3: lcFile.indexOf(".mp3") > -1 ? file : "",
      wav: lcFile.indexOf(".wav") > -1 ? file : "",
    },
    preload: "none",
    keyEnabled: false,
    swfPath: "/Components/General/Resources/Scripts/JPlayer/Jplayer.swf",
    autoplay: null,
    autohide: isMobileCheck ? false : "hold",
    loop: loop == "true" ? true : null,
    size: {
      width: isMobileCheck ? "100%" : width,
      height: isMobileCheck ? "auto" : height,
    },
  };
  var isFlashFileRequired = false;
  var isFlashPlayerInstalled = IsFlashPlayerInstalled();
  if (lcFile.indexOf(".flv") > -1) {
    isFlashFileRequired = true;
    jPLSetting.supplied = "flv, mp4, mp3, wav, webm, ogg";
    var isFirefox = typeof InstallTrigger !== "undefined";
    if (isFirefox & (height == "auto")) {
      jPLSetting.size.height = "200";
    }
  }
  if (isFlashFileRequired && !isFlashPlayerInstalled) {
    player.append(
      "<div class='playerFlashError'>This Video Requires Flash Player!</div>"
    );
  } else {
    var temp = player.mediaPlayer(jPLSetting);
  }
}
function IsFlashPlayerInstalled() {
  var a = !1,
    b = "";
  function c(d) {
    d = d.match(/[\d]+/g);
    d.length = 3;
    return d.join(".");
  }
  if (navigator.plugins && navigator.plugins.length) {
    var e = navigator.plugins["Shockwave Flash"];
    e && ((a = !0), e.description && (b = c(e.description)));
    navigator.plugins["Shockwave Flash 2.0"] && ((a = !0), (b = "2.0.0.11"));
  } else {
    if (navigator.mimeTypes && navigator.mimeTypes.length) {
      var f = navigator.mimeTypes["application/x-shockwave-flash"];
      (a = f && f.enabledPlugin) && (b = c(f.enabledPlugin.description));
    } else {
      try {
        var g = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"),
          a = !0,
          b = c(g.GetVariable("$version"));
      } catch (h) {
        try {
          (g = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6")),
            (a = !0),
            (b = "6.0.21");
        } catch (i) {
          try {
            (g = new ActiveXObject("ShockwaveFlash.ShockwaveFlash")),
              (a = !0),
              (b = c(g.GetVariable("$version")));
          } catch (j) {}
        }
      }
    }
  }
  var k = b;
  return a;
}
function CreatePlayers() {
  $(".webPlayer").each(function (index, element) {
    CreatePlayer($(this));
  });
}
function CreateCertainPlayer(playerId) {
  CreatePlayer(playerId);
}
$(document).ready(function () {
  CreatePlayers();
});
function GetMediaPlayerObject(
  mediaTitle,
  mediaPath,
  mediaPoster,
  mediaWidth,
  mediaHeight,
  autoPlay,
  loop,
  webplayerId,
  videoplayerId,
  hidePlayer,
  responsive
) {
  return GetMediaPlayerObject(
    mediaTitle,
    mediaPath,
    mediaPoster,
    mediaWidth,
    mediaHeight,
    autoPlay,
    loop,
    webplayerId,
    videoplayerId,
    hidePlayer,
    responsive,
    "",
    ""
  );
}
function GetMediaPlayerObject(
  mediaTitle,
  mediaPath,
  mediaPoster,
  mediaWidth,
  mediaHeight,
  autoPlay,
  loop,
  webplayerId,
  videoplayerId,
  hidePlayer,
  responsive,
  specificWidth,
  specificHeight
) {
  if (!mediaPath) {
    return "";
  } else {
    var result = "";
    var style = "direction:ltr;background-color:#000;";
    if (hidePlayer) {
      style += "display:none;";
    }
    result += "<div class='webPlayer' id='mp_" + webplayerId + "' ";
    if (responsive) {
      result += " data-width='100%' ";
      result += " data-height='auto' ";
      style += " min-width:100px;";
      style += " height:auto;";
      style += " width:100%; ";
    } else if (specificWidth | specificHeight) {
      if (specificWidth && specificWidth !== "") {
        if (Number(specificWidth) > 0) {
          result += " data-width='" + specificWidth + "px' ";
        } else if (specificWidth.indexOf("%") > -1) {
          result += " data-width='" + specificWidth + "' ";
        }
      } else {
        style += "min-width:" + (mediaWidth > 0 ? mediaWidth : "200") + "px;";
      }
      if (specificHeight && specificHeight !== "") {
        if (Number(specificHeight) > 0) {
          result += " data-height='" + specificHeight + "px' ";
        } else if (specificHeight.indexOf("%") > -1) {
          result += " data-height='" + specificHeight + "' ";
        }
      } else {
        style += "min-height:" + (mediaHeight > 0 ? mediaHeight : "40") + "px;";
      }
    } else {
      if (Number(mediaWidth) > 0) {
        result += " data-width='" + mediaWidth + "px' ";
      }
      if (Number(mediaHeight) > 0) {
        result += " data-height='" + mediaHeight + "px' ";
      }
      style += "min-width:" + (mediaWidth > 0 ? mediaWidth : "200") + "px;";
      style += "min-height:" + (mediaHeight > 0 ? mediaHeight : "40") + "px;";
    }
    result +=
      " data-name='" + (mediaTitle != "" ? mediaTitle : "&nbsp;") + "' ";
    result += " data-poster='" + (mediaPoster != "" ? mediaPoster : "") + "' ";
    result += " data-file='" + mediaPath + "' ";
    result += " data-autoplay='" + autoPlay + "' ";
    result += " data-loop='" + loop + "' ";
    result += " style='" + style + "' >";
    result += "<div class='videoPlayer' id='vp_" + videoplayerId + "'></div>";
    result += "</div>";
    if (responsive) return "<div style='width:100%'>" + result + "</div>";
    return result;
  }
}
/* End of /JPlayer/jquery.jplayer.js*/
/* Start of /MatchHeight.js */
(function (factory) {
  "use strict";
  if (typeof define === "function" && define.amd) {
    define(["jquery"], factory);
  } else if (typeof module !== "undefined" && module.exports) {
    module.exports = factory(require("jquery"));
  } else {
    factory(jQuery);
  }
})(function ($) {
  var _previousResizeWidth = -1,
    _updateTimeout = -1;
  var _parse = function (value) {
    return parseFloat(value) || 0;
  };
  var _rows = function (elements) {
    var tolerance = 1,
      $elements = $(elements),
      lastTop = null,
      rows = [];
    $elements.each(function () {
      var $that = $(this),
        top = $that.offset().top - _parse($that.css("margin-top")),
        lastRow = rows.length > 0 ? rows[rows.length - 1] : null;
      if (lastRow === null) {
        rows.push($that);
      } else {
        if (Math.floor(Math.abs(lastTop - top)) <= tolerance) {
          rows[rows.length - 1] = lastRow.add($that);
        } else {
          rows.push($that);
        }
      }
      lastTop = top;
    });
    return rows;
  };
  var _parseOptions = function (options) {
    var opts = { byRow: true, property: "height", target: null, remove: false };
    if (typeof options === "object") {
      return $.extend(opts, options);
    }
    if (typeof options === "boolean") {
      opts.byRow = options;
    } else if (options === "remove") {
      opts.remove = true;
    }
    return opts;
  };
  var matchHeight = ($.fn.matchHeight = function (options) {
    var opts = _parseOptions(options);
    if (opts.remove) {
      var that = this;
      this.css(opts.property, "");
      $.each(matchHeight._groups, function (key, group) {
        group.elements = group.elements.not(that);
      });
      return this;
    }
    if (this.length <= 1 && !opts.target) {
      return this;
    }
    matchHeight._groups.push({ elements: this, options: opts });
    matchHeight._apply(this, opts);
    return this;
  });
  matchHeight.version = "master";
  matchHeight._groups = [];
  matchHeight._throttle = 80;
  matchHeight._maintainScroll = false;
  matchHeight._beforeUpdate = null;
  matchHeight._afterUpdate = null;
  matchHeight._rows = _rows;
  matchHeight._parse = _parse;
  matchHeight._parseOptions = _parseOptions;
  matchHeight._apply = function (elements, options) {
    var opts = _parseOptions(options),
      $elements = $(elements),
      rows = [$elements];
    var scrollTop = $(window).scrollTop(),
      htmlHeight = $("html").actual("outerHeight");
    var $hiddenParents = $elements.parents().filter(":hidden");
    $hiddenParents.each(function () {
      var $that = $(this);
      $that.data("style-cache", $that.attr("style"));
    });
    $hiddenParents.css("display", "block");
    if (opts.byRow && !opts.target) {
      $elements.each(function () {
        var $that = $(this),
          display = $that.css("display");
        if (
          display !== "inline-block" &&
          display !== "flex" &&
          display !== "inline-flex"
        ) {
          display = "block";
        }
        $that.data("style-cache", $that.attr("style"));
        $that.css({
          display: display,
          "padding-top": "0",
          "padding-bottom": "0",
          "margin-top": "0",
          "margin-bottom": "0",
          "border-top-width": "0",
          "border-bottom-width": "0",
          height: "100px",
          overflow: "hidden",
        });
      });
      rows = _rows($elements);
      $elements.each(function () {
        var $that = $(this);
        $that.attr("style", $that.data("style-cache") || "");
      });
    }
    $.each(rows, function (key, row) {
      var $row = $(row),
        targetHeight = 0;
      if (!opts.target) {
        if (opts.byRow && $row.length <= 1) {
          $row.css(opts.property, "");
          return;
        }
        $row.each(function () {
          var $that = $(this),
            style = $that.attr("style"),
            display = $that.css("display");
          if (
            display !== "inline-block" &&
            display !== "flex" &&
            display !== "inline-flex"
          ) {
            display = "block";
          }
          var css = { display: display };
          css[opts.property] = "";
          $that.css(css);
          if ($that.actual("outerHeight") > targetHeight) {
            targetHeight = $that.actual("outerHeight");
          }
          if (style) {
            $that.attr("style", style);
          } else {
            $that.css("display", "");
          }
        });
      } else {
        targetHeight = opts.target.actual("outerHeight");
      }
      $row.each(function () {
        var $that = $(this),
          verticalPadding = 0;
        if (opts.target && $that.is(opts.target)) {
          return;
        }
        if ($that.css("box-sizing") !== "border-box") {
          verticalPadding +=
            _parse($that.css("border-top-width")) +
            _parse($that.css("border-bottom-width"));
          verticalPadding +=
            _parse($that.css("padding-top")) +
            _parse($that.css("padding-bottom"));
        }
        $that.css(opts.property, targetHeight - verticalPadding + "px");
      });
    });
    $hiddenParents.each(function () {
      var $that = $(this);
      $that.attr("style", $that.data("style-cache") || null);
    });
    if (matchHeight._maintainScroll) {
      $(window).scrollTop(
        (scrollTop / htmlHeight) * $("html").actual("outerHeight")
      );
    }
    return this;
  };
  matchHeight._applyDataApi = function () {
    var groups = {};
    $("[data-match-height], [data-mh]").each(function () {
      var $this = $(this),
        groupId = $this.attr("data-mh") || $this.attr("data-match-height");
      if (groupId in groups) {
        groups[groupId] = groups[groupId].add($this);
      } else {
        groups[groupId] = $this;
      }
    });
    $.each(groups, function () {
      this.matchHeight(true);
    });
  };
  var _update = function (event) {
    if (matchHeight._beforeUpdate) {
      matchHeight._beforeUpdate(event, matchHeight._groups);
    }
    $.each(matchHeight._groups, function () {
      matchHeight._apply(this.elements, this.options);
    });
    if (matchHeight._afterUpdate) {
      matchHeight._afterUpdate(event, matchHeight._groups);
    }
  };
  matchHeight._update = function (throttle, event) {
    if (event && event.type === "resize") {
      var windowWidth = $(window).width();
      if (windowWidth === _previousResizeWidth) {
        return;
      }
      _previousResizeWidth = windowWidth;
    }
    if (!throttle) {
      _update(event);
    } else if (_updateTimeout === -1) {
      _updateTimeout = setTimeout(function () {
        _update(event);
        _updateTimeout = -1;
      }, matchHeight._throttle);
    }
  };
  $(matchHeight._applyDataApi);
  $(window).bind("load", function (event) {
    matchHeight._update(false, event);
  });
  $(window).bind("resize orientationchange", function (event) {
    matchHeight._update(true, event);
  });
});
/* End of /MatchHeight.js*/
/* Start of /Toast/Toastr.js */
!(function (e) {
  e(["jquery"], function (e) {
    return (function () {
      function t(e, t, n) {
        return g({
          type: O.error,
          iconClass: m().iconClasses.error,
          message: e,
          optionsOverride: n,
          title: t,
        });
      }
      function n(t, n) {
        return (
          t || (t = m()),
          (v = e("#" + t.containerId)),
          v.length ? v : (n && (v = d(t)), v)
        );
      }
      function o(e, t, n) {
        return g({
          type: O.info,
          iconClass: m().iconClasses.info,
          message: e,
          optionsOverride: n,
          title: t,
        });
      }
      function s(e) {
        C = e;
      }
      function i(e, t, n) {
        return g({
          type: O.success,
          iconClass: m().iconClasses.success,
          message: e,
          optionsOverride: n,
          title: t,
        });
      }
      function a(e, t, n) {
        return g({
          type: O.warning,
          iconClass: m().iconClasses.warning,
          message: e,
          optionsOverride: n,
          title: t,
        });
      }
      function r(e, t) {
        var o = m();
        v || n(o), u(e, o, t) || l(o);
      }
      function c(t) {
        var o = m();
        return (
          v || n(o),
          t && 0 === e(":focus", t).length
            ? void h(t)
            : void (v.children().length && v.remove())
        );
      }
      function l(t) {
        for (var n = v.children(), o = n.length - 1; o >= 0; o--) u(e(n[o]), t);
      }
      function u(t, n, o) {
        var s = !(!o || !o.force) && o.force;
        return (
          !(!t || (!s && 0 !== e(":focus", t).length)) &&
          (t[n.hideMethod]({
            duration: n.hideDuration,
            easing: n.hideEasing,
            complete: function () {
              h(t);
            },
          }),
          !0)
        );
      }
      function d(t) {
        return (
          (v = e("<div/>").attr("id", t.containerId).addClass(t.positionClass)),
          v.appendTo(e(t.target)),
          v
        );
      }
      function p() {
        return {
          tapToDismiss: !0,
          toastClass: "toast",
          containerId: "toast-container",
          debug: !1,
          showMethod: "fadeIn",
          showDuration: 300,
          showEasing: "swing",
          onShown: void 0,
          hideMethod: "fadeOut",
          hideDuration: 1e3,
          hideEasing: "swing",
          onHidden: void 0,
          closeMethod: !1,
          closeDuration: !1,
          closeEasing: !1,
          closeOnHover: !0,
          extendedTimeOut: 1e3,
          iconClasses: {
            error: "toast-error",
            info: "toast-info",
            success: "toast-success",
            warning: "toast-warning",
          },
          iconClass: "toast-info",
          positionClass: "toast-top-right",
          timeOut: 5e3,
          titleClass: "toast-title",
          messageClass: "toast-message",
          escapeHtml: !1,
          target: "body",
          closeHtml: '<button type="button">&times;</button>',
          closeClass: "toast-close-button",
          newestOnTop: !0,
          preventDuplicates: !1,
          progressBar: !1,
          progressClass: "toast-progress",
          rtl: !1,
        };
      }
      function f(e) {
        C && C(e);
      }
      function g(t) {
        function o(e) {
          return (
            null == e && (e = ""),
            e
              .replace(/&/g, "&amp;")
              .replace(/"/g, "&quot;")
              .replace(/'/g, "&#39;")
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;")
          );
        }
        function s() {
          c(), u(), d(), p(), g(), C(), l(), i();
        }
        function i() {
          var e = "";
          switch (t.iconClass) {
            case "toast-success":
            case "toast-info":
              e = "polite";
              break;
            default:
              e = "assertive";
          }
          I.attr("aria-live", e);
        }
        function a() {
          E.closeOnHover && I.hover(H, D),
            !E.onclick && E.tapToDismiss && I.click(b),
            E.closeButton &&
              j &&
              j.click(function (e) {
                e.stopPropagation
                  ? e.stopPropagation()
                  : void 0 !== e.cancelBubble &&
                    e.cancelBubble !== !0 &&
                    (e.cancelBubble = !0),
                  E.onCloseClick && E.onCloseClick(e),
                  b(!0);
              }),
            E.onclick &&
              I.click(function (e) {
                E.onclick(e), b();
              });
        }
        function r() {
          I.hide(),
            I[E.showMethod]({
              duration: E.showDuration,
              easing: E.showEasing,
              complete: E.onShown,
            }),
            E.timeOut > 0 &&
              ((k = setTimeout(b, E.timeOut)),
              (F.maxHideTime = parseFloat(E.timeOut)),
              (F.hideEta = new Date().getTime() + F.maxHideTime),
              E.progressBar && (F.intervalId = setInterval(x, 10)));
        }
        function c() {
          t.iconClass && I.addClass(E.toastClass).addClass(y);
        }
        function l() {
          E.newestOnTop ? v.prepend(I) : v.append(I);
        }
        function u() {
          if (t.title) {
            var e = t.title;
            E.escapeHtml && (e = o(t.title)),
              M.append(e).addClass(E.titleClass),
              I.append(M);
          }
        }
        function d() {
          if (t.message) {
            var e = t.message;
            E.escapeHtml && (e = o(t.message)),
              B.append(e).addClass(E.messageClass),
              I.append(B);
          }
        }
        function p() {
          E.closeButton &&
            (j.addClass(E.closeClass).attr("role", "button"), I.prepend(j));
        }
        function g() {
          E.progressBar && (q.addClass(E.progressClass), I.prepend(q));
        }
        function C() {
          E.rtl && I.addClass("rtl");
        }
        function O(e, t) {
          if (e.preventDuplicates) {
            if (t.message === w) return !0;
            w = t.message;
          }
          return !1;
        }
        function b(t) {
          var n = t && E.closeMethod !== !1 ? E.closeMethod : E.hideMethod,
            o = t && E.closeDuration !== !1 ? E.closeDuration : E.hideDuration,
            s = t && E.closeEasing !== !1 ? E.closeEasing : E.hideEasing;
          if (!e(":focus", I).length || t)
            return (
              clearTimeout(F.intervalId),
              I[n]({
                duration: o,
                easing: s,
                complete: function () {
                  h(I),
                    clearTimeout(k),
                    E.onHidden && "hidden" !== P.state && E.onHidden(),
                    (P.state = "hidden"),
                    (P.endTime = new Date()),
                    f(P);
                },
              })
            );
        }
        function D() {
          (E.timeOut > 0 || E.extendedTimeOut > 0) &&
            ((k = setTimeout(b, E.extendedTimeOut)),
            (F.maxHideTime = parseFloat(E.extendedTimeOut)),
            (F.hideEta = new Date().getTime() + F.maxHideTime));
        }
        function H() {
          clearTimeout(k),
            (F.hideEta = 0),
            I.stop(!0, !0)[E.showMethod]({
              duration: E.showDuration,
              easing: E.showEasing,
            });
        }
        function x() {
          var e = ((F.hideEta - new Date().getTime()) / F.maxHideTime) * 100;
          q.width(e + "%");
        }
        var E = m(),
          y = t.iconClass || E.iconClass;
        if (
          ("undefined" != typeof t.optionsOverride &&
            ((E = e.extend(E, t.optionsOverride)),
            (y = t.optionsOverride.iconClass || y)),
          !O(E, t))
        ) {
          T++, (v = n(E, !0));
          var k = null,
            I = e("<div/>"),
            M = e("<div/>"),
            B = e("<div/>"),
            q = e("<div/>"),
            j = e(E.closeHtml),
            F = { intervalId: null, hideEta: null, maxHideTime: null },
            P = {
              toastId: T,
              state: "visible",
              startTime: new Date(),
              options: E,
              map: t,
            };
          return s(), r(), a(), f(P), E.debug && console && console.log(P), I;
        }
      }
      function m() {
        return e.extend({}, p(), b.options);
      }
      function h(e) {
        v || (v = n()),
          e.is(":visible") ||
            (e.remove(),
            (e = null),
            0 === v.children().length && (v.remove(), (w = void 0)));
      }
      var v,
        C,
        w,
        T = 0,
        O = {
          error: "error",
          info: "info",
          success: "success",
          warning: "warning",
        },
        b = {
          clear: r,
          remove: c,
          error: t,
          getContainer: n,
          info: o,
          options: {},
          subscribe: s,
          success: i,
          version: "2.1.3",
          warning: a,
        };
      return b;
    })();
  });
})(
  "function" == typeof define && define.amd
    ? define
    : function (e, t) {
        "undefined" != typeof module && module.exports
          ? (module.exports = t(require("jquery")))
          : (window.toastr = t(window.jQuery));
      }
);
toastr.options = {
  closeButton: false,
  debug: false,
  newestOnTop: true,
  progressBar: true,
  positionClass: "toast-bottom-left",
  preventDuplicates: true,
  onclick: null,
  showDuration: "300",
  hideDuration: "2000",
  timeOut: "6000",
  extendedTimeOut: "5000",
  showEasing: "swing",
  hideEasing: "linear",
  showMethod: "fadeIn",
  hideMethod: "fadeOut",
  escapeHtml: true,
  rtl: true,
};
function ShowToast(title, message, type) {
  if (type === "success") {
    toastr.success(title, message);
  }
  if (type === "warning") {
    toastr.warning(title, message);
  }
  if (type === "error") {
    toastr.error(title, message);
  }
  if (type === "information") {
    toastr.info(title, message);
  }
}
function ShowMessageBoxToastMessage(title, message, status, positionClass) {
  toastr.options = {
    closeButton: true,
    debug: false,
    newestOnTop: true,
    progressBar: true,
    positionClass: positionClass ? positionClass : "toast-top-right",
    preventDuplicates: true,
    onclick: null,
    showDuration: "300",
    hideDuration: "2000",
    timeOut: "6000",
    extendedTimeOut: "5000",
    showEasing: "swing",
    hideEasing: "linear",
    showMethod: "fadeIn",
    hideMethod: "fadeOut",
    escapeHtml: false,
    enableHtml: true,
    rtl: true,
  };
  if (status === "success") {
    toastr.success(title, message);
  }
  if (status === "warning") {
    toastr.warning(title, message);
  }
  if (status === "error") {
    toastr.error(title, message);
  }
  if (status === "information") {
    toastr.info(title, message);
  }
}
/* End of /Toast/Toastr.js*/
/* Start of /Functions.js */
function MagnificationZoomIn() {
  try {
    var fontSize = parseFloat($("html").css("font-size")) + 2 + "px";
    $("html").css("font-size", fontSize);
  } catch (e) {}
}
function MagnificationZoomOut() {
  try {
    var fontSize = parseFloat($("html").css("font-size")) - 2 + "px";
    $("html").css("font-size", fontSize);
  } catch (e) {}
}
try {
  if ($telerik.$) {
    window.$ = $telerik.$;
  }
} catch (err) {}
var badBrowser =
  !$.support.leadingWhitespace |
  (navigator.appVersion.indexOf("MSIE 9") !== -1);
var getUrlParameter = function getUrlParameter(sParam) {
  var sPageUrl = decodeURIComponent(window.location.search.substring(1)),
    sUrlVariables = sPageUrl.split("&"),
    sParameterName,
    i;
  for (i = 0; i < sUrlVariables.length; i++) {
    sParameterName = sUrlVariables[i].split("=");
    if (sParameterName[0] === sParam) {
      return sParameterName[1] === undefined ? true : sParameterName[1];
    }
  }
};
(function (factory) {
  if (typeof define === "function" && define.amd) {
    define(["jquery"], factory);
  } else {
    factory($);
  }
})(function ($) {
  $.fn.addBack = $.fn.addBack || $.fn.andSelf;
  $.fn.extend({
    actual: function (method, options) {
      if (!this[method]) {
        throw (
          '$.actual => The jQuery method "' +
          method +
          '" you called does not exist'
        );
      }
      var defaults = {
        absolute: false,
        clone: false,
        includeMargin: false,
        display: "block",
      };
      var configs = $.extend(defaults, options);
      var $target = this.eq(0);
      var fix, restore;
      if (configs.clone === true) {
        fix = function () {
          var style = "position: absolute !important; top: -1000 !important; ";
          $target = $target.clone().attr("style", style).appendTo("body");
        };
        restore = function () {
          $target.remove();
        };
      } else {
        var tmp = [];
        var style = "";
        var $hidden;
        fix = function () {
          $hidden = $target.parents().addBack().filter(":hidden");
          style +=
            "visibility: hidden !important; display: " +
            configs.display +
            " !important; ";
          if (configs.absolute === true)
            style += "position: absolute !important; ";
          $hidden.each(function () {
            var $this = $(this);
            var thisStyle = $this.attr("style");
            tmp.push(thisStyle);
            $this.attr("style", thisStyle ? thisStyle + ";" + style : style);
          });
        };
        restore = function () {
          $hidden.each(function (i) {
            var $this = $(this);
            var _tmp = tmp[i];
            if (_tmp === undefined) {
              $this.removeAttr("style");
            } else {
              $this.attr("style", _tmp);
            }
          });
        };
      }
      fix();
      var actual = /(outer)/.test(method)
        ? $target[method](configs.includeMargin)
        : $target[method]();
      restore();
      return actual;
    },
  });
});
function ShowHideObject(chk, divId) {
  var container = MM_findObj(divId);
  if (chk.checked) {
    container.style.display = "block";
  } else {
    container.style.display = "none";
  }
}
function MM_findObj(n, d) {
  var p, i, x;
  if (!d) {
    d = document;
  }
  if ((p = n.indexOf("?")) > 0 && parent.frames.length) {
    d = parent.frames[n.substring(p + 1)].document;
    n = n.substring(0, p);
  }
  if (!(x = d[n]) && d.all) {
    x = d.all[n];
  }
  for (i = 0; !x && i < d.forms.length; i++) {
    x = d.forms[i][n];
  }
  for (i = 0; !x && d.layers && i < d.layers.length; i++) {
    x = MM_findObj(n, d.layers[i].document);
  }
  if (!x && d.getElementById) {
    x = d.getElementById(n);
  }
  return x;
}
function TableControl(tableId) {
  var table = MM_findObj(tableId);
  if (table != null) {
    if (table.style.display == "none") {
      table.style.display = "inline";
    } else {
      table.style.display = "none";
    }
  }
}
function OpenCenterWindow(sUrl, sName, iHeight, iWidth) {
  var top = (screen.height - iHeight) / 2;
  var left = (screen.width - iWidth) / 2;
  var targetWindow = window.open(
    sUrl,
    sName,
    "'toolbar=no,status=yes,toolbar=no,menubar=no,location=no,resizable=yes,scrollbars=yes,width=" +
      iWidth +
      ",height=" +
      iHeight +
      ",top=" +
      top +
      ",left=" +
      left +
      "'"
  );
  targetWindow.focus();
}
function OpenModalWindow(sUrl, iHeight, iWidth) {
  var sValue;
  var modalSupported;
  var sAgent = navigator.userAgent.toLowerCase();
  if (sAgent.indexOf("msie") != -1 && sAgent.indexOf("mac") == -1) {
    var sBrowserVersion = navigator.appVersion.match(/MSIE (.\..)/)[1];
    modalSupported = sBrowserVersion >= 5.5;
  } else {
    if (navigator.product == "Gecko" && navigator.productSub >= 20030210) {
      modalSupported = false;
    } else {
      modalSupported = false;
    }
  }
  if (modalSupported) {
    sValue = window.showModalDialog(
      sUrl,
      window,
      "status:no;scrollbars=yes;dialogWidth:" +
        iWidth +
        "px;dialogHeight:" +
        iHeight +
        "px;help:no"
    );
  } else {
    var radcomDialog = new Object();
    radcomDialog.Show = function (
      dialogInfo,
      dialogName,
      pageUrl,
      dialogWidth,
      dialogHeight,
      parentWindow
    ) {
      var iTop = (screen.height - dialogHeight) / 2;
      var iLeft = (screen.width - dialogWidth) / 2;
      var sOption =
        "location=no,menubar=no,resizable=no,scrollbars=yes,toolbar=no,dependent=yes,dialog=yes,minimizable=no,modal=yes,alwaysRaised=yes,width=" +
        dialogWidth +
        ",height=" +
        dialogHeight +
        ",top=" +
        iTop +
        ",left=" +
        iLeft;
      if (!parentWindow) {
        parentWindow = window;
      }
      var oWindow = parentWindow.open(
        "",
        "radcomEditorDialog_" + dialogName,
        sOption,
        true
      );
      oWindow.moveTo(iLeft, iTop);
      oWindow.resizeTo(dialogWidth, dialogHeight);
      oWindow.focus();
      oWindow.location.href = pageUrl;
      oWindow.dialogArguments = dialogInfo;
      parentWindow.radcomLastDialogInfo = dialogInfo;
      this.Window = oWindow;
      try {
        window.top.captureEvents(
          Event.CLICK | Event.MOUSEDOWN | Event.MOUSEUP | Event.FOCUS
        );
        window.top.parent.addEventListener("mousedown", this.CheckFocus, true);
        window.top.parent.addEventListener("mouseup", this.CheckFocus, true);
        window.top.parent.addEventListener("click", this.CheckFocus, true);
        window.top.parent.addEventListener("focus", this.CheckFocus, true);
      } catch (e) {}
    };
    radcomDialog.CheckFocus = function () {
      if (typeof radcomDialog != "object") {
        return;
      }
      if (radcomDialog.Window && !radcomDialog.Window.closed) {
        radcomDialog.Window.focus();
        return false;
      } else {
        try {
          window.top.releaseEvents(
            Event.CLICK | Event.MOUSEDOWN | Event.MOUSEUP | Event.FOCUS
          );
          window.top.parent.removeEventListener(
            "onmousedown",
            radcomDialog.CheckFocus,
            true
          );
          window.top.parent.removeEventListener(
            "mouseup",
            radcomDialog.CheckFocus,
            true
          );
          window.top.parent.removeEventListener(
            "click",
            radcomDialog.CheckFocus,
            true
          );
          window.top.parent.removeEventListener(
            "onfocus",
            radcomDialog.CheckFocus,
            true
          );
        } catch (e) {
          console.log(e);
        }
      }
    };
    radcomDialog.Show(null, "modalwindow", sUrl, iWidth, iHeight, window);
  }
}
function goto_URL(object, target) {
  window.open(
    object.options[object.selectedIndex].value,
    target ? target : "_self"
  );
}
function refresh(parent) {
  window.opener.location.href = parent;
  window.close();
}
function clickButton(e, buttonid) {
  var bt = MM_findObj(buttonid);
  var isEnter = false;
  if (navigator.appName.indexOf("Netscape") > -1) {
    if (e.keyCode === 13) {
      isEnter = true;
    }
  }
  if (navigator.appName.indexOf("Microsoft Internet Explorer") > -1) {
    if (event.keyCode === 13) {
      isEnter = true;
    }
  }
  if (typeof bt === "object") {
    if (isEnter) {
      if (
        typeof bt.click === "function" ||
        typeof bt.click === "object" ||
        bt.href
      ) {
        bt.click();
        return false;
      }
    }
  }
}
function HasClass(ele, cls) {
  return ele.className.match(new RegExp("(\\s|^)" + cls + "(\\s|$)"));
}
function AddClass(ele, cls) {
  if (!HasClass(ele, cls)) ele.className += " " + cls;
}
function RemoveClass(ele, cls) {
  if (HasClass(ele, cls)) {
    var reg = new RegExp("(\\s|^)" + cls + "(\\s|$)");
    ele.className = ele.className.replace(reg, " ");
  }
}
function ToggleGridRows(chkAll, aspCheckBoxId, parentId) {
  var parentForm = document.forms[0];
  var re;
  if (parentId == undefined) {
    re = new RegExp("_" + aspCheckBoxId + "$");
  } else {
    re = new RegExp(parentId + "_([a-zA-Z0-9]+)_" + aspCheckBoxId + "$");
  }
  for (var i = 0; i < parentForm.elements.length; i++) {
    var elm = parentForm.elements[i];
    if (elm.type == "checkbox") {
      if (re.test(elm.id)) {
        if (chkAll.checked != elm.checked) {
          elm.click();
        }
      }
    }
  }
}
function HighlightGridRow(chkB) {
  var xState = chkB.checked;
  if (xState) {
    addClass(chkB.parentNode.parentNode, "tableselecteditem");
  } else {
    removeClass(chkB.parentNode.parentNode, "tableselecteditem");
  }
}
function SetLabelText(labelId, text) {
  if (window.navigator.userAgent.toLowerCase().indexOf("firefox") != -1) {
    MM_findObj(labelId).textContent = text;
  } else {
    MM_findObj(labelId).innerText = text;
  }
}
function GetLabelText(labelId) {
  var result;
  if (window.navigator.userAgent.toLowerCase().indexOf("firefox") != -1) {
    result = MM_findObj(labelId).textContent;
  } else {
    result = MM_findObj(labelId).innerText;
  }
  return result;
}
function RefreshOpener() {
  if (window.opener != undefined) {
    window.opener.location.href = window.opener.location.href;
    this.close();
  }
}
function DisableEnter(e) {
  var whichCode = window.Event ? e.which : e.keyCode;
  if (whichCode == 13) {
    return false;
  }
}
function ToggleGridCheckBoxes(aspCheckBoxId, formId) {
  var parentForm = MM_findObj(formId);
  var re = new RegExp("_" + aspCheckBoxId + "$");
  for (var i = 0; i < parentForm.elements.length; i++) {
    var elm = parentForm.elements[i];
    if (elm.type == "checkbox") {
      if (re.test(elm.id)) {
        elm.checked = !elm.checked;
      }
    }
  }
}
function CopyToClipboard(textareaId) {
  if (!document.queryCommandSupported("copy")) {
    window.clipboardData.setData("text", $("#" + textareaId).val());
  } else {
    var copyTextarea = $("#" + textareaId);
    copyTextarea.select();
    try {
      var successful = document.execCommand("copy");
      var msg = successful ? "successful" : "unsuccessful";
      console.log("Copying text command was " + msg);
    } catch (err) {
      console.log("Oops, unable to copy");
    }
  }
  return false;
}
function copyTextToClipboard(text) {
  var textArea = document.createElement("textarea");
  textArea.style.position = "fixed";
  textArea.style.top = 0;
  textArea.style.left = 0;
  textArea.style.width = "2em";
  textArea.style.height = "2em";
  textArea.style.padding = 0;
  textArea.style.border = "none";
  textArea.style.outline = "none";
  textArea.style.boxShadow = "none";
  textArea.style.background = "transparent";
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  try {
    var successful = document.execCommand("copy");
    var msg = successful ? "successful" : "unsuccessful";
    console.log("Copying text command was " + msg);
  } catch (err) {
    console.log("Oops, unable to copy");
  }
  document.body.removeChild(textArea);
}
function currencyFormat(fld, milSep, e) {
  var sep = 0;
  var key = "";
  var i = 0;
  var j = 0;
  var len2 = 0;
  var len = 0;
  var strCheck = "0123456789";
  var aux = "";
  var aux2 = "";
  var backspace = false;
  var whichCode;
  if (window.event) {
    whichCode = window.event.keyCode;
  } else {
    if (e) {
      whichCode = e.which;
    }
  }
  if (whichCode >= 96 && whichCode <= 105) {
    whichCode -= 48;
  }
  if (whichCode == 8) {
    fld.value = fld.value.replace(/milSep.value/g, "");
    backspace = true;
    fld.value = fld.value.substring(0, fld.value.length - 1);
  }
  if (whichCode == 13) {
    return true;
  }
  key = String.fromCharCode(whichCode);
  if (whichCode == 9) {
    return true;
  }
  if (!backspace && strCheck.indexOf(key) == -1) {
    return false;
  }
  len = fld.value.length;
  for (i = 0; i < len; i++) {
    if (fld.value.charAt(i) != "0") {
      break;
    }
  }
  aux = "";
  for (; i < len; i++) {
    if (strCheck.indexOf(fld.value.charAt(i)) != -1) {
      aux += fld.value.charAt(i);
    }
  }
  if (!backspace) {
    aux += key;
  }
  len = aux.length;
  if (len == 0) {
    fld.value = "";
  }
  if (len > 0) {
    aux2 = "";
    for (j = 0, i = len - 1; i >= 0; i--) {
      if (j == 3) {
        aux2 += milSep;
        j = 0;
      }
      aux2 += aux.charAt(i);
      j++;
    }
    fld.value = "";
    len2 = aux2.length;
    for (i = len2 - 1; i >= 0; i--) {
      fld.value += aux2.charAt(i);
    }
  }
  return false;
}
function createCookie(name, value, days, domain) {
  var expires;
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toGMTString();
  } else {
    expires = "";
  }
  var domainNameCk;
  if (typeof domain != "undefined" && domain != "") {
    domainNameCk = " domain=" + domain + "; ";
  } else {
    domainNameCk = "";
  }
  var ck =
    name +
    "=" +
    window.encodeURIComponent(value) +
    expires +
    ";" +
    domainNameCk +
    " path=/";
  document.cookie = ck;
}
function readCookie(name) {
  var nameEq = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1, c.length);
    }
    if (c.indexOf(nameEq) == 0) {
      return window.decodeURIComponent(c.substring(nameEq.length, c.length));
    }
  }
  return null;
}
function eraseCookie(name, domain) {
  createCookie(name, "", -1, domain);
}
function setActiveStyleSheet(id) {
  var i, a;
  for (i = 0; (a = document.getElementsByTagName("link")[i]); i++) {
    if (a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("id")) {
      if (a.getAttribute("id") != "StyleSheet") {
        a.disabled = true;
      }
      if (a.getAttribute("id") == "Style" + id) {
        a.disabled = false;
      }
    }
  }
  createCookie("style", id, 365);
}
function getActiveStyleSheet() {
  var cookie = readCookie("style");
  var id = cookie ? cookie : "1";
  return id;
}
function ChangeBackgroundColor(tdName, tdColor) {
  if (MM_findObj(tdName) != null) {
    MM_findObj(tdName).style.backgroundColor = tdColor;
  }
}
function InitStyle() {
  var cookie = readCookie("style");
  var id;
  if (cookie) {
    id = cookie;
  } else {
    createCookie("style", 5, 365);
    id = "5";
  }
  setActiveStyleSheet(id);
}
function InitPreviewImage() {
  var x = readCookie("style");
  if (x) {
    MM_findObj("theme" + x + "table").style.borderColor = "#000000";
  } else {
    MM_findObj("theme1table").style.borderColor = "#000000";
  }
}
function ThemeTdMouseOut(id) {
  var x = readCookie("style");
  if (x == id) {
    MM_findObj("theme" + id + "table").style.borderColor = "#000000";
  } else {
    for (var i = 1; i <= 5; i++) {
      if (x != i) {
        MM_findObj("theme" + i + "table").style.borderColor = "#ffffff";
      }
    }
  }
}
function ThemeSelect(id) {
  for (var i = 1; i <= 5; i++) {
    if (id != i) {
      MM_findObj("theme" + i + "table").style.borderColor = "#ffffff";
    }
  }
  setActiveStyleSheet(id);
}
function TDOver(obj, id) {
  MM_findObj("theme" + id + "table").style.borderColor = "#000000";
  obj.style.cursor = "hand";
}
function escapeHTML(str) {
  var div = document.createElement("div");
  var text = document.createTextNode(str);
  div.appendChild(text);
  return div.innerHTML;
}
function unescapeHTML(str) {
  var div = document.createElement("div");
  div.innerHTML = str.replace(/<\/?[^>]+>/gi, "");
  return div.childNodes[0] ? div.childNodes[0].nodeValue : "";
}
function ShowHideBox(boxId, imageId) {
  var isVisible = 0;
  var box = MM_findObj(boxId);
  var image = MM_findObj(imageId);
  if (box && image) {
    if (box.style.display == "none") {
      box.style.display = "block";
      image.src = "/Components/General/Resources/Images/Minus.gif";
      isVisible = 1;
    } else {
      box.style.display = "none";
      image.src = "/Components/General/Resources/Images/Plus.gif";
      isVisible = 0;
    }
  }
  return isVisible;
}
function ShowHideDiv(boxId, divId) {
  var isVisible = 0;
  var box = MM_findObj(boxId);
  var div = MM_findObj(divId);
  if (box && div) {
    if (box.style.display == "none") {
      box.style.display = "block";
      var em = $(div).find("em");
      if (em) {
        em.removeClass();
        em.addClass("glyphicon glyphicon-minus");
      }
      isVisible = 1;
    } else {
      box.style.display = "none";
      var em = $(div).find("em");
      if (em) {
        em.removeClass();
        em.addClass("glyphicon glyphicon-plus");
      }
      isVisible = 0;
    }
  }
  return isVisible;
}
function DisableControl(obj) {
  if (obj) {
    try {
      obj.disabled = true;
      obj.style.color = "gray";
    } catch (e) {}
    if (obj.childNodes && obj.childNodes.length > 0) {
      for (var x = 0; x < obj.childNodes.length; x++) {
        DisableControl(obj.childNodes[x]);
      }
    }
  }
}
function EnableControl(obj) {
  if (obj) {
    try {
      obj.disabled = false;
      obj.style.color = "";
    } catch (e) {}
    if (obj.childNodes && obj.childNodes.length > 0) {
      for (var x = 0; x < obj.childNodes.length; x++) {
        EnableControl(obj.childNodes[x]);
      }
    }
  }
}
function GetddlListValue(id) {
  var a = null;
  var e = MM_findObj(id);
  if (e) {
    for (var i = 0; i < e.length; i++) {
      if (e[i].checked) {
        a = e[i].value;
        break;
      }
    }
  }
  return a;
}
function RemoveTextboxAndLabelValue(txtboxId, labelId) {
  var txtId = MM_findObj(txtboxId);
  var lblTitle = MM_findObj(labelId);
  if (txtId != null) {
    txtId.value = "";
  }
  if (lblTitle != null) {
    lblTitle.innerText = "";
  }
}
function HideControl(controlId) {
  $("#" + controlId).hide();
}
String.prototype.format = function () {
  var formatted = this;
  for (var i = 0; i < arguments.length; i++) {
    var regexp = new RegExp("\\{" + i + "\\}", "gi");
    formatted = formatted.replace(regexp, arguments[i]);
  }
  return formatted;
};
function ConvertToDelimitedNumber(number, delimiter) {
  (number = number + ""), (delimiter = delimiter || ",");
  var split = number.split(".");
  split[0] = split[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1" + delimiter);
  return split.join(".");
}
function CheckMaxLength(txt, maxLen, message) {
  if (txt.value.length > maxLen) {
    txt.value = txt.value.substring(0, maxLen);
    if (message) {
      alert(message);
    }
    return false;
  }
  return true;
}
function getElementTopLeft(id, mainContainer) {
  var ele = document.getElementById(id);
  var top = 0;
  var left = 0;
  while (
    (ele.tagName.toLowerCase() != "body") &
    !(mainContainer != "" && ele.id != "" && mainContainer == ele.id)
  ) {
    top += ele.offsetTop;
    left += ele.offsetLeft;
    ele = ele.offsetParent;
  }
  return { top: top, left: left };
}
function is_child_of(parent, child) {
  if (child != null) {
    while (child.parentNode) {
      if ((child = child.parentNode) == parent) {
        return true;
      }
    }
  }
  return false;
}
function fixOnMouseOut(element, event, javaScriptCode) {
  var currentMouseTarget = null;
  if (event.toElement) {
    currentMouseTarget = event.toElement;
  } else {
    if (event.relatedTarget) {
      currentMouseTarget = event.relatedTarget;
    }
  }
  if (
    !is_child_of(element, currentMouseTarget) &&
    element != currentMouseTarget
  ) {
    eval(javaScriptCode);
  }
}
function ValidateSsn(source, args) {
  args.IsValid = false;
  try {
    var ssn = args.Value;
    if (ssn.length == 10) {
      if (
        ssn != "0000000000" &&
        ssn != "1111111111" &&
        ssn != "2222222222" &&
        ssn != "3333333333" &&
        ssn != "4444444444" &&
        ssn != "5555555555" &&
        ssn != "6666666666" &&
        ssn != "7777777777" &&
        ssn != "8888888888" &&
        ssn != "9999999999"
      ) {
        var c = parseInt(ssn.charAt(9));
        var n =
          parseInt(ssn.charAt(0)) * 10 +
          parseInt(ssn.charAt(1)) * 9 +
          parseInt(ssn.charAt(2)) * 8 +
          parseInt(ssn.charAt(3)) * 7 +
          parseInt(ssn.charAt(4)) * 6 +
          parseInt(ssn.charAt(5)) * 5 +
          parseInt(ssn.charAt(6)) * 4 +
          parseInt(ssn.charAt(7)) * 3 +
          parseInt(ssn.charAt(8)) * 2;
        var r = n - parseInt(n / 11) * 11;
        if (
          (r == 0 && r == c) ||
          (r == 1 && c == 1) ||
          (r > 1 && c == 11 - r)
        ) {
          args.IsValid = true;
        }
      }
    }
  } catch (e) {
    args.IsValid = false;
  }
}
var setRemoveCallback = function () {
  __flash__removeCallback = function (instance, name) {
    if (instance) {
      instance[name] = null;
    }
  };
  window.setTimeout(setRemoveCallback, 10);
};
setRemoveCallback();
function getInsertObjectHtml(objectType) {
  return (
    "<div><a target='_blank' href='{0}'><img src='/Components/Media/Resources/Images/Types/" +
    objectType +
    "32.png' border='0' alt='{1}'></a> <a target='_blank' href='{0}' class='caption'>{1}</a></div>"
  );
}
function getInsertFlashHtml() {
  return "<embed height='{2}' type='application/x-shockwave-flash' pluginspage='http://www.macromedia.com/go/getflashplayer' width='{1}' src='{0}' menu='false' allowfullscreen='true' loop='true' wmode='transparent' quality='high' ></embed>";
}
function getPastedHtmlInEditor(
  url,
  title,
  objectType,
  objectWidth,
  objectHeight,
  loop,
  autoplay,
  thumbnail,
  insertFancyBoxStyle,
  responsive,
  specificWidth,
  specificHeight
) {
  var result;
  var webplayerId;
  var videoplayerId;
  var path;
  var specificDimention = "";
  if (specificWidth && specificWidth !== "") {
    specificDimention += String.format(
      "width='{0}' ",
      specificWidth.indexOf("%") > -1 ? specificWidth : specificWidth + "px"
    );
    responsive = false;
  }
  if (specificHeight && specificHeight !== "") {
    specificDimention += String.format(
      "height='{0}' ",
      specificHeight.indexOf("%") > -1 ? specificHeight : specificHeight + "px"
    );
    responsive = false;
  }
  switch (objectType) {
    case "Image":
      if (insertFancyBoxStyle) {
        result = String.format(
          "<a class='fancybox' data-width='{0}' data-height='{1}' href='{2}' title='{3}'><img src='{4}' title='{3}' class='center-block' {5}/></a>",
          objectWidth,
          objectHeight,
          url,
          title,
          thumbnail,
          specificDimention
        );
      } else {
        result = String.format(
          "<img src='{0}' border='0' alt='{1}' class='center-block {2}' {3}/> ",
          url,
          title,
          responsive ? "img-responsive" : "",
          specificDimention
        );
      }
      break;
    case "Flash":
      result = String.format(
        getInsertFlashHtml(),
        url,
        objectWidth,
        objectHeight
      );
      break;
    case "FlashVideo":
      webplayerId = guid();
      videoplayerId = guid();
      if (insertFancyBoxStyle) {
        path = GetMediaPlayerObject(
          title,
          url,
          thumbnail,
          objectWidth,
          objectHeight,
          autoplay,
          loop,
          webplayerId,
          videoplayerId,
          true,
          responsive,
          specificWidth,
          specificHeight
        );
        if (thumbnail !== "") {
          result = String.format(
            "<a class='fancybox' data-width='{0}' data-height='{1}' href='#{2}' title='{3}'><img src='{4}' title='{3}' class='img-responsive'/></a>{5}",
            objectWidth,
            objectHeight,
            "mp_" + webplayerId,
            title,
            thumbnail,
            path
          );
        } else {
          result = String.format(
            "<a class='fancybox' data-width='{0}' data-height='{1}' href='#{2}' title='{3}'>{3}</a>{4}",
            objectWidth,
            objectHeight,
            "mp_" + webplayerId,
            title,
            path
          );
        }
      } else {
        result = GetMediaPlayerObject(
          title,
          url,
          thumbnail,
          objectWidth,
          objectHeight,
          autoplay,
          loop,
          webplayerId,
          videoplayerId,
          false,
          responsive,
          specificWidth,
          specificHeight
        );
      }
      break;
    case "Audio":
      webplayerId = "wp_" + guid();
      videoplayerId = "vp_" + guid();
      if (objectWidth <= 0) {
        objectWidth = 300;
      }
      if (objectHeight <= 0) {
        objectHeight = 5;
      }
      if (insertFancyBoxStyle) {
        path = GetMediaPlayerObject(
          title,
          url,
          thumbnail,
          objectWidth,
          objectHeight,
          autoplay,
          loop,
          webplayerId,
          videoplayerId,
          true,
          responsive,
          specificWidth,
          specificHeight
        );
        if (thumbnail !== "") {
          result = String.format(
            "<a class='fancybox' data-width='{0}' data-height='{1}' href='#{2}' title='{3}'><img src='{4}' title='{3}' {6}/></a>{5}",
            objectWidth,
            objectHeight,
            webplayerId,
            title,
            thumbnail,
            path,
            responsive ? "" : specificDimention
          );
        } else {
          result = String.format(
            "<a class='fancybox' data-width='{0}' data-height='{1}' href='#{2}' title='{3}'>{3}</a>{4}",
            objectWidth,
            objectHeight,
            webplayerId,
            title,
            path
          );
        }
      } else {
        result = GetMediaPlayerObject(
          title,
          url,
          thumbnail,
          objectWidth,
          objectHeight,
          autoplay,
          loop,
          webplayerId,
          videoplayerId,
          false,
          responsive,
          specificWidth,
          specificHeight
        );
      }
      break;
    default:
      result = String.format(getInsertObjectHtml(objectType), url, title);
      break;
  }
  return result;
}
function CheckInputNumber(evt) {
  var theEvent = evt || window.event;
  var key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode(key);
  var regex = /[0-9]|\./;
  if (!regex.test(key)) {
    theEvent.returnValue = false;
    if (theEvent.preventDefault) {
      theEvent.preventDefault();
    }
  }
}
function ShowValidationDialog(element) {
  var parent = findParent($(element), "formToolTip");
  if (parent) {
    var dialog = $(parent).find(".validationDialog").first();
    dialog.css("display", "block");
  }
}
function HideValidationDialog(element) {
  var parent = findParent($(element), "formToolTip");
  if (parent) {
    var dialog = $(parent).find(".validationDialog").first();
    dialog.css("display", "none");
  }
}
function findParent(element, className) {
  var parent = $(element).parent();
  if (parent.hasClass(className)) return parent;
  if (parent.is($("body"))) return undefined;
  return findParent(parent, className);
}
function ConvertNumberToUTF8(str) {
  return str.replace(/[0123456789]/g, function (d) {
    return String.fromCharCode(d.charCodeAt(0) + 1728);
  });
}
function ConvertUTF8toNumber(str) {
  return str.replace(
    /[\u06F0\u06F1\u06F2\u06F3\u06F4\u06F5\u06F6\u06F7\u06F8\u06F9]/g,
    function (d) {
      return String.fromCharCode(d.charCodeAt(0) - 1728);
    }
  );
}
var beforeload = new Date().getTime();
function TellAFriend(lang) {
  OpenCenterWindow("/" + lang + "/tellafriend", "TellAFriend", 600, 550);
}
function RightClose(id) {
  var tbl = MM_findObj(id);
  if (tbl) {
    var display = tbl.style.display ? "" : "none";
    tbl.style.display = display;
  }
}
function emailcheck(str) {
  var at = "@";
  var dot = ".";
  var lat = str.indexOf(at);
  var lstr = str.length;
  if (str.indexOf(at) == -1) return false;
  if (str.indexOf(at) == -1 || str.indexOf(at) == 0 || str.indexOf(at) == lstr)
    return false;
  if (
    str.indexOf(dot) == -1 ||
    str.indexOf(dot) == 0 ||
    str.indexOf(dot) == lstr
  )
    return false;
  if (str.indexOf(at, lat + 1) != -1) return false;
  if (
    str.substring(lat - 1, lat) == dot ||
    str.substring(lat + 1, lat + 2) == dot
  )
    return false;
  if (str.indexOf(dot, lat + 2) == -1) return false;
  if (str.indexOf(" ") != -1) return false;
  return true;
}
function MM_validateForm() {
  var i,
    p,
    q,
    nm,
    test,
    num,
    min,
    max,
    errors = "",
    args = MM_validateForm.arguments;
  for (i = 0; i < args.length - 2; i += 3) {
    test = args[i + 2];
    val = MM_findObj(args[i]);
    if (args[i + 1] == "") {
      itemname = val.name;
    } else {
      itemname = args[i + 1];
    }
    if (val) {
      nm = val.name;
      if ((val = val.value) != "") {
        if (test.indexOf("isEmail") != -1) {
          p = emailcheck(val);
          if (!p)
            errors +=
              "" +
              itemname +
              " بايد با قالب پست الکترونيکي مطابقت داشته باشد\n";
        } else if (test != "R") {
          if (isNaN(val)) errors += "" + itemname + " بايد مقداري عددي باشد\n";
          if (test.indexOf("inRange") != -1) {
            p = test.indexOf(":");
            min = test.substring(8, p);
            max = test.substring(p + 1);
            if (val < min || max < val)
              errors +=
                "" +
                itemname +
                " بايد عددي بين " +
                min +
                " و " +
                max +
                "باشد\n";
          }
        }
      } else if (test.charAt(0) == "R")
        errors += "" + itemname + " را وارد کنيد\n";
    }
  }
  if (errors) alert("" + errors);
  return errors == "";
}
function loadflash(holderid, theurl, width, height) {
  var holder = MM_findObj(holderid);
  if (holder) {
    holder.innerHTML =
      '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0" width="' +
      width +
      '" height="' +
      height +
      '"><param name="movie" value="' +
      theurl +
      '" /><param name="quality" value="high" /><param name="wmode" value="transparent" /><param value="exactfit" name="SCALE" /><embed src="' +
      theurl +
      '" width="' +
      width +
      '" height="' +
      height +
      '" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" wmode="transparent" scale="exactfit" /></embed></object>';
  }
}
function loadimage(holderid, theurl) {
  var holder = MM_findObj(holderid);
  if (holder) {
    MM_findObj(holderid).innerHTML = '<img  src="' + theurl + '" >';
  }
}
function ChangeState(img, cnId) {
  var container = MM_findObj(cnId);
  if (container) {
    if (container.style.display == "none") {
      container.style.display = "block";
      img.src = "/Components/General/Resources/Images/Minus.gif";
    } else {
      container.style.display = "none";
      img.src = "/Components/General/Resources/Images/Plus.gif";
    }
  }
}
function GuaranteeChecked(chk, prefix) {
  var lblGuaranteePrice = MM_findObj(prefix + "_lblGuaranteePrice");
  var lblGuaranteeTitle = MM_findObj(prefix + "_lblGuaranteeTitle");
  lblGuaranteePrice.disabled = !chk.checked;
  lblGuaranteeTitle.disabled = !chk.checked;
}
function AddToFavorites() {
  var title = document.title;
  var url = window.location.href;
  if (window.sidebar) {
    window.sidebar.addPanel(title, url, "");
  } else if (window.external) {
    window.external.AddFavorite(url, title);
  } else if (window.opera && window.print) {
    return true;
  }
  return true;
}
function startAlbumRotator(rotator) {
  rotator.start();
}
function stopAlbumRotator(rotator) {
  rotator.stop();
}
function showNextItem(rotator, direction) {
  rotator.showNext(direction);
}
function GetRbtnListValue(id) {
  var a = null;
  var radio = MM_findObj(id);
  var e = radio.getElementsByTagName("input");
  if (e) {
    for (var i = 0; i < e.length; i++) {
      if (e[i].checked) {
        a = e[i].value;
        break;
      }
    }
  }
  return a;
}
function SetRbtnListValue(id, value) {
  var radio = MM_findObj(id);
  var e = radio.getElementsByTagName("input");
  if (e) {
    for (var i = 0; i < e.length; i++) {
      e[i].checked = e[i].value == value;
    }
  }
}
function SetRbtnListDisabled(id, value, disabled) {
  var radio = MM_findObj(id);
  var e = radio.getElementsByTagName("input");
  if (e) {
    for (var i = 0; i < e.length; i++) {
      if (e[i].value == value) {
        e[i].disabled = disabled;
        break;
      }
    }
  }
}
function addOption(selectbox, text, value) {
  var optn = document.createElement("OPTION");
  optn.text = text;
  optn.value = value;
  selectbox.options.add(optn);
}
function Remove(selectbox) {
  for (var i = selectbox.options.length - 1; i >= 0; i--) {
    selectbox.options[i] = null;
  }
}
function ChangeDisplay(objId, display) {
  var obj = MM_findObj(objId);
  if (obj != null) obj.style.display = display;
}
function GetAjaxPostbackControlID() {
  if (window.Sys.WebForms.PageRequestManager.getInstance() != null) {
    var setting =
      window.Sys.WebForms.PageRequestManager.getInstance()._postBackSettings;
    if (setting != null) return setting.asyncTarget;
  }
  return "";
}
function SetPageSegmentsVisibility(id, isVisible) {
  var tempList = getElementsByClass(document, "*", "noPrint");
  for (var i = 0; i < tempList.length; i++) {
    if (!isVisible) AddClass(tempList[i], "hide");
    else RemoveClass(tempList[i], "hide");
  }
  var noBackgroundList = getElementsByClass(
    document,
    "*",
    "noBackgroundInPrint"
  );
  for (var j = 0; j < noBackgroundList.length; j++) {
    if (!isVisible) AddClass(noBackgroundList[j], "noBackground");
    else RemoveClass(noBackgroundList[j], "noBackground");
  }
  var contentSegment = MM_findObj(id + "_divContentColumn");
  if (contentSegment) {
    if (!isVisible) {
      AddClass(contentSegment, "noMargin");
    } else {
      RemoveClass(contentSegment, "noMargin");
    }
  }
  var printBack = MM_findObj("divPrintVersionBack");
  if (printBack) {
    if (isVisible) printBack.style.display = "none";
    else printBack.style.display = "block";
  }
}
function ShowPrintVersion(id) {
  SetPageSegmentsVisibility(id, false);
  window.print();
}
function HidePrintVersion(id) {
  SetPageSegmentsVisibility(id, true);
}
var getElementsByClassName = function (className, tag, elm) {
  if (document.getElementsByClassName) {
    getElementsByClassName = function (className, tag, elm) {
      elm = elm || document;
      var elements = elm.getElementsByClassName(className),
        nodeName = tag ? new RegExp("\\b" + tag + "\\b", "i") : null,
        returnElements = [],
        current;
      for (var i = 0, il = elements.length; i < il; i += 1) {
        current = elements[i];
        if (!nodeName || nodeName.test(current.nodeName)) {
          returnElements.push(current);
        }
      }
      return returnElements;
    };
  } else if (document.evaluate) {
    getElementsByClassName = function (className, tag, elm) {
      tag = tag || "*";
      elm = elm || document;
      var classes = className.split(" "),
        classesToCheck = "",
        xhtmlNamespace = "http://www.w3.org/1999/xhtml",
        namespaceResolver =
          document.documentElement.namespaceURI === xhtmlNamespace
            ? xhtmlNamespace
            : null,
        returnElements = [],
        elements,
        node;
      for (var j = 0, jl = classes.length; j < jl; j += 1) {
        classesToCheck +=
          "[contains(concat(' ', @class, ' '), ' " + classes[j] + " ')]";
      }
      try {
        elements = document.evaluate(
          ".//" + tag + classesToCheck,
          elm,
          namespaceResolver,
          0,
          null
        );
      } catch (e) {
        elements = document.evaluate(
          ".//" + tag + classesToCheck,
          elm,
          null,
          0,
          null
        );
      }
      while ((node = elements.iterateNext())) {
        returnElements.push(node);
      }
      return returnElements;
    };
  } else {
    getElementsByClassName = function (className, tag, elm) {
      tag = tag || "*";
      elm = elm || document;
      var classes = className.split(" "),
        classesToCheck = [],
        elements =
          tag === "*" && elm.all ? elm.all : elm.getElementsByTagName(tag),
        current,
        returnElements = [],
        match;
      for (var k = 0, kl = classes.length; k < kl; k += 1) {
        classesToCheck.push(new RegExp("(^|\\s)" + classes[k] + "(\\s|$)"));
      }
      for (var l = 0, ll = elements.length; l < ll; l += 1) {
        current = elements[l];
        match = false;
        for (var m = 0, ml = classesToCheck.length; m < ml; m += 1) {
          match = classesToCheck[m].test(current.className);
          if (!match) {
            break;
          }
        }
        if (match) {
          returnElements.push(current);
        }
      }
      return returnElements;
    };
  }
  return getElementsByClassName(className, tag, elm);
};
function resizeList(list, multiplier, count) {
  var size, lineheight;
  for (var i = 0; i < list.length; i++) {
    if (list[i].className.indexOf("noFontSizeChange") === -1) {
      if (list[i].currentStyle) {
        size = list[i].currentStyle["fontSize"];
        lineheight = list[i].currentStyle["lineHeight"];
      } else if (window.getComputedStyle) {
        size = document.defaultView
          .getComputedStyle(list[i], null)
          .getPropertyValue("font-Size");
        lineheight = document.defaultView
          .getComputedStyle(list[i], null)
          .getPropertyValue("line-Height");
      } else {
        size = "11px";
        lineheight = "15px";
      }
      if (lineheight == "normal") lineheight = "15px";
      switch (size) {
        case "xx-small":
          size = "8px";
          break;
        case "x-small":
          size = "9px";
          break;
        case "small":
          size = "10px";
          break;
        case "medium":
          size = "11px";
          break;
        case "large":
          size = "12px";
          break;
        case "x-large":
          size = "13px";
          break;
        case "xx-large":
          size = "14px";
          break;
        case "larger":
          size = "11px";
          break;
        case "smaller":
          size = "9px";
          break;
      }
      if (size.indexOf("px") == -1 && size.indexOf("pt") == -1)
        size = parseFloat(size) + 11;
      try {
        list[i].style.fontSize =
          parseFloat(size) + parseFloat(multiplier) - parseFloat(count) + "px";
        list[i].style.lineHeight =
          parseFloat(lineheight) +
          (parseFloat(multiplier) - parseFloat(count)) * 2 +
          "px";
      } catch (e) {}
    }
  }
}
function resizeText(multiplier, mainClass, setsize) {
  var cookiemultiplier = readCookie("fontsizemultiplier");
  if (cookiemultiplier == null || cookiemultiplier == "") {
    cookiemultiplier = 0;
  }
  if (multiplier == "0" && setsize != 1) {
    createCookie("fontsizemultiplier", 0, 30);
  } else {
    createCookie(
      "fontsizemultiplier",
      parseFloat(cookiemultiplier) + parseFloat(multiplier),
      30
    );
    if (setsize == 1) {
      multiplier = cookiemultiplier;
    }
    cookiemultiplier = "0";
  }
  try {
    if ($telerik.$) {
      window.$ = $telerik.$;
    }
  } catch (err) {}
  var divContentColumn = $(String.Format(".{0}", [mainClass])).find(
    ".content, .label, .briefDescription, a, h1, h2, h3, h4, h5, h6, font, p"
  );
  resizeList(divContentColumn.get(), multiplier, cookiemultiplier);
}
function getElementsByClass(oElm, strTagName, strClassName) {
  var arrElements =
    strTagName == "*" && oElm.all
      ? oElm.all
      : oElm.getElementsByTagName(strTagName);
  var arrReturnElements = new Array();
  strClassName = strClassName.replace(/\-/g, "\\-");
  var oRegExp = new RegExp("(^|\\s)" + strClassName + "(\\s|$)");
  var oElement;
  for (var i = 0; i < arrElements.length; i++) {
    oElement = arrElements[i];
    if (oRegExp.test(oElement.className)) {
      arrReturnElements.push(oElement);
    }
  }
  return arrReturnElements;
}
function SelectMyTab(sender, args) {
  args.get_tab().select();
}
function getInternetExplorerVersion() {
  var version = -1;
  if (navigator.appName == "Microsoft Internet Explorer") {
    var userAgent = navigator.userAgent;
    var regExpresion = new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})");
    if (regExpresion.exec(userAgent) != null) version = parseFloat(RegExp.$1);
  }
  return version;
}
function BrowserDetection() {
  this.isSafari =
    /Safari[\/\s](\d+\.\d+)/.test(navigator.userAgent) &&
    /Version[\/\s](\d+\.\d+)/.test(navigator.userAgent);
  this.isIE = /MSIE (\d+\.\d+);/.test(navigator.userAgent);
  this.isFireFox = /Firefox[\/\s](\d+\.\d+)/.test(navigator.userAgent);
  this.isChrome = /Chrome[\/\s](\d+\.\d+)/.test(navigator.userAgent);
  this.isOpera = /Opera[\/\s](\d+\.\d+)/.test(navigator.userAgent);
}
function ConvertToUnicode(s) {
  return s
    .replace(/0/g, "\u06F0")
    .replace(/1/g, "\u06F1")
    .replace(/2/g, "\u06F2")
    .replace(/3/g, "\u06F3")
    .replace(/4/g, "\u06F4")
    .replace(/5/g, "\u06F5")
    .replace(/6/g, "\u06F6")
    .replace(/7/g, "\u06F7")
    .replace(/8/g, "\u06F8")
    .replace(/9/g, "\u06F9");
}
function IfFunctionExistsCallIt(functionName) {
  var fn = window[functionName];
  var fnExists = typeof fn === "function";
  if (fnExists) fn();
}
String.Format = function (format, parameter) {
  return format.replace(
    /\{(\d+)\}/g,
    function (matchItem, index, matchCharPosition, input) {
      return parameter[index] ? parameter[index] : matchItem;
    }
  );
};
function ShowPrint(status, keepLogo) {
  if (status) {
    $("html head").append(
      '<link rel="stylesheet" href="/Components/General/Resources/Styles/Print.css" id="printStyleSheet">'
    );
    $(
      '<div class="text-center printFunctionButtons"><a href="javascript:void(0);" class="btn btn-default" onclick="javascript:window.print();" style="margin-left: 10px;"><img src="/Components/General/Resources/Images/Printer.png" class="img-responsive" style="width: 20px;"></a><a href="javascript:void(0);" class="btn btn-default" onclick="javascript:ShowPrint(false);"><img src="/Components/General/Resources/Images/ExitPrint.png" width="40" class="img-responsive"/></a></div>'
    ).insertAfter(".adminBarWrap");
    $("body").addClass("printView");
    var mainLogoLink = $(".mainLogoLink");
    var mainLogoImage = $(".mainLogoImage");
    if (mainLogoLink && mainLogoImage) {
      if (!keepLogo) {
        mainLogoImage.hide();
        mainLogoLink.text(mainLogoImage.attr("alt"));
      }
    }
  } else {
    $("#printStyleSheet").remove();
    $(".printFunctionButtons").remove();
    $("body").removeClass("printView");
  }
}
function ScrollBackToTop(element, showAlways) {
  element = $(element);
  if (!showAlways) {
    element.fadeOut("fast");
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        element.fadeIn();
      } else {
        element.fadeOut();
      }
    });
  }
  element.click(function () {
    $("body,html").stop(false, false).animate({ scrollTop: 0 }, 800);
    return false;
  });
}
function GoToTopOfElement(containerId) {
  $("#" + containerId).animate({ scrollTop: 0 }, 800);
}
function GoToTop() {
  $("html, body").animate({ scrollTop: 0 }, 800);
}
$(document).ready(function () {
  $(window).bind("scroll", function () {
    if ($(window).scrollTop() > 200) {
      $(".goToTop").fadeIn();
    } else {
      $(".goToTop").fadeOut();
    }
  });
  $(".goToTop").bind("click", function () {
    GoToTop();
  });
});
function SelectTab(tabContainerId, selectedTabIndex) {
  var tabPanel = $("#" + tabContainerId + " li");
  if (selectedTabIndex < tabPanel.length) {
    $("#" + tabContainerId + " li:eq(" + selectedTabIndex + ") a").tab("show");
  }
}
var guid = (function () {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return function () {
    return s4() + s4() + s4() + s4() + s4() + s4() + s4() + s4();
  };
})();
$.fn.isInViewport = function (telorance) {
  telorance = telorance || 0;
  var viewPortScrollEnd = $(window).scrollTop() + $(window).height();
  var objectTop = $(this).offset().top;
  return viewPortScrollEnd - telorance >= objectTop;
};
function doAnimations() {
  var $animatables = $(".animatable");
  if ($animatables.length === 0) {
    $(window).off("scroll", doAnimations);
  }
  if ($animatables.length > 0) {
    $animatables.each(function (i) {
      if ($(this).isInViewport()) {
        $(this).removeClass("animatable").addClass("animated");
      }
    });
  }
}
try {
  if (window.innerWidth >= 768) {
    $(document).ready(function () {
      $(window).bind("scroll touchend", doAnimations);
      doAnimations();
    });
  } else {
    $(document).ready(function () {
      var $animatables = $(".animatable");
      $animatables.each(function (i) {
        $(this).removeClass("animatable").addClass("animated");
      });
    });
  }
} catch (e) {}
$(document).ready(function () {
  try {
    $(".table-responsive table:not(.table-exclude)").each(function () {
      $(this).css("min-width", $(this).width());
    });
    var isInAdminSection =
      window.location.href.toLowerCase().indexOf(".aspx") >= 0;
    if (!isInAdminSection) {
      $(".content table").addClass("table");
      $(".content table").wrap('<div class="table-responsive"></div>');
    }
    try {
      $(document).tooltip({ selector: '[data-toggle="tooltip"]' });
    } catch (e) {}
    $(".searchBox").each(function () {
      if (window.localStorage.getItem($(this).attr("id")) === "true") {
        $(this).children(".searchItems").show();
      }
    });
    $(".searchBox").click(function () {
      window.localStorage.setItem($(this).attr("id"), true);
      $(this).children(".searchItems").slideDown("slow");
    });
    $(".searchBox")
      .siblings(".panel-heading")
      .click(function () {
        var isTrueSet =
          window.localStorage.getItem(
            $(this).siblings(".searchBox").attr("id")
          ) == "true";
        if (!isTrueSet) {
          window.localStorage.setItem(
            $(this).siblings(".searchBox").attr("id"),
            true
          );
          $(this)
            .siblings(".searchBox")
            .children(".searchItems")
            .slideDown("slow");
        }
      });
    $('[data-target="#searchBox"]').on("click", function () {
      $(this).next().slideToggle().toggleClass("collapse");
    });
  } catch (e) {}
});
$(document).mouseup(function (e) {
  var container = $(".searchBox");
  var excludeArea = $(".calendar, .searchResult");
  if (
    !container.is(e.target) &&
    container.has(e.target).length === 0 &&
    !excludeArea.is(e.target) &&
    excludeArea.has(e.target).length === 0
  ) {
    $(".searchBox .searchItems").slideUp("slow", function () {
      window.localStorage.setItem(
        $(this).closest(".searchBox").attr("id"),
        false
      );
    });
  }
});
$(document).ready(function () {
  if ($(window).width() < 767) {
    $(".tab-wrapper .panel-group .panel-collapse:not(.active)")
      .not(".panel-body-dbform")
      .not(".collapsed")
      .collapse("hide");
  }
});
$(document).ready(function () {
  $(".mapCanvas .content").on("click", function () {
    $(this).children("iframe").removeClass("scrollOff");
  });
  $(".mapCanvas .content").mouseleave(function () {
    $(this).children("iframe").addClass("scrollOff");
  });
  $(".mapCanvas iframe").addClass("scrollOff");
});
function getParameterByName(name, url) {
  if (!url) {
    url = window.location.href;
    url = url.toLowerCase();
  }
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
  var results = regex.exec(url);
  if (!results) {
    return null;
  }
  if (!results[2]) {
    return "";
  }
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}
$(document).ready(function () {
  $(".exceptActive").each(function () {
    var tabs = $(this).find(".tab-wrapper");
    if (tabs && tabs.length > 0) {
      tabs.addClass("exceptActive");
    }
  });
  activeTabChanger = {
    changeTabStatus: function () {
      $(".tab-wrapper:not(.exceptActive) > .nav-tabs > li").on(
        "click",
        function () {
          var tabUID = $(this)
            .closest(".tab-wrapper:not(.exceptActive)")
            .attr("id");
          var tabCount = Number(
            $(this)
              .closest(".tab-wrapper:not(.exceptActive)")
              .find("> .nav-tabs > li").length
          );
          window.localStorage.setItem(
            tabUID + "__" + tabCount,
            $(this).index()
          );
        }
      );
    },
    loadTabStatus: function () {
      var tabCount = $(".tab-wrapper:not(.exceptActive)").length;
      var selectedTab = getParameterByName("selectedtab");
      if (selectedTab) {
        if (!isNaN(parseInt(selectedTab))) {
          var tabUID = $(".tab-wrapper:not(.exceptActive)").eq(0).attr("id");
          tabCount = $(".tab-wrapper:not(.exceptActive)")
            .eq(0)
            .find(".nav-tabs > li").length;
          window.localStorage.setItem(tabUID + "__" + tabCount, selectedTab);
        } else if (
          selectedTab[0] == "(" &&
          selectedTab[selectedTab.length - 1] == ")"
        ) {
          var selectedTabs = selectedTab.split(",");
          var currentTab;
          var currentTabUID;
          var currentTabtabCount;
          for (var i = 0; i < selectedTabs.length; i++) {
            currentTab = selectedTabs[i].replace("(", "");
            currentTab = currentTab.replace(")", "");
            currentTab = currentTab.split(":");
            currentTabUID = $(".tab-wrapper:not(.exceptActive)")
              .eq(parseInt(currentTab[0]))
              .attr("id");
            currentTabtabCount = $(".tab-wrapper:not(.exceptActive)")
              .eq(parseInt(currentTab[0]))
              .find(".nav-tabs > li").length;
            if (currentTabUID) {
              window.localStorage.setItem(
                currentTabUID + currentTabtabCount,
                parseInt(currentTab[1])
              );
            }
          }
        } else {
          console.warn("Syntax error: selectedTab in url");
        }
      }
      if (tabCount > 0) {
        $(".tab-wrapper").each(function (index) {
          try {
            var tabUID = $(this).attr("id");
            var count = Number($(this).find("> .nav-tabs > li").length);
            var currentTabStorageKey = tabUID + "__" + count;
            var currentTab = tabUID;
            var activeTab = window.localStorage.getItem(currentTabStorageKey);
            if (activeTab) {
              activeTab = parseInt(activeTab);
            } else {
              activeTab = 0;
            }
            $(String.Format("#{0} > .nav-tabs > li", [currentTab])).removeClass(
              "active"
            );
            $(String.Format("#{0} > .nav-tabs > li", [currentTab]))
              .eq(activeTab)
              .addClass("active");
            $(
              String.Format("#{0} > .tab-content > .tab-pane", [currentTab])
            ).removeClass("active");
            $(
              String.Format("#{0} > .tab-content > .tab-pane", [currentTab])
            ).removeClass("in");
            $(String.Format("#{0} > .tab-content > .tab-pane", [currentTab]))
              .eq(activeTab)
              .addClass("active in");
          } catch (e) {}
        });
      }
    },
  };
  var activeTabChangerSampa = activeTabChanger;
  activeTabChangerSampa.changeTabStatus();
  activeTabChangerSampa.loadTabStatus();
});
$(document).ready(function () {
  if (window.innerWidth <= 768) {
    $(".footerNav .footerNavToggler").bind("click", function (event) {
      event.preventDefault();
      $(this).parent().next().slideToggle();
    });
  }
});
function SetReturnValue(id, name, returnedId, returnedName) {
  var txtId = MM_findObj(returnedId, window.opener.document);
  if (txtId != null) {
    if (id != "" && typeof id != "undefined") txtId.value = id;
    else if (txtId.value == "") txtId.value = "";
  }
  var lblName = MM_findObj(returnedName, window.opener.document);
  if (lblName != null) {
    if (id != "" && typeof id != "undefined") lblName.innerText = name;
    else if (lblName.value == "") lblName.innerText = "";
  }
  return true;
}
$(window).resize(function () {
  if (this.resizeTo) clearTimeout(this.resizeTo);
  this.resizeTo = setTimeout(function () {
    $(this).trigger("resizeEnd");
  }, 500);
});
function CalculateHeight(obj) {
  var maxHeight = 0;
  obj.find(".tab-pane").each(function () {
    var height = $(this).actual("outerHeight");
    maxHeight = height > maxHeight ? height : maxHeight;
  });
  obj.find(".tab-pane").each(function () {
    $(this).outerHeight(maxHeight);
  });
}
function EqualizeTabsHeight() {
  $(".tab-wrapper.tab-equalheight").each(function () {
    var childTabs = $(this).find(".tab-wrapper.tab-equalheight");
    if (childTabs.length === 0) {
      CalculateHeight($(this));
    } else {
      childTabs.each(function () {
        CalculateHeight($(this));
      });
    }
  });
}
function ShowTip(object, strTip) {
  $(object)
    .attr("data-toggle", "popover")
    .attr("data-content", strTip)
    .attr("data-html", "true")
    .attr("data-trigger", "focus")
    .attr("data-placement", "bottom")
    .attr("data-container", "body");
  $(object).popover("show");
  $(object).mouseleave(function () {
    $(object).popover("hide");
  });
}
$(window).bind("resizeEnd", function () {
  EqualizeTabsHeight();
});
$(document).ready(function () {
  $(window).on("load", function () {
    EqualizeTabsHeight();
    setTimeout(function () {
      try {
        $(".popupMessage").modal();
      } catch (e) {}
    }, 200);
  });
});
(function (factory) {
  if (typeof define === "function" && define.amd) {
    define(["jquery"], factory);
  } else if (typeof exports === "object") {
    module.exports = factory(require("jquery"));
  } else {
    factory($);
  }
})(function ($) {
  var eventNamespace = "waitForImages";
  var hasSrcset = (function (img) {
    return img.srcset && img.sizes;
  })(new Image());
  $.waitForImages = {
    hasImageProperties: [
      "backgroundImage",
      "listStyleImage",
      "borderImage",
      "borderCornerImage",
      "cursor",
    ],
    hasImageAttributes: ["srcset"],
  };
  $.expr[":"]["has-src"] = function (obj) {
    return $(obj).is('img[src][src!=""]');
  };
  $.expr[":"].uncached = function (obj) {
    if (!$(obj).is(":has-src")) {
      return false;
    }
    return !obj.complete;
  };
  $.fn.waitForImages = function () {
    var allImgsLength = 0;
    var allImgsLoaded = 0;
    var deferred = $.Deferred();
    var originalCollection = this;
    var allImgs = [];
    var hasImgProperties = $.waitForImages.hasImageProperties || [];
    var hasImageAttributes = $.waitForImages.hasImageAttributes || [];
    var matchUrl = /url\(\s*(['"]?)(.*?)\1\s*\)/g;
    var finishedCallback;
    var eachCallback;
    var waitForAll;
    if ($.isPlainObject(arguments[0])) {
      waitForAll = arguments[0].waitForAll;
      eachCallback = arguments[0].each;
      finishedCallback = arguments[0].finished;
    } else {
      if (arguments.length === 1 && $.type(arguments[0]) === "boolean") {
        waitForAll = arguments[0];
      } else {
        finishedCallback = arguments[0];
        eachCallback = arguments[1];
        waitForAll = arguments[2];
      }
    }
    finishedCallback = finishedCallback || $.noop;
    eachCallback = eachCallback || $.noop;
    waitForAll = !!waitForAll;
    if (!$.isFunction(finishedCallback) || !$.isFunction(eachCallback)) {
      throw new TypeError("An invalid callback was supplied.");
    }
    this.each(function () {
      var obj = $(this);
      if (waitForAll) {
        obj
          .find("*")
          .addBack()
          .each(function () {
            var element = $(this);
            if (element.is("img:has-src") && !element.is("[srcset]")) {
              allImgs.push({ src: element.attr("src"), element: element[0] });
            }
            $.each(hasImgProperties, function (i, property) {
              var propertyValue = element.css(property);
              var match;
              if (!propertyValue) {
                return true;
              }
              while ((match = matchUrl.exec(propertyValue))) {
                allImgs.push({ src: match[2], element: element[0] });
              }
            });
            $.each(hasImageAttributes, function (i, attribute) {
              var attributeValue = element.attr(attribute);
              var attributeValues;
              if (!attributeValue) {
                return true;
              }
              allImgs.push({
                src: element.attr("src"),
                srcset: element.attr("srcset"),
                element: element[0],
              });
            });
          });
      } else {
        obj.find("img:has-src").each(function () {
          allImgs.push({ src: this.src, element: this });
        });
      }
    });
    allImgsLength = allImgs.length;
    allImgsLoaded = 0;
    if (allImgsLength === 0) {
      try {
        finishedCallback.call(originalCollection);
        deferred.resolveWith(originalCollection);
      } catch (e) {}
    }
    $.each(allImgs, function (i, img) {
      var image = new Image();
      var events = "load." + eventNamespace + " error." + eventNamespace;
      $(image).one(events, function me(event) {
        var eachArguments = [
          allImgsLoaded,
          allImgsLength,
          event.type == "load",
        ];
        allImgsLoaded++;
        eachCallback.apply(img.element, eachArguments);
        deferred.notifyWith(img.element, eachArguments);
        $(this).off(events, me);
        if (allImgsLoaded == allImgsLength) {
          finishedCallback.call(originalCollection[0]);
          deferred.resolveWith(originalCollection[0]);
          return false;
        }
      });
      if (hasSrcset && img.srcset) {
        image.srcset = img.srcset;
        image.sizes = img.sizes;
      }
      image.src = img.src;
    });
    return deferred.promise();
  };
});
function GetItemColumnIndex(repeatColumn, listIndex, listCount) {
  var maxItemsInColumn = Math.floor(listCount / repeatColumn);
  var remain = Math.floor(listCount - maxItemsInColumn * repeatColumn);
  var columnsCount = [];
  var indexes = [];
  var i;
  for (i = 0; i < repeatColumn; i++) {
    columnsCount.push(maxItemsInColumn);
  }
  if (remain > 0) {
    for (var j = 0; j < remain; j++) {
      columnsCount[j]++;
    }
  }
  var temp = 0;
  for (i = 0; i < repeatColumn; i++) {
    indexes.push(temp + columnsCount[i]);
    temp = temp + columnsCount[i];
  }
  var index = 1;
  for (i = 0; i < repeatColumn; i++) {
    if (listIndex <= indexes[i]) {
      index = i + 1;
      break;
    }
  }
  return index;
}
function layoutInVerticalColumns(containerClass, items, count) {
  var containerColumns = $(containerClass + " .column");
  var containerColumnsCount = containerColumns.length;
  items.each(function (index) {
    var columnIndex = GetItemColumnIndex(
      containerColumnsCount,
      index + 1,
      count
    );
    var element = $(items[index]).detach();
    $(containerColumns[columnIndex - 1]).append(element);
  });
}
function handleSendWithEnter($input, $button) {
  $(document).on("keyup", $input, function (ev) {
    if (ev.keyCode == 13) {
      $button.get(0).click();
    }
  });
}
function splice(str, start, delCount, newSubStr) {
  return (
    str.slice(0, start) + newSubStr + str.slice(start + Math.abs(delCount))
  );
}
function reverseString(str) {
  str = str.split("");
  str = str.reverse();
  str = str.join("");
  return str;
}
(function (factory) {
  if (typeof define === "function" && define.amd) {
    define(["jquery"], factory);
  } else if (typeof exports === "object") {
    module.exports = factory(require("jquery"));
  } else {
    factory($);
  }
})(function ($) {
  $.fn.commify = function () {
    $(this).bind("keyup", function () {
      if ($(this).val().length > 3) {
        var newValue = reverseString($(this).val().replace(/\,/g, ""));
        for (var i = 3; i < newValue.length; i += 4) {
          newValue = splice(newValue, i, 0, ",");
        }
        $(this).val(reverseString(newValue));
      }
    });
  };
});
function setSelectionRange(input, selectionStart, selectionEnd) {
  if (input.setSelectionRange) {
    input.focus();
    input.setSelectionRange(selectionStart, selectionEnd);
  } else if (input.createTextRange) {
    var range = input.createTextRange();
    range.collapse(true);
    range.moveEnd("character", selectionEnd);
    range.moveStart("character", selectionStart);
    range.select();
  }
}
function setCaretToPos(input, pos) {
  setSelectionRange(input, pos, pos);
}
function AddComma(input) {
  var output = "";
  if (input) {
    input = input.replace(/\,/g, "");
    if (!isNaN(input)) {
      var hasMinus = input.indexOf("-") > -1;
      if (hasMinus) {
        input = input.replace("-", "");
      }
      var dotIndex = input.indexOf(".");
      var floatPart;
      var decimalPart;
      if (dotIndex > 0) {
        floatPart = input.substring(dotIndex);
        decimalPart = input.substring(0, dotIndex);
      } else {
        floatPart = "";
        decimalPart = input;
      }
      if (decimalPart.length > 3) {
        var newValue = reverseString(decimalPart);
        for (var i = 3; i < newValue.length; i += 4) {
          newValue = splice(newValue, i, 0, ",");
        }
        output = reverseString(newValue) + (floatPart != "" ? floatPart : "");
      } else {
        output = decimalPart + floatPart;
      }
      if (hasMinus) {
        output = "-" + output;
      }
    }
  }
  return output;
}
(function (factory) {
  if (typeof define === "function" && define.amd) {
    define(["jquery"], factory);
  } else if (typeof exports === "object") {
    module.exports = factory(require("jquery"));
  } else {
    factory($);
  }
})(function ($) {
  $.fn.commaSeparatedInput = function () {
    $(this).each(function () {
      $(this).val(AddComma($(this).val()));
    });
    $(this).bind("keyup", function (e) {
      var start = this.selectionStart,
        end = this.selectionEnd;
      var output = AddComma($(this).val());
      if (output.length > $(this).val().length) {
        end++;
        start++;
      }
      $(this).val(output);
      this.setSelectionRange(start, end);
    });
  };
});
$(document).ready(function () {
  try {
    $(".commaSeparatedInput").commaSeparatedInput();
  } catch (e) {}
});
try {
  var default__doPostBack;
  default__doPostBack = __doPostBack;
  __doPostBack = function (eventTarget, eventArgument) {
    try {
      $(".commaSeparatedInput").each(function () {
        $(this).val($(this).val().replace(/,/g, ""));
      });
    } catch (error) {
      console.log(error);
    }
    default__doPostBack.call(this, eventTarget, eventArgument);
  };
} catch (e) {}
var verticalRepeaterMediaQueries = {
  xs: window.matchMedia("(max-width: 768px)"),
  sm: window.matchMedia("(max-width: 992px)"),
  md: window.matchMedia("(max-width: 1200px)"),
  lg: window.matchMedia("(min-width: 1200px)"),
  checkMedia: function (containerUniqueId, items, count) {
    if (this.xs.matches) {
      layoutInVerticalColumns(
        "#" + containerUniqueId + " .verticalExtraSmall",
        items,
        count
      );
    } else if (this.sm.matches) {
      layoutInVerticalColumns(
        "#" + containerUniqueId + " .verticalSmall",
        items,
        count
      );
    } else if (this.md.matches) {
      layoutInVerticalColumns(
        "#" + containerUniqueId + " .verticalMedium",
        items,
        count
      );
    } else if (this.lg.matches) {
      layoutInVerticalColumns(
        "#" + containerUniqueId + " .verticalLarge",
        items,
        count
      );
    }
  },
};
function SetReferer(id) {
  var referrerAddress = $("#" + id);
  if (referrerAddress != null && window.opener) {
    referrerAddress.val(window.opener.location.href);
  }
}
(function (factory) {
  if (typeof define === "function" && define.amd) {
    define(["jquery"], factory);
  } else if (typeof exports === "object") {
    module.exports = factory(require("jquery"));
  } else {
    factory($);
  }
})(function ($) {
  $.fn.mediaAttachment = function () {
    $(this).each(function () {
      var $mediaTools = $(this).find(".mediaTools");
      var $removeButton = $(this).find(".removeMediaButton");
      var $mainMediaLink = $(this).find(".mainMediaLink");
      var $mediaLinkImage = $(this).find(".mediaLinkImage");
      var $mediaImageID = $(this).find(".mediaImageID");
      var $mediaImagePath = $(this).find(".mediaImagePath");
      var $mediaMediaEditButton = $(this).find(".mediaMediaEditButton");
      var $mediaAttachmentInfoButton = $(this).find(
        ".mediaAttachmentInfoButton"
      );
      $(this).hover(
        function () {
          $mediaTools.show();
        },
        function () {
          $mediaTools.hide();
        },
        true
      );
      $removeButton.bind("click", function () {
        $mediaImageID.val("");
        $mediaImagePath.val("");
        $mediaLinkImage.attr(
          "src",
          "/Components/General/Resources/Images/No-Media.png"
        );
        $mainMediaLink
          .removeClass("fancybox")
          .attr("href", "#")
          .attr("target", "");
        $mediaMediaEditButton.hide(200);
        $mediaAttachmentInfoButton.hide(200);
        return false;
      });
    });
  };
});
$(document).ready(function () {
  $(".currentMedia").mediaAttachment();
});
$(document).on("click", function (e) {
  $('[data-toggle="popover"],[data-original-title]').each(function () {
    if (
      !$(this).is(e.target) &&
      $(this).has(e.target).length === 0 &&
      $(".popover").has(e.target).length === 0
    ) {
      (
        ($(this).popover("hide").data("bs.popover") || {}).inState || {}
      ).click = false;
    }
  });
});
function isParent(selector, query) {
  var target = $(selector);
  if (target.parents(query).length) {
    return true;
  }
  return false;
}
$(document).ready(function () {
  try {
    $(".fancybox").each(function (index, element) {
      var link = $(element);
      var currentGroup = link.data("fancybox") || "";
      var rel = link.attr("rel") || "";
      if (currentGroup === "" && rel !== "") {
        $(element).attr("data-fancybox", rel);
      }
    });
    $(".fancybox").fancybox({
      touch: false,
      scrolling: "no",
      autoDimensions: false,
      margin: 5,
      padding: 5,
      loop: true,
      openEffect: "elastic",
      closeEffect: "elastic",
      beforeLoad: function () {},
      afterLoad: function (instance, current) {
        if ($(current.opts.$orig).data("width")) {
          this.width = $(current.opts.$orig).data("width");
        }
        if ($(current.opts.$orig).data("height")) {
          this.height = $(current.opts.$orig).data("height");
        }
      },
      caption: function (instance, item) {
        var caption = $(this).data("caption") || "";
        if (caption === "") {
          caption = $(this).attr("title") || "";
        }
        if (caption === "") {
          caption = $(this).data("original-title") || "";
        }
        return caption;
      },
      showCloseButton: true,
      buttons: [
        "zoom",
        "slideShow",
        "fullScreen",
        "download",
        "thumbs",
        "close",
      ],
      helpers: {
        overlay: { css: { overflow: "hidden" }, locked: false },
        title: { type: "inside" },
      },
    });
  } catch (e) {}
});
function searchInMenu(source, name) {
  name = name.toUpperCase();
  var results = $.map(source, function (entry) {
    var match = entry.Title.indexOf(name) !== -1;
    return match ? entry : null;
  });
  return results;
}
(function (factory) {
  if (typeof define === "function" && define.amd) {
    define(["jquery"], factory);
  } else if (typeof exports === "object") {
    module.exports = factory(require("jquery"));
  } else {
    factory($);
  }
})(function ($) {
  $.fn.menuSearchBox = function () {
    $(this).each(function () {
      var $textbox = $(this).find(".textbox");
      var $button = $(this).find(".button");
      var $result = $(this).find(".result");
      $textbox.bind("keyup", function (e) {
        if (e.keyCode !== 13) {
          search($textbox.val(), $result);
        }
      });
      $textbox.bind("keypress", function (e) {
        if (e.keyCode == 13) {
          e.preventDefault();
        }
      });
      $("html").click(function () {
        $result.hide();
      });
      $(this).bind("click", function (e) {
        e.stopPropagation();
      });
    });
    function search(token, resultContainer) {
      var result = "";
      try {
        if (menuItems) {
          if (token.length > 1) {
            var foundItems = searchInMenu(menuItems, token);
            if (foundItems.length > 0) {
              for (var i = 0; i < foundItems.length; i++) {
                if (foundItems[i].Url) {
                  result +=
                    "<li class='item'><a href='" +
                    foundItems[i].Url +
                    "' class='itemUrl'>" +
                    foundItems[i].Title +
                    "</a></li>";
                }
              }
            }
          }
        }
      } catch (e) {}
      if (result != "") {
        resultContainer.html("<ul>" + result + "</ul>");
      } else {
        resultContainer.html("");
      }
      return false;
    }
  };
});
$(document).ready(function () {
  $(".menuSearchBox").menuSearchBox();
});
function toPersianNum(num, dontTrim) {
  var i = 0,
    dontTrimNumber = dontTrim || false,
    number = dontTrimNumber ? num.toString() : num.toString().trim(),
    len = number.length,
    res = "",
    pos,
    persianNumbers =
      typeof persianNumber == "undefined"
        ? ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"]
        : persianNumbers;
  for (; i < len; i++)
    if ((pos = persianNumbers[number.charAt(i)])) res += pos;
    else res += number.charAt(i);
  return res;
}
(function (factory) {
  if (typeof define === "function" && define.amd) {
    define(["jquery"], factory);
  } else if (typeof exports === "object") {
    module.exports = factory(require("jquery"));
  } else {
    factory($);
  }
})(function ($) {
  $.fn.limitedTextbox = function () {
    $(this).each(function () {
      $("<div>", { class: "limitedTextboxWrapper", css: {} }).insertAfter(
        $(this)
      );
      $("<p>", { class: "characterLimitCount", css: {} }).insertAfter($(this));
      var wrapper = $(this).siblings(".limitedTextboxWrapper").first();
      var span = $(this).siblings(".characterLimitCount").first();
      $(this).appendTo(wrapper);
      span.appendTo(wrapper);
      var maxLimit = 50;
      if ($(this).data("limit")) {
        maxLimit = Number($(this).data("limit"));
      }
      var donotTruncate = false;
      if ($(this).data("donot-truncate") !== "") {
        donotTruncate = Number($(this).data("donot-truncate")) === 1;
      }
      var template = "";
      if ($(this).data("limit-template")) {
        template = $(this).data("limit-template");
      }
      var lang = "en";
      if ($(this).data("limit-lang")) {
        lang = $(this).data("limit-lang");
      }
      $(this).bind("keyup", function (e) {
        var lengthCount = $(this).val().length;
        var charactersLeft;
        if (lengthCount > maxLimit) {
          if (!donotTruncate) {
            $(this).val($(this).val().substring(0, maxLimit));
          }
          charactersLeft = maxLimit - lengthCount + 1;
        } else {
          charactersLeft = maxLimit - lengthCount;
        }
        span.css("visibility", "visible");
        if (lang == "fa") {
          span.html(
            template +
              ": <span dir='ltr'>" +
              toPersianNum(charactersLeft) +
              "</span>"
          );
        } else {
          span.html(template + ": " + charactersLeft);
        }
        if (charactersLeft < 0) {
          span.css("color", "red");
        } else {
          span.css("color", "");
        }
      });
    });
  };
});
$(document).ready(function () {
  $(".limitedTextbox").limitedTextbox();
});
function SetMultipartForm() {
  try {
    $("form[id='aspnetForm']").prop("enctype", "multipart/form-data");
  } catch (e) {
    console.log(e);
  }
}
function CreditShowUnitHint(
  creditValueContainerId,
  hintContainerId,
  creditUnitHint,
  creditUnit
) {
  try {
    var creditInput = $find(creditValueContainerId);
    if (creditInput) {
      var creditValue = creditInput
        .get_textBoxValue()
        .replace(/,/g, "")
        .replace(creditUnit, "")
        .trim();
      if (creditValue != "") {
        var newValue = $("#" + hintContainerId).text(
          creditUnitHint.format(ConvertToDelimitedNumber(10 * creditValue))
        );
      } else {
        $("#" + hintContainerId).text("");
      }
    }
  } catch (e) {
    console.log(e);
  }
}
function FormatSelect2AddImageToText(state) {
  if (!state.id) {
    return state.text;
  }
  var icon = $(state.element).data("icon");
  if (icon) {
    icon = '<img class="icon" src="' + icon + '" />';
  } else {
    icon = "";
  }
  var $state = $("<span>" + icon + state.text + "</span>");
  return $state;
}
function OnRadComboBoxOpened(sender, eventArgs) {
  $(document).data("disable-search-close", true);
}
(function (factory) {
  if (typeof define === "function" && define.amd) {
    define(["jquery"], factory);
  } else if (typeof exports === "object") {
    module.exports = factory(require("jquery"));
  } else {
    factory($);
  }
})(function ($) {
  $.fn.adminSearchBox = function () {
    $(this).each(function () {
      $(this).appendTo("#searchDongle");
      var defaultSearchPlaceHolder = "";
      if (window.siteInfo) {
        defaultSearchPlaceHolder = window.siteInfo.defaultSearchPlaceHolder;
      }
      var $hiddenSearchButton = $(this)
        .find("input[type=button], input[type=submit]")
        .first();
      var $searchTextbox = $(this).find("input[type=text]").first();
      $searchTextbox.addClass("searchTextbox");
      $searchTextbox.addClass("form-control");
      var currentPlaceHolder = $searchTextbox.attr("placeholder");
      if (!currentPlaceHolder || currentPlaceHolder == "") {
        $searchTextbox.attr("placeholder", defaultSearchPlaceHolder);
        currentPlaceHolder = defaultSearchPlaceHolder;
      }
      $("<div>", {
        class: "innerSearchButton",
        title: currentPlaceHolder,
        css: {},
      }).appendTo($(this));
      $("<div>", { class: "searchMoreButton", css: {} }).appendTo($(this));
      var $searchMoreButton = $(this).find(".searchMoreButton");
      var $innerSearchButton = $(this).find(".innerSearchButton");
      var $searchConditions = $(this).find(".searchConditions");
      $searchConditions.addClass("form-horizontal");
      $searchTextbox.on("dblclick", function () {
        $searchConditions.toggle();
        $searchMoreButton.toggleClass("opened");
      });
      $searchMoreButton.mouseup(function (event) {
        event.preventDefault();
        $searchConditions.toggle();
        $searchMoreButton.toggleClass("opened");
      });
      $innerSearchButton.click(function () {
        $hiddenSearchButton.click();
      });
      $(document).mouseup(function (e) {
        if (!$(document).data("disable-search-close")) {
          var container = $searchConditions;
          var textbox = $searchTextbox;
          var moreButton = $searchMoreButton;
          if (
            !moreButton.is(e.target) &&
            !container.is(e.target) &&
            !textbox.is(e.target) &&
            container.has(e.target).length === 0
          ) {
            container.hide();
            if (moreButton.hasClass("opened")) {
              moreButton.removeClass("opened");
            }
          }
        }
      });
    });
  };
});
$(document).ready(function () {
  $(".adminSearchBox").adminSearchBox();
});
function flipThisPanel(flipPanel) {
  flipPanel.toggleClass("hover");
}
(function (factory) {
  if (typeof define === "function" && define.amd) {
    define(["jquery"], factory);
  } else if (typeof exports === "object") {
    module.exports = factory(require("jquery"));
  } else {
    factory($);
  }
})(function ($) {
  $.fn.timeFlip = function () {
    $(this).each(function () {
      var flipPanel = $(this);
      var flipTimer = setInterval(function () {
        flipThisPanel(flipPanel);
      }, 10000);
      $(this).hover(
        function () {
          flipThisPanel(flipPanel);
          clearInterval(flipTimer);
        },
        function () {
          flipTimer = setInterval(function () {
            flipThisPanel(flipPanel);
          }, 10000);
        },
        true
      );
    });
  };
});
$(document).ready(function () {
  $(".time-flip-container").timeFlip();
});
(function (factory) {
  if (typeof define === "function" && define.amd) {
    define(["jquery"], factory);
  } else if (typeof exports === "object") {
    module.exports = factory(require("jquery"));
  } else {
    factory($);
  }
})(function ($) {
  $.fn.passwordToggler = function () {
    $(this).each(function () {
      var passwordInput = $(this);
      $("<div>", { class: "passwordTogglerWrapper", css: {} }).insertAfter(
        $(this)
      );
      $("<div>", {
        class: "passwordTogglerIcon",
        css: {},
        html: "<i class='glyphicon glyphicon-closeEye'></i>",
      }).insertAfter($(this));
      var inputText = $(this).siblings(".inputText").first();
      var wrapper = $(this).siblings(".passwordTogglerWrapper").first();
      var icon = $(this).siblings(".passwordTogglerIcon").first();
      $(this).appendTo(wrapper);
      icon.appendTo(wrapper);
      if (inputText) {
        inputText.appendTo(wrapper);
      }
      icon.on("click", function () {
        var passwordInputType = passwordInput.attr("type");
        if (passwordInputType === "password") {
          passwordInput.attr("type", "text");
          icon.html("<i class='glyphicon glyphicon-openEye'></i>");
        } else {
          passwordInput.attr("type", "password");
          icon.html("<i class='glyphicon glyphicon-closeEye'></i>");
        }
      });
    });
  };
});
$(document).ready(function () {
  $(".passwordToggler").passwordToggler();
  $(".adminbar").click(function () {
    $(".adminbar").toggleClass("showAdmin");
  });
  try {
    $('[data-toggle="tooltip"]').tooltip();
  } catch (e) {}
});
function ChangeMenuPosition() {
  if (window.innerWidth > 767) {
    if (
      $(".siteMemberMenuPanelBar .siteMemberMenuPanelBarContainer").length == 0
    ) {
      $(".siteMemberMenuPanelBarContainer").appendTo(".siteMemberMenuPanelBar");
    }
  } else {
    if (
      $(".topBarMenuContainer .siteMemberMenuPanelBarContainer").length == 0
    ) {
      $(".siteMemberMenuPanelBarContainer").appendTo(".topBarMenuContainer");
    }
  }
}
$(document).ready(function () {
  try {
    $(".dashboardPage .navToggle").on("click", function () {
      $(".dashboardPage .rightColumn, .dashboardPage .mainContentWrap").css(
        "transition",
        "all .5s"
      );
      $(".dashboardPage .rightColumn").toggleClass("closed");
      $(
        ".dashboardPage .mainContentWrap, .dashboardPage .adminHeader"
      ).toggleClass("full-width");
    });
    var windowWidth = $(window).width();
    $(".dashboardPage .siteMemberMenuPanelBarToggle").click(function () {
      $(".dashboardPage .siteMemberMenuPanelBarToggle").toggleClass(
        "closeStatus"
      );
      $(".dashboardPage .sitememberPanelBarContainer").slideToggle(
        "slow",
        function () {}
      );
    });
    $(".menuSearchBox .button").on("click", function (e) {
      $(".menuSearchBox .searchBox").toggleClass("searchOpen");
      $(".menuSearchBox .searchResult").toggleClass("searchOpen");
      $(".menuSearchBox .searchBox .textbox").focus();
    });
    if (window.innerWidth >= 767) {
      $(window).scroll(function () {
        if (
          $(document).scrollTop() >
          $(".dashboardPage .generalMainWrap .mainHeaderWrap").height()
        ) {
          $(".dashboardPage .mainContentWrap .mainHeaderWrap ").addClass(
            "fixedMenu"
          );
        } else {
          $(".dashboardPage .mainContentWrap .mainHeaderWrap ").removeClass(
            "fixedMenu"
          );
        }
      });
    }
    ChangeMenuPosition();
    $(".toggleMenuLink").click(function () {
      $(".siteMemberMenuPanelBarToggle").click();
    });
  } catch (e) {
    console.error(e);
  }
});
$(window).resize(function () {
  ChangeMenuPosition();
});
$(".siteMemberMenuToggle").click(function () {
  $(".siteMemberMenuToggle").toggleClass("closeStatus");
  $(".siteMemberMenuWrapper").slideToggle("slow", function () {});
});
function ArrangePagingLayer(containerId) {
  var pnlPager = $("#" + containerId);
  var pnlGoto = pnlPager.find(".showCount");
  var pnlPageShowCount = pnlPager.find(".goTo");
  var pnlUrlPager = pnlPager.find(".urlPager");
  var pnlPostBackPager = pnlPager.find(".postBackPager");
  var pnlNextPage = pnlPager.find(".nextPage");
  var pnlPreviousPage = pnlPager.find(".previousPage");
  if (pnlPager.length) {
    var width = pnlPager.actual("width");
    if (width >= 770) {
      if (pnlGoto.length && pnlPageShowCount.length) {
        pnlUrlPager.attr("class", "postBackPager col-sm-6 text-center");
        pnlPostBackPager.attr("class", "urlPager col-sm-6 text-center");
        pnlGoto.attr("class", "goTo col-sm-3 reverseAlign");
        pnlPageShowCount.attr("class", "showCount col-sm-3");
      } else {
        pnlUrlPager.attr("class", "postBackPager col-sm-12 text-center");
        pnlPostBackPager.attr("class", "urlPager col-sm-12 text-center");
      }
      pnlPager.find(".page").show();
      if (pnlGoto.length) {
        pnlGoto.show();
      }
      if (pnlPageShowCount.length) {
        pnlPageShowCount.show();
      }
    } else if (width > 400) {
      pnlUrlPager.attr("class", "postBackPager col-sm-12 text-center");
      pnlPostBackPager.attr("class", "urlPager col-sm-12 text-center");
      pnlPager.find(".page").show();
      pnlGoto.hide();
      pnlPageShowCount.hide();
    } else {
      pnlUrlPager.attr("class", "postBackPager col-xs-12 text-center");
      pnlPostBackPager.attr("class", "urlPager col-xs-12 text-center");
      pnlPager.find(".page").hide();
      pnlNextPage.show();
      pnlPreviousPage.show();
      pnlGoto.hide();
      pnlPageShowCount.hide();
    }
  }
}
function PasswordBoxPopoverTrigger(selector, placement) {
  var passwordBoxPopoverOptions = { placement: placement, trigger: "click" };
  $(selector).popover(passwordBoxPopoverOptions);
}
function FormatCountryResult(country) {
  if (!country.id) {
    return country.text;
  }
  var $country = $(
    '<div class="phoneBoxCallingCodeFlagResultItem" style="background-position: 0 ' +
      -24 * (parseInt(country.element.value) - 1) +
      'px;"></div>&nbsp;' +
      country.element.dataset.displayname +
      ' <span dir="ltr">' +
      country.text +
      "</span>"
  );
  return $country;
}
function FormatCountryResultSimple(country) {
  if (!country.id) {
    return country.text;
  }
  var $country = $(
    "<div>" +
      country.element.dataset.displayname +
      ' <span dir="ltr" class="callingCodeItem">' +
      country.text +
      "</span></div>"
  );
  return $country;
}
function FormatCountrySelection(country) {
  if (!country.id) {
    return country.text;
  }
  var $country = $(
    '<div class="phoneBoxCallingCodeFlagItem" style="background-position: 0 ' +
      -24 * (parseInt(country.element.value) - 1) +
      'px;"></div>&nbsp;<span class="phoneBoxCallingCodeTextItem" dir="ltr">&nbsp;' +
      country.text +
      "</span>"
  );
  return $country;
}
function FormatCountrySelectionSimple(country) {
  if (!country.id) {
    return country.text;
  }
  var $country = $(
    '<span class="phoneBoxCallingCodeTextItem" dir="ltr">&nbsp;' +
      country.text +
      "</span>"
  );
  return $country;
}
function MatchCustomCountry(params, data) {
  if ($.trim(params.term) === "") {
    return data;
  }
  if (typeof data.text === "undefined") {
    return null;
  }
  if (
    data.text.indexOf(params.term) > -1 ||
    data.element.dataset.displayname.indexOf(params.term) > -1
  ) {
    var modifiedData = $.extend({}, data, true);
    return modifiedData;
  }
  return null;
}
function RegisterPopupClick(cookieName, domainName) {
  $(".popupMessage .modal-dialog .btn").click(function () {
    try {
      var doNotShowAgain = $(
        ".popupMessage .modal-footer .modal-footer-checkbox input[type=checkbox]"
      ).is(":checked");
      if (doNotShowAgain) {
        createCookie(cookieName, "1", 30, domainName);
      }
    } catch (e) {
      console.log(e);
    }
    var players = $(".popupMessage .mediaPlayer .Player");
    players.each(function () {
      try {
        $(this).data("jPlayer").pause();
      } catch (e) {
        console.log(e);
      }
    });
  });
  $(".popupMessage").on("hidden.bs.modal", function () {
    var players = $(".popupMessage .mediaPlayer .Player");
    players.each(function () {
      try {
        $(this).data("jPlayer").pause();
      } catch (e) {
        console.log(e);
      }
    });
  });
}
function RedirectGoogleSerach(obj, lang) {
  var googleSearchText = $(obj)
    .closest(".googleSearchBoxWrap")
    .find("input[type=text]")
    .first();
  if (googleSearchText.val() !== "") {
    var query = String.Format("{0}={1}", [
      "qsearchquery",
      googleSearchText.val(),
    ]);
    var searchUrl = encodeURI(String.Format("/{0}/search?{1}", [lang, query]));
    window.location.href = searchUrl;
  }
}
(function (factory) {
  if (typeof define === "function" && define.amd) {
    define(["jquery"], factory);
  } else if (typeof exports === "object") {
    module.exports = factory(require("jquery"));
  } else {
    factory($);
  }
})(function ($) {
  $.fn.spinEdit = function () {
    $(this).each(function () {
      var mainPanel = $(this);
      var min = Number(mainPanel.data("min"));
      var max = Number(mainPanel.data("max"));
      var step = Number(mainPanel.data("step"));
      var spinEditTextbox = $(this).find(".spinEditTextbox");
      var spinEditUp = $(this).find(".spinEditUp");
      var spinEditDown = $(this).find(".spinEditDown");
      if (spinEditTextbox) {
        spinEditUp.on("click", function () {
          var value = Number(spinEditTextbox.val());
          if (value + step >= min && value + step <= max) {
            spinEditTextbox.val(value + step);
          } else {
            if (value + step < min) {
              spinEditTextbox.val(min);
            }
            if (value + step > max) {
              spinEditTextbox.val(max);
            }
          }
        });
        spinEditDown.on("click", function () {
          var value = Number(spinEditTextbox.val());
          if (value - step >= min && value - step <= max) {
            spinEditTextbox.val(value - step);
          } else {
            if (value - step < min) {
              spinEditTextbox.val(min);
            }
            if (value - step > max) {
              spinEditTextbox.val(max);
            }
          }
        });
        spinEditTextbox.on("keypress", function (e) {
          var whichCode = window.Event ? e.which : e.keyCode;
          var isNumeric = whichCode >= 48 && whichCode <= 57;
          if (min > 0) {
            return isNumeric;
          } else {
            return isNumeric || whichCode === 45;
          }
        });
      }
    });
  };
});
$(document).ready(function () {
  $(".spinEditContainer").spinEdit();
});
$(document).ready(function () {
  $(".multiColumnMenu .dropdown-menu")
    .on("mouseover", function () {
      $(this).parent().first().addClass("opened");
    })
    .on("mouseout", function () {
      $(this).parent().first().removeClass("opened");
    });
  $(".multiColumnMenu .dropdown").each(function () {
    if ($(this).children().length > 1) {
      $(this)
        .on("mouseover", function () {
          $(this).addClass("opened");
        })
        .on("mouseout", function () {
          $(this).removeClass("opened");
        });
    }
  });
});
function getCurrentScriptDomain() {
  try {
    var a = document.createElement("a");
    a.href = document.currentScript.src;
    return a.protocol + "//" + a.hostname + (a.port ? ":" + a.port : "");
  } catch (e) {
    return "";
  }
}
function SetTopCount(txtId, lblId, count, allCount, allItemsTitle) {
  var textBox = $("#" + txtId);
  if (textBox) {
    textBox.val(count);
    UpdateTopCountCssClass(lblId, count, allCount, allItemsTitle);
  }
}
function UpdateTopCountCssClass(lblId, count, allCount, allItemsTitle) {
  try {
    var countLinks = MM_findObj(lblId).getElementsByTagName("a");
    if (countLinks) {
      for (var i = 0; i < countLinks.length; i++) {
        var linkCountTitle = countLinks[i].innerHTML;
        var linkCount;
        if (linkCountTitle == allItemsTitle) {
          linkCount = allCount;
        }
        if (linkCount != count) {
          countLinks[i].setAttribute("class", "TopCountSelector");
        } else {
          countLinks[i].setAttribute("class", "TopCountSelector Selected");
        }
      }
    }
  } catch (e) {}
}
(function ($) {
  $.fn.imgLoad = function (callback) {
    return this.each(function () {
      if (callback) {
        if (this.complete || $(this).height() > 0) {
          callback.apply(this);
        } else {
          $(this).on("load", function () {
            callback.apply(this);
          });
        }
      }
    });
  };
})($);
function InitImageLazyLoading() {
  $('img[data-src!=""]').each(function (index) {
    if (!$(this).hasClass("lazy-exclude")) {
      var imageSource = $(this).data("src");
      $(this).addClass("lazy-is-loading");
      $(this).attr("src", imageSource);
      $(this).one("load", function () {
        $(this).removeClass("lazy-is-loading");
      });
    }
  });
  $("div").each(function (index) {
    var backgroundImage = $(this).data("background");
    if (backgroundImage) {
      $(this).css("background-image", 'url("' + backgroundImage + '")');
    }
  });
}
$(document).ready(function () {
  InitImageLazyLoading();
});
$(document).on("keydown", "input[pattern]", function (e) {
  var input = $(this);
  var oldVal = input.val();
  var regex = new RegExp(input.attr("pattern"), "g");
  setTimeout(function () {
    var newVal = input.val();
    if (!regex.test(newVal)) {
      input.val(oldVal);
    }
  }, 0);
});
(function (factory) {
  if (typeof define === "function" && define.amd) {
    define(["jquery"], factory);
  } else if (typeof exports === "object") {
    module.exports = factory(require("jquery"));
  } else {
    factory($);
  }
})(function ($) {
  $.fn.quantityTextbox = function () {
    function getValue(textbox) {
      var currentValue = 1;
      if (textbox.val() !== "") {
        currentValue = parseFloat(textbox.val());
      }
      return currentValue;
    }
    function decrease(textbox) {
      var currentValue = getValue(textbox) - 1;
      if (currentValue <= 0) {
        currentValue = 1;
      }
      textbox.val(currentValue.toString());
    }
    function increase(textbox) {
      currentValue = getValue(textbox) + 1;
      textbox.val(currentValue.toString());
    }
    function validate(textbox, decreaseButton) {
      var currentValue = getValue(textbox);
      if (currentValue > 1) {
        decreaseButton.removeClass("disabled");
      } else {
        decreaseButton.addClass("disabled");
      }
    }
    $(this).each(function () {
      $("<div>", { class: "quantityTextboxWrapper", css: {} }).insertAfter(
        $(this)
      );
      $("<div>", {
        class: "quantityTextboxIncrease tools",
        css: {},
      }).insertAfter($(this));
      $("<div>", {
        class: "quantityTextboxDescrease tools",
        css: {},
      }).insertAfter($(this));
      var textbox = $(this);
      var wrapper = $(this).siblings(".quantityTextboxWrapper").first();
      var increaseButton = $(this).siblings(".quantityTextboxIncrease").first();
      var decreaseButton = $(this)
        .siblings(".quantityTextboxDescrease")
        .first();
      wrapper.width($(this).css("width"));
      $(this).appendTo(wrapper);
      increaseButton.appendTo(wrapper);
      decreaseButton.appendTo(wrapper);
      validate(textbox, decreaseButton);
      increaseButton.bind("click", function (e) {
        increase(textbox);
        validate(textbox, decreaseButton);
        if (textbox.data("update")) {
          $("#" + textbox.data("update")).click();
        }
      });
      decreaseButton.bind("click", function (e) {
        if (!decreaseButton.hasClass("disabled")) {
          decrease(textbox);
          validate(textbox, decreaseButton);
          if (textbox.data("update")) {
            $("#" + textbox.data("update")).click();
          }
        }
      });
      textbox.bind("keyup", function (e) {
        validate(textbox, decreaseButton);
        if (textbox.data("update")) {
          $("#" + textbox.data("update")).click();
        }
      });
    });
  };
});
$(document).ready(function () {
  try {
    $(".quantityTextbox").quantityTextbox();
  } catch (e) {}
});
function bytesToSize(bytes) {
  var sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  if (bytes === 0) return "0 Byte";
  var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
  return Math.round(bytes / Math.pow(1024, i), 2) + " " + sizes[i];
}
function hideDateTimePickerKeyboard() {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    $(".datetime-container").each(function () {
      $(this).attr("readonly", "readonly");
    });
  }
}
$(document).ready(function () {
  hideDateTimePickerKeyboard();
});
$(document).ready(function () {
  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    setTimeout(function () {
      $('a[href*="#"]').off("touchstart touchend");
      $("a:not([href])").off("touchstart touchend");
    }, 750);
  }
});
var persianNumbers = [
    /۰/g,
    /۱/g,
    /۲/g,
    /۳/g,
    /۴/g,
    /۵/g,
    /۶/g,
    /۷/g,
    /۸/g,
    /۹/g,
  ],
  arabicNumbers = [/٠/g, /١/g, /٢/g, /٣/g, /٤/g, /٥/g, /٦/g, /٧/g, /٨/g, /٩/g],
  fixNumbers = function (str) {
    try {
      if (typeof str === "string") {
        for (var i = 0; i < 10; i++) {
          str = str.replace(persianNumbers[i], i).replace(arabicNumbers[i], i);
        }
      }
    } catch (e) {}
    return str;
  };
function fixAllNumericTextboxes() {
  try {
    $("body").each(function () {
      $(this).on("change", ".numeric-textbox", function () {
        $(this).val(fixNumbers($(this).val()));
      });
      $(this).on("keyup", ".numeric-textbox", function () {
        $(this).val(fixNumbers($(this).val()));
      });
      $(this).on("paste", ".numeric-textbox", function (e) {
        $(this).val(fixNumbers(e.clipboardData));
      });
    });
  } catch (e) {}
}
$(document).ready(function () {
  fixAllNumericTextboxes();
  $(document).on("keyup", ".select2-search__field", function (e) {
    $(this).val(fixNumbers($(this).val()));
  });
  $(document).on("change", ".select2-search__field", function (e) {
    $(this).val(fixNumbers($(this).val()));
  });
  $(document).on("paste", ".select2-search__field", function (e) {
    $(this).val(fixNumbers(e.clipboardData));
  });
});
function setAccessToken(token) {
  sessionStorage.setItem("access_token", token);
}
function getAccessToken() {
  return sessionStorage.getItem("access_token");
}
function deleteAccessToken() {
  sessionStorage.removeItem("access_token");
}
$(document).ready(function () {
  $(".bootstrap-column-manual").click(function () {
    var main = $(this).parents(".form-horizontal").eq(0);
    if (main) {
      main.find(".select-column").toggleClass("disabled");
    }
  });
});
$(document).ready(function () {
  $(".col-manual").each(function () {
    var parentRow = $(this).parent();
    if (parentRow) {
      parentRow.addClass("row-manual");
    }
  });
});
/* End of /Functions.js*/
/* Start of /NightMode.js */
function switchNightMode(domain, mode) {
  var form = document.getElementById("aspnetForm");
  if (mode === 1) {
    createCookie("night-mode", "1", 365, domain);
    if (form && !form.classList.contains("night-mode")) {
      form.classList.add("night-mode");
    }
  } else {
    createCookie("night-mode", "0", 365, domain);
    if (form) {
      form.classList.remove("night-mode");
    }
  }
}
function InitNightMode(domain) {
  var switchPanel = document.getElementById("night-mode-switch");
  var checkbox = document.getElementsByClassName("switch-input");
  var mode = readCookie("night-mode");
  if (checkbox) {
    checkbox[0].checked = mode === "1";
    checkbox[0].addEventListener("click", function () {
      if (this.checked) {
        switchPanel.classList.add("is-active");
        switchNightMode(domain, 1);
      } else {
        switchPanel.classList.remove("is-active");
        switchNightMode(domain, 0);
      }
    });
  }
}
/* End of /NightMode.js*/
/* Start of /Time.js */
function RefreshConvertDatePanelTopLevel() {
  switch ($(".convertTypeSelect").val()) {
    case "0":
      RefreshConvertDatePanel(0, 0, 0, 1033);
      break;
    case "1":
      RefreshConvertDatePanel(0, 0, 0, 1065);
      break;
    case "2":
      RefreshConvertDatePanel(0, 0, 0, 1025);
      break;
  }
}
function GetConvertDateValues() {
  var ddlMonth = $(".monthSelect:first");
  var txtYear = $(".yearSelect:first");
  var ddlDay = $(".daySelect:first");
  var isShamsi = false;
  var isHijri = false;
  var month = Number(ddlMonth.val());
  var year = Number(txtYear.val());
  var day = Number(ddlDay.val());
  var convertTypeSelect = $(".convertTypeSelect").val();
  if (convertTypeSelect == 0) {
    isShamsi = false;
    isHijri = false;
  } else if (convertTypeSelect == 1) {
    isShamsi = true;
    isHijri = false;
  } else if (convertTypeSelect == 2) {
    isShamsi = false;
    isHijri = true;
  }
  return {
    Month: month,
    Year: year,
    Day: day,
    Lcid: isShamsi ? 1065 : isHijri ? 1025 : 1033,
  };
}
function RefreshConvertDatePanel(year, month, day, lcid) {
  var currentpage =
    location.protocol + "//" + location.host + location.pathname;
  var url;
  url =
    currentpage +
    "?convertyear=" +
    year +
    "&convertmonth=" +
    month +
    "&convertday=" +
    day +
    "&convertlcid=" +
    lcid;
  $.ajax({
    url: url,
    cache: false,
    beforeSend: function () {
      showLoadingDateConvert();
    },
    complete: function () {
      hideLoadingDateConvert();
    },
    success: function (result) {
      $("#divConvert").html($($.parseHTML(result)).find("#divConvert").html());
    },
  });
}
function showLoadingDateConvert() {
  $("#divConvert").fadeTo("slow", 0.33);
}
function hideLoadingDateConvert() {
  $("#divConvert").fadeTo("slow", 1);
}
function ConvertDate() {
  var values = GetConvertDateValues();
  var year = values.Year;
  var month = values.Month;
  var day = values.Day;
  var lcid = values.Lcid;
  RefreshConvertDatePanel(year, month, day, lcid);
}
function ShowLoadingClock(id) {
  $("#" + id).fadeTo("slow", 0.33);
}
function HideLoadingClock(id) {
  $("#" + id).fadeTo("slow", 1);
}
var clockDefaults = {
  angleSec: 0,
  angleMin: 0,
  angleHour: 0,
  duration: 0,
  delay: 0,
  year: 0,
  month: 0,
  day: 0,
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0,
  refreshHint: "Refresh",
};
var timeScriptDirectory = "/Components/Time/Resources/Scripts";
function InitTime(refreshHint, clockContainerId, includeJS) {
  if (includeJS) {
    $.ajax({
      url: timeScriptDirectory + "/jQueryRotate.2.2.js",
      dataType: "script",
    });
  }
  var timeUrl = "/Tools/GetDate.aspx?t=" + new Date().getTime();
  beforeload = new Date().getTime();
  $.ajax({
    url: timeUrl,
    cache: false,
    beforeSend: function () {
      ShowLoadingClock(clockContainerId);
    },
    complete: function () {
      HideLoadingClock(clockContainerId);
    },
    success: function (result) {
      var items = result.toString().split(" ");
      clockDefaults.year = Number(items[0]);
      clockDefaults.month = Number(items[1]);
      clockDefaults.day = Number(items[2]);
      clockDefaults.hour = Number(items[3]);
      clockDefaults.minute = Number(items[4]);
      clockDefaults.second = Number(items[5]) + 1;
      clockDefaults.millisecond = Number(items[6]);
    },
  });
  clockDefaults.refreshHint = refreshHint;
  var afterload = new Date().getTime();
  clockDefaults.delay = (afterload - beforeload) / 1000;
  clockDefaults.duration = 0;
  $("#clockWrapper").attr("title", clockDefaults.refreshHint);
}
function RenderClock() {
  $("#clockContainer").css("visibility", "visible");
  var d = new Date(
    clockDefaults.year,
    clockDefaults.month,
    clockDefaults.day,
    clockDefaults.hour,
    clockDefaults.minute,
    clockDefaults.second,
    clockDefaults.millisecond
  );
  d.setSeconds(d.getSeconds() + clockDefaults.duration + clockDefaults.delay);
  clockDefaults.angleSec = d.getSeconds() * 6;
  clockDefaults.angleMin = d.getMinutes() * 6;
  clockDefaults.angleHour = (d.getHours() * 5 + d.getMinutes() / 12) * 6;
  try {
    $("#seconds").rotate(clockDefaults.angleSec);
    $("#minutes").rotate(clockDefaults.angleMin);
    $("#hours").rotate(clockDefaults.angleHour);
  } catch (err) {
    console.log(err);
  }
  clockDefaults.duration = clockDefaults.duration + 1;
  var timeWrapper = $("#timeWrapper");
  var hh = d.getHours();
  var m = d.getMinutes();
  var s = d.getSeconds();
  var dd = "AM";
  var h = hh;
  if (h >= 12) {
    h = hh - 12;
    dd = "PM";
  }
  if (h == 0) {
    h = 12;
  }
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  h = h < 10 ? "0" + h : h;
  timeWrapper.html(h + ":" + m + ":" + s + " " + dd);
}
function DrawCanvasClock(drawPlace, timestamp) {
  var canvas = document.getElementById(drawPlace),
    context = canvas.getContext("2d"),
    centerX = canvas.width / 2,
    centerY = canvas.height / 2,
    radius = canvas.width / 2;
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.lineCap = "round";
  context.beginPath();
  context.arc(centerX, centerY, radius - 10, 0, 2 * Math.PI, false);
  context.fillStyle = "#ccc";
  context.fill();
  context.closePath();
  context.restore();
  context.beginPath();
  context.arc(centerX, centerY, radius - 14, 0, 2 * Math.PI, false);
  context.fillStyle = "#fff";
  context.fill();
  context.closePath();
  context.restore();
  context.beginPath();
  context.arc(centerX, centerY, 3, 0, 2 * Math.PI, false);
  context.lineWidth = 3;
  context.strokeStyle = "#555";
  context.stroke();
  context.closePath();
  context.restore();
  context.translate(centerX, centerY);
  context.fillStyle = "#555";
  context.font = radius * 0.15 + "px SDF";
  context.textBaseline = "middle";
  context.textAlign = "center";
  var radiusNumbers = radius;
  for (var num = 0; num < 12; num++) {
    var ang = ((num + 1) * Math.PI) / 6;
    context.rotate(ang);
    context.translate(0, -radiusNumbers * 0.73);
    context.rotate(-ang);
    var dist = num >= 2 && num <= 8 ? 2 : 0;
    if ((num + 1) % 3 == 0) {
      context.font = "bold " + radiusNumbers * 0.15 + "px Glyphicons Halflings";
    } else {
      context.font = radiusNumbers * 0.15 + "px Glyphicons Halflings";
    }
    context.fillText((num + 1).toString(), 0, dist);
    context.rotate(ang);
    context.translate(0, radiusNumbers * 0.73);
    context.rotate(-ang);
  }
  var r = radius - 20;
  for (var i = 1; i <= 60; i++) {
    var angle = (Math.PI / 30) * i;
    var sineAngle = Math.sin(angle);
    var cosAngle = -Math.cos(angle);
    var iPointX, iPointY, oPointX, oPointY;
    if (i % 5 == 0) {
      context.lineWidth = 2;
      iPointX = sineAngle * (r - 25);
      iPointY = cosAngle * (r - 25);
      oPointX = sineAngle * (r - 20);
      oPointY = cosAngle * (r - 20);
    } else {
      context.lineWidth = 0.8;
      iPointX = sineAngle * (r - 22);
      iPointY = cosAngle * (r - 22);
      oPointX = sineAngle * (r - 20);
      oPointY = cosAngle * (r - 20);
    }
    context.beginPath();
    context.moveTo(iPointX, iPointY);
    context.lineTo(oPointX, oPointY);
    context.stroke();
  }
  context.font = "62px Glyphicons Halflings";
  context.fillText("\ue951", 0, 30);
  var now = timestamp,
    hrs = now.getHours(),
    min = now.getMinutes(),
    sec = now.getSeconds();
  var sangle = (Math.PI / 30) * sec,
    sPointX = Math.sin(sangle) * (radius - 50),
    sPointY = -Math.cos(sangle) * (radius - 50);
  var fromX = -Math.sin(sangle) * (radius - 90);
  var fromY = Math.cos(sangle) * (radius - 90);
  context.beginPath();
  context.lineWidth = 2;
  context.moveTo(fromX, fromY);
  context.strokeStyle = "#f00";
  context.lineTo(sPointX, sPointY);
  context.stroke();
  context.closePath();
  context.beginPath();
  context.lineWidth = 4;
  context.strokeStyle = "#555555";
  sangle = (Math.PI / 30) * (min + sec / 60);
  sPointX = Math.sin(sangle) * (radius - 48);
  sPointY = -Math.cos(sangle) * (radius - 48);
  context.moveTo(0, 0);
  context.lineTo(sPointX, sPointY);
  context.stroke();
  context.closePath();
  context.beginPath();
  context.lineWidth = 6;
  context.strokeStyle = "#555555";
  sangle = (Math.PI / 6) * (hrs + min / 65 + sec / 3600);
  sPointX = Math.sin(sangle) * (radius - 65);
  sPointY = -Math.cos(sangle) * (radius - 65);
  context.moveTo(0, 0);
  context.lineTo(sPointX, sPointY);
  context.stroke();
  context.closePath();
  context.restore();
  context.translate(-centerX, -centerY);
}
function RenderCanvasClock() {
  $("#canvasClock").css("visibility", "visible");
  var d = new Date(
    clockDefaults.year,
    clockDefaults.month,
    clockDefaults.day,
    clockDefaults.hour,
    clockDefaults.minute,
    clockDefaults.second,
    clockDefaults.millisecond
  );
  d.setSeconds(d.getSeconds() + clockDefaults.duration + clockDefaults.delay);
  DrawCanvasClock("analogClock", d);
  clockDefaults.duration = clockDefaults.duration + 1;
  var hh = d.getHours();
  var m = d.getMinutes();
  var s = d.getSeconds();
  var dd = "AM";
  var h = hh;
  if (h >= 12) {
    h = hh - 12;
    dd = "PM";
  }
  if (h == 0) {
    h = 12;
  }
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  h = h < 10 ? "0" + h : h;
  document.getElementById("digitalClock").innerHTML =
    h + ":" + m + ":" + s + " " + "<strong>" + dd + "</strong>";
}
/* End of /Time.js*/
/* Start of /Ephemeris.js */
function GetEphemerisValues() {
  var ddlProvince = $(".selectProvince:first");
  var ddlCity = $(".selectCity:first");
  var province = Number(ddlProvince.val());
  var city = Number(ddlCity.val());
  return { Province: province, City: city };
}
function RefreshEphemerisPanel(province, city, provinceChanged) {
  var currentpage =
    location.protocol + "//" + location.host + location.pathname;
  var url;
  url =
    currentpage +
    "?province=" +
    province +
    "&city=" +
    city +
    "&provinceChanged=" +
    provinceChanged;
  $.ajax({
    url: url,
    cache: false,
    beforeSend: function () {
      showLoadingEphemerisByCity();
    },
    complete: function () {
      hideLoadingEphemerisByCity();
    },
    success: function (result) {
      $("#divEphemerisByCity").html(
        $($.parseHTML(result)).find("#divEphemerisByCity").html()
      );
    },
  });
}
function RefreshEphemeris(provinceChanged) {
  var values = GetEphemerisValues();
  var province = values.Province;
  var city = values.City;
  RefreshEphemerisPanel(province, city, provinceChanged);
}
function showLoadingEphemerisByCity() {
  $("#divEphemerisByCity").fadeTo("slow", 0.33);
}
function hideLoadingEphemerisByCity() {
  $("#divEphemerisByCity").fadeTo("slow", 1);
}
function LocationCheckDropDownList(source, args) {
  args.IsValid = parseInt(args.Value) >= 0;
}
/* End of /Ephemeris.js*/
/* Start of /EventCalendar.js */
function resizeFonts(containerId) {
  var container = $("#" + containerId);
  if (container != null) {
    var width = container.width();
    if (width < 300) {
      container.css({ fontSize: "1em" });
    }
    if (width > 300 && width < 400) {
      container.css({ fontSize: "1.3em" });
    }
    if (width > 400 && width < 500) {
      container.css({ fontSize: "1.5em" });
    }
    if (width >= 550) {
      container.css({ fontSize: "1.7em" });
    }
  }
}
function SetCalendarPickers(
  calendarId,
  yearPickerId,
  monthPickerId,
  containerId
) {
  var mouseIsInsideMonthPicker = false;
  var mouseIsInsideYearPicker = false;
  $(document).on("click", ".selectMonth." + calendarId, function () {
    $("#" + monthPickerId)
      .css({ position: "absolute", top: 30 })
      .toggle();
  });
  $(document).on("click", ".selectYear." + calendarId, function () {
    $("#" + yearPickerId)
      .css({ position: "absolute", top: 30 })
      .toggle();
  });
  $(window).resize(function () {
    resizeFonts(containerId);
  });
  resizeFonts(containerId);
  $(document).on("mouseover", "#" + monthPickerId, function () {
    mouseIsInsideMonthPicker = true;
  });
  $(document).on("mouseleave", "#" + monthPickerId, function () {
    mouseIsInsideMonthPicker = false;
  });
  $(document).on("mouseover", "#" + yearPickerId, function () {
    mouseIsInsideYearPicker = true;
  });
  $(document).on("mouseleave", "#" + yearPickerId, function () {
    mouseIsInsideYearPicker = false;
  });
  $("body").mouseup(function () {
    if (!mouseIsInsideMonthPicker) {
      $("#" + monthPickerId).hide();
    }
    if (!mouseIsInsideYearPicker) {
      $("#" + yearPickerId).hide();
    }
  });
}
function GetCalendarValues(containerId) {
  var lblCurrentMonth = $("#" + containerId + " .calendarCurrentMonthHolder");
  var lblCurrentYear = $("#" + containerId + " .calendarCurrentYearHolder");
  var lblCurrentFirstBase = $(
    "#" + containerId + " .calendarCurrentFirstBaseHolder"
  );
  var lblCurrentSecondBase = $(
    "#" + containerId + " .calendarCurrentSecondBaseHolder"
  );
  var lblCurrentThirdBase = $(
    "#" + containerId + " .calendarCurrentThirdBaseHolder"
  );
  var lblIsResponsive = $("#" + containerId + " .calendarIsResponsiveHolder");
  var month = Number(lblCurrentMonth.text());
  var year = Number(lblCurrentYear.text());
  var firstbase = Number(lblCurrentFirstBase.text());
  var secondbase = Number(lblCurrentSecondBase.text());
  var thirdbase = Number(lblCurrentThirdBase.text());
  var isResponsive = lblIsResponsive.text().toLowerCase() == "true";
  return {
    Month: month,
    Year: year,
    FirstBase: firstbase,
    SecondBase: secondbase,
    ThirdBase: thirdbase,
    IsResponsive: isResponsive,
  };
}
function ShowCalendarLoading(containerId, eventListPanelId) {
  try {
    if (eventListPanelId != "" && $("#" + eventListPanelId).length) {
      var eventLayer = $("#" + eventListPanelId);
      eventLayer.css({ opacity: 0.5 });
    }
    if (containerId != "" && $("#" + containerId).length) {
      var mainLayer = $("#" + containerId);
      mainLayer.css({ opacity: 0.5 });
    }
  } catch (err) {
    console.log(err);
  }
}
function HideCalendarLoading(containerId, eventListPanelId) {
  try {
    if (eventListPanelId != "" && $("#" + eventListPanelId).length) {
      var eventLayer = $("#" + eventListPanelId);
      eventLayer.fadeTo("fast", 1);
    }
    if (containerId != "" && $("#" + containerId).length) {
      var mainLayer = $("#" + containerId);
      mainLayer.fadeTo("fast", 1);
    }
  } catch (err) {
    console.log(err);
  }
}
function RefreshCalendar(
  containerId,
  eventsListPanelId,
  year,
  month,
  firstbase,
  secondbase,
  thirdbase,
  isResponsive
) {
  try {
    var formData = {
      Year: year,
      Month: month,
      Base1: firstbase,
      Base2: secondbase,
      Base3: thirdbase,
      Responsive: isResponsive,
    };
    // var currentpage =
    //   location.protocol + "//" + location.host + location.pathname;
    // console.log(currentpage);
    var url = "https://www.time.ir/";
    $.ajax({
      url: url,
      data: formData,
      type: "POST",
      cache: false,
      beforeSend: function () {
        ShowCalendarLoading(containerId, eventsListPanelId);
      },
      complete: function () {
        HideCalendarLoading(containerId, eventsListPanelId);
      },
      success: function (result) {
        console.log(result);
        var eventListPanelId = "#" + eventsListPanelId;
        $("#" + containerId).html(
          $($.parseHTML(result))
            .find("#" + containerId)
            .html()
        );
        if (eventListPanelId != "#") {
          $(eventListPanelId).html(
            $($.parseHTML(result)).find(eventListPanelId).html()
          );
        }

        // let htmlResponse;
        // let calendar;
        // let form;
        // let token;

        // htmlResponse = $(new DOMParser().parseFromString(result, "text/html"));

        // form = htmlResponse.find("#aspnetForm");
        // token = form.find(">div:first-of-type");
        // calendar = htmlResponse.find("#ctl00_cphTop_pnl30cphTop_3732");
        // console.log(calendar);

        // console.log(form, token);

        // form.html(token);
        // form.append(calendar);
        // $("#generalMainWrap").html(form);
      },
    });
  } catch (err) {
    console.log(err);
  }
}
function PrevMonthClick(containerId, eventsListPanelId) {
  try {
    var values = GetCalendarValues(containerId);
    var month = values.Month;
    var year = values.Year;
    var firstbase = values.FirstBase;
    var secondbase = values.SecondBase;
    var thirdbase = values.ThirdBase;
    var isResponsive = values.IsResponsive;
    if ((month == 0) | (year == 0)) return;
    if (month > 1) month--;
    else {
      month = 12;
      year--;
    }
    RefreshCalendar(
      containerId,
      eventsListPanelId,
      year,
      month,
      firstbase,
      secondbase,
      thirdbase,
      isResponsive
    );
  } catch (err) {
    console.log(err);
  }
}
function NextMonthClick(containerId, eventsListPanelId) {
  try {
    var values = GetCalendarValues(containerId);
    var month = values.Month;
    var year = values.Year;
    var firstbase = values.FirstBase;
    var secondbase = values.SecondBase;
    var thirdbase = values.ThirdBase;
    var isResponsive = values.IsResponsive;
    if ((month == 0) | (year == 0)) return;
    if (month < 12) month++;
    else {
      month = 1;
      year++;
    }
    RefreshCalendar(
      containerId,
      eventsListPanelId,
      year,
      month,
      firstbase,
      secondbase,
      thirdbase,
      isResponsive
    );
  } catch (err) {
    console.log(err);
  }
}
function GotoMonth(containerId, eventsListPanelId, obj, e) {
  try {
    var values = GetCalendarValues(containerId);
    var year = values.Year;
    var firstbase = values.FirstBase;
    var secondbase = values.SecondBase;
    var thirdbase = values.ThirdBase;
    var isResponsive = values.IsResponsive;
    if (!e) e = window.event;
    var x = e.target || e.srcElement;
    var month = Number(x.id);
    RefreshCalendar(
      containerId,
      eventsListPanelId,
      year,
      month,
      firstbase,
      secondbase,
      thirdbase,
      isResponsive
    );
  } catch (err) {
    console.log(err);
  }
}
function GotoYear(containerId, eventsListPanelId, txtYearContainerId) {
  try {
    var values = GetCalendarValues(containerId);
    var month = values.Month;
    var year = values.Year;
    var firstbase = values.FirstBase;
    var secondbase = values.SecondBase;
    var thirdbase = values.ThirdBase;
    var isResponsive = values.IsResponsive;
    var txtYearId = $("#" + txtYearContainerId);
    if (txtYearId.val() != "") {
      year = Number(txtYearId.val());
    }
    RefreshCalendar(
      containerId,
      eventsListPanelId,
      year,
      month,
      firstbase,
      secondbase,
      thirdbase,
      isResponsive
    );
  } catch (err) {
    console.log(err);
  }
}
function TodayClick(containerId, eventsListPanelId) {
  RefreshCalendar(containerId, eventsListPanelId, 0, 0, 0);
}
$(document).ready(function () {
  $(".eventWrapper img").click(function (event) {
    if ($(this).hasClass("closed")) {
      $(this).removeClass("closed").addClass("open");
      $(this).prop("src", "/Components/General/Resources/Images/minus.gif");
    } else {
      $(this).removeClass("open").addClass("closed");
      $(this).prop("src", "/Components/General/Resources/Images/plus.gif");
    }
    var boxId = event.target.id.replace("_imgCollapse", "_pnlEventBody");
    $("#" + boxId).slideToggle();
  });
  $(".eventWrapper a span").click(function (event) {
    var parentId = $(this).parent().prop("id");
    var imageId = parentId.replace("_hplEvent", "_imgCollapse");
    if ($(this).hasClass("closed")) {
      $(this).removeClass("closed").addClass("open");
      $("#" + imageId).prop(
        "src",
        "/Components/General/Resources/Images/minus.gif"
      );
    } else {
      $(this).removeClass("open").addClass("closed");
      $("#" + imageId).prop(
        "src",
        "/Components/General/Resources/Images/plus.gif"
      );
    }
    var boxId = parentId.replace("_hplEvent", "_pnlEventBody");
    $("#" + boxId).slideToggle();
  });
});
/* End of /EventCalendar.js*/
