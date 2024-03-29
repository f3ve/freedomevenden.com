<script lang="ts" setup>
const { toggleDark } = useTheme();
</script>

<template>
  <header
    class="m-a w-full flex items-center justify-between px-6 py-4 fe-border-b bg-background"
    style="height: 73px"
  >
    <div class="flex items-center">
      <router-link to="/" noBg class="mr-1 rounded hoverable">
        <img
          src="/images/f3ve-logo-50x50.webp"
          alt="Freedom Evenden's website logo"
          width="40px"
          height="40px"
          loading="eager"
        />
      </router-link>
      <core-nav-buttons className="hidden sm:flex" />
    </div>

    <address class="hidden items-center sm:flex">
      <core-btn
        rel="noopener"
        href="https://www.linkedin.com/in/freedom-evenden-dev/"
        icon="i-mdi-linkedin"
        target="_blank"
        title="LinkedIn"
        no-bg
      />
      <core-btn
        icon="i-mdi-github"
        href="https://github.com/f3ve"
        target="_blank"
        rel="noopener"
        title="GitHub"
        no-bg
      />
      <core-btn
        icon="i-ci-sun dark:i-ci-moon"
        aria-label="Toggle Theme"
        title="Toggle Theme"
        no-bg
        @click="toggleDark()"
      />
    </address>

    <core-nav-menu class="sm:hidden" />
  </header>
</template>
