import { motion } from "framer-motion";
import { FiMail, FiLinkedin, FiGithub } from "react-icons/fi";
import TypingAnimation from "./TypingAnimation";
import AnimatedCounter from "./AnimatedCounter";
import { personalData } from "../data/personalData";

export default function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="container hero-container">
        <div className="hero-content">
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="hero-badge-dot" />
            Available for opportunities
          </motion.div>
          <motion.h1
            className="hero-name"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            Hi, I'm <span className="grad">K Yamuna</span>
          </motion.h1>
          <motion.div
            className="hero-typing"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <TypingAnimation />
          </motion.div>
          <motion.p
            className="hero-tagline"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {personalData.tagline}
          </motion.p>
          <motion.div
            className="hero-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <a href={`mailto:${personalData.email}`} className="btn btn-primary"><FiMail /> Get In Touch</a>
            <a href={personalData.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-ghost"><FiLinkedin /> LinkedIn</a>
            <a href={personalData.github} target="_blank" rel="noopener noreferrer" className="btn btn-ghost"><FiGithub /> GitHub</a>
          </motion.div>
          <motion.div
            className="hero-stats"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {personalData.stats.map((stat) => (
              <div key={stat.id} className="hero-stat">
                <span className="hero-stat-value"><AnimatedCounter value={stat.value} suffix={stat.suffix} /></span>
                <span className="hero-stat-label">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero-code-block glass-strong">
            <div className="code-header">
              <span className="code-dot red" />
              <span className="code-dot yellow" />
              <span className="code-dot green" />
            </div>
            <pre className="code-content">
              <code>
                <span className="code-keyword">const</span>{" "}
                <span className="code-func">developer</span> = {"{"}{"\n"}
                {"  "}name: <span className="code-string">"{personalData.name}"</span>,{"\n"}
                {"  "}title: <span className="code-string">"CSE Student"</span>,{"\n"}
                {"  "}skills: [<span className="code-string">"Python"</span>,{" "}
                <span className="code-string">"Java"</span>,{" "}
                <span className="code-string">"React"</span>],{"\n"}
                {"  "}passion: <span className="code-string">"Building great products"</span>,{"\n"}
                {"}"};
              </code>
            </pre>
          </div>
          <div className="hero-floating-icons">
            <motion.div className="floating-icon python" animate={{ y: [-10, 10, -10] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
              <span>Python</span>
            </motion.div>
            <motion.div className="floating-icon react" animate={{ y: [10, -10, 10] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}>
              <span>React</span>
            </motion.div>
            <motion.div className="floating-icon java" animate={{ y: [-8, 8, -8] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}>
              <span>Java</span>
            </motion.div>
            <motion.div className="floating-icon django" animate={{ y: [8, -8, 8] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}>
              <span>Django</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
