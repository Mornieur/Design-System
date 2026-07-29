import {getLocale, getTranslations} from 'next-intl/server';
import LocaleSwitcher from '@/app/_components/LocaleSwitcher';
import MobileNav from '@/app/_components/MobileNav';
import ThemeToggle from '@/app/_components/ThemeToggle';
import {getMainNavigation} from '@/app/_content/navigation';
import {getSiteMetadata} from '@/app/_content/site';
import {getStorybookUrl} from '@/app/_content/urls';
import {Link} from '@/i18n/navigation';

export default async function SiteHeader() {
  const locale = (await getLocale()) as 'en' | 'pt-BR';
  const siteMetadata = getSiteMetadata(locale);
  const navigation = getMainNavigation(locale);
  const storybookUrl = getStorybookUrl();
  const t = await getTranslations();

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link
          href="/"
          className="brand-block"
          aria-label={`${siteMetadata.shortTitle} home`}
        >
          <span className="brand-mark">{siteMetadata.shortTitle}</span>
          <span className="brand-caption">{siteMetadata.tagline}</span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <LocaleSwitcher
            ariaLabel={t('header.localeSwitcher')}
            labels={{en: 'EN', 'pt-BR': 'PT'}}
          />
          <a
            className="header-link"
            href="https://github.com/Mornieur/design-system"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="header-link"
            href="https://www.npmjs.com/package/@feitoza-ui/core"
            target="_blank"
            rel="noreferrer"
          >
            {t('common.npm')}
          </a>
          {storybookUrl ? (
            <a
              className="header-link"
              href={storybookUrl}
              target="_blank"
              rel="noreferrer"
            >
              {t('common.storybook')}
            </a>
          ) : null}
          <ThemeToggle />
          <MobileNav items={navigation} storybookUrl={storybookUrl} />
        </div>
      </div>
    </header>
  );
}
