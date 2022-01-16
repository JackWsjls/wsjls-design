// prefer default export if available
const preferDefault = m => (m && m.default) || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("./../../dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---components-alert-index-mdx": () => import("./../../../../components/alert/index.mdx" /* webpackChunkName: "component---components-alert-index-mdx" */),
  "component---components-nav-bar-index-mdx": () => import("./../../../../components/nav-bar/index.mdx" /* webpackChunkName: "component---components-nav-bar-index-mdx" */),
  "component---src-pages-404-js": () => import("./../../../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */)
}

