# Promise 静态方法

1. 手写 `Promise.all`
   - 考点：结果顺序、全部成功才成功、任一失败立即失败。
   - 边界：空数组直接 resolve `[]`。

2. 手写 `Promise.race`
   - 考点：第一个 settle 的 Promise 决定结果。
   - 边界：空数组会一直 pending。

3. 手写 `Promise.allSettled`
   - 考点：收集每个任务的状态和值。
   - 边界：永远不会因为单个失败而整体失败。

4. 手写 `Promise.any`
   - 考点：任一成功即成功，全部失败才失败。
   - 边界：全部失败返回 `AggregateError`。

5. 手写 `promisify`
   - 考点：Node callback 转 Promise。
   - 边界：多返回值、`this` 保留。

