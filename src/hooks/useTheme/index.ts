import { useBoolean } from '@/hooks';
import { IconMoon, IconSun } from '@arco-design/web-vue/es/icon';
import { computed, watchEffect } from 'vue';

const THEME_KEY = 'arco-theme';
const DARK_THEME = 'dark';
const LIGHT_THEME = 'light';

function useTheme() {
  const localTheme = localStorage.getItem(THEME_KEY) === DARK_THEME ? DARK_THEME : LIGHT_THEME;
  const { boolean: isDark, toggle, setFalse, setTrue } = useBoolean(localTheme === DARK_THEME);
  const themeIcon = computed(() => (isDark.value ? IconSun : IconMoon));
  watchEffect(() => {
    if (isDark.value) {
      document.body.setAttribute(THEME_KEY, DARK_THEME);
      localStorage.setItem(THEME_KEY, DARK_THEME);
    } else {
      document.body.removeAttribute(THEME_KEY);
      localStorage.setItem(THEME_KEY, LIGHT_THEME);
    }
  });
  return {
    isDark,
    themeIcon,
    themeToggle: toggle,
  };
}

export default useTheme;
