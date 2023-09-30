<script lang="ts" setup>
import { useDark, useToggle } from '@vueuse/core';

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <header
    class="w-full flex items-center justify-between px-6 py-4 fe-border-b dark:shadow-none"
  >
    <core-nav-button to="/" title="Home">f3ve</core-nav-button>
    <nav class="flex items-center gap-4">
      <core-nav-button to="/blog" title="blog">Blog</core-nav-button>
      <core-nav-button to="/projects" title="projects">
        Projects
      </core-nav-button>
      <a
        class="i-ic-round-alternate-email"
        href="mailto:me@freedomevenden.com"
      ></a>
      <a
        class="i-mdi-github"
        href="https://github.com/f3ve"
        target="_blank"
        rel="noopener"
      ></a>
      <button
        class="i-solar-sun-2-outline dark:i-solar-moon-outline"
        aria-label="Toggle Theme"
        @click="toggleDark()"
      />
    </nav>
  </header>
</template>
