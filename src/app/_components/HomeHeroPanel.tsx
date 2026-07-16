import {Link} from '@/i18n/navigation';

type Highlight = {
  label: string;
  value: string;
};

type HomeHeroPanelProps = {
  heroTitle: string;
  description: string;
  highlights: readonly Highlight[];
  shortTitle: string;
  supportingCopy: string;
  actions: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
  why: {
    eyebrow: string;
    title: string;
    body: string;
    items: readonly string[];
  };
  firstSteps: {
    eyebrow: string;
    title: string;
    items: readonly string[];
    links: readonly [string, string, string];
  };
};

export default function HomeHeroPanel({
  heroTitle,
  description,
  highlights,
  shortTitle,
  supportingCopy,
  actions,
  why,
  firstSteps
}: HomeHeroPanelProps) {
  return (
    <section className="hero-panel hero-panel-home" aria-labelledby="home-title">
      <div className="hero-copy">
        <h1 id="home-title">
          {heroTitle} <span>{shortTitle}</span>.
        </h1>
        <p className="hero-lead">{description}</p>
        <p className="hero-supporting-copy">{supportingCopy}</p>
        <div className="hero-actions">
          <Link className="button-link button-link-primary" href="/docs/getting-started">
            {actions.primary}
          </Link>
          <Link className="button-link button-link-secondary" href="/components">
            {actions.secondary}
          </Link>
          <Link className="button-link button-link-tertiary" href="/foundations">
            {actions.tertiary}
          </Link>
        </div>
        <ul className="hero-summary-list" aria-label="Documentation highlights">
          {highlights.map((item) => (
            <li key={item.label}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </li>
          ))}
        </ul>
      </div>

      <div className="hero-rail hero-rail-landing">
        <article className="hero-card hero-card-secondary">
          <div className="hero-card-heading">
            <p className="eyebrow">{why.eyebrow}</p>
            <h2>{why.title}</h2>
          </div>
          <p>{why.body}</p>
          <ul className="bullet-list">
            {why.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>

        <article className="hero-card hero-card-secondary hero-card-checklist">
          <div className="hero-card-heading">
            <p className="eyebrow">{firstSteps.eyebrow}</p>
            <h2>{firstSteps.title}</h2>
          </div>
          <ol className="hero-checklist">
            {firstSteps.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
          <div className="hero-inline-links">
            <Link href="/docs/installation">{firstSteps.links[0]}</Link>
            <Link href="/components/button">{firstSteps.links[1]}</Link>
            <Link href="/accessibility">{firstSteps.links[2]}</Link>
          </div>
        </article>
      </div>
    </section>
  );
}
