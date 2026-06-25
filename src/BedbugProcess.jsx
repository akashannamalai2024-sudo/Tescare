import React from 'react';
import { motion } from 'framer-motion';
import './BedbugProcess.css';
import bg1 from './assets/bedbug_inspection.png';
import bg2 from './assets/bedbug_plan.png';
import bg3 from './assets/bedbug_chemical.png';
import bg4 from './assets/bedbug_followup.png';

const steps = [
  {
    number: "1",
    title: "Inspection",
    desc: "Thorough examination of mattress, bedding, and furniture",
    bg: bg1
  },
  {
    number: "2",
    title: "Treatment Plan",
    desc: "Customized approach based on infestation severity",
    bg: bg2
  },
  {
    number: "3",
    title: "Chemical Treatment",
    desc: "Safe, effective pesticides applied to affected areas",
    bg: bg3
  },
  {
    number: "4",
    title: "Follow-up Visit",
    desc: "Ensure complete elimination and prevention",
    bg: bg4
  }
];

const BedbugProcess = () => {
  return (
    <section className="bprocess-section">
      <div className="bprocess-container">
        
        <motion.div 
          className="bprocess-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2>Our Treatment Process</h2>
          <p>Systematic approach to eliminate bedbugs completely</p>
        </motion.div>

        <div className="bprocess-grid">
          {steps.map((item, index) => (
            <motion.div 
              key={index}
              className="bprocess-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              style={{
                backgroundImage: `url(${item.bg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="bprocess-card-overlay"></div>
              <div className="bprocess-number">
                {item.number}
              </div>
              <h3 className="bprocess-title">{item.title}</h3>
              <p className="bprocess-desc">{item.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BedbugProcess;
