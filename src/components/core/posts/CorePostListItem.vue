<script lang="ts" setup>
import { formatDate } from '@/utils/dateHelpers';
import type { PageFrontmatter } from '@/types';

const props = defineProps<{
  post: PageFrontmatter;
}>();

const publishDate = computed(() =>
  props.post.datePublished ? formatDate(props.post.datePublished) : undefined,
);
</script>

<template>
  <li class="rounded-lg hoverable">
    <RouterLink
      :key="post.path"
      :to="post.path"
      class="block pa-4 decoration-none"
    >
      <p class="text-warning ma-none mb-0 text-2xl font-bold font-header">
        {{ post.title }}
      </p>
      <p
        v-if="publishDate"
        class="my-0 text-sm font-header font-header text-secondary"
      >
        {{ publishDate }}
      </p>
      <p v-if="post.description" class="my-0 text-op-75 font-header">
        {{ post.description }}
      </p>
    </RouterLink>
  </li>
</template>
