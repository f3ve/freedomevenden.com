<script lang="ts" setup>
import type { RouteRecordRaw } from 'vue-router/auto';

const props = defineProps<{ route: RouteRecordRaw }>();
const name = computed(() => formatName(props.route.path));
const $details = ref<HTMLDetailsElement>();
const isOpen = ref(false);

function formatName(name: string) {
  return name.charAt(0).toUpperCase() + name.substring(1).replace(/-/g, ' ');
}

function onClick() {
  if ($details.value) {
    $details.value.open = !$details.value.open;
    nextTick(() => {
      isOpen.value = !!$details.value?.open;
    });
  }
}
</script>

<template>
  <li>
    <details v-if="route.children?.length" ref="$details">
      <CoreBtn
        tag-name="summary"
        style="width: fit-content"
        @click.prevent="onClick"
      >
        <template #icon="props">
          <i
            v-bind="props"
            :class="[
              'i-mdi-chevron-right',
              'transition-transform',
              { 'rotate-90': isOpen },
            ]"
          />
        </template>
        {{ name }}
      </CoreBtn>
      <ul :class="['ml-4', 'list-none']">
        <KnowledgeNavListItem
          v-for="r in route.children"
          :key="r.name"
          :route="r"
        />
      </ul>
    </details>
    <CoreBtn v-else :to="route" underline style="width: fit-content">{{
      name
    }}</CoreBtn>
  </li>
</template>
