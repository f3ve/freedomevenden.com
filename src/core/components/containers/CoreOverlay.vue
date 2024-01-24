<script lang="ts" setup>
import { useScrollLock } from '@vueuse/core';

const props = withDefaults(
  defineProps<{
    modelValue: boolean;
    width?: string | number;
    height?: string | number;
  }>(),
  {
    width: '400px',
    height: '600px',
  },
);

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
}>();

const scrollElement = ref<HTMLElement>();

const isLocked = useScrollLock(scrollElement);

const isVisible = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val),
});

const widthComp = computed(() =>
  typeof props.width === 'string' ? props.width : `${props.width}px`,
);

const heightComp = computed(() =>
  typeof props.height === 'string' ? props.height : `${props.height}px`,
);

onMounted(() => {
  scrollElement.value = document.body;
});

watch(isVisible, (value) => (isLocked.value = value));
</script>

<template>
  <Transition name="fade">
    <div
      v-if="isVisible"
      class="fixed left-0 top-0 m-a h-screen w-screen flex bg-black bg-op-25 pa-4 dark:bg-op-50"
    >
      <div
        class="m-a"
        :style="{ width: widthComp, height: heightComp, maxWidth: '100%' }"
      >
        <slot />
      </div>
    </div>
  </Transition>
</template>
