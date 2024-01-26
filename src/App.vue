<script lang="ts" setup>
import { useHead } from '@unhead/vue';

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
  <div class="relative m-a max-w-200 min-h-screen fe-border-x bg-base">
    <core-app-header />
    <main style="padding-bottom: 100px">
      <RouterView />
    </main>
    <CoreFooter class="absolute bottom-0" />
    <core-toast />
  </div>
  <CoreAppSearch />
</template>
