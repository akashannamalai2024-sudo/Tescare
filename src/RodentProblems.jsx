import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle } from 'lucide-react';
import './RodentProblems.css';

const problems = [
  "Food contamination",
  "Health risks",
  "Property damage",
  "Noise in ceilings"
];

const RodentProblems = () => {
  return (
    <section className="rproblems-section">
      <div className="rproblems-glow-left"></div>
      <div className="rproblems-glow-right"></div>
      
      <div className="rproblems-container">
        <motion.div 
          className="rproblems-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2>Problems Caused by Rodents</h2>
          <p>Rodents pose serious health and property risks</p>
        </motion.div>

        <div className="rproblems-grid">
          {problems.map((problem, index) => (
            <motion.div 
              key={index}
              className="rproblems-card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <AlertCircle className="rproblems-icon" size={24} strokeWidth={1.5} />
              <span className="rproblems-text">{problem}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RodentProblems;
