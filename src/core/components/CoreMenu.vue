<script lang="ts" setup>
const isVisible = ref(false);

function toggle() {
  isVisible.value = !isVisible.value;
}
</script>

<template>
  <div class="relative" @click="toggle">
    <slot name="toggler">
      <button>Toggle</button>
    </slot>

    <transition name="fade">
      <div
        v-if="isVisible"
        class="not-prose absolute right-0 w-fit rounded shadow bg-surface"
        style="width: 150px"
      >
        <slot />
      </div>
    </transition>
  </div>
</template>
