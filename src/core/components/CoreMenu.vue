<script lang="ts" setup>
import { onClickOutside } from '@vueuse/core';
const menu = ref();
const isVisible = ref(false);

onClickOutside(menu, () => {
  toggle(false);
});

function toggle(value?: boolean) {
  isVisible.value = value !== undefined ? value : !isVisible.value;
}
</script>

<template>
  <div class="relative" @click="toggle()">
    <slot name="toggler">
      <button>Toggle</button>
    </slot>

    <transition name="fade">
      <div
        v-if="isVisible"
        ref="menu"
        class="not-prose absolute right-0 w-fit rounded shadow bg-surface"
        style="min-width: 150px"
      >
        <slot />
      </div>
    </transition>
  </div>
</template>
