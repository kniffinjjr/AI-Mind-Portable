# Type — Nested (containment)

**Use when:** hierarchy is **scope/containment**, not parent→child tree links. Example: INNER ⊂ MID ⊂ OUTER; sandbox ⊂ process ⊂ host.

## Layout

- Concentric regions (rect or circle). Outer shell = wider scope.
- Labels on the shell boundary or top edge of each region — not floating in empty center unless nucleus.
- Optional nucleus for the innermost active unit.
- Transfers **between** shells (residue out, budgets in) are separate arcs/arrows in the annulus — do not draw a flowchart through the rings.

## Rules

1. Same visual language at every level (border weight may step up outward).
2. Do not mix nested containment with a long sequential spine in the same figure.
3. Max 4 nested levels; beyond that, split.
4. Text must remain legible — prefer arc labels on upper half only, or straight labels outside.

## Anti-patterns

- Nested boxes that are only indentation (use Tree instead).
- Sequence arrows crossing through multiple shells as the primary story.
- Filling every shell with dense node graphs.

## AI Mind mapping

| Shell | Meaning |
|---|---|
| Harness (outermost environment) | Tools, state, safety — not a grain |
| OUTER | Days/weeks · W6 RAI · Probe Ledger |
| MID | Session · job / Diamond |
| INNER | Default turn · seconds |

Residue flows outward; budgets cascade inward.
