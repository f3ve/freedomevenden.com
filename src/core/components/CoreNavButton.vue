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
    :href="href"
    :to="to"
    class="cursor-pointer"
    v-slot="props"
  >
    <span>
      <slot />
    </span>
    <div
      class="bg-dark-primary transition-width"
      :class="{
        'w-0': !props?.isActive,
        'w-full': props?.isActive,
      }"
      style="height: 2px"
    ></div>
  </component>
</template>
