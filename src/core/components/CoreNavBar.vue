<script lang="ts" setup>
import { useDark, useToggle } from '@vueuse/core';

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <header class="flex items-center justify-between px-4" style="height: 60px">
    <core-nav-button to="/" title="Home">f3ve</core-nav-button>
    <nav class="flex items-center gap-4">
      <core-nav-button to="/Blog" title="blog">Blog</core-nav-button>
      <button class="i-ph-sun dark:i-ph-moon" @click="toggleDark()" />
    </nav>
  </header>
</template>
