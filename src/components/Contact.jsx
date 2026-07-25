import { useState } from "react";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { personalData } from "../data/personalData";
import { FiMail, FiMapPin, FiPhone, FiSend, FiLinkedin, FiGithub } from "react-icons/fi";
import { SiWhatsapp } from "react-icons/si";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:${personalData.email}?subject=Portfolio Contact from ${formData.name}&body=${formData.message}`;
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <SectionWrapper id="contact">
      <div className="section-eyebrow">Contact</div>
      <h2 className="section-title">Let's <span className="grad">Connect</span></h2>
      <p className="section-desc">Have a question, opportunity, or just want to say hi? Reach out through any of the channels below.</p>
      <div className="contact-grid">
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="contact-info-item">
            <FiMail className="contact-info-icon" />
            <div><h4>Email</h4><a href={`mailto:${personalData.email}`}>{personalData.email}</a></div>
          </div>
          <div className="contact-info-item">
            <FiPhone className="contact-info-icon" />
            <div><h4>Phone</h4><a href={`tel:${personalData.phone}`}>{personalData.phone}</a></div>
          </div>
          <div className="contact-info-item">
            <FiMapPin className="contact-info-icon" />
            <div><h4>Location</h4><span>{personalData.location}</span></div>
          </div>
          <div className="contact-socials">
            <a href={personalData.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-icon contact-social-btn" aria-label="LinkedIn"><FiLinkedin /></a>
            <a href={personalData.github} target="_blank" rel="noopener noreferrer" className="btn btn-icon contact-social-btn" aria-label="GitHub"><FiGithub /></a>
            <a href={`mailto:${personalData.email}`} className="btn btn-icon contact-social-btn" aria-label="Email"><FiMail /></a>
            <a href={`https://wa.me/${personalData.phone.replace(/[^0-9]/g, "")}`} target="_blank" rel="noopener noreferrer" className="btn btn-icon contact-social-btn" aria-label="WhatsApp"><SiWhatsapp /></a>
          </div>
        </motion.div>
        <motion.form
          className="contact-form glass"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Your name" className="form-input" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="your@email.com" className="form-input" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows="5" placeholder="Your message..." className="form-input form-textarea" />
          </div>
          <motion.button type="submit" className="btn btn-primary form-submit" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            {sent ? <>Sent! <FiSend /></> : <>Send Message <FiSend /></>}
          </motion.button>
        </motion.form>
      </div>
    </SectionWrapper>
  );
}
