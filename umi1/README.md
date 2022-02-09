# umi project

## Getting Started

Install dependencies,

```bash
$ yarn
```

Start the dev server,

```bash
$ yarn start
```


umi3.5以上的版本，如果项目更新慢，可以启用mfsu方案

确保umi是在3的项目，具体配置可以参考：https://github.com/umijs/umi/issues/6766

配置文件：.umirc.ts

```ts
import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  layout: {},
  routes: [{ path: '/', component: '@/pages/index' }],
  fastRefresh: {},
  mfsu: {} // 启用mfsu
});
```