<script lang="ts" setup>
const props = defineProps<{
  modelValue: string;
  placeholder: string;
}>();

const emits = defineEmits<{
  // eslint-disable-next-line no-unused-vars
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
    class="cursor-text border rounded-lg bg-white pa-2 outline-none transition-colors dark:bg-dark-800"
    :class="{
      'border-gray-700': focused,
      'dark:border-gray-400': focused,
      'border-gray-200': !focused,
      'dark:border-dark-300': !focused,
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
        class="w-full outline-none dark:bg-dark-800"
        :placeholder="placeholder"
        @focus="focused = true"
        @blur="focused = false"
      />
    </div>
  </div>
</template>
