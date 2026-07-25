import { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import CertificateCard from "./CertificateCard";
import ImageModal from "./ImageModal";
import { personalData } from "../data/personalData";
import { FiAward } from "react-icons/fi";

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <SectionWrapper id="certificates">
      <div className="section-eyebrow">Certifications</div>
      <h2 className="section-title">
        Verified <span className="grad">Credentials</span>
      </h2>
      <p className="section-desc">
        Industry-recognized certifications from IBM, edX, HackerRank, HP LIFE, Google, AWS, Palo Alto Networks, and EduSkills.
      </p>

      <div className="certs-grid">
        {personalData.certifications.map((cert) => (
          <CertificateCard
            key={cert.id}
            certificate={cert}
            onClick={() => setSelectedCert(cert)}
          />
        ))}
      </div>

      <ImageModal
        isOpen={!!selectedCert}
        onClose={() => setSelectedCert(null)}
      >
        {selectedCert && (
          <div className="cert-detail">
            <div className="cert-detail-icon">
              <FiAward size={48} />
            </div>
            <h3 className="cert-detail-title">{selectedCert.title}</h3>
            <p className="cert-detail-issuer">
              Issued by <strong>{selectedCert.issuer}</strong>
            </p>
            <span className="chip cert-detail-type">{selectedCert.type}</span>
            <p className="cert-detail-note">
              This certification demonstrates proficiency and commitment to continuous learning in the field.
            </p>
          </div>
        )}
      </ImageModal>
    </SectionWrapper>
  );
}

