<script lang="ts" setup>
const router = useRouter();

const routes = router
  .getRoutes()
  .filter((route) => route.path.startsWith('/blog/'));

onMounted(() => {
  console.log(routes);
});
</script>

<template>
  <ul>
    <li>
      <RouterLink v-for="route in routes" :key="route.path" :to="route.path">
        {{ route.meta.frontmatter.title }}
      </RouterLink>
    </li>
  </ul>
</template>
