import Link from 'next/link';
import { footerNavigation } from '@/app/_content/navigation';

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-copy">
          <span className="footer-kicker">Documentation runtime</span>
          <strong>FeitozaUI Documentation Site</strong>
          <p>Static-first shell for architecture, foundations, package boundaries, and future expansion.</p>
        </div>
        <nav className="footer-links" aria-label="Footer">
          {footerNavigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
}
