<script lang="ts" setup>
const router = useRouter();

const routes = router
  .getRoutes()
  .find((route) => route.name === 'WikiParent' && route.children.length)
  ?.children.filter((route) => route.path.length && route.path !== '/');
</script>

<template>
  <ul class="blog-list not-prose">
    <WikiNavListItem v-for="route in routes" :key="route.path" :route="route" />
  </ul>
</template>
