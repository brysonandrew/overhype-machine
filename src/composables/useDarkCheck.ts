// composables/useDarkCheck.ts
import { useColorMode } from '#imports';
import { ref, watchEffect } from 'vue';

const isDark = ref<boolean | null>(null);

export const useDarkCheck = () => {
  const colorMode = useColorMode();

  watchEffect(
    () => {
      isDark.value = colorMode.preference === 'dark';
    },
    { flush: 'post' },
  );

  return isDark;
};
