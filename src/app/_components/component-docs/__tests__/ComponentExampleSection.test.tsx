import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {NextIntlClientProvider} from 'next-intl';
import type {AnchorHTMLAttributes, ReactNode} from 'react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

vi.mock('@/i18n/navigation', () => ({
  Link: ({
    href,
    children,
    ...props
  }: AnchorHTMLAttributes<HTMLAnchorElement> & {href: string}) => (
    <a href={href} {...props}>
      {children}
    </a>
  )
}));

import ComponentExampleSection from '../ComponentExampleSection';
import { getComponentEntry } from '@/app/_content/components';

describe('ComponentExampleSection', () => {
  const locale = 'en' as const;
  const messages = {
    common: {
      home: 'Home',
      menu: 'Menu',
      storybook: 'Storybook',
      github: 'GitHub',
      browseDocs: 'Browse docs',
      backToDocs: 'Back to docs',
      returnHome: 'Return home'
    },
    header: {
      localeSwitcher: 'Select language',
      themeSwitcher: 'Switch to {theme} theme',
      themes: {
        light: 'Light',
        dark: 'Dark'
      }
    }
  };

  beforeEach(() => {
    vi.restoreAllMocks();
  });

  function mockClipboard(writeText: ReturnType<typeof vi.fn>) {
    Object.defineProperty(navigator, 'clipboard', {
      configurable: true,
      value: { writeText }
    });
  }

  function renderWithIntl(ui: ReactNode) {
    return render(
      <NextIntlClientProvider locale={locale} messages={messages}>
        {ui}
      </NextIntlClientProvider>
    );
  }

  it('renders the preview tab by default and loads the example renderer', async () => {
    const entry = getComponentEntry(locale, 'button');

    if (!entry?.storybook) {
      throw new Error('button entry missing');
    }

    renderWithIntl(
      <ComponentExampleSection
        componentSlug={entry.slug}
        example={entry.examples[0]}
        storybookUrl={entry.storybook.url}
        locale={locale}
      />
    );

    expect(screen.getByRole('tab', { name: 'Preview' })).toHaveAttribute('aria-selected', 'true');
    expect(await screen.findByRole('button', { name: 'Deploy service' })).toBeVisible();
  });

  it('switches between preview and code panels', async () => {
    const user = userEvent.setup();
    const entry = getComponentEntry(locale, 'button');

    if (!entry?.storybook) {
      throw new Error('button entry missing');
    }

    renderWithIntl(
      <ComponentExampleSection
        componentSlug={entry.slug}
        example={entry.examples[0]}
        storybookUrl={entry.storybook.url}
        locale={locale}
      />
    );

    await user.click(screen.getByRole('tab', { name: 'Code' }));

    expect(screen.getByRole('tab', { name: 'Code' })).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByText(/<Button>Deploy service<\/Button>/)).toBeVisible();
  });

  it('copies example code successfully', async () => {
    const user = userEvent.setup();
    const writeText = vi.fn().mockResolvedValue(undefined);
    mockClipboard(writeText);

    const entry = getComponentEntry(locale, 'button');

    if (!entry?.storybook) {
      throw new Error('button entry missing');
    }

    renderWithIntl(
      <ComponentExampleSection
        componentSlug={entry.slug}
        example={entry.examples[0]}
        storybookUrl={entry.storybook.url}
        locale={locale}
      />
    );

    await user.click(screen.getByRole('button', { name: 'Copy code' }));

    expect(writeText).toHaveBeenCalledWith(entry.examples[0].code);
    expect(screen.getByRole('button', { name: 'Copied' })).toBeVisible();
    expect(screen.getByText('Example code copied to clipboard.')).toBeInTheDocument();
  });

  it('reports copy failures', async () => {
    const user = userEvent.setup();
    const writeText = vi.fn().mockRejectedValue(new Error('nope'));
    mockClipboard(writeText);

    const entry = getComponentEntry(locale, 'button');

    if (!entry?.storybook) {
      throw new Error('button entry missing');
    }

    renderWithIntl(
      <ComponentExampleSection
        componentSlug={entry.slug}
        example={entry.examples[0]}
        storybookUrl={entry.storybook.url}
        locale={locale}
      />
    );

    await user.click(screen.getByRole('button', { name: 'Copy code' }));

    await waitFor(() => {
      expect(screen.getByRole('button', { name: 'Copy failed' })).toBeVisible();
    });
  });

  it('renders accessible links for the isolated example and Storybook', () => {
    const entry = getComponentEntry(locale, 'card');

    if (!entry?.storybook) {
      throw new Error('card entry missing');
    }

    renderWithIntl(
      <ComponentExampleSection
        componentSlug={entry.slug}
        example={entry.examples[0]}
        storybookUrl={entry.storybook.url}
        locale={locale}
      />
    );

    expect(screen.getByRole('link', { name: 'Open example' })).toHaveAttribute(
      'href',
      '/examples/card-related-content'
    );
    expect(screen.getByRole('link', { name: 'Storybook' })).toHaveAttribute(
      'href',
      entry.storybook.url
    );
  });
});
