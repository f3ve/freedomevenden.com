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
  <li class="rounded-lg pa-4 transition-colors @hover:bg-gray @hover:bg-op-7">
    <RouterLink :key="post.path" :to="post.path" class="decoration-none">
      <p class="ma-none mb-0 text-2xl font-bold">{{ post.title }}</p>
      <p class="my-0 text-sm text-primary">{{ publishDate }}</p>
      <p v-if="post.description" class="my-0 op-75">{{ post.description }}</p>
    </RouterLink>
  </li>
</template>
