<script lang="ts" setup>
defineProps<{
  frontmatter: any;
}>();
</script>

<template>
  <article class="prose m-a">
    <h1 v-if="frontmatter.title">{{ frontmatter.title }}</h1>
    <p v-if="frontmatter.lang">{{ frontmatter.lang }}</p>
    <slot />
  </article>
</template>
