import type {AppLocale} from '@/i18n/routing';
import {
  createImportCode,
  createSourceLink,
  createStorybookLink
} from './shared';
import type {ComponentEntry} from './types';

const localizedCheckboxContent = {
  en: {
    description:
      'Native multi-selection control for forms, preferences, and batch selection with optional indeterminate state.',
    overview:
      'Checkbox is the FeitozaUI atom for boolean and multi-selection form decisions. It stays with the native checkbox contract, supports helper and error text, and includes an indeterminate state for partial selection flows.',
    usageSummary:
      'Use Checkbox when people need to opt in, confirm a condition, or select one or more independent options.',
    useWhen: [
      'A form needs a real checked or unchecked value with native submission behavior.',
      'People can choose multiple independent options from the same group.',
      'A parent selection needs a partial state to represent some child items being selected.'
    ],
    avoidWhen: [
      'The control should trigger an immediate system state change and read like an on or off toggle.',
      'Only one option can be selected from a group and radio semantics are more appropriate.',
      'The interaction is decorative or informational and does not represent a real form choice.'
    ],
    bestPractices: [
      'Keep labels short and explicit so the decision is understandable without extra interpretation.',
      'Use helper text for consequence or scope, not to repeat the label in different words.',
      'Reserve indeterminate for parent-child selection flows instead of ambiguous unknown states.'
    ],
    doItems: [
      'Use Checkbox for consent, settings preferences, and independent batch selection.',
      'Let the native checkbox semantics handle keyboard behavior and form submission.',
      'Pair invalid state with helper or error text when the reason needs to be explained.'
    ],
    dontItems: [
      'Do not use Checkbox as a visual substitute for a switch.',
      'Do not hide the meaning of the choice behind generic labels like Enable or Active.',
      'Do not use indeterminate as a permanent third value in product logic without clear semantics.'
    ],
    examples: [
      {
        title: 'Notification preferences',
        description:
          'Independent communication channels stay scannable when each checkbox carries a short label and a concise scope note.',
        accessibilityNotes: [
          'Each option remains a native checkbox, so Space toggles state with no custom keyboard layer.',
          'Helper text stays associated with the checkbox through aria-describedby.'
        ]
      },
      {
        title: 'Partial selection state',
        description:
          'Indeterminate helps a parent checkbox summarize that some child selections are active without claiming all are selected.',
        accessibilityNotes: [
          'The indeterminate state is applied on the native input instead of simulated visually only.',
          'The parent label still needs to describe the scope of the grouped selection clearly.'
        ]
      }
    ],
    propsNotes: [
      'Checkbox forwards its ref to the native input element and preserves native form behavior.',
      'Native input attributes such as checked, defaultChecked, disabled, required, name, value, aria-*, data-*, className, and style are supported.'
    ],
    invalidDescription:
      'Marks the checkbox invalid even before a final error message is available.',
    indeterminateDescription:
      'Shows the native partial-selection state for parent-child selection flows.',
    accessibility: [
      'Uses a native checkbox input, so keyboard toggle and form submission behavior stay aligned with the platform.',
      'Visible labels, helper text, and error text are associated through standard form relationships.',
      'Indeterminate is applied to the DOM property on the native input instead of a visual-only approximation.'
    ]
  },
  'pt-BR': {
    description:
      'Controle nativo de multipla selecao para formularios, preferencias e selecao em lote com estado indeterminado opcional.',
    overview:
      'Checkbox e o atom do FeitozaUI para decisoes booleanas e escolhas de multipla selecao. Ele preserva o contrato nativo do checkbox, suporta textos de apoio e erro, e inclui estado indeterminado para fluxos de selecao parcial.',
    usageSummary:
      'Use Checkbox quando as pessoas precisarem aderir, confirmar uma condicao ou selecionar uma ou mais opcoes independentes.',
    useWhen: [
      'Um formulario precisa de um valor real marcado ou desmarcado com submissao nativa.',
      'As pessoas podem escolher varias opcoes independentes dentro do mesmo grupo.',
      'Uma selecao pai precisa de estado parcial para representar que alguns itens filhos estao selecionados.'
    ],
    avoidWhen: [
      'O controle deve disparar uma mudanca imediata de estado do sistema e se comportar como toggle.',
      'Apenas uma opcao pode ser escolhida no grupo e a semantica de radio e mais apropriada.',
      'A interacao e decorativa ou informativa e nao representa uma escolha real de formulario.'
    ],
    bestPractices: [
      'Mantenha os rotulos curtos e explicitos para que a decisao seja compreendida sem interpretacao extra.',
      'Use helper text para explicar consequencia ou escopo, e nao para repetir o rotulo.',
      'Reserve o estado indeterminado para fluxos pai-filho, e nao para estados permanentemente ambiguos.'
    ],
    doItems: [
      'Use Checkbox para consentimento, preferencias de configuracao e selecao em lote independente.',
      'Deixe a semantica nativa cuidar do teclado e da submissao do formulario.',
      'Combine estado invalido com helper text ou mensagem de erro quando o motivo precisar ser explicado.'
    ],
    dontItems: [
      'Nao use Checkbox como substituto visual de um switch.',
      'Nao esconda o significado da escolha atras de rotulos genericos como Ativar ou Ativo.',
      'Nao use indeterminate como um terceiro valor permanente sem semantica clara.'
    ],
    examples: [
      {
        title: 'Preferencias de notificacao',
        description:
          'Canais independentes ficam mais escaneaveis quando cada checkbox traz um rotulo curto e uma nota de escopo objetiva.',
        accessibilityNotes: [
          'Cada opcao continua sendo um checkbox nativo, entao Espaco alterna o estado sem camada customizada.',
          'O helper text continua associado ao checkbox por aria-describedby.'
        ]
      },
      {
        title: 'Estado de selecao parcial',
        description:
          'O estado indeterminado ajuda um checkbox pai a resumir que algumas selecoes filhas estao ativas sem afirmar que todas foram marcadas.',
        accessibilityNotes: [
          'O estado indeterminado e aplicado ao input nativo, nao apenas simulado visualmente.',
          'O rotulo do item pai ainda precisa descrever claramente o escopo da selecao.'
        ]
      }
    ],
    propsNotes: [
      'Checkbox encaminha a ref para o input nativo e preserva o comportamento padrao de formulario.',
      'Atributos nativos como checked, defaultChecked, disabled, required, name, value, aria-*, data-*, className e style continuam suportados.'
    ],
    invalidDescription:
      'Marca o checkbox como invalido mesmo antes de existir uma mensagem de erro final.',
    indeterminateDescription:
      'Mostra o estado nativo de selecao parcial para fluxos pai-filho.',
    accessibility: [
      'Usa um input checkbox nativo, entao toggle por teclado e submissao do formulario seguem a plataforma.',
      'Rotulos visiveis, helper text e erro sao associados por relacoes padrao de formulario.',
      'O estado indeterminado e aplicado na propriedade DOM do input nativo, nao por aproximacao visual.'
    ]
  }
} as const;

export function createCheckboxEntry(locale: AppLocale): ComponentEntry {
  const content = localizedCheckboxContent[locale];

  return {
    slug: 'checkbox',
    title: 'Checkbox',
    kind: 'Atom',
    status: 'Stable public API',
    description: content.description,
    importPath: createImportCode('Checkbox'),
    overview: content.overview,
    usageSummary: content.usageSummary,
    useWhen: [...content.useWhen],
    avoidWhen: [...content.avoidWhen],
    bestPractices: [...content.bestPractices],
    doItems: [...content.doItems],
    dontItems: [...content.dontItems],
    featuredExampleId: 'checkbox-notification-preferences',
    examples: [
      {
        id: 'checkbox-notification-preferences',
        routeSlug: 'checkbox-notification-preferences',
        title: content.examples[0].title,
        description: content.examples[0].description,
        previewKey: 'checkbox-notification-preferences',
        category: 'composition',
        code: `<div style={{ display: 'grid', gap: '12px' }}>
  <Checkbox
    label="Product updates"
    helperText="Major releases, changelogs, and migration notes."
    defaultChecked
  />
  <Checkbox
    label="Security advisories"
    helperText="Urgent security notices and required follow-up."
  />
</div>`,
        accessibilityNotes: [...content.examples[0].accessibilityNotes]
      },
      {
        id: 'checkbox-indeterminate-selection',
        routeSlug: 'checkbox-indeterminate-selection',
        title: content.examples[1].title,
        description: content.examples[1].description,
        previewKey: 'checkbox-indeterminate-selection',
        category: 'interactive',
        code: `<Checkbox
  label="Select all environments"
  indeterminate
  helperText="Some, but not all, child environments are currently selected."
/>`,
        accessibilityNotes: [...content.examples[1].accessibilityNotes]
      }
    ],
    propsDefinition: {
      refType: 'HTMLInputElement',
      inheritedFrom: 'InputHTMLAttributes<HTMLInputElement>',
      notes: [...content.propsNotes],
      props: [
        {
          name: 'invalid',
          type: 'boolean',
          required: false,
          defaultValue: 'false',
          description: content.invalidDescription
        },
        {
          name: 'indeterminate',
          type: 'boolean',
          required: false,
          defaultValue: 'false',
          description: content.indeterminateDescription
        }
      ]
    },
    accessibility: [...content.accessibility],
    relatedComponentSlugs: ['button', 'surface'],
    storybook: createStorybookLink(
      '/docs/components-checkbox--docs',
      'Storybook docs route'
    ),
    source: createSourceLink(
      'src/components/atoms/Checkbox/index.tsx',
      'Component source'
    )
  };
}
