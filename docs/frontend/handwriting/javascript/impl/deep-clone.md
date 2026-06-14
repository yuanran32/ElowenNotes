# 手写 deepClone

## 题目

实现一个深拷贝函数，支持常见引用类型，并能处理循环引用。

## 实现代码

```js
function deepClone(value, cache = new WeakMap()) {
  if (value === null || typeof value !== "object") {
    return value;
  }

  if (cache.has(value)) {
    return cache.get(value);
  }

  if (value instanceof Date) {
    return new Date(value);
  }

  if (value instanceof RegExp) {
    const cloned = new RegExp(value.source, value.flags);
    cloned.lastIndex = value.lastIndex;
    return cloned;
  }

  if (value instanceof Map) {
    const cloned = new Map();
    cache.set(value, cloned);
    value.forEach((mapValue, mapKey) => {
      cloned.set(deepClone(mapKey, cache), deepClone(mapValue, cache));
    });
    return cloned;
  }

  if (value instanceof Set) {
    const cloned = new Set();
    cache.set(value, cloned);
    value.forEach((setValue) => {
      cloned.add(deepClone(setValue, cache));
    });
    return cloned;
  }

  const cloned = Array.isArray(value)
    ? []
    : Object.create(Object.getPrototypeOf(value));

  cache.set(value, cloned);

  Reflect.ownKeys(value).forEach((key) => {
    cloned[key] = deepClone(value[key], cache);
  });

  return cloned;
}
```

## 测试用例

```js
const source = {
  name: "Tom",
  date: new Date(),
  reg: /abc/g,
  map: new Map([["a", { count: 1 }]]),
  set: new Set([{ id: 1 }]),
};

source.self = source;

const cloned = deepClone(source);
console.log(cloned !== source); // true
console.log(cloned.self === cloned); // true
console.log(cloned.map.get("a") !== source.map.get("a")); // true
```

## 边界条件

1. 基本类型直接返回。
2. 循环引用使用 `WeakMap` 缓存。
3. `Map` 的 key 和 value 都需要递归拷贝。
4. `Set` 的每个 value 都需要递归拷贝。
5. `Reflect.ownKeys` 可以覆盖普通 key 和 Symbol key。

## 常见追问

1. 函数要不要拷贝？
   - 通常函数直接复用引用；如果要复制闭包语义，JavaScript 本身很难可靠实现。
2. 属性描述符要不要保留？
   - 生产级实现可以用 `Object.getOwnPropertyDescriptors` 保留 getter、setter 和不可枚举属性。

