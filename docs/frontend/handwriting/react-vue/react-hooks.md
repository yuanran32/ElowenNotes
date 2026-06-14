# React Hooks

1. 手写 `useState`
   - 考点：hook 状态存储、更新触发渲染、调用顺序。
   - 边界：函数式更新、批量更新。

2. 手写 `useEffect`
   - 考点：依赖比较、副作用执行、清理函数。
   - 边界：依赖为空数组、没有依赖、组件卸载。

3. 手写 `useMemo`
   - 考点：依赖缓存、避免重复计算。
   - 边界：缓存不是语义保证，不能依赖副作用。

4. 手写 `useCallback`
   - 考点：函数引用缓存。
   - 边界：闭包过期、依赖遗漏。

5. 手写 `useRef`
   - 考点：跨渲染保存引用，不触发重新渲染。
   - 边界：DOM ref 和普通变量 ref。

6. 手写 `usePrevious`
   - 考点：保存上一次值。
   - 边界：首次渲染返回 `undefined`。

7. 手写 `useDebounce`
   - 考点：定时器、副作用清理。
   - 边界：组件卸载清理 timer。

8. 手写 `useThrottle`
   - 考点：节流状态、定时器、引用保存。
   - 边界：尾部触发。

9. 手写 `useRequest`
   - 考点：loading、error、data、请求取消。
   - 边界：竞态响应、重试、刷新。

10. 手写 `useVirtualList`
    - 考点：滚动容器、可视范围、偏移量。
    - 边界：动态高度。

11. 手写 `useClickOutside`
    - 考点：全局事件监听、ref 判断。
    - 边界：Portal、事件清理。

