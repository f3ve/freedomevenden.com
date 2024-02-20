<script lang="ts" setup>
import type { PageFrontmatter } from '@/types';
import { formatDate } from '@/utils/dateHelpers';

const props = defineProps<{
  frontmatter: PageFrontmatter;
}>();

const numberOfAnimations = computed(() => {
  let count = 0;
  if (props.frontmatter.title) count++;
  if (props.frontmatter.subtitle) count++;
  if (props.frontmatter.datePublished || props.frontmatter.dateUpdated) count++;
  return count;
});

const bodyOrder = computed(() => `animate-order-${numberOfAnimations.value}`);

const dateOrder = computed(
  () =>
    `animate-order-${numberOfAnimations.value <= 1 ? numberOfAnimations.value : numberOfAnimations.value - 1}`,
);
const subtitleOrder = computed(
  () =>
    `animate-order-${numberOfAnimations.value <= 1 ? numberOfAnimations.value : numberOfAnimations.value - 1}`,
);
</script>

<template>
  <div class="fade-in-up h-full">
    <article class="m-a min-h-full px-6 prose">
      <div class="pb-5 pt-10">
        <h1 v-if="frontmatter.title" class="animate mb-5 text-center">
          {{ frontmatter.title.replace('- Freedom Evenden', '') }}
        </h1>
        <p
          v-if="frontmatter.subtitle"
          class="animate text-center font-header"
          :class="subtitleOrder"
        >
          {{ frontmatter.subtitle }}
        </p>
        <div
          v-if="frontmatter.datePublished || frontmatter.dateUpdated"
          class="animate text-center text-sm"
          :class="dateOrder"
        >
          <p
            v-if="frontmatter.datePublished"
            class="mb-0 font-header text-secondary"
          >
            {{ formatDate(frontmatter.datePublished) }}
          </p>
          <p
            v-if="frontmatter.dateUpdated"
            class="my-0 font-header text-accent"
          >
            Last Updated: {{ formatDate(frontmatter.dateUpdated) }}
          </p>
        </div>
      </div>

      <div class="animate md:px-16" :class="bodyOrder">
        <slot />
      </div>
    </article>
  </div>
</template>
