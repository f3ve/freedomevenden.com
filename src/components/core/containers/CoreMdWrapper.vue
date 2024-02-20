<script lang="ts" setup>
import type { PageFrontmatter } from '@/types';
import { formatDate } from '@/utils/dateHelpers';
import { useMotion, type MotionVariants } from '@vueuse/motion';

defineProps<{
  frontmatter: PageFrontmatter;
}>();

const variants = ref<MotionVariants>({
  initial: {
    y: 25,
    opacity: 0,
  },
  fadeIn: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'keyframes',
      delay: 0,
      duration: 300,
    },
  },
});

const title = ref<HTMLElement>();
const titleInstance = useMotion(title, variants);

const subTitle = ref<HTMLElement>();
const subTitleInstance = useMotion(subTitle, variants);

const date = ref<HTMLElement>();
const dateInstance = useMotion(date, variants);

const body = ref<HTMLElement>();
const bodyInstance = useMotion(body, variants);

onMounted(async () => {
  if (title.value) await titleInstance.apply('fadeIn');
  if (subTitle.value) await subTitleInstance.apply('fadeIn');
  if (date.value) await dateInstance.apply('fadeIn');
  if (body.value) await bodyInstance.apply('fadeIn');
});
</script>

<template>
  <div class="h-full">
    <article class="m-a min-h-full px-6 prose">
      <div class="pb-5 pt-10">
        <h1 v-if="frontmatter.title" ref="title" class="mb-5 text-center">
          {{ frontmatter.title.replace('- Freedom Evenden', '') }}
        </h1>
        <p
          v-if="frontmatter.subtitle"
          ref="subTitle"
          class="text-center font-header"
        >
          {{ frontmatter.subtitle }}
        </p>
        <div
          v-if="frontmatter.datePublished || frontmatter.dateUpdated"
          ref="date"
          class="text-center text-sm"
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

      <div ref="body" class="md:px-16">
        <slot />
      </div>
    </article>
  </div>
</template>
