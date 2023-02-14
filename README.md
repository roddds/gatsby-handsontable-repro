Repository that reproduces issue with server-side rendering the Handsontable React wrapper.

## To reproduce:

```
git clone git@github.com:roddds/gatsby-handsontable-repro.git
cd gatsby-handsontable-repro
npm install
npm run build
```

> Note: requires Node >18

## Error output

```
 ERROR  UNKNOWN

Truncated page data information for the failed page "/": {
  "errors": {},
  "path": "/",
  "slicesMap": {},
  "pageContext": {}
}

failed Building static HTML for pages - 2.557s

 ERROR #95312  HTML.COMPILATION

"navigator" is not available during server-side rendering. Enable "DEV_SSR" to debug this during "gatsby develop".

See our docs page for more info on this error: https://gatsby.dev/debug-html


  66 |   var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
  67 |     _ref$userAgent = _ref.userAgent,
> 68 |     userAgent = _ref$userAgent === void 0 ? navigator.userAgent : _ref$userAgent,
     | ^
  69 |     _ref$vendor = _ref.vendor,
  70 |     vendor = _ref$vendor === void 0 ? navigator.vendor : _ref$vendor;
  71 |   objectEach(browsers, function (_ref2) {


  WebpackError: ReferenceError: navigator is not defined

  - browser.mjs:68
    [my-gatsby-site]/[handsontable]/helpers/browser.mjs:68:1

  - browser.mjs:90
    [my-gatsby-site]/[handsontable]/helpers/browser.mjs:90:1

  - bootstrap:19
    my-gatsby-site/webpack/bootstrap:19:1

  - static-entry.js:224
    my-gatsby-site/.cache/static-entry.js:224:27
```
