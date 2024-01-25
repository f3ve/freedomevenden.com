<script lang="ts" setup>
import type { PageFrontmatter } from '@/types';
import { formatDate } from '@/utils/dateHelpers';

const props = defineProps<{
  page: PageFrontmatter;
}>();

const publishDate = computed(() =>
  props.page.datePublished ? formatDate(props.page.datePublished) : undefined,
);
</script>

<template>
  <li class="rounded hoverable">
    <RouterLink :to="page.path" class="block pa-4 decoration-none">
      <p class="ma-none mb-0 text-lg font-bold font-header italic">
        {{ page.title?.replace(' - Freedom Evenden', '') }}
      </p>
      <p v-if="publishDate" class="my-0 text-sm font-header text-primary">
        {{ publishDate }}
      </p>
      <p v-if="page.description" class="my-0 text-op-75">
        {{ page.description }}
      </p>
    </RouterLink>
  </li>
</template>
