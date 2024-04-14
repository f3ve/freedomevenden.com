<script lang="ts" setup>
import { useHead } from '@unhead/vue';
import { VNotifications } from '@f3ve/vue-notify';
import { doAThing } from './utils/generalHelpers';

onMounted(() => {
  doAThing();
});

useHead({
  title: 'Freedom Evenden',
  meta: [
    {
      name: 'description',
      content: "Freedom Evenden's personal website",
    },
    {
      name: 'og:image',
      content: 'https://freedomevenden.com/android-chrome-512x512.png',
    },
    {
      name: 'twitter:image',
      content: 'https://freedomevenden.com/android-chrome-512x512.png',
    },
    {
      name: 'twitter:card',
      content: 'summary_large_image',
    },
  ],
});
</script>

<template>
  <div class="relative m-a min-h-screen">
    <CoreAppHeader />
    <main style="padding-bottom: 100px" class="min-h-full">
      <RouterView />
    </main>
    <CoreFooter class="absolute bottom-0" />
    <VNotifications />
  </div>
</template>
