const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'wsjls-design',
    description: 'My awesome app using docz',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: ['开始', '组件'],
        mdPlugins: [],
        hastPlugins: [],
        ignore: [],
        typescript: true,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        root: 'D:\\1_a_workspace\\a_zhaowa\\wsjls\\wsjls-design\\.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: './components/**/*.{md,mdx}',
        public: '/public',
        dest: 'wsjls-site',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'wsjls-design',
        description: 'My awesome app using docz',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: 'D:\\1_a_workspace\\a_zhaowa\\wsjls\\wsjls-design',
          templates:
            'D:\\1_a_workspace\\a_zhaowa\\wsjls\\wsjls-design\\node_modules\\docz-core\\dist\\templates',
          docz: 'D:\\1_a_workspace\\a_zhaowa\\wsjls\\wsjls-design\\.docz',
          cache:
            'D:\\1_a_workspace\\a_zhaowa\\wsjls\\wsjls-design\\.docz\\.cache',
          app: 'D:\\1_a_workspace\\a_zhaowa\\wsjls\\wsjls-design\\.docz\\app',
          appPackageJson:
            'D:\\1_a_workspace\\a_zhaowa\\wsjls\\wsjls-design\\package.json',
          appTsConfig:
            'D:\\1_a_workspace\\a_zhaowa\\wsjls\\wsjls-design\\tsconfig.json',
          gatsbyConfig:
            'D:\\1_a_workspace\\a_zhaowa\\wsjls\\wsjls-design\\gatsby-config.js',
          gatsbyBrowser:
            'D:\\1_a_workspace\\a_zhaowa\\wsjls\\wsjls-design\\gatsby-browser.js',
          gatsbyNode:
            'D:\\1_a_workspace\\a_zhaowa\\wsjls\\wsjls-design\\gatsby-node.js',
          gatsbySSR:
            'D:\\1_a_workspace\\a_zhaowa\\wsjls\\wsjls-design\\gatsby-ssr.js',
          importsJs:
            'D:\\1_a_workspace\\a_zhaowa\\wsjls\\wsjls-design\\.docz\\app\\imports.js',
          rootJs:
            'D:\\1_a_workspace\\a_zhaowa\\wsjls\\wsjls-design\\.docz\\app\\root.jsx',
          indexJs:
            'D:\\1_a_workspace\\a_zhaowa\\wsjls\\wsjls-design\\.docz\\app\\index.jsx',
          indexHtml:
            'D:\\1_a_workspace\\a_zhaowa\\wsjls\\wsjls-design\\.docz\\app\\index.html',
          db:
            'D:\\1_a_workspace\\a_zhaowa\\wsjls\\wsjls-design\\.docz\\app\\db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
