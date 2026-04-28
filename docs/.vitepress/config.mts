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
            { text: "基础 API", link: "/frontend/handwriting/basic-api" },
            { text: "函数工具", link: "/frontend/handwriting/function-tools" },
            { text: "深拷贝", link: "/frontend/handwriting/deep-clone" },
            { text: "异步控制", link: "/frontend/handwriting/async-control" },
            { text: "数据结构", link: "/frontend/handwriting/data-structure" },
            { text: "场景题", link: "/frontend/handwriting/scenario" },
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
              ],
            },
            {
              text: "CSS",
              collapsed: false,
              items: [
                { text: "总览", link: "/frontend/bagu/css/" },
                { text: "布局", link: "/frontend/bagu/css/layout" },
                { text: "Flex/Grid", link: "/frontend/bagu/css/flex-grid" },
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
