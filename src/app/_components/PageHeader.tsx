type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  meta?: string[];
};

export default function PageHeader({
  eyebrow,
  title,
  description,
  meta
}: PageHeaderProps) {
  return (
    <header className="page-header">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="page-intro">{description}</p>
      {meta ? (
        <div className="page-meta" aria-label="Page metadata">
          {meta.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      ) : null}
    </header>
  );
}
