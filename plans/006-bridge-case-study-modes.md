# 006 — Bridge case study modes

- **Status**: TODO
- **Commit**: 2ce6d61
- **Severity**: MEDIUM
- **Category**: Missed opportunities
- **Estimated scope**: 1 file, 10 lines (CSS)

## Problem

When switching between "Scan" and "Deep Dive" modes in case studies, massive DOM sections swap instantly. While there is a `fadeUp` animation on `.cs-section`, it runs for 600ms (too slow) and doesn't handle the exit state gracefully.

```css
/* src/styles/caseStudy.css — current */
.cs-section {
  /* ... */
  animation: fadeUp 0.6s var(--ease) forwards;
}
```

## Target

Use modern CSS `@starting-style` combined with a smooth transition to bridge the visual cut gracefully and quickly.

```css
/* target */
.cs-section {
  /* ... */
  opacity: 1;
  transform: translateY(0);
  transition: opacity 250ms ease-out, transform 250ms ease-out;
}

@starting-style {
  .cs-section {
    opacity: 0;
    transform: translateY(12px);
  }
}
```

## Repo conventions to follow

- Replace the `fadeUp` keyframe usage on `.cs-section` with the newer `@starting-style` pattern.

## Steps

1. In `src/styles/caseStudy.css`, remove the `animation: fadeUp ...` line from `.cs-section`.
2. Add `opacity: 1`, `transform: translateY(0)`, and the `transition` shorthand.
3. Add the `@starting-style` block directly targeting `.cs-section`.

## Boundaries

- Do NOT touch the React code for conditional rendering in the case studies; standard DOM swapping is fine, CSS will handle the entry.

## Verification

- **Mechanical**: CSS parses correctly.
- **Feel check**: Toggle between Scan and Deep Dive modes. The new sections should slide up slightly (12px) and fade in over a brisk 250ms, masking the hard cut.
- **Done when**: The layout shift feels like a deliberate transition rather than a broken page snap.
