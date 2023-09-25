<script lang="ts" setup>
import type { BlogPostFrontmatter } from '@/pages/blog/components/types';
import { formatDate } from '@/utils/dateHelpers';

defineProps<{
  frontmatter: BlogPostFrontmatter;
}>();
</script>

<template>
  <article class="oborder-base m-a px-6">
    <div class="mb-4">
      <h1 v-if="frontmatter.title" class="mb-1 text-center">
        {{ frontmatter.title }}
      </h1>
      <div
        v-if="frontmatter.datePublished || frontmatter.dateUpdated"
        class="text-center text-sm"
      >
        <p v-if="frontmatter.datePublished" class="mb-0">
          {{ formatDate(frontmatter.datePublished) }}
        </p>
        <p v-if="frontmatter.dateUpdated" class="my-0 italic op-75">
          Last Updated: {{ formatDate(frontmatter.dateUpdated) }}
        </p>
      </div>
      <core-divider class="my-4" />
      <slot />
    </div>
  </article>
</template>
