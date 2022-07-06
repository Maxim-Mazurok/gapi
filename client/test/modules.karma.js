const addedKeys = [];

const getNewKeys = (keysBeforeLoad, keysAfterLoad) => {
  return keysAfterLoad.filter((x) => !keysBeforeLoad.includes(x));
};

const nonDefaultGapiClientKeys = () => {
  const defaultKeys = [
    "init",
    "load",
    "newBatch",
    "newRpcBatch",
    "newHttpBatch",
    "register",
    "request",
    "rpcRequest",
    "setApiKey",
    "setApiVersions",
    "getToken",
    "setToken",
    "AuthType",
  ];
  const keys = Object.keys(gapi.client);
  const nonDefaultKeys = keys.filter((key) => !defaultKeys.includes(key));
  return nonDefaultKeys;
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
  await gapiClientLoad("tasks", "v1");
  const keysAfterLoad = Object.keys(gapi.client);

  // Assert
  expect(getNewKeys(keysBeforeLoad, keysAfterLoad)).toEqual(["tasks"]);
});

it("sheets API adds sheets key", async () => {
  // Act
  const keysBeforeLoad = Object.keys(gapi.client);
  await gapiClientLoad("sheets", "v4");
  const keysAfterLoad = Object.keys(gapi.client);

  // Assert
  expect(getNewKeys(keysBeforeLoad, keysAfterLoad)).toEqual(["sheets"]);
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
  expect(getNewKeys(keysBeforeLoad, keysAfterLoad).sort()).toEqual([
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
