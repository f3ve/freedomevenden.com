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
  <div class="relative m-a min-h-screen w-screen fe-border-x bg-base">
    <core-app-header class="m-w-screen" />
    <main class="min-h-screen" style="padding-bottom: 100px">
      <RouterView />
      <!-- <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view> -->
    </main>
    <CoreFooter class="absolute bottom-0" />
    <core-toast />
  </div>
</template>
