import React from 'react';
import { motion } from 'framer-motion';
import './RodentSolutions.css';
import bg1 from './assets/rodent_inspection.png';
import bg2 from './assets/rodent_trap.png';
import bg3 from './assets/rodent_baiting.png';
import bg4 from './assets/rodent_prevention.png';

const steps = [
  {
    number: "1",
    title: "Rodent Inspection",
    desc: "Complete property survey to identify entry points and nesting areas",
    bg: bg1
  },
  {
    number: "2",
    title: "Trap Installation",
    desc: "Strategic placement of humane and effective rodent traps",
    bg: bg2
  },
  {
    number: "3",
    title: "Rodent Baiting",
    desc: "Safe bait stations in targeted locations",
    bg: bg3
  },
  {
    number: "4",
    title: "Prevention Methods",
    desc: "Sealing entry points and ongoing monitoring",
    bg: bg4
  }
];

const RodentSolutions = () => {
  return (
    <section className="rsolutions-section">
      <div className="rsolutions-container">
        
        <motion.div 
          className="rsolutions-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2>Our Rodent Control Solutions</h2>
          <p>Comprehensive approach to rodent elimination</p>
        </motion.div>

        <div className="rsolutions-grid">
          {steps.map((item, index) => (
            <motion.div 
              key={index}
              className="rsolutions-card"
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
              <div className="rsolutions-card-overlay"></div>
              <div className="rsolutions-number">
                {item.number}
              </div>
              <h3 className="rsolutions-title">{item.title}</h3>
              <p className="rsolutions-desc">{item.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default RodentSolutions;
