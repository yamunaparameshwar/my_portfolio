import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { personalData } from "../data/personalData";
import SkillBar from "./SkillBar";

const categories = [
  { key: "all", label: "All" },
  { key: "programming", label: "Programming" },
  { key: "frameworks", label: "Frameworks" },
  { key: "databases", label: "Databases" },
  { key: "tools", label: "Tools" },
  { key: "core", label: "Core CS" },
];

export default function Skills() {
  const [active, setActive] = useState("all");

  const filteredSkills = active === "all"
    ? personalData.skillLevels
    : personalData.skillLevels.filter((s) => {
        const category = Object.entries(personalData.skills).find(([, skills]) =>
          skills.includes(s.name) || skills.some((sk) => s.name.toLowerCase().includes(sk.toLowerCase()))
        );
        return category && category[0] === active;
      });

  return (
    <SectionWrapper id="skills">
      <div className="section-eyebrow">Skills & Expertise</div>
      <h2 className="section-title">My <span className="grad">Toolkit</span></h2>
      <p className="section-desc">Technologies and skills I've worked with, ranging from programming languages to frameworks, databases, and core computer science concepts.</p>
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
      <motion.div className="skills-grid" layout>
        <AnimatePresence mode="popLayout">
          {filteredSkills.map((skill) => (
            <SkillBar key={skill.name} name={skill.name} level={skill.level} />
          ))}
        </AnimatePresence>
      </motion.div>
    </SectionWrapper>
  );
}
