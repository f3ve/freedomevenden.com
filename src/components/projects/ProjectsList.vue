<script lang="ts" setup>
import type { PageFrontmatter } from '@/types';

const { posts: projects } = usePosts({ path: '/projects/' });

type CategoryObject = {
  'Current Role': PageFrontmatter[];
  'Open-Source Projects': PageFrontmatter[];
  Past: PageFrontmatter[];
};

const categories = computed<CategoryObject>(() => {
  const cats: CategoryObject = {
    'Current Role': [],
    'Open-Source Projects': [],
    Past: [],
  };

  projects.value.forEach((project) => {
    if (project.type !== 'open-source') {
      if (project.dates?.includes('Present')) {
        cats['Current Role'].push(project);
      } else {
        cats['Past'].push(project);
      }
    } else {
      cats['Open-Source Projects'].push(project);
    }
  });

  return cats;
});
</script>

<template>
  <ul class="blog-list flex flex-col list-none gap-sm pl-none">
    <li v-for="(value, key) in categories" :key="key" class="mb-8">
      <h2 class="mt-0 w-fit">
        {{ key }}
      </h2>

      <ul
        class="blog-list flex flex-col list-none gap-sm border-l-4 fe-border-l"
      >
        <ProjectListItem
          v-for="project in value"
          :key="project.title"
          :project="project"
        />
      </ul>
    </li>
  </ul>
</template>
