'use client';

import { useState } from 'react';

const storageKey = 'feitozaui-docs-theme';

type ThemeMode = 'dark' | 'light';

function getResolvedTheme(): ThemeMode {
  if (typeof document !== 'undefined') {
    const theme = document.documentElement.dataset.theme;

    if (theme === 'dark' || theme === 'light') {
      return theme;
    }
  }

  return 'dark';
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<ThemeMode>(() => getResolvedTheme());

  function handleToggle() {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';

    document.documentElement.dataset.theme = nextTheme;
    document.documentElement.style.colorScheme = nextTheme;
    window.localStorage.setItem(storageKey, nextTheme);
    setTheme(nextTheme);
  }

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={handleToggle}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
    >
      {theme === 'dark' ? 'Light' : 'Dark'}
    </button>
  );
}
