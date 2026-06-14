# 工程化

1. 手写 Babel 插件
   - 考点：AST 解析、visitor、节点替换。
   - 边界：作用域、source map、插件顺序。

2. 手写 Webpack loader
   - 考点：源码转换、同步/异步 loader、source map。
   - 边界：缓存、参数校验。

3. 手写 Webpack plugin
   - 考点：compiler、compilation、hooks、资源处理。
   - 边界：构建生命周期、异步 hook。

4. 手写简版打包器
   - 考点：依赖分析、AST、模块图、运行时代码。
   - 边界：循环依赖、动态导入。

5. 手写 CommonJS 模块加载器
   - 考点：`require`、`module.exports`、模块缓存。
   - 边界：循环引用。

6. 手写 ESM 转 CommonJS
   - 考点：静态导入导出、AST 转换。
   - 边界：默认导出、命名导出、重导出。

7. 手写热更新 HMR 简版
   - 考点：文件监听、WebSocket、模块替换。
   - 边界：状态保留、失败回退刷新。

8. 手写 CLI 参数解析器
   - 考点：命令、选项、默认值、帮助信息。
   - 边界：短参数组合、布尔值、数组参数。

9. 手写环境变量加载
   - 考点：`.env` 解析、优先级、模式区分。
   - 边界：变量引用、敏感信息。

10. 手写 Source Map 解析思路
    - 考点：映射关系、VLQ 编码、调试定位。
    - 边界：压缩后列号定位。

