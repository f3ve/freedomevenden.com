<script lang="ts" setup>
const { toggleDark } = useTheme();
</script>

<template>
  <core-menu>
    <template #toggler="props">
      <core-btn icon="i-mdi-menu" v-bind="props" title="menu"></core-btn>
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
        <li>
          <core-btn to="/digital-garden" title="Digital Garden">
            Garden
          </core-btn>
        </li>
        <!-- Temporarily disabled. -->
        <!-- <li>
          <core-btn to="/contact" title="Contact">Contact</core-btn>
        </li> -->
      </ul>
    </nav>

    <address class="pa-4 not-italic fe-border-b">
      <ul class="blog-list ma-0 list-none pl-0">
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
</template>
