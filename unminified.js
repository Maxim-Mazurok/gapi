// WIP

// declare gapi main object
//
// var gapi = (window.gapi = window.gapi || {});
window.gapi = window.gapi || {}; // reuse gapi from window, or initialize it by assigning empty object
var gapi = window.gapi; // link window.gapi to local variable gapi

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
      __UM__EMPTY_OBJECT = Object.create(null);
    } else {
      __UM__EMPTY_OBJECT = {};
      for (var __UM__PROPERTY in __UM__EMPTY_OBJECT) {
        // reset all properties of newly created object
        __UM__EMPTY_OBJECT[__UM__PROPERTY] = undefined;
      }
    }
    return __UM__EMPTY_OBJECT;
  };
  // D = x(q, "gapi", {});
  var __UM__GAPI = __UM__SET_OBJECT_PROP_WITH_DEFAULT_AND_RETURN_PROP_VALUE(
    __UM__WINDOW,
    "gapi",
    {}
  );

  // var E;
  // E = x(q, "___jsl", y());
  // x(E, "I", 0);
  // x(E, "hel", 10);
  // var __UM__SOME_VARIABLE;
  // initialize window.___jsl as {}
  __UM__JSL = __UM__SET_OBJECT_PROP_WITH_DEFAULT_AND_RETURN_PROP_VALUE(
    __UM__WINDOW,
    "___jsl",
    __UM__OBJECT_CREATE()
  );
  __UM__SET_OBJECT_PROP_WITH_DEFAULT_AND_RETURN_PROP_VALUE(__UM__JSL, "I", 0);
  __UM__SET_OBJECT_PROP_WITH_DEFAULT_AND_RETURN_PROP_VALUE(
    __UM__JSL,
    "hel",
    10
  );
  // now window.___jsl = {"I": 0, "hel": 10}
  // known properties:
  //    "I" (int),
  //    "hel" (int),
  //    "dpo",
  //    "h" (string?),
  //    "H" (object of objects),
  //    "PQ" (array of functions that accept callback)
  //    "perf" (object)
  //      known props:
  //        "g" (object)
  //        "i" (object)
  //          known props:
  //            "_p" (object)
  //        "r" (array (of arrays) by default, or function)
  //    "us" (array)

  // get JSH value either from window.___jsl.h or from url #jsh=value or ?jsh=value (supports #some=val&jsh=test or ?some=val&jsh=value)
  //
  // var F = function () {
  //   var a = aa.href;
  //   if (E.dpo) var b = E.h;
  //   else {
  //     b = E.h;
  //     var c = /([#].*&|[#])jsh=([^&#]*)/g,
  //       d = /([?#].*&|[?#])jsh=([^&#]*)/g;
  //     if ((a = a && (c.exec(a) || d.exec(a))))
  //       try {
  //         b = decodeURIComponent(a[2]);
  //       } catch (e) {}
  //   }
  //   return b;
  // };
  var __UM__GET_JSH_VALUE = function () {
    var __UM__WINDOW_LOCATION_HREF = __UM__WINDOW_LOCATION.href;

    if (__UM__JSL.dpo) {
      var __UM__JSH_VALUE = __UM__JSL.h;
    } else {
      __UM__JSH_VALUE = __UM__JSL.h;

      var __UM__JSH_FROM_URL_HASH_ONLY_REGEXP = /([#].*&|[#])jsh=([^&#]*)/g;
      var __UM__JSH_FROM_URL_HASH_OR_QUERY_REGEXP = /([?#].*&|[?#])jsh=([^&#]*)/g;

      if (__UM__WINDOW_LOCATION_HREF) {
        var hashOnlyMatch = __UM__JSH_FROM_URL_HASH_ONLY_REGEXP.exec(
          __UM__WINDOW_LOCATION_HREF
        );
        var hashOrQueryMatch = __UM__JSH_FROM_URL_HASH_OR_QUERY_REGEXP.exec(
          __UM__WINDOW_LOCATION_HREF
        );

        var match = hashOnlyMatch || hashOrQueryMatch;

        if (match) {
          try {
            __UM__JSH_VALUE = decodeURIComponent(match[2]); // ...#jsh=thisWillBeValue
          } catch (e) {}
        }
      }
    }
    return __UM__JSH_VALUE;
  };

  // get array of functions from PQ, call them and call callback once all finished (PQ = Promise Queue?)
  //
  // var fa = function (a) {
  //   var b = x(E, "PQ", []);
  //   E.PQ = [];
  //   var c = b.length;
  //   if (0 === c) a();
  //   else
  //     for (
  //       var d = 0,
  //         e = function () {
  //           ++d === c && a();
  //         },
  //         f = 0;
  //       f < c;
  //       f++
  //     )
  //       b[f](e);
  // };
  var __UM__ASYNC_QUEUE = function (__UM__CALLBACK) {
    var __UM__JSL_PQ_ARRAY = __UM__SET_OBJECT_PROP_WITH_DEFAULT_AND_RETURN_PROP_VALUE(
      __UM__JSL,
      "PQ",
      []
    );
    __UM__JSL["PQ"] = [];
    var __UM__PQ_LENGTH = __UM__JSL_PQ_ARRAY.length;
    if (__UM__PQ_LENGTH === 0) {
      __UM__CALLBACK();
    } else {
      var __UM__SOME_COUNTER = 0;
      var __UM__CALL_CALLBACK_WHEN_ALL_SETTLED = function () {
        __UM__SOME_COUNTER += 1;
        console.log({ __UM__SOME_COUNTER });
        if (__UM__SOME_COUNTER === __UM__PQ_LENGTH) {
          __UM__CALLBACK();
        }
      };
      for (__UM__INDEX = 0; __UM__INDEX < __UM__PQ_LENGTH; __UM__INDEX++) {
        __UM__JSL_PQ_ARRAY[__UM__INDEX](__UM__CALL_CALLBACK_WHEN_ALL_SETTLED);
      }
    }
  };

  // get or initialize and get property (window.___jsl.H['PROPERTY']), empty object by default
  //
  // var G = function (a) {
  //   return x(x(E, "H", y()), a, y());
  // };
  var __UM__INIT_AND_GET_JSL_H_PROP = function (__UM__H_PROPERTY_NAME) {
    var JSL_H = __UM__SET_OBJECT_PROP_WITH_DEFAULT_AND_RETURN_PROP_VALUE(
      __UM__JSL,
      "H",
      __UM__OBJECT_CREATE()
    );
    return __UM__SET_OBJECT_PROP_WITH_DEFAULT_AND_RETURN_PROP_VALUE(
      JSL_H,
      __UM__H_PROPERTY_NAME,
      __UM__OBJECT_CREATE()
    );
  };

  // get or init and get window.___jsl.perf, empty object by default
  //
  // var H = x(E, "perf", y());
  var __UM__JSL_PERF = __UM__SET_OBJECT_PROP_WITH_DEFAULT_AND_RETURN_PROP_VALUE(
    __UM__JSL,
    "perf",
    __UM__OBJECT_CREATE()
  );

  // get or init and get window.___jsl.perf.g, empty object by default
  //
  // var K = x(H, "g", y());
  var __UM__JSL_PERF_g = __UM__SET_OBJECT_PROP_WITH_DEFAULT_AND_RETURN_PROP_VALUE(
    __UM__JSL_PERF,
    "g",
    __UM__OBJECT_CREATE()
  );

  // get or init and get window.___jsl.perf.i, empty object by default
  //
  // var ha = x(H, "i", y());
  var __UM__JSL_PERF_i = __UM__SET_OBJECT_PROP_WITH_DEFAULT_AND_RETURN_PROP_VALUE(
    __UM__JSL_PERF,
    "i",
    __UM__OBJECT_CREATE()
  );

  // init window.___jsl.perf.r, empty array by default
  //
  // x(H, "r", []);
  __UM__SET_OBJECT_PROP_WITH_DEFAULT_AND_RETURN_PROP_VALUE(
    __UM__JSL_PERF,
    "r",
    []
  );

  // ???(0006) doesn't seem to affect anything, probably very smart performance hack
  //
  // y();
  // y();
  __UM__OBJECT_CREATE();
  __UM__OBJECT_CREATE();

  // if window.___jsl.perf.r is array - push array of args,
  // if it's function - call it with args
  // probably, each arg is replaceable with ...args
  //
  // var L = function (a, b, c) {
  //   var d = H.r;
  //   "function" === typeof d ? d(a, b, c) : d.push([a, b, c]);
  // };
  var __UM__PUSH_TO_OR_CALL_JSL_PERF_r = function (
    __UM__ARG_1,
    __UM__ARG_2,
    __UM__ARG_3
  ) {
    var __UM__JSL_PERF_r = __UM__JSL_PERF["r"];
    if (typeof __UM__JSL_PERF_r === "function") {
      __UM__JSL_PERF_r(__UM__ARG_1, __UM__ARG_2, __UM__ARG_3);
    } else {
      // array
      __UM__JSL_PERF_r.push([__UM__ARG_1, __UM__ARG_2, __UM__ARG_3]);
    }
  };

  // record performance?
  //
  // var N = function (a, b, c) {
  //   b &&
  //     0 < b.length &&
  //     (
  //       (b = M(b)),
  //       c && 0 < c.length && (b += "___" + M(c)),
  //       28 < b.length && (b = b.substr(0, 28) + (b.length - 28)),
  //       (c = b),
  //       (b = x(ha, "_p", y())),
  //       (x(b, c, y())[a] = new Date().getTime()),
  //       L(a, "_p", c)
  //     );
  // };
  var __UM__RECORD_PERF = function (
    __UM__JSL_PERF_i__p_shortArr1And3Value_PROP_NAME,
    __UM__ARRAY_1,
    __UM__ARRAY_2
  ) {
    if (__UM__ARRAY_1 && __UM__ARRAY_1.length > 0) {
      // arr1 = stringify(arr1)
      __UM__ARRAY_1 = __UM__ARRAY_TO_STRING(__UM__ARRAY_1);

      if (__UM__ARRAY_2 && __UM__ARRAY_2.length > 0) {
        // arr1 = stringify(arr1) + ___ + stringify(arr2)
        __UM__ARRAY_1 += "___" + __UM__ARRAY_TO_STRING(__UM__ARRAY_2);
      }

      if (__UM__ARRAY_1.length > 28) {
        // ???(0007) magic number 28?
        // arr1 = arr1{0..28} + (arr1.length - 28)
        // arr1 = first 28 chars + number of other chars
        __UM__ARRAY_1 =
          __UM__ARRAY_1.substr(0, 28) + (__UM__ARRAY_1.length - 28);
      }

      // stringify(arr1){0..28} + (arr1.length - 28) [ + ___ + stringify(arr2)]?
      // __UM__ARRAY_2 = __UM__ARRAY_1; // reusing arr2 is not readable
      var shortArr1And3Value = __UM__ARRAY_1;

      // window.___jsl.perf.i._p or {}
      // __UM__ARRAY_1 = ... // reusing arr1 is not readable
      var JSL_PERF_i__p = __UM__SET_OBJECT_PROP_WITH_DEFAULT_AND_RETURN_PROP_VALUE(
        __UM__JSL_PERF_i,
        "_p",
        __UM__OBJECT_CREATE()
      );

      // set window.___jsl.perf.i._p[shortArr1And3Value][PROP_NAME] to current UNIX time (number)
      __UM__SET_OBJECT_PROP_WITH_DEFAULT_AND_RETURN_PROP_VALUE(
        JSL_PERF_i__p, // window.___jsl.perf.i._p or {} --- (__UM__ARRAY_1)
        shortArr1And3Value, // stringify(arr1){0..28} + (arr1.length - 28) [ + ___ + stringify(arr2)]? --- (__UM__ARRAY_2)
        __UM__OBJECT_CREATE()
      )[
        __UM__JSL_PERF_i__p_shortArr1And3Value_PROP_NAME
      ] = new Date().getTime();

      // record some activity?
      __UM__PUSH_TO_OR_CALL_JSL_PERF_r(
        __UM__JSL_PERF_i__p_shortArr1And3Value_PROP_NAME,
        "_p",
        shortArr1And3Value // --- (__UM__ARRAY_2)
      );
    }
  };

  // join array with __ and replace all ".", "-" and "," with "_"
  // probably for use in URL, or something
  //
  // var M = function (a) {
  //   return a
  //     .join("__")
  //     .replace(/\./g, "_")
  //     .replace(/\-/g, "_")
  //     .replace(/,/g, "_");
  // };
  var __UM__ARRAY_TO_STRING = function (__UM__ARRAY) {
    return __UM__ARRAY
      .join("__")
      .replace(/\./g, "_")
      .replace(/\-/g, "_")
      .replace(/,/g, "_");
  };

  // ???(0008) - it's OK, it's being used lated in tht code
  // var O = y();
  var __UM__SOME_EMPTY_OBJECT = __UM__OBJECT_CREATE();

  // ???(0009)
  // var R = [];
  var __UM__SOME_ARRAY = [];

  // var S = function (a) {
  //   throw Error("Bad hint" + (a ? ": " + a : ""));
  // };
  var __UM__THROW_BAD_HINT_ERROR = function (__UM__MESSAGE) {
    var errorString = "Bad hint";
    if (__UM__MESSAGE) {
      errorString += `: ${__UM__MESSAGE}`;
    }
    throw Error(errorString);
  };

  // ???(0010) what is is this all about?...
  // R.push([
  //   "jsl",
  //   function (a) {
  //     for (var b in a)
  //       if (Object.prototype.hasOwnProperty.call(a, b)) {
  //         var c = a[b];
  //         "object" == typeof c ? (E[b] = x(E, b, []).concat(c)) : x(E, b, c);
  //       }
  //     if ((b = a.u))
  //       (a = x(E, "us", [])),
  //         a.push(b),
  //         (b = /^https:(.*)$/.exec(b)) && a.push("http:" + b[1]);
  //   },
  // ]);
  __UM__SOME_ARRAY.push([
    "jsl",
    function (__UM__SOME_OBJ) {
      for (var __UM__OBJ_PROP in __UM__SOME_OBJ) {
        if (__UM__SOME_OBJ.hasOwnProperty(__UM__OBJ_PROP)) {
          var __UM__VALUE = __UM__SOME_OBJ[__UM__OBJ_PROP];
          if (typeof __UM__VALUE === "object") {
            __UM__JSL[
              __UM__OBJ_PROP
            ] = __UM__SET_OBJECT_PROP_WITH_DEFAULT_AND_RETURN_PROP_VALUE(
              __UM__JSL,
              __UM__OBJ_PROP,
              __UM__VALUE
            ).concat(__UM__VALUE);
          } else {
            __UM__SET_OBJECT_PROP_WITH_DEFAULT_AND_RETURN_PROP_VALUE(
              __UM__JSL,
              __UM__OBJ_PROP,
              __UM__VALUE
            );
          }
        }
      }
      var __UM__SOME_OBJ_u = __UM__SOME_OBJ["u"]; // --- (__UM__OBJ_PROP)
      if (__UM__SOME_OBJ_u) {
        var __UM__JSL_us = __UM__SET_OBJECT_PROP_WITH_DEFAULT_AND_RETURN_PROP_VALUE(
          __UM__JSL,
          "us",
          []
        );
        __UM__JSL_us.push(__UM__SOME_OBJ_u);
        var __UM__URL_WITHOUT_HTTPS = /^https:(.*)$/.exec(__UM__SOME_OBJ_u); // --- (__UM__SOME_OBJ_u)
        if (__UM__URL_WITHOUT_HTTPS) {
          __UM__JSL_us.push("http:" + __UM__URL_WITHOUT_HTTPS[1]);
        }
      }
    },
  ]);

  // var ia = /^(\/[a-zA-Z0-9_\-]+)+$/;
  var __UM__URL_PARTS_REGEXP = /^(\/[a-zA-Z0-9_\-]+)+$/; // ??? maybe not URL parts. Like /test-1/test_2/test
  // var T = [/\/amp\//, /\/amp$/, /^\/amp$/];
  var __UM__AMP_REGEXPS = [/\/amp\//, /\/amp$/, /^\/amp$/];
  // var ja = /^[a-zA-Z0-9\-_\.,!]+$/;
  var __UM__AZ_09_PUNCTUATION_REGEXP = /^[a-zA-Z0-9\-_\.,!]+$/; // ??? why escape minus and dot ?
  // var ka = /^gapi\.loaded_[0-9]+$/;
  var __UM__GAPI_LOADED_REGEXP = /^gapi\.loaded_[0-9]+$/;
  // var la = /^[a-zA-Z0-9,._-]+$/;
  var __UM__AZ_09_PUNCTUATION_WITHOUT_BANG_REGEXP = /^[a-zA-Z0-9,._-]+$/;

  // generates some "load url", checks it and returns it or throws error
  //
  // var pa = function (a, b, c, d) {
  //   var e = a.split(";"),
  //     f = e.shift(),
  //     l = O[f],
  //     k = null;
  //   l ? (k = l(e, b, c, d)) : S("no hint processor for: " + f);
  //   k || S("failed to generate load url");
  //   b = k;
  //   c = b.match(ma);
  //   ((d = b.match(na)) &&
  //     1 === d.length &&
  //     oa.test(b) &&
  //     c &&
  //     1 === c.length) ||
  //     S("failed sanity: " + a);
  //   return k;
  // };
  var __UM__GENERATE_LOAD_URL = function (
    __UM__ARG_1, // string
    __UM__ARG_2,
    __UM__ARG_3,
    __UM__ARG_4
  ) {
    var __UM__ARG_1_AS_ARRAY = __UM__ARG_1.split(";");
    var __UM__ARG_1_AS_ARRAY_FIRST = __UM__ARG_1_AS_ARRAY.shift();
    var __UM__GENERATE_LOAD_URL = // hint processor
      __UM__SOME_EMPTY_OBJECT[__UM__ARG_1_AS_ARRAY_FIRST];
    var __UM__LOAD_URL = null;
    if (__UM__GENERATE_LOAD_URL) {
      __UM__LOAD_URL = __UM__GENERATE_LOAD_URL(
        __UM__ARG_1_AS_ARRAY,
        __UM__ARG_2,
        __UM__ARG_3,
        __UM__ARG_4
      );
    } else {
      __UM__THROW_BAD_HINT_ERROR(
        "no hint processor for: " + __UM__ARG_1_AS_ARRAY_FIRST
      );
    }
    if (!__UM__LOAD_URL) {
      __UM__THROW_BAD_HINT_ERROR("failed to generate load url");
    }
    var __UM__LOAD_URL_COPY = __UM__LOAD_URL; // ??? why copy it if it's not be modified later?
    var __UM__DOUBLE_SLASHES_MATCHES = __UM__LOAD_URL_COPY.match(
      __UM__DOUBLE_SLASH_REGEXP
    );
    var __UM__SLASH_CB_EQUAL_MATCHES = __UM__LOAD_URL_COPY.match(
      __UM__SLASH_CB_EQUAL_REGEXP
    );
    if (
      __UM__SLASH_CB_EQUAL_MATCHES &&
      __UM__SLASH_CB_EQUAL_MATCHES.length === 1 && // only one "/cb="
      __UM__GOOGLE_URL_REGEXP.test(__UM__LOAD_URL_COPY) && // is google.com URL (without query string)
      __UM__DOUBLE_SLASHES_MATCHES &&
      __UM__DOUBLE_SLASHES_MATCHES.length === 1 // only one "//"
    ) {
      // all good
    } else {
      __UM__THROW_BAD_HINT_ERROR("failed sanity: " + __UM__ARG_1);
    }
    return __UM__LOAD_URL;
  };

  // generates path based on some arguments
  //
  // var ra = function (a, b, c, d) {
  //   a = qa(a);
  //   ka.test(c) || S("invalid_callback");
  //   b = U(b);
  //   d = d && d.length ? U(d) : null;
  //   var e = function (f) {
  //     return encodeURIComponent(f).replace(/%2C/g, ",");
  //   };
  //   return [
  //     encodeURIComponent(a.pathPrefix)
  //       .replace(/%2C/g, ",")
  //       .replace(/%2F/g, "/"),
  //     "/k=",
  //     e(a.version),
  //     "/m=",
  //     e(b),
  //     d ? "/exm=" + e(d) : "",
  //     "/rt=j/sv=1/d=1/ed=1",
  //     a.b ? "/am=" + e(a.b) : "",
  //     a.l ? "/rs=" + e(a.l) : "",
  //     a.o ? "/t=" + e(a.o) : "",
  //     "/cb=",
  //     e(c),
  //   ].join("");
  // };
  var __UM__GENERATE_PATH = function (
    __UM__PATH,
    __UM__ARRAY_1,
    __UM__CALLBACK, // string?
    __UM__ARRAY_2 // optional
  ) {
    var __UM__PARSED_PATH = __UM__PARSE_PATH(__UM__PATH); // --- (__UM__PATH)

    if (!__UM__GAPI_LOADED_REGEXP.test(__UM__ARG_3)) {
      __UM__THROW_BAD_HINT_ERROR("invalid_callback");
    }

    var __UM__CLEANED_STRING_1 = __UM__CLEAN_ARRAY_OF_STRINGS_AND_STRINGIFY(
      __UM__ARRAY_1
    ); // --- (__UM__ARRAY)

    var __UM__CLEANED_STRING_2 = null; // --- (__UM__ARRAY_2)
    if (__UM__ARRAY_2 && __UM__ARRAY_2.length) {
      __UM__CLEANED_STRING_2 = __UM__CLEAN_ARRAY_OF_STRINGS_AND_STRINGIFY(
        __UM__ARRAY_2
      );
    }

    var __UM__URL_ENCODE_EXCEPT_COMMA = function (__UM__STRING) {
      return encodeURIComponent(__UM__STRING).replace(/%2C/g, ",");
    };

    return [
      encodeURIComponent(__UM__PARSED_PATH.pathPrefix)
        .replace(/%2C/g, ",")
        .replace(/%2F/g, "/"),

      "/k=",
      __UM__URL_ENCODE_EXCEPT_COMMA(__UM__PARSED_PATH.version),

      "/m=",
      __UM__URL_ENCODE_EXCEPT_COMMA(__UM__CLEANED_STRING_1),

      __UM__CLEANED_STRING_2
        ? "/exm" + __UM__URL_ENCODE_EXCEPT_COMMA(__UM__CLEANED_STRING_2)
        : "",

      "/rt=j/sv=1/d=1/ed=1",

      __UM__PARSED_PATH.b
        ? "/am=" + __UM__URL_ENCODE_EXCEPT_COMMA(__UM__PARSED_PATH.b)
        : "",

      __UM__PARSED_PATH.l
        ? "/rs=" + __UM__URL_ENCODE_EXCEPT_COMMA(__UM__PARSED_PATH.l)
        : "",

      __UM__PARSED_PATH.o
        ? "/t=" + __UM__URL_ENCODE_EXCEPT_COMMA(__UM__PARSED_PATH.o)
        : "",

      "/cb=",
      __UM__URL_ENCODE_EXCEPT_COMMA(__UM__CALLBACK),
    ].join("");
  };

  // parses path/url
  // returns path before props, and some props
  //
  // var qa = function (a) {
  //   "/" !== a.charAt(0) && S("relative path");
  //   for (var b = a.substring(1).split("/"), c = []; b.length; ) {
  //     a = b.shift();
  //     if (!a.length || 0 == a.indexOf(".")) S("empty/relative directory");
  //     else if (0 < a.indexOf("=")) {
  //       b.unshift(a);
  //       break;
  //     }
  //     c.push(a);
  //   }
  //   a = {};
  //   for (var d = 0, e = b.length; d < e; ++d) {
  //     var f = b[d].split("="),
  //       l = decodeURIComponent(f[0]),
  //       k = decodeURIComponent(f[1]);
  //     2 == f.length && l && k && (a[l] = a[l] || k);
  //   }
  //   b = "/" + c.join("/");
  //   ia.test(b) || S("invalid_prefix");
  //   c = 0;
  //   for (d = T.length; c < d; ++c) T[c].test(b) && S("invalid_prefix");
  //   c = V(a, "k", !0);
  //   d = V(a, "am");
  //   e = V(a, "rs");
  //   a = V(a, "t");
  //   return { pathPrefix: b, version: c, b: d, l: e, o: a };
  // };
  var __UM__PARSE_PATH = function (__UM__ABSOLUTE_PATH) {
    if (__UM__ABSOLUTE_PATH.charAt(0) !== "/") {
      __UM__THROW_BAD_HINT_ERROR("relative path");
    }
    var __UM__PATH_PARTS = __UM__ABSOLUTE_PATH.substring(1).split("/");
    var __UM__SOME_PATH_PARTS = [];

    for (; __UM__PATH_PARTS.length; ) {
      // basically, while __UM__PATH_PARTS.length > 0
      var __UM__PATH_PART = __UM__PATH_PARTS.shift(); // get and remove first element
      if (
        !__UM__PATH_PART.length || // empty path part, i.e. "//"
        __UM__PATH_PART.indexOf(".") === 0 // starts with "." (relative directory)
      ) {
        __UM__THROW_BAD_HINT_ERROR("empty/relative directory");
      } else if (__UM__PATH_PART.indexOf("=") > 0) {
        // contains assignment, like "/cb=something"
        __UM__PATH_PARTS.unshift(__UM__PATH_PART); // prepend
        break; // exit from "for" loop
      }
      __UM__SOME_PATH_PARTS.push(__UM__PATH_PART);
    }

    // at this point, __UM__SOME_PATH_PARTS contains all parts before "/some=some/"
    // and __UM__PATH_PARTS contains all other parts, including "/some=some/"

    var __UM__KEY_VALUE_OBJ = {}; // --- (__UM__ABSOLUTE_PATH)
    // known props (all string):
    //  k - required - version
    //  am - optional
    //  rs - optional
    //  t - optional

    for (
      var __UM__INDEX = 0;
      __UM__INDEX < __UM__PATH_PARTS.length;
      __UM__INDEX++
    ) {
      var __UM__KEY_VALUE_ARRAY = __UM__PATH_PARTS[__UM__INDEX].split("=");
      var __UM__KEY = decodeURIComponent(__UM__KEY_VALUE_ARRAY[0]);
      var __UM__VALUE = decodeURIComponent(__UM__KEY_VALUE_ARRAY[1]);
      if (__UM__KEY_VALUE_ARRAY.length === 2 && __UM__KEY && __UM__VALUE) {
        __UM__KEY_VALUE_OBJ[__UM__KEY] =
          __UM__KEY_VALUE_OBJ[__UM__KEY] || __UM__VALUE; // prefer first key value, don't override
      }
    }

    var __UM__PATH_PREFIX = "/" + __UM__SOME_PATH_PARTS.join("/"); // --- (__UM__PATH_PARTS)

    if (!__UM__URL_PARTS_REGEXP.test(__UM__PATH_PREFIX)) {
      __UM__THROW_BAD_HINT_ERROR("invalid_prefix");
    }

    __UM__AMP_REGEXPS.forEach(function (__UM__AMP_REGEXP) {
      if (!__UM__AMP_REGEXP.test(__UM__PATH_PREFIX)) {
        __UM__THROW_BAD_HINT_ERROR("invalid_prefix");
      }
    });

    var __UM__PARAM_k = __UM__VERIFY_AND_GET_OBJECT_PROPERTY(
      __UM__KEY_VALUE_OBJ,
      "k",
      true
    );
    var __UM__PARAM_am = __UM__VERIFY_AND_GET_OBJECT_PROPERTY(
      __UM__KEY_VALUE_OBJ,
      "am"
    );
    var __UM__PARAM_rs = __UM__VERIFY_AND_GET_OBJECT_PROPERTY(
      __UM__KEY_VALUE_OBJ,
      "rs"
    );
    var __UM__PARAM_t = __UM__VERIFY_AND_GET_OBJECT_PROPERTY(
      __UM__KEY_VALUE_OBJ,
      "t"
    );

    return {
      pathPrefix: __UM__PATH_PREFIX,
      version: __UM__PARAM_k,
      b: __UM__PARAM_am,
      l: __UM__PARAM_rs,
      o: __UM__PARAM_t,
    };
  };

  // replaces "." and "-" to "_" in strings in array,
  // removes strings with weird chars
  // and joins array in string using ","
  //
  // var U = function (a) {
  //   for (var b = [], c = 0, d = a.length; c < d; ++c) {
  //     var e = a[c].replace(/\./g, "_").replace(/-/g, "_");
  //     la.test(e) && b.push(e);
  //   }
  //   return b.join(",");
  // };
  var __UM__CLEAN_ARRAY_OF_STRINGS_AND_STRINGIFY = function (
    __UM__ARRAY_OF_STRINGS
  ) {
    var __UM__ARRAY_OF_STRINGS_CLEANED = [];
    var __UM__ARRAY_OF_STRINGS_LENGTH = __UM__ARRAY_OF_STRINGS.length;
    for (
      var __UM__INDEX = 0;
      __UM__INDEX < __UM__ARRAY_OF_STRINGS_LENGTH;
      __UM__INDEX++
    ) {
      var __UM__STRING_CLEANED = __UM__ARRAY_OF_STRINGS[__UM__INDEX]
        .replace(/\./g, "_")
        .replace(/-/g, "_");
      if (
        __UM__AZ_09_PUNCTUATION_WITHOUT_BANG_REGEXP.test(__UM__STRING_CLEANED)
      ) {
        __UM__ARRAY_OF_STRINGS_CLEANED.push(__UM__STRING_CLEANED);
      }
    }
    return __UM__ARRAY_OF_STRINGS_CLEANED.join(",");
  };

  // checks that prop exists on obj, (or it's optional) and value matches regexp
  //
  // var V = function (a, b, c) {
  //   a = a[b];
  //   !a && c && S("missing: " + b);
  //   if (a) {
  //     if (ja.test(a)) return a;
  //     S("invalid: " + b);
  //   }
  //   return null;
  // };
  var __UM__VERIFY_AND_GET_OBJECT_PROPERTY = function (
    __UM__OBJ,
    __UM__OBJ_PROPERTY,
    __UM__REQUIRED_FLAG
  ) {
    var __UM__VALUE = __UM__OBJ[__UM__OBJ_PROPERTY]; // --- (__UM__OBJ)
    if (!__UM__VALUE && __UM__REQUIRED_FLAG) {
      __UM__THROW_BAD_HINT_ERROR("missing: " + __UM__OBJ_PROPERTY);
    }
    if (__UM__VALUE) {
      if (__UM__AZ_09_PUNCTUATION_REGEXP.test(__UM__VALUE)) {
        return __UM__VALUE;
      }
      __UM__THROW_BAD_HINT_ERROR("invalid: " + __UM__OBJ_PROPERTY);
    }
    return null;
  };

  // *.google.com/* URL (doesn't match with query "?" string and "#" hash)
  // var oa = /^https?:\/\/[a-z0-9_.-]+\.google(rs)?\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/;
  var __UM__GOOGLE_URL_REGEXP = /^https?:\/\/[a-z0-9_.-]+\.google(rs)?\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/;

  // var na = /\/cb=/g;
  var __UM__SLASH_CB_EQUAL_REGEXP = /\/cb=/g;

  // var ma = /\/\//g;
  var __UM__DOUBLE_SLASH_REGEXP = /\/\//g;

  // get jsh value, otherwise - throw error
  //
  // var sa = function () {
  //   var a = F();
  //   if (!a) throw Error("Bad hint");
  //   return a;
  // };
  var __UM__GET_JSH_VALUE_OR_THROW = function () {
    var __UM__JSH_VALUE = __UM__GET_JSH_VALUE();
    if (!__UM__JSH_VALUE) {
      throw Error("Bad hint");
    }
    return __UM__JSH_VALUE;
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
