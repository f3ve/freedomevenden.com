<script lang="ts" setup>
import type { Project } from '../types';

defineProps<{
  project: Project;
}>();
</script>

<template>
  <li class="rounded-lg hoverable">
    <a
      class="block pa-4 decoration-none"
      :href="project.link"
      target="_blank"
      rel="noopener"
    >
      <p class="text-warning ma-none mb-0 text-2xl font-bold font-header">
        {{ project.name }}
      </p>
      <p class="my-0 text-sm font-header font-header text-secondary">
        {{ project.role }}
      </p>
      <p class="my-0 text-op-75 font-header">{{ project.description }}</p>
    </a>
  </li>
</template>
