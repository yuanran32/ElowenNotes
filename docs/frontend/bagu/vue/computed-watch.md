# computed 和 watch

## 一句话结论

`computed` 用于从已有状态派生新值，强调缓存和声明式；`watch` 用于监听状态变化后执行副作用，适合异步请求、手动同步、埋点等场景。

## computed

```js
const firstName = ref('Tom')
const lastName = ref('Lee')

const fullName = computed(() => `${firstName.value} ${lastName.value}`)
```

`computed` 会基于依赖缓存结果。依赖没变时，多次读取不会重复执行 getter；依赖变化后，下一次读取才会重新计算。

## watch

```js
watch(
  () => userId.value,
  async id => {
    user.value = await fetchUser(id)
  },
  { immediate: true }
)
```

`watch` 更适合处理副作用。它可以指定监听源，也能配置 `immediate`、`deep`、`flush` 等选项。

## watchEffect

```js
watchEffect(() => {
  console.log(user.value.name)
})
```

`watchEffect` 会自动收集回调里读取到的响应式依赖。它写起来方便，但依赖不如 `watch` 明确，复杂业务中要避免难以追踪。

## 选型

| 场景 | 推荐 |
| --- | --- |
| 展示派生值 | `computed` |
| 表单字段组合计算 | `computed` |
| 监听 id 变化后请求接口 | `watch` |
| 监听状态后操作 DOM 或本地缓存 | `watch` |
| 快速调试依赖变化 | `watchEffect` |

## 常见追问

### computed 为什么有缓存？

computed 内部也是响应式 effect，但它是惰性的。依赖变化时只把自己标记为脏值，等下次读取时才重新计算，所以能避免重复计算。

### watch 的 deep 有什么风险？

`deep: true` 会深度遍历对象以收集依赖，大对象上成本较高。工程里应优先监听具体字段，只有确实需要监听整个对象变化时再使用 deep。

### watch 的 flush 有什么用？

`flush` 控制回调执行时机。默认是组件更新前；`post` 会在 DOM 更新后执行，适合读取更新后的 DOM；`sync` 同步执行，使用不当会破坏批处理收益。
