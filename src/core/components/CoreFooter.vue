<script lang="ts" setup>
import dayjs from 'dayjs';
</script>

<template>
  <footer
    class="w-full flex items-center justify-center px-16 py-2 text-center text-sm"
  >
    <p class="op-70 dark:op-75">
      &#169; {{ dayjs().format('YYYY') }}
      <a
        xmlns:cc="http://creativecommons.org/ns#"
        href="freedomevenden.com"
        property="cc:attributionName"
        rel="cc:attributionURL"
        class="underline"
        target="_blank"
        referrerpolicy="no-referrer"
      >
        Freedom Evenden
      </a>
      <br />
      <span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">
        Text and images
      </span>
      are licensed under
      <a
        rel="license"
        href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
        class="underline"
        target="_blank"
        referrerpolicy="no-referrer"
      >
        CC BY-NC-SA 4.0
      </a>
      .
    </p>
  </footer>
</template>
