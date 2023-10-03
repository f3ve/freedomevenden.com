<script lang="ts" setup>
import { useLink, type RouteLocationRaw } from 'vue-router';

const props = defineProps<{
  to?: RouteLocationRaw;
  replace?: boolean;
  href?: string;
  underline?: boolean;
  icon?: string;
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
  <tag :href="href" class="core-btn" @click="link?.navigate">
    <i v-if="icon" :class="icon" style="height: 20px width: 20px" />
    <slot />
    <core-divider v-if="underline" :full-width="link?.isActive" />
  </tag>
</template>
