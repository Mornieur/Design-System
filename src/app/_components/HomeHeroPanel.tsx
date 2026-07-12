'use client';

import Link from 'next/link';
import Badge from '@/components/atoms/Badge';
import Button from '@/components/atoms/Button';
import Surface from '@/components/atoms/Surface';
import Card from '@/components/molecules/Card';
import HeroSignal from '@/app/_components/HeroSignal';

type Highlight = {
  label: string;
  value: string;
};

type HomeHeroPanelProps = {
  description: string;
  highlights: readonly Highlight[];
  shortTitle: string;
};

export default function HomeHeroPanel({
  description,
  highlights,
  shortTitle
}: HomeHeroPanelProps) {
  return (
    <section className="hero-panel hero-panel-home" aria-labelledby="home-title">
      <div className="hero-copy">
        <div className="hero-topline">
          <p className="hero-system-id">Docs node / visual refinement</p>
          <HeroSignal label="Surface online" />
        </div>
        <Badge variant="info" outlined>
          Quiet Future / Neon Infrastructure
        </Badge>
        <h1 id="home-title">
          Documentation infrastructure for <span>{shortTitle}</span>.
        </h1>
        <p className="hero-lead">{description}</p>
        <div className="hero-actions">
          <Link className="button-link button-link-primary" href="/docs/getting-started">
            Start with the docs
          </Link>
          <Link className="button-link button-link-secondary" href="/components">
            Browse the component index
          </Link>
          <Link className="button-link button-link-tertiary" href="/architecture">
            Why Storybook stays primary
          </Link>
        </div>
        <ul className="hero-summary-list" aria-label="Documentation system properties">
          {highlights.map((item) => (
            <li key={item.label}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </li>
          ))}
        </ul>
      </div>
      <div className="hero-rail">
        <Card className="hero-card hero-card-primary">
          <div className="hero-card-header">
            <div className="hero-card-heading">
              <span className="hero-kicker">Live system</span>
              <h2>Documentation surface</h2>
            </div>
            <Badge variant="success">Static-first</Badge>
          </div>
          <ul className="metric-list" aria-label="Documentation priorities">
            {highlights.map((item) => (
              <li key={item.label}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </li>
            ))}
          </ul>
        </Card>

        <Surface className="hero-card hero-card-secondary">
          <div className="hero-card-header">
            <div className="hero-card-heading">
              <span className="hero-kicker">Telemetry</span>
              <h2>System boundary</h2>
            </div>
            <span className="panel-id">DOCS-01</span>
          </div>
          <div className="hero-preview-grid" aria-label="Documentation boundaries">
            <article>
              <span>Foundations</span>
              <strong>Registry-backed</strong>
            </article>
            <article>
              <span>Components</span>
              <strong>Public surface</strong>
            </article>
            <article>
              <span>Behavior docs</span>
              <strong>Storybook</strong>
            </article>
            <article>
              <span>Package API</span>
              <strong>Stable</strong>
            </article>
          </div>
          <div className="hero-preview">
            <Button type="button">Primary action</Button>
            <Button type="button" variant="secondary">
              Secondary action
            </Button>
          </div>
        </Surface>
      </div>
    </section>
  );
}
