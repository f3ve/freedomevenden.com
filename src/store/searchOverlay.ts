export const useSearchOverlay = defineStore('searchOverlay', () => {
  const { isVisible, show, hide } = useVisibility();

  function toggle() {
    isVisible.value ? hide() : show();
  }

  return {
    isVisible,
    show,
    hide,
    toggle,
  };
});
