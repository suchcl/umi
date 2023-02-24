import { defineConfig } from 'umi';
// 路由
import router from './src/router/router';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none'
  },
  // 布局
  // layout: {},
  routes: router,
  fastRefresh: {},
  // 路由模式
  // history:{
  //   type: 'hash' // hash || history
  // },
  mfsu: {}, // 启用mfsu,
  // 配置build的打包目录，默认为dist，一般情况下不需要修改
  outputPath: "build",
  // 配置图片质量编译为base64，单位为字节，默认为10000，10kb
  inlineLimit: 10000
});
