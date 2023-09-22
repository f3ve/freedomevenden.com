<script lang="ts" setup>
import type { BlogPostFrontmatter } from '@/pages/blog/components/types';
import { formatDate } from '@/utils/dateHelpers';

defineProps<{
  frontmatter: BlogPostFrontmatter;
}>();
</script>

<template>
  <article class="m-a prose pt-2">
    <div class="mb-4">
      <h1 v-if="frontmatter.title" class="mb-1 text-center">
        {{ frontmatter.title }}
      </h1>
      <div
        v-if="frontmatter.datePublished || frontmatter.dateUpdated"
        class="flex justify-between text-sm"
      >
        <p v-if="frontmatter.datePublished">
          {{ formatDate(frontmatter.datePublished) }}
        </p>
        <p v-if="frontmatter.dateUpdated" class="italic op-60">
          Last Updated: {{ formatDate(frontmatter.dateUpdated) }}
        </p>
      </div>
      <core-divider />
    </div>
    <slot />
  </article>
</template>
