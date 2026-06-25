import React, { useRef, useEffect } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import './StatsSection.css';

const Counter = ({ from, to, duration = 2, suffix = "+" }) => {
  const nodeRef = useRef();
  const inView = useInView(nodeRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView) {
      const controls = animate(from, to, {
        duration,
        ease: "easeOut",
        onUpdate(value) {
          if (nodeRef.current) {
            // Format numbers with commas if large
            const rounded = Math.round(value);
            const formatted = rounded > 999 ? rounded.toLocaleString() : rounded;
            nodeRef.current.textContent = formatted + suffix;
          }
        }
      });
      return () => controls.stop();
    }
  }, [from, to, inView, duration, suffix]);

  return <span ref={nodeRef}>{from}{suffix}</span>;
};

const StatsSection = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-500, 500], [10, -10]);
  const rotateY = useTransform(x, [-500, 500], [-10, 10]);

  function handleMouse(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  }

  const stats = [
    { target: 10000, label: "Happy Customers", suffix: "+" },
    { target: 8, label: "Years Experience", suffix: "+" },
    { target: 50, label: "Expert Technicians", suffix: "+" },
    { target: 25, label: "Service Areas", suffix: "+" }
  ];

  return (
    <section 
      className="stats-section"
      onMouseMove={handleMouse}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ perspective: 1200 }}
    >
      <div className="stats-bg-glow"></div>
      <div className="stats-particles"></div>

      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div 
          className="stats-container"
          style={{ rotateX, rotateY }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
        {stats.map((stat, index) => (
          <motion.div 
            className="stat-card" 
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            <div className="stat-number">
              <Counter from={0} to={stat.target} suffix={stat.suffix} />
            </div>
            <div className="stat-label">{stat.label}</div>
          </motion.div>
        ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default StatsSection;
