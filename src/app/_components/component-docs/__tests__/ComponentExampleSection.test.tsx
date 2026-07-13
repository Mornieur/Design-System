import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import ComponentExampleSection from '../ComponentExampleSection';
import { getComponentEntry } from '@/app/_content/components';

describe('ComponentExampleSection', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  function mockClipboard(writeText: ReturnType<typeof vi.fn>) {
    Object.defineProperty(navigator, 'clipboard', {
      configurable: true,
      value: { writeText }
    });
  }

  it('renders the preview tab by default and loads the example renderer', async () => {
    const entry = getComponentEntry('button');

    if (!entry) {
      throw new Error('button entry missing');
    }

    render(
      <ComponentExampleSection
        componentSlug={entry.slug}
        example={entry.examples[0]}
        storybookUrl={entry.storybook.url}
      />
    );

    expect(screen.getByRole('tab', { name: 'Preview' })).toHaveAttribute('aria-selected', 'true');
    expect(await screen.findByRole('button', { name: 'Deploy service' })).toBeVisible();
  });

  it('switches between preview and code panels', async () => {
    const user = userEvent.setup();
    const entry = getComponentEntry('button');

    if (!entry) {
      throw new Error('button entry missing');
    }

    render(
      <ComponentExampleSection
        componentSlug={entry.slug}
        example={entry.examples[0]}
        storybookUrl={entry.storybook.url}
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

    const entry = getComponentEntry('button');

    if (!entry) {
      throw new Error('button entry missing');
    }

    render(
      <ComponentExampleSection
        componentSlug={entry.slug}
        example={entry.examples[0]}
        storybookUrl={entry.storybook.url}
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

    const entry = getComponentEntry('button');

    if (!entry) {
      throw new Error('button entry missing');
    }

    render(
      <ComponentExampleSection
        componentSlug={entry.slug}
        example={entry.examples[0]}
        storybookUrl={entry.storybook.url}
      />
    );

    await user.click(screen.getByRole('button', { name: 'Copy code' }));

    await waitFor(() => {
      expect(screen.getByRole('button', { name: 'Copy failed' })).toBeVisible();
    });
  });

  it('renders accessible links for the isolated example and Storybook', () => {
    const entry = getComponentEntry('card');

    if (!entry) {
      throw new Error('card entry missing');
    }

    render(
      <ComponentExampleSection
        componentSlug={entry.slug}
        example={entry.examples[0]}
        storybookUrl={entry.storybook.url}
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
