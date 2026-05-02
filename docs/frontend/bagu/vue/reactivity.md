# Vue 响应式原理

## 一句话结论

Vue 响应式的核心是“依赖收集”和“派发更新”：组件渲染时读取响应式数据，Vue 记录谁依赖了这个数据；数据变化时，Vue 通知相关副作用重新执行。

## Vue 2 和 Vue 3 区别

| 版本 | 实现 | 特点 |
| --- | --- | --- |
| Vue 2 | `Object.defineProperty` | 拦截已有属性的 getter/setter |
| Vue 3 | `Proxy` | 可以代理对象整体，支持新增属性、删除属性、数组索引等 |

Vue 2 对新增属性、删除属性、数组下标修改不够友好，需要 `Vue.set` 等 API。Vue 3 使用 Proxy 后，拦截能力更完整，也更适合 Map、Set 等数据结构。

## 依赖收集流程

```js
const state = reactive({ count: 0 })

effect(() => {
  console.log(state.count)
})

state.count++
```

执行逻辑：

1. `effect` 执行时读取 `state.count`。
2. Proxy 的 `get` 被触发，Vue 把当前 effect 收集到 `count` 的依赖集合。
3. 修改 `state.count` 时触发 `set`。
4. Vue 找到 `count` 对应的 effects，调度它们重新执行。

## ref 和 reactive

| API | 适合场景 | 注意点 |
| --- | --- | --- |
| `ref` | 基本类型、需要整体替换的值 | JS 中访问要 `.value` |
| `reactive` | 对象、表单、复杂状态 | 解构会丢失响应式，需要 `toRefs` |

## 常见追问

### 为什么 reactive 解构会丢响应式？

`reactive` 返回的是 Proxy。直接解构会把属性值取出来，后续访问不再经过 Proxy 的 `get`，自然无法继续依赖收集。需要使用 `toRef` 或 `toRefs` 保留响应式连接。

### Vue 3 为什么还需要 ref？

Proxy 只能代理对象，不能直接代理基本类型。`ref` 用对象包一层，通过 `.value` 的 getter/setter 实现依赖收集和更新触发。

### shallowReactive 和 shallowRef 有什么用？

它们只处理第一层响应式，适合大对象、第三方实例、不可变数据等场景，避免深层递归代理带来的额外成本。
