import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';
import './CockroachProblems.css';

const problems = [
  "Food contamination",
  "Allergy triggers",
  "Rapid infestation",
  "Disease transmission"
];

const CockroachProblems = () => {
  return (
    <section className="cprobs-section">
      <div className="cprobs-glow-left"></div>
      <div className="cprobs-glow-right"></div>
      
      <div className="cprobs-container">
        <motion.div 
          className="cprobs-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2>Problems Caused by Cockroaches</h2>
          <p>Cockroaches pose serious health and hygiene risks</p>
        </motion.div>

        <div className="cprobs-grid">
          {problems.map((problem, index) => (
            <motion.div 
              key={index}
              className="cprobs-card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <AlertTriangle className="cprobs-icon" size={24} strokeWidth={1.5} />
              <span className="cprobs-text">{problem}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CockroachProblems;
