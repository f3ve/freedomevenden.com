<route lang="yaml">
name: blog
</route>

<script lang="ts" setup>
import { getPosts } from '@/services/api/posts';

onMounted(async () => {
  try {
    const res = await getPosts();
    console.log(res);
  } catch (err) {}
});
</script>

<template>
  <div></div>
</template>
