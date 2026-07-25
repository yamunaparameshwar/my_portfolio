import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  useEffect(() => {
    const moveCursor = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleHover = (e) => {
      if (
        e.target.tagName === "A" ||
        e.target.tagName === "BUTTON" ||
        e.target.closest("a") ||
        e.target.closest("button") ||
        e.target.classList.contains("interactive")
      ) {
        ringRef.current?.classList.add("hovered");
      } else {
        ringRef.current?.classList.remove("hovered");
      }
    };

    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleHover);
    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleHover);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      <motion.div
        ref={cursorRef}
        className="cursor-dot"
        style={{ x: springX, y: springY }}
      />
      <motion.div
        ref={ringRef}
        className="cursor-ring"
        style={{ x: springX, y: springY }}
      />
    </>
  );
}

