import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './WhyChooseUs.css';
import whyChooseUsImg from './assets/about/why_choose_us.png';
import workerImg from './assets/about/worker.png';

const WhyChooseUs = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const badgeY = useTransform(scrollYProgress, [0, 1], [120, -120]);

  return (
    <section className="why-choose-us" ref={ref}>
      <div className="wcu-header">
        <h2>Why Choose Us</h2>
      </div>
      
      <div className="wcu-content">
        <div className="wcu-text">
          <p>
            At TESCARE, we are committed to protecting your home and workplace
            with reliable pest control and bird netting solutions. Our services cover a
            wide range of problems including bedbug control, cockroach control,
            mosquito control, rodent control, termite treatment, wood borer control,
            and durable bird net installation. With a team of experienced technicians
            and modern pest management techniques, we ensure that every service
            is carried out safely and effectively. We use eco-friendly chemicals and
            professional equipment to eliminate pests while keeping your family,
            pets, and environment safe. Our goal is to provide quick response,
            affordable pricing, and long-lasting protection, giving you a cleaner,
            healthier, and pest-free space you can trust.
          </p>
        </div>
        
        {/* Right side: Parallax Image */}
        <div className="wcu-image-container">
          <div className="wcu-image-wrapper">
            <motion.img 
              src={whyChooseUsImg} 
              alt="TESCARE Pest Control Service" 
              className="building-img" 
              style={{ y: imageY }}
            />
            <motion.div className="worker-overlay" style={{ y: badgeY }}>
              <img src={workerImg} alt="Pest Control Worker" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
