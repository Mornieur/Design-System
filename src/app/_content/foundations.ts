import type {AppLocale} from '@/i18n/routing';

export type FoundationEntry = {
  slug: string;
  title: string;
  summary: string;
  principles: string[];
  detailTitle: string;
  detailIntro: string;
  specimenLabel: string;
  specimenTitle: string;
  specimenBody: string;
  guidanceTitle: string;
  guidance: string[];
};

const localizedEntries = {
  en: [
    {
      slug: 'colors',
      title: 'Color System',
      summary:
        'Blue-gray infrastructure surfaces, cyan action signals, and a controlled coral accent layer.',
      detailTitle: 'Color keeps the interface technical, readable, and calm.',
      detailIntro:
        'FeitozaUI uses a restrained palette so actions, hierarchy, and focus states stay obvious without turning the docs into a decorative dashboard.',
      specimenLabel: 'Palette behavior',
      specimenTitle: 'Signal first, accent second.',
      specimenBody:
        'Cyan carries action and focus. Coral is saved for rare emphasis moments. Neutral surfaces do most of the structural work.',
      principles: [
        'Dark and light themes use the same hierarchy rules even when the palette shifts.',
        'Action, focus, and selection colors come from semantic roles instead of page-specific improvisation.',
        'Accent stays rare so interactive states remain easier to scan.'
      ],
      guidanceTitle: 'Use color to clarify intent, not to decorate.',
      guidance: [
        'Keep the highest contrast for actions, headings, and key state changes.',
        'Let surfaces and borders establish structure before adding accent color.',
        'Avoid stacking multiple bright signals in the same cluster.'
      ]
    },
    {
      slug: 'typography',
      title: 'Typography Roles',
      summary:
        'Inter for reading, Outfit and Space Grotesk for hierarchy, JetBrains Mono for code and metrics.',
      detailTitle: 'Typography gives the docs both pace and precision.',
      detailIntro:
        'The system separates reading, hierarchy, and technical detail so long-form guidance, API tables, and previews can coexist without visual noise.',
      specimenLabel: 'Reading system',
      specimenTitle: 'Readable first, distinctive second.',
      specimenBody:
        'Body copy stays steady and neutral. Display styles add presence to major moments. Monospace appears only where technical scanning benefits from it.',
      principles: [
        'Readable body copy takes priority over visual flourish.',
        'Monospace is reserved for labels, package names, code, and compact metadata.',
        'Display typography should create hierarchy without making the documentation feel like marketing.'
      ],
      guidanceTitle: 'Treat type as a navigation tool.',
      guidance: [
        'Keep headings short enough to scan in one glance.',
        'Reduce decorative text treatments inside dense content areas.',
        'Use monospace only when it improves recognition or copying.'
      ]
    },
    {
      slug: 'spacing',
      title: 'Spacing Scale',
      summary:
        'A compact token scale supports dense product layouts and a calm documentation rhythm.',
      detailTitle: 'Spacing decides whether the docs feel precise or padded.',
      detailIntro:
        'FeitozaUI favors compact, deliberate spacing so the product feels serious and information-dense without becoming cramped.',
      specimenLabel: 'Rhythm check',
      specimenTitle: 'Tight clusters, generous section breaks.',
      specimenBody:
        'Component groups stay compact. Page sections breathe a bit more. The difference between the two is what keeps the reading rhythm clear.',
      principles: [
        'Token steps should carry most spacing decisions before one-off values enter the picture.',
        'Reading layouts need more vertical rhythm than example toolbars or metadata rows.',
        'Empty space should separate tasks, not simply inflate the page.'
      ],
      guidanceTitle: 'Use spacing to sharpen hierarchy.',
      guidance: [
        'Compress previews, cards, and toolbars before shrinking typography.',
        'Reserve larger gaps for section changes and mode changes.',
        'Watch for repeated padding patterns that make every page feel equally loud.'
      ]
    },
    {
      slug: 'surface-system',
      title: 'Surface System',
      summary:
        'Background, surface, raised, floating, and overlay layers define visual weight.',
      detailTitle: 'Surfaces create depth without turning the docs into stacked cards.',
      detailIntro:
        'The surface system is intentionally restrained. Borders, subtle fills, and small contrast shifts carry hierarchy before shadow and ornament do.',
      specimenLabel: 'Layer stack',
      specimenTitle: 'Weight comes from contrast, not spectacle.',
      specimenBody:
        'The shell stays quiet, previews sit forward, and overlays become noticeable only when a new task is being introduced.',
      principles: [
        'Depth is conveyed primarily through surface lightness and border treatment.',
        'Cards should feel related to one another, not like isolated floating objects.',
        'The shell uses the same layer logic as the components so the docs feel system-led.'
      ],
      guidanceTitle: 'Escalate surface weight only when the task changes.',
      guidance: [
        'Use one dominant surface per section instead of nesting multiple heavy panels.',
        'Keep preview wells distinct from prose surfaces and code surfaces.',
        'Let border rhythm do more work than shadow in both themes.'
      ]
    },
    {
      slug: 'motion',
      title: 'Motion Budget',
      summary:
        'Short, functional transitions only, with reduced-motion compliance baked into the shell.',
      detailTitle: 'Motion should support orientation, not compete with content.',
      detailIntro:
        'The documentation uses a narrow motion budget so state changes feel crisp while reading and comparison remain the priority.',
      specimenLabel: 'Interaction tempo',
      specimenTitle: 'Short transitions, no decorative loops.',
      specimenBody:
        'Hover, focus, and theme changes stay quick. Anything longer would add mood at the expense of clarity.',
      principles: [
        'Base page interactions stay within a short transition range so the UI feels responsive.',
        'No looping decorative motion is introduced into the shell.',
        'Reduced motion removes transitions and animation timing across the docs.'
      ],
      guidanceTitle: 'Use motion only when it explains change.',
      guidance: [
        'Limit motion to focus, hover, reveal, and context changes.',
        'Never require animation to understand state or hierarchy.',
        'If an effect draws attention to itself, it is already too loud for the documentation.'
      ]
    }
  ],
  'pt-BR': [
    {
      slug: 'colors',
      title: 'Sistema de cores',
      summary:
        'Superfícies azul-acinzentadas, sinais de ação em ciano e uma camada de acento coral usada com controle.',
      detailTitle: 'A cor mantém a interface técnica, legível e calma.',
      detailIntro:
        'FeitozaUI usa uma paleta contida para que ações, hierarquia e foco fiquem claros sem transformar a documentação em um dashboard decorativo.',
      specimenLabel: 'Comportamento da paleta',
      specimenTitle: 'Sinal primeiro, acento depois.',
      specimenBody:
        'O ciano carrega ação e foco. O coral aparece só em momentos raros de ênfase. As superfícies neutras fazem a maior parte do trabalho estrutural.',
      principles: [
        'Os temas claro e escuro seguem a mesma lógica de hierarquia, mesmo com paletas diferentes.',
        'Ação, foco e seleção partem de papéis semânticos, não de escolhas improvisadas por página.',
        'O acento fica raro para manter os estados interativos fáceis de escanear.'
      ],
      guidanceTitle: 'Use cor para esclarecer intenção, não para decorar.',
      guidance: [
        'Reserve o maior contraste para ações, títulos e mudanças importantes de estado.',
        'Deixe superfícies e bordas estruturar a página antes de adicionar cor de acento.',
        'Evite acumular vários sinais brilhantes no mesmo agrupamento.'
      ]
    },
    {
      slug: 'typography',
      title: 'Papéis tipográficos',
      summary:
        'Inter para leitura, Outfit e Space Grotesk para hierarquia, JetBrains Mono para código e metadados.',
      detailTitle: 'A tipografia dá ritmo e precisão à documentação.',
      detailIntro:
        'O sistema separa leitura, hierarquia e detalhe técnico para que textos longos, tabelas de API e previews convivam sem ruído visual.',
      specimenLabel: 'Sistema de leitura',
      specimenTitle: 'Legibilidade primeiro, assinatura depois.',
      specimenBody:
        'O texto corrido fica estável e neutro. Os estilos de destaque entram nos momentos principais. A monospace aparece só quando ajuda a escanear.',
      principles: [
        'A legibilidade do corpo de texto vem antes do efeito visual.',
        'Monospace fica restrita a rótulos, nomes de pacote, código e metadados compactos.',
        'A tipografia de destaque deve criar hierarquia sem transformar a documentação em marketing.'
      ],
      guidanceTitle: 'Trate a tipografia como ferramenta de navegação.',
      guidance: [
        'Mantenha títulos curtos o bastante para serem lidos num único olhar.',
        'Reduza tratamentos decorativos dentro de áreas densas de conteúdo.',
        'Use monospace só quando ela realmente melhorar reconhecimento ou cópia.'
      ]
    },
    {
      slug: 'spacing',
      title: 'Escala de espaçamento',
      summary:
        'Uma escala compacta de tokens sustenta layouts densos e um ritmo calmo de leitura.',
      detailTitle: 'O espaçamento decide se a documentação parece precisa ou inchada.',
      detailIntro:
        'FeitozaUI prefere espaçamento compacto e deliberado para que o produto pareça sério e denso em informação sem ficar apertado.',
      specimenLabel: 'Checagem de ritmo',
      specimenTitle: 'Agrupamentos enxutos, mudanças de seção mais abertas.',
      specimenBody:
        'Grupos de componente ficam compactos. As seções de página respiram um pouco mais. Essa diferença é o que mantém o ritmo de leitura claro.',
      principles: [
        'Os passos de token devem sustentar a maior parte das decisões antes de surgirem valores avulsos.',
        'Layouts de leitura pedem mais ritmo vertical do que toolbars de exemplo ou linhas de metadado.',
        'Espaço vazio deve separar tarefas, não apenas inflar a página.'
      ],
      guidanceTitle: 'Use o espaçamento para afiar a hierarquia.',
      guidance: [
        'Comprima previews, cards e toolbars antes de reduzir tipografia.',
        'Reserve gaps maiores para mudança de seção e mudança de modo.',
        'Observe padrões de padding repetidos que façam todas as páginas parecerem igualmente altas.'
      ]
    },
    {
      slug: 'surface-system',
      title: 'Sistema de superfícies',
      summary:
        'Background, surface, raised, floating e overlay definem o peso visual da interface.',
      detailTitle: 'As superfícies criam profundidade sem transformar tudo em cards empilhados.',
      detailIntro:
        'O sistema de superfícies é intencionalmente contido. Bordas, preenchimentos sutis e pequenas mudanças de contraste carregam a hierarquia antes de sombra e ornamento.',
      specimenLabel: 'Escala de camadas',
      specimenTitle: 'O peso vem do contraste, não do espetáculo.',
      specimenBody:
        'O shell fica quieto, os previews avançam um pouco e overlays só ficam evidentes quando uma nova tarefa realmente começa.',
      principles: [
        'A profundidade vem principalmente da diferença de superfície e do tratamento de borda.',
        'Os cards devem parecer parte do mesmo sistema, e não objetos flutuando isolados.',
        'O shell usa a mesma lógica de camadas dos componentes para que a documentação pareça conduzida pelo sistema.'
      ],
      guidanceTitle: 'Aumente o peso da superfície apenas quando a tarefa mudar.',
      guidance: [
        'Use uma superfície dominante por seção em vez de várias caixas pesadas aninhadas.',
        'Diferencie bem poços de preview, superfícies de leitura e superfícies de código.',
        'Deixe o ritmo de bordas trabalhar mais do que a sombra em ambos os temas.'
      ]
    },
    {
      slug: 'motion',
      title: 'Orçamento de movimento',
      summary:
        'Transições curtas e funcionais, com suporte a reduced motion incorporado ao shell.',
      detailTitle: 'O movimento deve orientar, não competir com o conteúdo.',
      detailIntro:
        'A documentação usa um orçamento de movimento estreito para que mudanças de estado pareçam ágeis enquanto leitura e comparação continuam sendo prioridade.',
      specimenLabel: 'Tempo de interação',
      specimenTitle: 'Transições curtas, sem loops decorativos.',
      specimenBody:
        'Hover, foco e troca de tema ficam rápidos. Qualquer coisa mais longa adicionaria clima às custas de clareza.',
      principles: [
        'As interações base ficam em uma faixa curta para que a interface pareça responsiva.',
        'Nenhum loop decorativo entra no shell da documentação.',
        'Reduced motion remove transições e tempos de animação por toda a experiência.'
      ],
      guidanceTitle: 'Use movimento só quando ele explicar mudança.',
      guidance: [
        'Restrinja movimento a foco, hover, revelação e mudança de contexto.',
        'Nunca dependa de animação para explicar estado ou hierarquia.',
        'Se um efeito chama atenção para si mesmo, ele já está alto demais para a documentação.'
      ]
    }
  ]
} satisfies Record<AppLocale, FoundationEntry[]>;

export function getFoundationEntries(locale: AppLocale) {
  return localizedEntries[locale];
}

export function getFoundationEntry(locale: AppLocale, slug: string) {
  return getFoundationEntries(locale).find((entry) => entry.slug === slug);
}
