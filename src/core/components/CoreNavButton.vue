<script lang="ts" setup>
import type { RouteLocationRaw } from 'vue-router';

defineProps<{
  to: RouteLocationRaw;
}>();
</script>

<template>
  <router-link
    v-slot="{ isActive }"
    :to="to"
    class="cursor-pointer decoration-none"
  >
    <span>
      <slot />
    </span>
    <core-divider :full-width="isActive" />
  </router-link>
</template>
