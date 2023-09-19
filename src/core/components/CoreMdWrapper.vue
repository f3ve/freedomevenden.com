<script lang="ts" setup>
import type { BlogPostFrontmatter } from '@/pages/blog/components/types';
import { formatDate } from '@/utils/dateHelpers';

defineProps<{
  frontmatter: BlogPostFrontmatter;
}>();
</script>

<template>
  <article class="prose m-a">
    <h1 v-if="frontmatter.title">{{ frontmatter.title }}</h1>
    <p v-if="frontmatter.datePublished">
      {{ formatDate(frontmatter.datePublished) }}
    </p>
    <slot />
  </article>
</template>
