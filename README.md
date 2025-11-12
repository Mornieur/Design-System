import { Meta, Story, Canvas, ArgsTable } from '@storybook/addon-docs';

<Meta title="Design System / Overview" />

# Design System

Este é o **Design System** do projeto, construído com **Next.js** e **TypeScript**, utilizando **Stitches** para estilização e **Storybook** para documentação visual de componentes.

---

## Objetivo

O Design System centraliza estilos, tokens e componentes reutilizáveis para:

- Garantir consistência visual em toda a aplicação.  
- Facilitar a criação e manutenção de componentes.  
- Servir como referência de UI para desenvolvedores e designers.  
- Permitir testes e documentação visual via **Storybook**.  

---

## Tecnologias

- **Next.js** – framework React moderno com SSR/SSG.  
- **TypeScript** – tipagem estática para segurança e autocompletar.  
- **Stitches** – CSS-in-JS leve, com suporte a temas e tokens.  
- **Storybook** – documentação visual e sandbox de componentes.  
- **Vitest** – testes unitários e cobertura.  
- **Lucide React** – ícones leves e personalizáveis.  
- **clsx** – gerenciamento condicional de classes.  

---

## Estrutura

Seguindo **Atomic Design**:

```text
src/
├─ design-tokens/   # Tokens de cores, fontes, espaçamento e bordas
├─ components/
│  ├─ atoms/        # Botões, inputs, ícones, badges
│  ├─ molecules/    # Combinações de atoms (FormField, CardHeader)
│  ├─ organisms/    # Blocos maiores (Form, Card, Table)
│  └─ templates/    # Layouts e modais
├─ stories/         # Stories do Storybook
└─ utils/           # Helpers e funções utilitárias
