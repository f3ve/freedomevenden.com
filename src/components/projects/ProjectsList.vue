<script lang="ts" setup>
import type { Project } from './types';

defineProps<{
  projects: { [key: string]: Project[] };
}>();
</script>

<template>
  <ul class="blog-list flex flex-col list-none gap-sm pl-none">
    <li v-for="(value, key) in projects" :key="key">
      <h2 class="w-fit">{{ key }}</h2>

      <ul
        class="blog-list flex flex-col list-none gap-sm border-l-4 fe-border-l"
      >
        <ProjectListItem
          v-for="project in value"
          :key="project.name"
          :project="project"
        />
      </ul>
    </li>
  </ul>
</template>
