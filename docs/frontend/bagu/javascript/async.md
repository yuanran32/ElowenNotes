# 异步编程

## 一句话结论

JavaScript 是单线程执行代码，但浏览器和 Node.js 提供了异步能力。异步任务完成后，会把回调放进任务队列，等待调用栈清空后再执行。

## 回调、Promise、async/await

| 写法 | 优点 | 问题 |
| --- | --- | --- |
| 回调函数 | 简单直接，适合事件监听 | 多层嵌套容易形成回调地狱 |
| Promise | 链式调用，统一成功和失败状态 | 多个异步流程仍需要组织 |
| async/await | 写法接近同步，便于 try/catch | 本质仍是 Promise，不能阻塞线程 |

## Promise 状态

Promise 有三种状态：`pending`、`fulfilled`、`rejected`。状态一旦从 `pending` 变成成功或失败，就不可逆，后续再调用 `resolve` 或 `reject` 不会改变结果。

```js
const p = new Promise((resolve, reject) => {
  resolve(1)
  reject(new Error('failed'))
})

p.then(console.log).catch(console.error) // 1
```

## async/await 本质

`async` 函数一定返回 Promise。`await` 会等待右侧 Promise 完成，并把后续代码放到微任务里继续执行。

```js
async function loadUser() {
  try {
    const user = await requestUser()
    return user.name
  } catch (err) {
    console.error(err)
    return ''
  }
}
```

上面代码等价于把后续逻辑写在 `then` 中，只是语法更接近同步流程。

## 并发和串行

```js
// 串行：后一个请求依赖前一个结果
for (const id of ids) {
  await request(id)
}

// 并发：多个请求互不依赖
const list = await Promise.all(ids.map(id => request(id)))
```

面试中要强调：能并发时不要误写成串行，否则接口耗时会累加。需要限流时使用并发池，避免瞬间打满浏览器连接数或后端接口。

## 常见追问

### `Promise.all` 和 `Promise.allSettled` 有什么区别？

`Promise.all` 适合强依赖场景，只要一个失败，整体就失败；`Promise.allSettled` 会等待所有任务结束，并返回每个任务的成功或失败结果，适合批量上传、批量校验这类允许部分失败的场景。

### `await` 在循环里一定有问题吗？

不一定。如果后一个任务依赖前一个结果，循环里 `await` 是合理的。如果任务互不依赖，就应该用 `Promise.all` 或并发池提升吞吐。

### 异步错误怎么处理？

Promise 链中用 `catch`，`async/await` 中用 `try/catch`。工程里还要补充全局兜底，例如浏览器的 `unhandledrejection`，避免 Promise 错误静默丢失。
