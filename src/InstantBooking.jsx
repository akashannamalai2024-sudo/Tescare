import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Calendar, CheckCircle2, ShieldCheck, Phone } from 'lucide-react';
import './InstantBooking.css';
import foggingImg from './assets/fogging-worker.png';

const InstantBooking = () => {
  return (
    <section className="instant-booking-section">
      <motion.div 
        className="ib-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2>Book Pest Control or Bird Netting Service Instantly</h2>
        <p>Select your service and schedule a quick inspection with PROCARE technicians.</p>
      </motion.div>

      <div className="ib-container">
        
        {/* Left Side: Image */}
        <motion.div 
          className="ib-image-col"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img src={foggingImg} alt="Pest Control Fogging Worker" className="ib-main-img" />
          {/* We can add a cartoon bug overlay via CSS if needed, but the main image serves as the core visual */}
        </motion.div>

        {/* Right Side: Form */}
        <motion.div 
          className="ib-form-col"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <div className="ib-form-grid">
            <div className="ib-form-group">
              <label>Select Service</label>
              <div className="ib-select-wrapper">
                <select defaultValue="">
                  <option value="" disabled hidden>Select Service</option>
                  <option value="bedbug">Bedbug Control</option>
                  <option value="cockroach">Cockroach Control</option>
                  <option value="mosquito">Mosquito Control</option>
                  <option value="rodent">Rodent Control</option>
                  <option value="termite">Termite Control</option>
                  <option value="woodborer">Wood Borer Control</option>
                  <option value="birdnetting">Bird Netting</option>
                </select>
                <ChevronDown size={18} className="ib-icon" />
              </div>
            </div>

            <div className="ib-form-group">
              <label>Type Of Services</label>
              <div className="ib-select-wrapper">
                <select defaultValue="">
                  <option value="" disabled hidden>Select Type Service</option>
                  <option value="single">Single Service</option>
                  <option value="2_per_year">2 Service 1 Year</option>
                  <option value="4_per_year">4 Service 1 Year</option>
                  <option value="6_per_year">6 Service 1 Year</option>
                </select>
                <ChevronDown size={18} className="ib-icon" />
              </div>
            </div>

            <div className="ib-form-group">
              <label>Apartment Size / Area</label>
              <div className="ib-select-wrapper">
                <select defaultValue="">
                  <option value="" disabled hidden>Select Size</option>
                  <option value="1bhk">1 BHK</option>
                  <option value="2bhk">2 BHK</option>
                  <option value="3bhk">3 BHK</option>
                  <option value="4bhk">4 BHK</option>
                  <option value="villa">Villa</option>
                  <option value="office">Office Space</option>
                </select>
                <ChevronDown size={18} className="ib-icon" />
              </div>
            </div>

            <div className="ib-form-group">
              <label>Property Type</label>
              <div className="ib-select-wrapper">
                <select defaultValue="">
                  <option value="" disabled hidden>Select Property</option>
                  <option value="apartment">Apartment</option>
                  <option value="independent_house">Independent House</option>
                  <option value="office">Office</option>
                  <option value="commercial_building">Commercial Building</option>
                  <option value="villa">Villa</option>
                </select>
                <ChevronDown size={18} className="ib-icon" />
              </div>
            </div>

            <div className="ib-form-group">
              <label>City / Location</label>
              <div className="ib-input-wrapper">
                <input type="text" placeholder="Enter your location" />
              </div>
            </div>

            <div className="ib-form-group">
              <label>Preferred Date</label>
              <div className="ib-input-wrapper">
                <input type="text" placeholder=" " />
                <Calendar size={18} className="ib-icon right-icon text-gray" />
              </div>
            </div>
          </div>

          <div className="ib-actions">
            <button className="ib-btn ib-btn-solid" onClick={() => window.location.hash = '#book'}>Book Service</button>
            <button className="ib-btn ib-btn-outline" onClick={() => window.location.hash = '#contact'}>Talk to Expert</button>
          </div>

          <div className="ib-features">
            <div className="ib-feature"><CheckCircle2 size={16} /> Certified Technicians</div>
            <div className="ib-feature"><ShieldCheck size={16} /> Safe Pest Treatment</div>
            <div className="ib-feature"><CheckCircle2 size={16} /> Affordable Pricing</div>
            <div className="ib-feature"><CheckCircle2 size={16} /> Warranty Service</div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        className="ib-bottom-bar"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <div className="ib-pill">
          <span className="ib-pill-text text-gray">Need help choosing a service?</span>
          <a href="tel:+919600652424" className="ib-pill-phone">
            <Phone size={16} /> Call us at +91 9600652424
          </a>
          <span className="ib-pill-text text-gray">or</span>
          <a href="#expert" className="ib-pill-link">Talk to an expert</a>
        </div>
      </motion.div>
    </section>
  );
};

export default InstantBooking;
