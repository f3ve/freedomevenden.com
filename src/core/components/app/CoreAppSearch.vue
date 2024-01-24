<script lang="ts" setup>
const searchOverlay = useSearchOverlay();
</script>

<template>
  <CoreOverlay v-model="searchOverlay.isVisible">
    <core-sheet class="h-full w-full rounded shadow">
      <CoreInput
        name="Search"
        placeholder="search"
        icon="i-ph-magnifying-glass"
      />
    </core-sheet>
  </CoreOverlay>
</template>
