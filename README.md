<Meta title="Design System / Overview" />

# FeitozaUI — Design System

**FeitozaUI** is a scalable, modern, corporate-style **Design System**, built with **Next.js**, **TypeScript**, and **Atomic Design** principles.  
The system provides a unified set of **design tokens**, **reusable components**, **theme support**, and **complete documentation** through Storybook.

This project is evolving into a fully installable **UI library**, ideal for real-world apps and professional portfolio use.

---

## 🚀 Purpose

FeitozaUI was created to:

- Centralize design decisions (colors, typography, spacing, motion).
- Provide UI consistency across multiple applications.
- Speed up development through reusable, tested components.
- Serve as a visual and technical reference for developers.
- Ensure accessibility, theming support, and scalable architecture.
- Offer full Storybook documentation + code examples.

---

## 🧰 Tech Stack

- **Next.js** — app architecture and documentation playground  
- **TypeScript** — safety, consistency, and autocompletion  
- **Stitches** — performant CSS-in-JS with design token support  
- **Storybook** — component documentation and visual testing  
- **Vitest + Testing Library** — unit and interaction tests  
- **Lucide React** — customizable icons  
- **ESLint + Prettier** — code quality  
- **Husky + Commitlint** — clean commits and automation  

---

## 🧱 Project Structure (Atomic Design)

src/
├─ design-tokens/ # Colors, typography, radius, spacing, shadows
├─ components/
│ ├─ atoms/ # Buttons, inputs, icons, typography, badges
│ ├─ molecules/ # FormField, CardHeader, InputGroup
│ ├─ organisms/ # Modal, Header, Table, Layout Blocks
│ └─ templates/ # Page layouts and composite structures
├─ stories/ # Storybook stories + MDX docs
└─ utils/ # Helpers, formatters, accessibility utilities


---

## 📘 Documentation

- All components include usage examples, props tables, states and variants.
- Tokens are documented with interactive panels.
- Live previews available in Storybook.
- Dark/Light theme switch included.

---

## 🧪 Tests

- Unit tests
- Interaction tests
- Accessibility (axe) support coming soon

---

## 📦 Future: Library Publishing

FeitozaUI will be packaged and published as:

@feitozaui/core

with installation via npm, Yarn or pnpm.

---

## 📄 License

MIT (open-source friendly)