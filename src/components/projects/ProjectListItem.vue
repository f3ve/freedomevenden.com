<script lang="ts" setup>
import type { PageFrontmatter } from '@/types';

defineProps<{
  project: PageFrontmatter;
}>();
</script>

<template>
  <li class="rounded-lg hoverable">
    <RouterLink class="block pa-4 decoration-none" :to="project.path">
      <p class="ma-none mb-0 text-2xl font-bold font-header text-warning">
        {{ project.title }}
      </p>
      <p class="my-0 text-sm font-header font-header text-secondary">
        {{ project.role }}
      </p>
      <p class="my-0 text-op-75 font-header">{{ project.subtitle }}</p>
    </RouterLink>
  </li>
</template>
