import type { MaybeRefOrGetter } from 'vue';

export function useInputFocusClasses(focused: MaybeRefOrGetter<boolean>) {
  return computed(() => ({
    'border-primary': toValue(focused),
    'border-selection': !toValue(focused),
  }));
}
