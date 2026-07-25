import { motion, AnimatePresence } from "framer-motion";
import { FiX } from "react-icons/fi";

export default function ImageModal({ isOpen, onClose, children }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="modal-content glass-strong"
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.85, opacity: 0 }}
            transition={{ ease: [0.16, 1, 0.3, 1], duration: 0.4 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="modal-close btn btn-icon"
              onClick={onClose}
              aria-label="Close modal"
            >
              <FiX />
            </button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
