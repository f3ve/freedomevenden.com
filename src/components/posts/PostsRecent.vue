import type { title } from 'process';
<script lang="ts" setup>
const { posts } = usePosts(3);
</script>

<template>
  <ul>
    <!-- <CorePostListItem v-for="post in posts" :key="post.path" :post="post" /> -->
    <li v-for="post in posts" :key="post.path">
      <RouterLink :to="post.path">
        {{ post.title }}
      </RouterLink>
    </li>
  </ul>
</template>
