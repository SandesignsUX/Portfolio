# 007 — Stagger about page grids

- **Status**: TODO
- **Commit**: 2ce6d61
- **Severity**: LOW
- **Category**: Missed opportunities
- **Estimated scope**: 1 file, ~10 lines

## Problem

The `BeliefCard` and `SkillGroup` items on the About page render simultaneously. Since this is an occasional page, adding a subtle stagger would introduce a bit of spatial delight.

```jsx
/* src/pages/AboutPage.jsx:310 — current */
{beliefs.map((belief) => (
  <BeliefCard key={belief.num} {...belief} />
))}
```

## Target

Wrap the grid items in Framer Motion components to stagger their entrance.

```jsx
/* target */
<motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} className="beliefs-grid">
  {beliefs.map((belief) => (
    <motion.div key={belief.num} variants={fadeIn}>
      <BeliefCard {...belief} />
    </motion.div>
  ))}
</motion.div>
```

## Repo conventions to follow

- Use `staggerContainer` and `fadeIn` variants imported from `src/animations/variants.js`.

## Steps

1. In `src/pages/AboutPage.jsx`, import `motion`, `staggerContainer`, and `fadeIn` (if not already present).
2. Wrap the `beliefs.map` and `skillsData.map` loops in `motion.div` containers using the `staggerContainer` variant.
3. Wrap each mapped child in a `<motion.div variants={fadeIn}>`.

## Boundaries

- Do NOT block interaction while the stagger animations play. Keep the stagger delay small (e.g. `0.08s` as defined in `variants.js`).

## Verification

- **Mechanical**: App builds without JS errors.
- **Feel check**: Scroll down to the beliefs and skills sections on the About page. The cards should cascade in quickly (one after another) rather than popping into existence in a single frame.
- **Done when**: Grid items on the About page stagger on scroll reveal.
