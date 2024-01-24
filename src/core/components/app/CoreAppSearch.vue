<script lang="ts" setup>
import { useMagicKeys, whenever, onClickOutside } from '@vueuse/core';

const searchOverlay = useSearchOverlay();
const { search, pages } = useSearch();
const target = ref();

const { ctrl_k } = useMagicKeys({
  passive: false,
  onEventFired(e) {
    if (e.ctrlKey && e.key === 'k' && e.type === 'keydown') e.preventDefault();
  },
});

onClickOutside(target, () => searchOverlay.hide());

whenever(ctrl_k, () => searchOverlay.toggle());
</script>

<template>
  <CoreOverlay v-model="searchOverlay.isVisible" width="600px">
    <core-sheet
      ref="target"
      class="relative h-full w-full overflow-auto rounded shadow"
    >
      <div class="fixed z-10 w-full border-b pb-2 bg-surface">
        <CoreInput
          v-model="search"
          name="Search"
          placeholder="search"
          icon="i-ph-magnifying-glass"
          auto-focus
        />
      </div>
      <div class="h-full flex flex-col items-center pt-14">
        <ul v-if="search.length && pages.length" class="w-full">
          <CoreAppSearchResult
            v-for="page in pages"
            :key="page.path"
            :page="page"
          />
        </ul>

        <p v-else-if="search.length">No results match your search.</p>
        <p v-else>Start typing to find pages.</p>
      </div>
    </core-sheet>
  </CoreOverlay>
</template>
