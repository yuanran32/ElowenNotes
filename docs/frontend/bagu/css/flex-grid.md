# Flex 和 Grid

## 一句话结论

Flex 更适合一维布局，重点处理一行或一列里的分配、对齐和换行；Grid 更适合二维布局，能同时控制行和列。选型时先看布局是“线”还是“面”。

## Flex 核心

```css
.row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.item {
  flex: 1 1 0;
  min-width: 0;
}
```

`flex` 是 `flex-grow`、`flex-shrink`、`flex-basis` 的缩写：

| 属性 | 含义 |
| --- | --- |
| `flex-grow` | 有剩余空间时是否放大 |
| `flex-shrink` | 空间不足时是否缩小 |
| `flex-basis` | 分配空间前的基础尺寸 |

## Grid 核心

```css
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 16px;
}
```

这段代码常用于响应式卡片列表：容器宽时自动增加列数，窄时自动减少列数，每列最小 220px。

## Flex 和 Grid 选型

| 场景 | 推荐 |
| --- | --- |
| 导航栏、按钮组、表单行 | Flex |
| 卡片列表、仪表盘、多区域页面 | Grid |
| 元素数量不固定，只关心主轴排列 | Flex |
| 行列都需要严格对齐 | Grid |

## 常见坑

### Flex 子项溢出

```css
.content {
  flex: 1;
  min-width: 0;
}
```

Flex 子项可能因为默认最小宽度导致溢出，尤其内部有长文本、代码块或表格时，需要显式设置 `min-width: 0`。

### `gap` 和 margin 的区别

`gap` 是容器控制子项间距，不会在最外侧额外产生空白；`margin` 是元素自身外边距，容易叠加或影响相邻模块。现代 Flex 和 Grid 都支持 `gap`，组件内部间距优先用它。

### Grid 的 `auto-fill` 和 `auto-fit`

`auto-fill` 会尽量保留空轨道；`auto-fit` 会折叠空轨道，让已有元素撑满空间。卡片自适应布局多数使用 `auto-fit`。

## 常见追问

### `justify-content` 和 `align-items` 分别控制什么？

在 Flex 中，`justify-content` 控制主轴对齐，`align-items` 控制交叉轴对齐。主轴方向由 `flex-direction` 决定，所以换成 `column` 后，两者的视觉方向也会变化。

### Grid 的 `fr` 是什么？

`fr` 表示可用空间的份额。`grid-template-columns: 1fr 2fr` 表示剩余空间按 1:2 分配，但仍会受内容最小尺寸影响，必要时用 `minmax(0, 1fr)` 防止溢出。
