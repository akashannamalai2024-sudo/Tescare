import React from 'react';
import { motion } from 'framer-motion';
import { Wind, Home, ShieldAlert } from 'lucide-react';
import './BirdProblems.css';

const problems = [
  {
    title: "Pigeon Droppings",
    desc: "Unsightly and unhygienic mess on balconies",
    icon: <Wind size={24} />,
    colorClass: "bp-card-purple"
  },
  {
    title: "Balcony Damage",
    desc: "Nesting materials clog drains and vents",
    icon: <Home size={24} />,
    colorClass: "bp-card-green"
  },
  {
    title: "Noise Disturbance",
    desc: "Constant cooing and flapping sounds",
    icon: <Wind size={24} />,
    colorClass: "bp-card-purple"
  },
  {
    title: "Health Risks",
    desc: "Diseases spread through bird droppings",
    icon: <ShieldAlert size={24} />,
    colorClass: "bp-card-green"
  }
];

const BirdProblems = () => {
  return (
    <section className="bird-problems-section">
      <div className="bp-container">
        
        <motion.div 
          className="bp-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2>Problems Caused by Birds</h2>
          <p>Birds can create serious issues for your property and health</p>
        </motion.div>

        <div className="bp-grid">
          {problems.map((problem, index) => (
            <motion.div 
              key={index}
              className={`bp-card ${problem.colorClass}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="bp-icon-wrapper">
                {problem.icon}
              </div>
              <h3 className="bp-card-title">{problem.title}</h3>
              <p className="bp-card-desc">{problem.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BirdProblems;
