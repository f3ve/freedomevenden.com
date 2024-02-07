/**
 * Creates numerous computed props based on the [Navigator userAgent property]. SSR friendly.
 */
export function useUserAgent() {
  const userAgent =
    typeof navigator !== 'undefined' ? navigator.userAgent : undefined;

  const isMac = computed(() =>
    userAgent ? userAgent.includes('Macintosh') : false,
  );

  const isWindows = computed(() =>
    userAgent ? userAgent.includes('Windows') : false,
  );

  return {
    isMac,
    userAgent,
    isWindows,
  };
}
