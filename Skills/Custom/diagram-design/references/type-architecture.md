# Type — Architecture

**Use when:** components + connections in a system (services, agents, stores).

## Layout

- Group by trust boundary or runtime.
- External systems on the perimeter (dashed).
- Stores visually distinct from compute.
- Orthogonal connectors; fan attach points.

## Rules

1. Focal accent on the 1–2 components the diagram is about.
2. Drop edges that are implied by containment or left-to-right reading order.
3. Ports/protocols as sublabels, not separate nodes, unless they are first-class.

## Anti-patterns

- Every microservice gets equal box weight.
- Rainbow arrows.
- Legend of 12 line styles.
