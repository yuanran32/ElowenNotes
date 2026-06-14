# 手写 retry

## 题目

实现失败重试函数，支持最大重试次数、固定延迟和指数退避。

## 实现代码

```js
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function retry(taskFn, options = {}) {
  const {
    retries = 3,
    delay = 300,
    factor = 1,
    shouldRetry = () => true,
  } = options;

  let lastError;

  for (let attempt = 0; attempt <= retries; attempt += 1) {
    try {
      return await taskFn(attempt);
    } catch (error) {
      lastError = error;

      if (attempt === retries || !shouldRetry(error)) {
        throw lastError;
      }

      const wait = delay * Math.pow(factor, attempt);
      await sleep(wait);
    }
  }

  throw lastError;
}
```

## 测试用例

```js
let count = 0;

retry(
  async () => {
    count += 1;
    if (count < 3) {
      throw new Error("network error");
    }
    return "ok";
  },
  { retries: 3, delay: 100, factor: 2 },
).then((result) => {
  console.log(result); // ok
});
```

## 边界条件

1. `retries` 表示失败后还能重试几次，不包含第一次执行。
2. `shouldRetry` 可以过滤不可重试错误，例如 400、401。
3. 指数退避可以避免大量请求同时重试。
4. 生产环境通常还会加随机抖动和最大延迟上限。

