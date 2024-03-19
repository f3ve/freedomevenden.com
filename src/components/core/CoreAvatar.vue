<script lang="ts" setup>
import type { StyleValue } from 'vue';

const props = withDefaults(
  defineProps<{
    alt?: string;
    size?: string | number;
    src: string;
    eager?: boolean;
  }>(),
  {
    size: 50,
  },
);

const imageSize = computed(() => {
  if (typeof props.size === 'string') {
    return props.size;
  } else {
    return props.size.toString() + 'px';
  }
});

const imageStyle = computed<StyleValue>(() => ({
  width: imageSize.value,
  height: imageSize.value,
}));
</script>

<template>
  <div class="overflow-hidden rounded-100" :style="imageStyle">
    <img
      :src="src"
      alt="alt"
      class="h-full w-full object-contain"
      :loading="eager ? 'eager' : 'lazy'"
    />
  </div>
</template>
