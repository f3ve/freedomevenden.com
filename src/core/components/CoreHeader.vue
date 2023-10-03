<script lang="ts" setup>
import { useDark, useToggle } from '@vueuse/core';

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <header class="w-full flex flex-wrap items-center justify-between px-6 py-4">
    <nav class="flex items-center justify-center">
      <core-nav-button to="/" title="Home">Home</core-nav-button>
      <core-nav-button to="/blog" title="blog">Blog</core-nav-button>
      <core-nav-button to="/projects" title="Projects">
        Projects
      </core-nav-button>
    </nav>

    <core-menu class="sm:hidden">
      <template #toggler>
        <core-btn icon="i-mdi-menu"></core-btn>
      </template>
      <nav class="pa-4 fe-border-b">
        <ul class="blog-list ma-0 list-none pl-0">
          <li>
            <core-btn to="/" title="Home">Home</core-btn>
          </li>
          <li>
            <core-btn to="/blog" title="Blog">Blog</core-btn>
          </li>
          <li>
            <core-btn to="/projects" title="Projects">Projects</core-btn>
          </li>
        </ul>
      </nav>

      <address class="pa-4 fe-border-b not-italic">
        <ul class="blog-list ma-0 list-none pl-0">
          <li>
            <core-btn
              href="mailto:me@freedomevenden.com"
              icon="i-ic-round-alternate-email"
            >
              Email me
            </core-btn>
          </li>
          <li>
            <core-btn
              rel="noopener"
              href="https://mastodon.social/@f3ve"
              target="_blank"
              icon="i-mdi-mastodon"
            >
              Mastodon
            </core-btn>
          </li>
          <li>
            <core-btn
              rel="noopener"
              href="https://twitter.com/f3ve_"
              icon="i-ri-twitter-x-fill"
              target="_blank"
            >
              Twitter
            </core-btn>
          </li>
          <li>
            <core-btn
              icon="i-mdi-github"
              href="https://github.com/f3ve"
              target="_blank"
              rel="noopener"
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
              icon="i-ci-sun dark:i-ci-moon"
              aria-label="Toggle Theme"
              @click="toggleDark()"
            >
              Theme
            </core-btn>
          </li>
        </ul>
      </div>
    </core-menu>

    <address class="hidden items-center sm:flex">
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
      <core-btn
        icon="i-ci-sun dark:i-ci-moon"
        aria-label="Toggle Theme"
        @click="toggleDark()"
      />
    </address>
  </header>
</template>
