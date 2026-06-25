import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send } from 'lucide-react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });
  const [showNotification, setShowNotification] = useState(false);

  const getPrettyService = (service) => {
    const services = {
      bedbug: 'Bedbug Control',
      cockroach: 'Cockroach Control',
      mosquito: 'Mosquito Control',
      rodent: 'Rodent Control',
      termite: 'Termite Control',
      woodborer: 'Wood Borer Control',
      birdnetting: 'Bird Netting'
    };
    return services[service] || service;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setShowNotification(true);
    
    // Auto-dismiss after 7 seconds
    setTimeout(() => {
      setShowNotification(false);
    }, 7000);
  };

  return (
    <section className="contact-form-section">
      <AnimatePresence>
        {showNotification && (
          <motion.div
            className="cf-notification"
            initial={{ opacity: 0, y: -50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          >
            <div className="notification-icon">🎉</div>
            <div className="notification-details">
              <h4>Message Sent!</h4>
              <p>
                Thank you for reaching out, <strong>{formData.name}</strong>! Your inquiry regarding <strong>{getPrettyService(formData.service)}</strong> has been sent successfully. Our team will contact you shortly at <strong>{formData.phone}</strong> or via email at <strong>{formData.email}</strong>.
              </p>
            </div>
            <button className="notification-close" onClick={() => setShowNotification(false)}>×</button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="cf-glow-left"></div>
      <div className="cf-glow-right"></div>
      
      <div className="cf-container">
        <motion.div 
          className="cf-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <h2>Send Us a Message</h2>
          <p>Fill out the form below and our team will get back to you shortly</p>
        </motion.div>

        <motion.form 
          className="cf-form" 
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="cf-row">
            <div className="cf-group">
              <label htmlFor="name">Name *</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                placeholder="Enter your full name" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>
            <div className="cf-group">
              <label htmlFor="phone">Phone *</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                placeholder="Enter your phone number" 
                value={formData.phone}
                onChange={handleChange}
                required 
              />
            </div>
          </div>

          <div className="cf-group">
            <label htmlFor="email">Email *</label>
            <input 
              type="email" 
              id="email" 
              name="email" 
              placeholder="Enter your email address" 
              value={formData.email}
              onChange={handleChange}
              required 
            />
          </div>

          <div className="cf-group">
            <label htmlFor="service">Select Service*</label>
            <div className="cf-select-wrapper">
              <select 
                id="service" 
                name="service" 
                value={formData.service}
                onChange={handleChange}
                required
                className={formData.service === "" ? "placeholder" : ""}
              >
                <option value="" disabled hidden>Select Service</option>
                <option value="bedbug">Bedbug Control</option>
                <option value="cockroach">Cockroach Control</option>
                <option value="mosquito">Mosquito Control</option>
                <option value="rodent">Rodent Control</option>
                <option value="termite">Termite Control</option>
                <option value="woodborer">Wood Borer Control</option>
                <option value="birdnetting">Bird Netting</option>
              </select>
            </div>
          </div>

          <div className="cf-group">
            <label htmlFor="message">Message *</label>
            <textarea 
              id="message" 
              name="message" 
              placeholder="Tell us about your pest problem or requirements" 
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required 
            ></textarea>
          </div>

          <button type="submit" className="cf-submit-btn">
            <Send size={18} className="cf-submit-icon" />
            <span>Send Message</span>
          </button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactForm;
