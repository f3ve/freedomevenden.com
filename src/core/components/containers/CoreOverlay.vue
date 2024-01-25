<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    width?: string | number;
    height?: string | number;
  }>(),
  {
    width: '400px',
    height: '600px',
  },
);

const isVisible = defineModel<boolean>();
const { target } = useOnClickOutside(() => (isVisible.value = false));
const { scrollElement } = useScrollLocker(isVisible);

const widthComp = computed(() =>
  typeof props.width === 'string' ? props.width : `${props.width}px`,
);

const heightComp = computed(() =>
  typeof props.height === 'string' ? props.height : `${props.height}px`,
);

onMounted(() => {
  scrollElement.value = document.body;
});
</script>

<template>
  <Transition name="fade">
    <div
      v-if="isVisible"
      class="fixed left-0 top-0 m-a h-screen w-screen flex bg-black bg-op-25 pa-4 dark:bg-op-50"
    >
      <div
        ref="target"
        class="m-a"
        :style="{ width: widthComp, height: heightComp, maxWidth: '100%' }"
      >
        <slot />
      </div>
    </div>
  </Transition>
</template>
