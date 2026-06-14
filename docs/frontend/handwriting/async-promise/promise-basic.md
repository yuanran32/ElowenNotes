# Promise 基础

1. 手写 `Promise`
   - 考点：`pending`、`fulfilled`、`rejected` 三种状态，状态不可逆。
   - 边界：executor 同步异常、异步 resolve、回调队列。

2. 手写 `Promise.then`
   - 考点：返回新 Promise、链式调用、值穿透、异常捕获。
   - 边界：thenable 解析、循环引用检测。

3. 手写 `Promise.catch`
   - 考点：等价于 `then(null, onRejected)`。
   - 边界：错误继续向后透传。

4. 手写 `Promise.finally`
   - 考点：不改变原 Promise 的最终结果。
   - 边界：finally 返回 Promise 时需要等待。

5. 手写 `Promise.resolve`
   - 考点：普通值、Promise、thenable。
   - 边界：thenable 的 getter 抛错。

6. 手写 `Promise.reject`
   - 考点：直接创建 rejected Promise。
   - 边界：reject 的 reason 不做展开。

