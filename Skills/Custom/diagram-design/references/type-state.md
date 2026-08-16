# Type — State machine

**Use when:** states + transitions + guards matter more than components.

## Layout

- Rounded states; arrows with event/guard/action labels.
- Start marker; terminal states distinct.

## Rules

1. Guards on edges, not inside state bodies.
2. Avoid showing the entire product as one megastate chart — scope to one grain or one agent.
