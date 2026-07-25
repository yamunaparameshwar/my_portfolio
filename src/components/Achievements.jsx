import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { personalData } from "../data/personalData";
import { FiAward, FiStar, FiTrendingUp, FiTarget, FiBookOpen, FiZap } from "react-icons/fi";

const iconMap = [FiAward, FiStar, FiTrendingUp, FiTarget, FiBookOpen, FiZap];

export default function Achievements() {
  return (
    <SectionWrapper id="achievements">
      <div className="section-eyebrow">Achievements</div>
      <h2 className="section-title">
        Milestones & <span className="grad">Accolades</span>
      </h2>
      <p className="section-desc">
        Key accomplishments that highlight my dedication, leadership, and academic excellence.
      </p>

      <div className="achievements-grid">
        {personalData.achievements.map((ach, i) => {
          const Icon = iconMap[i % iconMap.length];
          return (
            <motion.div
              key={ach.id}
              className="achievement-card glass"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -5 }}
            >
              <div className="achievement-icon">
                <Icon />
              </div>
              <h3 className="achievement-title">{ach.title}</h3>
              <p className="achievement-desc">{ach.description}</p>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
