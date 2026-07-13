import Link from 'next/link';
import MobileNav from '@/app/_components/MobileNav';
import ThemeToggle from '@/app/_components/ThemeToggle';
import { mainNavigation } from '@/app/_content/navigation';
import { siteMetadata } from '@/app/_content/site';

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link href="/" className="brand-block" aria-label={`${siteMetadata.shortTitle} home`}>
          <span className="brand-meta">Docs node / static surface</span>
          <span className="brand-line">
            <span className="brand-mark">{siteMetadata.shortTitle}</span>
            <span className="brand-node">v0.1</span>
          </span>
          <span className="brand-caption">{siteMetadata.tagline}</span>
        </Link>

        <nav className="desktop-nav" aria-label="Primary">
          {mainNavigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <div className="header-status" aria-label="Documentation shell status">
            <span className="status-dot status-dot-live" aria-hidden="true" />
            <span>Docs shell online</span>
          </div>
          <ThemeToggle />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
