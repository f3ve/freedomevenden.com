<route lang="yaml">
name: post
</route>

<script lang="ts" setup>
import { getPostBySlug } from '@/services/api/posts';
const route = useRoute();

const source = ref();

onServerPrefetch(async () => {
  await getData();
  window[`pageSource${route.params.slug}`] = source.value;
});

onMounted(async () => {
  // Will only run client side when source was not fetched on the server side
  source.value = window[`pageSource${route.params.slug}`];
  if (!source.value) await getData();
});

async function getData() {
  if (typeof route.params.slug === 'string')
    try {
      const res = await getPostBySlug(route.params.slug);
      if (res.data) {
        source.value = res.data.data[0].attributes.body;
      }
    } catch (err) {}
}
</script>

<template>
  <div></div>
  <vue-markdown-it v-if="source" :source="source" />
</template>
