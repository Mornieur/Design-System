type SectionNavigatorItem = {
  href: string;
  label: string;
};

type SectionNavigatorProps = {
  items: SectionNavigatorItem[];
};

export default function SectionNavigator({ items }: SectionNavigatorProps) {
  return (
    <nav className="section-nav" aria-label="Page sections">
      {items.map((item) => (
        <a key={item.href} className="section-nav-link" href={item.href}>
          {item.label}
        </a>
      ))}
    </nav>
  );
}
