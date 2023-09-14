<route lang="yaml">
name: blog
</route>

<script lang="ts" setup>
import { useBlogStore } from '@/stores/blog';

const { posts } = storeToRefs(useBlogStore());
</script>

<template>
  <div>
    <RouterLink
      v-for="post in posts"
      :key="post.id"
      :to="{ name: 'post', params: { slug: post.attributes.slug } }"
    >
      {{ post.attributes.title }}
    </RouterLink>
  </div>
</template>
