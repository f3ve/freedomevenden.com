<script lang="ts" setup>
import { type RouteLocationRaw } from 'vue-router';

defineProps<{
  to: RouteLocationRaw;
}>();
</script>

<template>
  <core-btn :to="to" underline>
    <slot />
  </core-btn>
</template>
