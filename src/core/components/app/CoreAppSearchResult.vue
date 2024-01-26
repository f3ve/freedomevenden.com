<script lang="ts" setup>
import type { PageFrontmatter } from '@/types';
import { formatDate } from '@/utils/dateHelpers';

const props = defineProps<{
  page: PageFrontmatter;
}>();

const route = useRoute();

const publishDate = computed(() =>
  props.page.datePublished ? formatDate(props.page.datePublished) : undefined,
);

const relativePath = computed(getRelativePath);

function getRelativePath() {
  const arr: string[] = [];

  if (route.path !== props.page.path) {
    route.path.split('/').reduce((path, item, i) => {
      path = i === 0 ? '/' : `${path}${item}/`;
      arr.unshift(path);
      return path;
    }, '');

    const match = arr.find((item) => props.page.path.match(item));

    if (match) {
      const cd = route.path.replace(match, '').split('/').length - 1;
      let path = props.page.path.replace(match, '');

      for (let i = 0, l = cd - 1; i < l; i++) {
        path = `../${path}`;
      }

      if (!cd || cd === 1) {
        path = `./${path}`;
      }

      return `$ cat ${path}.html`;
    }
    return '';
  }
  return 'You are here';
}
</script>

<template>
  <li class="rounded hoverable">
    <RouterLink :to="page.path" class="block pa-4 decoration-none">
      <code
        class="rounded bg-true-gray-100 pa-1 color-true-gray dark:bg-true-gray-700"
        >{{ relativePath }}</code
      >
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
