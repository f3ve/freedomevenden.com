<script lang="ts" setup>
import type { BlogPostFrontmatter } from './types';

const router = useRouter();
const search = ref('');

const posts = computed<BlogPostFrontmatter[]>(() => {
  return router
    .getRoutes()
    .filter((route) => route.path.startsWith('/blog/'))
    .map((route) => ({
      path: route.path,
      ...route.meta.frontmatter,
    }))
    .filter(
      (frontmatter: BlogPostFrontmatter) =>
        frontmatter.title?.toLowerCase().includes(search.value.toLowerCase()),
    )
    .sort((a: BlogPostFrontmatter, b: BlogPostFrontmatter) => {
      if (a.datePublished && b.datePublished)
        return (
          new Date(b.datePublished).getTime() -
          new Date(a.datePublished).getTime()
        );

      return 1;
    });
});
</script>

<template>
  <div>
    <BlogListSearch v-model="search" placeholder="Search..." />
    <ul class="blog-list flex flex-col list-none gap-sm pl-none">
      <BlogListItem v-for="post in posts" :key="post.path" :post="post" />
    </ul>
  </div>
</template>
