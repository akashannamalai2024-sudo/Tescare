import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye } from 'lucide-react';
import './MissionVision.css';
import techImg from './assets/PCC.png';

const MissionVision = () => {
  return (
    <section className="mission-vision-section">
      {/* Background high-tech grid effect */}
      <div className="mv-grid-bg"></div>
      
      {/* Center subtle glowing orb */}
      <div className="mv-glow-center"></div>

      <motion.div 
        className="mv-container"
        initial={{ opacity: 0, scale: 1.1 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        
        {/* Center Technician Image */}
        <motion.img 
          src={techImg} 
          alt="PROCARE Technician" 
          className="mv-tech-center"
          initial={{ opacity: 0, y: 150, x: "-50%" }}
          whileInView={{ opacity: 1, y: 0, x: "-50%" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", stiffness: 60, damping: 15, delay: 0.3 }}
        />

        <motion.div 
          className="mv-card"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="mv-icon-wrapper">
            <Target size={40} className="mv-icon" />
          </div>
          <h2 className="mv-title">Our Mission</h2>
          <p className="mv-text">
            Deliver safe, effective, and eco-friendly pest control solutions for homes and businesses, ensuring a healthy environment for everyone.
          </p>
        </motion.div>

        <motion.div 
          className="mv-card"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        >
          <div className="mv-icon-wrapper">
            <Eye size={40} className="mv-icon" />
          </div>
          <h2 className="mv-title">Our Vision</h2>
          <p className="mv-text">
            To become the most trusted and technologically advanced pest control brand in India, setting the highest standards for safety and reliability.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default MissionVision;
