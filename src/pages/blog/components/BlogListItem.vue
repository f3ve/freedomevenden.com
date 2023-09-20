<script lang="ts" setup>
import { formatDate } from '@/utils/dateHelpers';
import type { BlogPostFrontmatter } from './types';

const props = defineProps<{
  post: BlogPostFrontmatter;
}>();

const publishDate = computed(() =>
  props.post.datePublished ? formatDate(props.post.datePublished) : undefined,
);
</script>

<template>
  <RouterLink :key="post.path" :to="post.path" class="decoration-none">
    <li class="rounded-lg transition-colors pa-1 @hover:bg-gray @hover:bg-op-7">
      <h5 class="ma-none">
        {{ post.title }} -
        <span
          v-if="publishDate"
          class="ma-none text-sm op-50"
          v-text="publishDate"
        />
      </h5>
    </li>
  </RouterLink>
</template>
