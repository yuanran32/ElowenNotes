# 手写 new

## 题目

实现 `myNew`，模拟 `new Constructor(...args)`。

## 实现代码

```js
function myNew(Constructor, ...args) {
  if (typeof Constructor !== "function") {
    throw new TypeError("Constructor must be a function");
  }

  const instance = Object.create(Constructor.prototype);
  const result = Constructor.apply(instance, args);

  const isObjectResult =
    result !== null && (typeof result === "object" || typeof result === "function");

  return isObjectResult ? result : instance;
}
```

## 测试用例

```js
function Person(name) {
  this.name = name;
}

Person.prototype.say = function () {
  return this.name;
};

const p = myNew(Person, "Tom");
console.log(p.name); // Tom
console.log(p.say()); // Tom
console.log(p instanceof Person); // true
```

## 边界条件

1. 构造函数返回对象或函数时，`new` 的结果是该返回值。
2. 构造函数返回基本类型时忽略返回值。
3. 新对象的原型必须指向构造函数的 `prototype`。

