<script lang="ts" setup>
import { onClickOutside } from '@vueuse/core';
const menu = ref();
const isVisible = ref(false);

onClickOutside(menu, () => {
  isVisible.value = false;
});

function showMenu() {
  if (!isVisible.value) isVisible.value = true;
}
</script>

<template>
  <div class="relative z-1000">
    <slot
      name="toggler"
      class="menu-toggler"
      :disabled="isVisible"
      @click="showMenu"
    />

    <transition name="fade">
      <div
        v-if="isVisible"
        ref="menu"
        class="not-prose absolute right-0 w-fit rounded shadow fe-border bg-background"
        style="min-width: 150px"
        @click="isVisible = false"
      >
        <slot />
      </div>
    </transition>
  </div>
</template>
