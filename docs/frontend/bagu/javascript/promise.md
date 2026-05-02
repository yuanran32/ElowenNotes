# Promise

## 一句话结论

Promise 是异步结果的状态容器，用统一的 `then/catch/finally` 组织成功、失败和收尾逻辑，解决回调嵌套和错误传递分散的问题。

## 核心规则

1. Promise 初始状态是 `pending`。
2. 只能从 `pending` 变为 `fulfilled` 或 `rejected`。
3. 状态一旦确定就不可改变。
4. `then` 会返回新的 Promise，所以可以链式调用。
5. `then` 回调会进入微任务队列。

## 链式调用

```js
requestUser()
  .then(user => requestOrders(user.id))
  .then(orders => render(orders))
  .catch(err => showError(err))
  .finally(() => hideLoading())
```

链式调用的关键是：每次 `then` 都返回一个新 Promise。回调返回普通值时，下一个 `then` 接收这个值；返回 Promise 时，下一个 `then` 会等待它完成；抛出异常时，错误会传递到后续 `catch`。

## thenable

Promise 会吸收 thenable 对象，也就是拥有 `then` 方法的对象。

```js
Promise.resolve({
  then(resolve) {
    resolve(1)
  },
}).then(console.log) // 1
```

这也是手写 Promise 时容易漏掉的边界。

## 常见静态方法

| 方法 | 特点 | 适用场景 |
| --- | --- | --- |
| `Promise.resolve` | 包装成功值或吸收 thenable | 统一返回 Promise |
| `Promise.reject` | 创建失败 Promise | 测试错误分支 |
| `Promise.all` | 全成功才成功，一个失败就失败 | 多接口强依赖 |
| `Promise.race` | 第一个完成就决定结果 | 超时控制 |
| `Promise.allSettled` | 等全部结束，不短路 | 批量任务统计 |
| `Promise.any` | 第一个成功就成功，全部失败才失败 | 多源兜底请求 |

## 常见追问

### Promise 为什么能捕获链路中的异常？

`then` 回调执行时如果抛错，返回的新 Promise 会变成 `rejected`，错误继续向后传递，直到被 `catch` 处理。这让异步错误可以像同步异常一样集中处理。

### `finally` 会改变结果吗？

通常不会。`finally` 不接收成功值或失败原因，它适合做关闭 loading、释放资源等收尾动作。但如果 `finally` 里抛错或返回 rejected Promise，后续链路会变成失败。

### Promise 取消怎么做？

Promise 本身没有取消语义。请求取消一般用 `AbortController`；业务层取消可以用标记位忽略过期结果，或者在封装层实现任务队列和取消令牌。
