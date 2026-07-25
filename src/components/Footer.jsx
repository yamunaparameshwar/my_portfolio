import { FiLinkedin, FiGithub, FiMail, FiHeart } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import { personalData } from "../data/personalData";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#hero" className="navbar-logo">
              <span className="logo-dot">{'<'}</span>
              <span className="logo-text">KY</span>
              <span className="logo-dot">{'/>'}</span>
            </a>
            <p className="footer-tagline">{personalData.tagline}</p>
          </div>
          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-social">
            <h4>Connect</h4>
            <div className="footer-social-icons">
              <a href={personalData.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
              <a href={personalData.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FiGithub /></a>
              <a href={`mailto:${personalData.email}`} aria-label="Email"><FiMail /></a>
              <a href={personalData.leetcode} target="_blank" rel="noopener noreferrer" aria-label="LeetCode"><SiLeetcode /></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {year} {personalData.name}. Built with <FiHeart style={{ display: "inline", verticalAlign: "middle", color: "var(--c-cyan)" }} /> using React & Framer Motion.</p>
        </div>
      </div>
    </footer>
  );
}
