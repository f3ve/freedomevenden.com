<script lang="ts" setup>
import type { CoreInputProps } from './types';
import { useInputFocusClasses } from './composables/useInputFocusClasses';

withDefaults(defineProps<CoreInputProps>(), {
  type: 'text',
});

const inputText = defineModel<string>();
const { target, focused, focus } = useFocus();
const classes = useInputFocusClasses(focused);
</script>

<template>
  <div>
    <label v-if="label" :for="label" class="mb-1 block text-link">
      {{ label }}
    </label>
    <div
      class="cursor-text border rounded-lg pa-2 outline-none transition-colors bg-selection"
      :class="classes"
      @click="focus"
    >
      <div class="flex items-center">
        <div v-if="icon" class="mr-2" :class="icon"></div>
        <textarea
          :id="label"
          ref="target"
          v-model="inputText"
          :type="type"
          class="w-full outline-none bg-selection"
          :placeholder="placeholder"
          :name="name"
          :required="required"
          rows="5"
          :autocomplete="autocomplete"
          @focus="focused = true"
          @blur="focused = false"
        />
      </div>
    </div>
  </div>
</template>
