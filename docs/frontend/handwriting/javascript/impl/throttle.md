# 手写 throttle

## 题目

实现节流函数：高频触发时，固定时间间隔内最多执行一次。

## 实现代码

```js
function throttle(fn, wait, options = {}) {
  const { leading = true, trailing = true } = options;
  let timer = null;
  let lastExecTime = 0;
  let lastArgs;
  let lastThis;

  function invoke(time) {
    lastExecTime = time;
    const result = fn.apply(lastThis, lastArgs);
    lastArgs = null;
    lastThis = null;
    return result;
  }

  function throttled(...args) {
    const now = Date.now();

    if (!lastExecTime && leading === false) {
      lastExecTime = now;
    }

    const remaining = wait - (now - lastExecTime);
    lastArgs = args;
    lastThis = this;

    if (remaining <= 0 || remaining > wait) {
      if (timer) {
        clearTimeout(timer);
        timer = null;
      }
      return invoke(now);
    }

    if (!timer && trailing !== false) {
      timer = setTimeout(() => {
        timer = null;
        invoke(leading === false ? 0 : Date.now());
      }, remaining);
    }
  }

  throttled.cancel = function () {
    if (timer) {
      clearTimeout(timer);
    }
    timer = null;
    lastExecTime = 0;
    lastArgs = null;
    lastThis = null;
  };

  return throttled;
}
```

## 测试用例

```js
const onScroll = throttle(() => {
  console.log("scroll", Date.now());
}, 1000);

window.addEventListener("scroll", onScroll);
```

## 边界条件

1. `leading` 控制第一次是否立即执行。
2. `trailing` 控制结束时是否补一次执行。
3. 需要保留最后一次调用的参数和 `this`。
4. 要提供 `cancel`，方便组件卸载时清理定时器。

