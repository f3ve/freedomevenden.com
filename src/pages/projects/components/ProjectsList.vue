<script lang="ts" setup>
defineProps<{
  projects: {
    name: string;
    link: string;
    description: string;
    image?: string;
  }[];
}>();
</script>

<template>
  <ul>
    <li v-for="project in projects" :key="project.name">
      {{ project.name }}
    </li>
  </ul>
</template>
