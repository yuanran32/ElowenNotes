# 工程化高频八股

前端工程化面试重点不是“会用工具”，而是能讲清楚工具解决了什么问题、底层机制是什么、项目里如何取舍和验证。回答时建议按“问题 -> 机制 -> 配置 -> 风险 -> 验证”展开。

## 高频题地图

| 主题 | 必会问题 | 关注点 |
| --- | --- | --- |
| [Vite](/frontend/bagu/engineering/vite) | Vite 为什么启动快？和 Webpack 有什么区别？ | ESM、预构建、按需编译、HMR |
| [构建与模块化](/frontend/bagu/engineering/build-module) | ESM、CommonJS、Bundle 分别解决什么？ | 模块规范、依赖图、产物拆分 |
| [Tree Shaking](/frontend/bagu/engineering/tree-shaking) | Tree Shaking 为什么有时不生效？ | 静态分析、副作用、产物格式 |
| [性能优化](/frontend/bagu/engineering/performance) | 首屏慢怎么排查和优化？ | 指标、资源、渲染、缓存 |
| [前端监控](/frontend/bagu/engineering/monitoring) | 前端监控怎么设计？ | 错误、性能、行为、上报 |
| [CI/CD](/frontend/bagu/engineering/ci-cd) | 前端发布流程怎么保证质量？ | 分支、检查、构建、灰度、回滚 |

## 回答主线

1. 先说业务问题：开发慢、构建慢、页面慢、线上不可观测、发布风险高。
2. 再讲工具机制：依赖图、编译、缓存、分包、静态分析、流水线。
3. 补项目落点：具体配置、脚本、目录规范、质量门禁。
4. 讲风险边界：兼容性、缓存失效、环境差异、误删副作用代码。
5. 给验证方式：构建耗时、包体积、Lighthouse、Web Vitals、监控告警。
