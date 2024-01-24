<script lang="ts" setup>
import type { RouteRecordRaw } from 'vue-router/auto';

const props = defineProps<{ route: RouteRecordRaw }>();
const name = computed(() => formatName(props.route.path));
const $details = ref<HTMLDetailsElement>();
const isOpen = ref(false);
const height = ref(`-${(props.route.children?.length || 0) * 32}px`); //32px is the default height of buttons

const content = ref<HTMLDivElement>();

function formatName(name: string) {
  return name.charAt(0).toUpperCase() + name.substring(1).replace(/-/g, ' ');
}

function onClick() {
  if ($details.value) {
    const { open } = $details.value;

    if (content.value) {
      height.value = content.value.offsetHeight
        ? `-${content.value.offsetHeight}px`
        : height.value;
    }

    if (open) {
      isOpen.value = false;

      setTimeout(() => {
        if ($details.value) $details.value.open = !open;
      }, 350);
    }

    if (!open) {
      isOpen.value = true;
      $details.value.open = !open;
    }
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
      <div ref="content" class="h-full overflow-hidden">
        <transition name="expand">
          <ul v-show="isOpen" :class="['ml-4', 'list-none', 'h-full', 'mt-0']">
            <WikiNavListItem
              v-for="r in route.children"
              :key="r.name"
              :route="r"
            />
          </ul>
        </transition>
      </div>
    </details>
    <CoreBtn v-else :to="route" underline style="width: fit-content">
      {{ name }}
    </CoreBtn>
  </li>
</template>

<style scoped>
.expand-enter-active,
.expand-leave-active {
  transition: all 0.15s ease-in-out;
}

.expand-enter-from,
.expand-leave-to {
  margin-top: v-bind(height);
}
</style>
