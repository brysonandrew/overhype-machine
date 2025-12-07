import { useColorMode } from '#imports';

export const useDarkToggle = () => {
  const isDark = useDarkCheck();
  const colorMode = useColorMode();

  const toggleDark = () => {
    colorMode.preference = isDark.value ? 'light' : 'dark';
  };

  return toggleDarkMode;
};
