<script lang="ts" setup>
import type { RouteLocationRaw } from 'vue-router';

const props = defineProps<{
  href?: string;
  to?: RouteLocationRaw;
}>();

const tagName = computed(() =>
  props.href ? 'a' : props.to ? 'RouterLink' : 'button',
);
</script>

<template>
  <component
    :is="tagName"
    v-slot="p"
    :href="href"
    :to="to"
    class="cursor-pointer"
  >
    <span>
      <slot />
    </span>
    <core-divider :full-width="p?.isActive" />
  </component>
</template>
