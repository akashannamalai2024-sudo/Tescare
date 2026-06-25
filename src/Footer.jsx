import React from 'react';
import { Facebook, Instagram, Linkedin, Phone, Mail, MapPin } from 'lucide-react';
import logoImg from './assets/logo.png';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        
        {/* Column 1: Brand & Info */}
        <div className="footer-col footer-brand">
          <img src={logoImg} alt="PROCARE" className="footer-logo" />
          <p className="footer-desc">
            Professional pest control and bird netting solutions for a safer, healthier environment.
          </p>
          <div className="footer-socials">
            <a href="#" className="social-icon" aria-label="Facebook">
              <Facebook size={18} />
            </a>
            <a href="#" className="social-icon" aria-label="Instagram">
              <Instagram size={18} />
            </a>
            <a href="#" className="social-icon" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-col footer-links">
          <ul className="footer-list">
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#offers">Offers</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#book">Book Inspection</a></li>
          </ul>
        </div>

        {/* Column 3: Services */}
        <div className="footer-col footer-services">
          <ul className="footer-list">
            <li><a href="#bird-netting">Bird Netting</a></li>
            <li><a href="#bedbug-control">Bedbug Control</a></li>
            <li><a href="#cockroach-control">Cockroach Control</a></li>
            <li><a href="#mosquito-control">Mosquito Control</a></li>
            <li><a href="#rodent-control">Rodent Control</a></li>
            <li><a href="#termite-control">Termite Control</a></li>
            <li><a href="#woodborer-control">Wood Borer Control</a></li>
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div className="footer-col footer-contact">
          <div className="contact-item">
            <Phone size={18} className="contact-icon" />
            <div className="contact-text">
              <span>+91 98765 43210</span>
              <span>+91 98765 43211</span>
            </div>
          </div>
          
          <div className="contact-item">
            <Mail size={18} className="contact-icon" />
            <div className="contact-text">
              <span>info@procare.com</span>
            </div>
          </div>
          
          <div className="contact-item">
            <MapPin size={18} className="contact-icon" />
            <div className="contact-text">
              <span>123 Service Street</span>
              <span>Chennai, Tamil Nadu</span>
              <span>600001</span>
            </div>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 PROCARE Pest Control. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
