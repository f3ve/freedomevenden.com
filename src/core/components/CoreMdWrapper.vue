<script lang="ts" setup>
import type { BlogPostFrontmatter } from '@/pages/blog/components/types';
import { formatDate } from '@/utils/dateHelpers';

defineProps<{
  frontmatter: BlogPostFrontmatter;
}>();
</script>

<template>
  <article class="m-a px-6">
    <div class="mb-10 py-10 fe-border-b">
      <h1 v-if="frontmatter.title" class="mb-5 text-center">
        {{ frontmatter.title.replace('- Freedom Evenden', '') }}
      </h1>
      <div
        v-if="frontmatter.datePublished || frontmatter.dateUpdated"
        class="text-center text-sm"
      >
        <p
          v-if="frontmatter.datePublished"
          class="mb-0 text-primary font-header"
        >
          {{ formatDate(frontmatter.datePublished) }}
        </p>
        <p v-if="frontmatter.dateUpdated" class="my-0 italic op-75 font-header">
          Last Updated: {{ formatDate(frontmatter.dateUpdated) }}
        </p>
      </div>
    </div>

    <div class="md:px-16">
      <slot />
    </div>
  </article>
</template>
