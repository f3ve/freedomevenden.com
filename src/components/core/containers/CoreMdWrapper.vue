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
      <div class="pt-10">
        <h1 v-if="frontmatter.title" class="mb-5 text-center">
          {{ frontmatter.title.replace('- Freedom Evenden', '') }}
        </h1>
        <p v-if="frontmatter.subtitle" class="text-center font-header">
          {{ frontmatter.subtitle }}
        </p>
        <div
          v-if="frontmatter.datePublished || frontmatter.dateUpdated"
          class="text-center text-sm"
        >
          <p
            v-if="frontmatter.datePublished"
            class="text-secondary mb-0 font-header"
          >
            {{ formatDate(frontmatter.datePublished) }}
          </p>
          <p
            v-if="frontmatter.dateUpdated"
            class="text-accent my-0 font-header"
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
