type FoundationPreviewProps = {
  slug: string;
};

export function renderFoundationPreview(slug: string) {
  if (slug === 'colors') {
    return (
      <div
        className="foundation-preview foundation-preview-colors"
        aria-hidden="true"
      >
        <span />
        <span />
        <span />
        <span />
      </div>
    );
  }

  if (slug === 'typography') {
    return (
      <div
        className="foundation-preview foundation-preview-type"
        aria-hidden="true"
      >
        <span className="foundation-preview-display">Aa</span>
        <span className="foundation-preview-text">Text</span>
      </div>
    );
  }

  if (slug === 'spacing') {
    return (
      <div
        className="foundation-preview foundation-preview-spacing"
        aria-hidden="true"
      >
        <span />
        <span />
        <span />
        <span />
      </div>
    );
  }

  if (slug === 'surface-system') {
    return (
      <div
        className="foundation-preview foundation-preview-surface"
        aria-hidden="true"
      >
        <span />
        <span />
        <span />
      </div>
    );
  }

  return (
    <div
      className="foundation-preview foundation-preview-motion"
      aria-hidden="true"
    >
      <span />
      <span />
      <span />
    </div>
  );
}

export default function FoundationPreview({slug}: FoundationPreviewProps) {
  return renderFoundationPreview(slug);
}
