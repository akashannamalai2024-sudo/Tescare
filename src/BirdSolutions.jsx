import React from 'react';
import { motion } from 'framer-motion';
import { Home, Wind, Building2, Shield } from 'lucide-react';
import './BirdSolutions.css';

import balconyImg from './assets/balcony-netting.png';
import windowImg from './assets/window-netting.png';
import buildingImg from './assets/building-nets.png';
import industrialImg from './assets/industrial-netting.png';

const solutions = [
  {
    title: "Balcony Netting",
    desc: "Protect your balcony from birds while maintaining visibility and airflow",
    icon: <Home size={24} />,
    bgImage: balconyImg
  },
  {
    title: "Window Netting",
    desc: "Keep birds away from windows and prevent nesting in AC units",
    icon: <Wind size={24} />,
    bgImage: windowImg
  },
  {
    title: "Building Safety Nets",
    desc: "Comprehensive protection for entire building facades and terraces",
    icon: <Building2 size={24} />,
    bgImage: buildingImg
  },
  {
    title: "Industrial Bird Netting",
    desc: "Heavy-duty solutions for warehouses, factories, and commercial spaces",
    icon: <Shield size={24} />,
    bgImage: industrialImg
  }
];

const BirdSolutions = () => {
  return (
    <section className="bird-solutions-section">
      <div className="bs-container">
        
        <motion.div 
          className="bs-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2>Bird Netting Solutions</h2>
          <p>Comprehensive protection for every type of space</p>
        </motion.div>

        <div className="bs-grid">
          {solutions.map((item, index) => (
            <motion.div 
              key={index}
              className="bs-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              style={{ backgroundImage: `url(${item.bgImage})` }}
            >
              <div className="bs-card-overlay"></div>
              
              <div className="bs-icon-wrapper">
                {item.icon}
              </div>
              
              <div className="bs-card-content">
                <h3 className="bs-card-title">{item.title}</h3>
                <p className="bs-card-desc">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BirdSolutions;
