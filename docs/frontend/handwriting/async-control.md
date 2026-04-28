# 异步控制

异步控制题主要考察 Promise 状态流转、结果顺序、错误处理和并发限制。

## Promise.all

```ts
function promiseAll<T>(tasks: Array<T | Promise<T>>) {
  return new Promise<T[]>((resolve, reject) => {
    const result: T[] = [];
    let finished = 0;

    if (tasks.length === 0) {
      resolve(result);
      return;
    }

    tasks.forEach((task, index) => {
      Promise.resolve(task)
        .then((value) => {
          result[index] = value;
          finished += 1;
          if (finished === tasks.length) resolve(result);
        })
        .catch(reject);
    });
  });
}
```

## 必答点

- 结果顺序要和输入顺序一致。
- 空数组直接 resolve。
- 普通值要用 `Promise.resolve` 包装。
- 任意一个任务失败就 reject。

## 后续补充

- Promise.race
- Promise.allSettled
- Promise.any
- 并发池
- 请求重试
