import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { personalData } from "../data/personalData";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";

export default function CodingProfiles() {
  return (
    <SectionWrapper id="profiles">
      <div className="section-eyebrow">Coding Profiles</div>
      <h2 className="section-title">
        Code & <span className="grad">Statistics</span>
      </h2>
      <p className="section-desc">
        My coding activity across platforms and contribution history.
      </p>

      <div className="profiles-grid">
        <motion.a
          href={personalData.github}
          target="_blank"
          rel="noopener noreferrer"
          className="profile-card glass github-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          whileHover={{ y: -5 }}
        >
          <div className="profile-card-header">
            <FiGithub size={28} />
            <span className="profile-card-name">GitHub</span>
          </div>
          <p className="profile-card-desc">Explore my repositories, contributions, and open-source work.</p>
          <span className="profile-card-action">
            View Profile <FiExternalLink />
          </span>
        </motion.a>

        <motion.a
          href={personalData.leetcode}
          target="_blank"
          rel="noopener noreferrer"
          className="profile-card glass leetcode-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          whileHover={{ y: -5 }}
        >
          <div className="profile-card-header">
            <SiLeetcode size={28} />
            <span className="profile-card-name">LeetCode</span>
          </div>
          <p className="profile-card-desc">Solving data structures & algorithms problems regularly.</p>
          <span className="profile-card-action">
            View Profile <FiExternalLink />
          </span>
        </motion.a>
      </div>
    </SectionWrapper>
  );
}

