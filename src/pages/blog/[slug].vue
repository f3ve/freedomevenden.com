<route lang="yaml">
name: post
</route>

<script lang="ts" setup>
import { getPostBySlug } from '@/services/api/posts';
import { useBlogStore } from '@/stores/blog';
const blog = useBlogStore();
const route = useRoute();

onServerPrefetch(() => {
  getPostBySlug(route.params.slug as string);
});

const post = computed(() => blog.getPost(route.params.slug as string));
</script>

<template>
  <vue-markdown-it v-if="post" :source="post.attributes.body" />
</template>
