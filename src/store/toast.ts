export const useToastStore = defineStore('toast', () => {
  const isVisible = ref(false);
  const text = ref('');

  function show(message: string) {
    isVisible.value = true;
    text.value = message;
  }

  function hide() {
    isVisible.value = true;
    text.value = '';
  }

  return {
    isVisible,
    text,
    show,
    hide,
  };
});
