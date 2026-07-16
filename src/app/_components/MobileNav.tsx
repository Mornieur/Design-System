import {useTranslations} from 'next-intl';
import type {NavItem} from '@/app/_content/navigation';
import {Link} from '@/i18n/navigation';

type MobileNavProps = {
  items: NavItem[];
};

export default function MobileNav({items}: MobileNavProps) {
  const t = useTranslations();

  return (
    <div className="mobile-nav">
      <details>
        <summary className="mobile-nav-summary">{t('common.menu')}</summary>
        <div className="mobile-nav-panel">
          {items.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <a
            href="https://github.com/Mornieur/design-system"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </details>
    </div>
  );
}
