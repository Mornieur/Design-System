'use client';

import {useLocale} from 'next-intl';
import Surface from '@/components/atoms/Surface';
import {renderFoundationPreview} from '@/app/_components/FoundationPreview';
import type { FoundationEntry } from '@/app/_content/foundations';
import {Link} from '@/i18n/navigation';

type FoundationsCatalogProps = {
  entries: FoundationEntry[];
};

export default function FoundationsCatalog({
  entries
}: FoundationsCatalogProps) {
  const locale = useLocale();

  return (
    <div className="card-grid">
      {entries.map((entry) => (
        <Link
          key={entry.slug}
          className="content-card-link"
          href={`/foundations/${entry.slug}`}
        >
          <Surface className="content-card content-card-compact foundation-catalog-card">
            <div className="content-card-header">
              <h2>{entry.title}</h2>
            </div>
            {renderFoundationPreview(entry.slug)}
            <p>{entry.summary}</p>
            <span className="content-card-link-row">
              {locale === 'pt-BR' ? 'Abrir fundamento' : 'Open foundation'}
            </span>
          </Surface>
        </Link>
      ))}
    </div>
  );
}
