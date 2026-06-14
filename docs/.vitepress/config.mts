import { defineConfig } from "vitepress";

const base = "/ElowenNotes/";

export default defineConfig({
  title: "Study Notes",
  base,
  description: "面向长期积累的学习笔记平台",
  cleanUrls: true,
  lastUpdated: true,
  head: [
    ["link", { rel: "icon", href: `${base}favicon.svg`, type: "image/svg+xml" }],
  ],
  themeConfig: {
    logo: "/logo.svg",
    nav: [
      { text: "Home", link: "/" },
      { text: "Leetcode", link: "/leetcode/" },
      { text: "Frontend", link: "/frontend/" },
      { text: "Backend", link: "/backend/" },
      { text: "Misc", link: "/misc/" },
      {
        text: "More",
        items: [
          { text: "指南", link: "/guide/" },
          { text: "学习路线", link: "/roadmap/" },
          { text: "面试", link: "/interview/" },
          { text: "资源", link: "/resources/" },
        ],
      },
    ],
    sidebar: {
      "/guide/": [
        {
          text: "指南",
          items: [{ text: "平台使用指南", link: "/guide/" }],
        },
      ],
      "/roadmap/": [
        {
          text: "学习路线",
          items: [{ text: "阶段路线", link: "/roadmap/" }],
        },
      ],
      "/frontend/": [
        {
          text: "前端",
          items: [{ text: "前端总览", link: "/frontend/" }],
        },
        {
          text: "handwriting（手撕代码）",
          collapsed: false,
          items: [
            { text: "总览", link: "/frontend/handwriting/" },
            { text: "手撕代码模板", link: "/frontend/handwriting/code-template" },
            {
              text: "JavaScript",
              collapsed: true,
              items: [
                { text: "总览", link: "/frontend/handwriting/javascript/" },
                { text: "this 与原型", link: "/frontend/handwriting/javascript/this-prototype" },
                { text: "拷贝与类型", link: "/frontend/handwriting/javascript/copy-type" },
                { text: "数组方法", link: "/frontend/handwriting/javascript/array-methods" },
                { text: "函数式工具", link: "/frontend/handwriting/javascript/functional" },
                { text: "设计模式与工具", link: "/frontend/handwriting/javascript/patterns-utils" },
                {
                  text: "具体实现",
                  collapsed: true,
                  items: [
                    { text: "总览", link: "/frontend/handwriting/javascript/impl/" },
                    { text: "call", link: "/frontend/handwriting/javascript/impl/call" },
                    { text: "apply", link: "/frontend/handwriting/javascript/impl/apply" },
                    { text: "bind", link: "/frontend/handwriting/javascript/impl/bind" },
                    { text: "new", link: "/frontend/handwriting/javascript/impl/new" },
                    { text: "instanceof", link: "/frontend/handwriting/javascript/impl/instanceof" },
                    { text: "deepClone", link: "/frontend/handwriting/javascript/impl/deep-clone" },
                    { text: "debounce", link: "/frontend/handwriting/javascript/impl/debounce" },
                    { text: "throttle", link: "/frontend/handwriting/javascript/impl/throttle" },
                  ],
                },
              ],
            },
            {
              text: "异步与 Promise",
              collapsed: true,
              items: [
                { text: "总览", link: "/frontend/handwriting/async-promise/" },
                { text: "Promise 基础", link: "/frontend/handwriting/async-promise/promise-basic" },
                { text: "Promise 静态方法", link: "/frontend/handwriting/async-promise/promise-static" },
                { text: "异步控制", link: "/frontend/handwriting/async-promise/async-control" },
                { text: "请求封装", link: "/frontend/handwriting/async-promise/request-wrapper" },
                {
                  text: "具体实现",
                  collapsed: true,
                  items: [
                    { text: "总览", link: "/frontend/handwriting/async-promise/impl/" },
                    { text: "MiniPromise", link: "/frontend/handwriting/async-promise/impl/promise" },
                    { text: "Promise.all", link: "/frontend/handwriting/async-promise/impl/promise-all" },
                    { text: "Promise.race", link: "/frontend/handwriting/async-promise/impl/promise-race" },
                    { text: "asyncPool", link: "/frontend/handwriting/async-promise/impl/async-pool" },
                    { text: "retry", link: "/frontend/handwriting/async-promise/impl/retry" },
                  ],
                },
              ],
            },
            {
              text: "浏览器与 CSS",
              collapsed: true,
              items: [
                { text: "总览", link: "/frontend/handwriting/browser-css/" },
                { text: "DOM 与浏览器 API", link: "/frontend/handwriting/browser-css/dom-browser" },
                { text: "性能工具", link: "/frontend/handwriting/browser-css/performance" },
                { text: "CSS 布局", link: "/frontend/handwriting/browser-css/css-layout" },
                { text: "具体实现", link: "/frontend/handwriting/browser-css/impl/" },
              ],
            },
            {
              text: "React 与 Vue",
              collapsed: true,
              items: [
                { text: "总览", link: "/frontend/handwriting/react-vue/" },
                { text: "React Hooks", link: "/frontend/handwriting/react-vue/react-hooks" },
                { text: "React 状态与路由", link: "/frontend/handwriting/react-vue/react-state-router" },
                { text: "Vue 响应式", link: "/frontend/handwriting/react-vue/vue-reactivity" },
                { text: "Vue 生态", link: "/frontend/handwriting/react-vue/vue-ecosystem" },
                { text: "具体实现", link: "/frontend/handwriting/react-vue/impl/" },
              ],
            },
            {
              text: "工程化、网络与安全",
              collapsed: true,
              items: [
                { text: "总览", link: "/frontend/handwriting/engineering-network/" },
                { text: "工程化", link: "/frontend/handwriting/engineering-network/engineering" },
                { text: "网络", link: "/frontend/handwriting/engineering-network/network" },
                { text: "安全", link: "/frontend/handwriting/engineering-network/security" },
                { text: "具体实现", link: "/frontend/handwriting/engineering-network/impl/" },
              ],
            },
            {
              text: "算法与数据结构",
              collapsed: true,
              items: [
                { text: "总览", link: "/frontend/handwriting/algorithm/" },
                { text: "数组与字符串", link: "/frontend/handwriting/algorithm/array-string" },
                { text: "链表", link: "/frontend/handwriting/algorithm/linked-list" },
                { text: "栈、队列、堆", link: "/frontend/handwriting/algorithm/stack-queue-heap" },
                { text: "二叉树", link: "/frontend/handwriting/algorithm/binary-tree" },
                { text: "动态规划与搜索", link: "/frontend/handwriting/algorithm/dp-search" },
                { text: "排序与查找", link: "/frontend/handwriting/algorithm/sort-search" },
                { text: "具体实现", link: "/frontend/handwriting/algorithm/impl/" },
              ],
            },
            {
              text: "场景综合",
              collapsed: true,
              items: [
                { text: "总览", link: "/frontend/handwriting/scenario/" },
                { text: "组件类", link: "/frontend/handwriting/scenario/component" },
                { text: "系统类", link: "/frontend/handwriting/scenario/system" },
                { text: "练习模板", link: "/frontend/handwriting/scenario/practice-template" },
                { text: "具体实现", link: "/frontend/handwriting/scenario/impl/" },
              ],
            },
          ],
        },
        {
          text: "bagu（前端八股）",
          collapsed: false,
          items: [
            { text: "总览", link: "/frontend/bagu/" },
            {
              text: "js",
              collapsed: false,
              items: [
                { text: "总览", link: "/frontend/bagu/javascript/" },
                { text: "闭包", link: "/frontend/bagu/javascript/closure" },
                { text: "原型链", link: "/frontend/bagu/javascript/prototype" },
                { text: "异步", link: "/frontend/bagu/javascript/async" },
                { text: "this 指向", link: "/frontend/bagu/javascript/this" },
                { text: "事件循环", link: "/frontend/bagu/javascript/event-loop" },
                { text: "Promise", link: "/frontend/bagu/javascript/promise" },
              ],
            },
            {
              text: "CSS",
              collapsed: false,
              items: [
                { text: "总览", link: "/frontend/bagu/css/" },
                { text: "布局", link: "/frontend/bagu/css/layout" },
                { text: "Flex/Grid", link: "/frontend/bagu/css/flex-grid" },
                { text: "BFC 与层叠", link: "/frontend/bagu/css/bfc" },
                { text: "响应式", link: "/frontend/bagu/css/responsive" },
              ],
            },
            {
              text: "Vue",
              collapsed: false,
              items: [
                { text: "总览", link: "/frontend/bagu/vue/" },
                { text: "响应式原理", link: "/frontend/bagu/vue/reactivity" },
                { text: "diff 与 key", link: "/frontend/bagu/vue/diff-key" },
                { text: "computed 和 watch", link: "/frontend/bagu/vue/computed-watch" },
                { text: "nextTick", link: "/frontend/bagu/vue/lifecycle-nexttick" },
                { text: "组件通信", link: "/frontend/bagu/vue/communication" },
              ],
            },
            {
              text: "工程化",
              collapsed: false,
              items: [
                { text: "总览", link: "/frontend/bagu/engineering/" },
                { text: "Vite", link: "/frontend/bagu/engineering/vite" },
                { text: "构建与模块化", link: "/frontend/bagu/engineering/build-module" },
                { text: "Tree Shaking", link: "/frontend/bagu/engineering/tree-shaking" },
                { text: "性能优化", link: "/frontend/bagu/engineering/performance" },
                { text: "前端监控", link: "/frontend/bagu/engineering/monitoring" },
                { text: "CI/CD", link: "/frontend/bagu/engineering/ci-cd" },
              ],
            },
          ],
        },
      ],
      "/backend/": [
        {
          text: "后端",
          items: [{ text: "后端总览", link: "/backend/" }],
        },
      ],
      "/leetcode/": [
        {
          text: "Leetcode",
          items: [{ text: "算法题单", link: "/leetcode/" }],
        },
      ],
      "/misc/": [
        {
          text: "Misc",
          items: [{ text: "其他内容", link: "/misc/" }],
        },
      ],
      "/interview/": [
        {
          text: "面试准备",
          items: [{ text: "面试题库", link: "/interview/" }],
        },
      ],
      "/resources/": [
        {
          text: "资源",
          items: [
            { text: "资源导航", link: "/resources/" },
            { text: "笔记模板", link: "/templates/note-template" },
          ],
        },
      ],
      "/templates/": [
        {
          text: "模板",
          items: [{ text: "笔记模板", link: "/templates/note-template" }],
        },
      ],
    },
    search: {
      provider: "local",
    },
    outline: {
      label: "本页目录",
      level: [2, 3],
    },
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    lastUpdated: {
      text: "最后更新",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium",
      },
    },
  },
});
