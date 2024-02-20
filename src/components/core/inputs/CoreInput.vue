<script lang="ts" setup>
import type { CoreInputProps } from './types';
import { useInputFocusClasses } from './composables/useInputFocusClasses';

const props = withDefaults(defineProps<CoreInputProps>(), {
  type: 'text',
});

const inputText = defineModel<string>();
const { target, focused, focus } = useFocus(props.autoFocus);
const classes = useInputFocusClasses(focused);
</script>

<template>
  <div>
    <label v-if="label" :for="label" class="mb-1 block">
      {{ label }}
    </label>
    <div
      class="cursor-text border rounded-lg bg-white pa-2 outline-none transition-colors dark:bg-dark-background"
      :class="classes"
      @click="focus"
    >
      <div class="flex items-center">
        <div v-if="icon" class="mr-2" :class="icon"></div>
        <input
          :id="label"
          ref="target"
          v-model="inputText"
          :type="type"
          class="w-full outline-none dark:bg-dark-background"
          :placeholder="placeholder"
          :name="name"
          :required="required"
          :autocomplete="autocomplete"
          @focus="focused = true"
          @blur="focused = false"
        />
      </div>
    </div>
  </div>
</template>
