# Tree Shaking

## 一句话结论

Tree Shaking 是构建阶段删除未使用代码的优化手段。它依赖 ESM 的静态导入导出结构，并且需要正确标记副作用，才能安全地删代码。

## 生效条件

| 条件 | 说明 |
| --- | --- |
| 使用 ESM | `import/export` 更利于静态分析 |
| 生产模式构建 | 开发模式通常不做完整压缩删除 |
| 代码无副作用或正确标记 | 构建工具必须知道删掉不会改变行为 |
| 依赖产物支持 | 第三方库需要提供可分析的 ESM 产物 |

## 副作用是什么

副作用指模块执行时除了导出值之外，还改变了外部环境。

```js
// 有副作用：导入后会修改全局样式
import './global.css'

// 有副作用：执行时修改全局对象
window.appVersion = '1.0.0'
```

这类代码即使没有显式使用导出，也不能随便删除。

## package.json sideEffects

```json
{
  "sideEffects": [
    "*.css",
    "./src/polyfills.ts"
  ]
}
```

`sideEffects: false` 表示包内模块默认没有副作用，构建工具可以更大胆地删除未使用模块。但如果项目里有全局样式、polyfill、注册逻辑，就必须保留白名单。

## 为什么 Tree Shaking 有时不生效

1. 使用 CommonJS，静态分析困难。
2. 第三方库只提供已经打包好的大文件。
3. 导入方式不合理，例如整包导入。
4. 模块存在副作用，构建工具不敢删除。
5. Babel 或构建配置把 ESM 转成 CommonJS 太早。

## 常见追问

### Tree Shaking 和代码分割有什么区别？

Tree Shaking 是删除没用代码，减少最终体积；代码分割是把代码拆成多个 chunk，改变加载时机。一个解决“要不要打进去”，一个解决“什么时候加载”。

### CSS 能 Tree Shaking 吗？

传统 CSS 很难像 JS 一样精确 Tree Shaking，因为类名可能在模板、字符串、运行时代码里动态出现。常见做法是用 PurgeCSS、UnoCSS、Tailwind 的内容扫描，但要注意动态类名白名单。

### 怎么验证 Tree Shaking 是否生效？

看构建产物和包体积分析报告，例如 Rollup/Vite 的 visualizer、Webpack Bundle Analyzer。不要只看源码是否 import，要看最终 chunk 中是否还存在对应代码。
