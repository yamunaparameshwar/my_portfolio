import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function SectionWrapper({ children, className = "", id }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <motion.section
      id={id}
      ref={ref}
      className={`section ${className}`}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="container">{children}</div>
    </motion.section>
  );
}
