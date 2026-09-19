import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { aboutFacts } from '../data/projects';

const MotionLink = motion(Link);

export default function AboutStrip() {
  return (
    <motion.section
      className="about-strip"
      aria-labelledby="about-strip-title"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="about-left">
        <div className="about-eyebrow">About me</div>
        <h2 className="about-title" id="about-strip-title">
          Building judgment in the <span>real world.</span>
        </h2>
        <div className="about-desc">
          Product Designer with hands-on experience navigating complex operational workflows, dense business logic, and real financial stakes. Focused on designing scalable systems that bridge user needs with business metrics.
        </div>
        <MotionLink
          to="/about"
          className="btn-secondary"
          style={{ display: 'inline-flex', textDecoration: 'none', alignItems: 'center' }}
          whileHover={{ y: -1, borderColor: 'rgba(240, 232, 216, 0.35)' }}
          whileTap={{ scale: 0.98 }}
        >
          Read more about me →
        </MotionLink>
      </div>
      <ul className="about-right" aria-label="About highlights">
        {aboutFacts.map((fact, i) => (
          <motion.li
            key={fact.strong}
            className="about-fact"
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 * i, duration: 0.45 }}
          >
            <div className="about-fact-dot" />
            <div className="about-fact-text">
              <strong>{fact.strong}</strong>
              {fact.text}
            </div>
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
}
