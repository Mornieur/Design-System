import {getLocale} from 'next-intl/server';
import {Link} from '@/i18n/navigation';
import type {AppLocale} from '@/i18n/routing';

export default async function NotFound() {
  const locale = (await getLocale()) as AppLocale;
  const copy =
    locale === 'pt-BR'
      ? {
          eyebrow: 'Nao encontrado',
          title: 'Nao encontramos esta pagina.',
          body:
            'O endereco pode estar desatualizado ou a pagina pode ter sido reorganizada durante o refinamento da documentacao.',
          backToDocs: 'Voltar para a documentacao',
          returnHome: 'Voltar para a home'
        }
      : {
          eyebrow: 'Not found',
          title: "We couldn't find that page.",
          body:
            'The address may be outdated, or the page may have moved while the documentation was being refined.',
          backToDocs: 'Back to docs',
          returnHome: 'Return home'
        };

  return (
    <main id="main-content" className="site-main">
      <div className="page-shell narrow-shell">
        <section className="section-stack">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h1>{copy.title}</h1>
          <p>{copy.body}</p>
          <div className="hero-actions">
            <Link
              className="button-link button-link-primary"
              href="/docs/getting-started"
            >
              {copy.backToDocs}
            </Link>
            <Link className="button-link button-link-secondary" href="/">
              {copy.returnHome}
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
