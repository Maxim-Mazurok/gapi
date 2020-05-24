const start = new Date().getTime();

const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch(/*{ headless: false, devtools: true }*/);
  const page = (await browser.pages())[0];
  //   await page.goto('data:,');
  const { gapi, date } = await page.evaluate(() => {
    return new Promise((resolve) => {
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
      window.resolveP = resolve;
      const script = window.document.createElement("script");
      script.src = "https://apis.google.com/js/api.js";
      script.setAttribute(
        "onload",
        `window.gapi.load("client:auth2", () => {
          //   console.log(window.gapi);
          console.log(new Date());
          const date = new Date().getTime();
          window.resolveP({gapi: JSON.safeStringify(gapi), date});
        });`
      );
      window.document.body.appendChild(script);
    });
  });
  console.log(date - start);
  //   console.log({ gapi, date });
  console.log(gapi);

  await browser.close();
})();
