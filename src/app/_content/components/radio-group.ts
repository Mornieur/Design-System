import type {AppLocale} from '@/i18n/routing';
import {
  createImportCode,
  createSourceLink,
  createStorybookLink
} from './shared';
import type {ComponentEntry} from './types';

const localizedRadioGroupContent = {
  en: {
    description:
      'Fieldset-based composition primitive for grouped radio choices with shared legend, helper text, and error messaging.',
    overview:
      'RadioGroup is the FeitozaUI molecule for grouped radio choices. It keeps real fieldset and legend semantics, organizes helper and error messaging at the group level, and leaves name, value, checked state, and native exclusivity on the radios themselves.',
    usageSummary:
      'Use RadioGroup when several radios form one explicit decision and the group needs a shared label, guidance, or validation message.',
    useWhen: [
      'Several visible radios belong to one decision that needs a real group label.',
      'The form benefits from shared helper text or a shared validation message for the whole choice set.',
      'The layout needs a consistent vertical or horizontal arrangement without hiding native radio behavior.'
    ],
    avoidWhen: [
      'A single Radio is enough and no grouped legend or shared messaging is needed.',
      'The options do not belong to one explicit decision and should stay as separate standalone controls.',
      'The implementation expects the group to inject name, value, or controlled state into its radios automatically.'
    ],
    bestPractices: [
      'Keep the same name on each Radio so the browser preserves exclusivity natively.',
      'Use the legend to describe the decision itself, not the surrounding section title.',
      'Use group-level helper text for shared guidance and keep option-level helper text for per-choice consequences.'
    ],
    doItems: [
      'Use RadioGroup for account plan selection, approval paths, and delivery channel decisions.',
      'Let the fieldset and legend provide semantics instead of replacing them with div and custom roles.',
      'Keep Radio usable on its own even when the grouped version exists.'
    ],
    dontItems: [
      'Do not make RadioGroup responsible for hidden state orchestration.',
      'Do not inject name or checked props silently into child radios.',
      'Do not replace a required legend with surrounding prose and assume the semantics are equivalent.'
    ],
    examples: [
      {
        title: 'Account plan selection',
        description:
          'A fieldset and legend turn a set of plans into one explicit decision while each radio still explains its own scope.',
        accessibilityNotes: [
          'The legend becomes the accessible group name for screen readers and form navigation.',
          'Each Radio keeps native focus, selection, and form submission behavior.'
        ]
      },
      {
        title: 'Notification priority',
        description:
          'Horizontal layout works when the options stay short and the group-level helper text explains that orientation is only visual.',
        accessibilityNotes: [
          'Orientation changes layout only and does not replace native keyboard behavior.',
          'The shared helper text remains associated with the fieldset through aria-describedby.'
        ]
      },
      {
        title: 'Usage guidance',
        description:
          'RadioGroup adds structure around multiple radios without turning Radio into a dependent subcomponent.',
        accessibilityNotes: [
          'The group owns legend and shared messaging while the radios own name, value, and checked state.',
          'No redundant radiogroup role is added on top of native fieldset semantics.'
        ]
      }
    ],
    propsNotes: [
      'RadioGroup forwards its ref to the native fieldset element and preserves fieldset HTML props.',
      'Name, value, checked, defaultChecked, required, and onChange remain on the child radios instead of being injected by the group.'
    ],
    invalidDescription:
      'Marks the fieldset invalid even before a final error message is available.',
    orientationDescription:
      'Controls only the visual arrangement of the radios inside the group.',
    accessibility: [
      'Uses a native fieldset with a real legend, so the grouped choice keeps proper form semantics.',
      'Shared helper text and error messaging are associated at the group level through aria-describedby.',
      'The radios inside the group keep native keyboard behavior, focus targets, and exclusivity.'
    ]
  },
  'pt-BR': {
    description:
      'Primitive de composição baseado em fieldset para grupos de radio com legend, helper text e erro compartilhados.',
    overview:
      'RadioGroup é a molecule do FeitozaUI para escolhas agrupadas com radio. Ele preserva semântica real de fieldset e legend, organiza helper text e erro no nível do grupo, e deixa name, value, checked state e exclusividade nativa nos radios.',
    usageSummary:
      'Use RadioGroup quando vários radios fizerem parte de uma mesma decisão explícita e o conjunto precisar de rótulo, orientação ou validação compartilhada.',
    useWhen: [
      'Vários radios visíveis pertencem a uma mesma decisão e precisam de rótulo real de grupo.',
      'O formulário se beneficia de helper text ou mensagem de validação compartilhada para todo o conjunto.',
      'O layout precisa de distribuição vertical ou horizontal consistente sem esconder o comportamento nativo.'
    ],
    avoidWhen: [
      'Um Radio isolado já resolve e não existe necessidade de legend ou mensagem compartilhada.',
      'As opções não pertencem a uma mesma decisão explícita e devem continuar como controles separados.',
      'A implementação espera que o grupo injete name, value ou estado controlado automaticamente nos radios.'
    ],
    bestPractices: [
      'Mantenha o mesmo name em cada Radio para que o browser preserve a exclusividade nativamente.',
      'Use a legend para descrever a decisão em si, e não apenas o título da seção ao redor.',
      'Use helper text do grupo para orientação compartilhada e helper text do item para consequências de cada escolha.'
    ],
    doItems: [
      'Use RadioGroup para seleção de plano, caminhos de aprovação e decisões de canal de entrega.',
      'Deixe fieldset e legend fornecerem a semântica em vez de trocar por div com role customizado.',
      'Mantenha Radio utilizável sozinho mesmo quando a versão agrupada existir.'
    ],
    dontItems: [
      'Não transforme RadioGroup em orquestrador oculto de estado.',
      'Não injete name ou checked silenciosamente nos radios filhos.',
      'Não substitua uma legend necessária por texto ao redor como se a semântica fosse equivalente.'
    ],
    examples: [
      {
        title: 'Seleção de plano',
        description:
          'Fieldset e legend transformam um conjunto de planos em uma decisão explícita, enquanto cada radio continua explicando seu próprio escopo.',
        accessibilityNotes: [
          'A legend vira o nome acessível do grupo para leitores de tela e navegação em formulários.',
          'Cada Radio preserva foco, seleção e submissão nativos.'
        ]
      },
      {
        title: 'Prioridade de notificação',
        description:
          'O layout horizontal funciona quando as opções continuam curtas e o helper text do grupo explica que a orientação é apenas visual.',
        accessibilityNotes: [
          'A orientação muda apenas o layout e não substitui o teclado nativo.',
          'O helper text compartilhado continua associado ao fieldset por aria-describedby.'
        ]
      },
      {
        title: 'Guia de uso',
        description:
          'RadioGroup adiciona estrutura em torno de vários radios sem transformar Radio em um subcomponente dependente.',
        accessibilityNotes: [
          'O grupo controla legend e mensagens compartilhadas enquanto os radios controlam name, value e checked state.',
          'Nenhum role redundante de radiogroup é adicionado sobre a semântica nativa do fieldset.'
        ]
      }
    ],
    propsNotes: [
      'RadioGroup encaminha a ref para o fieldset nativo e preserva props HTML do fieldset.',
      'Name, value, checked, defaultChecked, required e onChange continuam nos radios filhos, sem injeção silenciosa do grupo.'
    ],
    invalidDescription:
      'Marca o fieldset como inválido mesmo antes de existir uma mensagem de erro final.',
    orientationDescription:
      'Controla apenas a distribuição visual dos radios dentro do grupo.',
    accessibility: [
      'Usa fieldset nativo com legend real, então a escolha agrupada preserva semântica correta de formulário.',
      'Helper text e erro compartilhados são associados no nível do grupo por aria-describedby.',
      'Os radios dentro do grupo continuam com teclado nativo, foco real e exclusividade do browser.'
    ]
  }
} as const;

export function createRadioGroupEntry(locale: AppLocale): ComponentEntry {
  const content = localizedRadioGroupContent[locale];

  return {
    slug: 'radio-group',
    title: 'RadioGroup',
    kind: 'Molecule',
    status: 'Stable public API',
    description: content.description,
    importPath: createImportCode('RadioGroup'),
    overview: content.overview,
    usageSummary: content.usageSummary,
    useWhen: [...content.useWhen],
    avoidWhen: [...content.avoidWhen],
    bestPractices: [...content.bestPractices],
    doItems: [...content.doItems],
    dontItems: [...content.dontItems],
    featuredExampleId: 'radio-group-account-plan-selection',
    examples: [
      {
        id: 'radio-group-account-plan-selection',
        routeSlug: 'radio-group-account-plan-selection',
        title: content.examples[0].title,
        description: content.examples[0].description,
        previewKey: 'radio-group-account-plan-selection',
        category: 'composition',
        code: `<RadioGroup
  legend="Account plan"
  helperText="Use the plan labels to describe scope before the form is submitted."
>
  <Radio name="accountPlan" value="starter" label="Starter" defaultChecked />
  <Radio name="accountPlan" value="growth" label="Growth" />
</RadioGroup>`,
        accessibilityNotes: [...content.examples[0].accessibilityNotes]
      },
      {
        id: 'radio-group-notification-priority',
        routeSlug: 'radio-group-notification-priority',
        title: content.examples[1].title,
        description: content.examples[1].description,
        previewKey: 'radio-group-notification-priority',
        category: 'interactive',
        code: `<RadioGroup
  legend="Notification priority"
  orientation="horizontal"
  helperText="Orientation is visual only."
>
  <Radio name="notificationPriority" value="standard" label="Standard" defaultChecked />
  <Radio name="notificationPriority" value="high" label="High" />
</RadioGroup>`,
        accessibilityNotes: [...content.examples[1].accessibilityNotes]
      },
      {
        id: 'radio-group-usage-guidance',
        routeSlug: 'radio-group-usage-guidance',
        title: content.examples[2].title,
        description: content.examples[2].description,
        previewKey: 'radio-group-usage-guidance',
        category: 'composition',
        code: `<RadioGroup
  legend="Release channel"
  helperText="RadioGroup centralizes legend and helper messaging."
>
  <Radio name="releaseChannel" value="email" label="Email" defaultChecked />
  <Radio name="releaseChannel" value="slack" label="Slack" />
</RadioGroup>`,
        accessibilityNotes: [...content.examples[2].accessibilityNotes]
      }
    ],
    propsDefinition: {
      refType: 'HTMLFieldSetElement',
      inheritedFrom: 'FieldsetHTMLAttributes<HTMLFieldSetElement>',
      notes: [...content.propsNotes],
      props: [
        {
          name: 'legend',
          type: 'ReactNode',
          required: true,
          description: locale === 'en'
            ? 'Accessible group label rendered through a real legend.'
            : 'Rótulo acessível do grupo renderizado por uma legend real.'
        },
        {
          name: 'invalid',
          type: 'boolean',
          required: false,
          defaultValue: 'false',
          description: content.invalidDescription
        },
        {
          name: 'orientation',
          type: "'vertical' | 'horizontal'",
          required: false,
          defaultValue: "'vertical'",
          description: content.orientationDescription
        }
      ]
    },
    accessibility: [...content.accessibility],
    relatedComponentSlugs: ['radio', 'checkbox'],
    storybook: createStorybookLink('/docs/components-radiogroup--docs', 'Storybook docs route'),
    source: createSourceLink('src/components/molecules/RadioGroup/index.tsx', 'Component source')
  };
}
