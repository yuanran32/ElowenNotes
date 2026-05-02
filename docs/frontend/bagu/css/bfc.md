# BFC 与层叠

## BFC 是什么

BFC（Block Formatting Context，块级格式化上下文）是一块独立的布局区域。里面的元素布局不会影响外部，外部浮动也不会影响它内部的块级布局。

## 如何触发 BFC

常见方式：

- 根元素 `html`
- `overflow` 不是 `visible`
- `display: flow-root`
- `display: flex` 或 `grid` 的子项
- `position: absolute` 或 `fixed`
- `float` 不是 `none`

现代项目里，如果只是为了创建 BFC，优先使用 `display: flow-root`，语义更明确。

## BFC 能解决什么

### 清除浮动

```css
.parent {
  display: flow-root;
}
```

子元素浮动后会脱离普通文档流，父容器可能高度塌陷。父容器形成 BFC 后，会把浮动元素高度计算进去。

### 阻止外边距折叠

相邻块级元素或父子块级元素的垂直 margin 可能折叠。让父元素形成 BFC，可以阻止父子 margin 折叠。

### 避免文字环绕浮动元素

```css
.content {
  overflow: hidden;
}
```

内容区域形成 BFC 后，不会和旁边浮动元素重叠。

## 层叠上下文

层叠上下文决定元素在 z 轴上的绘制顺序。常见触发方式：

- `position` 非 `static` 且设置 `z-index`
- `opacity` 小于 1
- `transform` 不是 `none`
- `filter`、`perspective`
- `isolation: isolate`

## 常见追问

### `z-index` 为什么不生效？

通常是因为元素没有定位，或它被困在父级层叠上下文里。`z-index` 只能在同一个层叠上下文内比较，子元素的 `z-index` 再高，也不能越过父级所在层级。

### `overflow: hidden` 清浮动有什么副作用？

它会裁剪溢出内容，可能导致阴影、下拉菜单、浮层被截断。只想创建 BFC 时，`display: flow-root` 更合适。

### BFC 和层叠上下文是一回事吗？

不是。BFC 处理的是块级布局规则，层叠上下文处理的是绘制层级。某些属性可能同时影响布局和绘制，但概念不能混用。
