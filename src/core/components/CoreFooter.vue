<script lang="ts" setup>
import dayjs from 'dayjs';
</script>

<template>
  <footer class="flex items-center px-4 text-sm prose w-full max-w-full">
    <p class="op-70 dark:op-50">
      &#169; {{ dayjs().format('YYYY') }}
      <a
        xmlns:cc="http://creativecommons.org/ns#"
        href="freedomevenden.com"
        property="cc:attributionName"
        rel="cc:attributionURL"
        >{{ ' ' }}
        Freedom Evenden
        {{ ' ' }}
      </a>
      -
      <span xmlns:dct="http://purl.org/dc/terms/" property="dct:title">
        Website text and images
      </span>
      are licensed under
      <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
        CC-BY-NC-SA-4.0
      </a>
      .
    </p>
  </footer>
</template>
