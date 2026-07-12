'use client';

import Link from 'next/link';
import Badge from '@/components/atoms/Badge';
import Card from '@/components/molecules/Card';
import type { ComponentEntry } from '@/app/_content/components';

type ComponentsCatalogProps = {
  entries: ComponentEntry[];
};

export default function ComponentsCatalog({ entries }: ComponentsCatalogProps) {
  return (
    <div className="card-grid card-grid-two">
      {entries.map((entry) => (
        <Link key={entry.slug} className="content-card-link" href={`/components/${entry.slug}`}>
          <Card className="content-card elevated-card">
            <div className="content-card-header">
              <h2>{entry.title}</h2>
              <Badge size="sm" variant={entry.kind === 'Atom' ? 'primary' : 'info'}>
                {entry.kind}
              </Badge>
            </div>
            <p>{entry.summary}</p>
            <span className="content-card-meta">{entry.storybookStatus}</span>
          </Card>
        </Link>
      ))}
    </div>
  );
}
