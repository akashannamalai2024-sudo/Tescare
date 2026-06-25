import React from 'react';
import { motion } from 'framer-motion';
import './TermiteSolutions.css';

import preImg from './assets/services/termite_pre.png';
import postImg from './assets/services/termite_post.png';
import soilImg from './assets/services/termite_soil.png';
import woodImg from './assets/services/termite_wood.png';

const solutions = [
  {
    number: "1",
    title: "Pre-construction Treatment",
    desc: "Soil treatment before building foundation is laid",
    bg: preImg
  },
  {
    number: "2",
    title: "Post-construction Treatment",
    desc: "Chemical barrier around existing structures",
    bg: postImg
  },
  {
    number: "3",
    title: "Soil Treatment",
    desc: "Anti-termite chemicals injected into soil",
    bg: soilImg
  },
  {
    number: "4",
    title: "Wood Protection",
    desc: "Direct treatment and protection of wooden elements",
    bg: woodImg
  }
];

const TermiteSolutions = () => {
  return (
    <section className="termite-solutions-section">
      <div className="tsol-container">
        
        <motion.div 
          className="tsol-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2>Termite Treatment Solutions</h2>
          <p>Comprehensive protection for every situation</p>
        </motion.div>

        <div className="tsol-grid">
          {solutions.map((item, index) => (
            <motion.div 
              key={index}
              className="tsol-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              style={{ backgroundImage: `url(${item.bg})` }}
            >
              <div className="tsol-overlay"></div>
              <div className="tsol-content">
                <div className="tsol-number">
                  {item.number}
                </div>
                <h3 className="tsol-title">{item.title}</h3>
                <p className="tsol-desc">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TermiteSolutions;
