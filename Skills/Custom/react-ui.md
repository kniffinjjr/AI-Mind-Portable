---
name: react-ui
description: Implement React UI with solid component patterns, TypeScript props, state discipline, and composition. Use for React components, React patterns, hooks, client UI, or building interfaces in React.
---

# React UI

Build **React interfaces** that stay readable, typed, and handoff-ready to design/a11y QA. Prefer composition and clear data flow over clever hooks.

## Triggers

React components · React patterns · React hooks · client component · React UI · build this in React · React TypeScript

## Principles

1. **Types on the boundary** — props and public hooks are typed; avoid `any` in UI contracts.
2. **Server-friendly by default** — keep components pure when possible; isolate client-only behavior.
3. **State lives near its use** — lift only when siblings must share; prefer derived values over mirrored state.
4. **Effects are for sync with the outside world** — not for computing renderable data.
5. **Design tokens over magic strings** — consume `design-system` when present; don’t hard-code a second palette.
6. Always plan for **`better-interface` + `a11y-build` + `pixelslop`** after implementation.

## TypeScript defaults

- `type` or `interface` for props; export props types when reused.
- Discriminated unions for visual variants (`variant: 'primary' | 'ghost'`).
- Event handlers typed (`React.ComponentProps<'button'>` or explicit).
- Children: `React.ReactNode` unless a tighter contract is needed.
- No non-null assertions to silence the compiler—narrow properly.

## Component patterns

| Pattern | Use |
|---------|-----|
| Small focused components | One job; compose screens from parts |
| Controlled inputs | Forms that need validation/UX control (`form-ux`) |
| Compound components | Related UI (Tabs, Accordion) sharing implicit state |
| Render props / `children` as function | Rare; prefer composition first |
| Colocate styles | CSS modules, Tailwind, or tokens—match project |

## State & hooks

- `useState` for local UI state; `useReducer` when transitions are complex.
- `useMemo` / `useCallback` only after measured need or stable deps required by children.
- `useEffect`: subscriptions, imperative DOM, syncing external systems—cleanup always.
- Prefer derived state: `const filtered = items.filter(...)` in render when cheap.
- Keys: stable ids, never array index for reorderable lists.

## Anti-patterns

- Prop drilling through 5+ layers → context or composition
- Effect chains that re-set state to compute values
- Giant “Page.tsx” with no extraction
- `useEffect` for fetching when the framework provides loaders/RSC (see `nextjs-app`)
- Untyped rest props spreading onto DOM without filtering

## Workflow

1. Confirm design constraints (`design-system`, layout from `responsive-shell`).
2. Sketch component tree and data ownership.
3. Define prop types and variants.
4. Implement leaf components → compose.
5. Wire a11y: labels, focus, keyboard (`a11y-build`).
6. Motion only if meaningful (`web-motion`).
7. Hand off to `better-interface` / `pixelslop` before calling done.

## Output

- Component files or clear structure
- Prop/variant types
- Notes on client vs pure boundaries
- Open risks (a11y, performance, state bugs)

## Handoffs

- Full app routing/data → `nextjs-app`
- Forms → `form-ux`
- Tokens → `design-system`
- PDP/marketing structure → `product-page` / `landing-page`
