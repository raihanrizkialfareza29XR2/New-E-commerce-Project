/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!(function (e, t) {
  'use strict';
  'object' == typeof module && 'object' == typeof module.exports
    ? (module.exports = e.document
        ? t(e, !0)
        : function (e) {
            if (!e.document) throw new Error('jQuery requires a window with a document');
            return t(e);
          })
    : t(e);
})('undefined' != typeof window ? window : this, function (C, e) {
  'use strict';
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
      return 'function' == typeof e && 'number' != typeof e.nodeType && 'function' != typeof e.item;
    },
    x = function (e) {
      return null != e && e === e.window;
    },
    E = C.document,
    c = { type: !0, src: !0, nonce: !0, noModule: !0 };
  function b(e, t, n) {
    var r,
      i,
      o = (n = n || E).createElement('script');
    if (((o.text = e), t)) for (r in c) (i = t[r] || (t.getAttribute && t.getAttribute(r))) && o.setAttribute(r, i);
    n.head.appendChild(o).parentNode.removeChild(o);
  }
  function w(e) {
    return null == e ? e + '' : 'object' == typeof e || 'function' == typeof e ? n[o.call(e)] || 'object' : typeof e;
  }
  var f = '3.6.0',
    S = function (e, t) {
      return new S.fn.init(e, t);
    };
  function p(e) {
    var t = !!e && 'length' in e && e.length,
      n = w(e);
    return !m(e) && !x(e) && ('array' === n || 0 === t || ('number' == typeof t && 0 < t && t - 1 in e));
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
        return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e];
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
        for ('boolean' == typeof a && ((l = a), (a = arguments[s] || {}), s++), 'object' == typeof a || m(a) || (a = {}), s === u && ((a = this), s--); s < u; s++)
          if (null != (e = arguments[s]))
            for (t in e)
              (r = e[t]),
                '__proto__' !== t &&
                  a !== r &&
                  (l && r && (S.isPlainObject(r) || (i = Array.isArray(r))) ? ((n = a[t]), (o = i && !Array.isArray(n) ? [] : i || S.isPlainObject(n) ? n : {}), (i = !1), (a[t] = S.extend(l, o, r))) : void 0 !== r && (a[t] = r));
        return a;
      }),
    S.extend({
      expando: 'jQuery' + (f + Math.random()).replace(/\D/g, ''),
      isReady: !0,
      error: function (e) {
        throw new Error(e);
      },
      noop: function () {},
      isPlainObject: function (e) {
        var t, n;
        return !(!e || '[object Object]' !== o.call(e)) && (!(t = r(e)) || ('function' == typeof (n = v.call(t, 'constructor') && t.constructor) && a.call(n) === l));
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
          for (n = e.length; r < n; r++) if (!1 === t.call(e[r], r, e[r])) break;
        } else for (r in e) if (!1 === t.call(e[r], r, e[r])) break;
        return e;
      },
      makeArray: function (e, t) {
        var n = t || [];
        return null != e && (p(Object(e)) ? S.merge(n, 'string' == typeof e ? [e] : e) : u.call(n, e)), n;
      },
      inArray: function (e, t, n) {
        return null == t ? -1 : i.call(t, e, n);
      },
      merge: function (e, t) {
        for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r];
        return (e.length = i), e;
      },
      grep: function (e, t, n) {
        for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) !t(e[i], i) !== a && r.push(e[i]);
        return r;
      },
      map: function (e, t, n) {
        var r,
          i,
          o = 0,
          a = [];
        if (p(e)) for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i);
        else for (o in e) null != (i = t(e[o], o, n)) && a.push(i);
        return g(a);
      },
      guid: 1,
      support: y,
    }),
    'function' == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]),
    S.each('Boolean Number String Function Array Date RegExp Object Error Symbol'.split(' '), function (e, t) {
      n['[object ' + t + ']'] = t.toLowerCase();
    });
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
      S = 'sizzle' + 1 * new Date(),
      p = n.document,
      k = 0,
      r = 0,
      m = ue(),
      x = ue(),
      A = ue(),
      N = ue(),
      j = function (e, t) {
        return e === t && (l = !0), 0;
      },
      D = {}.hasOwnProperty,
      t = [],
      q = t.pop,
      L = t.push,
      H = t.push,
      O = t.slice,
      P = function (e, t) {
        for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n;
        return -1;
      },
      R = 'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
      M = '[\\x20\\t\\r\\n\\f]',
      I = '(?:\\\\[\\da-fA-F]{1,6}' + M + '?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+',
      W = '\\[' + M + '*(' + I + ')(?:' + M + '*([*^$|!~]?=)' + M + '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' + I + '))|)' + M + '*\\]',
      F = ':(' + I + ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' + W + ')*)|.*)\\)|)',
      B = new RegExp(M + '+', 'g'),
      $ = new RegExp('^' + M + '+|((?:^|[^\\\\])(?:\\\\.)*)' + M + '+$', 'g'),
      _ = new RegExp('^' + M + '*,' + M + '*'),
      z = new RegExp('^' + M + '*([>+~]|' + M + ')' + M + '*'),
      U = new RegExp(M + '|>'),
      X = new RegExp(F),
      V = new RegExp('^' + I + '$'),
      G = {
        ID: new RegExp('^#(' + I + ')'),
        CLASS: new RegExp('^\\.(' + I + ')'),
        TAG: new RegExp('^(' + I + '|[*])'),
        ATTR: new RegExp('^' + W),
        PSEUDO: new RegExp('^' + F),
        CHILD: new RegExp('^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' + M + '*(even|odd|(([+-]|)(\\d*)n|)' + M + '*(?:([+-]|)' + M + '*(\\d+)|))' + M + '*\\)|)', 'i'),
        bool: new RegExp('^(?:' + R + ')$', 'i'),
        needsContext: new RegExp('^' + M + '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' + M + '*((?:-\\d)?\\d*)' + M + '*\\)|)(?=[^-]|$)', 'i'),
      },
      Y = /HTML$/i,
      Q = /^(?:input|select|textarea|button)$/i,
      J = /^h\d$/i,
      K = /^[^{]+\{\s*\[native \w/,
      Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ee = /[+~]/,
      te = new RegExp('\\\\[\\da-fA-F]{1,6}' + M + '?|\\\\([^\\r\\n\\f])', 'g'),
      ne = function (e, t) {
        var n = '0x' + e.slice(1) - 65536;
        return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320));
      },
      re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
      ie = function (e, t) {
        return t ? ('\0' === e ? '\ufffd' : e.slice(0, -1) + '\\' + e.charCodeAt(e.length - 1).toString(16) + ' ') : '\\' + e;
      },
      oe = function () {
        T();
      },
      ae = be(
        function (e) {
          return !0 === e.disabled && 'fieldset' === e.nodeName.toLowerCase();
        },
        { dir: 'parentNode', next: 'legend' }
      );
    try {
      H.apply((t = O.call(p.childNodes)), p.childNodes), t[p.childNodes.length].nodeType;
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
      if (((n = n || []), 'string' != typeof t || !t || (1 !== p && 9 !== p && 11 !== p))) return n;
      if (!r && (T(e), (e = e || C), E)) {
        if (11 !== p && (u = Z.exec(t)))
          if ((i = u[1])) {
            if (9 === p) {
              if (!(a = e.getElementById(i))) return n;
              if (a.id === i) return n.push(a), n;
            } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i) return n.push(a), n;
          } else {
            if (u[2]) return H.apply(n, e.getElementsByTagName(t)), n;
            if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName) return H.apply(n, e.getElementsByClassName(i)), n;
          }
        if (d.qsa && !N[t + ' '] && (!v || !v.test(t)) && (1 !== p || 'object' !== e.nodeName.toLowerCase())) {
          if (((c = t), (f = e), 1 === p && (U.test(t) || z.test(t)))) {
            ((f = (ee.test(t) && ye(e.parentNode)) || e) === e && d.scope) || ((s = e.getAttribute('id')) ? (s = s.replace(re, ie)) : e.setAttribute('id', (s = S))), (o = (l = h(t)).length);
            while (o--) l[o] = (s ? '#' + s : ':scope') + ' ' + xe(l[o]);
            c = l.join(',');
          }
          try {
            return H.apply(n, f.querySelectorAll(c)), n;
          } catch (e) {
            N(t, !0);
          } finally {
            s === S && e.removeAttribute('id');
          }
        }
      }
      return g(t.replace($, '$1'), e, n, r);
    }
    function ue() {
      var r = [];
      return function e(t, n) {
        return r.push(t + ' ') > b.cacheLength && delete e[r.shift()], (e[t + ' '] = n);
      };
    }
    function le(e) {
      return (e[S] = !0), e;
    }
    function ce(e) {
      var t = C.createElement('fieldset');
      try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), (t = null);
      }
    }
    function fe(e, t) {
      var n = e.split('|'),
        r = n.length;
      while (r--) b.attrHandle[n[r]] = t;
    }
    function pe(e, t) {
      var n = t && e,
        r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
      if (r) return r;
      if (n) while ((n = n.nextSibling)) if (n === t) return -1;
      return e ? 1 : -1;
    }
    function de(t) {
      return function (e) {
        return 'input' === e.nodeName.toLowerCase() && e.type === t;
      };
    }
    function he(n) {
      return function (e) {
        var t = e.nodeName.toLowerCase();
        return ('input' === t || 'button' === t) && e.type === n;
      };
    }
    function ge(t) {
      return function (e) {
        return 'form' in e
          ? e.parentNode && !1 === e.disabled
            ? 'label' in e
              ? 'label' in e.parentNode
                ? e.parentNode.disabled === t
                : e.disabled === t
              : e.isDisabled === t || (e.isDisabled !== !t && ae(e) === t)
            : e.disabled === t
          : 'label' in e && e.disabled === t;
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
      return e && 'undefined' != typeof e.getElementsByTagName && e;
    }
    for (e in ((d = se.support = {}),
    (i = se.isXML =
      function (e) {
        var t = e && e.namespaceURI,
          n = e && (e.ownerDocument || e).documentElement;
        return !Y.test(t || (n && n.nodeName) || 'HTML');
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
            p != C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener('unload', oe, !1) : n.attachEvent && n.attachEvent('onunload', oe)),
            (d.scope = ce(function (e) {
              return a.appendChild(e).appendChild(C.createElement('div')), 'undefined' != typeof e.querySelectorAll && !e.querySelectorAll(':scope fieldset div').length;
            })),
            (d.attributes = ce(function (e) {
              return (e.className = 'i'), !e.getAttribute('className');
            })),
            (d.getElementsByTagName = ce(function (e) {
              return e.appendChild(C.createComment('')), !e.getElementsByTagName('*').length;
            })),
            (d.getElementsByClassName = K.test(C.getElementsByClassName)),
            (d.getById = ce(function (e) {
              return (a.appendChild(e).id = S), !C.getElementsByName || !C.getElementsByName(S).length;
            })),
            d.getById
              ? ((b.filter.ID = function (e) {
                  var t = e.replace(te, ne);
                  return function (e) {
                    return e.getAttribute('id') === t;
                  };
                }),
                (b.find.ID = function (e, t) {
                  if ('undefined' != typeof t.getElementById && E) {
                    var n = t.getElementById(e);
                    return n ? [n] : [];
                  }
                }))
              : ((b.filter.ID = function (e) {
                  var n = e.replace(te, ne);
                  return function (e) {
                    var t = 'undefined' != typeof e.getAttributeNode && e.getAttributeNode('id');
                    return t && t.value === n;
                  };
                }),
                (b.find.ID = function (e, t) {
                  if ('undefined' != typeof t.getElementById && E) {
                    var n,
                      r,
                      i,
                      o = t.getElementById(e);
                    if (o) {
                      if ((n = o.getAttributeNode('id')) && n.value === e) return [o];
                      (i = t.getElementsByName(e)), (r = 0);
                      while ((o = i[r++])) if ((n = o.getAttributeNode('id')) && n.value === e) return [o];
                    }
                    return [];
                  }
                })),
            (b.find.TAG = d.getElementsByTagName
              ? function (e, t) {
                  return 'undefined' != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0;
                }
              : function (e, t) {
                  var n,
                    r = [],
                    i = 0,
                    o = t.getElementsByTagName(e);
                  if ('*' === e) {
                    while ((n = o[i++])) 1 === n.nodeType && r.push(n);
                    return r;
                  }
                  return o;
                }),
            (b.find.CLASS =
              d.getElementsByClassName &&
              function (e, t) {
                if ('undefined' != typeof t.getElementsByClassName && E) return t.getElementsByClassName(e);
              }),
            (s = []),
            (v = []),
            (d.qsa = K.test(C.querySelectorAll)) &&
              (ce(function (e) {
                var t;
                (a.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                  e.querySelectorAll("[msallowcapture^='']").length && v.push('[*^$]=' + M + '*(?:\'\'|"")'),
                  e.querySelectorAll('[selected]').length || v.push('\\[' + M + '*(?:value|' + R + ')'),
                  e.querySelectorAll('[id~=' + S + '-]').length || v.push('~='),
                  (t = C.createElement('input')).setAttribute('name', ''),
                  e.appendChild(t),
                  e.querySelectorAll("[name='']").length || v.push('\\[' + M + '*name' + M + '*=' + M + '*(?:\'\'|"")'),
                  e.querySelectorAll(':checked').length || v.push(':checked'),
                  e.querySelectorAll('a#' + S + '+*').length || v.push('.#.+[+~]'),
                  e.querySelectorAll('\\\f'),
                  v.push('[\\r\\n\\f]');
              }),
              ce(function (e) {
                e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                var t = C.createElement('input');
                t.setAttribute('type', 'hidden'),
                  e.appendChild(t).setAttribute('name', 'D'),
                  e.querySelectorAll('[name=d]').length && v.push('name' + M + '*[*^$|!~]?='),
                  2 !== e.querySelectorAll(':enabled').length && v.push(':enabled', ':disabled'),
                  (a.appendChild(e).disabled = !0),
                  2 !== e.querySelectorAll(':disabled').length && v.push(':enabled', ':disabled'),
                  e.querySelectorAll('*,:x'),
                  v.push(',.*:');
              })),
            (d.matchesSelector = K.test((c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector))) &&
              ce(function (e) {
                (d.disconnectedMatch = c.call(e, '*')), c.call(e, "[s!='']:x"), s.push('!=', F);
              }),
            (v = v.length && new RegExp(v.join('|'))),
            (s = s.length && new RegExp(s.join('|'))),
            (t = K.test(a.compareDocumentPosition)),
            (y =
              t || K.test(a.contains)
                ? function (e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e,
                      r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
                  }
                : function (e, t) {
                    if (t) while ((t = t.parentNode)) if (t === e) return !0;
                    return !1;
                  }),
            (j = t
              ? function (e, t) {
                  if (e === t) return (l = !0), 0;
                  var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                  return (
                    n ||
                    (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || (!d.sortDetached && t.compareDocumentPosition(e) === n)
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
                  if (!i || !o) return e == C ? -1 : t == C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
                  if (i === o) return pe(e, t);
                  n = e;
                  while ((n = n.parentNode)) a.unshift(n);
                  n = t;
                  while ((n = n.parentNode)) s.unshift(n);
                  while (a[r] === s[r]) r++;
                  return r ? pe(a[r], s[r]) : a[r] == p ? -1 : s[r] == p ? 1 : 0;
                })),
          C
        );
      }),
    (se.matches = function (e, t) {
      return se(e, null, null, t);
    }),
    (se.matchesSelector = function (e, t) {
      if ((T(e), d.matchesSelector && E && !N[t + ' '] && (!s || !s.test(t)) && (!v || !v.test(t))))
        try {
          var n = c.call(e, t);
          if (n || d.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return n;
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
        r = n && D.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
      return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
    }),
    (se.escape = function (e) {
      return (e + '').replace(re, ie);
    }),
    (se.error = function (e) {
      throw new Error('Syntax error, unrecognized expression: ' + e);
    }),
    (se.uniqueSort = function (e) {
      var t,
        n = [],
        r = 0,
        i = 0;
      if (((l = !d.detectDuplicates), (u = !d.sortStable && e.slice(0)), e.sort(j), l)) {
        while ((t = e[i++])) t === e[i] && (r = n.push(i));
        while (r--) e.splice(n[r], 1);
      }
      return (u = null), e;
    }),
    (o = se.getText =
      function (e) {
        var t,
          n = '',
          r = 0,
          i = e.nodeType;
        if (i) {
          if (1 === i || 9 === i || 11 === i) {
            if ('string' == typeof e.textContent) return e.textContent;
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
        relative: { '>': { dir: 'parentNode', first: !0 }, ' ': { dir: 'parentNode' }, '+': { dir: 'previousSibling', first: !0 }, '~': { dir: 'previousSibling' } },
        preFilter: {
          ATTR: function (e) {
            return (e[1] = e[1].replace(te, ne)), (e[3] = (e[3] || e[4] || e[5] || '').replace(te, ne)), '~=' === e[2] && (e[3] = ' ' + e[3] + ' '), e.slice(0, 4);
          },
          CHILD: function (e) {
            return (
              (e[1] = e[1].toLowerCase()),
              'nth' === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), (e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ('even' === e[3] || 'odd' === e[3]))), (e[5] = +(e[7] + e[8] || 'odd' === e[3]))) : e[3] && se.error(e[0]),
              e
            );
          },
          PSEUDO: function (e) {
            var t,
              n = !e[6] && e[2];
            return G.CHILD.test(e[0]) ? null : (e[3] ? (e[2] = e[4] || e[5] || '') : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(')', n.length - t) - n.length) && ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))), e.slice(0, 3));
          },
        },
        filter: {
          TAG: function (e) {
            var t = e.replace(te, ne).toLowerCase();
            return '*' === e
              ? function () {
                  return !0;
                }
              : function (e) {
                  return e.nodeName && e.nodeName.toLowerCase() === t;
                };
          },
          CLASS: function (e) {
            var t = m[e + ' '];
            return (
              t ||
              ((t = new RegExp('(^|' + M + ')' + e + '(' + M + '|$)')) &&
                m(e, function (e) {
                  return t.test(('string' == typeof e.className && e.className) || ('undefined' != typeof e.getAttribute && e.getAttribute('class')) || '');
                }))
            );
          },
          ATTR: function (n, r, i) {
            return function (e) {
              var t = se.attr(e, n);
              return null == t
                ? '!=' === r
                : !r ||
                    ((t += ''),
                    '=' === r
                      ? t === i
                      : '!=' === r
                      ? t !== i
                      : '^=' === r
                      ? i && 0 === t.indexOf(i)
                      : '*=' === r
                      ? i && -1 < t.indexOf(i)
                      : '$=' === r
                      ? i && t.slice(-i.length) === i
                      : '~=' === r
                      ? -1 < (' ' + t.replace(B, ' ') + ' ').indexOf(i)
                      : '|=' === r && (t === i || t.slice(0, i.length + 1) === i + '-'));
            };
          },
          CHILD: function (h, e, t, g, v) {
            var y = 'nth' !== h.slice(0, 3),
              m = 'last' !== h.slice(-4),
              x = 'of-type' === e;
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
                    l = y !== m ? 'nextSibling' : 'previousSibling',
                    c = e.parentNode,
                    f = x && e.nodeName.toLowerCase(),
                    p = !n && !x,
                    d = !1;
                  if (c) {
                    if (y) {
                      while (l) {
                        a = e;
                        while ((a = a[l])) if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) return !1;
                        u = l = 'only' === h && !u && 'nextSibling';
                      }
                      return !0;
                    }
                    if (((u = [m ? c.firstChild : c.lastChild]), m && p)) {
                      (d = (s = (r = (i = (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2]), (a = s && c.childNodes[s]);
                      while ((a = (++s && a && a[l]) || (d = s = 0) || u.pop()))
                        if (1 === a.nodeType && ++d && a === e) {
                          i[h] = [k, s, d];
                          break;
                        }
                    } else if ((p && (d = s = (r = (i = (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]), !1 === d))
                      while ((a = (++s && a && a[l]) || (d = s = 0) || u.pop()))
                        if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [k, d]), a === e)) break;
                    return (d -= v) === g || (d % g == 0 && 0 <= d / g);
                  }
                };
          },
          PSEUDO: function (e, o) {
            var t,
              a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error('unsupported pseudo: ' + e);
            return a[S]
              ? a(o)
              : 1 < a.length
              ? ((t = [e, e, '', o]),
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
              s = f(e.replace($, '$1'));
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
              V.test(n || '') || se.error('unsupported lang: ' + n),
              (n = n.replace(te, ne).toLowerCase()),
              function (e) {
                var t;
                do {
                  if ((t = E ? e.lang : e.getAttribute('xml:lang') || e.getAttribute('lang'))) return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + '-');
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
            return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
          },
          enabled: ge(!1),
          disabled: ge(!0),
          checked: function (e) {
            var t = e.nodeName.toLowerCase();
            return ('input' === t && !!e.checked) || ('option' === t && !!e.selected);
          },
          selected: function (e) {
            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
          },
          empty: function (e) {
            for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;
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
            return ('input' === t && 'button' === e.type) || 'button' === t;
          },
          text: function (e) {
            var t;
            return 'input' === e.nodeName.toLowerCase() && 'text' === e.type && (null == (t = e.getAttribute('type')) || 'text' === t.toLowerCase());
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
      for (var t = 0, n = e.length, r = ''; t < n; t++) r += e[t].value;
      return r;
    }
    function be(s, e, t) {
      var u = e.dir,
        l = e.next,
        c = l || u,
        f = t && 'parentNode' === c,
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
              while ((e = e[u])) if ((1 === e.nodeType || f) && s(e, t, n)) return !0;
            } else
              while ((e = e[u]))
                if (1 === e.nodeType || f)
                  if (((i = (o = e[S] || (e[S] = {}))[e.uniqueID] || (o[e.uniqueID] = {})), l && l === e.nodeName.toLowerCase())) e = e[u] || e;
                  else {
                    if ((r = i[c]) && r[0] === k && r[1] === p) return (a[2] = r[2]);
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
      for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++) (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)));
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
              })(h || '*', n.nodeType ? [n] : n, []),
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
              while (o--) (a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a));
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
          a = o || b.relative[' '],
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
              var r = (!o && (n || t !== w)) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
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
            return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({ value: ' ' === e[s - 2].type ? '*' : '' })).replace($, '$1'), t, s < n && Ee(e.slice(s, n)), n < r && Ee((e = e.slice(n))), n < r && xe(e));
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
            l = x[e + ' '];
          if (l) return t ? 0 : l.slice(0);
          (a = e), (s = []), (u = b.preFilter);
          while (a) {
            for (o in ((n && !(r = _.exec(a))) || (r && (a = a.slice(r[0].length) || a), s.push((i = []))),
            (n = !1),
            (r = z.exec(a)) && ((n = r.shift()), i.push({ value: n, type: r[0].replace($, ' ') }), (a = a.slice(n.length))),
            b.filter))
              !(r = G[o].exec(a)) || (u[o] && !(r = u[o](r))) || ((n = r.shift()), i.push({ value: n, type: o, matches: r }), (a = a.slice(n.length)));
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
            a = A[e + ' '];
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
                  l = '0',
                  c = e && [],
                  f = [],
                  p = w,
                  d = e || (x && b.find.TAG('*', i)),
                  h = (k += null == p ? 1 : Math.random() || 0.1),
                  g = d.length;
                for (i && (w = t == C || t || i); l !== g && null != (o = d[l]); l++) {
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
                  H.apply(r, f), i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(r);
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
            l = 'function' == typeof e && e,
            c = !r && h((e = l.selector || e));
          if (((n = n || []), 1 === c.length)) {
            if (2 < (o = c[0] = c[0].slice(0)).length && 'ID' === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
              if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0])) return n;
              l && (t = t.parentNode), (e = e.slice(o.shift().value.length));
            }
            i = G.needsContext.test(e) ? 0 : o.length;
            while (i--) {
              if (((a = o[i]), b.relative[(s = a.type)])) break;
              if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), (ee.test(o[0].type) && ye(t.parentNode)) || t))) {
                if ((o.splice(i, 1), !(e = r.length && xe(o)))) return H.apply(n, r), n;
                break;
              }
            }
          }
          return (l || f(e, c))(r, t, !E, n, !t || (ee.test(e) && ye(t.parentNode)) || t), n;
        }),
      (d.sortStable = S.split('').sort(j).join('') === S),
      (d.detectDuplicates = !!l),
      T(),
      (d.sortDetached = ce(function (e) {
        return 1 & e.compareDocumentPosition(C.createElement('fieldset'));
      })),
      ce(function (e) {
        return (e.innerHTML = "<a href='#'></a>"), '#' === e.firstChild.getAttribute('href');
      }) ||
        fe('type|href|height|width', function (e, t, n) {
          if (!n) return e.getAttribute(t, 'type' === t.toLowerCase() ? 1 : 2);
        }),
      (d.attributes &&
        ce(function (e) {
          return (e.innerHTML = '<input/>'), e.firstChild.setAttribute('value', ''), '' === e.firstChild.getAttribute('value');
        })) ||
        fe('value', function (e, t, n) {
          if (!n && 'input' === e.nodeName.toLowerCase()) return e.defaultValue;
        }),
      ce(function (e) {
        return null == e.getAttribute('disabled');
      }) ||
        fe(R, function (e, t, n) {
          var r;
          if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
        }),
      se
    );
  })(C);
  (S.find = d), (S.expr = d.selectors), (S.expr[':'] = S.expr.pseudos), (S.uniqueSort = S.unique = d.uniqueSort), (S.text = d.getText), (S.isXMLDoc = d.isXML), (S.contains = d.contains), (S.escapeSelector = d.escape);
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
      for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
      return n;
    },
    k = S.expr.match.needsContext;
  function A(e, t) {
    return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
  }
  var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function j(e, n, r) {
    return m(n)
      ? S.grep(e, function (e, t) {
          return !!n.call(e, t, e) !== r;
        })
      : n.nodeType
      ? S.grep(e, function (e) {
          return (e === n) !== r;
        })
      : 'string' != typeof n
      ? S.grep(e, function (e) {
          return -1 < i.call(n, e) !== r;
        })
      : S.filter(n, e, r);
  }
  (S.filter = function (e, t, n) {
    var r = t[0];
    return (
      n && (e = ':not(' + e + ')'),
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
        if ('string' != typeof e)
          return this.pushStack(
            S(e).filter(function () {
              for (t = 0; t < r; t++) if (S.contains(i[t], this)) return !0;
            })
          );
        for (n = this.pushStack([]), t = 0; t < r; t++) S.find(e, i[t], n);
        return 1 < r ? S.uniqueSort(n) : n;
      },
      filter: function (e) {
        return this.pushStack(j(this, e || [], !1));
      },
      not: function (e) {
        return this.pushStack(j(this, e || [], !0));
      },
      is: function (e) {
        return !!j(this, 'string' == typeof e && k.test(e) ? S(e) : e || [], !1).length;
      },
    });
  var D,
    q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  ((S.fn.init = function (e, t, n) {
    var r, i;
    if (!e) return this;
    if (((n = n || D), 'string' == typeof e)) {
      if (!(r = '<' === e[0] && '>' === e[e.length - 1] && 3 <= e.length ? [null, e, null] : q.exec(e)) || (!r[1] && t)) return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
      if (r[1]) {
        if (((t = t instanceof S ? t[0] : t), S.merge(this, S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)), N.test(r[1]) && S.isPlainObject(t))) for (r in t) m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
        return this;
      }
      return (i = E.getElementById(r[2])) && ((this[0] = i), (this.length = 1)), this;
    }
    return e.nodeType ? ((this[0] = e), (this.length = 1), this) : m(e) ? (void 0 !== n.ready ? n.ready(e) : e(S)) : S.makeArray(e, this);
  }).prototype = S.fn),
    (D = S(E));
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
        a = 'string' != typeof e && S(e);
      if (!k.test(e))
        for (; r < i; r++)
          for (n = this[r]; n && n !== t; n = n.parentNode)
            if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
              o.push(n);
              break;
            }
      return this.pushStack(1 < o.length ? S.uniqueSort(o) : o);
    },
    index: function (e) {
      return e ? ('string' == typeof e ? i.call(S(e), this[0]) : i.call(this, e.jquery ? e[0] : e)) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
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
          return h(e, 'parentNode');
        },
        parentsUntil: function (e, t, n) {
          return h(e, 'parentNode', n);
        },
        next: function (e) {
          return O(e, 'nextSibling');
        },
        prev: function (e) {
          return O(e, 'previousSibling');
        },
        nextAll: function (e) {
          return h(e, 'nextSibling');
        },
        prevAll: function (e) {
          return h(e, 'previousSibling');
        },
        nextUntil: function (e, t, n) {
          return h(e, 'nextSibling', n);
        },
        prevUntil: function (e, t, n) {
          return h(e, 'previousSibling', n);
        },
        siblings: function (e) {
          return T((e.parentNode || {}).firstChild, e);
        },
        children: function (e) {
          return T(e.firstChild);
        },
        contents: function (e) {
          return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (A(e, 'template') && (e = e.content || e), S.merge([], e.childNodes));
        },
      },
      function (r, i) {
        S.fn[r] = function (e, t) {
          var n = S.map(this, i, e);
          return 'Until' !== r.slice(-5) && (t = e), t && 'string' == typeof t && (n = S.filter(t, n)), 1 < this.length && (H[r] || S.uniqueSort(n), L.test(r) && n.reverse()), this.pushStack(n);
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
      e && m((i = e.promise)) ? i.call(e).done(t).fail(n) : e && m((i = e.then)) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r));
    } catch (e) {
      n.apply(void 0, [e]);
    }
  }
  (S.Callbacks = function (r) {
    var e, n;
    r =
      'string' == typeof r
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
          while (++l < s.length) !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && ((l = s.length), (t = !1));
        }
        r.memory || (t = !1), (i = !1), a && (s = t ? [] : '');
      },
      f = {
        add: function () {
          return (
            s &&
              (t && !i && ((l = s.length - 1), u.push(t)),
              (function n(e) {
                S.each(e, function (e, t) {
                  m(t) ? (r.unique && f.has(t)) || s.push(t) : t && t.length && 'string' !== w(t) && n(t);
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
              while (-1 < (n = S.inArray(t, s, n))) s.splice(n, 1), n <= l && l--;
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
          return (a = u = []), (s = t = ''), this;
        },
        disabled: function () {
          return !s;
        },
        lock: function () {
          return (a = u = []), t || i || (s = t = ''), this;
        },
        locked: function () {
          return !!a;
        },
        fireWith: function (e, t) {
          return a || ((t = [e, (t = t || []).slice ? t.slice() : t]), u.push(t), i || c()), this;
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
            ['notify', 'progress', S.Callbacks('memory'), S.Callbacks('memory'), 2],
            ['resolve', 'done', S.Callbacks('once memory'), S.Callbacks('once memory'), 0, 'resolved'],
            ['reject', 'fail', S.Callbacks('once memory'), S.Callbacks('once memory'), 1, 'rejected'],
          ],
          i = 'pending',
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
                    e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + 'With'](this, n ? [e] : arguments);
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
                        if ((e = a.apply(n, r)) === o.promise()) throw new TypeError('Thenable self-resolution');
                        (t = e && ('object' == typeof e || 'function' == typeof e) && e.then),
                          m(t) ? (s ? t.call(e, l(u, o, R, s), l(u, o, M, s)) : (u++, t.call(e, l(u, o, R, s), l(u, o, M, s), l(u, o, R, o.notifyWith)))) : (a !== R && ((n = void 0), (r = [e])), (s || o.resolveWith)(n, r));
                      }
                    },
                    t = s
                      ? e
                      : function () {
                          try {
                            e();
                          } catch (e) {
                            S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, t.stackTrace), u <= i + 1 && (a !== M && ((n = void 0), (r = [e])), o.rejectWith(n, r));
                          }
                        };
                  i ? t() : (S.Deferred.getStackHook && (t.stackTrace = S.Deferred.getStackHook()), C.setTimeout(t));
                };
              }
              return S.Deferred(function (e) {
                o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)), o[1][3].add(l(0, e, m(t) ? t : R)), o[2][3].add(l(0, e, m(n) ? n : M));
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
                return s[t[0] + 'With'](this === s ? void 0 : this, arguments), this;
              }),
              (s[t[0] + 'With'] = n.fireWith);
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
              (r[t] = this), (i[t] = 1 < arguments.length ? s.call(arguments) : e), --n || o.resolveWith(r, i);
            };
          };
        if (n <= 1 && (I(e, o.done(a(t)).resolve, o.reject, !n), 'pending' === o.state() || m(i[t] && i[t].then))) return o.then();
        while (t--) I(i[t], a(t), o.reject);
        return o.promise();
      },
    });
  var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  (S.Deferred.exceptionHook = function (e, t) {
    C.console && C.console.warn && e && W.test(e.name) && C.console.warn('jQuery.Deferred exception: ' + e.message, e.stack, t);
  }),
    (S.readyException = function (e) {
      C.setTimeout(function () {
        throw e;
      });
    });
  var F = S.Deferred();
  function B() {
    E.removeEventListener('DOMContentLoaded', B), C.removeEventListener('load', B), S.ready();
  }
  (S.fn.ready = function (e) {
    return (
      F.then(e)['catch'](function (e) {
        S.readyException(e);
      }),
      this
    );
  }),
    S.extend({
      isReady: !1,
      readyWait: 1,
      ready: function (e) {
        (!0 === e ? --S.readyWait : S.isReady) || ((S.isReady = !0) !== e && 0 < --S.readyWait) || F.resolveWith(E, [S]);
      },
    }),
    (S.ready.then = F.then),
    'complete' === E.readyState || ('loading' !== E.readyState && !E.documentElement.doScroll) ? C.setTimeout(S.ready) : (E.addEventListener('DOMContentLoaded', B), C.addEventListener('load', B));
  var $ = function (e, t, n, r, i, o, a) {
      var s = 0,
        u = e.length,
        l = null == n;
      if ('object' === w(n)) for (s in ((i = !0), n)) $(e, t, s, n[s], !0, o, a);
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
    return e.replace(_, 'ms-').replace(z, U);
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
        return t || ((t = {}), V(e) && (e.nodeType ? (e[this.expando] = t) : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))), t;
      },
      set: function (e, t, n) {
        var r,
          i = this.cache(e);
        if ('string' == typeof t) i[X(t)] = n;
        else for (r in t) i[X(r)] = t[r];
        return i;
      },
      get: function (e, t) {
        return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)];
      },
      access: function (e, t, n) {
        return void 0 === t || (t && 'string' == typeof t && void 0 === n) ? this.get(e, t) : (this.set(e, t, n), void 0 !== n ? n : t);
      },
      remove: function (e, t) {
        var n,
          r = e[this.expando];
        if (void 0 !== r) {
          if (void 0 !== t) {
            n = (t = Array.isArray(t) ? t.map(X) : (t = X(t)) in r ? [t] : t.match(P) || []).length;
            while (n--) delete r[t[n]];
          }
          (void 0 === t || S.isEmptyObject(r)) && (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando]);
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
      if (((r = 'data-' + t.replace(K, '-$&').toLowerCase()), 'string' == typeof (n = e.getAttribute(r)))) {
        try {
          n = 'true' === (i = n) || ('false' !== i && ('null' === i ? null : i === +i + '' ? +i : J.test(i) ? JSON.parse(i) : i));
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
          if (this.length && ((i = Q.get(o)), 1 === o.nodeType && !Y.get(o, 'hasDataAttrs'))) {
            t = a.length;
            while (t--) a[t] && 0 === (r = a[t].name).indexOf('data-') && ((r = X(r.slice(5))), Z(o, r, i[r]));
            Y.set(o, 'hasDataAttrs', !0);
          }
          return i;
        }
        return 'object' == typeof n
          ? this.each(function () {
              Q.set(this, n);
            })
          : $(
              this,
              function (e) {
                var t;
                if (o && void 0 === e) return void 0 !== (t = Q.get(o, n)) ? t : void 0 !== (t = Z(o, n)) ? t : void 0;
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
        if (e) return (t = (t || 'fx') + 'queue'), (r = Y.get(e, t)), n && (!r || Array.isArray(n) ? (r = Y.access(e, t, S.makeArray(n))) : r.push(n)), r || [];
      },
      dequeue: function (e, t) {
        t = t || 'fx';
        var n = S.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = S._queueHooks(e, t);
        'inprogress' === i && ((i = n.shift()), r--),
          i &&
            ('fx' === t && n.unshift('inprogress'),
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
        var n = t + 'queueHooks';
        return (
          Y.get(e, n) ||
          Y.access(e, n, {
            empty: S.Callbacks('once memory').add(function () {
              Y.remove(e, [t + 'queue', n]);
            }),
          })
        );
      },
    }),
    S.fn.extend({
      queue: function (t, n) {
        var e = 2;
        return (
          'string' != typeof t && ((n = t), (t = 'fx'), e--),
          arguments.length < e
            ? S.queue(this[0], t)
            : void 0 === n
            ? this
            : this.each(function () {
                var e = S.queue(this, t, n);
                S._queueHooks(this, t), 'fx' === t && 'inprogress' !== e[0] && S.dequeue(this, t);
              })
        );
      },
      dequeue: function (e) {
        return this.each(function () {
          S.dequeue(this, e);
        });
      },
      clearQueue: function (e) {
        return this.queue(e || 'fx', []);
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
        'string' != typeof e && ((t = e), (e = void 0)), (e = e || 'fx');
        while (a--) (n = Y.get(o[a], e + 'queueHooks')) && n.empty && (r++, n.empty.add(s));
        return s(), i.promise(t);
      },
    });
  var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    te = new RegExp('^(?:([+-])=|)(' + ee + ')([a-z%]*)$', 'i'),
    ne = ['Top', 'Right', 'Bottom', 'Left'],
    re = E.documentElement,
    ie = function (e) {
      return S.contains(e.ownerDocument, e);
    },
    oe = { composed: !0 };
  re.getRootNode &&
    (ie = function (e) {
      return S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument;
    });
  var ae = function (e, t) {
    return 'none' === (e = t || e).style.display || ('' === e.style.display && ie(e) && 'none' === S.css(e, 'display'));
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
            return S.css(e, t, '');
          },
      u = s(),
      l = (n && n[3]) || (S.cssNumber[t] ? '' : 'px'),
      c = e.nodeType && (S.cssNumber[t] || ('px' !== l && +u)) && te.exec(S.css(e, t));
    if (c && c[3] !== l) {
      (u /= 2), (l = l || c[3]), (c = +u || 1);
      while (a--) S.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0), (c /= o);
      (c *= 2), S.style(e, t, c + l), (n = n || []);
    }
    return n && ((c = +c || +u || 0), (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]), r && ((r.unit = l), (r.start = c), (r.end = i))), i;
  }
  var ue = {};
  function le(e, t) {
    for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
      (r = e[c]).style &&
        ((n = r.style.display),
        t
          ? ('none' === n && ((l[c] = Y.get(r, 'display') || null), l[c] || (r.style.display = '')),
            '' === r.style.display &&
              ae(r) &&
              (l[c] =
                ((u = a = o = void 0),
                (a = (i = r).ownerDocument),
                (s = i.nodeName),
                (u = ue[s]) || ((o = a.body.appendChild(a.createElement(s))), (u = S.css(o, 'display')), o.parentNode.removeChild(o), 'none' === u && (u = 'block'), (ue[s] = u)))))
          : 'none' !== n && ((l[c] = 'none'), Y.set(r, 'display', n)));
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
      return 'boolean' == typeof e
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
  (ce = E.createDocumentFragment().appendChild(E.createElement('div'))),
    (fe = E.createElement('input')).setAttribute('type', 'radio'),
    fe.setAttribute('checked', 'checked'),
    fe.setAttribute('name', 't'),
    ce.appendChild(fe),
    (y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked),
    (ce.innerHTML = '<textarea>x</textarea>'),
    (y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue),
    (ce.innerHTML = '<option></option>'),
    (y.option = !!ce.lastChild);
  var ge = { thead: [1, '<table>', '</table>'], col: [2, '<table><colgroup>', '</colgroup></table>'], tr: [2, '<table><tbody>', '</tbody></table>'], td: [3, '<table><tbody><tr>', '</tr></tbody></table>'], _default: [0, '', ''] };
  function ve(e, t) {
    var n;
    return (n = 'undefined' != typeof e.getElementsByTagName ? e.getElementsByTagName(t || '*') : 'undefined' != typeof e.querySelectorAll ? e.querySelectorAll(t || '*') : []), void 0 === t || (t && A(e, t)) ? S.merge([e], n) : n;
  }
  function ye(e, t) {
    for (var n = 0, r = e.length; n < r; n++) Y.set(e[n], 'globalEval', !t || Y.get(t[n], 'globalEval'));
  }
  (ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead), (ge.th = ge.td), y.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", '</select>']);
  var me = /<|&#?\w+;/;
  function xe(e, t, n, r, i) {
    for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
      if ((o = e[d]) || 0 === o)
        if ('object' === w(o)) S.merge(p, o.nodeType ? [o] : o);
        else if (me.test(o)) {
          (a = a || f.appendChild(t.createElement('div'))), (s = (de.exec(o) || ['', ''])[1].toLowerCase()), (u = ge[s] || ge._default), (a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2]), (c = u[0]);
          while (c--) a = a.lastChild;
          S.merge(p, a.childNodes), ((a = f.firstChild).textContent = '');
        } else p.push(t.createTextNode(o));
    (f.textContent = ''), (d = 0);
    while ((o = p[d++]))
      if (r && -1 < S.inArray(o, r)) i && i.push(o);
      else if (((l = ie(o)), (a = ve(f.appendChild(o), 'script')), l && ye(a), n)) {
        c = 0;
        while ((o = a[c++])) he.test(o.type || '') && n.push(o);
      }
    return f;
  }
  var be = /^([^.]*)(?:\.(.+)|)/;
  function we() {
    return !0;
  }
  function Te() {
    return !1;
  }
  function Ce(e, t) {
    return (
      (e ===
        (function () {
          try {
            return E.activeElement;
          } catch (e) {}
        })()) ==
      ('focus' === t)
    );
  }
  function Ee(e, t, n, r, i, o) {
    var a, s;
    if ('object' == typeof t) {
      for (s in ('string' != typeof n && ((r = r || n), (n = void 0)), t)) Ee(e, s, n, r, t[s], o);
      return e;
    }
    if ((null == r && null == i ? ((i = n), (r = n = void 0)) : null == i && ('string' == typeof n ? ((i = r), (r = void 0)) : ((i = r), (r = n), (n = void 0))), !1 === i)) i = Te;
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
  function Se(e, i, o) {
    o
      ? (Y.set(e, i, !1),
        S.event.add(e, i, {
          namespace: !1,
          handler: function (e) {
            var t,
              n,
              r = Y.get(this, i);
            if (1 & e.isTrigger && this[i]) {
              if (r.length) (S.event.special[i] || {}).delegateType && e.stopPropagation();
              else if (((r = s.call(arguments)), Y.set(this, i, r), (t = o(this, i)), this[i](), r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : (n = {}), r !== n))
                return e.stopImmediatePropagation(), e.preventDefault(), n && n.value;
            } else r.length && (Y.set(this, i, { value: S.event.trigger(S.extend(r[0], S.Event.prototype), r.slice(1), this) }), e.stopImmediatePropagation());
          },
        }))
      : void 0 === Y.get(e, i) && S.event.add(e, i, we);
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
                return 'undefined' != typeof S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0;
              }),
          (l = (e = (e || '').match(P) || ['']).length);
        while (l--)
          (d = g = (s = be.exec(e[l]) || [])[1]),
            (h = (s[2] || '').split('.').sort()),
            d &&
              ((f = S.event.special[d] || {}),
              (d = (i ? f.delegateType : f.bindType) || d),
              (f = S.event.special[d] || {}),
              (c = S.extend({ type: d, origType: g, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && S.expr.match.needsContext.test(i), namespace: h.join('.') }, o)),
              (p = u[d]) || (((p = u[d] = []).delegateCount = 0), (f.setup && !1 !== f.setup.call(t, r, h, a)) || (t.addEventListener && t.addEventListener(d, a))),
              f.add && (f.add.call(t, c), c.handler.guid || (c.handler.guid = n.guid)),
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
        l = (t = (t || '').match(P) || ['']).length;
        while (l--)
          if (((d = g = (s = be.exec(t[l]) || [])[1]), (h = (s[2] || '').split('.').sort()), d)) {
            (f = S.event.special[d] || {}), (p = u[(d = (r ? f.delegateType : f.bindType) || d)] || []), (s = s[2] && new RegExp('(^|\\.)' + h.join('\\.(?:.*\\.|)') + '(\\.|$)')), (a = o = p.length);
            while (o--)
              (c = p[o]),
                (!i && g !== c.origType) ||
                  (n && n.guid !== c.guid) ||
                  (s && !s.test(c.namespace)) ||
                  (r && r !== c.selector && ('**' !== r || !c.selector)) ||
                  (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
            a && !p.length && ((f.teardown && !1 !== f.teardown.call(e, h, v.handle)) || S.removeEvent(e, d, v.handle), delete u[d]);
          } else for (d in u) S.event.remove(e, d + t[l], n, r, !0);
        S.isEmptyObject(u) && Y.remove(e, 'handle events');
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
        l = (Y.get(this, 'events') || Object.create(null))[u.type] || [],
        c = S.event.special[u.type] || {};
      for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t];
      if (((u.delegateTarget = this), !c.preDispatch || !1 !== c.preDispatch.call(this, u))) {
        (a = S.event.handlers.call(this, u, l)), (t = 0);
        while ((i = a[t++]) && !u.isPropagationStopped()) {
          (u.currentTarget = i.elem), (n = 0);
          while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped())
            (u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace)) ||
              ((u.handleObj = o), (u.data = o.data), void 0 !== (r = ((S.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(), u.stopPropagation()));
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
      if (u && l.nodeType && !('click' === e.type && 1 <= e.button))
        for (; l !== this; l = l.parentNode || this)
          if (1 === l.nodeType && ('click' !== e.type || !0 !== l.disabled)) {
            for (o = [], a = {}, n = 0; n < u; n++) void 0 === a[(i = (r = t[n]).selector + ' ')] && (a[i] = r.needsContext ? -1 < S(i, this).index(l) : S.find(i, this, null, [l]).length), a[i] && o.push(r);
            o.length && s.push({ elem: l, handlers: o });
          }
      return (l = this), u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s;
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
          Object.defineProperty(this, t, { enumerable: !0, configurable: !0, writable: !0, value: e });
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
          return pe.test(t.type) && t.click && A(t, 'input') && Se(t, 'click', we), !1;
        },
        trigger: function (e) {
          var t = this || e;
          return pe.test(t.type) && t.click && A(t, 'input') && Se(t, 'click'), !0;
        },
        _default: function (e) {
          var t = e.target;
          return (pe.test(t.type) && t.click && A(t, 'input') && Y.get(t, 'click')) || A(t, 'a');
        },
      },
      beforeunload: {
        postDispatch: function (e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
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
          (this.isDefaultPrevented = e.defaultPrevented || (void 0 === e.defaultPrevented && !1 === e.returnValue) ? we : Te),
          (this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target),
          (this.currentTarget = e.currentTarget),
          (this.relatedTarget = e.relatedTarget))
        : (this.type = e),
        t && S.extend(this, t),
        (this.timeStamp = (e && e.timeStamp) || Date.now()),
        (this[S.expando] = !0);
    }),
    (S.Event.prototype = {
      constructor: S.Event,
      isDefaultPrevented: Te,
      isPropagationStopped: Te,
      isImmediatePropagationStopped: Te,
      isSimulated: !1,
      preventDefault: function () {
        var e = this.originalEvent;
        (this.isDefaultPrevented = we), e && !this.isSimulated && e.preventDefault();
      },
      stopPropagation: function () {
        var e = this.originalEvent;
        (this.isPropagationStopped = we), e && !this.isSimulated && e.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var e = this.originalEvent;
        (this.isImmediatePropagationStopped = we), e && !this.isSimulated && e.stopImmediatePropagation(), this.stopPropagation();
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
        which: !0,
      },
      S.event.addProp
    ),
    S.each({ focus: 'focusin', blur: 'focusout' }, function (e, t) {
      S.event.special[e] = {
        setup: function () {
          return Se(this, e, Ce), !1;
        },
        trigger: function () {
          return Se(this, e), !0;
        },
        _default: function () {
          return !0;
        },
        delegateType: t,
      };
    }),
    S.each({ mouseenter: 'mouseover', mouseleave: 'mouseout', pointerenter: 'pointerover', pointerleave: 'pointerout' }, function (e, i) {
      S.event.special[e] = {
        delegateType: i,
        bindType: i,
        handle: function (e) {
          var t,
            n = e.relatedTarget,
            r = e.handleObj;
          return (n && (n === this || S.contains(this, n))) || ((e.type = r.origType), (t = r.handler.apply(this, arguments)), (e.type = i)), t;
        },
      };
    }),
    S.fn.extend({
      on: function (e, t, n, r) {
        return Ee(this, e, t, n, r);
      },
      one: function (e, t, n, r) {
        return Ee(this, e, t, n, r, 1);
      },
      off: function (e, t, n) {
        var r, i;
        if (e && e.preventDefault && e.handleObj) return (r = e.handleObj), S(e.delegateTarget).off(r.namespace ? r.origType + '.' + r.namespace : r.origType, r.selector, r.handler), this;
        if ('object' == typeof e) {
          for (i in e) this.off(i, t, e[i]);
          return this;
        }
        return (
          (!1 !== t && 'function' != typeof t) || ((n = t), (t = void 0)),
          !1 === n && (n = Te),
          this.each(function () {
            S.event.remove(this, e, n, t);
          })
        );
      },
    });
  var ke = /<script|<style|<link/i,
    Ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Ne = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
  function je(e, t) {
    return (A(e, 'table') && A(11 !== t.nodeType ? t : t.firstChild, 'tr') && S(e).children('tbody')[0]) || e;
  }
  function De(e) {
    return (e.type = (null !== e.getAttribute('type')) + '/' + e.type), e;
  }
  function qe(e) {
    return 'true/' === (e.type || '').slice(0, 5) ? (e.type = e.type.slice(5)) : e.removeAttribute('type'), e;
  }
  function Le(e, t) {
    var n, r, i, o, a, s;
    if (1 === t.nodeType) {
      if (Y.hasData(e) && (s = Y.get(e).events)) for (i in (Y.remove(t, 'handle events'), s)) for (n = 0, r = s[i].length; n < r; n++) S.event.add(t, i, s[i][n]);
      Q.hasData(e) && ((o = Q.access(e)), (a = S.extend({}, o)), Q.set(t, a));
    }
  }
  function He(n, r, i, o) {
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
    if (h || (1 < f && 'string' == typeof d && !y.checkClone && Ae.test(d)))
      return n.each(function (e) {
        var t = n.eq(e);
        h && (r[0] = d.call(this, e, t.html())), He(t, r, i, o);
      });
    if (f && ((t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild), 1 === e.childNodes.length && (e = t), t || o)) {
      for (s = (a = S.map(ve(e, 'script'), De)).length; c < f; c++) (u = e), c !== p && ((u = S.clone(u, !0, !0)), s && S.merge(a, ve(u, 'script'))), i.call(n[c], u, c);
      if (s)
        for (l = a[a.length - 1].ownerDocument, S.map(a, qe), c = 0; c < s; c++)
          (u = a[c]),
            he.test(u.type || '') &&
              !Y.access(u, 'globalEval') &&
              S.contains(l, u) &&
              (u.src && 'module' !== (u.type || '').toLowerCase() ? S._evalUrl && !u.noModule && S._evalUrl(u.src, { nonce: u.nonce || u.getAttribute('nonce') }, l) : b(u.textContent.replace(Ne, ''), u, l));
    }
    return n;
  }
  function Oe(e, t, n) {
    for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || S.cleanData(ve(r)), r.parentNode && (n && ie(r) && ye(ve(r, 'script')), r.parentNode.removeChild(r));
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
      if (!(y.noCloneChecked || (1 !== e.nodeType && 11 !== e.nodeType) || S.isXMLDoc(e)))
        for (a = ve(c), r = 0, i = (o = ve(e)).length; r < i; r++)
          (s = o[r]), (u = a[r]), void 0, 'input' === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? (u.checked = s.checked) : ('input' !== l && 'textarea' !== l) || (u.defaultValue = s.defaultValue);
      if (t)
        if (n) for (o = o || ve(e), a = a || ve(c), r = 0, i = o.length; r < i; r++) Le(o[r], a[r]);
        else Le(e, c);
      return 0 < (a = ve(c, 'script')).length && ye(a, !f && ve(e, 'script')), c;
    },
    cleanData: function (e) {
      for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++)
        if (V(n)) {
          if ((t = n[Y.expando])) {
            if (t.events) for (r in t.events) i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
            n[Y.expando] = void 0;
          }
          n[Q.expando] && (n[Q.expando] = void 0);
        }
    },
  }),
    S.fn.extend({
      detach: function (e) {
        return Oe(this, e, !0);
      },
      remove: function (e) {
        return Oe(this, e);
      },
      text: function (e) {
        return $(
          this,
          function (e) {
            return void 0 === e
              ? S.text(this)
              : this.empty().each(function () {
                  (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || (this.textContent = e);
                });
          },
          null,
          e,
          arguments.length
        );
      },
      append: function () {
        return He(this, arguments, function (e) {
          (1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) || je(this, e).appendChild(e);
        });
      },
      prepend: function () {
        return He(this, arguments, function (e) {
          if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
            var t = je(this, e);
            t.insertBefore(e, t.firstChild);
          }
        });
      },
      before: function () {
        return He(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this);
        });
      },
      after: function () {
        return He(this, arguments, function (e) {
          this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
        });
      },
      empty: function () {
        for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (S.cleanData(ve(e, !1)), (e.textContent = ''));
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
            if ('string' == typeof e && !ke.test(e) && !ge[(de.exec(e) || ['', ''])[1].toLowerCase()]) {
              e = S.htmlPrefilter(e);
              try {
                for (; n < r; n++) 1 === (t = this[n] || {}).nodeType && (S.cleanData(ve(t, !1)), (t.innerHTML = e));
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
        return He(
          this,
          arguments,
          function (e) {
            var t = this.parentNode;
            S.inArray(this, n) < 0 && (S.cleanData(ve(this)), t && t.replaceChild(e, this));
          },
          n
        );
      },
    }),
    S.each({ appendTo: 'append', prependTo: 'prepend', insertBefore: 'before', insertAfter: 'after', replaceAll: 'replaceWith' }, function (e, a) {
      S.fn[e] = function (e) {
        for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++) (t = o === i ? this : this.clone(!0)), S(r[o])[a](t), u.apply(n, t.get());
        return this.pushStack(n);
      };
    });
  var Pe = new RegExp('^(' + ee + ')(?!px)[a-z%]+$', 'i'),
    Re = function (e) {
      var t = e.ownerDocument.defaultView;
      return (t && t.opener) || (t = C), t.getComputedStyle(e);
    },
    Me = function (e, t, n) {
      var r,
        i,
        o = {};
      for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i]);
      for (i in ((r = n.call(e)), t)) e.style[i] = o[i];
      return r;
    },
    Ie = new RegExp(ne.join('|'), 'i');
  function We(e, t, n) {
    var r,
      i,
      o,
      a,
      s = e.style;
    return (
      (n = n || Re(e)) &&
        ('' !== (a = n.getPropertyValue(t) || n[t]) || ie(e) || (a = S.style(e, t)),
        !y.pixelBoxStyles() && Pe.test(a) && Ie.test(t) && ((r = s.width), (i = s.minWidth), (o = s.maxWidth), (s.minWidth = s.maxWidth = s.width = a), (a = n.width), (s.width = r), (s.minWidth = i), (s.maxWidth = o))),
      void 0 !== a ? a + '' : a
    );
  }
  function Fe(e, t) {
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
        (u.style.cssText = 'position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0'),
          (l.style.cssText = 'position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%'),
          re.appendChild(u).appendChild(l);
        var e = C.getComputedStyle(l);
        (n = '1%' !== e.top), (s = 12 === t(e.marginLeft)), (l.style.right = '60%'), (o = 36 === t(e.right)), (r = 36 === t(e.width)), (l.style.position = 'absolute'), (i = 12 === t(l.offsetWidth / 3)), re.removeChild(u), (l = null);
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
      u = E.createElement('div'),
      l = E.createElement('div');
    l.style &&
      ((l.style.backgroundClip = 'content-box'),
      (l.cloneNode(!0).style.backgroundClip = ''),
      (y.clearCloneStyle = 'content-box' === l.style.backgroundClip),
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
              ((e = E.createElement('table')),
              (t = E.createElement('tr')),
              (n = E.createElement('div')),
              (e.style.cssText = 'position:absolute;left:-11111px;border-collapse:separate'),
              (t.style.cssText = 'border:1px solid'),
              (t.style.height = '1px'),
              (n.style.height = '9px'),
              (n.style.display = 'block'),
              re.appendChild(e).appendChild(t).appendChild(n),
              (r = C.getComputedStyle(t)),
              (a = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === t.offsetHeight),
              re.removeChild(e)),
            a
          );
        },
      }));
  })();
  var Be = ['Webkit', 'Moz', 'ms'],
    $e = E.createElement('div').style,
    _e = {};
  function ze(e) {
    var t = S.cssProps[e] || _e[e];
    return (
      t ||
      (e in $e
        ? e
        : (_e[e] =
            (function (e) {
              var t = e[0].toUpperCase() + e.slice(1),
                n = Be.length;
              while (n--) if ((e = Be[n] + t) in $e) return e;
            })(e) || e))
    );
  }
  var Ue = /^(none|table(?!-c[ea]).+)/,
    Xe = /^--/,
    Ve = { position: 'absolute', visibility: 'hidden', display: 'block' },
    Ge = { letterSpacing: '0', fontWeight: '400' };
  function Ye(e, t, n) {
    var r = te.exec(t);
    return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || 'px') : t;
  }
  function Qe(e, t, n, r, i, o) {
    var a = 'width' === t ? 1 : 0,
      s = 0,
      u = 0;
    if (n === (r ? 'border' : 'content')) return 0;
    for (; a < 4; a += 2)
      'margin' === n && (u += S.css(e, n + ne[a], !0, i)),
        r
          ? ('content' === n && (u -= S.css(e, 'padding' + ne[a], !0, i)), 'margin' !== n && (u -= S.css(e, 'border' + ne[a] + 'Width', !0, i)))
          : ((u += S.css(e, 'padding' + ne[a], !0, i)), 'padding' !== n ? (u += S.css(e, 'border' + ne[a] + 'Width', !0, i)) : (s += S.css(e, 'border' + ne[a] + 'Width', !0, i)));
    return !r && 0 <= o && (u += Math.max(0, Math.ceil(e['offset' + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5)) || 0), u;
  }
  function Je(e, t, n) {
    var r = Re(e),
      i = (!y.boxSizingReliable() || n) && 'border-box' === S.css(e, 'boxSizing', !1, r),
      o = i,
      a = We(e, t, r),
      s = 'offset' + t[0].toUpperCase() + t.slice(1);
    if (Pe.test(a)) {
      if (!n) return a;
      a = 'auto';
    }
    return (
      ((!y.boxSizingReliable() && i) || (!y.reliableTrDimensions() && A(e, 'tr')) || 'auto' === a || (!parseFloat(a) && 'inline' === S.css(e, 'display', !1, r))) &&
        e.getClientRects().length &&
        ((i = 'border-box' === S.css(e, 'boxSizing', !1, r)), (o = s in e) && (a = e[s])),
      (a = parseFloat(a) || 0) + Qe(e, t, n || (i ? 'border' : 'content'), o, r, a) + 'px'
    );
  }
  function Ke(e, t, n, r, i) {
    return new Ke.prototype.init(e, t, n, r, i);
  }
  S.extend({
    cssHooks: {
      opacity: {
        get: function (e, t) {
          if (t) {
            var n = We(e, 'opacity');
            return '' === n ? '1' : n;
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
          u = Xe.test(t),
          l = e.style;
        if ((u || (t = ze(s)), (a = S.cssHooks[t] || S.cssHooks[s]), void 0 === n)) return a && 'get' in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
        'string' === (o = typeof n) && (i = te.exec(n)) && i[1] && ((n = se(e, t, i)), (o = 'number')),
          null != n &&
            n == n &&
            ('number' !== o || u || (n += (i && i[3]) || (S.cssNumber[s] ? '' : 'px')),
            y.clearCloneStyle || '' !== n || 0 !== t.indexOf('background') || (l[t] = 'inherit'),
            (a && 'set' in a && void 0 === (n = a.set(e, n, r))) || (u ? l.setProperty(t, n) : (l[t] = n)));
      }
    },
    css: function (e, t, n, r) {
      var i,
        o,
        a,
        s = X(t);
      return (
        Xe.test(t) || (t = ze(s)),
        (a = S.cssHooks[t] || S.cssHooks[s]) && 'get' in a && (i = a.get(e, !0, n)),
        void 0 === i && (i = We(e, t, r)),
        'normal' === i && t in Ge && (i = Ge[t]),
        '' === n || n ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i) : i
      );
    },
  }),
    S.each(['height', 'width'], function (e, u) {
      S.cssHooks[u] = {
        get: function (e, t, n) {
          if (t)
            return !Ue.test(S.css(e, 'display')) || (e.getClientRects().length && e.getBoundingClientRect().width)
              ? Je(e, u, n)
              : Me(e, Ve, function () {
                  return Je(e, u, n);
                });
        },
        set: function (e, t, n) {
          var r,
            i = Re(e),
            o = !y.scrollboxSize() && 'absolute' === i.position,
            a = (o || n) && 'border-box' === S.css(e, 'boxSizing', !1, i),
            s = n ? Qe(e, u, n, a, i) : 0;
          return (
            a && o && (s -= Math.ceil(e['offset' + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - Qe(e, u, 'border', !1, i) - 0.5)),
            s && (r = te.exec(t)) && 'px' !== (r[3] || 'px') && ((e.style[u] = t), (t = S.css(e, u))),
            Ye(0, t, s)
          );
        },
      };
    }),
    (S.cssHooks.marginLeft = Fe(y.reliableMarginLeft, function (e, t) {
      if (t)
        return (
          (parseFloat(We(e, 'marginLeft')) ||
            e.getBoundingClientRect().left -
              Me(e, { marginLeft: 0 }, function () {
                return e.getBoundingClientRect().left;
              })) + 'px'
        );
    })),
    S.each({ margin: '', padding: '', border: 'Width' }, function (i, o) {
      (S.cssHooks[i + o] = {
        expand: function (e) {
          for (var t = 0, n = {}, r = 'string' == typeof e ? e.split(' ') : [e]; t < 4; t++) n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
          return n;
        },
      }),
        'margin' !== i && (S.cssHooks[i + o].set = Ye);
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
              for (r = Re(e), i = t.length; a < i; a++) o[t[a]] = S.css(e, t[a], !1, r);
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
    (((S.Tween = Ke).prototype = {
      constructor: Ke,
      init: function (e, t, n, r, i, o) {
        (this.elem = e), (this.prop = n), (this.easing = i || S.easing._default), (this.options = t), (this.start = this.now = this.cur()), (this.end = r), (this.unit = o || (S.cssNumber[n] ? '' : 'px'));
      },
      cur: function () {
        var e = Ke.propHooks[this.prop];
        return e && e.get ? e.get(this) : Ke.propHooks._default.get(this);
      },
      run: function (e) {
        var t,
          n = Ke.propHooks[this.prop];
        return (
          this.options.duration ? (this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration)) : (this.pos = t = e),
          (this.now = (this.end - this.start) * t + this.start),
          this.options.step && this.options.step.call(this.elem, this.now, this),
          n && n.set ? n.set(this) : Ke.propHooks._default.set(this),
          this
        );
      },
    }).init.prototype = Ke.prototype),
    ((Ke.propHooks = {
      _default: {
        get: function (e) {
          var t;
          return 1 !== e.elem.nodeType || (null != e.elem[e.prop] && null == e.elem.style[e.prop]) ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, '')) && 'auto' !== t ? t : 0;
        },
        set: function (e) {
          S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || (!S.cssHooks[e.prop] && null == e.elem.style[ze(e.prop)]) ? (e.elem[e.prop] = e.now) : S.style(e.elem, e.prop, e.now + e.unit);
        },
      },
    }).scrollTop = Ke.propHooks.scrollLeft =
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
      _default: 'swing',
    }),
    (S.fx = Ke.prototype.init),
    (S.fx.step = {});
  var Ze,
    et,
    tt,
    nt,
    rt = /^(?:toggle|show|hide)$/,
    it = /queueHooks$/;
  function ot() {
    et && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(ot) : C.setTimeout(ot, S.fx.interval), S.fx.tick());
  }
  function at() {
    return (
      C.setTimeout(function () {
        Ze = void 0;
      }),
      (Ze = Date.now())
    );
  }
  function st(e, t) {
    var n,
      r = 0,
      i = { height: e };
    for (t = t ? 1 : 0; r < 4; r += 2 - t) i['margin' + (n = ne[r])] = i['padding' + n] = e;
    return t && (i.opacity = i.width = e), i;
  }
  function ut(e, t, n) {
    for (var r, i = (lt.tweeners[t] || []).concat(lt.tweeners['*']), o = 0, a = i.length; o < a; o++) if ((r = i[o].call(n, t, e))) return r;
  }
  function lt(o, e, t) {
    var n,
      a,
      r = 0,
      i = lt.prefilters.length,
      s = S.Deferred().always(function () {
        delete u.elem;
      }),
      u = function () {
        if (a) return !1;
        for (var e = Ze || at(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++) l.tweens[r].run(n);
        return s.notifyWith(o, [l, n, t]), n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l]), !1);
      },
      l = s.promise({
        elem: o,
        props: S.extend({}, e),
        opts: S.extend(!0, { specialEasing: {}, easing: S.easing._default }, t),
        originalProperties: e,
        originalOptions: t,
        startTime: Ze || at(),
        duration: t.duration,
        tweens: [],
        createTween: function (e, t) {
          var n = S.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
          return l.tweens.push(n), n;
        },
        stop: function (e) {
          var t = 0,
            n = e ? l.tweens.length : 0;
          if (a) return this;
          for (a = !0; t < n; t++) l.tweens[t].run(1);
          return e ? (s.notifyWith(o, [l, 1, 0]), s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]), this;
        },
      }),
      c = l.props;
    for (
      !(function (e, t) {
        var n, r, i, o, a;
        for (n in e)
          if (((i = t[(r = X(n))]), (o = e[n]), Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])), n !== r && ((e[r] = o), delete e[n]), (a = S.cssHooks[r]) && ('expand' in a)))
            for (n in ((o = a.expand(o)), delete e[r], o)) (n in e) || ((e[n] = o[n]), (t[n] = i));
          else t[r] = i;
      })(c, l.opts.specialEasing);
      r < i;
      r++
    )
      if ((n = lt.prefilters[r].call(l, o, c, l.opts))) return m(n.stop) && (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)), n;
    return (
      S.map(c, ut, l), m(l.opts.start) && l.opts.start.call(o, l), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always), S.fx.timer(S.extend(u, { elem: o, anim: l, queue: l.opts.queue })), l
    );
  }
  (S.Animation = S.extend(lt, {
    tweeners: {
      '*': [
        function (e, t) {
          var n = this.createTween(e, t);
          return se(n.elem, e, te.exec(t), n), n;
        },
      ],
    },
    tweener: function (e, t) {
      m(e) ? ((t = e), (e = ['*'])) : (e = e.match(P));
      for (var n, r = 0, i = e.length; r < i; r++) (n = e[r]), (lt.tweeners[n] = lt.tweeners[n] || []), lt.tweeners[n].unshift(t);
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
          f = 'width' in t || 'height' in t,
          p = this,
          d = {},
          h = e.style,
          g = e.nodeType && ae(e),
          v = Y.get(e, 'fxshow');
        for (r in (n.queue ||
          (null == (a = S._queueHooks(e, 'fx')).unqueued &&
            ((a.unqueued = 0),
            (s = a.empty.fire),
            (a.empty.fire = function () {
              a.unqueued || s();
            })),
          a.unqueued++,
          p.always(function () {
            p.always(function () {
              a.unqueued--, S.queue(e, 'fx').length || a.empty.fire();
            });
          })),
        t))
          if (((i = t[r]), rt.test(i))) {
            if ((delete t[r], (o = o || 'toggle' === i), i === (g ? 'hide' : 'show'))) {
              if ('show' !== i || !v || void 0 === v[r]) continue;
              g = !0;
            }
            d[r] = (v && v[r]) || S.style(e, r);
          }
        if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
          for (r in (f &&
            1 === e.nodeType &&
            ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
            null == (l = v && v.display) && (l = Y.get(e, 'display')),
            'none' === (c = S.css(e, 'display')) && (l ? (c = l) : (le([e], !0), (l = e.style.display || l), (c = S.css(e, 'display')), le([e]))),
            ('inline' === c || ('inline-block' === c && null != l)) &&
              'none' === S.css(e, 'float') &&
              (u ||
                (p.done(function () {
                  h.display = l;
                }),
                null == l && ((c = h.display), (l = 'none' === c ? '' : c))),
              (h.display = 'inline-block'))),
          n.overflow &&
            ((h.overflow = 'hidden'),
            p.always(function () {
              (h.overflow = n.overflow[0]), (h.overflowX = n.overflow[1]), (h.overflowY = n.overflow[2]);
            })),
          (u = !1),
          d))
            u ||
              (v ? 'hidden' in v && (g = v.hidden) : (v = Y.access(e, 'fxshow', { display: l })),
              o && (v.hidden = !g),
              g && le([e], !0),
              p.done(function () {
                for (r in (g || le([e]), Y.remove(e, 'fxshow'), d)) S.style(e, r, d[r]);
              })),
              (u = ut(g ? v[r] : 0, r, p)),
              r in v || ((v[r] = u.start), g && ((u.end = u.start), (u.start = 0)));
      },
    ],
    prefilter: function (e, t) {
      t ? lt.prefilters.unshift(e) : lt.prefilters.push(e);
    },
  })),
    (S.speed = function (e, t, n) {
      var r = e && 'object' == typeof e ? S.extend({}, e) : { complete: n || (!n && t) || (m(e) && e), duration: e, easing: (n && t) || (t && !m(t) && t) };
      return (
        S.fx.off ? (r.duration = 0) : 'number' != typeof r.duration && (r.duration in S.fx.speeds ? (r.duration = S.fx.speeds[r.duration]) : (r.duration = S.fx.speeds._default)),
        (null != r.queue && !0 !== r.queue) || (r.queue = 'fx'),
        (r.old = r.complete),
        (r.complete = function () {
          m(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue);
        }),
        r
      );
    }),
    S.fn.extend({
      fadeTo: function (e, t, n, r) {
        return this.filter(ae).css('opacity', 0).show().end().animate({ opacity: t }, e, n, r);
      },
      animate: function (t, e, n, r) {
        var i = S.isEmptyObject(t),
          o = S.speed(e, n, r),
          a = function () {
            var e = lt(this, S.extend({}, t), o);
            (i || Y.get(this, 'finish')) && e.stop(!0);
          };
        return (a.finish = a), i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
      },
      stop: function (i, e, o) {
        var a = function (e) {
          var t = e.stop;
          delete e.stop, t(o);
        };
        return (
          'string' != typeof i && ((o = e), (e = i), (i = void 0)),
          e && this.queue(i || 'fx', []),
          this.each(function () {
            var e = !0,
              t = null != i && i + 'queueHooks',
              n = S.timers,
              r = Y.get(this);
            if (t) r[t] && r[t].stop && a(r[t]);
            else for (t in r) r[t] && r[t].stop && it.test(t) && a(r[t]);
            for (t = n.length; t--; ) n[t].elem !== this || (null != i && n[t].queue !== i) || (n[t].anim.stop(o), (e = !1), n.splice(t, 1));
            (!e && o) || S.dequeue(this, i);
          })
        );
      },
      finish: function (a) {
        return (
          !1 !== a && (a = a || 'fx'),
          this.each(function () {
            var e,
              t = Y.get(this),
              n = t[a + 'queue'],
              r = t[a + 'queueHooks'],
              i = S.timers,
              o = n ? n.length : 0;
            for (t.finish = !0, S.queue(this, a, []), r && r.stop && r.stop.call(this, !0), e = i.length; e--; ) i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0), i.splice(e, 1));
            for (e = 0; e < o; e++) n[e] && n[e].finish && n[e].finish.call(this);
            delete t.finish;
          })
        );
      },
    }),
    S.each(['toggle', 'show', 'hide'], function (e, r) {
      var i = S.fn[r];
      S.fn[r] = function (e, t, n) {
        return null == e || 'boolean' == typeof e ? i.apply(this, arguments) : this.animate(st(r, !0), e, t, n);
      };
    }),
    S.each({ slideDown: st('show'), slideUp: st('hide'), slideToggle: st('toggle'), fadeIn: { opacity: 'show' }, fadeOut: { opacity: 'hide' }, fadeToggle: { opacity: 'toggle' } }, function (e, r) {
      S.fn[e] = function (e, t, n) {
        return this.animate(r, e, t, n);
      };
    }),
    (S.timers = []),
    (S.fx.tick = function () {
      var e,
        t = 0,
        n = S.timers;
      for (Ze = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);
      n.length || S.fx.stop(), (Ze = void 0);
    }),
    (S.fx.timer = function (e) {
      S.timers.push(e), S.fx.start();
    }),
    (S.fx.interval = 13),
    (S.fx.start = function () {
      et || ((et = !0), ot());
    }),
    (S.fx.stop = function () {
      et = null;
    }),
    (S.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (S.fn.delay = function (r, e) {
      return (
        (r = (S.fx && S.fx.speeds[r]) || r),
        (e = e || 'fx'),
        this.queue(e, function (e, t) {
          var n = C.setTimeout(e, r);
          t.stop = function () {
            C.clearTimeout(n);
          };
        })
      );
    }),
    (tt = E.createElement('input')),
    (nt = E.createElement('select').appendChild(E.createElement('option'))),
    (tt.type = 'checkbox'),
    (y.checkOn = '' !== tt.value),
    (y.optSelected = nt.selected),
    ((tt = E.createElement('input')).value = 't'),
    (tt.type = 'radio'),
    (y.radioValue = 't' === tt.value);
  var ct,
    ft = S.expr.attrHandle;
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
          return 'undefined' == typeof e.getAttribute
            ? S.prop(e, t, n)
            : ((1 === o && S.isXMLDoc(e)) || (i = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? ct : void 0)),
              void 0 !== n
                ? null === n
                  ? void S.removeAttr(e, t)
                  : i && 'set' in i && void 0 !== (r = i.set(e, n, t))
                  ? r
                  : (e.setAttribute(t, n + ''), n)
                : i && 'get' in i && null !== (r = i.get(e, t))
                ? r
                : null == (r = S.find.attr(e, t))
                ? void 0
                : r);
      },
      attrHooks: {
        type: {
          set: function (e, t) {
            if (!y.radioValue && 'radio' === t && A(e, 'input')) {
              var n = e.value;
              return e.setAttribute('type', t), n && (e.value = n), t;
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
    (ct = {
      set: function (e, t, n) {
        return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n;
      },
    }),
    S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
      var a = ft[t] || S.find.attr;
      ft[t] = function (e, t, n) {
        var r,
          i,
          o = t.toLowerCase();
        return n || ((i = ft[o]), (ft[o] = r), (r = null != a(e, t, n) ? o : null), (ft[o] = i)), r;
      };
    });
  var pt = /^(?:input|select|textarea|button)$/i,
    dt = /^(?:a|area)$/i;
  function ht(e) {
    return (e.match(P) || []).join(' ');
  }
  function gt(e) {
    return (e.getAttribute && e.getAttribute('class')) || '';
  }
  function vt(e) {
    return Array.isArray(e) ? e : ('string' == typeof e && e.match(P)) || [];
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
          return (1 === o && S.isXMLDoc(e)) || ((t = S.propFix[t] || t), (i = S.propHooks[t])), void 0 !== n ? (i && 'set' in i && void 0 !== (r = i.set(e, n, t)) ? r : (e[t] = n)) : i && 'get' in i && null !== (r = i.get(e, t)) ? r : e[t];
      },
      propHooks: {
        tabIndex: {
          get: function (e) {
            var t = S.find.attr(e, 'tabindex');
            return t ? parseInt(t, 10) : pt.test(e.nodeName) || (dt.test(e.nodeName) && e.href) ? 0 : -1;
          },
        },
      },
      propFix: { for: 'htmlFor', class: 'className' },
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
    S.each(['tabIndex', 'readOnly', 'maxLength', 'cellSpacing', 'cellPadding', 'rowSpan', 'colSpan', 'useMap', 'frameBorder', 'contentEditable'], function () {
      S.propFix[this.toLowerCase()] = this;
    }),
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
            S(this).addClass(t.call(this, e, gt(this)));
          });
        if ((e = vt(t)).length)
          while ((n = this[u++]))
            if (((i = gt(n)), (r = 1 === n.nodeType && ' ' + ht(i) + ' '))) {
              a = 0;
              while ((o = e[a++])) r.indexOf(' ' + o + ' ') < 0 && (r += o + ' ');
              i !== (s = ht(r)) && n.setAttribute('class', s);
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
            S(this).removeClass(t.call(this, e, gt(this)));
          });
        if (!arguments.length) return this.attr('class', '');
        if ((e = vt(t)).length)
          while ((n = this[u++]))
            if (((i = gt(n)), (r = 1 === n.nodeType && ' ' + ht(i) + ' '))) {
              a = 0;
              while ((o = e[a++])) while (-1 < r.indexOf(' ' + o + ' ')) r = r.replace(' ' + o + ' ', ' ');
              i !== (s = ht(r)) && n.setAttribute('class', s);
            }
        return this;
      },
      toggleClass: function (i, t) {
        var o = typeof i,
          a = 'string' === o || Array.isArray(i);
        return 'boolean' == typeof t && a
          ? t
            ? this.addClass(i)
            : this.removeClass(i)
          : m(i)
          ? this.each(function (e) {
              S(this).toggleClass(i.call(this, e, gt(this), t), t);
            })
          : this.each(function () {
              var e, t, n, r;
              if (a) {
                (t = 0), (n = S(this)), (r = vt(i));
                while ((e = r[t++])) n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
              } else (void 0 !== i && 'boolean' !== o) || ((e = gt(this)) && Y.set(this, '__className__', e), this.setAttribute && this.setAttribute('class', e || !1 === i ? '' : Y.get(this, '__className__') || ''));
            });
      },
      hasClass: function (e) {
        var t,
          n,
          r = 0;
        t = ' ' + e + ' ';
        while ((n = this[r++])) if (1 === n.nodeType && -1 < (' ' + ht(gt(n)) + ' ').indexOf(t)) return !0;
        return !1;
      },
    });
  var yt = /\r/g;
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
                ? (t = '')
                : 'number' == typeof t
                ? (t += '')
                : Array.isArray(t) &&
                  (t = S.map(t, function (e) {
                    return null == e ? '' : e + '';
                  })),
              ((r = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && 'set' in r && void 0 !== r.set(this, t, 'value')) || (this.value = t));
          }))
        : t
        ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) && 'get' in r && void 0 !== (e = r.get(t, 'value'))
          ? e
          : 'string' == typeof (e = t.value)
          ? e.replace(yt, '')
          : null == e
          ? ''
          : e
        : void 0;
    },
  }),
    S.extend({
      valHooks: {
        option: {
          get: function (e) {
            var t = S.find.attr(e, 'value');
            return null != t ? t : ht(S.text(e));
          },
        },
        select: {
          get: function (e) {
            var t,
              n,
              r,
              i = e.options,
              o = e.selectedIndex,
              a = 'select-one' === e.type,
              s = a ? null : [],
              u = a ? o + 1 : i.length;
            for (r = o < 0 ? u : a ? o : 0; r < u; r++)
              if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, 'optgroup'))) {
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
            while (a--) ((r = i[a]).selected = -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
            return n || (e.selectedIndex = -1), o;
          },
        },
      },
    }),
    S.each(['radio', 'checkbox'], function () {
      (S.valHooks[this] = {
        set: function (e, t) {
          if (Array.isArray(t)) return (e.checked = -1 < S.inArray(S(e).val(), t));
        },
      }),
        y.checkOn ||
          (S.valHooks[this].get = function (e) {
            return null === e.getAttribute('value') ? 'on' : e.value;
          });
    }),
    (y.focusin = 'onfocusin' in C);
  var mt = /^(?:focusinfocus|focusoutblur)$/,
    xt = function (e) {
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
        d = v.call(e, 'type') ? e.type : e,
        h = v.call(e, 'namespace') ? e.namespace.split('.') : [];
      if (
        ((o = f = a = n = n || E),
        3 !== n.nodeType &&
          8 !== n.nodeType &&
          !mt.test(d + S.event.triggered) &&
          (-1 < d.indexOf('.') && ((d = (h = d.split('.')).shift()), h.sort()),
          (u = d.indexOf(':') < 0 && 'on' + d),
          ((e = e[S.expando] ? e : new S.Event(d, 'object' == typeof e && e)).isTrigger = r ? 2 : 3),
          (e.namespace = h.join('.')),
          (e.rnamespace = e.namespace ? new RegExp('(^|\\.)' + h.join('\\.(?:.*\\.|)') + '(\\.|$)') : null),
          (e.result = void 0),
          e.target || (e.target = n),
          (t = null == t ? [e] : S.makeArray(t, [e])),
          (c = S.event.special[d] || {}),
          r || !c.trigger || !1 !== c.trigger.apply(n, t)))
      ) {
        if (!r && !c.noBubble && !x(n)) {
          for (s = c.delegateType || d, mt.test(s + d) || (o = o.parentNode); o; o = o.parentNode) p.push(o), (a = o);
          a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C);
        }
        i = 0;
        while ((o = p[i++]) && !e.isPropagationStopped())
          (f = o),
            (e.type = 1 < i ? s : c.bindType || d),
            (l = (Y.get(o, 'events') || Object.create(null))[e.type] && Y.get(o, 'handle')) && l.apply(o, t),
            (l = u && o[u]) && l.apply && V(o) && ((e.result = l.apply(o, t)), !1 === e.result && e.preventDefault());
        return (
          (e.type = d),
          r ||
            e.isDefaultPrevented() ||
            (c._default && !1 !== c._default.apply(p.pop(), t)) ||
            !V(n) ||
            (u &&
              m(n[d]) &&
              !x(n) &&
              ((a = n[u]) && (n[u] = null), (S.event.triggered = d), e.isPropagationStopped() && f.addEventListener(d, xt), n[d](), e.isPropagationStopped() && f.removeEventListener(d, xt), (S.event.triggered = void 0), a && (n[u] = a))),
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
      S.each({ focus: 'focusin', blur: 'focusout' }, function (n, r) {
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
            t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0), Y.remove(e, r));
          },
        };
      });
  var bt = C.location,
    wt = { guid: Date.now() },
    Tt = /\?/;
  S.parseXML = function (e) {
    var t, n;
    if (!e || 'string' != typeof e) return null;
    try {
      t = new C.DOMParser().parseFromString(e, 'text/xml');
    } catch (e) {}
    return (
      (n = t && t.getElementsByTagName('parsererror')[0]),
      (t && !n) ||
        S.error(
          'Invalid XML: ' +
            (n
              ? S.map(n.childNodes, function (e) {
                  return e.textContent;
                }).join('\n')
              : e)
        ),
      t
    );
  };
  var Ct = /\[\]$/,
    Et = /\r?\n/g,
    St = /^(?:submit|button|image|reset|file)$/i,
    kt = /^(?:input|select|textarea|keygen)/i;
  function At(n, e, r, i) {
    var t;
    if (Array.isArray(e))
      S.each(e, function (e, t) {
        r || Ct.test(n) ? i(n, t) : At(n + '[' + ('object' == typeof t && null != t ? e : '') + ']', t, r, i);
      });
    else if (r || 'object' !== w(e)) i(n, e);
    else for (t in e) At(n + '[' + t + ']', e[t], r, i);
  }
  (S.param = function (e, t) {
    var n,
      r = [],
      i = function (e, t) {
        var n = m(t) ? t() : t;
        r[r.length] = encodeURIComponent(e) + '=' + encodeURIComponent(null == n ? '' : n);
      };
    if (null == e) return '';
    if (Array.isArray(e) || (e.jquery && !S.isPlainObject(e)))
      S.each(e, function () {
        i(this.name, this.value);
      });
    else for (n in e) At(n, e[n], t, i);
    return r.join('&');
  }),
    S.fn.extend({
      serialize: function () {
        return S.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var e = S.prop(this, 'elements');
          return e ? S.makeArray(e) : this;
        })
          .filter(function () {
            var e = this.type;
            return this.name && !S(this).is(':disabled') && kt.test(this.nodeName) && !St.test(e) && (this.checked || !pe.test(e));
          })
          .map(function (e, t) {
            var n = S(this).val();
            return null == n
              ? null
              : Array.isArray(n)
              ? S.map(n, function (e) {
                  return { name: t.name, value: e.replace(Et, '\r\n') };
                })
              : { name: t.name, value: n.replace(Et, '\r\n') };
          })
          .get();
      },
    });
  var Nt = /%20/g,
    jt = /#.*$/,
    Dt = /([?&])_=[^&]*/,
    qt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    Lt = /^(?:GET|HEAD)$/,
    Ht = /^\/\//,
    Ot = {},
    Pt = {},
    Rt = '*/'.concat('*'),
    Mt = E.createElement('a');
  function It(o) {
    return function (e, t) {
      'string' != typeof e && ((t = e), (e = '*'));
      var n,
        r = 0,
        i = e.toLowerCase().match(P) || [];
      if (m(t)) while ((n = i[r++])) '+' === n[0] ? ((n = n.slice(1) || '*'), (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t);
    };
  }
  function Wt(t, i, o, a) {
    var s = {},
      u = t === Pt;
    function l(e) {
      var r;
      return (
        (s[e] = !0),
        S.each(t[e] || [], function (e, t) {
          var n = t(i, o, a);
          return 'string' != typeof n || u || s[n] ? (u ? !(r = n) : void 0) : (i.dataTypes.unshift(n), l(n), !1);
        }),
        r
      );
    }
    return l(i.dataTypes[0]) || (!s['*'] && l('*'));
  }
  function Ft(e, t) {
    var n,
      r,
      i = S.ajaxSettings.flatOptions || {};
    for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
    return r && S.extend(!0, e, r), e;
  }
  (Mt.href = bt.href),
    S.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: bt.href,
        type: 'GET',
        isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),
        global: !0,
        processData: !0,
        async: !0,
        contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
        accepts: { '*': Rt, text: 'text/plain', html: 'text/html', xml: 'application/xml, text/xml', json: 'application/json, text/javascript' },
        contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
        responseFields: { xml: 'responseXML', text: 'responseText', json: 'responseJSON' },
        converters: { '* text': String, 'text html': !0, 'text json': JSON.parse, 'text xml': S.parseXML },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (e, t) {
        return t ? Ft(Ft(e, S.ajaxSettings), t) : Ft(S.ajaxSettings, e);
      },
      ajaxPrefilter: It(Ot),
      ajaxTransport: It(Pt),
      ajax: function (e, t) {
        'object' == typeof e && ((t = e), (e = void 0)), (t = t || {});
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
          b = S.Callbacks('once memory'),
          w = v.statusCode || {},
          a = {},
          s = {},
          u = 'canceled',
          T = {
            readyState: 0,
            getResponseHeader: function (e) {
              var t;
              if (h) {
                if (!n) {
                  n = {};
                  while ((t = qt.exec(p))) n[t[1].toLowerCase() + ' '] = (n[t[1].toLowerCase() + ' '] || []).concat(t[2]);
                }
                t = n[e.toLowerCase() + ' '];
              }
              return null == t ? null : t.join(', ');
            },
            getAllResponseHeaders: function () {
              return h ? p : null;
            },
            setRequestHeader: function (e, t) {
              return null == h && ((e = s[e.toLowerCase()] = s[e.toLowerCase()] || e), (a[e] = t)), this;
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
          (v.url = ((e || v.url || bt.href) + '').replace(Ht, bt.protocol + '//')),
          (v.type = t.method || t.type || v.method || v.type),
          (v.dataTypes = (v.dataType || '*').toLowerCase().match(P) || ['']),
          null == v.crossDomain)
        ) {
          r = E.createElement('a');
          try {
            (r.href = v.url), (r.href = r.href), (v.crossDomain = Mt.protocol + '//' + Mt.host != r.protocol + '//' + r.host);
          } catch (e) {
            v.crossDomain = !0;
          }
        }
        if ((v.data && v.processData && 'string' != typeof v.data && (v.data = S.param(v.data, v.traditional)), Wt(Ot, v, t, T), h)) return T;
        for (i in ((g = S.event && v.global) && 0 == S.active++ && S.event.trigger('ajaxStart'),
        (v.type = v.type.toUpperCase()),
        (v.hasContent = !Lt.test(v.type)),
        (f = v.url.replace(jt, '')),
        v.hasContent
          ? v.data && v.processData && 0 === (v.contentType || '').indexOf('application/x-www-form-urlencoded') && (v.data = v.data.replace(Nt, '+'))
          : ((o = v.url.slice(f.length)),
            v.data && (v.processData || 'string' == typeof v.data) && ((f += (Tt.test(f) ? '&' : '?') + v.data), delete v.data),
            !1 === v.cache && ((f = f.replace(Dt, '$1')), (o = (Tt.test(f) ? '&' : '?') + '_=' + wt.guid++ + o)),
            (v.url = f + o)),
        v.ifModified && (S.lastModified[f] && T.setRequestHeader('If-Modified-Since', S.lastModified[f]), S.etag[f] && T.setRequestHeader('If-None-Match', S.etag[f])),
        ((v.data && v.hasContent && !1 !== v.contentType) || t.contentType) && T.setRequestHeader('Content-Type', v.contentType),
        T.setRequestHeader('Accept', v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ('*' !== v.dataTypes[0] ? ', ' + Rt + '; q=0.01' : '') : v.accepts['*']),
        v.headers))
          T.setRequestHeader(i, v.headers[i]);
        if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h)) return T.abort();
        if (((u = 'abort'), b.add(v.complete), T.done(v.success), T.fail(v.error), (c = Wt(Pt, v, t, T)))) {
          if (((T.readyState = 1), g && m.trigger('ajaxSend', [T, v]), h)) return T;
          v.async &&
            0 < v.timeout &&
            (d = C.setTimeout(function () {
              T.abort('timeout');
            }, v.timeout));
          try {
            (h = !1), c.send(a, l);
          } catch (e) {
            if (h) throw e;
            l(-1, e);
          }
        } else l(-1, 'No Transport');
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
            (p = r || ''),
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
                while ('*' === u[0]) u.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader('Content-Type'));
                if (r)
                  for (i in s)
                    if (s[i] && s[i].test(r)) {
                      u.unshift(i);
                      break;
                    }
                if (u[0] in n) o = u[0];
                else {
                  for (i in n) {
                    if (!u[0] || e.converters[i + ' ' + u[0]]) {
                      o = i;
                      break;
                    }
                    a || (a = i);
                  }
                  o = o || a;
                }
                if (o) return o !== u[0] && u.unshift(o), n[o];
              })(v, T, n)),
            !i && -1 < S.inArray('script', v.dataTypes) && S.inArray('json', v.dataTypes) < 0 && (v.converters['text script'] = function () {}),
            (s = (function (e, t, n, r) {
              var i,
                o,
                a,
                s,
                u,
                l = {},
                c = e.dataTypes.slice();
              if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a];
              o = c.shift();
              while (o)
                if ((e.responseFields[o] && (n[e.responseFields[o]] = t), !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), (u = o), (o = c.shift())))
                  if ('*' === o) o = u;
                  else if ('*' !== u && u !== o) {
                    if (!(a = l[u + ' ' + o] || l['* ' + o]))
                      for (i in l)
                        if ((s = i.split(' '))[1] === o && (a = l[u + ' ' + s[0]] || l['* ' + s[0]])) {
                          !0 === a ? (a = l[i]) : !0 !== l[i] && ((o = s[0]), c.unshift(s[1]));
                          break;
                        }
                    if (!0 !== a)
                      if (a && e['throws']) t = a(t);
                      else
                        try {
                          t = a(t);
                        } catch (e) {
                          return { state: 'parsererror', error: a ? e : 'No conversion from ' + u + ' to ' + o };
                        }
                  }
              return { state: 'success', data: t };
            })(v, s, T, i)),
            i
              ? (v.ifModified && ((u = T.getResponseHeader('Last-Modified')) && (S.lastModified[f] = u), (u = T.getResponseHeader('etag')) && (S.etag[f] = u)),
                204 === e || 'HEAD' === v.type ? (l = 'nocontent') : 304 === e ? (l = 'notmodified') : ((l = s.state), (o = s.data), (i = !(a = s.error))))
              : ((a = l), (!e && l) || ((l = 'error'), e < 0 && (e = 0))),
            (T.status = e),
            (T.statusText = (t || l) + ''),
            i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]),
            T.statusCode(w),
            (w = void 0),
            g && m.trigger(i ? 'ajaxSuccess' : 'ajaxError', [T, v, i ? o : a]),
            b.fireWith(y, [T, l]),
            g && (m.trigger('ajaxComplete', [T, v]), --S.active || S.event.trigger('ajaxStop')));
        }
        return T;
      },
      getJSON: function (e, t, n) {
        return S.get(e, t, n, 'json');
      },
      getScript: function (e, t) {
        return S.get(e, void 0, t, 'script');
      },
    }),
    S.each(['get', 'post'], function (e, i) {
      S[i] = function (e, t, n, r) {
        return m(t) && ((r = r || n), (n = t), (t = void 0)), S.ajax(S.extend({ url: e, type: i, dataType: r, data: t, success: n }, S.isPlainObject(e) && e));
      };
    }),
    S.ajaxPrefilter(function (e) {
      var t;
      for (t in e.headers) 'content-type' === t.toLowerCase() && (e.contentType = e.headers[t] || '');
    }),
    (S._evalUrl = function (e, t, n) {
      return S.ajax({
        url: e,
        type: 'GET',
        dataType: 'script',
        cache: !0,
        async: !1,
        global: !1,
        converters: { 'text script': function () {} },
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
            .not('body')
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
  var Bt = { 0: 200, 1223: 204 },
    $t = S.ajaxSettings.xhr();
  (y.cors = !!$t && 'withCredentials' in $t),
    (y.ajax = $t = !!$t),
    S.ajaxTransport(function (i) {
      var o, a;
      if (y.cors || ($t && !i.crossDomain))
        return {
          send: function (e, t) {
            var n,
              r = i.xhr();
            if ((r.open(i.type, i.url, i.async, i.username, i.password), i.xhrFields)) for (n in i.xhrFields) r[n] = i.xhrFields[n];
            for (n in (i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType), i.crossDomain || e['X-Requested-With'] || (e['X-Requested-With'] = 'XMLHttpRequest'), e)) r.setRequestHeader(n, e[n]);
            (o = function (e) {
              return function () {
                o &&
                  ((o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null),
                  'abort' === e
                    ? r.abort()
                    : 'error' === e
                    ? 'number' != typeof r.status
                      ? t(0, 'error')
                      : t(r.status, r.statusText)
                    : t(Bt[r.status] || r.status, r.statusText, 'text' !== (r.responseType || 'text') || 'string' != typeof r.responseText ? { binary: r.response } : { text: r.responseText }, r.getAllResponseHeaders()));
              };
            }),
              (r.onload = o()),
              (a = r.onerror = r.ontimeout = o('error')),
              void 0 !== r.onabort
                ? (r.onabort = a)
                : (r.onreadystatechange = function () {
                    4 === r.readyState &&
                      C.setTimeout(function () {
                        o && a();
                      });
                  }),
              (o = o('abort'));
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
      accepts: { script: 'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript' },
      contents: { script: /\b(?:java|ecma)script\b/ },
      converters: {
        'text script': function (e) {
          return S.globalEval(e), e;
        },
      },
    }),
    S.ajaxPrefilter('script', function (e) {
      void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = 'GET');
    }),
    S.ajaxTransport('script', function (n) {
      var r, i;
      if (n.crossDomain || n.scriptAttrs)
        return {
          send: function (e, t) {
            (r = S('<script>')
              .attr(n.scriptAttrs || {})
              .prop({ charset: n.scriptCharset, src: n.url })
              .on(
                'load error',
                (i = function (e) {
                  r.remove(), (i = null), e && t('error' === e.type ? 404 : 200, e.type);
                })
              )),
              E.head.appendChild(r[0]);
          },
          abort: function () {
            i && i();
          },
        };
    });
  var _t,
    zt = [],
    Ut = /(=)\?(?=&|$)|\?\?/;
  S.ajaxSetup({
    jsonp: 'callback',
    jsonpCallback: function () {
      var e = zt.pop() || S.expando + '_' + wt.guid++;
      return (this[e] = !0), e;
    },
  }),
    S.ajaxPrefilter('json jsonp', function (e, t, n) {
      var r,
        i,
        o,
        a = !1 !== e.jsonp && (Ut.test(e.url) ? 'url' : 'string' == typeof e.data && 0 === (e.contentType || '').indexOf('application/x-www-form-urlencoded') && Ut.test(e.data) && 'data');
      if (a || 'jsonp' === e.dataTypes[0])
        return (
          (r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
          a ? (e[a] = e[a].replace(Ut, '$1' + r)) : !1 !== e.jsonp && (e.url += (Tt.test(e.url) ? '&' : '?') + e.jsonp + '=' + r),
          (e.converters['script json'] = function () {
            return o || S.error(r + ' was not called'), o[0];
          }),
          (e.dataTypes[0] = 'json'),
          (i = C[r]),
          (C[r] = function () {
            o = arguments;
          }),
          n.always(function () {
            void 0 === i ? S(C).removeProp(r) : (C[r] = i), e[r] && ((e.jsonpCallback = t.jsonpCallback), zt.push(r)), o && m(i) && i(o[0]), (o = i = void 0);
          }),
          'script'
        );
    }),
    (y.createHTMLDocument = (((_t = E.implementation.createHTMLDocument('').body).innerHTML = '<form></form><form></form>'), 2 === _t.childNodes.length)),
    (S.parseHTML = function (e, t, n) {
      return 'string' != typeof e
        ? []
        : ('boolean' == typeof t && ((n = t), (t = !1)),
          t || (y.createHTMLDocument ? (((r = (t = E.implementation.createHTMLDocument('')).createElement('base')).href = E.location.href), t.head.appendChild(r)) : (t = E)),
          (o = !n && []),
          (i = N.exec(e)) ? [t.createElement(i[1])] : ((i = xe([e], t, o)), o && o.length && S(o).remove(), S.merge([], i.childNodes)));
      var r, i, o;
    }),
    (S.fn.load = function (e, t, n) {
      var r,
        i,
        o,
        a = this,
        s = e.indexOf(' ');
      return (
        -1 < s && ((r = ht(e.slice(s))), (e = e.slice(0, s))),
        m(t) ? ((n = t), (t = void 0)) : t && 'object' == typeof t && (i = 'POST'),
        0 < a.length &&
          S.ajax({ url: e, type: i || 'GET', dataType: 'html', data: t })
            .done(function (e) {
              (o = arguments), a.html(r ? S('<div>').append(S.parseHTML(e)).find(r) : e);
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
          l = S.css(e, 'position'),
          c = S(e),
          f = {};
        'static' === l && (e.style.position = 'relative'),
          (s = c.offset()),
          (o = S.css(e, 'top')),
          (u = S.css(e, 'left')),
          ('absolute' === l || 'fixed' === l) && -1 < (o + u).indexOf('auto') ? ((a = (r = c.position()).top), (i = r.left)) : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
          m(t) && (t = t.call(e, n, S.extend({}, s))),
          null != t.top && (f.top = t.top - s.top + a),
          null != t.left && (f.left = t.left - s.left + i),
          'using' in t ? t.using.call(e, f) : c.css(f);
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
        return r ? (r.getClientRects().length ? ((e = r.getBoundingClientRect()), (n = r.ownerDocument.defaultView), { top: e.top + n.pageYOffset, left: e.left + n.pageXOffset }) : { top: 0, left: 0 }) : void 0;
      },
      position: function () {
        if (this[0]) {
          var e,
            t,
            n,
            r = this[0],
            i = { top: 0, left: 0 };
          if ('fixed' === S.css(r, 'position')) t = r.getBoundingClientRect();
          else {
            (t = this.offset()), (n = r.ownerDocument), (e = r.offsetParent || n.documentElement);
            while (e && (e === n.body || e === n.documentElement) && 'static' === S.css(e, 'position')) e = e.parentNode;
            e && e !== r && 1 === e.nodeType && (((i = S(e).offset()).top += S.css(e, 'borderTopWidth', !0)), (i.left += S.css(e, 'borderLeftWidth', !0)));
          }
          return { top: t.top - i.top - S.css(r, 'marginTop', !0), left: t.left - i.left - S.css(r, 'marginLeft', !0) };
        }
      },
      offsetParent: function () {
        return this.map(function () {
          var e = this.offsetParent;
          while (e && 'static' === S.css(e, 'position')) e = e.offsetParent;
          return e || re;
        });
      },
    }),
    S.each({ scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' }, function (t, i) {
      var o = 'pageYOffset' === i;
      S.fn[t] = function (e) {
        return $(
          this,
          function (e, t, n) {
            var r;
            if ((x(e) ? (r = e) : 9 === e.nodeType && (r = e.defaultView), void 0 === n)) return r ? r[i] : e[t];
            r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : (e[t] = n);
          },
          t,
          e,
          arguments.length
        );
      };
    }),
    S.each(['top', 'left'], function (e, n) {
      S.cssHooks[n] = Fe(y.pixelPosition, function (e, t) {
        if (t) return (t = We(e, n)), Pe.test(t) ? S(e).position()[n] + 'px' : t;
      });
    }),
    S.each({ Height: 'height', Width: 'width' }, function (a, s) {
      S.each({ padding: 'inner' + a, content: s, '': 'outer' + a }, function (r, o) {
        S.fn[o] = function (e, t) {
          var n = arguments.length && (r || 'boolean' != typeof e),
            i = r || (!0 === e || !0 === t ? 'margin' : 'border');
          return $(
            this,
            function (e, t, n) {
              var r;
              return x(e)
                ? 0 === o.indexOf('outer')
                  ? e['inner' + a]
                  : e.document.documentElement['client' + a]
                : 9 === e.nodeType
                ? ((r = e.documentElement), Math.max(e.body['scroll' + a], r['scroll' + a], e.body['offset' + a], r['offset' + a], r['client' + a]))
                : void 0 === n
                ? S.css(e, t, i)
                : S.style(e, t, n, i);
            },
            s,
            n ? e : void 0,
            n
          );
        };
      });
    }),
    S.each(['ajaxStart', 'ajaxStop', 'ajaxComplete', 'ajaxError', 'ajaxSuccess', 'ajaxSend'], function (e, t) {
      S.fn[t] = function (e) {
        return this.on(t, e);
      };
    }),
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
        return 1 === arguments.length ? this.off(e, '**') : this.off(t, e || '**', n);
      },
      hover: function (e, t) {
        return this.mouseenter(e).mouseleave(t || e);
      },
    }),
    S.each('blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu'.split(' '), function (e, n) {
      S.fn[n] = function (e, t) {
        return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n);
      };
    });
  var Xt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
  (S.proxy = function (e, t) {
    var n, r, i;
    if (('string' == typeof t && ((n = e[t]), (t = e), (e = n)), m(e)))
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
      return ('number' === t || 'string' === t) && !isNaN(e - parseFloat(e));
    }),
    (S.trim = function (e) {
      return null == e ? '' : (e + '').replace(Xt, '');
    }),
    'function' == typeof define &&
      define.amd &&
      define('jquery', [], function () {
        return S;
      });
  var Vt = C.jQuery,
    Gt = C.$;
  return (
    (S.noConflict = function (e) {
      return C.$ === S && (C.$ = Gt), e && C.jQuery === S && (C.jQuery = Vt), S;
    }),
    'undefined' == typeof e && (C.jQuery = C.$ = S),
    S
  );
});

/*!
 * Bootstrap v5.2.0-beta1 (https://getbootstrap.com/)
 * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
!(function (t, e) {
  'object' == typeof exports && 'undefined' != typeof module ? (module.exports = e()) : 'function' == typeof define && define.amd ? define(e) : ((t = 'undefined' != typeof globalThis ? globalThis : t || self).bootstrap = e());
})(this, function () {
  'use strict';
  const t = 'transitionend',
    e = (t) => {
      let e = t.getAttribute('data-bs-target');
      if (!e || '#' === e) {
        let i = t.getAttribute('href');
        if (!i || (!i.includes('#') && !i.startsWith('.'))) return null;
        i.includes('#') && !i.startsWith('#') && (i = `#${i.split('#')[1]}`), (e = i && '#' !== i ? i.trim() : null);
      }
      return e;
    },
    i = (t) => {
      const i = e(t);
      return i && document.querySelector(i) ? i : null;
    },
    n = (t) => {
      const i = e(t);
      return i ? document.querySelector(i) : null;
    },
    s = (e) => {
      e.dispatchEvent(new Event(t));
    },
    o = (t) => !(!t || 'object' != typeof t) && (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType),
    r = (t) => (o(t) ? (t.jquery ? t[0] : t) : 'string' == typeof t && t.length > 0 ? document.querySelector(t) : null),
    a = (t) => {
      if (!o(t) || 0 === t.getClientRects().length) return !1;
      const e = 'visible' === getComputedStyle(t).getPropertyValue('visibility'),
        i = t.closest('details:not([open])');
      if (!i) return e;
      if (i !== t) {
        const e = t.closest('summary');
        if (e && e.parentNode !== i) return !1;
        if (null === e) return !1;
      }
      return e;
    },
    l = (t) => !t || t.nodeType !== Node.ELEMENT_NODE || !!t.classList.contains('disabled') || (void 0 !== t.disabled ? t.disabled : t.hasAttribute('disabled') && 'false' !== t.getAttribute('disabled')),
    c = (t) => {
      if (!document.documentElement.attachShadow) return null;
      if ('function' == typeof t.getRootNode) {
        const e = t.getRootNode();
        return e instanceof ShadowRoot ? e : null;
      }
      return t instanceof ShadowRoot ? t : t.parentNode ? c(t.parentNode) : null;
    },
    h = () => {},
    d = (t) => {
      t.offsetHeight;
    },
    u = () => (window.jQuery && !document.body.hasAttribute('data-bs-no-jquery') ? window.jQuery : null),
    f = [],
    p = () => 'rtl' === document.documentElement.dir,
    g = (t) => {
      var e;
      (e = () => {
        const e = u();
        if (e) {
          const i = t.NAME,
            n = e.fn[i];
          (e.fn[i] = t.jQueryInterface), (e.fn[i].Constructor = t), (e.fn[i].noConflict = () => ((e.fn[i] = n), t.jQueryInterface));
        }
      }),
        'loading' === document.readyState
          ? (f.length ||
              document.addEventListener('DOMContentLoaded', () => {
                for (const t of f) t();
              }),
            f.push(e))
          : e();
    },
    m = (t) => {
      'function' == typeof t && t();
    },
    _ = (e, i, n = !0) => {
      if (!n) return void m(e);
      const o =
        ((t) => {
          if (!t) return 0;
          let { transitionDuration: e, transitionDelay: i } = window.getComputedStyle(t);
          const n = Number.parseFloat(e),
            s = Number.parseFloat(i);
          return n || s ? ((e = e.split(',')[0]), (i = i.split(',')[0]), 1e3 * (Number.parseFloat(e) + Number.parseFloat(i))) : 0;
        })(i) + 5;
      let r = !1;
      const a = ({ target: n }) => {
        n === i && ((r = !0), i.removeEventListener(t, a), m(e));
      };
      i.addEventListener(t, a),
        setTimeout(() => {
          r || s(i);
        }, o);
    },
    b = (t, e, i, n) => {
      const s = t.length;
      let o = t.indexOf(e);
      return -1 === o ? (!i && n ? t[s - 1] : t[0]) : ((o += i ? 1 : -1), n && (o = (o + s) % s), t[Math.max(0, Math.min(o, s - 1))]);
    },
    v = /[^.]*(?=\..*)\.|.*/,
    y = /\..*/,
    w = /::\d+$/,
    A = {};
  let E = 1;
  const T = { mouseenter: 'mouseover', mouseleave: 'mouseout' },
    C = new Set([
      'click',
      'dblclick',
      'mouseup',
      'mousedown',
      'contextmenu',
      'mousewheel',
      'DOMMouseScroll',
      'mouseover',
      'mouseout',
      'mousemove',
      'selectstart',
      'selectend',
      'keydown',
      'keypress',
      'keyup',
      'orientationchange',
      'touchstart',
      'touchmove',
      'touchend',
      'touchcancel',
      'pointerdown',
      'pointermove',
      'pointerup',
      'pointerleave',
      'pointercancel',
      'gesturestart',
      'gesturechange',
      'gestureend',
      'focus',
      'blur',
      'change',
      'reset',
      'select',
      'submit',
      'focusin',
      'focusout',
      'load',
      'unload',
      'beforeunload',
      'resize',
      'move',
      'DOMContentLoaded',
      'readystatechange',
      'error',
      'abort',
      'scroll',
    ]);
  function O(t, e) {
    return (e && `${e}::${E++}`) || t.uidEvent || E++;
  }
  function x(t) {
    const e = O(t);
    return (t.uidEvent = e), (A[e] = A[e] || {}), A[e];
  }
  function k(t, e, i = null) {
    return Object.values(t).find((t) => t.originalHandler === e && t.delegationSelector === i);
  }
  function L(t, e, i) {
    const n = 'string' == typeof e,
      s = n ? i : e;
    let o = N(t);
    return C.has(o) || (o = t), [n, s, o];
  }
  function D(t, e, i, n, s) {
    if ('string' != typeof e || !t) return;
    if ((i || ((i = n), (n = null)), e in T)) {
      const t = (t) =>
        function (e) {
          if (!e.relatedTarget || (e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget))) return t.call(this, e);
        };
      n ? (n = t(n)) : (i = t(i));
    }
    const [o, r, a] = L(e, i, n),
      l = x(t),
      c = l[a] || (l[a] = {}),
      h = k(c, r, o ? i : null);
    if (h) return void (h.oneOff = h.oneOff && s);
    const d = O(r, e.replace(v, '')),
      u = o
        ? (function (t, e, i) {
            return function n(s) {
              const o = t.querySelectorAll(e);
              for (let { target: r } = s; r && r !== this; r = r.parentNode) for (const a of o) if (a === r) return (s.delegateTarget = r), n.oneOff && P.off(t, s.type, e, i), i.apply(r, [s]);
            };
          })(t, i, n)
        : (function (t, e) {
            return function i(n) {
              return (n.delegateTarget = t), i.oneOff && P.off(t, n.type, e), e.apply(t, [n]);
            };
          })(t, i);
    (u.delegationSelector = o ? i : null), (u.originalHandler = r), (u.oneOff = s), (u.uidEvent = d), (c[d] = u), t.addEventListener(a, u, o);
  }
  function S(t, e, i, n, s) {
    const o = k(e[i], n, s);
    o && (t.removeEventListener(i, o, Boolean(s)), delete e[i][o.uidEvent]);
  }
  function I(t, e, i, n) {
    const s = e[i] || {};
    for (const o of Object.keys(s))
      if (o.includes(n)) {
        const n = s[o];
        S(t, e, i, n.originalHandler, n.delegationSelector);
      }
  }
  function N(t) {
    return (t = t.replace(y, '')), T[t] || t;
  }
  const P = {
      on(t, e, i, n) {
        D(t, e, i, n, !1);
      },
      one(t, e, i, n) {
        D(t, e, i, n, !0);
      },
      off(t, e, i, n) {
        if ('string' != typeof e || !t) return;
        const [s, o, r] = L(e, i, n),
          a = r !== e,
          l = x(t),
          c = e.startsWith('.');
        if (void 0 !== o) {
          if (!l || !l[r]) return;
          return void S(t, l, r, o, s ? i : null);
        }
        if (c) for (const i of Object.keys(l)) I(t, l, i, e.slice(1));
        const h = l[r] || {};
        for (const i of Object.keys(h)) {
          const n = i.replace(w, '');
          if (!a || e.includes(n)) {
            const e = h[i];
            S(t, l, r, e.originalHandler, e.delegationSelector);
          }
        }
      },
      trigger(t, e, i) {
        if ('string' != typeof e || !t) return null;
        const n = u();
        let s = null,
          o = !0,
          r = !0,
          a = !1;
        e !== N(e) && n && ((s = n.Event(e, i)), n(t).trigger(s), (o = !s.isPropagationStopped()), (r = !s.isImmediatePropagationStopped()), (a = s.isDefaultPrevented()));
        const l = new Event(e, { bubbles: o, cancelable: !0 });
        if (void 0 !== i) for (const t of Object.keys(i)) Object.defineProperty(l, t, { get: () => i[t] });
        return a && l.preventDefault(), r && t.dispatchEvent(l), l.defaultPrevented && s && s.preventDefault(), l;
      },
    },
    M = new Map(),
    j = {
      set(t, e, i) {
        M.has(t) || M.set(t, new Map());
        const n = M.get(t);
        n.has(e) || 0 === n.size ? n.set(e, i) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`);
      },
      get: (t, e) => (M.has(t) && M.get(t).get(e)) || null,
      remove(t, e) {
        if (!M.has(t)) return;
        const i = M.get(t);
        i.delete(e), 0 === i.size && M.delete(t);
      },
    };
  function H(t) {
    if ('true' === t) return !0;
    if ('false' === t) return !1;
    if (t === Number(t).toString()) return Number(t);
    if ('' === t || 'null' === t) return null;
    if ('string' != typeof t) return t;
    try {
      return JSON.parse(decodeURIComponent(t));
    } catch (e) {
      return t;
    }
  }
  function $(t) {
    return t.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
  }
  const W = {
    setDataAttribute(t, e, i) {
      t.setAttribute(`data-bs-${$(e)}`, i);
    },
    removeDataAttribute(t, e) {
      t.removeAttribute(`data-bs-${$(e)}`);
    },
    getDataAttributes(t) {
      if (!t) return {};
      const e = {},
        i = Object.keys(t.dataset).filter((t) => t.startsWith('bs') && !t.startsWith('bsConfig'));
      for (const n of i) {
        let i = n.replace(/^bs/, '');
        (i = i.charAt(0).toLowerCase() + i.slice(1, i.length)), (e[i] = H(t.dataset[n]));
      }
      return e;
    },
    getDataAttribute: (t, e) => H(t.getAttribute(`data-bs-${$(e)}`)),
  };
  class B {
    static get Default() {
      return {};
    }
    static get DefaultType() {
      return {};
    }
    static get NAME() {
      throw new Error('You have to implement the static method "NAME", for each component!');
    }
    _getConfig(t) {
      return (t = this._mergeConfigObj(t)), (t = this._configAfterMerge(t)), this._typeCheckConfig(t), t;
    }
    _configAfterMerge(t) {
      return t;
    }
    _mergeConfigObj(t, e) {
      const i = o(e) ? W.getDataAttribute(e, 'config') : {};
      return { ...this.constructor.Default, ...('object' == typeof i ? i : {}), ...(o(e) ? W.getDataAttributes(e) : {}), ...('object' == typeof t ? t : {}) };
    }
    _typeCheckConfig(t, e = this.constructor.DefaultType) {
      for (const n of Object.keys(e)) {
        const s = e[n],
          r = t[n],
          a = o(r)
            ? 'element'
            : null == (i = r)
            ? `${i}`
            : Object.prototype.toString
                .call(i)
                .match(/\s([a-z]+)/i)[1]
                .toLowerCase();
        if (!new RegExp(s).test(a)) throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${n}" provided type "${a}" but expected type "${s}".`);
      }
      var i;
    }
  }
  class F extends B {
    constructor(t, e) {
      super(), (t = r(t)) && ((this._element = t), (this._config = this._getConfig(e)), j.set(this._element, this.constructor.DATA_KEY, this));
    }
    dispose() {
      j.remove(this._element, this.constructor.DATA_KEY), P.off(this._element, this.constructor.EVENT_KEY);
      for (const t of Object.getOwnPropertyNames(this)) this[t] = null;
    }
    _queueCallback(t, e, i = !0) {
      _(t, e, i);
    }
    _getConfig(t) {
      return (t = this._mergeConfigObj(t, this._element)), (t = this._configAfterMerge(t)), this._typeCheckConfig(t), t;
    }
    static getInstance(t) {
      return j.get(r(t), this.DATA_KEY);
    }
    static getOrCreateInstance(t, e = {}) {
      return this.getInstance(t) || new this(t, 'object' == typeof e ? e : null);
    }
    static get VERSION() {
      return '5.2.0-beta1';
    }
    static get DATA_KEY() {
      return `bs.${this.NAME}`;
    }
    static get EVENT_KEY() {
      return `.${this.DATA_KEY}`;
    }
    static eventName(t) {
      return `${t}${this.EVENT_KEY}`;
    }
  }
  const z = (t, e = 'hide') => {
    const i = `click.dismiss${t.EVENT_KEY}`,
      s = t.NAME;
    P.on(document, i, `[data-bs-dismiss="${s}"]`, function (i) {
      if ((['A', 'AREA'].includes(this.tagName) && i.preventDefault(), l(this))) return;
      const o = n(this) || this.closest(`.${s}`);
      t.getOrCreateInstance(o)[e]();
    });
  };
  class R extends F {
    static get NAME() {
      return 'alert';
    }
    close() {
      if (P.trigger(this._element, 'close.bs.alert').defaultPrevented) return;
      this._element.classList.remove('show');
      const t = this._element.classList.contains('fade');
      this._queueCallback(() => this._destroyElement(), this._element, t);
    }
    _destroyElement() {
      this._element.remove(), P.trigger(this._element, 'closed.bs.alert'), this.dispose();
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = R.getOrCreateInstance(this);
        if ('string' == typeof t) {
          if (void 0 === e[t] || t.startsWith('_') || 'constructor' === t) throw new TypeError(`No method named "${t}"`);
          e[t](this);
        }
      });
    }
  }
  z(R, 'close'), g(R);
  const q = '[data-bs-toggle="button"]';
  class V extends F {
    static get NAME() {
      return 'button';
    }
    toggle() {
      this._element.setAttribute('aria-pressed', this._element.classList.toggle('active'));
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = V.getOrCreateInstance(this);
        'toggle' === t && e[t]();
      });
    }
  }
  P.on(document, 'click.bs.button.data-api', q, (t) => {
    t.preventDefault();
    const e = t.target.closest(q);
    V.getOrCreateInstance(e).toggle();
  }),
    g(V);
  const K = {
      find: (t, e = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(e, t)),
      findOne: (t, e = document.documentElement) => Element.prototype.querySelector.call(e, t),
      children: (t, e) => [].concat(...t.children).filter((t) => t.matches(e)),
      parents(t, e) {
        const i = [];
        let n = t.parentNode.closest(e);
        for (; n; ) i.push(n), (n = n.parentNode.closest(e));
        return i;
      },
      prev(t, e) {
        let i = t.previousElementSibling;
        for (; i; ) {
          if (i.matches(e)) return [i];
          i = i.previousElementSibling;
        }
        return [];
      },
      next(t, e) {
        let i = t.nextElementSibling;
        for (; i; ) {
          if (i.matches(e)) return [i];
          i = i.nextElementSibling;
        }
        return [];
      },
      focusableChildren(t) {
        const e = ['a', 'button', 'input', 'textarea', 'select', 'details', '[tabindex]', '[contenteditable="true"]'].map((t) => `${t}:not([tabindex^="-"])`).join(',');
        return this.find(e, t).filter((t) => !l(t) && a(t));
      },
    },
    Q = { leftCallback: null, rightCallback: null, endCallback: null },
    X = { leftCallback: '(function|null)', rightCallback: '(function|null)', endCallback: '(function|null)' };
  class Y extends B {
    constructor(t, e) {
      super(), (this._element = t), t && Y.isSupported() && ((this._config = this._getConfig(e)), (this._deltaX = 0), (this._supportPointerEvents = Boolean(window.PointerEvent)), this._initEvents());
    }
    static get Default() {
      return Q;
    }
    static get DefaultType() {
      return X;
    }
    static get NAME() {
      return 'swipe';
    }
    dispose() {
      P.off(this._element, '.bs.swipe');
    }
    _start(t) {
      this._supportPointerEvents ? this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX) : (this._deltaX = t.touches[0].clientX);
    }
    _end(t) {
      this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX - this._deltaX), this._handleSwipe(), m(this._config.endCallback);
    }
    _move(t) {
      this._deltaX = t.touches && t.touches.length > 1 ? 0 : t.touches[0].clientX - this._deltaX;
    }
    _handleSwipe() {
      const t = Math.abs(this._deltaX);
      if (t <= 40) return;
      const e = t / this._deltaX;
      (this._deltaX = 0), e && m(e > 0 ? this._config.rightCallback : this._config.leftCallback);
    }
    _initEvents() {
      this._supportPointerEvents
        ? (P.on(this._element, 'pointerdown.bs.swipe', (t) => this._start(t)), P.on(this._element, 'pointerup.bs.swipe', (t) => this._end(t)), this._element.classList.add('pointer-event'))
        : (P.on(this._element, 'touchstart.bs.swipe', (t) => this._start(t)), P.on(this._element, 'touchmove.bs.swipe', (t) => this._move(t)), P.on(this._element, 'touchend.bs.swipe', (t) => this._end(t)));
    }
    _eventIsPointerPenTouch(t) {
      return this._supportPointerEvents && ('pen' === t.pointerType || 'touch' === t.pointerType);
    }
    static isSupported() {
      return 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0;
    }
  }
  const U = 'next',
    G = 'prev',
    J = 'left',
    Z = 'right',
    tt = 'slid.bs.carousel',
    et = 'carousel',
    it = 'active',
    nt = { ArrowLeft: Z, ArrowRight: J },
    st = { interval: 5e3, keyboard: !0, pause: 'hover', ride: !1, touch: !0, wrap: !0 },
    ot = { interval: '(number|boolean)', keyboard: 'boolean', ride: '(boolean|string)', pause: '(string|boolean)', touch: 'boolean', wrap: 'boolean' };
  class rt extends F {
    constructor(t, e) {
      super(t, e),
        (this._interval = null),
        (this._activeElement = null),
        (this._isSliding = !1),
        (this.touchTimeout = null),
        (this._swipeHelper = null),
        (this._indicatorsElement = K.findOne('.carousel-indicators', this._element)),
        this._addEventListeners(),
        this._config.ride === et && this.cycle();
    }
    static get Default() {
      return st;
    }
    static get DefaultType() {
      return ot;
    }
    static get NAME() {
      return 'carousel';
    }
    next() {
      this._slide(U);
    }
    nextWhenVisible() {
      !document.hidden && a(this._element) && this.next();
    }
    prev() {
      this._slide(G);
    }
    pause() {
      this._isSliding && s(this._element), this._clearInterval();
    }
    cycle() {
      this._clearInterval(), this._updateInterval(), (this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval));
    }
    _maybeEnableCycle() {
      this._config.ride && (this._isSliding ? P.one(this._element, tt, () => this.cycle()) : this.cycle());
    }
    to(t) {
      const e = this._getItems();
      if (t > e.length - 1 || t < 0) return;
      if (this._isSliding) return void P.one(this._element, tt, () => this.to(t));
      const i = this._getItemIndex(this._getActive());
      if (i === t) return;
      const n = t > i ? U : G;
      this._slide(n, e[t]);
    }
    dispose() {
      this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
    }
    _configAfterMerge(t) {
      return (t.defaultInterval = t.interval), t;
    }
    _addEventListeners() {
      this._config.keyboard && P.on(this._element, 'keydown.bs.carousel', (t) => this._keydown(t)),
        'hover' === this._config.pause && (P.on(this._element, 'mouseenter.bs.carousel', () => this.pause()), P.on(this._element, 'mouseleave.bs.carousel', () => this._maybeEnableCycle())),
        this._config.touch && Y.isSupported() && this._addTouchEventListeners();
    }
    _addTouchEventListeners() {
      for (const t of K.find('.carousel-item img', this._element)) P.on(t, 'dragstart.bs.carousel', (t) => t.preventDefault());
      const t = {
        leftCallback: () => this._slide(this._directionToOrder(J)),
        rightCallback: () => this._slide(this._directionToOrder(Z)),
        endCallback: () => {
          'hover' === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), (this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), 500 + this._config.interval)));
        },
      };
      this._swipeHelper = new Y(this._element, t);
    }
    _keydown(t) {
      if (/input|textarea/i.test(t.target.tagName)) return;
      const e = nt[t.key];
      e && (t.preventDefault(), this._slide(this._directionToOrder(e)));
    }
    _getItemIndex(t) {
      return this._getItems().indexOf(t);
    }
    _setActiveIndicatorElement(t) {
      if (!this._indicatorsElement) return;
      const e = K.findOne('.active', this._indicatorsElement);
      e.classList.remove(it), e.removeAttribute('aria-current');
      const i = K.findOne(`[data-bs-slide-to="${t}"]`, this._indicatorsElement);
      i && (i.classList.add(it), i.setAttribute('aria-current', 'true'));
    }
    _updateInterval() {
      const t = this._activeElement || this._getActive();
      if (!t) return;
      const e = Number.parseInt(t.getAttribute('data-bs-interval'), 10);
      this._config.interval = e || this._config.defaultInterval;
    }
    _slide(t, e = null) {
      if (this._isSliding) return;
      const i = this._getActive(),
        n = t === U,
        s = e || b(this._getItems(), i, n, this._config.wrap);
      if (s === i) return;
      const o = this._getItemIndex(s),
        r = (e) => P.trigger(this._element, e, { relatedTarget: s, direction: this._orderToDirection(t), from: this._getItemIndex(i), to: o });
      if (r('slide.bs.carousel').defaultPrevented) return;
      if (!i || !s) return;
      const a = Boolean(this._interval);
      this.pause(), (this._isSliding = !0), this._setActiveIndicatorElement(o), (this._activeElement = s);
      const l = n ? 'carousel-item-start' : 'carousel-item-end',
        c = n ? 'carousel-item-next' : 'carousel-item-prev';
      s.classList.add(c),
        d(s),
        i.classList.add(l),
        s.classList.add(l),
        this._queueCallback(
          () => {
            s.classList.remove(l, c), s.classList.add(it), i.classList.remove(it, c, l), (this._isSliding = !1), r(tt);
          },
          i,
          this._isAnimated()
        ),
        a && this.cycle();
    }
    _isAnimated() {
      return this._element.classList.contains('slide');
    }
    _getActive() {
      return K.findOne('.active.carousel-item', this._element);
    }
    _getItems() {
      return K.find('.carousel-item', this._element);
    }
    _clearInterval() {
      this._interval && (clearInterval(this._interval), (this._interval = null));
    }
    _directionToOrder(t) {
      return p() ? (t === J ? G : U) : t === J ? U : G;
    }
    _orderToDirection(t) {
      return p() ? (t === G ? J : Z) : t === G ? Z : J;
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = rt.getOrCreateInstance(this, t);
        if ('number' != typeof t) {
          if ('string' == typeof t) {
            if (void 0 === e[t] || t.startsWith('_') || 'constructor' === t) throw new TypeError(`No method named "${t}"`);
            e[t]();
          }
        } else e.to(t);
      });
    }
  }
  P.on(document, 'click.bs.carousel.data-api', '[data-bs-slide], [data-bs-slide-to]', function (t) {
    const e = n(this);
    if (!e || !e.classList.contains(et)) return;
    t.preventDefault();
    const i = rt.getOrCreateInstance(e),
      s = this.getAttribute('data-bs-slide-to');
    return s ? (i.to(s), void i._maybeEnableCycle()) : 'next' === W.getDataAttribute(this, 'slide') ? (i.next(), void i._maybeEnableCycle()) : (i.prev(), void i._maybeEnableCycle());
  }),
    P.on(window, 'load.bs.carousel.data-api', () => {
      const t = K.find('[data-bs-ride="carousel"]');
      for (const e of t) rt.getOrCreateInstance(e);
    }),
    g(rt);
  const at = 'show',
    lt = 'collapse',
    ct = 'collapsing',
    ht = '[data-bs-toggle="collapse"]',
    dt = { toggle: !0, parent: null },
    ut = { toggle: 'boolean', parent: '(null|element)' };
  class ft extends F {
    constructor(t, e) {
      super(t, e), (this._isTransitioning = !1), (this._triggerArray = []);
      const n = K.find(ht);
      for (const t of n) {
        const e = i(t),
          n = K.find(e).filter((t) => t === this._element);
        null !== e && n.length && this._triggerArray.push(t);
      }
      this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
    }
    static get Default() {
      return dt;
    }
    static get DefaultType() {
      return ut;
    }
    static get NAME() {
      return 'collapse';
    }
    toggle() {
      this._isShown() ? this.hide() : this.show();
    }
    show() {
      if (this._isTransitioning || this._isShown()) return;
      let t = [];
      if (
        (this._config.parent &&
          (t = this._getFirstLevelChildren('.collapse.show, .collapse.collapsing')
            .filter((t) => t !== this._element)
            .map((t) => ft.getOrCreateInstance(t, { toggle: !1 }))),
        t.length && t[0]._isTransitioning)
      )
        return;
      if (P.trigger(this._element, 'show.bs.collapse').defaultPrevented) return;
      for (const e of t) e.hide();
      const e = this._getDimension();
      this._element.classList.remove(lt), this._element.classList.add(ct), (this._element.style[e] = 0), this._addAriaAndCollapsedClass(this._triggerArray, !0), (this._isTransitioning = !0);
      const i = `scroll${e[0].toUpperCase() + e.slice(1)}`;
      this._queueCallback(
        () => {
          (this._isTransitioning = !1), this._element.classList.remove(ct), this._element.classList.add(lt, at), (this._element.style[e] = ''), P.trigger(this._element, 'shown.bs.collapse');
        },
        this._element,
        !0
      ),
        (this._element.style[e] = `${this._element[i]}px`);
    }
    hide() {
      if (this._isTransitioning || !this._isShown()) return;
      if (P.trigger(this._element, 'hide.bs.collapse').defaultPrevented) return;
      const t = this._getDimension();
      (this._element.style[t] = `${this._element.getBoundingClientRect()[t]}px`), d(this._element), this._element.classList.add(ct), this._element.classList.remove(lt, at);
      for (const t of this._triggerArray) {
        const e = n(t);
        e && !this._isShown(e) && this._addAriaAndCollapsedClass([t], !1);
      }
      (this._isTransitioning = !0),
        (this._element.style[t] = ''),
        this._queueCallback(
          () => {
            (this._isTransitioning = !1), this._element.classList.remove(ct), this._element.classList.add(lt), P.trigger(this._element, 'hidden.bs.collapse');
          },
          this._element,
          !0
        );
    }
    _isShown(t = this._element) {
      return t.classList.contains(at);
    }
    _configAfterMerge(t) {
      return (t.toggle = Boolean(t.toggle)), (t.parent = r(t.parent)), t;
    }
    _getDimension() {
      return this._element.classList.contains('collapse-horizontal') ? 'width' : 'height';
    }
    _initializeChildren() {
      if (!this._config.parent) return;
      const t = this._getFirstLevelChildren(ht);
      for (const e of t) {
        const t = n(e);
        t && this._addAriaAndCollapsedClass([e], this._isShown(t));
      }
    }
    _getFirstLevelChildren(t) {
      const e = K.find(':scope .collapse .collapse', this._config.parent);
      return K.find(t, this._config.parent).filter((t) => !e.includes(t));
    }
    _addAriaAndCollapsedClass(t, e) {
      if (t.length) for (const i of t) i.classList.toggle('collapsed', !e), i.setAttribute('aria-expanded', e);
    }
    static jQueryInterface(t) {
      const e = {};
      return (
        'string' == typeof t && /show|hide/.test(t) && (e.toggle = !1),
        this.each(function () {
          const i = ft.getOrCreateInstance(this, e);
          if ('string' == typeof t) {
            if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
            i[t]();
          }
        })
      );
    }
  }
  P.on(document, 'click.bs.collapse.data-api', ht, function (t) {
    ('A' === t.target.tagName || (t.delegateTarget && 'A' === t.delegateTarget.tagName)) && t.preventDefault();
    const e = i(this),
      n = K.find(e);
    for (const t of n) ft.getOrCreateInstance(t, { toggle: !1 }).toggle();
  }),
    g(ft);
  var pt = 'top',
    gt = 'bottom',
    mt = 'right',
    _t = 'left',
    bt = 'auto',
    vt = [pt, gt, mt, _t],
    yt = 'start',
    wt = 'end',
    At = 'clippingParents',
    Et = 'viewport',
    Tt = 'popper',
    Ct = 'reference',
    Ot = vt.reduce(function (t, e) {
      return t.concat([e + '-' + yt, e + '-' + wt]);
    }, []),
    xt = [].concat(vt, [bt]).reduce(function (t, e) {
      return t.concat([e, e + '-' + yt, e + '-' + wt]);
    }, []),
    kt = 'beforeRead',
    Lt = 'read',
    Dt = 'afterRead',
    St = 'beforeMain',
    It = 'main',
    Nt = 'afterMain',
    Pt = 'beforeWrite',
    Mt = 'write',
    jt = 'afterWrite',
    Ht = [kt, Lt, Dt, St, It, Nt, Pt, Mt, jt];
  function $t(t) {
    return t ? (t.nodeName || '').toLowerCase() : null;
  }
  function Wt(t) {
    if (null == t) return window;
    if ('[object Window]' !== t.toString()) {
      var e = t.ownerDocument;
      return (e && e.defaultView) || window;
    }
    return t;
  }
  function Bt(t) {
    return t instanceof Wt(t).Element || t instanceof Element;
  }
  function Ft(t) {
    return t instanceof Wt(t).HTMLElement || t instanceof HTMLElement;
  }
  function zt(t) {
    return 'undefined' != typeof ShadowRoot && (t instanceof Wt(t).ShadowRoot || t instanceof ShadowRoot);
  }
  const Rt = {
    name: 'applyStyles',
    enabled: !0,
    phase: 'write',
    fn: function (t) {
      var e = t.state;
      Object.keys(e.elements).forEach(function (t) {
        var i = e.styles[t] || {},
          n = e.attributes[t] || {},
          s = e.elements[t];
        Ft(s) &&
          $t(s) &&
          (Object.assign(s.style, i),
          Object.keys(n).forEach(function (t) {
            var e = n[t];
            !1 === e ? s.removeAttribute(t) : s.setAttribute(t, !0 === e ? '' : e);
          }));
      });
    },
    effect: function (t) {
      var e = t.state,
        i = { popper: { position: e.options.strategy, left: '0', top: '0', margin: '0' }, arrow: { position: 'absolute' }, reference: {} };
      return (
        Object.assign(e.elements.popper.style, i.popper),
        (e.styles = i),
        e.elements.arrow && Object.assign(e.elements.arrow.style, i.arrow),
        function () {
          Object.keys(e.elements).forEach(function (t) {
            var n = e.elements[t],
              s = e.attributes[t] || {},
              o = Object.keys(e.styles.hasOwnProperty(t) ? e.styles[t] : i[t]).reduce(function (t, e) {
                return (t[e] = ''), t;
              }, {});
            Ft(n) &&
              $t(n) &&
              (Object.assign(n.style, o),
              Object.keys(s).forEach(function (t) {
                n.removeAttribute(t);
              }));
          });
        }
      );
    },
    requires: ['computeStyles'],
  };
  function qt(t) {
    return t.split('-')[0];
  }
  var Vt = Math.max,
    Kt = Math.min,
    Qt = Math.round;
  function Xt(t, e) {
    void 0 === e && (e = !1);
    var i = t.getBoundingClientRect(),
      n = 1,
      s = 1;
    if (Ft(t) && e) {
      var o = t.offsetHeight,
        r = t.offsetWidth;
      r > 0 && (n = Qt(i.width) / r || 1), o > 0 && (s = Qt(i.height) / o || 1);
    }
    return { width: i.width / n, height: i.height / s, top: i.top / s, right: i.right / n, bottom: i.bottom / s, left: i.left / n, x: i.left / n, y: i.top / s };
  }
  function Yt(t) {
    var e = Xt(t),
      i = t.offsetWidth,
      n = t.offsetHeight;
    return Math.abs(e.width - i) <= 1 && (i = e.width), Math.abs(e.height - n) <= 1 && (n = e.height), { x: t.offsetLeft, y: t.offsetTop, width: i, height: n };
  }
  function Ut(t, e) {
    var i = e.getRootNode && e.getRootNode();
    if (t.contains(e)) return !0;
    if (i && zt(i)) {
      var n = e;
      do {
        if (n && t.isSameNode(n)) return !0;
        n = n.parentNode || n.host;
      } while (n);
    }
    return !1;
  }
  function Gt(t) {
    return Wt(t).getComputedStyle(t);
  }
  function Jt(t) {
    return ['table', 'td', 'th'].indexOf($t(t)) >= 0;
  }
  function Zt(t) {
    return ((Bt(t) ? t.ownerDocument : t.document) || window.document).documentElement;
  }
  function te(t) {
    return 'html' === $t(t) ? t : t.assignedSlot || t.parentNode || (zt(t) ? t.host : null) || Zt(t);
  }
  function ee(t) {
    return Ft(t) && 'fixed' !== Gt(t).position ? t.offsetParent : null;
  }
  function ie(t) {
    for (var e = Wt(t), i = ee(t); i && Jt(i) && 'static' === Gt(i).position; ) i = ee(i);
    return i && ('html' === $t(i) || ('body' === $t(i) && 'static' === Gt(i).position))
      ? e
      : i ||
          (function (t) {
            var e = -1 !== navigator.userAgent.toLowerCase().indexOf('firefox');
            if (-1 !== navigator.userAgent.indexOf('Trident') && Ft(t) && 'fixed' === Gt(t).position) return null;
            var i = te(t);
            for (zt(i) && (i = i.host); Ft(i) && ['html', 'body'].indexOf($t(i)) < 0; ) {
              var n = Gt(i);
              if ('none' !== n.transform || 'none' !== n.perspective || 'paint' === n.contain || -1 !== ['transform', 'perspective'].indexOf(n.willChange) || (e && 'filter' === n.willChange) || (e && n.filter && 'none' !== n.filter))
                return i;
              i = i.parentNode;
            }
            return null;
          })(t) ||
          e;
  }
  function ne(t) {
    return ['top', 'bottom'].indexOf(t) >= 0 ? 'x' : 'y';
  }
  function se(t, e, i) {
    return Vt(t, Kt(e, i));
  }
  function oe(t) {
    return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, t);
  }
  function re(t, e) {
    return e.reduce(function (e, i) {
      return (e[i] = t), e;
    }, {});
  }
  const ae = {
    name: 'arrow',
    enabled: !0,
    phase: 'main',
    fn: function (t) {
      var e,
        i = t.state,
        n = t.name,
        s = t.options,
        o = i.elements.arrow,
        r = i.modifiersData.popperOffsets,
        a = qt(i.placement),
        l = ne(a),
        c = [_t, mt].indexOf(a) >= 0 ? 'height' : 'width';
      if (o && r) {
        var h = (function (t, e) {
            return oe('number' != typeof (t = 'function' == typeof t ? t(Object.assign({}, e.rects, { placement: e.placement })) : t) ? t : re(t, vt));
          })(s.padding, i),
          d = Yt(o),
          u = 'y' === l ? pt : _t,
          f = 'y' === l ? gt : mt,
          p = i.rects.reference[c] + i.rects.reference[l] - r[l] - i.rects.popper[c],
          g = r[l] - i.rects.reference[l],
          m = ie(o),
          _ = m ? ('y' === l ? m.clientHeight || 0 : m.clientWidth || 0) : 0,
          b = p / 2 - g / 2,
          v = h[u],
          y = _ - d[c] - h[f],
          w = _ / 2 - d[c] / 2 + b,
          A = se(v, w, y),
          E = l;
        i.modifiersData[n] = (((e = {})[E] = A), (e.centerOffset = A - w), e);
      }
    },
    effect: function (t) {
      var e = t.state,
        i = t.options.element,
        n = void 0 === i ? '[data-popper-arrow]' : i;
      null != n && ('string' != typeof n || (n = e.elements.popper.querySelector(n))) && Ut(e.elements.popper, n) && (e.elements.arrow = n);
    },
    requires: ['popperOffsets'],
    requiresIfExists: ['preventOverflow'],
  };
  function le(t) {
    return t.split('-')[1];
  }
  var ce = { top: 'auto', right: 'auto', bottom: 'auto', left: 'auto' };
  function he(t) {
    var e,
      i = t.popper,
      n = t.popperRect,
      s = t.placement,
      o = t.variation,
      r = t.offsets,
      a = t.position,
      l = t.gpuAcceleration,
      c = t.adaptive,
      h = t.roundOffsets,
      d = t.isFixed,
      u = r.x,
      f = void 0 === u ? 0 : u,
      p = r.y,
      g = void 0 === p ? 0 : p,
      m = 'function' == typeof h ? h({ x: f, y: g }) : { x: f, y: g };
    (f = m.x), (g = m.y);
    var _ = r.hasOwnProperty('x'),
      b = r.hasOwnProperty('y'),
      v = _t,
      y = pt,
      w = window;
    if (c) {
      var A = ie(i),
        E = 'clientHeight',
        T = 'clientWidth';
      A === Wt(i) && 'static' !== Gt((A = Zt(i))).position && 'absolute' === a && ((E = 'scrollHeight'), (T = 'scrollWidth')),
        (s === pt || ((s === _t || s === mt) && o === wt)) && ((y = gt), (g -= (d && A === w && w.visualViewport ? w.visualViewport.height : A[E]) - n.height), (g *= l ? 1 : -1)),
        (s !== _t && ((s !== pt && s !== gt) || o !== wt)) || ((v = mt), (f -= (d && A === w && w.visualViewport ? w.visualViewport.width : A[T]) - n.width), (f *= l ? 1 : -1));
    }
    var C,
      O = Object.assign({ position: a }, c && ce),
      x =
        !0 === h
          ? (function (t) {
              var e = t.x,
                i = t.y,
                n = window.devicePixelRatio || 1;
              return { x: Qt(e * n) / n || 0, y: Qt(i * n) / n || 0 };
            })({ x: f, y: g })
          : { x: f, y: g };
    return (
      (f = x.x),
      (g = x.y),
      l
        ? Object.assign({}, O, (((C = {})[y] = b ? '0' : ''), (C[v] = _ ? '0' : ''), (C.transform = (w.devicePixelRatio || 1) <= 1 ? 'translate(' + f + 'px, ' + g + 'px)' : 'translate3d(' + f + 'px, ' + g + 'px, 0)'), C))
        : Object.assign({}, O, (((e = {})[y] = b ? g + 'px' : ''), (e[v] = _ ? f + 'px' : ''), (e.transform = ''), e))
    );
  }
  const de = {
    name: 'computeStyles',
    enabled: !0,
    phase: 'beforeWrite',
    fn: function (t) {
      var e = t.state,
        i = t.options,
        n = i.gpuAcceleration,
        s = void 0 === n || n,
        o = i.adaptive,
        r = void 0 === o || o,
        a = i.roundOffsets,
        l = void 0 === a || a,
        c = { placement: qt(e.placement), variation: le(e.placement), popper: e.elements.popper, popperRect: e.rects.popper, gpuAcceleration: s, isFixed: 'fixed' === e.options.strategy };
      null != e.modifiersData.popperOffsets && (e.styles.popper = Object.assign({}, e.styles.popper, he(Object.assign({}, c, { offsets: e.modifiersData.popperOffsets, position: e.options.strategy, adaptive: r, roundOffsets: l })))),
        null != e.modifiersData.arrow && (e.styles.arrow = Object.assign({}, e.styles.arrow, he(Object.assign({}, c, { offsets: e.modifiersData.arrow, position: 'absolute', adaptive: !1, roundOffsets: l })))),
        (e.attributes.popper = Object.assign({}, e.attributes.popper, { 'data-popper-placement': e.placement }));
    },
    data: {},
  };
  var ue = { passive: !0 };
  const fe = {
    name: 'eventListeners',
    enabled: !0,
    phase: 'write',
    fn: function () {},
    effect: function (t) {
      var e = t.state,
        i = t.instance,
        n = t.options,
        s = n.scroll,
        o = void 0 === s || s,
        r = n.resize,
        a = void 0 === r || r,
        l = Wt(e.elements.popper),
        c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
      return (
        o &&
          c.forEach(function (t) {
            t.addEventListener('scroll', i.update, ue);
          }),
        a && l.addEventListener('resize', i.update, ue),
        function () {
          o &&
            c.forEach(function (t) {
              t.removeEventListener('scroll', i.update, ue);
            }),
            a && l.removeEventListener('resize', i.update, ue);
        }
      );
    },
    data: {},
  };
  var pe = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  function ge(t) {
    return t.replace(/left|right|bottom|top/g, function (t) {
      return pe[t];
    });
  }
  var me = { start: 'end', end: 'start' };
  function _e(t) {
    return t.replace(/start|end/g, function (t) {
      return me[t];
    });
  }
  function be(t) {
    var e = Wt(t);
    return { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
  }
  function ve(t) {
    return Xt(Zt(t)).left + be(t).scrollLeft;
  }
  function ye(t) {
    var e = Gt(t),
      i = e.overflow,
      n = e.overflowX,
      s = e.overflowY;
    return /auto|scroll|overlay|hidden/.test(i + s + n);
  }
  function we(t) {
    return ['html', 'body', '#document'].indexOf($t(t)) >= 0 ? t.ownerDocument.body : Ft(t) && ye(t) ? t : we(te(t));
  }
  function Ae(t, e) {
    var i;
    void 0 === e && (e = []);
    var n = we(t),
      s = n === (null == (i = t.ownerDocument) ? void 0 : i.body),
      o = Wt(n),
      r = s ? [o].concat(o.visualViewport || [], ye(n) ? n : []) : n,
      a = e.concat(r);
    return s ? a : a.concat(Ae(te(r)));
  }
  function Ee(t) {
    return Object.assign({}, t, { left: t.x, top: t.y, right: t.x + t.width, bottom: t.y + t.height });
  }
  function Te(t, e) {
    return e === Et
      ? Ee(
          (function (t) {
            var e = Wt(t),
              i = Zt(t),
              n = e.visualViewport,
              s = i.clientWidth,
              o = i.clientHeight,
              r = 0,
              a = 0;
            return n && ((s = n.width), (o = n.height), /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || ((r = n.offsetLeft), (a = n.offsetTop))), { width: s, height: o, x: r + ve(t), y: a };
          })(t)
        )
      : Bt(e)
      ? (function (t) {
          var e = Xt(t);
          return (
            (e.top = e.top + t.clientTop), (e.left = e.left + t.clientLeft), (e.bottom = e.top + t.clientHeight), (e.right = e.left + t.clientWidth), (e.width = t.clientWidth), (e.height = t.clientHeight), (e.x = e.left), (e.y = e.top), e
          );
        })(e)
      : Ee(
          (function (t) {
            var e,
              i = Zt(t),
              n = be(t),
              s = null == (e = t.ownerDocument) ? void 0 : e.body,
              o = Vt(i.scrollWidth, i.clientWidth, s ? s.scrollWidth : 0, s ? s.clientWidth : 0),
              r = Vt(i.scrollHeight, i.clientHeight, s ? s.scrollHeight : 0, s ? s.clientHeight : 0),
              a = -n.scrollLeft + ve(t),
              l = -n.scrollTop;
            return 'rtl' === Gt(s || i).direction && (a += Vt(i.clientWidth, s ? s.clientWidth : 0) - o), { width: o, height: r, x: a, y: l };
          })(Zt(t))
        );
  }
  function Ce(t) {
    var e,
      i = t.reference,
      n = t.element,
      s = t.placement,
      o = s ? qt(s) : null,
      r = s ? le(s) : null,
      a = i.x + i.width / 2 - n.width / 2,
      l = i.y + i.height / 2 - n.height / 2;
    switch (o) {
      case pt:
        e = { x: a, y: i.y - n.height };
        break;
      case gt:
        e = { x: a, y: i.y + i.height };
        break;
      case mt:
        e = { x: i.x + i.width, y: l };
        break;
      case _t:
        e = { x: i.x - n.width, y: l };
        break;
      default:
        e = { x: i.x, y: i.y };
    }
    var c = o ? ne(o) : null;
    if (null != c) {
      var h = 'y' === c ? 'height' : 'width';
      switch (r) {
        case yt:
          e[c] = e[c] - (i[h] / 2 - n[h] / 2);
          break;
        case wt:
          e[c] = e[c] + (i[h] / 2 - n[h] / 2);
      }
    }
    return e;
  }
  function Oe(t, e) {
    void 0 === e && (e = {});
    var i = e,
      n = i.placement,
      s = void 0 === n ? t.placement : n,
      o = i.boundary,
      r = void 0 === o ? At : o,
      a = i.rootBoundary,
      l = void 0 === a ? Et : a,
      c = i.elementContext,
      h = void 0 === c ? Tt : c,
      d = i.altBoundary,
      u = void 0 !== d && d,
      f = i.padding,
      p = void 0 === f ? 0 : f,
      g = oe('number' != typeof p ? p : re(p, vt)),
      m = h === Tt ? Ct : Tt,
      _ = t.rects.popper,
      b = t.elements[u ? m : h],
      v = (function (t, e, i) {
        var n =
            'clippingParents' === e
              ? (function (t) {
                  var e = Ae(te(t)),
                    i = ['absolute', 'fixed'].indexOf(Gt(t).position) >= 0 && Ft(t) ? ie(t) : t;
                  return Bt(i)
                    ? e.filter(function (t) {
                        return Bt(t) && Ut(t, i) && 'body' !== $t(t);
                      })
                    : [];
                })(t)
              : [].concat(e),
          s = [].concat(n, [i]),
          o = s[0],
          r = s.reduce(function (e, i) {
            var n = Te(t, i);
            return (e.top = Vt(n.top, e.top)), (e.right = Kt(n.right, e.right)), (e.bottom = Kt(n.bottom, e.bottom)), (e.left = Vt(n.left, e.left)), e;
          }, Te(t, o));
        return (r.width = r.right - r.left), (r.height = r.bottom - r.top), (r.x = r.left), (r.y = r.top), r;
      })(Bt(b) ? b : b.contextElement || Zt(t.elements.popper), r, l),
      y = Xt(t.elements.reference),
      w = Ce({ reference: y, element: _, strategy: 'absolute', placement: s }),
      A = Ee(Object.assign({}, _, w)),
      E = h === Tt ? A : y,
      T = { top: v.top - E.top + g.top, bottom: E.bottom - v.bottom + g.bottom, left: v.left - E.left + g.left, right: E.right - v.right + g.right },
      C = t.modifiersData.offset;
    if (h === Tt && C) {
      var O = C[s];
      Object.keys(T).forEach(function (t) {
        var e = [mt, gt].indexOf(t) >= 0 ? 1 : -1,
          i = [pt, gt].indexOf(t) >= 0 ? 'y' : 'x';
        T[t] += O[i] * e;
      });
    }
    return T;
  }
  function xe(t, e) {
    void 0 === e && (e = {});
    var i = e,
      n = i.placement,
      s = i.boundary,
      o = i.rootBoundary,
      r = i.padding,
      a = i.flipVariations,
      l = i.allowedAutoPlacements,
      c = void 0 === l ? xt : l,
      h = le(n),
      d = h
        ? a
          ? Ot
          : Ot.filter(function (t) {
              return le(t) === h;
            })
        : vt,
      u = d.filter(function (t) {
        return c.indexOf(t) >= 0;
      });
    0 === u.length && (u = d);
    var f = u.reduce(function (e, i) {
      return (e[i] = Oe(t, { placement: i, boundary: s, rootBoundary: o, padding: r })[qt(i)]), e;
    }, {});
    return Object.keys(f).sort(function (t, e) {
      return f[t] - f[e];
    });
  }
  const ke = {
    name: 'flip',
    enabled: !0,
    phase: 'main',
    fn: function (t) {
      var e = t.state,
        i = t.options,
        n = t.name;
      if (!e.modifiersData[n]._skip) {
        for (
          var s = i.mainAxis,
            o = void 0 === s || s,
            r = i.altAxis,
            a = void 0 === r || r,
            l = i.fallbackPlacements,
            c = i.padding,
            h = i.boundary,
            d = i.rootBoundary,
            u = i.altBoundary,
            f = i.flipVariations,
            p = void 0 === f || f,
            g = i.allowedAutoPlacements,
            m = e.options.placement,
            _ = qt(m),
            b =
              l ||
              (_ !== m && p
                ? (function (t) {
                    if (qt(t) === bt) return [];
                    var e = ge(t);
                    return [_e(t), e, _e(e)];
                  })(m)
                : [ge(m)]),
            v = [m].concat(b).reduce(function (t, i) {
              return t.concat(qt(i) === bt ? xe(e, { placement: i, boundary: h, rootBoundary: d, padding: c, flipVariations: p, allowedAutoPlacements: g }) : i);
            }, []),
            y = e.rects.reference,
            w = e.rects.popper,
            A = new Map(),
            E = !0,
            T = v[0],
            C = 0;
          C < v.length;
          C++
        ) {
          var O = v[C],
            x = qt(O),
            k = le(O) === yt,
            L = [pt, gt].indexOf(x) >= 0,
            D = L ? 'width' : 'height',
            S = Oe(e, { placement: O, boundary: h, rootBoundary: d, altBoundary: u, padding: c }),
            I = L ? (k ? mt : _t) : k ? gt : pt;
          y[D] > w[D] && (I = ge(I));
          var N = ge(I),
            P = [];
          if (
            (o && P.push(S[x] <= 0),
            a && P.push(S[I] <= 0, S[N] <= 0),
            P.every(function (t) {
              return t;
            }))
          ) {
            (T = O), (E = !1);
            break;
          }
          A.set(O, P);
        }
        if (E)
          for (
            var M = function (t) {
                var e = v.find(function (e) {
                  var i = A.get(e);
                  if (i)
                    return i.slice(0, t).every(function (t) {
                      return t;
                    });
                });
                if (e) return (T = e), 'break';
              },
              j = p ? 3 : 1;
            j > 0 && 'break' !== M(j);
            j--
          );
        e.placement !== T && ((e.modifiersData[n]._skip = !0), (e.placement = T), (e.reset = !0));
      }
    },
    requiresIfExists: ['offset'],
    data: { _skip: !1 },
  };
  function Le(t, e, i) {
    return void 0 === i && (i = { x: 0, y: 0 }), { top: t.top - e.height - i.y, right: t.right - e.width + i.x, bottom: t.bottom - e.height + i.y, left: t.left - e.width - i.x };
  }
  function De(t) {
    return [pt, mt, gt, _t].some(function (e) {
      return t[e] >= 0;
    });
  }
  const Se = {
      name: 'hide',
      enabled: !0,
      phase: 'main',
      requiresIfExists: ['preventOverflow'],
      fn: function (t) {
        var e = t.state,
          i = t.name,
          n = e.rects.reference,
          s = e.rects.popper,
          o = e.modifiersData.preventOverflow,
          r = Oe(e, { elementContext: 'reference' }),
          a = Oe(e, { altBoundary: !0 }),
          l = Le(r, n),
          c = Le(a, s, o),
          h = De(l),
          d = De(c);
        (e.modifiersData[i] = { referenceClippingOffsets: l, popperEscapeOffsets: c, isReferenceHidden: h, hasPopperEscaped: d }),
          (e.attributes.popper = Object.assign({}, e.attributes.popper, { 'data-popper-reference-hidden': h, 'data-popper-escaped': d }));
      },
    },
    Ie = {
      name: 'offset',
      enabled: !0,
      phase: 'main',
      requires: ['popperOffsets'],
      fn: function (t) {
        var e = t.state,
          i = t.options,
          n = t.name,
          s = i.offset,
          o = void 0 === s ? [0, 0] : s,
          r = xt.reduce(function (t, i) {
            return (
              (t[i] = (function (t, e, i) {
                var n = qt(t),
                  s = [_t, pt].indexOf(n) >= 0 ? -1 : 1,
                  o = 'function' == typeof i ? i(Object.assign({}, e, { placement: t })) : i,
                  r = o[0],
                  a = o[1];
                return (r = r || 0), (a = (a || 0) * s), [_t, mt].indexOf(n) >= 0 ? { x: a, y: r } : { x: r, y: a };
              })(i, e.rects, o)),
              t
            );
          }, {}),
          a = r[e.placement],
          l = a.x,
          c = a.y;
        null != e.modifiersData.popperOffsets && ((e.modifiersData.popperOffsets.x += l), (e.modifiersData.popperOffsets.y += c)), (e.modifiersData[n] = r);
      },
    },
    Ne = {
      name: 'popperOffsets',
      enabled: !0,
      phase: 'read',
      fn: function (t) {
        var e = t.state,
          i = t.name;
        e.modifiersData[i] = Ce({ reference: e.rects.reference, element: e.rects.popper, strategy: 'absolute', placement: e.placement });
      },
      data: {},
    },
    Pe = {
      name: 'preventOverflow',
      enabled: !0,
      phase: 'main',
      fn: function (t) {
        var e = t.state,
          i = t.options,
          n = t.name,
          s = i.mainAxis,
          o = void 0 === s || s,
          r = i.altAxis,
          a = void 0 !== r && r,
          l = i.boundary,
          c = i.rootBoundary,
          h = i.altBoundary,
          d = i.padding,
          u = i.tether,
          f = void 0 === u || u,
          p = i.tetherOffset,
          g = void 0 === p ? 0 : p,
          m = Oe(e, { boundary: l, rootBoundary: c, padding: d, altBoundary: h }),
          _ = qt(e.placement),
          b = le(e.placement),
          v = !b,
          y = ne(_),
          w = 'x' === y ? 'y' : 'x',
          A = e.modifiersData.popperOffsets,
          E = e.rects.reference,
          T = e.rects.popper,
          C = 'function' == typeof g ? g(Object.assign({}, e.rects, { placement: e.placement })) : g,
          O = 'number' == typeof C ? { mainAxis: C, altAxis: C } : Object.assign({ mainAxis: 0, altAxis: 0 }, C),
          x = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null,
          k = { x: 0, y: 0 };
        if (A) {
          if (o) {
            var L,
              D = 'y' === y ? pt : _t,
              S = 'y' === y ? gt : mt,
              I = 'y' === y ? 'height' : 'width',
              N = A[y],
              P = N + m[D],
              M = N - m[S],
              j = f ? -T[I] / 2 : 0,
              H = b === yt ? E[I] : T[I],
              $ = b === yt ? -T[I] : -E[I],
              W = e.elements.arrow,
              B = f && W ? Yt(W) : { width: 0, height: 0 },
              F = e.modifiersData['arrow#persistent'] ? e.modifiersData['arrow#persistent'].padding : { top: 0, right: 0, bottom: 0, left: 0 },
              z = F[D],
              R = F[S],
              q = se(0, E[I], B[I]),
              V = v ? E[I] / 2 - j - q - z - O.mainAxis : H - q - z - O.mainAxis,
              K = v ? -E[I] / 2 + j + q + R + O.mainAxis : $ + q + R + O.mainAxis,
              Q = e.elements.arrow && ie(e.elements.arrow),
              X = Q ? ('y' === y ? Q.clientTop || 0 : Q.clientLeft || 0) : 0,
              Y = null != (L = null == x ? void 0 : x[y]) ? L : 0,
              U = N + K - Y,
              G = se(f ? Kt(P, N + V - Y - X) : P, N, f ? Vt(M, U) : M);
            (A[y] = G), (k[y] = G - N);
          }
          if (a) {
            var J,
              Z = 'x' === y ? pt : _t,
              tt = 'x' === y ? gt : mt,
              et = A[w],
              it = 'y' === w ? 'height' : 'width',
              nt = et + m[Z],
              st = et - m[tt],
              ot = -1 !== [pt, _t].indexOf(_),
              rt = null != (J = null == x ? void 0 : x[w]) ? J : 0,
              at = ot ? nt : et - E[it] - T[it] - rt + O.altAxis,
              lt = ot ? et + E[it] + T[it] - rt - O.altAxis : st,
              ct =
                f && ot
                  ? (function (t, e, i) {
                      var n = se(t, e, i);
                      return n > i ? i : n;
                    })(at, et, lt)
                  : se(f ? at : nt, et, f ? lt : st);
            (A[w] = ct), (k[w] = ct - et);
          }
          e.modifiersData[n] = k;
        }
      },
      requiresIfExists: ['offset'],
    };
  function Me(t, e, i) {
    void 0 === i && (i = !1);
    var n,
      s,
      o = Ft(e),
      r =
        Ft(e) &&
        (function (t) {
          var e = t.getBoundingClientRect(),
            i = Qt(e.width) / t.offsetWidth || 1,
            n = Qt(e.height) / t.offsetHeight || 1;
          return 1 !== i || 1 !== n;
        })(e),
      a = Zt(e),
      l = Xt(t, r),
      c = { scrollLeft: 0, scrollTop: 0 },
      h = { x: 0, y: 0 };
    return (
      (o || (!o && !i)) &&
        (('body' !== $t(e) || ye(a)) && (c = (n = e) !== Wt(n) && Ft(n) ? { scrollLeft: (s = n).scrollLeft, scrollTop: s.scrollTop } : be(n)), Ft(e) ? (((h = Xt(e, !0)).x += e.clientLeft), (h.y += e.clientTop)) : a && (h.x = ve(a))),
      { x: l.left + c.scrollLeft - h.x, y: l.top + c.scrollTop - h.y, width: l.width, height: l.height }
    );
  }
  function je(t) {
    var e = new Map(),
      i = new Set(),
      n = [];
    function s(t) {
      i.add(t.name),
        [].concat(t.requires || [], t.requiresIfExists || []).forEach(function (t) {
          if (!i.has(t)) {
            var n = e.get(t);
            n && s(n);
          }
        }),
        n.push(t);
    }
    return (
      t.forEach(function (t) {
        e.set(t.name, t);
      }),
      t.forEach(function (t) {
        i.has(t.name) || s(t);
      }),
      n
    );
  }
  var He = { placement: 'bottom', modifiers: [], strategy: 'absolute' };
  function $e() {
    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++) e[i] = arguments[i];
    return !e.some(function (t) {
      return !(t && 'function' == typeof t.getBoundingClientRect);
    });
  }
  function We(t) {
    void 0 === t && (t = {});
    var e = t,
      i = e.defaultModifiers,
      n = void 0 === i ? [] : i,
      s = e.defaultOptions,
      o = void 0 === s ? He : s;
    return function (t, e, i) {
      void 0 === i && (i = o);
      var s,
        r,
        a = { placement: 'bottom', orderedModifiers: [], options: Object.assign({}, He, o), modifiersData: {}, elements: { reference: t, popper: e }, attributes: {}, styles: {} },
        l = [],
        c = !1,
        h = {
          state: a,
          setOptions: function (i) {
            var s = 'function' == typeof i ? i(a.options) : i;
            d(), (a.options = Object.assign({}, o, a.options, s)), (a.scrollParents = { reference: Bt(t) ? Ae(t) : t.contextElement ? Ae(t.contextElement) : [], popper: Ae(e) });
            var r,
              c,
              u = (function (t) {
                var e = je(t);
                return Ht.reduce(function (t, i) {
                  return t.concat(
                    e.filter(function (t) {
                      return t.phase === i;
                    })
                  );
                }, []);
              })(
                ((r = [].concat(n, a.options.modifiers)),
                (c = r.reduce(function (t, e) {
                  var i = t[e.name];
                  return (t[e.name] = i ? Object.assign({}, i, e, { options: Object.assign({}, i.options, e.options), data: Object.assign({}, i.data, e.data) }) : e), t;
                }, {})),
                Object.keys(c).map(function (t) {
                  return c[t];
                }))
              );
            return (
              (a.orderedModifiers = u.filter(function (t) {
                return t.enabled;
              })),
              a.orderedModifiers.forEach(function (t) {
                var e = t.name,
                  i = t.options,
                  n = void 0 === i ? {} : i,
                  s = t.effect;
                if ('function' == typeof s) {
                  var o = s({ state: a, name: e, instance: h, options: n });
                  l.push(o || function () {});
                }
              }),
              h.update()
            );
          },
          forceUpdate: function () {
            if (!c) {
              var t = a.elements,
                e = t.reference,
                i = t.popper;
              if ($e(e, i)) {
                (a.rects = { reference: Me(e, ie(i), 'fixed' === a.options.strategy), popper: Yt(i) }),
                  (a.reset = !1),
                  (a.placement = a.options.placement),
                  a.orderedModifiers.forEach(function (t) {
                    return (a.modifiersData[t.name] = Object.assign({}, t.data));
                  });
                for (var n = 0; n < a.orderedModifiers.length; n++)
                  if (!0 !== a.reset) {
                    var s = a.orderedModifiers[n],
                      o = s.fn,
                      r = s.options,
                      l = void 0 === r ? {} : r,
                      d = s.name;
                    'function' == typeof o && (a = o({ state: a, options: l, name: d, instance: h }) || a);
                  } else (a.reset = !1), (n = -1);
              }
            }
          },
          update:
            ((s = function () {
              return new Promise(function (t) {
                h.forceUpdate(), t(a);
              });
            }),
            function () {
              return (
                r ||
                  (r = new Promise(function (t) {
                    Promise.resolve().then(function () {
                      (r = void 0), t(s());
                    });
                  })),
                r
              );
            }),
          destroy: function () {
            d(), (c = !0);
          },
        };
      if (!$e(t, e)) return h;
      function d() {
        l.forEach(function (t) {
          return t();
        }),
          (l = []);
      }
      return (
        h.setOptions(i).then(function (t) {
          !c && i.onFirstUpdate && i.onFirstUpdate(t);
        }),
        h
      );
    };
  }
  var Be = We(),
    Fe = We({ defaultModifiers: [fe, Ne, de, Rt] }),
    ze = We({ defaultModifiers: [fe, Ne, de, Rt, Ie, ke, Pe, ae, Se] });
  const Re = Object.freeze(
      Object.defineProperty(
        {
          __proto__: null,
          popperGenerator: We,
          detectOverflow: Oe,
          createPopperBase: Be,
          createPopper: ze,
          createPopperLite: Fe,
          top: pt,
          bottom: gt,
          right: mt,
          left: _t,
          auto: bt,
          basePlacements: vt,
          start: yt,
          end: wt,
          clippingParents: At,
          viewport: Et,
          popper: Tt,
          reference: Ct,
          variationPlacements: Ot,
          placements: xt,
          beforeRead: kt,
          read: Lt,
          afterRead: Dt,
          beforeMain: St,
          main: It,
          afterMain: Nt,
          beforeWrite: Pt,
          write: Mt,
          afterWrite: jt,
          modifierPhases: Ht,
          applyStyles: Rt,
          arrow: ae,
          computeStyles: de,
          eventListeners: fe,
          flip: ke,
          hide: Se,
          offset: Ie,
          popperOffsets: Ne,
          preventOverflow: Pe,
        },
        Symbol.toStringTag,
        { value: 'Module' }
      )
    ),
    qe = 'dropdown',
    Ve = 'ArrowUp',
    Ke = 'ArrowDown',
    Qe = 'click.bs.dropdown.data-api',
    Xe = 'keydown.bs.dropdown.data-api',
    Ye = 'show',
    Ue = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
    Ge = `${Ue}.show`,
    Je = '.dropdown-menu',
    Ze = p() ? 'top-end' : 'top-start',
    ti = p() ? 'top-start' : 'top-end',
    ei = p() ? 'bottom-end' : 'bottom-start',
    ii = p() ? 'bottom-start' : 'bottom-end',
    ni = p() ? 'left-start' : 'right-start',
    si = p() ? 'right-start' : 'left-start',
    oi = { offset: [0, 2], boundary: 'clippingParents', reference: 'toggle', display: 'dynamic', popperConfig: null, autoClose: !0 },
    ri = { offset: '(array|string|function)', boundary: '(string|element)', reference: '(string|element|object)', display: 'string', popperConfig: '(null|object|function)', autoClose: '(boolean|string)' };
  class ai extends F {
    constructor(t, e) {
      super(t, e), (this._popper = null), (this._parent = this._element.parentNode), (this._menu = K.findOne(Je, this._parent)), (this._inNavbar = this._detectNavbar());
    }
    static get Default() {
      return oi;
    }
    static get DefaultType() {
      return ri;
    }
    static get NAME() {
      return qe;
    }
    toggle() {
      return this._isShown() ? this.hide() : this.show();
    }
    show() {
      if (l(this._element) || this._isShown()) return;
      const t = { relatedTarget: this._element };
      if (!P.trigger(this._element, 'show.bs.dropdown', t).defaultPrevented) {
        if ((this._createPopper(), 'ontouchstart' in document.documentElement && !this._parent.closest('.navbar-nav'))) for (const t of [].concat(...document.body.children)) P.on(t, 'mouseover', h);
        this._element.focus(), this._element.setAttribute('aria-expanded', !0), this._menu.classList.add(Ye), this._element.classList.add(Ye), P.trigger(this._element, 'shown.bs.dropdown', t);
      }
    }
    hide() {
      if (l(this._element) || !this._isShown()) return;
      const t = { relatedTarget: this._element };
      this._completeHide(t);
    }
    dispose() {
      this._popper && this._popper.destroy(), super.dispose();
    }
    update() {
      (this._inNavbar = this._detectNavbar()), this._popper && this._popper.update();
    }
    _completeHide(t) {
      if (!P.trigger(this._element, 'hide.bs.dropdown', t).defaultPrevented) {
        if ('ontouchstart' in document.documentElement) for (const t of [].concat(...document.body.children)) P.off(t, 'mouseover', h);
        this._popper && this._popper.destroy(),
          this._menu.classList.remove(Ye),
          this._element.classList.remove(Ye),
          this._element.setAttribute('aria-expanded', 'false'),
          W.removeDataAttribute(this._menu, 'popper'),
          P.trigger(this._element, 'hidden.bs.dropdown', t);
      }
    }
    _getConfig(t) {
      if ('object' == typeof (t = super._getConfig(t)).reference && !o(t.reference) && 'function' != typeof t.reference.getBoundingClientRect)
        throw new TypeError(`${qe.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
      return t;
    }
    _createPopper() {
      if (void 0 === Re) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
      let t = this._element;
      'parent' === this._config.reference ? (t = this._parent) : o(this._config.reference) ? (t = r(this._config.reference)) : 'object' == typeof this._config.reference && (t = this._config.reference);
      const e = this._getPopperConfig();
      this._popper = ze(t, this._menu, e);
    }
    _isShown() {
      return this._menu.classList.contains(Ye);
    }
    _getPlacement() {
      const t = this._parent;
      if (t.classList.contains('dropend')) return ni;
      if (t.classList.contains('dropstart')) return si;
      if (t.classList.contains('dropup-center')) return 'top';
      if (t.classList.contains('dropdown-center')) return 'bottom';
      const e = 'end' === getComputedStyle(this._menu).getPropertyValue('--bs-position').trim();
      return t.classList.contains('dropup') ? (e ? ti : Ze) : e ? ii : ei;
    }
    _detectNavbar() {
      return null !== this._element.closest('.navbar');
    }
    _getOffset() {
      const { offset: t } = this._config;
      return 'string' == typeof t ? t.split(',').map((t) => Number.parseInt(t, 10)) : 'function' == typeof t ? (e) => t(e, this._element) : t;
    }
    _getPopperConfig() {
      const t = {
        placement: this._getPlacement(),
        modifiers: [
          { name: 'preventOverflow', options: { boundary: this._config.boundary } },
          { name: 'offset', options: { offset: this._getOffset() } },
        ],
      };
      return (
        (this._inNavbar || 'static' === this._config.display) && (W.setDataAttribute(this._menu, 'popper', 'static'), (t.modifiers = [{ name: 'applyStyles', enabled: !1 }])),
        { ...t, ...('function' == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig) }
      );
    }
    _selectMenuItem({ key: t, target: e }) {
      const i = K.find('.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)', this._menu).filter((t) => a(t));
      i.length && b(i, e, t === Ke, !i.includes(e)).focus();
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = ai.getOrCreateInstance(this, t);
        if ('string' == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
    static clearMenus(t) {
      if (2 === t.button || ('keyup' === t.type && 'Tab' !== t.key)) return;
      const e = K.find(Ge);
      for (const i of e) {
        const e = ai.getInstance(i);
        if (!e || !1 === e._config.autoClose) continue;
        const n = t.composedPath(),
          s = n.includes(e._menu);
        if (n.includes(e._element) || ('inside' === e._config.autoClose && !s) || ('outside' === e._config.autoClose && s)) continue;
        if (e._menu.contains(t.target) && (('keyup' === t.type && 'Tab' === t.key) || /input|select|option|textarea|form/i.test(t.target.tagName))) continue;
        const o = { relatedTarget: e._element };
        'click' === t.type && (o.clickEvent = t), e._completeHide(o);
      }
    }
    static dataApiKeydownHandler(t) {
      const e = /input|textarea/i.test(t.target.tagName),
        i = 'Escape' === t.key,
        n = [Ve, Ke].includes(t.key);
      if (!n && !i) return;
      if (e && !i) return;
      t.preventDefault();
      const s = K.findOne(Ue, t.delegateTarget.parentNode),
        o = ai.getOrCreateInstance(s);
      if (n) return t.stopPropagation(), o.show(), void o._selectMenuItem(t);
      o._isShown() && (t.stopPropagation(), o.hide(), s.focus());
    }
  }
  P.on(document, Xe, Ue, ai.dataApiKeydownHandler),
    P.on(document, Xe, Je, ai.dataApiKeydownHandler),
    P.on(document, Qe, ai.clearMenus),
    P.on(document, 'keyup.bs.dropdown.data-api', ai.clearMenus),
    P.on(document, Qe, Ue, function (t) {
      t.preventDefault(), ai.getOrCreateInstance(this).toggle();
    }),
    g(ai);
  const li = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
    ci = '.sticky-top',
    hi = 'padding-right',
    di = 'margin-right';
  class ui {
    constructor() {
      this._element = document.body;
    }
    getWidth() {
      const t = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - t);
    }
    hide() {
      const t = this.getWidth();
      this._disableOverFlow(), this._setElementAttributes(this._element, hi, (e) => e + t), this._setElementAttributes(li, hi, (e) => e + t), this._setElementAttributes(ci, di, (e) => e - t);
    }
    reset() {
      this._resetElementAttributes(this._element, 'overflow'), this._resetElementAttributes(this._element, hi), this._resetElementAttributes(li, hi), this._resetElementAttributes(ci, di);
    }
    isOverflowing() {
      return this.getWidth() > 0;
    }
    _disableOverFlow() {
      this._saveInitialAttribute(this._element, 'overflow'), (this._element.style.overflow = 'hidden');
    }
    _setElementAttributes(t, e, i) {
      const n = this.getWidth();
      this._applyManipulationCallback(t, (t) => {
        if (t !== this._element && window.innerWidth > t.clientWidth + n) return;
        this._saveInitialAttribute(t, e);
        const s = window.getComputedStyle(t).getPropertyValue(e);
        t.style.setProperty(e, `${i(Number.parseFloat(s))}px`);
      });
    }
    _saveInitialAttribute(t, e) {
      const i = t.style.getPropertyValue(e);
      i && W.setDataAttribute(t, e, i);
    }
    _resetElementAttributes(t, e) {
      this._applyManipulationCallback(t, (t) => {
        const i = W.getDataAttribute(t, e);
        null !== i ? (W.removeDataAttribute(t, e), t.style.setProperty(e, i)) : t.style.removeProperty(e);
      });
    }
    _applyManipulationCallback(t, e) {
      if (o(t)) e(t);
      else for (const i of K.find(t, this._element)) e(i);
    }
  }
  const fi = 'show',
    pi = 'mousedown.bs.backdrop',
    gi = { className: 'modal-backdrop', isVisible: !0, isAnimated: !1, rootElement: 'body', clickCallback: null },
    mi = { className: 'string', isVisible: 'boolean', isAnimated: 'boolean', rootElement: '(element|string)', clickCallback: '(function|null)' };
  class _i extends B {
    constructor(t) {
      super(), (this._config = this._getConfig(t)), (this._isAppended = !1), (this._element = null);
    }
    static get Default() {
      return gi;
    }
    static get DefaultType() {
      return mi;
    }
    static get NAME() {
      return 'backdrop';
    }
    show(t) {
      if (!this._config.isVisible) return void m(t);
      this._append();
      const e = this._getElement();
      this._config.isAnimated && d(e),
        e.classList.add(fi),
        this._emulateAnimation(() => {
          m(t);
        });
    }
    hide(t) {
      this._config.isVisible
        ? (this._getElement().classList.remove(fi),
          this._emulateAnimation(() => {
            this.dispose(), m(t);
          }))
        : m(t);
    }
    dispose() {
      this._isAppended && (P.off(this._element, pi), this._element.remove(), (this._isAppended = !1));
    }
    _getElement() {
      if (!this._element) {
        const t = document.createElement('div');
        (t.className = this._config.className), this._config.isAnimated && t.classList.add('fade'), (this._element = t);
      }
      return this._element;
    }
    _configAfterMerge(t) {
      return (t.rootElement = r(t.rootElement)), t;
    }
    _append() {
      if (this._isAppended) return;
      const t = this._getElement();
      this._config.rootElement.append(t),
        P.on(t, pi, () => {
          m(this._config.clickCallback);
        }),
        (this._isAppended = !0);
    }
    _emulateAnimation(t) {
      _(t, this._getElement(), this._config.isAnimated);
    }
  }
  const bi = '.bs.focustrap',
    vi = 'backward',
    yi = { trapElement: null, autofocus: !0 },
    wi = { trapElement: 'element', autofocus: 'boolean' };
  class Ai extends B {
    constructor(t) {
      super(), (this._config = this._getConfig(t)), (this._isActive = !1), (this._lastTabNavDirection = null);
    }
    static get Default() {
      return yi;
    }
    static get DefaultType() {
      return wi;
    }
    static get NAME() {
      return 'focustrap';
    }
    activate() {
      this._isActive ||
        (this._config.autofocus && this._config.trapElement.focus(),
        P.off(document, bi),
        P.on(document, 'focusin.bs.focustrap', (t) => this._handleFocusin(t)),
        P.on(document, 'keydown.tab.bs.focustrap', (t) => this._handleKeydown(t)),
        (this._isActive = !0));
    }
    deactivate() {
      this._isActive && ((this._isActive = !1), P.off(document, bi));
    }
    _handleFocusin(t) {
      const { trapElement: e } = this._config;
      if (t.target === document || t.target === e || e.contains(t.target)) return;
      const i = K.focusableChildren(e);
      0 === i.length ? e.focus() : this._lastTabNavDirection === vi ? i[i.length - 1].focus() : i[0].focus();
    }
    _handleKeydown(t) {
      'Tab' === t.key && (this._lastTabNavDirection = t.shiftKey ? vi : 'forward');
    }
  }
  const Ei = 'hidden.bs.modal',
    Ti = 'show.bs.modal',
    Ci = 'modal-open',
    Oi = 'show',
    xi = 'modal-static',
    ki = { backdrop: !0, keyboard: !0, focus: !0 },
    Li = { backdrop: '(boolean|string)', keyboard: 'boolean', focus: 'boolean' };
  class Di extends F {
    constructor(t, e) {
      super(t, e),
        (this._dialog = K.findOne('.modal-dialog', this._element)),
        (this._backdrop = this._initializeBackDrop()),
        (this._focustrap = this._initializeFocusTrap()),
        (this._isShown = !1),
        (this._isTransitioning = !1),
        (this._scrollBar = new ui()),
        this._addEventListeners();
    }
    static get Default() {
      return ki;
    }
    static get DefaultType() {
      return Li;
    }
    static get NAME() {
      return 'modal';
    }
    toggle(t) {
      return this._isShown ? this.hide() : this.show(t);
    }
    show(t) {
      this._isShown ||
        this._isTransitioning ||
        P.trigger(this._element, Ti, { relatedTarget: t }).defaultPrevented ||
        ((this._isShown = !0), (this._isTransitioning = !0), this._scrollBar.hide(), document.body.classList.add(Ci), this._adjustDialog(), this._backdrop.show(() => this._showElement(t)));
    }
    hide() {
      this._isShown &&
        !this._isTransitioning &&
        (P.trigger(this._element, 'hide.bs.modal').defaultPrevented ||
          ((this._isShown = !1), (this._isTransitioning = !0), this._focustrap.deactivate(), this._element.classList.remove(Oi), this._queueCallback(() => this._hideModal(), this._element, this._isAnimated())));
    }
    dispose() {
      for (const t of [window, this._dialog]) P.off(t, '.bs.modal');
      this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
    }
    handleUpdate() {
      this._adjustDialog();
    }
    _initializeBackDrop() {
      return new _i({ isVisible: Boolean(this._config.backdrop), isAnimated: this._isAnimated() });
    }
    _initializeFocusTrap() {
      return new Ai({ trapElement: this._element });
    }
    _showElement(t) {
      document.body.contains(this._element) || document.body.append(this._element),
        (this._element.style.display = 'block'),
        this._element.removeAttribute('aria-hidden'),
        this._element.setAttribute('aria-modal', !0),
        this._element.setAttribute('role', 'dialog'),
        (this._element.scrollTop = 0);
      const e = K.findOne('.modal-body', this._dialog);
      e && (e.scrollTop = 0),
        d(this._element),
        this._element.classList.add(Oi),
        this._queueCallback(
          () => {
            this._config.focus && this._focustrap.activate(), (this._isTransitioning = !1), P.trigger(this._element, 'shown.bs.modal', { relatedTarget: t });
          },
          this._dialog,
          this._isAnimated()
        );
    }
    _addEventListeners() {
      P.on(this._element, 'keydown.dismiss.bs.modal', (t) => {
        if ('Escape' === t.key) return this._config.keyboard ? (t.preventDefault(), void this.hide()) : void this._triggerBackdropTransition();
      }),
        P.on(window, 'resize.bs.modal', () => {
          this._isShown && !this._isTransitioning && this._adjustDialog();
        }),
        P.on(this._element, 'click.dismiss.bs.modal', (t) => {
          t.target === t.currentTarget && ('static' !== this._config.backdrop ? this._config.backdrop && this.hide() : this._triggerBackdropTransition());
        });
    }
    _hideModal() {
      (this._element.style.display = 'none'),
        this._element.setAttribute('aria-hidden', !0),
        this._element.removeAttribute('aria-modal'),
        this._element.removeAttribute('role'),
        (this._isTransitioning = !1),
        this._backdrop.hide(() => {
          document.body.classList.remove(Ci), this._resetAdjustments(), this._scrollBar.reset(), P.trigger(this._element, Ei);
        });
    }
    _isAnimated() {
      return this._element.classList.contains('fade');
    }
    _triggerBackdropTransition() {
      if (P.trigger(this._element, 'hidePrevented.bs.modal').defaultPrevented) return;
      const t = this._element.scrollHeight > document.documentElement.clientHeight,
        e = this._element.style.overflowY;
      'hidden' === e ||
        this._element.classList.contains(xi) ||
        (t || (this._element.style.overflowY = 'hidden'),
        this._element.classList.add(xi),
        this._queueCallback(() => {
          this._element.classList.remove(xi),
            this._queueCallback(() => {
              this._element.style.overflowY = e;
            }, this._dialog);
        }, this._dialog),
        this._element.focus());
    }
    _adjustDialog() {
      const t = this._element.scrollHeight > document.documentElement.clientHeight,
        e = this._scrollBar.getWidth(),
        i = e > 0;
      if (i && !t) {
        const t = p() ? 'paddingLeft' : 'paddingRight';
        this._element.style[t] = `${e}px`;
      }
      if (!i && t) {
        const t = p() ? 'paddingRight' : 'paddingLeft';
        this._element.style[t] = `${e}px`;
      }
    }
    _resetAdjustments() {
      (this._element.style.paddingLeft = ''), (this._element.style.paddingRight = '');
    }
    static jQueryInterface(t, e) {
      return this.each(function () {
        const i = Di.getOrCreateInstance(this, t);
        if ('string' == typeof t) {
          if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
          i[t](e);
        }
      });
    }
  }
  P.on(document, 'click.bs.modal.data-api', '[data-bs-toggle="modal"]', function (t) {
    const e = n(this);
    ['A', 'AREA'].includes(this.tagName) && t.preventDefault(),
      P.one(e, Ti, (t) => {
        t.defaultPrevented ||
          P.one(e, Ei, () => {
            a(this) && this.focus();
          });
      });
    const i = K.findOne('.modal.show');
    i && Di.getInstance(i).hide(), Di.getOrCreateInstance(e).toggle(this);
  }),
    z(Di),
    g(Di);
  const Si = 'show',
    Ii = 'showing',
    Ni = 'hiding',
    Pi = '.offcanvas.show',
    Mi = 'hidePrevented.bs.offcanvas',
    ji = 'hidden.bs.offcanvas',
    Hi = { backdrop: !0, keyboard: !0, scroll: !1 },
    $i = { backdrop: '(boolean|string)', keyboard: 'boolean', scroll: 'boolean' };
  class Wi extends F {
    constructor(t, e) {
      super(t, e), (this._isShown = !1), (this._backdrop = this._initializeBackDrop()), (this._focustrap = this._initializeFocusTrap()), this._addEventListeners();
    }
    static get Default() {
      return Hi;
    }
    static get DefaultType() {
      return $i;
    }
    static get NAME() {
      return 'offcanvas';
    }
    toggle(t) {
      return this._isShown ? this.hide() : this.show(t);
    }
    show(t) {
      this._isShown ||
        P.trigger(this._element, 'show.bs.offcanvas', { relatedTarget: t }).defaultPrevented ||
        ((this._isShown = !0),
        this._backdrop.show(),
        this._config.scroll || new ui().hide(),
        this._element.setAttribute('aria-modal', !0),
        this._element.setAttribute('role', 'dialog'),
        this._element.classList.add(Ii),
        this._queueCallback(
          () => {
            this._config.scroll || this._focustrap.activate(), this._element.classList.add(Si), this._element.classList.remove(Ii), P.trigger(this._element, 'shown.bs.offcanvas', { relatedTarget: t });
          },
          this._element,
          !0
        ));
    }
    hide() {
      this._isShown &&
        (P.trigger(this._element, 'hide.bs.offcanvas').defaultPrevented ||
          (this._focustrap.deactivate(),
          this._element.blur(),
          (this._isShown = !1),
          this._element.classList.add(Ni),
          this._backdrop.hide(),
          this._queueCallback(
            () => {
              this._element.classList.remove(Si, Ni), this._element.removeAttribute('aria-modal'), this._element.removeAttribute('role'), this._config.scroll || new ui().reset(), P.trigger(this._element, ji);
            },
            this._element,
            !0
          )));
    }
    dispose() {
      this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
    }
    _initializeBackDrop() {
      const t = Boolean(this._config.backdrop);
      return new _i({
        className: 'offcanvas-backdrop',
        isVisible: t,
        isAnimated: !0,
        rootElement: this._element.parentNode,
        clickCallback: t
          ? () => {
              'static' !== this._config.backdrop ? this.hide() : P.trigger(this._element, Mi);
            }
          : null,
      });
    }
    _initializeFocusTrap() {
      return new Ai({ trapElement: this._element });
    }
    _addEventListeners() {
      P.on(this._element, 'keydown.dismiss.bs.offcanvas', (t) => {
        'Escape' === t.key && (this._config.keyboard ? this.hide() : P.trigger(this._element, Mi));
      });
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = Wi.getOrCreateInstance(this, t);
        if ('string' == typeof t) {
          if (void 0 === e[t] || t.startsWith('_') || 'constructor' === t) throw new TypeError(`No method named "${t}"`);
          e[t](this);
        }
      });
    }
  }
  P.on(document, 'click.bs.offcanvas.data-api', '[data-bs-toggle="offcanvas"]', function (t) {
    const e = n(this);
    if ((['A', 'AREA'].includes(this.tagName) && t.preventDefault(), l(this))) return;
    P.one(e, ji, () => {
      a(this) && this.focus();
    });
    const i = K.findOne(Pi);
    i && i !== e && Wi.getInstance(i).hide(), Wi.getOrCreateInstance(e).toggle(this);
  }),
    P.on(window, 'load.bs.offcanvas.data-api', () => {
      for (const t of K.find(Pi)) Wi.getOrCreateInstance(t).show();
    }),
    P.on(window, 'resize.bs.offcanvas', () => {
      for (const t of K.find('[aria-modal][class*=show][class*=offcanvas-]')) 'fixed' !== getComputedStyle(t).position && Wi.getOrCreateInstance(t).hide();
    }),
    z(Wi),
    g(Wi);
  const Bi = new Set(['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href']),
    Fi = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
    zi = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
    Ri = (t, e) => {
      const i = t.nodeName.toLowerCase();
      return e.includes(i) ? !Bi.has(i) || Boolean(Fi.test(t.nodeValue) || zi.test(t.nodeValue)) : e.filter((t) => t instanceof RegExp).some((t) => t.test(i));
    },
    qi = {
      '*': ['class', 'dir', 'id', 'lang', 'role', /^aria-[\w-]*$/i],
      a: ['target', 'href', 'title', 'rel'],
      area: [],
      b: [],
      br: [],
      col: [],
      code: [],
      div: [],
      em: [],
      hr: [],
      h1: [],
      h2: [],
      h3: [],
      h4: [],
      h5: [],
      h6: [],
      i: [],
      img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
      li: [],
      ol: [],
      p: [],
      pre: [],
      s: [],
      small: [],
      span: [],
      sub: [],
      sup: [],
      strong: [],
      u: [],
      ul: [],
    },
    Vi = { extraClass: '', template: '<div></div>', content: {}, html: !1, sanitize: !0, sanitizeFn: null, allowList: qi },
    Ki = { extraClass: '(string|function)', template: 'string', content: 'object', html: 'boolean', sanitize: 'boolean', sanitizeFn: '(null|function)', allowList: 'object' },
    Qi = { selector: '(string|element)', entry: '(string|element|function|null)' };
  class Xi extends B {
    constructor(t) {
      super(), (this._config = this._getConfig(t));
    }
    static get Default() {
      return Vi;
    }
    static get DefaultType() {
      return Ki;
    }
    static get NAME() {
      return 'TemplateFactory';
    }
    getContent() {
      return Object.values(this._config.content)
        .map((t) => this._resolvePossibleFunction(t))
        .filter(Boolean);
    }
    hasContent() {
      return this.getContent().length > 0;
    }
    changeContent(t) {
      return this._checkContent(t), (this._config.content = { ...this._config.content, ...t }), this;
    }
    toHtml() {
      const t = document.createElement('div');
      t.innerHTML = this._maybeSanitize(this._config.template);
      for (const [e, i] of Object.entries(this._config.content)) this._setContent(t, i, e);
      const e = t.children[0],
        i = this._resolvePossibleFunction(this._config.extraClass);
      return i && e.classList.add(...i.split(' ')), e;
    }
    _typeCheckConfig(t) {
      super._typeCheckConfig(t), this._checkContent(t.content);
    }
    _checkContent(t) {
      for (const [e, i] of Object.entries(t)) super._typeCheckConfig({ selector: e, entry: i }, Qi);
    }
    _setContent(t, e, i) {
      const n = K.findOne(i, t);
      n && ((e = this._resolvePossibleFunction(e)) ? (o(e) ? this._putElementInTemplate(r(e), n) : this._config.html ? (n.innerHTML = this._maybeSanitize(e)) : (n.textContent = e)) : n.remove());
    }
    _maybeSanitize(t) {
      return this._config.sanitize
        ? (function (t, e, i) {
            if (!t.length) return t;
            if (i && 'function' == typeof i) return i(t);
            const n = new window.DOMParser().parseFromString(t, 'text/html'),
              s = [].concat(...n.body.querySelectorAll('*'));
            for (const t of s) {
              const i = t.nodeName.toLowerCase();
              if (!Object.keys(e).includes(i)) {
                t.remove();
                continue;
              }
              const n = [].concat(...t.attributes),
                s = [].concat(e['*'] || [], e[i] || []);
              for (const e of n) Ri(e, s) || t.removeAttribute(e.nodeName);
            }
            return n.body.innerHTML;
          })(t, this._config.allowList, this._config.sanitizeFn)
        : t;
    }
    _resolvePossibleFunction(t) {
      return 'function' == typeof t ? t(this) : t;
    }
    _putElementInTemplate(t, e) {
      if (this._config.html) return (e.innerHTML = ''), void e.append(t);
      e.textContent = t.textContent;
    }
  }
  const Yi = new Set(['sanitize', 'allowList', 'sanitizeFn']),
    Ui = 'fade',
    Gi = 'show',
    Ji = '.modal',
    Zi = 'hide.bs.modal',
    tn = 'hover',
    en = 'focus',
    nn = { AUTO: 'auto', TOP: 'top', RIGHT: p() ? 'left' : 'right', BOTTOM: 'bottom', LEFT: p() ? 'right' : 'left' },
    sn = {
      animation: !0,
      template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
      trigger: 'hover focus',
      title: '',
      delay: 0,
      html: !1,
      selector: !1,
      placement: 'top',
      offset: [0, 0],
      container: !1,
      fallbackPlacements: ['top', 'right', 'bottom', 'left'],
      boundary: 'clippingParents',
      customClass: '',
      sanitize: !0,
      sanitizeFn: null,
      allowList: qi,
      popperConfig: null,
    },
    on = {
      animation: 'boolean',
      template: 'string',
      title: '(string|element|function)',
      trigger: 'string',
      delay: '(number|object)',
      html: 'boolean',
      selector: '(string|boolean)',
      placement: '(string|function)',
      offset: '(array|string|function)',
      container: '(string|element|boolean)',
      fallbackPlacements: 'array',
      boundary: '(string|element)',
      customClass: '(string|function)',
      sanitize: 'boolean',
      sanitizeFn: '(null|function)',
      allowList: 'object',
      popperConfig: '(null|object|function)',
    };
  class rn extends F {
    constructor(t, e) {
      if (void 0 === Re) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
      super(t, e), (this._isEnabled = !0), (this._timeout = 0), (this._isHovered = !1), (this._activeTrigger = {}), (this._popper = null), (this._templateFactory = null), (this.tip = null), this._setListeners();
    }
    static get Default() {
      return sn;
    }
    static get DefaultType() {
      return on;
    }
    static get NAME() {
      return 'tooltip';
    }
    enable() {
      this._isEnabled = !0;
    }
    disable() {
      this._isEnabled = !1;
    }
    toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    }
    toggle(t) {
      if (this._isEnabled) {
        if (t) {
          const e = this._initializeOnDelegatedTarget(t);
          return (e._activeTrigger.click = !e._activeTrigger.click), void (e._isWithActiveTrigger() ? e._enter() : e._leave());
        }
        this._isShown() ? this._leave() : this._enter();
      }
    }
    dispose() {
      clearTimeout(this._timeout), P.off(this._element.closest(Ji), Zi, this._hideModalHandler), this.tip && this.tip.remove(), this._disposePopper(), super.dispose();
    }
    show() {
      if ('none' === this._element.style.display) throw new Error('Please use show on visible elements');
      if (!this._isWithContent() || !this._isEnabled) return;
      const t = P.trigger(this._element, this.constructor.eventName('show')),
        e = (c(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
      if (t.defaultPrevented || !e) return;
      const i = this._getTipElement();
      this._element.setAttribute('aria-describedby', i.getAttribute('id'));
      const { container: n } = this._config;
      if (
        (this._element.ownerDocument.documentElement.contains(this.tip) || (n.append(i), P.trigger(this._element, this.constructor.eventName('inserted'))),
        this._popper ? this._popper.update() : this._createPopper(i),
        i.classList.add(Gi),
        'ontouchstart' in document.documentElement)
      )
        for (const t of [].concat(...document.body.children)) P.on(t, 'mouseover', h);
      this._queueCallback(
        () => {
          const t = this._isHovered;
          (this._isHovered = !1), P.trigger(this._element, this.constructor.eventName('shown')), t && this._leave();
        },
        this.tip,
        this._isAnimated()
      );
    }
    hide() {
      if (!this._isShown()) return;
      if (P.trigger(this._element, this.constructor.eventName('hide')).defaultPrevented) return;
      const t = this._getTipElement();
      if ((t.classList.remove(Gi), 'ontouchstart' in document.documentElement)) for (const t of [].concat(...document.body.children)) P.off(t, 'mouseover', h);
      (this._activeTrigger.click = !1),
        (this._activeTrigger.focus = !1),
        (this._activeTrigger.hover = !1),
        (this._isHovered = !1),
        this._queueCallback(
          () => {
            this._isWithActiveTrigger() || (this._isHovered || t.remove(), this._element.removeAttribute('aria-describedby'), P.trigger(this._element, this.constructor.eventName('hidden')), this._disposePopper());
          },
          this.tip,
          this._isAnimated()
        );
    }
    update() {
      this._popper && this._popper.update();
    }
    _isWithContent() {
      return Boolean(this._getTitle());
    }
    _getTipElement() {
      return this.tip || (this.tip = this._createTipElement(this._getContentForTemplate())), this.tip;
    }
    _createTipElement(t) {
      const e = this._getTemplateFactory(t).toHtml();
      if (!e) return null;
      e.classList.remove(Ui, Gi), e.classList.add(`bs-${this.constructor.NAME}-auto`);
      const i = ((t) => {
        do {
          t += Math.floor(1e6 * Math.random());
        } while (document.getElementById(t));
        return t;
      })(this.constructor.NAME).toString();
      return e.setAttribute('id', i), this._isAnimated() && e.classList.add(Ui), e;
    }
    setContent(t) {
      let e = !1;
      this.tip && ((e = this._isShown()), this.tip.remove(), (this.tip = null)), this._disposePopper(), (this.tip = this._createTipElement(t)), e && this.show();
    }
    _getTemplateFactory(t) {
      return this._templateFactory ? this._templateFactory.changeContent(t) : (this._templateFactory = new Xi({ ...this._config, content: t, extraClass: this._resolvePossibleFunction(this._config.customClass) })), this._templateFactory;
    }
    _getContentForTemplate() {
      return { '.tooltip-inner': this._getTitle() };
    }
    _getTitle() {
      return this._config.title;
    }
    _initializeOnDelegatedTarget(t) {
      return this.constructor.getOrCreateInstance(t.delegateTarget, this._getDelegateConfig());
    }
    _isAnimated() {
      return this._config.animation || (this.tip && this.tip.classList.contains(Ui));
    }
    _isShown() {
      return this.tip && this.tip.classList.contains(Gi);
    }
    _createPopper(t) {
      const e = 'function' == typeof this._config.placement ? this._config.placement.call(this, t, this._element) : this._config.placement,
        i = nn[e.toUpperCase()];
      this._popper = ze(this._element, t, this._getPopperConfig(i));
    }
    _getOffset() {
      const { offset: t } = this._config;
      return 'string' == typeof t ? t.split(',').map((t) => Number.parseInt(t, 10)) : 'function' == typeof t ? (e) => t(e, this._element) : t;
    }
    _resolvePossibleFunction(t) {
      return 'function' == typeof t ? t.call(this._element) : t;
    }
    _getPopperConfig(t) {
      const e = {
        placement: t,
        modifiers: [
          { name: 'flip', options: { fallbackPlacements: this._config.fallbackPlacements } },
          { name: 'offset', options: { offset: this._getOffset() } },
          { name: 'preventOverflow', options: { boundary: this._config.boundary } },
          { name: 'arrow', options: { element: `.${this.constructor.NAME}-arrow` } },
          {
            name: 'preSetPlacement',
            enabled: !0,
            phase: 'beforeMain',
            fn: (t) => {
              this._getTipElement().setAttribute('data-popper-placement', t.state.placement);
            },
          },
        ],
      };
      return { ...e, ...('function' == typeof this._config.popperConfig ? this._config.popperConfig(e) : this._config.popperConfig) };
    }
    _setListeners() {
      const t = this._config.trigger.split(' ');
      for (const e of t)
        if ('click' === e) P.on(this._element, this.constructor.eventName('click'), this._config.selector, (t) => this.toggle(t));
        else if ('manual' !== e) {
          const t = e === tn ? this.constructor.eventName('mouseenter') : this.constructor.eventName('focusin'),
            i = e === tn ? this.constructor.eventName('mouseleave') : this.constructor.eventName('focusout');
          P.on(this._element, t, this._config.selector, (t) => {
            const e = this._initializeOnDelegatedTarget(t);
            (e._activeTrigger['focusin' === t.type ? en : tn] = !0), e._enter();
          }),
            P.on(this._element, i, this._config.selector, (t) => {
              const e = this._initializeOnDelegatedTarget(t);
              (e._activeTrigger['focusout' === t.type ? en : tn] = e._element.contains(t.relatedTarget)), e._leave();
            });
        }
      (this._hideModalHandler = () => {
        this._element && this.hide();
      }),
        P.on(this._element.closest(Ji), Zi, this._hideModalHandler),
        this._config.selector ? (this._config = { ...this._config, trigger: 'manual', selector: '' }) : this._fixTitle();
    }
    _fixTitle() {
      const t = this._config.originalTitle;
      t && (this._element.getAttribute('aria-label') || this._element.textContent || this._element.setAttribute('aria-label', t), this._element.removeAttribute('title'));
    }
    _enter() {
      this._isShown() || this._isHovered
        ? (this._isHovered = !0)
        : ((this._isHovered = !0),
          this._setTimeout(() => {
            this._isHovered && this.show();
          }, this._config.delay.show));
    }
    _leave() {
      this._isWithActiveTrigger() ||
        ((this._isHovered = !1),
        this._setTimeout(() => {
          this._isHovered || this.hide();
        }, this._config.delay.hide));
    }
    _setTimeout(t, e) {
      clearTimeout(this._timeout), (this._timeout = setTimeout(t, e));
    }
    _isWithActiveTrigger() {
      return Object.values(this._activeTrigger).includes(!0);
    }
    _getConfig(t) {
      const e = W.getDataAttributes(this._element);
      for (const t of Object.keys(e)) Yi.has(t) && delete e[t];
      return (t = { ...e, ...('object' == typeof t && t ? t : {}) }), (t = this._mergeConfigObj(t)), (t = this._configAfterMerge(t)), this._typeCheckConfig(t), t;
    }
    _configAfterMerge(t) {
      return (
        (t.container = !1 === t.container ? document.body : r(t.container)),
        'number' == typeof t.delay && (t.delay = { show: t.delay, hide: t.delay }),
        (t.originalTitle = this._element.getAttribute('title') || ''),
        (t.title = this._resolvePossibleFunction(t.title) || t.originalTitle),
        'number' == typeof t.title && (t.title = t.title.toString()),
        'number' == typeof t.content && (t.content = t.content.toString()),
        t
      );
    }
    _getDelegateConfig() {
      const t = {};
      for (const e in this._config) this.constructor.Default[e] !== this._config[e] && (t[e] = this._config[e]);
      return t;
    }
    _disposePopper() {
      this._popper && (this._popper.destroy(), (this._popper = null));
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = rn.getOrCreateInstance(this, t);
        if ('string' == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  g(rn);
  const an = {
      ...rn.Default,
      placement: 'right',
      offset: [0, 8],
      trigger: 'click',
      content: '',
      template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    },
    ln = { ...rn.DefaultType, content: '(null|string|element|function)' };
  class cn extends rn {
    static get Default() {
      return an;
    }
    static get DefaultType() {
      return ln;
    }
    static get NAME() {
      return 'popover';
    }
    _isWithContent() {
      return this._getTitle() || this._getContent();
    }
    _getContentForTemplate() {
      return { '.popover-header': this._getTitle(), '.popover-body': this._getContent() };
    }
    _getContent() {
      return this._resolvePossibleFunction(this._config.content);
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = cn.getOrCreateInstance(this, t);
        if ('string' == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  g(cn);
  const hn = 'click.bs.scrollspy',
    dn = 'active',
    un = '[href]',
    fn = { offset: null, rootMargin: '0px 0px -25%', smoothScroll: !1, target: null },
    pn = { offset: '(number|null)', rootMargin: 'string', smoothScroll: 'boolean', target: 'element' };
  class gn extends F {
    constructor(t, e) {
      super(t, e),
        (this._targetLinks = new Map()),
        (this._observableSections = new Map()),
        (this._rootElement = 'visible' === getComputedStyle(this._element).overflowY ? null : this._element),
        (this._activeTarget = null),
        (this._observer = null),
        (this._previousScrollData = { visibleEntryTop: 0, parentScrollTop: 0 }),
        this.refresh();
    }
    static get Default() {
      return fn;
    }
    static get DefaultType() {
      return pn;
    }
    static get NAME() {
      return 'scrollspy';
    }
    refresh() {
      this._initializeTargetsAndObservables(), this._maybeEnableSmoothScroll(), this._observer ? this._observer.disconnect() : (this._observer = this._getNewObserver());
      for (const t of this._observableSections.values()) this._observer.observe(t);
    }
    dispose() {
      this._observer.disconnect(), super.dispose();
    }
    _configAfterMerge(t) {
      return (t.target = r(t.target) || document.body), t;
    }
    _maybeEnableSmoothScroll() {
      this._config.smoothScroll &&
        (P.off(this._config.target, hn),
        P.on(this._config.target, hn, un, (t) => {
          const e = this._observableSections.get(t.target.hash);
          if (e) {
            t.preventDefault();
            const i = this._rootElement || window,
              n = e.offsetTop - this._element.offsetTop;
            if (i.scrollTo) return void i.scrollTo({ top: n });
            i.scrollTop = n;
          }
        }));
    }
    _getNewObserver() {
      const t = { root: this._rootElement, threshold: [0.1, 0.5, 1], rootMargin: this._getRootMargin() };
      return new IntersectionObserver((t) => this._observerCallback(t), t);
    }
    _observerCallback(t) {
      const e = (t) => this._targetLinks.get(`#${t.target.id}`),
        i = (t) => {
          (this._previousScrollData.visibleEntryTop = t.target.offsetTop), this._process(e(t));
        },
        n = (this._rootElement || document.documentElement).scrollTop,
        s = n >= this._previousScrollData.parentScrollTop;
      this._previousScrollData.parentScrollTop = n;
      for (const o of t) {
        if (!o.isIntersecting) {
          (this._activeTarget = null), this._clearActiveClass(e(o));
          continue;
        }
        const t = o.target.offsetTop >= this._previousScrollData.visibleEntryTop;
        if (s && t) {
          if ((i(o), !n)) return;
        } else s || t || i(o);
      }
    }
    _getRootMargin() {
      return this._config.offset ? `${this._config.offset}px 0px -30%` : this._config.rootMargin;
    }
    _initializeTargetsAndObservables() {
      (this._targetLinks = new Map()), (this._observableSections = new Map());
      const t = K.find(un, this._config.target);
      for (const e of t) {
        if (!e.hash || l(e)) continue;
        const t = K.findOne(e.hash, this._element);
        a(t) && (this._targetLinks.set(e.hash, e), this._observableSections.set(e.hash, t));
      }
    }
    _process(t) {
      this._activeTarget !== t && (this._clearActiveClass(this._config.target), (this._activeTarget = t), t.classList.add(dn), this._activateParents(t), P.trigger(this._element, 'activate.bs.scrollspy', { relatedTarget: t }));
    }
    _activateParents(t) {
      if (t.classList.contains('dropdown-item')) K.findOne('.dropdown-toggle', t.closest('.dropdown')).classList.add(dn);
      else for (const e of K.parents(t, '.nav, .list-group')) for (const t of K.prev(e, '.nav-link, .nav-item > .nav-link, .list-group-item')) t.classList.add(dn);
    }
    _clearActiveClass(t) {
      t.classList.remove(dn);
      const e = K.find('[href].active', t);
      for (const t of e) t.classList.remove(dn);
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = gn.getOrCreateInstance(this, t);
        if ('string' == typeof t) {
          if (void 0 === e[t] || t.startsWith('_') || 'constructor' === t) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  P.on(window, 'load.bs.scrollspy.data-api', () => {
    for (const t of K.find('[data-bs-spy="scroll"]')) gn.getOrCreateInstance(t);
  }),
    g(gn);
  const mn = 'ArrowLeft',
    _n = 'ArrowRight',
    bn = 'ArrowUp',
    vn = 'ArrowDown',
    yn = 'active',
    wn = 'fade',
    An = 'show',
    En = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
    Tn = `.nav-link:not(.dropdown-toggle), .list-group-item:not(.dropdown-toggle), [role="tab"]:not(.dropdown-toggle), ${En}`;
  class Cn extends F {
    constructor(t) {
      super(t), (this._parent = this._element.closest('.list-group, .nav, [role="tablist"]')), this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), P.on(this._element, 'keydown.bs.tab', (t) => this._keydown(t)));
    }
    static get NAME() {
      return 'tab';
    }
    show() {
      const t = this._element;
      if (this._elemIsActive(t)) return;
      const e = this._getActiveElem(),
        i = e ? P.trigger(e, 'hide.bs.tab', { relatedTarget: t }) : null;
      P.trigger(t, 'show.bs.tab', { relatedTarget: e }).defaultPrevented || (i && i.defaultPrevented) || (this._deactivate(e, t), this._activate(t, e));
    }
    _activate(t, e) {
      if (!t) return;
      t.classList.add(yn), this._activate(n(t));
      const i = t.classList.contains(wn);
      this._queueCallback(
        () => {
          i && t.classList.add(An), 'tab' === t.getAttribute('role') && (t.focus(), t.removeAttribute('tabindex'), t.setAttribute('aria-selected', !0), this._toggleDropDown(t, !0), P.trigger(t, 'shown.bs.tab', { relatedTarget: e }));
        },
        t,
        i
      );
    }
    _deactivate(t, e) {
      if (!t) return;
      t.classList.remove(yn), t.blur(), this._deactivate(n(t));
      const i = t.classList.contains(wn);
      this._queueCallback(
        () => {
          i && t.classList.remove(An), 'tab' === t.getAttribute('role') && (t.setAttribute('aria-selected', !1), t.setAttribute('tabindex', '-1'), this._toggleDropDown(t, !1), P.trigger(t, 'hidden.bs.tab', { relatedTarget: e }));
        },
        t,
        i
      );
    }
    _keydown(t) {
      if (![mn, _n, bn, vn].includes(t.key)) return;
      t.stopPropagation(), t.preventDefault();
      const e = [_n, vn].includes(t.key),
        i = b(
          this._getChildren().filter((t) => !l(t)),
          t.target,
          e,
          !0
        );
      i && Cn.getOrCreateInstance(i).show();
    }
    _getChildren() {
      return K.find(Tn, this._parent);
    }
    _getActiveElem() {
      return this._getChildren().find((t) => this._elemIsActive(t)) || null;
    }
    _setInitialAttributes(t, e) {
      this._setAttributeIfNotExists(t, 'role', 'tablist');
      for (const t of e) this._setInitialAttributesOnChild(t);
    }
    _setInitialAttributesOnChild(t) {
      t = this._getInnerElement(t);
      const e = this._elemIsActive(t),
        i = this._getOuterElement(t);
      t.setAttribute('aria-selected', e),
        i !== t && this._setAttributeIfNotExists(i, 'role', 'presentation'),
        e || t.setAttribute('tabindex', '-1'),
        this._setAttributeIfNotExists(t, 'role', 'tab'),
        this._setInitialAttributesOnTargetPanel(t);
    }
    _setInitialAttributesOnTargetPanel(t) {
      const e = n(t);
      e && (this._setAttributeIfNotExists(e, 'role', 'tabpanel'), t.id && this._setAttributeIfNotExists(e, 'aria-labelledby', `#${t.id}`));
    }
    _toggleDropDown(t, e) {
      const i = this._getOuterElement(t);
      if (!i.classList.contains('dropdown')) return;
      const n = (t, n) => {
        const s = K.findOne(t, i);
        s && s.classList.toggle(n, e);
      };
      n('.dropdown-toggle', yn), n('.dropdown-menu', An), n('.dropdown-item', yn), i.setAttribute('aria-expanded', e);
    }
    _setAttributeIfNotExists(t, e, i) {
      t.hasAttribute(e) || t.setAttribute(e, i);
    }
    _elemIsActive(t) {
      return t.classList.contains(yn);
    }
    _getInnerElement(t) {
      return t.matches(Tn) ? t : K.findOne(Tn, t);
    }
    _getOuterElement(t) {
      return t.closest('.nav-item, .list-group-item') || t;
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = Cn.getOrCreateInstance(this);
        if ('string' == typeof t) {
          if (void 0 === e[t] || t.startsWith('_') || 'constructor' === t) throw new TypeError(`No method named "${t}"`);
          e[t]();
        }
      });
    }
  }
  P.on(document, 'click.bs.tab', En, function (t) {
    ['A', 'AREA'].includes(this.tagName) && t.preventDefault(), l(this) || Cn.getOrCreateInstance(this).show();
  }),
    P.on(window, 'load.bs.tab', () => {
      for (const t of K.find('.active[data-bs-toggle="tab"], .active[data-bs-toggle="pill"], .active[data-bs-toggle="list"]')) Cn.getOrCreateInstance(t);
    }),
    g(Cn);
  const On = 'hide',
    xn = 'show',
    kn = 'showing',
    Ln = { animation: 'boolean', autohide: 'boolean', delay: 'number' },
    Dn = { animation: !0, autohide: !0, delay: 5e3 };
  class Sn extends F {
    constructor(t, e) {
      super(t, e), (this._timeout = null), (this._hasMouseInteraction = !1), (this._hasKeyboardInteraction = !1), this._setListeners();
    }
    static get Default() {
      return Dn;
    }
    static get DefaultType() {
      return Ln;
    }
    static get NAME() {
      return 'toast';
    }
    show() {
      P.trigger(this._element, 'show.bs.toast').defaultPrevented ||
        (this._clearTimeout(),
        this._config.animation && this._element.classList.add('fade'),
        this._element.classList.remove(On),
        d(this._element),
        this._element.classList.add(xn, kn),
        this._queueCallback(
          () => {
            this._element.classList.remove(kn), P.trigger(this._element, 'shown.bs.toast'), this._maybeScheduleHide();
          },
          this._element,
          this._config.animation
        ));
    }
    hide() {
      this.isShown() &&
        (P.trigger(this._element, 'hide.bs.toast').defaultPrevented ||
          (this._element.classList.add(kn),
          this._queueCallback(
            () => {
              this._element.classList.add(On), this._element.classList.remove(kn, xn), P.trigger(this._element, 'hidden.bs.toast');
            },
            this._element,
            this._config.animation
          )));
    }
    dispose() {
      this._clearTimeout(), this.isShown() && this._element.classList.remove(xn), super.dispose();
    }
    isShown() {
      return this._element.classList.contains(xn);
    }
    _maybeScheduleHide() {
      this._config.autohide &&
        (this._hasMouseInteraction ||
          this._hasKeyboardInteraction ||
          (this._timeout = setTimeout(() => {
            this.hide();
          }, this._config.delay)));
    }
    _onInteraction(t, e) {
      switch (t.type) {
        case 'mouseover':
        case 'mouseout':
          this._hasMouseInteraction = e;
          break;
        case 'focusin':
        case 'focusout':
          this._hasKeyboardInteraction = e;
      }
      if (e) return void this._clearTimeout();
      const i = t.relatedTarget;
      this._element === i || this._element.contains(i) || this._maybeScheduleHide();
    }
    _setListeners() {
      P.on(this._element, 'mouseover.bs.toast', (t) => this._onInteraction(t, !0)),
        P.on(this._element, 'mouseout.bs.toast', (t) => this._onInteraction(t, !1)),
        P.on(this._element, 'focusin.bs.toast', (t) => this._onInteraction(t, !0)),
        P.on(this._element, 'focusout.bs.toast', (t) => this._onInteraction(t, !1));
    }
    _clearTimeout() {
      clearTimeout(this._timeout), (this._timeout = null);
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = Sn.getOrCreateInstance(this, t);
        if ('string' == typeof t) {
          if (void 0 === e[t]) throw new TypeError(`No method named "${t}"`);
          e[t](this);
        }
      });
    }
  }
  return z(Sn), g(Sn), { Alert: R, Button: V, Carousel: rt, Collapse: ft, Dropdown: ai, Modal: Di, Offcanvas: Wi, Popover: cn, ScrollSpy: gn, Tab: Cn, Toast: Sn, Tooltip: rn };
});
//# sourceMappingURL=bootstrap.bundle.min.js.map

/*------------------------------------
  HT JQuery Appear
--------------------------------------*/
(function ($) {
  $.fn.appear = function (fn, options) {
    var settings = $.extend({ data: undefined, one: true, accX: 0, accY: 0 }, options);
    return this.each(function () {
      var t = $(this);
      t.appeared = false;
      if (!fn) {
        t.trigger('appear', settings.data);
        return;
      }
      var w = $(window);
      var check = function () {
        if (!t.is(':visible')) {
          t.appeared = false;
          return;
        }
        var a = w.scrollLeft();
        var b = w.scrollTop();
        var o = t.offset();
        var x = o.left;
        var y = o.top;
        var ax = settings.accX;
        var ay = settings.accY;
        var th = t.height();
        var wh = w.height();
        var tw = t.width();
        var ww = w.width();
        if (y + th + ay >= b && y <= b + wh + ay && x + tw + ax >= a && x <= a + ww + ax) {
          if (!t.appeared) t.trigger('appear', settings.data);
        } else {
          t.appeared = false;
        }
      };
      var modifiedFn = function () {
        t.appeared = true;
        if (settings.one) {
          w.unbind('scroll', check);
          var i = $.inArray(check, $.fn.appear.checks);
          if (i >= 0) $.fn.appear.checks.splice(i, 1);
        }
        fn.apply(this, arguments);
      };
      if (settings.one) t.one('appear', settings.data, modifiedFn);
      else t.bind('appear', settings.data, modifiedFn);
      w.scroll(check);
      $.fn.appear.checks.push(check);
      check();
    });
  };
  $.extend($.fn.appear, {
    checks: [],
    timeout: null,
    checkAll: function () {
      var length = $.fn.appear.checks.length;
      if (length > 0) while (length--) $.fn.appear.checks[length]();
    },
    run: function () {
      if ($.fn.appear.timeout) clearTimeout($.fn.appear.timeout);
      $.fn.appear.timeout = setTimeout($.fn.appear.checkAll, 20);
    },
  });
  $.each(['append', 'prepend', 'after', 'before', 'attr', 'removeAttr', 'addClass', 'removeClass', 'toggleClass', 'remove', 'css', 'show', 'hide'], function (i, n) {
    var old = $.fn[n];
    if (old) {
      $.fn[n] = function () {
        var r = old.apply(this, arguments);
        $.fn.appear.run();
        return r;
      };
    }
  });
})(jQuery);

/*------------------------------------
  HT Ease min
--------------------------------------*/
(function (factory) {
  if (typeof define === 'function' && define.amd) {
    define(['jquery'], function ($) {
      return factory($);
    });
  } else if (typeof module === 'object' && typeof module.exports === 'object') {
    exports = factory(require('jquery'));
  } else {
    factory(jQuery);
  }
})(function ($) {
  $.easing.jswing = $.easing.swing;
  var pow = Math.pow,
    sqrt = Math.sqrt,
    sin = Math.sin,
    cos = Math.cos,
    PI = Math.PI,
    c1 = 1.70158,
    c2 = c1 * 1.525,
    c3 = c1 + 1,
    c4 = (2 * PI) / 3,
    c5 = (2 * PI) / 4.5;
  function bounceOut(x) {
    var n1 = 7.5625,
      d1 = 2.75;
    if (x < 1 / d1) {
      return n1 * x * x;
    } else if (x < 2 / d1) {
      return n1 * (x -= 1.5 / d1) * x + 0.75;
    } else if (x < 2.5 / d1) {
      return n1 * (x -= 2.25 / d1) * x + 0.9375;
    } else {
      return n1 * (x -= 2.625 / d1) * x + 0.984375;
    }
  }
  $.extend($.easing, {
    def: 'easeOutQuad',
    swing: function (x) {
      return $.easing[$.easing.def](x);
    },
    easeInQuad: function (x) {
      return x * x;
    },
    easeOutQuad: function (x) {
      return 1 - (1 - x) * (1 - x);
    },
    easeInOutQuad: function (x) {
      return x < 0.5 ? 2 * x * x : 1 - pow(-2 * x + 2, 2) / 2;
    },
    easeInCubic: function (x) {
      return x * x * x;
    },
    easeOutCubic: function (x) {
      return 1 - pow(1 - x, 3);
    },
    easeInOutCubic: function (x) {
      return x < 0.5 ? 4 * x * x * x : 1 - pow(-2 * x + 2, 3) / 2;
    },
    easeInQuart: function (x) {
      return x * x * x * x;
    },
    easeOutQuart: function (x) {
      return 1 - pow(1 - x, 4);
    },
    easeInOutQuart: function (x) {
      return x < 0.5 ? 8 * x * x * x * x : 1 - pow(-2 * x + 2, 4) / 2;
    },
    easeInQuint: function (x) {
      return x * x * x * x * x;
    },
    easeOutQuint: function (x) {
      return 1 - pow(1 - x, 5);
    },
    easeInOutQuint: function (x) {
      return x < 0.5 ? 16 * x * x * x * x * x : 1 - pow(-2 * x + 2, 5) / 2;
    },
    easeInSine: function (x) {
      return 1 - cos((x * PI) / 2);
    },
    easeOutSine: function (x) {
      return sin((x * PI) / 2);
    },
    easeInOutSine: function (x) {
      return -(cos(PI * x) - 1) / 2;
    },
    easeInExpo: function (x) {
      return x === 0 ? 0 : pow(2, 10 * x - 10);
    },
    easeOutExpo: function (x) {
      return x === 1 ? 1 : 1 - pow(2, -10 * x);
    },
    easeInOutExpo: function (x) {
      return x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ? pow(2, 20 * x - 10) / 2 : (2 - pow(2, -20 * x + 10)) / 2;
    },
    easeInCirc: function (x) {
      return 1 - sqrt(1 - pow(x, 2));
    },
    easeOutCirc: function (x) {
      return sqrt(1 - pow(x - 1, 2));
    },
    easeInOutCirc: function (x) {
      return x < 0.5 ? (1 - sqrt(1 - pow(2 * x, 2))) / 2 : (sqrt(1 - pow(-2 * x + 2, 2)) + 1) / 2;
    },
    easeInElastic: function (x) {
      return x === 0 ? 0 : x === 1 ? 1 : -pow(2, 10 * x - 10) * sin((x * 10 - 10.75) * c4);
    },
    easeOutElastic: function (x) {
      return x === 0 ? 0 : x === 1 ? 1 : pow(2, -10 * x) * sin((x * 10 - 0.75) * c4) + 1;
    },
    easeInOutElastic: function (x) {
      return x === 0 ? 0 : x === 1 ? 1 : x < 0.5 ? -(pow(2, 20 * x - 10) * sin((20 * x - 11.125) * c5)) / 2 : (pow(2, -20 * x + 10) * sin((20 * x - 11.125) * c5)) / 2 + 1;
    },
    easeInBack: function (x) {
      return c3 * x * x * x - c1 * x * x;
    },
    easeOutBack: function (x) {
      return 1 + c3 * pow(x - 1, 3) + c1 * pow(x - 1, 2);
    },
    easeInOutBack: function (x) {
      return x < 0.5 ? (pow(2 * x, 2) * ((c2 + 1) * 2 * x - c2)) / 2 : (pow(2 * x - 2, 2) * ((c2 + 1) * (x * 2 - 2) + c2) + 2) / 2;
    },
    easeInBounce: function (x) {
      return 1 - bounceOut(1 - x);
    },
    easeOutBounce: bounceOut,
    easeInOutBounce: function (x) {
      return x < 0.5 ? (1 - bounceOut(1 - 2 * x)) / 2 : (1 + bounceOut(2 * x - 1)) / 2;
    },
  });
});

/*------------------------------------
  HT Modernizr
--------------------------------------*/
window.Modernizr = (function (window, document, undefined) {
  var version = '2.8.3',
    Modernizr = {},
    enableClasses = true,
    docElement = document.documentElement,
    mod = 'modernizr',
    modElem = document.createElement(mod),
    mStyle = modElem.style,
    inputElem = document.createElement('input'),
    smile = ':)',
    toString = {}.toString,
    prefixes = ' -webkit- -moz- -o- -ms- '.split(' '),
    omPrefixes = 'Webkit Moz O ms',
    cssomPrefixes = omPrefixes.split(' '),
    domPrefixes = omPrefixes.toLowerCase().split(' '),
    ns = { svg: 'http://www.w3.org/2000/svg' },
    tests = {},
    inputs = {},
    attrs = {},
    classes = [],
    slice = classes.slice,
    featureName,
    injectElementWithStyles = function (rule, callback, nodes, testnames) {
      var style,
        ret,
        node,
        docOverflow,
        div = document.createElement('div'),
        body = document.body,
        fakeBody = body || document.createElement('body');
      if (parseInt(nodes, 10)) {
        while (nodes--) {
          node = document.createElement('div');
          node.id = testnames ? testnames[nodes] : mod + (nodes + 1);
          div.appendChild(node);
        }
      }
      style = ['&#173;', '<style id="s', mod, '">', rule, '</style>'].join('');
      div.id = mod;
      (body ? div : fakeBody).innerHTML += style;
      fakeBody.appendChild(div);
      if (!body) {
        fakeBody.style.background = '';
        fakeBody.style.overflow = 'hidden';
        docOverflow = docElement.style.overflow;
        docElement.style.overflow = 'hidden';
        docElement.appendChild(fakeBody);
      }
      ret = callback(div, rule);
      if (!body) {
        fakeBody.parentNode.removeChild(fakeBody);
        docElement.style.overflow = docOverflow;
      } else {
        div.parentNode.removeChild(div);
      }
      return !!ret;
    },
    testMediaQuery = function (mq) {
      var matchMedia = window.matchMedia || window.msMatchMedia;
      if (matchMedia) {
        return (matchMedia(mq) && matchMedia(mq).matches) || false;
      }
      var bool;
      injectElementWithStyles('@media ' + mq + ' { #' + mod + ' { position: absolute; } }', function (node) {
        bool = (window.getComputedStyle ? getComputedStyle(node, null) : node.currentStyle)['position'] == 'absolute';
      });
      return bool;
    },
    isEventSupported = (function () {
      var TAGNAMES = { select: 'input', change: 'input', submit: 'form', reset: 'form', error: 'img', load: 'img', abort: 'img' };
      function isEventSupported(eventName, element) {
        element = element || document.createElement(TAGNAMES[eventName] || 'div');
        eventName = 'on' + eventName;
        var isSupported = eventName in element;
        if (!isSupported) {
          if (!element.setAttribute) {
            element = document.createElement('div');
          }
          if (element.setAttribute && element.removeAttribute) {
            element.setAttribute(eventName, '');
            isSupported = is(element[eventName], 'function');
            if (!is(element[eventName], 'undefined')) {
              element[eventName] = undefined;
            }
            element.removeAttribute(eventName);
          }
        }
        element = null;
        return isSupported;
      }
      return isEventSupported;
    })(),
    _hasOwnProperty = {}.hasOwnProperty,
    hasOwnProp;
  if (!is(_hasOwnProperty, 'undefined') && !is(_hasOwnProperty.call, 'undefined')) {
    hasOwnProp = function (object, property) {
      return _hasOwnProperty.call(object, property);
    };
  } else {
    hasOwnProp = function (object, property) {
      return property in object && is(object.constructor.prototype[property], 'undefined');
    };
  }
  if (!Function.prototype.bind) {
    Function.prototype.bind = function bind(that) {
      var target = this;
      if (typeof target != 'function') {
        throw new TypeError();
      }
      var args = slice.call(arguments, 1),
        bound = function () {
          if (this instanceof bound) {
            var F = function () {};
            F.prototype = target.prototype;
            var self = new F();
            var result = target.apply(self, args.concat(slice.call(arguments)));
            if (Object(result) === result) {
              return result;
            }
            return self;
          } else {
            return target.apply(that, args.concat(slice.call(arguments)));
          }
        };
      return bound;
    };
  }
  function setCss(str) {
    mStyle.cssText = str;
  }
  function setCssAll(str1, str2) {
    return setCss(prefixes.join(str1 + ';') + (str2 || ''));
  }
  function is(obj, type) {
    return typeof obj === type;
  }
  function contains(str, substr) {
    return !!~('' + str).indexOf(substr);
  }
  function testProps(props, prefixed) {
    for (var i in props) {
      var prop = props[i];
      if (!contains(prop, '-') && mStyle[prop] !== undefined) {
        return prefixed == 'pfx' ? prop : true;
      }
    }
    return false;
  }
  function testDOMProps(props, obj, elem) {
    for (var i in props) {
      var item = obj[props[i]];
      if (item !== undefined) {
        if (elem === false) return props[i];
        if (is(item, 'function')) {
          return item.bind(elem || obj);
        }
        return item;
      }
    }
    return false;
  }
  function testPropsAll(prop, prefixed, elem) {
    var ucProp = prop.charAt(0).toUpperCase() + prop.slice(1),
      props = (prop + ' ' + cssomPrefixes.join(ucProp + ' ') + ucProp).split(' ');
    if (is(prefixed, 'string') || is(prefixed, 'undefined')) {
      return testProps(props, prefixed);
    } else {
      props = (prop + ' ' + domPrefixes.join(ucProp + ' ') + ucProp).split(' ');
      return testDOMProps(props, prefixed, elem);
    }
  }
  tests['flexbox'] = function () {
    return testPropsAll('flexWrap');
  };
  tests['flexboxlegacy'] = function () {
    return testPropsAll('boxDirection');
  };
  tests['canvas'] = function () {
    var elem = document.createElement('canvas');
    return !!(elem.getContext && elem.getContext('2d'));
  };
  tests['canvastext'] = function () {
    return !!(Modernizr['canvas'] && is(document.createElement('canvas').getContext('2d').fillText, 'function'));
  };
  tests['webgl'] = function () {
    return !!window.WebGLRenderingContext;
  };
  tests['touch'] = function () {
    var bool;
    if ('ontouchstart' in window || (window.DocumentTouch && document instanceof DocumentTouch)) {
      bool = true;
    } else {
      injectElementWithStyles(['@media (', prefixes.join('touch-enabled),('), mod, ')', '{#modernizr{top:9px;position:absolute}}'].join(''), function (node) {
        bool = node.offsetTop === 9;
      });
    }
    return bool;
  };
  tests['geolocation'] = function () {
    return 'geolocation' in navigator;
  };
  tests['postmessage'] = function () {
    return !!window.postMessage;
  };
  tests['websqldatabase'] = function () {
    return !!window.openDatabase;
  };
  tests['indexedDB'] = function () {
    return !!testPropsAll('indexedDB', window);
  };
  tests['hashchange'] = function () {
    return isEventSupported('hashchange', window) && (document.documentMode === undefined || document.documentMode > 7);
  };
  tests['history'] = function () {
    return !!(window.history && history.pushState);
  };
  tests['draganddrop'] = function () {
    var div = document.createElement('div');
    return 'draggable' in div || ('ondragstart' in div && 'ondrop' in div);
  };
  tests['websockets'] = function () {
    return 'WebSocket' in window || 'MozWebSocket' in window;
  };
  tests['rgba'] = function () {
    setCss('background-color:rgba(150,255,150,.5)');
    return contains(mStyle.backgroundColor, 'rgba');
  };
  tests['hsla'] = function () {
    setCss('background-color:hsla(120,40%,100%,.5)');
    return contains(mStyle.backgroundColor, 'rgba') || contains(mStyle.backgroundColor, 'hsla');
  };
  tests['multiplebgs'] = function () {
    setCss('background:url(https://),url(https://),red url(https://)');
    return /(url\s*\(.*?){3}/.test(mStyle.background);
  };
  tests['backgroundsize'] = function () {
    return testPropsAll('backgroundSize');
  };
  tests['borderimage'] = function () {
    return testPropsAll('borderImage');
  };
  tests['borderradius'] = function () {
    return testPropsAll('borderRadius');
  };
  tests['boxshadow'] = function () {
    return testPropsAll('boxShadow');
  };
  tests['textshadow'] = function () {
    return document.createElement('div').style.textShadow === '';
  };
  tests['opacity'] = function () {
    setCssAll('opacity:.55');
    return /^0.55$/.test(mStyle.opacity);
  };
  tests['cssanimations'] = function () {
    return testPropsAll('animationName');
  };
  tests['csscolumns'] = function () {
    return testPropsAll('columnCount');
  };
  tests['cssgradients'] = function () {
    var str1 = 'background-image:',
      str2 = 'gradient(linear,left top,right bottom,from(#9f9),to(white));',
      str3 = 'linear-gradient(left top,#9f9, white);';
    setCss((str1 + '-webkit- '.split(' ').join(str2 + str1) + prefixes.join(str3 + str1)).slice(0, -str1.length));
    return contains(mStyle.backgroundImage, 'gradient');
  };
  tests['cssreflections'] = function () {
    return testPropsAll('boxReflect');
  };
  tests['csstransforms'] = function () {
    return !!testPropsAll('transform');
  };
  tests['csstransforms3d'] = function () {
    var ret = !!testPropsAll('perspective');
    if (ret && 'webkitPerspective' in docElement.style) {
      injectElementWithStyles('@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}', function (node, rule) {
        ret = node.offsetLeft === 9 && node.offsetHeight === 3;
      });
    }
    return ret;
  };
  tests['csstransitions'] = function () {
    return testPropsAll('transition');
  };
  tests['fontface'] = function () {
    var bool;
    injectElementWithStyles('@font-face {font-family:"font";src:url("https://")}', function (node, rule) {
      var style = document.getElementById('smodernizr'),
        sheet = style.sheet || style.styleSheet,
        cssText = sheet ? (sheet.cssRules && sheet.cssRules[0] ? sheet.cssRules[0].cssText : sheet.cssText || '') : '';
      bool = /src/i.test(cssText) && cssText.indexOf(rule.split(' ')[0]) === 0;
    });
    return bool;
  };
  tests['generatedcontent'] = function () {
    var bool;
    injectElementWithStyles(['#', mod, '{font:0/0 a}#', mod, ':after{content:"', smile, '";visibility:hidden;font:3px/1 a}'].join(''), function (node) {
      bool = node.offsetHeight >= 3;
    });
    return bool;
  };
  tests['video'] = function () {
    var elem = document.createElement('video'),
      bool = false;
    try {
      if ((bool = !!elem.canPlayType)) {
        bool = new Boolean(bool);
        bool.ogg = elem.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, '');
        bool.h264 = elem.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, '');
        bool.webm = elem.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, '');
      }
    } catch (e) {}
    return bool;
  };
  tests['audio'] = function () {
    var elem = document.createElement('audio'),
      bool = false;
    try {
      if ((bool = !!elem.canPlayType)) {
        bool = new Boolean(bool);
        bool.ogg = elem.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, '');
        bool.mp3 = elem.canPlayType('audio/mpeg;').replace(/^no$/, '');
        bool.wav = elem.canPlayType('audio/wav; codecs="1"').replace(/^no$/, '');
        bool.m4a = (elem.canPlayType('audio/x-m4a;') || elem.canPlayType('audio/aac;')).replace(/^no$/, '');
      }
    } catch (e) {}
    return bool;
  };
  tests['localstorage'] = function () {
    try {
      localStorage.setItem(mod, mod);
      localStorage.removeItem(mod);
      return true;
    } catch (e) {
      return false;
    }
  };
  tests['sessionstorage'] = function () {
    try {
      sessionStorage.setItem(mod, mod);
      sessionStorage.removeItem(mod);
      return true;
    } catch (e) {
      return false;
    }
  };
  tests['webworkers'] = function () {
    return !!window.Worker;
  };
  tests['applicationcache'] = function () {
    return !!window.applicationCache;
  };
  tests['svg'] = function () {
    return !!document.createElementNS && !!document.createElementNS(ns.svg, 'svg').createSVGRect;
  };
  tests['inlinesvg'] = function () {
    var div = document.createElement('div');
    div.innerHTML = '<svg/>';
    return (div.firstChild && div.firstChild.namespaceURI) == ns.svg;
  };
  tests['smil'] = function () {
    return !!document.createElementNS && /SVGAnimate/.test(toString.call(document.createElementNS(ns.svg, 'animate')));
  };
  tests['svgclippaths'] = function () {
    return !!document.createElementNS && /SVGClipPath/.test(toString.call(document.createElementNS(ns.svg, 'clipPath')));
  };
  function webforms() {
    Modernizr['input'] = (function (props) {
      for (var i = 0, len = props.length; i < len; i++) {
        attrs[props[i]] = !!(props[i] in inputElem);
      }
      if (attrs.list) {
        attrs.list = !!(document.createElement('datalist') && window.HTMLDataListElement);
      }
      return attrs;
    })('autocomplete autofocus list placeholder max min multiple pattern required step'.split(' '));
    Modernizr['inputtypes'] = (function (props) {
      for (var i = 0, bool, inputElemType, defaultView, len = props.length; i < len; i++) {
        inputElem.setAttribute('type', (inputElemType = props[i]));
        bool = inputElem.type !== 'text';
        if (bool) {
          inputElem.value = smile;
          inputElem.style.cssText = 'position:absolute;visibility:hidden;';
          if (/^range$/.test(inputElemType) && inputElem.style.WebkitAppearance !== undefined) {
            docElement.appendChild(inputElem);
            defaultView = document.defaultView;
            bool = defaultView.getComputedStyle && defaultView.getComputedStyle(inputElem, null).WebkitAppearance !== 'textfield' && inputElem.offsetHeight !== 0;
            docElement.removeChild(inputElem);
          } else if (/^(search|tel)$/.test(inputElemType)) {
          } else if (/^(url|email)$/.test(inputElemType)) {
            bool = inputElem.checkValidity && inputElem.checkValidity() === false;
          } else {
            bool = inputElem.value != smile;
          }
        }
        inputs[props[i]] = !!bool;
      }
      return inputs;
    })('search tel url email datetime date month week time datetime-local number range color'.split(' '));
  }
  for (var feature in tests) {
    if (hasOwnProp(tests, feature)) {
      featureName = feature.toLowerCase();
      Modernizr[featureName] = tests[feature]();
      classes.push((Modernizr[featureName] ? '' : 'no-') + featureName);
    }
  }
  Modernizr.input || webforms();
  Modernizr.addTest = function (feature, test) {
    if (typeof feature == 'object') {
      for (var key in feature) {
        if (hasOwnProp(feature, key)) {
          Modernizr.addTest(key, feature[key]);
        }
      }
    } else {
      feature = feature.toLowerCase();
      if (Modernizr[feature] !== undefined) {
        return Modernizr;
      }
      test = typeof test == 'function' ? test() : test;
      if (typeof enableClasses !== 'undefined' && enableClasses) {
        docElement.className += ' ' + (test ? '' : 'no-') + feature;
      }
      Modernizr[feature] = test;
    }
    return Modernizr;
  };
  setCss('');
  modElem = inputElem = null;
  (function (window, document) {
    var version = '3.7.0';
    var options = window.html5 || {};
    var reSkip = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i;
    var saveClones = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i;
    var supportsHtml5Styles;
    var expando = '_html5shiv';
    var expanID = 0;
    var expandoData = {};
    var supportsUnknownElements;
    (function () {
      try {
        var a = document.createElement('a');
        a.innerHTML = '<xyz></xyz>';
        supportsHtml5Styles = 'hidden' in a;
        supportsUnknownElements =
          a.childNodes.length == 1 ||
          (function () {
            document.createElement('a');
            var frag = document.createDocumentFragment();
            return typeof frag.cloneNode == 'undefined' || typeof frag.createDocumentFragment == 'undefined' || typeof frag.createElement == 'undefined';
          })();
      } catch (e) {
        supportsHtml5Styles = true;
        supportsUnknownElements = true;
      }
    })();
    function addStyleSheet(ownerDocument, cssText) {
      var p = ownerDocument.createElement('p'),
        parent = ownerDocument.getElementsByTagName('head')[0] || ownerDocument.documentElement;
      p.innerHTML = 'x<style>' + cssText + '</style>';
      return parent.insertBefore(p.lastChild, parent.firstChild);
    }
    function getElements() {
      var elements = html5.elements;
      return typeof elements == 'string' ? elements.split(' ') : elements;
    }
    function getExpandoData(ownerDocument) {
      var data = expandoData[ownerDocument[expando]];
      if (!data) {
        data = {};
        expanID++;
        ownerDocument[expando] = expanID;
        expandoData[expanID] = data;
      }
      return data;
    }
    function createElement(nodeName, ownerDocument, data) {
      if (!ownerDocument) {
        ownerDocument = document;
      }
      if (supportsUnknownElements) {
        return ownerDocument.createElement(nodeName);
      }
      if (!data) {
        data = getExpandoData(ownerDocument);
      }
      var node;
      if (data.cache[nodeName]) {
        node = data.cache[nodeName].cloneNode();
      } else if (saveClones.test(nodeName)) {
        node = (data.cache[nodeName] = data.createElem(nodeName)).cloneNode();
      } else {
        node = data.createElem(nodeName);
      }
      return node.canHaveChildren && !reSkip.test(nodeName) && !node.tagUrn ? data.frag.appendChild(node) : node;
    }
    function createDocumentFragment(ownerDocument, data) {
      if (!ownerDocument) {
        ownerDocument = document;
      }
      if (supportsUnknownElements) {
        return ownerDocument.createDocumentFragment();
      }
      data = data || getExpandoData(ownerDocument);
      var clone = data.frag.cloneNode(),
        i = 0,
        elems = getElements(),
        l = elems.length;
      for (; i < l; i++) {
        clone.createElement(elems[i]);
      }
      return clone;
    }
    function shivMethods(ownerDocument, data) {
      if (!data.cache) {
        data.cache = {};
        data.createElem = ownerDocument.createElement;
        data.createFrag = ownerDocument.createDocumentFragment;
        data.frag = data.createFrag();
      }
      ownerDocument.createElement = function (nodeName) {
        if (!html5.shivMethods) {
          return data.createElem(nodeName);
        }
        return createElement(nodeName, ownerDocument, data);
      };
      ownerDocument.createDocumentFragment = Function(
        'h,f',
        'return function(){' +
          'var n=f.cloneNode(),c=n.createElement;' +
          'h.shivMethods&&(' +
          getElements()
            .join()
            .replace(/[\w\-]+/g, function (nodeName) {
              data.createElem(nodeName);
              data.frag.createElement(nodeName);
              return 'c("' + nodeName + '")';
            }) +
          ');return n}'
      )(html5, data.frag);
    }
    function shivDocument(ownerDocument) {
      if (!ownerDocument) {
        ownerDocument = document;
      }
      var data = getExpandoData(ownerDocument);
      if (html5.shivCSS && !supportsHtml5Styles && !data.hasCSS) {
        data.hasCSS = !!addStyleSheet(ownerDocument, 'article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}' + 'mark{background:#FF0;color:#000}' + 'template{display:none}');
      }
      if (!supportsUnknownElements) {
        shivMethods(ownerDocument, data);
      }
      return ownerDocument;
    }
    var html5 = {
      elements: options.elements || 'abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video',
      version: version,
      shivCSS: options.shivCSS !== false,
      supportsUnknownElements: supportsUnknownElements,
      shivMethods: options.shivMethods !== false,
      type: 'default',
      shivDocument: shivDocument,
      createElement: createElement,
      createDocumentFragment: createDocumentFragment,
    };
    window.html5 = html5;
    shivDocument(document);
  })(this, document);
  Modernizr._version = version;
  Modernizr._prefixes = prefixes;
  Modernizr._domPrefixes = domPrefixes;
  Modernizr._cssomPrefixes = cssomPrefixes;
  Modernizr.mq = testMediaQuery;
  Modernizr.hasEvent = isEventSupported;
  Modernizr.testProp = function (prop) {
    return testProps([prop]);
  };
  Modernizr.testAllProps = testPropsAll;
  Modernizr.testStyles = injectElementWithStyles;
  Modernizr.prefixed = function (prop, obj, elem) {
    if (!obj) {
      return testPropsAll(prop, 'pfx');
    } else {
      return testPropsAll(prop, obj, elem);
    }
  };
  docElement.className = docElement.className.replace(/(^|\s)no-js(\s|$)/, '$1$2') + (enableClasses ? ' js ' + classes.join(' ') : '');
  return Modernizr;
})(this, this.document);

/*! lightslider - v1.1.6 - 2016-10-25
 * https://github.com/sachinchoolur/lightslider
 * Copyright (c) 2016 Sachin N; Licensed MIT */
!(function (a, b) {
  'use strict';
  var c = {
    item: 3,
    autoWidth: !1,
    slideMove: 1,
    slideMargin: 10,
    addClass: '',
    mode: 'slide',
    useCSS: !0,
    cssEasing: 'ease',
    easing: 'linear',
    speed: 400,
    auto: !1,
    pauseOnHover: !1,
    loop: !1,
    slideEndAnimation: !0,
    pause: 2e3,
    keyPress: !1,
    controls: !0,
    prevHtml: '',
    nextHtml: '',
    rtl: !1,
    adaptiveHeight: !1,
    vertical: !1,
    verticalHeight: 500,
    vThumbWidth: 100,
    thumbItem: 10,
    pager: !0,
    gallery: !1,
    galleryMargin: 5,
    thumbMargin: 5,
    currentPagerPosition: 'middle',
    enableTouch: !0,
    enableDrag: !0,
    freeMove: !0,
    swipeThreshold: 40,
    responsive: [],
    onBeforeStart: function (a) {},
    onSliderLoad: function (a) {},
    onBeforeSlide: function (a, b) {},
    onAfterSlide: function (a, b) {},
    onBeforeNextSlide: function (a, b) {},
    onBeforePrevSlide: function (a, b) {},
  };
  a.fn.lightSlider = function (b) {
    if (0 === this.length) return this;
    if (this.length > 1)
      return (
        this.each(function () {
          a(this).lightSlider(b);
        }),
        this
      );
    var d = {},
      e = a.extend(!0, {}, c, b),
      f = {},
      g = this;
    (d.$el = this), 'fade' === e.mode && (e.vertical = !1);
    var h = g.children(),
      i = a(window).width(),
      j = null,
      k = null,
      l = 0,
      m = 0,
      n = !1,
      o = 0,
      p = '',
      q = 0,
      r = e.vertical === !0 ? 'height' : 'width',
      s = e.vertical === !0 ? 'margin-bottom' : 'margin-right',
      t = 0,
      u = 0,
      v = 0,
      w = 0,
      x = null,
      y = 'ontouchstart' in document.documentElement,
      z = {};
    return (
      (z.chbreakpoint = function () {
        if (((i = a(window).width()), e.responsive.length)) {
          var b;
          if ((e.autoWidth === !1 && (b = e.item), i < e.responsive[0].breakpoint)) for (var c = 0; c < e.responsive.length; c++) i < e.responsive[c].breakpoint && ((j = e.responsive[c].breakpoint), (k = e.responsive[c]));
          if ('undefined' != typeof k && null !== k) for (var d in k.settings) k.settings.hasOwnProperty(d) && (('undefined' == typeof f[d] || null === f[d]) && (f[d] = e[d]), (e[d] = k.settings[d]));
          if (!a.isEmptyObject(f) && i > e.responsive[0].breakpoint) for (var g in f) f.hasOwnProperty(g) && (e[g] = f[g]);
          e.autoWidth === !1 && t > 0 && v > 0 && b !== e.item && (q = Math.round(t / ((v + e.slideMargin) * e.slideMove)));
        }
      }),
      (z.calSW = function () {
        e.autoWidth === !1 && (v = (o - (e.item * e.slideMargin - e.slideMargin)) / e.item);
      }),
      (z.calWidth = function (a) {
        var b = a === !0 ? p.find('.lslide').length : h.length;
        if (e.autoWidth === !1) m = b * (v + e.slideMargin);
        else {
          m = 0;
          for (var c = 0; b > c; c++) m += parseInt(h.eq(c).width()) + e.slideMargin;
        }
        return m;
      }),
      (d = {
        doCss: function () {
          var a = function () {
            for (var a = ['transition', 'MozTransition', 'WebkitTransition', 'OTransition', 'msTransition', 'KhtmlTransition'], b = document.documentElement, c = 0; c < a.length; c++) if (a[c] in b.style) return !0;
          };
          return e.useCSS && a() ? !0 : !1;
        },
        keyPress: function () {
          e.keyPress &&
            a(document).on('keyup.lightslider', function (b) {
              a(':focus').is('input, textarea') || (b.preventDefault ? b.preventDefault() : (b.returnValue = !1), 37 === b.keyCode ? g.goToPrevSlide() : 39 === b.keyCode && g.goToNextSlide());
            });
        },
        controls: function () {
          e.controls &&
            (g.after('<div class="lSAction"><a class="lSPrev">' + e.prevHtml + '</a><a class="lSNext">' + e.nextHtml + '</a></div>'),
            e.autoWidth ? z.calWidth(!1) < o && p.find('.lSAction').hide() : l <= e.item && p.find('.lSAction').hide(),
            p.find('.lSAction a').on('click', function (b) {
              return b.preventDefault ? b.preventDefault() : (b.returnValue = !1), 'lSPrev' === a(this).attr('class') ? g.goToPrevSlide() : g.goToNextSlide(), !1;
            }));
        },
        initialStyle: function () {
          var a = this;
          'fade' === e.mode && ((e.autoWidth = !1), (e.slideEndAnimation = !1)),
            e.auto && (e.slideEndAnimation = !1),
            e.autoWidth && ((e.slideMove = 1), (e.item = 1)),
            e.loop && ((e.slideMove = 1), (e.freeMove = !1)),
            e.onBeforeStart.call(this, g),
            z.chbreakpoint(),
            g.addClass('lightSlider').wrap('<div class="lSSlideOuter ' + e.addClass + '"><div class="lSSlideWrapper"></div></div>'),
            (p = g.parent('.lSSlideWrapper')),
            e.rtl === !0 && p.parent().addClass('lSrtl'),
            e.vertical ? (p.parent().addClass('vertical'), (o = e.verticalHeight), p.css('height', o + 'px')) : (o = g.outerWidth()),
            h.addClass('lslide'),
            e.loop === !0 &&
              'slide' === e.mode &&
              (z.calSW(),
              (z.clone = function () {
                if (z.calWidth(!0) > o) {
                  for (var b = 0, c = 0, d = 0; d < h.length && ((b += parseInt(g.find('.lslide').eq(d).width()) + e.slideMargin), c++, !(b >= o + e.slideMargin)); d++);
                  var f = e.autoWidth === !0 ? c : e.item;
                  if (f < g.find('.clone.left').length) for (var i = 0; i < g.find('.clone.left').length - f; i++) h.eq(i).remove();
                  if (f < g.find('.clone.right').length) for (var j = h.length - 1; j > h.length - 1 - g.find('.clone.right').length; j--) q--, h.eq(j).remove();
                  for (var k = g.find('.clone.right').length; f > k; k++) g.find('.lslide').eq(k).clone().removeClass('lslide').addClass('clone right').appendTo(g), q++;
                  for (var l = g.find('.lslide').length - g.find('.clone.left').length; l > g.find('.lslide').length - f; l--)
                    g.find('.lslide')
                      .eq(l - 1)
                      .clone()
                      .removeClass('lslide')
                      .addClass('clone left')
                      .prependTo(g);
                  h = g.children();
                } else h.hasClass('clone') && (g.find('.clone').remove(), a.move(g, 0));
              }),
              z.clone()),
            (z.sSW = function () {
              (l = h.length),
                e.rtl === !0 && e.vertical === !1 && (s = 'margin-left'),
                e.autoWidth === !1 && h.css(r, v + 'px'),
                h.css(s, e.slideMargin + 'px'),
                (m = z.calWidth(!1)),
                g.css(r, m + 'px'),
                e.loop === !0 && 'slide' === e.mode && n === !1 && (q = g.find('.clone.left').length);
            }),
            (z.calL = function () {
              (h = g.children()), (l = h.length);
            }),
            this.doCss() && p.addClass('usingCss'),
            z.calL(),
            'slide' === e.mode
              ? (z.calSW(), z.sSW(), e.loop === !0 && ((t = a.slideValue()), this.move(g, t)), e.vertical === !1 && this.setHeight(g, !1))
              : (this.setHeight(g, !0), g.addClass('lSFade'), this.doCss() || (h.fadeOut(0), h.eq(q).fadeIn(0))),
            e.loop === !0 && 'slide' === e.mode ? h.eq(q).addClass('active') : h.first().addClass('active');
        },
        pager: function () {
          var a = this;
          if (
            ((z.createPager = function () {
              w = (o - (e.thumbItem * e.thumbMargin - e.thumbMargin)) / e.thumbItem;
              var b = p.find('.lslide'),
                c = p.find('.lslide').length,
                d = 0,
                f = '',
                h = 0;
              for (d = 0; c > d; d++) {
                'slide' === e.mode && (e.autoWidth ? (h += (parseInt(b.eq(d).width()) + e.slideMargin) * e.slideMove) : (h = d * (v + e.slideMargin) * e.slideMove));
                var i = b.eq(d * e.slideMove).attr('data-thumb');
                if (
                  ((f += e.gallery === !0 ? '<li style="width:100%;' + r + ':' + w + 'px;' + s + ':' + e.thumbMargin + 'px"><a href="#"><img src="' + i + '" /></a></li>' : '<li><a href="#">' + (d + 1) + '</a></li>'),
                  'slide' === e.mode && h >= m - o - e.slideMargin)
                ) {
                  d += 1;
                  var j = 2;
                  e.autoWidth && ((f += '<li><a href="#">' + (d + 1) + '</a></li>'), (j = 1)), j > d ? ((f = null), p.parent().addClass('noPager')) : p.parent().removeClass('noPager');
                  break;
                }
              }
              var k = p.parent();
              k.find('.lSPager').html(f),
                e.gallery === !0 &&
                  (e.vertical === !0 && k.find('.lSPager').css('width', e.vThumbWidth + 'px'),
                  (u = d * (e.thumbMargin + w) + 0.5),
                  k.find('.lSPager').css({ property: u + 'px', 'transition-duration': e.speed + 'ms' }),
                  e.vertical === !0 && p.parent().css('padding-right', e.vThumbWidth + e.galleryMargin + 'px'),
                  k.find('.lSPager').css(r, u + 'px'));
              var l = k.find('.lSPager').find('li');
              l.first().addClass('active'),
                l.on('click', function () {
                  return e.loop === !0 && 'slide' === e.mode ? (q += l.index(this) - k.find('.lSPager').find('li.active').index()) : (q = l.index(this)), g.mode(!1), e.gallery === !0 && a.slideThumb(), !1;
                });
            }),
            e.pager)
          ) {
            var b = 'lSpg';
            e.gallery && (b = 'lSGallery'), p.after('<ul class="lSPager ' + b + '"></ul>');
            var c = e.vertical ? 'margin-left' : 'margin-top';
            p
              .parent()
              .find('.lSPager')
              .css(c, e.galleryMargin + 'px'),
              z.createPager();
          }
          setTimeout(function () {
            z.init();
          }, 0);
        },
        setHeight: function (a, b) {
          var c = null,
            d = this;
          c = e.loop ? a.children('.lslide ').first() : a.children().first();
          var f = function () {
            var d = c.outerHeight(),
              e = 0,
              f = d;
            b && ((d = 0), (e = (100 * f) / o)), a.css({ height: d + 'px', 'padding-bottom': e + '%' });
          };
          f(),
            c.find('img').length
              ? c.find('img')[0].complete
                ? (f(), x || d.auto())
                : c.find('img').on('load', function () {
                    setTimeout(function () {
                      f(), x || d.auto();
                    }, 100);
                  })
              : x || d.auto();
        },
        active: function (a, b) {
          this.doCss() && 'fade' === e.mode && p.addClass('on');
          var c = 0;
          if (q * e.slideMove < l) {
            a.removeClass('active'), this.doCss() || 'fade' !== e.mode || b !== !1 || a.fadeOut(e.speed), (c = b === !0 ? q : q * e.slideMove);
            var d, f;
            b === !0 && ((d = a.length), (f = d - 1), c + 1 >= d && (c = f)),
              e.loop === !0 && 'slide' === e.mode && ((c = b === !0 ? q - g.find('.clone.left').length : q * e.slideMove), b === !0 && ((d = a.length), (f = d - 1), c + 1 === d ? (c = f) : c + 1 > d && (c = 0))),
              this.doCss() || 'fade' !== e.mode || b !== !1 || a.eq(c).fadeIn(e.speed),
              a.eq(c).addClass('active');
          } else a.removeClass('active'), a.eq(a.length - 1).addClass('active'), this.doCss() || 'fade' !== e.mode || b !== !1 || (a.fadeOut(e.speed), a.eq(c).fadeIn(e.speed));
        },
        move: function (a, b) {
          e.rtl === !0 && (b = -b),
            this.doCss()
              ? a.css(
                  e.vertical === !0
                    ? { transform: 'translate3d(0px, ' + -b + 'px, 0px)', '-webkit-transform': 'translate3d(0px, ' + -b + 'px, 0px)' }
                    : { transform: 'translate3d(' + -b + 'px, 0px, 0px)', '-webkit-transform': 'translate3d(' + -b + 'px, 0px, 0px)' }
                )
              : e.vertical === !0
              ? a.css('position', 'relative').animate({ top: -b + 'px' }, e.speed, e.easing)
              : a.css('position', 'relative').animate({ left: -b + 'px' }, e.speed, e.easing);
          var c = p.parent().find('.lSPager').find('li');
          this.active(c, !0);
        },
        fade: function () {
          this.active(h, !1);
          var a = p.parent().find('.lSPager').find('li');
          this.active(a, !0);
        },
        slide: function () {
          var a = this;
          (z.calSlide = function () {
            m > o &&
              ((t = a.slideValue()),
              a.active(h, !1),
              t > m - o - e.slideMargin ? (t = m - o - e.slideMargin) : 0 > t && (t = 0),
              a.move(g, t),
              e.loop === !0 && 'slide' === e.mode && (q >= l - g.find('.clone.left').length / e.slideMove && a.resetSlide(g.find('.clone.left').length), 0 === q && a.resetSlide(p.find('.lslide').length)));
          }),
            z.calSlide();
        },
        resetSlide: function (a) {
          var b = this;
          p.find('.lSAction a').addClass('disabled'),
            setTimeout(function () {
              (q = a),
                p.css('transition-duration', '0ms'),
                (t = b.slideValue()),
                b.active(h, !1),
                d.move(g, t),
                setTimeout(function () {
                  p.css('transition-duration', e.speed + 'ms'), p.find('.lSAction a').removeClass('disabled');
                }, 50);
            }, e.speed + 100);
        },
        slideValue: function () {
          var a = 0;
          if (e.autoWidth === !1) a = q * (v + e.slideMargin) * e.slideMove;
          else {
            a = 0;
            for (var b = 0; q > b; b++) a += parseInt(h.eq(b).width()) + e.slideMargin;
          }
          return a;
        },
        slideThumb: function () {
          var a;
          switch (e.currentPagerPosition) {
            case 'left':
              a = 0;
              break;
            case 'middle':
              a = o / 2 - w / 2;
              break;
            case 'right':
              a = o - w;
          }
          var b = q - g.find('.clone.left').length,
            c = p.parent().find('.lSPager');
          'slide' === e.mode && e.loop === !0 && (b >= c.children().length ? (b = 0) : 0 > b && (b = c.children().length));
          var d = b * (w + e.thumbMargin) - a;
          d + o > u && (d = u - o - e.thumbMargin), 0 > d && (d = 0), this.move(c, d);
        },
        auto: function () {
          e.auto &&
            (clearInterval(x),
            (x = setInterval(function () {
              g.goToNextSlide();
            }, e.pause)));
        },
        pauseOnHover: function () {
          var b = this;
          e.auto &&
            e.pauseOnHover &&
            (p.on('mouseenter', function () {
              a(this).addClass('ls-hover'), g.pause(), (e.auto = !0);
            }),
            p.on('mouseleave', function () {
              a(this).removeClass('ls-hover'), p.find('.lightSlider').hasClass('lsGrabbing') || b.auto();
            }));
        },
        touchMove: function (a, b) {
          if ((p.css('transition-duration', '0ms'), 'slide' === e.mode)) {
            var c = a - b,
              d = t - c;
            if (d >= m - o - e.slideMargin)
              if (e.freeMove === !1) d = m - o - e.slideMargin;
              else {
                var f = m - o - e.slideMargin;
                d = f + (d - f) / 5;
              }
            else 0 > d && (e.freeMove === !1 ? (d = 0) : (d /= 5));
            this.move(g, d);
          }
        },
        touchEnd: function (a) {
          if ((p.css('transition-duration', e.speed + 'ms'), 'slide' === e.mode)) {
            var b = !1,
              c = !0;
            (t -= a), t > m - o - e.slideMargin ? ((t = m - o - e.slideMargin), e.autoWidth === !1 && (b = !0)) : 0 > t && (t = 0);
            var d = function (a) {
              var c = 0;
              if ((b || (a && (c = 1)), e.autoWidth)) for (var d = 0, f = 0; f < h.length && ((d += parseInt(h.eq(f).width()) + e.slideMargin), (q = f + c), !(d >= t)); f++);
              else {
                var g = t / ((v + e.slideMargin) * e.slideMove);
                (q = parseInt(g) + c), t >= m - o - e.slideMargin && g % 1 !== 0 && q++;
              }
            };
            a >= e.swipeThreshold ? (d(!1), (c = !1)) : a <= -e.swipeThreshold && (d(!0), (c = !1)), g.mode(c), this.slideThumb();
          } else a >= e.swipeThreshold ? g.goToPrevSlide() : a <= -e.swipeThreshold && g.goToNextSlide();
        },
        enableDrag: function () {
          var b = this;
          if (!y) {
            var c = 0,
              d = 0,
              f = !1;
            p.find('.lightSlider').addClass('lsGrab'),
              p.on('mousedown', function (b) {
                return o > m && 0 !== m
                  ? !1
                  : void (
                      'lSPrev' !== a(b.target).attr('class') &&
                      'lSNext' !== a(b.target).attr('class') &&
                      ((c = e.vertical === !0 ? b.pageY : b.pageX),
                      (f = !0),
                      b.preventDefault ? b.preventDefault() : (b.returnValue = !1),
                      (p.scrollLeft += 1),
                      (p.scrollLeft -= 1),
                      p.find('.lightSlider').removeClass('lsGrab').addClass('lsGrabbing'),
                      clearInterval(x))
                    );
              }),
              a(window).on('mousemove', function (a) {
                f && ((d = e.vertical === !0 ? a.pageY : a.pageX), b.touchMove(d, c));
              }),
              a(window).on('mouseup', function (g) {
                if (f) {
                  p.find('.lightSlider').removeClass('lsGrabbing').addClass('lsGrab'), (f = !1), (d = e.vertical === !0 ? g.pageY : g.pageX);
                  var h = d - c;
                  Math.abs(h) >= e.swipeThreshold &&
                    a(window).on('click.ls', function (b) {
                      b.preventDefault ? b.preventDefault() : (b.returnValue = !1), b.stopImmediatePropagation(), b.stopPropagation(), a(window).off('click.ls');
                    }),
                    b.touchEnd(h);
                }
              });
          }
        },
        enableTouch: function () {
          var a = this;
          if (y) {
            var b = {},
              c = {};
            p.on('touchstart', function (a) {
              (c = a.originalEvent.targetTouches[0]), (b.pageX = a.originalEvent.targetTouches[0].pageX), (b.pageY = a.originalEvent.targetTouches[0].pageY), clearInterval(x);
            }),
              p.on('touchmove', function (d) {
                if (o > m && 0 !== m) return !1;
                var f = d.originalEvent;
                c = f.targetTouches[0];
                var g = Math.abs(c.pageX - b.pageX),
                  h = Math.abs(c.pageY - b.pageY);
                e.vertical === !0 ? (3 * h > g && d.preventDefault(), a.touchMove(c.pageY, b.pageY)) : (3 * g > h && d.preventDefault(), a.touchMove(c.pageX, b.pageX));
              }),
              p.on('touchend', function () {
                if (o > m && 0 !== m) return !1;
                var d;
                (d = e.vertical === !0 ? c.pageY - b.pageY : c.pageX - b.pageX), a.touchEnd(d);
              });
          }
        },
        build: function () {
          var b = this;
          b.initialStyle(),
            this.doCss() && (e.enableTouch === !0 && b.enableTouch(), e.enableDrag === !0 && b.enableDrag()),
            a(window).on('focus', function () {
              b.auto();
            }),
            a(window).on('blur', function () {
              clearInterval(x);
            }),
            b.pager(),
            b.pauseOnHover(),
            b.controls(),
            b.keyPress();
        },
      }),
      d.build(),
      (z.init = function () {
        z.chbreakpoint(),
          e.vertical === !0 ? ((o = e.item > 1 ? e.verticalHeight : h.outerHeight()), p.css('height', o + 'px')) : (o = p.outerWidth()),
          e.loop === !0 && 'slide' === e.mode && z.clone(),
          z.calL(),
          'slide' === e.mode && g.removeClass('lSSlide'),
          'slide' === e.mode && (z.calSW(), z.sSW()),
          setTimeout(function () {
            'slide' === e.mode && g.addClass('lSSlide');
          }, 1e3),
          e.pager && z.createPager(),
          e.adaptiveHeight === !0 && e.vertical === !1 && g.css('height', h.eq(q).outerHeight(!0)),
          e.adaptiveHeight === !1 && ('slide' === e.mode ? (e.vertical === !1 ? d.setHeight(g, !1) : d.auto()) : d.setHeight(g, !0)),
          e.gallery === !0 && d.slideThumb(),
          'slide' === e.mode && d.slide(),
          e.autoWidth === !1 ? (h.length <= e.item ? p.find('.lSAction').hide() : p.find('.lSAction').show()) : z.calWidth(!1) < o && 0 !== m ? p.find('.lSAction').hide() : p.find('.lSAction').show();
      }),
      (g.goToPrevSlide = function () {
        if (q > 0) e.onBeforePrevSlide.call(this, g, q), q--, g.mode(!1), e.gallery === !0 && d.slideThumb();
        else if (e.loop === !0) {
          if ((e.onBeforePrevSlide.call(this, g, q), 'fade' === e.mode)) {
            var a = l - 1;
            q = parseInt(a / e.slideMove);
          }
          g.mode(!1), e.gallery === !0 && d.slideThumb();
        } else
          e.slideEndAnimation === !0 &&
            (g.addClass('leftEnd'),
            setTimeout(function () {
              g.removeClass('leftEnd');
            }, 400));
      }),
      (g.goToNextSlide = function () {
        var a = !0;
        if ('slide' === e.mode) {
          var b = d.slideValue();
          a = b < m - o - e.slideMargin;
        }
        q * e.slideMove < l - e.slideMove && a
          ? (e.onBeforeNextSlide.call(this, g, q), q++, g.mode(!1), e.gallery === !0 && d.slideThumb())
          : e.loop === !0
          ? (e.onBeforeNextSlide.call(this, g, q), (q = 0), g.mode(!1), e.gallery === !0 && d.slideThumb())
          : e.slideEndAnimation === !0 &&
            (g.addClass('rightEnd'),
            setTimeout(function () {
              g.removeClass('rightEnd');
            }, 400));
      }),
      (g.mode = function (a) {
        e.adaptiveHeight === !0 && e.vertical === !1 && g.css('height', h.eq(q).outerHeight(!0)),
          n === !1 &&
            ('slide' === e.mode
              ? d.doCss() && (g.addClass('lSSlide'), '' !== e.speed && p.css('transition-duration', e.speed + 'ms'), '' !== e.cssEasing && p.css('transition-timing-function', e.cssEasing))
              : d.doCss() && ('' !== e.speed && g.css('transition-duration', e.speed + 'ms'), '' !== e.cssEasing && g.css('transition-timing-function', e.cssEasing))),
          a || e.onBeforeSlide.call(this, g, q),
          'slide' === e.mode ? d.slide() : d.fade(),
          p.hasClass('ls-hover') || d.auto(),
          setTimeout(function () {
            a || e.onAfterSlide.call(this, g, q);
          }, e.speed),
          (n = !0);
      }),
      (g.play = function () {
        g.goToNextSlide(), (e.auto = !0), d.auto();
      }),
      (g.pause = function () {
        (e.auto = !1), clearInterval(x);
      }),
      (g.refresh = function () {
        z.init();
      }),
      (g.getCurrentSlideCount = function () {
        var a = q;
        if (e.loop) {
          var b = p.find('.lslide').length,
            c = g.find('.clone.left').length;
          a = c - 1 >= q ? b + (q - c) : q >= b + c ? q - b - c : q - c;
        }
        return a + 1;
      }),
      (g.getTotalSlideCount = function () {
        return p.find('.lslide').length;
      }),
      (g.goToSlide = function (a) {
        (q = e.loop ? a + g.find('.clone.left').length - 1 : a), g.mode(!1), e.gallery === !0 && d.slideThumb();
      }),
      (g.destroy = function () {
        g.lightSlider &&
          ((g.goToPrevSlide = function () {}),
          (g.goToNextSlide = function () {}),
          (g.mode = function () {}),
          (g.play = function () {}),
          (g.pause = function () {}),
          (g.refresh = function () {}),
          (g.getCurrentSlideCount = function () {}),
          (g.getTotalSlideCount = function () {}),
          (g.goToSlide = function () {}),
          (g.lightSlider = null),
          (z = { init: function () {} }),
          g.parent().parent().find('.lSAction, .lSPager').remove(),
          g.removeClass('lightSlider lSFade lSSlide lsGrab lsGrabbing leftEnd right').removeAttr('style').unwrap().unwrap(),
          g.children().removeAttr('style'),
          h.removeClass('lslide active'),
          g.find('.clone').remove(),
          (h = null),
          (x = null),
          (n = !1),
          (q = 0));
      }),
      setTimeout(function () {
        e.onSliderLoad.call(this, g);
      }, 10),
      a(window).on('resize orientationchange', function (a) {
        setTimeout(function () {
          a.preventDefault ? a.preventDefault() : (a.returnValue = !1), z.init();
        }, 200);
      }),
      this
    );
  };
})(jQuery);

/**
 * Owl Carousel v2.3.4
 * Copyright 2013-2018 David Deutsch
 * Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE
 */
!(function (a, b, c, d) {
  function e(b, c) {
    (this.settings = null),
      (this.options = a.extend({}, e.Defaults, c)),
      (this.$element = a(b)),
      (this._handlers = {}),
      (this._plugins = {}),
      (this._supress = {}),
      (this._current = null),
      (this._speed = null),
      (this._coordinates = []),
      (this._breakpoint = null),
      (this._width = null),
      (this._items = []),
      (this._clones = []),
      (this._mergers = []),
      (this._widths = []),
      (this._invalidated = {}),
      (this._pipe = []),
      (this._drag = { time: null, target: null, pointer: null, stage: { start: null, current: null }, direction: null }),
      (this._states = { current: {}, tags: { initializing: ['busy'], animating: ['busy'], dragging: ['interacting'] } }),
      a.each(
        ['onResize', 'onThrottledResize'],
        a.proxy(function (b, c) {
          this._handlers[c] = a.proxy(this[c], this);
        }, this)
      ),
      a.each(
        e.Plugins,
        a.proxy(function (a, b) {
          this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this);
        }, this)
      ),
      a.each(
        e.Workers,
        a.proxy(function (b, c) {
          this._pipe.push({ filter: c.filter, run: a.proxy(c.run, this) });
        }, this)
      ),
      this.setup(),
      this.initialize();
  }
  (e.Defaults = {
    items: 3,
    loop: !1,
    center: !1,
    rewind: !1,
    checkVisibility: !0,
    mouseDrag: !0,
    touchDrag: !0,
    pullDrag: !0,
    freeDrag: !1,
    margin: 0,
    stagePadding: 0,
    merge: !1,
    mergeFit: !0,
    autoWidth: !1,
    startPosition: 0,
    rtl: !1,
    smartSpeed: 250,
    fluidSpeed: !1,
    dragEndSpeed: !1,
    responsive: {},
    responsiveRefreshRate: 200,
    responsiveBaseElement: b,
    fallbackEasing: 'swing',
    slideTransition: '',
    info: !1,
    nestedItemSelector: !1,
    itemElement: 'div',
    stageElement: 'div',
    refreshClass: 'owl-refresh',
    loadedClass: 'owl-loaded',
    loadingClass: 'owl-loading',
    rtlClass: 'owl-rtl',
    responsiveClass: 'owl-responsive',
    dragClass: 'owl-drag',
    itemClass: 'owl-item',
    stageClass: 'owl-stage',
    stageOuterClass: 'owl-stage-outer',
    grabClass: 'owl-grab',
  }),
    (e.Width = { Default: 'default', Inner: 'inner', Outer: 'outer' }),
    (e.Type = { Event: 'event', State: 'state' }),
    (e.Plugins = {}),
    (e.Workers = [
      {
        filter: ['width', 'settings'],
        run: function () {
          this._width = this.$element.width();
        },
      },
      {
        filter: ['width', 'items', 'settings'],
        run: function (a) {
          a.current = this._items && this._items[this.relative(this._current)];
        },
      },
      {
        filter: ['items', 'settings'],
        run: function () {
          this.$stage.children('.cloned').remove();
        },
      },
      {
        filter: ['width', 'items', 'settings'],
        run: function (a) {
          var b = this.settings.margin || '',
            c = !this.settings.autoWidth,
            d = this.settings.rtl,
            e = { width: 'auto', 'margin-left': d ? b : '', 'margin-right': d ? '' : b };
          !c && this.$stage.children().css(e), (a.css = e);
        },
      },
      {
        filter: ['width', 'items', 'settings'],
        run: function (a) {
          var b = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
            c = null,
            d = this._items.length,
            e = !this.settings.autoWidth,
            f = [];
          for (a.items = { merge: !1, width: b }; d--; ) (c = this._mergers[d]), (c = (this.settings.mergeFit && Math.min(c, this.settings.items)) || c), (a.items.merge = c > 1 || a.items.merge), (f[d] = e ? b * c : this._items[d].width());
          this._widths = f;
        },
      },
      {
        filter: ['items', 'settings'],
        run: function () {
          var b = [],
            c = this._items,
            d = this.settings,
            e = Math.max(2 * d.items, 4),
            f = 2 * Math.ceil(c.length / 2),
            g = d.loop && c.length ? (d.rewind ? e : Math.max(e, f)) : 0,
            h = '',
            i = '';
          for (g /= 2; g > 0; ) b.push(this.normalize(b.length / 2, !0)), (h += c[b[b.length - 1]][0].outerHTML), b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)), (i = c[b[b.length - 1]][0].outerHTML + i), (g -= 1);
          (this._clones = b), a(h).addClass('cloned').appendTo(this.$stage), a(i).addClass('cloned').prependTo(this.$stage);
        },
      },
      {
        filter: ['width', 'items', 'settings'],
        run: function () {
          for (var a = this.settings.rtl ? 1 : -1, b = this._clones.length + this._items.length, c = -1, d = 0, e = 0, f = []; ++c < b; ) (d = f[c - 1] || 0), (e = this._widths[this.relative(c)] + this.settings.margin), f.push(d + e * a);
          this._coordinates = f;
        },
      },
      {
        filter: ['width', 'items', 'settings'],
        run: function () {
          var a = this.settings.stagePadding,
            b = this._coordinates,
            c = { width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a, 'padding-left': a || '', 'padding-right': a || '' };
          this.$stage.css(c);
        },
      },
      {
        filter: ['width', 'items', 'settings'],
        run: function (a) {
          var b = this._coordinates.length,
            c = !this.settings.autoWidth,
            d = this.$stage.children();
          if (c && a.items.merge) for (; b--; ) (a.css.width = this._widths[this.relative(b)]), d.eq(b).css(a.css);
          else c && ((a.css.width = a.items.width), d.css(a.css));
        },
      },
      {
        filter: ['items'],
        run: function () {
          this._coordinates.length < 1 && this.$stage.removeAttr('style');
        },
      },
      {
        filter: ['width', 'items', 'settings'],
        run: function (a) {
          (a.current = a.current ? this.$stage.children().index(a.current) : 0), (a.current = Math.max(this.minimum(), Math.min(this.maximum(), a.current))), this.reset(a.current);
        },
      },
      {
        filter: ['position'],
        run: function () {
          this.animate(this.coordinates(this._current));
        },
      },
      {
        filter: ['width', 'position', 'items', 'settings'],
        run: function () {
          var a,
            b,
            c,
            d,
            e = this.settings.rtl ? 1 : -1,
            f = 2 * this.settings.stagePadding,
            g = this.coordinates(this.current()) + f,
            h = g + this.width() * e,
            i = [];
          for (c = 0, d = this._coordinates.length; c < d; c++)
            (a = this._coordinates[c - 1] || 0), (b = Math.abs(this._coordinates[c]) + f * e), ((this.op(a, '<=', g) && this.op(a, '>', h)) || (this.op(b, '<', g) && this.op(b, '>', h))) && i.push(c);
          this.$stage.children('.active').removeClass('active'),
            this.$stage.children(':eq(' + i.join('), :eq(') + ')').addClass('active'),
            this.$stage.children('.center').removeClass('center'),
            this.settings.center && this.$stage.children().eq(this.current()).addClass('center');
        },
      },
    ]),
    (e.prototype.initializeStage = function () {
      (this.$stage = this.$element.find('.' + this.settings.stageClass)),
        this.$stage.length ||
          (this.$element.addClass(this.options.loadingClass),
          (this.$stage = a('<' + this.settings.stageElement + '>', { class: this.settings.stageClass }).wrap(a('<div/>', { class: this.settings.stageOuterClass }))),
          this.$element.append(this.$stage.parent()));
    }),
    (e.prototype.initializeItems = function () {
      var b = this.$element.find('.owl-item');
      if (b.length)
        return (
          (this._items = b.get().map(function (b) {
            return a(b);
          })),
          (this._mergers = this._items.map(function () {
            return 1;
          })),
          void this.refresh()
        );
      this.replace(this.$element.children().not(this.$stage.parent())), this.isVisible() ? this.refresh() : this.invalidate('width'), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass);
    }),
    (e.prototype.initialize = function () {
      if ((this.enter('initializing'), this.trigger('initialize'), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is('pre-loading'))) {
        var a, b, c;
        (a = this.$element.find('img')), (b = this.settings.nestedItemSelector ? '.' + this.settings.nestedItemSelector : d), (c = this.$element.children(b).width()), a.length && c <= 0 && this.preloadAutoWidthImages(a);
      }
      this.initializeStage(), this.initializeItems(), this.registerEventHandlers(), this.leave('initializing'), this.trigger('initialized');
    }),
    (e.prototype.isVisible = function () {
      return !this.settings.checkVisibility || this.$element.is(':visible');
    }),
    (e.prototype.setup = function () {
      var b = this.viewport(),
        c = this.options.responsive,
        d = -1,
        e = null;
      c
        ? (a.each(c, function (a) {
            a <= b && a > d && (d = Number(a));
          }),
          (e = a.extend({}, this.options, c[d])),
          'function' == typeof e.stagePadding && (e.stagePadding = e.stagePadding()),
          delete e.responsive,
          e.responsiveClass && this.$element.attr('class', this.$element.attr('class').replace(new RegExp('(' + this.options.responsiveClass + '-)\\S+\\s', 'g'), '$1' + d)))
        : (e = a.extend({}, this.options)),
        this.trigger('change', { property: { name: 'settings', value: e } }),
        (this._breakpoint = d),
        (this.settings = e),
        this.invalidate('settings'),
        this.trigger('changed', { property: { name: 'settings', value: this.settings } });
    }),
    (e.prototype.optionsLogic = function () {
      this.settings.autoWidth && ((this.settings.stagePadding = !1), (this.settings.merge = !1));
    }),
    (e.prototype.prepare = function (b) {
      var c = this.trigger('prepare', { content: b });
      return (
        c.data ||
          (c.data = a('<' + this.settings.itemElement + '/>')
            .addClass(this.options.itemClass)
            .append(b)),
        this.trigger('prepared', { content: c.data }),
        c.data
      );
    }),
    (e.prototype.update = function () {
      for (
        var b = 0,
          c = this._pipe.length,
          d = a.proxy(function (a) {
            return this[a];
          }, this._invalidated),
          e = {};
        b < c;

      )
        (this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e), b++;
      (this._invalidated = {}), !this.is('valid') && this.enter('valid');
    }),
    (e.prototype.width = function (a) {
      switch ((a = a || e.Width.Default)) {
        case e.Width.Inner:
        case e.Width.Outer:
          return this._width;
        default:
          return this._width - 2 * this.settings.stagePadding + this.settings.margin;
      }
    }),
    (e.prototype.refresh = function () {
      this.enter('refreshing'),
        this.trigger('refresh'),
        this.setup(),
        this.optionsLogic(),
        this.$element.addClass(this.options.refreshClass),
        this.update(),
        this.$element.removeClass(this.options.refreshClass),
        this.leave('refreshing'),
        this.trigger('refreshed');
    }),
    (e.prototype.onThrottledResize = function () {
      b.clearTimeout(this.resizeTimer), (this.resizeTimer = b.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate));
    }),
    (e.prototype.onResize = function () {
      return (
        !!this._items.length &&
        this._width !== this.$element.width() &&
        !!this.isVisible() &&
        (this.enter('resizing'), this.trigger('resize').isDefaultPrevented() ? (this.leave('resizing'), !1) : (this.invalidate('width'), this.refresh(), this.leave('resizing'), void this.trigger('resized')))
      );
    }),
    (e.prototype.registerEventHandlers = function () {
      a.support.transition && this.$stage.on(a.support.transition.end + '.owl.core', a.proxy(this.onTransitionEnd, this)),
        !1 !== this.settings.responsive && this.on(b, 'resize', this._handlers.onThrottledResize),
        this.settings.mouseDrag &&
          (this.$element.addClass(this.options.dragClass),
          this.$stage.on('mousedown.owl.core', a.proxy(this.onDragStart, this)),
          this.$stage.on('dragstart.owl.core selectstart.owl.core', function () {
            return !1;
          })),
        this.settings.touchDrag && (this.$stage.on('touchstart.owl.core', a.proxy(this.onDragStart, this)), this.$stage.on('touchcancel.owl.core', a.proxy(this.onDragEnd, this)));
    }),
    (e.prototype.onDragStart = function (b) {
      var d = null;
      3 !== b.which &&
        (a.support.transform
          ? ((d = this.$stage
              .css('transform')
              .replace(/.*\(|\)| /g, '')
              .split(',')),
            (d = { x: d[16 === d.length ? 12 : 4], y: d[16 === d.length ? 13 : 5] }))
          : ((d = this.$stage.position()), (d = { x: this.settings.rtl ? d.left + this.$stage.width() - this.width() + this.settings.margin : d.left, y: d.top })),
        this.is('animating') && (a.support.transform ? this.animate(d.x) : this.$stage.stop(), this.invalidate('position')),
        this.$element.toggleClass(this.options.grabClass, 'mousedown' === b.type),
        this.speed(0),
        (this._drag.time = new Date().getTime()),
        (this._drag.target = a(b.target)),
        (this._drag.stage.start = d),
        (this._drag.stage.current = d),
        (this._drag.pointer = this.pointer(b)),
        a(c).on('mouseup.owl.core touchend.owl.core', a.proxy(this.onDragEnd, this)),
        a(c).one(
          'mousemove.owl.core touchmove.owl.core',
          a.proxy(function (b) {
            var d = this.difference(this._drag.pointer, this.pointer(b));
            a(c).on('mousemove.owl.core touchmove.owl.core', a.proxy(this.onDragMove, this)), (Math.abs(d.x) < Math.abs(d.y) && this.is('valid')) || (b.preventDefault(), this.enter('dragging'), this.trigger('drag'));
          }, this)
        ));
    }),
    (e.prototype.onDragMove = function (a) {
      var b = null,
        c = null,
        d = null,
        e = this.difference(this._drag.pointer, this.pointer(a)),
        f = this.difference(this._drag.stage.start, e);
      this.is('dragging') &&
        (a.preventDefault(),
        this.settings.loop
          ? ((b = this.coordinates(this.minimum())), (c = this.coordinates(this.maximum() + 1) - b), (f.x = ((((f.x - b) % c) + c) % c) + b))
          : ((b = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum())),
            (c = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum())),
            (d = this.settings.pullDrag ? (-1 * e.x) / 5 : 0),
            (f.x = Math.max(Math.min(f.x, b + d), c + d))),
        (this._drag.stage.current = f),
        this.animate(f.x));
    }),
    (e.prototype.onDragEnd = function (b) {
      var d = this.difference(this._drag.pointer, this.pointer(b)),
        e = this._drag.stage.current,
        f = (d.x > 0) ^ this.settings.rtl ? 'left' : 'right';
      a(c).off('.owl.core'),
        this.$element.removeClass(this.options.grabClass),
        ((0 !== d.x && this.is('dragging')) || !this.is('valid')) &&
          (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed),
          this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)),
          this.invalidate('position'),
          this.update(),
          (this._drag.direction = f),
          (Math.abs(d.x) > 3 || new Date().getTime() - this._drag.time > 300) &&
            this._drag.target.one('click.owl.core', function () {
              return !1;
            })),
        this.is('dragging') && (this.leave('dragging'), this.trigger('dragged'));
    }),
    (e.prototype.closest = function (b, c) {
      var e = -1,
        f = 30,
        g = this.width(),
        h = this.coordinates();
      return (
        this.settings.freeDrag ||
          a.each(
            h,
            a.proxy(function (a, i) {
              return (
                'left' === c && b > i - f && b < i + f ? (e = a) : 'right' === c && b > i - g - f && b < i - g + f ? (e = a + 1) : this.op(b, '<', i) && this.op(b, '>', h[a + 1] !== d ? h[a + 1] : i - g) && (e = 'left' === c ? a + 1 : a),
                -1 === e
              );
            }, this)
          ),
        this.settings.loop || (this.op(b, '>', h[this.minimum()]) ? (e = b = this.minimum()) : this.op(b, '<', h[this.maximum()]) && (e = b = this.maximum())),
        e
      );
    }),
    (e.prototype.animate = function (b) {
      var c = this.speed() > 0;
      this.is('animating') && this.onTransitionEnd(),
        c && (this.enter('animating'), this.trigger('translate')),
        a.support.transform3d && a.support.transition
          ? this.$stage.css({ transform: 'translate3d(' + b + 'px,0px,0px)', transition: this.speed() / 1e3 + 's' + (this.settings.slideTransition ? ' ' + this.settings.slideTransition : '') })
          : c
          ? this.$stage.animate({ left: b + 'px' }, this.speed(), this.settings.fallbackEasing, a.proxy(this.onTransitionEnd, this))
          : this.$stage.css({ left: b + 'px' });
    }),
    (e.prototype.is = function (a) {
      return this._states.current[a] && this._states.current[a] > 0;
    }),
    (e.prototype.current = function (a) {
      if (a === d) return this._current;
      if (0 === this._items.length) return d;
      if (((a = this.normalize(a)), this._current !== a)) {
        var b = this.trigger('change', { property: { name: 'position', value: a } });
        b.data !== d && (a = this.normalize(b.data)), (this._current = a), this.invalidate('position'), this.trigger('changed', { property: { name: 'position', value: this._current } });
      }
      return this._current;
    }),
    (e.prototype.invalidate = function (b) {
      return (
        'string' === a.type(b) && ((this._invalidated[b] = !0), this.is('valid') && this.leave('valid')),
        a.map(this._invalidated, function (a, b) {
          return b;
        })
      );
    }),
    (e.prototype.reset = function (a) {
      (a = this.normalize(a)) !== d && ((this._speed = 0), (this._current = a), this.suppress(['translate', 'translated']), this.animate(this.coordinates(a)), this.release(['translate', 'translated']));
    }),
    (e.prototype.normalize = function (a, b) {
      var c = this._items.length,
        e = b ? 0 : this._clones.length;
      return !this.isNumeric(a) || c < 1 ? (a = d) : (a < 0 || a >= c + e) && (a = ((((a - e / 2) % c) + c) % c) + e / 2), a;
    }),
    (e.prototype.relative = function (a) {
      return (a -= this._clones.length / 2), this.normalize(a, !0);
    }),
    (e.prototype.maximum = function (a) {
      var b,
        c,
        d,
        e = this.settings,
        f = this._coordinates.length;
      if (e.loop) f = this._clones.length / 2 + this._items.length - 1;
      else if (e.autoWidth || e.merge) {
        if ((b = this._items.length)) for (c = this._items[--b].width(), d = this.$element.width(); b-- && !((c += this._items[b].width() + this.settings.margin) > d); );
        f = b + 1;
      } else f = e.center ? this._items.length - 1 : this._items.length - e.items;
      return a && (f -= this._clones.length / 2), Math.max(f, 0);
    }),
    (e.prototype.minimum = function (a) {
      return a ? 0 : this._clones.length / 2;
    }),
    (e.prototype.items = function (a) {
      return a === d ? this._items.slice() : ((a = this.normalize(a, !0)), this._items[a]);
    }),
    (e.prototype.mergers = function (a) {
      return a === d ? this._mergers.slice() : ((a = this.normalize(a, !0)), this._mergers[a]);
    }),
    (e.prototype.clones = function (b) {
      var c = this._clones.length / 2,
        e = c + this._items.length,
        f = function (a) {
          return a % 2 == 0 ? e + a / 2 : c - (a + 1) / 2;
        };
      return b === d
        ? a.map(this._clones, function (a, b) {
            return f(b);
          })
        : a.map(this._clones, function (a, c) {
            return a === b ? f(c) : null;
          });
    }),
    (e.prototype.speed = function (a) {
      return a !== d && (this._speed = a), this._speed;
    }),
    (e.prototype.coordinates = function (b) {
      var c,
        e = 1,
        f = b - 1;
      return b === d
        ? a.map(
            this._coordinates,
            a.proxy(function (a, b) {
              return this.coordinates(b);
            }, this)
          )
        : (this.settings.center ? (this.settings.rtl && ((e = -1), (f = b + 1)), (c = this._coordinates[b]), (c += ((this.width() - c + (this._coordinates[f] || 0)) / 2) * e)) : (c = this._coordinates[f] || 0), (c = Math.ceil(c)));
    }),
    (e.prototype.duration = function (a, b, c) {
      return 0 === c ? 0 : Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed);
    }),
    (e.prototype.to = function (a, b) {
      var c = this.current(),
        d = null,
        e = a - this.relative(c),
        f = (e > 0) - (e < 0),
        g = this._items.length,
        h = this.minimum(),
        i = this.maximum();
      this.settings.loop
        ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += -1 * f * g), (a = c + e), (d = ((((a - h) % g) + g) % g) + h) !== a && d - e <= i && d - e > 0 && ((c = d - e), (a = d), this.reset(c)))
        : this.settings.rewind
        ? ((i += 1), (a = ((a % i) + i) % i))
        : (a = Math.max(h, Math.min(i, a))),
        this.speed(this.duration(c, a, b)),
        this.current(a),
        this.isVisible() && this.update();
    }),
    (e.prototype.next = function (a) {
      (a = a || !1), this.to(this.relative(this.current()) + 1, a);
    }),
    (e.prototype.prev = function (a) {
      (a = a || !1), this.to(this.relative(this.current()) - 1, a);
    }),
    (e.prototype.onTransitionEnd = function (a) {
      if (a !== d && (a.stopPropagation(), (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0))) return !1;
      this.leave('animating'), this.trigger('translated');
    }),
    (e.prototype.viewport = function () {
      var d;
      return (
        this.options.responsiveBaseElement !== b
          ? (d = a(this.options.responsiveBaseElement).width())
          : b.innerWidth
          ? (d = b.innerWidth)
          : c.documentElement && c.documentElement.clientWidth
          ? (d = c.documentElement.clientWidth)
          : console.warn('Can not detect viewport width.'),
        d
      );
    }),
    (e.prototype.replace = function (b) {
      this.$stage.empty(),
        (this._items = []),
        b && (b = b instanceof jQuery ? b : a(b)),
        this.settings.nestedItemSelector && (b = b.find('.' + this.settings.nestedItemSelector)),
        b
          .filter(function () {
            return 1 === this.nodeType;
          })
          .each(
            a.proxy(function (a, b) {
              (b = this.prepare(b)), this.$stage.append(b), this._items.push(b), this._mergers.push(1 * b.find('[data-merge]').addBack('[data-merge]').attr('data-merge') || 1);
            }, this)
          ),
        this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0),
        this.invalidate('items');
    }),
    (e.prototype.add = function (b, c) {
      var e = this.relative(this._current);
      (c = c === d ? this._items.length : this.normalize(c, !0)),
        (b = b instanceof jQuery ? b : a(b)),
        this.trigger('add', { content: b, position: c }),
        (b = this.prepare(b)),
        0 === this._items.length || c === this._items.length
          ? (0 === this._items.length && this.$stage.append(b), 0 !== this._items.length && this._items[c - 1].after(b), this._items.push(b), this._mergers.push(1 * b.find('[data-merge]').addBack('[data-merge]').attr('data-merge') || 1))
          : (this._items[c].before(b), this._items.splice(c, 0, b), this._mergers.splice(c, 0, 1 * b.find('[data-merge]').addBack('[data-merge]').attr('data-merge') || 1)),
        this._items[e] && this.reset(this._items[e].index()),
        this.invalidate('items'),
        this.trigger('added', { content: b, position: c });
    }),
    (e.prototype.remove = function (a) {
      (a = this.normalize(a, !0)) !== d &&
        (this.trigger('remove', { content: this._items[a], position: a }), this._items[a].remove(), this._items.splice(a, 1), this._mergers.splice(a, 1), this.invalidate('items'), this.trigger('removed', { content: null, position: a }));
    }),
    (e.prototype.preloadAutoWidthImages = function (b) {
      b.each(
        a.proxy(function (b, c) {
          this.enter('pre-loading'),
            (c = a(c)),
            a(new Image())
              .one(
                'load',
                a.proxy(function (a) {
                  c.attr('src', a.target.src), c.css('opacity', 1), this.leave('pre-loading'), !this.is('pre-loading') && !this.is('initializing') && this.refresh();
                }, this)
              )
              .attr('src', c.attr('src') || c.attr('data-src') || c.attr('data-src-retina'));
        }, this)
      );
    }),
    (e.prototype.destroy = function () {
      this.$element.off('.owl.core'), this.$stage.off('.owl.core'), a(c).off('.owl.core'), !1 !== this.settings.responsive && (b.clearTimeout(this.resizeTimer), this.off(b, 'resize', this._handlers.onThrottledResize));
      for (var d in this._plugins) this._plugins[d].destroy();
      this.$stage.children('.cloned').remove(),
        this.$stage.unwrap(),
        this.$stage.children().contents().unwrap(),
        this.$stage.children().unwrap(),
        this.$stage.remove(),
        this.$element
          .removeClass(this.options.refreshClass)
          .removeClass(this.options.loadingClass)
          .removeClass(this.options.loadedClass)
          .removeClass(this.options.rtlClass)
          .removeClass(this.options.dragClass)
          .removeClass(this.options.grabClass)
          .attr('class', this.$element.attr('class').replace(new RegExp(this.options.responsiveClass + '-\\S+\\s', 'g'), ''))
          .removeData('owl.carousel');
    }),
    (e.prototype.op = function (a, b, c) {
      var d = this.settings.rtl;
      switch (b) {
        case '<':
          return d ? a > c : a < c;
        case '>':
          return d ? a < c : a > c;
        case '>=':
          return d ? a <= c : a >= c;
        case '<=':
          return d ? a >= c : a <= c;
      }
    }),
    (e.prototype.on = function (a, b, c, d) {
      a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent('on' + b, c);
    }),
    (e.prototype.off = function (a, b, c, d) {
      a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent('on' + b, c);
    }),
    (e.prototype.trigger = function (b, c, d, f, g) {
      var h = { item: { count: this._items.length, index: this.current() } },
        i = a.camelCase(
          a
            .grep(['on', b, d], function (a) {
              return a;
            })
            .join('-')
            .toLowerCase()
        ),
        j = a.Event([b, 'owl', d || 'carousel'].join('.').toLowerCase(), a.extend({ relatedTarget: this }, h, c));
      return (
        this._supress[b] ||
          (a.each(this._plugins, function (a, b) {
            b.onTrigger && b.onTrigger(j);
          }),
          this.register({ type: e.Type.Event, name: b }),
          this.$element.trigger(j),
          this.settings && 'function' == typeof this.settings[i] && this.settings[i].call(this, j)),
        j
      );
    }),
    (e.prototype.enter = function (b) {
      a.each(
        [b].concat(this._states.tags[b] || []),
        a.proxy(function (a, b) {
          this._states.current[b] === d && (this._states.current[b] = 0), this._states.current[b]++;
        }, this)
      );
    }),
    (e.prototype.leave = function (b) {
      a.each(
        [b].concat(this._states.tags[b] || []),
        a.proxy(function (a, b) {
          this._states.current[b]--;
        }, this)
      );
    }),
    (e.prototype.register = function (b) {
      if (b.type === e.Type.Event) {
        if ((a.event.special[b.name] || (a.event.special[b.name] = {}), !a.event.special[b.name].owl)) {
          var c = a.event.special[b.name]._default;
          (a.event.special[b.name]._default = function (a) {
            return !c || !c.apply || (a.namespace && -1 !== a.namespace.indexOf('owl')) ? a.namespace && a.namespace.indexOf('owl') > -1 : c.apply(this, arguments);
          }),
            (a.event.special[b.name].owl = !0);
        }
      } else
        b.type === e.Type.State &&
          (this._states.tags[b.name] ? (this._states.tags[b.name] = this._states.tags[b.name].concat(b.tags)) : (this._states.tags[b.name] = b.tags),
          (this._states.tags[b.name] = a.grep(
            this._states.tags[b.name],
            a.proxy(function (c, d) {
              return a.inArray(c, this._states.tags[b.name]) === d;
            }, this)
          )));
    }),
    (e.prototype.suppress = function (b) {
      a.each(
        b,
        a.proxy(function (a, b) {
          this._supress[b] = !0;
        }, this)
      );
    }),
    (e.prototype.release = function (b) {
      a.each(
        b,
        a.proxy(function (a, b) {
          delete this._supress[b];
        }, this)
      );
    }),
    (e.prototype.pointer = function (a) {
      var c = { x: null, y: null };
      return (
        (a = a.originalEvent || a || b.event),
        (a = a.touches && a.touches.length ? a.touches[0] : a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : a),
        a.pageX ? ((c.x = a.pageX), (c.y = a.pageY)) : ((c.x = a.clientX), (c.y = a.clientY)),
        c
      );
    }),
    (e.prototype.isNumeric = function (a) {
      return !isNaN(parseFloat(a));
    }),
    (e.prototype.difference = function (a, b) {
      return { x: a.x - b.x, y: a.y - b.y };
    }),
    (a.fn.owlCarousel = function (b) {
      var c = Array.prototype.slice.call(arguments, 1);
      return this.each(function () {
        var d = a(this),
          f = d.data('owl.carousel');
        f ||
          ((f = new e(this, 'object' == typeof b && b)),
          d.data('owl.carousel', f),
          a.each(['next', 'prev', 'to', 'destroy', 'refresh', 'replace', 'add', 'remove'], function (b, c) {
            f.register({ type: e.Type.Event, name: c }),
              f.$element.on(
                c + '.owl.carousel.core',
                a.proxy(function (a) {
                  a.namespace && a.relatedTarget !== this && (this.suppress([c]), f[c].apply(this, [].slice.call(arguments, 1)), this.release([c]));
                }, f)
              );
          })),
          'string' == typeof b && '_' !== b.charAt(0) && f[b].apply(f, c);
      });
    }),
    (a.fn.owlCarousel.Constructor = e);
})(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (b) {
      (this._core = b),
        (this._interval = null),
        (this._visible = null),
        (this._handlers = {
          'initialized.owl.carousel': a.proxy(function (a) {
            a.namespace && this._core.settings.autoRefresh && this.watch();
          }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this._core.$element.on(this._handlers);
    };
    (e.Defaults = { autoRefresh: !0, autoRefreshInterval: 500 }),
      (e.prototype.watch = function () {
        this._interval || ((this._visible = this._core.isVisible()), (this._interval = b.setInterval(a.proxy(this.refresh, this), this._core.settings.autoRefreshInterval)));
      }),
      (e.prototype.refresh = function () {
        this._core.isVisible() !== this._visible && ((this._visible = !this._visible), this._core.$element.toggleClass('owl-hidden', !this._visible), this._visible && this._core.invalidate('width') && this._core.refresh());
      }),
      (e.prototype.destroy = function () {
        var a, c;
        b.clearInterval(this._interval);
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (c in Object.getOwnPropertyNames(this)) 'function' != typeof this[c] && (this[c] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (b) {
      (this._core = b),
        (this._loaded = []),
        (this._handlers = {
          'initialized.owl.carousel change.owl.carousel resized.owl.carousel': a.proxy(function (b) {
            if (b.namespace && this._core.settings && this._core.settings.lazyLoad && ((b.property && 'position' == b.property.name) || 'initialized' == b.type)) {
              var c = this._core.settings,
                e = (c.center && Math.ceil(c.items / 2)) || c.items,
                f = (c.center && -1 * e) || 0,
                g = (b.property && b.property.value !== d ? b.property.value : this._core.current()) + f,
                h = this._core.clones().length,
                i = a.proxy(function (a, b) {
                  this.load(b);
                }, this);
              for (c.lazyLoadEager > 0 && ((e += c.lazyLoadEager), c.loop && ((g -= c.lazyLoadEager), e++)); f++ < e; ) this.load(h / 2 + this._core.relative(g)), h && a.each(this._core.clones(this._core.relative(g)), i), g++;
            }
          }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this._core.$element.on(this._handlers);
    };
    (e.Defaults = { lazyLoad: !1, lazyLoadEager: 0 }),
      (e.prototype.load = function (c) {
        var d = this._core.$stage.children().eq(c),
          e = d && d.find('.owl-lazy');
        !e ||
          a.inArray(d.get(0), this._loaded) > -1 ||
          (e.each(
            a.proxy(function (c, d) {
              var e,
                f = a(d),
                g = (b.devicePixelRatio > 1 && f.attr('data-src-retina')) || f.attr('data-src') || f.attr('data-srcset');
              this._core.trigger('load', { element: f, url: g }, 'lazy'),
                f.is('img')
                  ? f
                      .one(
                        'load.owl.lazy',
                        a.proxy(function () {
                          f.css('opacity', 1), this._core.trigger('loaded', { element: f, url: g }, 'lazy');
                        }, this)
                      )
                      .attr('src', g)
                  : f.is('source')
                  ? f
                      .one(
                        'load.owl.lazy',
                        a.proxy(function () {
                          this._core.trigger('loaded', { element: f, url: g }, 'lazy');
                        }, this)
                      )
                      .attr('srcset', g)
                  : ((e = new Image()),
                    (e.onload = a.proxy(function () {
                      f.css({ 'background-image': 'url("' + g + '")', opacity: '1' }), this._core.trigger('loaded', { element: f, url: g }, 'lazy');
                    }, this)),
                    (e.src = g));
            }, this)
          ),
          this._loaded.push(d.get(0)));
      }),
      (e.prototype.destroy = function () {
        var a, b;
        for (a in this.handlers) this._core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) 'function' != typeof this[b] && (this[b] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Lazy = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (c) {
      (this._core = c),
        (this._previousHeight = null),
        (this._handlers = {
          'initialized.owl.carousel refreshed.owl.carousel': a.proxy(function (a) {
            a.namespace && this._core.settings.autoHeight && this.update();
          }, this),
          'changed.owl.carousel': a.proxy(function (a) {
            a.namespace && this._core.settings.autoHeight && 'position' === a.property.name && this.update();
          }, this),
          'loaded.owl.lazy': a.proxy(function (a) {
            a.namespace && this._core.settings.autoHeight && a.element.closest('.' + this._core.settings.itemClass).index() === this._core.current() && this.update();
          }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this._core.$element.on(this._handlers),
        (this._intervalId = null);
      var d = this;
      a(b).on('load', function () {
        d._core.settings.autoHeight && d.update();
      }),
        a(b).resize(function () {
          d._core.settings.autoHeight &&
            (null != d._intervalId && clearTimeout(d._intervalId),
            (d._intervalId = setTimeout(function () {
              d.update();
            }, 250)));
        });
    };
    (e.Defaults = { autoHeight: !1, autoHeightClass: 'owl-height' }),
      (e.prototype.update = function () {
        var b = this._core._current,
          c = b + this._core.settings.items,
          d = this._core.settings.lazyLoad,
          e = this._core.$stage.children().toArray().slice(b, c),
          f = [],
          g = 0;
        a.each(e, function (b, c) {
          f.push(a(c).height());
        }),
          (g = Math.max.apply(null, f)),
          g <= 1 && d && this._previousHeight && (g = this._previousHeight),
          (this._previousHeight = g),
          this._core.$stage.parent().height(g).addClass(this._core.settings.autoHeightClass);
      }),
      (e.prototype.destroy = function () {
        var a, b;
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) 'function' != typeof this[b] && (this[b] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (b) {
      (this._core = b),
        (this._videos = {}),
        (this._playing = null),
        (this._handlers = {
          'initialized.owl.carousel': a.proxy(function (a) {
            a.namespace && this._core.register({ type: 'state', name: 'playing', tags: ['interacting'] });
          }, this),
          'resize.owl.carousel': a.proxy(function (a) {
            a.namespace && this._core.settings.video && this.isInFullScreen() && a.preventDefault();
          }, this),
          'refreshed.owl.carousel': a.proxy(function (a) {
            a.namespace && this._core.is('resizing') && this._core.$stage.find('.cloned .owl-video-frame').remove();
          }, this),
          'changed.owl.carousel': a.proxy(function (a) {
            a.namespace && 'position' === a.property.name && this._playing && this.stop();
          }, this),
          'prepared.owl.carousel': a.proxy(function (b) {
            if (b.namespace) {
              var c = a(b.content).find('.owl-video');
              c.length && (c.css('display', 'none'), this.fetch(c, a(b.content)));
            }
          }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this._core.$element.on(this._handlers),
        this._core.$element.on(
          'click.owl.video',
          '.owl-video-play-icon',
          a.proxy(function (a) {
            this.play(a);
          }, this)
        );
    };
    (e.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }),
      (e.prototype.fetch = function (a, b) {
        var c = (function () {
            return a.attr('data-vimeo-id') ? 'vimeo' : a.attr('data-vzaar-id') ? 'vzaar' : 'youtube';
          })(),
          d = a.attr('data-vimeo-id') || a.attr('data-youtube-id') || a.attr('data-vzaar-id'),
          e = a.attr('data-width') || this._core.settings.videoWidth,
          f = a.attr('data-height') || this._core.settings.videoHeight,
          g = a.attr('href');
        if (!g) throw new Error('Missing video URL.');
        if (
          ((d = g.match(
            /(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/
          )),
          d[3].indexOf('youtu') > -1)
        )
          c = 'youtube';
        else if (d[3].indexOf('vimeo') > -1) c = 'vimeo';
        else {
          if (!(d[3].indexOf('vzaar') > -1)) throw new Error('Video URL not supported.');
          c = 'vzaar';
        }
        (d = d[6]), (this._videos[g] = { type: c, id: d, width: e, height: f }), b.attr('data-video', g), this.thumbnail(a, this._videos[g]);
      }),
      (e.prototype.thumbnail = function (b, c) {
        var d,
          e,
          f,
          g = c.width && c.height ? 'width:' + c.width + 'px;height:' + c.height + 'px;' : '',
          h = b.find('img'),
          i = 'src',
          j = '',
          k = this._core.settings,
          l = function (c) {
            (e = '<div class="owl-video-play-icon"></div>'),
              (d = k.lazyLoad ? a('<div/>', { class: 'owl-video-tn ' + j, srcType: c }) : a('<div/>', { class: 'owl-video-tn', style: 'opacity:1;background-image:url(' + c + ')' })),
              b.after(d),
              b.after(e);
          };
        if ((b.wrap(a('<div/>', { class: 'owl-video-wrapper', style: g })), this._core.settings.lazyLoad && ((i = 'data-src'), (j = 'owl-lazy')), h.length)) return l(h.attr(i)), h.remove(), !1;
        'youtube' === c.type
          ? ((f = '//img.youtube.com/vi/' + c.id + '/hqdefault.jpg'), l(f))
          : 'vimeo' === c.type
          ? a.ajax({
              type: 'GET',
              url: '//vimeo.com/api/v2/video/' + c.id + '.json',
              jsonp: 'callback',
              dataType: 'jsonp',
              success: function (a) {
                (f = a[0].thumbnail_large), l(f);
              },
            })
          : 'vzaar' === c.type &&
            a.ajax({
              type: 'GET',
              url: '//vzaar.com/api/videos/' + c.id + '.json',
              jsonp: 'callback',
              dataType: 'jsonp',
              success: function (a) {
                (f = a.framegrab_url), l(f);
              },
            });
      }),
      (e.prototype.stop = function () {
        this._core.trigger('stop', null, 'video'),
          this._playing.find('.owl-video-frame').remove(),
          this._playing.removeClass('owl-video-playing'),
          (this._playing = null),
          this._core.leave('playing'),
          this._core.trigger('stopped', null, 'video');
      }),
      (e.prototype.play = function (b) {
        var c,
          d = a(b.target),
          e = d.closest('.' + this._core.settings.itemClass),
          f = this._videos[e.attr('data-video')],
          g = f.width || '100%',
          h = f.height || this._core.$stage.height();
        this._playing ||
          (this._core.enter('playing'),
          this._core.trigger('play', null, 'video'),
          (e = this._core.items(this._core.relative(e.index()))),
          this._core.reset(e.index()),
          (c = a('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>')),
          c.attr('height', h),
          c.attr('width', g),
          'youtube' === f.type
            ? c.attr('src', '//www.youtube.com/embed/' + f.id + '?autoplay=1&rel=0&v=' + f.id)
            : 'vimeo' === f.type
            ? c.attr('src', '//player.vimeo.com/video/' + f.id + '?autoplay=1')
            : 'vzaar' === f.type && c.attr('src', '//view.vzaar.com/' + f.id + '/player?autoplay=true'),
          a(c).wrap('<div class="owl-video-frame" />').insertAfter(e.find('.owl-video')),
          (this._playing = e.addClass('owl-video-playing')));
      }),
      (e.prototype.isInFullScreen = function () {
        var b = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
        return b && a(b).parent().hasClass('owl-video-frame');
      }),
      (e.prototype.destroy = function () {
        var a, b;
        this._core.$element.off('click.owl.video');
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) 'function' != typeof this[b] && (this[b] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Video = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (b) {
      (this.core = b),
        (this.core.options = a.extend({}, e.Defaults, this.core.options)),
        (this.swapping = !0),
        (this.previous = d),
        (this.next = d),
        (this.handlers = {
          'change.owl.carousel': a.proxy(function (a) {
            a.namespace && 'position' == a.property.name && ((this.previous = this.core.current()), (this.next = a.property.value));
          }, this),
          'drag.owl.carousel dragged.owl.carousel translated.owl.carousel': a.proxy(function (a) {
            a.namespace && (this.swapping = 'translated' == a.type);
          }, this),
          'translate.owl.carousel': a.proxy(function (a) {
            a.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap();
          }, this),
        }),
        this.core.$element.on(this.handlers);
    };
    (e.Defaults = { animateOut: !1, animateIn: !1 }),
      (e.prototype.swap = function () {
        if (1 === this.core.settings.items && a.support.animation && a.support.transition) {
          this.core.speed(0);
          var b,
            c = a.proxy(this.clear, this),
            d = this.core.$stage.children().eq(this.previous),
            e = this.core.$stage.children().eq(this.next),
            f = this.core.settings.animateIn,
            g = this.core.settings.animateOut;
          this.core.current() !== this.previous &&
            (g &&
              ((b = this.core.coordinates(this.previous) - this.core.coordinates(this.next)),
              d
                .one(a.support.animation.end, c)
                .css({ left: b + 'px' })
                .addClass('animated owl-animated-out')
                .addClass(g)),
            f && e.one(a.support.animation.end, c).addClass('animated owl-animated-in').addClass(f));
        }
      }),
      (e.prototype.clear = function (b) {
        a(b.target).css({ left: '' }).removeClass('animated owl-animated-out owl-animated-in').removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd();
      }),
      (e.prototype.destroy = function () {
        var a, b;
        for (a in this.handlers) this.core.$element.off(a, this.handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) 'function' != typeof this[b] && (this[b] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Animate = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    var e = function (b) {
      (this._core = b),
        (this._call = null),
        (this._time = 0),
        (this._timeout = 0),
        (this._paused = !0),
        (this._handlers = {
          'changed.owl.carousel': a.proxy(function (a) {
            a.namespace && 'settings' === a.property.name ? (this._core.settings.autoplay ? this.play() : this.stop()) : a.namespace && 'position' === a.property.name && this._paused && (this._time = 0);
          }, this),
          'initialized.owl.carousel': a.proxy(function (a) {
            a.namespace && this._core.settings.autoplay && this.play();
          }, this),
          'play.owl.autoplay': a.proxy(function (a, b, c) {
            a.namespace && this.play(b, c);
          }, this),
          'stop.owl.autoplay': a.proxy(function (a) {
            a.namespace && this.stop();
          }, this),
          'mouseover.owl.autoplay': a.proxy(function () {
            this._core.settings.autoplayHoverPause && this._core.is('rotating') && this.pause();
          }, this),
          'mouseleave.owl.autoplay': a.proxy(function () {
            this._core.settings.autoplayHoverPause && this._core.is('rotating') && this.play();
          }, this),
          'touchstart.owl.core': a.proxy(function () {
            this._core.settings.autoplayHoverPause && this._core.is('rotating') && this.pause();
          }, this),
          'touchend.owl.core': a.proxy(function () {
            this._core.settings.autoplayHoverPause && this.play();
          }, this),
        }),
        this._core.$element.on(this._handlers),
        (this._core.options = a.extend({}, e.Defaults, this._core.options));
    };
    (e.Defaults = { autoplay: !1, autoplayTimeout: 5e3, autoplayHoverPause: !1, autoplaySpeed: !1 }),
      (e.prototype._next = function (d) {
        (this._call = b.setTimeout(a.proxy(this._next, this, d), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read())),
          this._core.is('interacting') || c.hidden || this._core.next(d || this._core.settings.autoplaySpeed);
      }),
      (e.prototype.read = function () {
        return new Date().getTime() - this._time;
      }),
      (e.prototype.play = function (c, d) {
        var e;
        this._core.is('rotating') || this._core.enter('rotating'),
          (c = c || this._core.settings.autoplayTimeout),
          (e = Math.min(this._time % (this._timeout || c), c)),
          this._paused ? ((this._time = this.read()), (this._paused = !1)) : b.clearTimeout(this._call),
          (this._time += (this.read() % c) - e),
          (this._timeout = c),
          (this._call = b.setTimeout(a.proxy(this._next, this, d), c - e));
      }),
      (e.prototype.stop = function () {
        this._core.is('rotating') && ((this._time = 0), (this._paused = !0), b.clearTimeout(this._call), this._core.leave('rotating'));
      }),
      (e.prototype.pause = function () {
        this._core.is('rotating') && !this._paused && ((this._time = this.read()), (this._paused = !0), b.clearTimeout(this._call));
      }),
      (e.prototype.destroy = function () {
        var a, b;
        this.stop();
        for (a in this._handlers) this._core.$element.off(a, this._handlers[a]);
        for (b in Object.getOwnPropertyNames(this)) 'function' != typeof this[b] && (this[b] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.autoplay = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    'use strict';
    var e = function (b) {
      (this._core = b),
        (this._initialized = !1),
        (this._pages = []),
        (this._controls = {}),
        (this._templates = []),
        (this.$element = this._core.$element),
        (this._overrides = { next: this._core.next, prev: this._core.prev, to: this._core.to }),
        (this._handlers = {
          'prepared.owl.carousel': a.proxy(function (b) {
            b.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + a(b.content).find('[data-dot]').addBack('[data-dot]').attr('data-dot') + '</div>');
          }, this),
          'added.owl.carousel': a.proxy(function (a) {
            a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 0, this._templates.pop());
          }, this),
          'remove.owl.carousel': a.proxy(function (a) {
            a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 1);
          }, this),
          'changed.owl.carousel': a.proxy(function (a) {
            a.namespace && 'position' == a.property.name && this.draw();
          }, this),
          'initialized.owl.carousel': a.proxy(function (a) {
            a.namespace && !this._initialized && (this._core.trigger('initialize', null, 'navigation'), this.initialize(), this.update(), this.draw(), (this._initialized = !0), this._core.trigger('initialized', null, 'navigation'));
          }, this),
          'refreshed.owl.carousel': a.proxy(function (a) {
            a.namespace && this._initialized && (this._core.trigger('refresh', null, 'navigation'), this.update(), this.draw(), this._core.trigger('refreshed', null, 'navigation'));
          }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this.$element.on(this._handlers);
    };
    (e.Defaults = {
      nav: !1,
      navText: ['<span aria-label="Previous">&#x2039;</span>', '<span aria-label="Next">&#x203a;</span>'],
      navSpeed: !1,
      navElement: 'button type="button" role="presentation"',
      navContainer: !1,
      navContainerClass: 'owl-nav',
      navClass: ['owl-prev', 'owl-next'],
      slideBy: 1,
      dotClass: 'owl-dot',
      dotsClass: 'owl-dots',
      dots: !0,
      dotsEach: !1,
      dotsData: !1,
      dotsSpeed: !1,
      dotsContainer: !1,
    }),
      (e.prototype.initialize = function () {
        var b,
          c = this._core.settings;
        (this._controls.$relative = (c.navContainer ? a(c.navContainer) : a('<div>').addClass(c.navContainerClass).appendTo(this.$element)).addClass('disabled')),
          (this._controls.$previous = a('<' + c.navElement + '>')
            .addClass(c.navClass[0])
            .html(c.navText[0])
            .prependTo(this._controls.$relative)
            .on(
              'click',
              a.proxy(function (a) {
                this.prev(c.navSpeed);
              }, this)
            )),
          (this._controls.$next = a('<' + c.navElement + '>')
            .addClass(c.navClass[1])
            .html(c.navText[1])
            .appendTo(this._controls.$relative)
            .on(
              'click',
              a.proxy(function (a) {
                this.next(c.navSpeed);
              }, this)
            )),
          c.dotsData || (this._templates = [a('<button role="button">').addClass(c.dotClass).append(a('<span>')).prop('outerHTML')]),
          (this._controls.$absolute = (c.dotsContainer ? a(c.dotsContainer) : a('<div>').addClass(c.dotsClass).appendTo(this.$element)).addClass('disabled')),
          this._controls.$absolute.on(
            'click',
            'button',
            a.proxy(function (b) {
              var d = a(b.target).parent().is(this._controls.$absolute) ? a(b.target).index() : a(b.target).parent().index();
              b.preventDefault(), this.to(d, c.dotsSpeed);
            }, this)
          );
        for (b in this._overrides) this._core[b] = a.proxy(this[b], this);
      }),
      (e.prototype.destroy = function () {
        var a, b, c, d, e;
        e = this._core.settings;
        for (a in this._handlers) this.$element.off(a, this._handlers[a]);
        for (b in this._controls) '$relative' === b && e.navContainer ? this._controls[b].html('') : this._controls[b].remove();
        for (d in this.overides) this._core[d] = this._overrides[d];
        for (c in Object.getOwnPropertyNames(this)) 'function' != typeof this[c] && (this[c] = null);
      }),
      (e.prototype.update = function () {
        var a,
          b,
          c,
          d = this._core.clones().length / 2,
          e = d + this._core.items().length,
          f = this._core.maximum(!0),
          g = this._core.settings,
          h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items;
        if (('page' !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)), g.dots || 'page' == g.slideBy))
          for (this._pages = [], a = d, b = 0, c = 0; a < e; a++) {
            if (b >= h || 0 === b) {
              if ((this._pages.push({ start: Math.min(f, a - d), end: a - d + h - 1 }), Math.min(f, a - d) === f)) break;
              (b = 0), ++c;
            }
            b += this._core.mergers(this._core.relative(a));
          }
      }),
      (e.prototype.draw = function () {
        var b,
          c = this._core.settings,
          d = this._core.items().length <= c.items,
          e = this._core.relative(this._core.current()),
          f = c.loop || c.rewind;
        this._controls.$relative.toggleClass('disabled', !c.nav || d),
          c.nav && (this._controls.$previous.toggleClass('disabled', !f && e <= this._core.minimum(!0)), this._controls.$next.toggleClass('disabled', !f && e >= this._core.maximum(!0))),
          this._controls.$absolute.toggleClass('disabled', !c.dots || d),
          c.dots &&
            ((b = this._pages.length - this._controls.$absolute.children().length),
            c.dotsData && 0 !== b
              ? this._controls.$absolute.html(this._templates.join(''))
              : b > 0
              ? this._controls.$absolute.append(new Array(b + 1).join(this._templates[0]))
              : b < 0 && this._controls.$absolute.children().slice(b).remove(),
            this._controls.$absolute.find('.active').removeClass('active'),
            this._controls.$absolute.children().eq(a.inArray(this.current(), this._pages)).addClass('active'));
      }),
      (e.prototype.onTrigger = function (b) {
        var c = this._core.settings;
        b.page = { index: a.inArray(this.current(), this._pages), count: this._pages.length, size: c && (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items) };
      }),
      (e.prototype.current = function () {
        var b = this._core.relative(this._core.current());
        return a
          .grep(
            this._pages,
            a.proxy(function (a, c) {
              return a.start <= b && a.end >= b;
            }, this)
          )
          .pop();
      }),
      (e.prototype.getPosition = function (b) {
        var c,
          d,
          e = this._core.settings;
        return (
          'page' == e.slideBy
            ? ((c = a.inArray(this.current(), this._pages)), (d = this._pages.length), b ? ++c : --c, (c = this._pages[((c % d) + d) % d].start))
            : ((c = this._core.relative(this._core.current())), (d = this._core.items().length), b ? (c += e.slideBy) : (c -= e.slideBy)),
          c
        );
      }),
      (e.prototype.next = function (b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b);
      }),
      (e.prototype.prev = function (b) {
        a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b);
      }),
      (e.prototype.to = function (b, c, d) {
        var e;
        !d && this._pages.length ? ((e = this._pages.length), a.proxy(this._overrides.to, this._core)(this._pages[((b % e) + e) % e].start, c)) : a.proxy(this._overrides.to, this._core)(b, c);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Navigation = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    'use strict';
    var e = function (c) {
      (this._core = c),
        (this._hashes = {}),
        (this.$element = this._core.$element),
        (this._handlers = {
          'initialized.owl.carousel': a.proxy(function (c) {
            c.namespace && 'URLHash' === this._core.settings.startPosition && a(b).trigger('hashchange.owl.navigation');
          }, this),
          'prepared.owl.carousel': a.proxy(function (b) {
            if (b.namespace) {
              var c = a(b.content).find('[data-hash]').addBack('[data-hash]').attr('data-hash');
              if (!c) return;
              this._hashes[c] = b.content;
            }
          }, this),
          'changed.owl.carousel': a.proxy(function (c) {
            if (c.namespace && 'position' === c.property.name) {
              var d = this._core.items(this._core.relative(this._core.current())),
                e = a
                  .map(this._hashes, function (a, b) {
                    return a === d ? b : null;
                  })
                  .join();
              if (!e || b.location.hash.slice(1) === e) return;
              b.location.hash = e;
            }
          }, this),
        }),
        (this._core.options = a.extend({}, e.Defaults, this._core.options)),
        this.$element.on(this._handlers),
        a(b).on(
          'hashchange.owl.navigation',
          a.proxy(function (a) {
            var c = b.location.hash.substring(1),
              e = this._core.$stage.children(),
              f = this._hashes[c] && e.index(this._hashes[c]);
            f !== d && f !== this._core.current() && this._core.to(this._core.relative(f), !1, !0);
          }, this)
        );
    };
    (e.Defaults = { URLhashListener: !1 }),
      (e.prototype.destroy = function () {
        var c, d;
        a(b).off('hashchange.owl.navigation');
        for (c in this._handlers) this._core.$element.off(c, this._handlers[c]);
        for (d in Object.getOwnPropertyNames(this)) 'function' != typeof this[d] && (this[d] = null);
      }),
      (a.fn.owlCarousel.Constructor.Plugins.Hash = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (a, b, c, d) {
    function e(b, c) {
      var e = !1,
        f = b.charAt(0).toUpperCase() + b.slice(1);
      return (
        a.each((b + ' ' + h.join(f + ' ') + f).split(' '), function (a, b) {
          if (g[b] !== d) return (e = !c || b), !1;
        }),
        e
      );
    }
    function f(a) {
      return e(a, !0);
    }
    var g = a('<support>').get(0).style,
      h = 'Webkit Moz O ms'.split(' '),
      i = {
        transition: { end: { WebkitTransition: 'webkitTransitionEnd', MozTransition: 'transitionend', OTransition: 'oTransitionEnd', transition: 'transitionend' } },
        animation: { end: { WebkitAnimation: 'webkitAnimationEnd', MozAnimation: 'animationend', OAnimation: 'oAnimationEnd', animation: 'animationend' } },
      },
      j = {
        csstransforms: function () {
          return !!e('transform');
        },
        csstransforms3d: function () {
          return !!e('perspective');
        },
        csstransitions: function () {
          return !!e('transition');
        },
        cssanimations: function () {
          return !!e('animation');
        },
      };
    j.csstransitions() && ((a.support.transition = new String(f('transition'))), (a.support.transition.end = i.transition.end[a.support.transition])),
      j.cssanimations() && ((a.support.animation = new String(f('animation'))), (a.support.animation.end = i.animation.end[a.support.animation])),
      j.csstransforms() && ((a.support.transform = new String(f('transform'))), (a.support.transform3d = j.csstransforms3d()));
  })(window.Zepto || window.jQuery, window, document);

/*! Magnific Popup - v1.1.0 - 2016-02-20
 * http://dimsemenov.com/plugins/magnific-popup/
 * Copyright (c) 2016 Dmitry Semenov; */
!(function (a) {
  'function' == typeof define && define.amd ? define(['jquery'], a) : a('object' == typeof exports ? require('jquery') : window.jQuery || window.Zepto);
})(function (a) {
  var b,
    c,
    d,
    e,
    f,
    g,
    h = 'Close',
    i = 'BeforeClose',
    j = 'AfterClose',
    k = 'BeforeAppend',
    l = 'MarkupParse',
    m = 'Open',
    n = 'Change',
    o = 'mfp',
    p = '.' + o,
    q = 'mfp-ready',
    r = 'mfp-removing',
    s = 'mfp-prevent-close',
    t = function () {},
    u = !!window.jQuery,
    v = a(window),
    w = function (a, c) {
      b.ev.on(o + a + p, c);
    },
    x = function (b, c, d, e) {
      var f = document.createElement('div');
      return (f.className = 'mfp-' + b), d && (f.innerHTML = d), e ? c && c.appendChild(f) : ((f = a(f)), c && f.appendTo(c)), f;
    },
    y = function (c, d) {
      b.ev.triggerHandler(o + c, d), b.st.callbacks && ((c = c.charAt(0).toLowerCase() + c.slice(1)), b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]));
    },
    z = function (c) {
      return (c === g && b.currTemplate.closeBtn) || ((b.currTemplate.closeBtn = a(b.st.closeMarkup.replace('%title%', b.st.tClose))), (g = c)), b.currTemplate.closeBtn;
    },
    A = function () {
      a.magnificPopup.instance || ((b = new t()), b.init(), (a.magnificPopup.instance = b));
    },
    B = function () {
      var a = document.createElement('p').style,
        b = ['ms', 'O', 'Moz', 'Webkit'];
      if (void 0 !== a.transition) return !0;
      for (; b.length; ) if (b.pop() + 'Transition' in a) return !0;
      return !1;
    };
  (t.prototype = {
    constructor: t,
    init: function () {
      var c = navigator.appVersion;
      (b.isLowIE = b.isIE8 = document.all && !document.addEventListener),
        (b.isAndroid = /android/gi.test(c)),
        (b.isIOS = /iphone|ipad|ipod/gi.test(c)),
        (b.supportsTransition = B()),
        (b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent)),
        (d = a(document)),
        (b.popupsCache = {});
    },
    open: function (c) {
      var e;
      if (c.isObj === !1) {
        (b.items = c.items.toArray()), (b.index = 0);
        var g,
          h = c.items;
        for (e = 0; e < h.length; e++)
          if (((g = h[e]), g.parsed && (g = g.el[0]), g === c.el[0])) {
            b.index = e;
            break;
          }
      } else (b.items = a.isArray(c.items) ? c.items : [c.items]), (b.index = c.index || 0);
      if (b.isOpen) return void b.updateItemHTML();
      (b.types = []),
        (f = ''),
        c.mainEl && c.mainEl.length ? (b.ev = c.mainEl.eq(0)) : (b.ev = d),
        c.key ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}), (b.currTemplate = b.popupsCache[c.key])) : (b.currTemplate = {}),
        (b.st = a.extend(!0, {}, a.magnificPopup.defaults, c)),
        (b.fixedContentPos = 'auto' === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos),
        b.st.modal && ((b.st.closeOnContentClick = !1), (b.st.closeOnBgClick = !1), (b.st.showCloseBtn = !1), (b.st.enableEscapeKey = !1)),
        b.bgOverlay ||
          ((b.bgOverlay = x('bg').on('click' + p, function () {
            b.close();
          })),
          (b.wrap = x('wrap')
            .attr('tabindex', -1)
            .on('click' + p, function (a) {
              b._checkIfClose(a.target) && b.close();
            })),
          (b.container = x('container', b.wrap))),
        (b.contentContainer = x('content')),
        b.st.preloader && (b.preloader = x('preloader', b.container, b.st.tLoading));
      var i = a.magnificPopup.modules;
      for (e = 0; e < i.length; e++) {
        var j = i[e];
        (j = j.charAt(0).toUpperCase() + j.slice(1)), b['init' + j].call(b);
      }
      y('BeforeOpen'),
        b.st.showCloseBtn &&
          (b.st.closeBtnInside
            ? (w(l, function (a, b, c, d) {
                c.close_replaceWith = z(d.type);
              }),
              (f += ' mfp-close-btn-in'))
            : b.wrap.append(z())),
        b.st.alignTop && (f += ' mfp-align-top'),
        b.fixedContentPos ? b.wrap.css({ overflow: b.st.overflowY, overflowX: 'hidden', overflowY: b.st.overflowY }) : b.wrap.css({ top: v.scrollTop(), position: 'absolute' }),
        (b.st.fixedBgPos === !1 || ('auto' === b.st.fixedBgPos && !b.fixedContentPos)) && b.bgOverlay.css({ height: d.height(), position: 'absolute' }),
        b.st.enableEscapeKey &&
          d.on('keyup' + p, function (a) {
            27 === a.keyCode && b.close();
          }),
        v.on('resize' + p, function () {
          b.updateSize();
        }),
        b.st.closeOnContentClick || (f += ' mfp-auto-cursor'),
        f && b.wrap.addClass(f);
      var k = (b.wH = v.height()),
        n = {};
      if (b.fixedContentPos && b._hasScrollBar(k)) {
        var o = b._getScrollbarSize();
        o && (n.marginRight = o);
      }
      b.fixedContentPos && (b.isIE7 ? a('body, html').css('overflow', 'hidden') : (n.overflow = 'hidden'));
      var r = b.st.mainClass;
      return (
        b.isIE7 && (r += ' mfp-ie7'),
        r && b._addClassToMFP(r),
        b.updateItemHTML(),
        y('BuildControls'),
        a('html').css(n),
        b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)),
        (b._lastFocusedEl = document.activeElement),
        setTimeout(function () {
          b.content ? (b._addClassToMFP(q), b._setFocus()) : b.bgOverlay.addClass(q), d.on('focusin' + p, b._onFocusIn);
        }, 16),
        (b.isOpen = !0),
        b.updateSize(k),
        y(m),
        c
      );
    },
    close: function () {
      b.isOpen &&
        (y(i),
        (b.isOpen = !1),
        b.st.removalDelay && !b.isLowIE && b.supportsTransition
          ? (b._addClassToMFP(r),
            setTimeout(function () {
              b._close();
            }, b.st.removalDelay))
          : b._close());
    },
    _close: function () {
      y(h);
      var c = r + ' ' + q + ' ';
      if ((b.bgOverlay.detach(), b.wrap.detach(), b.container.empty(), b.st.mainClass && (c += b.st.mainClass + ' '), b._removeClassFromMFP(c), b.fixedContentPos)) {
        var e = { marginRight: '' };
        b.isIE7 ? a('body, html').css('overflow', '') : (e.overflow = ''), a('html').css(e);
      }
      d.off('keyup' + p + ' focusin' + p),
        b.ev.off(p),
        b.wrap.attr('class', 'mfp-wrap').removeAttr('style'),
        b.bgOverlay.attr('class', 'mfp-bg'),
        b.container.attr('class', 'mfp-container'),
        !b.st.showCloseBtn || (b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0) || (b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach()),
        b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(),
        (b.currItem = null),
        (b.content = null),
        (b.currTemplate = null),
        (b.prevHeight = 0),
        y(j);
    },
    updateSize: function (a) {
      if (b.isIOS) {
        var c = document.documentElement.clientWidth / window.innerWidth,
          d = window.innerHeight * c;
        b.wrap.css('height', d), (b.wH = d);
      } else b.wH = a || v.height();
      b.fixedContentPos || b.wrap.css('height', b.wH), y('Resize');
    },
    updateItemHTML: function () {
      var c = b.items[b.index];
      b.contentContainer.detach(), b.content && b.content.detach(), c.parsed || (c = b.parseEl(b.index));
      var d = c.type;
      if ((y('BeforeChange', [b.currItem ? b.currItem.type : '', d]), (b.currItem = c), !b.currTemplate[d])) {
        var f = b.st[d] ? b.st[d].markup : !1;
        y('FirstMarkupParse', f), f ? (b.currTemplate[d] = a(f)) : (b.currTemplate[d] = !0);
      }
      e && e !== c.type && b.container.removeClass('mfp-' + e + '-holder');
      var g = b['get' + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]);
      b.appendContent(g, d), (c.preloaded = !0), y(n, c), (e = c.type), b.container.prepend(b.contentContainer), y('AfterChange');
    },
    appendContent: function (a, c) {
      (b.content = a),
        a ? (b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0 ? b.content.find('.mfp-close').length || b.content.append(z()) : (b.content = a)) : (b.content = ''),
        y(k),
        b.container.addClass('mfp-' + c + '-holder'),
        b.contentContainer.append(b.content);
    },
    parseEl: function (c) {
      var d,
        e = b.items[c];
      if ((e.tagName ? (e = { el: a(e) }) : ((d = e.type), (e = { data: e, src: e.src })), e.el)) {
        for (var f = b.types, g = 0; g < f.length; g++)
          if (e.el.hasClass('mfp-' + f[g])) {
            d = f[g];
            break;
          }
        (e.src = e.el.attr('data-mfp-src')), e.src || (e.src = e.el.attr('href'));
      }
      return (e.type = d || b.st.type || 'inline'), (e.index = c), (e.parsed = !0), (b.items[c] = e), y('ElementParse', e), b.items[c];
    },
    addGroup: function (a, c) {
      var d = function (d) {
        (d.mfpEl = this), b._openClick(d, a, c);
      };
      c || (c = {});
      var e = 'click.magnificPopup';
      (c.mainEl = a), c.items ? ((c.isObj = !0), a.off(e).on(e, d)) : ((c.isObj = !1), c.delegate ? a.off(e).on(e, c.delegate, d) : ((c.items = a), a.off(e).on(e, d)));
    },
    _openClick: function (c, d, e) {
      var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;
      if (f || !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)) {
        var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn;
        if (g)
          if (a.isFunction(g)) {
            if (!g.call(b)) return !0;
          } else if (v.width() < g) return !0;
        c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()), (e.el = a(c.mfpEl)), e.delegate && (e.items = d.find(e.delegate)), b.open(e);
      }
    },
    updateStatus: function (a, d) {
      if (b.preloader) {
        c !== a && b.container.removeClass('mfp-s-' + c), d || 'loading' !== a || (d = b.st.tLoading);
        var e = { status: a, text: d };
        y('UpdateStatus', e),
          (a = e.status),
          (d = e.text),
          b.preloader.html(d),
          b.preloader.find('a').on('click', function (a) {
            a.stopImmediatePropagation();
          }),
          b.container.addClass('mfp-s-' + a),
          (c = a);
      }
    },
    _checkIfClose: function (c) {
      if (!a(c).hasClass(s)) {
        var d = b.st.closeOnContentClick,
          e = b.st.closeOnBgClick;
        if (d && e) return !0;
        if (!b.content || a(c).hasClass('mfp-close') || (b.preloader && c === b.preloader[0])) return !0;
        if (c === b.content[0] || a.contains(b.content[0], c)) {
          if (d) return !0;
        } else if (e && a.contains(document, c)) return !0;
        return !1;
      }
    },
    _addClassToMFP: function (a) {
      b.bgOverlay.addClass(a), b.wrap.addClass(a);
    },
    _removeClassFromMFP: function (a) {
      this.bgOverlay.removeClass(a), b.wrap.removeClass(a);
    },
    _hasScrollBar: function (a) {
      return (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height());
    },
    _setFocus: function () {
      (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus();
    },
    _onFocusIn: function (c) {
      return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(), !1);
    },
    _parseMarkup: function (b, c, d) {
      var e;
      d.data && (c = a.extend(d.data, c)),
        y(l, [b, c, d]),
        a.each(c, function (c, d) {
          if (void 0 === d || d === !1) return !0;
          if (((e = c.split('_')), e.length > 1)) {
            var f = b.find(p + '-' + e[0]);
            if (f.length > 0) {
              var g = e[1];
              'replaceWith' === g ? f[0] !== d[0] && f.replaceWith(d) : 'img' === g ? (f.is('img') ? f.attr('src', d) : f.replaceWith(a('<img>').attr('src', d).attr('class', f.attr('class')))) : f.attr(e[1], d);
            }
          } else b.find(p + '-' + c).html(d);
        });
    },
    _getScrollbarSize: function () {
      if (void 0 === b.scrollbarSize) {
        var a = document.createElement('div');
        (a.style.cssText = 'width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;'), document.body.appendChild(a), (b.scrollbarSize = a.offsetWidth - a.clientWidth), document.body.removeChild(a);
      }
      return b.scrollbarSize;
    },
  }),
    (a.magnificPopup = {
      instance: null,
      proto: t.prototype,
      modules: [],
      open: function (b, c) {
        return A(), (b = b ? a.extend(!0, {}, b) : {}), (b.isObj = !0), (b.index = c || 0), this.instance.open(b);
      },
      close: function () {
        return a.magnificPopup.instance && a.magnificPopup.instance.close();
      },
      registerModule: function (b, c) {
        c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b);
      },
      defaults: {
        disableOn: 0,
        key: null,
        midClick: !1,
        mainClass: '',
        preloader: !0,
        focus: '',
        closeOnContentClick: !1,
        closeOnBgClick: !0,
        closeBtnInside: !0,
        showCloseBtn: !0,
        enableEscapeKey: !0,
        modal: !1,
        alignTop: !1,
        removalDelay: 0,
        prependTo: null,
        fixedContentPos: 'auto',
        fixedBgPos: 'auto',
        overflowY: 'auto',
        closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
        tClose: 'Close (Esc)',
        tLoading: 'Loading...',
        autoFocusLast: !0,
      },
    }),
    (a.fn.magnificPopup = function (c) {
      A();
      var d = a(this);
      if ('string' == typeof c)
        if ('open' === c) {
          var e,
            f = u ? d.data('magnificPopup') : d[0].magnificPopup,
            g = parseInt(arguments[1], 10) || 0;
          f.items ? (e = f.items[g]) : ((e = d), f.delegate && (e = e.find(f.delegate)), (e = e.eq(g))), b._openClick({ mfpEl: e }, d, f);
        } else b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
      else (c = a.extend(!0, {}, c)), u ? d.data('magnificPopup', c) : (d[0].magnificPopup = c), b.addGroup(d, c);
      return d;
    });
  var C,
    D,
    E,
    F = 'inline',
    G = function () {
      E && (D.after(E.addClass(C)).detach(), (E = null));
    };
  a.magnificPopup.registerModule(F, {
    options: { hiddenClass: 'hide', markup: '', tNotFound: 'Content not found' },
    proto: {
      initInline: function () {
        b.types.push(F),
          w(h + '.' + F, function () {
            G();
          });
      },
      getInline: function (c, d) {
        if ((G(), c.src)) {
          var e = b.st.inline,
            f = a(c.src);
          if (f.length) {
            var g = f[0].parentNode;
            g && g.tagName && (D || ((C = e.hiddenClass), (D = x(C)), (C = 'mfp-' + C)), (E = f.after(D).detach().removeClass(C))), b.updateStatus('ready');
          } else b.updateStatus('error', e.tNotFound), (f = a('<div>'));
          return (c.inlineElement = f), f;
        }
        return b.updateStatus('ready'), b._parseMarkup(d, {}, c), d;
      },
    },
  });
  var H,
    I = 'ajax',
    J = function () {
      H && a(document.body).removeClass(H);
    },
    K = function () {
      J(), b.req && b.req.abort();
    };
  a.magnificPopup.registerModule(I, {
    options: { settings: null, cursor: 'mfp-ajax-cur', tError: '<a href="%url%">The content</a> could not be loaded.' },
    proto: {
      initAjax: function () {
        b.types.push(I), (H = b.st.ajax.cursor), w(h + '.' + I, K), w('BeforeChange.' + I, K);
      },
      getAjax: function (c) {
        H && a(document.body).addClass(H), b.updateStatus('loading');
        var d = a.extend(
          {
            url: c.src,
            success: function (d, e, f) {
              var g = { data: d, xhr: f };
              y('ParseAjax', g),
                b.appendContent(a(g.data), I),
                (c.finished = !0),
                J(),
                b._setFocus(),
                setTimeout(function () {
                  b.wrap.addClass(q);
                }, 16),
                b.updateStatus('ready'),
                y('AjaxContentAdded');
            },
            error: function () {
              J(), (c.finished = c.loadError = !0), b.updateStatus('error', b.st.ajax.tError.replace('%url%', c.src));
            },
          },
          b.st.ajax.settings
        );
        return (b.req = a.ajax(d)), '';
      },
    },
  });
  var L,
    M = function (c) {
      if (c.data && void 0 !== c.data.title) return c.data.title;
      var d = b.st.image.titleSrc;
      if (d) {
        if (a.isFunction(d)) return d.call(b, c);
        if (c.el) return c.el.attr(d) || '';
      }
      return '';
    };
  a.magnificPopup.registerModule('image', {
    options: {
      markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
      cursor: 'mfp-zoom-out-cur',
      titleSrc: 'title',
      verticalFit: !0,
      tError: '<a href="%url%">The image</a> could not be loaded.',
    },
    proto: {
      initImage: function () {
        var c = b.st.image,
          d = '.image';
        b.types.push('image'),
          w(m + d, function () {
            'image' === b.currItem.type && c.cursor && a(document.body).addClass(c.cursor);
          }),
          w(h + d, function () {
            c.cursor && a(document.body).removeClass(c.cursor), v.off('resize' + p);
          }),
          w('Resize' + d, b.resizeImage),
          b.isLowIE && w('AfterChange', b.resizeImage);
      },
      resizeImage: function () {
        var a = b.currItem;
        if (a && a.img && b.st.image.verticalFit) {
          var c = 0;
          b.isLowIE && (c = parseInt(a.img.css('padding-top'), 10) + parseInt(a.img.css('padding-bottom'), 10)), a.img.css('max-height', b.wH - c);
        }
      },
      _onImageHasSize: function (a) {
        a.img && ((a.hasSize = !0), L && clearInterval(L), (a.isCheckingImgSize = !1), y('ImageHasSize', a), a.imgHidden && (b.content && b.content.removeClass('mfp-loading'), (a.imgHidden = !1)));
      },
      findImageSize: function (a) {
        var c = 0,
          d = a.img[0],
          e = function (f) {
            L && clearInterval(L),
              (L = setInterval(function () {
                return d.naturalWidth > 0 ? void b._onImageHasSize(a) : (c > 200 && clearInterval(L), c++, void (3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500)));
              }, f));
          };
        e(1);
      },
      getImage: function (c, d) {
        var e = 0,
          f = function () {
            c && (c.img[0].complete ? (c.img.off('.mfploader'), c === b.currItem && (b._onImageHasSize(c), b.updateStatus('ready')), (c.hasSize = !0), (c.loaded = !0), y('ImageLoadComplete')) : (e++, 200 > e ? setTimeout(f, 100) : g()));
          },
          g = function () {
            c && (c.img.off('.mfploader'), c === b.currItem && (b._onImageHasSize(c), b.updateStatus('error', h.tError.replace('%url%', c.src))), (c.hasSize = !0), (c.loaded = !0), (c.loadError = !0));
          },
          h = b.st.image,
          i = d.find('.mfp-img');
        if (i.length) {
          var j = document.createElement('img');
          (j.className = 'mfp-img'),
            c.el && c.el.find('img').length && (j.alt = c.el.find('img').attr('alt')),
            (c.img = a(j).on('load.mfploader', f).on('error.mfploader', g)),
            (j.src = c.src),
            i.is('img') && (c.img = c.img.clone()),
            (j = c.img[0]),
            j.naturalWidth > 0 ? (c.hasSize = !0) : j.width || (c.hasSize = !1);
        }
        return (
          b._parseMarkup(d, { title: M(c), img_replaceWith: c.img }, c),
          b.resizeImage(),
          c.hasSize
            ? (L && clearInterval(L), c.loadError ? (d.addClass('mfp-loading'), b.updateStatus('error', h.tError.replace('%url%', c.src))) : (d.removeClass('mfp-loading'), b.updateStatus('ready')), d)
            : (b.updateStatus('loading'), (c.loading = !0), c.hasSize || ((c.imgHidden = !0), d.addClass('mfp-loading'), b.findImageSize(c)), d)
        );
      },
    },
  });
  var N,
    O = function () {
      return void 0 === N && (N = void 0 !== document.createElement('p').style.MozTransform), N;
    };
  a.magnificPopup.registerModule('zoom', {
    options: {
      enabled: !1,
      easing: 'ease-in-out',
      duration: 300,
      opener: function (a) {
        return a.is('img') ? a : a.find('img');
      },
    },
    proto: {
      initZoom: function () {
        var a,
          c = b.st.zoom,
          d = '.zoom';
        if (c.enabled && b.supportsTransition) {
          var e,
            f,
            g = c.duration,
            j = function (a) {
              var b = a.clone().removeAttr('style').removeAttr('class').addClass('mfp-animated-image'),
                d = 'all ' + c.duration / 1e3 + 's ' + c.easing,
                e = { position: 'fixed', zIndex: 9999, left: 0, top: 0, '-webkit-backface-visibility': 'hidden' },
                f = 'transition';
              return (e['-webkit-' + f] = e['-moz-' + f] = e['-o-' + f] = e[f] = d), b.css(e), b;
            },
            k = function () {
              b.content.css('visibility', 'visible');
            };
          w('BuildControls' + d, function () {
            if (b._allowZoom()) {
              if ((clearTimeout(e), b.content.css('visibility', 'hidden'), (a = b._getItemToZoom()), !a)) return void k();
              (f = j(a)),
                f.css(b._getOffset()),
                b.wrap.append(f),
                (e = setTimeout(function () {
                  f.css(b._getOffset(!0)),
                    (e = setTimeout(function () {
                      k(),
                        setTimeout(function () {
                          f.remove(), (a = f = null), y('ZoomAnimationEnded');
                        }, 16);
                    }, g));
                }, 16));
            }
          }),
            w(i + d, function () {
              if (b._allowZoom()) {
                if ((clearTimeout(e), (b.st.removalDelay = g), !a)) {
                  if (((a = b._getItemToZoom()), !a)) return;
                  f = j(a);
                }
                f.css(b._getOffset(!0)),
                  b.wrap.append(f),
                  b.content.css('visibility', 'hidden'),
                  setTimeout(function () {
                    f.css(b._getOffset());
                  }, 16);
              }
            }),
            w(h + d, function () {
              b._allowZoom() && (k(), f && f.remove(), (a = null));
            });
        }
      },
      _allowZoom: function () {
        return 'image' === b.currItem.type;
      },
      _getItemToZoom: function () {
        return b.currItem.hasSize ? b.currItem.img : !1;
      },
      _getOffset: function (c) {
        var d;
        d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
        var e = d.offset(),
          f = parseInt(d.css('padding-top'), 10),
          g = parseInt(d.css('padding-bottom'), 10);
        e.top -= a(window).scrollTop() - f;
        var h = { width: d.width(), height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f };
        return O() ? (h['-moz-transform'] = h.transform = 'translate(' + e.left + 'px,' + e.top + 'px)') : ((h.left = e.left), (h.top = e.top)), h;
      },
    },
  });
  var P = 'iframe',
    Q = '//about:blank',
    R = function (a) {
      if (b.currTemplate[P]) {
        var c = b.currTemplate[P].find('iframe');
        c.length && (a || (c[0].src = Q), b.isIE8 && c.css('display', a ? 'block' : 'none'));
      }
    };
  a.magnificPopup.registerModule(P, {
    options: {
      markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
      srcAction: 'iframe_src',
      patterns: {
        youtube: { index: 'youtube.com', id: 'v=', src: '//www.youtube.com/embed/%id%?autoplay=1' },
        vimeo: { index: 'vimeo.com/', id: '/', src: '//player.vimeo.com/video/%id%?autoplay=1' },
        gmaps: { index: '//maps.google.', src: '%id%&output=embed' },
      },
    },
    proto: {
      initIframe: function () {
        b.types.push(P),
          w('BeforeChange', function (a, b, c) {
            b !== c && (b === P ? R() : c === P && R(!0));
          }),
          w(h + '.' + P, function () {
            R();
          });
      },
      getIframe: function (c, d) {
        var e = c.src,
          f = b.st.iframe;
        a.each(f.patterns, function () {
          return e.indexOf(this.index) > -1 ? (this.id && (e = 'string' == typeof this.id ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)), (e = this.src.replace('%id%', e)), !1) : void 0;
        });
        var g = {};
        return f.srcAction && (g[f.srcAction] = e), b._parseMarkup(d, g, c), b.updateStatus('ready'), d;
      },
    },
  });
  var S = function (a) {
      var c = b.items.length;
      return a > c - 1 ? a - c : 0 > a ? c + a : a;
    },
    T = function (a, b, c) {
      return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c);
    };
  a.magnificPopup.registerModule('gallery', {
    options: {
      enabled: !1,
      arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
      preload: [0, 2],
      navigateByImgClick: !0,
      arrows: !0,
      tPrev: 'Previous (Left arrow key)',
      tNext: 'Next (Right arrow key)',
      tCounter: '%curr% of %total%',
    },
    proto: {
      initGallery: function () {
        var c = b.st.gallery,
          e = '.mfp-gallery';
        return (
          (b.direction = !0),
          c && c.enabled
            ? ((f += ' mfp-gallery'),
              w(m + e, function () {
                c.navigateByImgClick &&
                  b.wrap.on('click' + e, '.mfp-img', function () {
                    return b.items.length > 1 ? (b.next(), !1) : void 0;
                  }),
                  d.on('keydown' + e, function (a) {
                    37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next();
                  });
              }),
              w('UpdateStatus' + e, function (a, c) {
                c.text && (c.text = T(c.text, b.currItem.index, b.items.length));
              }),
              w(l + e, function (a, d, e, f) {
                var g = b.items.length;
                e.counter = g > 1 ? T(c.tCounter, f.index, g) : '';
              }),
              w('BuildControls' + e, function () {
                if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
                  var d = c.arrowMarkup,
                    e = (b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, 'left')).addClass(s)),
                    f = (b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, 'right')).addClass(s));
                  e.click(function () {
                    b.prev();
                  }),
                    f.click(function () {
                      b.next();
                    }),
                    b.container.append(e.add(f));
                }
              }),
              w(n + e, function () {
                b._preloadTimeout && clearTimeout(b._preloadTimeout),
                  (b._preloadTimeout = setTimeout(function () {
                    b.preloadNearbyImages(), (b._preloadTimeout = null);
                  }, 16));
              }),
              void w(h + e, function () {
                d.off(e), b.wrap.off('click' + e), (b.arrowRight = b.arrowLeft = null);
              }))
            : !1
        );
      },
      next: function () {
        (b.direction = !0), (b.index = S(b.index + 1)), b.updateItemHTML();
      },
      prev: function () {
        (b.direction = !1), (b.index = S(b.index - 1)), b.updateItemHTML();
      },
      goTo: function (a) {
        (b.direction = a >= b.index), (b.index = a), b.updateItemHTML();
      },
      preloadNearbyImages: function () {
        var a,
          c = b.st.gallery.preload,
          d = Math.min(c[0], b.items.length),
          e = Math.min(c[1], b.items.length);
        for (a = 1; a <= (b.direction ? e : d); a++) b._preloadItem(b.index + a);
        for (a = 1; a <= (b.direction ? d : e); a++) b._preloadItem(b.index - a);
      },
      _preloadItem: function (c) {
        if (((c = S(c)), !b.items[c].preloaded)) {
          var d = b.items[c];
          d.parsed || (d = b.parseEl(c)),
            y('LazyLoad', d),
            'image' === d.type &&
              (d.img = a('<img class="mfp-img" />')
                .on('load.mfploader', function () {
                  d.hasSize = !0;
                })
                .on('error.mfploader', function () {
                  (d.hasSize = !0), (d.loadError = !0), y('LazyLoadError', d);
                })
                .attr('src', d.src)),
            (d.preloaded = !0);
        }
      },
    },
  });
  var U = 'retina';
  a.magnificPopup.registerModule(U, {
    options: {
      replaceSrc: function (a) {
        return a.src.replace(/\.\w+$/, function (a) {
          return '@2x' + a;
        });
      },
      ratio: 1,
    },
    proto: {
      initRetina: function () {
        if (window.devicePixelRatio > 1) {
          var a = b.st.retina,
            c = a.ratio;
          (c = isNaN(c) ? c() : c),
            c > 1 &&
              (w('ImageHasSize.' + U, function (a, b) {
                b.img.css({ 'max-width': b.img[0].naturalWidth / c, width: '100%' });
              }),
              w('ElementParse.' + U, function (b, d) {
                d.src = a.replaceSrc(d, c);
              }));
        }
      },
    },
  }),
    A();
});

/*------------------------------------
  HT Parallax
--------------------------------------*/
!(function (e) {
  e.fn.parallaxie = function (o) {
    o = e.extend({ speed: 0.2, repeat: 'no-repeat', size: 'cover', pos_x: 'center', offset: 0 }, o);
    return (
      this.each(function () {
        var a = e(this),
          t = a.data('parallaxie');
        'object' != typeof t && (t = {}), (t = e.extend({}, o, t));
        var s = a.data('image');
        if (void 0 === s) {
          if (!(s = a.css('background-image'))) return;
          var n = t.offset + (a.offset().top - e(window).scrollTop()) * (1 - t.speed);
          a.css({ 'background-image': s, 'background-size': t.size, 'background-repeat': t.repeat, 'background-attachment': 'fixed', 'background-position': t.pos_x + ' ' + n + 'px' }),
            e(window).scroll(function () {
              var o = t.offset + (a.offset().top - e(window).scrollTop()) * (1 - t.speed);
              a.data('pos_y', o), a.css('background-position', t.pos_x + ' ' + o + 'px');
            });
        }
      }),
      this
    );
  };
})(jQuery);

/*------------------------------------
  HT Counter
--------------------------------------*/
(function ($) {
  $.fn.countTo = function (options) {
    options = options || {};
    return $(this).each(function () {
      var settings = $.extend({}, $.fn.countTo.defaults, { from: $(this).data('from'), to: $(this).data('to'), speed: $(this).data('speed'), refreshInterval: $(this).data('refresh-interval'), decimals: $(this).data('decimals') }, options);
      var loops = Math.ceil(settings.speed / settings.refreshInterval),
        increment = (settings.to - settings.from) / loops;
      var self = this,
        $self = $(this),
        loopCount = 0,
        value = settings.from,
        data = $self.data('countTo') || {};
      $self.data('countTo', data);
      if (data.interval) {
        clearInterval(data.interval);
      }
      data.interval = setInterval(updateTimer, settings.refreshInterval);
      render(value);
      function updateTimer() {
        value += increment;
        loopCount++;
        render(value);
        if (typeof settings.onUpdate == 'function') {
          settings.onUpdate.call(self, value);
        }
        if (loopCount >= loops) {
          $self.removeData('countTo');
          clearInterval(data.interval);
          value = settings.to;
          if (typeof settings.onComplete == 'function') {
            settings.onComplete.call(self, value);
          }
        }
      }
      function render(value) {
        var formattedValue = settings.formatter.call(self, value, settings);
        $self.html(formattedValue);
      }
    });
  };
  $.fn.countTo.defaults = { from: 0, to: 0, speed: 1000, refreshInterval: 100, decimals: 0, formatter: formatter, onUpdate: null, onComplete: null };
  function formatter(value, settings) {
    return value.toFixed(settings.decimals);
  }
})(jQuery);
jQuery(function ($) {
  $('.count-number').data('countToOptions', {
    formatter: function (value, options) {
      return value.toFixed(options.decimals).replace(/B(?=(?:d{3})+(?!d))/g, ',');
    },
  });
  $('.count-number').each(count);
  function count(options) {
    var $this = $(this);
    options = $.extend({}, options || {}, $this.data('countToOptions') || {});
    $this.countTo(options);
  }
});

/*!
 * The Final Countdown for jQuery v2.2.0 (http://hilios.github.io/jQuery.countdown/)
 * Copyright (c) 2016 Edson Hilios
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to
 * use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
 * the Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
 * IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
!(function (a) {
  'use strict';
  'function' == typeof define && define.amd ? define(['jquery'], a) : a(jQuery);
})(function (a) {
  'use strict';
  function b(a) {
    if (a instanceof Date) return a;
    if (String(a).match(g)) return String(a).match(/^[0-9]*$/) && (a = Number(a)), String(a).match(/\-/) && (a = String(a).replace(/\-/g, '/')), new Date(a);
    throw new Error("Couldn't cast `" + a + '` to a date object.');
  }
  function c(a) {
    var b = a.toString().replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
    return new RegExp(b);
  }
  function d(a) {
    return function (b) {
      var d = b.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);
      if (d)
        for (var f = 0, g = d.length; f < g; ++f) {
          var h = d[f].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),
            j = c(h[0]),
            k = h[1] || '',
            l = h[3] || '',
            m = null;
          (h = h[2]), i.hasOwnProperty(h) && ((m = i[h]), (m = Number(a[m]))), null !== m && ('!' === k && (m = e(l, m)), '' === k && m < 10 && (m = '0' + m.toString()), (b = b.replace(j, m.toString())));
        }
      return (b = b.replace(/%%/, '%'));
    };
  }
  function e(a, b) {
    var c = 's',
      d = '';
    return a && ((a = a.replace(/(:|;|\s)/gi, '').split(/\,/)), 1 === a.length ? (c = a[0]) : ((d = a[0]), (c = a[1]))), Math.abs(b) > 1 ? c : d;
  }
  var f = [],
    g = [],
    h = { precision: 100, elapse: !1, defer: !1 };
  g.push(/^[0-9]*$/.source), g.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), g.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), (g = new RegExp(g.join('|')));
  var i = { Y: 'years', m: 'months', n: 'daysToMonth', d: 'daysToWeek', w: 'weeks', W: 'weeksToMonth', H: 'hours', M: 'minutes', S: 'seconds', D: 'totalDays', I: 'totalHours', N: 'totalMinutes', T: 'totalSeconds' },
    j = function (b, c, d) {
      (this.el = b),
        (this.$el = a(b)),
        (this.interval = null),
        (this.offset = {}),
        (this.options = a.extend({}, h)),
        (this.instanceNumber = f.length),
        f.push(this),
        this.$el.data('countdown-instance', this.instanceNumber),
        d && ('function' == typeof d ? (this.$el.on('update.countdown', d), this.$el.on('stoped.countdown', d), this.$el.on('finish.countdown', d)) : (this.options = a.extend({}, h, d))),
        this.setFinalDate(c),
        this.options.defer === !1 && this.start();
    };
  a.extend(j.prototype, {
    start: function () {
      null !== this.interval && clearInterval(this.interval);
      var a = this;
      this.update(),
        (this.interval = setInterval(function () {
          a.update.call(a);
        }, this.options.precision));
    },
    stop: function () {
      clearInterval(this.interval), (this.interval = null), this.dispatchEvent('stoped');
    },
    toggle: function () {
      this.interval ? this.stop() : this.start();
    },
    pause: function () {
      this.stop();
    },
    resume: function () {
      this.start();
    },
    remove: function () {
      this.stop.call(this), (f[this.instanceNumber] = null), delete this.$el.data().countdownInstance;
    },
    setFinalDate: function (a) {
      this.finalDate = b(a);
    },
    update: function () {
      if (0 === this.$el.closest('html').length) return void this.remove();
      var b,
        c = void 0 !== a._data(this.el, 'events'),
        d = new Date();
      (b = this.finalDate.getTime() - d.getTime()),
        (b = Math.ceil(b / 1e3)),
        (b = !this.options.elapse && b < 0 ? 0 : Math.abs(b)),
        this.totalSecsLeft !== b &&
          c &&
          ((this.totalSecsLeft = b),
          (this.elapsed = d >= this.finalDate),
          (this.offset = {
            seconds: this.totalSecsLeft % 60,
            minutes: Math.floor(this.totalSecsLeft / 60) % 60,
            hours: Math.floor(this.totalSecsLeft / 60 / 60) % 24,
            days: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
            daysToWeek: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
            daysToMonth: Math.floor((this.totalSecsLeft / 60 / 60 / 24) % 30.4368),
            weeks: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7),
            weeksToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7) % 4,
            months: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 30.4368),
            years: Math.abs(this.finalDate.getFullYear() - d.getFullYear()),
            totalDays: Math.floor(this.totalSecsLeft / 60 / 60 / 24),
            totalHours: Math.floor(this.totalSecsLeft / 60 / 60),
            totalMinutes: Math.floor(this.totalSecsLeft / 60),
            totalSeconds: this.totalSecsLeft,
          }),
          this.options.elapse || 0 !== this.totalSecsLeft ? this.dispatchEvent('update') : (this.stop(), this.dispatchEvent('finish')));
    },
    dispatchEvent: function (b) {
      var c = a.Event(b + '.countdown');
      (c.finalDate = this.finalDate), (c.elapsed = this.elapsed), (c.offset = a.extend({}, this.offset)), (c.strftime = d(this.offset)), this.$el.trigger(c);
    },
  }),
    (a.fn.countdown = function () {
      var b = Array.prototype.slice.call(arguments, 0);
      return this.each(function () {
        var c = a(this).data('countdown-instance');
        if (void 0 !== c) {
          var d = f[c],
            e = b[0];
          j.prototype.hasOwnProperty(e) ? d[e].apply(d, b.slice(1)) : null === String(e).match(/^[$A-Z_][0-9A-Z_$]*$/i) ? (d.setFinalDate.call(d, e), d.start()) : a.error('Method %s does not exist on jQuery.countdown'.replace(/\%s/gi, e));
        } else new j(this, b[0], b[1]);
      });
    });
});

/*!
 * Isotope PACKAGED v2.2.2
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * http://isotope.metafizzy.co
 * Copyright 2015 Metafizzy
 */

!(function (a) {
  function b() {}
  function c(a) {
    function c(b) {
      b.prototype.option ||
        (b.prototype.option = function (b) {
          a.isPlainObject(b) && (this.options = a.extend(!0, this.options, b));
        });
    }
    function e(b, c) {
      a.fn[b] = function (e) {
        if ('string' == typeof e) {
          for (var g = d.call(arguments, 1), h = 0, i = this.length; i > h; h++) {
            var j = this[h],
              k = a.data(j, b);
            if (k)
              if (a.isFunction(k[e]) && '_' !== e.charAt(0)) {
                var l = k[e].apply(k, g);
                if (void 0 !== l) return l;
              } else f("no such method '" + e + "' for " + b + ' instance');
            else f('cannot call methods on ' + b + " prior to initialization; attempted to call '" + e + "'");
          }
          return this;
        }
        return this.each(function () {
          var d = a.data(this, b);
          d ? (d.option(e), d._init()) : ((d = new c(this, e)), a.data(this, b, d));
        });
      };
    }
    if (a) {
      var f =
        'undefined' == typeof console
          ? b
          : function (a) {
              console.error(a);
            };
      return (
        (a.bridget = function (a, b) {
          c(b), e(a, b);
        }),
        a.bridget
      );
    }
  }
  var d = Array.prototype.slice;
  'function' == typeof define && define.amd ? define('jquery-bridget/jquery.bridget', ['jquery'], c) : c('object' == typeof exports ? require('jquery') : a.jQuery);
})(window),
  (function (a) {
    function b(b) {
      var c = a.event;
      return (c.target = c.target || c.srcElement || b), c;
    }
    var c = document.documentElement,
      d = function () {};
    c.addEventListener
      ? (d = function (a, b, c) {
          a.addEventListener(b, c, !1);
        })
      : c.attachEvent &&
        (d = function (a, c, d) {
          (a[c + d] = d.handleEvent
            ? function () {
                var c = b(a);
                d.handleEvent.call(d, c);
              }
            : function () {
                var c = b(a);
                d.call(a, c);
              }),
            a.attachEvent('on' + c, a[c + d]);
        });
    var e = function () {};
    c.removeEventListener
      ? (e = function (a, b, c) {
          a.removeEventListener(b, c, !1);
        })
      : c.detachEvent &&
        (e = function (a, b, c) {
          a.detachEvent('on' + b, a[b + c]);
          try {
            delete a[b + c];
          } catch (d) {
            a[b + c] = void 0;
          }
        });
    var f = { bind: d, unbind: e };
    'function' == typeof define && define.amd ? define('eventie/eventie', f) : 'object' == typeof exports ? (module.exports = f) : (a.eventie = f);
  })(window),
  function () {
    'use strict';
    function a() {}
    function b(a, b) {
      for (var c = a.length; c--; ) if (a[c].listener === b) return c;
      return -1;
    }
    function c(a) {
      return function () {
        return this[a].apply(this, arguments);
      };
    }
    var d = a.prototype,
      e = this,
      f = e.EventEmitter;
    (d.getListeners = function (a) {
      var b,
        c,
        d = this._getEvents();
      if (a instanceof RegExp) {
        b = {};
        for (c in d) d.hasOwnProperty(c) && a.test(c) && (b[c] = d[c]);
      } else b = d[a] || (d[a] = []);
      return b;
    }),
      (d.flattenListeners = function (a) {
        var b,
          c = [];
        for (b = 0; b < a.length; b += 1) c.push(a[b].listener);
        return c;
      }),
      (d.getListenersAsObject = function (a) {
        var b,
          c = this.getListeners(a);
        return c instanceof Array && ((b = {}), (b[a] = c)), b || c;
      }),
      (d.addListener = function (a, c) {
        var d,
          e = this.getListenersAsObject(a),
          f = 'object' == typeof c;
        for (d in e) e.hasOwnProperty(d) && -1 === b(e[d], c) && e[d].push(f ? c : { listener: c, once: !1 });
        return this;
      }),
      (d.on = c('addListener')),
      (d.addOnceListener = function (a, b) {
        return this.addListener(a, { listener: b, once: !0 });
      }),
      (d.once = c('addOnceListener')),
      (d.defineEvent = function (a) {
        return this.getListeners(a), this;
      }),
      (d.defineEvents = function (a) {
        for (var b = 0; b < a.length; b += 1) this.defineEvent(a[b]);
        return this;
      }),
      (d.removeListener = function (a, c) {
        var d,
          e,
          f = this.getListenersAsObject(a);
        for (e in f) f.hasOwnProperty(e) && ((d = b(f[e], c)), -1 !== d && f[e].splice(d, 1));
        return this;
      }),
      (d.off = c('removeListener')),
      (d.addListeners = function (a, b) {
        return this.manipulateListeners(!1, a, b);
      }),
      (d.removeListeners = function (a, b) {
        return this.manipulateListeners(!0, a, b);
      }),
      (d.manipulateListeners = function (a, b, c) {
        var d,
          e,
          f = a ? this.removeListener : this.addListener,
          g = a ? this.removeListeners : this.addListeners;
        if ('object' != typeof b || b instanceof RegExp) for (d = c.length; d--; ) f.call(this, b, c[d]);
        else for (d in b) b.hasOwnProperty(d) && (e = b[d]) && ('function' == typeof e ? f.call(this, d, e) : g.call(this, d, e));
        return this;
      }),
      (d.removeEvent = function (a) {
        var b,
          c = typeof a,
          d = this._getEvents();
        if ('string' === c) delete d[a];
        else if (a instanceof RegExp) for (b in d) d.hasOwnProperty(b) && a.test(b) && delete d[b];
        else delete this._events;
        return this;
      }),
      (d.removeAllListeners = c('removeEvent')),
      (d.emitEvent = function (a, b) {
        var c,
          d,
          e,
          f,
          g = this.getListenersAsObject(a);
        for (e in g)
          if (g.hasOwnProperty(e))
            for (d = g[e].length; d--; ) (c = g[e][d]), c.once === !0 && this.removeListener(a, c.listener), (f = c.listener.apply(this, b || [])), f === this._getOnceReturnValue() && this.removeListener(a, c.listener);
        return this;
      }),
      (d.trigger = c('emitEvent')),
      (d.emit = function (a) {
        var b = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(a, b);
      }),
      (d.setOnceReturnValue = function (a) {
        return (this._onceReturnValue = a), this;
      }),
      (d._getOnceReturnValue = function () {
        return this.hasOwnProperty('_onceReturnValue') ? this._onceReturnValue : !0;
      }),
      (d._getEvents = function () {
        return this._events || (this._events = {});
      }),
      (a.noConflict = function () {
        return (e.EventEmitter = f), a;
      }),
      'function' == typeof define && define.amd
        ? define('eventEmitter/EventEmitter', [], function () {
            return a;
          })
        : 'object' == typeof module && module.exports
        ? (module.exports = a)
        : (e.EventEmitter = a);
  }.call(this),
  (function (a) {
    function b(a) {
      if (a) {
        if ('string' == typeof d[a]) return a;
        a = a.charAt(0).toUpperCase() + a.slice(1);
        for (var b, e = 0, f = c.length; f > e; e++) if (((b = c[e] + a), 'string' == typeof d[b])) return b;
      }
    }
    var c = 'Webkit Moz ms Ms O'.split(' '),
      d = document.documentElement.style;
    'function' == typeof define && define.amd
      ? define('get-style-property/get-style-property', [], function () {
          return b;
        })
      : 'object' == typeof exports
      ? (module.exports = b)
      : (a.getStyleProperty = b);
  })(window),
  (function (a, b) {
    function c(a) {
      var b = parseFloat(a),
        c = -1 === a.indexOf('%') && !isNaN(b);
      return c && b;
    }
    function d() {}
    function e() {
      for (var a = { width: 0, height: 0, innerWidth: 0, innerHeight: 0, outerWidth: 0, outerHeight: 0 }, b = 0, c = h.length; c > b; b++) {
        var d = h[b];
        a[d] = 0;
      }
      return a;
    }
    function f(b) {
      function d() {
        if (!m) {
          m = !0;
          var d = a.getComputedStyle;
          if (
            ((j = (function () {
              var a = d
                ? function (a) {
                    return d(a, null);
                  }
                : function (a) {
                    return a.currentStyle;
                  };
              return function (b) {
                var c = a(b);
                return c || g('Style returned ' + c + '. Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1'), c;
              };
            })()),
            (k = b('boxSizing')))
          ) {
            var e = document.createElement('div');
            (e.style.width = '200px'), (e.style.padding = '1px 2px 3px 4px'), (e.style.borderStyle = 'solid'), (e.style.borderWidth = '1px 2px 3px 4px'), (e.style[k] = 'border-box');
            var f = document.body || document.documentElement;
            f.appendChild(e);
            var h = j(e);
            (l = 200 === c(h.width)), f.removeChild(e);
          }
        }
      }
      function f(a) {
        if ((d(), 'string' == typeof a && (a = document.querySelector(a)), a && 'object' == typeof a && a.nodeType)) {
          var b = j(a);
          if ('none' === b.display) return e();
          var f = {};
          (f.width = a.offsetWidth), (f.height = a.offsetHeight);
          for (var g = (f.isBorderBox = !(!k || !b[k] || 'border-box' !== b[k])), m = 0, n = h.length; n > m; m++) {
            var o = h[m],
              p = b[o];
            p = i(a, p);
            var q = parseFloat(p);
            f[o] = isNaN(q) ? 0 : q;
          }
          var r = f.paddingLeft + f.paddingRight,
            s = f.paddingTop + f.paddingBottom,
            t = f.marginLeft + f.marginRight,
            u = f.marginTop + f.marginBottom,
            v = f.borderLeftWidth + f.borderRightWidth,
            w = f.borderTopWidth + f.borderBottomWidth,
            x = g && l,
            y = c(b.width);
          y !== !1 && (f.width = y + (x ? 0 : r + v));
          var z = c(b.height);
          return z !== !1 && (f.height = z + (x ? 0 : s + w)), (f.innerWidth = f.width - (r + v)), (f.innerHeight = f.height - (s + w)), (f.outerWidth = f.width + t), (f.outerHeight = f.height + u), f;
        }
      }
      function i(b, c) {
        if (a.getComputedStyle || -1 === c.indexOf('%')) return c;
        var d = b.style,
          e = d.left,
          f = b.runtimeStyle,
          g = f && f.left;
        return g && (f.left = b.currentStyle.left), (d.left = c), (c = d.pixelLeft), (d.left = e), g && (f.left = g), c;
      }
      var j,
        k,
        l,
        m = !1;
      return f;
    }
    var g =
        'undefined' == typeof console
          ? d
          : function (a) {
              console.error(a);
            },
      h = ['paddingLeft', 'paddingRight', 'paddingTop', 'paddingBottom', 'marginLeft', 'marginRight', 'marginTop', 'marginBottom', 'borderLeftWidth', 'borderRightWidth', 'borderTopWidth', 'borderBottomWidth'];
    'function' == typeof define && define.amd
      ? define('get-size/get-size', ['get-style-property/get-style-property'], f)
      : 'object' == typeof exports
      ? (module.exports = f(require('desandro-get-style-property')))
      : (a.getSize = f(a.getStyleProperty));
  })(window),
  (function (a) {
    function b(a) {
      'function' == typeof a && (b.isReady ? a() : g.push(a));
    }
    function c(a) {
      var c = 'readystatechange' === a.type && 'complete' !== f.readyState;
      b.isReady || c || d();
    }
    function d() {
      b.isReady = !0;
      for (var a = 0, c = g.length; c > a; a++) {
        var d = g[a];
        d();
      }
    }
    function e(e) {
      return 'complete' === f.readyState ? d() : (e.bind(f, 'DOMContentLoaded', c), e.bind(f, 'readystatechange', c), e.bind(a, 'load', c)), b;
    }
    var f = a.document,
      g = [];
    (b.isReady = !1), 'function' == typeof define && define.amd ? define('doc-ready/doc-ready', ['eventie/eventie'], e) : 'object' == typeof exports ? (module.exports = e(require('eventie'))) : (a.docReady = e(a.eventie));
  })(window),
  (function (a) {
    'use strict';
    function b(a, b) {
      return a[g](b);
    }
    function c(a) {
      if (!a.parentNode) {
        var b = document.createDocumentFragment();
        b.appendChild(a);
      }
    }
    function d(a, b) {
      c(a);
      for (var d = a.parentNode.querySelectorAll(b), e = 0, f = d.length; f > e; e++) if (d[e] === a) return !0;
      return !1;
    }
    function e(a, d) {
      return c(a), b(a, d);
    }
    var f,
      g = (function () {
        if (a.matches) return 'matches';
        if (a.matchesSelector) return 'matchesSelector';
        for (var b = ['webkit', 'moz', 'ms', 'o'], c = 0, d = b.length; d > c; c++) {
          var e = b[c],
            f = e + 'MatchesSelector';
          if (a[f]) return f;
        }
      })();
    if (g) {
      var h = document.createElement('div'),
        i = b(h, 'div');
      f = i ? b : e;
    } else f = d;
    'function' == typeof define && define.amd
      ? define('matches-selector/matches-selector', [], function () {
          return f;
        })
      : 'object' == typeof exports
      ? (module.exports = f)
      : (window.matchesSelector = f);
  })(Element.prototype),
  (function (a, b) {
    'use strict';
    'function' == typeof define && define.amd
      ? define('fizzy-ui-utils/utils', ['doc-ready/doc-ready', 'matches-selector/matches-selector'], function (c, d) {
          return b(a, c, d);
        })
      : 'object' == typeof exports
      ? (module.exports = b(a, require('doc-ready'), require('desandro-matches-selector')))
      : (a.fizzyUIUtils = b(a, a.docReady, a.matchesSelector));
  })(window, function (a, b, c) {
    var d = {};
    (d.extend = function (a, b) {
      for (var c in b) a[c] = b[c];
      return a;
    }),
      (d.modulo = function (a, b) {
        return ((a % b) + b) % b;
      });
    var e = Object.prototype.toString;
    (d.isArray = function (a) {
      return '[object Array]' == e.call(a);
    }),
      (d.makeArray = function (a) {
        var b = [];
        if (d.isArray(a)) b = a;
        else if (a && 'number' == typeof a.length) for (var c = 0, e = a.length; e > c; c++) b.push(a[c]);
        else b.push(a);
        return b;
      }),
      (d.indexOf = Array.prototype.indexOf
        ? function (a, b) {
            return a.indexOf(b);
          }
        : function (a, b) {
            for (var c = 0, d = a.length; d > c; c++) if (a[c] === b) return c;
            return -1;
          }),
      (d.removeFrom = function (a, b) {
        var c = d.indexOf(a, b);
        -1 != c && a.splice(c, 1);
      }),
      (d.isElement =
        'function' == typeof HTMLElement || 'object' == typeof HTMLElement
          ? function (a) {
              return a instanceof HTMLElement;
            }
          : function (a) {
              return a && 'object' == typeof a && 1 == a.nodeType && 'string' == typeof a.nodeName;
            }),
      (d.setText = (function () {
        function a(a, c) {
          (b = b || (void 0 !== document.documentElement.textContent ? 'textContent' : 'innerText')), (a[b] = c);
        }
        var b;
        return a;
      })()),
      (d.getParent = function (a, b) {
        for (; a != document.body; ) if (((a = a.parentNode), c(a, b))) return a;
      }),
      (d.getQueryElement = function (a) {
        return 'string' == typeof a ? document.querySelector(a) : a;
      }),
      (d.handleEvent = function (a) {
        var b = 'on' + a.type;
        this[b] && this[b](a);
      }),
      (d.filterFindElements = function (a, b) {
        a = d.makeArray(a);
        for (var e = [], f = 0, g = a.length; g > f; f++) {
          var h = a[f];
          if (d.isElement(h))
            if (b) {
              c(h, b) && e.push(h);
              for (var i = h.querySelectorAll(b), j = 0, k = i.length; k > j; j++) e.push(i[j]);
            } else e.push(h);
        }
        return e;
      }),
      (d.debounceMethod = function (a, b, c) {
        var d = a.prototype[b],
          e = b + 'Timeout';
        a.prototype[b] = function () {
          var a = this[e];
          a && clearTimeout(a);
          var b = arguments,
            f = this;
          this[e] = setTimeout(function () {
            d.apply(f, b), delete f[e];
          }, c || 100);
        };
      }),
      (d.toDashed = function (a) {
        return a
          .replace(/(.)([A-Z])/g, function (a, b, c) {
            return b + '-' + c;
          })
          .toLowerCase();
      });
    var f = a.console;
    return (
      (d.htmlInit = function (c, e) {
        b(function () {
          for (var b = d.toDashed(e), g = document.querySelectorAll('.js-' + b), h = 'data-' + b + '-options', i = 0, j = g.length; j > i; i++) {
            var k,
              l = g[i],
              m = l.getAttribute(h);
            try {
              k = m && JSON.parse(m);
            } catch (n) {
              f && f.error('Error parsing ' + h + ' on ' + l.nodeName.toLowerCase() + (l.id ? '#' + l.id : '') + ': ' + n);
              continue;
            }
            var o = new c(l, k),
              p = a.jQuery;
            p && p.data(l, e, o);
          }
        });
      }),
      d
    );
  }),
  (function (a, b) {
    'use strict';
    'function' == typeof define && define.amd
      ? define('outlayer/item', ['eventEmitter/EventEmitter', 'get-size/get-size', 'get-style-property/get-style-property', 'fizzy-ui-utils/utils'], function (c, d, e, f) {
          return b(a, c, d, e, f);
        })
      : 'object' == typeof exports
      ? (module.exports = b(a, require('wolfy87-eventemitter'), require('get-size'), require('desandro-get-style-property'), require('fizzy-ui-utils')))
      : ((a.Outlayer = {}), (a.Outlayer.Item = b(a, a.EventEmitter, a.getSize, a.getStyleProperty, a.fizzyUIUtils)));
  })(window, function (a, b, c, d, e) {
    'use strict';
    function f(a) {
      for (var b in a) return !1;
      return (b = null), !0;
    }
    function g(a, b) {
      a && ((this.element = a), (this.layout = b), (this.position = { x: 0, y: 0 }), this._create());
    }
    function h(a) {
      return a.replace(/([A-Z])/g, function (a) {
        return '-' + a.toLowerCase();
      });
    }
    var i = a.getComputedStyle,
      j = i
        ? function (a) {
            return i(a, null);
          }
        : function (a) {
            return a.currentStyle;
          },
      k = d('transition'),
      l = d('transform'),
      m = k && l,
      n = !!d('perspective'),
      o = { WebkitTransition: 'webkitTransitionEnd', MozTransition: 'transitionend', OTransition: 'otransitionend', transition: 'transitionend' }[k],
      p = ['transform', 'transition', 'transitionDuration', 'transitionProperty'],
      q = (function () {
        for (var a = {}, b = 0, c = p.length; c > b; b++) {
          var e = p[b],
            f = d(e);
          f && f !== e && (a[e] = f);
        }
        return a;
      })();
    e.extend(g.prototype, b.prototype),
      (g.prototype._create = function () {
        (this._transn = { ingProperties: {}, clean: {}, onEnd: {} }), this.css({ position: 'absolute' });
      }),
      (g.prototype.handleEvent = function (a) {
        var b = 'on' + a.type;
        this[b] && this[b](a);
      }),
      (g.prototype.getSize = function () {
        this.size = c(this.element);
      }),
      (g.prototype.css = function (a) {
        var b = this.element.style;
        for (var c in a) {
          var d = q[c] || c;
          b[d] = a[c];
        }
      }),
      (g.prototype.getPosition = function () {
        var a = j(this.element),
          b = this.layout.options,
          c = b.isOriginLeft,
          d = b.isOriginTop,
          e = a[c ? 'left' : 'right'],
          f = a[d ? 'top' : 'bottom'],
          g = this.layout.size,
          h = -1 != e.indexOf('%') ? (parseFloat(e) / 100) * g.width : parseInt(e, 10),
          i = -1 != f.indexOf('%') ? (parseFloat(f) / 100) * g.height : parseInt(f, 10);
        (h = isNaN(h) ? 0 : h), (i = isNaN(i) ? 0 : i), (h -= c ? g.paddingLeft : g.paddingRight), (i -= d ? g.paddingTop : g.paddingBottom), (this.position.x = h), (this.position.y = i);
      }),
      (g.prototype.layoutPosition = function () {
        var a = this.layout.size,
          b = this.layout.options,
          c = {},
          d = b.isOriginLeft ? 'paddingLeft' : 'paddingRight',
          e = b.isOriginLeft ? 'left' : 'right',
          f = b.isOriginLeft ? 'right' : 'left',
          g = this.position.x + a[d];
        (c[e] = this.getXValue(g)), (c[f] = '');
        var h = b.isOriginTop ? 'paddingTop' : 'paddingBottom',
          i = b.isOriginTop ? 'top' : 'bottom',
          j = b.isOriginTop ? 'bottom' : 'top',
          k = this.position.y + a[h];
        (c[i] = this.getYValue(k)), (c[j] = ''), this.css(c), this.emitEvent('layout', [this]);
      }),
      (g.prototype.getXValue = function (a) {
        var b = this.layout.options;
        return b.percentPosition && !b.isHorizontal ? (a / this.layout.size.width) * 100 + '%' : a + 'px';
      }),
      (g.prototype.getYValue = function (a) {
        var b = this.layout.options;
        return b.percentPosition && b.isHorizontal ? (a / this.layout.size.height) * 100 + '%' : a + 'px';
      }),
      (g.prototype._transitionTo = function (a, b) {
        this.getPosition();
        var c = this.position.x,
          d = this.position.y,
          e = parseInt(a, 10),
          f = parseInt(b, 10),
          g = e === this.position.x && f === this.position.y;
        if ((this.setPosition(a, b), g && !this.isTransitioning)) return void this.layoutPosition();
        var h = a - c,
          i = b - d,
          j = {};
        (j.transform = this.getTranslate(h, i)), this.transition({ to: j, onTransitionEnd: { transform: this.layoutPosition }, isCleaning: !0 });
      }),
      (g.prototype.getTranslate = function (a, b) {
        var c = this.layout.options;
        return (a = c.isOriginLeft ? a : -a), (b = c.isOriginTop ? b : -b), n ? 'translate3d(' + a + 'px, ' + b + 'px, 0)' : 'translate(' + a + 'px, ' + b + 'px)';
      }),
      (g.prototype.goTo = function (a, b) {
        this.setPosition(a, b), this.layoutPosition();
      }),
      (g.prototype.moveTo = m ? g.prototype._transitionTo : g.prototype.goTo),
      (g.prototype.setPosition = function (a, b) {
        (this.position.x = parseInt(a, 10)), (this.position.y = parseInt(b, 10));
      }),
      (g.prototype._nonTransition = function (a) {
        this.css(a.to), a.isCleaning && this._removeStyles(a.to);
        for (var b in a.onTransitionEnd) a.onTransitionEnd[b].call(this);
      }),
      (g.prototype._transition = function (a) {
        if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(a);
        var b = this._transn;
        for (var c in a.onTransitionEnd) b.onEnd[c] = a.onTransitionEnd[c];
        for (c in a.to) (b.ingProperties[c] = !0), a.isCleaning && (b.clean[c] = !0);
        if (a.from) {
          this.css(a.from);
          var d = this.element.offsetHeight;
          d = null;
        }
        this.enableTransition(a.to), this.css(a.to), (this.isTransitioning = !0);
      });
    var r = 'opacity,' + h(q.transform || 'transform');
    (g.prototype.enableTransition = function () {
      this.isTransitioning || (this.css({ transitionProperty: r, transitionDuration: this.layout.options.transitionDuration }), this.element.addEventListener(o, this, !1));
    }),
      (g.prototype.transition = g.prototype[k ? '_transition' : '_nonTransition']),
      (g.prototype.onwebkitTransitionEnd = function (a) {
        this.ontransitionend(a);
      }),
      (g.prototype.onotransitionend = function (a) {
        this.ontransitionend(a);
      });
    var s = { '-webkit-transform': 'transform', '-moz-transform': 'transform', '-o-transform': 'transform' };
    (g.prototype.ontransitionend = function (a) {
      if (a.target === this.element) {
        var b = this._transn,
          c = s[a.propertyName] || a.propertyName;
        if ((delete b.ingProperties[c], f(b.ingProperties) && this.disableTransition(), c in b.clean && ((this.element.style[a.propertyName] = ''), delete b.clean[c]), c in b.onEnd)) {
          var d = b.onEnd[c];
          d.call(this), delete b.onEnd[c];
        }
        this.emitEvent('transitionEnd', [this]);
      }
    }),
      (g.prototype.disableTransition = function () {
        this.removeTransitionStyles(), this.element.removeEventListener(o, this, !1), (this.isTransitioning = !1);
      }),
      (g.prototype._removeStyles = function (a) {
        var b = {};
        for (var c in a) b[c] = '';
        this.css(b);
      });
    var t = { transitionProperty: '', transitionDuration: '' };
    return (
      (g.prototype.removeTransitionStyles = function () {
        this.css(t);
      }),
      (g.prototype.removeElem = function () {
        this.element.parentNode.removeChild(this.element), this.css({ display: '' }), this.emitEvent('remove', [this]);
      }),
      (g.prototype.remove = function () {
        if (!k || !parseFloat(this.layout.options.transitionDuration)) return void this.removeElem();
        var a = this;
        this.once('transitionEnd', function () {
          a.removeElem();
        }),
          this.hide();
      }),
      (g.prototype.reveal = function () {
        delete this.isHidden, this.css({ display: '' });
        var a = this.layout.options,
          b = {},
          c = this.getHideRevealTransitionEndProperty('visibleStyle');
        (b[c] = this.onRevealTransitionEnd), this.transition({ from: a.hiddenStyle, to: a.visibleStyle, isCleaning: !0, onTransitionEnd: b });
      }),
      (g.prototype.onRevealTransitionEnd = function () {
        this.isHidden || this.emitEvent('reveal');
      }),
      (g.prototype.getHideRevealTransitionEndProperty = function (a) {
        var b = this.layout.options[a];
        if (b.opacity) return 'opacity';
        for (var c in b) return c;
      }),
      (g.prototype.hide = function () {
        (this.isHidden = !0), this.css({ display: '' });
        var a = this.layout.options,
          b = {},
          c = this.getHideRevealTransitionEndProperty('hiddenStyle');
        (b[c] = this.onHideTransitionEnd), this.transition({ from: a.visibleStyle, to: a.hiddenStyle, isCleaning: !0, onTransitionEnd: b });
      }),
      (g.prototype.onHideTransitionEnd = function () {
        this.isHidden && (this.css({ display: 'none' }), this.emitEvent('hide'));
      }),
      (g.prototype.destroy = function () {
        this.css({ position: '', left: '', right: '', top: '', bottom: '', transition: '', transform: '' });
      }),
      g
    );
  }),
  (function (a, b) {
    'use strict';
    'function' == typeof define && define.amd
      ? define('outlayer/outlayer', ['eventie/eventie', 'eventEmitter/EventEmitter', 'get-size/get-size', 'fizzy-ui-utils/utils', './item'], function (c, d, e, f, g) {
          return b(a, c, d, e, f, g);
        })
      : 'object' == typeof exports
      ? (module.exports = b(a, require('eventie'), require('wolfy87-eventemitter'), require('get-size'), require('fizzy-ui-utils'), require('./item')))
      : (a.Outlayer = b(a, a.eventie, a.EventEmitter, a.getSize, a.fizzyUIUtils, a.Outlayer.Item));
  })(window, function (a, b, c, d, e, f) {
    'use strict';
    function g(a, b) {
      var c = e.getQueryElement(a);
      if (!c) return void (h && h.error('Bad element for ' + this.constructor.namespace + ': ' + (c || a)));
      (this.element = c), i && (this.$element = i(this.element)), (this.options = e.extend({}, this.constructor.defaults)), this.option(b);
      var d = ++k;
      (this.element.outlayerGUID = d), (l[d] = this), this._create(), this.options.isInitLayout && this.layout();
    }
    var h = a.console,
      i = a.jQuery,
      j = function () {},
      k = 0,
      l = {};
    return (
      (g.namespace = 'outlayer'),
      (g.Item = f),
      (g.defaults = {
        containerStyle: { position: 'relative' },
        isInitLayout: !0,
        isOriginLeft: !0,
        isOriginTop: !0,
        isResizeBound: !0,
        isResizingContainer: !0,
        transitionDuration: '0.4s',
        hiddenStyle: { opacity: 0, transform: 'scale(0.001)' },
        visibleStyle: { opacity: 1, transform: 'scale(1)' },
      }),
      e.extend(g.prototype, c.prototype),
      (g.prototype.option = function (a) {
        e.extend(this.options, a);
      }),
      (g.prototype._create = function () {
        this.reloadItems(), (this.stamps = []), this.stamp(this.options.stamp), e.extend(this.element.style, this.options.containerStyle), this.options.isResizeBound && this.bindResize();
      }),
      (g.prototype.reloadItems = function () {
        this.items = this._itemize(this.element.children);
      }),
      (g.prototype._itemize = function (a) {
        for (var b = this._filterFindItemElements(a), c = this.constructor.Item, d = [], e = 0, f = b.length; f > e; e++) {
          var g = b[e],
            h = new c(g, this);
          d.push(h);
        }
        return d;
      }),
      (g.prototype._filterFindItemElements = function (a) {
        return e.filterFindElements(a, this.options.itemSelector);
      }),
      (g.prototype.getItemElements = function () {
        for (var a = [], b = 0, c = this.items.length; c > b; b++) a.push(this.items[b].element);
        return a;
      }),
      (g.prototype.layout = function () {
        this._resetLayout(), this._manageStamps();
        var a = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
        this.layoutItems(this.items, a), (this._isLayoutInited = !0);
      }),
      (g.prototype._init = g.prototype.layout),
      (g.prototype._resetLayout = function () {
        this.getSize();
      }),
      (g.prototype.getSize = function () {
        this.size = d(this.element);
      }),
      (g.prototype._getMeasurement = function (a, b) {
        var c,
          f = this.options[a];
        f ? ('string' == typeof f ? (c = this.element.querySelector(f)) : e.isElement(f) && (c = f), (this[a] = c ? d(c)[b] : f)) : (this[a] = 0);
      }),
      (g.prototype.layoutItems = function (a, b) {
        (a = this._getItemsForLayout(a)), this._layoutItems(a, b), this._postLayout();
      }),
      (g.prototype._getItemsForLayout = function (a) {
        for (var b = [], c = 0, d = a.length; d > c; c++) {
          var e = a[c];
          e.isIgnored || b.push(e);
        }
        return b;
      }),
      (g.prototype._layoutItems = function (a, b) {
        if ((this._emitCompleteOnItems('layout', a), a && a.length)) {
          for (var c = [], d = 0, e = a.length; e > d; d++) {
            var f = a[d],
              g = this._getItemLayoutPosition(f);
            (g.item = f), (g.isInstant = b || f.isLayoutInstant), c.push(g);
          }
          this._processLayoutQueue(c);
        }
      }),
      (g.prototype._getItemLayoutPosition = function () {
        return { x: 0, y: 0 };
      }),
      (g.prototype._processLayoutQueue = function (a) {
        for (var b = 0, c = a.length; c > b; b++) {
          var d = a[b];
          this._positionItem(d.item, d.x, d.y, d.isInstant);
        }
      }),
      (g.prototype._positionItem = function (a, b, c, d) {
        d ? a.goTo(b, c) : a.moveTo(b, c);
      }),
      (g.prototype._postLayout = function () {
        this.resizeContainer();
      }),
      (g.prototype.resizeContainer = function () {
        if (this.options.isResizingContainer) {
          var a = this._getContainerSize();
          a && (this._setContainerMeasure(a.width, !0), this._setContainerMeasure(a.height, !1));
        }
      }),
      (g.prototype._getContainerSize = j),
      (g.prototype._setContainerMeasure = function (a, b) {
        if (void 0 !== a) {
          var c = this.size;
          c.isBorderBox && (a += b ? c.paddingLeft + c.paddingRight + c.borderLeftWidth + c.borderRightWidth : c.paddingBottom + c.paddingTop + c.borderTopWidth + c.borderBottomWidth),
            (a = Math.max(a, 0)),
            (this.element.style[b ? 'width' : 'height'] = a + 'px');
        }
      }),
      (g.prototype._emitCompleteOnItems = function (a, b) {
        function c() {
          e.dispatchEvent(a + 'Complete', null, [b]);
        }
        function d() {
          g++, g === f && c();
        }
        var e = this,
          f = b.length;
        if (!b || !f) return void c();
        for (var g = 0, h = 0, i = b.length; i > h; h++) {
          var j = b[h];
          j.once(a, d);
        }
      }),
      (g.prototype.dispatchEvent = function (a, b, c) {
        var d = b ? [b].concat(c) : c;
        if ((this.emitEvent(a, d), i))
          if (((this.$element = this.$element || i(this.element)), b)) {
            var e = i.Event(b);
            (e.type = a), this.$element.trigger(e, c);
          } else this.$element.trigger(a, c);
      }),
      (g.prototype.ignore = function (a) {
        var b = this.getItem(a);
        b && (b.isIgnored = !0);
      }),
      (g.prototype.unignore = function (a) {
        var b = this.getItem(a);
        b && delete b.isIgnored;
      }),
      (g.prototype.stamp = function (a) {
        if ((a = this._find(a))) {
          this.stamps = this.stamps.concat(a);
          for (var b = 0, c = a.length; c > b; b++) {
            var d = a[b];
            this.ignore(d);
          }
        }
      }),
      (g.prototype.unstamp = function (a) {
        if ((a = this._find(a)))
          for (var b = 0, c = a.length; c > b; b++) {
            var d = a[b];
            e.removeFrom(this.stamps, d), this.unignore(d);
          }
      }),
      (g.prototype._find = function (a) {
        return a ? ('string' == typeof a && (a = this.element.querySelectorAll(a)), (a = e.makeArray(a))) : void 0;
      }),
      (g.prototype._manageStamps = function () {
        if (this.stamps && this.stamps.length) {
          this._getBoundingRect();
          for (var a = 0, b = this.stamps.length; b > a; a++) {
            var c = this.stamps[a];
            this._manageStamp(c);
          }
        }
      }),
      (g.prototype._getBoundingRect = function () {
        var a = this.element.getBoundingClientRect(),
          b = this.size;
        this._boundingRect = {
          left: a.left + b.paddingLeft + b.borderLeftWidth,
          top: a.top + b.paddingTop + b.borderTopWidth,
          right: a.right - (b.paddingRight + b.borderRightWidth),
          bottom: a.bottom - (b.paddingBottom + b.borderBottomWidth),
        };
      }),
      (g.prototype._manageStamp = j),
      (g.prototype._getElementOffset = function (a) {
        var b = a.getBoundingClientRect(),
          c = this._boundingRect,
          e = d(a),
          f = { left: b.left - c.left - e.marginLeft, top: b.top - c.top - e.marginTop, right: c.right - b.right - e.marginRight, bottom: c.bottom - b.bottom - e.marginBottom };
        return f;
      }),
      (g.prototype.handleEvent = function (a) {
        var b = 'on' + a.type;
        this[b] && this[b](a);
      }),
      (g.prototype.bindResize = function () {
        this.isResizeBound || (b.bind(a, 'resize', this), (this.isResizeBound = !0));
      }),
      (g.prototype.unbindResize = function () {
        this.isResizeBound && b.unbind(a, 'resize', this), (this.isResizeBound = !1);
      }),
      (g.prototype.onresize = function () {
        function a() {
          b.resize(), delete b.resizeTimeout;
        }
        this.resizeTimeout && clearTimeout(this.resizeTimeout);
        var b = this;
        this.resizeTimeout = setTimeout(a, 100);
      }),
      (g.prototype.resize = function () {
        this.isResizeBound && this.needsResizeLayout() && this.layout();
      }),
      (g.prototype.needsResizeLayout = function () {
        var a = d(this.element),
          b = this.size && a;
        return b && a.innerWidth !== this.size.innerWidth;
      }),
      (g.prototype.addItems = function (a) {
        var b = this._itemize(a);
        return b.length && (this.items = this.items.concat(b)), b;
      }),
      (g.prototype.appended = function (a) {
        var b = this.addItems(a);
        b.length && (this.layoutItems(b, !0), this.reveal(b));
      }),
      (g.prototype.prepended = function (a) {
        var b = this._itemize(a);
        if (b.length) {
          var c = this.items.slice(0);
          (this.items = b.concat(c)), this._resetLayout(), this._manageStamps(), this.layoutItems(b, !0), this.reveal(b), this.layoutItems(c);
        }
      }),
      (g.prototype.reveal = function (a) {
        this._emitCompleteOnItems('reveal', a);
        for (var b = a && a.length, c = 0; b && b > c; c++) {
          var d = a[c];
          d.reveal();
        }
      }),
      (g.prototype.hide = function (a) {
        this._emitCompleteOnItems('hide', a);
        for (var b = a && a.length, c = 0; b && b > c; c++) {
          var d = a[c];
          d.hide();
        }
      }),
      (g.prototype.revealItemElements = function (a) {
        var b = this.getItems(a);
        this.reveal(b);
      }),
      (g.prototype.hideItemElements = function (a) {
        var b = this.getItems(a);
        this.hide(b);
      }),
      (g.prototype.getItem = function (a) {
        for (var b = 0, c = this.items.length; c > b; b++) {
          var d = this.items[b];
          if (d.element === a) return d;
        }
      }),
      (g.prototype.getItems = function (a) {
        a = e.makeArray(a);
        for (var b = [], c = 0, d = a.length; d > c; c++) {
          var f = a[c],
            g = this.getItem(f);
          g && b.push(g);
        }
        return b;
      }),
      (g.prototype.remove = function (a) {
        var b = this.getItems(a);
        if ((this._emitCompleteOnItems('remove', b), b && b.length))
          for (var c = 0, d = b.length; d > c; c++) {
            var f = b[c];
            f.remove(), e.removeFrom(this.items, f);
          }
      }),
      (g.prototype.destroy = function () {
        var a = this.element.style;
        (a.height = ''), (a.position = ''), (a.width = '');
        for (var b = 0, c = this.items.length; c > b; b++) {
          var d = this.items[b];
          d.destroy();
        }
        this.unbindResize();
        var e = this.element.outlayerGUID;
        delete l[e], delete this.element.outlayerGUID, i && i.removeData(this.element, this.constructor.namespace);
      }),
      (g.data = function (a) {
        a = e.getQueryElement(a);
        var b = a && a.outlayerGUID;
        return b && l[b];
      }),
      (g.create = function (a, b) {
        function c() {
          g.apply(this, arguments);
        }
        return (
          Object.create ? (c.prototype = Object.create(g.prototype)) : e.extend(c.prototype, g.prototype),
          (c.prototype.constructor = c),
          (c.defaults = e.extend({}, g.defaults)),
          e.extend(c.defaults, b),
          (c.prototype.settings = {}),
          (c.namespace = a),
          (c.data = g.data),
          (c.Item = function () {
            f.apply(this, arguments);
          }),
          (c.Item.prototype = new f()),
          e.htmlInit(c, a),
          i && i.bridget && i.bridget(a, c),
          c
        );
      }),
      (g.Item = f),
      g
    );
  }),
  (function (a, b) {
    'use strict';
    'function' == typeof define && define.amd
      ? define('isotope/js/item', ['outlayer/outlayer'], b)
      : 'object' == typeof exports
      ? (module.exports = b(require('outlayer')))
      : ((a.Isotope = a.Isotope || {}), (a.Isotope.Item = b(a.Outlayer)));
  })(window, function (a) {
    'use strict';
    function b() {
      a.Item.apply(this, arguments);
    }
    (b.prototype = new a.Item()),
      (b.prototype._create = function () {
        (this.id = this.layout.itemGUID++), a.Item.prototype._create.call(this), (this.sortData = {});
      }),
      (b.prototype.updateSortData = function () {
        if (!this.isIgnored) {
          (this.sortData.id = this.id), (this.sortData['original-order'] = this.id), (this.sortData.random = Math.random());
          var a = this.layout.options.getSortData,
            b = this.layout._sorters;
          for (var c in a) {
            var d = b[c];
            this.sortData[c] = d(this.element, this);
          }
        }
      });
    var c = b.prototype.destroy;
    return (
      (b.prototype.destroy = function () {
        c.apply(this, arguments), this.css({ display: '' });
      }),
      b
    );
  }),
  (function (a, b) {
    'use strict';
    'function' == typeof define && define.amd
      ? define('isotope/js/layout-mode', ['get-size/get-size', 'outlayer/outlayer'], b)
      : 'object' == typeof exports
      ? (module.exports = b(require('get-size'), require('outlayer')))
      : ((a.Isotope = a.Isotope || {}), (a.Isotope.LayoutMode = b(a.getSize, a.Outlayer)));
  })(window, function (a, b) {
    'use strict';
    function c(a) {
      (this.isotope = a), a && ((this.options = a.options[this.namespace]), (this.element = a.element), (this.items = a.filteredItems), (this.size = a.size));
    }
    return (
      (function () {
        function a(a) {
          return function () {
            return b.prototype[a].apply(this.isotope, arguments);
          };
        }
        for (var d = ['_resetLayout', '_getItemLayoutPosition', '_manageStamp', '_getContainerSize', '_getElementOffset', 'needsResizeLayout'], e = 0, f = d.length; f > e; e++) {
          var g = d[e];
          c.prototype[g] = a(g);
        }
      })(),
      (c.prototype.needsVerticalResizeLayout = function () {
        var b = a(this.isotope.element),
          c = this.isotope.size && b;
        return c && b.innerHeight != this.isotope.size.innerHeight;
      }),
      (c.prototype._getMeasurement = function () {
        this.isotope._getMeasurement.apply(this, arguments);
      }),
      (c.prototype.getColumnWidth = function () {
        this.getSegmentSize('column', 'Width');
      }),
      (c.prototype.getRowHeight = function () {
        this.getSegmentSize('row', 'Height');
      }),
      (c.prototype.getSegmentSize = function (a, b) {
        var c = a + b,
          d = 'outer' + b;
        if ((this._getMeasurement(c, d), !this[c])) {
          var e = this.getFirstItemSize();
          this[c] = (e && e[d]) || this.isotope.size['inner' + b];
        }
      }),
      (c.prototype.getFirstItemSize = function () {
        var b = this.isotope.filteredItems[0];
        return b && b.element && a(b.element);
      }),
      (c.prototype.layout = function () {
        this.isotope.layout.apply(this.isotope, arguments);
      }),
      (c.prototype.getSize = function () {
        this.isotope.getSize(), (this.size = this.isotope.size);
      }),
      (c.modes = {}),
      (c.create = function (a, b) {
        function d() {
          c.apply(this, arguments);
        }
        return (d.prototype = new c()), b && (d.options = b), (d.prototype.namespace = a), (c.modes[a] = d), d;
      }),
      c
    );
  }),
  (function (a, b) {
    'use strict';
    'function' == typeof define && define.amd
      ? define('masonry/masonry', ['outlayer/outlayer', 'get-size/get-size', 'fizzy-ui-utils/utils'], b)
      : 'object' == typeof exports
      ? (module.exports = b(require('outlayer'), require('get-size'), require('fizzy-ui-utils')))
      : (a.Masonry = b(a.Outlayer, a.getSize, a.fizzyUIUtils));
  })(window, function (a, b, c) {
    var d = a.create('masonry');
    return (
      (d.prototype._resetLayout = function () {
        this.getSize(), this._getMeasurement('columnWidth', 'outerWidth'), this._getMeasurement('gutter', 'outerWidth'), this.measureColumns();
        var a = this.cols;
        for (this.colYs = []; a--; ) this.colYs.push(0);
        this.maxY = 0;
      }),
      (d.prototype.measureColumns = function () {
        if ((this.getContainerWidth(), !this.columnWidth)) {
          var a = this.items[0],
            c = a && a.element;
          this.columnWidth = (c && b(c).outerWidth) || this.containerWidth;
        }
        var d = (this.columnWidth += this.gutter),
          e = this.containerWidth + this.gutter,
          f = e / d,
          g = d - (e % d),
          h = g && 1 > g ? 'round' : 'floor';
        (f = Math[h](f)), (this.cols = Math.max(f, 1));
      }),
      (d.prototype.getContainerWidth = function () {
        var a = this.options.isFitWidth ? this.element.parentNode : this.element,
          c = b(a);
        this.containerWidth = c && c.innerWidth;
      }),
      (d.prototype._getItemLayoutPosition = function (a) {
        a.getSize();
        var b = a.size.outerWidth % this.columnWidth,
          d = b && 1 > b ? 'round' : 'ceil',
          e = Math[d](a.size.outerWidth / this.columnWidth);
        e = Math.min(e, this.cols);
        for (var f = this._getColGroup(e), g = Math.min.apply(Math, f), h = c.indexOf(f, g), i = { x: this.columnWidth * h, y: g }, j = g + a.size.outerHeight, k = this.cols + 1 - f.length, l = 0; k > l; l++) this.colYs[h + l] = j;
        return i;
      }),
      (d.prototype._getColGroup = function (a) {
        if (2 > a) return this.colYs;
        for (var b = [], c = this.cols + 1 - a, d = 0; c > d; d++) {
          var e = this.colYs.slice(d, d + a);
          b[d] = Math.max.apply(Math, e);
        }
        return b;
      }),
      (d.prototype._manageStamp = function (a) {
        var c = b(a),
          d = this._getElementOffset(a),
          e = this.options.isOriginLeft ? d.left : d.right,
          f = e + c.outerWidth,
          g = Math.floor(e / this.columnWidth);
        g = Math.max(0, g);
        var h = Math.floor(f / this.columnWidth);
        (h -= f % this.columnWidth ? 0 : 1), (h = Math.min(this.cols - 1, h));
        for (var i = (this.options.isOriginTop ? d.top : d.bottom) + c.outerHeight, j = g; h >= j; j++) this.colYs[j] = Math.max(i, this.colYs[j]);
      }),
      (d.prototype._getContainerSize = function () {
        this.maxY = Math.max.apply(Math, this.colYs);
        var a = { height: this.maxY };
        return this.options.isFitWidth && (a.width = this._getContainerFitWidth()), a;
      }),
      (d.prototype._getContainerFitWidth = function () {
        for (var a = 0, b = this.cols; --b && 0 === this.colYs[b]; ) a++;
        return (this.cols - a) * this.columnWidth - this.gutter;
      }),
      (d.prototype.needsResizeLayout = function () {
        var a = this.containerWidth;
        return this.getContainerWidth(), a !== this.containerWidth;
      }),
      d
    );
  }),
  (function (a, b) {
    'use strict';
    'function' == typeof define && define.amd
      ? define('isotope/js/layout-modes/masonry', ['../layout-mode', 'masonry/masonry'], b)
      : 'object' == typeof exports
      ? (module.exports = b(require('../layout-mode'), require('masonry-layout')))
      : b(a.Isotope.LayoutMode, a.Masonry);
  })(window, function (a, b) {
    'use strict';
    function c(a, b) {
      for (var c in b) a[c] = b[c];
      return a;
    }
    var d = a.create('masonry'),
      e = d.prototype._getElementOffset,
      f = d.prototype.layout,
      g = d.prototype._getMeasurement;
    c(d.prototype, b.prototype), (d.prototype._getElementOffset = e), (d.prototype.layout = f), (d.prototype._getMeasurement = g);
    var h = d.prototype.measureColumns;
    d.prototype.measureColumns = function () {
      (this.items = this.isotope.filteredItems), h.call(this);
    };
    var i = d.prototype._manageStamp;
    return (
      (d.prototype._manageStamp = function () {
        (this.options.isOriginLeft = this.isotope.options.isOriginLeft), (this.options.isOriginTop = this.isotope.options.isOriginTop), i.apply(this, arguments);
      }),
      d
    );
  }),
  (function (a, b) {
    'use strict';
    'function' == typeof define && define.amd ? define('isotope/js/layout-modes/fit-rows', ['../layout-mode'], b) : 'object' == typeof exports ? (module.exports = b(require('../layout-mode'))) : b(a.Isotope.LayoutMode);
  })(window, function (a) {
    'use strict';
    var b = a.create('fitRows');
    return (
      (b.prototype._resetLayout = function () {
        (this.x = 0), (this.y = 0), (this.maxY = 0), this._getMeasurement('gutter', 'outerWidth');
      }),
      (b.prototype._getItemLayoutPosition = function (a) {
        a.getSize();
        var b = a.size.outerWidth + this.gutter,
          c = this.isotope.size.innerWidth + this.gutter;
        0 !== this.x && b + this.x > c && ((this.x = 0), (this.y = this.maxY));
        var d = { x: this.x, y: this.y };
        return (this.maxY = Math.max(this.maxY, this.y + a.size.outerHeight)), (this.x += b), d;
      }),
      (b.prototype._getContainerSize = function () {
        return { height: this.maxY };
      }),
      b
    );
  }),
  (function (a, b) {
    'use strict';
    'function' == typeof define && define.amd ? define('isotope/js/layout-modes/vertical', ['../layout-mode'], b) : 'object' == typeof exports ? (module.exports = b(require('../layout-mode'))) : b(a.Isotope.LayoutMode);
  })(window, function (a) {
    'use strict';
    var b = a.create('vertical', { horizontalAlignment: 0 });
    return (
      (b.prototype._resetLayout = function () {
        this.y = 0;
      }),
      (b.prototype._getItemLayoutPosition = function (a) {
        a.getSize();
        var b = (this.isotope.size.innerWidth - a.size.outerWidth) * this.options.horizontalAlignment,
          c = this.y;
        return (this.y += a.size.outerHeight), { x: b, y: c };
      }),
      (b.prototype._getContainerSize = function () {
        return { height: this.y };
      }),
      b
    );
  }),
  (function (a, b) {
    'use strict';
    'function' == typeof define && define.amd
      ? define(
          [
            'outlayer/outlayer',
            'get-size/get-size',
            'matches-selector/matches-selector',
            'fizzy-ui-utils/utils',
            'isotope/js/item',
            'isotope/js/layout-mode',
            'isotope/js/layout-modes/masonry',
            'isotope/js/layout-modes/fit-rows',
            'isotope/js/layout-modes/vertical',
          ],
          function (c, d, e, f, g, h) {
            return b(a, c, d, e, f, g, h);
          }
        )
      : 'object' == typeof exports
      ? (module.exports = b(
          a,
          require('outlayer'),
          require('get-size'),
          require('desandro-matches-selector'),
          require('fizzy-ui-utils'),
          require('./item'),
          require('./layout-mode'),
          require('./layout-modes/masonry'),
          require('./layout-modes/fit-rows'),
          require('./layout-modes/vertical')
        ))
      : (a.Isotope = b(a, a.Outlayer, a.getSize, a.matchesSelector, a.fizzyUIUtils, a.Isotope.Item, a.Isotope.LayoutMode));
  })(window, function (a, b, c, d, e, f, g) {
    function h(a, b) {
      return function (c, d) {
        for (var e = 0, f = a.length; f > e; e++) {
          var g = a[e],
            h = c.sortData[g],
            i = d.sortData[g];
          if (h > i || i > h) {
            var j = void 0 !== b[g] ? b[g] : b,
              k = j ? 1 : -1;
            return (h > i ? 1 : -1) * k;
          }
        }
        return 0;
      };
    }
    var i = a.jQuery,
      j = String.prototype.trim
        ? function (a) {
            return a.trim();
          }
        : function (a) {
            return a.replace(/^\s+|\s+$/g, '');
          },
      k = document.documentElement,
      l = k.textContent
        ? function (a) {
            return a.textContent;
          }
        : function (a) {
            return a.innerText;
          },
      m = b.create('isotope', { layoutMode: 'masonry', isJQueryFiltering: !0, sortAscending: !0 });
    (m.Item = f),
      (m.LayoutMode = g),
      (m.prototype._create = function () {
        (this.itemGUID = 0), (this._sorters = {}), this._getSorters(), b.prototype._create.call(this), (this.modes = {}), (this.filteredItems = this.items), (this.sortHistory = ['original-order']);
        for (var a in g.modes) this._initLayoutMode(a);
      }),
      (m.prototype.reloadItems = function () {
        (this.itemGUID = 0), b.prototype.reloadItems.call(this);
      }),
      (m.prototype._itemize = function () {
        for (var a = b.prototype._itemize.apply(this, arguments), c = 0, d = a.length; d > c; c++) {
          var e = a[c];
          e.id = this.itemGUID++;
        }
        return this._updateItemsSortData(a), a;
      }),
      (m.prototype._initLayoutMode = function (a) {
        var b = g.modes[a],
          c = this.options[a] || {};
        (this.options[a] = b.options ? e.extend(b.options, c) : c), (this.modes[a] = new b(this));
      }),
      (m.prototype.layout = function () {
        return !this._isLayoutInited && this.options.isInitLayout ? void this.arrange() : void this._layout();
      }),
      (m.prototype._layout = function () {
        var a = this._getIsInstant();
        this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, a), (this._isLayoutInited = !0);
      }),
      (m.prototype.arrange = function (a) {
        function b() {
          d.reveal(c.needReveal), d.hide(c.needHide);
        }
        this.option(a), this._getIsInstant();
        var c = this._filter(this.items);
        this.filteredItems = c.matches;
        var d = this;
        this._bindArrangeComplete(), this._isInstant ? this._noTransition(b) : b(), this._sort(), this._layout();
      }),
      (m.prototype._init = m.prototype.arrange),
      (m.prototype._getIsInstant = function () {
        var a = void 0 !== this.options.isLayoutInstant ? this.options.isLayoutInstant : !this._isLayoutInited;
        return (this._isInstant = a), a;
      }),
      (m.prototype._bindArrangeComplete = function () {
        function a() {
          b && c && d && e.dispatchEvent('arrangeComplete', null, [e.filteredItems]);
        }
        var b,
          c,
          d,
          e = this;
        this.once('layoutComplete', function () {
          (b = !0), a();
        }),
          this.once('hideComplete', function () {
            (c = !0), a();
          }),
          this.once('revealComplete', function () {
            (d = !0), a();
          });
      }),
      (m.prototype._filter = function (a) {
        var b = this.options.filter;
        b = b || '*';
        for (var c = [], d = [], e = [], f = this._getFilterTest(b), g = 0, h = a.length; h > g; g++) {
          var i = a[g];
          if (!i.isIgnored) {
            var j = f(i);
            j && c.push(i), j && i.isHidden ? d.push(i) : j || i.isHidden || e.push(i);
          }
        }
        return { matches: c, needReveal: d, needHide: e };
      }),
      (m.prototype._getFilterTest = function (a) {
        return i && this.options.isJQueryFiltering
          ? function (b) {
              return i(b.element).is(a);
            }
          : 'function' == typeof a
          ? function (b) {
              return a(b.element);
            }
          : function (b) {
              return d(b.element, a);
            };
      }),
      (m.prototype.updateSortData = function (a) {
        var b;
        a ? ((a = e.makeArray(a)), (b = this.getItems(a))) : (b = this.items), this._getSorters(), this._updateItemsSortData(b);
      }),
      (m.prototype._getSorters = function () {
        var a = this.options.getSortData;
        for (var b in a) {
          var c = a[b];
          this._sorters[b] = n(c);
        }
      }),
      (m.prototype._updateItemsSortData = function (a) {
        for (var b = a && a.length, c = 0; b && b > c; c++) {
          var d = a[c];
          d.updateSortData();
        }
      });
    var n = (function () {
      function a(a) {
        if ('string' != typeof a) return a;
        var c = j(a).split(' '),
          d = c[0],
          e = d.match(/^\[(.+)\]$/),
          f = e && e[1],
          g = b(f, d),
          h = m.sortDataParsers[c[1]];
        return (a = h
          ? function (a) {
              return a && h(g(a));
            }
          : function (a) {
              return a && g(a);
            });
      }
      function b(a, b) {
        var c;
        return (c = a
          ? function (b) {
              return b.getAttribute(a);
            }
          : function (a) {
              var c = a.querySelector(b);
              return c && l(c);
            });
      }
      return a;
    })();
    (m.sortDataParsers = {
      parseInt: function (a) {
        return parseInt(a, 10);
      },
      parseFloat: function (a) {
        return parseFloat(a);
      },
    }),
      (m.prototype._sort = function () {
        var a = this.options.sortBy;
        if (a) {
          var b = [].concat.apply(a, this.sortHistory),
            c = h(b, this.options.sortAscending);
          this.filteredItems.sort(c), a != this.sortHistory[0] && this.sortHistory.unshift(a);
        }
      }),
      (m.prototype._mode = function () {
        var a = this.options.layoutMode,
          b = this.modes[a];
        if (!b) throw new Error('No layout mode: ' + a);
        return (b.options = this.options[a]), b;
      }),
      (m.prototype._resetLayout = function () {
        b.prototype._resetLayout.call(this), this._mode()._resetLayout();
      }),
      (m.prototype._getItemLayoutPosition = function (a) {
        return this._mode()._getItemLayoutPosition(a);
      }),
      (m.prototype._manageStamp = function (a) {
        this._mode()._manageStamp(a);
      }),
      (m.prototype._getContainerSize = function () {
        return this._mode()._getContainerSize();
      }),
      (m.prototype.needsResizeLayout = function () {
        return this._mode().needsResizeLayout();
      }),
      (m.prototype.appended = function (a) {
        var b = this.addItems(a);
        if (b.length) {
          var c = this._filterRevealAdded(b);
          this.filteredItems = this.filteredItems.concat(c);
        }
      }),
      (m.prototype.prepended = function (a) {
        var b = this._itemize(a);
        if (b.length) {
          this._resetLayout(), this._manageStamps();
          var c = this._filterRevealAdded(b);
          this.layoutItems(this.filteredItems), (this.filteredItems = c.concat(this.filteredItems)), (this.items = b.concat(this.items));
        }
      }),
      (m.prototype._filterRevealAdded = function (a) {
        var b = this._filter(a);
        return this.hide(b.needHide), this.reveal(b.matches), this.layoutItems(b.matches, !0), b.matches;
      }),
      (m.prototype.insert = function (a) {
        var b = this.addItems(a);
        if (b.length) {
          var c,
            d,
            e = b.length;
          for (c = 0; e > c; c++) (d = b[c]), this.element.appendChild(d.element);
          var f = this._filter(b).matches;
          for (c = 0; e > c; c++) b[c].isLayoutInstant = !0;
          for (this.arrange(), c = 0; e > c; c++) delete b[c].isLayoutInstant;
          this.reveal(f);
        }
      });
    var o = m.prototype.remove;
    return (
      (m.prototype.remove = function (a) {
        a = e.makeArray(a);
        var b = this.getItems(a);
        o.call(this, a);
        var c = b && b.length;
        if (c)
          for (var d = 0; c > d; d++) {
            var f = b[d];
            e.removeFrom(this.filteredItems, f);
          }
      }),
      (m.prototype.shuffle = function () {
        for (var a = 0, b = this.items.length; b > a; a++) {
          var c = this.items[a];
          c.sortData.random = Math.random();
        }
        (this.options.sortBy = 'random'), this._sort(), this._layout();
      }),
      (m.prototype._noTransition = function (a) {
        var b = this.options.transitionDuration;
        this.options.transitionDuration = 0;
        var c = a.call(this);
        return (this.options.transitionDuration = b), c;
      }),
      (m.prototype.getFilteredItemElements = function () {
        for (var a = [], b = 0, c = this.filteredItems.length; c > b; b++) a.push(this.filteredItems[b].element);
        return a;
      }),
      m
    );
  });

/*!
 * Validator v0.11.5 for Bootstrap 3, by @1000hz
 * Copyright 2016 Cina Saffary
 * Licensed under http://opensource.org/licenses/MIT
 *
 * https://github.com/1000hz/bootstrap-validator
 */

+(function ($) {
  'use strict';

  // VALIDATOR CLASS DEFINITION
  // ==========================

  function getValue($el) {
    return $el.is('[type="checkbox"]') ? $el.prop('checked') : $el.is('[type="radio"]') ? !!$('[name="' + $el.attr('name') + '"]:checked').length : $el.val();
  }

  var Validator = function (element, options) {
    this.options = options;
    this.validators = $.extend({}, Validator.VALIDATORS, options.custom);
    this.$element = $(element);
    this.$btn = $('button[type="submit"], input[type="submit"]')
      .filter('[form="' + this.$element.attr('id') + '"]')
      .add(this.$element.find('input[type="submit"], button[type="submit"]'));

    this.update();

    this.$element.on('input.bs.validator change.bs.validator focusout.bs.validator', $.proxy(this.onInput, this));
    this.$element.on('submit.bs.validator', $.proxy(this.onSubmit, this));
    this.$element.on('reset.bs.validator', $.proxy(this.reset, this));

    this.$element.find('[data-match]').each(function () {
      var $this = $(this);
      var target = $this.data('match');

      $(target).on('input.bs.validator', function (e) {
        getValue($this) && $this.trigger('input.bs.validator');
      });
    });

    this.$inputs
      .filter(function () {
        return getValue($(this));
      })
      .trigger('focusout');

    this.$element.attr('novalidate', true); // disable automatic native validation
    this.toggleSubmit();
  };

  Validator.VERSION = '0.11.5';

  Validator.INPUT_SELECTOR = ':input:not([type="hidden"], [type="submit"], [type="reset"], button)';

  Validator.FOCUS_OFFSET = 20;

  Validator.DEFAULTS = {
    delay: 500,
    html: false,
    disable: true,
    focus: true,
    custom: {},
    errors: {
      match: 'Does not match',
      minlength: 'Not long enough',
    },
    feedback: {
      success: 'glyphicon-ok',
      error: 'glyphicon-remove',
    },
  };

  Validator.VALIDATORS = {
    native: function ($el) {
      var el = $el[0];
      if (el.checkValidity) {
        return !el.checkValidity() && !el.validity.valid && (el.validationMessage || 'error!');
      }
    },
    match: function ($el) {
      var target = $el.data('match');
      return $el.val() !== $(target).val() && Validator.DEFAULTS.errors.match;
    },
    minlength: function ($el) {
      var minlength = $el.data('minlength');
      return $el.val().length < minlength && Validator.DEFAULTS.errors.minlength;
    },
  };

  Validator.prototype.update = function () {
    this.$inputs = this.$element.find(Validator.INPUT_SELECTOR).add(this.$element.find('[data-validate="true"]')).not(this.$element.find('[data-validate="false"]'));

    return this;
  };

  Validator.prototype.onInput = function (e) {
    var self = this;
    var $el = $(e.target);
    var deferErrors = e.type !== 'focusout';

    if (!this.$inputs.is($el)) return;

    this.validateInput($el, deferErrors).done(function () {
      self.toggleSubmit();
    });
  };

  Validator.prototype.validateInput = function ($el, deferErrors) {
    var value = getValue($el);
    var prevErrors = $el.data('bs.validator.errors');
    var errors;

    if ($el.is('[type="radio"]')) $el = this.$element.find('input[name="' + $el.attr('name') + '"]');

    var e = $.Event('validate.bs.validator', { relatedTarget: $el[0] });
    this.$element.trigger(e);
    if (e.isDefaultPrevented()) return;

    var self = this;

    return this.runValidators($el).done(function (errors) {
      $el.data('bs.validator.errors', errors);

      errors.length ? (deferErrors ? self.defer($el, self.showErrors) : self.showErrors($el)) : self.clearErrors($el);

      if (!prevErrors || errors.toString() !== prevErrors.toString()) {
        e = errors.length ? $.Event('invalid.bs.validator', { relatedTarget: $el[0], detail: errors }) : $.Event('valid.bs.validator', { relatedTarget: $el[0], detail: prevErrors });

        self.$element.trigger(e);
      }

      self.toggleSubmit();

      self.$element.trigger($.Event('validated.bs.validator', { relatedTarget: $el[0] }));
    });
  };

  Validator.prototype.runValidators = function ($el) {
    var errors = [];
    var deferred = $.Deferred();

    $el.data('bs.validator.deferred') && $el.data('bs.validator.deferred').reject();
    $el.data('bs.validator.deferred', deferred);

    function getValidatorSpecificError(key) {
      return $el.data(key + '-error');
    }

    function getValidityStateError() {
      var validity = $el[0].validity;
      return validity.typeMismatch
        ? $el.data('type-error')
        : validity.patternMismatch
        ? $el.data('pattern-error')
        : validity.stepMismatch
        ? $el.data('step-error')
        : validity.rangeOverflow
        ? $el.data('max-error')
        : validity.rangeUnderflow
        ? $el.data('min-error')
        : validity.valueMissing
        ? $el.data('required-error')
        : null;
    }

    function getGenericError() {
      return $el.data('error');
    }

    function getErrorMessage(key) {
      return getValidatorSpecificError(key) || getValidityStateError() || getGenericError();
    }

    $.each(
      this.validators,
      $.proxy(function (key, validator) {
        var error = null;
        if ((getValue($el) || $el.attr('required')) && ($el.data(key) || key == 'native') && (error = validator.call(this, $el))) {
          error = getErrorMessage(key) || error;
          !~errors.indexOf(error) && errors.push(error);
        }
      }, this)
    );

    if (!errors.length && getValue($el) && $el.data('remote')) {
      this.defer($el, function () {
        var data = {};
        data[$el.attr('name')] = getValue($el);
        $.get($el.data('remote'), data)
          .fail(function (jqXHR, textStatus, error) {
            errors.push(getErrorMessage('remote') || error);
          })
          .always(function () {
            deferred.resolve(errors);
          });
      });
    } else deferred.resolve(errors);

    return deferred.promise();
  };

  Validator.prototype.validate = function () {
    var self = this;

    $.when(
      this.$inputs.map(function (el) {
        return self.validateInput($(this), false);
      })
    ).then(function () {
      self.toggleSubmit();
      self.focusError();
    });

    return this;
  };

  Validator.prototype.focusError = function () {
    if (!this.options.focus) return;

    var $input = this.$element.find('.has-error:first :input');
    if ($input.length === 0) return;

    //$('html, body').animate({scrollTop: $input.offset().top - Validator.FOCUS_OFFSET}, 250)
    $input.focus();
  };

  Validator.prototype.showErrors = function ($el) {
    var method = this.options.html ? 'html' : 'text';
    var errors = $el.data('bs.validator.errors');
    var $group = $el.closest('.form-group');
    var $block = $group.find('.help-block.with-errors');
    var $feedback = $group.find('.form-control-feedback');

    if (!errors.length) return;

    errors = $('<ul/>')
      .addClass('list-unstyled')
      .append(
        $.map(errors, function (error) {
          return $('<li/>')[method](error);
        })
      );

    $block.data('bs.validator.originalContent') === undefined && $block.data('bs.validator.originalContent', $block.html());
    $block.empty().append(errors);
    $group.addClass('has-error has-danger');

    $group.hasClass('has-feedback') && $feedback.removeClass(this.options.feedback.success) && $feedback.addClass(this.options.feedback.error) && $group.removeClass('has-success');
  };

  Validator.prototype.clearErrors = function ($el) {
    var $group = $el.closest('.form-group');
    var $block = $group.find('.help-block.with-errors');
    var $feedback = $group.find('.form-control-feedback');

    $block.html($block.data('bs.validator.originalContent'));
    $group.removeClass('has-error has-danger has-success');

    $group.hasClass('has-feedback') &&
      $feedback.removeClass(this.options.feedback.error) &&
      $feedback.removeClass(this.options.feedback.success) &&
      getValue($el) &&
      $feedback.addClass(this.options.feedback.success) &&
      $group.addClass('has-success');
  };

  Validator.prototype.hasErrors = function () {
    function fieldErrors() {
      return !!($(this).data('bs.validator.errors') || []).length;
    }

    return !!this.$inputs.filter(fieldErrors).length;
  };

  Validator.prototype.isIncomplete = function () {
    function fieldIncomplete() {
      var value = getValue($(this));
      return !(typeof value == 'string' ? $.trim(value) : value);
    }

    return !!this.$inputs.filter('[required]').filter(fieldIncomplete).length;
  };

  Validator.prototype.onSubmit = function (e) {
    this.validate();
    if (this.isIncomplete() || this.hasErrors()) e.preventDefault();
  };

  Validator.prototype.toggleSubmit = function () {
    if (!this.options.disable) return;
    this.$btn.toggleClass('disabled', this.isIncomplete() || this.hasErrors());
  };

  Validator.prototype.defer = function ($el, callback) {
    callback = $.proxy(callback, this, $el);
    if (!this.options.delay) return callback();
    window.clearTimeout($el.data('bs.validator.timeout'));
    $el.data('bs.validator.timeout', window.setTimeout(callback, this.options.delay));
  };

  Validator.prototype.reset = function () {
    this.$element.find('.form-control-feedback').removeClass(this.options.feedback.error).removeClass(this.options.feedback.success);

    this.$inputs.removeData(['bs.validator.errors', 'bs.validator.deferred']).each(function () {
      var $this = $(this);
      var timeout = $this.data('bs.validator.timeout');
      window.clearTimeout(timeout) && $this.removeData('bs.validator.timeout');
    });

    this.$element.find('.help-block.with-errors').each(function () {
      var $this = $(this);
      var originalContent = $this.data('bs.validator.originalContent');

      $this.removeData('bs.validator.originalContent').html(originalContent);
    });

    this.$btn.removeClass('disabled');

    this.$element.find('.has-error, .has-danger, .has-success').removeClass('has-error has-danger has-success');

    return this;
  };

  Validator.prototype.destroy = function () {
    this.reset();

    this.$element.removeAttr('novalidate').removeData('bs.validator').off('.bs.validator');

    this.$inputs.off('.bs.validator');

    this.options = null;
    this.validators = null;
    this.$element = null;
    this.$btn = null;

    return this;
  };

  // VALIDATOR PLUGIN DEFINITION
  // ===========================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this);
      var options = $.extend({}, Validator.DEFAULTS, $this.data(), typeof option == 'object' && option);
      var data = $this.data('bs.validator');

      if (!data && option == 'destroy') return;
      if (!data) $this.data('bs.validator', (data = new Validator(this, options)));
      if (typeof option == 'string') data[option]();
    });
  }

  var old = $.fn.validator;

  $.fn.validator = Plugin;
  $.fn.validator.Constructor = Validator;

  // VALIDATOR NO CONFLICT
  // =====================

  $.fn.validator.noConflict = function () {
    $.fn.validator = old;
    return this;
  };

  // VALIDATOR DATA-API
  // ==================

  $(window).on('load', function () {
    $('form[data-toggle="validator"]').each(function () {
      var $form = $(this);
      Plugin.call($form, $form.data());
    });
  });
})(jQuery);

/*! WOW - v1.1.3 - 2016-05-06
 * Copyright (c) 2016 Matthieu Aussaguel;*/ (function () {
  var a,
    b,
    c,
    d,
    e,
    f = function (a, b) {
      return function () {
        return a.apply(b, arguments);
      };
    },
    g =
      [].indexOf ||
      function (a) {
        for (var b = 0, c = this.length; c > b; b++) if (b in this && this[b] === a) return b;
        return -1;
      };
  (b = (function () {
    function a() {}
    return (
      (a.prototype.extend = function (a, b) {
        var c, d;
        for (c in b) (d = b[c]), null == a[c] && (a[c] = d);
        return a;
      }),
      (a.prototype.isMobile = function (a) {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a);
      }),
      (a.prototype.createEvent = function (a, b, c, d) {
        var e;
        return (
          null == b && (b = !1),
          null == c && (c = !1),
          null == d && (d = null),
          null != document.createEvent ? ((e = document.createEvent('CustomEvent')), e.initCustomEvent(a, b, c, d)) : null != document.createEventObject ? ((e = document.createEventObject()), (e.eventType = a)) : (e.eventName = a),
          e
        );
      }),
      (a.prototype.emitEvent = function (a, b) {
        return null != a.dispatchEvent ? a.dispatchEvent(b) : b in (null != a) ? a[b]() : 'on' + b in (null != a) ? a['on' + b]() : void 0;
      }),
      (a.prototype.addEvent = function (a, b, c) {
        return null != a.addEventListener ? a.addEventListener(b, c, !1) : null != a.attachEvent ? a.attachEvent('on' + b, c) : (a[b] = c);
      }),
      (a.prototype.removeEvent = function (a, b, c) {
        return null != a.removeEventListener ? a.removeEventListener(b, c, !1) : null != a.detachEvent ? a.detachEvent('on' + b, c) : delete a[b];
      }),
      (a.prototype.innerHeight = function () {
        return 'innerHeight' in window ? window.innerHeight : document.documentElement.clientHeight;
      }),
      a
    );
  })()),
    (c =
      this.WeakMap ||
      this.MozWeakMap ||
      (c = (function () {
        function a() {
          (this.keys = []), (this.values = []);
        }
        return (
          (a.prototype.get = function (a) {
            var b, c, d, e, f;
            for (f = this.keys, b = d = 0, e = f.length; e > d; b = ++d) if (((c = f[b]), c === a)) return this.values[b];
          }),
          (a.prototype.set = function (a, b) {
            var c, d, e, f, g;
            for (g = this.keys, c = e = 0, f = g.length; f > e; c = ++e) if (((d = g[c]), d === a)) return void (this.values[c] = b);
            return this.keys.push(a), this.values.push(b);
          }),
          a
        );
      })())),
    (a =
      this.MutationObserver ||
      this.WebkitMutationObserver ||
      this.MozMutationObserver ||
      (a = (function () {
        function a() {
          'undefined' != typeof console && null !== console && console.warn('MutationObserver is not supported by your browser.'),
            'undefined' != typeof console && null !== console && console.warn('WOW.js cannot detect dom mutations, please call .sync() after loading new content.');
        }
        return (a.notSupported = !0), (a.prototype.observe = function () {}), a;
      })())),
    (d =
      this.getComputedStyle ||
      function (a, b) {
        return (
          (this.getPropertyValue = function (b) {
            var c;
            return (
              'float' === b && (b = 'styleFloat'),
              e.test(b) &&
                b.replace(e, function (a, b) {
                  return b.toUpperCase();
                }),
              (null != (c = a.currentStyle) ? c[b] : void 0) || null
            );
          }),
          this
        );
      }),
    (e = /(\-([a-z]){1})/g),
    (this.WOW = (function () {
      function e(a) {
        null == a && (a = {}),
          (this.scrollCallback = f(this.scrollCallback, this)),
          (this.scrollHandler = f(this.scrollHandler, this)),
          (this.resetAnimation = f(this.resetAnimation, this)),
          (this.start = f(this.start, this)),
          (this.scrolled = !0),
          (this.config = this.util().extend(a, this.defaults)),
          null != a.scrollContainer && (this.config.scrollContainer = document.querySelector(a.scrollContainer)),
          (this.animationNameCache = new c()),
          (this.wowEvent = this.util().createEvent(this.config.boxClass));
      }
      return (
        (e.prototype.defaults = { boxClass: 'wow', animateClass: 'animated', offset: 0, mobile: !0, live: !0, callback: null, scrollContainer: null }),
        (e.prototype.init = function () {
          var a;
          return (this.element = window.document.documentElement), 'interactive' === (a = document.readyState) || 'complete' === a ? this.start() : this.util().addEvent(document, 'DOMContentLoaded', this.start), (this.finished = []);
        }),
        (e.prototype.start = function () {
          var b, c, d, e;
          if (
            ((this.stopped = !1),
            (this.boxes = function () {
              var a, c, d, e;
              for (d = this.element.querySelectorAll('.' + this.config.boxClass), e = [], a = 0, c = d.length; c > a; a++) (b = d[a]), e.push(b);
              return e;
            }.call(this)),
            (this.all = function () {
              var a, c, d, e;
              for (d = this.boxes, e = [], a = 0, c = d.length; c > a; a++) (b = d[a]), e.push(b);
              return e;
            }.call(this)),
            this.boxes.length)
          )
            if (this.disabled()) this.resetStyle();
            else for (e = this.boxes, c = 0, d = e.length; d > c; c++) (b = e[c]), this.applyStyle(b, !0);
          return (
            this.disabled() || (this.util().addEvent(this.config.scrollContainer || window, 'scroll', this.scrollHandler), this.util().addEvent(window, 'resize', this.scrollHandler), (this.interval = setInterval(this.scrollCallback, 50))),
            this.config.live
              ? new a(
                  (function (a) {
                    return function (b) {
                      var c, d, e, f, g;
                      for (g = [], c = 0, d = b.length; d > c; c++)
                        (f = b[c]),
                          g.push(
                            function () {
                              var a, b, c, d;
                              for (c = f.addedNodes || [], d = [], a = 0, b = c.length; b > a; a++) (e = c[a]), d.push(this.doSync(e));
                              return d;
                            }.call(a)
                          );
                      return g;
                    };
                  })(this)
                ).observe(document.body, { childList: !0, subtree: !0 })
              : void 0
          );
        }),
        (e.prototype.stop = function () {
          return (
            (this.stopped = !0),
            this.util().removeEvent(this.config.scrollContainer || window, 'scroll', this.scrollHandler),
            this.util().removeEvent(window, 'resize', this.scrollHandler),
            null != this.interval ? clearInterval(this.interval) : void 0
          );
        }),
        (e.prototype.sync = function (b) {
          return a.notSupported ? this.doSync(this.element) : void 0;
        }),
        (e.prototype.doSync = function (a) {
          var b, c, d, e, f;
          if ((null == a && (a = this.element), 1 === a.nodeType)) {
            for (a = a.parentNode || a, e = a.querySelectorAll('.' + this.config.boxClass), f = [], c = 0, d = e.length; d > c; c++)
              (b = e[c]), g.call(this.all, b) < 0 ? (this.boxes.push(b), this.all.push(b), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(b, !0), f.push((this.scrolled = !0))) : f.push(void 0);
            return f;
          }
        }),
        (e.prototype.show = function (a) {
          return (
            this.applyStyle(a),
            (a.className = a.className + ' ' + this.config.animateClass),
            null != this.config.callback && this.config.callback(a),
            this.util().emitEvent(a, this.wowEvent),
            this.util().addEvent(a, 'animationend', this.resetAnimation),
            this.util().addEvent(a, 'oanimationend', this.resetAnimation),
            this.util().addEvent(a, 'webkitAnimationEnd', this.resetAnimation),
            this.util().addEvent(a, 'MSAnimationEnd', this.resetAnimation),
            a
          );
        }),
        (e.prototype.applyStyle = function (a, b) {
          var c, d, e;
          return (
            (d = a.getAttribute('data-wow-duration')),
            (c = a.getAttribute('data-wow-delay')),
            (e = a.getAttribute('data-wow-iteration')),
            this.animate(
              (function (f) {
                return function () {
                  return f.customStyle(a, b, d, c, e);
                };
              })(this)
            )
          );
        }),
        (e.prototype.animate = (function () {
          return 'requestAnimationFrame' in window
            ? function (a) {
                return window.requestAnimationFrame(a);
              }
            : function (a) {
                return a();
              };
        })()),
        (e.prototype.resetStyle = function () {
          var a, b, c, d, e;
          for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) (a = d[b]), e.push((a.style.visibility = 'visible'));
          return e;
        }),
        (e.prototype.resetAnimation = function (a) {
          var b;
          return a.type.toLowerCase().indexOf('animationend') >= 0 ? ((b = a.target || a.srcElement), (b.className = b.className.replace(this.config.animateClass, '').trim())) : void 0;
        }),
        (e.prototype.customStyle = function (a, b, c, d, e) {
          return (
            b && this.cacheAnimationName(a),
            (a.style.visibility = b ? 'hidden' : 'visible'),
            c && this.vendorSet(a.style, { animationDuration: c }),
            d && this.vendorSet(a.style, { animationDelay: d }),
            e && this.vendorSet(a.style, { animationIterationCount: e }),
            this.vendorSet(a.style, { animationName: b ? 'none' : this.cachedAnimationName(a) }),
            a
          );
        }),
        (e.prototype.vendors = ['moz', 'webkit']),
        (e.prototype.vendorSet = function (a, b) {
          var c, d, e, f;
          d = [];
          for (c in b)
            (e = b[c]),
              (a['' + c] = e),
              d.push(
                function () {
                  var b, d, g, h;
                  for (g = this.vendors, h = [], b = 0, d = g.length; d > b; b++) (f = g[b]), h.push((a['' + f + c.charAt(0).toUpperCase() + c.substr(1)] = e));
                  return h;
                }.call(this)
              );
          return d;
        }),
        (e.prototype.vendorCSS = function (a, b) {
          var c, e, f, g, h, i;
          for (h = d(a), g = h.getPropertyCSSValue(b), f = this.vendors, c = 0, e = f.length; e > c; c++) (i = f[c]), (g = g || h.getPropertyCSSValue('-' + i + '-' + b));
          return g;
        }),
        (e.prototype.animationName = function (a) {
          var b;
          try {
            b = this.vendorCSS(a, 'animation-name').cssText;
          } catch (c) {
            b = d(a).getPropertyValue('animation-name');
          }
          return 'none' === b ? '' : b;
        }),
        (e.prototype.cacheAnimationName = function (a) {
          return this.animationNameCache.set(a, this.animationName(a));
        }),
        (e.prototype.cachedAnimationName = function (a) {
          return this.animationNameCache.get(a);
        }),
        (e.prototype.scrollHandler = function () {
          return (this.scrolled = !0);
        }),
        (e.prototype.scrollCallback = function () {
          var a;
          return !this.scrolled ||
            ((this.scrolled = !1),
            (this.boxes = function () {
              var b, c, d, e;
              for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) (a = d[b]), a && (this.isVisible(a) ? this.show(a) : e.push(a));
              return e;
            }.call(this)),
            this.boxes.length || this.config.live)
            ? void 0
            : this.stop();
        }),
        (e.prototype.offsetTop = function (a) {
          for (var b; void 0 === a.offsetTop; ) a = a.parentNode;
          for (b = a.offsetTop; (a = a.offsetParent); ) b += a.offsetTop;
          return b;
        }),
        (e.prototype.isVisible = function (a) {
          var b, c, d, e, f;
          return (
            (c = a.getAttribute('data-wow-offset') || this.config.offset),
            (f = (this.config.scrollContainer && this.config.scrollContainer.scrollTop) || window.pageYOffset),
            (e = f + Math.min(this.element.clientHeight, this.util().innerHeight()) - c),
            (d = this.offsetTop(a)),
            (b = d + a.clientHeight),
            e >= d && b >= f
          );
        }),
        (e.prototype.util = function () {
          return null != this._util ? this._util : (this._util = new b());
        }),
        (e.prototype.disabled = function () {
          return !this.config.mobile && this.util().isMobile(navigator.userAgent);
        }),
        e
      );
    })());
}.call(this));

/*!
 * simpleParallax.min - simpleParallax is a simple JavaScript library that gives your website parallax animations on any images,
 * @date: 13-06-2019 16:24:29,
 * @version: 5.1.0,
 * @link: https://simpleparallax.com/
 */
!(function (t, e) {
  'object' == typeof exports && 'object' == typeof module
    ? (module.exports = e())
    : 'function' == typeof define && define.amd
    ? define('simpleParallax', [], e)
    : 'object' == typeof exports
    ? (exports.simpleParallax = e())
    : (t.simpleParallax = e());
})(window, function () {
  return ((n = {}),
  (s.m = i =
    [
      function (t, e, i) {
        'use strict';
        function n(t, e) {
          for (var i = 0; i < e.length; i++) {
            var n = e[i];
            (n.enumerable = n.enumerable || !1), (n.configurable = !0), 'value' in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
          }
        }
        i.r(e);
        var s = (function () {
            function t() {
              !(function (t, e) {
                if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
              })(this, t),
                (this.positions = { top: 0, bottom: 0, height: 0 });
            }
            return (
              (function (t, e, i) {
                e && n(t.prototype, e), i && n(t, i);
              })(t, [
                {
                  key: 'setViewportTop',
                  value: function () {
                    return (this.positions.top = window.pageYOffset), this.positions;
                  },
                },
                {
                  key: 'setViewportBottom',
                  value: function () {
                    return (this.positions.bottom = this.positions.top + this.positions.height), this.positions;
                  },
                },
                {
                  key: 'setViewportHeight',
                  value: function () {
                    return (this.positions.height = document.documentElement.clientHeight), this.positions;
                  },
                },
                {
                  key: 'setViewportAll',
                  value: function () {
                    return (this.positions.top = window.pageYOffset), (this.positions.bottom = this.positions.top + this.positions.height), (this.positions.height = document.documentElement.clientHeight), this.positions;
                  },
                },
              ]),
              t
            );
          })(),
          o = function (t) {
            return NodeList.prototype.isPrototypeOf(t) || HTMLCollection.prototype.isPrototypeOf(t) ? Array.from(t) : 'string' == typeof t || t instanceof String ? document.querySelectorAll(t) : [t];
          },
          r = (function () {
            for (var t, e = 'transform webkitTransform mozTransform oTransform msTransform'.split(' '), i = 0; void 0 === t; ) (t = void 0 !== document.createElement('div').style[e[i]] ? e[i] : void 0), (i += 1);
            return t;
          })(),
          a = function (t) {
            return !!t && !!t.complete && (void 0 === t.naturalWidth || 0 !== t.naturalWidth);
          };
        function l(t) {
          return (
            (function (t) {
              if (Array.isArray(t)) {
                for (var e = 0, i = new Array(t.length); e < t.length; e++) i[e] = t[e];
                return i;
              }
            })(t) ||
            (function (t) {
              if (Symbol.iterator in Object(t) || '[object Arguments]' === Object.prototype.toString.call(t)) return Array.from(t);
            })(t) ||
            (function () {
              throw new TypeError('Invalid attempt to spread non-iterable instance');
            })()
          );
        }
        function u(t, e) {
          for (var i = 0; i < e.length; i++) {
            var n = e[i];
            (n.enumerable = n.enumerable || !1), (n.configurable = !0), 'value' in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
          }
        }
        var h = (function () {
          function i(t, e) {
            !(function (t, e) {
              if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
            })(this, i),
              (this.element = t),
              (this.elementContainer = t),
              (this.settings = e),
              (this.isVisible = !0),
              (this.isInit = !1),
              (this.oldTranslateValue = -1),
              (this.init = this.init.bind(this)),
              a(t) ? this.init() : this.element.addEventListener('load', this.init);
          }
          return (
            (function (t, e, i) {
              e && u(t.prototype, e), i && u(t, i);
            })(i, [
              {
                key: 'init',
                value: function () {
                  this.isInit ||
                    this.element.closest('.simpleParallax') ||
                    (!1 === this.settings.overflow && this.wrapElement(this.element), this.setStyle(), this.getElementOffset(), this.intersectionObserver(), this.getTranslateValue(), this.animate(), (this.isInit = !0));
                },
              },
              {
                key: 'wrapElement',
                value: function () {
                  var t = this.element.closest('picture') || this.element,
                    e = document.createElement('div');
                  e.classList.add('simpleParallax'), (e.style.overflow = 'hidden'), t.parentNode.insertBefore(e, t), e.appendChild(t), (this.elementContainer = e);
                },
              },
              {
                key: 'unWrapElement',
                value: function () {
                  var t = this.elementContainer;
                  t.replaceWith.apply(t, l(t.childNodes));
                },
              },
              {
                key: 'setStyle',
                value: function () {
                  !1 === this.settings.overflow && (this.element.style[r] = 'scale('.concat(this.settings.scale, ')')),
                    0 < this.settings.delay && (this.element.style.transition = 'transform '.concat(this.settings.delay, 's ').concat(this.settings.transition)),
                    (this.element.style.willChange = 'transform');
                },
              },
              {
                key: 'unSetStyle',
                value: function () {
                  (this.element.style.willChange = ''), (this.element.style[r] = ''), (this.element.style.transition = '');
                },
              },
              {
                key: 'getElementOffset',
                value: function () {
                  var t = this.elementContainer.getBoundingClientRect();
                  (this.elementHeight = t.height), (this.elementTop = t.top + d.positions.top), (this.elementBottom = this.elementHeight + this.elementTop);
                },
              },
              {
                key: 'buildThresholdList',
                value: function () {
                  for (var t = [], e = 1; e <= this.elementHeight; e++) {
                    var i = e / this.elementHeight;
                    t.push(i);
                  }
                  return t;
                },
              },
              {
                key: 'intersectionObserver',
                value: function () {
                  var t = { root: null, threshold: this.buildThresholdList() };
                  (this.observer = new IntersectionObserver(this.intersectionObserverCallback.bind(this), t)), this.observer.observe(this.element);
                },
              },
              {
                key: 'intersectionObserverCallback',
                value: function (t) {
                  for (var e = t.length - 1; 0 <= e; e--) t[e].isIntersecting ? (this.isVisible = !0) : (this.isVisible = !1);
                },
              },
              {
                key: 'checkIfVisible',
                value: function () {
                  return this.elementBottom > d.positions.top && this.elementTop < d.positions.bottom;
                },
              },
              {
                key: 'getRangeMax',
                value: function () {
                  var t = this.element.clientHeight;
                  this.rangeMax = t * this.settings.scale - t;
                },
              },
              {
                key: 'getTranslateValue',
                value: function () {
                  var t = ((d.positions.bottom - this.elementTop) / ((d.positions.height + this.elementHeight) / 100)).toFixed(1);
                  return (
                    (t = Math.min(100, Math.max(0, t))),
                    this.oldPercentage !== t &&
                      (this.rangeMax || this.getRangeMax(),
                      (this.translateValue = ((t / 100) * this.rangeMax - this.rangeMax / 2).toFixed(0)),
                      this.oldTranslateValue !== this.translateValue && ((this.oldPercentage = t), (this.oldTranslateValue = this.translateValue), !0))
                  );
                },
              },
              {
                key: 'animate',
                value: function () {
                  var t,
                    e = 0,
                    i = 0;
                  (this.settings.orientation.includes('left') || this.settings.orientation.includes('right')) && (i = ''.concat(this.settings.orientation.includes('left') ? -1 * this.translateValue : this.translateValue, 'px')),
                    (this.settings.orientation.includes('up') || this.settings.orientation.includes('down')) && (e = ''.concat(this.settings.orientation.includes('up') ? -1 * this.translateValue : this.translateValue, 'px')),
                    (t = !1 === this.settings.overflow ? 'translate3d('.concat(i, ', ').concat(e, ', 0) scale(').concat(this.settings.scale, ')') : 'translate3d('.concat(i, ', ').concat(e, ', 0)')),
                    (this.element.style[r] = t);
                },
              },
            ]),
            i
          );
        })();
        function c(t, e) {
          for (var i = 0; i < e.length; i++) {
            var n = e[i];
            (n.enumerable = n.enumerable || !1), (n.configurable = !0), 'value' in n && (n.writable = !0), Object.defineProperty(t, n.key, n);
          }
        }
        i.d(e, 'viewport', function () {
          return d;
        }),
          i.d(e, 'default', function () {
            return b;
          });
        var f,
          p,
          m,
          d = new s(),
          g = !0,
          v = !1,
          y = [],
          b = (function () {
            function i(t, e) {
              !(function (t, e) {
                if (!(t instanceof e)) throw new TypeError('Cannot call a class as a function');
              })(this, i),
                t &&
                  ((this.elements = o(t)),
                  (this.defaults = { delay: 0.4, orientation: 'up', scale: 1.3, overflow: !1, transition: 'cubic-bezier(0,0,0,1)', breakpoint: !1 }),
                  (this.settings = Object.assign(this.defaults, e)),
                  (this.settings.breakpoint && document.documentElement.clientWidth <= this.settings.breakpoint) ||
                    ('IntersectionObserver' in window || (g = !1),
                    (this.lastPosition = -1),
                    (this.resizeIsDone = this.resizeIsDone.bind(this)),
                    (this.handleResize = this.handleResize.bind(this)),
                    (this.proceedRequestAnimationFrame = this.proceedRequestAnimationFrame.bind(this)),
                    this.init()));
            }
            return (
              (function (t, e, i) {
                e && c(t.prototype, e), i && c(t, i);
              })(i, [
                {
                  key: 'init',
                  value: function () {
                    d.setViewportAll();
                    for (var t = this.elements.length - 1; 0 <= t; t--) {
                      var e = new h(this.elements[t], this.settings);
                      y.push(e);
                    }
                    (f = y.length), v || (this.proceedRequestAnimationFrame(), window.addEventListener('resize', this.resizeIsDone), (v = !0));
                  },
                },
                {
                  key: 'resizeIsDone',
                  value: function () {
                    clearTimeout(m), (m = setTimeout(this.handleResize, 500));
                  },
                },
                {
                  key: 'handleResize',
                  value: function () {
                    d.setViewportAll(), this.settings.breakpoint && document.documentElement.clientWidth <= this.settings.breakpoint && this.destroy();
                    for (var t = f - 1; 0 <= t; t--) y[t].getElementOffset(), y[t].getRangeMax();
                    this.lastPosition = -1;
                  },
                },
                {
                  key: 'proceedRequestAnimationFrame',
                  value: function () {
                    if ((d.setViewportTop(), this.lastPosition !== d.positions.top)) {
                      d.setViewportBottom();
                      for (var t = f - 1; 0 <= t; t--) this.proceedElement(y[t]);
                      (p = window.requestAnimationFrame(this.proceedRequestAnimationFrame)), (this.lastPosition = d.positions.top);
                    } else p = window.requestAnimationFrame(this.proceedRequestAnimationFrame);
                  },
                },
                {
                  key: 'proceedElement',
                  value: function (t) {
                    (g ? t.isVisible : t.checkIfVisible()) && t.getTranslateValue() && t.animate();
                  },
                },
                {
                  key: 'destroy',
                  value: function () {
                    var e = this,
                      i = [];
                    y = y.filter(function (t) {
                      if (!e.elements.includes(t.element)) return t;
                      i.push(t);
                    });
                    for (var t = i.length - 1; 0 <= t; t--) i[t].unSetStyle(), !1 === this.settings.overflow && i[t].unWrapElement();
                    (f = y.length) || (window.cancelAnimationFrame(p), window.removeEventListener('resize', this.handleResize));
                  },
                },
              ]),
              i
            );
          })();
      },
    ]),
  (s.c = n),
  (s.d = function (t, e, i) {
    s.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: i });
  }),
  (s.r = function (t) {
    'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(t, '__esModule', { value: !0 });
  }),
  (s.t = function (e, t) {
    if ((1 & t && (e = s(e)), 8 & t)) return e;
    if (4 & t && 'object' == typeof e && e && e.__esModule) return e;
    var i = Object.create(null);
    if ((s.r(i), Object.defineProperty(i, 'default', { enumerable: !0, value: e }), 2 & t && 'string' != typeof e))
      for (var n in e)
        s.d(
          i,
          n,
          function (t) {
            return e[t];
          }.bind(null, n)
        );
    return i;
  }),
  (s.n = function (t) {
    var e =
      t && t.__esModule
        ? function () {
            return t.default;
          }
        : function () {
            return t;
          };
    return s.d(e, 'a', e), e;
  }),
  (s.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }),
  (s.p = ''),
  s((s.s = 0))).default;
  function s(t) {
    if (n[t]) return n[t].exports;
    var e = (n[t] = { i: t, l: !1, exports: {} });
    return i[t].call(e.exports, e, e.exports, s), (e.l = !0), e.exports;
  }
  var i, n;
});

/* -----------------------------------------------
/* Author : Vincent Garreau  - vincentgarreau.com
/* MIT license: http://opensource.org/licenses/MIT
/* Demo / Generator : vincentgarreau.com/particles.js
/* GitHub : github.com/VincentGarreau/particles.js
/* How to use? : Check the GitHub README
/* v2.0.0
/* ----------------------------------------------- */
function hexToRgb(e) {
  var a = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  e = e.replace(a, function (e, a, t, i) {
    return a + a + t + t + i + i;
  });
  var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
  return t ? { r: parseInt(t[1], 16), g: parseInt(t[2], 16), b: parseInt(t[3], 16) } : null;
}
function clamp(e, a, t) {
  return Math.min(Math.max(e, a), t);
}
function isInArray(e, a) {
  return a.indexOf(e) > -1;
}
var pJS = function (e, a) {
  var t = document.querySelector('#' + e + ' > .particles-js-canvas-el');
  this.pJS = {
    canvas: { el: t, w: t.offsetWidth, h: t.offsetHeight },
    particles: {
      number: { value: 400, density: { enable: !0, value_area: 800 } },
      color: { value: '#fff' },
      shape: { type: 'circle', stroke: { width: 0, color: '#ff0000' }, polygon: { nb_sides: 5 }, image: { src: '', width: 100, height: 100 } },
      opacity: { value: 1, random: !1, anim: { enable: !1, speed: 2, opacity_min: 0, sync: !1 } },
      size: { value: 20, random: !1, anim: { enable: !1, speed: 20, size_min: 0, sync: !1 } },
      line_linked: { enable: !0, distance: 100, color: '#fff', opacity: 1, width: 1 },
      move: { enable: !0, speed: 2, direction: 'none', random: !1, straight: !1, out_mode: 'out', bounce: !1, attract: { enable: !1, rotateX: 3e3, rotateY: 3e3 } },
      array: [],
    },
    interactivity: {
      detect_on: 'canvas',
      events: { onhover: { enable: !0, mode: 'grab' }, onclick: { enable: !0, mode: 'push' }, resize: !0 },
      modes: { grab: { distance: 100, line_linked: { opacity: 1 } }, bubble: { distance: 200, size: 80, duration: 0.4 }, repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } },
      mouse: {},
    },
    retina_detect: !1,
    fn: { interact: {}, modes: {}, vendors: {} },
    tmp: {},
  };
  var i = this.pJS;
  a && Object.deepExtend(i, a),
    (i.tmp.obj = {
      size_value: i.particles.size.value,
      size_anim_speed: i.particles.size.anim.speed,
      move_speed: i.particles.move.speed,
      line_linked_distance: i.particles.line_linked.distance,
      line_linked_width: i.particles.line_linked.width,
      mode_grab_distance: i.interactivity.modes.grab.distance,
      mode_bubble_distance: i.interactivity.modes.bubble.distance,
      mode_bubble_size: i.interactivity.modes.bubble.size,
      mode_repulse_distance: i.interactivity.modes.repulse.distance,
    }),
    (i.fn.retinaInit = function () {
      i.retina_detect && window.devicePixelRatio > 1 ? ((i.canvas.pxratio = window.devicePixelRatio), (i.tmp.retina = !0)) : ((i.canvas.pxratio = 1), (i.tmp.retina = !1)),
        (i.canvas.w = i.canvas.el.offsetWidth * i.canvas.pxratio),
        (i.canvas.h = i.canvas.el.offsetHeight * i.canvas.pxratio),
        (i.particles.size.value = i.tmp.obj.size_value * i.canvas.pxratio),
        (i.particles.size.anim.speed = i.tmp.obj.size_anim_speed * i.canvas.pxratio),
        (i.particles.move.speed = i.tmp.obj.move_speed * i.canvas.pxratio),
        (i.particles.line_linked.distance = i.tmp.obj.line_linked_distance * i.canvas.pxratio),
        (i.interactivity.modes.grab.distance = i.tmp.obj.mode_grab_distance * i.canvas.pxratio),
        (i.interactivity.modes.bubble.distance = i.tmp.obj.mode_bubble_distance * i.canvas.pxratio),
        (i.particles.line_linked.width = i.tmp.obj.line_linked_width * i.canvas.pxratio),
        (i.interactivity.modes.bubble.size = i.tmp.obj.mode_bubble_size * i.canvas.pxratio),
        (i.interactivity.modes.repulse.distance = i.tmp.obj.mode_repulse_distance * i.canvas.pxratio);
    }),
    (i.fn.canvasInit = function () {
      i.canvas.ctx = i.canvas.el.getContext('2d');
    }),
    (i.fn.canvasSize = function () {
      (i.canvas.el.width = i.canvas.w),
        (i.canvas.el.height = i.canvas.h),
        i &&
          i.interactivity.events.resize &&
          window.addEventListener('resize', function () {
            (i.canvas.w = i.canvas.el.offsetWidth),
              (i.canvas.h = i.canvas.el.offsetHeight),
              i.tmp.retina && ((i.canvas.w *= i.canvas.pxratio), (i.canvas.h *= i.canvas.pxratio)),
              (i.canvas.el.width = i.canvas.w),
              (i.canvas.el.height = i.canvas.h),
              i.particles.move.enable || (i.fn.particlesEmpty(), i.fn.particlesCreate(), i.fn.particlesDraw(), i.fn.vendors.densityAutoParticles()),
              i.fn.vendors.densityAutoParticles();
          });
    }),
    (i.fn.canvasPaint = function () {
      i.canvas.ctx.fillRect(0, 0, i.canvas.w, i.canvas.h);
    }),
    (i.fn.canvasClear = function () {
      i.canvas.ctx.clearRect(0, 0, i.canvas.w, i.canvas.h);
    }),
    (i.fn.particle = function (e, a, t) {
      if (
        ((this.radius = (i.particles.size.random ? Math.random() : 1) * i.particles.size.value),
        i.particles.size.anim.enable && ((this.size_status = !1), (this.vs = i.particles.size.anim.speed / 100), i.particles.size.anim.sync || (this.vs = this.vs * Math.random())),
        (this.x = t ? t.x : Math.random() * i.canvas.w),
        (this.y = t ? t.y : Math.random() * i.canvas.h),
        this.x > i.canvas.w - 2 * this.radius ? (this.x = this.x - this.radius) : this.x < 2 * this.radius && (this.x = this.x + this.radius),
        this.y > i.canvas.h - 2 * this.radius ? (this.y = this.y - this.radius) : this.y < 2 * this.radius && (this.y = this.y + this.radius),
        i.particles.move.bounce && i.fn.vendors.checkOverlap(this, t),
        (this.color = {}),
        'object' == typeof e.value)
      )
        if (e.value instanceof Array) {
          var s = e.value[Math.floor(Math.random() * i.particles.color.value.length)];
          this.color.rgb = hexToRgb(s);
        } else
          void 0 != e.value.r && void 0 != e.value.g && void 0 != e.value.b && (this.color.rgb = { r: e.value.r, g: e.value.g, b: e.value.b }),
            void 0 != e.value.h && void 0 != e.value.s && void 0 != e.value.l && (this.color.hsl = { h: e.value.h, s: e.value.s, l: e.value.l });
      else
        'random' == e.value
          ? (this.color.rgb = { r: Math.floor(256 * Math.random()) + 0, g: Math.floor(256 * Math.random()) + 0, b: Math.floor(256 * Math.random()) + 0 })
          : 'string' == typeof e.value && ((this.color = e), (this.color.rgb = hexToRgb(this.color.value)));
      (this.opacity = (i.particles.opacity.random ? Math.random() : 1) * i.particles.opacity.value),
        i.particles.opacity.anim.enable && ((this.opacity_status = !1), (this.vo = i.particles.opacity.anim.speed / 100), i.particles.opacity.anim.sync || (this.vo = this.vo * Math.random()));
      var n = {};
      switch (i.particles.move.direction) {
        case 'top':
          n = { x: 0, y: -1 };
          break;
        case 'top-right':
          n = { x: 0.5, y: -0.5 };
          break;
        case 'right':
          n = { x: 1, y: -0 };
          break;
        case 'bottom-right':
          n = { x: 0.5, y: 0.5 };
          break;
        case 'bottom':
          n = { x: 0, y: 1 };
          break;
        case 'bottom-left':
          n = { x: -0.5, y: 1 };
          break;
        case 'left':
          n = { x: -1, y: 0 };
          break;
        case 'top-left':
          n = { x: -0.5, y: -0.5 };
          break;
        default:
          n = { x: 0, y: 0 };
      }
      i.particles.move.straight
        ? ((this.vx = n.x), (this.vy = n.y), i.particles.move.random && ((this.vx = this.vx * Math.random()), (this.vy = this.vy * Math.random())))
        : ((this.vx = n.x + Math.random() - 0.5), (this.vy = n.y + Math.random() - 0.5)),
        (this.vx_i = this.vx),
        (this.vy_i = this.vy);
      var r = i.particles.shape.type;
      if ('object' == typeof r) {
        if (r instanceof Array) {
          var c = r[Math.floor(Math.random() * r.length)];
          this.shape = c;
        }
      } else this.shape = r;
      if ('image' == this.shape) {
        var o = i.particles.shape;
        (this.img = { src: o.image.src, ratio: o.image.width / o.image.height }),
          this.img.ratio || (this.img.ratio = 1),
          'svg' == i.tmp.img_type && void 0 != i.tmp.source_svg && (i.fn.vendors.createSvgImg(this), i.tmp.pushing && (this.img.loaded = !1));
      }
    }),
    (i.fn.particle.prototype.draw = function () {
      function e() {
        i.canvas.ctx.drawImage(r, a.x - t, a.y - t, 2 * t, (2 * t) / a.img.ratio);
      }
      var a = this;
      if (void 0 != a.radius_bubble) var t = a.radius_bubble;
      else var t = a.radius;
      if (void 0 != a.opacity_bubble) var s = a.opacity_bubble;
      else var s = a.opacity;
      if (a.color.rgb) var n = 'rgba(' + a.color.rgb.r + ',' + a.color.rgb.g + ',' + a.color.rgb.b + ',' + s + ')';
      else var n = 'hsla(' + a.color.hsl.h + ',' + a.color.hsl.s + '%,' + a.color.hsl.l + '%,' + s + ')';
      switch (((i.canvas.ctx.fillStyle = n), i.canvas.ctx.beginPath(), a.shape)) {
        case 'circle':
          i.canvas.ctx.arc(a.x, a.y, t, 0, 2 * Math.PI, !1);
          break;
        case 'edge':
          i.canvas.ctx.rect(a.x - t, a.y - t, 2 * t, 2 * t);
          break;
        case 'triangle':
          i.fn.vendors.drawShape(i.canvas.ctx, a.x - t, a.y + t / 1.66, 2 * t, 3, 2);
          break;
        case 'polygon':
          i.fn.vendors.drawShape(i.canvas.ctx, a.x - t / (i.particles.shape.polygon.nb_sides / 3.5), a.y - t / 0.76, (2.66 * t) / (i.particles.shape.polygon.nb_sides / 3), i.particles.shape.polygon.nb_sides, 1);
          break;
        case 'star':
          i.fn.vendors.drawShape(i.canvas.ctx, a.x - (2 * t) / (i.particles.shape.polygon.nb_sides / 4), a.y - t / 1.52, (2 * t * 2.66) / (i.particles.shape.polygon.nb_sides / 3), i.particles.shape.polygon.nb_sides, 2);
          break;
        case 'image':
          if ('svg' == i.tmp.img_type) var r = a.img.obj;
          else var r = i.tmp.img_obj;
          r && e();
      }
      i.canvas.ctx.closePath(), i.particles.shape.stroke.width > 0 && ((i.canvas.ctx.strokeStyle = i.particles.shape.stroke.color), (i.canvas.ctx.lineWidth = i.particles.shape.stroke.width), i.canvas.ctx.stroke()), i.canvas.ctx.fill();
    }),
    (i.fn.particlesCreate = function () {
      for (var e = 0; e < i.particles.number.value; e++) i.particles.array.push(new i.fn.particle(i.particles.color, i.particles.opacity.value));
    }),
    (i.fn.particlesUpdate = function () {
      for (var e = 0; e < i.particles.array.length; e++) {
        var a = i.particles.array[e];
        if (i.particles.move.enable) {
          var t = i.particles.move.speed / 2;
          (a.x += a.vx * t), (a.y += a.vy * t);
        }
        if (
          (i.particles.opacity.anim.enable &&
            (1 == a.opacity_status ? (a.opacity >= i.particles.opacity.value && (a.opacity_status = !1), (a.opacity += a.vo)) : (a.opacity <= i.particles.opacity.anim.opacity_min && (a.opacity_status = !0), (a.opacity -= a.vo)),
            a.opacity < 0 && (a.opacity = 0)),
          i.particles.size.anim.enable &&
            (1 == a.size_status ? (a.radius >= i.particles.size.value && (a.size_status = !1), (a.radius += a.vs)) : (a.radius <= i.particles.size.anim.size_min && (a.size_status = !0), (a.radius -= a.vs)), a.radius < 0 && (a.radius = 0)),
          'bounce' == i.particles.move.out_mode)
        )
          var s = { x_left: a.radius, x_right: i.canvas.w, y_top: a.radius, y_bottom: i.canvas.h };
        else var s = { x_left: -a.radius, x_right: i.canvas.w + a.radius, y_top: -a.radius, y_bottom: i.canvas.h + a.radius };
        switch (
          (a.x - a.radius > i.canvas.w ? ((a.x = s.x_left), (a.y = Math.random() * i.canvas.h)) : a.x + a.radius < 0 && ((a.x = s.x_right), (a.y = Math.random() * i.canvas.h)),
          a.y - a.radius > i.canvas.h ? ((a.y = s.y_top), (a.x = Math.random() * i.canvas.w)) : a.y + a.radius < 0 && ((a.y = s.y_bottom), (a.x = Math.random() * i.canvas.w)),
          i.particles.move.out_mode)
        ) {
          case 'bounce':
            a.x + a.radius > i.canvas.w ? (a.vx = -a.vx) : a.x - a.radius < 0 && (a.vx = -a.vx), a.y + a.radius > i.canvas.h ? (a.vy = -a.vy) : a.y - a.radius < 0 && (a.vy = -a.vy);
        }
        if (
          (isInArray('grab', i.interactivity.events.onhover.mode) && i.fn.modes.grabParticle(a),
          (isInArray('bubble', i.interactivity.events.onhover.mode) || isInArray('bubble', i.interactivity.events.onclick.mode)) && i.fn.modes.bubbleParticle(a),
          (isInArray('repulse', i.interactivity.events.onhover.mode) || isInArray('repulse', i.interactivity.events.onclick.mode)) && i.fn.modes.repulseParticle(a),
          i.particles.line_linked.enable || i.particles.move.attract.enable)
        )
          for (var n = e + 1; n < i.particles.array.length; n++) {
            var r = i.particles.array[n];
            i.particles.line_linked.enable && i.fn.interact.linkParticles(a, r), i.particles.move.attract.enable && i.fn.interact.attractParticles(a, r), i.particles.move.bounce && i.fn.interact.bounceParticles(a, r);
          }
      }
    }),
    (i.fn.particlesDraw = function () {
      i.canvas.ctx.clearRect(0, 0, i.canvas.w, i.canvas.h), i.fn.particlesUpdate();
      for (var e = 0; e < i.particles.array.length; e++) {
        var a = i.particles.array[e];
        a.draw();
      }
    }),
    (i.fn.particlesEmpty = function () {
      i.particles.array = [];
    }),
    (i.fn.particlesRefresh = function () {
      cancelRequestAnimFrame(i.fn.checkAnimFrame), cancelRequestAnimFrame(i.fn.drawAnimFrame), (i.tmp.source_svg = void 0), (i.tmp.img_obj = void 0), (i.tmp.count_svg = 0), i.fn.particlesEmpty(), i.fn.canvasClear(), i.fn.vendors.start();
    }),
    (i.fn.interact.linkParticles = function (e, a) {
      var t = e.x - a.x,
        s = e.y - a.y,
        n = Math.sqrt(t * t + s * s);
      if (n <= i.particles.line_linked.distance) {
        var r = i.particles.line_linked.opacity - n / (1 / i.particles.line_linked.opacity) / i.particles.line_linked.distance;
        if (r > 0) {
          var c = i.particles.line_linked.color_rgb_line;
          (i.canvas.ctx.strokeStyle = 'rgba(' + c.r + ',' + c.g + ',' + c.b + ',' + r + ')'),
            (i.canvas.ctx.lineWidth = i.particles.line_linked.width),
            i.canvas.ctx.beginPath(),
            i.canvas.ctx.moveTo(e.x, e.y),
            i.canvas.ctx.lineTo(a.x, a.y),
            i.canvas.ctx.stroke(),
            i.canvas.ctx.closePath();
        }
      }
    }),
    (i.fn.interact.attractParticles = function (e, a) {
      var t = e.x - a.x,
        s = e.y - a.y,
        n = Math.sqrt(t * t + s * s);
      if (n <= i.particles.line_linked.distance) {
        var r = t / (1e3 * i.particles.move.attract.rotateX),
          c = s / (1e3 * i.particles.move.attract.rotateY);
        (e.vx -= r), (e.vy -= c), (a.vx += r), (a.vy += c);
      }
    }),
    (i.fn.interact.bounceParticles = function (e, a) {
      var t = e.x - a.x,
        i = e.y - a.y,
        s = Math.sqrt(t * t + i * i),
        n = e.radius + a.radius;
      n >= s && ((e.vx = -e.vx), (e.vy = -e.vy), (a.vx = -a.vx), (a.vy = -a.vy));
    }),
    (i.fn.modes.pushParticles = function (e, a) {
      i.tmp.pushing = !0;
      for (var t = 0; e > t; t++)
        i.particles.array.push(new i.fn.particle(i.particles.color, i.particles.opacity.value, { x: a ? a.pos_x : Math.random() * i.canvas.w, y: a ? a.pos_y : Math.random() * i.canvas.h })),
          t == e - 1 && (i.particles.move.enable || i.fn.particlesDraw(), (i.tmp.pushing = !1));
    }),
    (i.fn.modes.removeParticles = function (e) {
      i.particles.array.splice(0, e), i.particles.move.enable || i.fn.particlesDraw();
    }),
    (i.fn.modes.bubbleParticle = function (e) {
      function a() {
        (e.opacity_bubble = e.opacity), (e.radius_bubble = e.radius);
      }
      function t(a, t, s, n, c) {
        if (a != t)
          if (i.tmp.bubble_duration_end) {
            if (void 0 != s) {
              var o = n - (p * (n - a)) / i.interactivity.modes.bubble.duration,
                l = a - o;
              (d = a + l), 'size' == c && (e.radius_bubble = d), 'opacity' == c && (e.opacity_bubble = d);
            }
          } else if (r <= i.interactivity.modes.bubble.distance) {
            if (void 0 != s) var v = s;
            else var v = n;
            if (v != a) {
              var d = n - (p * (n - a)) / i.interactivity.modes.bubble.duration;
              'size' == c && (e.radius_bubble = d), 'opacity' == c && (e.opacity_bubble = d);
            }
          } else 'size' == c && (e.radius_bubble = void 0), 'opacity' == c && (e.opacity_bubble = void 0);
      }
      if (i.interactivity.events.onhover.enable && isInArray('bubble', i.interactivity.events.onhover.mode)) {
        var s = e.x - i.interactivity.mouse.pos_x,
          n = e.y - i.interactivity.mouse.pos_y,
          r = Math.sqrt(s * s + n * n),
          c = 1 - r / i.interactivity.modes.bubble.distance;
        if (r <= i.interactivity.modes.bubble.distance) {
          if (c >= 0 && 'mousemove' == i.interactivity.status) {
            if (i.interactivity.modes.bubble.size != i.particles.size.value)
              if (i.interactivity.modes.bubble.size > i.particles.size.value) {
                var o = e.radius + i.interactivity.modes.bubble.size * c;
                o >= 0 && (e.radius_bubble = o);
              } else {
                var l = e.radius - i.interactivity.modes.bubble.size,
                  o = e.radius - l * c;
                o > 0 ? (e.radius_bubble = o) : (e.radius_bubble = 0);
              }
            if (i.interactivity.modes.bubble.opacity != i.particles.opacity.value)
              if (i.interactivity.modes.bubble.opacity > i.particles.opacity.value) {
                var v = i.interactivity.modes.bubble.opacity * c;
                v > e.opacity && v <= i.interactivity.modes.bubble.opacity && (e.opacity_bubble = v);
              } else {
                var v = e.opacity - (i.particles.opacity.value - i.interactivity.modes.bubble.opacity) * c;
                v < e.opacity && v >= i.interactivity.modes.bubble.opacity && (e.opacity_bubble = v);
              }
          }
        } else a();
        'mouseleave' == i.interactivity.status && a();
      } else if (i.interactivity.events.onclick.enable && isInArray('bubble', i.interactivity.events.onclick.mode)) {
        if (i.tmp.bubble_clicking) {
          var s = e.x - i.interactivity.mouse.click_pos_x,
            n = e.y - i.interactivity.mouse.click_pos_y,
            r = Math.sqrt(s * s + n * n),
            p = (new Date().getTime() - i.interactivity.mouse.click_time) / 1e3;
          p > i.interactivity.modes.bubble.duration && (i.tmp.bubble_duration_end = !0), p > 2 * i.interactivity.modes.bubble.duration && ((i.tmp.bubble_clicking = !1), (i.tmp.bubble_duration_end = !1));
        }
        i.tmp.bubble_clicking && (t(i.interactivity.modes.bubble.size, i.particles.size.value, e.radius_bubble, e.radius, 'size'), t(i.interactivity.modes.bubble.opacity, i.particles.opacity.value, e.opacity_bubble, e.opacity, 'opacity'));
      }
    }),
    (i.fn.modes.repulseParticle = function (e) {
      function a() {
        var a = Math.atan2(d, p);
        if (((e.vx = u * Math.cos(a)), (e.vy = u * Math.sin(a)), 'bounce' == i.particles.move.out_mode)) {
          var t = { x: e.x + e.vx, y: e.y + e.vy };
          t.x + e.radius > i.canvas.w ? (e.vx = -e.vx) : t.x - e.radius < 0 && (e.vx = -e.vx), t.y + e.radius > i.canvas.h ? (e.vy = -e.vy) : t.y - e.radius < 0 && (e.vy = -e.vy);
        }
      }
      if (i.interactivity.events.onhover.enable && isInArray('repulse', i.interactivity.events.onhover.mode) && 'mousemove' == i.interactivity.status) {
        var t = e.x - i.interactivity.mouse.pos_x,
          s = e.y - i.interactivity.mouse.pos_y,
          n = Math.sqrt(t * t + s * s),
          r = { x: t / n, y: s / n },
          c = i.interactivity.modes.repulse.distance,
          o = 100,
          l = clamp((1 / c) * (-1 * Math.pow(n / c, 2) + 1) * c * o, 0, 50),
          v = { x: e.x + r.x * l, y: e.y + r.y * l };
        'bounce' == i.particles.move.out_mode ? (v.x - e.radius > 0 && v.x + e.radius < i.canvas.w && (e.x = v.x), v.y - e.radius > 0 && v.y + e.radius < i.canvas.h && (e.y = v.y)) : ((e.x = v.x), (e.y = v.y));
      } else if (i.interactivity.events.onclick.enable && isInArray('repulse', i.interactivity.events.onclick.mode))
        if ((i.tmp.repulse_finish || (i.tmp.repulse_count++, i.tmp.repulse_count == i.particles.array.length && (i.tmp.repulse_finish = !0)), i.tmp.repulse_clicking)) {
          var c = Math.pow(i.interactivity.modes.repulse.distance / 6, 3),
            p = i.interactivity.mouse.click_pos_x - e.x,
            d = i.interactivity.mouse.click_pos_y - e.y,
            m = p * p + d * d,
            u = (-c / m) * 1;
          c >= m && a();
        } else 0 == i.tmp.repulse_clicking && ((e.vx = e.vx_i), (e.vy = e.vy_i));
    }),
    (i.fn.modes.grabParticle = function (e) {
      if (i.interactivity.events.onhover.enable && 'mousemove' == i.interactivity.status) {
        var a = e.x - i.interactivity.mouse.pos_x,
          t = e.y - i.interactivity.mouse.pos_y,
          s = Math.sqrt(a * a + t * t);
        if (s <= i.interactivity.modes.grab.distance) {
          var n = i.interactivity.modes.grab.line_linked.opacity - s / (1 / i.interactivity.modes.grab.line_linked.opacity) / i.interactivity.modes.grab.distance;
          if (n > 0) {
            var r = i.particles.line_linked.color_rgb_line;
            (i.canvas.ctx.strokeStyle = 'rgba(' + r.r + ',' + r.g + ',' + r.b + ',' + n + ')'),
              (i.canvas.ctx.lineWidth = i.particles.line_linked.width),
              i.canvas.ctx.beginPath(),
              i.canvas.ctx.moveTo(e.x, e.y),
              i.canvas.ctx.lineTo(i.interactivity.mouse.pos_x, i.interactivity.mouse.pos_y),
              i.canvas.ctx.stroke(),
              i.canvas.ctx.closePath();
          }
        }
      }
    }),
    (i.fn.vendors.eventsListeners = function () {
      'window' == i.interactivity.detect_on ? (i.interactivity.el = window) : (i.interactivity.el = i.canvas.el),
        (i.interactivity.events.onhover.enable || i.interactivity.events.onclick.enable) &&
          (i.interactivity.el.addEventListener('mousemove', function (e) {
            if (i.interactivity.el == window)
              var a = e.clientX,
                t = e.clientY;
            else
              var a = e.offsetX || e.clientX,
                t = e.offsetY || e.clientY;
            (i.interactivity.mouse.pos_x = a),
              (i.interactivity.mouse.pos_y = t),
              i.tmp.retina && ((i.interactivity.mouse.pos_x *= i.canvas.pxratio), (i.interactivity.mouse.pos_y *= i.canvas.pxratio)),
              (i.interactivity.status = 'mousemove');
          }),
          i.interactivity.el.addEventListener('mouseleave', function (e) {
            (i.interactivity.mouse.pos_x = null), (i.interactivity.mouse.pos_y = null), (i.interactivity.status = 'mouseleave');
          })),
        i.interactivity.events.onclick.enable &&
          i.interactivity.el.addEventListener('click', function () {
            if (
              ((i.interactivity.mouse.click_pos_x = i.interactivity.mouse.pos_x),
              (i.interactivity.mouse.click_pos_y = i.interactivity.mouse.pos_y),
              (i.interactivity.mouse.click_time = new Date().getTime()),
              i.interactivity.events.onclick.enable)
            )
              switch (i.interactivity.events.onclick.mode) {
                case 'push':
                  i.particles.move.enable
                    ? i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb, i.interactivity.mouse)
                    : 1 == i.interactivity.modes.push.particles_nb
                    ? i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb, i.interactivity.mouse)
                    : i.interactivity.modes.push.particles_nb > 1 && i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb);
                  break;
                case 'remove':
                  i.fn.modes.removeParticles(i.interactivity.modes.remove.particles_nb);
                  break;
                case 'bubble':
                  i.tmp.bubble_clicking = !0;
                  break;
                case 'repulse':
                  (i.tmp.repulse_clicking = !0),
                    (i.tmp.repulse_count = 0),
                    (i.tmp.repulse_finish = !1),
                    setTimeout(function () {
                      i.tmp.repulse_clicking = !1;
                    }, 1e3 * i.interactivity.modes.repulse.duration);
              }
          });
    }),
    (i.fn.vendors.densityAutoParticles = function () {
      if (i.particles.number.density.enable) {
        var e = (i.canvas.el.width * i.canvas.el.height) / 1e3;
        i.tmp.retina && (e /= 2 * i.canvas.pxratio);
        var a = (e * i.particles.number.value) / i.particles.number.density.value_area,
          t = i.particles.array.length - a;
        0 > t ? i.fn.modes.pushParticles(Math.abs(t)) : i.fn.modes.removeParticles(t);
      }
    }),
    (i.fn.vendors.checkOverlap = function (e, a) {
      for (var t = 0; t < i.particles.array.length; t++) {
        var s = i.particles.array[t],
          n = e.x - s.x,
          r = e.y - s.y,
          c = Math.sqrt(n * n + r * r);
        c <= e.radius + s.radius && ((e.x = a ? a.x : Math.random() * i.canvas.w), (e.y = a ? a.y : Math.random() * i.canvas.h), i.fn.vendors.checkOverlap(e));
      }
    }),
    (i.fn.vendors.createSvgImg = function (e) {
      var a = i.tmp.source_svg,
        t = /#([0-9A-F]{3,6})/gi,
        s = a.replace(t, function (a, t, i, s) {
          if (e.color.rgb) var n = 'rgba(' + e.color.rgb.r + ',' + e.color.rgb.g + ',' + e.color.rgb.b + ',' + e.opacity + ')';
          else var n = 'hsla(' + e.color.hsl.h + ',' + e.color.hsl.s + '%,' + e.color.hsl.l + '%,' + e.opacity + ')';
          return n;
        }),
        n = new Blob([s], { type: 'image/svg+xml;charset=utf-8' }),
        r = window.URL || window.webkitURL || window,
        c = r.createObjectURL(n),
        o = new Image();
      o.addEventListener('load', function () {
        (e.img.obj = o), (e.img.loaded = !0), r.revokeObjectURL(c), i.tmp.count_svg++;
      }),
        (o.src = c);
    }),
    (i.fn.vendors.destroypJS = function () {
      cancelAnimationFrame(i.fn.drawAnimFrame), t.remove(), (pJSDom = null);
    }),
    (i.fn.vendors.drawShape = function (e, a, t, i, s, n) {
      var r = s * n,
        c = s / n,
        o = (180 * (c - 2)) / c,
        l = Math.PI - (Math.PI * o) / 180;
      e.save(), e.beginPath(), e.translate(a, t), e.moveTo(0, 0);
      for (var v = 0; r > v; v++) e.lineTo(i, 0), e.translate(i, 0), e.rotate(l);
      e.fill(), e.restore();
    }),
    (i.fn.vendors.exportImg = function () {
      window.open(i.canvas.el.toDataURL('image/png'), '_blank');
    }),
    (i.fn.vendors.loadImg = function (e) {
      if (((i.tmp.img_error = void 0), '' != i.particles.shape.image.src))
        if ('svg' == e) {
          var a = new XMLHttpRequest();
          a.open('GET', i.particles.shape.image.src),
            (a.onreadystatechange = function (e) {
              4 == a.readyState && (200 == a.status ? ((i.tmp.source_svg = e.currentTarget.response), i.fn.vendors.checkBeforeDraw()) : (console.log('Error pJS - Image not found'), (i.tmp.img_error = !0)));
            }),
            a.send();
        } else {
          var t = new Image();
          t.addEventListener('load', function () {
            (i.tmp.img_obj = t), i.fn.vendors.checkBeforeDraw();
          }),
            (t.src = i.particles.shape.image.src);
        }
      else console.log('Error pJS - No image.src'), (i.tmp.img_error = !0);
    }),
    (i.fn.vendors.draw = function () {
      'image' == i.particles.shape.type
        ? 'svg' == i.tmp.img_type
          ? i.tmp.count_svg >= i.particles.number.value
            ? (i.fn.particlesDraw(), i.particles.move.enable ? (i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw)) : cancelRequestAnimFrame(i.fn.drawAnimFrame))
            : i.tmp.img_error || (i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw))
          : void 0 != i.tmp.img_obj
          ? (i.fn.particlesDraw(), i.particles.move.enable ? (i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw)) : cancelRequestAnimFrame(i.fn.drawAnimFrame))
          : i.tmp.img_error || (i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw))
        : (i.fn.particlesDraw(), i.particles.move.enable ? (i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw)) : cancelRequestAnimFrame(i.fn.drawAnimFrame));
    }),
    (i.fn.vendors.checkBeforeDraw = function () {
      'image' == i.particles.shape.type
        ? 'svg' == i.tmp.img_type && void 0 == i.tmp.source_svg
          ? (i.tmp.checkAnimFrame = requestAnimFrame(check))
          : (cancelRequestAnimFrame(i.tmp.checkAnimFrame), i.tmp.img_error || (i.fn.vendors.init(), i.fn.vendors.draw()))
        : (i.fn.vendors.init(), i.fn.vendors.draw());
    }),
    (i.fn.vendors.init = function () {
      i.fn.retinaInit(), i.fn.canvasInit(), i.fn.canvasSize(), i.fn.canvasPaint(), i.fn.particlesCreate(), i.fn.vendors.densityAutoParticles(), (i.particles.line_linked.color_rgb_line = hexToRgb(i.particles.line_linked.color));
    }),
    (i.fn.vendors.start = function () {
      isInArray('image', i.particles.shape.type) ? ((i.tmp.img_type = i.particles.shape.image.src.substr(i.particles.shape.image.src.length - 3)), i.fn.vendors.loadImg(i.tmp.img_type)) : i.fn.vendors.checkBeforeDraw();
    }),
    i.fn.vendors.eventsListeners(),
    i.fn.vendors.start();
};
(Object.deepExtend = function (e, a) {
  for (var t in a) a[t] && a[t].constructor && a[t].constructor === Object ? ((e[t] = e[t] || {}), arguments.callee(e[t], a[t])) : (e[t] = a[t]);
  return e;
}),
  (window.requestAnimFrame = (function () {
    return (
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (e) {
        window.setTimeout(e, 1e3 / 60);
      }
    );
  })()),
  (window.cancelRequestAnimFrame = (function () {
    return window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout;
  })()),
  (window.pJSDom = []),
  (window.particlesJS = function (e, a) {
    'string' != typeof e && ((a = e), (e = 'particles-js')), e || (e = 'particles-js');
    var t = document.getElementById(e),
      i = 'particles-js-canvas-el',
      s = t.getElementsByClassName(i);
    if (s.length) for (; s.length > 0; ) t.removeChild(s[0]);
    var n = document.createElement('canvas');
    (n.className = i), (n.style.width = '100%'), (n.style.height = '100%');
    var r = document.getElementById(e).appendChild(n);
    null != r && pJSDom.push(new pJS(e, a));
  }),
  (window.particlesJS.load = function (e, a, t) {
    var i = new XMLHttpRequest();
    i.open('GET', a),
      (i.onreadystatechange = function (a) {
        if (4 == i.readyState)
          if (200 == i.status) {
            var s = JSON.parse(a.currentTarget.response);
            window.particlesJS(e, s), t && t();
          } else console.log('Error pJS - XMLHttpRequest status: ' + i.status), console.log('Error pJS - File config not found');
      }),
      i.send();
  });

/*------------------------------------
  HT Typer
--------------------------------------*/

!(function ($) {
  'use strict';

  var Typed = function (el, options) {
    // chosen element to manipulate text
    this.el = $(el);

    // options
    this.options = $.extend({}, $.fn.typed.defaults, options);

    // text content of element
    this.baseText = this.el.text() || this.el.attr('placeholder') || '';

    // typing speed
    this.typeSpeed = this.options.typeSpeed;

    // add a delay before typing starts
    this.startDelay = this.options.startDelay;

    // backspacing speed
    this.backSpeed = this.options.backSpeed;

    // amount of time to wait before backspacing
    this.backDelay = this.options.backDelay;

    // input strings of text
    this.strings = this.options.strings;

    // character number position of current string
    this.strPos = 0;

    // current array position
    this.arrayPos = 0;

    // number to stop backspacing on.
    // default 0, can change depending on how many chars
    // you want to remove at the time
    this.stopNum = 0;

    // Looping logic
    this.loop = this.options.loop;
    this.loopCount = this.options.loopCount;
    this.curLoop = 0;

    // for stopping
    this.stop = false;

    // show cursor
    this.showCursor = this.isInput ? false : this.options.showCursor;

    // custom cursor
    this.cursorChar = this.options.cursorChar;

    // attribute to type
    this.isInput = this.el.is('input');
    this.attr = this.options.attr || (this.isInput ? 'placeholder' : null);

    // All systems go!
    this.build();
  };

  Typed.prototype = {
    constructor: Typed,

    init: function () {
      // begin the loop w/ first current string (global self.string)
      // current string will be passed as an argument each time after this
      var self = this;
      self.timeout = setTimeout(function () {
        // Start typing
        self.typewrite(self.strings[self.arrayPos], self.strPos);
      }, self.startDelay);
    },

    build: function () {
      // Insert cursor
      if (this.showCursor === true) {
        this.cursor = $('<span class="typed-cursor">' + this.cursorChar + '</span>');
        this.el.after(this.cursor);
      }
      this.init();
    },

    // pass current string state to each function, types 1 char per call
    typewrite: function (curString, curStrPos) {
      // exit when stopped
      if (this.stop === true) return;

      // varying values for setTimeout during typing
      // can't be global since number changes each time loop is executed
      var humanize = Math.round(Math.random() * (100 - 30)) + this.typeSpeed;
      var self = this;

      // contain typing function in a timeout humanize'd delay
      self.timeout = setTimeout(function () {
        // check for an escape character before a pause value
        // format: \^\d+ .. eg: ^1000 .. should be able to print the ^ too using ^^
        // single ^ are removed from string
        var charPause = 0;
        var substr = curString.substr(curStrPos);
        if (substr.charAt(0) === '^') {
          var skip = 1; // skip atleast 1
          if (/^\^\d+/.test(substr)) {
            substr = /\d+/.exec(substr)[0];
            skip += substr.length;
            charPause = parseInt(substr);
          }

          // strip out the escape character and pause value so they're not printed
          curString = curString.substring(0, curStrPos) + curString.substring(curStrPos + skip);
        }

        // timeout for any pause after a character
        self.timeout = setTimeout(function () {
          if (curStrPos === curString.length) {
            // fires callback function
            self.options.onStringTyped(self.arrayPos);

            // is this the final string
            if (self.arrayPos === self.strings.length - 1) {
              // animation that occurs on the last typed string
              self.options.callback();

              self.curLoop++;

              // quit if we wont loop back
              if (self.loop === false || self.curLoop === self.loopCount) return;
            }

            self.timeout = setTimeout(function () {
              self.backspace(curString, curStrPos);
            }, self.backDelay);
          } else {
            /* call before functions if applicable */
            if (curStrPos === 0) self.options.preStringTyped(self.arrayPos);

            // start typing each new char into existing string
            // curString: arg, self.baseText: original text inside element
            var nextString = self.baseText + curString.substr(0, curStrPos + 1);
            if (self.attr) {
              self.el.attr(self.attr, nextString);
            } else {
              self.el.text(nextString);
            }

            // add characters one by one
            curStrPos++;
            // loop the function
            self.typewrite(curString, curStrPos);
          }
          // end of character pause
        }, charPause);

        // humanized value for typing
      }, humanize);
    },

    backspace: function (curString, curStrPos) {
      // exit when stopped
      if (this.stop === true) {
        return;
      }

      // varying values for setTimeout during typing
      // can't be global since number changes each time loop is executed
      var humanize = Math.round(Math.random() * (100 - 30)) + this.backSpeed;
      var self = this;

      self.timeout = setTimeout(function () {
        // ----- continue important stuff ----- //
        // replace text with base text + typed characters
        var nextString = self.baseText + curString.substr(0, curStrPos);
        if (self.attr) {
          self.el.attr(self.attr, nextString);
        } else {
          self.el.text(nextString);
        }

        // if the number (id of character in current string) is
        // less than the stop number, keep going
        if (curStrPos > self.stopNum) {
          // subtract characters one by one
          curStrPos--;
          // loop the function
          self.backspace(curString, curStrPos);
        }
        // if the stop number has been reached, increase
        // array position to next string
        else if (curStrPos <= self.stopNum) {
          self.arrayPos++;

          if (self.arrayPos === self.strings.length) {
            self.arrayPos = 0;
            self.init();
          } else self.typewrite(self.strings[self.arrayPos], curStrPos);
        }

        // humanized value for typing
      }, humanize);
    },

    // Reset and rebuild the element
    reset: function () {
      var self = this;
      clearInterval(self.timeout);
      var id = this.el.attr('id');
      this.el.after('<span id="' + id + '"/>');
      this.el.remove();
      this.cursor.remove();
      // Send the callback
      self.options.resetCallback();
    },
  };

  $.fn.typed = function (option) {
    return this.each(function () {
      var $this = $(this),
        data = $this.data('typed'),
        options = typeof option == 'object' && option;
      if (!data) $this.data('typed', (data = new Typed(this, options)));
      if (typeof option == 'string') data[option]();
    });
  };

  $.fn.typed.defaults = {
    strings: ['These are the default values...', 'You know what you should do?', 'Use your own!', 'Have a great day!'],
    // typing speed
    typeSpeed: 0,
    // time before typing starts
    startDelay: 0,
    // backspacing speed
    backSpeed: 0,
    // time before backspacing
    backDelay: 1500,
    // loop
    loop: true,
    // false = infinite
    loopCount: false,
    // show cursor
    showCursor: true,
    // character for cursor
    cursorChar: '|',
    // attribute to type (null == text)
    attr: null,
    // call when done callback function
    callback: function () {},
    // starting callback function before each string
    preStringTyped: function () {},
    //callback for every typed string
    onStringTyped: function () {},
    // callback for reset
    resetCallback: function () {},
  };
})(window.jQuery);

$('.typer').each(function () {
  var $this = $(this);
  $this.typed({
    strings: $this.attr('data-words').split(','),
    typeSpeed: 150, // typing speed
    backDelay: 500, // pause before backspacing
  });
});
