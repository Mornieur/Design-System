import CopyCodeButton from '@/app/_components/component-docs/CopyCodeButton';

type CodeBlockProps = {
  code: string;
  label: string;
  note: string;
};

export default function CodeBlock({ code, label, note }: CodeBlockProps) {
  return (
    <div className="docs-code-frame">
      <div className="docs-code-header">
        <div className="docs-code-meta">
          <span className="docs-code-label">{label}</span>
          <span className="docs-code-note">{note}</span>
        </div>
        <CopyCodeButton code={code} />
      </div>
      <pre className="docs-code-block" tabIndex={0}>
        <code>{code}</code>
      </pre>
    </div>
  );
}
