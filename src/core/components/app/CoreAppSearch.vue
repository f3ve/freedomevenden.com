<script lang="ts" setup>
const searchOverlay = useSearchOverlay();
const { search, pages } = useSearch();
</script>

<template>
  <CoreOverlay v-model="searchOverlay.isVisible">
    <core-sheet class="h-full w-full overflow-hidden rounded shadow">
      <CoreInput
        v-model="search"
        name="Search"
        placeholder="search"
        icon="i-ph-magnifying-glass"
      />
      <div class="h-full flex flex-col items-center overflow-auto pt-4">
        <ul v-if="search.length && pages.length" class="w-full">
          <CorePostListItem
            v-for="page in pages"
            :key="page.path"
            :post="page"
          />
        </ul>

        <p v-else-if="search.length">No results match your search.</p>
        <p v-else>Start typing to find pages.</p>
      </div>
    </core-sheet>
  </CoreOverlay>
</template>
