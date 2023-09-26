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
  <li class="hoverable rounded-lg">
    <RouterLink
      :key="post.path"
      :to="post.path"
      class="block pa-4 decoration-none"
    >
      <p class="font-header ma-none mb-0 text-2xl font-bold italic">
        {{ post.title }}
      </p>
      <p class="font-header my-0 text-sm text-primary">{{ publishDate }}</p>
      <p v-if="post.description" class="my-0 op-75">{{ post.description }}</p>
    </RouterLink>
  </li>
</template>
