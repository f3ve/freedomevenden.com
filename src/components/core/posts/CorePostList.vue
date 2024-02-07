<script lang="ts" setup>
const props = defineProps<{
  postsPath: string;
}>();

const { posts, search } = usePosts(props.postsPath);
</script>

<template>
  <div>
    <CoreInput
      v-model="search"
      placeholder="Search..."
      icon="i-ph-magnifying-glass"
      name="search"
    />
    <ul class="blog-list flex flex-col list-none gap-sm pl-none">
      <CorePostListItem v-for="post in posts" :key="post.path" :post="post" />
    </ul>
  </div>
</template>
