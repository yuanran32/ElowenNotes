# 函数工具

这一组题主要考察闭包、定时器、参数保存和函数组合。

## debounce

```ts
function debounce<T extends (...args: any[]) => void>(fn: T, wait = 300) {
  let timer: ReturnType<typeof setTimeout> | null = null;

  return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, wait);
  };
}
```

记录重点：最后一次触发才执行、this 绑定、参数透传、是否需要立即执行版本。

## throttle

```ts
function throttle<T extends (...args: any[]) => void>(fn: T, wait = 300) {
  let lastTime = 0;

  return function (this: ThisParameterType<T>, ...args: Parameters<T>) {
    const now = Date.now();
    if (now - lastTime >= wait) {
      lastTime = now;
      fn.apply(this, args);
    }
  };
}
```

记录重点：固定间隔执行、首尾触发差异、时间戳版和定时器版的区别。

## 后续补充

- curry
- compose
- once
- memoize
