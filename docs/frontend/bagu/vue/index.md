# Vue 高频八股

Vue 面试重点集中在响应式、组件更新、diff、调度、组件通信和性能优化。回答时要能从“数据变化”讲到“页面更新”。

## 高频题地图

| 主题 | 必会问题 | 关注点 |
| --- | --- | --- |
| [响应式原理](/frontend/bagu/vue/reactivity) | Vue 2 和 Vue 3 响应式有什么区别 | 依赖收集、派发更新、Proxy |
| [diff 与 key](/frontend/bagu/vue/diff-key) | key 为什么不能乱用 index | 同层比较、复用、最长递增子序列 |
| [computed 和 watch](/frontend/bagu/vue/computed-watch) | computed 和 watch 怎么选 | 缓存、依赖、异步副作用 |
| [nextTick 与更新时机](/frontend/bagu/vue/lifecycle-nexttick) | DOM 更新为什么不是同步的 | 批处理、微任务、生命周期 |
| [组件通信](/frontend/bagu/vue/communication) | 父子、跨层、全局状态怎么选 | props、emit、provide/inject、Pinia |

## 答题主线

1. 数据被读取时收集依赖。
2. 数据被修改时触发依赖。
3. Vue 把组件更新任务放进调度队列。
4. 同一轮同步修改会被合并。
5. 队列刷新后重新 render，得到新旧 vnode。
6. diff 后用最小必要 DOM 操作更新页面。
