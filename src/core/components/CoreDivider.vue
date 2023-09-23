<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    fullWidth?: boolean;
    color?: string;
    height?: string | number;
  }>(),
  {
    fullWidth: true,
    color: 'primary',
    height: 2,
  },
);

const show = computed(() => props.fullWidth);

const compHeight = computed(() =>
  typeof props.height === 'number' || !/(px|%|vh|rem|em|pt)$/.test(props.height)
    ? `${props.height}px`
    : props.height,
);
</script>

<template>
  <div
    class="transition-width duration-300 ease-in-out"
    :class="{
      'bg-primary': true,
      'w-0': !show,
      'w-full': show,
    }"
    :style="{ height: compHeight }"
  ></div>
</template>
