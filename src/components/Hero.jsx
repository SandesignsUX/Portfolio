import { useState } from 'react';
import { motion, MotionConfig, useReducedMotion } from 'framer-motion';
import { createFadeUp, createStaggerContainer } from '../animations/variants';
import portraitImg from '../assets/Portrait12.jpeg';

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const fadeUp = createFadeUp(reduceMotion);
  const stagger = createStaggerContainer(reduceMotion);

  const [hasPortrait, setHasPortrait] = useState(true);

  const scrollToWork = (e) => {
    e.preventDefault();
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <MotionConfig reducedMotion="user">
      <section className="hero hero--editorial" aria-labelledby="hero-heading">
        <motion.div
          className="hero-inner hero-inner--editorial"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          {/* ── LEFT COLUMN: GREETING + NAME + ROLE + INTRO + CTAS ── */}
          <div className="hero-left">
            <motion.div variants={fadeUp} custom={0}>
              <div className="hero-greeting" aria-hidden="true">Hi 👋</div>
              <h1 className="hero-name" id="hero-heading">
                I'm Sandeep
              </h1>
              <div className="hero-role">UX and Product Designer</div>
            </motion.div>

            <motion.div
              className="hero-divider"
              variants={fadeUp}
              custom={0.1}
              aria-hidden="true"
            />

            <motion.p
              className="hero-desc"
              variants={fadeUp}
              custom={0.15}
            >
              Specializing in complex operations, B2B platforms, and conversion flows.
              Previously designed zero-to-one digital products handling high-stakes
              financial data and operational workflows.
            </motion.p>

            <motion.div
              className="hero-meta-tags"
              variants={fadeUp}
              custom={0.2}
              aria-label="Overview facts"
            >
              <span className="hero-tag">3 case studies</span>
              <span className="hero-tag">Enterprise SaaS</span>
              <span className="hero-tag">Mumbai</span>
            </motion.div>

            <motion.div
              className="hero-actions"
              variants={fadeUp}
              custom={0.25}
            >
              <a
                href="#work"
                className="btn-primary"
                onClick={scrollToWork}
              >
                Explore Work
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                View Resume
              </a>
            </motion.div>
          </div>

          {/* ── RIGHT COLUMN: PORTRAIT IMAGE FRAME / PLACEHOLDER ── */}
          <motion.div
            className="hero-right"
            variants={fadeUp}
            custom={0.2}
          >
            <div className="portrait-card" aria-label="Sandeep Pawar — Product Designer">
              {hasPortrait ? (
                <>
                  <img
                    src={portraitImg}
                    alt="Sandeep Pawar — Product Designer"
                    className="portrait-img"
                    loading="eager"
                    decoding="async"
                    onError={() => setHasPortrait(false)}
                  />
                  <div className="portrait-overlay" aria-hidden="true" />
                </>
              ) : (
                <div className="portrait-placeholder">
                  <div className="portrait-grid-bg" aria-hidden="true" />
                  <div className="portrait-icon-wrap" aria-hidden="true">
                    <svg
                      className="portrait-icon"
                      width="44"
                      height="44"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </div>
                  <div className="portrait-placeholder-info">
                    <span className="portrait-title">Portrait Frame</span>
                    <span className="portrait-subtitle">
                      Drop photo in <code>/public/assets/portrait.jpg</code>
                    </span>
                  </div>
                  <div className="portrait-aspect-badge" aria-hidden="true">
                    3 : 4 · Portrait
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      </section>
    </MotionConfig>
  );
}
