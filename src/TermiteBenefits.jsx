import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import './TermiteBenefits.css';

const benefits = [
  "10-year warranty available",
  "Eco-friendly chemicals",
  "No drilling in some cases",
  "Complete property protection"
];

const TermiteBenefits = () => {
  return (
    <section className="termite-benefits-section">
      <div className="tben-container">
        
        <motion.div 
          className="tben-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2>Why Choose PROCARE</h2>
        </motion.div>

        <div className="tben-grid">
          {benefits.map((text, index) => (
            <motion.div 
              key={index}
              className="tben-item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="tben-icon-wrapper">
                <CheckCircle2 size={40} strokeWidth={1.5} />
              </div>
              <p className="tben-text">{text}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TermiteBenefits;
