<script lang="ts" setup>
import dayjs from 'dayjs';
</script>

<template>
  <footer class="w-full flex items-center px-6 py-2 text-sm">
    <p class="op-70 dark:op-75">
      &#169; {{ dayjs().format('YYYY') }}
      <a
        xmlns:cc="http://creativecommons.org/ns#"
        href="freedomevenden.com"
        property="cc:attributionName"
        rel="cc:attributionURL"
        class="underline"
      >
        Freedom Evenden
      </a>
      -
      <span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">
        Website text and images
      </span>
      are licensed under
      <a
        rel="license"
        href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
        class="underline"
      >
        CC BY-NC-SA 4.0
      </a>
      .
    </p>
  </footer>
</template>
