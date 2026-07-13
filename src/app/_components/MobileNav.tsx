import Link from 'next/link';
import { mainNavigation } from '@/app/_content/navigation';

export default function MobileNav() {
  return (
    <div className="mobile-nav">
      <details>
        <summary className="mobile-nav-summary">Menu</summary>
        <div className="mobile-nav-panel">
          {mainNavigation.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
      </details>
    </div>
  );
}
