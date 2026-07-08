import styles from './page.module.css';

const platformAreas = [
  'Foundations',
  'Primitives',
  'Storybook',
  'Accessibility',
  'Testing'
];

export default function Home() {
  return (
    <main className={styles.page}>
      <section className={styles.hero} aria-labelledby="home-title">
        <p className={styles.status}>Work in progress</p>

        <div className={styles.content}>
          <h1 id="home-title">FeitozaUI</h1>
          <p className={styles.lead}>
            A React and TypeScript UI Engineering Platform focused on
            foundations, primitives, component APIs, accessibility,
            documentation, and long-term maintainability.
          </p>
        </div>

        <ul className={styles.stack} aria-label="Platform focus areas">
          {platformAreas.map((area) => (
            <li key={area}>{area}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
