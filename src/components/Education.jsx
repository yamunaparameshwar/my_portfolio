import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { personalData } from "../data/personalData";
import { FiBookOpen } from "react-icons/fi";

const iconMap = { college: <FiBookOpen />, school: <FiBookOpen /> };

export default function Education() {
  return (
    <SectionWrapper id="education">
      <div className="section-eyebrow">Education</div>
      <h2 className="section-title">Academic <span className="grad">Journey</span></h2>
      <p className="section-desc">My educational background and academic achievements.</p>
      <div className="timeline">
        {personalData.education.map((edu, i) => (
          <motion.div
            key={edu.id}
            className="timeline-item"
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.15 }}
          >
            <div className="timeline-marker">
              <span className="timeline-icon">{iconMap[edu.type] || <FiBookOpen />}</span>
            </div>
            <div className="timeline-content glass">
              <div className="timeline-period">{edu.period}</div>
              <h3 className="timeline-degree">{edu.degree}</h3>
              <p className="timeline-institution">{edu.institution}</p>
              {edu.field && <p className="timeline-field">{edu.field}</p>}
              <div className="timeline-score">{edu.score}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
