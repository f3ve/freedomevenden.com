<script lang="ts" setup>
import type { PageFrontmatter } from '@/types';

defineProps<{
  pages: PageFrontmatter[];
}>();
</script>

<template>
  <ul>
    <CoreAppSearchResult v-for="page in pages" :key="page.path" :page="page" />
  </ul>
</template>
