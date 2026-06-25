import React from 'react';
import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import './ContactHours.css';

const hours = [
  { day: "Monday - Friday", time: "8:00 AM - 8:00 PM" },
  { day: "Saturday", time: "9:00 AM - 6:00 PM" },
  { day: "Sunday", time: "10:00 AM - 4:00 PM" },
  { day: "Emergency Service", time: "24/7 Available", highlight: true }
];

const ContactHours = () => {
  return (
    <section className="contact-hours-section">
      <div className="ch-container">
        <motion.div 
          className="ch-header"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <Clock size={32} className="ch-icon" strokeWidth={1.5} />
          <h2>Business Hours</h2>
        </motion.div>

        <motion.div 
          className="ch-list"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {hours.map((item, index) => (
            <div key={index} className="ch-row">
              <span className="ch-day">{item.day}</span>
              <span className={`ch-time ${item.highlight ? 'ch-highlight' : ''}`}>
                {item.time}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactHours;
