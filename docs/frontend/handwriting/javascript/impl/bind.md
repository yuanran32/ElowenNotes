# 手写 bind

## 题目

实现 `Function.prototype.myBind`，支持预置参数，并兼容构造函数调用。

## 实现代码

```js
Function.prototype.myBind = function (context, ...presetArgs) {
  if (typeof this !== "function") {
    throw new TypeError("caller must be a function");
  }

  const originalFn = this;

  function boundFn(...laterArgs) {
    const isNewCall = this instanceof boundFn;
    const thisArg = isNewCall ? this : context;
    return originalFn.apply(thisArg, presetArgs.concat(laterArgs));
  }

  if (originalFn.prototype) {
    boundFn.prototype = Object.create(originalFn.prototype);
    boundFn.prototype.constructor = boundFn;
  }

  return boundFn;
};
```

## 测试用例

```js
function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.say = function () {
  return `${this.name}-${this.age}`;
};

const BoundPerson = Person.myBind({ ignored: true }, "Tom");
const p = new BoundPerson(18);

console.log(p.say()); // Tom-18
console.log(p instanceof Person); // true
```

## 边界条件

1. 普通调用时，`this` 使用绑定对象。
2. `new` 调用时，`this` 指向新实例，绑定对象失效。
3. 预置参数在普通调用和构造调用中都要保留。
4. 需要维护原函数原型链，否则实例关系会丢失。

