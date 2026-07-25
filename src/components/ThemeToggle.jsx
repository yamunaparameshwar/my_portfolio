import { motion } from "framer-motion";
import { FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "../hooks/useTheme";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      className="btn btn-icon theme-toggle"
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      style={{
        background: "var(--c-surface-strong)",
        border: "1px solid var(--c-border)",
        backdropFilter: "blur(14px)",
        fontSize: "1.1rem",
      }}
    >
      <motion.div
        key={theme}
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {theme === "dark" ? <FiSun /> : <FiMoon />}
      </motion.div>
    </motion.button>
  );
}

