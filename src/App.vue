<script lang="ts" setup>
import { useHead } from '@unhead/vue';

const top = ref('');
const bottom = ref('');

useHead({});

onMounted(() => {
  const header = document.querySelector('header');
  const footer = document.querySelector('footer');

  if (footer) {
    bottom.value = `${footer.offsetHeight + 8}px`;
  }

  if (header) {
    top.value = `${header.offsetHeight + 8}px`;
  }
});
</script>

<template>
  <div class="relative min-h-screen w-screen font-sans">
    <CoreNavBar class="m-w-screen fixed z-100" />
    <main
      class="min-h-screen"
      :style="{ paddingBottom: bottom, paddingTop: top }"
    >
      <RouterView />
    </main>
    <CoreFooter class="absolute bottom-0" />
  </div>
</template>
