const getNewKeys = (keysBeforeLoad, keysAfterLoad) => {
  return keysAfterLoad.filter((x) => !keysBeforeLoad.includes(x)).sort();
};

const loadGapi = async () => {
  await loadApiJS();
  await loadGapiClient();
};

const loadGapiClient = () => {
  return new Promise((resolve) => {
    gapi.load("client", resolve);
  });
};

const loadApiJS = () => {
  return new Promise((resolve) => {
    document.querySelectorAll("script").forEach((x) => x.remove());
    document.querySelectorAll("iframe").forEach((x) => x.remove());
    const script = document.createElement("script");
    script.onload = resolve;
    script.src = "https://apis.google.com/js/api.js";
    document.head.appendChild(script);
  });
};

const gapiClientLoad = (nameOrObject, version) =>
  new Promise((resolve) => {
    gapi.client.load(nameOrObject, version, () => {
      resolve();
    });
  });

beforeAll(async () => {
  await loadGapi();
});

it("tasks API adds tasks key", async () => {
  // Act
  const keysBeforeLoad = Object.keys(gapi.client);
  await new Promise((resolve) => {
    gapi.client
      .load("https://tasks.googleapis.com/$discovery/rest?version=v1")
      .then(() => {
        // .then() test
        resolve();
      });
  });
  const keysAfterLoad = Object.keys(gapi.client);

  // Assert
  expect(getNewKeys(keysBeforeLoad, keysAfterLoad)).toEqual(["tasks"]);
});

it("sheets API adds sheets key", async () => {
  // Act
  const keysBeforeLoad = Object.keys(gapi.client);
  await gapiClientLoad("sheets", "v4");
  await gapi.client.load(
    // await test
    "https://sheets.googleapis.com/$discovery/rest?version=v4"
  );
  const keysAfterLoad = Object.keys(gapi.client);

  // Assert
  expect(getNewKeys(keysBeforeLoad, keysAfterLoad)).toEqual(["sheets"]);
});

it("gapi.client.load.catch test", async () => {
  try {
    await new Promise((resolve, reject) => {
      gapi.client
        .load("https://tasks.googleapis.com/$discovery/rest?version=v99")
        .then(() => {
          resolve();
        })
        .catch((e) => reject(e));
    });
    expect(false).toBe(true);
  } catch (e) {
    expect(e).toEqual({
      error: Object({
        code: 404,
        message:
          "Discovery document not found for API service: tasks.googleapis.com format: rest version: v99",
        status: "NOT_FOUND",
      }),
    });
  }
});

it("gapi.client.load await try-catch test", async () => {
  try {
    await gapi.client.load(
      "https://tasks.googleapis.com/$discovery/rest?version=v99"
    );
    expect(false).toBe(true);
  } catch (e) {
    expect(e).toEqual({
      error: Object({
        code: 404,
        message:
          "Discovery document not found for API service: tasks.googleapis.com format: rest version: v99",
        status: "NOT_FOUND",
      }),
    });
  }
});

it("directory API adds two keys", async () => {
  // Act
  const keysBeforeLoad = Object.keys(gapi.client);
  await gapiClientLoad("admin", "directory_v1");
  const keysAfterLoad = Object.keys(gapi.client);

  // Assert
  expect(getNewKeys(keysBeforeLoad, keysAfterLoad)).toEqual([
    "admin",
    "directory",
  ]);
});

it("fake API adds two keys based on method ids", async () => {
  // Act
  const keysBeforeLoad = Object.keys(gapi.client);
  await gapiClientLoad({
    name: "some-name",
    methods: {
      firstMethod: {
        httpMethod: "GET",
        path: "some/path/1",
        id: "firstNamespace.firstMethod", // << this controls the key being added
      },
      secondMethod: {
        httpMethod: "GET",
        path: "some/path/2",
        id: "secondNamespace.secondMethod", // << and this as well
      },
    },
  });
  const keysAfterLoad = Object.keys(gapi.client);

  // Assert
  expect(getNewKeys(keysBeforeLoad, keysAfterLoad)).toEqual([
    "firstNamespace",
    "secondNamespace",
  ]);
});

it("fake API adds resources based on ID as opposed to the resource name/key", async () => {
  // Act
  await gapiClientLoad({
    name: "some-name",
    resources: {
      firstResource: {
        methods: {
          firstMethod: {
            httpMethod: "GET",
            path: "some/path/1",
            id: "thirdNamespace.firstMethod",
          },
        },
      },
    },
  });

  // Assert
  expect(
    Object.prototype.hasOwnProperty.call(gapi.client, "thirdNamespace")
  ).toBe(true);
  expect(
    Object.prototype.hasOwnProperty.call(gapi.client, "firstResource")
  ).toBe(false);
});

describe("drive API by URL", () => {
  let keysBeforeLoad;
  beforeAll(async () => {
    keysBeforeLoad = Object.keys(gapi.client);
    await gapiClientLoad(
      "https://www.googleapis.com/discovery/v1/apis/drive/v3/rest" // from https://discovery.googleapis.com/discovery/v1/apis
    );
  });

  it("adds drive key", async () => {
    // Act
    const keysAfterLoad = Object.keys(gapi.client);

    // Assert
    expect(getNewKeys(keysBeforeLoad, keysAfterLoad)).toEqual(["drive"]);
  });

  it("adds top-level resources", async () => {
    // Assert
    expect(Object.keys(gapi.client.drive).sort()).toEqual(
      [
        "about",
        "changes",
        "channels",
        "comments",
        "drives",
        "files",
        "permissions",
        "replies",
        "revisions",
        "teamdrives",
        "BJ", // something weird, always present, something internal most likely
      ].sort()
    );
  });
});
