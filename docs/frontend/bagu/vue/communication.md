# 组件通信

## 一句话结论

Vue 组件通信要按关系远近选方案：父子用 props 和 emit，跨层用 provide/inject，全局共享用 Pinia，临时事件不建议滥用全局事件总线。

## 常见方式

| 方式 | 适用场景 | 注意点 |
| --- | --- | --- |
| props | 父传子 | 保持单向数据流 |
| emit | 子通知父 | 事件名要表达业务动作 |
| v-model | 表单类双向绑定 | 本质是 prop + emit |
| provide/inject | 跨层依赖注入 | 适合主题、表单上下文、组件库 |
| Pinia | 多页面或多组件共享状态 | 避免把所有局部状态都放全局 |
| expose/ref | 父组件调用子组件方法 | 会增加耦合，谨慎使用 |

## props 和 emit

```vue
<!-- Parent.vue -->
<UserCard :user="user" @rename="handleRename" />
```

```vue
<!-- UserCard.vue -->
<script setup>
defineProps({
  user: Object,
})

const emit = defineEmits(['rename'])

function rename() {
  emit('rename', 'new name')
}
</script>
```

父组件拥有状态，子组件通过事件表达意图，这样数据流清晰，调试也容易。

## v-model

```vue
<BaseInput v-model="keyword" />
```

Vue 3 中默认等价于传入 `modelValue`，监听 `update:modelValue`。多个 v-model 可以用参数区分，例如 `v-model:title`。

## provide/inject

```js
provide('formContext', {
  disabled,
  validate,
})

const formContext = inject('formContext')
```

适合组件库内部上下文，例如 Form 给 FormItem 提供校验方法，Tabs 给 TabPane 提供当前激活项。它不适合替代所有 props，因为依赖来源不如显式 props 直观。

## Pinia

Pinia 适合登录态、用户信息、权限、跨页面筛选条件、购物车等全局或半全局状态。局部弹窗开关、单个表单输入值不应该放进全局 store，否则状态边界会变乱。

## 常见追问

### 为什么 Vue 强调单向数据流？

单向数据流让状态来源明确。父组件传值给子组件，子组件通过事件通知父组件修改，避免多个组件同时改同一份数据导致状态难追踪。

### 什么时候不用 Pinia？

状态只被一个组件或很小的局部组件树使用时，不需要 Pinia。直接用本地 `ref/reactive` 或 props/emit 更简单。

### 事件总线为什么不推荐？

事件总线会让事件来源和接收方变隐式，项目大了之后难以追踪和清理。Vue 3 中更推荐明确的 props/emit、provide/inject 或 Pinia。
