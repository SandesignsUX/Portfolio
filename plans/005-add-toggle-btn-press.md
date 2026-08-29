# 005 — Add toggle button press feedback

- **Status**: TODO
- **Commit**: 2ce6d61
- **Severity**: LOW
- **Category**: Physicality & origin
- **Estimated scope**: 1 file, 3 lines

## Problem

The `.toggle-btn` elements for switching modes do not have physical `:active` press feedback, making them feel less tactile.

```css
/* src/styles/caseStudy.css — current */
/* (Missing .toggle-btn:active) */
```

## Target

Add subtle scale down on press to confirm the interaction instantly.

```css
/* target */
.toggle-btn:active {
  transform: scale(0.96);
  transition: transform 160ms cubic-bezier(0.23, 1, 0.32, 1);
}
```

## Repo conventions to follow

- Place interaction states immediately after the base or hover styles.

## Steps

1. Add the `.toggle-btn:active` selector in `src/styles/caseStudy.css` near `.toggle-btn`.
2. Ensure the `transform: scale(0.96)` and `transition` properties are applied.

## Boundaries

- Do NOT change the layout or sizing of the button.

## Verification

- **Mechanical**: CSS compiles without errors.
- **Feel check**: Click and hold the "Scan" or "Deep Dive" toggle button. It should shrink slightly (`scale(0.96)`) instantly and feel snappy.
- **Done when**: Pressing the toggle button gives physical feedback.
