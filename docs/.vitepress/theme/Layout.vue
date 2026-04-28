<script setup lang="ts">
import DefaultTheme from "vitepress/theme";

const { Layout } = DefaultTheme;
</script>

<template>
  <Layout>
    <template #aside-outline-before>
      <div class="study-aside">
        <strong>StudyNote</strong>
        <span>记录学习、项目与面试复盘</span>
      </div>
    </template>

    <template #doc-footer-before>
      <div class="study-footer">© 2026 StudyNote</div>
    </template>
  </Layout>
</template>
