<script lang="ts" setup>
const { toggleDark } = useTheme();
</script>

<template>
  <header
    class="fade-in-down sticky top-0 z-1000 m-a w-full flex items-center justify-between px-6 py-4 fe-border-b bg-base"
  >
    <div class="flex items-center">
      <core-btn to="/" noBg>
        <img
          src="/images/f3ve-logo-50x50.webp"
          alt="Freedom Evenden's website logo"
          width="40"
        />
      </core-btn>
      <core-nav-buttons className="hidden sm:flex" />
    </div>

    <address class="hidden items-center sm:flex">
      <core-btn
        rel="noopener"
        href="https://twitter.com/f3ve_"
        icon="i-ri-twitter-x-fill"
        target="_blank"
        title="twitter"
        no-bg
      />
      <core-btn
        rel="noopener"
        href="https://mastodon.social/@f3ve"
        icon="i-mdi-mastodon"
        target="_blank"
        title="Mastodon"
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
