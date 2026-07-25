import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { personalData } from "../data/personalData";
import { FiUser, FiCode, FiBook } from "react-icons/fi";

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="section-eyebrow">About Me</div>
      <h2 className="section-title">
        Know Me <span className="grad">Better</span>
      </h2>
      <p className="section-desc">
        A brief introduction about who I am, what I do, and what drives me.
      </p>

      <div className="about-grid">
        <motion.div
          className="about-text glass"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="about-icon-row">
            <span className="about-icon"><FiUser /></span>
            <span className="about-icon"><FiCode /></span>
            <span className="about-icon"><FiBook /></span>
          </div>
          {personalData.about.map((paragraph, i) => (
            <p key={i} className="about-paragraph">
              {paragraph}
            </p>
          ))}
          <div className="about-cta">
            <a href="#contact" className="btn btn-primary">
              Let's Work Together
            </a>
            <a
              href={personalData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost"
            >
              View GitHub
            </a>
          </div>
        </motion.div>

        <motion.div
          className="about-highlights"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <div className="about-highlight-card glass">
            <span className="highlight-number">4+</span>
            <span className="highlight-label">Internships Completed</span>
          </div>
          <div className="about-highlight-card glass">
            <span className="highlight-number">10+</span>
            <span className="highlight-label">Projects Built</span>
          </div>
          <div className="about-highlight-card glass">
            <span className="highlight-number">9</span>
            <span className="highlight-label">Certifications Earned</span>
          </div>
          <div className="about-highlight-card glass">
            <span className="highlight-number">B.Tech</span>
            <span className="highlight-label">Computer Science</span>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

