console.log(new Date());

const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { getProxySettings } = require("get-proxy-settings");
const virtualConsole = new jsdom.VirtualConsole();

virtualConsole.sendTo(console);

(async () => {
  const proxy = await getProxySettings();
  const bestProxy = proxy.https || proxy.http || undefined;

  const resourceLoader = new jsdom.ResourceLoader({
    ...(bestProxy ? { proxy: bestProxy.toString() } : {}),
    strictSSL: false,
  });

  const dom = new JSDOM(`<!DOCTYPE html><body><p>Hello world</p></body>`, {
    runScripts: "dangerously",
    resources: resourceLoader,
    virtualConsole,
  });
  dom.window.JSON.safeStringify = (obj, indent = 2) => {
    let cache = [];
    const retVal = JSON.stringify(
      obj,
      (key, value) => {
        if (value && value.self == dom.window) return "__UM__WINDOW";
        return typeof value === "object" && value !== null
          ? cache.includes(value)
            ? undefined // Duplicate reference found, discard key
            : cache.push(value) && value // Store value in our collection
          : value;
      },
      indent
    );
    cache = null;
    return retVal;
  };
  const script = dom.window.document.createElement("script");
  script.src = "https://apis.google.com/js/api.js";
  script.setAttribute(
    "onload",
    `window.gapi.load("client:auth2", () => {
    console.log(JSON.safeStringify(window.gapi));
    // console.log(new Date());
  });`
  );
  dom.window.document.body.appendChild(script);

//   let x;
//   const waitForGapi = () => {
//     x = setTimeout(() => {
//       if (Object.prototype.hasOwnProperty.call(dom.window, "gapi")) {
//         console.log("Found gapi!", dom.window.gapi);
//         clearTimeout(x);
//         dom.window.gapi.load("client:auth2", () => {
//           //   console.log(dom.window.gapi);
//           console.log(new Date());
//         });
//       } else {
//         console.log("No gapi yet....");
//         waitForGapi();
//       }
//     }, 100);
//   };

//   waitForGapi();
})();
