import React from 'react';
import { motion } from 'framer-motion';
import './MosquitoProcess.css';
import bg1 from './assets/mosq_inspection.png';
import bg2 from './assets/mosq_breeding.png';
import bg3 from './assets/mosq_chemical.png';
import bg4 from './assets/mosq_prevention.png';

const steps = [
  {
    number: "1",
    title: "Inspection",
    desc: "Identify mosquito breeding sites around your property",
    bg: bg1
  },
  {
    number: "2",
    title: "Breeding Control",
    desc: "Eliminate standing water and breeding grounds",
    bg: bg2
  },
  {
    number: "3",
    title: "Chemical Treatment",
    desc: "Apply safe larvicides and adulticides",
    bg: bg3
  },
  {
    number: "4",
    title: "Prevention",
    desc: "Ongoing monitoring and prevention strategies",
    bg: bg4
  }
];

const MosquitoProcess = () => {
  return (
    <section className="mprocess-section">
      <div className="mprocess-container">
        
        <motion.div 
          className="mprocess-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2>Treatment Process</h2>
          <p>Proven method for mosquito elimination</p>
        </motion.div>

        <div className="mprocess-grid">
          {steps.map((item, index) => (
            <motion.div 
              key={index}
              className="mprocess-card"
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
              <div className="mprocess-card-overlay"></div>
              <div className="mprocess-number">
                {item.number}
              </div>
              <h3 className="mprocess-title">{item.title}</h3>
              <p className="mprocess-desc">{item.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MosquitoProcess;
