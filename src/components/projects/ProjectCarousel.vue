<script lang="ts" setup>
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';
</script>

<template>
  <Carousel \>
    <Slide :key="1">
      <img
        src="https://lh3.googleusercontent.com/pw/AP1GczPL-koznilK5pEBP1iWEvYsjdsBqNBo2A41C50xABPtGSXPpdjY2Aj_PcaVmzHo4zdYTJ4GM4ZIIwwV3B6BCp0LdhzcLapvE9oeUK0uJtMA7tYmGceasXRz91xfCdJ-ldfhih-7LrelVjvEJfsyeXhA=w1279-h719-s-k-no-gm?authuser=0"
      />
    </Slide>
    <Slide :key="2">Another slide yay!</Slide>

    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>
