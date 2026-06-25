import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import './OurStory.css';
import ourStoryImg from './assets/OS.png';

const OurStory = () => {
  return (
    <section className="our-story-section">
      <motion.div 
        className="our-story-container"
        initial={{ opacity: 0, scale: 1.1 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="our-story-image-col">
          <img 
            src={ourStoryImg} 
            alt="PROCARE Team Story" 
            className="our-story-main-img" 
          />
        </div>
        <div className="our-story-content-col">
          <h2 className="our-story-title">Our Story</h2>
          <p className="our-story-text">
            PROCARE was founded with the mission to provide safe pest control and bird protection services with modern techniques and eco-friendly solutions. We understand the importance of maintaining a healthy, pest-free environment for families and businesses alike.
          </p>
          <p className="our-story-text">
            Over the years, we've grown to become one of India's most trusted names in pest management, serving thousands of satisfied customers with our commitment to excellence and safety.
          </p>
          <ul className="our-story-list">
            <li><CheckCircle2 className="story-check" size={20} /> Professional technicians</li>
            <li><CheckCircle2 className="story-check" size={20} /> Affordable service packages</li>
            <li><CheckCircle2 className="story-check" size={20} /> Safe pest treatments</li>
            <li><CheckCircle2 className="story-check" size={20} /> Long-lasting bird net installations</li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurStory;
