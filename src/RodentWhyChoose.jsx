import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import './RodentWhyChoose.css';

const reasons = [
  "Experienced technicians",
  "Safe methods",
  "Quick response",
  "Guaranteed results"
];

const RodentWhyChoose = () => {
  return (
    <section className="rwhy-section">
      <div className="rwhy-container">
        <motion.h2 
          className="rwhy-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Why Choose PROCARE
        </motion.h2>

        <div className="rwhy-grid">
          {reasons.map((reason, index) => (
            <motion.div 
              key={index} 
              className="rwhy-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="rwhy-icon-wrapper">
                <CheckCircle size={36} strokeWidth={1.5} className="rwhy-icon" />
              </div>
              <p className="rwhy-text">{reason}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RodentWhyChoose;
