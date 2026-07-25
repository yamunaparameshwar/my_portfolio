import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

const words = [
  "Full Stack Developer",
  "Python & Java Developer",
  "UI/UX Enthusiast",
  "Problem Solver",
  "AI & Cloud Explorer",
];

export default function TypingAnimation() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  const tick = useCallback(() => {
    const currentWord = words[index];
    if (!deleting && text === currentWord) {
      setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && text === "") {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
    } else {
      setTimeout(
        () => {
          setText(
            deleting
              ? currentWord.substring(0, text.length - 1)
              : currentWord.substring(0, text.length + 1)
          );
        },
        deleting ? 40 : 80
      );
    }
  }, [text, deleting, index]);

  useEffect(() => {
    const timer = setTimeout(tick, 20);
    return () => clearTimeout(timer);
  }, [tick]);

  return (
    <span className="typing-text">
      {text}
      <motion.span
        className="typing-cursor"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
      >
        |
      </motion.span>
    </span>
  );
}
