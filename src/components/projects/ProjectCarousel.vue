<script lang="ts" setup>
import { Carousel, Slide, Navigation } from 'vue3-carousel';

const props = defineProps<{
  images?: string[];
  videos?: { webm: string; mp4: string }[];
}>();

const imagesComp = computed(() => (props.images ? props.images : []));
const videosComp = computed(() => (props.videos ? props.videos : []));
const currentSlide = ref(0);

function next() {
  currentSlide.value++;
}

function prev() {
  currentSlide.value--;
}
</script>

<template>
  <div class="relative">
    <Carousel v-model="currentSlide" wrap-around :items-to-show="1.1">
      <Slide v-for="image in imagesComp" :key="image">
        <div class="h-full w-full px-1 shadow">
          <img :src="image" class="object-contain transition-transform" />
        </div>
      </Slide>
      <Slide v-for="video in videosComp" :key="video.webm">
        <video>
          <source :src="video.webm" type="video/webm" />
          <source :src="video.mp4" type="video/mp4" />
          <p>Your browser doesn't support this video format.</p>
        </video>
      </Slide>
    </Carousel>
    <div
      class="pointer-events-none absolute top-0 h-full w-full flex justify-between"
    >
      <CoreBtn no-bg class="pointer-events-initial" @click="prev">Prev</CoreBtn>
      <CoreBtn no-bg class="pointer-events-initial" @click="next">Next</CoreBtn>
    </div>
  </div>
</template>
