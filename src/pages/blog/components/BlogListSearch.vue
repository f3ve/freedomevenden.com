<script lang="ts" setup>
const props = defineProps<{
  modelValue: string;
  placeholder: string;
}>();

const emits = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();

const input = ref<HTMLInputElement | undefined>();
const focused = ref(false);

const search = computed({
  get() {
    return props.modelValue;
  },

  set(val: string) {
    emits('update:modelValue', val);
  },
});

function focusInput() {
  input.value?.focus();
}
</script>

<template>
  <div
    class="dark:bg-dark-700 cursor-text border rounded-lg bg-white pa-2 outline-none transition-colors"
    :class="{
      'border-gray-700': focused,
      'dark:border-gray-400': focused,
      'border-gray-200': !focused,
      'dark:border-dark-200': !focused,
    }"
    @click="focusInput"
  >
    <div class="flex items-center">
      <label class="invisible ma-0 block h-0 w-0 pa-0" for="search">
        Search
      </label>
      <div class="i-ph-magnifying-glass mr-2"></div>
      <input
        id="search"
        ref="input"
        v-model="search"
        class="dark:bg-dark-700 w-full outline-none"
        :placeholder="placeholder"
        @focus="focused = true"
        @blur="focused = false"
      />
    </div>
  </div>
</template>
