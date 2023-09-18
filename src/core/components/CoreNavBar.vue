<script lang="ts" setup>
import { useDark, useToggle } from '@vueuse/core';

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <header class="flex items-center justify-between px-4" style="height: 60px">
    <RouterLink to="/" title="Home"> f3ve </RouterLink>
    <nav class="flex gap-4">
      <RouterLink to="/Blog" title="Blog">Blog</RouterLink>
      <button @click="toggleDark()">Click me</button>
    </nav>
  </header>
</template>
