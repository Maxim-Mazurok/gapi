console.log(new Date());

const { Builder, By, Key, until } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");

const screen = {
  width: 640,
  height: 480,
};

(async () => {
  let driver = await new Builder()
    .forBrowser("chrome")
    .setChromeOptions(
      new chrome.Options().headless().windowSize(screen)
      // .addArguments("--auto-open-devtools-for-tabs")
    )
    .build();
  try {
    let gapi = await driver.executeAsyncScript(() => {
      JSON.safeStringify = (obj, indent = 2) => {
        let cache = [];
        const retVal = JSON.stringify(
          obj,
          (key, value) => {
            if (value && value.self == window) return "__UM__WINDOW";
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
      window.callback = arguments[arguments.length - 1];
      const script = document.createElement("script");
      script.src = "https://apis.google.com/js/api.js";
      script.setAttribute(
        "onload",
        `gapi.load("client:auth2", () => window.callback(JSON.safeStringify(window.gapi)))`
      );
      document.body.appendChild(script);
    });
    console.log(gapi);
  } catch (e) {
    console.log(e);
  } finally {
    await driver.quit();
    console.log(new Date());
  }
})();
