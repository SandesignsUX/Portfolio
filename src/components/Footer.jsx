import { motion } from 'framer-motion';
import { fadeIn } from '../animations/variants';

export default function Footer() {
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}
      custom={0}
      aria-label="Site footer"
    >
      <div className="footer-logo">
        Sandeep <span>Pawar</span>
      </div>
      <div className="footer-links">
        <a className="footer-link" href="#">
          LinkedIn
        </a>
        <a className="footer-link" href="#">
          Resume
        </a>
        <a className="footer-link" href="#">
          Email
        </a>
      </div>
      <div className="footer-copy">© 2024 Sandeep Pawar</div>
    </motion.footer>
  );
}
