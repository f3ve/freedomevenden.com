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
  <div class="relative m-a min-h-screen">
    <CoreAppHeader />
    <main style="padding-bottom: 100px" class="min-h-full">
      <RouterView #="{ Component }">
        <Transition name="fade">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </main>
    <CoreFooter class="absolute bottom-0" />
    <core-toast />
  </div>
</template>
