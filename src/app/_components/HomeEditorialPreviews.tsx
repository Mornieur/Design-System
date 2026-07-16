import ComponentCardPreview from '@/app/_components/ComponentCardPreview';
import {renderFoundationPreview} from '@/app/_components/FoundationPreview';
import type {ComponentEntry} from '@/app/_content/components';
import type {FoundationEntry} from '@/app/_content/foundations';
import {Link} from '@/i18n/navigation';

type HomeEditorialPreviewsProps = {
  componentEntries: readonly ComponentEntry[];
  featuredComponents: readonly string[];
  foundationEntries: readonly FoundationEntry[];
  content: {
    guides: {
      eyebrow: string;
      title: string;
      body: string;
      cards: readonly (readonly [string, string])[];
    };
    foundations: {
      eyebrow: string;
      title: string;
      body: string;
    };
    components: {
      eyebrow: string;
      title: string;
      body: string;
    };
  };
};

export default function HomeEditorialPreviews({
  componentEntries,
  featuredComponents,
  foundationEntries,
  content
}: HomeEditorialPreviewsProps) {
  const featuredComponentSlugs = new Set<string>(featuredComponents);

  return (
    <>
      <section className="section-stack" aria-labelledby="home-guides">
        <div className="section-heading section-heading-wide">
          <p className="eyebrow">{content.guides.eyebrow}</p>
          <h2 id="home-guides">{content.guides.title}</h2>
          <p>{content.guides.body}</p>
        </div>
        <div className="card-grid card-grid-three">
          <Link className="content-card-link" href="/docs/getting-started">
            <article className="content-card">
              <h3>{content.guides.cards[0][0]}</h3>
              <p>{content.guides.cards[0][1]}</p>
            </article>
          </Link>
          <Link className="content-card-link" href="/docs/installation">
            <article className="content-card">
              <h3>{content.guides.cards[1][0]}</h3>
              <p>{content.guides.cards[1][1]}</p>
            </article>
          </Link>
          <Link className="content-card-link" href="/components">
            <article className="content-card">
              <h3>{content.guides.cards[2][0]}</h3>
              <p>{content.guides.cards[2][1]}</p>
            </article>
          </Link>
        </div>
      </section>

      <section className="section-stack" aria-labelledby="foundations-preview">
        <div className="section-heading">
          <p className="eyebrow">{content.foundations.eyebrow}</p>
          <h2 id="foundations-preview">{content.foundations.title}</h2>
          <p>{content.foundations.body}</p>
        </div>
        <div className="card-grid">
          {foundationEntries.slice(0, 4).map((entry) => (
            <Link key={entry.slug} className="content-card-link" href={`/foundations/${entry.slug}`}>
              <article className="content-card content-card-compact foundation-home-card">
                <div className="content-card-header">
                  <h3>{entry.title}</h3>
                </div>
                {renderFoundationPreview(entry.slug)}
                <p>{entry.summary}</p>
              </article>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-stack" aria-labelledby="components-preview">
        <div className="section-heading">
          <p className="eyebrow">{content.components.eyebrow}</p>
          <h2 id="components-preview">{content.components.title}</h2>
          <p>{content.components.body}</p>
        </div>
        <div className="card-grid card-grid-two">
          {componentEntries
            .filter((entry) => featuredComponentSlugs.has(entry.slug))
            .map((entry) => (
              <Link key={entry.slug} className="content-card-link" href={`/components/${entry.slug}`}>
                <article className="content-card content-card-compact">
                  <div className="content-card-header">
                    <h3>{entry.title}</h3>
                    <span className="content-card-eyebrow">{entry.kind}</span>
                  </div>
                  <ComponentCardPreview slug={entry.slug} />
                  <p>{entry.description}</p>
                </article>
              </Link>
            ))}
        </div>
      </section>
    </>
  );
}
