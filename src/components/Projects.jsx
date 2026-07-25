import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import ProjectCard from "./ProjectCard";
import { personalData } from "../data/personalData";

const categories = [
  { key: "all", label: "All Projects" },
  { key: "fullstack", label: "Full Stack" },
];

export default function Projects() {
  const [active, setActive] = useState("all");
  const filtered = active === "all" ? personalData.projects : personalData.projects.filter((p) => p.category === active);

  return (
    <SectionWrapper id="projects">
      <div className="section-eyebrow">Projects</div>
      <h2 className="section-title">Featured <span className="grad">Work</span></h2>
      <p className="section-desc">Real-world projects built with modern technologies, showcasing my skills in full-stack development, AI, and system design.</p>
      <div className="skills-filter">
        {categories.map((cat) => (
          <motion.button
            key={cat.key}
            className={`skills-filter-btn ${active === cat.key ? "active" : ""}`}
            onClick={() => setActive(cat.key)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {cat.label}
          </motion.button>
        ))}
      </div>
      <motion.div className="projects-grid" layout>
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => <ProjectCard key={project.id} project={project} index={i} />)}
        </AnimatePresence>
      </motion.div>
    </SectionWrapper>
  );
}
