import {
  onClickOutside,
  type MaybeElement,
  type OnClickOutsideHandler,
  type OnClickOutsideOptions,
} from '@vueuse/core';

export function useOnClickOutside(
  cb: OnClickOutsideHandler,
  options?: OnClickOutsideOptions,
) {
  const target = ref<MaybeElement>();
  onClickOutside(target, cb, options);

  return {
    target,
  };
}
