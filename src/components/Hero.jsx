import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../animations/variants';
import { skills } from '../data/projects';

export default function Hero() {
  const scrollToWork = () => {
    document.getElementById('selected-work')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="orb orb-1" aria-hidden="true" />
      <div className="orb orb-2" aria-hidden="true" />
      <div className="orb orb-3" aria-hidden="true" />

      <motion.div
        className="hero-inner"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="hero-name" id="hero-heading" variants={fadeUp} custom={0}>
          Sandeep
        </motion.div>
        <motion.div className="hero-name-light" variants={fadeUp} custom={0.08}>
          Pawar.
        </motion.div>
        <motion.div className="hero-role-tag" variants={fadeUp} custom={0.16}>
          UX Designer
        </motion.div>
        <motion.p className="hero-desc" variants={fadeUp} custom={0.24}>
          Researching, designing, and shipping as the <strong>sole designer</strong> on products
          with real users and real stakes — now looking for the{' '}
          <em>right team to build</em> judgment with.
        </motion.p>
        <motion.div className="hero-actions" variants={fadeUp} custom={0.32}>
          <motion.a
            href="#selected-work"
            className="btn-primary"
            onClick={(e) => {
              e.preventDefault();
              scrollToWork();
            }}
            whileHover={{ y: -2, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            View my work
          </motion.a>
          <motion.button
            type="button"
            className="btn-secondary"
            whileHover={{ y: -1, borderColor: 'rgba(240, 232, 216, 0.25)' }}
            whileTap={{ scale: 0.98 }}
          >
            Download resume
          </motion.button>
        </motion.div>
        <motion.div className="skill-row" variants={fadeUp} custom={0.4} aria-label="Core skills">
          {skills.map((skill, i) => (
            <motion.span
              key={skill}
              className="skill-tag"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 + i * 0.06, duration: 0.45 }}
              whileHover={{
                borderColor: 'rgba(240, 232, 216, 0.35)',
                color: 'rgba(240, 232, 216, 0.75)',
              }}
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      <motion.button
        type="button"
        className="scroll-hint"
        onClick={scrollToWork}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{
          opacity: { delay: 1, duration: 0.6 },
          y: { delay: 1.2, duration: 2.2, repeat: Infinity, ease: 'easeInOut' },
        }}
        aria-label="Scroll to selected work"
      >
        <span className="scroll-text">Selected work</span>
        <div className="scroll-line" />
      </motion.button>
    </section>
  );
}
