import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function AnimatedCounter({ value, suffix = "", duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const increment = Math.ceil(value / (duration * 60));
    const interval = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(interval);
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}
