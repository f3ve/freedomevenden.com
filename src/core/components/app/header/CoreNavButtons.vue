<script lang="ts" setup>
withDefaults(
  defineProps<{
    /** Overrides the default class of the nav button container */
    className: string;
  }>(),
  {
    className: 'flex',
  },
);

const { toggleDark } = useTheme();
</script>

<template>
  <div :class="className">
    <nav class="flex items-center justify-center">
      <core-btn to="/" title="Home" underline>Home</core-btn>
      <core-btn to="/blog" title="blog" underline>Blog</core-btn>
      <core-btn to="/projects" title="Projects" underline>Projects</core-btn>
    </nav>

    <address class="flex items-center">
      <core-btn
        icon="i-ic-round-alternate-email"
        href="mailto:me@freedomevenden.com"
      />
      <core-btn
        rel="noopener"
        href="https://twitter.com/f3ve_"
        icon="i-ri-twitter-x-fill"
        target="_blank"
      />
      <core-btn
        rel="noopener"
        href="https://mastodon.social/@f3ve"
        icon="i-mdi-mastodon"
        target="_blank"
      />
      <core-btn
        icon="i-mdi-github"
        href="https://github.com/f3ve"
        target="_blank"
        rel="noopener"
      />
    </address>
    <core-btn
      icon="i-ci-sun dark:i-ci-moon"
      aria-label="Toggle Theme"
      @click="toggleDark()"
    />
  </div>
</template>
