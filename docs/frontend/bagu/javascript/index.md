# JavaScript 高频八股

JavaScript 面试重点不是语法罗列，而是把“执行机制、对象模型、异步调度、内存管理”讲清楚。回答时先给结论，再解释机制，最后补项目场景和边界。

## 高频题地图

| 主题 | 必会问题 | 关注点 |
| --- | --- | --- |
| [闭包](/frontend/bagu/javascript/closure) | 什么是闭包？为什么会造成内存泄漏？ | 词法作用域、引用保留、GC |
| [原型链](/frontend/bagu/javascript/prototype) | new、prototype、`__proto__`、class 的关系 | 对象查找、构造过程、继承 |
| [异步](/frontend/bagu/javascript/async) | Promise、async/await、并发控制怎么讲 | 状态流转、错误传递、任务调度 |
| [this 指向](/frontend/bagu/javascript/this) | 普通函数、箭头函数、bind 的差异 | 调用位置、词法绑定、优先级 |
| [事件循环](/frontend/bagu/javascript/event-loop) | 宏任务和微任务的执行顺序 | 调用栈、任务队列、渲染时机 |
| [Promise](/frontend/bagu/javascript/promise) | Promise 解决了什么？链式调用怎么实现？ | 状态机、thenable、微任务 |

## 答题顺序

1. 先说结论：一句话说明这个机制解决什么问题。
2. 再讲过程：按执行步骤说明变量、对象或任务如何变化。
3. 补代码：用最小示例证明自己不是只背概念。
4. 讲边界：错误处理、内存、兼容性、性能影响。
5. 关联项目：说明在哪类业务里会用到。

## 高频追问

- `var`、`let`、`const` 在作用域和变量提升上有什么区别？
- `Object.create(null)` 创建的对象有什么特殊点？
- 箭头函数为什么不能当构造函数？
- Promise 的错误为什么会“冒泡”到后续 `catch`？
- `async/await` 和 Promise 是什么关系？
- 浏览器事件循环和 Node.js 事件循环有什么差异？
