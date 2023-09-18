<script lang="ts" setup>
import type { BlogPostFrontmatter } from './types';

const router = useRouter();

const posts: BlogPostFrontmatter[] = router
  .getRoutes()
  .filter((route) => route.path.startsWith('/blog/'))
  .map((route) => ({
    path: route.path,
    ...route.meta.frontmatter,
  }));
</script>

<template>
  <ul class="flex flex-col list-none gap-sm pl-none">
    <BlogListItem v-for="post in posts" :key="post.path" :post="post" />
  </ul>
</template>
