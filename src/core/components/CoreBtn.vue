<script lang="ts" setup>
import { useLink, type RouteLocationRaw } from 'vue-router';

const props = defineProps<{
  to?: RouteLocationRaw;
  replace?: boolean;
  href?: string;
  icon?: string;
  underline?: boolean;
  noBg?: boolean;
}>();

const link = props.to
  ? reactive(
      useLink({
        to: props.to,
        replace: props?.replace,
      }),
    )
  : undefined;

const href = computed(() => (link?.href ? link.href : props.href));
const tag = computed(() => (href.value ? 'a' : 'button'));
</script>

<template>
  <tag
    :href="href"
    class="relative core-btn"
    :class="{
      'bg-primary': link?.isActive && !underline && !noBg,
      'text-on-primary-default': link?.isActive && !underline && !noBg,
    }"
    :disabled="link?.isActive"
    @click="link?.navigate"
  >
    <i
      v-if="icon"
      :class="{
        ...(!!icon && { [icon]: true }),
        'mr-2': !!$slots.default,
      }"
    />
    <slot />
    <core-divider
      v-if="underline"
      :full-width="link?.isActive"
      class="absolute bottom-0 left-0"
    />
  </tag>
</template>

<style scoped>
.core-btn * {
  pointer-events: none;
}
</style>
