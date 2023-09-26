<script lang="ts" setup>
import type { Project } from './types';

defineProps<{
  project: Project;
}>();
</script>

<template>
  <li class="hoverable rounded-lg">
    <a class="block pa-4 decoration-none" :href="project.link">
      <p class="font-header ma-none mb-0 text-2xl font-bold italic">
        {{ project.name }}
      </p>
      <p class="font-header my-0 text-sm text-primary">
        {{ project.role }}
      </p>
      <p class="my-0 op-75">{{ project.description }}</p>
    </a>
  </li>
</template>
