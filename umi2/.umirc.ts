import { defineConfig } from 'umi';
const px2rem = require("postcss-px2rem-exclude");

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // layout:{},
  routes: [
    { path: '/', component: '@/pages/index' },
  ],
  fastRefresh: {},
  mfsu: {},
  extraPostCSSPlugins: [
    px2rem({
      remUnit: 75,
      exclude: '/node_modules/i'
    })
  ]
});
