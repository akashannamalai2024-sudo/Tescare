import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import './ContactMap.css';

const ContactMap = () => {
  return (
    <section className="contact-map-section">
      <div className="cmap-container">
        <motion.div 
          className="cmap-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <h2>Find Us Here</h2>
          <p>Our service location</p>
        </motion.div>

        <motion.div 
          className="cmap-placeholder-box"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <iframe 
            src="https://maps.google.com/maps?q=Chennai,%20Tamil%20Nadu&t=&z=11&ie=UTF8&iwloc=&output=embed" 
            width="100%" 
            height="100%" 
            style={{ border: 0, borderRadius: '16px' }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Service Location Map"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactMap;
