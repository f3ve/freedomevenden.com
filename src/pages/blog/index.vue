<route lang="yaml">
name: blog
</route>

<script lang="ts" setup>
import { getPosts } from '@/services/api/posts';

const posts = ref([]);

onMounted(async () => {
  try {
    const res = await getPosts();
    if (res.data) posts.value = res.data.data;
  } catch (err) {}
});
</script>

<template>
  <div>
    <RouterLink
      v-for="post in posts"
      :to="{ name: 'post', params: { slug: post.attributes.slug } }"
      :key="post.id"
      >{{ post.attributes.title }}</RouterLink
    >
  </div>
</template>
