<script lang="ts" setup>
import type { Project } from './types';

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
      <p class="ma-none mb-0 text-2xl font-bold font-header italic">
        {{ project.name }}
      </p>
      <p class="my-0 text-sm font-header text-primary">
        {{ project.role }}
      </p>
      <p class="my-0 text-op-75">{{ project.description }}</p>
    </a>
  </li>
</template>
