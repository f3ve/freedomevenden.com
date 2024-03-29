<script lang="ts" setup>
const { toggleDark } = useTheme();
</script>

<template>
  <core-menu>
    <template #toggler="props">
      <core-btn icon="i-mdi-menu" v-bind="props" title="menu" no-bg></core-btn>
    </template>
    <nav class="pa-4 fe-border-b">
      <ul class="blog-list ma-0 list-none pl-0">
        <li>
          <core-btn to="/blog">Blog</core-btn>
        </li>
        <li>
          <core-btn to="/projects">Projects</core-btn>
        </li>
        <li>
          <core-btn to="/uses">Uses</core-btn>
        </li>
        <li>
          <core-btn to="/contact">Contact</core-btn>
        </li>
      </ul>
    </nav>

    <address class="pa-4 not-italic fe-border-b">
      <ul class="blog-list ma-0 list-none pl-0">
        <li>
          <core-btn
            rel="noopener"
            href="https://www.linkedin.com/in/freedom-evenden-dev/"
            icon="i-mdi-linkedin"
            target="_blank"
            no-bg
          >
            LinkedIn
          </core-btn>
        </li>
        <li>
          <core-btn
            icon="i-mdi-github"
            href="https://github.com/f3ve"
            target="_blank"
            rel="noopener"
            no-bg
          >
            GitHub
          </core-btn>
        </li>
      </ul>
    </address>

    <div class="pa-4">
      <ul class="blog-list ma-0 list-none pl-0">
        <li>
          <core-btn
            class="w-full"
            icon="i-ci-sun dark:i-ci-moon"
            aria-label="Toggle Theme"
            no-bg
            @click="toggleDark()"
          >
            Theme
          </core-btn>
        </li>
      </ul>
    </div>
  </core-menu>
</template>
