import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin } from 'lucide-react';
import mapIndiaImg from './assets/map_india.png';
import './OurFootprints.css';

const locations = [
  'Chennai',
  'Tiruchirappalli',
  'coimbatore',
  'Thiruvananthapuram',
  'Thrissur,',
  'Bangalore',
  'Hyderabad',
  'Mumbai',
  'Kolkata',
  'Ahmedabad',
  'Pune',
  'Surat'
];

const OurFootprints = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const mapY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section className="footprints-section" ref={sectionRef}>
      <div className="footprints-container">
        
        {/* Left Side: Locations */}
        <div className="footprints-content">
          <motion.h2 
            className="footprints-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Footprints
          </motion.h2>

          <div className="locations-grid">
            {locations.map((loc, index) => (
              <motion.div 
                key={index}
                className="location-pill"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <MapPin size={16} className="location-icon" />
                <span>{loc}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Side: Map */}
        <div className="footprints-map-wrapper">
          <motion.div 
            className="footprints-map-container"
            style={{ y: mapY }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Placeholder for the India map SVG/Image. The user can replace this with the actual map asset. */}
            <div className="map-image-wrapper">
               <img src={mapIndiaImg} alt="Map of India showing our footprint locations" className="footprints-map-img" />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default OurFootprints;
