# 手写 debounce

## 题目

实现防抖函数：高频触发时只在最后一次触发后延迟执行。

## 实现代码

```js
function debounce(fn, wait, immediate = false) {
  let timer = null;
  let lastResult;

  function debounced(...args) {
    const context = this;
    const shouldCallNow = immediate && timer === null;

    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      timer = null;
      if (!immediate) {
        lastResult = fn.apply(context, args);
      }
    }, wait);

    if (shouldCallNow) {
      lastResult = fn.apply(context, args);
    }

    return lastResult;
  }

  debounced.cancel = function () {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
  };

  debounced.flush = function () {
    if (timer) {
      clearTimeout(timer);
      timer = null;
      lastResult = fn();
    }
    return lastResult;
  };

  return debounced;
}
```

## 测试用例

```js
const onInput = debounce(function (value) {
  console.log("search", value);
}, 300);

onInput("a");
onInput("ab");
onInput("abc"); // 300ms 后只输出 abc
```

## 边界条件

1. 每次触发都要清理上一次 timer。
2. 需要保留调用时的 `this` 和参数。
3. 组件卸载或页面销毁时可调用 `cancel` 清理 timer。
4. `immediate` 为 true 时首次立即执行，后续触发重新计时。

