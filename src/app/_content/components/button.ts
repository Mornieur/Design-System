import type {AppLocale} from '@/i18n/routing';
import {
  createImportCode,
  createSourceLink,
  createStorybookLink
} from './shared';
import type {ComponentEntry} from './types';

const localizedButtonContent = {
  en: {
    description:
      'Core action primitive for primary, secondary, and accent actions with native button semantics.',
    overview:
      "Button is FeitozaUI's core action primitive. It keeps the native button contract intact, stays intentionally small, and uses a real public variant prop to clarify hierarchy.",
    usageSummary:
      'Use Button when the action should be unmistakable, semantic, and easy to scan in context.',
    useWhen: [
      'You need a native button for a real action in the current task flow.',
      'The action hierarchy is clear and one primary action needs stronger emphasis.',
      'You want a public FeitozaUI action surface without inventing product-specific behavior.'
    ],
    avoidWhen: [
      'The interaction is navigation and should be a link instead of a button.',
      'You need loading, icon-only, or split-button behavior that is not part of the current public API.',
      'You are trying to create multiple competing primary actions in the same local group.'
    ],
    bestPractices: [
      'Keep labels explicit so the action makes sense without extra explanation nearby.',
      'Limit each local cluster to one primary action and use secondary or accent variants for support.',
      'Prefer native disabled behavior and visible focus treatment over custom interaction simulation.'
    ],
    doItems: [
      'Use Button for actions that submit, confirm, continue, retry, or open a local workflow.',
      'Pair primary and secondary variants to establish hierarchy inside the same view.',
      'Validate broader state coverage such as disabled and focus-visible in Storybook.'
    ],
    dontItems: [
      'Do not use Button when the interaction is really navigation to another route.',
      'Do not create extra visual variants in product code to solve local styling preferences.',
      'Do not rely on color alone to explain the action.'
    ],
    examples: [
      {
        title: 'Primary action hierarchy',
        description:
          'Primary and secondary actions can live together as long as one action clearly owns the local emphasis.',
        accessibilityNotes: [
          'Both controls remain native buttons, so Enter and Space activation come from the platform.',
          'The visual hierarchy does not replace the need for a clear action label.'
        ]
      },
      {
        title: 'Current public variants',
        description:
          'The public API intentionally stays with three real variants: primary, secondary, and accent.',
        accessibilityNotes: [
          'Accent is still a real button, not a decorative tag.',
          'Disabled and focus behavior should still be validated in Storybook for broader state coverage.'
        ]
      }
    ],
    propsNotes: [
      'Button preserves the native button contract and forwards its ref to the underlying button element.',
      'Native attributes such as type, disabled, aria-*, data-*, className, and style are supported.'
    ],
    variantDescription:
      'Controls the visual action hierarchy using the current public variants only.',
    accessibility: [
      'Uses a native button element, so keyboard activation follows platform expectations.',
      'Focus-visible styling is part of the public component contract and should stay visible in dense UI.',
      'Disabled behavior should use the native disabled attribute instead of decorative simulation.'
    ]
  },
  'pt-BR': {
    description:
      'Primitivo central de ação para ações primárias, secundárias e de acento com semântica nativa de botão.',
    overview:
      'Button é o primitivo principal de ação do FeitozaUI. Ele preserva o contrato nativo do elemento, mantém uma API enxuta e usa um prop público real de variante para deixar a hierarquia evidente.',
    usageSummary:
      'Use Button quando a ação precisa ser inequívoca, semântica e fácil de escanear no contexto.',
    useWhen: [
      'Você precisa de um botão nativo para uma ação real no fluxo atual.',
      'A hierarquia da ação está clara e uma ação principal precisa de mais ênfase.',
      'Você quer uma superfície pública de ação do FeitozaUI sem inventar comportamento específico de produto.'
    ],
    avoidWhen: [
      'A interação é navegação e deveria ser um link, não um botão.',
      'Você precisa de loading, botão só com ícone ou split button, que ainda não fazem parte da API pública.',
      'Você está tentando criar várias ações primárias concorrentes no mesmo agrupamento.'
    ],
    bestPractices: [
      'Mantenha os rótulos explícitos para que a ação faça sentido sem explicação extra ao redor.',
      'Limite cada agrupamento local a uma ação primária e use variantes secundárias ou de acento como apoio.',
      'Prefira comportamento nativo de disabled e foco visível em vez de simulações customizadas.'
    ],
    doItems: [
      'Use Button para ações que confirmam, continuam, tentam novamente ou abrem um fluxo local.',
      'Combine variantes primária e secundária para estabelecer hierarquia dentro da mesma tela.',
      'Valide estados mais amplos, como disabled e focus-visible, no Storybook.'
    ],
    dontItems: [
      'Não use Button quando a interação for, na verdade, navegação para outra rota.',
      'Não crie variantes visuais extras em código de produto para resolver preferências locais.',
      'Não dependa apenas da cor para explicar a ação.'
    ],
    examples: [
      {
        title: 'Hierarquia de ação principal',
        description:
          'Ações primárias e secundárias podem conviver desde que uma delas assuma a ênfase local com clareza.',
        accessibilityNotes: [
          'Os dois controles continuam sendo botões nativos, então Enter e Espaço vêm da plataforma.',
          'A hierarquia visual não substitui a necessidade de um rótulo claro.'
        ]
      },
      {
        title: 'Variantes públicas atuais',
        description:
          'A API pública permanece intencionalmente com três variantes reais: primária, secundária e de acento.',
        accessibilityNotes: [
          'Accent continua sendo um botão real, não uma tag decorativa.',
          'Comportamento de disabled e foco ainda deve ser validado no Storybook.'
        ]
      }
    ],
    propsNotes: [
      'Button preserva o contrato nativo do elemento e encaminha a ref para o botão subjacente.',
      'Atributos nativos como type, disabled, aria-*, data-*, className e style continuam suportados.'
    ],
    variantDescription:
      'Controla a hierarquia visual da ação usando apenas as variantes públicas atuais.',
    accessibility: [
      'Usa um elemento button nativo, então a ativação por teclado segue o comportamento da plataforma.',
      'O estilo de focus-visible faz parte do contrato público e deve continuar visível em interfaces densas.',
      'Disabled deve usar o atributo nativo em vez de uma simulação decorativa.'
    ]
  }
} as const;

export function createButtonEntry(locale: AppLocale): ComponentEntry {
  const content = localizedButtonContent[locale];

  return {
    slug: 'button',
    title: 'Button',
    kind: 'Atom',
    status: 'Stable public API',
    description: content.description,
    importPath: createImportCode('Button'),
    overview: content.overview,
    usageSummary: content.usageSummary,
    useWhen: [...content.useWhen],
    avoidWhen: [...content.avoidWhen],
    bestPractices: [...content.bestPractices],
    doItems: [...content.doItems],
    dontItems: [...content.dontItems],
    featuredExampleId: 'button-primary-action',
    examples: [
      {
        id: 'button-primary-action',
        routeSlug: 'button-primary-action',
        title: content.examples[0].title,
        description: content.examples[0].description,
        previewKey: 'button-primary-action',
        category: 'composition',
        code: `<div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
  <Button>Deploy service</Button>
  <Button variant="secondary">Review diff</Button>
</div>`,
        accessibilityNotes: [...content.examples[0].accessibilityNotes]
      },
      {
        id: 'button-variant-matrix',
        routeSlug: 'button-variant-matrix',
        title: content.examples[1].title,
        description: content.examples[1].description,
        previewKey: 'button-variant-matrix',
        category: 'interactive',
        code: `<div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
  <Button variant="primary">Primary action</Button>
  <Button variant="secondary">Secondary action</Button>
  <Button variant="accent">Accent moment</Button>
</div>`,
        accessibilityNotes: [...content.examples[1].accessibilityNotes]
      }
    ],
    propsDefinition: {
      refType: 'HTMLButtonElement',
      inheritedFrom: 'ButtonHTMLAttributes<HTMLButtonElement>',
      notes: [...content.propsNotes],
      props: [
        {
          name: 'variant',
          type: "'primary' | 'secondary' | 'accent'",
          required: false,
          defaultValue: "'primary'",
          description: content.variantDescription
        }
      ]
    },
    accessibility: [...content.accessibility],
    relatedComponentSlugs: ['surface', 'card'],
    storybook: createStorybookLink(
      '/docs/components-button--docs',
      'Storybook docs route'
    ),
    source: createSourceLink(
      'src/components/atoms/Button/index.tsx',
      'Component source'
    )
  };
}
