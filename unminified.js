// WIP

// declare gapi main object
//
// var gapi = (window.gapi = window.gapi || {});
window.gapi = window.gapi || {}; // reuse gapi from window, or initialize it by assigning empty object
var gapi = windows.gapi; // link window.gapi to local variable gapi

// set to the current unix time (number, like 1588068844826)
//
// gapi._bs = new Date().getTime();
gapi.__UM__SOME_UNIX_TIME_NUMBER = new Date().getTime();

(function () {
  /*

    Copyright The Closure Library Authors.
    SPDX-License-Identifier: Apache-2.0
   */

  // wraps string in "SafeScript{...}", probably related to Closure Library
  //
  // var g = function () {
  //   this.g = "";
  // };
  // g.prototype.toString = function () {
  //   return "SafeScript{" + this.g + "}";
  // };
  // g.prototype.a = function (a) {
  //   this.g = a;
  // };
  class __UM__WRAP_STRING_IN_SAFE_SCRIPT {
    constructor() {
      this.__UM__STRING = "";
    }

    toString() {
      return `SafeScript{${this.__UM__STRING}}`;
    }

    set__UM__STRING(newValue) {
      this.__UM__STRING = newValue;
    }
  }

  // initialize __UM__WRAP_STRING_IN_SAFE_SCRIPT and set __UM__STRING to empty string
  //
  // ???(0001) why are we calling it? it doesn't seem to affect anything.
  // ???(0002) why setting __UM__STRING to "" if it is set to "" be default in constructor?
  //
  // new g().a("");
  new __UM__WRAP_STRING_IN_SAFE_SCRIPT().set__UM__STRING("");

  // wraps string in "SafeStyle{...}", same as __UM__WRAP_STRING_IN_SAFE_SCRIPT, probably inherited/implemented abstract class
  //
  // var h = function () {
  //   this.j = "";
  // };
  // h.prototype.toString = function () {
  //   return "SafeStyle{" + this.j + "}";
  // };
  // h.prototype.a = function (a) {
  //   this.j = a;
  // };
  class __UM__WRAP_STRING_IN_SAFE_STYLE {
    constructor() {
      this.__UM__STRING = "";
    }
    toString() {
      return `SafeStyle{${this.__UM__STRING}}`;
    }
    set__UM__STRING(newValue) {
      this.__UM__STRING = newValue;
    }
  }

  // initialize __UM__WRAP_STRING_IN_SAFE_SCRIPT and set __UM__STRING to empty string
  //
  // ???(0003) same as (0001)
  //
  // new h().a("");
  new __UM__WRAP_STRING_IN_SAFE_STYLE().set__UM__STRING("");

  // wraps string in "SafeStyleSheet{...}", same as __UM__WRAP_STRING_IN_SAFE_SCRIPT, probably inherited/implemented abstract class
  //
  // var m = function () {
  //   this.i = "";
  // };
  // m.prototype.toString = function () {
  //   return "SafeStyleSheet{" + this.i + "}";
  // };
  // m.prototype.a = function (a) {
  //   this.i = a;
  // };
  class __UM__WRAP_STRING_IN_SAFE_STYLE_SHEET {
    constructor() {
      this.__UM__STRING = "";
    }
    toString() {
      return `SafeStyleSheet{${this.__UM__STRING}}`;
    }
    set__UM__STRING(newValue) {
      this.__UM__STRING = newValue;
    }
  }

  // initialize __UM__WRAP_STRING_IN_SAFE_STYLE_SHEET and set __UM__STRING to empty string
  //
  // ???(0004) same as (0001)
  //
  // new m().a("");
  new __UM__WRAP_STRING_IN_SAFE_STYLE_SHEET().set__UM__STRING("");

  // wraps string in "SafeHtml{...}", same as __UM__WRAP_STRING_IN_SAFE_SCRIPT, probably inherited/implemented abstract class
  // probably related to https://google.github.io/closure-library/api/goog.html.SafeHtml.html
  //
  // var n = function () {
  //   this.f = "";
  // };
  // n.prototype.toString = function () {
  //   return "SafeHtml{" + this.f + "}";
  // };
  // n.prototype.a = function (a) {
  //   this.f = a;
  // };
  class __UM__WRAP_STRING_IN_SAFE_HTML {
    constructor() {
      this.__UM__STRING = "";
    }
    toString() {
      return `SafeHtml{${this.__UM__STRING}}`;
    }
    set__UM__STRING(newValue) {
      this.__UM__STRING = newValue;
    }
  }

  // initialize __UM__WRAP_STRING_IN_SAFE_HTML and set __UM__STRING a couple of times...
  // same as All Known Aliases: goog.html.SafeHtml.BR, goog.html.SafeHtml.DOCTYPE_HTML, goog.html.SafeHtml.EMPTY in https://google.github.io/closure-library/api/goog.html.SafeHtml.html
  //
  // ???(0005) same as (0001)
  //
  // new n().a("<!DOCTYPE html>");
  // new n().a("");
  // new n().a("<br>");
  new __UM__WRAP_STRING_IN_SAFE_HTML().set__UM__STRING("<!DOCTYPE html>");
  new __UM__WRAP_STRING_IN_SAFE_HTML().set__UM__STRING("");
  new __UM__WRAP_STRING_IN_SAFE_HTML().set__UM__STRING("<br>");

  // probably used internally for running tests? not sure. (it was commented out in original, btw)
  // /* gapi.loader.OBJECT_CREATE_TEST_OVERRIDE && */

  // initialize some variables (and make it harder to read, heh)
  //
  // var q = window,
  var __UM__WINDOW = window;
  // v = document,
  var __UM__DOCUMENT = document;
  // aa = q.location,
  var __UM__WINDOW_LOCATION = __UM__WINDOW.location;
  // ba = function () {},
  var __UM__EMPTY_FUNCTION = function () {};
  // ca = /\[native code\]/,
  var __UM__NATIVE_CODE_REGEXP = /\[native code\]/;
  // x = function (a, b, c) {
  //   return (a[b] = a[b] || c);
  // },
  var __UM__SET_OBJECT_PROP_WITH_DEFAULT_AND_RETURN_PROP_VALUE = function (
    object,
    propertyName,
    defaultValue
  ) {
    var value = object[propertyName] || defaultValue;
    object[propertyName] = value;
    return value;
  };
  // da = function (a) {
  //   a = a.sort();
  //   for (var b = [], c = void 0, d = 0; d < a.length; d++) {
  //     var e = a[d];
  //     e != c && b.push(e);
  //     c = e;
  //   }
  //   return b;
  // },
  var __UM__UNIQUE_ARRAY = function (__UM__ARRAY) {
    __UM__ARRAY = __UM__ARRAY.sort();
    var __UM__ARRAY_UNIQUE = [];
    var __UM__PREVIOUS_ELEMENT = undefined;
    __UM__ARRAY.forEach((__UM__CURRENT_ELEMENT) => {
      if (__UM__CURRENT_ELEMENT != __UM__PREVIOUS_ELEMENT) {
        __UM__ARRAY_UNIQUE.push(__UM__CURRENT_ELEMENT);
        __UM__PREVIOUS_ELEMENT = __UM__CURRENT_ELEMENT;
      }
    });
    return __UM__ARRAY_UNIQUE;
  };
  // y = function () {
  //   var a;
  //   if ((a = Object.create) && ca.test(a)) a = a(null);
  //   else {
  //     a = {};
  //     for (var b in a) a[b] = void 0;
  //   }
  //   return a;
  // },
  var __UM__OBJECT_CREATE = function () {
    var __UM__EMPTY_OBJECT;
    if (Object.create && __UM__NATIVE_CODE_REGEXP.test(Object.create)) {
      // if function exists and it is native
      __UM__EMPTY_OBJECT = Object.create(null)
    } else {
      __UM__EMPTY_OBJECT = {};
      for (var __UM__PROPERTY in __UM__EMPTY_OBJECT) {
        // reset all properties of newly created object
        __UM__EMPTY_OBJECT[__UM__PROPERTY] = undefined;
      }
    }
    return __UM__EMPTY_OBJECT;
  }

  var D = x(q, "gapi", {});
  var E;
  E = x(q, "___jsl", y());
  x(E, "I", 0);
  x(E, "hel", 10);
  var F = function () {
      var a = aa.href;
      if (E.dpo) var b = E.h;
      else {
        b = E.h;
        var c = /([#].*&|[#])jsh=([^&#]*)/g,
          d = /([?#].*&|[?#])jsh=([^&#]*)/g;
        if ((a = a && (c.exec(a) || d.exec(a))))
          try {
            b = decodeURIComponent(a[2]);
          } catch (e) {}
      }
      return b;
    },
    fa = function (a) {
      var b = x(E, "PQ", []);
      E.PQ = [];
      var c = b.length;
      if (0 === c) a();
      else
        for (
          var d = 0,
            e = function () {
              ++d === c && a();
            },
            f = 0;
          f < c;
          f++
        )
          b[f](e);
    },
    G = function (a) {
      return x(x(E, "H", y()), a, y());
    };
  var H = x(E, "perf", y()),
    K = x(H, "g", y()),
    ha = x(H, "i", y());
  x(H, "r", []);
  y();
  y();
  var L = function (a, b, c) {
      var d = H.r;
      "function" === typeof d ? d(a, b, c) : d.push([a, b, c]);
    },
    N = function (a, b, c) {
      b &&
        0 < b.length &&
        ((b = M(b)),
        c && 0 < c.length && (b += "___" + M(c)),
        28 < b.length && (b = b.substr(0, 28) + (b.length - 28)),
        (c = b),
        (b = x(ha, "_p", y())),
        (x(b, c, y())[a] = new Date().getTime()),
        L(a, "_p", c));
    },
    M = function (a) {
      return a
        .join("__")
        .replace(/\./g, "_")
        .replace(/\-/g, "_")
        .replace(/,/g, "_");
    };
  var O = y(),
    R = [],
    S = function (a) {
      throw Error("Bad hint" + (a ? ": " + a : ""));
    };
  R.push([
    "jsl",
    function (a) {
      for (var b in a)
        if (Object.prototype.hasOwnProperty.call(a, b)) {
          var c = a[b];
          "object" == typeof c ? (E[b] = x(E, b, []).concat(c)) : x(E, b, c);
        }
      if ((b = a.u))
        (a = x(E, "us", [])),
          a.push(b),
          (b = /^https:(.*)$/.exec(b)) && a.push("http:" + b[1]);
    },
  ]);
  var ia = /^(\/[a-zA-Z0-9_\-]+)+$/,
    T = [/\/amp\//, /\/amp$/, /^\/amp$/],
    ja = /^[a-zA-Z0-9\-_\.,!]+$/,
    ka = /^gapi\.loaded_[0-9]+$/,
    la = /^[a-zA-Z0-9,._-]+$/,
    pa = function (a, b, c, d) {
      var e = a.split(";"),
        f = e.shift(),
        l = O[f],
        k = null;
      l ? (k = l(e, b, c, d)) : S("no hint processor for: " + f);
      k || S("failed to generate load url");
      b = k;
      c = b.match(ma);
      ((d = b.match(na)) &&
        1 === d.length &&
        oa.test(b) &&
        c &&
        1 === c.length) ||
        S("failed sanity: " + a);
      return k;
    },
    ra = function (a, b, c, d) {
      a = qa(a);
      ka.test(c) || S("invalid_callback");
      b = U(b);
      d = d && d.length ? U(d) : null;
      var e = function (f) {
        return encodeURIComponent(f).replace(/%2C/g, ",");
      };
      return [
        encodeURIComponent(a.pathPrefix)
          .replace(/%2C/g, ",")
          .replace(/%2F/g, "/"),
        "/k=",
        e(a.version),
        "/m=",
        e(b),
        d ? "/exm=" + e(d) : "",
        "/rt=j/sv=1/d=1/ed=1",
        a.b ? "/am=" + e(a.b) : "",
        a.l ? "/rs=" + e(a.l) : "",
        a.o ? "/t=" + e(a.o) : "",
        "/cb=",
        e(c),
      ].join("");
    },
    qa = function (a) {
      "/" !== a.charAt(0) && S("relative path");
      for (var b = a.substring(1).split("/"), c = []; b.length; ) {
        a = b.shift();
        if (!a.length || 0 == a.indexOf(".")) S("empty/relative directory");
        else if (0 < a.indexOf("=")) {
          b.unshift(a);
          break;
        }
        c.push(a);
      }
      a = {};
      for (var d = 0, e = b.length; d < e; ++d) {
        var f = b[d].split("="),
          l = decodeURIComponent(f[0]),
          k = decodeURIComponent(f[1]);
        2 == f.length && l && k && (a[l] = a[l] || k);
      }
      b = "/" + c.join("/");
      ia.test(b) || S("invalid_prefix");
      c = 0;
      for (d = T.length; c < d; ++c) T[c].test(b) && S("invalid_prefix");
      c = V(a, "k", !0);
      d = V(a, "am");
      e = V(a, "rs");
      a = V(a, "t");
      return { pathPrefix: b, version: c, b: d, l: e, o: a };
    },
    U = function (a) {
      for (var b = [], c = 0, d = a.length; c < d; ++c) {
        var e = a[c].replace(/\./g, "_").replace(/-/g, "_");
        la.test(e) && b.push(e);
      }
      return b.join(",");
    },
    V = function (a, b, c) {
      a = a[b];
      !a && c && S("missing: " + b);
      if (a) {
        if (ja.test(a)) return a;
        S("invalid: " + b);
      }
      return null;
    },
    oa = /^https?:\/\/[a-z0-9_.-]+\.google(rs)?\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,
    na = /\/cb=/g,
    ma = /\/\//g,
    sa = function () {
      var a = F();
      if (!a) throw Error("Bad hint");
      return a;
    };
  O.m = function (a, b, c, d) {
    (a = a[0]) || S("missing_hint");
    return "https://apis.google.com" + ra(a, b, c, d);
  };
  var W = decodeURI("%73cript"),
    X = /^[-+_0-9\/A-Za-z]+={0,2}$/,
    Y = function (a, b) {
      for (var c = [], d = 0; d < a.length; ++d) {
        var e = a[d],
          f;
        if ((f = e)) {
          a: {
            for (f = 0; f < b.length; f++) if (b[f] === e) break a;
            f = -1;
          }
          f = 0 > f;
        }
        f && c.push(e);
      }
      return c;
    },
    Z = function () {
      var a = E.nonce;
      return void 0 !== a
        ? a && a === String(a) && a.match(X)
          ? a
          : (E.nonce = null)
        : v.querySelector
        ? (a = v.querySelector("script[nonce]"))
          ? ((a = a.nonce || a.getAttribute("nonce") || ""),
            a && a === String(a) && a.match(X)
              ? (E.nonce = a)
              : (E.nonce = null))
          : null
        : null;
    },
    ua = function (a) {
      if ("loading" != v.readyState) ta(a);
      else {
        var b = Z(),
          c = "";
        null !== b && (c = ' nonce="' + b + '"');
        a = "<" + W + ' src="' + encodeURI(a) + '"' + c + "></" + W + ">";
        v.write(a);
      }
    },
    ta = function (a) {
      var b = v.createElement(W);
      b.setAttribute("src", a);
      a = Z();
      null !== a && b.setAttribute("nonce", a);
      b.async = "true";
      (a = v.getElementsByTagName(W)[0])
        ? a.parentNode.insertBefore(b, a)
        : (v.head || v.body || v.documentElement).appendChild(b);
    },
    va = function (a, b) {
      var c = b && b._c;
      if (c)
        for (var d = 0; d < R.length; d++) {
          var e = R[d][0],
            f = R[d][1];
          f && Object.prototype.hasOwnProperty.call(c, e) && f(c[e], a, b);
        }
    },
    xa = function (a, b, c) {
      wa(function () {
        var d = b === F() ? x(D, "_", y()) : y();
        d = x(G(b), "_", d);
        a(d);
      }, c);
    },
    za = function (a, b) {
      var c = b || {};
      "function" == typeof b && ((c = {}), (c.callback = b));
      va(a, c);
      b = a ? a.split(":") : [];
      var d = c.h || sa(),
        e = x(E, "ah", y());
      if (e["::"] && b.length) {
        a = [];
        for (var f = null; (f = b.shift()); ) {
          var l = f.split(".");
          l = e[f] || e[(l[1] && "ns:" + l[0]) || ""] || d;
          var k = (a.length && a[a.length - 1]) || null,
            w = k;
          (k && k.hint == l) || ((w = { hint: l, c: [] }), a.push(w));
          w.c.push(f);
        }
        var z = a.length;
        if (1 < z) {
          var A = c.callback;
          A &&
            (c.callback = function () {
              0 == --z && A();
            });
        }
        for (; (b = a.shift()); ) ya(b.c, c, b.hint);
      } else ya(b || [], c, d);
    },
    ya = function (a, b, c) {
      a = da(a) || [];
      var d = b.callback,
        e = b.config,
        f = b.timeout,
        l = b.ontimeout,
        k = b.onerror,
        w = void 0;
      "function" == typeof k && (w = k);
      var z = null,
        A = !1;
      if ((f && !l) || (!f && l))
        throw "Timeout requires both the timeout parameter and ontimeout parameter to be set";
      k = x(G(c), "r", []).sort();
      var P = x(G(c), "L", []).sort(),
        I = [].concat(k),
        ea = function (u, B) {
          if (A) return 0;
          q.clearTimeout(z);
          P.push.apply(P, p);
          var C = ((D || {}).config || {}).update;
          C ? C(e) : e && x(E, "cu", []).push(e);
          if (B) {
            N("me0", u, I);
            try {
              xa(B, c, w);
            } finally {
              N("me1", u, I);
            }
          }
          return 1;
        };
      0 < f &&
        (z = q.setTimeout(function () {
          A = !0;
          l();
        }, f));
      var p = Y(a, P);
      if (p.length) {
        p = Y(a, k);
        var r = x(E, "CP", []),
          t = r.length;
        r[t] = function (u) {
          if (!u) return 0;
          N("ml1", p, I);
          var B = function (J) {
              r[t] = null;
              ea(p, u) &&
                fa(function () {
                  d && d();
                  J();
                });
            },
            C = function () {
              var J = r[t + 1];
              J && J();
            };
          0 < t && r[t - 1]
            ? (r[t] = function () {
                B(C);
              })
            : B(C);
        };
        if (p.length) {
          var Q = "loaded_" + E.I++;
          D[Q] = function (u) {
            r[t](u);
            D[Q] = null;
          };
          a = pa(c, p, "gapi." + Q, k);
          k.push.apply(k, p);
          N("ml0", p, I);
          b.sync || q.___gapisync ? ua(a) : ta(a);
        } else r[t](ba);
      } else ea(p) && d && d();
    };
  var wa = function (a, b) {
    if (E.hee && 0 < E.hel)
      try {
        return a();
      } catch (c) {
        b && b(c),
          E.hel--,
          za("debug_error", function () {
            try {
              window.___jsl.hefn(c);
            } catch (d) {
              throw c;
            }
          });
      }
    else
      try {
        return a();
      } catch (c) {
        throw (b && b(c), c);
      }
  };
  D.load = function (a, b) {
    return wa(function () {
      return za(a, b);
    });
  };
  K.bs0 = window.gapi._bs || new Date().getTime();
  L("bs0");
  K.bs1 = new Date().getTime();
  L("bs1");
  delete window.gapi._bs;
}.call(this));
gapi.load("", {
  callback: window["gapi_onload"],
  _c: {
    jsl: {
      ci: {
        deviceType: "desktop",
        "oauth-flow": {
          authUrl: "https://accounts.google.com/o/oauth2/auth",
          proxyUrl: "https://accounts.google.com/o/oauth2/postmessageRelay",
          disableOpt: true,
          idpIframeUrl: "https://accounts.google.com/o/oauth2/iframe",
          usegapi: false,
        },
        debug: {
          reportExceptionRate: 0.05,
          forceIm: false,
          rethrowException: false,
          host: "https://apis.google.com",
        },
        enableMultilogin: true,
        "googleapis.config": { auth: { useFirstPartyAuthV2: true } },
        isPlusUser: true,
        inline: { css: 1 },
        disableRealtimeCallback: false,
        drive_share: { skipInitCommand: true },
        csi: { rate: 0.01 },
        client: { cors: false },
        isLoggedIn: true,
        signInDeprecation: { rate: 0.0 },
        include_granted_scopes: true,
        llang: "en",
        iframes: {
          youtube: {
            params: { location: ["search", "hash"] },
            url:
              ":socialhost:/:session_prefix:_/widget/render/youtube?usegapi\u003d1",
            methods: ["scroll", "openwindow"],
          },
          ytsubscribe: {
            url: "https://www.youtube.com/subscribe_embed?usegapi\u003d1",
          },
          plus_circle: {
            params: { url: "" },
            url:
              ":socialhost:/:session_prefix::se:_/widget/plus/circle?usegapi\u003d1",
          },
          plus_share: {
            params: { url: "" },
            url:
              ":socialhost:/:session_prefix::se:_/+1/sharebutton?plusShare\u003dtrue\u0026usegapi\u003d1",
          },
          rbr_s: {
            params: { url: "" },
            url:
              ":socialhost:/:session_prefix::se:_/widget/render/recobarsimplescroller",
          },
          ":source:": "3p",
          playemm: {
            url:
              "https://play.google.com/work/embedded/search?usegapi\u003d1\u0026usegapi\u003d1",
          },
          savetoandroidpay: { url: "https://pay.google.com/gp/v/widget/save" },
          blogger: {
            params: { location: ["search", "hash"] },
            url:
              ":socialhost:/:session_prefix:_/widget/render/blogger?usegapi\u003d1",
            methods: ["scroll", "openwindow"],
          },
          evwidget: {
            params: { url: "" },
            url: ":socialhost:/:session_prefix:_/events/widget?usegapi\u003d1",
          },
          partnersbadge: {
            url:
              "https://www.gstatic.com/partners/badge/templates/badge.html?usegapi\u003d1",
          },
          dataconnector: {
            url:
              "https://dataconnector.corp.google.com/:session_prefix:ui/widgetview?usegapi\u003d1",
          },
          surveyoptin: {
            url:
              "https://www.google.com/shopping/customerreviews/optin?usegapi\u003d1",
          },
          ":socialhost:": "https://apis.google.com",
          shortlists: { url: "" },
          hangout: {
            url:
              "https://talkgadget.google.com/:session_prefix:talkgadget/_/widget",
          },
          plus_followers: {
            params: { url: "" },
            url:
              ":socialhost:/_/im/_/widget/render/plus/followers?usegapi\u003d1",
          },
          post: {
            params: { url: "" },
            url:
              ":socialhost:/:session_prefix::im_prefix:_/widget/render/post?usegapi\u003d1",
          },
          ":gplus_url:": "https://plus.google.com",
          signin: {
            params: { url: "" },
            url:
              ":socialhost:/:session_prefix:_/widget/render/signin?usegapi\u003d1",
            methods: ["onauth"],
          },
          rbr_i: {
            params: { url: "" },
            url:
              ":socialhost:/:session_prefix::se:_/widget/render/recobarinvitation",
          },
          donation: {
            url:
              "https://onetoday.google.com/home/donationWidget?usegapi\u003d1",
          },
          share: {
            url:
              ":socialhost:/:session_prefix::im_prefix:_/widget/render/share?usegapi\u003d1",
          },
          plusone: {
            params: { count: "", size: "", url: "" },
            url:
              ":socialhost:/:session_prefix::se:_/+1/fastbutton?usegapi\u003d1",
          },
          comments: {
            params: { location: ["search", "hash"] },
            url:
              ":socialhost:/:session_prefix:_/widget/render/comments?usegapi\u003d1",
            methods: ["scroll", "openwindow"],
          },
          ":im_socialhost:": "https://plus.googleapis.com",
          backdrop: {
            url:
              "https://clients3.google.com/cast/chromecast/home/widget/backdrop?usegapi\u003d1",
          },
          visibility: {
            params: { url: "" },
            url:
              ":socialhost:/:session_prefix:_/widget/render/visibility?usegapi\u003d1",
          },
          autocomplete: {
            params: { url: "" },
            url: ":socialhost:/:session_prefix:_/widget/render/autocomplete",
          },
          additnow: {
            url: "https://apis.google.com/marketplace/button?usegapi\u003d1",
            methods: ["launchurl"],
          },
          ":signuphost:": "https://plus.google.com",
          ratingbadge: {
            url:
              "https://www.google.com/shopping/customerreviews/badge?usegapi\u003d1",
          },
          appcirclepicker: {
            url: ":socialhost:/:session_prefix:_/widget/render/appcirclepicker",
          },
          follow: {
            url:
              ":socialhost:/:session_prefix:_/widget/render/follow?usegapi\u003d1",
          },
          community: {
            url:
              ":ctx_socialhost:/:session_prefix::im_prefix:_/widget/render/community?usegapi\u003d1",
          },
          sharetoclassroom: {
            url:
              "https://www.gstatic.com/classroom/sharewidget/widget_stable.html?usegapi\u003d1",
          },
          ytshare: {
            params: { url: "" },
            url:
              ":socialhost:/:session_prefix:_/widget/render/ytshare?usegapi\u003d1",
          },
          plus: {
            url:
              ":socialhost:/:session_prefix:_/widget/render/badge?usegapi\u003d1",
          },
          family_creation: {
            params: { url: "" },
            url:
              "https://families.google.com/webcreation?usegapi\u003d1\u0026usegapi\u003d1",
          },
          commentcount: {
            url:
              ":socialhost:/:session_prefix:_/widget/render/commentcount?usegapi\u003d1",
          },
          configurator: {
            url:
              ":socialhost:/:session_prefix:_/plusbuttonconfigurator?usegapi\u003d1",
          },
          zoomableimage: { url: "https://ssl.gstatic.com/microscope/embed/" },
          appfinder: {
            url:
              "https://gsuite.google.com/:session_prefix:marketplace/appfinder?usegapi\u003d1",
          },
          savetowallet: { url: "https://pay.google.com/gp/v/widget/save" },
          person: {
            url:
              ":socialhost:/:session_prefix:_/widget/render/person?usegapi\u003d1",
          },
          savetodrive: {
            url: "https://drive.google.com/savetodrivebutton?usegapi\u003d1",
            methods: ["save"],
          },
          page: {
            url:
              ":socialhost:/:session_prefix:_/widget/render/page?usegapi\u003d1",
          },
          card: { url: ":socialhost:/:session_prefix:_/hovercard/card" },
        },
      },
      h:
        "m;/_/scs/apps-static/_/js/k\u003doz.gapi.en.jw7XZHvcak8.O/am\u003dwQE/d\u003d1/ct\u003dzgms/rs\u003dAGLTcCOXtLG11kt9d673FzpjO_GiLUGIQA/m\u003d__features__",
      u: "https://apis.google.com/js/api.js",
      hee: true,
      fp: "3062b5bb7f024cab7e33463197a0fb6966f3cf84",
      dpo: false,
    },
    fp: "3062b5bb7f024cab7e33463197a0fb6966f3cf84",
    annotation: [
      "interactivepost",
      "recobar",
      "signin2",
      "autocomplete",
      "profile",
    ],
    bimodal: ["signin", "share"],
  },
});
