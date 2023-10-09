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
  <div v-if="toast.isVisible" class="absolute bottom-0 bg-green">
    <p>{{ toast.text }}</p>
  </div>
</template>
