type ComponentCardPreviewProps = {
  slug: string;
};

export default function ComponentCardPreview({
  slug
}: ComponentCardPreviewProps) {
  if (slug === 'button') {
    return (
      <div className="component-card-preview" aria-hidden="true">
        <div className="component-card-preview-actions">
          <span className="component-card-preview-button">Primary</span>
          <span className="component-card-preview-button component-card-preview-button-secondary">
            Secondary
          </span>
        </div>
      </div>
    );
  }

  if (slug === 'surface') {
    return (
      <div className="component-card-preview" aria-hidden="true">
        <div className="component-card-preview-surface">
          <div className="component-card-preview-lines">
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="component-card-preview" aria-hidden="true">
      <div className="component-card-preview-card">
        <div className="component-card-preview-lines">
          <span />
          <span />
          <span />
        </div>
      </div>
    </div>
  );
}
