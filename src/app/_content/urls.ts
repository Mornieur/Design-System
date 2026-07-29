const localStorybookUrl = 'http://localhost:6006';

function getConfiguredUrl(name: 'NEXT_PUBLIC_SITE_URL' | 'NEXT_PUBLIC_STORYBOOK_URL') {
  const value = process.env[name]?.trim();

  if (!value) {
    return undefined;
  }

  try {
    return new URL(value).toString().replace(/\/$/, '');
  } catch {
    return undefined;
  }
}

export function getSiteUrl() {
  return getConfiguredUrl('NEXT_PUBLIC_SITE_URL');
}

export function getStorybookUrl() {
  return (
    getConfiguredUrl('NEXT_PUBLIC_STORYBOOK_URL') ??
    (process.env.NODE_ENV === 'production' ? undefined : localStorybookUrl)
  );
}
