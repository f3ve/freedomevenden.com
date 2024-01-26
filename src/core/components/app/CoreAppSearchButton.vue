<script lang="ts" setup>
const searchOverlay = useSearchOverlay();
const { isMac } = useUserAgent();

const icon = computed(() => (isMac.value ? 'icon-mac-cmd' : 'icon-ctrl'));
</script>

<template>
  <core-btn
    icon="icon-search"
    class="color-true-gray-500 dark:color-true-gray-300"
    @click="searchOverlay.show()"
  >
    Search
    <span class="hidden flex-row items-center sm:flex">
      <span class="ml-1 flex flex-row items-center">
        <i :class="icon"></i>
        K
      </span>
    </span>
  </core-btn>
</template>
