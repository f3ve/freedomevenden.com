import { useScrollLock } from '@vueuse/core';
import type { WatchCallback, WatchSource } from 'vue';

/**
 * Wrapper around [useScrollLock](https://vueuse.org/useScrollLock) VueUse composable. Creates a watcher on the
 * source you provide. Can optionally override the default watcher callback.
 *
 * @param source - The WatchSource
 * @param cb - Watch call back function. defaults to  `(value: boolean) => (isLocked.value = value)`
 */
export function useScrollLocker(source: WatchSource, cb?: WatchCallback) {
  const scrollElement = ref();
  const isLocked = useScrollLock(scrollElement);

  cb = cb ? cb : (value: boolean) => (isLocked.value = value);

  watch(source, cb);

  return {
    scrollElement,
  };
}
