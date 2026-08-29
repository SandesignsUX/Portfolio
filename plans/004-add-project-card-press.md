# 004 — Add ProjectCard press feedback

- **Status**: TODO
- **Commit**: 2ce6d61
- **Severity**: LOW
- **Category**: Physicality & origin
- **Estimated scope**: 1 file, 4 lines

## Problem

The `ProjectCard` acts as a large clickable link but relies entirely on `:hover` styles, lacking physical `:active` press feedback. Without it, the UI doesn't feel like it's listening to the user's tap.

```css
/* src/styles/global.css — current */
/* (Missing .project-link:active) */
```

## Target

Provide a subtle scaling press feedback using a strong ease-out curve.

```css
/* target */
.project-link:active .project-card {
  transform: scale(0.98);
  transition: transform 160ms cubic-bezier(0.23, 1, 0.32, 1);
}
```

## Repo conventions to follow

- Append interaction states immediately after the base or hover styles in `src/styles/global.css`.

## Steps

1. Add the `.project-link:active .project-card` selector in `src/styles/global.css` below the existing `.project-card:hover` definitions.
2. Ensure the `transform: scale(0.98)` and `transition` properties are applied.

## Boundaries

- Do NOT apply this to non-link project cards.
- Do NOT change the existing hover state (`translateY(-2px)`).

## Verification

- **Mechanical**: File parses correctly.
- **Feel check**: Click and hold a project card on the home page. It should shrink slightly (`scale(0.98)`) and snap quickly into place (`160ms`). Releasing should navigate away.
- **Done when**: Pressing the card provides immediate tactile scale feedback.
