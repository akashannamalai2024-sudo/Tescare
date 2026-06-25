import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';
import './BedbugSigns.css';

const signs = [
  "Red bite marks on skin",
  "Blood spots on sheets",
  "Small dark stains on mattress",
  "Bedbugs hiding in cracks"
];

const BedbugSigns = () => {
  return (
    <section className="bsigns-section">
      <div className="bsigns-glow-left"></div>
      <div className="bsigns-glow-right"></div>
      
      <div className="bsigns-container">
        <motion.div 
          className="bsigns-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2>Signs of Bedbug Infestation</h2>
          <p>Look out for these warning signs in your bedroom</p>
        </motion.div>

        <div className="bsigns-grid">
          {signs.map((sign, index) => (
            <motion.div 
              key={index}
              className="bsigns-card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <AlertCircle className="bsigns-icon" size={24} strokeWidth={1.5} />
              <span className="bsigns-text">{sign}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BedbugSigns;
