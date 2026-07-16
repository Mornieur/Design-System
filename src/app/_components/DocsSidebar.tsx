'use client';

import {useLocale, useTranslations} from 'next-intl';
import { usePathname } from 'next/navigation';
import {getDocsNavigation} from '@/app/_content/navigation';
import {Link} from '@/i18n/navigation';

export default function DocsSidebar() {
  const pathname = usePathname();
  const locale = useLocale() as 'en' | 'pt-BR';
  const t = useTranslations();
  const docsNavigation = getDocsNavigation(locale);
  const navigationContent = (
    <>
      {docsNavigation.map((group) => (
        <section key={group.title} className="sidebar-group">
          <h2>{group.title}</h2>
          <ul>
            {group.items.map((item) => {
              const isActive = pathname === item.href;

              return (
                <li key={item.href}>
                  <Link
                    className="sidebar-link"
                    href={item.href}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      ))}
    </>
  );

  return (
    <>
      <aside className="docs-sidebar docs-sidebar-desktop" aria-label="Documentation navigation">
        {navigationContent}
      </aside>
      <details className="docs-sidebar-mobile">
        <summary>{t('common.browseDocs')}</summary>
        <div className="docs-sidebar-mobile-panel">{navigationContent}</div>
      </details>
    </>
  );
}
