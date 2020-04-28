# Un-minified GAPI project

This project aims to make minified GAPI (https://apis.google.com/js/api.js) source code readable and understandable.

### Current approach:

1. Beautify code
2. Go line-by-line
3. Make that line more readable and easier to understand
4. Leave original line commented out for future references
5. Rename all minified variables (one letter, etc.)
6. When renaming variables, do that in `ALL_CAPS` prefixed with `__UM__`, like `gapi.__UM__SOME_UNIX_TIME_NUMBER`

### Next steps:

1. Try to rewrite this script and make sure that it works
2. Probably add unit tests to make sure that we have a good understanding of how all parts work
3. Try adding TypeScript, it may make rewriting easier since we don't have to keep in mind what that variable does/contains
