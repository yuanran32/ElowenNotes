# 事件循环

## 一句话结论

事件循环负责协调同步代码、异步回调和页面渲染。执行顺序通常是：同步代码先执行，调用栈清空后执行所有微任务，再进入下一个宏任务，浏览器在合适时机进行渲染。

## 执行顺序

```js
console.log('script start')

setTimeout(() => {
  console.log('setTimeout')
})

Promise.resolve().then(() => {
  console.log('promise')
})

console.log('script end')
```

输出：

```txt
script start
script end
promise
setTimeout
```

同步代码最先执行；`Promise.then` 进入微任务队列；`setTimeout` 进入宏任务队列。当前宏任务结束后，先清空微任务，再执行下一个宏任务。

## 宏任务和微任务

| 类型 | 常见来源 |
| --- | --- |
| 宏任务 | script、setTimeout、setInterval、I/O、用户交互事件 |
| 微任务 | Promise.then/catch/finally、queueMicrotask、MutationObserver |

## 和渲染的关系

浏览器通常会在一次宏任务结束、微任务清空后，选择是否进行渲染。如果微任务递归追加太多，会长时间占用主线程，导致页面无法及时渲染。

```js
function loop() {
  Promise.resolve().then(loop)
}

loop()
```

这类代码会不断追加微任务，可能让页面卡死。

## 常见追问

### `setTimeout(fn, 0)` 是立即执行吗？

不是。它只是尽快把回调放到宏任务队列，必须等当前调用栈和微任务都执行完以后才有机会执行，而且浏览器还有最小延迟和后台节流策略。

### `async/await` 在事件循环里怎么排？

`await` 后面的代码相当于放进 Promise 的 `then` 中，所以属于微任务。`await` 前面的代码仍然同步执行。

### 为什么长任务会造成页面卡顿？

JavaScript 执行、样式计算、布局和绘制多数都在主线程上协调。一个长任务持续占用主线程时，用户输入和渲染都要排队，所以会出现点击无响应、动画掉帧。
