# 手写 apply

## 题目

实现 `Function.prototype.myApply`，支持显式绑定 `this`，并以数组或类数组形式传参。

## 实现代码

```js
Function.prototype.myApply = function (context, args) {
  if (typeof this !== "function") {
    throw new TypeError("caller must be a function");
  }

  const target = context == null ? globalThis : Object(context);
  const fnKey = Symbol("fn");

  target[fnKey] = this;

  const result = args == null
    ? target[fnKey]()
    : target[fnKey](...Array.from(args));

  delete target[fnKey];
  return result;
};
```

## 测试用例

```js
function sum(a, b) {
  return this.base + a + b;
}

console.log(sum.myApply({ base: 10 }, [1, 2])); // 13
console.log(Math.max.myApply(null, [1, 5, 3])); // 5
```

## 边界条件

1. 第二个参数为空时按无参数调用。
2. 第二个参数可以是数组，也可以是类数组。
3. `context` 的处理和 `call` 一致。

