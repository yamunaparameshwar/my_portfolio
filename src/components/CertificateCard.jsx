import { motion } from "framer-motion";
import { FiAward } from "react-icons/fi";

export default function CertificateCard({ certificate, onClick }) {
  return (
    <motion.div
      className="cert-card glass"
      whileHover={{ y: -5 }}
      onClick={() => onClick(certificate)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="cert-icon">
        <FiAward />
      </div>
      <h3 className="cert-title">{certificate.title}</h3>
      <p className="cert-issuer">{certificate.issuer}</p>
      <span className="chip">{certificate.type}</span>
    </motion.div>
  );
}
