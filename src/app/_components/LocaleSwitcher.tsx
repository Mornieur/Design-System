'use client';

import {useLocale} from 'next-intl';
import {useParams} from 'next/navigation';
import {usePathname, useRouter} from '@/i18n/navigation';
import type {AppLocale} from '@/i18n/routing';

const locales: AppLocale[] = ['en', 'pt-BR'];

type LocaleSwitcherProps = {
  labels: Record<AppLocale, string>;
  ariaLabel: string;
};

export default function LocaleSwitcher({
  labels,
  ariaLabel
}: LocaleSwitcherProps) {
  const locale = useLocale() as AppLocale;
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();

  return (
    <div className="locale-switcher" role="group" aria-label={ariaLabel}>
      {locales.map((entry) => {
        const isActive = entry === locale;

        return (
          <button
            key={entry}
            type="button"
            className="locale-switcher-button"
            aria-pressed={isActive}
            onClick={() => {
              router.replace(
                // The current route always owns the current params.
                // @ts-expect-error next-intl validates the tuple for us.
                {pathname, params},
                {locale: entry}
              );
            }}
          >
            {labels[entry]}
          </button>
        );
      })}
    </div>
  );
}
