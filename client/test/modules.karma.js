const addedKeys = [];

const newKeys = (keysBeforeLoad, keysAfterLoad) => {
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
    gapi.load("client", () => {
      console.log("client loaded");
      resolve();
    });
  });
};

const loadApiJS = () => {
  return new Promise((resolve) => {
    document.querySelectorAll("script").forEach((x) => x.remove());
    document.querySelectorAll("iframe").forEach((x) => x.remove());
    const script = document.createElement("script");
    script.onload = () => {
      console.log("api onload");
      resolve();
    };
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

describe("A suite is just a function", function () {
  beforeAll(async () => {
    await loadGapi();
  });

  xit("tasks API adds tasks key", async () => {
    // Act
    const keysBeforeLoad = Object.keys(gapi.client);
    await gapiClientLoad("tasks", "v1");
    const keysAfterLoad = Object.keys(gapi.client);

    // Assert
    expect(newKeys(keysBeforeLoad, keysAfterLoad)).toEqual(["tasks"]);
  });

  xit("sheets API adds sheets key", async () => {
    // Act
    const keysBeforeLoad = Object.keys(gapi.client);
    await gapiClientLoad("sheets", "v4");
    const keysAfterLoad = Object.keys(gapi.client);

    // Assert
    expect(newKeys(keysBeforeLoad, keysAfterLoad)).toEqual(["sheets"]);
  });

  it("sheets API adds sheets key", async () => {
    // Act
    const keysBeforeLoad = Object.keys(gapi.client);
    await gapiClientLoad({
      servicePath: "",
      packagePath: "admin",
      protocol: "rest",
      documentationLink: "https://developers.google.com/admin-sdk/",
      id: "admin:directory_v1",
      name: "admin",
      resources: {
        users: {
          resources: {
            aliases: {
              methods: {
                insert: {
                  httpMethod: "POST",
                  scopes: [
                    "https://www.googleapis.com/auth/admin.directory.user",
                    "https://www.googleapis.com/auth/admin.directory.user.alias",
                  ],
                  flatPath: "admin/directory/v1/users/{userKey}/aliases",
                  id: "directory.users.aliases.insert",
                  description: "Adds an alias.",
                  response: {
                    $ref: "Alias",
                  },
                  parameters: {
                    userKey: {
                      description:
                        "Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.",
                      type: "string",
                      required: true,
                      location: "path",
                    },
                  },
                  path: "admin/directory/v1/users/{userKey}/aliases",
                  parameterOrder: ["userKey"],
                  request: {
                    $ref: "Alias",
                  },
                },
                watch: {
                  id: "directory.users.aliases.watch",
                  request: {
                    $ref: "Channel",
                  },
                  parameters: {
                    event: {
                      enum: ["add", "delete"],
                      enumDescriptions: [
                        "Alias Created Event",
                        "Alias Deleted Event",
                      ],
                      type: "string",
                      description: "Events to watch for.",
                      location: "query",
                    },
                    userKey: {
                      location: "path",
                      type: "string",
                      required: true,
                      description: "Email or immutable ID of the user",
                    },
                  },
                  httpMethod: "POST",
                  path: "admin/directory/v1/users/{userKey}/aliases/watch",
                  scopes: [
                    "https://www.googleapis.com/auth/admin.directory.user",
                    "https://www.googleapis.com/auth/admin.directory.user.alias",
                    "https://www.googleapis.com/auth/admin.directory.user.alias.readonly",
                    "https://www.googleapis.com/auth/admin.directory.user.readonly",
                  ],
                  response: {
                    $ref: "Channel",
                  },
                  description: "Watches for changes in users list.",
                  flatPath: "admin/directory/v1/users/{userKey}/aliases/watch",
                  parameterOrder: ["userKey"],
                },
                delete: {
                  id: "directory.users.aliases.delete",
                  parameterOrder: ["userKey", "alias"],
                  httpMethod: "DELETE",
                  path: "admin/directory/v1/users/{userKey}/aliases/{alias}",
                  parameters: {
                    userKey: {
                      location: "path",
                      description:
                        "Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.",
                      required: true,
                      type: "string",
                    },
                    alias: {
                      location: "path",
                      type: "string",
                      description: "The alias to be removed.",
                      required: true,
                    },
                  },
                  flatPath:
                    "admin/directory/v1/users/{userKey}/aliases/{alias}",
                  description: "Removes an alias.",
                  scopes: [
                    "https://www.googleapis.com/auth/admin.directory.user",
                    "https://www.googleapis.com/auth/admin.directory.user.alias",
                  ],
                },
                list: {
                  scopes: [
                    "https://www.googleapis.com/auth/admin.directory.user",
                    "https://www.googleapis.com/auth/admin.directory.user.alias",
                    "https://www.googleapis.com/auth/admin.directory.user.alias.readonly",
                    "https://www.googleapis.com/auth/admin.directory.user.readonly",
                  ],
                  flatPath: "admin/directory/v1/users/{userKey}/aliases",
                  description: "Lists all aliases for a user.",
                  httpMethod: "GET",
                  path: "admin/directory/v1/users/{userKey}/aliases",
                  parameters: {
                    event: {
                      type: "string",
                      description: "Events to watch for.",
                      enumDescriptions: [
                        "Alias Created Event",
                        "Alias Deleted Event",
                      ],
                      enum: ["add", "delete"],
                      location: "query",
                    },
                    userKey: {
                      description:
                        "Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.",
                      location: "path",
                      type: "string",
                      required: true,
                    },
                  },
                  response: {
                    $ref: "Aliases",
                  },
                  id: "directory.users.aliases.list",
                  parameterOrder: ["userKey"],
                },
              },
            },
            photos: {
              methods: {
                patch: {
                  scopes: [
                    "https://www.googleapis.com/auth/admin.directory.user",
                  ],
                  parameterOrder: ["userKey"],
                  flatPath:
                    "admin/directory/v1/users/{userKey}/photos/thumbnail",
                  parameters: {
                    userKey: {
                      required: true,
                      type: "string",
                      description:
                        "Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.",
                      location: "path",
                    },
                  },
                  httpMethod: "PATCH",
                  id: "directory.users.photos.patch",
                  response: {
                    $ref: "UserPhoto",
                  },
                  request: {
                    $ref: "UserPhoto",
                  },
                  description:
                    "Adds a photo for the user. This method supports [patch semantics](/admin-sdk/directory/v1/guides/performance#patch).",
                  path: "admin/directory/v1/users/{userKey}/photos/thumbnail",
                },
                delete: {
                  httpMethod: "DELETE",
                  parameterOrder: ["userKey"],
                  scopes: [
                    "https://www.googleapis.com/auth/admin.directory.user",
                  ],
                  parameters: {
                    userKey: {
                      required: true,
                      type: "string",
                      description:
                        "Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.",
                      location: "path",
                    },
                  },
                  description: "Removes the user's photo.",
                  path: "admin/directory/v1/users/{userKey}/photos/thumbnail",
                  id: "directory.users.photos.delete",
                  flatPath:
                    "admin/directory/v1/users/{userKey}/photos/thumbnail",
                },
                get: {
                  path: "admin/directory/v1/users/{userKey}/photos/thumbnail",
                  httpMethod: "GET",
                  description: "Retrieves the user's photo.",
                  id: "directory.users.photos.get",
                  flatPath:
                    "admin/directory/v1/users/{userKey}/photos/thumbnail",
                  response: {
                    $ref: "UserPhoto",
                  },
                  parameterOrder: ["userKey"],
                  parameters: {
                    userKey: {
                      required: true,
                      location: "path",
                      description:
                        "Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.",
                      type: "string",
                    },
                  },
                  scopes: [
                    "https://www.googleapis.com/auth/admin.directory.user",
                    "https://www.googleapis.com/auth/admin.directory.user.readonly",
                  ],
                },
                update: {
                  description: "Adds a photo for the user.",
                  flatPath:
                    "admin/directory/v1/users/{userKey}/photos/thumbnail",
                  scopes: [
                    "https://www.googleapis.com/auth/admin.directory.user",
                  ],
                  parameters: {
                    userKey: {
                      location: "path",
                      description:
                        "Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.",
                      type: "string",
                      required: true,
                    },
                  },
                  parameterOrder: ["userKey"],
                  id: "directory.users.photos.update",
                  path: "admin/directory/v1/users/{userKey}/photos/thumbnail",
                  request: {
                    $ref: "UserPhoto",
                  },
                  httpMethod: "PUT",
                  response: {
                    $ref: "UserPhoto",
                  },
                },
              },
            },
          },
          methods: {
            undelete: {
              description: "Undeletes a deleted user.",
              flatPath: "admin/directory/v1/users/{userKey}/undelete",
              request: {
                $ref: "UserUndelete",
              },
              parameterOrder: ["userKey"],
              parameters: {
                userKey: {
                  description: "The immutable id of the user",
                  location: "path",
                  required: true,
                  type: "string",
                },
              },
              httpMethod: "POST",
              scopes: ["https://www.googleapis.com/auth/admin.directory.user"],
              id: "directory.users.undelete",
              path: "admin/directory/v1/users/{userKey}/undelete",
            },
            signOut: {
              path: "admin/directory/v1/users/{userKey}/signOut",
              scopes: [
                "https://www.googleapis.com/auth/admin.directory.user.security",
              ],
              parameters: {
                userKey: {
                  location: "path",
                  description:
                    "Identifies the target user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.",
                  required: true,
                  type: "string",
                },
              },
              parameterOrder: ["userKey"],
              httpMethod: "POST",
              flatPath: "admin/directory/v1/users/{userKey}/signOut",
              id: "directory.users.signOut",
              description:
                "Signs a user out of all web and device sessions and reset their sign-in cookies. User will have to sign in by authenticating again.",
            },
            makeAdmin: {
              parameters: {
                userKey: {
                  description:
                    "Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.",
                  required: true,
                  location: "path",
                  type: "string",
                },
              },
              description: "Makes a user a super administrator.",
              flatPath: "admin/directory/v1/users/{userKey}/makeAdmin",
              scopes: ["https://www.googleapis.com/auth/admin.directory.user"],
              id: "directory.users.makeAdmin",
              request: {
                $ref: "UserMakeAdmin",
              },
              path: "admin/directory/v1/users/{userKey}/makeAdmin",
              parameterOrder: ["userKey"],
              httpMethod: "POST",
            },
            watch: {
              id: "directory.users.watch",
              response: {
                $ref: "Channel",
              },
              parameterOrder: [],
              description: "Watches for changes in users list.",
              httpMethod: "POST",
              parameters: {
                event: {
                  description: "Events to watch for.",
                  enum: ["add", "delete", "makeAdmin", "undelete", "update"],
                  location: "query",
                  type: "string",
                  enumDescriptions: [
                    "User Created Event",
                    "User Deleted Event",
                    "User Admin Status Change Event",
                    "User Undeleted Event",
                    "User Updated Event",
                  ],
                },
                pageToken: {
                  location: "query",
                  description: "Token to specify next page in the list",
                  type: "string",
                },
                projection: {
                  description: "What subset of fields to fetch for this user.",
                  default: "basic",
                  type: "string",
                  enum: ["basic", "custom", "full"],
                  location: "query",
                  enumDescriptions: [
                    "Do not include any custom fields for the user.",
                    "Include custom fields from schemas mentioned in customFieldMask.",
                    "Include all fields associated with this user.",
                  ],
                },
                orderBy: {
                  enum: ["email", "familyName", "givenName"],
                  enumDescriptions: [
                    "Primary email of the user.",
                    "User's family name.",
                    "User's given name.",
                  ],
                  description: "Column to use for sorting results",
                  type: "string",
                  location: "query",
                },
                domain: {
                  description:
                    'Name of the domain. Fill this field to get users from only this domain. To return all users in a multi-domain fill customer field instead."',
                  type: "string",
                  location: "query",
                },
                customFieldMask: {
                  description:
                    "Comma-separated list of schema names. All fields from these schemas are fetched. This should only be set when projection=custom.",
                  type: "string",
                  location: "query",
                },
                customer: {
                  type: "string",
                  description:
                    "Immutable ID of the Google Workspace account. In case of multi-domain, to fetch all users for a customer, fill this field instead of domain.",
                  location: "query",
                },
                viewType: {
                  description:
                    "Whether to fetch the administrator-only or domain-wide public view of the user. For more information, see [Retrieve a user as a non-administrator](/admin-sdk/directory/v1/guides/manage-users#retrieve_users_non_admin).",
                  enumDescriptions: [
                    "Results include both administrator-only and domain-public fields.",
                    "Results only include fields for the user that are publicly visible to other users in the domain.",
                  ],
                  default: "admin_view",
                  type: "string",
                  enum: ["admin_view", "domain_public"],
                  location: "query",
                },
                query: {
                  location: "query",
                  description:
                    'Query string search. Should be of the form "". Complete documentation is at https: //developers.google.com/admin-sdk/directory/v1/guides/search-users',
                  type: "string",
                },
                maxResults: {
                  format: "int32",
                  maximum: "500",
                  default: "100",
                  description: "Maximum number of results to return.",
                  type: "integer",
                  location: "query",
                  minimum: "1",
                },
                showDeleted: {
                  location: "query",
                  description:
                    "If set to true, retrieves the list of deleted users. (Default: false)",
                  type: "string",
                },
                sortOrder: {
                  enumDescriptions: ["Ascending order.", "Descending order."],
                  description:
                    "Whether to return results in ascending or descending order.",
                  enum: ["ASCENDING", "DESCENDING"],
                  type: "string",
                  location: "query",
                },
              },
              flatPath: "admin/directory/v1/users/watch",
              scopes: [
                "https://www.googleapis.com/auth/admin.directory.user",
                "https://www.googleapis.com/auth/admin.directory.user.readonly",
                "https://www.googleapis.com/auth/cloud-platform",
              ],
              path: "admin/directory/v1/users/watch",
              request: {
                $ref: "Channel",
              },
            },
            list: {
              description:
                "Retrieves a paginated list of either deleted users or all users in a domain.",
              path: "admin/directory/v1/users",
              parameters: {
                domain: {
                  type: "string",
                  description:
                    "The domain name. Use this field to get groups from only one domain. To return all domains for a customer account, use the `customer` query parameter instead. Either the `customer` or the `domain` parameter must be provided.",
                  location: "query",
                },
                customFieldMask: {
                  description:
                    "A comma-separated list of schema names. All fields from these schemas are fetched. This should only be set when `projection=custom`.",
                  type: "string",
                  location: "query",
                },
                pageToken: {
                  type: "string",
                  location: "query",
                  description: "Token to specify next page in the list",
                },
                sortOrder: {
                  location: "query",
                  enumDescriptions: ["Ascending order.", "Descending order."],
                  description:
                    "Whether to return results in ascending or descending order, ignoring case.",
                  type: "string",
                  enum: ["ASCENDING", "DESCENDING"],
                },
                event: {
                  description:
                    "Event on which subscription is intended (if subscribing)",
                  type: "string",
                  enum: ["add", "delete", "makeAdmin", "undelete", "update"],
                  enumDescriptions: [
                    "User Created Event",
                    "User Deleted Event",
                    "User Admin Status Change Event",
                    "User Undeleted Event",
                    "User Updated Event",
                  ],
                  location: "query",
                },
                projection: {
                  type: "string",
                  enumDescriptions: [
                    "Do not include any custom fields for the user.",
                    "Include custom fields from schemas requested in `customFieldMask`.",
                    "Include all fields associated with this user.",
                  ],
                  location: "query",
                  enum: ["basic", "custom", "full"],
                  default: "basic",
                  description: "What subset of fields to fetch for this user.",
                },
                customer: {
                  type: "string",
                  description:
                    "The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, fill this field instead of domain. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](/admin-sdk/directory/v1/reference/users). Either the `customer` or the `domain` parameter must be provided.",
                  location: "query",
                },
                showDeleted: {
                  description:
                    "If set to `true`, retrieves the list of deleted users. (Default: `false`)",
                  location: "query",
                  type: "string",
                },
                query: {
                  description:
                    "Query string for searching user fields. For more information on constructing user queries, see [Search for Users](/admin-sdk/directory/v1/guides/search-users).",
                  location: "query",
                  type: "string",
                },
                viewType: {
                  enum: ["admin_view", "domain_public"],
                  type: "string",
                  enumDescriptions: [
                    "Results include both administrator-only and domain-public fields for the user.",
                    "Results only include fields for the user that are publicly visible to other users in the domain.",
                  ],
                  default: "admin_view",
                  description:
                    "Whether to fetch the administrator-only or domain-wide public view of the user. For more information, see [Retrieve a user as a non-administrator](/admin-sdk/directory/v1/guides/manage-users#retrieve_users_non_admin).",
                  location: "query",
                },
                orderBy: {
                  location: "query",
                  type: "string",
                  enum: ["email", "familyName", "givenName"],
                  description: "Property to use for sorting results.",
                  enumDescriptions: [
                    "Primary email of the user.",
                    "User's family name.",
                    "User's given name.",
                  ],
                },
                maxResults: {
                  minimum: "1",
                  type: "integer",
                  default: "100",
                  location: "query",
                  description: "Maximum number of results to return.",
                  maximum: "500",
                  format: "int32",
                },
              },
              httpMethod: "GET",
              response: {
                $ref: "Users",
              },
              flatPath: "admin/directory/v1/users",
              id: "directory.users.list",
              scopes: [
                "https://www.googleapis.com/auth/admin.directory.user",
                "https://www.googleapis.com/auth/admin.directory.user.readonly",
                "https://www.googleapis.com/auth/cloud-platform",
              ],
              parameterOrder: [],
            },
            get: {
              httpMethod: "GET",
              id: "directory.users.get",
              parameters: {
                viewType: {
                  description:
                    "Whether to fetch the administrator-only or domain-wide public view of the user. For more information, see [Retrieve a user as a non-administrator](/admin-sdk/directory/v1/guides/manage-users#retrieve_users_non_admin).",
                  enumDescriptions: [
                    "Results include both administrator-only and domain-public fields for the user.",
                    "Results only include fields for the user that are publicly visible to other users in the domain.",
                  ],
                  location: "query",
                  type: "string",
                  enum: ["admin_view", "domain_public"],
                  default: "admin_view",
                },
                projection: {
                  location: "query",
                  enum: ["basic", "custom", "full"],
                  enumDescriptions: [
                    "Do not include any custom fields for the user.",
                    "Include custom fields from schemas requested in `customFieldMask`.",
                    "Include all fields associated with this user.",
                  ],
                  default: "basic",
                  description: "What subset of fields to fetch for this user.",
                  type: "string",
                },
                userKey: {
                  location: "path",
                  required: true,
                  type: "string",
                  description:
                    "Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.",
                },
                customFieldMask: {
                  description:
                    "A comma-separated list of schema names. All fields from these schemas are fetched. This should only be set when `projection=custom`.",
                  type: "string",
                  location: "query",
                },
              },
              parameterOrder: ["userKey"],
              path: "admin/directory/v1/users/{userKey}",
              response: {
                $ref: "User",
              },
              scopes: [
                "https://www.googleapis.com/auth/admin.directory.user",
                "https://www.googleapis.com/auth/admin.directory.user.readonly",
              ],
              description: "Retrieves a user.",
              flatPath: "admin/directory/v1/users/{userKey}",
            },
            insert: {
              httpMethod: "POST",
              path: "admin/directory/v1/users",
              id: "directory.users.insert",
              description: "Creates a user.",
              scopes: ["https://www.googleapis.com/auth/admin.directory.user"],
              parameters: {},
              parameterOrder: [],
              request: {
                $ref: "User",
              },
              response: {
                $ref: "User",
              },
              flatPath: "admin/directory/v1/users",
            },
            delete: {
              parameters: {
                userKey: {
                  required: true,
                  type: "string",
                  description:
                    "Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.",
                  location: "path",
                },
              },
              path: "admin/directory/v1/users/{userKey}",
              scopes: ["https://www.googleapis.com/auth/admin.directory.user"],
              id: "directory.users.delete",
              httpMethod: "DELETE",
              parameterOrder: ["userKey"],
              flatPath: "admin/directory/v1/users/{userKey}",
              description: "Deletes a user.",
            },
            update: {
              path: "admin/directory/v1/users/{userKey}",
              response: {
                $ref: "User",
              },
              parameters: {
                userKey: {
                  location: "path",
                  required: true,
                  description:
                    "Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.",
                  type: "string",
                },
              },
              flatPath: "admin/directory/v1/users/{userKey}",
              description:
                "Updates a user. This method supports patch semantics, meaning you only need to include the fields you wish to update. Fields that are not present in the request will be preserved, and fields set to `null` will be cleared.",
              scopes: ["https://www.googleapis.com/auth/admin.directory.user"],
              parameterOrder: ["userKey"],
              request: {
                $ref: "User",
              },
              id: "directory.users.update",
              httpMethod: "PUT",
            },
            patch: {
              httpMethod: "PATCH",
              response: {
                $ref: "User",
              },
              parameters: {
                userKey: {
                  description:
                    "Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.",
                  required: true,
                  type: "string",
                  location: "path",
                },
              },
              description:
                "Updates a user using patch semantics. The update method should be used instead, since it also supports patch semantics and has better performance. This method is unable to clear fields that contain repeated objects (`addresses`, `phones`, etc). Use the update method instead.",
              flatPath: "admin/directory/v1/users/{userKey}",
              parameterOrder: ["userKey"],
              id: "directory.users.patch",
              scopes: ["https://www.googleapis.com/auth/admin.directory.user"],
              request: {
                $ref: "User",
              },
              path: "admin/directory/v1/users/{userKey}",
            },
          },
        },
        resources: {
          resources: {
            features: {
              methods: {
                insert: {
                  flatPath:
                    "admin/directory/v1/customer/{customer}/resources/features",
                  scopes: [
                    "https://www.googleapis.com/auth/admin.directory.resource.calendar",
                  ],
                  id: "directory.resources.features.insert",
                  description: "Inserts a feature.",
                  request: {
                    $ref: "Feature",
                  },
                  path: "admin/directory/v1/customer/{customer}/resources/features",
                  parameters: {
                    customer: {
                      type: "string",
                      description:
                        "The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.",
                      location: "path",
                      required: true,
                    },
                  },
                  httpMethod: "POST",
                  response: {
                    $ref: "Feature",
                  },
                  parameterOrder: ["customer"],
                },
                rename: {
                  scopes: [
                    "https://www.googleapis.com/auth/admin.directory.resource.calendar",
                  ],
                  path: "admin/directory/v1/customer/{customer}/resources/features/{oldName}/rename",
                  flatPath:
                    "admin/directory/v1/customer/{customer}/resources/features/{oldName}/rename",
                  httpMethod: "POST",
                  id: "directory.resources.features.rename",
                  description: "Renames a feature.",
                  parameterOrder: ["customer", "oldName"],
                  request: {
                    $ref: "FeatureRename",
                  },
                  parameters: {
                    customer: {
                      description:
                        "The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.",
                      required: true,
                      location: "path",
                      type: "string",
                    },
                    oldName: {
                      type: "string",
                      required: true,
                      location: "path",
                      description: "The unique ID of the feature to rename.",
                    },
                  },
                },
                delete: {
                  path: "admin/directory/v1/customer/{customer}/resources/features/{featureKey}",
                  description: "Deletes a feature.",
                  scopes: [
                    "https://www.googleapis.com/auth/admin.directory.resource.calendar",
                  ],
                  parameterOrder: ["customer", "featureKey"],
                  flatPath:
                    "admin/directory/v1/customer/{customer}/resources/features/{featureKey}",
                  httpMethod: "DELETE",
                  parameters: {
                    featureKey: {
                      description: "The unique ID of the feature to delete.",
                      type: "string",
                      required: true,
                      location: "path",
                    },
                    customer: {
                      type: "string",
                      description:
                        "The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.",
                      required: true,
                      location: "path",
                    },
                  },
                  id: "directory.resources.features.delete",
                },
                update: {
                  response: {
                    $ref: "Feature",
                  },
                  description: "Updates a feature.",
                  scopes: [
                    "https://www.googleapis.com/auth/admin.directory.resource.calendar",
                  ],
                  parameterOrder: ["customer", "featureKey"],
                  path: "admin/directory/v1/customer/{customer}/resources/features/{featureKey}",
                  flatPath:
                    "admin/directory/v1/customer/{customer}/resources/features/{featureKey}",
                  httpMethod: "PUT",
                  request: {
                    $ref: "Feature",
                  },
                  id: "directory.resources.features.update",
                  parameters: {
                    customer: {
                      required: true,
                      description:
                        "The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.",
                      type: "string",
                      location: "path",
                    },
                    featureKey: {
                      description: "The unique ID of the feature to update.",
                      type: "string",
                      location: "path",
                      required: true,
                    },
                  },
                },
                patch: {
                  path: "admin/directory/v1/customer/{customer}/resources/features/{featureKey}",
                  scopes: [
                    "https://www.googleapis.com/auth/admin.directory.resource.calendar",
                  ],
                  description: "Patches a feature.",
                  parameters: {
                    customer: {
                      description:
                        "The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.",
                      type: "string",
                      required: true,
                      location: "path",
                    },
                    featureKey: {
                      location: "path",
                      type: "string",
                      required: true,
                      description: "The unique ID of the feature to update.",
                    },
                  },
                  flatPath:
                    "admin/directory/v1/customer/{customer}/resources/features/{featureKey}",
                  parameterOrder: ["customer", "featureKey"],
                  response: {
                    $ref: "Feature",
                  },
                  httpMethod: "PATCH",
                  request: {
                    $ref: "Feature",
                  },
                  id: "directory.resources.features.patch",
                },
                list: {
                  id: "directory.resources.features.list",
                  httpMethod: "GET",
                  parameters: {
                    customer: {
                      type: "string",
                      description:
                        "The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.",
                      required: true,
                      location: "path",
                    },
                    maxResults: {
                      format: "int32",
                      maximum: "500",
                      minimum: "1",
                      description: "Maximum number of results to return.",
                      type: "integer",
                      location: "query",
                    },
                    pageToken: {
                      location: "query",
                      type: "string",
                      description:
                        "Token to specify the next page in the list.",
                    },
                  },
                  response: {
                    $ref: "Features",
                  },
                  description: "Retrieves a list of features for an account.",
                  scopes: [
                    "https://www.googleapis.com/auth/admin.directory.resource.calendar",
                    "https://www.googleapis.com/auth/admin.directory.resource.calendar.readonly",
                  ],
                  flatPath:
                    "admin/directory/v1/customer/{customer}/resources/features",
                  parameterOrder: ["customer"],
                  path: "admin/directory/v1/customer/{customer}/resources/features",
                },
                get: {
                  description: "Retrieves a feature.",
                  flatPath:
                    "admin/directory/v1/customer/{customer}/resources/features/{featureKey}",
                  id: "directory.resources.features.get",
                  scopes: [
                    "https://www.googleapis.com/auth/admin.directory.resource.calendar",
                    "https://www.googleapis.com/auth/admin.directory.resource.calendar.readonly",
                  ],
                  parameters: {
                    customer: {
                      description:
                        "The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.",
                      required: true,
                      location: "path",
                      type: "string",
                    },
                    featureKey: {
                      description: "The unique ID of the feature to retrieve.",
                      location: "path",
                      required: true,
                      type: "string",
                    },
                  },
                  path: "admin/directory/v1/customer/{customer}/resources/features/{featureKey}",
                  httpMethod: "GET",
                  parameterOrder: ["customer", "featureKey"],
                  response: {
                    $ref: "Feature",
                  },
                },
              },
            },
            buildings: {
              methods: {
                patch: {
                  response: {
                    $ref: "Building",
                  },
                  request: {
                    $ref: "Building",
                  },
                  scopes: [
                    "https://www.googleapis.com/auth/admin.directory.resource.calendar",
                  ],
                  httpMethod: "PATCH",
                  description: "Patches a building.",
                  id: "directory.resources.buildings.patch",
                  parameters: {
                    buildingId: {
                      description: "The id of the building to update.",
                      type: "string",
                      location: "path",
                      required: true,
                    },
                    coordinatesSource: {
                      default: "SOURCE_UNSPECIFIED",
                      enum: [
                        "CLIENT_SPECIFIED",
                        "RESOLVED_FROM_ADDRESS",
                        "SOURCE_UNSPECIFIED",
                      ],
                      description:
                        "Source from which Building.coordinates are derived.",
                      type: "string",
                      enumDescriptions: [
                        "Building.coordinates are set to the coordinates included in the request.",
                        "Building.coordinates are automatically populated based on the postal address.",
                        "Defaults to `RESOLVED_FROM_ADDRESS` if postal address is provided. Otherwise, defaults to `CLIENT_SPECIFIED` if coordinates are provided.",
                      ],
                      location: "query",
                    },
                    customer: {
                      description:
                        "The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.",
                      required: true,
                      location: "path",
                      type: "string",
                    },
                  },
                  parameterOrder: ["customer", "buildingId"],
                  path: "admin/directory/v1/customer/{customer}/resources/buildings/{buildingId}",
                  flatPath:
                    "admin/directory/v1/customer/{customer}/resources/buildings/{buildingId}",
                },
                list: {
                  scopes: [
                    "https://www.googleapis.com/auth/admin.directory.resource.calendar",
                    "https://www.googleapis.com/auth/admin.directory.resource.calendar.readonly",
                  ],
                  httpMethod: "GET",
                  parameters: {
                    maxResults: {
                      format: "int32",
                      location: "query",
                      description: "Maximum number of results to return.",
                      minimum: "1",
                      maximum: "500",
                      type: "integer",
                    },
                    pageToken: {
                      type: "string",
                      location: "query",
                      description:
                        "Token to specify the next page in the list.",
                    },
                    customer: {
                      description:
                        "The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.",
                      required: true,
                      type: "string",
                      location: "path",
                    },
                  },
                  id: "directory.resources.buildings.list",
                  flatPath:
                    "admin/directory/v1/customer/{customer}/resources/buildings",
                  description: "Retrieves a list of buildings for an account.",
                  response: {
                    $ref: "Buildings",
                  },
                  path: "admin/directory/v1/customer/{customer}/resources/buildings",
                  parameterOrder: ["customer"],
                },
                get: {
                  httpMethod: "GET",
                  parameters: {
                    buildingId: {
                      location: "path",
                      description: "The unique ID of the building to retrieve.",
                      type: "string",
                      required: true,
                    },
                    customer: {
                      required: true,
                      description:
                        "The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.",
                      location: "path",
                      type: "string",
                    },
                  },
                  response: {
                    $ref: "Building",
                  },
                  path: "admin/directory/v1/customer/{customer}/resources/buildings/{buildingId}",
                  scopes: [
                    "https://www.googleapis.com/auth/admin.directory.resource.calendar",
                    "https://www.googleapis.com/auth/admin.directory.resource.calendar.readonly",
                  ],
                  parameterOrder: ["customer", "buildingId"],
                  id: "directory.resources.buildings.get",
                  description: "Retrieves a building.",
                  flatPath:
                    "admin/directory/v1/customer/{customer}/resources/buildings/{buildingId}",
                },
                insert: {
                  id: "directory.resources.buildings.insert",
                  parameters: {
                    coordinatesSource: {
                      enumDescriptions: [
                        "Building.coordinates are set to the coordinates included in the request.",
                        "Building.coordinates are automatically populated based on the postal address.",
                        "Defaults to `RESOLVED_FROM_ADDRESS` if postal address is provided. Otherwise, defaults to `CLIENT_SPECIFIED` if coordinates are provided.",
                      ],
                      default: "SOURCE_UNSPECIFIED",
                      type: "string",
                      enum: [
                        "CLIENT_SPECIFIED",
                        "RESOLVED_FROM_ADDRESS",
                        "SOURCE_UNSPECIFIED",
                      ],
                      location: "query",
                      description:
                        "Source from which Building.coordinates are derived.",
                    },
                    customer: {
                      location: "path",
                      description:
                        "The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.",
                      type: "string",
                      required: true,
                    },
                  },
                  response: {
                    $ref: "Building",
                  },
                  path: "admin/directory/v1/customer/{customer}/resources/buildings",
                  description: "Inserts a building.",
                  parameterOrder: ["customer"],
                  request: {
                    $ref: "Building",
                  },
                  flatPath:
                    "admin/directory/v1/customer/{customer}/resources/buildings",
                  httpMethod: "POST",
                  scopes: [
                    "https://www.googleapis.com/auth/admin.directory.resource.calendar",
                  ],
                },
                delete: {
                  id: "directory.resources.buildings.delete",
                  httpMethod: "DELETE",
                  flatPath:
                    "admin/directory/v1/customer/{customer}/resources/buildings/{buildingId}",
                  path: "admin/directory/v1/customer/{customer}/resources/buildings/{buildingId}",
                  scopes: [
                    "https://www.googleapis.com/auth/admin.directory.resource.calendar",
                  ],
                  description: "Deletes a building.",
                  parameters: {
                    customer: {
                      location: "path",
                      description:
                        "The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.",
                      type: "string",
                      required: true,
                    },
                    buildingId: {
                      type: "string",
                      location: "path",
                      required: true,
                      description: "The id of the building to delete.",
                    },
                  },
                  parameterOrder: ["customer", "buildingId"],
                },
                update: {
                  response: {
                    $ref: "Building",
                  },
                  path: "admin/directory/v1/customer/{customer}/resources/buildings/{buildingId}",
                  flatPath:
                    "admin/directory/v1/customer/{customer}/resources/buildings/{buildingId}",
                  scopes: [
                    "https://www.googleapis.com/auth/admin.directory.resource.calendar",
                  ],
                  request: {
                    $ref: "Building",
                  },
                  id: "directory.resources.buildings.update",
                  parameterOrder: ["customer", "buildingId"],
                  httpMethod: "PUT",
                  description: "Updates a building.",
                  parameters: {
                    customer: {
                      location: "path",
                      description:
                        "The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.",
                      type: "string",
                      required: true,
                    },
                    coordinatesSource: {
                      enumDescriptions: [
                        "Building.coordinates are set to the coordinates included in the request.",
                        "Building.coordinates are automatically populated based on the postal address.",
                        "Defaults to `RESOLVED_FROM_ADDRESS` if postal address is provided. Otherwise, defaults to `CLIENT_SPECIFIED` if coordinates are provided.",
                      ],
                      description:
                        "Source from which Building.coordinates are derived.",
                      location: "query",
                      type: "string",
                      enum: [
                        "CLIENT_SPECIFIED",
                        "RESOLVED_FROM_ADDRESS",
                        "SOURCE_UNSPECIFIED",
                      ],
                      default: "SOURCE_UNSPECIFIED",
                    },
                    buildingId: {
                      required: true,
                      type: "string",
                      location: "path",
                      description: "The id of the building to update.",
                    },
                  },
                },
              },
            },
            calendars: {
              methods: {
                update: {
                  scopes: [
                    "https://www.googleapis.com/auth/admin.directory.resource.calendar",
                  ],
                  httpMethod: "PUT",
                  flatPath:
                    "admin/directory/v1/customer/{customer}/resources/calendars/{calendarResourceId}",
                  request: {
                    $ref: "CalendarResource",
                  },
                  id: "directory.resources.calendars.update",
                  description:
                    "Updates a calendar resource. This method supports patch semantics, meaning you only need to include the fields you wish to update. Fields that are not present in the request will be preserved.",
                  response: {
                    $ref: "CalendarResource",
                  },
                  parameterOrder: ["customer", "calendarResourceId"],
                  path: "admin/directory/v1/customer/{customer}/resources/calendars/{calendarResourceId}",
                  parameters: {
                    calendarResourceId: {
                      description:
                        "The unique ID of the calendar resource to update.",
                      type: "string",
                      required: true,
                      location: "path",
                    },
                    customer: {
                      required: true,
                      location: "path",
                      description:
                        "The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.",
                      type: "string",
                    },
                  },
                },
                list: {
                  path: "admin/directory/v1/customer/{customer}/resources/calendars",
                  id: "directory.resources.calendars.list",
                  response: {
                    $ref: "CalendarResources",
                  },
                  flatPath:
                    "admin/directory/v1/customer/{customer}/resources/calendars",
                  parameterOrder: ["customer"],
                  parameters: {
                    maxResults: {
                      description: "Maximum number of results to return.",
                      minimum: "1",
                      format: "int32",
                      location: "query",
                      type: "integer",
                      maximum: "500",
                    },
                    query: {
                      location: "query",
                      type: "string",
                      description:
                        "String query used to filter results. Should be of the form \"field operator value\" where field can be any of supported fields and operators can be any of supported operations. Operators include '=' for exact match, '!=' for mismatch and ':' for prefix match or HAS match where applicable. For prefix match, the value should always be followed by a *. Logical operators NOT and AND are supported (in this order of precedence). Supported fields include `generatedResourceName`, `name`, `buildingId`, `floor_name`, `capacity`, `featureInstances.feature.name`, `resourceEmail`, `resourceCategory`. For example `buildingId=US-NYC-9TH AND featureInstances.feature.name:Phone`.",
                    },
                    orderBy: {
                      location: "query",
                      description:
                        'Field(s) to sort results by in either ascending or descending order. Supported fields include `resourceId`, `resourceName`, `capacity`, `buildingId`, and `floorName`. If no order is specified, defaults to ascending. Should be of the form "field [asc|desc], field [asc|desc], ...". For example `buildingId, capacity desc` would return results sorted first by `buildingId` in ascending order then by `capacity` in descending order.',
                      type: "string",
                    },
                    pageToken: {
                      location: "query",
                      type: "string",
                      description:
                        "Token to specify the next page in the list.",
                    },
                    customer: {
                      location: "path",
                      required: true,
                      type: "string",
                      description:
                        "The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.",
                    },
                  },
                  httpMethod: "GET",
                  description:
                    "Retrieves a list of calendar resources for an account.",
                  scopes: [
                    "https://www.googleapis.com/auth/admin.directory.resource.calendar",
                    "https://www.googleapis.com/auth/admin.directory.resource.calendar.readonly",
                  ],
                },
                get: {
                  parameterOrder: ["customer", "calendarResourceId"],
                  response: {
                    $ref: "CalendarResource",
                  },
                  path: "admin/directory/v1/customer/{customer}/resources/calendars/{calendarResourceId}",
                  parameters: {
                    calendarResourceId: {
                      type: "string",
                      location: "path",
                      description:
                        "The unique ID of the calendar resource to retrieve.",
                      required: true,
                    },
                    customer: {
                      required: true,
                      type: "string",
                      location: "path",
                      description:
                        "The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.",
                    },
                  },
                  flatPath:
                    "admin/directory/v1/customer/{customer}/resources/calendars/{calendarResourceId}",
                  httpMethod: "GET",
                  description: "Retrieves a calendar resource.",
                  scopes: [
                    "https://www.googleapis.com/auth/admin.directory.resource.calendar",
                    "https://www.googleapis.com/auth/admin.directory.resource.calendar.readonly",
                  ],
                  id: "directory.resources.calendars.get",
                },
                patch: {
                  response: {
                    $ref: "CalendarResource",
                  },
                  parameters: {
                    calendarResourceId: {
                      description:
                        "The unique ID of the calendar resource to update.",
                      location: "path",
                      type: "string",
                      required: true,
                    },
                    customer: {
                      required: true,
                      type: "string",
                      location: "path",
                      description:
                        "The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.",
                    },
                  },
                  description: "Patches a calendar resource.",
                  scopes: [
                    "https://www.googleapis.com/auth/admin.directory.resource.calendar",
                  ],
                  path: "admin/directory/v1/customer/{customer}/resources/calendars/{calendarResourceId}",
                  httpMethod: "PATCH",
                  request: {
                    $ref: "CalendarResource",
                  },
                  id: "directory.resources.calendars.patch",
                  parameterOrder: ["customer", "calendarResourceId"],
                  flatPath:
                    "admin/directory/v1/customer/{customer}/resources/calendars/{calendarResourceId}",
                },
                insert: {
                  scopes: [
                    "https://www.googleapis.com/auth/admin.directory.resource.calendar",
                  ],
                  request: {
                    $ref: "CalendarResource",
                  },
                  response: {
                    $ref: "CalendarResource",
                  },
                  id: "directory.resources.calendars.insert",
                  httpMethod: "POST",
                  description: "Inserts a calendar resource.",
                  parameterOrder: ["customer"],
                  parameters: {
                    customer: {
                      location: "path",
                      required: true,
                      description:
                        "The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.",
                      type: "string",
                    },
                  },
                  path: "admin/directory/v1/customer/{customer}/resources/calendars",
                  flatPath:
                    "admin/directory/v1/customer/{customer}/resources/calendars",
                },
                delete: {
                  path: "admin/directory/v1/customer/{customer}/resources/calendars/{calendarResourceId}",
                  parameters: {
                    calendarResourceId: {
                      required: true,
                      type: "string",
                      location: "path",
                      description:
                        "The unique ID of the calendar resource to delete.",
                    },
                    customer: {
                      type: "string",
                      location: "path",
                      required: true,
                      description:
                        "The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's customer ID.",
                    },
                  },
                  flatPath:
                    "admin/directory/v1/customer/{customer}/resources/calendars/{calendarResourceId}",
                  parameterOrder: ["customer", "calendarResourceId"],
                  scopes: [
                    "https://www.googleapis.com/auth/admin.directory.resource.calendar",
                  ],
                  httpMethod: "DELETE",
                  description: "Deletes a calendar resource.",
                  id: "directory.resources.calendars.delete",
                },
              },
            },
          },
        },
        roleAssignments: {
          methods: {
            get: {
              description: "Retrieves a role assignment.",
              flatPath:
                "admin/directory/v1/customer/{customer}/roleassignments/{roleAssignmentId}",
              id: "directory.roleAssignments.get",
              httpMethod: "GET",
              path: "admin/directory/v1/customer/{customer}/roleassignments/{roleAssignmentId}",
              parameters: {
                customer: {
                  description: "Immutable ID of the Google Workspace account.",
                  location: "path",
                  required: true,
                  type: "string",
                },
                roleAssignmentId: {
                  location: "path",
                  type: "string",
                  description: "Immutable ID of the role assignment.",
                  required: true,
                },
              },
              parameterOrder: ["customer", "roleAssignmentId"],
              scopes: [
                "https://www.googleapis.com/auth/admin.directory.rolemanagement",
                "https://www.googleapis.com/auth/admin.directory.rolemanagement.readonly",
              ],
              response: {
                $ref: "RoleAssignment",
              },
            },
            insert: {
              parameters: {
                customer: {
                  type: "string",
                  description: "Immutable ID of the Google Workspace account.",
                  location: "path",
                  required: true,
                },
              },
              response: {
                $ref: "RoleAssignment",
              },
              parameterOrder: ["customer"],
              path: "admin/directory/v1/customer/{customer}/roleassignments",
              description: "Creates a role assignment.",
              request: {
                $ref: "RoleAssignment",
              },
              httpMethod: "POST",
              flatPath:
                "admin/directory/v1/customer/{customer}/roleassignments",
              id: "directory.roleAssignments.insert",
              scopes: [
                "https://www.googleapis.com/auth/admin.directory.rolemanagement",
              ],
            },
            delete: {
              path: "admin/directory/v1/customer/{customer}/roleassignments/{roleAssignmentId}",
              description: "Deletes a role assignment.",
              parameters: {
                roleAssignmentId: {
                  location: "path",
                  type: "string",
                  description: "Immutable ID of the role assignment.",
                  required: true,
                },
                customer: {
                  location: "path",
                  description: "Immutable ID of the Google Workspace account.",
                  type: "string",
                  required: true,
                },
              },
              id: "directory.roleAssignments.delete",
              parameterOrder: ["customer", "roleAssignmentId"],
              flatPath:
                "admin/directory/v1/customer/{customer}/roleassignments/{roleAssignmentId}",
              scopes: [
                "https://www.googleapis.com/auth/admin.directory.rolemanagement",
              ],
              httpMethod: "DELETE",
            },
            list: {
              parameterOrder: ["customer"],
              path: "admin/directory/v1/customer/{customer}/roleassignments",
              parameters: {
                pageToken: {
                  location: "query",
                  type: "string",
                  description: "Token to specify the next page in the list.",
                },
                roleId: {
                  location: "query",
                  description:
                    "Immutable ID of a role. If included in the request, returns only role assignments containing this role ID.",
                  type: "string",
                },
                userKey: {
                  description:
                    "The user's primary email address, alias email address, or unique user ID. If included in the request, returns role assignments only for this user.",
                  location: "query",
                  type: "string",
                },
                maxResults: {
                  description: "Maximum number of results to return.",
                  format: "int32",
                  maximum: "200",
                  location: "query",
                  type: "integer",
                  minimum: "1",
                },
                customer: {
                  type: "string",
                  location: "path",
                  required: true,
                  description: "Immutable ID of the Google Workspace account.",
                },
              },
              flatPath:
                "admin/directory/v1/customer/{customer}/roleassignments",
              httpMethod: "GET",
              id: "directory.roleAssignments.list",
              response: {
                $ref: "RoleAssignments",
              },
              description: "Retrieves a paginated list of all roleAssignments.",
              scopes: [
                "https://www.googleapis.com/auth/admin.directory.rolemanagement",
                "https://www.googleapis.com/auth/admin.directory.rolemanagement.readonly",
              ],
            },
          },
        },
        domainAliases: {
          methods: {
            insert: {
              response: {
                $ref: "DomainAlias",
              },
              description: "Inserts a domain alias of the customer.",
              flatPath: "admin/directory/v1/customer/{customer}/domainaliases",
              scopes: [
                "https://www.googleapis.com/auth/admin.directory.domain",
              ],
              httpMethod: "POST",
              path: "admin/directory/v1/customer/{customer}/domainaliases",
              id: "directory.domainAliases.insert",
              parameterOrder: ["customer"],
              parameters: {
                customer: {
                  location: "path",
                  required: true,
                  type: "string",
                  description: "Immutable ID of the Google Workspace account.",
                },
              },
              request: {
                $ref: "DomainAlias",
              },
            },
            get: {
              scopes: [
                "https://www.googleapis.com/auth/admin.directory.domain",
                "https://www.googleapis.com/auth/admin.directory.domain.readonly",
              ],
              description: "Retrieves a domain alias of the customer.",
              flatPath:
                "admin/directory/v1/customer/{customer}/domainaliases/{domainAliasName}",
              path: "admin/directory/v1/customer/{customer}/domainaliases/{domainAliasName}",
              response: {
                $ref: "DomainAlias",
              },
              id: "directory.domainAliases.get",
              httpMethod: "GET",
              parameters: {
                customer: {
                  required: true,
                  location: "path",
                  type: "string",
                  description: "Immutable ID of the Google Workspace account.",
                },
                domainAliasName: {
                  location: "path",
                  description: "Name of domain alias to be retrieved.",
                  required: true,
                  type: "string",
                },
              },
              parameterOrder: ["customer", "domainAliasName"],
            },
            delete: {
              flatPath:
                "admin/directory/v1/customer/{customer}/domainaliases/{domainAliasName}",
              id: "directory.domainAliases.delete",
              parameters: {
                customer: {
                  type: "string",
                  location: "path",
                  description: "Immutable ID of the Google Workspace account.",
                  required: true,
                },
                domainAliasName: {
                  required: true,
                  type: "string",
                  description: "Name of domain alias to be retrieved.",
                  location: "path",
                },
              },
              scopes: [
                "https://www.googleapis.com/auth/admin.directory.domain",
              ],
              path: "admin/directory/v1/customer/{customer}/domainaliases/{domainAliasName}",
              httpMethod: "DELETE",
              parameterOrder: ["customer", "domainAliasName"],
              description: "Deletes a domain Alias of the customer.",
            },
            list: {
              path: "admin/directory/v1/customer/{customer}/domainaliases",
              description: "Lists the domain aliases of the customer.",
              scopes: [
                "https://www.googleapis.com/auth/admin.directory.domain",
                "https://www.googleapis.com/auth/admin.directory.domain.readonly",
              ],
              response: {
                $ref: "DomainAliases",
              },
              flatPath: "admin/directory/v1/customer/{customer}/domainaliases",
              parameterOrder: ["customer"],
              id: "directory.domainAliases.list",
              parameters: {
                customer: {
                  type: "string",
                  location: "path",
                  required: true,
                  description: "Immutable ID of the Google Workspace account.",
                },
                parentDomainName: {
                  type: "string",
                  location: "query",
                  description:
                    "Name of the parent domain for which domain aliases are to be fetched.",
                },
              },
              httpMethod: "GET",
            },
          },
        },
        roles: {
          methods: {
            delete: {
              id: "directory.roles.delete",
              parameters: {
                roleId: {
                  required: true,
                  description: "Immutable ID of the role.",
                  type: "string",
                  location: "path",
                },
                customer: {
                  type: "string",
                  location: "path",
                  required: true,
                  description: "Immutable ID of the Google Workspace account.",
                },
              },
              parameterOrder: ["customer", "roleId"],
              flatPath: "admin/directory/v1/customer/{customer}/roles/{roleId}",
              path: "admin/directory/v1/customer/{customer}/roles/{roleId}",
              description: "Deletes a role.",
              scopes: [
                "https://www.googleapis.com/auth/admin.directory.rolemanagement",
              ],
              httpMethod: "DELETE",
            },
            update: {
              description: "Updates a role.",
              request: {
                $ref: "Role",
              },
              parameterOrder: ["customer", "roleId"],
              parameters: {
                customer: {
                  required: true,
                  type: "string",
                  location: "path",
                  description: "Immutable ID of the Google Workspace account.",
                },
                roleId: {
                  description: "Immutable ID of the role.",
                  type: "string",
                  location: "path",
                  required: true,
                },
              },
              response: {
                $ref: "Role",
              },
              id: "directory.roles.update",
              path: "admin/directory/v1/customer/{customer}/roles/{roleId}",
              httpMethod: "PUT",
              flatPath: "admin/directory/v1/customer/{customer}/roles/{roleId}",
              scopes: [
                "https://www.googleapis.com/auth/admin.directory.rolemanagement",
              ],
            },
            insert: {
              parameterOrder: ["customer"],
              parameters: {
                customer: {
                  location: "path",
                  description: "Immutable ID of the Google Workspace account.",
                  type: "string",
                  required: true,
                },
              },
              scopes: [
                "https://www.googleapis.com/auth/admin.directory.rolemanagement",
              ],
              path: "admin/directory/v1/customer/{customer}/roles",
              description: "Creates a role.",
              id: "directory.roles.insert",
              httpMethod: "POST",
              response: {
                $ref: "Role",
              },
              request: {
                $ref: "Role",
              },
              flatPath: "admin/directory/v1/customer/{customer}/roles",
            },
            get: {
              parameters: {
                customer: {
                  description: "Immutable ID of the Google Workspace account.",
                  required: true,
                  type: "string",
                  location: "path",
                },
                roleId: {
                  location: "path",
                  type: "string",
                  description: "Immutable ID of the role.",
                  required: true,
                },
              },
              scopes: [
                "https://www.googleapis.com/auth/admin.directory.rolemanagement",
                "https://www.googleapis.com/auth/admin.directory.rolemanagement.readonly",
              ],
              parameterOrder: ["customer", "roleId"],
              description: "Retrieves a role.",
              httpMethod: "GET",
              flatPath: "admin/directory/v1/customer/{customer}/roles/{roleId}",
              path: "admin/directory/v1/customer/{customer}/roles/{roleId}",
              response: {
                $ref: "Role",
              },
              id: "directory.roles.get",
            },
            list: {
              parameterOrder: ["customer"],
              scopes: [
                "https://www.googleapis.com/auth/admin.directory.rolemanagement",
                "https://www.googleapis.com/auth/admin.directory.rolemanagement.readonly",
              ],
              path: "admin/directory/v1/customer/{customer}/roles",
              description:
                "Retrieves a paginated list of all the roles in a domain.",
              parameters: {
                maxResults: {
                  maximum: "100",
                  type: "integer",
                  minimum: "1",
                  format: "int32",
                  description: "Maximum number of results to return.",
                  location: "query",
                },
                customer: {
                  location: "path",
                  description: "Immutable ID of the Google Workspace account.",
                  required: true,
                  type: "string",
                },
                pageToken: {
                  type: "string",
                  location: "query",
                  description: "Token to specify the next page in the list.",
                },
              },
              id: "directory.roles.list",
              flatPath: "admin/directory/v1/customer/{customer}/roles",
              httpMethod: "GET",
              response: {
                $ref: "Roles",
              },
            },
            patch: {
              path: "admin/directory/v1/customer/{customer}/roles/{roleId}",
              response: {
                $ref: "Role",
              },
              flatPath: "admin/directory/v1/customer/{customer}/roles/{roleId}",
              id: "directory.roles.patch",
              scopes: [
                "https://www.googleapis.com/auth/admin.directory.rolemanagement",
              ],
              request: {
                $ref: "Role",
              },
              httpMethod: "PATCH",
              description: "Patches a role.",
              parameters: {
                roleId: {
                  description: "Immutable ID of the role.",
                  type: "string",
                  location: "path",
                  required: true,
                },
                customer: {
                  description: "Immutable ID of the Google Workspace account.",
                  location: "path",
                  required: true,
                  type: "string",
                },
              },
              parameterOrder: ["customer", "roleId"],
            },
          },
        },
        privileges: {
          methods: {
            list: {
              httpMethod: "GET",
              description:
                "Retrieves a paginated list of all privileges for a customer.",
              scopes: [
                "https://www.googleapis.com/auth/admin.directory.rolemanagement",
                "https://www.googleapis.com/auth/admin.directory.rolemanagement.readonly",
              ],
              path: "admin/directory/v1/customer/{customer}/roles/ALL/privileges",
              response: {
                $ref: "Privileges",
              },
              parameterOrder: ["customer"],
              parameters: {
                customer: {
                  required: true,
                  location: "path",
                  description: "Immutable ID of the Google Workspace account.",
                  type: "string",
                },
              },
              id: "directory.privileges.list",
              flatPath:
                "admin/directory/v1/customer/{customer}/roles/ALL/privileges",
            },
          },
        },
        asps: {
          methods: {
            list: {
              parameters: {
                userKey: {
                  required: true,
                  location: "path",
                  type: "string",
                  description:
                    "Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.",
                },
              },
              httpMethod: "GET",
              flatPath: "admin/directory/v1/users/{userKey}/asps",
              description: "Lists the ASPs issued by a user.",
              scopes: [
                "https://www.googleapis.com/auth/admin.directory.user.security",
              ],
              parameterOrder: ["userKey"],
              response: {
                $ref: "Asps",
              },
              id: "directory.asps.list",
              path: "admin/directory/v1/users/{userKey}/asps",
            },
            delete: {
              id: "directory.asps.delete",
              flatPath: "admin/directory/v1/users/{userKey}/asps/{codeId}",
              parameterOrder: ["userKey", "codeId"],
              parameters: {
                codeId: {
                  type: "integer",
                  required: true,
                  format: "int32",
                  location: "path",
                  description: "The unique ID of the ASP to be deleted.",
                },
                userKey: {
                  type: "string",
                  required: true,
                  location: "path",
                  description:
                    "Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.",
                },
              },
              httpMethod: "DELETE",
              description: "Deletes an ASP issued by a user.",
              scopes: [
                "https://www.googleapis.com/auth/admin.directory.user.security",
              ],
              path: "admin/directory/v1/users/{userKey}/asps/{codeId}",
            },
            get: {
              scopes: [
                "https://www.googleapis.com/auth/admin.directory.user.security",
              ],
              parameters: {
                userKey: {
                  required: true,
                  location: "path",
                  description:
                    "Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.",
                  type: "string",
                },
                codeId: {
                  format: "int32",
                  required: true,
                  type: "integer",
                  location: "path",
                  description: "The unique ID of the ASP.",
                },
              },
              path: "admin/directory/v1/users/{userKey}/asps/{codeId}",
              response: {
                $ref: "Asp",
              },
              description: "Gets information about an ASP issued by a user.",
              parameterOrder: ["userKey", "codeId"],
              httpMethod: "GET",
              id: "directory.asps.get",
              flatPath: "admin/directory/v1/users/{userKey}/asps/{codeId}",
            },
          },
        },
        mobiledevices: {
          methods: {
            list: {
              httpMethod: "GET",
              description:
                "Retrieves a paginated list of all user-owned mobile devices for an account. To retrieve a list that includes company-owned devices, use the Cloud Identity [Devices API](https://cloud.google.com/identity/docs/concepts/overview-devices) instead.",
              path: "admin/directory/v1/customer/{customerId}/devices/mobile",
              flatPath:
                "admin/directory/v1/customer/{customerId}/devices/mobile",
              parameters: {
                query: {
                  type: "string",
                  location: "query",
                  description:
                    "Search string in the format given at https://developers.google.com/admin-sdk/directory/v1/search-operators",
                },
                sortOrder: {
                  enum: ["ASCENDING", "DESCENDING"],
                  type: "string",
                  description:
                    "Whether to return results in ascending or descending order. Must be used with the `orderBy` parameter.",
                  location: "query",
                  enumDescriptions: ["Ascending order.", "Descending order."],
                },
                maxResults: {
                  default: "100",
                  format: "int32",
                  description:
                    "Maximum number of results to return. Max allowed value is 100.",
                  type: "integer",
                  maximum: "100",
                  location: "query",
                  minimum: "1",
                },
                pageToken: {
                  type: "string",
                  location: "query",
                  description: "Token to specify next page in the list",
                },
                orderBy: {
                  description: "Device property to use for sorting results.",
                  location: "query",
                  type: "string",
                  enumDescriptions: [
                    "The serial number for a Google Sync mobile device. For Android devices, this is a software generated unique identifier.",
                    "The device owner's email address.",
                    "Last policy settings sync date time of the device.",
                    "The mobile device's model.",
                    "The device owner's user name.",
                    "The device's operating system.",
                    "The device status.",
                    "Type of the device.",
                  ],
                  enum: [
                    "deviceId",
                    "email",
                    "lastSync",
                    "model",
                    "name",
                    "os",
                    "status",
                    "type",
                  ],
                },
                projection: {
                  description:
                    "Restrict information returned to a set of selected fields.",
                  enumDescriptions: [
                    "Includes only the basic metadata fields (e.g., deviceId, model, status, type, and status)",
                    "Includes all metadata fields",
                  ],
                  location: "query",
                  enum: ["BASIC", "FULL"],
                  type: "string",
                },
                customerId: {
                  location: "path",
                  type: "string",
                  required: true,
                  description:
                    "The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](/admin-sdk/directory/v1/reference/users).",
                },
              },
              scopes: [
                "https://www.googleapis.com/auth/admin.directory.device.mobile",
                "https://www.googleapis.com/auth/admin.directory.device.mobile.action",
                "https://www.googleapis.com/auth/admin.directory.device.mobile.readonly",
              ],
              id: "directory.mobiledevices.list",
              response: {
                $ref: "MobileDevices",
              },
              parameterOrder: ["customerId"],
            },
            delete: {
              id: "directory.mobiledevices.delete",
              scopes: [
                "https://www.googleapis.com/auth/admin.directory.device.mobile",
              ],
              parameterOrder: ["customerId", "resourceId"],
              parameters: {
                customerId: {
                  type: "string",
                  required: true,
                  description:
                    "The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](/admin-sdk/directory/v1/reference/users).",
                  location: "path",
                },
                resourceId: {
                  location: "path",
                  type: "string",
                  required: true,
                  description:
                    "The unique ID the API service uses to identify the mobile device.",
                },
              },
              description: "Removes a mobile device.",
              httpMethod: "DELETE",
              path: "admin/directory/v1/customer/{customerId}/devices/mobile/{resourceId}",
              flatPath:
                "admin/directory/v1/customer/{customerId}/devices/mobile/{resourceId}",
            },
            action: {
              flatPath:
                "admin/directory/v1/customer/{customerId}/devices/mobile/{resourceId}/action",
              id: "directory.mobiledevices.action",
              path: "admin/directory/v1/customer/{customerId}/devices/mobile/{resourceId}/action",
              request: {
                $ref: "MobileDeviceAction",
              },
              httpMethod: "POST",
              scopes: [
                "https://www.googleapis.com/auth/admin.directory.device.mobile",
                "https://www.googleapis.com/auth/admin.directory.device.mobile.action",
              ],
              parameterOrder: ["customerId", "resourceId"],
              parameters: {
                customerId: {
                  required: true,
                  location: "path",
                  description:
                    "The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](/admin-sdk/directory/v1/reference/users).",
                  type: "string",
                },
                resourceId: {
                  type: "string",
                  location: "path",
                  required: true,
                  description:
                    "The unique ID the API service uses to identify the mobile device.",
                },
              },
              description:
                "Takes an action that affects a mobile device. For example, remotely wiping a device.",
            },
            get: {
              response: {
                $ref: "MobileDevice",
              },
              parameterOrder: ["customerId", "resourceId"],
              parameters: {
                resourceId: {
                  type: "string",
                  description:
                    "The unique ID the API service uses to identify the mobile device.",
                  location: "path",
                  required: true,
                },
                customerId: {
                  required: true,
                  type: "string",
                  description:
                    "The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](/admin-sdk/directory/v1/reference/users).",
                  location: "path",
                },
                projection: {
                  enumDescriptions: [
                    "Includes only the basic metadata fields (e.g., deviceId, model, status, type, and status)",
                    "Includes all metadata fields",
                  ],
                  description:
                    "Restrict information returned to a set of selected fields.",
                  enum: ["BASIC", "FULL"],
                  location: "query",
                  type: "string",
                },
              },
              description: "Retrieves a mobile device's properties.",
              path: "admin/directory/v1/customer/{customerId}/devices/mobile/{resourceId}",
              scopes: [
                "https://www.googleapis.com/auth/admin.directory.device.mobile",
                "https://www.googleapis.com/auth/admin.directory.device.mobile.action",
                "https://www.googleapis.com/auth/admin.directory.device.mobile.readonly",
              ],
              flatPath:
                "admin/directory/v1/customer/{customerId}/devices/mobile/{resourceId}",
              id: "directory.mobiledevices.get",
              httpMethod: "GET",
            },
          },
        },
        schemas: {
          methods: {
            update: {
              parameters: {
                schemaKey: {
                  required: true,
                  location: "path",
                  description: "Name or immutable ID of the schema.",
                  type: "string",
                },
                customerId: {
                  location: "path",
                  description: "Immutable ID of the Google Workspace account.",
                  required: true,
                  type: "string",
                },
              },
              flatPath:
                "admin/directory/v1/customer/{customerId}/schemas/{schemaKey}",
              id: "directory.schemas.update",
              path: "admin/directory/v1/customer/{customerId}/schemas/{schemaKey}",
              scopes: [
                "https://www.googleapis.com/auth/admin.directory.userschema",
              ],
              request: {
                $ref: "Schema",
              },
              parameterOrder: ["customerId", "schemaKey"],
              description: "Updates a schema.",
              response: {
                $ref: "Schema",
              },
              httpMethod: "PUT",
            },
            list: {
              id: "directory.schemas.list",
              response: {
                $ref: "Schemas",
              },
              httpMethod: "GET",
              parameters: {
                customerId: {
                  type: "string",
                  description: "Immutable ID of the Google Workspace account.",
                  location: "path",
                  required: true,
                },
              },
              description: "Retrieves all schemas for a customer.",
              parameterOrder: ["customerId"],
              path: "admin/directory/v1/customer/{customerId}/schemas",
              flatPath: "admin/directory/v1/customer/{customerId}/schemas",
              scopes: [
                "https://www.googleapis.com/auth/admin.directory.userschema",
                "https://www.googleapis.com/auth/admin.directory.userschema.readonly",
              ],
            },
            patch: {
              path: "admin/directory/v1/customer/{customerId}/schemas/{schemaKey}",
              description: "Patches a schema.",
              id: "directory.schemas.patch",
              httpMethod: "PATCH",
              scopes: [
                "https://www.googleapis.com/auth/admin.directory.userschema",
              ],
              flatPath:
                "admin/directory/v1/customer/{customerId}/schemas/{schemaKey}",
              response: {
                $ref: "Schema",
              },
              request: {
                $ref: "Schema",
              },
              parameterOrder: ["customerId", "schemaKey"],
              parameters: {
                schemaKey: {
                  description: "Name or immutable ID of the schema.",
                  location: "path",
                  type: "string",
                  required: true,
                },
                customerId: {
                  location: "path",
                  description: "Immutable ID of the Google Workspace account.",
                  type: "string",
                  required: true,
                },
              },
            },
            get: {
              httpMethod: "GET",
              id: "directory.schemas.get",
              path: "admin/directory/v1/customer/{customerId}/schemas/{schemaKey}",
              scopes: [
                "https://www.googleapis.com/auth/admin.directory.userschema",
                "https://www.googleapis.com/auth/admin.directory.userschema.readonly",
              ],
              response: {
                $ref: "Schema",
              },
              description: "Retrieves a schema.",
              parameterOrder: ["customerId", "schemaKey"],
              parameters: {
                customerId: {
                  type: "string",
                  location: "path",
                  description: "Immutable ID of the Google Workspace account.",
                  required: true,
                },
                schemaKey: {
                  location: "path",
                  type: "string",
                  required: true,
                  description: "Name or immutable ID of the schema.",
                },
              },
              flatPath:
                "admin/directory/v1/customer/{customerId}/schemas/{schemaKey}",
            },
            insert: {
              parameterOrder: ["customerId"],
              flatPath: "admin/directory/v1/customer/{customerId}/schemas",
              scopes: [
                "https://www.googleapis.com/auth/admin.directory.userschema",
              ],
              path: "admin/directory/v1/customer/{customerId}/schemas",
              parameters: {
                customerId: {
                  type: "string",
                  description: "Immutable ID of the Google Workspace account.",
                  required: true,
                  location: "path",
                },
              },
              id: "directory.schemas.insert",
              httpMethod: "POST",
              response: {
                $ref: "Schema",
              },
              description: "Creates a schema.",
              request: {
                $ref: "Schema",
              },
            },
            delete: {
              scopes: [
                "https://www.googleapis.com/auth/admin.directory.userschema",
              ],
              description: "Deletes a schema.",
              path: "admin/directory/v1/customer/{customerId}/schemas/{schemaKey}",
              parameterOrder: ["customerId", "schemaKey"],
              parameters: {
                customerId: {
                  description: "Immutable ID of the Google Workspace account.",
                  location: "path",
                  type: "string",
                  required: true,
                },
                schemaKey: {
                  description: "Name or immutable ID of the schema.",
                  location: "path",
                  type: "string",
                  required: true,
                },
              },
              id: "directory.schemas.delete",
              httpMethod: "DELETE",
              flatPath:
                "admin/directory/v1/customer/{customerId}/schemas/{schemaKey}",
            },
          },
        },
        twoStepVerification: {
          methods: {
            turnOff: {
              flatPath:
                "admin/directory/v1/users/{userKey}/twoStepVerification/turnOff",
              httpMethod: "POST",
              parameters: {
                userKey: {
                  location: "path",
                  description:
                    "Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.",
                  type: "string",
                  required: true,
                },
              },
              parameterOrder: ["userKey"],
              path: "admin/directory/v1/users/{userKey}/twoStepVerification/turnOff",
              description: "Turns off 2-Step Verification for user.",
              id: "directory.twoStepVerification.turnOff",
              scopes: [
                "https://www.googleapis.com/auth/admin.directory.user.security",
              ],
            },
          },
        },
        customer: {
          resources: {
            devices: {
              resources: {
                chromeos: {
                  resources: {
                    commands: {
                      methods: {
                        get: {
                          id: "admin.customer.devices.chromeos.commands.get",
                          path: "admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId}/commands/{commandId}",
                          flatPath:
                            "admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId}/commands/{commandId}",
                          parameterOrder: [
                            "customerId",
                            "deviceId",
                            "commandId",
                          ],
                          httpMethod: "GET",
                          description:
                            "Gets command data a specific command issued to the device.",
                          response: {
                            $ref: "DirectoryChromeosdevicesCommand",
                          },
                          parameters: {
                            customerId: {
                              location: "path",
                              type: "string",
                              required: true,
                              description:
                                "Immutable. Immutable ID of the Google Workspace account.",
                            },
                            deviceId: {
                              required: true,
                              location: "path",
                              description:
                                "Immutable. Immutable ID of Chrome OS Device.",
                              type: "string",
                            },
                            commandId: {
                              required: true,
                              type: "string",
                              description:
                                "Immutable. Immutable ID of Chrome OS Device Command.",
                              format: "int64",
                              location: "path",
                            },
                          },
                          scopes: [
                            "https://www.googleapis.com/auth/admin.directory.device.chromeos",
                            "https://www.googleapis.com/auth/admin.directory.device.chromeos.readonly",
                          ],
                        },
                      },
                    },
                  },
                  methods: {
                    issueCommand: {
                      scopes: [
                        "https://www.googleapis.com/auth/admin.directory.device.chromeos",
                      ],
                      httpMethod: "POST",
                      parameterOrder: ["customerId", "deviceId"],
                      path: "admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId}:issueCommand",
                      flatPath:
                        "admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId}:issueCommand",
                      request: {
                        $ref: "DirectoryChromeosdevicesIssueCommandRequest",
                      },
                      parameters: {
                        deviceId: {
                          description:
                            "Immutable. Immutable ID of Chrome OS Device.",
                          required: true,
                          type: "string",
                          location: "path",
                        },
                        customerId: {
                          required: true,
                          description:
                            "Immutable. Immutable ID of the Google Workspace account.",
                          type: "string",
                          location: "path",
                        },
                      },
                      response: {
                        $ref: "DirectoryChromeosdevicesIssueCommandResponse",
                      },
                      description:
                        "Issues a command for the device to execute.",
                      id: "admin.customer.devices.chromeos.issueCommand",
                    },
                  },
                },
              },
            },
          },
        },
        chromeosdevices: {
          methods: {
            patch: {
              flatPath:
                "admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId}",
              httpMethod: "PATCH",
              response: {
                $ref: "ChromeOsDevice",
              },
              parameterOrder: ["customerId", "deviceId"],
              description:
                "Updates a device's updatable properties, such as `annotatedUser`, `annotatedLocation`, `notes`, `orgUnitPath`, or `annotatedAssetId`. This method supports [patch semantics](/admin-sdk/directory/v1/guides/performance#patch).",
              parameters: {
                projection: {
                  description:
                    "Restrict information returned to a set of selected fields.",
                  enum: ["BASIC", "FULL"],
                  location: "query",
                  type: "string",
                  enumDescriptions: [
                    "Includes only the basic metadata fields (e.g., deviceId, serialNumber, status, and user)",
                    "Includes all metadata fields",
                  ],
                },
                customerId: {
                  description:
                    "The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](/admin-sdk/directory/v1/reference/users).",
                  required: true,
                  location: "path",
                  type: "string",
                },
                deviceId: {
                  type: "string",
                  location: "path",
                  required: true,
                  description:
                    "The unique ID of the device. The `deviceId`s are returned in the response from the [chromeosdevices.list](/admin-sdk/v1/reference/chromeosdevices/list) method.",
                },
              },
              scopes: [
                "https://www.googleapis.com/auth/admin.directory.device.chromeos",
              ],
              request: {
                $ref: "ChromeOsDevice",
              },
              id: "directory.chromeosdevices.patch",
              path: "admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId}",
            },
            get: {
              description: "Retrieves a Chrome OS device's properties.",
              parameters: {
                deviceId: {
                  required: true,
                  description:
                    "The unique ID of the device. The `deviceId`s are returned in the response from the [chromeosdevices.list](/admin-sdk/directory/v1/reference/chromeosdevices/list) method.",
                  location: "path",
                  type: "string",
                },
                customerId: {
                  type: "string",
                  location: "path",
                  required: true,
                  description:
                    "The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](/admin-sdk/directory/v1/reference/users).",
                },
                projection: {
                  description:
                    "Determines whether the response contains the full list of properties or only a subset.",
                  type: "string",
                  enum: ["BASIC", "FULL"],
                  location: "query",
                  enumDescriptions: [
                    "Includes only the basic metadata fields (e.g., deviceId, serialNumber, status, and user)",
                    "Includes all metadata fields",
                  ],
                },
              },
              httpMethod: "GET",
              id: "directory.chromeosdevices.get",
              flatPath:
                "admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId}",
              response: {
                $ref: "ChromeOsDevice",
              },
              scopes: [
                "https://www.googleapis.com/auth/admin.directory.device.chromeos",
                "https://www.googleapis.com/auth/admin.directory.device.chromeos.readonly",
              ],
              path: "admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId}",
              parameterOrder: ["customerId", "deviceId"],
            },
            moveDevicesToOu: {
              id: "directory.chromeosdevices.moveDevicesToOu",
              scopes: [
                "https://www.googleapis.com/auth/admin.directory.device.chromeos",
              ],
              description:
                "Moves or inserts multiple Chrome OS devices to an organizational unit. You can move up to 50 devices at once.",
              path: "admin/directory/v1/customer/{customerId}/devices/chromeos/moveDevicesToOu",
              request: {
                $ref: "ChromeOsMoveDevicesToOu",
              },
              parameters: {
                orgUnitPath: {
                  type: "string",
                  required: true,
                  description:
                    "Full path of the target organizational unit or its ID",
                  location: "query",
                },
                customerId: {
                  location: "path",
                  required: true,
                  description: "Immutable ID of the Google Workspace account",
                  type: "string",
                },
              },
              flatPath:
                "admin/directory/v1/customer/{customerId}/devices/chromeos/moveDevicesToOu",
              parameterOrder: ["customerId", "orgUnitPath"],
              httpMethod: "POST",
            },
            update: {
              scopes: [
                "https://www.googleapis.com/auth/admin.directory.device.chromeos",
              ],
              parameters: {
                projection: {
                  description:
                    "Restrict information returned to a set of selected fields.",
                  enumDescriptions: [
                    "Includes only the basic metadata fields (e.g., deviceId, serialNumber, status, and user)",
                    "Includes all metadata fields",
                  ],
                  enum: ["BASIC", "FULL"],
                  location: "query",
                  type: "string",
                },
                customerId: {
                  required: true,
                  type: "string",
                  description:
                    "The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](/admin-sdk/directory/v1/reference/users).",
                  location: "path",
                },
                deviceId: {
                  type: "string",
                  location: "path",
                  description:
                    "The unique ID of the device. The `deviceId`s are returned in the response from the [chromeosdevices.list](/admin-sdk/v1/reference/chromeosdevices/list) method.",
                  required: true,
                },
              },
              httpMethod: "PUT",
              response: {
                $ref: "ChromeOsDevice",
              },
              id: "directory.chromeosdevices.update",
              path: "admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId}",
              parameterOrder: ["customerId", "deviceId"],
              request: {
                $ref: "ChromeOsDevice",
              },
              flatPath:
                "admin/directory/v1/customer/{customerId}/devices/chromeos/{deviceId}",
              description:
                "Updates a device's updatable properties, such as `annotatedUser`, `annotatedLocation`, `notes`, `orgUnitPath`, or `annotatedAssetId`.",
            },
            action: {
              id: "directory.chromeosdevices.action",
              flatPath:
                "admin/directory/v1/customer/{customerId}/devices/chromeos/{resourceId}/action",
              scopes: [
                "https://www.googleapis.com/auth/admin.directory.device.chromeos",
              ],
              parameterOrder: ["customerId", "resourceId"],
              description:
                "Takes an action that affects a Chrome OS Device. This includes deprovisioning, disabling, and re-enabling devices. *Warning:* * Deprovisioning a device will stop device policy syncing and remove device-level printers. After a device is deprovisioned, it must be wiped before it can be re-enrolled. * Lost or stolen devices should use the disable action. * Re-enabling a disabled device will consume a device license. If you do not have sufficient licenses available when completing the re-enable action, you will receive an error. For more information about deprovisioning and disabling devices, visit the [help center](https://support.google.com/chrome/a/answer/3523633).",
              httpMethod: "POST",
              parameters: {
                resourceId: {
                  description:
                    "The unique ID of the device. The `resourceId`s are returned in the response from the [chromeosdevices.list](/admin-sdk/directory/v1/reference/chromeosdevices/list) method.",
                  location: "path",
                  type: "string",
                  required: true,
                },
                customerId: {
                  description:
                    "The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](/admin-sdk/directory/v1/reference/users).",
                  type: "string",
                  location: "path",
                  required: true,
                },
              },
              path: "admin/directory/v1/customer/{customerId}/devices/chromeos/{resourceId}/action",
              request: {
                $ref: "ChromeOsDeviceAction",
              },
            },
            list: {
              response: {
                $ref: "ChromeOsDevices",
              },
              httpMethod: "GET",
              parameterOrder: ["customerId"],
              description:
                "Retrieves a paginated list of Chrome OS devices within an account.",
              id: "directory.chromeosdevices.list",
              scopes: [
                "https://www.googleapis.com/auth/admin.directory.device.chromeos",
                "https://www.googleapis.com/auth/admin.directory.device.chromeos.readonly",
              ],
              path: "admin/directory/v1/customer/{customerId}/devices/chromeos",
              parameters: {
                orgUnitPath: {
                  description:
                    "The full path of the organizational unit (minus the leading `/`) or its unique ID.",
                  type: "string",
                  location: "query",
                },
                customerId: {
                  type: "string",
                  required: true,
                  location: "path",
                  description:
                    "The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](/admin-sdk/directory/v1/reference/users).",
                },
                maxResults: {
                  minimum: "1",
                  description: "Maximum number of results to return.",
                  format: "int32",
                  default: "100",
                  location: "query",
                  type: "integer",
                },
                pageToken: {
                  description:
                    "The `pageToken` query parameter is used to request the next page of query results. The follow-on request's `pageToken` query parameter is the `nextPageToken` from your previous response.",
                  type: "string",
                  location: "query",
                },
                sortOrder: {
                  enumDescriptions: ["Ascending order.", "Descending order."],
                  enum: ["ASCENDING", "DESCENDING"],
                  description:
                    "Whether to return results in ascending or descending order. Must be used with the `orderBy` parameter.",
                  location: "query",
                  type: "string",
                },
                query: {
                  type: "string",
                  location: "query",
                  description:
                    "Search string in the format given at https://developers.google.com/admin-sdk/directory/v1/list-query-operators",
                },
                includeChildOrgunits: {
                  description:
                    "Return devices from all child orgunits, as well as the specified org unit. If this is set to true 'orgUnitPath' must be provided.",
                  type: "boolean",
                  location: "query",
                },
                orderBy: {
                  description: "Device property to use for sorting results.",
                  location: "query",
                  enumDescriptions: [
                    "Chrome device location as annotated by the administrator.",
                    "Chromebook user as annotated by administrator.",
                    "The date and time the Chrome device was last synchronized with the policy settings in the Admin console.",
                    "Chrome device notes as annotated by the administrator.",
                    "The Chrome device serial number entered when the device was enabled.",
                    "Chrome device status. For more information, see the \u003ca [chromeosdevices](/admin-sdk/directory/v1/reference/chromeosdevices.html).",
                    "Chrome device support end date. This is applicable only for devices purchased directly from Google.",
                  ],
                  enum: [
                    "annotatedLocation",
                    "annotatedUser",
                    "lastSync",
                    "notes",
                    "serialNumber",
                    "status",
                    "supportEndDate",
                  ],
                  type: "string",
                },
                projection: {
                  type: "string",
                  enum: ["BASIC", "FULL"],
                  description:
                    "Restrict information returned to a set of selected fields.",
                  enumDescriptions: [
                    "Includes only the basic metadata fields (e.g., deviceId, serialNumber, status, and user)",
                    "Includes all metadata fields",
                  ],
                  location: "query",
                },
              },
              flatPath:
                "admin/directory/v1/customer/{customerId}/devices/chromeos",
            },
          },
        },
        domains: {
          methods: {
            insert: {
              path: "admin/directory/v1/customer/{customer}/domains",
              description: "Inserts a domain of the customer.",
              id: "directory.domains.insert",
              scopes: [
                "https://www.googleapis.com/auth/admin.directory.domain",
              ],
              flatPath: "admin/directory/v1/customer/{customer}/domains",
              parameterOrder: ["customer"],
              httpMethod: "POST",
              request: {
                $ref: "Domains",
              },
              response: {
                $ref: "Domains",
              },
              parameters: {
                customer: {
                  location: "path",
                  type: "string",
                  required: true,
                  description: "Immutable ID of the Google Workspace account.",
                },
              },
            },
            get: {
              flatPath:
                "admin/directory/v1/customer/{customer}/domains/{domainName}",
              parameterOrder: ["customer", "domainName"],
              id: "directory.domains.get",
              description: "Retrieves a domain of the customer.",
              parameters: {
                customer: {
                  required: true,
                  location: "path",
                  description: "Immutable ID of the Google Workspace account.",
                  type: "string",
                },
                domainName: {
                  type: "string",
                  location: "path",
                  required: true,
                  description: "Name of domain to be retrieved",
                },
              },
              path: "admin/directory/v1/customer/{customer}/domains/{domainName}",
              scopes: [
                "https://www.googleapis.com/auth/admin.directory.domain",
                "https://www.googleapis.com/auth/admin.directory.domain.readonly",
              ],
              httpMethod: "GET",
              response: {
                $ref: "Domains",
              },
            },
            list: {
              description: "Lists the domains of the customer.",
              response: {
                $ref: "Domains2",
              },
              flatPath: "admin/directory/v1/customer/{customer}/domains",
              httpMethod: "GET",
              scopes: [
                "https://www.googleapis.com/auth/admin.directory.domain",
                "https://www.googleapis.com/auth/admin.directory.domain.readonly",
              ],
              parameters: {
                customer: {
                  required: true,
                  type: "string",
                  description: "Immutable ID of the Google Workspace account.",
                  location: "path",
                },
              },
              parameterOrder: ["customer"],
              id: "directory.domains.list",
              path: "admin/directory/v1/customer/{customer}/domains",
            },
            delete: {
              parameterOrder: ["customer", "domainName"],
              scopes: [
                "https://www.googleapis.com/auth/admin.directory.domain",
              ],
              flatPath:
                "admin/directory/v1/customer/{customer}/domains/{domainName}",
              id: "directory.domains.delete",
              parameters: {
                domainName: {
                  required: true,
                  type: "string",
                  location: "path",
                  description: "Name of domain to be deleted",
                },
                customer: {
                  location: "path",
                  description: "Immutable ID of the Google Workspace account.",
                  type: "string",
                  required: true,
                },
              },
              path: "admin/directory/v1/customer/{customer}/domains/{domainName}",
              httpMethod: "DELETE",
              description: "Deletes a domain of the customer.",
            },
          },
        },
        tokens: {
          methods: {
            get: {
              parameters: {
                clientId: {
                  description:
                    "The Client ID of the application the token is issued to.",
                  type: "string",
                  location: "path",
                  required: true,
                },
                userKey: {
                  required: true,
                  location: "path",
                  description:
                    "Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.",
                  type: "string",
                },
              },
              response: {
                $ref: "Token",
              },
              scopes: [
                "https://www.googleapis.com/auth/admin.directory.user.security",
              ],
              id: "directory.tokens.get",
              flatPath: "admin/directory/v1/users/{userKey}/tokens/{clientId}",
              description:
                "Gets information about an access token issued by a user.",
              path: "admin/directory/v1/users/{userKey}/tokens/{clientId}",
              httpMethod: "GET",
              parameterOrder: ["userKey", "clientId"],
            },
            list: {
              description:
                "Returns the set of tokens specified user has issued to 3rd party applications.",
              flatPath: "admin/directory/v1/users/{userKey}/tokens",
              httpMethod: "GET",
              response: {
                $ref: "Tokens",
              },
              parameters: {
                userKey: {
                  required: true,
                  location: "path",
                  type: "string",
                  description:
                    "Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.",
                },
              },
              path: "admin/directory/v1/users/{userKey}/tokens",
              id: "directory.tokens.list",
              parameterOrder: ["userKey"],
              scopes: [
                "https://www.googleapis.com/auth/admin.directory.user.security",
              ],
            },
            delete: {
              flatPath: "admin/directory/v1/users/{userKey}/tokens/{clientId}",
              path: "admin/directory/v1/users/{userKey}/tokens/{clientId}",
              scopes: [
                "https://www.googleapis.com/auth/admin.directory.user.security",
              ],
              parameterOrder: ["userKey", "clientId"],
              httpMethod: "DELETE",
              parameters: {
                clientId: {
                  location: "path",
                  type: "string",
                  required: true,
                  description:
                    "The Client ID of the application the token is issued to.",
                },
                userKey: {
                  location: "path",
                  type: "string",
                  required: true,
                  description:
                    "Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.",
                },
              },
              description:
                "Deletes all access tokens issued by a user for an application.",
              id: "directory.tokens.delete",
            },
          },
        },
        members: {
          methods: {
            insert: {
              id: "directory.members.insert",
              parameterOrder: ["groupKey"],
              path: "admin/directory/v1/groups/{groupKey}/members",
              scopes: [
                "https://www.googleapis.com/auth/admin.directory.group",
                "https://www.googleapis.com/auth/admin.directory.group.member",
              ],
              response: {
                $ref: "Member",
              },
              httpMethod: "POST",
              description: "Adds a user to the specified group.",
              flatPath: "admin/directory/v1/groups/{groupKey}/members",
              request: {
                $ref: "Member",
              },
              parameters: {
                groupKey: {
                  type: "string",
                  location: "path",
                  description:
                    "Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.",
                  required: true,
                },
              },
            },
            patch: {
              parameters: {
                groupKey: {
                  required: true,
                  type: "string",
                  location: "path",
                  description:
                    "Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.",
                },
                memberKey: {
                  location: "path",
                  description:
                    "Identifies the group member in the API request. A group member can be a user or another group. The value can be the member's (group or user) primary email address, alias, or unique ID.",
                  type: "string",
                  required: true,
                },
              },
              response: {
                $ref: "Member",
              },
              scopes: [
                "https://www.googleapis.com/auth/admin.directory.group",
                "https://www.googleapis.com/auth/admin.directory.group.member",
              ],
              request: {
                $ref: "Member",
              },
              parameterOrder: ["groupKey", "memberKey"],
              description:
                "Updates the membership properties of a user in the specified group. This method supports [patch semantics](/admin-sdk/directory/v1/guides/performance#patch).",
              path: "admin/directory/v1/groups/{groupKey}/members/{memberKey}",
              id: "directory.members.patch",
              flatPath:
                "admin/directory/v1/groups/{groupKey}/members/{memberKey}",
              httpMethod: "PATCH",
            },
            delete: {
              id: "directory.members.delete",
              parameterOrder: ["groupKey", "memberKey"],
              description: "Removes a member from a group.",
              httpMethod: "DELETE",
              flatPath:
                "admin/directory/v1/groups/{groupKey}/members/{memberKey}",
              path: "admin/directory/v1/groups/{groupKey}/members/{memberKey}",
              parameters: {
                memberKey: {
                  location: "path",
                  required: true,
                  type: "string",
                  description:
                    "Identifies the group member in the API request. A group member can be a user or another group. The value can be the member's (group or user) primary email address, alias, or unique ID.",
                },
                groupKey: {
                  description:
                    "Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.",
                  type: "string",
                  required: true,
                  location: "path",
                },
              },
              scopes: [
                "https://www.googleapis.com/auth/admin.directory.group",
                "https://www.googleapis.com/auth/admin.directory.group.member",
              ],
            },
            update: {
              flatPath:
                "admin/directory/v1/groups/{groupKey}/members/{memberKey}",
              parameters: {
                groupKey: {
                  required: true,
                  description:
                    "Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.",
                  type: "string",
                  location: "path",
                },
                memberKey: {
                  description:
                    "Identifies the group member in the API request. A group member can be a user or another group. The value can be the member's (group or user) primary email address, alias, or unique ID.",
                  required: true,
                  location: "path",
                  type: "string",
                },
              },
              response: {
                $ref: "Member",
              },
              httpMethod: "PUT",
              scopes: [
                "https://www.googleapis.com/auth/admin.directory.group",
                "https://www.googleapis.com/auth/admin.directory.group.member",
              ],
              parameterOrder: ["groupKey", "memberKey"],
              path: "admin/directory/v1/groups/{groupKey}/members/{memberKey}",
              description:
                "Updates the membership of a user in the specified group.",
              request: {
                $ref: "Member",
              },
              id: "directory.members.update",
            },
            list: {
              response: {
                $ref: "Members",
              },
              scopes: [
                "https://www.googleapis.com/auth/admin.directory.group",
                "https://www.googleapis.com/auth/admin.directory.group.member",
                "https://www.googleapis.com/auth/admin.directory.group.member.readonly",
                "https://www.googleapis.com/auth/admin.directory.group.readonly",
              ],
              parameterOrder: ["groupKey"],
              id: "directory.members.list",
              path: "admin/directory/v1/groups/{groupKey}/members",
              parameters: {
                roles: {
                  location: "query",
                  type: "string",
                  description:
                    "The `roles` query parameter allows you to retrieve group members by role. Allowed values are `OWNER`, `MANAGER`, and `MEMBER`.",
                },
                groupKey: {
                  type: "string",
                  location: "path",
                  description:
                    "Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.",
                  required: true,
                },
                pageToken: {
                  description: "Token to specify next page in the list.",
                  type: "string",
                  location: "query",
                },
                maxResults: {
                  minimum: "1",
                  format: "int32",
                  description:
                    "Maximum number of results to return. Max allowed value is 200.",
                  location: "query",
                  type: "integer",
                  default: "200",
                },
                includeDerivedMembership: {
                  description:
                    "Whether to list indirect memberships. Default: false.",
                  type: "boolean",
                  location: "query",
                },
              },
              httpMethod: "GET",
              flatPath: "admin/directory/v1/groups/{groupKey}/members",
              description:
                "Retrieves a paginated list of all members in a group.",
            },
            hasMember: {
              flatPath:
                "admin/directory/v1/groups/{groupKey}/hasMember/{memberKey}",
              scopes: [
                "https://www.googleapis.com/auth/admin.directory.group",
                "https://www.googleapis.com/auth/admin.directory.group.member",
                "https://www.googleapis.com/auth/admin.directory.group.member.readonly",
                "https://www.googleapis.com/auth/admin.directory.group.readonly",
              ],
              response: {
                $ref: "MembersHasMember",
              },
              path: "admin/directory/v1/groups/{groupKey}/hasMember/{memberKey}",
              id: "directory.members.hasMember",
              httpMethod: "GET",
              parameterOrder: ["groupKey", "memberKey"],
              parameters: {
                memberKey: {
                  type: "string",
                  description:
                    "Identifies the user member in the API request. The value can be the user's primary email address, alias, or unique ID.",
                  required: true,
                  location: "path",
                },
                groupKey: {
                  type: "string",
                  required: true,
                  description:
                    "Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.",
                  location: "path",
                },
              },
              description:
                "Checks whether the given user is a member of the group. Membership can be direct or nested.",
            },
            get: {
              response: {
                $ref: "Member",
              },
              path: "admin/directory/v1/groups/{groupKey}/members/{memberKey}",
              description: "Retrieves a group member's properties.",
              parameters: {
                memberKey: {
                  required: true,
                  type: "string",
                  description:
                    "Identifies the group member in the API request. A group member can be a user or another group. The value can be the member's (group or user) primary email address, alias, or unique ID.",
                  location: "path",
                },
                groupKey: {
                  required: true,
                  location: "path",
                  type: "string",
                  description:
                    "Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.",
                },
              },
              flatPath:
                "admin/directory/v1/groups/{groupKey}/members/{memberKey}",
              id: "directory.members.get",
              httpMethod: "GET",
              scopes: [
                "https://www.googleapis.com/auth/admin.directory.group",
                "https://www.googleapis.com/auth/admin.directory.group.member",
                "https://www.googleapis.com/auth/admin.directory.group.member.readonly",
                "https://www.googleapis.com/auth/admin.directory.group.readonly",
              ],
              parameterOrder: ["groupKey", "memberKey"],
            },
          },
        },
        verificationCodes: {
          methods: {
            list: {
              httpMethod: "GET",
              scopes: [
                "https://www.googleapis.com/auth/admin.directory.user.security",
              ],
              path: "admin/directory/v1/users/{userKey}/verificationCodes",
              id: "directory.verificationCodes.list",
              parameters: {
                userKey: {
                  location: "path",
                  required: true,
                  description:
                    "Identifies the user in the API request. The value can be the user's primary email address, alias email address, or unique user ID.",
                  type: "string",
                },
              },
              description:
                "Returns the current set of valid backup verification codes for the specified user.",
              response: {
                $ref: "VerificationCodes",
              },
              parameterOrder: ["userKey"],
              flatPath: "admin/directory/v1/users/{userKey}/verificationCodes",
            },
            generate: {
              httpMethod: "POST",
              parameterOrder: ["userKey"],
              flatPath:
                "admin/directory/v1/users/{userKey}/verificationCodes/generate",
              parameters: {
                userKey: {
                  type: "string",
                  required: true,
                  description: "Email or immutable ID of the user",
                  location: "path",
                },
              },
              id: "directory.verificationCodes.generate",
              description:
                "Generates new backup verification codes for the user.",
              scopes: [
                "https://www.googleapis.com/auth/admin.directory.user.security",
              ],
              path: "admin/directory/v1/users/{userKey}/verificationCodes/generate",
            },
            invalidate: {
              flatPath:
                "admin/directory/v1/users/{userKey}/verificationCodes/invalidate",
              parameters: {
                userKey: {
                  description: "Email or immutable ID of the user",
                  required: true,
                  location: "path",
                  type: "string",
                },
              },
              description:
                "Invalidates the current backup verification codes for the user.",
              httpMethod: "POST",
              id: "directory.verificationCodes.invalidate",
              parameterOrder: ["userKey"],
              path: "admin/directory/v1/users/{userKey}/verificationCodes/invalidate",
              scopes: [
                "https://www.googleapis.com/auth/admin.directory.user.security",
              ],
            },
          },
        },
        groups: {
          methods: {
            insert: {
              parameterOrder: [],
              id: "directory.groups.insert",
              scopes: ["https://www.googleapis.com/auth/admin.directory.group"],
              path: "admin/directory/v1/groups",
              parameters: {},
              flatPath: "admin/directory/v1/groups",
              description: "Creates a group.",
              request: {
                $ref: "Group",
              },
              response: {
                $ref: "Group",
              },
              httpMethod: "POST",
            },
            get: {
              description: "Retrieves a group's properties.",
              path: "admin/directory/v1/groups/{groupKey}",
              response: {
                $ref: "Group",
              },
              flatPath: "admin/directory/v1/groups/{groupKey}",
              parameters: {
                groupKey: {
                  description:
                    "Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.",
                  location: "path",
                  required: true,
                  type: "string",
                },
              },
              scopes: [
                "https://www.googleapis.com/auth/admin.directory.group",
                "https://www.googleapis.com/auth/admin.directory.group.readonly",
              ],
              parameterOrder: ["groupKey"],
              httpMethod: "GET",
              id: "directory.groups.get",
            },
            update: {
              description: "Updates a group's properties.",
              request: {
                $ref: "Group",
              },
              response: {
                $ref: "Group",
              },
              scopes: ["https://www.googleapis.com/auth/admin.directory.group"],
              flatPath: "admin/directory/v1/groups/{groupKey}",
              parameters: {
                groupKey: {
                  type: "string",
                  required: true,
                  location: "path",
                  description:
                    "Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.",
                },
              },
              httpMethod: "PUT",
              path: "admin/directory/v1/groups/{groupKey}",
              id: "directory.groups.update",
              parameterOrder: ["groupKey"],
            },
            delete: {
              description: "Deletes a group.",
              id: "directory.groups.delete",
              scopes: ["https://www.googleapis.com/auth/admin.directory.group"],
              httpMethod: "DELETE",
              parameterOrder: ["groupKey"],
              parameters: {
                groupKey: {
                  type: "string",
                  required: true,
                  description:
                    "Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.",
                  location: "path",
                },
              },
              flatPath: "admin/directory/v1/groups/{groupKey}",
              path: "admin/directory/v1/groups/{groupKey}",
            },
            list: {
              flatPath: "admin/directory/v1/groups",
              parameterOrder: [],
              path: "admin/directory/v1/groups",
              response: {
                $ref: "Groups",
              },
              description:
                "Retrieves all groups of a domain or of a user given a userKey (paginated).",
              scopes: [
                "https://www.googleapis.com/auth/admin.directory.group",
                "https://www.googleapis.com/auth/admin.directory.group.readonly",
              ],
              id: "directory.groups.list",
              parameters: {
                domain: {
                  location: "query",
                  type: "string",
                  description:
                    "The domain name. Use this field to get groups from only one domain. To return all domains for a customer account, use the `customer` query parameter instead.",
                },
                maxResults: {
                  format: "int32",
                  location: "query",
                  description:
                    "Maximum number of results to return. Max allowed value is 200.",
                  default: "200",
                  type: "integer",
                  minimum: "1",
                },
                orderBy: {
                  enum: ["email"],
                  type: "string",
                  description: "Column to use for sorting results",
                  location: "query",
                  enumDescriptions: ["Email of the group."],
                },
                userKey: {
                  type: "string",
                  location: "query",
                  description:
                    "Email or immutable ID of the user if only those groups are to be listed, the given user is a member of. If it's an ID, it should match with the ID of the user object.",
                },
                customer: {
                  description:
                    "The unique ID for the customer's Google Workspace account. In case of a multi-domain account, to fetch all groups for a customer, fill in this field instead of `domain`. You can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users](/admin-sdk/directory/v1/reference/users) resource. Either the `customer` or the `domain` parameter must be provided.",
                  location: "query",
                  type: "string",
                },
                pageToken: {
                  description: "Token to specify next page in the list",
                  location: "query",
                  type: "string",
                },
                sortOrder: {
                  description:
                    "Whether to return results in ascending or descending order. Only of use when orderBy is also used",
                  enumDescriptions: ["Ascending order.", "Descending order."],
                  enum: ["ASCENDING", "DESCENDING"],
                  location: "query",
                  type: "string",
                },
                query: {
                  type: "string",
                  description:
                    'Query string search. Should be of the form "". Complete documentation is at https: //developers.google.com/admin-sdk/directory/v1/guides/search-groups',
                  location: "query",
                },
              },
              httpMethod: "GET",
            },
            patch: {
              response: {
                $ref: "Group",
              },
              httpMethod: "PATCH",
              parameterOrder: ["groupKey"],
              id: "directory.groups.patch",
              request: {
                $ref: "Group",
              },
              parameters: {
                groupKey: {
                  description:
                    "Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.",
                  type: "string",
                  required: true,
                  location: "path",
                },
              },
              description:
                "Updates a group's properties. This method supports [patch semantics](/admin-sdk/directory/v1/guides/performance#patch).",
              scopes: ["https://www.googleapis.com/auth/admin.directory.group"],
              path: "admin/directory/v1/groups/{groupKey}",
              flatPath: "admin/directory/v1/groups/{groupKey}",
            },
          },
          resources: {
            aliases: {
              methods: {
                insert: {
                  response: {
                    $ref: "Alias",
                  },
                  parameters: {
                    groupKey: {
                      required: true,
                      type: "string",
                      location: "path",
                      description:
                        "Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.",
                    },
                  },
                  path: "admin/directory/v1/groups/{groupKey}/aliases",
                  description: "Adds an alias for the group.",
                  parameterOrder: ["groupKey"],
                  id: "directory.groups.aliases.insert",
                  request: {
                    $ref: "Alias",
                  },
                  scopes: [
                    "https://www.googleapis.com/auth/admin.directory.group",
                  ],
                  httpMethod: "POST",
                  flatPath: "admin/directory/v1/groups/{groupKey}/aliases",
                },
                list: {
                  parameters: {
                    groupKey: {
                      location: "path",
                      type: "string",
                      description:
                        "Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.",
                      required: true,
                    },
                  },
                  path: "admin/directory/v1/groups/{groupKey}/aliases",
                  scopes: [
                    "https://www.googleapis.com/auth/admin.directory.group",
                    "https://www.googleapis.com/auth/admin.directory.group.readonly",
                  ],
                  flatPath: "admin/directory/v1/groups/{groupKey}/aliases",
                  id: "directory.groups.aliases.list",
                  httpMethod: "GET",
                  parameterOrder: ["groupKey"],
                  description: "Lists all aliases for a group.",
                  response: {
                    $ref: "Aliases",
                  },
                },
                delete: {
                  httpMethod: "DELETE",
                  scopes: [
                    "https://www.googleapis.com/auth/admin.directory.group",
                  ],
                  flatPath:
                    "admin/directory/v1/groups/{groupKey}/aliases/{alias}",
                  path: "admin/directory/v1/groups/{groupKey}/aliases/{alias}",
                  parameters: {
                    alias: {
                      location: "path",
                      type: "string",
                      description: "The alias to be removed",
                      required: true,
                    },
                    groupKey: {
                      type: "string",
                      required: true,
                      location: "path",
                      description:
                        "Identifies the group in the API request. The value can be the group's email address, group alias, or the unique group ID.",
                    },
                  },
                  id: "directory.groups.aliases.delete",
                  parameterOrder: ["groupKey", "alias"],
                  description: "Removes an alias.",
                },
              },
            },
          },
        },
        customers: {
          methods: {
            get: {
              description: "Retrieves a customer.",
              flatPath: "admin/directory/v1/customers/{customerKey}",
              response: {
                $ref: "Customer",
              },
              id: "directory.customers.get",
              scopes: [
                "https://www.googleapis.com/auth/admin.directory.customer",
                "https://www.googleapis.com/auth/admin.directory.customer.readonly",
              ],
              parameters: {
                customerKey: {
                  description: "Id of the customer to be retrieved",
                  location: "path",
                  required: true,
                  type: "string",
                },
              },
              path: "admin/directory/v1/customers/{customerKey}",
              httpMethod: "GET",
              parameterOrder: ["customerKey"],
            },
            patch: {
              flatPath: "admin/directory/v1/customers/{customerKey}",
              parameters: {
                customerKey: {
                  required: true,
                  description: "Id of the customer to be updated",
                  location: "path",
                  type: "string",
                },
              },
              path: "admin/directory/v1/customers/{customerKey}",
              parameterOrder: ["customerKey"],
              description: "Patches a customer.",
              scopes: [
                "https://www.googleapis.com/auth/admin.directory.customer",
              ],
              id: "directory.customers.patch",
              httpMethod: "PATCH",
              request: {
                $ref: "Customer",
              },
              response: {
                $ref: "Customer",
              },
            },
            update: {
              description: "Updates a customer.",
              scopes: [
                "https://www.googleapis.com/auth/admin.directory.customer",
              ],
              parameterOrder: ["customerKey"],
              path: "admin/directory/v1/customers/{customerKey}",
              id: "directory.customers.update",
              parameters: {
                customerKey: {
                  description: "Id of the customer to be updated",
                  location: "path",
                  required: true,
                  type: "string",
                },
              },
              request: {
                $ref: "Customer",
              },
              response: {
                $ref: "Customer",
              },
              httpMethod: "PUT",
              flatPath: "admin/directory/v1/customers/{customerKey}",
            },
          },
          resources: {
            chrome: {
              resources: {
                printers: {
                  methods: {
                    batchCreatePrinters: {
                      httpMethod: "POST",
                      parameterOrder: ["parent"],
                      flatPath:
                        "admin/directory/v1/customers/{customersId}/chrome/printers:batchCreatePrinters",
                      response: {
                        $ref: "BatchCreatePrintersResponse",
                      },
                      scopes: [
                        "https://www.googleapis.com/auth/admin.chrome.printers",
                      ],
                      parameters: {
                        parent: {
                          pattern: "^customers/[^/]+$",
                          location: "path",
                          type: "string",
                          description:
                            "Required. The name of the customer. Format: customers/{customer_id}",
                          required: true,
                        },
                      },
                      request: {
                        $ref: "BatchCreatePrintersRequest",
                      },
                      description:
                        "Creates printers under given Organization Unit.",
                      id: "admin.customers.chrome.printers.batchCreatePrinters",
                      path: "admin/directory/v1/{+parent}/chrome/printers:batchCreatePrinters",
                    },
                    patch: {
                      request: {
                        $ref: "Printer",
                      },
                      httpMethod: "PATCH",
                      parameterOrder: ["name"],
                      id: "admin.customers.chrome.printers.patch",
                      response: {
                        $ref: "Printer",
                      },
                      path: "admin/directory/v1/{+name}",
                      scopes: [
                        "https://www.googleapis.com/auth/admin.chrome.printers",
                      ],
                      description: "Updates a `Printer` resource.",
                      flatPath:
                        "admin/directory/v1/customers/{customersId}/chrome/printers/{printersId}",
                      parameters: {
                        updateMask: {
                          location: "query",
                          format: "google-fieldmask",
                          type: "string",
                          description:
                            "The list of fields to be updated. Note, some of the fields are read only and cannot be updated. Values for not specified fields will be patched.",
                        },
                        clearMask: {
                          type: "string",
                          location: "query",
                          format: "google-fieldmask",
                          description:
                            "The list of fields to be cleared. Note, some of the fields are read only and cannot be updated. Values for not specified fields will be patched.",
                        },
                        name: {
                          description:
                            "The resource name of the Printer object, in the format customers/{customer-id}/printers/{printer-id} (During printer creation leave empty)",
                          pattern: "^customers/[^/]+/chrome/printers/[^/]+$",
                          required: true,
                          location: "path",
                          type: "string",
                        },
                      },
                    },
                    batchDeletePrinters: {
                      description: "Deletes printers in batch.",
                      httpMethod: "POST",
                      path: "admin/directory/v1/{+parent}/chrome/printers:batchDeletePrinters",
                      scopes: [
                        "https://www.googleapis.com/auth/admin.chrome.printers",
                      ],
                      request: {
                        $ref: "BatchDeletePrintersRequest",
                      },
                      parameterOrder: ["parent"],
                      parameters: {
                        parent: {
                          type: "string",
                          pattern: "^customers/[^/]+$",
                          required: true,
                          description:
                            "Required. The name of the customer. Format: customers/{customer_id}",
                          location: "path",
                        },
                      },
                      flatPath:
                        "admin/directory/v1/customers/{customersId}/chrome/printers:batchDeletePrinters",
                      id: "admin.customers.chrome.printers.batchDeletePrinters",
                      response: {
                        $ref: "BatchDeletePrintersResponse",
                      },
                    },
                    create: {
                      response: {
                        $ref: "Printer",
                      },
                      request: {
                        $ref: "Printer",
                      },
                      id: "admin.customers.chrome.printers.create",
                      flatPath:
                        "admin/directory/v1/customers/{customersId}/chrome/printers",
                      httpMethod: "POST",
                      path: "admin/directory/v1/{+parent}/chrome/printers",
                      scopes: [
                        "https://www.googleapis.com/auth/admin.chrome.printers",
                      ],
                      parameters: {
                        parent: {
                          required: true,
                          location: "path",
                          description:
                            "Required. The name of the customer. Format: customers/{customer_id}",
                          pattern: "^customers/[^/]+$",
                          type: "string",
                        },
                      },
                      description:
                        "Creates a printer under given Organization Unit.",
                      parameterOrder: ["parent"],
                    },
                    listPrinterModels: {
                      parameterOrder: ["parent"],
                      parameters: {
                        pageSize: {
                          format: "int32",
                          type: "integer",
                          location: "query",
                          description:
                            "The maximum number of objects to return. The service may return fewer than this value.",
                        },
                        pageToken: {
                          description:
                            "A page token, received from a previous call.",
                          type: "string",
                          location: "query",
                        },
                        filter: {
                          type: "string",
                          location: "query",
                          description:
                            'Filer to list only models by a given manufacturer in format: "manufacturer:Brother". Search syntax is shared between this api and Admin Console printers pages.',
                        },
                        parent: {
                          description:
                            "Required. The name of the customer who owns this collection of printers. Format: customers/{customer_id}",
                          pattern: "^customers/[^/]+$",
                          location: "path",
                          type: "string",
                          required: true,
                        },
                      },
                      path: "admin/directory/v1/{+parent}/chrome/printers:listPrinterModels",
                      response: {
                        $ref: "ListPrinterModelsResponse",
                      },
                      id: "admin.customers.chrome.printers.listPrinterModels",
                      scopes: [
                        "https://www.googleapis.com/auth/admin.chrome.printers",
                        "https://www.googleapis.com/auth/admin.chrome.printers.readonly",
                      ],
                      flatPath:
                        "admin/directory/v1/customers/{customersId}/chrome/printers:listPrinterModels",
                      httpMethod: "GET",
                      description: "Lists the supported printer models.",
                    },
                    get: {
                      scopes: [
                        "https://www.googleapis.com/auth/admin.chrome.printers",
                        "https://www.googleapis.com/auth/admin.chrome.printers.readonly",
                      ],
                      description:
                        "Returns a `Printer` resource (printer's config).",
                      path: "admin/directory/v1/{+name}",
                      response: {
                        $ref: "Printer",
                      },
                      parameterOrder: ["name"],
                      parameters: {
                        name: {
                          description:
                            "Required. The name of the printer to retrieve. Format: customers/{customer_id}/chrome/printers/{printer_id}",
                          type: "string",
                          pattern: "^customers/[^/]+/chrome/printers/[^/]+$",
                          required: true,
                          location: "path",
                        },
                      },
                      id: "admin.customers.chrome.printers.get",
                      flatPath:
                        "admin/directory/v1/customers/{customersId}/chrome/printers/{printersId}",
                      httpMethod: "GET",
                    },
                    delete: {
                      path: "admin/directory/v1/{+name}",
                      httpMethod: "DELETE",
                      parameters: {
                        name: {
                          type: "string",
                          required: true,
                          description:
                            "Required. The name of the printer to be updated. Format: customers/{customer_id}/chrome/printers/{printer_id}",
                          location: "path",
                          pattern: "^customers/[^/]+/chrome/printers/[^/]+$",
                        },
                      },
                      response: {
                        $ref: "Empty",
                      },
                      parameterOrder: ["name"],
                      description: "Deletes a `Printer`.",
                      scopes: [
                        "https://www.googleapis.com/auth/admin.chrome.printers",
                      ],
                      flatPath:
                        "admin/directory/v1/customers/{customersId}/chrome/printers/{printersId}",
                      id: "admin.customers.chrome.printers.delete",
                    },
                    list: {
                      id: "admin.customers.chrome.printers.list",
                      path: "admin/directory/v1/{+parent}/chrome/printers",
                      httpMethod: "GET",
                      scopes: [
                        "https://www.googleapis.com/auth/admin.chrome.printers",
                        "https://www.googleapis.com/auth/admin.chrome.printers.readonly",
                      ],
                      parameters: {
                        filter: {
                          location: "query",
                          type: "string",
                          description:
                            "Search query. Search syntax is shared between this api and Admin Console printers pages.",
                        },
                        orderBy: {
                          description:
                            'The order to sort results by. Must be one of display_name, description, make_and_model, or create_time. Default order is ascending, but descending order can be returned by appending "desc" to the order_by field. For instance, "description desc" will return the printers sorted by description in descending order.',
                          location: "query",
                          type: "string",
                        },
                        pageSize: {
                          type: "integer",
                          description:
                            "The maximum number of objects to return. The service may return fewer than this value.",
                          format: "int32",
                          location: "query",
                        },
                        orgUnitId: {
                          type: "string",
                          description:
                            "Organization Unit that we want to list the printers for. When org_unit is not present in the request then all printers of the customer are returned (or filtered). When org_unit is present in the request then only printers available to this OU will be returned (owned or inherited). You may see if printer is owned or inherited for this OU by looking at Printer.org_unit_id.",
                          location: "query",
                        },
                        parent: {
                          type: "string",
                          description:
                            "Required. The name of the customer who owns this collection of printers. Format: customers/{customer_id}",
                          pattern: "^customers/[^/]+$",
                          location: "path",
                          required: true,
                        },
                        pageToken: {
                          description:
                            "A page token, received from a previous call.",
                          type: "string",
                          location: "query",
                        },
                      },
                      description: "List printers configs.",
                      response: {
                        $ref: "ListPrintersResponse",
                      },
                      parameterOrder: ["parent"],
                      flatPath:
                        "admin/directory/v1/customers/{customersId}/chrome/printers",
                    },
                  },
                },
              },
            },
          },
        },
        orgunits: {
          methods: {
            patch: {
              scopes: [
                "https://www.googleapis.com/auth/admin.directory.orgunit",
              ],
              httpMethod: "PATCH",
              description:
                "Updates an organizational unit. This method supports [patch semantics](/admin-sdk/directory/v1/guides/performance#patch)",
              request: {
                $ref: "OrgUnit",
              },
              response: {
                $ref: "OrgUnit",
              },
              parameterOrder: ["customerId", "orgUnitPath"],
              parameters: {
                customerId: {
                  type: "string",
                  location: "path",
                  description:
                    "The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](/admin-sdk/directory/v1/reference/users).",
                  required: true,
                },
                orgUnitPath: {
                  type: "string",
                  location: "path",
                  description:
                    "The full path of the organizational unit (minus the leading `/`) or its unique ID.",
                  pattern: "^.*$",
                  required: true,
                },
              },
              id: "directory.orgunits.patch",
              flatPath:
                "admin/directory/v1/customer/{customerId}/orgunits/{orgunitsId}",
              path: "admin/directory/v1/customer/{customerId}/orgunits/{+orgUnitPath}",
            },
            insert: {
              scopes: [
                "https://www.googleapis.com/auth/admin.directory.orgunit",
              ],
              parameterOrder: ["customerId"],
              httpMethod: "POST",
              response: {
                $ref: "OrgUnit",
              },
              parameters: {
                customerId: {
                  description:
                    "The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](/admin-sdk/directory/v1/reference/users).",
                  required: true,
                  type: "string",
                  location: "path",
                },
              },
              flatPath: "admin/directory/v1/customer/{customerId}/orgunits",
              request: {
                $ref: "OrgUnit",
              },
              path: "admin/directory/v1/customer/{customerId}/orgunits",
              id: "directory.orgunits.insert",
              description: "Adds an organizational unit.",
            },
            update: {
              parameters: {
                customerId: {
                  location: "path",
                  required: true,
                  type: "string",
                  description:
                    "The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](/admin-sdk/directory/v1/reference/users).",
                },
                orgUnitPath: {
                  type: "string",
                  pattern: "^.*$",
                  required: true,
                  location: "path",
                  description:
                    "The full path of the organizational unit (minus the leading `/`) or its unique ID.",
                },
              },
              id: "directory.orgunits.update",
              description: "Updates an organizational unit.",
              parameterOrder: ["customerId", "orgUnitPath"],
              httpMethod: "PUT",
              response: {
                $ref: "OrgUnit",
              },
              request: {
                $ref: "OrgUnit",
              },
              path: "admin/directory/v1/customer/{customerId}/orgunits/{+orgUnitPath}",
              flatPath:
                "admin/directory/v1/customer/{customerId}/orgunits/{orgunitsId}",
              scopes: [
                "https://www.googleapis.com/auth/admin.directory.orgunit",
              ],
            },
            list: {
              flatPath: "admin/directory/v1/customer/{customerId}/orgunits",
              description:
                "Retrieves a list of all organizational units for an account.",
              httpMethod: "GET",
              parameterOrder: ["customerId"],
              parameters: {
                customerId: {
                  location: "path",
                  type: "string",
                  description:
                    "The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](/admin-sdk/directory/v1/reference/users).",
                  required: true,
                },
                type: {
                  enum: ["all", "children"],
                  location: "query",
                  enumDescriptions: [
                    "All sub-organizational units.",
                    "Immediate children only (default).",
                  ],
                  description:
                    "Whether to return all sub-organizations or just immediate children.",
                  type: "string",
                },
                orgUnitPath: {
                  location: "query",
                  description:
                    "The full path to the organizational unit or its unique ID. Returns the children of the specified organizational unit.",
                  default: "",
                  type: "string",
                },
              },
              scopes: [
                "https://www.googleapis.com/auth/admin.directory.orgunit",
                "https://www.googleapis.com/auth/admin.directory.orgunit.readonly",
              ],
              path: "admin/directory/v1/customer/{customerId}/orgunits",
              response: {
                $ref: "OrgUnits",
              },
              id: "directory.orgunits.list",
            },
            get: {
              description: "Retrieves an organizational unit.",
              scopes: [
                "https://www.googleapis.com/auth/admin.directory.orgunit",
                "https://www.googleapis.com/auth/admin.directory.orgunit.readonly",
              ],
              response: {
                $ref: "OrgUnit",
              },
              parameterOrder: ["customerId", "orgUnitPath"],
              flatPath:
                "admin/directory/v1/customer/{customerId}/orgunits/{orgunitsId}",
              parameters: {
                customerId: {
                  required: true,
                  location: "path",
                  type: "string",
                  description:
                    "The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](/admin-sdk/directory/v1/reference/users).",
                },
                orgUnitPath: {
                  required: true,
                  location: "path",
                  pattern: "^.*$",
                  type: "string",
                  description:
                    "The full path of the organizational unit (minus the leading `/`) or its unique ID.",
                },
              },
              id: "directory.orgunits.get",
              path: "admin/directory/v1/customer/{customerId}/orgunits/{+orgUnitPath}",
              httpMethod: "GET",
            },
            delete: {
              description: "Removes an organizational unit.",
              flatPath:
                "admin/directory/v1/customer/{customerId}/orgunits/{orgunitsId}",
              httpMethod: "DELETE",
              parameters: {
                customerId: {
                  location: "path",
                  type: "string",
                  description:
                    "The unique ID for the customer's Google Workspace account. As an account administrator, you can also use the `my_customer` alias to represent your account's `customerId`. The `customerId` is also returned as part of the [Users resource](/admin-sdk/directory/v1/reference/users).",
                  required: true,
                },
                orgUnitPath: {
                  type: "string",
                  required: true,
                  location: "path",
                  description:
                    "The full path of the organizational unit (minus the leading `/`) or its unique ID.",
                  pattern: "^.*$",
                },
              },
              id: "directory.orgunits.delete",
              parameterOrder: ["customerId", "orgUnitPath"],
              scopes: [
                "https://www.googleapis.com/auth/admin.directory.orgunit",
              ],
              path: "admin/directory/v1/customer/{customerId}/orgunits/{+orgUnitPath}",
            },
          },
        },
        channels: {
          methods: {
            stop: {
              request: {
                $ref: "Channel",
              },
              scopes: [
                "https://www.googleapis.com/auth/admin.directory.user",
                "https://www.googleapis.com/auth/admin.directory.user.alias",
                "https://www.googleapis.com/auth/admin.directory.user.alias.readonly",
                "https://www.googleapis.com/auth/admin.directory.user.readonly",
                "https://www.googleapis.com/auth/cloud-platform",
              ],
              path: "admin/directory_v1/channels/stop",
              httpMethod: "POST",
              parameters: {},
              description: "Stops watching resources through this channel.",
              id: "admin.channels.stop",
              parameterOrder: [],
              flatPath: "admin/directory_v1/channels/stop",
            },
          },
        },
      },
      batchPath: "batch",
      canonicalName: "directory",
      revision: "20220628",
      icons: {
        x16: "http://www.google.com/images/icons/product/search-16.gif",
        x32: "http://www.google.com/images/icons/product/search-32.gif",
      },
      mtlsRootUrl: "https://admin.mtls.googleapis.com/",
      discoveryVersion: "v1",
      auth: {
        oauth2: {
          scopes: {
            "https://www.googleapis.com/auth/admin.directory.group": {
              description:
                "View and manage the provisioning of groups on your domain",
            },
            "https://www.googleapis.com/auth/admin.directory.customer.readonly":
              {
                description: "View customer related information",
              },
            "https://www.googleapis.com/auth/admin.directory.domain": {
              description:
                "View and manage the provisioning of domains for your customers",
            },
            "https://www.googleapis.com/auth/admin.directory.resource.calendar":
              {
                description:
                  "View and manage the provisioning of calendar resources on your domain",
              },
            "https://www.googleapis.com/auth/admin.directory.customer": {
              description: "View and manage customer related information",
            },
            "https://www.googleapis.com/auth/admin.directory.rolemanagement.readonly":
              {
                description: "View delegated admin roles for your domain",
              },
            "https://www.googleapis.com/auth/admin.chrome.printers": {
              description:
                "See, add, edit, and permanently delete the printers that your organization can use with Chrome",
            },
            "https://www.googleapis.com/auth/admin.directory.userschema.readonly":
              {
                description: "View user schemas on your domain",
              },
            "https://www.googleapis.com/auth/admin.directory.user": {
              description:
                "View and manage the provisioning of users on your domain",
            },
            "https://www.googleapis.com/auth/admin.directory.user.alias.readonly":
              {
                description: "View user aliases on your domain",
              },
            "https://www.googleapis.com/auth/admin.directory.group.readonly": {
              description: "View groups on your domain",
            },
            "https://www.googleapis.com/auth/admin.directory.user.security": {
              description:
                "Manage data access permissions for users on your domain",
            },
            "https://www.googleapis.com/auth/admin.directory.rolemanagement": {
              description: "Manage delegated admin roles for your domain",
            },
            "https://www.googleapis.com/auth/admin.directory.device.mobile.action":
              {
                description:
                  "Manage your mobile devices by performing administrative tasks",
              },
            "https://www.googleapis.com/auth/admin.directory.user.readonly": {
              description: "See info about users on your domain",
            },
            "https://www.googleapis.com/auth/admin.directory.device.chromeos.readonly":
              {
                description: "View your Chrome OS devices' metadata",
              },
            "https://www.googleapis.com/auth/admin.directory.group.member": {
              description: "View and manage group subscriptions on your domain",
            },
            "https://www.googleapis.com/auth/admin.directory.orgunit": {
              description: "View and manage organization units on your domain",
            },
            "https://www.googleapis.com/auth/admin.directory.userschema": {
              description:
                "View and manage the provisioning of user schemas on your domain",
            },
            "https://www.googleapis.com/auth/admin.directory.device.mobile.readonly":
              {
                description: "View your mobile devices' metadata",
              },
            "https://www.googleapis.com/auth/admin.directory.device.chromeos": {
              description: "View and manage your Chrome OS devices' metadata",
            },
            "https://www.googleapis.com/auth/cloud-platform": {
              description:
                "See, edit, configure, and delete your Google Cloud data and see the email address for your Google Account.",
            },
            "https://www.googleapis.com/auth/admin.directory.domain.readonly": {
              description: "View domains related to your customers",
            },
            "https://www.googleapis.com/auth/admin.directory.orgunit.readonly":
              {
                description: "View organization units on your domain",
              },
            "https://www.googleapis.com/auth/admin.directory.resource.calendar.readonly":
              {
                description: "View calendar resources on your domain",
              },
            "https://www.googleapis.com/auth/admin.directory.device.mobile": {
              description: "View and manage your mobile devices' metadata",
            },
            "https://www.googleapis.com/auth/admin.chrome.printers.readonly": {
              description:
                "See the printers that your organization can use with Chrome",
            },
            "https://www.googleapis.com/auth/admin.directory.user.alias": {
              description: "View and manage user aliases on your domain",
            },
            "https://www.googleapis.com/auth/admin.directory.group.member.readonly":
              {
                description: "View group subscriptions on your domain",
              },
          },
        },
      },
      baseUrl: "https://admin.googleapis.com/",
      title: "Admin SDK API",
      version: "directory_v1",
      ownerName: "Google",
      parameters: {
        quotaUser: {
          location: "query",
          description:
            "Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.",
          type: "string",
        },
        access_token: {
          location: "query",
          description: "OAuth access token.",
          type: "string",
        },
        uploadType: {
          location: "query",
          description:
            'Legacy upload protocol for media (e.g. "media", "multipart").',
          type: "string",
        },
        prettyPrint: {
          description: "Returns response with indentations and line breaks.",
          default: "true",
          location: "query",
          type: "boolean",
        },
        "$.xgafv": {
          type: "string",
          enum: ["1", "2"],
          description: "V1 error format.",
          enumDescriptions: ["v1 error format", "v2 error format"],
          location: "query",
        },
        key: {
          location: "query",
          description:
            "API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.",
          type: "string",
        },
        alt: {
          enumDescriptions: [
            "Responses with Content-Type of application/json",
            "Media download with context-dependent Content-Type",
            "Responses with Content-Type of application/x-protobuf",
          ],
          description: "Data format for response.",
          location: "query",
          default: "json",
          enum: ["json", "media", "proto"],
          type: "string",
        },
        oauth_token: {
          description: "OAuth 2.0 token for the current user.",
          location: "query",
          type: "string",
        },
        callback: {
          description: "JSONP",
          location: "query",
          type: "string",
        },
        upload_protocol: {
          type: "string",
          location: "query",
          description: 'Upload protocol for media (e.g. "raw", "multipart").',
        },
        fields: {
          description:
            "Selector specifying which fields to include in a partial response.",
          type: "string",
          location: "query",
        },
      },
      schemas: {
        Empty: {
          properties: {},
          description:
            "A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); }",
          id: "Empty",
          type: "object",
        },
        Schemas: {
          type: "object",
          properties: {
            kind: {
              description: "Kind of resource this is.",
              type: "string",
              default: "admin#directory#schemas",
            },
            schemas: {
              description: "List of UserSchema objects.",
              items: {
                $ref: "Schema",
              },
              type: "array",
            },
            etag: {
              type: "string",
              description: "ETag of the resource.",
            },
          },
          id: "Schemas",
          description:
            "JSON response template for List Schema operation in Directory API.",
        },
        ChromeOsMoveDevicesToOu: {
          type: "object",
          id: "ChromeOsMoveDevicesToOu",
          properties: {
            deviceIds: {
              type: "array",
              description: "Chrome OS devices to be moved to OU",
              annotations: {
                required: ["directory.chromeosdevices.moveDevicesToOu"],
              },
              items: {
                type: "string",
              },
            },
          },
        },
        UserName: {
          properties: {
            fullName: {
              type: "string",
              description:
                "The user's full name formed by concatenating the first and last name values.",
            },
            givenName: {
              annotations: {
                required: ["directory.users.insert"],
              },
              type: "string",
              description:
                "The user's first name. Required when creating a user account.",
            },
            familyName: {
              annotations: {
                required: ["directory.users.insert"],
              },
              description:
                "The user's last name. Required when creating a user account.",
              type: "string",
            },
          },
          type: "object",
          id: "UserName",
        },
        Asps: {
          type: "object",
          properties: {
            items: {
              description: "A list of ASP resources.",
              type: "array",
              items: {
                $ref: "Asp",
              },
            },
            etag: {
              description: "ETag of the resource.",
              type: "string",
            },
            kind: {
              description:
                "The type of the API resource. This is always `admin#directory#aspList`.",
              type: "string",
              default: "admin#directory#aspList",
            },
          },
          id: "Asps",
        },
        UserIm: {
          type: "object",
          id: "UserIm",
          properties: {
            customType: {
              type: "string",
              description: "Custom type.",
            },
            im: {
              description: "Instant messenger id.",
              type: "string",
            },
            type: {
              description:
                "Each entry can have a type which indicates standard types of that entry. For example instant messengers could be of home work etc. In addition to the standard type an entry can have a custom type and can take any value. Such types should have the CUSTOM value as type and also have a customType value.",
              type: "string",
            },
            primary: {
              description:
                "If this is user's primary im. Only one entry could be marked as primary.",
              type: "boolean",
            },
            protocol: {
              description:
                "Protocol used in the instant messenger. It should be one of the values from ImProtocolTypes map. Similar to type it can take a CUSTOM value and specify the custom name in customProtocol field.",
              type: "string",
            },
            customProtocol: {
              description: "Custom protocol.",
              type: "string",
            },
          },
          description: "JSON template for instant messenger of an user.",
        },
        Role: {
          type: "object",
          id: "Role",
          properties: {
            roleId: {
              description: "ID of the role.",
              format: "int64",
              type: "string",
            },
            roleName: {
              type: "string",
              annotations: {
                required: ["directory.roles.insert"],
              },
              description: "Name of the role.",
            },
            isSystemRole: {
              description:
                "Returns `true` if this is a pre-defined system role.",
              type: "boolean",
            },
            etag: {
              type: "string",
              description: "ETag of the resource.",
            },
            kind: {
              default: "admin#directory#role",
              type: "string",
              description:
                "The type of the API resource. This is always `admin#directory#role`.",
            },
            isSuperAdminRole: {
              description: "Returns `true` if the role is a super admin role.",
              type: "boolean",
            },
            rolePrivileges: {
              items: {
                type: "object",
                properties: {
                  privilegeName: {
                    description: "The name of the privilege.",
                    type: "string",
                  },
                  serviceId: {
                    type: "string",
                    description:
                      "The obfuscated ID of the service this privilege is for. This value is returned with [`Privileges.list()`](/admin-sdk/directory/v1/reference/privileges/list).",
                  },
                },
              },
              type: "array",
              description:
                "The set of privileges that are granted to this role.",
              annotations: {
                required: ["directory.roles.insert"],
              },
            },
            roleDescription: {
              description: "A short description of the role.",
              type: "string",
            },
          },
        },
        CalendarResource: {
          id: "CalendarResource",
          type: "object",
          description: "Public API: Resources.calendars",
          properties: {
            resourceId: {
              type: "string",
              annotations: {
                required: ["directory.resources.calendars.insert"],
              },
              description: "The unique ID for the calendar resource.",
            },
            capacity: {
              type: "integer",
              format: "int32",
              description: "Capacity of a resource, number of seats in a room.",
            },
            resourceDescription: {
              description:
                "Description of the resource, visible only to admins.",
              type: "string",
            },
            resourceCategory: {
              type: "string",
              description:
                "The category of the calendar resource. Either CONFERENCE_ROOM or OTHER. Legacy data is set to CATEGORY_UNKNOWN.",
            },
            floorSection: {
              type: "string",
              description:
                "Name of the section within a floor a resource is located in.",
            },
            buildingId: {
              type: "string",
              description:
                "Unique ID for the building a resource is located in.",
            },
            featureInstances: {
              description: "Instances of features for the calendar resource.",
              type: "any",
            },
            userVisibleDescription: {
              type: "string",
              description:
                "Description of the resource, visible to users and admins.",
            },
            floorName: {
              type: "string",
              description: "Name of the floor a resource is located on.",
            },
            generatedResourceName: {
              description:
                'The read-only auto-generated name of the calendar resource which includes metadata about the resource such as building name, floor, capacity, etc. For example, "NYC-2-Training Room 1A (16)".',
              type: "string",
            },
            resourceName: {
              type: "string",
              description:
                'The name of the calendar resource. For example, "Training Room 1A".',
              annotations: {
                required: ["directory.resources.calendars.insert"],
              },
            },
            kind: {
              description:
                "The type of the resource. For calendar resources, the value is `admin#directory#resources#calendars#CalendarResource`.",
              default: "admin#directory#resources#calendars#CalendarResource",
              type: "string",
            },
            resourceType: {
              type: "string",
              description:
                "The type of the calendar resource, intended for non-room resources.",
            },
            etags: {
              type: "string",
              description: "ETag of the resource.",
            },
            resourceEmail: {
              type: "string",
              description:
                "The read-only email for the calendar resource. Generated as part of creating a new calendar resource.",
            },
          },
        },
        UserAbout: {
          type: "object",
          properties: {
            value: {
              description: "Actual value of notes.",
              type: "string",
            },
            contentType: {
              description:
                "About entry can have a type which indicates the content type. It can either be plain or html. By default, notes contents are assumed to contain plain text.",
              type: "string",
            },
          },
          description:
            "JSON template for About (notes) of a user in Directory API.",
          id: "UserAbout",
        },
        Users: {
          properties: {
            trigger_event: {
              description:
                "Event that triggered this response (only used in case of Push Response)",
              type: "string",
            },
            etag: {
              type: "string",
              description: "ETag of the resource.",
            },
            kind: {
              type: "string",
              default: "admin#directory#users",
              description: "Kind of resource this is.",
            },
            nextPageToken: {
              type: "string",
              description: "Token used to access next page of this result.",
            },
            users: {
              items: {
                $ref: "User",
              },
              type: "array",
              description: "List of user objects.",
            },
          },
          type: "object",
          id: "Users",
        },
        Privilege: {
          id: "Privilege",
          properties: {
            serviceId: {
              type: "string",
              description:
                "The obfuscated ID of the service this privilege is for. This value is returned with [`Privileges.list()`](/admin-sdk/directory/v1/reference/privileges/list).",
            },
            childPrivileges: {
              description:
                "A list of child privileges. Privileges for a service form a tree. Each privilege can have a list of child privileges; this list is empty for a leaf privilege.",
              type: "array",
              items: {
                $ref: "Privilege",
              },
            },
            etag: {
              description: "ETag of the resource.",
              type: "string",
            },
            kind: {
              type: "string",
              default: "admin#directory#privilege",
              description:
                "The type of the API resource. This is always `admin#directory#privilege`.",
            },
            isOuScopable: {
              description:
                "If the privilege can be restricted to an organization unit.",
              type: "boolean",
            },
            privilegeName: {
              type: "string",
              description: "The name of the privilege.",
            },
            serviceName: {
              description: "The name of the service this privilege is for.",
              type: "string",
            },
          },
          type: "object",
        },
        Channel: {
          type: "object",
          description:
            "An notification channel used to watch for resource changes.",
          id: "Channel",
          properties: {
            expiration: {
              type: "string",
              description:
                "Date and time of notification channel expiration, expressed as a Unix timestamp, in milliseconds. Optional.",
              format: "int64",
            },
            token: {
              type: "string",
              description:
                "An arbitrary string delivered to the target address with each notification delivered over this channel. Optional.",
            },
            id: {
              type: "string",
              description:
                "A UUID or similar unique string that identifies this channel.",
            },
            address: {
              type: "string",
              description:
                "The address where notifications are delivered for this channel.",
            },
            params: {
              type: "object",
              additionalProperties: {
                type: "string",
              },
              description:
                "Additional parameters controlling delivery channel behavior. Optional.",
            },
            payload: {
              type: "boolean",
              description:
                "A Boolean value to indicate whether payload is wanted. Optional.",
            },
            resourceUri: {
              description:
                "A version-specific identifier for the watched resource.",
              type: "string",
            },
            type: {
              type: "string",
              description:
                "The type of delivery mechanism used for this channel.",
            },
            resourceId: {
              type: "string",
              description:
                "An opaque ID that identifies the resource being watched on this channel. Stable across different API versions.",
            },
            kind: {
              description:
                "Identifies this as a notification channel used to watch for changes to a resource, which is `api#channel`.",
              default: "api#channel",
              type: "string",
            },
          },
        },
        Buildings: {
          id: "Buildings",
          description: "Public API: Resources.buildings",
          type: "object",
          properties: {
            buildings: {
              description: "The Buildings in this page of results.",
              type: "array",
              items: {
                $ref: "Building",
              },
            },
            nextPageToken: {
              type: "string",
              description:
                "The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results.",
            },
            etag: {
              type: "string",
              description: "ETag of the resource.",
            },
            kind: {
              description: "Kind of resource this is.",
              default: "admin#directory#resources#buildings#buildingsList",
              type: "string",
            },
          },
        },
        Tokens: {
          properties: {
            kind: {
              type: "string",
              description:
                "The type of the API resource. This is always `admin#directory#tokenList`.",
              default: "admin#directory#tokenList",
            },
            etag: {
              description: "ETag of the resource.",
              type: "string",
            },
            items: {
              type: "array",
              description: "A list of Token resources.",
              items: {
                $ref: "Token",
              },
            },
          },
          type: "object",
          description:
            "JSON response template for List tokens operation in Directory API.",
          id: "Tokens",
        },
        Feature: {
          properties: {
            etags: {
              description: "ETag of the resource.",
              type: "string",
            },
            name: {
              type: "string",
              description: "The name of the feature.",
              annotations: {
                required: ["directory.resources.features.insert"],
              },
            },
            kind: {
              default: "admin#directory#resources#features#Feature",
              description: "Kind of resource this is.",
              type: "string",
            },
          },
          description: "JSON template for Feature object in Directory API.",
          id: "Feature",
          type: "object",
        },
        Features: {
          properties: {
            nextPageToken: {
              type: "string",
              description:
                "The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results.",
            },
            kind: {
              description: "Kind of resource this is.",
              default: "admin#directory#resources#features#featuresList",
              type: "string",
            },
            features: {
              type: "array",
              items: {
                $ref: "Feature",
              },
              description: "The Features in this page of results.",
            },
            etag: {
              description: "ETag of the resource.",
              type: "string",
            },
          },
          type: "object",
          id: "Features",
          description: "Public API: Resources.features",
        },
        OrgUnits: {
          properties: {
            kind: {
              description:
                "The type of the API resource. For Org Unit resources, the type is `admin#directory#orgUnits`.",
              type: "string",
              default: "admin#directory#orgUnits",
            },
            etag: {
              description: "ETag of the resource.",
              type: "string",
            },
            organizationUnits: {
              items: {
                $ref: "OrgUnit",
              },
              type: "array",
              description: "List of organizational unit objects.",
            },
          },
          type: "object",
          id: "OrgUnits",
        },
        UserGender: {
          type: "object",
          properties: {
            customGender: {
              description: "Custom gender.",
              type: "string",
            },
            addressMeAs: {
              description:
                "AddressMeAs. A human-readable string containing the proper way to refer to the profile owner by humans for example he/him/his or they/them/their.",
              type: "string",
            },
            type: {
              type: "string",
              description: "Gender.",
            },
          },
          id: "UserGender",
        },
        UserUndelete: {
          type: "object",
          properties: {
            orgUnitPath: {
              description: "OrgUnit of User",
              type: "string",
            },
          },
          id: "UserUndelete",
        },
        VerificationCode: {
          properties: {
            kind: {
              description:
                "The type of the resource. This is always `admin#directory#verificationCode`.",
              default: "admin#directory#verificationCode",
              type: "string",
            },
            etag: {
              description: "ETag of the resource.",
              type: "string",
            },
            userId: {
              type: "string",
              description: "The obfuscated unique ID of the user.",
            },
            verificationCode: {
              description:
                "A current verification code for the user. Invalidated or used verification codes are not returned as part of the result.",
              type: "string",
            },
          },
          id: "VerificationCode",
          description:
            "The Directory API allows you to view, generate, and invalidate backup verification codes for a user.",
          type: "object",
        },
        UserWebsite: {
          description: "JSON template for a website entry.",
          type: "object",
          id: "UserWebsite",
          properties: {
            type: {
              type: "string",
              description:
                "Each entry can have a type which indicates standard types of that entry. For example website could be of home work blog etc. In addition to the standard type an entry can have a custom type and can give it any name. Such types should have the CUSTOM value as type and also have a customType value.",
            },
            primary: {
              description: "If this is user's primary website or not.",
              type: "boolean",
            },
            customType: {
              description: "Custom Type.",
              type: "string",
            },
            value: {
              description: "Website.",
              type: "string",
            },
          },
        },
        ChromeOsDeviceAction: {
          id: "ChromeOsDeviceAction",
          type: "object",
          properties: {
            deprovisionReason: {
              type: "string",
              description:
                "Only used when the action is `deprovision`. With the `deprovision` action, this field is required. *Note*: The deprovision reason is audited because it might have implications on licenses for perpetual subscription customers.",
            },
            action: {
              annotations: {
                required: ["directory.chromeosdevices.action"],
              },
              description: "Action to be taken on the Chrome OS device.",
              type: "string",
            },
          },
        },
        CreatePrinterRequest: {
          id: "CreatePrinterRequest",
          type: "object",
          properties: {
            parent: {
              description:
                "Required. The name of the customer. Format: customers/{customer_id}",
              type: "string",
            },
            printer: {
              $ref: "Printer",
              description:
                "Required. A printer to create. If you want to place the printer under particular OU then populate printer.org_unit_id filed. Otherwise the printer will be placed under root OU.",
            },
          },
          description: "Request for adding a new printer.",
        },
        PrinterModel: {
          properties: {
            displayName: {
              type: "string",
              description: 'Display name. eq. "Brother MFC-8840D"',
            },
            makeAndModel: {
              description:
                'Make and model as represented in "make_and_model" field in Printer object. eq. "brother mfc-8840d"',
              type: "string",
            },
            manufacturer: {
              description: 'Manufacturer. eq. "Brother"',
              type: "string",
            },
          },
          description: "Printer manufacturer and model",
          type: "object",
          id: "PrinterModel",
        },
        Token: {
          properties: {
            kind: {
              type: "string",
              description:
                "The type of the API resource. This is always `admin#directory#token`.",
              default: "admin#directory#token",
            },
            clientId: {
              description:
                "The Client ID of the application the token is issued to.",
              type: "string",
            },
            etag: {
              type: "string",
              description: "ETag of the resource.",
            },
            nativeApp: {
              type: "boolean",
              description:
                "Whether the token is issued to an installed application. The value is `true` if the application is installed to a desktop or mobile device.",
            },
            anonymous: {
              description:
                "Whether the application is registered with Google. The value is `true` if the application has an anonymous Client ID.",
              type: "boolean",
            },
            scopes: {
              type: "array",
              description:
                "A list of authorization scopes the application is granted.",
              items: {
                type: "string",
              },
            },
            userKey: {
              type: "string",
              description: "The unique ID of the user that issued the token.",
            },
            displayText: {
              description:
                "The displayable name of the application the token is issued to.",
              type: "string",
            },
          },
          id: "Token",
          type: "object",
          description: "JSON template for token resource in Directory API.",
        },
        OrgUnit: {
          id: "OrgUnit",
          properties: {
            blockInheritance: {
              type: "boolean",
              description:
                "Determines if a sub-organizational unit can inherit the settings of the parent organization. The default value is `false`, meaning a sub-organizational unit inherits the settings of the nearest parent organizational unit. For more information on inheritance and users in an organization structure, see the [administration help center](https://support.google.com/a/answer/4352075).",
            },
            orgUnitPath: {
              type: "string",
              description:
                "The full path to the organizational unit. The `orgUnitPath` is a derived property. When listed, it is derived from `parentOrgunitPath` and organizational unit's `name`. For example, for an organizational unit named 'apps' under parent organization '/engineering', the orgUnitPath is '/engineering/apps'. In order to edit an `orgUnitPath`, either update the name of the organization or the `parentOrgunitPath`. A user's organizational unit determines which Google Workspace services the user has access to. If the user is moved to a new organization, the user's access changes. For more information about organization structures, see the [administration help center](https://support.google.com/a/answer/4352075). For more information about moving a user to a different organization, see [Update a user](/admin-sdk/directory/v1/guides/manage-users.html#update_user).",
            },
            name: {
              description:
                "The organizational unit's path name. For example, an organizational unit's name within the /corp/support/sales_support parent path is sales_support. Required.",
              annotations: {
                required: ["directory.orgunits.insert"],
              },
              type: "string",
            },
            description: {
              description: "Description of the organizational unit.",
              type: "string",
            },
            parentOrgUnitPath: {
              description:
                "The organizational unit's parent path. For example, /corp/sales is the parent path for /corp/sales/sales_support organizational unit. Required, unless `parentOrgUnitId` is set.",
              type: "string",
            },
            kind: {
              type: "string",
              description:
                "The type of the API resource. For Orgunits resources, the value is `admin#directory#orgUnit`.",
              default: "admin#directory#orgUnit",
            },
            parentOrgUnitId: {
              type: "string",
              description:
                "The unique ID of the parent organizational unit. Required, unless `parentOrgUnitPath` is set.",
            },
            orgUnitId: {
              type: "string",
              description: "The unique ID of the organizational unit.",
            },
            etag: {
              description: "ETag of the resource.",
              type: "string",
            },
          },
          description:
            "Managing your account's organizational units allows you to configure your users' access to services and custom settings. For more information about common organizational unit tasks, see the [Developer's Guide](/admin-sdk/directory/v1/guides/manage-org-units.html). The customer's organizational unit hierarchy is limited to 35 levels of depth.",
          type: "object",
        },
        Roles: {
          properties: {
            kind: {
              default: "admin#directory#roles",
              description:
                "The type of the API resource. This is always `admin#directory#roles`.",
              type: "string",
            },
            items: {
              type: "array",
              items: {
                $ref: "Role",
              },
              description: "A list of Role resources.",
            },
            etag: {
              type: "string",
              description: "ETag of the resource.",
            },
            nextPageToken: {
              type: "string",
            },
          },
          type: "object",
          id: "Roles",
        },
        Group: {
          type: "object",
          properties: {
            directMembersCount: {
              description:
                "The number of users that are direct members of the group. If a group is a member (child) of this group (the parent), members of the child group are not counted in the `directMembersCount` property of the parent group.",
              type: "string",
              format: "int64",
            },
            email: {
              type: "string",
              annotations: {
                required: ["directory.groups.insert"],
              },
              description:
                "The group's email address. If your account has multiple domains, select the appropriate domain for the email address. The `email` must be unique. This property is required when creating a group. Group email addresses are subject to the same character usage rules as usernames, see the [help center](https://support.google.com/a/answer/9193374) for details.",
            },
            etag: {
              type: "string",
              description: "ETag of the resource.",
            },
            name: {
              type: "string",
              description: "The group's display name.",
            },
            adminCreated: {
              description:
                "Read-only. Value is `true` if this group was created by an administrator rather than a user.",
              type: "boolean",
            },
            aliases: {
              description:
                "Read-only. A list of a group's alias email addresses.",
              type: "array",
              items: {
                type: "string",
              },
            },
            description: {
              description:
                "An extended description to help users determine the purpose of a group. For example, you can include information about who should join the group, the types of messages to send to the group, links to FAQs about the group, or related groups. Maximum length is `4,096` characters.",
              type: "string",
            },
            nonEditableAliases: {
              description:
                "Read-only. A list of the group's non-editable alias email addresses that are outside of the account's primary domain or subdomains. These are functioning email addresses used by the group. This is a read-only property returned in the API's response for a group. If edited in a group's POST or PUT request, the edit is ignored by the API service.",
              items: {
                type: "string",
              },
              type: "array",
            },
            id: {
              type: "string",
              description:
                "Read-only. The unique ID of a group. A group `id` can be used as a group request URI's `groupKey`.",
            },
            kind: {
              description:
                "The type of the API resource. For Groups resources, the value is `admin#directory#group`.",
              default: "admin#directory#group",
              type: "string",
            },
          },
          id: "Group",
          description:
            "Google Groups provide your users the ability to send messages to groups of people using the group's email address. For more information about common tasks, see the [Developer's Guide](/admin-sdk/directory/v1/guides/manage-groups).",
        },
        UserLocation: {
          properties: {
            customType: {
              type: "string",
              description: "Custom Type.",
            },
            area: {
              description:
                "Textual location. This is most useful for display purposes to concisely describe the location. For example 'Mountain View, CA', 'Near Seattle', 'US-NYC-9TH 9A209A.''",
              type: "string",
            },
            type: {
              type: "string",
              description:
                "Each entry can have a type which indicates standard types of that entry. For example location could be of types default and desk. In addition to standard type an entry can have a custom type and can give it any name. Such types should have 'custom' as type and also have a customType value.",
            },
            floorName: {
              type: "string",
              description: "Floor name/number.",
            },
            buildingId: {
              type: "string",
              description: "Building Identifier.",
            },
            deskCode: {
              description:
                "Most specific textual code of individual desk location.",
              type: "string",
            },
            floorSection: {
              type: "string",
              description:
                "Floor section. More specific location within the floor. For example if a floor is divided into sections 'A', 'B' and 'C' this field would identify one of those values.",
            },
          },
          type: "object",
          description: "JSON template for a location entry.",
          id: "UserLocation",
        },
        CustomerPostalAddress: {
          id: "CustomerPostalAddress",
          type: "object",
          properties: {
            region: {
              type: "string",
              description:
                "Name of the region. An example of a region value is `NY` for the state of New York.",
            },
            contactName: {
              description: "The customer contact's name.",
              type: "string",
            },
            organizationName: {
              type: "string",
              description: "The company or company division name.",
            },
            addressLine1: {
              description:
                "A customer's physical address. The address can be composed of one to three lines.",
              type: "string",
            },
            countryCode: {
              type: "string",
              description:
                "This is a required property. For `countryCode` information see the [ISO 3166 country code elements](https://www.iso.org/iso/country_codes.htm).",
            },
            locality: {
              type: "string",
              description:
                "Name of the locality. An example of a locality value is the city of `San Francisco`.",
            },
            postalCode: {
              type: "string",
              description:
                "The postal code. A postalCode example is a postal zip code such as `10009`. This is in accordance with - http: //portablecontacts.net/draft-spec.html#address_element.",
            },
            addressLine2: {
              description: "Address line 2 of the address.",
              type: "string",
            },
            addressLine3: {
              description: "Address line 3 of the address.",
              type: "string",
            },
          },
        },
        UserPhoto: {
          properties: {
            mimeType: {
              description:
                "The MIME type of the photo. Allowed values are `JPEG`, `PNG`, `GIF`, `BMP`, `TIFF`, and web-safe base64 encoding.",
              type: "string",
            },
            primaryEmail: {
              description: "The user's primary email address.",
              type: "string",
            },
            kind: {
              description:
                "The type of the API resource. For Photo resources, this is `admin#directory#user#photo`.",
              type: "string",
              default: "admin#directory#user#photo",
            },
            width: {
              format: "int32",
              type: "integer",
              description: "Width of the photo in pixels.",
            },
            height: {
              type: "integer",
              description: "Height of the photo in pixels.",
              format: "int32",
            },
            id: {
              description: "The ID the API uses to uniquely identify the user.",
              type: "string",
            },
            photoData: {
              annotations: {
                required: ["directory.users.photos.update"],
              },
              description:
                "The user photo's upload data in [web-safe Base64](https://en.wikipedia.org/wiki/Base64#URL_applications) format in bytes. This means: * The slash (/) character is replaced with the underscore (_) character. * The plus sign (+) character is replaced with the hyphen (-) character. * The equals sign (=) character is replaced with the asterisk (*). * For padding, the period (.) character is used instead of the RFC-4648 baseURL definition which uses the equals sign (=) for padding. This is done to simplify URL-parsing. * Whatever the size of the photo being uploaded, the API downsizes it to 96x96 pixels.",
              type: "string",
              format: "byte",
            },
            etag: {
              type: "string",
              description: "ETag of the resource.",
            },
          },
          type: "object",
          id: "UserPhoto",
        },
        FeatureInstance: {
          description: "JSON template for a feature instance.",
          properties: {
            feature: {
              description:
                "The feature that this is an instance of. A calendar resource may have multiple instances of a feature.",
              $ref: "Feature",
            },
          },
          type: "object",
          id: "FeatureInstance",
        },
        FeatureRename: {
          properties: {
            newName: {
              annotations: {
                required: ["directory.resources.features.rename"],
              },
              type: "string",
              description: "New name of the feature.",
            },
          },
          id: "FeatureRename",
          type: "object",
        },
        Schema: {
          id: "Schema",
          type: "object",
          description:
            "The type of API resource. For Schema resources, this is always `admin#directory#schema`.",
          properties: {
            fields: {
              description: "A list of fields in the schema.",
              items: {
                $ref: "SchemaFieldSpec",
              },
              annotations: {
                required: [
                  "directory.schemas.insert",
                  "directory.schemas.update",
                ],
              },
              type: "array",
            },
            kind: {
              default: "admin#directory#schema",
              type: "string",
              description: "Kind of resource this is.",
            },
            displayName: {
              annotations: {
                required: ["directory.schemas.insert"],
              },
              description: "Display name for the schema.",
              type: "string",
            },
            etag: {
              description: "The ETag of the resource.",
              type: "string",
            },
            schemaId: {
              description: "The unique identifier of the schema (Read-only)",
              type: "string",
            },
            schemaName: {
              type: "string",
              annotations: {
                required: ["directory.schemas.insert"],
              },
              description:
                "The schema's name. Each `schema_name` must be unique within a customer. Reusing a name results in a `409: Entity already exists` error.",
            },
          },
        },
        RoleAssignment: {
          description: "Defines an assignment of a role.",
          id: "RoleAssignment",
          properties: {
            assignedTo: {
              description:
                "The unique ID of the entity this role is assigned to—either the `user_id` of a user or the `uniqueId` of a service account, as defined in [Identity and Access Management (IAM)](https://cloud.google.com/iam/docs/reference/rest/v1/projects.serviceAccounts).",
              type: "string",
            },
            scopeType: {
              type: "string",
              description: "The scope in which this role is assigned.",
            },
            roleId: {
              description: "The ID of the role that is assigned.",
              format: "int64",
              type: "string",
            },
            etag: {
              type: "string",
              description: "ETag of the resource.",
            },
            orgUnitId: {
              description:
                "If the role is restricted to an organization unit, this contains the ID for the organization unit the exercise of this role is restricted to.",
              type: "string",
            },
            kind: {
              description:
                "The type of the API resource. This is always `admin#directory#roleAssignment`.",
              type: "string",
              default: "admin#directory#roleAssignment",
            },
            roleAssignmentId: {
              format: "int64",
              description: "ID of this roleAssignment.",
              type: "string",
            },
          },
          type: "object",
        },
        MembersHasMember: {
          description:
            "JSON template for Has Member response in Directory API.",
          type: "object",
          properties: {
            isMember: {
              readOnly: true,
              type: "boolean",
              description:
                "Output only. Identifies whether the given user is a member of the group. Membership can be direct or nested.",
            },
          },
          id: "MembersHasMember",
        },
        BatchDeletePrintersRequest: {
          description: "Request for deleting existing printers in batch.",
          properties: {
            printerIds: {
              description:
                "A list of Printer.id that should be deleted. Max 100 at a time.",
              items: {
                type: "string",
              },
              type: "array",
            },
          },
          id: "BatchDeletePrintersRequest",
          type: "object",
        },
        Members: {
          properties: {
            etag: {
              description: "ETag of the resource.",
              type: "string",
            },
            members: {
              items: {
                $ref: "Member",
              },
              description: "List of member objects.",
              type: "array",
            },
            nextPageToken: {
              type: "string",
              description: "Token used to access next page of this result.",
            },
            kind: {
              default: "admin#directory#members",
              type: "string",
              description: "Kind of resource this is.",
            },
          },
          type: "object",
          id: "Members",
        },
        ChromeOsDevice: {
          id: "ChromeOsDevice",
          properties: {
            ethernetMacAddress0: {
              type: "string",
              description:
                "(Read-only) MAC address used by the Chromebook’s internal ethernet port, and for onboard network (ethernet) interface. The format is twelve (12) hexadecimal digits without any delimiter (uppercase letters). This is only relevant for some devices.",
            },
            lastEnrollmentTime: {
              type: "string",
              description:
                "Date and time the device was last enrolled (Read-only)",
              format: "date-time",
            },
            lastSync: {
              description:
                "Date and time the device was last synchronized with the policy settings in the G Suite administrator control panel (Read-only)",
              type: "string",
              format: "date-time",
            },
            notes: {
              type: "string",
              description:
                "Notes about this device added by the administrator. This property can be [searched](https://support.google.com/chrome/a/answer/1698333) with the [list](/admin-sdk/directory/v1/reference/chromeosdevices/list) method's `query` parameter. Maximum length is 500 characters. Empty values are allowed.",
            },
            ethernetMacAddress: {
              type: "string",
              description:
                "The device's MAC address on the ethernet network interface.",
            },
            cpuStatusReports: {
              items: {
                type: "object",
                properties: {
                  cpuTemperatureInfo: {
                    items: {
                      type: "object",
                      properties: {
                        label: {
                          description: "CPU label",
                          type: "string",
                        },
                        temperature: {
                          format: "int32",
                          type: "integer",
                          description: "Temperature in Celsius degrees.",
                        },
                      },
                    },
                    description: "List of CPU temperature samples.",
                    type: "array",
                  },
                  reportTime: {
                    type: "string",
                    description: "Date and time the report was received.",
                    format: "date-time",
                  },
                  cpuUtilizationPercentageInfo: {
                    type: "array",
                    items: {
                      type: "integer",
                      format: "int32",
                    },
                  },
                },
              },
              type: "array",
              description:
                "Reports of CPU utilization and temperature (Read-only)",
            },
            model: {
              description:
                "The device's model information. If the device does not have this information, this property is not included in the response.",
              type: "string",
            },
            orderNumber: {
              description:
                "The device's order number. Only devices directly purchased from Google have an order number.",
              type: "string",
            },
            supportEndDate: {
              type: "string",
              description:
                "Final date the device will be supported (Read-only)",
              format: "date-time",
            },
            macAddress: {
              type: "string",
              description:
                "The device's wireless MAC address. If the device does not have this information, it is not included in the response.",
            },
            tpmVersionInfo: {
              type: "object",
              properties: {
                manufacturer: {
                  type: "string",
                  description: "TPM manufacturer code.",
                },
                specLevel: {
                  type: "string",
                  description:
                    "TPM specification level. See Library Specification for TPM 2.0 and Main Specification for TPM 1.2.",
                },
                vendorSpecific: {
                  description: "Vendor-specific information such as Vendor ID.",
                  type: "string",
                },
                family: {
                  type: "string",
                  description:
                    'TPM family. We use the TPM 2.0 style encoding, e.g.: TPM 1.2: "1.2" -\u003e 312e3200 TPM 2.0: "2.0" -\u003e 322e3000',
                },
                tpmModel: {
                  type: "string",
                  description: "TPM model number.",
                },
                firmwareVersion: {
                  description: "TPM firmware version.",
                  type: "string",
                },
              },
              description: "Trusted Platform Module (TPM) (Read-only)",
            },
            meid: {
              description:
                "The Mobile Equipment Identifier (MEID) or the International Mobile Equipment Identity (IMEI) for the 3G mobile card in a mobile device. A MEID/IMEI is typically used when adding a device to a wireless carrier's post-pay service plan. If the device does not have this information, this property is not included in the response. For more information on how to export a MEID/IMEI list, see the [Developer's Guide](/admin-sdk/directory/v1/guides/manage-chrome-devices.html#export_meid).",
              type: "string",
            },
            lastKnownNetwork: {
              description: "Contains last known network (Read-only)",
              type: "array",
              items: {
                description: "Information for an ip address.",
                type: "object",
                properties: {
                  wanIpAddress: {
                    type: "string",
                    description: "The WAN IP address.",
                  },
                  ipAddress: {
                    description: "The IP address.",
                    type: "string",
                  },
                },
              },
            },
            willAutoRenew: {
              description:
                "Determines if the device will auto renew its support after the support end date. This is a read-only property.",
              type: "boolean",
            },
            screenshotFiles: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  downloadUrl: {
                    type: "string",
                    description: "File download URL",
                  },
                  type: {
                    description: "File type",
                    type: "string",
                  },
                  createTime: {
                    format: "date-time",
                    type: "string",
                    description: "Date and time the file was created",
                  },
                  name: {
                    description: "File name",
                    type: "string",
                  },
                },
              },
              description:
                'List of screenshot files to download. Type is always "SCREENSHOT_FILE". (Read-only)',
            },
            autoUpdateExpiration: {
              format: "int64",
              type: "string",
              description:
                "(Read-only) The timestamp after which the device will stop receiving Chrome updates or support",
            },
            annotatedLocation: {
              description:
                "The address or location of the device as noted by the administrator. Maximum length is `200` characters. Empty values are allowed.",
              type: "string",
            },
            dockMacAddress: {
              description:
                "(Read-only) Built-in MAC address for the docking station that the device connected to. Factory sets Media access control address (MAC address) assigned for use by a dock. It is reserved specifically for MAC pass through device policy. The format is twelve (12) hexadecimal digits without any delimiter (uppercase letters). This is only relevant for some devices.",
              type: "string",
            },
            etag: {
              description: "ETag of the resource.",
              type: "string",
            },
            orgUnitPath: {
              description:
                "The full parent path with the organizational unit's name associated with the device. Path names are case insensitive. If the parent organizational unit is the top-level organization, it is represented as a forward slash, `/`. This property can be [updated](/admin-sdk/directory/v1/guides/manage-chrome-devices#move_chrome_devices_to_ou) using the API. For more information about how to create an organizational structure for your device, see the [administration help center](https://support.google.com/a/answer/182433).",
              type: "string",
            },
            recentUsers: {
              items: {
                type: "object",
                description:
                  "List of recent device users, in descending order, by last login time.",
                properties: {
                  type: {
                    type: "string",
                    description: "The type of the user.",
                  },
                  email: {
                    description:
                      "The user's email address. This is only present if the user type is `USER_TYPE_MANAGED`.",
                    type: "string",
                  },
                },
              },
              type: "array",
              description:
                "List of recent device users, in descending order, by last login time.",
            },
            bootMode: {
              type: "string",
              description:
                "The boot mode for the device. The possible values are: * `Verified`: The device is running a valid version of the Chrome OS. * `Dev`: The devices's developer hardware switch is enabled. When booted, the device has a command line shell. For an example of a developer switch, see the [Chromebook developer information](https://www.chromium.org/chromium-os/developer-information-for-chrome-os-devices/samsung-series-5-chromebook#TOC-Developer-switch).",
            },
            annotatedUser: {
              description:
                "The user of the device as noted by the administrator. Maximum length is 100 characters. Empty values are allowed.",
              type: "string",
            },
            orgUnitId: {
              description:
                "The unique ID of the organizational unit. orgUnitPath is the human readable version of orgUnitId. While orgUnitPath may change by renaming an organizational unit within the path, orgUnitId is unchangeable for one organizational unit. This property can be [updated](/admin-sdk/directory/v1/guides/manage-chrome-devices#move_chrome_devices_to_ou) using the API. For more information about how to create an organizational structure for your device, see the [administration help center](https://support.google.com/a/answer/182433).",
              type: "string",
            },
            serialNumber: {
              description:
                "The Chrome device serial number entered when the device was enabled. This value is the same as the Admin console's *Serial Number* in the *Chrome OS Devices* tab.",
              type: "string",
            },
            osVersion: {
              type: "string",
              description: "The Chrome device's operating system version.",
            },
            deviceId: {
              type: "string",
              description: "The unique ID of the Chrome device.",
            },
            kind: {
              description:
                "The type of resource. For the Chromeosdevices resource, the value is `admin#directory#chromeosdevice`.",
              type: "string",
              default: "admin#directory#chromeosdevice",
            },
            status: {
              description: "The status of the device.",
              type: "string",
            },
            firmwareVersion: {
              type: "string",
              description: "The Chrome device's firmware version.",
            },
            deviceFiles: {
              type: "array",
              items: {
                properties: {
                  downloadUrl: {
                    description: "File download URL",
                    type: "string",
                  },
                  createTime: {
                    description: "Date and time the file was created",
                    format: "date-time",
                    type: "string",
                  },
                  name: {
                    description: "File name",
                    type: "string",
                  },
                  type: {
                    type: "string",
                    description: "File type",
                  },
                },
                type: "object",
              },
              description: "List of device files to download (Read-only)",
            },
            manufactureDate: {
              type: "string",
              description:
                "(Read-only) The date the device was manufactured in yyyy-mm-dd format.",
            },
            systemRamFreeReports: {
              type: "array",
              items: {
                type: "object",
                properties: {
                  reportTime: {
                    type: "string",
                    description: "Date and time the report was received.",
                    format: "date-time",
                  },
                  systemRamFreeInfo: {
                    items: {
                      format: "int64",
                      type: "string",
                    },
                    type: "array",
                  },
                },
              },
              description:
                "Reports of amounts of available RAM memory (Read-only)",
            },
            cpuInfo: {
              description: "Information regarding CPU specs in the device.",
              items: {
                type: "object",
                properties: {
                  model: {
                    type: "string",
                    description: "The CPU model name.",
                  },
                  maxClockSpeedKhz: {
                    format: "int32",
                    description: "The max CPU clock speed in kHz.",
                    type: "integer",
                  },
                  logicalCpus: {
                    type: "array",
                    description: "Information for the Logical CPUs",
                    items: {
                      properties: {
                        currentScalingFrequencyKhz: {
                          format: "int32",
                          type: "integer",
                          description:
                            "Current frequency the CPU is running at.",
                        },
                        maxScalingFrequencyKhz: {
                          format: "int32",
                          description:
                            "Maximum frequency the CPU is allowed to run at, by policy.",
                          type: "integer",
                        },
                        idleDuration: {
                          type: "string",
                          format: "google-duration",
                          description: "Idle time since last boot.",
                        },
                        cStates: {
                          description:
                            "C-States indicate the power consumption state of the CPU. For more information look at documentation published by the CPU maker.",
                          items: {
                            type: "object",
                            properties: {
                              sessionDuration: {
                                description:
                                  "Time spent in the state since the last reboot.",
                                format: "google-duration",
                                type: "string",
                              },
                              displayName: {
                                description: "Name of the state.",
                                type: "string",
                              },
                            },
                            description:
                              "Status of a single C-state. C-states are various modes the CPU can transition to in order to use more or less power.",
                          },
                          type: "array",
                        },
                      },
                      description: "Status of a single logical CPU.",
                      type: "object",
                    },
                  },
                  architecture: {
                    type: "string",
                    description: "The CPU architecture.",
                  },
                },
                description: "CPU specs for a CPU.",
              },
              type: "array",
            },
            platformVersion: {
              description: "The Chrome device's platform version.",
              type: "string",
            },
            annotatedAssetId: {
              description:
                "The asset identifier as noted by an administrator or specified during enrollment.",
              type: "string",
            },
            diskVolumeReports: {
              items: {
                properties: {
                  volumeInfo: {
                    description: "Disk volumes",
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        storageFree: {
                          description: "Free disk space [in bytes]",
                          format: "int64",
                          type: "string",
                        },
                        storageTotal: {
                          type: "string",
                          description: "Total disk space [in bytes]",
                          format: "int64",
                        },
                        volumeId: {
                          description: "Volume id",
                          type: "string",
                        },
                      },
                    },
                  },
                },
                type: "object",
              },
              type: "array",
              description:
                "Reports of disk space and other info about mounted/connected volumes.",
            },
            activeTimeRanges: {
              type: "array",
              items: {
                properties: {
                  activeTime: {
                    description: "Duration of usage in milliseconds.",
                    format: "int32",
                    type: "integer",
                  },
                  date: {
                    type: "string",
                    format: "date",
                    description: "Date of usage",
                  },
                },
                type: "object",
              },
              description: "List of active time ranges (Read-only).",
            },
            systemRamTotal: {
              format: "int64",
              type: "string",
              description: "Total RAM on the device [in bytes] (Read-only)",
            },
          },
          type: "object",
          description:
            "Google Chrome devices run on the [Chrome OS](https://support.google.com/chromeos). For more information about common API tasks, see the [Developer's Guide](/admin-sdk/directory/v1/guides/manage-chrome-devices).",
        },
        BuildingAddress: {
          id: "BuildingAddress",
          type: "object",
          description: "Public API: Resources.buildings",
          properties: {
            addressLines: {
              type: "array",
              items: {
                type: "string",
              },
              description:
                "Unstructured address lines describing the lower levels of an address.",
            },
            regionCode: {
              type: "string",
              description:
                "Required. CLDR region code of the country/region of the address.",
            },
            locality: {
              description:
                "Optional. Generally refers to the city/town portion of the address. Examples: US city, IT comune, UK post town. In regions of the world where localities are not well defined or do not fit into this structure well, leave locality empty and use addressLines.",
              type: "string",
            },
            administrativeArea: {
              description:
                "Optional. Highest administrative subdivision which is used for postal addresses of a country or region.",
              type: "string",
            },
            sublocality: {
              type: "string",
              description: "Optional. Sublocality of the address.",
            },
            languageCode: {
              description:
                "Optional. BCP-47 language code of the contents of this address (if known).",
              type: "string",
            },
            postalCode: {
              description: "Optional. Postal code of the address.",
              type: "string",
            },
          },
        },
        Privileges: {
          id: "Privileges",
          type: "object",
          properties: {
            items: {
              description: "A list of Privilege resources.",
              type: "array",
              items: {
                $ref: "Privilege",
              },
            },
            kind: {
              description:
                "The type of the API resource. This is always `admin#directory#privileges`.",
              type: "string",
              default: "admin#directory#privileges",
            },
            etag: {
              type: "string",
              description: "ETag of the resource.",
            },
          },
        },
        Customer: {
          properties: {
            customerCreationTime: {
              format: "date-time",
              description: "The customer's creation time (Readonly)",
              type: "string",
            },
            customerDomain: {
              description:
                "The customer's primary domain name string. Do not include the `www` prefix when creating a new customer.",
              type: "string",
            },
            alternateEmail: {
              description:
                "The customer's secondary contact email address. This email address cannot be on the same domain as the `customerDomain`",
              type: "string",
            },
            kind: {
              description:
                "Identifies the resource as a customer. Value: `admin#directory#customer`",
              type: "string",
              default: "admin#directory#customer",
            },
            postalAddress: {
              description: "The customer's postal address information.",
              $ref: "CustomerPostalAddress",
            },
            phoneNumber: {
              type: "string",
              description:
                "The customer's contact phone number in [E.164](https://en.wikipedia.org/wiki/E.164) format.",
            },
            id: {
              type: "string",
              description:
                "The unique ID for the customer's Google Workspace account. (Readonly)",
            },
            etag: {
              description: "ETag of the resource.",
              type: "string",
            },
            language: {
              description:
                "The customer's ISO 639-2 language code. See the [Language Codes](/admin-sdk/directory/v1/languages) page for the list of supported codes. Valid language codes outside the supported set will be accepted by the API but may lead to unexpected behavior. The default value is `en`.",
              type: "string",
            },
          },
          id: "Customer",
          type: "object",
        },
        UserCustomProperties: {
          additionalProperties: {
            type: "any",
          },
          type: "object",
          id: "UserCustomProperties",
          description:
            "JSON template for a set of custom properties (i.e. all fields in a particular schema)",
        },
        CalendarResources: {
          type: "object",
          description: "Public API: Resources.calendars",
          id: "CalendarResources",
          properties: {
            kind: {
              default:
                "admin#directory#resources#calendars#calendarResourcesList",
              description:
                "Identifies this as a collection of CalendarResources. This is always `admin#directory#resources#calendars#calendarResourcesList`.",
              type: "string",
            },
            etag: {
              description: "ETag of the resource.",
              type: "string",
            },
            nextPageToken: {
              description:
                "The continuation token, used to page through large result sets. Provide this value in a subsequent request to return the next page of results.",
              type: "string",
            },
            items: {
              items: {
                $ref: "CalendarResource",
              },
              type: "array",
              description: "The CalendarResources in this page of results.",
            },
          },
        },
        Printer: {
          type: "object",
          properties: {
            uri: {
              type: "string",
              description: "Editable. Printer URI.",
            },
            description: {
              type: "string",
              description: "Editable. Description of printer.",
            },
            useDriverlessConfig: {
              type: "boolean",
              description:
                "Editable. flag to use driverless configuration or not. If it's set to be true, make_and_model can be ignored",
            },
            name: {
              type: "string",
              description:
                "The resource name of the Printer object, in the format customers/{customer-id}/printers/{printer-id} (During printer creation leave empty)",
            },
            displayName: {
              description: "Editable. Name of printer.",
              type: "string",
            },
            orgUnitId: {
              type: "string",
              description:
                "Organization Unit that owns this printer (Only can be set during Printer creation)",
            },
            createTime: {
              format: "google-datetime",
              description: "Output only. Time when printer was created.",
              type: "string",
              readOnly: true,
            },
            id: {
              description:
                "Id of the printer. (During printer creation leave empty)",
              type: "string",
            },
            makeAndModel: {
              type: "string",
              description:
                "Editable. Make and model of printer. e.g. Lexmark MS610de Value must be in format as seen in ListPrinterModels response.",
            },
            auxiliaryMessages: {
              description:
                "Output only. Auxiliary messages about issues with the printer configuration if any.",
              type: "array",
              items: {
                $ref: "AuxiliaryMessage",
              },
              readOnly: true,
            },
          },
          description: "Printer configuration.",
          id: "Printer",
        },
        UserExternalId: {
          properties: {
            value: {
              description: "The value of the id.",
              type: "string",
            },
            type: {
              description: "The type of the Id.",
              type: "string",
            },
            customType: {
              description: "Custom type.",
              type: "string",
            },
          },
          type: "object",
          id: "UserExternalId",
          description: "JSON template for an externalId entry.",
        },
        AuxiliaryMessage: {
          id: "AuxiliaryMessage",
          properties: {
            severity: {
              type: "string",
              enumDescriptions: [
                "Message type unspecified.",
                "Message of severity: info.",
                "Message of severity: warning.",
                "Message of severity: error.",
              ],
              description: "Message severity",
              enum: [
                "SEVERITY_UNSPECIFIED",
                "SEVERITY_INFO",
                "SEVERITY_WARNING",
                "SEVERITY_ERROR",
              ],
            },
            auxiliaryMessage: {
              description:
                'Human readable message in English. Example: "Given printer is invalid or no longer supported."',
              type: "string",
            },
            fieldMask: {
              type: "string",
              description: "Field that this message concerns.",
              format: "google-fieldmask",
            },
          },
          type: "object",
          description:
            'Auxiliary message about issues with printers or settings. Example: {message_type:AUXILIARY_MESSAGE_WARNING, field_mask:make_and_model, message:"Given printer is invalid or no longer supported."}',
        },
        BuildingCoordinates: {
          properties: {
            latitude: {
              description: "Latitude in decimal degrees.",
              type: "number",
              format: "double",
            },
            longitude: {
              type: "number",
              format: "double",
              description: "Longitude in decimal degrees.",
            },
          },
          description: "Public API: Resources.buildings",
          type: "object",
          id: "BuildingCoordinates",
        },
        VerificationCodes: {
          description:
            "JSON response template for List verification codes operation in Directory API.",
          properties: {
            etag: {
              type: "string",
              description: "ETag of the resource.",
            },
            kind: {
              default: "admin#directory#verificationCodesList",
              type: "string",
              description:
                "The type of the resource. This is always `admin#directory#verificationCodesList`.",
            },
            items: {
              items: {
                $ref: "VerificationCode",
              },
              description: "A list of verification code resources.",
              type: "array",
            },
          },
          id: "VerificationCodes",
          type: "object",
        },
        UserAddress: {
          type: "object",
          id: "UserAddress",
          properties: {
            formatted: {
              description: "Formatted address.",
              type: "string",
            },
            type: {
              type: "string",
              description:
                "Each entry can have a type which indicates standard values of that entry. For example address could be of home work etc. In addition to the standard type an entry can have a custom type and can take any value. Such type should have the CUSTOM value as type and also have a customType value.",
            },
            region: {
              type: "string",
              description: "Region.",
            },
            country: {
              description: "Country.",
              type: "string",
            },
            primary: {
              type: "boolean",
              description:
                "If this is user's primary address. Only one entry could be marked as primary.",
            },
            streetAddress: {
              type: "string",
              description: "Street.",
            },
            postalCode: {
              type: "string",
              description: "Postal code.",
            },
            countryCode: {
              description: "Country code.",
              type: "string",
            },
            poBox: {
              description: "Other parts of address.",
              type: "string",
            },
            sourceIsStructured: {
              type: "boolean",
              description:
                "User supplied address was structured. Structured addresses are NOT supported at this time. You might be able to write structured addresses but any values will eventually be clobbered.",
            },
            customType: {
              type: "string",
              description: "Custom type.",
            },
            extendedAddress: {
              type: "string",
              description: "Extended Address.",
            },
            locality: {
              type: "string",
              description: "Locality.",
            },
          },
          description: "JSON template for address.",
        },
        DirectoryChromeosdevicesIssueCommandResponse: {
          description: "A response for issuing a command.",
          properties: {
            commandId: {
              type: "string",
              description:
                "The unique ID of the issued command, used to retrieve the command status.",
              format: "int64",
            },
          },
          id: "DirectoryChromeosdevicesIssueCommandResponse",
          type: "object",
        },
        DomainAliases: {
          id: "DomainAliases",
          properties: {
            kind: {
              default: "admin#directory#domainAliases",
              type: "string",
              description: "Kind of resource this is.",
            },
            domainAliases: {
              items: {
                $ref: "DomainAlias",
              },
              type: "array",
              description: "List of domain alias objects.",
            },
            etag: {
              description: "ETag of the resource.",
              type: "string",
            },
          },
          type: "object",
        },
        UserEmail: {
          type: "object",
          properties: {
            primary: {
              type: "boolean",
              description:
                "If this is user's primary email. Only one entry could be marked as primary.",
            },
            customType: {
              type: "string",
              description: "Custom Type.",
            },
            address: {
              type: "string",
              description: "Email id of the user.",
            },
            type: {
              type: "string",
              description:
                "Each entry can have a type which indicates standard types of that entry. For example email could be of home, work etc. In addition to the standard type, an entry can have a custom type and can take any value Such types should have the CUSTOM value as type and also have a customType value.",
            },
          },
          id: "UserEmail",
          description: "JSON template for an email.",
        },
        UserMakeAdmin: {
          properties: {
            status: {
              type: "boolean",
              description: "Indicates the administrator status of the user.",
              annotations: {
                required: ["directory.users.makeAdmin"],
              },
            },
          },
          id: "UserMakeAdmin",
          type: "object",
        },
        ChromeOsDevices: {
          id: "ChromeOsDevices",
          type: "object",
          properties: {
            etag: {
              description: "ETag of the resource.",
              type: "string",
            },
            kind: {
              default: "admin#directory#chromeosdevices",
              description: "Kind of resource this is.",
              type: "string",
            },
            nextPageToken: {
              description:
                "Token used to access the next page of this result. To access the next page, use this token's value in the `pageToken` query string of this request.",
              type: "string",
            },
            chromeosdevices: {
              description: "List of Chrome OS Device objects.",
              items: {
                $ref: "ChromeOsDevice",
              },
              type: "array",
            },
          },
        },
        SchemaFieldSpec: {
          description:
            "You can use schemas to add custom fields to user profiles. You can use these fields to store information such as the projects your users work on, their physical locations, their hire dates, or whatever else fits your business needs. For more information, see [Custom User Fields](/admin-sdk/directory/v1/guides/manage-schemas).",
          id: "SchemaFieldSpec",
          type: "object",
          properties: {
            etag: {
              description: "The ETag of the field.",
              type: "string",
            },
            indexed: {
              description:
                "Boolean specifying whether the field is indexed or not. Default: `true`.",
              default: "true",
              type: "boolean",
            },
            readAccessType: {
              type: "string",
              description:
                "Specifies who can view values of this field. See [Retrieve users as a non-administrator](/admin-sdk/directory/v1/guides/manage-users#retrieve_users_non_admin) for more information. Note: It may take up to 24 hours for changes to this field to be reflected.",
              default: "ALL_DOMAIN_USERS",
            },
            fieldName: {
              type: "string",
              description: "The name of the field.",
              annotations: {
                required: [
                  "directory.schemas.insert",
                  "directory.schemas.update",
                ],
              },
            },
            numericIndexingSpec: {
              properties: {
                maxValue: {
                  description:
                    "Maximum value of this field. This is meant to be indicative rather than enforced. Values outside this range will still be indexed, but search may not be as performant.",
                  type: "number",
                  format: "double",
                },
                minValue: {
                  format: "double",
                  type: "number",
                  description:
                    "Minimum value of this field. This is meant to be indicative rather than enforced. Values outside this range will still be indexed, but search may not be as performant.",
                },
              },
              description:
                "Indexing spec for a numeric field. By default, only exact match queries will be supported for numeric fields. Setting the `numericIndexingSpec` allows range queries to be supported.",
              type: "object",
            },
            fieldId: {
              type: "string",
              description: "The unique identifier of the field (Read-only)",
            },
            kind: {
              type: "string",
              default: "admin#directory#schema#fieldspec",
              description:
                "The kind of resource this is. For schema fields this is always `admin#directory#schema#fieldspec`.",
            },
            displayName: {
              type: "string",
              annotations: {
                required: [
                  "directory.schemas.insert",
                  "directory.schemas.update",
                ],
              },
              description: "Display Name of the field.",
            },
            multiValued: {
              description:
                "A boolean specifying whether this is a multi-valued field or not. Default: `false`.",
              type: "boolean",
            },
            fieldType: {
              type: "string",
              annotations: {
                required: [
                  "directory.schemas.insert",
                  "directory.schemas.update",
                ],
              },
              description: "The type of the field.",
            },
          },
        },
        Domains: {
          type: "object",
          properties: {
            creationTime: {
              type: "string",
              description:
                "Creation time of the domain. Expressed in [Unix time](https://en.wikipedia.org/wiki/Epoch_time) format. (Read-only).",
              format: "int64",
            },
            verified: {
              description:
                "Indicates the verification state of a domain. (Read-only).",
              type: "boolean",
            },
            etag: {
              description: "ETag of the resource.",
              type: "string",
            },
            isPrimary: {
              description:
                "Indicates if the domain is a primary domain (Read-only).",
              type: "boolean",
            },
            domainName: {
              type: "string",
              description: "The domain name of the customer.",
              annotations: {
                required: ["directory.domains.insert"],
              },
            },
            domainAliases: {
              items: {
                $ref: "DomainAlias",
              },
              type: "array",
              description: "List of domain alias objects. (Read-only)",
            },
            kind: {
              type: "string",
              default: "admin#directory#domain",
              description: "Kind of resource this is.",
            },
          },
          id: "Domains",
        },
        Asp: {
          description:
            "An application-specific password (ASP) is used with applications that do not accept a verification code when logging into the application on certain devices. The ASP access code is used instead of the login and password you commonly use when accessing an application through a browser. For more information about ASPs and how to create one, see the [help center](https://support.google.com/a/answer/2537800#asp).",
          id: "Asp",
          properties: {
            kind: {
              description:
                "The type of the API resource. This is always `admin#directory#asp`.",
              default: "admin#directory#asp",
              type: "string",
            },
            userKey: {
              description: "The unique ID of the user who issued the ASP.",
              type: "string",
            },
            lastTimeUsed: {
              description:
                "The time when the ASP was last used. Expressed in [Unix time](https://en.wikipedia.org/wiki/Epoch_time) format.",
              type: "string",
              format: "int64",
            },
            codeId: {
              description: "The unique ID of the ASP.",
              type: "integer",
              format: "int32",
            },
            etag: {
              description: "ETag of the ASP.",
              type: "string",
            },
            creationTime: {
              description:
                "The time when the ASP was created. Expressed in [Unix time](https://en.wikipedia.org/wiki/Epoch_time) format.",
              type: "string",
              format: "int64",
            },
            name: {
              description:
                "The name of the application that the user, represented by their `userId`, entered when the ASP was created.",
              type: "string",
            },
          },
          type: "object",
        },
        FailureInfo: {
          description: "Info about failures",
          id: "FailureInfo",
          type: "object",
          properties: {
            errorMessage: {
              type: "string",
              description: "Failure reason message.",
            },
            errorCode: {
              enum: [
                "OK",
                "CANCELLED",
                "UNKNOWN",
                "INVALID_ARGUMENT",
                "DEADLINE_EXCEEDED",
                "NOT_FOUND",
                "ALREADY_EXISTS",
                "PERMISSION_DENIED",
                "UNAUTHENTICATED",
                "RESOURCE_EXHAUSTED",
                "FAILED_PRECONDITION",
                "ABORTED",
                "OUT_OF_RANGE",
                "UNIMPLEMENTED",
                "INTERNAL",
                "UNAVAILABLE",
                "DATA_LOSS",
              ],
              enumDescriptions: [
                "Not an error; returned on success HTTP Mapping: 200 OK",
                "The operation was cancelled, typically by the caller. HTTP Mapping: 499 Client Closed Request",
                "Unknown error. For example, this error may be returned when a `Status` value received from another address space belongs to an error space that is not known in this address space. Also errors raised by APIs that do not return enough error information may be converted to this error. HTTP Mapping: 500 Internal Server Error",
                "The client specified an invalid argument. Note that this differs from `FAILED_PRECONDITION`. `INVALID_ARGUMENT` indicates arguments that are problematic regardless of the state of the system (e.g., a malformed file name). HTTP Mapping: 400 Bad Request",
                "The deadline expired before the operation could complete. For operations that change the state of the system, this error may be returned even if the operation has completed successfully. For example, a successful response from a server could have been delayed long enough for the deadline to expire. HTTP Mapping: 504 Gateway Timeout",
                "Some requested entity (e.g., file or directory) was not found. Note to server developers: if a request is denied for an entire class of users, such as gradual feature rollout or undocumented allowlist, `NOT_FOUND` may be used. If a request is denied for some users within a class of users, such as user-based access control, `PERMISSION_DENIED` must be used. HTTP Mapping: 404 Not Found",
                "The entity that a client attempted to create (e.g., file or directory) already exists. HTTP Mapping: 409 Conflict",
                "The caller does not have permission to execute the specified operation. `PERMISSION_DENIED` must not be used for rejections caused by exhausting some resource (use `RESOURCE_EXHAUSTED` instead for those errors). `PERMISSION_DENIED` must not be used if the caller can not be identified (use `UNAUTHENTICATED` instead for those errors). This error code does not imply the request is valid or the requested entity exists or satisfies other pre-conditions. HTTP Mapping: 403 Forbidden",
                "The request does not have valid authentication credentials for the operation. HTTP Mapping: 401 Unauthorized",
                "Some resource has been exhausted, perhaps a per-user quota, or perhaps the entire file system is out of space. HTTP Mapping: 429 Too Many Requests",
                'The operation was rejected because the system is not in a state required for the operation\'s execution. For example, the directory to be deleted is non-empty, an rmdir operation is applied to a non-directory, etc. Service implementors can use the following guidelines to decide between `FAILED_PRECONDITION`, `ABORTED`, and `UNAVAILABLE`: (a) Use `UNAVAILABLE` if the client can retry just the failing call. (b) Use `ABORTED` if the client should retry at a higher level. For example, when a client-specified test-and-set fails, indicating the client should restart a read-modify-write sequence. (c) Use `FAILED_PRECONDITION` if the client should not retry until the system state has been explicitly fixed. For example, if an "rmdir" fails because the directory is non-empty, `FAILED_PRECONDITION` should be returned since the client should not retry unless the files are deleted from the directory. HTTP Mapping: 400 Bad Request',
                "The operation was aborted, typically due to a concurrency issue such as a sequencer check failure or transaction abort. See the guidelines above for deciding between `FAILED_PRECONDITION`, `ABORTED`, and `UNAVAILABLE`. HTTP Mapping: 409 Conflict",
                "The operation was attempted past the valid range. E.g., seeking or reading past end-of-file. Unlike `INVALID_ARGUMENT`, this error indicates a problem that may be fixed if the system state changes. For example, a 32-bit file system will generate `INVALID_ARGUMENT` if asked to read at an offset that is not in the range [0,2^32-1], but it will generate `OUT_OF_RANGE` if asked to read from an offset past the current file size. There is a fair bit of overlap between `FAILED_PRECONDITION` and `OUT_OF_RANGE`. We recommend using `OUT_OF_RANGE` (the more specific error) when it applies so that callers who are iterating through a space can easily look for an `OUT_OF_RANGE` error to detect when they are done. HTTP Mapping: 400 Bad Request",
                "The operation is not implemented or is not supported/enabled in this service. HTTP Mapping: 501 Not Implemented",
                "Internal errors. This means that some invariants expected by the underlying system have been broken. This error code is reserved for serious errors. HTTP Mapping: 500 Internal Server Error",
                "The service is currently unavailable. This is most likely a transient condition, which can be corrected by retrying with a backoff. Note that it is not always safe to retry non-idempotent operations. See the guidelines above for deciding between `FAILED_PRECONDITION`, `ABORTED`, and `UNAVAILABLE`. HTTP Mapping: 503 Service Unavailable",
                "Unrecoverable data loss or corruption. HTTP Mapping: 500 Internal Server Error",
              ],
              description: "Canonical code for why the update failed to apply.",
              type: "string",
            },
            printerId: {
              description: "Id of a failed printer.",
              type: "string",
            },
            printer: {
              description: "Failed printer.",
              $ref: "Printer",
            },
          },
        },
        ListPrinterModelsResponse: {
          properties: {
            printerModels: {
              description:
                "Printer models that are currently allowed to be configured for ChromeOs. Some printers may be added or removed over time.",
              type: "array",
              items: {
                $ref: "PrinterModel",
              },
            },
            nextPageToken: {
              type: "string",
              description:
                "A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.",
            },
          },
          type: "object",
          description: "Response for listing allowed printer models.",
          id: "ListPrinterModelsResponse",
        },
        ListPrintersResponse: {
          properties: {
            printers: {
              type: "array",
              items: {
                $ref: "Printer",
              },
              description:
                "List of printers. If `org_unit_id` was given in the request, then only printers visible for this OU will be returned. If `org_unit_id` was not given in the request, then all printers will be returned.",
            },
            nextPageToken: {
              type: "string",
              description:
                "A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.",
            },
          },
          id: "ListPrintersResponse",
          description: "Response for listing printers.",
          type: "object",
        },
        Groups: {
          id: "Groups",
          type: "object",
          properties: {
            etag: {
              type: "string",
              description: "ETag of the resource.",
            },
            nextPageToken: {
              description: "Token used to access next page of this result.",
              type: "string",
            },
            kind: {
              default: "admin#directory#groups",
              description: "Kind of resource this is.",
              type: "string",
            },
            groups: {
              description: "List of group objects.",
              type: "array",
              items: {
                $ref: "Group",
              },
            },
          },
        },
        UserPhone: {
          type: "object",
          id: "UserPhone",
          description: "JSON template for a phone entry.",
          properties: {
            customType: {
              description: "Custom Type.",
              type: "string",
            },
            value: {
              type: "string",
              description: "Phone number.",
            },
            primary: {
              description: "If this is user's primary phone or not.",
              type: "boolean",
            },
            type: {
              type: "string",
              description:
                "Each entry can have a type which indicates standard types of that entry. For example phone could be of home_fax work mobile etc. In addition to the standard type an entry can have a custom type and can give it any name. Such types should have the CUSTOM value as type and also have a customType value.",
            },
          },
        },
        Aliases: {
          description:
            "JSON response template to list aliases in Directory API.",
          id: "Aliases",
          type: "object",
          properties: {
            aliases: {
              type: "array",
              items: {
                type: "any",
              },
            },
            etag: {
              type: "string",
            },
            kind: {
              default: "admin#directory#aliases",
              type: "string",
            },
          },
        },
        Alias: {
          type: "object",
          description: "JSON template for Alias object in Directory API.",
          properties: {
            alias: {
              type: "string",
            },
            id: {
              type: "string",
            },
            primaryEmail: {
              type: "string",
            },
            etag: {
              type: "string",
            },
            kind: {
              type: "string",
              default: "admin#directory#alias",
            },
          },
          id: "Alias",
        },
        BatchCreatePrintersResponse: {
          type: "object",
          properties: {
            failures: {
              description:
                "A list of create failures. Printer IDs are not populated, as printer were not created.",
              type: "array",
              items: {
                $ref: "FailureInfo",
              },
            },
            printers: {
              description:
                "A list of successfully created printers with their IDs populated.",
              type: "array",
              items: {
                $ref: "Printer",
              },
            },
          },
          id: "BatchCreatePrintersResponse",
          description: "Response for adding new printers in batch.",
        },
        Domains2: {
          properties: {
            etag: {
              description: "ETag of the resource.",
              type: "string",
            },
            kind: {
              description: "Kind of resource this is.",
              default: "admin#directory#domains",
              type: "string",
            },
            domains: {
              type: "array",
              description: "List of domain objects.",
              items: {
                $ref: "Domains",
              },
            },
          },
          type: "object",
          id: "Domains2",
        },
        UserKeyword: {
          description: "JSON template for a keyword entry.",
          id: "UserKeyword",
          type: "object",
          properties: {
            value: {
              description: "Keyword.",
              type: "string",
            },
            type: {
              type: "string",
              description:
                "Each entry can have a type which indicates standard type of that entry. For example keyword could be of type occupation or outlook. In addition to the standard type an entry can have a custom type and can give it any name. Such types should have the CUSTOM value as type and also have a customType value.",
            },
            customType: {
              description: "Custom Type.",
              type: "string",
            },
          },
        },
        DirectoryChromeosdevicesCommand: {
          description:
            "Information regarding a command that was issued to a device.",
          id: "DirectoryChromeosdevicesCommand",
          type: "object",
          properties: {
            issueTime: {
              description:
                "The timestamp when the command was issued by the admin.",
              format: "google-datetime",
              type: "string",
            },
            payload: {
              description: "The payload that the command specified, if any.",
              type: "string",
            },
            commandResult: {
              description: "The result of the command execution.",
              $ref: "DirectoryChromeosdevicesCommandResult",
            },
            commandId: {
              description: "Unique ID of a device command.",
              format: "int64",
              type: "string",
            },
            state: {
              type: "string",
              enum: [
                "STATE_UNSPECIFIED",
                "PENDING",
                "EXPIRED",
                "CANCELLED",
                "SENT_TO_CLIENT",
                "ACKED_BY_CLIENT",
                "EXECUTED_BY_CLIENT",
              ],
              enumDescriptions: [
                "The command status was unspecified.",
                "An unexpired command not yet sent to the client.",
                "The command didn't get executed by the client within the expected time.",
                "The command is cancelled by admin while in PENDING.",
                "The command has been sent to the client.",
                "The client has responded that it received the command.",
                "The client has (un)successfully executed the command.",
              ],
              description: "Indicates the command state.",
            },
            commandExpireTime: {
              description:
                "The time at which the command will expire. If the device doesn't execute the command within this time the command will become expired.",
              type: "string",
              format: "google-datetime",
            },
            type: {
              description: "The type of the command.",
              type: "string",
              enum: [
                "COMMAND_TYPE_UNSPECIFIED",
                "REBOOT",
                "TAKE_A_SCREENSHOT",
                "SET_VOLUME",
                "WIPE_USERS",
                "REMOTE_POWERWASH",
              ],
              enumDescriptions: [
                "The command type was unspecified.",
                "Reboot the device. Can only be issued to Kiosk and managed guest session devices.",
                "Take a screenshot of the device. Only available if the device is in Kiosk Mode.",
                "Set the volume of the device. Can only be issued to Kiosk and managed guest session devices.",
                "Wipe all the users off of the device. Executing this command in the device will remove all user profile data, but it will keep device policy and enrollment.",
                "Wipes the device by performing a power wash. Executing this command in the device will remove all data including user policies, device policies and enrollment policies. Warning: This will revert the device back to a factory state with no enrollment unless the device is subject to forced or auto enrollment. Use with caution, as this is an irreversible action!",
              ],
            },
          },
        },
        BatchDeletePrintersResponse: {
          id: "BatchDeletePrintersResponse",
          type: "object",
          properties: {
            printerIds: {
              description:
                "A list of Printer.id that were successfully deleted.",
              items: {
                type: "string",
              },
              type: "array",
            },
            failedPrinters: {
              description: "A list of update failures.",
              type: "array",
              items: {
                $ref: "FailureInfo",
              },
            },
          },
          description: "Response for deleting existing printers in batch.",
        },
        UserLanguage: {
          id: "UserLanguage",
          properties: {
            preference: {
              type: "string",
              description:
                "Optional. If present, controls whether the specified `languageCode` is the user's preferred language. If `customLanguage` is set, this can't be set. Allowed values are `preferred` and `not_preferred`.",
            },
            languageCode: {
              type: "string",
              description:
                "ISO 639 string representation of a language. See [Language Codes](/admin-sdk/directory/v1/languages) for the list of supported codes. Valid language codes outside the supported set will be accepted by the API but may lead to unexpected behavior. Illegal values cause `SchemaException`. If this is set, `customLanguage` can't be set.",
            },
            customLanguage: {
              type: "string",
              description:
                "Other language. User can provide their own language name if there is no corresponding ISO 639 language code. If this is set, `languageCode` can't be set.",
            },
          },
          type: "object",
          description: "JSON template for a language entry.",
        },
        User: {
          type: "object",
          id: "User",
          description:
            "The Directory API allows you to create and manage your account's users, user aliases, and user Gmail chat profile photos. For more information about common tasks, see the [User Accounts Developer's Guide](/admin-sdk/directory/v1/guides/manage-users.html) and the [User Aliases Developer's Guide](/admin-sdk/directory/v1/guides/manage-user-aliases.html).",
          properties: {
            name: {
              description:
                "Holds the given and family names of the user, and the read-only `fullName` value. The maximum number of characters in the `givenName` and in the `familyName` values is 60. In addition, name values support unicode/UTF-8 characters, and can contain spaces, letters (a-z), numbers (0-9), dashes (-), forward slashes (/), and periods (.). For more information about character usage rules, see the [administration help center](https://support.google.com/a/answer/9193374). Maximum allowed data size for this field is 1Kb.",
              $ref: "UserName",
              annotations: {
                required: ["directory.users.insert"],
              },
            },
            isMailboxSetup: {
              readOnly: true,
              description:
                "Output only. Indicates if the user's Google mailbox is created. This property is only applicable if the user has been assigned a Gmail license.",
              type: "boolean",
            },
            phones: {
              type: "any",
              description:
                "A list of the user's phone numbers. The maximum allowed data size for this field is 1Kb.",
            },
            isEnforcedIn2Sv: {
              description:
                "Output only. Is 2-step verification enforced (Read-only)",
              type: "boolean",
              readOnly: true,
            },
            suspensionReason: {
              type: "string",
              description:
                "Output only. Has the reason a user account is suspended either by the administrator or by Google at the time of suspension. The property is returned only if the `suspended` property is `true`.",
              readOnly: true,
            },
            password: {
              type: "string",
              description: "User's password",
              annotations: {
                required: ["directory.users.insert"],
              },
            },
            hashFunction: {
              type: "string",
              description:
                "Stores the hash format of the `password` property. The following `hashFunction` values are allowed: * `MD5` - Accepts simple hex-encoded values. * `SHA1` - Accepts simple hex-encoded values. * `crypt` - Compliant with the [C crypt library](https://en.wikipedia.org/wiki/Crypt_%28C%29). Supports the DES, MD5 (hash prefix `$1$`), SHA-256 (hash prefix `$5$`), and SHA-512 (hash prefix `$6$`) hash algorithms. If rounds are specified as part of the prefix, they must be 10,000 or fewer.",
            },
            ims: {
              type: "any",
              description:
                "The user's Instant Messenger (IM) accounts. A user account can have multiple ims properties. But, only one of these ims properties can be the primary IM contact. The maximum allowed data size for this field is 2Kb.",
            },
            languages: {
              description:
                "The user's languages. The maximum allowed data size for this field is 1Kb.",
              type: "any",
            },
            id: {
              description:
                "The unique ID for the user. A user `id` can be used as a user request URI's `userKey`.",
              type: "string",
            },
            sshPublicKeys: {
              description: "A list of SSH public keys.",
              type: "any",
            },
            keywords: {
              description:
                "The user's keywords. The maximum allowed data size for this field is 1Kb.",
              type: "any",
            },
            etag: {
              readOnly: true,
              type: "string",
              description: "Output only. ETag of the resource.",
            },
            recoveryEmail: {
              type: "string",
              description: "Recovery email of the user.",
            },
            websites: {
              type: "any",
              description:
                "The user's websites. The maximum allowed data size for this field is 2Kb.",
            },
            primaryEmail: {
              type: "string",
              description:
                "The user's primary email address. This property is required in a request to create a user account. The `primaryEmail` must be unique and cannot be an alias of another user.",
              annotations: {
                required: ["directory.users.insert"],
              },
            },
            deletionTime: {
              format: "date-time",
              type: "string",
              readOnly: true,
            },
            externalIds: {
              description:
                "A list of external IDs for the user, such as an employee or network ID. The maximum allowed data size for this field is 2Kb.",
              type: "any",
            },
            relations: {
              type: "any",
              description:
                "A list of the user's relationships to other users. The maximum allowed data size for this field is 2Kb.",
            },
            includeInGlobalAddressList: {
              description:
                "Indicates if the user's profile is visible in the Google Workspace global address list when the contact sharing feature is enabled for the domain. For more information about excluding user profiles, see the [administration help center](https://support.google.com/a/answer/1285988).",
              type: "boolean",
            },
            agreedToTerms: {
              type: "boolean",
              description:
                "Output only. This property is `true` if the user has completed an initial login and accepted the Terms of Service agreement.",
              readOnly: true,
            },
            nonEditableAliases: {
              type: "array",
              description:
                "Output only. List of the user's non-editable alias email addresses. These are typically outside the account's primary domain or sub-domain.",
              items: {
                type: "string",
              },
              readOnly: true,
            },
            ipWhitelisted: {
              description:
                "If `true`, the user's IP address is [whitelisted](https://support.google.com/a/answer/60752).",
              type: "boolean",
            },
            thumbnailPhotoEtag: {
              type: "string",
              description: "Output only. ETag of the user's photo (Read-only)",
              readOnly: true,
            },
            isEnrolledIn2Sv: {
              readOnly: true,
              type: "boolean",
              description:
                "Output only. Is enrolled in 2-step verification (Read-only)",
            },
            addresses: {
              description:
                "A list of the user's addresses. The maximum allowed data size for this field is 10Kb.",
              type: "any",
            },
            aliases: {
              items: {
                type: "string",
              },
              type: "array",
              description:
                "Output only. A list of the user's alias email addresses.",
              readOnly: true,
            },
            customSchemas: {
              additionalProperties: {
                $ref: "UserCustomProperties",
              },
              description:
                "Custom fields of the user. The key is a `schema_name` and its values are `'field_name': 'field_value'`.",
              type: "object",
            },
            organizations: {
              description:
                "A list of organizations the user belongs to. The maximum allowed data size for this field is 10Kb.",
              type: "any",
            },
            customerId: {
              readOnly: true,
              description:
                "Output only. The customer ID to [retrieve all account users](/admin-sdk/directory/v1/guides/manage-users.html#get_all_users). You can use the alias `my_customer` to represent your account's `customerId`. As a reseller administrator, you can use the resold customer account's `customerId`. To get a `customerId`, use the account's primary domain in the `domain` parameter of a [users.list](/admin-sdk/directory/v1/reference/users/list) request.",
              type: "string",
            },
            lastLoginTime: {
              readOnly: true,
              type: "string",
              description: "User's last login time. (Read-only)",
              format: "date-time",
            },
            isAdmin: {
              description:
                "Output only. Indicates a user with super admininistrator privileges. The `isAdmin` property can only be edited in the [Make a user an administrator](/admin-sdk/directory/v1/guides/manage-users.html#make_admin) operation ( [makeAdmin](/admin-sdk/directory/v1/reference/users/makeAdmin.html) method). If edited in the user [insert](/admin-sdk/directory/v1/reference/users/insert.html) or [update](/admin-sdk/directory/v1/reference/users/update.html) methods, the edit is ignored by the API service.",
              type: "boolean",
              readOnly: true,
            },
            archived: {
              type: "boolean",
              description: "Indicates if user is archived.",
            },
            emails: {
              type: "any",
              description:
                "A list of the user's email addresses. The maximum allowed data size for this field is 10Kb.",
            },
            suspended: {
              description: "Indicates if user is suspended.",
              type: "boolean",
            },
            recoveryPhone: {
              description:
                "Recovery phone of the user. The phone number must be in the E.164 format, starting with the plus sign (+). Example: *+16506661212*.",
              type: "string",
            },
            notes: {
              description: "Notes for the user.",
              type: "any",
            },
            locations: {
              type: "any",
              description:
                "The user's locations. The maximum allowed data size for this field is 10Kb.",
            },
            gender: {
              type: "any",
              description:
                "The user's gender. The maximum allowed data size for this field is 1Kb.",
            },
            posixAccounts: {
              description:
                "A list of [POSIX](https://www.opengroup.org/austin/papers/posix_faq.html) account information for the user.",
              type: "any",
            },
            kind: {
              default: "admin#directory#user",
              description:
                "Output only. The type of the API resource. For Users resources, the value is `admin#directory#user`.",
              readOnly: true,
              type: "string",
            },
            orgUnitPath: {
              description:
                "The full path of the parent organization associated with the user. If the parent organization is the top-level, it is represented as a forward slash (`/`).",
              type: "string",
            },
            creationTime: {
              format: "date-time",
              type: "string",
              description: "User's G Suite account creation time. (Read-only)",
              readOnly: true,
            },
            changePasswordAtNextLogin: {
              type: "boolean",
              description:
                "Indicates if the user is forced to change their password at next login. This setting doesn't apply when [the user signs in via a third-party identity provider](https://support.google.com/a/answer/60224).",
            },
            thumbnailPhotoUrl: {
              description: "Output only. Photo Url of the user (Read-only)",
              readOnly: true,
              type: "string",
            },
            isDelegatedAdmin: {
              readOnly: true,
              description:
                "Output only. Indicates if the user is a delegated administrator. Delegated administrators are supported by the API but cannot create or undelete users, or make users administrators. These requests are ignored by the API service. Roles and privileges for administrators are assigned using the [Admin console](https://support.google.com/a/answer/33325).",
              type: "boolean",
            },
          },
        },
        UserPosixAccount: {
          description: "JSON template for a POSIX account entry.",
          type: "object",
          properties: {
            systemId: {
              description:
                "System identifier for which account Username or Uid apply to.",
              type: "string",
            },
            username: {
              type: "string",
              description: "The username of the account.",
            },
            gid: {
              description: "The default group ID.",
              format: "uint64",
              type: "string",
            },
            gecos: {
              description: "The GECOS (user information) for this account.",
              type: "string",
            },
            primary: {
              type: "boolean",
              description:
                "If this is user's primary account within the SystemId.",
            },
            operatingSystemType: {
              description: "The operating system type for this account.",
              type: "string",
            },
            homeDirectory: {
              description: "The path to the home directory for this account.",
              type: "string",
            },
            shell: {
              description: "The path to the login shell for this account.",
              type: "string",
            },
            uid: {
              description: "The POSIX compliant user ID.",
              type: "string",
              format: "uint64",
            },
            accountId: {
              description: "A POSIX account field identifier.",
              type: "string",
            },
          },
          id: "UserPosixAccount",
        },
        MobileDevice: {
          description:
            "Google Workspace Mobile Management includes Android, [Google Sync](https://support.google.com/a/answer/135937), and iOS devices. For more information about common group mobile device API tasks, see the [Developer's Guide](/admin-sdk/directory/v1/guides/manage-mobile-devices.html).",
          properties: {
            buildNumber: {
              type: "string",
              description: "The device's operating system build number.",
            },
            firstSync: {
              type: "string",
              description:
                "Date and time the device was first synchronized with the policy settings in the G Suite administrator control panel (Read-only)",
              format: "date-time",
            },
            lastSync: {
              description:
                "Date and time the device was last synchronized with the policy settings in the G Suite administrator control panel (Read-only)",
              format: "date-time",
              type: "string",
            },
            model: {
              type: "string",
              description:
                "The mobile device's model name, for example Nexus S. This property can be [updated](/admin-sdk/directory/v1/reference/mobiledevices/update.html). For more information, see the [Developer's Guide](/admin-sdk/directory/v1/guides/manage-mobile=devices#update_mobile_device).",
            },
            kind: {
              default: "admin#directory#mobiledevice",
              description:
                "The type of the API resource. For Mobiledevices resources, the value is `admin#directory#mobiledevice`.",
              type: "string",
            },
            serialNumber: {
              description: "The device's serial number.",
              type: "string",
            },
            developerOptionsStatus: {
              description:
                "Developer options enabled or disabled on device (Read-only)",
              type: "boolean",
            },
            etag: {
              type: "string",
              description: "ETag of the resource.",
            },
            wifiMacAddress: {
              description: "The device's MAC address on Wi-Fi networks.",
              type: "string",
            },
            applications: {
              description:
                "The list of applications installed on an Android mobile device. It is not applicable to Google Sync and iOS devices. The list includes any Android applications that access Google Workspace data. When updating an applications list, it is important to note that updates replace the existing list. If the Android device has two existing applications and the API updates the list with five applications, the is now the updated list of five applications.",
              type: "array",
              items: {
                type: "object",
                properties: {
                  versionName: {
                    description:
                      "The application's version name. An example is `3.2-140714`.",
                    type: "string",
                  },
                  displayName: {
                    type: "string",
                    description:
                      "The application's display name. An example is `Browser`.",
                  },
                  versionCode: {
                    description:
                      "The application's version code. An example is `13`.",
                    type: "integer",
                    format: "int32",
                  },
                  permission: {
                    items: {
                      type: "string",
                    },
                    type: "array",
                    description:
                      "The list of permissions of this application. These can be either a standard Android permission or one defined by the application, and are found in an application's [Android manifest](https://developer.android.com/guide/topics/manifest/uses-permission-element.html). Examples of a Calendar application's permissions are `READ_CALENDAR`, or `MANAGE_ACCOUNTS`.",
                  },
                  packageName: {
                    description:
                      "The application's package name. An example is `com.android.browser`.",
                    type: "string",
                  },
                },
              },
            },
            securityPatchLevel: {
              type: "string",
              description: "Mobile Device Security patch level (Read-only)",
              format: "int64",
            },
            meid: {
              description: "The device's MEID number.",
              type: "string",
            },
            status: {
              description: "The device's status.",
              type: "string",
            },
            resourceId: {
              description:
                "The unique ID the API service uses to identify the mobile device.",
              type: "string",
            },
            userAgent: {
              description:
                "Gives information about the device such as `os` version. This property can be [updated](/admin-sdk/directory/v1/reference/mobiledevices/update.html). For more information, see the [Developer's Guide](/admin-sdk/directory/v1/guides/manage-mobile-devices#update_mobile_device).",
              type: "string",
            },
            deviceCompromisedStatus: {
              description: "The compromised device status.",
              type: "string",
            },
            managedAccountIsOnOwnerProfile: {
              type: "boolean",
              description:
                "Boolean indicating if this account is on owner/primary profile or not.",
            },
            encryptionStatus: {
              description: "Mobile Device Encryption Status (Read-only)",
              type: "string",
            },
            privilege: {
              type: "string",
              description: "DMAgentPermission (Read-only)",
            },
            basebandVersion: {
              type: "string",
              description: "The device's baseband version.",
            },
            bootloaderVersion: {
              description: "Mobile Device Bootloader version (Read-only)",
              type: "string",
            },
            imei: {
              type: "string",
              description: "The device's IMEI number.",
            },
            hardware: {
              description: "Mobile Device Hardware (Read-only)",
              type: "string",
            },
            brand: {
              type: "string",
              description: "Mobile Device Brand (Read-only)",
            },
            kernelVersion: {
              type: "string",
              description: "The device's kernel version.",
            },
            otherAccountsInfo: {
              items: {
                type: "string",
              },
              type: "array",
              description: "List of accounts added on device (Read-only)",
            },
            name: {
              items: {
                type: "string",
              },
              description:
                "List of the owner's user names. If your application needs the current list of device owner names, use the [get](/admin-sdk/directory/v1/reference/mobiledevices/get.html) method. For more information about retrieving mobile device user information, see the [Developer's Guide](/admin-sdk/directory/v1/guides/manage-users#get_user).",
              type: "array",
            },
            unknownSourcesStatus: {
              description:
                "Unknown sources enabled or disabled on device (Read-only)",
              type: "boolean",
            },
            manufacturer: {
              description: "Mobile Device manufacturer (Read-only)",
              type: "string",
            },
            email: {
              type: "array",
              items: {
                type: "string",
              },
              description:
                "List of owner's email addresses. If your application needs the current list of user emails, use the [get](/admin-sdk/directory/v1/reference/mobiledevices/get.html) method. For additional information, see the [retrieve a user](/admin-sdk/directory/v1/guides/manage-users#get_user) method.",
            },
            supportsWorkProfile: {
              description: "Work profile supported on device (Read-only)",
              type: "boolean",
            },
            deviceId: {
              type: "string",
              description:
                "The serial number for a Google Sync mobile device. For Android and iOS devices, this is a software generated unique identifier.",
            },
            releaseVersion: {
              type: "string",
              description: "Mobile Device release version version (Read-only)",
            },
            devicePasswordStatus: {
              type: "string",
              description: "DevicePasswordStatus (Read-only)",
            },
            adbStatus: {
              description:
                "Adb (USB debugging) enabled or disabled on device (Read-only)",
              type: "boolean",
            },
            type: {
              description: "The type of mobile device.",
              type: "string",
            },
            defaultLanguage: {
              type: "string",
              description: "The default locale used on the device.",
            },
            os: {
              type: "string",
              description:
                "The mobile device's operating system, for example IOS 4.3 or Android 2.3.5. This property can be [updated](/admin-sdk/directory/v1/reference/mobiledevices/update.html). For more information, see the [Developer's Guide](/admin-sdk/directory/v1/guides/manage-mobile-devices#update_mobile_device).",
            },
            networkOperator: {
              description:
                "Mobile Device mobile or network operator (if available) (Read-only)",
              type: "string",
            },
            hardwareId: {
              type: "string",
              description:
                "The IMEI/MEID unique identifier for Android hardware. It is not applicable to Google Sync devices. When adding an Android mobile device, this is an optional property. When updating one of these devices, this is a read-only property.",
            },
          },
          type: "object",
          id: "MobileDevice",
        },
        MobileDeviceAction: {
          id: "MobileDeviceAction",
          properties: {
            action: {
              annotations: {
                required: ["directory.mobiledevices.action"],
              },
              type: "string",
              description: "The action to be performed on the device.",
            },
          },
          type: "object",
        },
        Building: {
          type: "object",
          properties: {
            kind: {
              type: "string",
              description: "Kind of resource this is.",
              default: "admin#directory#resources#buildings#Building",
            },
            buildingId: {
              description:
                "Unique identifier for the building. The maximum length is 100 characters.",
              type: "string",
            },
            description: {
              description:
                'A brief description of the building. For example, "Chelsea Market".',
              type: "string",
            },
            address: {
              $ref: "BuildingAddress",
              description:
                "The postal address of the building. See [`PostalAddress`](/my-business/reference/rest/v4/PostalAddress) for details. Note that only a single address line and region code are required.",
            },
            etags: {
              description: "ETag of the resource.",
              type: "string",
            },
            buildingName: {
              description:
                'The building name as seen by users in Calendar. Must be unique for the customer. For example, "NYC-CHEL". The maximum length is 100 characters.',
              type: "string",
            },
            floorNames: {
              items: {
                type: "string",
              },
              type: "array",
              description:
                'The display names for all floors in this building. The floors are expected to be sorted in ascending order, from lowest floor to highest floor. For example, ["B2", "B1", "L", "1", "2", "2M", "3", "PH"] Must contain at least one entry.',
            },
            coordinates: {
              $ref: "BuildingCoordinates",
              description:
                "The geographic coordinates of the center of the building, expressed as latitude and longitude in decimal degrees.",
            },
          },
          description: "Public API: Resources.buildings",
          id: "Building",
        },
        BatchCreatePrintersRequest: {
          id: "BatchCreatePrintersRequest",
          description: "Request for adding new printers in batch.",
          properties: {
            requests: {
              description:
                "A list of Printers to be created. Max 50 at a time.",
              type: "array",
              items: {
                $ref: "CreatePrinterRequest",
              },
            },
          },
          type: "object",
        },
        Member: {
          type: "object",
          properties: {
            email: {
              type: "string",
              description:
                "The member's email address. A member can be a user or another group. This property is required when adding a member to a group. The `email` must be unique and cannot be an alias of another group. If the email address is changed, the API automatically reflects the email address changes.",
            },
            kind: {
              description:
                "The type of the API resource. For Members resources, the value is `admin#directory#member`.",
              type: "string",
              default: "admin#directory#member",
            },
            etag: {
              type: "string",
              description: "ETag of the resource.",
            },
            id: {
              description:
                "The unique ID of the group member. A member `id` can be used as a member request URI's `memberKey`.",
              type: "string",
            },
            delivery_settings: {
              description:
                "Defines mail delivery preferences of member. This is only supported by create/update/get.",
              type: "string",
            },
            type: {
              type: "string",
              description: "The type of group member.",
            },
            role: {
              type: "string",
              description:
                "The member's role in a group. The API returns an error for cycles in group memberships. For example, if `group1` is a member of `group2`, `group2` cannot be a member of `group1`. For more information about a member's role, see the [administration help center](https://support.google.com/a/answer/167094).",
            },
            status: {
              description: "Status of member (Immutable)",
              type: "string",
            },
          },
          description:
            "A Google Groups member can be a user or another group. This member can be inside or outside of your account's domains. For more information about common group member tasks, see the [Developer's Guide](/admin-sdk/directory/v1/guides/manage-group-members).",
          id: "Member",
        },
        UserSshPublicKey: {
          type: "object",
          properties: {
            fingerprint: {
              readOnly: true,
              description:
                "A SHA-256 fingerprint of the SSH public key. (Read-only)",
              type: "string",
            },
            expirationTimeUsec: {
              description: "An expiration time in microseconds since epoch.",
              type: "string",
              format: "int64",
            },
            key: {
              type: "string",
              description: "An SSH public key.",
            },
          },
          id: "UserSshPublicKey",
          description: "JSON template for a POSIX account entry.",
        },
        UserOrganization: {
          properties: {
            domain: {
              description: "The domain to which the organization belongs to.",
              type: "string",
            },
            customType: {
              description: "Custom type.",
              type: "string",
            },
            department: {
              type: "string",
              description: "Department within the organization.",
            },
            location: {
              type: "string",
              description:
                "Location of the organization. This need not be fully qualified address.",
            },
            name: {
              description: "Name of the organization",
              type: "string",
            },
            fullTimeEquivalent: {
              description:
                "The full-time equivalent millipercent within the organization (100000 = 100%).",
              type: "integer",
              format: "int32",
            },
            description: {
              type: "string",
              description: "Description of the organization.",
            },
            title: {
              description:
                "Title (designation) of the user in the organization.",
              type: "string",
            },
            symbol: {
              type: "string",
              description: "Symbol of the organization.",
            },
            primary: {
              type: "boolean",
              description: "If it user's primary organization.",
            },
            costCenter: {
              description: "The cost center of the users department.",
              type: "string",
            },
            type: {
              description:
                "Each entry can have a type which indicates standard types of that entry. For example organization could be of school work etc. In addition to the standard type an entry can have a custom type and can give it any name. Such types should have the CUSTOM value as type and also have a CustomType value.",
              type: "string",
            },
          },
          type: "object",
          id: "UserOrganization",
          description: "JSON template for an organization entry.",
        },
        MobileDevices: {
          id: "MobileDevices",
          type: "object",
          properties: {
            nextPageToken: {
              type: "string",
              description: "Token used to access next page of this result.",
            },
            etag: {
              description: "ETag of the resource.",
              type: "string",
            },
            kind: {
              default: "admin#directory#mobiledevices",
              description: "Kind of resource this is.",
              type: "string",
            },
            mobiledevices: {
              type: "array",
              items: {
                $ref: "MobileDevice",
              },
              description: "List of Mobile Device objects.",
            },
          },
        },
        DirectoryChromeosdevicesIssueCommandRequest: {
          description: "A request for issuing a command.",
          id: "DirectoryChromeosdevicesIssueCommandRequest",
          type: "object",
          properties: {
            payload: {
              description:
                'The payload for the command, provide it only if command supports it. The following commands support adding payload: - SET_VOLUME: Payload is a stringified JSON object in the form: { "volume": 50 }. The volume has to be an integer in the range [0,100].',
              type: "string",
            },
            commandType: {
              enumDescriptions: [
                "The command type was unspecified.",
                "Reboot the device. Can only be issued to Kiosk and managed guest session devices.",
                "Take a screenshot of the device. Only available if the device is in Kiosk Mode.",
                "Set the volume of the device. Can only be issued to Kiosk and managed guest session devices.",
                "Wipe all the users off of the device. Executing this command in the device will remove all user profile data, but it will keep device policy and enrollment.",
                "Wipes the device by performing a power wash. Executing this command in the device will remove all data including user policies, device policies and enrollment policies. Warning: This will revert the device back to a factory state with no enrollment unless the device is subject to forced or auto enrollment. Use with caution, as this is an irreversible action!",
              ],
              enum: [
                "COMMAND_TYPE_UNSPECIFIED",
                "REBOOT",
                "TAKE_A_SCREENSHOT",
                "SET_VOLUME",
                "WIPE_USERS",
                "REMOTE_POWERWASH",
              ],
              type: "string",
              description: "The type of command.",
            },
          },
        },
        UserRelation: {
          description: "JSON template for a relation entry.",
          id: "UserRelation",
          properties: {
            type: {
              type: "string",
              description:
                "The relation of the user. Some of the possible values are mother father sister brother manager assistant partner.",
            },
            value: {
              description: "The name of the relation.",
              type: "string",
            },
            customType: {
              description: "Custom Type.",
              type: "string",
            },
          },
          type: "object",
        },
        DirectoryChromeosdevicesCommandResult: {
          properties: {
            errorMessage: {
              description:
                "The error message with a short explanation as to why the command failed. Only present if the command failed.",
              type: "string",
            },
            executeTime: {
              format: "google-datetime",
              type: "string",
              description:
                "The time at which the command was executed or failed to execute.",
            },
            result: {
              enumDescriptions: [
                "The command result was unspecified.",
                "The command was ignored as obsolete.",
                "The command could not be executed successfully.",
                "The command was successfully executed.",
              ],
              description: "The result of the command.",
              type: "string",
              enum: [
                "COMMAND_RESULT_TYPE_UNSPECIFIED",
                "IGNORED",
                "FAILURE",
                "SUCCESS",
              ],
            },
          },
          description: "The result of executing a command.",
          id: "DirectoryChromeosdevicesCommandResult",
          type: "object",
        },
        DomainAlias: {
          properties: {
            verified: {
              type: "boolean",
              description:
                "Indicates the verification state of a domain alias. (Read-only)",
            },
            kind: {
              description: "Kind of resource this is.",
              default: "admin#directory#domainAlias",
              type: "string",
            },
            domainAliasName: {
              description: "The domain alias name.",
              type: "string",
            },
            parentDomainName: {
              annotations: {
                required: ["directory.domains.insert"],
              },
              description:
                "The parent domain name that the domain alias is associated with. This can either be a primary or secondary domain name within a customer.",
              type: "string",
            },
            creationTime: {
              format: "int64",
              type: "string",
              description:
                "The creation time of the domain alias. (Read-only).",
            },
            etag: {
              type: "string",
              description: "ETag of the resource.",
            },
          },
          type: "object",
          id: "DomainAlias",
        },
        RoleAssignments: {
          type: "object",
          properties: {
            nextPageToken: {
              type: "string",
            },
            items: {
              items: {
                $ref: "RoleAssignment",
              },
              type: "array",
              description: "A list of RoleAssignment resources.",
            },
            kind: {
              description:
                "The type of the API resource. This is always `admin#directory#roleAssignments`.",
              default: "admin#directory#roleAssignments",
              type: "string",
            },
            etag: {
              type: "string",
              description: "ETag of the resource.",
            },
          },
          id: "RoleAssignments",
        },
      },
      basePath: "",
      description:
        "Admin SDK lets administrators of enterprise domains to view and manage resources like user, groups etc. It also provides audit and usage reports of domain.",
      kind: "discovery#restDescription",
      fullyEncodeReservedExpansion: true,
      ownerDomain: "google.com",
      rootUrl: "https://admin.googleapis.com/",
    });
    const keysAfterLoad = Object.keys(gapi.client);

    // Assert
    expect(newKeys(keysBeforeLoad, keysAfterLoad)).toEqual(["directory"]);
  });
});
