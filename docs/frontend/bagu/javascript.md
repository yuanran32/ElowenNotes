# JavaScript 八股

## 高频题

| 题目 | 必答点 |
| --- | --- |
| 说一下闭包 | 词法作用域、函数引用外部变量、生命周期延长、内存风险 |
| 原型链怎么理解 | `prototype`、`__proto__`、constructor、属性查找过程 |
| this 指向规则 | 默认绑定、隐式绑定、显式绑定、new 绑定、箭头函数 |
| Promise 原理 | 状态不可逆、then 链式调用、微任务、错误穿透 |
| async/await 原理 | Generator 思想、Promise 包装、异常处理 |
| 事件循环 | 调用栈、宏任务、微任务、渲染时机、Node 差异 |

## 示例答案：事件循环

结论：事件循环负责协调同步代码、异步任务和页面渲染。浏览器会先执行调用栈中的同步代码，同步代码清空后处理微任务，再进入下一轮宏任务，并在合适时机进行渲染。

原理：宏任务包括 script、setTimeout、setInterval、I/O 等；微任务包括 Promise.then、queueMicrotask、MutationObserver 等。一次宏任务执行结束后，会清空当前产生的所有微任务，因此微任务过多可能阻塞渲染。

场景：如果需要等 DOM 更新后再读取布局，可以使用框架提供的 nextTick；如果只是把任务延后到本轮同步代码之后，可以使用 Promise.then 或 queueMicrotask。

追问：setTimeout 和 Promise.then 谁先执行、微任务为什么可能造成页面卡顿、浏览器和 Node 的事件循环有什么差异。
