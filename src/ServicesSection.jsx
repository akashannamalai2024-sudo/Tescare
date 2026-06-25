import React, { useRef, useState } from 'react';
import { Wrench, ArrowUpRight } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import './ServicesSection.css';

// Import generated images
import bedbugImg from './assets/services/bedbug_control_1779952136140.png';
import rodentImg from './assets/services/rodent_control_1779952155477.png';
import mosquitoImg from './assets/services/mosquito_control_1779952172778.png';
import cockroachImg from './assets/services/cockroach_control_1779952189408.png';
import termiteImg from './assets/services/termite_control_1779952210853.png';
import birdNettingImg from './assets/services/bird_netting_1779952229064.png';
import woodBorerImg from './assets/services/wood_borer_control_1779952247139.png';

const services = [
  {
    title: 'Bedbug Control',
    img: bedbugImg,
    description: 'Eliminate hidden bedbugs quickly with safe and effective treatments. Our experts ensure a clean, comfortable, and bite-free sleeping environment.',
    color: '#e74c3c'
  },
  {
    title: 'Rodent Control',
    img: rodentImg,
    description: 'Protect your home or business from rats and rodents that spread disease and cause damage. Our proven solutions help keep your space safe, hygienic, and rodent-free.',
    color: '#e67e22'
  },
  {
    title: 'Mosquito Control',
    img: mosquitoImg,
    description: 'Reduce mosquito breeding and protect your family from harmful bites and diseases. Our treatments create a safer and more comfortable outdoor environment.',
    color: '#3498db'
  },
  {
    title: 'Cockroach Control',
    img: cockroachImg,
    description: 'Get rid of stubborn cockroaches using advanced and reliable pest control methods. We ensure long-lasting protection for a cleaner and healthier space.',
    color: '#8e44ad'
  },
  {
    title: 'Termite Control',
    img: termiteImg,
    description: "Prevent costly structural damage caused by termites before it spreads. Our specialized treatments protect wood and strengthen your property's safety.",
    color: '#27ae60'
  },
  {
    title: 'Bird Netting',
    img: birdNettingImg,
    description: 'Keep pigeons and birds away from balconies, windows, and buildings. Durable bird net installation helps maintain a clean and bird-free environment.',
    color: '#1abc9c'
  },
  {
    title: 'Wood Borer Control',
    img: woodBorerImg,
    description: 'Stop wood-boring pests from damaging furniture, doors, and wooden structures. Our treatment preserves the strength and life of your wooden assets.',
    color: '#f39c12'
  }
];

/* ── Tilt 3-D card ── */
const TiltCard = ({ service, index }) => {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const springConfig = { stiffness: 300, damping: 20 };
  const rotateX = useSpring(0, springConfig);
  const rotateY = useSpring(0, springConfig);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    rotateX.set(-dy * 15);
    rotateY.set(dx * 15);
    setTilt({ x: dx, y: dy });
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    setTilt({ x: 0, y: 0 });
    setHovered(false);
  };

  return (
    <motion.div
      ref={cardRef}
      className="service-v2-card"
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        '--accent': service.color,
      }}
      initial={{ opacity: 0, y: 80, rotateX: -20 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: true, margin: '-60px' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={() => setHovered(true)}
    >
      {/* 3D shimmer layer */}
      <div
        className="card-shimmer"
        style={{
          background: hovered
            ? `radial-gradient(circle at ${50 + tilt.x * 40}% ${50 + tilt.y * 40}%, rgba(255,255,255,0.15) 0%, transparent 70%)`
            : 'none',
        }}
      />

      <img
        src={service.img}
        alt={service.title}
        className="service-v2-card-img"
      />
      <div className="service-v2-card-overlay" />

      {/* Accent glow bottom edge */}
      <div className="card-accent-glow" />

      <div className="service-v2-card-badge">
        <ArrowUpRight size={18} />
      </div>

      <div className="service-v2-card-content" style={{ transform: 'translateZ(30px)' }}>
        <h3 className="service-v2-card-title">{service.title}</h3>
        <p className="service-v2-card-desc">{service.description}</p>
      </div>
    </motion.div>
  );
};

/* ── Floating particles ── */
const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 4 + 2,
  dur: Math.random() * 8 + 6,
  delay: Math.random() * 5,
}));

/* ── Section ── */
const ServicesSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const glowY1 = useTransform(scrollYProgress, [0, 1], [-150, 200]);
  const glowY2 = useTransform(scrollYProgress, [0, 1], [200, -150]);

  // 3-D title tilt on scroll
  const titleRotateX = useTransform(scrollYProgress, [0, 0.3], [20, 0]);
  const titleOpacity  = useTransform(scrollYProgress, [0, 0.15], [0, 1]);
  const titleY        = useTransform(scrollYProgress, [0, 0.25], [60, 0]);

  return (
    <section className="services-section-v2" ref={ref}>
      {/* Floating particles */}
      <div className="particles-container" aria-hidden="true">
        {PARTICLES.map((p) => (
          <motion.span
            key={p.id}
            className="particle"
            style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
            animate={{ y: [0, -40, 0], opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: p.dur, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </div>

      {/* Background Glows */}
      <motion.div className="services-glow-left"  style={{ y: glowY1 }} />
      <motion.div className="services-glow-right" style={{ y: glowY2 }} />

      <div className="services-v2-container">

        {/* Header */}
        <div className="services-v2-hero">
          <motion.div
            className="services-v2-content"
            style={{ rotateX: titleRotateX, opacity: titleOpacity, y: titleY, transformPerspective: 800 }}
          >
            <motion.div
              className="services-badge"
              initial={{ scale: 0.7, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, type: 'spring' }}
              viewport={{ once: true }}
            >
              <Wrench size={14} />
              <span>OUR SERVICES</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              viewport={{ once: true }}
            >
              What we can do for you
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              viewport={{ once: true }}
            >
              From protection to prevention, we provide clinical pest control
              solutions tailored to your specific environment.
            </motion.p>
          </motion.div>
        </div>

        {/* 3D Cards Grid */}
        <div className="services-v2-grid" style={{ perspective: '1200px' }}>
          {services.map((service, index) => (
            <TiltCard key={index} service={service} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
