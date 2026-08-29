import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { fadeIn } from "../animations/variants";

export default function Nav() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isAbout = location.pathname === "/about";
  const [isScrolled, setIsScrolled] = useState(false);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <motion.nav
        className={isScrolled ? "nav-scrolled" : ""}
        initial={reduceMotion ? false : "hidden"}
        animate="visible"
        variants={reduceMotion ? undefined : fadeIn}
        custom={0}
        aria-label="Main navigation"
      >
        <Link
          to="/"
          className="nav-logo"
        >
          Sandeep <span>Pawar</span>
        </Link>
        <div className="nav-links">
          <Link
            className={`nav-link${isHome ? " active" : ""}`}
            to="/"
            aria-current={isHome ? "page" : undefined}
          >
            Work
          </Link>
          <Link
            className={`nav-link${isAbout ? " active" : ""}`}
            to="/about"
            aria-current={isAbout ? "page" : undefined}
          >
            About
          </Link>
          <a
            className={`nav-link${location.hash === "#blog" ? " active" : ""}`}
            href="#blog"
            aria-current={location.hash === "#blog" ? "true" : undefined}
          >
            Blog
          </a>
          <a
            className="nav-link"
            href="#contact"
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
          whileHover={reduceMotion ? undefined : { scale: 1.03 }}
          whileTap={reduceMotion ? undefined : { scale: 0.98 }}
          onClick={scrollToContact}
        >
          Say hello
        </motion.button>
    </motion.nav>
  </>
);
}
