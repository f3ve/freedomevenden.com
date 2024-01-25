<script lang="ts" setup>
import { useMagicKeys, whenever } from '@vueuse/core';

const searchOverlay = useSearchOverlay();
const { search, pages } = useSearch();
const target = ref();

const { ctrl_k } = useMagicKeys({
  passive: false,
  onEventFired(e) {
    if (e.ctrlKey && e.key === 'k' && e.type === 'keydown') e.preventDefault();
  },
});

whenever(ctrl_k, () => searchOverlay.toggle());
</script>

<template>
  <CoreOverlay v-model="searchOverlay.isVisible" width="600px">
    <core-sheet
      ref="target"
      class="h-full w-full flex flex-col items-center rounded shadow"
    >
      <div class="h-auto w-full border-b pb-2 bg-surface">
        <CoreInput
          v-model="search"
          name="Search"
          placeholder="search"
          icon="i-ph-magnifying-glass"
          auto-focus
          autocomplete="off"
        />
      </div>
      <div class="h-full overflow-auto pt-4">
        <CoreAppSearchList
          v-if="search.length && pages.length"
          :pages="pages"
        />
        <p v-else-if="search.length">No results match your search.</p>
        <p v-else>Start typing to find pages.</p>
      </div>
    </core-sheet>
  </CoreOverlay>
</template>
