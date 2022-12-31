import { IconMoon, IconSun } from "@arco-design/web-vue/es/icon";
import { computed } from "vue";
import { useLocalStorageState } from "@/hooks";

const THEME_KEY = "arco-theme";
const DARK_THEME = "dark";
const LIGHT_THEME = "light";

function useTheme() {
  const theme = useLocalStorageState(THEME_KEY, {
    defaultValue: LIGHT_THEME,
  });
  const isDark = computed(() => theme.value === DARK_THEME);
  const themeIcon = computed(() => (isDark.value ? IconSun : IconMoon));
  const themeToggle = () => {
    theme.value = isDark.value ? LIGHT_THEME : DARK_THEME;
    themeEffect();
  };
  const themeEffect = () => {
    if (isDark.value) {
      document.body.setAttribute(THEME_KEY, DARK_THEME);
      localStorage.setItem(THEME_KEY, DARK_THEME);
    } else {
      document.body.removeAttribute(THEME_KEY);
      localStorage.setItem(THEME_KEY, LIGHT_THEME);
    }
  };
  themeEffect();
  return {
    isDark,
    themeIcon,
    themeToggle,
  };
}

export default useTheme;
