# 手写 instanceof

## 题目

实现 `myInstanceof(left, right)`，判断对象是否出现在构造函数的原型链上。

## 实现代码

```js
function myInstanceof(left, right) {
  if (left == null || (typeof left !== "object" && typeof left !== "function")) {
    return false;
  }

  if (typeof right !== "function") {
    throw new TypeError("Right-hand side of instanceof is not callable");
  }

  let proto = Object.getPrototypeOf(left);
  const targetProto = right.prototype;

  while (proto) {
    if (proto === targetProto) {
      return true;
    }
    proto = Object.getPrototypeOf(proto);
  }

  return false;
}
```

## 测试用例

```js
console.log(myInstanceof([], Array)); // true
console.log(myInstanceof([], Object)); // true
console.log(myInstanceof(null, Object)); // false
console.log(myInstanceof(1, Number)); // false
```

## 边界条件

1. 左侧是基本类型时直接返回 false。
2. 右侧不是函数时抛出类型错误。
3. 判断依据是原型链，不是构造函数名称。

