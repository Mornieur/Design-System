'use client';

import {useTranslations} from 'next-intl';
import { useEffect, useState } from 'react';

const storageKey = 'feitozaui-docs-theme';

type ThemeMode = 'dark' | 'light';

function applyTheme(theme: ThemeMode) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
  window.localStorage.setItem(storageKey, theme);
}

function getStoredTheme(): ThemeMode | null {
  const storedTheme = window.localStorage.getItem(storageKey);

  return storedTheme === 'dark' || storedTheme === 'light'
    ? storedTheme
    : null;
}

function getResolvedTheme(): ThemeMode {
  if (typeof window === 'undefined') {
    return 'dark';
  }

  const theme = document.documentElement.dataset.theme;

  if (theme === 'dark' || theme === 'light') {
    return theme;
  }

  return getStoredTheme() ?? 'dark';
}

export default function ThemeToggle() {
  const t = useTranslations('header');
  const [theme, setTheme] = useState<ThemeMode>(() => getResolvedTheme());

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  function handleToggle() {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';

    setTheme(nextTheme);
  }

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={handleToggle}
      aria-label={t('themeSwitcher', {
        theme:
          theme === 'dark' ? t('themes.light').toLowerCase() : t('themes.dark').toLowerCase()
      })}
    >
      {theme === 'dark' ? t('themes.light') : t('themes.dark')}
    </button>
  );
}
