import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import './TermiteWhyChoose.css';

const reasons = [
  "10-year warranty available",
  "Eco-friendly chemicals",
  "No drilling in some cases",
  "Complete property protection"
];

const TermiteWhyChoose = () => {
  return (
    <section className="twc-section">
      <div className="twc-container">
        <motion.h2 
          className="twc-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Why Choose PROCARE
        </motion.h2>

        <div className="twc-grid">
          {reasons.map((reason, index) => (
            <motion.div 
              key={index} 
              className="twc-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="twc-icon-wrapper">
                <CheckCircle size={36} strokeWidth={1.5} className="twc-icon" />
              </div>
              <p className="twc-text">{reason}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TermiteWhyChoose;
