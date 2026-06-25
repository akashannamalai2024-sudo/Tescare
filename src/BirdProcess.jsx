import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardCheck, Ruler, Wrench, ShieldCheck } from 'lucide-react';
import './BirdProcess.css';

const processSteps = [
  {
    number: "1",
    title: "Site Inspection",
    desc: "Assessment of the area",
    icon: <ClipboardCheck size={28} />
  },
  {
    number: "2",
    title: "Measurement",
    desc: "Precise dimensions taken",
    icon: <Ruler size={28} />
  },
  {
    number: "3",
    title: "Net Installation",
    desc: "Professional fitting",
    icon: <Wrench size={28} />
  },
  {
    number: "4",
    title: "Safety Check",
    desc: "Quality assurance",
    icon: <ShieldCheck size={28} />
  }
];

const BirdProcess = () => {
  return (
    <section className="bird-process-section">
      <div className="bproc-container">
        
        <motion.div 
          className="bproc-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2>Installation Process</h2>
          <p>Our professional 4-step installation ensures perfect protection</p>
        </motion.div>

        <div className="bproc-timeline-wrapper">
          {/* The connecting line */}
          <div className="bproc-line"></div>

          <div className="bproc-steps">
            {processSteps.map((step, index) => (
              <motion.div 
                key={index}
                className="bproc-step"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <div className="bproc-number-circle">
                  {step.number}
                </div>
                
                <div className="bproc-content">
                  <div className="bproc-icon">
                    {step.icon}
                  </div>
                  <h3 className="bproc-title">{step.title}</h3>
                  <p className="bproc-desc">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default BirdProcess;
