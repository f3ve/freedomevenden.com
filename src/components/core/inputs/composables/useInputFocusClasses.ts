import type { MaybeRefOrGetter } from 'vue';

export function useInputFocusClasses(focused: MaybeRefOrGetter<boolean>) {
  return computed(() => ({
    'border-gray-700': toValue(focused),
    'dark:border-gray-400': toValue(focused),
    'fe-border': !toValue(focused),
  }));
}
