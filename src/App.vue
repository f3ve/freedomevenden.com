<script lang="ts" setup>
const height = ref('');
onMounted(() => {
  const footer = document.querySelector('footer')?.getBoundingClientRect();

  if (footer) {
    height.value = `${footer.height}px`;
  }
});
</script>

<template>
  <div class="relative min-h-screen font-sans">
    <CoreNavBar />
    <main :style="{ paddingBottom: height }">
      <RouterView />
    </main>
    <CoreFooter class="absolute bottom-0" />
  </div>
</template>
