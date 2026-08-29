# 001 — Fix transition-all shorthand

- **Status**: TODO
- **Commit**: 2ce6d61
- **Severity**: HIGH
- **Category**: Performance
- **Estimated scope**: 1 file, 2 lines

## Problem

Implicit `transition: all` is used via shorthand, which forces layout/paint passes off-GPU when unintended properties change.

```css
/* src/styles/caseStudy.css:1298 — current */
  transition: 0.3s ease;
```

## Target

Specify the exact properties that change, and tighten the duration using a strong UI `ease-out`.

```css
/* target */
  transition: transform 160ms cubic-bezier(0.23, 1, 0.32, 1);
```

## Repo conventions to follow

- Strong UI `ease-out` should use `cubic-bezier(0.23, 1, 0.32, 1)`.

## Steps

1. Edit `src/styles/caseStudy.css` around line 1298 to replace `transition: 0.3s ease;` on `.final-cta-btn` with `transition: transform 160ms cubic-bezier(0.23, 1, 0.32, 1);`

## Boundaries

- Do NOT touch other components.
- Do NOT change markup/structure.

## Verification

- **Mechanical**: Ensure the file saves without CSS syntax errors.
- **Feel check**: Hover over `.final-cta-btn` and confirm the transform snaps quickly and responsively.
- **Done when**: The shorthand `transition: 0.3s ease;` is gone from the element.
