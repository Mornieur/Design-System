import type {AppLocale} from '@/i18n/routing';
import {
  createImportCode,
  createSourceLink,
  createStorybookLink
} from './shared';
import type {ComponentEntry} from './types';

const localizedSurfaceContent = {
  en: {
    description:
      'Containment primitive for Level 1 hierarchy, using background, border, and radius without owning layout.',
    overview:
      'Surface establishes public containment and hierarchy without becoming a layout abstraction. It is the right primitive when the UI needs visible grouping but inner composition should remain explicit.',
    usageSummary:
      'Use Surface when the UI needs containment and hierarchy, but the inner layout should stay intentionally simple.',
    useWhen: [
      'You need a clear Level 1 container with border-first hierarchy.',
      'A section, panel, or wrapper should express containment without becoming a full Card.',
      'You want grouping without inventing extra layout or interaction behavior.'
    ],
    avoidWhen: [
      'You only need a neutral utility wrapper and Box would be enough.',
      'You need structured inner padding and a grouped reading rhythm, which is a Card concern.',
      'You are nesting surfaces without a clear hierarchy change.'
    ],
    bestPractices: [
      'Use Surface when containment matters, then compose inner layout explicitly with Box or Flex.',
      'Reserve nested surfaces for moments where the hierarchy shift is clear and supports scanning.',
      'Keep contrast differences subtle enough that the page stays technical rather than ornamental.'
    ],
    doItems: [
      'Use Surface to group controls, summaries, and panels that need a visible boundary.',
      'Add semantic HTML or ARIA only when the surrounding information architecture needs it.',
      'Prefer spacing tokens or explicit padding in composition rather than expanding Surface behavior.'
    ],
    dontItems: [
      'Do not use Surface as a replacement for every neutral wrapper.',
      'Do not stack multiple heavy containers when one hierarchy cue is enough.',
      'Do not turn Surface into a click target unless the interaction contract is explicit elsewhere.'
    ],
    examples: [
      {
        title: 'Containment without layout abstraction',
        description:
          'Surface can group related information while leaving spacing and arrangement to composition primitives.',
        accessibilityNotes: [
          'Surface does not add region semantics or keyboard behavior by default.',
          'Consumers can still pass semantic HTML props when the surrounding context needs them.'
        ]
      },
      {
        title: 'Nested hierarchy control',
        description:
          'Default and secondary surfaces can be nested when the hierarchy shift is explicit and supports reading order.',
        accessibilityNotes: [
          'Hierarchy is visual and structural, not interactive.',
          'The inner surface should not become visually heavier than the outer grouping.'
        ]
      }
    ],
    propsNotes: [
      'Surface forwards its ref to the underlying div element.',
      'It preserves native HTML div attributes such as aria-*, data-*, className, and style.'
    ],
    variantDescription:
      'Adjusts the surface hierarchy without changing layout or interactivity.',
    accessibility: [
      'Surface is not interactive and does not add focusability by default.',
      'Landmarks or region roles should be added only by consumers with real semantic need.',
      'Hierarchy should remain readable in both dark and light themes without relying on glow or shadow.'
    ]
  },
  'pt-BR': {
    description:
      'Primitivo de contenção para hierarquia de Nível 1, usando background, borda e raio sem assumir o layout.',
    overview:
      'Surface estabelece contenção e hierarquia públicas sem virar uma abstração de layout. É a escolha certa quando a interface precisa de agrupamento visível, mas a composição interna deve continuar explícita.',
    usageSummary:
      'Use Surface quando a interface precisa de contenção e hierarquia, mas o layout interno deve continuar simples e explícito.',
    useWhen: [
      'Você precisa de um contêiner claro de Nível 1 com hierarquia orientada por borda.',
      'Uma seção, painel ou wrapper deve expressar contenção sem virar um Card completo.',
      'Você quer agrupar conteúdo sem inventar comportamento extra de layout ou interação.'
    ],
    avoidWhen: [
      'Você só precisa de um wrapper neutro e Box já resolve o problema.',
      'Você precisa de padding interno estruturado e ritmo de leitura agrupado, que são papéis de Card.',
      'Você está aninhando superfícies sem uma mudança clara de hierarquia.'
    ],
    bestPractices: [
      'Use Surface quando a contenção importa e componha o layout interno com Box ou Flex.',
      'Reserve superfícies aninhadas para momentos em que a mudança de hierarquia seja clara e útil para escanear.',
      'Mantenha as diferenças de contraste sutis o bastante para que a página continue técnica, não ornamental.'
    ],
    doItems: [
      'Use Surface para agrupar controles, resumos e painéis que pedem um limite visível.',
      'Adicione HTML semântico ou ARIA apenas quando a arquitetura de informação pedir isso.',
      'Prefira tokens de espaçamento ou padding explícito na composição em vez de expandir o comportamento do componente.'
    ],
    dontItems: [
      'Não use Surface como substituta de todo wrapper neutro.',
      'Não empilhe vários contêineres pesados quando um único sinal de hierarquia basta.',
      'Não transforme Surface em alvo de clique se o contrato de interação não estiver explícito em outro lugar.'
    ],
    examples: [
      {
        title: 'Contenção sem abstração de layout',
        description:
          'Surface consegue agrupar informações relacionadas enquanto deixa espaçamento e arranjo para os primitivos de composição.',
        accessibilityNotes: [
          'Surface não adiciona semântica de região nem comportamento de teclado por padrão.',
          'Consumidores ainda podem passar props semânticos quando o contexto precisar.'
        ]
      },
      {
        title: 'Controle de hierarquia aninhada',
        description:
          'Superfícies default e secondary podem ser aninhadas quando a mudança de hierarquia é explícita e favorece a leitura.',
        accessibilityNotes: [
          'A hierarquia é visual e estrutural, não interativa.',
          'A superfície interna não deve parecer visualmente mais pesada que a externa.'
        ]
      }
    ],
    propsNotes: [
      'Surface encaminha a ref para o elemento div subjacente.',
      'Ela preserva atributos nativos de div, como aria-*, data-*, className e style.'
    ],
    variantDescription:
      'Ajusta a hierarquia da superfície sem alterar layout ou interatividade.',
    accessibility: [
      'Surface não é interativa e não adiciona foco por padrão.',
      'Landmarks ou region roles devem ser adicionados apenas por consumidores com necessidade semântica real.',
      'A hierarquia deve continuar legível em dark e light mode sem depender de glow ou sombra.'
    ]
  }
} as const;

export function createSurfaceEntry(locale: AppLocale): ComponentEntry {
  const content = localizedSurfaceContent[locale];

  return {
    slug: 'surface',
    title: 'Surface',
    kind: 'Atom',
    status: 'Stable public API',
    description: content.description,
    importPath: createImportCode('Surface'),
    overview: content.overview,
    usageSummary: content.usageSummary,
    useWhen: [...content.useWhen],
    avoidWhen: [...content.avoidWhen],
    bestPractices: [...content.bestPractices],
    doItems: [...content.doItems],
    dontItems: [...content.dontItems],
    featuredExampleId: 'surface-containment',
    examples: [
      {
        id: 'surface-containment',
        routeSlug: 'surface-containment',
        title: content.examples[0].title,
        description: content.examples[0].description,
        previewKey: 'surface-containment',
        category: 'composition',
        code: `<Surface style={{ padding: '16px' }}>
  <Flex direction="column" gap={3}>
    <strong>Operational grouping</strong>
    <p style={{ margin: 0 }}>
      Surface provides containment only. Inner layout still belongs to composition.
    </p>
  </Flex>
</Surface>`,
        accessibilityNotes: [...content.examples[0].accessibilityNotes]
      },
      {
        id: 'surface-hierarchy',
        routeSlug: 'surface-hierarchy',
        title: content.examples[1].title,
        description: content.examples[1].description,
        previewKey: 'surface-hierarchy',
        category: 'interactive',
        code: `<Surface style={{ padding: '16px' }}>
  <Flex direction="column" gap={3}>
    <strong>Primary section</strong>
    <Surface variant="secondary" style={{ padding: '12px' }}>
      <Flex direction="column" gap={2}>
        <strong>Secondary grouping</strong>
        <p style={{ margin: 0 }}>
          Nest surfaces only when hierarchy is explicit.
        </p>
      </Flex>
    </Surface>
  </Flex>
</Surface>`,
        accessibilityNotes: [...content.examples[1].accessibilityNotes]
      }
    ],
    propsDefinition: {
      refType: 'HTMLDivElement',
      inheritedFrom: 'HTMLAttributes<HTMLDivElement>',
      notes: [...content.propsNotes],
      props: [
        {
          name: 'variant',
          type: "'default' | 'secondary'",
          required: false,
          defaultValue: "'default'",
          description: content.variantDescription
        }
      ]
    },
    accessibility: [...content.accessibility],
    relatedComponentSlugs: ['card', 'button'],
    storybook: createStorybookLink(
      '/docs/components-surface--docs',
      'Storybook docs route'
    ),
    source: createSourceLink(
      'src/components/atoms/Surface/index.tsx',
      'Component source'
    )
  };
}
