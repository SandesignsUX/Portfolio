# 003 — Fix toggle pulse interruptibility

- **Status**: TODO
- **Commit**: 2ce6d61
- **Severity**: MEDIUM
- **Category**: Interruptibility
- **Estimated scope**: 1 file, 5 lines

## Problem

The case study mode toggle uses `@keyframes` for a state switch. If the user rapidly toggles back and forth, the keyframe animation restarts abruptly from zero instead of smoothly retargeting.

```css
/* src/styles/caseStudy.css:226 — current */
.toggle-btn.active.just-switched {
  animation: togglePulse 0.5s var(--ease) forwards;
}
```

## Target

Replace the keyframe animation with a transition on the `box-shadow` property directly, allowing smooth mid-animation retargeting.

```css
/* target */
.toggle-btn.active.just-switched {
  box-shadow: 0 0 0 6px rgba(180, 130, 70, 0);
  transition: box-shadow 400ms ease-out;
}
```

## Repo conventions to follow

- Remove the `@keyframes togglePulse` definition if no longer used.

## Steps

1. In `src/styles/caseStudy.css`, replace the `togglePulse` animation on `.toggle-btn.active.just-switched` with a direct `box-shadow` and `transition`.

## Boundaries

- Do NOT change the button's layout or functional logic in React.

## Verification

- **Mechanical**: App compiles.
- **Feel check**: Click the "Scan" and "Deep Dive" toggles rapidly back and forth. The shadow should stretch and settle naturally without jumping back to its starting state mid-flash.
- **Done when**: The keyframe animation is replaced with a transition on the element.
