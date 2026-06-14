# 拷贝与类型

1. 手写浅拷贝
   - 考点：数组、对象、可枚举属性、Symbol 属性。
   - 边界：引用类型只复制引用。

2. 手写深拷贝
   - 考点：递归、循环引用、`WeakMap` 缓存。
   - 边界：`Date`、`RegExp`、`Map`、`Set`、数组、Symbol、函数、原型。

3. 手写 `Object.assign`
   - 考点：源对象枚举属性复制、多个 source 合并。
   - 边界：目标对象为 `null` 报错、源对象为 `null` 跳过。

4. 手写数据类型判断 `typeOf`
   - 考点：`Object.prototype.toString.call`。
   - 边界：`null`、数组、日期、正则、Promise、Map、Set。

5. 手写 `JSON.stringify`
   - 考点：递归序列化对象和数组。
   - 边界：`undefined`、函数、Symbol、循环引用、`toJSON`。

6. 手写 `JSON.parse`
   - 考点：词法解析、递归下降、字符串转义。
   - 边界：安全性，不要用不可信输入直接 `eval`。

