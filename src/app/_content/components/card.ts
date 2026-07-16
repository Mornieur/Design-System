import type {AppLocale} from '@/i18n/routing';
import {
  createImportCode,
  createSourceLink,
  createStorybookLink
} from './shared';
import type {ComponentEntry} from './types';

const localizedCardContent = {
  en: {
    description:
      'Structured content composition built on top of Surface, adding predictable inner padding for related content.',
    overview:
      'Card builds on Surface to create a coherent reading unit for related content. It owns predictable inner padding, but it does not introduce variants, implicit interaction, or product-specific layout behavior.',
    usageSummary:
      'Use Card when a content group needs stable reading rhythm, local metadata, and contextual actions without turning into an interactive shell.',
    useWhen: [
      'The content has a meaningful relationship and should read as one grouped unit.',
      'A section needs predictable inner padding without inventing a product-specific wrapper.',
      'Related title, description, metadata, and contextual actions belong together.'
    ],
    avoidWhen: [
      'You only need outer containment and Surface already solves the problem.',
      'You want the whole container to behave like a button or link without a real interaction contract.',
      'You are trying to create metric tiles, page shells, or navigation wrappers.'
    ],
    bestPractices: [
      'Treat Card as a reading unit with internal rhythm, not as a catch-all page container.',
      'Place contextual actions inside the Card instead of turning the whole Card into a button.',
      'Use headings, short metadata, and separators only when they genuinely improve scanability.'
    ],
    doItems: [
      'Group related text, metrics, and actions inside a single Card when they belong to one task or concept.',
      'Use Card when predictable padding and stable structure help the content breathe.',
      'Let inner interactive elements keep their own keyboard and naming semantics.'
    ],
    dontItems: [
      'Do not wrap large page regions in Card just to add decoration.',
      'Do not imply clickability on the whole Card if only one inner control is interactive.',
      'Do not replace more neutral containment with Card unless the content truly needs that structure.'
    ],
    examples: [
      {
        title: 'Related content grouping',
        description:
          'Card is useful when related operational data benefits from a stable reading rhythm.',
        accessibilityNotes: [
          'Card itself is not focusable or interactive by default.',
          "Structured headings and inner controls remain the consumer's responsibility."
        ]
      },
      {
        title: 'Contextual actions inside a Card',
        description:
          'Actions can live inside a Card when they belong to the same content group, without turning the Card itself into a button.',
        accessibilityNotes: [
          'Interactive descendants remain fully responsible for keyboard interaction and naming.',
          'The Card container still stays non-interactive by default.'
        ]
      }
    ],
    propsNotes: [
      'Card does not define its own public props in the current API.',
      'It forwards its ref to the underlying div element and preserves native div attributes.'
    ],
    accessibility: [
      'Card does not add role, tabIndex, or click semantics by default.',
      'Interactive descendants stay interactive without requiring the Card to own keyboard behavior.',
      'Use headings, descriptive text, and explicit controls inside the Card when the content needs structure.'
    ]
  },
  'pt-BR': {
    description:
      'Composição estruturada de conteúdo construída sobre Surface, com padding interno previsível para conteúdo relacionado.',
    overview:
      'Card se apoia em Surface para criar uma unidade coerente de leitura para conteúdo relacionado. Ela assume um padding interno previsível, mas não introduz variantes, interação implícita ou comportamento de layout específico de produto.',
    usageSummary:
      'Use Card quando um grupo de conteúdo precisa de ritmo de leitura estável, metadados locais e ações contextuais sem virar uma casca interativa.',
    useWhen: [
      'O conteúdo tem uma relação clara e deve ser lido como uma unidade agrupada.',
      'Uma seção precisa de padding interno previsível sem inventar um wrapper específico de produto.',
      'Título, descrição, metadados e ações contextuais pertencem ao mesmo conjunto.'
    ],
    avoidWhen: [
      'Você só precisa de contenção externa e Surface já resolve o problema.',
      'Você quer que o contêiner inteiro se comporte como botão ou link sem um contrato real de interação.',
      'Você está tentando criar tiles de métricas, shells de página ou wrappers de navegação.'
    ],
    bestPractices: [
      'Trate Card como unidade de leitura com ritmo interno, não como contêiner genérico de página.',
      'Coloque ações contextuais dentro do Card em vez de transformar o bloco inteiro em botão.',
      'Use títulos, metadados curtos e separadores apenas quando eles realmente melhorarem a escaneabilidade.'
    ],
    doItems: [
      'Agrupe texto, métricas e ações relacionadas dentro de um único Card quando fizerem parte da mesma tarefa ou conceito.',
      'Use Card quando padding previsível e estrutura estável ajudarem o conteúdo a respirar.',
      'Deixe que elementos interativos internos mantenham suas próprias semânticas de teclado e nomeação.'
    ],
    dontItems: [
      'Não envolva grandes regiões da página em Card apenas para decorar.',
      'Não sugira clicabilidade no Card inteiro se apenas um controle interno for interativo.',
      'Não substitua contenção neutra por Card se o conteúdo não precisar dessa estrutura.'
    ],
    examples: [
      {
        title: 'Agrupamento de conteúdo relacionado',
        description:
          'Card funciona bem quando dados operacionais relacionados se beneficiam de um ritmo estável de leitura.',
        accessibilityNotes: [
          'O Card em si não é focável nem interativo por padrão.',
          'Títulos estruturados e controles internos continuam sendo responsabilidade de quem consome.'
        ]
      },
      {
        title: 'Ações contextuais dentro de um Card',
        description:
          'Ações podem viver dentro de um Card quando pertencem ao mesmo conjunto de conteúdo, sem transformar o Card em um botão.',
        accessibilityNotes: [
          'Descendentes interativos continuam totalmente responsáveis por teclado e nomeação.',
          'O contêiner Card permanece não interativo por padrão.'
        ]
      }
    ],
    propsNotes: [
      'Card não define props públicas próprias na API atual.',
      'Ela encaminha a ref para a div subjacente e preserva atributos nativos.'
    ],
    accessibility: [
      'Card não adiciona role, tabIndex ou semântica de clique por padrão.',
      'Descendentes interativos continuam interativos sem exigir que o Card assuma o teclado.',
      'Use títulos, texto descritivo e controles explícitos dentro do Card quando o conteúdo precisar de estrutura.'
    ]
  }
} as const;

export function createCardEntry(locale: AppLocale): ComponentEntry {
  const content = localizedCardContent[locale];

  return {
    slug: 'card',
    title: 'Card',
    kind: 'Molecule',
    status: 'Stable public API',
    description: content.description,
    importPath: createImportCode('Card'),
    overview: content.overview,
    usageSummary: content.usageSummary,
    useWhen: [...content.useWhen],
    avoidWhen: [...content.avoidWhen],
    bestPractices: [...content.bestPractices],
    doItems: [...content.doItems],
    dontItems: [...content.dontItems],
    featuredExampleId: 'card-related-content',
    examples: [
      {
        id: 'card-related-content',
        routeSlug: 'card-related-content',
        title: content.examples[0].title,
        description: content.examples[0].description,
        previewKey: 'card-related-content',
        category: 'composition',
        code: `<Card>
  <Flex direction="column" gap={3}>
    <div>
      <h3 style={{ margin: 0 }}>Queue health</h3>
      <p style={{ margin: '8px 0 0' }}>
        Related operational status and supporting metrics belong together.
      </p>
    </div>
    <Divider />
    <Flex justify="space-between" align="center">
      <span>Mean acknowledgment</span>
      <span>04m 12s</span>
    </Flex>
  </Flex>
</Card>`,
        accessibilityNotes: [...content.examples[0].accessibilityNotes]
      },
      {
        id: 'card-contextual-actions',
        routeSlug: 'card-contextual-actions',
        title: content.examples[1].title,
        description: content.examples[1].description,
        previewKey: 'card-contextual-actions',
        category: 'interactive',
        code: `<Card>
  <Flex direction="column" gap={3}>
    <Flex justify="space-between" align="center" style={{ gap: '12px', flexWrap: 'wrap' }}>
      <div>
        <h3 style={{ margin: 0 }}>Runbook review</h3>
        <p style={{ margin: '4px 0 0' }}>
          Contextual actions can live inside a Card when they belong to the same content group.
        </p>
      </div>
      <Flex align="center" gap={2} style={{ flexWrap: 'wrap' }}>
        <Button variant="secondary">Dismiss</Button>
        <Button>Open runbook</Button>
      </Flex>
    </Flex>
  </Flex>
</Card>`,
        accessibilityNotes: [...content.examples[1].accessibilityNotes]
      }
    ],
    propsDefinition: {
      refType: 'HTMLDivElement',
      inheritedFrom: 'HTMLAttributes<HTMLDivElement>',
      notes: [...content.propsNotes],
      props: []
    },
    accessibility: [...content.accessibility],
    relatedComponentSlugs: ['surface', 'button'],
    storybook: createStorybookLink(
      '/docs/components-card--docs',
      'Storybook docs route'
    ),
    source: createSourceLink(
      'src/components/molecules/Card/index.tsx',
      'Component source'
    )
  };
}
