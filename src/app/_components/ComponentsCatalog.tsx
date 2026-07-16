'use client';

import {useLocale} from 'next-intl';
import Card from '@/components/molecules/Card';
import type { ComponentEntry } from '@/app/_content/components';
import ComponentCardPreview from '@/app/_components/ComponentCardPreview';
import {Link} from '@/i18n/navigation';

type ComponentsCatalogProps = {
  entries: ComponentEntry[];
};

export default function ComponentsCatalog({ entries }: ComponentsCatalogProps) {
  const locale = useLocale();
  const groups = [
    {
      title: locale === 'pt-BR' ? 'Primitivos' : 'Primitives',
      entries: entries.filter((entry) => entry.kind === 'Atom')
    },
    {
      title: locale === 'pt-BR' ? 'Composição' : 'Composition',
      entries: entries.filter((entry) => entry.kind !== 'Atom')
    }
  ].filter((group) => group.entries.length > 0);

  return (
    <div className="catalog-stack">
      {groups.map((group) => (
        <section
          key={group.title}
          className="catalog-section"
          aria-labelledby={`catalog-${group.title}`}
        >
          <div className="section-heading">
            <p className="eyebrow">{locale === 'pt-BR' ? 'Categoria' : 'Category'}</p>
            <h2 id={`catalog-${group.title}`}>{group.title}</h2>
          </div>

          <div className="component-catalog-grid">
            {group.entries.map((entry) => (
              <Link
                key={entry.slug}
                className="content-card-link"
                href={`/components/${entry.slug}`}
              >
                <Card className="content-card content-card-compact component-catalog-card">
                  <div className="content-card-header component-catalog-header">
                    <span className="content-card-eyebrow">{entry.kind}</span>
                    <h3>{entry.title}</h3>
                  </div>
                  <ComponentCardPreview slug={entry.slug} />
                  <p>{entry.description}</p>
                </Card>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
