import { motion } from 'framer-motion';
import { fadeUp } from '../animations/variants';

const social = [
  { label: 'LinkedIn ↗', href: '#' },
  { label: 'Dribbble ↗', href: '#' },
  { label: 'Instagram ↗', href: '#' },
];

export default function ClosingCta() {
  return (
    <motion.section
      id="contact"
      className="closing-cta"
      aria-labelledby="contact-title"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={fadeUp}
      custom={0}
    >
      <div className="cta-inner">
        <div className="cta-eyebrow">Let&apos;s work together</div>
        <h2 className="cta-title" id="contact-title">
          Looking to build high-impact products <span>with a collaborative team.</span>
        </h2>
        <div className="cta-desc">
          I bring hands-on experience solving ambiguous operational problems and shipping production tools. Now looking to join an established design organization where process rigor and user value drive the product forward.
        </div>
        <div className="cta-actions">
          <motion.a
            href="mailto:sandeep@email.com"
            className="btn-cta-primary"
            style={{ display: 'inline-block', textDecoration: 'none' }}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Say Hello
          </motion.a>
          <motion.a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cta-secondary"
            style={{ display: 'inline-block', textDecoration: 'none' }}
            whileHover={{ y: -1, borderColor: 'rgba(240, 232, 216, 0.25)' }}
            whileTap={{ scale: 0.98 }}
          >
            Download Resume
          </motion.a>
        </div>
        <div className="cta-divider">
          <div className="cta-divider-line" />
          <div className="cta-divider-text">or find me on</div>
          <div className="cta-divider-line" />
        </div>
        <div className="cta-links" aria-label="Social links">
          {social.map((item) => (
            <motion.a
              key={item.label}
              className="cta-link"
              href={item.href}
              aria-label={item.label.replace(' ↗', '')}
              whileHover={{ y: -1, color: 'rgba(240, 232, 216, 0.75)' }}
            >
              {item.label}
            </motion.a>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
