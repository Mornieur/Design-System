import Link from 'next/link';

export default function NotFound() {
  return (
    <main id="main-content" className="site-main">
      <div className="page-shell narrow-shell">
        <section className="section-stack">
          <p className="eyebrow">Not found</p>
          <h1>This route is not part of the documentation map yet.</h1>
          <p>
            The documentation shell in this phase is intentionally small and static.
            If you expected a page here, it likely belongs to a future catalog pass.
          </p>
          <div className="hero-actions">
            <Link className="button-link button-link-primary" href="/docs/getting-started">
              Back to docs
            </Link>
            <Link className="button-link button-link-secondary" href="/">
              Return home
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
