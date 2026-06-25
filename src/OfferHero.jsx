import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './OfferHero.css';

const OfferHero = () => {
  const { scrollY } = useScroll();
  const yText = useTransform(scrollY, [0, 800], [0, -100]);
  const opacityText = useTransform(scrollY, [0, 600], [1, 0]);
  const yGlow = useTransform(scrollY, [0, 800], [0, 260]);

  return (
    <section className="offer-hero-section" style={{ overflow: 'hidden', position: 'relative' }}>
      <motion.div className="offer-hero-glow-left" style={{ y: yGlow }}></motion.div>
      <motion.div className="offer-hero-glow-right" style={{ y: yGlow }}></motion.div>
      <motion.div className="offer-hero-content" style={{ y: yText, opacity: opacityText, position: 'relative', zIndex: 1 }}>
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Special Offers on Pest Control &<br/>Bird Netting
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Save more with our limited-time service discounts
        </motion.p>
      </motion.div>
    </section>
  );
};

export default OfferHero;
