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

const color = computed(() =>
  toast.color === 'success' ? 'bg-success' : 'bg-error',
);
</script>

<template>
  <transition name="fade" mode="out-in">
    <div
      v-if="toast.isVisible"
      class="absolute bottom-30 left-0 right-0 m-a max-w-lg w-fit rounded-lg px-6 py-4"
      :class="color"
    >
      <div class="flex justify-between">
        <p class="mr-5 text-button">{{ toast.text }}</p>
        <core-btn
          no-bg
          icon="i-material-symbols-close text-button"
          @click="toast.hide"
        />
      </div>
    </div>
  </transition>
</template>
