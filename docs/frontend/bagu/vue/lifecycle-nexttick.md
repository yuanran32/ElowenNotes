# nextTick 与更新时机

## 一句话结论

Vue 修改响应式数据后不会立刻同步更新 DOM，而是把更新任务放进队列，在同一轮同步代码结束后批量刷新。`nextTick` 用来等待这次 DOM 更新完成。

## 为什么 DOM 不是同步更新

```js
count.value++
count.value++
count.value++
```

如果每次修改都立即更新 DOM，会造成重复渲染。Vue 会合并同一轮同步代码里的多次修改，只触发一次组件更新，提高性能。

## nextTick 用法

```js
const visible = ref(false)
const inputRef = ref()

async function open() {
  visible.value = true
  await nextTick()
  inputRef.value.focus()
}
```

这里必须等弹窗或输入框渲染到 DOM 后，才能安全调用 `focus`。

## 生命周期顺序

Vue 3 组合式 API 常见生命周期：

| Hook | 时机 |
| --- | --- |
| `onBeforeMount` | 组件挂载前 |
| `onMounted` | 组件挂载完成，可以访问 DOM |
| `onBeforeUpdate` | 响应式更新导致 DOM patch 前 |
| `onUpdated` | DOM patch 后 |
| `onBeforeUnmount` | 卸载前，适合清理副作用 |
| `onUnmounted` | 卸载完成 |

## 常见追问

### nextTick 是宏任务还是微任务？

Vue 会优先使用微任务实现，例如 Promise。这样可以在当前同步代码结束后尽快刷新更新队列。具体实现会有兼容性降级，但面试主线讲“基于微任务调度”即可。

### `onMounted` 里一定能拿到所有子组件 DOM 吗？

普通同步子组件通常可以。但异步组件、条件渲染、Teleport、Suspense 等场景要结合实际渲染时机判断。需要等待某次状态变化后的 DOM 时，用 `nextTick` 更明确。

### `onUpdated` 里能改状态吗？

要谨慎。`onUpdated` 里继续改响应式状态可能触发新一轮更新，写不好会形成循环更新。更推荐把派生状态放到 computed，把副作用放到 watch。
