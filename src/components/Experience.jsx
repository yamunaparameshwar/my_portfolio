import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { personalData } from "../data/personalData";
import { FiBriefcase, FiAward } from "react-icons/fi";

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <div className="section-eyebrow">Experience</div>
      <h2 className="section-title">Internships & <span className="grad">Experience</span></h2>
      <p className="section-desc">Industry-recognized virtual internships completed through collaborations with Google, AWS, Palo Alto Networks, and EduSkills.</p>
      <div className="timeline">
        {personalData.internships.map((exp, i) => (
          <motion.div
            key={exp.id}
            className="timeline-item"
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.15 }}
          >
            <div className="timeline-marker">
              <span className="timeline-icon">{exp.grade === "Outstanding" ? <FiAward /> : <FiBriefcase />}</span>
            </div>
            <div className="timeline-content glass">
              <div className="timeline-period">{exp.duration}</div>
              <h3 className="timeline-degree">{exp.title}</h3>
              <p className="timeline-institution">{exp.organization}</p>
              <div className="timeline-tags">
                <span className="chip">{exp.type}</span>
                {exp.grade && <span className="chip" style={{ borderColor: "var(--c-cyan)", color: "var(--c-cyan)" }}>{exp.grade}</span>}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
