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
</script>

<template>
  <div :class="className">
    <nav class="flex items-center justify-center">
      <core-btn to="/blog" title="blog" underline>Blog</core-btn>
      <core-btn to="/projects" title="Projects" underline>Projects</core-btn>
      <core-btn to="/wiki" title="Digital Garden" underline> Wiki </core-btn>
    </nav>
  </div>
</template>
