import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("#hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      // Update active section
      const sections = navLinks.map((l) => l.href);
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.querySelector(sections[i]);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="navbar-inner container">
          <a
            href="#hero"
            className="navbar-logo"
            onClick={(e) => {
              e.preventDefault();
              handleClick("#hero");
            }}
          >
            <span className="logo-dot">{'<'}</span>
            <span className="logo-text">KY</span>
            <span className="logo-dot">{'/>'}</span>
          </a>

          <ul className="navbar-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`navbar-link ${active === link.href ? "active" : ""}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(link.href);
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="navbar-actions">
            <ThemeToggle />
            <button
              className="btn btn-icon mobile-toggle"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.4 }}
          >
            <ul className="mobile-links">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                >
                  <a
                    href={link.href}
                    className={`navbar-link ${active === link.href ? "active" : ""}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleClick(link.href);
                    }}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
