export const useSearchOverlay = defineStore('searchOverlay', () => {
  const { isVisible, show, hide } = useVisibility();

  return {
    isVisible,
    show,
    hide,
  };
});
