<script lang="ts" setup>
const router = useRouter();

const routes = router
  .getRoutes()
  .find((route) => route.name === '/knowledge' && route.children.length)
  ?.children.filter((route) => route.path.length && route.path !== '/');
</script>

<template>
  <CoreNavDrawer>
    <ul>
      <KnowledgeNavListItem
        v-for="route in routes"
        :key="route.path"
        :route="route"
      />
    </ul>
  </CoreNavDrawer>
</template>
