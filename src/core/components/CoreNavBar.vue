<script lang="ts" setup>
import { useDark, useToggle } from '@vueuse/core';

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <header class="flex items-center justify-between px-4" style="height: 60px">
    <RouterLink to="/" title="Home">f3ve</RouterLink>
    <nav class="flex gap-4">
      <core-nav-button to="/Blog" title="blog">Blog</core-nav-button>
      <button @click="toggleDark()" class="i-ph-sun dark:i-ph-moon" />
    </nav>
  </header>
</template>
