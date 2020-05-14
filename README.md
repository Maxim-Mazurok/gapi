# Un-minified GAPI project

This project aims to make minified GAPI (https://apis.google.com/js/api.js) source code readable and understandable.

### Why?

1. To create accurate type definitions for TypeScript (examples: [@types/gapi.client](https://www.npmjs.com/package/@types/gapi.client), [@types/gapi](https://www.npmjs.com/package/@types/gapi))
1. To create better optimized clone that will be distributed via NPM

### Current findings:
- `api.js` only defines one public method: `gapi.load`
- `gapi.load` accepts `libraries` and `callbackOrConfig` arguments, as [documented](https://github.com/google/google-api-javascript-client/blob/master/docs/reference.md#----gapiloadlibraries-callbackorconfig------), but `callbackOrConfig` also has [undocumented](https://github.com/google/google-api-javascript-client/issues/629) property: `config`
- `gapi.client` methods are defined in the `client` library that is being loaded by `gapi.load`

### Current approach:

1. Beautify code
1. Go line-by-line
1. Make that line more readable and easier to understand
1. Leave original line commented out for future references
1. Rename all minified variables (one letter, etc.)
1. When renaming variables, do that in `ALL_CAPS` prefixed with `__UM__`, like `gapi.__UM__SOME_UNIX_TIME_NUMBER`

### Next steps:

1. Try to rewrite this script and make sure that it works
1. Probably add unit tests to make sure that we have a good understanding of how all parts work
1. Try adding TypeScript, it may make rewriting easier since we don't have to keep in mind what that variable does/contains
