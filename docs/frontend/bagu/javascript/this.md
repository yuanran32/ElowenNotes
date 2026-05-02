# this 指向

## 一句话结论

`this` 的值取决于函数如何被调用，而不是函数在哪里定义。箭头函数没有自己的 `this`，它会捕获定义时外层作用域的 `this`。

## 绑定规则

| 场景 | this 指向 |
| --- | --- |
| 普通函数直接调用 | 非严格模式指向全局对象，严格模式是 `undefined` |
| 对象方法调用 | 指向调用它的对象 |
| `call`、`apply`、`bind` | 指向显式传入的对象 |
| `new` 调用 | 指向新创建的实例对象 |
| 箭头函数 | 使用外层词法作用域的 `this` |

## 优先级

`new` 绑定 > 显式绑定 > 隐式绑定 > 默认绑定。箭头函数不参与这套优先级，因为它没有自己的 `this`。

```js
const user = {
  name: 'Tom',
  say() {
    return this.name
  },
}

const fn = user.say
fn() // 严格模式下 this 是 undefined
user.say() // Tom
```

## 箭头函数常见坑

```js
const user = {
  name: 'Tom',
  say: () => this.name,
}
```

这里 `say` 是箭头函数，`this` 不指向 `user`，而是取外层作用域的 `this`。对象方法需要访问对象自身属性时，优先使用普通函数。

## 常见追问

### `call`、`apply`、`bind` 的区别？

`call` 和 `apply` 会立即执行函数，区别是传参形式不同：`call` 是参数列表，`apply` 是数组。`bind` 不会立即执行，而是返回一个永久绑定 `this` 的新函数。

### DOM 事件回调里的 `this` 指向谁？

普通函数形式的事件回调中，`this` 通常指向绑定事件的元素；箭头函数中 `this` 取外层作用域。实际项目中更推荐直接使用 `event.currentTarget`，语义更明确。

### 为什么箭头函数不能作为构造函数？

箭头函数没有自己的 `this`，也没有 `prototype`，不能通过 `new` 创建实例，所以不能作为构造函数使用。
