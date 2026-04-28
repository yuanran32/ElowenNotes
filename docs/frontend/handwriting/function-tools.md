# 函数工具

这一组题主要考察闭包、定时器、参数保存和函数组合。

## debounce
原理
每次触发->清空上一次定时器
停下来毫秒才执行一次
防抖：频繁触发就不断重置定时器，只执行最后一次
```js
function debounce(fn,delay){
  let timer = null;
  return function(...args){
    if(timer) clearTimeout(timer);

    timer = setTimeout(()=>{
      fm.apply(this,args);
    }.delay)
  }
}
```

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

节流：一段时间内不管点多少次，只执行一次
```js
//时间戳版（立刻执行）
//原理：固定时间间隔才能执行一次
function throttle(fn,await){
  let lastTime = 0;
  return function(...args){
    const now = Date.now();
    if(now-lastTime >= wait){
      lastTime = now;
      fn.apply(this,args);
    }
  }
}
```

```js
// 节流 定时器版
function throttle(fn, wait) {
  let timer = null;
  return function(...args) {
    // 上锁：有定时器就不执行
    if (timer) return;

    timer = setTimeout(() => {
      fn.apply(this, args);
      timer = null; // 解锁
    }, wait)
  }
}
```

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
