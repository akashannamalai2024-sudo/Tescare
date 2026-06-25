import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import './MosquitoWhyChoose.css';

const reasons = [
  "Long-lasting protection",
  "Eco-friendly treatment",
  "Fast service",
  "Long-term prevention"
];

const MosquitoWhyChoose = () => {
  return (
    <section className="mwhy-section">
      <div className="mwhy-container">
        <motion.h2 
          className="mwhy-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Why Choose PROCARE
        </motion.h2>

        <div className="mwhy-grid">
          {reasons.map((reason, index) => (
            <motion.div 
              key={index} 
              className="mwhy-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="mwhy-icon-wrapper">
                <CheckCircle size={36} strokeWidth={1.5} className="mwhy-icon" />
              </div>
              <p className="mwhy-text">{reason}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MosquitoWhyChoose;
