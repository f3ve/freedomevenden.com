<script lang="ts" setup>
import { type ImgHTMLAttributes } from 'vue';

const props = defineProps<{
  /** Image name should also include file type ending. E.G example.png or example.webp */
  name?: string;
  src?: string;
  expandable?: boolean;
  width?: string;
  height?: string;

  /** Sets the loading attribute to eager if true, otherwise image loading will be set to 'lazy'. @see [MDN <img> loading attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#loading) */
  eager?: boolean;
  alt?: string;
}>();

const imageRootUrl = 'https://di4rxb3cqg7tj.cloudfront.net/images/';

const source = computed<string | undefined>(() =>
  props.name ? `${imageRootUrl}${props.name}` : props.src,
);

const imageLoading = computed<ImgHTMLAttributes['loading']>(() =>
  props.eager ? 'eager' : 'lazy',
);
</script>

<template>
  <div class="relative" :style="{ width, height }">
    <img
      :src="source"
      width="width"
      height="height"
      :loading="imageLoading"
      :alt="alt"
    />
    <CoreBtn
      v-if="expandable"
      no-bg
      class="absolute bottom-0 right-0 text-primary"
      icon="icon-fullscreen"
    />
  </div>
</template>
