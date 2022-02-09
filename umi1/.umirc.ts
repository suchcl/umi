import { defineConfig } from 'umi';
// 路由
import router from './src/router/router';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  // 布局
  layout: {},
  // routes: router,
  fastRefresh: {},
  // 路由模式
  history:{
    type: 'hash' // hash || history
  },
  mfsu: {} // 启用mfsu
});
