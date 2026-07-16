import type {AppLocale} from '@/i18n/routing';
import type { ComponentPropsDefinition } from '@/app/_content/components';

type PropsTableProps = {
  componentTitle: string;
  definition: ComponentPropsDefinition;
  locale: AppLocale;
};

export default function PropsTable({
  componentTitle,
  definition,
  locale
}: PropsTableProps) {
  const copy =
    locale === 'pt-BR'
      ? {
          ref: 'Ref',
          inherited: 'Props herdadas',
          caption: `${componentTitle} props publicas`,
          prop: 'Prop',
          type: 'Tipo',
          defaultValue: 'Padrao',
          required: 'Obrigatorio',
          description: 'Descricao',
          yes: 'Sim',
          no: 'Nao',
          emptyTitle: 'Sem props especificas do componente',
          emptyBody:
            `${componentTitle} nao define props publicas customizadas na API atual. Ele se apoia apenas em atributos nativos e encaminhamento de ref.`
        }
      : {
          ref: 'Ref',
          inherited: 'Inherited props',
          caption: `${componentTitle} public props`,
          prop: 'Prop',
          type: 'Type',
          defaultValue: 'Default',
          required: 'Required',
          description: 'Description',
          yes: 'Yes',
          no: 'No',
          emptyTitle: 'No component-specific props',
          emptyBody:
            `${componentTitle} does not define custom public props in the current API. It relies on native attributes and ref forwarding only.`
        };

  return (
    <div className="props-table-stack">
      <div className="key-value-grid">
        <article>
          <strong>{copy.ref}</strong>
          <p>{definition.refType}</p>
        </article>
        <article>
          <strong>{copy.inherited}</strong>
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
            <caption className="props-table-caption">{copy.caption}</caption>
            <thead>
              <tr>
                <th scope="col">{copy.prop}</th>
                <th scope="col">{copy.type}</th>
                <th scope="col">{copy.defaultValue}</th>
                <th scope="col">{copy.required}</th>
                <th scope="col">{copy.description}</th>
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
                  <td>{prop.defaultValue ?? '-'}</td>
                  <td>{prop.required ? copy.yes : copy.no}</td>
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
          <h3>{copy.emptyTitle}</h3>
          <p>{copy.emptyBody}</p>
        </div>
      )}
    </div>
  );
}
