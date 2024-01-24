export const useSearchOverlay = defineStore('searchOverlay', () => {
  const { isVisible, show, hide } = useVisibility();

  return {
    show,
    isVisible,
    hide,
  };
});
