import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { fadeIn } from "../animations/variants";

export default function Nav() {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      custom={0}
      aria-label="Main navigation"
    >
      <Link
        to="/"
        className="nav-logo"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        Sandeep <span>Pawar</span>
      </Link>
      <div className="nav-links" role="list">
        <Link
          className={`nav-link${isHome ? " active" : ""}`}
          to="/"
          role="listitem"
          aria-current={isHome ? "page" : undefined}
        >
          Work
        </Link>
        <Link className="nav-link" to="/about" role="listitem">
          About
        </Link>
        <a className="nav-link" href="#blog" role="listitem">
          Blog
        </a>
        <a
          className="nav-link"
          href="#contact"
          role="listitem"
          onClick={(e) => {
            e.preventDefault();
            scrollToContact();
          }}
        >
          Contact
        </a>
      </div>
      <motion.button
        type="button"
        className="nav-cta"
        aria-label="Scroll to contact section"
        whileHover={{ scale: 1.03, borderColor: "rgba(240, 232, 216, 0.2)" }}
        whileTap={{ scale: 0.98 }}
        onClick={scrollToContact}
      >
        Say hello
      </motion.button>
    </motion.nav>
  );
}
