<script lang="ts" setup>
import type { PageFrontmatter } from '@/types';
import { formatDate } from '@/utils/dateHelpers';

defineProps<{
  frontmatter: PageFrontmatter;
}>();
</script>

<template>
  <div class="h-full">
    <article class="m-a min-h-full px-6 prose">
      <div class="mb-10 py-10 fe-border-b">
        <h1 v-if="frontmatter.title" class="mb-5 text-center">
          {{ frontmatter.title.replace('- Freedom Evenden', '') }}
        </h1>
        <p v-if="frontmatter.subtitle" class="text-center">
          {{ frontmatter.subtitle }}
        </p>
        <div
          v-if="frontmatter.datePublished || frontmatter.dateUpdated"
          class="text-center text-sm"
        >
          <p
            v-if="frontmatter.datePublished"
            class="mb-0 font-header text-primary"
          >
            {{ formatDate(frontmatter.datePublished) }}
          </p>
          <p
            v-if="frontmatter.dateUpdated"
            class="text-color-op-75 my-0 font-header italic"
          >
            Last Updated: {{ formatDate(frontmatter.dateUpdated) }}
          </p>
        </div>
      </div>

      <div class="md:px-16">
        <slot />
      </div>
    </article>
  </div>
</template>
