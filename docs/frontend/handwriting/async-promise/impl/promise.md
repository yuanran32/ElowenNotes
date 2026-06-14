# 手写 MiniPromise

## 题目

实现一个简版 Promise，支持状态流转、`then` 链式调用、异常捕获和值穿透。

## 实现代码

```js
const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

function isThenable(value) {
  return value !== null &&
    (typeof value === "object" || typeof value === "function") &&
    typeof value.then === "function";
}

function resolvePromise(promise, x, resolve, reject) {
  if (promise === x) {
    reject(new TypeError("Chaining cycle detected"));
    return;
  }

  if (x instanceof MiniPromise) {
    x.then(resolve, reject);
    return;
  }

  if (isThenable(x)) {
    let called = false;

    try {
      x.then(
        (value) => {
          if (called) return;
          called = true;
          resolvePromise(promise, value, resolve, reject);
        },
        (reason) => {
          if (called) return;
          called = true;
          reject(reason);
        },
      );
    } catch (error) {
      if (!called) {
        reject(error);
      }
    }

    return;
  }

  resolve(x);
}

class MiniPromise {
  constructor(executor) {
    this.status = PENDING;
    this.value = undefined;
    this.reason = undefined;
    this.fulfilledCallbacks = [];
    this.rejectedCallbacks = [];

    const resolve = (value) => {
      if (this.status !== PENDING) return;

      queueMicrotask(() => {
        if (this.status !== PENDING) return;
        this.status = FULFILLED;
        this.value = value;
        this.fulfilledCallbacks.forEach((callback) => callback());
      });
    };

    const reject = (reason) => {
      if (this.status !== PENDING) return;

      queueMicrotask(() => {
        if (this.status !== PENDING) return;
        this.status = REJECTED;
        this.reason = reason;
        this.rejectedCallbacks.forEach((callback) => callback());
      });
    };

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onFulfilled, onRejected) {
    const fulfilledHandler = typeof onFulfilled === "function"
      ? onFulfilled
      : (value) => value;

    const rejectedHandler = typeof onRejected === "function"
      ? onRejected
      : (reason) => {
          throw reason;
        };

    const nextPromise = new MiniPromise((resolve, reject) => {
      const handleFulfilled = () => {
        queueMicrotask(() => {
          try {
            const x = fulfilledHandler(this.value);
            resolvePromise(nextPromise, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        });
      };

      const handleRejected = () => {
        queueMicrotask(() => {
          try {
            const x = rejectedHandler(this.reason);
            resolvePromise(nextPromise, x, resolve, reject);
          } catch (error) {
            reject(error);
          }
        });
      };

      if (this.status === FULFILLED) {
        handleFulfilled();
      } else if (this.status === REJECTED) {
        handleRejected();
      } else {
        this.fulfilledCallbacks.push(handleFulfilled);
        this.rejectedCallbacks.push(handleRejected);
      }
    });

    return nextPromise;
  }

  catch(onRejected) {
    return this.then(null, onRejected);
  }

  static resolve(value) {
    return new MiniPromise((resolve) => resolve(value));
  }

  static reject(reason) {
    return new MiniPromise((_, reject) => reject(reason));
  }
}
```

## 测试用例

```js
new MiniPromise((resolve) => {
  resolve(1);
})
  .then((value) => value + 1)
  .then((value) => {
    console.log(value); // 2
    throw new Error("fail");
  })
  .catch((error) => {
    console.log(error.message); // fail
  });
```

## 边界条件

1. Promise 状态只能从 `pending` 变为 `fulfilled` 或 `rejected`。
2. `then` 必须返回新 Promise。
3. `then` 回调抛错时，新 Promise 要进入 rejected。
4. 返回 thenable 时要递归解析。
5. 要检测链式调用循环引用。

