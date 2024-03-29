// const path = require('path');

const isH5 = process.env.TARO_ENV === 'h5';
const baseUrl = isH5 ? '' : 'http://localhost:8888';
const rootPath = __dirname.slice(0, __dirname.lastIndexOf('/'));

const config = {
  projectName: 'mmt-app',
  date: '2020-7-21',
  designWidth: 750,
  deviceRatio: {
    '640': 2.34 / 2,
    '750': 1,
    '828': 1.81 / 2,
  },
  sourceRoot: 'src',
  outputRoot: `dist/${process.env.TARO_ENV}`,
  baseUrl,
  alias: {
    '@/components': `${rootPath}/src/components`,
    '@/utils': `${rootPath}/src/utils`,
    '@/assets': `${rootPath}/src/assets`,
  },
  // alias: {
  //   '@/components': path.resolve(__dirname, '..', 'src/components'),
  //   '@/utils': path.resolve(__dirname, '..', 'src/utils'),
  // },
  babel: {
    sourceMap: true,
    presets: [
      [
        'env',
        {
          modules: false,
        },
      ],
    ],
    plugins: [
      'transform-decorators-legacy',
      'transform-class-properties',
      'transform-object-rest-spread',
      [
        'transform-runtime',
        {
          helpers: false,
          polyfill: false,
          regenerator: true,
          moduleName: 'babel-runtime',
        },
      ],
    ],
  },
  plugins: ['@tarojs/plugin-sass', '@tarojs/plugin-terser'],
  defineConstants: {},
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {},
      },
      url: {
        enable: true,
        config: {
          limit: 10240, // 设定转换尺寸上限
        },
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]',
        },
      },
    },
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
          browsers: ['last 3 versions', 'Android >= 4.1', 'ios >= 8'],
        },
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]',
        },
      },
    },
    devServer: {
      proxy: {
        '/api/': {
          target: 'http://localhost:8888',
          pathRewrite: { '^/api/': '/' },
          changeOrigin: true,
        },
      },
    },
  },
};

module.exports = function(merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'));
  }
  return merge({}, config, require('./prod'));
};

module.exports.config = config;
