import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';
import './TermiteSigns.css';

const signs = [
  { text: "Mud tubes on walls" },
  { text: "Hollow wood sounds" },
  { text: "Damaged furniture" },
  { text: "Small wings near windows" }
];

const TermiteSigns = () => {
  return (
    <section className="termite-signs-section">
      <div className="ts-container">
        
        <motion.div 
          className="ts-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2>Signs of Termite Infestation</h2>
          <p>Early detection can save thousands in repair costs</p>
        </motion.div>

        <div className="ts-grid">
          {signs.map((sign, index) => (
            <motion.div 
              key={index}
              className="ts-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <AlertCircle size={24} className="ts-icon" />
              <span className="ts-text">{sign.text}</span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TermiteSigns;
