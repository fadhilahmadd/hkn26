---
name: corporate-frontend
description: Professional corporate standard code guidelines for frontend development.
---

# Corporate Frontend Standards

## Core Principles
1. **Type Safety**: All code MUST use TypeScript. Avoid `any` types. Define explicit interfaces or types for props, state, and API responses.
2. **Component Architecture**: Use functional components with hooks. Keep components small, focused, and testable.
3. **Styling**: Use module CSS, Tailwind CSS, or a standardized styling solution. Avoid inline styles unless absolutely necessary.
4. **Naming Conventions**:
   - PascalCase for React components and interfaces (e.g., `Button`, `UserProfileProps`).
   - camelCase for functions, variables, and hooks (e.g., `handleClick`, `useUser`).
   - kebab-case for file names of non-components (e.g., `utils.ts`).
5. **Code Quality**:
   - Ensure code passes ESLint and Prettier formatting.
   - Use meaningful, descriptive variable names.
   - Comment complex logic, but prefer self-documenting code.
6. **Performance**:
   - Optimize for Lighthouse scores. Use Next.js Image component for images.
   - Lazy load heavy components where applicable.
   - Avoid unnecessary re-renders (use `useMemo`, `useCallback` when needed).
7. **Accessibility (a11y)**:
   - Provide semantic HTML.
   - Include `aria-` labels where standard HTML tags aren't sufficient.
   - Ensure sufficient color contrast.
