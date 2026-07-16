import {getLocale, getTranslations} from 'next-intl/server';
import {getFooterNavigation} from '@/app/_content/navigation';
import {Link} from '@/i18n/navigation';

export default async function SiteFooter() {
  const locale = (await getLocale()) as 'en' | 'pt-BR';
  const footerNavigation = getFooterNavigation(locale);
  const t = await getTranslations();

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <strong className="footer-wordmark">FeitozaUI</strong>
        <nav className="footer-links" aria-label="Footer">
          {footerNavigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <a
            href="https://github.com/Mornieur/design-system"
            target="_blank"
            rel="noreferrer"
          >
            {t('common.github')}
          </a>
        </nav>
      </div>
    </footer>
  );
}
