# 手写 Promise.all

## 题目

实现 `promiseAll`，所有任务成功才成功，任意一个失败就整体失败。

## 实现代码

```js
function promiseAll(iterable) {
  return new Promise((resolve, reject) => {
    const tasks = Array.from(iterable);

    if (tasks.length === 0) {
      resolve([]);
      return;
    }

    const results = new Array(tasks.length);
    let fulfilledCount = 0;

    tasks.forEach((task, index) => {
      Promise.resolve(task).then(
        (value) => {
          results[index] = value;
          fulfilledCount += 1;

          if (fulfilledCount === tasks.length) {
            resolve(results);
          }
        },
        reject,
      );
    });
  });
}
```

## 测试用例

```js
promiseAll([
  Promise.resolve(1),
  2,
  new Promise((resolve) => setTimeout(() => resolve(3), 100)),
]).then((result) => {
  console.log(result); // [1, 2, 3]
});
```

## 边界条件

1. 空数组直接成功，结果为 `[]`。
2. 返回结果顺序必须和输入顺序一致，不是完成顺序。
3. 普通值要用 `Promise.resolve` 包一层。
4. 任意一个任务失败，整体立即失败。

