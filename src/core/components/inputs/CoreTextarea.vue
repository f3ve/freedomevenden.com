<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    modelValue?: string;
    placeholder?: string;
    label?: string;
    icon?: string;
    type?: string;
    name?: string;
    required?: boolean;
  }>(),
  {
    type: 'text',
  },
);

const emits = defineEmits<{
  (e: 'update:modelValue', value?: string): void;
}>();

const input = ref<HTMLInputElement | undefined>();
const focused = ref(false);

const inputText = computed({
  get() {
    return props.modelValue;
  },

  set(val?: string) {
    emits('update:modelValue', val);
  },
});

function focusInput() {
  input.value?.focus();
}
</script>

<template>
  <div>
    <label v-if="label" :for="label" class="mb-1 block">
      {{ label }}
    </label>
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
        <div v-if="icon" class="mr-2" :class="icon"></div>
        <textarea
          :id="label"
          ref="input"
          v-model="inputText"
          :type="type"
          class="w-full outline-none dark:bg-dark-800"
          :placeholder="placeholder"
          :name="name"
          :required="required"
          rows="5"
          @focus="focused = true"
          @blur="focused = false"
        />
      </div>
    </div>
  </div>
</template>
