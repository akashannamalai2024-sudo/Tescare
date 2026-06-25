import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import './WoodBorerWhyChoose.css';

const reasons = [
  "Deep Wood Penetration Treatment",
  "Long-Lasting Wood Protection",
  "Expert Pest Control Technicians",
  "Safe & Effective Treatment"
];

const WoodBorerWhyChoose = () => {
  return (
    <section className="wbwhy-section">
      <div className="wbwhy-container">
        <motion.h2 
          className="wbwhy-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Why Choose PROCARE
        </motion.h2>

        <div className="wbwhy-grid">
          {reasons.map((reason, index) => (
            <motion.div 
              key={index} 
              className="wbwhy-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="wbwhy-icon-wrapper">
                <CheckCircle size={36} strokeWidth={1.5} className="wbwhy-icon" />
              </div>
              <p className="wbwhy-text">{reason}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WoodBorerWhyChoose;
