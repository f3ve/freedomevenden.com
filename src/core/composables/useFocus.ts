import type { MaybeRefOrGetter } from 'vue';

export function useFocus(autoFocus?: MaybeRefOrGetter<boolean>) {
  const target = ref();
  const focused = ref(false);

  function focus() {
    target.value?.focus();
  }

  onMounted(() => {
    if (toValue(autoFocus)) focus();
  });

  return {
    focus,
    target,
    focused,
  };
}
