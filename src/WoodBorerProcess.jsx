import React from 'react';
import { motion } from 'framer-motion';
import './WoodBorerProcess.css';
import bg1 from './assets/wb_inspection.png';
import bg2 from './assets/wb_assessment.png';
import bg3 from './assets/wb_chemical.png';
import bg4 from './assets/wb_prevention.png';

const steps = [
  {
    number: "1",
    title: "Inspection",
    desc: "Detailed inspection of furniture, doors, and wooden structures.",
    bg: bg1
  },
  {
    number: "2",
    title: "Damage Assessment",
    desc: "Identify infestation areas and severity of damage.",
    bg: bg2
  },
  {
    number: "3",
    title: "Chemical Treatment",
    desc: "Specialized wood borer treatment applied to affected areas.",
    bg: bg3
  },
  {
    number: "4",
    title: "Protection & Prevention",
    desc: "Protective coating and monitoring to prevent reinfestation.",
    bg: bg4
  }
];

const WoodBorerProcess = () => {
  return (
    <section className="wbprocess-section">
      <div className="wbprocess-container">
        
        <motion.div 
          className="wbprocess-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2>Our Treatment Process</h2>
          <p>Professional process to eliminate wood borers and protect wooden surfaces.</p>
        </motion.div>

        <div className="wbprocess-grid">
          {steps.map((item, index) => (
            <motion.div 
              key={index}
              className="wbprocess-card"
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
              <div className="wbprocess-card-overlay"></div>
              <div className="wbprocess-number">
                {item.number}
              </div>
              <h3 className="wbprocess-title">{item.title}</h3>
              <p className="wbprocess-desc">{item.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WoodBorerProcess;
