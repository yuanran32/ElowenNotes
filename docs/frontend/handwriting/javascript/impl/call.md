# 手写 call

## 题目

实现 `Function.prototype.myCall`，支持显式绑定 `this` 并传递参数。

## 核心思路

把当前函数临时挂到目标对象上，通过“对象方法调用”的规则让函数内部 `this` 指向目标对象，执行后删除临时属性。

## 实现代码

```js
Function.prototype.myCall = function (context, ...args) {
  if (typeof this !== "function") {
    throw new TypeError("caller must be a function");
  }

  const target = context == null ? globalThis : Object(context);
  const fnKey = Symbol("fn");

  target[fnKey] = this;
  const result = target[fnKey](...args);
  delete target[fnKey];

  return result;
};
```

## 测试用例

```js
function add(a, b) {
  return this.x + a + b;
}

console.log(add.myCall({ x: 1 }, 2, 3)); // 6
console.log(add.myCall(1, 2, 3)); // NaN
```

## 边界条件

1. `context` 为 `null` 或 `undefined` 时绑定到 `globalThis`。
2. `context` 为基本类型时需要 `Object(context)` 装箱。
3. 临时属性用 `Symbol`，避免覆盖目标对象已有属性。
4. 执行完成后必须删除临时属性，避免污染对象。

## 复杂度

- 时间复杂度：O(1)
- 空间复杂度：O(1)

