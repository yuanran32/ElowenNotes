# 原型链

## 一句话结论

JavaScript 的继承是基于原型链的：对象访问属性时，先查自身，找不到就沿着 `[[Prototype]]` 向上查，直到 `null`。`class` 只是原型继承的语法糖。

## 三个关键概念

| 概念 | 含义 | 面试表达 |
| --- | --- | --- |
| `prototype` | 函数对象上的属性，指向实例共享方法的对象 | 构造函数给实例提供公共能力 |
| `__proto__` | 对象的隐式原型，指向创建它的构造函数的 `prototype` | 属性查找会沿它向上找 |
| `constructor` | 原型对象上默认指回构造函数的属性 | 可被改写，不能作为强校验依据 |

## new 做了什么

```js
function myNew(Constructor, ...args) {
  const obj = Object.create(Constructor.prototype)
  const ret = Constructor.apply(obj, args)
  return ret !== null && (typeof ret === 'object' || typeof ret === 'function')
    ? ret
    : obj
}
```

执行过程：

1. 创建一个新对象。
2. 把新对象的隐式原型指向构造函数的 `prototype`。
3. 执行构造函数，并把 `this` 绑定到新对象。
4. 如果构造函数显式返回对象，就返回该对象；否则返回新对象。

## 属性查找流程

```js
function Person(name) {
  this.name = name
}

Person.prototype.say = function () {
  return this.name
}

const p = new Person('Tom')
p.say()
```

`p.say` 查找时，先看 `p` 自身有没有 `say`，没有就查 `p.__proto__`，也就是 `Person.prototype`。如果还没有，会继续查 `Object.prototype`，最后到 `null` 停止。

## class 和原型

```js
class User {
  constructor(name) {
    this.name = name
  }

  say() {
    return this.name
  }
}
```

`say` 实际挂在 `User.prototype` 上，实例共享同一个方法。`extends` 背后会建立两条链：实例原型链用于继承实例方法，构造函数原型链用于继承静态方法。

## 常见追问

### `prototype` 和 `__proto__` 的区别？

`prototype` 是函数才有的显式原型，用来放实例共享的方法；`__proto__` 是对象的隐式原型，用来做属性查找。实例的 `__proto__` 通常指向构造函数的 `prototype`。

### 为什么不要直接改 `__proto__`？

直接改 `__proto__` 会改变对象原型链，影响属性查找和引擎优化，性能不可控。工程里更推荐用 `Object.create`、`class extends` 或组合方式表达继承关系。

### `instanceof` 的原理是什么？

`a instanceof A` 会判断 `A.prototype` 是否出现在 `a` 的原型链上。它不是判断构造函数名字，也不能可靠处理跨 iframe 的内置对象。

```js
function myInstanceof(obj, Constructor) {
  if (obj == null || (typeof obj !== 'object' && typeof obj !== 'function')) return false
  let proto = Object.getPrototypeOf(obj)
  while (proto) {
    if (proto === Constructor.prototype) return true
    proto = Object.getPrototypeOf(proto)
  }
  return false
}
```
