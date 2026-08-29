# 002 — Speed up UI reveals

- **Status**: TODO
- **Commit**: 2ce6d61
- **Severity**: HIGH
- **Category**: Easing & duration
- **Estimated scope**: 1 file, 4 lines

## Problem

UI elements entering via `fadeUp` and `fadeIn` are taking 500ms (`0.5s`), which makes the interface feel artificially delayed.

```javascript
/* src/animations/variants.js:15 — current */
    transition: { duration: 0.5, delay, ease: [0.23, 1, 0.32, 1] },
```

## Target

Tighten durations to a snappier `0.25` (250ms) to stay within the 300ms UI animation budget.

```javascript
/* target */
    transition: { duration: 0.25, delay, ease: [0.23, 1, 0.32, 1] },
```

## Repo conventions to follow

- Maintain the existing Framer Motion variant structure in `variants.js`.

## Steps

1. Edit `src/animations/variants.js` to change `duration: 0.5` to `duration: 0.25` for `fadeUp` (both versions) and `fadeIn`.

## Boundaries

- Do NOT change the `ease` curve or `delay` logic.
- Do NOT modify components consuming these variants.

## Verification

- **Mechanical**: App builds without JS errors.
- **Feel check**: Reload the page and observe the entrance animations. They should feel noticeably snappier and less dragged-out.
- **Done when**: `duration: 0.5` is eliminated from the UI entrance variants.
