# 手写 Promise.race

## 题目

实现 `promiseRace`，第一个完成或失败的任务决定最终结果。

## 实现代码

```js
function promiseRace(iterable) {
  return new Promise((resolve, reject) => {
    for (const task of iterable) {
      Promise.resolve(task).then(resolve, reject);
    }
  });
}
```

## 测试用例

```js
promiseRace([
  new Promise((resolve) => setTimeout(() => resolve("slow"), 100)),
  new Promise((resolve) => setTimeout(() => resolve("fast"), 10)),
]).then((value) => {
  console.log(value); // fast
});
```

## 边界条件

1. 只看第一个 settled 的结果，不区分成功或失败。
2. 输入为空时，返回的 Promise 会一直 pending。
3. 普通值也要通过 `Promise.resolve` 处理。

