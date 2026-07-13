import type { ComponentPropsDefinition } from '@/app/_content/components';

type PropsTableProps = {
  componentTitle: string;
  definition: ComponentPropsDefinition;
};

export default function PropsTable({
  componentTitle,
  definition
}: PropsTableProps) {
  return (
    <div className="props-table-stack">
      <div className="key-value-grid">
        <article>
          <strong>Ref</strong>
          <p>{definition.refType}</p>
        </article>
        <article>
          <strong>Inherited props</strong>
          <p>{definition.inheritedFrom}</p>
        </article>
      </div>

      {definition.notes.length ? (
        <ul className="bullet-list">
          {definition.notes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      ) : null}

      {definition.props.length ? (
        <div className="props-table-wrap">
          <table className="props-table">
            <caption className="props-table-caption">{componentTitle} public props</caption>
            <thead>
              <tr>
                <th scope="col">Prop</th>
                <th scope="col">Type</th>
                <th scope="col">Default</th>
                <th scope="col">Required</th>
                <th scope="col">Description</th>
              </tr>
            </thead>
            <tbody>
              {definition.props.map((prop) => (
                <tr key={prop.name}>
                  <td>
                    <code>{prop.name}</code>
                  </td>
                  <td>
                    <code>{prop.type}</code>
                  </td>
                  <td>{prop.defaultValue ?? '—'}</td>
                  <td>{prop.required ? 'Yes' : 'No'}</td>
                  <td>
                    {prop.description}
                    {prop.notes ? <div className="props-table-note">{prop.notes}</div> : null}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="docs-guidance-card">
          <h3>No component-specific props</h3>
          <p>
            {componentTitle} does not define custom public props in the current API. It relies on
            native div attributes and ref forwarding only.
          </p>
        </div>
      )}
    </div>
  );
}
