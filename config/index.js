// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')
var version = require('../package.json').version

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../docs/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    docsRoot: path.resolve(__dirname, '../docs'),
    assetsSubDirectory: '',
    assetsPublicPath: '/',
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    banner:
    '/*!\n' +
    ' * VueNVD3 v' + version + ' (https://github.com/DotNetAge/vue-nvd3)\n' +
    ' * (c) ' + new Date().getFullYear() + ' Ray Liang\n' +
    ' * Released under the MIT License.\n' +
    ' */'
  },
  dev: {
    env: require('./dev.env'),
    port: 8080,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}
