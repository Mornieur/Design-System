import FeitozaPreview from './_components/FeitozaPreview';

export default function HomePage() {
  return (
    <main className="page-shell">
      <section className="server-copy">
        <p>Server Component shell</p>
        <h1>Next.js App Router consumer</h1>
        <p className="server-note">
          This page stays server-rendered while a small client island consumes the public FeitozaUI
          package root. The package is not imported here on purpose.
        </p>
      </section>

      <FeitozaPreview />
    </main>
  );
}


