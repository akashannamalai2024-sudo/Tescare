import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';
import './MosquitoRisks.css';

const risks = [
  "Dengue",
  "Malaria",
  "Chikungunya",
  "Skin irritation"
];

const MosquitoRisks = () => {
  return (
    <section className="mrisks-section">
      <div className="mrisks-glow-left"></div>
      <div className="mrisks-glow-right"></div>
      
      <div className="mrisks-container">
        <motion.div 
          className="mrisks-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2>Health Risks from Mosquitoes</h2>
          <p>Mosquitoes carry dangerous diseases affecting millions</p>
        </motion.div>

        <div className="mrisks-grid">
          {risks.map((risk, index) => (
            <motion.div 
              key={index}
              className="mrisks-card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <AlertCircle className="mrisks-icon" size={24} strokeWidth={1.5} />
              <span className="mrisks-text">{risk}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MosquitoRisks;
