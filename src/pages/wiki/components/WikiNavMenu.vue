<script lang="ts" setup>
const router = useRouter();

const routes = router
  .getRoutes()
  .find((route) => route.name === '/wiki' && route.children.length)
  ?.children.filter((route) => route.path.length && route.path !== '/');
</script>

<template>
  <ul class="not-prose blog-list">
    <WikiNavListItem v-for="route in routes" :key="route.path" :route="route" />
  </ul>
</template>
