import type { title } from 'process';
<script lang="ts" setup>
const { posts } = usePosts({ limit: 3 });
</script>

<template>
  <ul>
    <li v-for="post in posts" :key="post.path">
      <RouterLink :to="post.path">
        {{ post.title }}
      </RouterLink>
    </li>
  </ul>
</template>
