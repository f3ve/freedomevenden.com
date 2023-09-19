<script lang="ts" setup>
import type { BlogPostFrontmatter } from './types';

const props = defineProps<{
  post: BlogPostFrontmatter;
}>();

const publishDate = computed(() =>
  props.post.datePublished
    ? new Date(props.post.datePublished).toDateString()
    : undefined,
);
</script>

<template>
  <RouterLink :key="post.path" :to="post.path" class="decoration-none">
    <li class="list-item-clickable">
      <h4 class="ma-none mb-2">
        {{ post.title }}
      </h4>
      <p
        v-if="publishDate"
        class="ma-none text-sm text-primary"
        v-text="publishDate"
      />

      <p class="ma-none" v-text="post.description" />
    </li>
  </RouterLink>
</template>
