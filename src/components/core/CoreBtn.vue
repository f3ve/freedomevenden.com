<script lang="ts" setup>
import { useLink, type RouteLocationRaw } from 'vue-router';

const props = defineProps<{
  to?: RouteLocationRaw;
  replace?: boolean;
  href?: string;
  icon?: string;
  underline?: boolean;
  noBg?: boolean;
  loading?: boolean;
  tagName?: Element['tagName'];
  active?: boolean;
  disabled?: boolean;
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
const tag = computed(() => (href.value ? 'a' : props.tagName || 'button'));

const isActive = computed(() => props.active || link?.isActive);
</script>

<template>
  <tag
    :href="href"
    class="relative core-btn"
    :class="{
      'bg-primary': isActive && !underline && !noBg,
      'text-button': isActive && !noBg && !underline,
    }"
    :disabled="isActive || disabled"
    @click="link?.navigate"
  >
    <slot name="icon" :class="{ 'mr-2': !!$slots.default }">
      <i
        v-if="icon"
        :class="{
          ...(!!icon && { [icon]: true }),
          'mr-2': !!$slots.default,
        }"
      />
    </slot>
    <slot v-if="!loading" />
    <i v-else class="i-svg-spinners-ring-resize" />
    <core-divider
      v-if="underline"
      :full-width="isActive"
      class="absolute bottom-0 left-0"
    />
  </tag>
</template>

<style scoped>
.core-btn * {
  pointer-events: none;
}
</style>
