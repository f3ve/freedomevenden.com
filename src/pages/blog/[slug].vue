<route lang="yaml">
name: post
</route>

<script lang="ts" setup>
import { getPostBySlug } from '@/services/api/posts';
const route = useRoute();

const source = ref();

onMounted(async () => {
  console.log(route.params.slug);
  if (typeof route.params.slug === 'string')
    try {
      const res = await getPostBySlug(route.params.slug);
      if (res.data) {
        source.value = res.data.data[0].attributes.body;
      }
    } catch (err) {
      console.error(err);
    }
});
</script>

<template>
  <div></div>
  <vue-markdown-it v-if="source" :source="source" />
</template>
