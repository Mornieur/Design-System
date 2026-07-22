import type {AppLocale} from '@/i18n/routing';
import {
  createImportCode,
  createSourceLink,
  createStorybookLink
} from './shared';
import type {ComponentEntry} from './types';

const localizedRadioContent = {
  en: {
    description:
      'Native single-selection control for forms, delivery preferences, and exclusive choices.',
    overview:
      'Radio is the FeitozaUI atom for exclusive form choices. It keeps the native radio contract, supports helper and error text, and works both as a standalone control and in manually composed groups that share the same name.',
    usageSummary:
      'Use Radio when people must select exactly one option from a small, explicit set of mutually exclusive choices.',
    useWhen: [
      'Only one option can be selected from a short list of visible choices.',
      'The choice should submit through standard HTML form behavior without custom state machinery.',
      'The options benefit from short helper text that clarifies consequences or scope.'
    ],
    avoidWhen: [
      'People can select multiple independent options and checkbox semantics are more appropriate.',
      'The control should behave like an immediate on or off toggle instead of an exclusive choice.',
      'The option list is too long or dynamic for a visible radio set to stay scannable.'
    ],
    bestPractices: [
      'Keep labels distinct so each option reads as a clear choice, not a variation of the same sentence.',
      'Use the same name for exclusive options when composing multiple radios manually.',
      'Use helper text to explain impact or audience, not to restate the label.'
    ],
    doItems: [
      'Use Radio for single-channel delivery choices, approval paths, and mutually exclusive form settings.',
      'Let the native browser behavior manage exclusivity through the shared name attribute.',
      'Pair invalid state with helper or error text when the reason should be explicit.'
    ],
    dontItems: [
      'Do not use Radio when more than one option may be selected.',
      'Do not make the label depend on surrounding prose to be understandable.',
      'Do not simulate a group with custom selection logic when native radio behavior already fits.'
    ],
    examples: [
      {
        title: 'Release channel selection',
        description:
          'A small set of delivery channels stays easy to compare when each option carries a concise label and a short scope note.',
        accessibilityNotes: [
          'Each option remains a native radio, so the browser preserves focus and selection semantics.',
          'Shared name attributes keep the options mutually exclusive without custom state orchestration.'
        ]
      },
      {
        title: 'Notification priority',
        description:
          'Radio works well for a single priority choice when the labels stay short and the consequences are clarified below each option.',
        accessibilityNotes: [
          'Helper text stays associated with each option through aria-describedby.',
          'The selected value is submitted natively as the chosen option for the shared name.'
        ]
      }
    ],
    propsNotes: [
      'Radio forwards its ref to the native input element and preserves native form behavior.',
      'Native input attributes such as checked, defaultChecked, disabled, required, name, value, aria-*, data-*, className, and style are supported.'
    ],
    invalidDescription:
      'Marks the radio invalid even before a final error message is available.',
    accessibility: [
      'Uses a native radio input, so checked state, focus handling, and form submission stay aligned with the platform.',
      'Visible labels, helper text, and error text are associated through standard form relationships.',
      'Exclusive selection remains native when multiple radios share the same name.'
    ]
  },
  'pt-BR': {
    description:
      'Controle nativo de selecao unica para formularios, preferencias de entrega e escolhas exclusivas.',
    overview:
      'Radio e o atom do FeitozaUI para escolhas exclusivas em formularios. Ele preserva o contrato nativo do radio, suporta textos de apoio e erro, e funciona tanto isolado quanto em grupos compostos manualmente com o mesmo name.',
    usageSummary:
      'Use Radio quando a pessoa precisar selecionar exatamente uma opcao dentro de um conjunto pequeno e mutuamente exclusivo.',
    useWhen: [
      'Apenas uma opcao pode ser escolhida em uma lista curta e visivel.',
      'A escolha deve ser submetida pelo comportamento HTML padrao sem mecanismos customizados de estado.',
      'As opcoes se beneficiam de helper text curto para explicar impacto ou escopo.'
    ],
    avoidWhen: [
      'As pessoas podem escolher varias opcoes independentes e a semantica de checkbox e mais apropriada.',
      'O controle deve se comportar como um toggle imediato de ligar ou desligar.',
      'A lista de opcoes e longa ou dinamica demais para continuar escaneavel como radios visiveis.'
    ],
    bestPractices: [
      'Mantenha os rotulos distintos para que cada opcao seja compreendida como escolha clara.',
      'Use o mesmo name para opcoes exclusivas ao compor varios radios manualmente.',
      'Use helper text para explicar impacto ou publico, e nao para repetir o rotulo.'
    ],
    doItems: [
      'Use Radio para canais unicos de entrega, caminhos de aprovacao e configuracoes mutuamente exclusivas.',
      'Deixe o comportamento nativo do browser cuidar da exclusividade via atributo name compartilhado.',
      'Combine estado invalido com helper text ou mensagem de erro quando o motivo precisar ficar explicito.'
    ],
    dontItems: [
      'Nao use Radio quando mais de uma opcao puder ser escolhida.',
      'Nao dependa do texto ao redor para dar sentido ao rotulo.',
      'Nao simule grupo com logica customizada quando o comportamento nativo do radio ja resolve.'
    ],
    examples: [
      {
        title: 'Selecao de canal de release',
        description:
          'Um conjunto pequeno de canais continua facil de comparar quando cada opcao traz um rotulo objetivo e uma nota curta de escopo.',
        accessibilityNotes: [
          'Cada opcao continua sendo um radio nativo, entao o browser preserva foco e semantica de selecao.',
          'O name compartilhado mantem as opcoes mutuamente exclusivas sem orquestracao customizada.'
        ]
      },
      {
        title: 'Prioridade de notificacao',
        description:
          'Radio funciona bem para uma escolha unica de prioridade quando os rotulos sao curtos e as consequencias ficam claras abaixo de cada opcao.',
        accessibilityNotes: [
          'O helper text continua associado a cada opcao por aria-describedby.',
          'O valor selecionado e enviado nativamente como a opcao escolhida para o name compartilhado.'
        ]
      }
    ],
    propsNotes: [
      'Radio encaminha a ref para o input nativo e preserva o comportamento padrao de formulario.',
      'Atributos nativos como checked, defaultChecked, disabled, required, name, value, aria-*, data-*, className e style continuam suportados.'
    ],
    invalidDescription:
      'Marca o radio como invalido mesmo antes de existir uma mensagem de erro final.',
    accessibility: [
      'Usa um input radio nativo, entao estado selecionado, foco e submissao do formulario seguem a plataforma.',
      'Rotulos visiveis, helper text e erro sao associados por relacoes padrao de formulario.',
      'A selecao exclusiva continua nativa quando varios radios compartilham o mesmo name.'
    ]
  }
} as const;

export function createRadioEntry(locale: AppLocale): ComponentEntry {
  const content = localizedRadioContent[locale];

  return {
    slug: 'radio',
    title: 'Radio',
    kind: 'Atom',
    status: 'Stable public API',
    description: content.description,
    importPath: createImportCode('Radio'),
    overview: content.overview,
    usageSummary: content.usageSummary,
    useWhen: [...content.useWhen],
    avoidWhen: [...content.avoidWhen],
    bestPractices: [...content.bestPractices],
    doItems: [...content.doItems],
    dontItems: [...content.dontItems],
    featuredExampleId: 'radio-release-channel-selection',
    examples: [
      {
        id: 'radio-release-channel-selection',
        routeSlug: 'radio-release-channel-selection',
        title: content.examples[0].title,
        description: content.examples[0].description,
        previewKey: 'radio-release-channel-selection',
        category: 'composition',
        code: `<div style={{ display: 'grid', gap: '12px' }}>
  <Radio
    name="releaseChannel"
    value="email"
    label="Email"
    defaultChecked
    helperText="Best for release recaps and migration notes."
  />
  <Radio
    name="releaseChannel"
    value="slack"
    label="Slack"
    helperText="Best for rapid team coordination during rollout windows."
  />
</div>`,
        accessibilityNotes: [...content.examples[0].accessibilityNotes]
      },
      {
        id: 'radio-notification-priority',
        routeSlug: 'radio-notification-priority',
        title: content.examples[1].title,
        description: content.examples[1].description,
        previewKey: 'radio-notification-priority',
        category: 'interactive',
        code: `<Radio
  name="notificationPriority"
  value="high"
  label="High priority"
  helperText="Interrupt the on-call channel for urgent incidents."
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
        }
      ]
    },
    accessibility: [...content.accessibility],
    relatedComponentSlugs: ['checkbox', 'button'],
    storybook: createStorybookLink('/docs/components-radio--docs', 'Storybook docs route'),
    source: createSourceLink('src/components/atoms/Radio/index.tsx', 'Component source')
  };
}
