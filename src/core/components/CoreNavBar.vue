<script lang="ts" setup>
import { useDark, useToggle } from '@vueuse/core';

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <header
    class="w-full flex items-center justify-between px-4 py-4 shadow dark:fe-border-b dark:shadow-none"
    style="backdrop-filter: blur(2px)"
  >
    <core-nav-button to="/" title="Home">f3ve</core-nav-button>
    <nav class="flex items-center gap-4">
      <core-nav-button to="/Blog" title="blog">Blog</core-nav-button>
      <button
        class="i-ph-sun dark:i-ph-moon"
        aria-label="Toggle Theme"
        @click="toggleDark()"
      />
    </nav>
  </header>
</template>
