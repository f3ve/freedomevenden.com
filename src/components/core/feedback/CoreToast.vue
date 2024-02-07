<script lang="ts" setup>
const toast = useToastStore();
let timeout: undefined | NodeJS.Timeout;

watch(
  () => toast.isVisible,
  () => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      toast.hide();
    }, 5000);
  },
);
</script>

<template>
  <transition name="fade" mode="out-in">
    <div
      v-if="toast.isVisible"
      class="absolute bottom-30 left-0 right-0 m-a max-w-lg w-fit rounded-lg bg-green px-4"
    >
      <div class="flex">
        <p>{{ toast.text }}</p>
        <core-btn icon="i-material-symbols-close" @click="toast.hide" />
      </div>
    </div>
  </transition>
</template>
