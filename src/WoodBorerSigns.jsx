import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';
import './WoodBorerSigns.css';

const signs = [
  "Tiny holes in wooden furniture",
  "Fine powder (wood dust) near holes",
  "Weak or hollow sounding wood",
  "Small insects emerging from wood"
];

const WoodBorerSigns = () => {
  return (
    <section className="wbsigns-section">
      <div className="wbsigns-glow-left"></div>
      <div className="wbsigns-glow-right"></div>
      
      <div className="wbsigns-container">
        <motion.div 
          className="wbsigns-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2>Signs of Wood Borer Infestation</h2>
          <p>Look out for these warning signs in wooden furniture and structures.</p>
        </motion.div>

        <div className="wbsigns-grid">
          {signs.map((sign, index) => (
            <motion.div 
              key={index}
              className="wbsigns-card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <AlertCircle className="wbsigns-icon" size={24} strokeWidth={1.5} />
              <span className="wbsigns-text">{sign}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WoodBorerSigns;
