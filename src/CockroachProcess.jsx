import React from 'react';
import { motion } from 'framer-motion';
import './CockroachProcess.css';
import bg1 from './assets/roach_inspection.png';
import bg2 from './assets/roach_gel_bait.png';
import bg3 from './assets/roach_spray.png';
import bg4 from './assets/roach_follow_up.png';

const steps = [
  {
    number: "1",
    title: "Inspection",
    desc: "Identify hiding spots and infestation severity",
    bg: bg1
  },
  {
    number: "2",
    title: "Gel Bait Treatment",
    desc: "Strategic placement of gel baits in active areas",
    bg: bg2
  },
  {
    number: "3",
    title: "Spray Treatment",
    desc: "Residual spray in cracks and crevices",
    bg: bg3
  },
  {
    number: "4",
    title: "Follow-up Visit",
    desc: "Ensure complete elimination and re-treatment if needed",
    bg: bg4
  }
];

const CockroachProcess = () => {
  return (
    <section className="cprocess-section">
      <div className="cprocess-container">
        
        <motion.div 
          className="cprocess-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2>Treatment Process</h2>
          <p>Proven method for cockroach elimination</p>
        </motion.div>

        <div className="cprocess-grid">
          {steps.map((item, index) => (
            <motion.div 
              key={index}
              className="cprocess-card"
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
              <div className="cprocess-card-overlay"></div>
              <div className="cprocess-number">
                {item.number}
              </div>
              <h3 className="cprocess-title">{item.title}</h3>
              <p className="cprocess-desc">{item.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CockroachProcess;
