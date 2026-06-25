import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import './BedbugWhyChoose.css';

const reasons = [
  "Safe pest control chemicals",
  "Long-lasting protection",
  "Professional technicians",
  "Affordable service"
];

const BedbugWhyChoose = () => {
  return (
    <section className="bwhy-section">
      <div className="bwhy-container">
        <motion.h2 
          className="bwhy-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Why Choose PROCARE
        </motion.h2>

        <div className="bwhy-grid">
          {reasons.map((reason, index) => (
            <motion.div 
              key={index} 
              className="bwhy-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="bwhy-icon-wrapper">
                <CheckCircle size={36} strokeWidth={1.5} className="bwhy-icon" />
              </div>
              <p className="bwhy-text">{reason}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BedbugWhyChoose;
