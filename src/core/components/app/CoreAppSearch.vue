<script lang="ts" setup>
import { useMagicKeys, whenever } from '@vueuse/core';

const searchOverlay = useSearchOverlay();
const { search, pages } = useSearch();
const { isMac } = useUserAgent();
const target = ref();

const { ctrl_k, escape, cmd_k } = useMagicKeys({
  passive: false,
  onEventFired(e) {
    if (
      (e.ctrlKey || (isMac && e.metaKey)) &&
      e.key === 'k' &&
      e.type === 'keydown'
    )
      e.preventDefault();
  },
});

whenever(
  () => ctrl_k.value || (cmd_k.value && isMac.value),
  () => searchOverlay.toggle(),
);
whenever(escape, () => {
  if (searchOverlay.isVisible) searchOverlay.hide();
});
</script>

<template>
  <CoreOverlay v-model="searchOverlay.isVisible" width="600px">
    <core-sheet
      ref="target"
      class="h-full w-full flex flex-col items-center rounded pb-0 shadow"
    >
      <div class="h-auto w-full flex border-b pb-2 bg-surface">
        <CoreInput
          v-model="search"
          name="Search"
          placeholder="search"
          icon="i-ph-magnifying-glass"
          auto-focus
          autocomplete="off"
          class="w-full"
        />
        <core-btn icon="icon-close" @click="searchOverlay.hide" />
      </div>
      <div class="h-full w-full overflow-x-hidden overflow-y-auto pt-4">
        <CoreAppSearchList
          v-if="search.length && pages.length"
          :pages="pages"
          class="mb-4"
          @click="searchOverlay.hide"
        />
        <p v-else-if="search.length">No results match your search.</p>
        <p v-else>Start typing to find pages.</p>
      </div>
    </core-sheet>
  </CoreOverlay>
</template>
