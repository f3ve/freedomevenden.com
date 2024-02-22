export const useToastStore = defineStore('toast', () => {
  const isVisible = ref(false);
  const text = ref('');
  const color = ref<'success' | 'error'>('success');

  function show(message: string, type?: 'success' | 'error') {
    type = type ? type : 'success';

    color.value = type;
    text.value = message;
    isVisible.value = true;
  }

  function hide() {
    isVisible.value = false;
    text.value = '';
  }

  return {
    isVisible,
    text,
    color,
    show,
    hide,
  };
});
