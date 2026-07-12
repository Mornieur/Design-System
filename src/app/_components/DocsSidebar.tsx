'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { docsNavigation } from '@/app/_content/navigation';

export default function DocsSidebar() {
  const pathname = usePathname();
  const totalItems = docsNavigation.reduce((count, group) => count + group.items.length, 0);

  function getNavId(href: string) {
    return href.replaceAll('/', '.').replace(/^\./, 'root.');
  }

  return (
    <aside className="docs-sidebar" aria-label="Documentation navigation">
      <div className="sidebar-intro">
        <p className="sidebar-kicker">Documentation index</p>
        <h2>Static navigation model</h2>
        <ul className="sidebar-stat-list" aria-label="Sidebar overview">
          <li>
            <span>Tracked routes</span>
            <strong>{totalItems}</strong>
          </li>
          <li>
            <span>Primary behavior docs</span>
            <strong>Storybook</strong>
          </li>
        </ul>
      </div>

      {docsNavigation.map((group) => (
        <section key={group.title} className="sidebar-group">
          <div className="sidebar-group-header">
            <h2>{group.title}</h2>
            <span>{group.items.length}</span>
          </div>
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
                    <span className="sidebar-link-id">{getNavId(item.href)}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </section>
      ))}

      <div className="docs-sidebar-note">
        <strong>Runtime boundary</strong>
        <p>
          This surface intentionally avoids search, CMS, MDX runtime, remote content,
          and Storybook duplication in its first implementation.
        </p>
      </div>
    </aside>
  );
}
