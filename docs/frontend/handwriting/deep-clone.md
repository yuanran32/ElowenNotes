# 深拷贝

深拷贝考察类型判断、引用关系、循环引用和特殊对象处理。

## 基础实现
```js
JSON 极简深拷贝
const newObj = JSON.parse(JSON.stringify(oldObj));
```

```js
完整标准版
function deepClone(obj) {
  // 1. 基础类型 / null 直接返回
  if (obj === null || typeof obj !== 'object') {
    return obj
  }

  // 2. 处理日期、正则
  if (obj instanceof Date) return new Date(obj)
  if (obj instanceof RegExp) return new RegExp(obj.source, obj.flags)

  // 3. 创建新容器 数组/对象
  const cloneObj = Array.isArray(obj) ? [] : {}

  // 4. 递归遍历每一项
  for (let key in obj) {
    // 只拷贝自身属性，过滤原型
    if (obj.hasOwnProperty(key)) {
      cloneObj[key] = deepClone(obj[key])
    }
  }

  return cloneObj
}
```

```ts
function deepClone<T>(value: T, cache = new WeakMap<object, any>()): T {
  if (value === null || typeof value !== "object") return value;

  if (cache.has(value as object)) return cache.get(value as object);

  if (value instanceof Date) return new Date(value) as T;
  if (value instanceof RegExp) return new RegExp(value) as T;

  const result: any = Array.isArray(value) ? [] : {};
  cache.set(value as object, result);

  Reflect.ownKeys(value as object).forEach((key) => {
    result[key] = deepClone((value as any)[key], cache);
  });

  return result;
}
```

## 必答点

- 基本类型直接返回。
- 对象和数组需要递归复制。
- 用 `WeakMap` 解决循环引用。
- 用 `Reflect.ownKeys` 处理 Symbol key。
- Date、RegExp 等特殊对象需要单独处理。

## 常见追问

- 函数要不要拷贝？
- 原型链要不要保留？
- Map、Set 怎么处理？
- JSON 深拷贝有什么问题？
