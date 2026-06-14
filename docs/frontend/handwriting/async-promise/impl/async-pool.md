# 手写 asyncPool

## 题目

实现一个异步并发池，限制同一时间最多执行 `limit` 个任务，并按输入顺序返回结果。

## 实现代码

```js
async function asyncPool(limit, list, iteratorFn) {
  const results = new Array(list.length);
  const executing = new Set();

  for (let i = 0; i < list.length; i += 1) {
    const task = Promise.resolve()
      .then(() => iteratorFn(list[i], i))
      .then((result) => {
        results[i] = result;
      });

    executing.add(task);

    const clean = () => executing.delete(task);
    task.then(clean, clean);

    if (executing.size >= limit) {
      await Promise.race(executing);
    }
  }

  await Promise.all(executing);
  return results;
}
```

## 测试用例

```js
const sleep = (ms, value) =>
  new Promise((resolve) => setTimeout(() => resolve(value), ms));

asyncPool(2, [300, 100, 200], (ms) => sleep(ms, ms)).then((result) => {
  console.log(result); // [300, 100, 200]
});
```

## 边界条件

1. `limit` 控制并发数，不是总任务数。
2. 结果按输入顺序存放。
3. 任意任务失败时，当前实现会直接抛出错误。
4. 如果业务需要“失败不中断”，可以把每个结果包装成 `{ status, value, reason }`。

