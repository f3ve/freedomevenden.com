<script lang="ts" setup>
const props = defineProps<{ name: string }>();

const videoUrlRoot =
  'https://freedomevenden-website-assets.s3.us-west-2.amazonaws.com/obskur/';

const webm = computed(() => `${videoUrlRoot}${props.name}.webm`);
const mp4 = computed(() => `${videoUrlRoot}${props.name}.mp4`);
</script>

<template>
  <video controls preload="metadata">
    <source :src="webm" type="video/webm" />
    <source :src="mp4" type="video/mp4" />
    <p>Your browser does not support webm or mp4 videos</p>
  </video>
</template>
