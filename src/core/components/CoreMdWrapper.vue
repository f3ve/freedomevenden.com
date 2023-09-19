<script lang="ts" setup>
import type { BlogPostFrontmatter } from '@/pages/blog/components/types';
import { formatDate } from '@/utils/dateHelpers';

defineProps<{
  frontmatter: BlogPostFrontmatter;
}>();
</script>

<template>
  <article class="m-a prose">
    <div class="mb-4 w-fit">
      <h1 v-if="frontmatter.title" class="mb-1">{{ frontmatter.title }}</h1>
      <core-divider />
    </div>
    <p v-if="frontmatter.datePublished">
      {{ formatDate(frontmatter.datePublished) }}
    </p>
    <slot />
  </article>
</template>
