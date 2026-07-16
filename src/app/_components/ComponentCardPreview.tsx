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

  if (slug === 'checkbox') {
    return (
      <div className="component-card-preview" aria-hidden="true">
        <div className="component-card-preview-lines">
          <span style={{width: '18px', height: '18px', borderRadius: '6px'}} />
          <span style={{width: '72%'}} />
          <span style={{width: '18px', height: '18px', borderRadius: '6px'}} />
        </div>
      </div>
    );
  }

  if (slug === 'radio') {
    return (
      <div className="component-card-preview" aria-hidden="true">
        <div className="component-card-preview-lines">
          <span style={{width: '18px', height: '18px', borderRadius: '999px'}} />
          <span style={{width: '68%'}} />
          <span style={{width: '18px', height: '18px', borderRadius: '999px'}} />
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
