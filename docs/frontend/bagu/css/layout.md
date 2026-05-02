# 布局基础

## 盒模型

标准盒模型中，`width` 和 `height` 只包含 content；IE 盒模型中，`width` 和 `height` 包含 content、padding 和 border。现代项目通常设置：

```css
* {
  box-sizing: border-box;
}
```

这样组件宽度更可控，尤其适合表单、卡片、栅格这类需要固定边界的 UI。

## 水平垂直居中

### Flex

```css
.parent {
  display: flex;
  align-items: center;
  justify-content: center;
}
```

Flex 是最常用方案，适合单个或少量元素居中。

### Grid

```css
.parent {
  display: grid;
  place-items: center;
}
```

Grid 写法更短，适合明确的二维布局容器。

### 绝对定位

```css
.child {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
```

适合弹层、浮动按钮等脱离文档流的元素。

## 两栏布局

```css
.layout {
  display: flex;
}

.sidebar {
  width: 240px;
  flex: none;
}

.main {
  flex: 1;
  min-width: 0;
}
```

`min-width: 0` 很关键。Flex 子项默认 `min-width: auto`，长文本或表格可能把主区域撑开。

## 三栏布局

```css
.layout {
  display: grid;
  grid-template-columns: 220px minmax(0, 1fr) 280px;
  gap: 16px;
}
```

三栏、仪表盘、管理后台页面优先考虑 Grid，因为它能直接表达列结构。

## 常见追问

### `display: none`、`visibility: hidden`、`opacity: 0` 的区别？

`display: none` 不占布局空间，会触发布局变化；`visibility: hidden` 仍占空间，但不可见不可交互；`opacity: 0` 仍占空间，也可能继续响应事件，需要配合 `pointer-events: none`。

### `position` 有哪些值？

`static` 是默认文档流；`relative` 相对自身偏移且保留空间；`absolute` 相对最近定位祖先；`fixed` 相对视口；`sticky` 在滚动阈值前是相对定位，超过阈值后类似固定定位。

### 为什么文本会撑破容器？

常见原因是长单词、URL、表格或 Flex 子项默认最小宽度。可以用 `min-width: 0`、`overflow: hidden`、`text-overflow: ellipsis`、`word-break: break-word` 处理。
