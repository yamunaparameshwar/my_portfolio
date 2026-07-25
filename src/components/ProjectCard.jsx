import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      className="project-card glass"
      layout
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -5 }}
    >
      <div className="project-card-top">
        <div className="project-folder-icon">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
          </svg>
        </div>
        <div className="project-links">
          {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link" aria-label="GitHub"><FiGithub /></a>}
          {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link" aria-label="Live demo"><FiExternalLink /></a>}
        </div>
      </div>
      <h3 className="project-title">{project.title}</h3>
      <p className="project-desc">{project.description}</p>
      <ul className="project-features">
        {project.features.slice(0, 3).map((f, i) => <li key={i}>{f}</li>)}
        {project.features.length > 3 && <li className="project-more">{project.features.length - 3} more</li>}
      </ul>
      <div className="project-tech">
        {project.tech.map((t) => <span key={t} className="chip">{t}</span>)}
      </div>
    </motion.div>
  );
}
