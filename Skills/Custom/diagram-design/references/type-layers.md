# Type — Layer stack

**Use when:** stacked abstractions (bottom = foundation). Example: Harness → Loop → Graph → Eval.

## Layout

- Horizontal bands or stacked rounded rects, bottom-up or top-down — pick one and stay consistent.
- Label each layer with name + one-line job.
- Optional thin depends-on chevrons between bands — not a full flowchart.

## Rules

1. One concern per layer.
2. Failure mode can be annotated as muted subtext under the layer name.
3. Do not put W0–W7 steps as equal bands here — that is a flowchart.

## AI Mind mapping

| Layer | Job |
|---|---|
| Harness | Tools, permissions, persistence, budgets, observability, safety |
| Loop | Evidence-based cycle with hard stops |
| Graph | Topology only when Qualifying Test passes |
| Eval | Score that changes the next edge (Writer ≠ Checker) |
