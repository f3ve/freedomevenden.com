export function useVisibility() {
  const isVisible = ref(false);

  function show() {
    isVisible.value = true;
  }

  function hide() {
    isVisible.value = false;
  }

  return {
    show,
    isVisible,
    hide,
  };
}
