'use client';

import Link from 'next/link';
import Badge from '@/components/atoms/Badge';
import Surface from '@/components/atoms/Surface';
import type { FoundationEntry } from '@/app/_content/foundations';

type FoundationsCatalogProps = {
  entries: FoundationEntry[];
};

export default function FoundationsCatalog({
  entries
}: FoundationsCatalogProps) {
  return (
    <div className="card-grid">
      {entries.map((entry) => (
        <Link key={entry.slug} className="content-card-link" href={`/foundations/${entry.slug}`}>
          <Surface className="content-card">
            <div className="content-card-header">
              <h2>{entry.title}</h2>
              <Badge size="sm" outlined>
                {entry.status}
              </Badge>
            </div>
            <p>{entry.summary}</p>
            <span className="content-card-meta">{entry.references.join(' · ')}</span>
          </Surface>
        </Link>
      ))}
    </div>
  );
}
