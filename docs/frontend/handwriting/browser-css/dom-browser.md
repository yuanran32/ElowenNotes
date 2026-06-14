# DOM 与浏览器 API

1. 手写 DOM 选择器简版 `$`
   - 考点：`querySelector`、`querySelectorAll`、链式调用。
   - 边界：选择器非法、空结果。

2. 手写事件委托
   - 考点：事件冒泡、`target`、`currentTarget`、`matches`。
   - 边界：嵌套元素点击、动态新增节点。

3. 手写拖拽
   - 考点：鼠标事件、坐标计算、边界限制。
   - 边界：窗口外释放、文本选中、移动端触摸。

4. 手写元素可见性判断
   - 考点：`getBoundingClientRect`、视口尺寸。
   - 边界：滚动容器、部分可见、display none。

5. 手写滚动到底部判断
   - 考点：`scrollTop`、`clientHeight`、`scrollHeight`。
   - 边界：浮点误差、滚动容器不是 window。

6. 手写回到顶部
   - 考点：平滑滚动、`requestAnimationFrame`。
   - 边界：用户中断滚动、兼容性。

7. 手写复制到剪贴板
   - 考点：Clipboard API。
   - 边界：权限限制、HTTPS、降级到 textarea。

8. 手写 URL 参数解析
   - 考点：`URLSearchParams`、编码解码。
   - 边界：重复 key、数组参数、空值。

9. 手写 Cookie 操作
   - 考点：设置、读取、删除、过期时间。
   - 边界：path、domain、SameSite、Secure。

10. 手写简版前端路由
    - 考点：hash 路由、history 路由、监听变更。
    - 边界：刷新 404、返回前进、路由守卫。

11. 手写跨标签页通信
    - 考点：`storage` 事件、`BroadcastChannel`、SharedWorker。
    - 边界：同源限制、消息清理。

12. 手写文件预览
    - 考点：FileReader、Object URL。
    - 边界：大文件、格式校验、URL revoke。

