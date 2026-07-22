# V1.1 Form Controls Plan

## SPEC

### Problema atual

FeitozaUI já possui uma base funcional para campos textuais com `Input`, `Select` e `Textarea`, mas a biblioteca ainda não cobre controles essenciais de formulário para cenários reais de preferência, configuração e escolha booleana/exclusiva.

Hoje faltam principalmente:

- um controle booleano simples para formulários reais;
- uma estratégia clara para seleção exclusiva;
- uma distinção semântica entre escolha booleana de formulário e alternância imediata de configuração;
- um posicionamento arquitetural explícito sobre repetição entre `Input`, `Select`, `Textarea` e futuros controles.

### Valor para consumidores

- amplia a utilidade real do pacote em formulários comuns sem transformá-lo em form framework;
- reduz a necessidade de consumidores misturarem FeitozaUI com controles avulsos de outra biblioteca;
- melhora a coerência entre campos existentes e novos controles;
- preserva comportamento nativo de formulário, foco, teclado, `ref` e submissão HTML.

### Objetivos

- introduzir a base de form controls da `v1.1` com API pequena e previsível;
- preservar semântica HTML nativa sempre que possível;
- alinhar novos controles à linguagem atual de `Input`, `Select` e `Textarea`;
- evitar breaking changes na superfície pública existente;
- documentar e testar tudo em Storybook, docs `en` e `pt-BR`, consumidores e builds.

### Restrições

- não virar form framework;
- não alterar versão do pacote;
- não publicar npm;
- não adicionar dependências sem necessidade comprovada;
- não criar abstração pública prematura;
- não implementar todos os componentes de uma vez;
- não alterar a API pública existente sem justificativa explícita.

### Critérios de aceite

- os novos controles resolvem casos reais de formulário;
- não há breaking changes;
- não há duplicação desnecessária de API;
- o HTML nativo segue sendo a base da acessibilidade;
- teclado, `ref` e props HTML são preservados;
- Storybook, docs `en` e `pt-BR`, testes e `pack --dry-run` continuam válidos;
- consumidores `react-vite` e `next-app-router` continuam preservados.

### Riscos

- introduzir um `Field` público cedo demais e inflar a API;
- esconder demais o input nativo e perder comportamento de foco, teclado ou submissão;
- tornar `Checkbox`, `Radio` e `Switch` visualmente parecidos demais e semanticamente ambíguos;
- aumentar a superfície pública com props de layout desnecessárias;
- introduzir tokens específicos de componente sem repetição suficiente.

### Fora de escopo

- `Dialog`, `Modal`, `Tooltip`, `Popover`, `Toast`;
- `Combobox`, `Autocomplete`, `DatePicker`, `File Upload`;
- validação de formulário;
- adapters para React Hook Form;
- máscaras;
- gerenciador de estado de formulário;
- theme runtime;
- tokens específicos de componente sem necessidade comprovada.

## Estado Atual

- `develop` local foi atualizado para `60c6e20`, merge da RC em `origin/develop`.
- nova branch criada a partir dessa base: `feat/v1.1-form-controls`.
- a superfície pública atual relevante contém:
  - `Button`
  - `Input`
  - `Textarea`
  - `Select`
  - `Tabs`
  - `Badge`
  - `Divider`
  - `Box`
  - `Flex`
  - `Surface`
  - `Card`

## Diagnóstico Dos Controles Atuais

### Input

Pontos fortes:

- usa `input` nativo;
- faz `forwardRef` para o elemento real;
- preserva props HTML nativas com `Omit<...,'size'>`;
- associa `label`, `helperText`, `errorMessage`, `required`, IDs e `aria-describedby`;
- suporta `invalid` e também respeita `aria-invalid` quando não invalida internamente;
- possui slots decorativos de ícone;
- tem testes e stories fortes.

Pontos de atenção:

- a área clicável extra no wrapper é útil para ícones, mas é uma especialização de `Input`, não um padrão universal dos campos;
- o tamanho público (`sm | md | lg`) existe, mas ainda não está comprovado como necessidade universal para todos os futuros controls.

### Select

Pontos fortes:

- usa `select` nativo;
- `forwardRef` correto;
- mantém placeholder via `option value="" disabled` sem duplicação automática;
- cobre `helperText`, `errorMessage`, `invalid`, `required`, IDs e `aria-describedby`;
- tem stories de estados relevantes e testes sólidos;
- mantém o menu aberto no domínio do browser, o que simplifica acessibilidade.

Pontos de atenção:

- a anatomia visual imita `Input`, mas a implementação é estruturalmente diferente por causa do `Chevron` e do placeholder nativo;
- o `Select` já mostra que a repetição com `Input` não é suficiente para um componente público unificador.

### Textarea

Pontos fortes:

- usa `textarea` nativo;
- `forwardRef` correto;
- cobre `label`, `helperText`, `errorMessage`, `invalid`, `required`, IDs e `aria-describedby`;
- expõe `resize` de forma explícita;
- mantém consistência de foco, erro, disabled e readonly com `Input`;
- tem testes e stories completos.

Pontos de atenção:

- a semântica multi-linha naturalmente exige outra altura, outro padding e outro ritmo vertical;
- isso reforça que a repetição está na anatomia de campo, não no visual exato do controle.

## Inconsistências

Consistências claras entre `Input`, `Select` e `Textarea`:

- `label?: ReactNode`
- `helperText?: ReactNode`
- `errorMessage?: ReactNode`
- `invalid?: boolean`
- `fullWidth?: boolean`
- geração de ID com `useId`
- `required` com asterisco visual
- composição de `aria-describedby`
- `aria-invalid` derivado de `invalid || errorMessage`
- `forwardRef`
- preservação de `className`, `style`, `data-*`, `aria-*`
- transient props não vazam para o DOM
- stories com estados equivalentes
- testes de acessibilidade e pass-through similares

Divergências justificadas:

- `Input` tem `startIcon` e `endIcon`;
- `Textarea` tem `resize`;
- `Select` tem `placeholder` específico e chevron decorativo;
- alturas e paddings variam por semântica do elemento.

Divergências que hoje são mais “shape drift” do que bug crítico:

- `Input` usa wrapper focável por clique indireto; `Select` e `Textarea` não seguem o mesmo padrão;
- `Input` e `Select` compartilham ritmo visual mais próximo entre si do que com `Textarea`, mas não por abstração explícita;
- `size` está padronizado entre os três, porém ainda sem evidência de que a mesma API de tamanho faça sentido para todo novo form control.

Bugs identificados:

- nenhum bug funcional crítico evidente no comportamento acessível atual dos três controles;
- a principal lacuna é arquitetural: repetição sem política formalizada.

## Repetição Arquitetural

### Evidência real de repetição

Existe repetição real em:

- label;
- required indicator;
- helper text;
- error message;
- invalid state derivado;
- geração de IDs;
- composição de `aria-describedby`;
- spacing vertical de label/campo/mensagem;
- contrato de `forwardRef` + pass-through.

### Decisão

Decisão aprovada: **B. extrair camada interna não pública, se e somente se a implementação do primeiro slice realmente precisar.**

Decisões rejeitadas por enquanto:

- **C. `Field` público**: sem evidência suficiente para suportar mais um componente público estável.
- **D. `FormField` molecule pública**: ainda seria uma abstração de organização, não uma necessidade provada.

### O que deve continuar separado

- a estrutura visual do controle;
- ícones do `Input`;
- placeholder e chevron do `Select`;
- resize e altura multi-linha do `Textarea`;
- futuras diferenças semânticas entre `Checkbox`, `Radio` e `Switch`.

## Componentes Candidatos

- `Checkbox`
- `Radio`
- `RadioGroup`
- `Switch`
- camada interna compartilhada de field anatomy
- `Field` público
- `FormField` público

## Componentes Aprovados

Para a fase `v1.1` como trilha de trabalho:

- `Checkbox`
- `Radio`
- `RadioGroup`
- `Switch`
- revisão integrada de `Input`, `Select` e `Textarea` somente se necessária para consistência
- camada interna não pública de field anatomy, apenas se a implementação provar valor real

Para a primeira fatia vertical:

- **somente `Checkbox` completo**

## Componentes Adiados

- `Field` público
- `FormField` público
- qualquer compound API extensa
- qualquer form abstraction além do necessário para o primeiro slice

## Atomic Design

Classificação proposta:

- `Checkbox`: atom
- `Radio`: atom
- `Switch`: atom
- `RadioGroup`: molecule ou primitive de composição
- `Field`/`FormField`: molecule, apenas se aprovado no futuro

Revisão das classificações atuais:

- `Button`, `Badge`, `Box`, `Divider`, `Flex`, `Input`, `Select`, `Surface`, `Textarea` seguem como atoms
- `Card` e `Tabs` seguem como molecules

Nenhuma mudança estrutural de diretórios é necessária nesta fase.

## APIs Propostas

### Checkbox

API mínima proposta:

```ts
export type CheckboxProps =
  Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> & {
    label?: React.ReactNode;
    helperText?: React.ReactNode;
    errorMessage?: React.ReactNode;
    invalid?: boolean;
    indeterminate?: boolean;
    fullWidth?: boolean;
  };
```

Decisões:

- `label` fica no atom para manter ergonomia consistente com `Input`, `Select` e `Textarea`;
- `helperText` e `errorMessage` também ficam no atom inicialmente, porque ainda não há `Field` público;
- `invalid` é mantido para paralelismo com os campos atuais;
- `indeterminate` deve ser prop pública, porque é estado real e não mapeia em atributo HTML sozinho;
- `size` não entra no primeiro slice, salvo evidência de uso real durante implementação;
- layout da label permanece responsabilidade do componente no caso padrão.

### Radio

API mínima proposta:

```ts
export type RadioProps =
  Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> & {
    label?: React.ReactNode;
    helperText?: React.ReactNode;
    errorMessage?: React.ReactNode;
    invalid?: boolean;
    fullWidth?: boolean;
  };
```

Decisões:

- preservar `name`, `value`, `checked`, `defaultChecked` e `onChange` nativos;
- sem estado interno extra;
- manter paralelismo com `Checkbox` sempre que não gerar ruído de API.

### RadioGroup

API mínima proposta, ainda sujeita à implementação posterior:

```ts
export type RadioGroupProps = React.FieldsetHTMLAttributes<HTMLFieldSetElement> & {
  legend?: React.ReactNode;
  helperText?: React.ReactNode;
  errorMessage?: React.ReactNode;
  invalid?: boolean;
  orientation?: 'vertical' | 'horizontal';
};
```

Direção:

- preferir `fieldset` + `legend`;
- usar context apenas se a implementação entregar valor real para `name`, associação e ergonomia;
- evitar API inspirada em Radix sem necessidade local.

### Switch

API direcional:

```ts
export type SwitchProps =
  Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> & {
    label?: React.ReactNode;
    helperText?: React.ReactNode;
    errorMessage?: React.ReactNode;
    invalid?: boolean;
    fullWidth?: boolean;
  };
```

Decisão semântica preferida:

- implementar como `checkbox` nativo estilizado, não como `button` com `role="switch"` no primeiro momento;
- isso preserva melhor foco, formulário, submissão e compatibilidade com consumers.

## Acessibilidade

### Checkbox

- base em `input type="checkbox"`;
- suportar `checked`, `defaultChecked`, `disabled`, `required`, `name`, `value`, `ref`;
- `indeterminate` aplicado via propriedade do DOM, com sincronização explícita;
- label visível por padrão quando fornecida;
- teclado nativo com `Space`;
- foco visível no controle real;
- submissão de formulário preservada.

### Radio

- base em `input type="radio"`;
- preservar `name`, `value`, `checked`, `defaultChecked`, `disabled`, `required`;
- teclado nativo preservado;
- sem esconder o input de modo a quebrar forced colors ou screen reader.

### RadioGroup

- preferir `fieldset` + `legend`;
- `helperText` e `errorMessage` no nível do grupo;
- `name` compartilhado pelas radios do grupo;
- orientação apenas visual, não semântica;
- controlled/uncontrolled só se houver valor real de API.

### Switch

- usar semântica nativa baseada em checkbox;
- distinguir conceitualmente de checkbox na documentação: switch muda estado imediato, checkbox representa escolha de formulário;
- `role="switch"` só se a implementação realmente exigir, e não como enfeite.

### Regras obrigatórias

- não esconder input nativo de forma a perder foco;
- não quebrar keyboard;
- não quebrar form submission;
- preservar forced colors e high contrast;
- comunicar erro além de cor apenas.

## Tokens

Os tokens atuais já cobrem o necessário para a primeira fase:

- `borders`
- `focus`
- `motion`
- `states`
- `radii`
- `space`
- `semanticColors`
- `colorRoles`

Decisões:

- não criar `checkboxBackground`, `radioDotSize`, `switchThumbColor` agora;
- usar semantic tokens existentes para selected, checked, invalid, disabled e focus;
- icon sizing pode reaproveitar medidas já usadas pelos campos e ícones atuais.

## Storybook

Planejamento mínimo por componente novo:

- default
- disabled
- required
- invalid com mensagem
- invalid sem mensagem
- helper text
- controlled
- uncontrolled
- realistic form example
- accessibility example
- usage guidelines

Para `Checkbox`:

- checked
- unchecked
- indeterminate
- group-like usage simples por composição

## Documentation Website

Cada componente novo deve ter:

- overview
- when to use
- when not to use
- examples
- API
- accessibility
- keyboard
- related components
- source link

Idioma:

- `en`
- `pt-BR`

Direção editorial:

- docs honestas
- sem prometer recursos não implementados
- sem importar linguagem de outras libs

## i18n

O trabalho de `v1.1` deve respeitar a arquitetura de i18n recém consolidada:

- stories e docs seguem em inglês quando esse já for o padrão do Storybook;
- Documentation Website precisa refletir `en` e `pt-BR`;
- exemplos editoriais internos devem nascer traduzíveis desde a primeira entrega.

## Testes

### Checkbox

Cobertura esperada:

- render
- `forwardRef`
- props HTML nativas
- `className`
- `style`
- `data-*`
- `aria-*`
- controlled
- uncontrolled
- checked
- defaultChecked
- disabled
- required
- label
- form submission
- keyboard
- focus
- events
- `indeterminate`
- sem vazamento de transient props

### Radio / RadioGroup

Cobertura futura:

- name/value
- checked/defaultChecked
- exclusividade por grupo
- semântica de `fieldset` e `legend`
- keyboard nativo
- helper/error de grupo

### Switch

Cobertura futura:

- checked/defaultChecked
- disabled
- label
- keyboard
- focus
- form behavior

## Examples

Exemplos editoriais internos planejados:

### Notification Preferences

- `Checkbox`
- `Switch`
- helper text
- `Card`
- `Button`

### Account Settings

- `Input`
- `Select`
- `RadioGroup`
- `Switch`
- `Button`

Regras:

- ficam em Storybook e/ou docs do site
- não viram componentes públicos
- devem funcionar em dark e light
- devem ser traduzíveis
- não exigem backend

## Bundle / Package Impact

Impactos esperados:

- novos exports públicos apenas para componentes aprovados
- declarations aumentam de forma proporcional
- bundle cresce de forma pequena e justificável
- sem nova dependência planejada neste momento
- tree shaking preservado
- UMD continua funcionando se não houver dependência extra
- package root continua enxuto
- consumers `React + Vite` e `Next App Router` precisam seguir verdes

Risco principal:

- um helper público de campo aumentaria a superfície do pacote sem necessidade comprovada.

## Consumer Impact

- nenhum breaking change planejado;
- novos componentes devem consumir apenas React + styled-components + tokens já existentes;
- nenhuma dependência de Next deve vazar;
- consumer-tests continuam sendo requisito quando a superfície pública mudar.

## Ordem De Implementação

Ordem aprovada:

1. auditoria dos controles atuais
2. documento de planejamento
3. `Checkbox`
4. revisão integrada da anatomia de campo, apenas se o `Checkbox` provar necessidade de helper interno
5. `Radio`
6. `RadioGroup`
7. `Switch`
8. exemplos reais
9. Storybook
10. Documentation Website
11. consumer verification

## Radio Slice Plan

### Problema

Depois do `Checkbox`, ainda falta um controle exclusivo nativo para fluxos de escolha única sem empurrar consumidores para soluções improvisadas ou para um `RadioGroup` prematuro.

### Caso de uso

- seleção exclusiva simples em formulários HTML;
- uso isolado quando o layout não pede agrupamento visual;
- composição manual de múltiplos radios com `name` compartilhado;
- base confiável para um `RadioGroup` posterior.

### API preliminar

```ts
export type RadioProps =
  Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> & {
    label?: React.ReactNode;
    helperText?: React.ReactNode;
    errorMessage?: React.ReactNode;
    invalid?: boolean;
    fullWidth?: boolean;
  };
```

Decisões atuais:

- `helperText` e `errorMessage` permanecem no `Radio` isolado para manter paralelismo com `Checkbox` e cobrir uso sem `RadioGroup`;
- `fullWidth` continua fazendo sentido como prop de layout opcional, especialmente em listas verticais ou containers estreitos;
- `name` continua sendo responsabilidade do próprio `Radio`, mesmo antes do futuro `RadioGroup`;
- o `Radio` deve funcionar perfeitamente sem `RadioGroup`;
- a API deve espelhar `Checkbox` sempre que isso não introduzir ruído semântico;
- não haverá `indeterminate`.

### Semântica

- base obrigatória em `input type="radio"`;
- preservar `checked`, `defaultChecked`, `name`, `value`, `required`, `disabled`, `onChange` e `ref`;
- submissão de formulário deve continuar 100% nativa;
- exclusividade entre opções continua sendo responsabilidade nativa do browser via `name`.

### Acessibilidade

- foco visível no input real;
- teclado nativo preservado, incluindo `Tab` e comportamento do browser para seleção;
- `label` clicável por associação real;
- `helperText` e `errorMessage` entram em `aria-describedby` quando presentes;
- `invalid` deve refletir `aria-invalid` sem sobrescrever atributos explícitos do consumidor;
- styling não pode quebrar forced colors, high contrast ou leitura por screen reader.

### Relação com Checkbox

- deve compartilhar anatomia interna e ritmo editorial quando isso reduzir repetição real;
- deve manter diferenças visuais mínimas, mas claras, entre marcador de seleção exclusiva e checkbox;
- não há evidência para criar um helper público interno agora; qualquer extração continua interna e opcional.

### Relação com futuro RadioGroup

- `RadioGroup` continua fora deste slice;
- o próximo slice poderá adicionar contexto apenas se ele simplificar ergonomia real sem esconder semântica nativa;
- a direção preferida para `RadioGroup` continua sendo `fieldset` + `legend`, com `helperText` e `errorMessage` no nível do grupo;
- `name` não deve depender de contexto para existir no `Radio` básico.

### Testes

- render, `forwardRef`, `className`, `style`, `data-*`, `aria-*`;
- `checked` e `defaultChecked`;
- `name`, `value`, `required`, `disabled`;
- `label`, `helperText`, `errorMessage`, `invalid`;
- submissão de formulário nativa;
- controlled e uncontrolled;
- foco e keyboard nativos;
- ausência de vazamento de transient props.

### Stories

- default;
- checked;
- disabled;
- required;
- invalid com mensagem;
- helper text;
- controlled;
- uso em composição simples com múltiplos radios compartilhando `name`.

### Docs

- overview honesto do `Radio` isolado;
- quando usar `Radio` vs `Checkbox`;
- quando aguardar `RadioGroup`;
- exemplos simples sem inventar abstrações novas.

### i18n

- conteúdo editorial em `en` e `pt-BR`;
- exemplos e descrições devem nascer traduzíveis como aconteceu no slice de `Checkbox`.

### Package impact

- novo export público pequeno e compatível com o surface atual;
- sem nova dependência planejada;
- sem mudança esperada em `package` lifecycle além do que já foi corrigido para `Checkbox`.

### Consumer impact

- consumidores `react-vite` e `next-app-router` devem validar import via package root;
- o consumer React não pode passar a depender de Next;
- o consumer Next deve continuar usando client island pequena para interação.

### Riscos

- acoplar cedo demais o `Radio` a um `RadioGroup`;
- esconder demais o input nativo e quebrar foco ou forced colors;
- replicar API do `Checkbox` além do que a semântica justifica;
- adicionar abstração pública antes de provar necessidade.

### Critérios de aceite

- `Radio` funciona isoladamente com comportamento nativo intacto;
- API previsível e alinhada ao `Checkbox`;
- docs, stories, testes, build e consumers permanecem verdes;
- nenhuma implementação de `RadioGroup`, `Switch`, `Field`, `FormField`, `Fieldset` ou `FormRow` entra junto.

### Fora de escopo

- `RadioGroup`;
- `Switch`;
- helpers públicos de field anatomy;
- abstrações de layout de formulário;
- validação de formulário e integrações com libs externas.

## Plano De Commits

Sequência sugerida:

1. `docs(architecture): plan v1.1 form controls foundation`
2. `feat(checkbox): add checkbox primitive`
3. `test(checkbox): cover behavior and accessibility`
4. `docs(checkbox): add stories and docs examples`
5. `feat(radio): add radio controls`  
   somente após review do checkbox

## Estratégia De PR

- uma branch longa de fase pode existir, mas as entregas devem ser feitas em fatias pequenas;
- o primeiro PR de implementação deve ser apenas `Checkbox` completo;
- `Radio`, `RadioGroup` e `Switch` entram depois, em sequência revisável;
- não misturar uma nova abstração pública com o primeiro slice sem revisão humana.

## Critérios De Aceite

- `Checkbox` resolve caso real de formulário;
- API mínima e consistente com campos atuais;
- input nativo preservado;
- `indeterminate` correto;
- docs honestas;
- sem abstração pública prematura;
- validations completas quando a implementação acontecer.
