import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import './CockroachWhyChoose.css';

const reasons = [
  "Advanced German cockroach control",
  "Safe for food areas",
  "Odorless treatment",
  "Long-term prevention"
];

const CockroachWhyChoose = () => {
  return (
    <section className="cwhy-section">
      <div className="cwhy-container">
        <motion.h2 
          className="cwhy-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Why Choose PROCARE
        </motion.h2>

        <div className="cwhy-grid">
          {reasons.map((reason, index) => (
            <motion.div 
              key={index} 
              className="cwhy-item"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="cwhy-icon-wrapper">
                <CheckCircle size={36} strokeWidth={1.5} className="cwhy-icon" />
              </div>
              <p className="cwhy-text">{reason}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CockroachWhyChoose;
