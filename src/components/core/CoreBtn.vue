<script lang="ts" setup>
import { useLink, type RouteLocationRaw } from 'vue-router';

const props = withDefaults(
  defineProps<{
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
    color?:
      | 'primary'
      | 'secondary'
      | 'selection'
      | 'accent'
      | 'success'
      | 'warning'
      | 'error'
      | 'link';
  }>(),
  {
    color: 'primary',
  },
);

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
const hideBackground = computed(
  () =>
    !(isActive.value || typeof isActive.value === 'undefined') ||
    !!props.underline ||
    !!props.noBg,
);
</script>

<template>
  <tag
    :href="href"
    :class="['relative core-btn', ...(!hideBackground ? [`bg-${color}`] : [])]"
    :disabled="isActive || disabled"
    @click="link?.navigate"
  >
    <div :class="[{ 'op-0': loading }]">
      <slot name="icon" :class="{ 'mr-2': !!$slots.default }">
        <i
          v-if="icon"
          :class="{
            ...(!!icon && { [icon]: true }),
            'mr-2': !!$slots.default,
          }"
        />
      </slot>
      <slot />
    </div>
    <i v-if="loading" class="i-svg-spinners-ring-resize absolute op70" />
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
