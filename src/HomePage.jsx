import React from 'react';
import { Phone, CheckCircle2 } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from './Navbar.jsx';
import BookingSection from './BookingSection.jsx';
import ServicesSection from './ServicesSection.jsx';
import HowItWorks from './HowItWorks.jsx';
import WhyChooseUs from './WhyChooseUs.jsx';
import TrustedExperts from './TrustedExperts.jsx';
import OurFootprints from './OurFootprints.jsx';
import PestControlTips from './PestControlTips.jsx';
import Footer from './Footer.jsx';
import heroVideo from '../Video/contact page video.mp4';

const HomePage = () => {
  const { scrollY } = useScroll();
  
  // Background video moves slower (parallax offset) and scales slightly to cover viewport
  const yBg = useTransform(scrollY, [0, 800], [0, 240]);
  const scaleBg = useTransform(scrollY, [0, 800], [1, 1.15]);
  
  // Title content translates upward slightly faster and fades out beautifully
  const yText = useTransform(scrollY, [0, 800], [0, -100]);
  const opacityText = useTransform(scrollY, [0, 600], [1, 0]);
  
  // Glowing ambient backdrops translate down slowly to fill the transition
  const yGlow = useTransform(scrollY, [0, 800], [0, 280]);

  return (
    <div className="home-page-wrapper">
      <div className="hero-wrapper" style={{ overflow: 'hidden', position: 'relative' }}>
        {/* Parallax Background Container */}
        <motion.div 
          className="hero-video-container" 
          style={{ y: yBg, scale: scaleBg, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -2 }}
        >
          <video 
            className="hero-video-bg" 
            autoPlay 
            loop 
            muted 
            playsInline
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
        </motion.div>
        <div className="hero-overlay"></div>
        <Navbar />

        {/* Hero Content */}
        <motion.main className="hero-content" style={{ y: yText, opacity: opacityText }}>
          <h1 className="hero-title">
            Protect Your Home from <span className="highlight-green">Pests & Birds</span>
          </h1>
          <p className="hero-subtitle">
            Professional pest control and bird netting services<br/>
            for homes, apartments, and commercial spaces.
          </p>

          <ul className="hero-checklist">
            <li><CheckCircle2 className="check-icon" /> Safe Pest Treatments</li>
            <li><CheckCircle2 className="check-icon" /> Expert Technicians</li>
            <li><CheckCircle2 className="check-icon" /> Affordable Service Packages</li>
          </ul>

          <div className="hero-actions">
            <button className="btn-primary large" onClick={() => window.location.hash = '#book'}>Book Free Inspection</button>
            <button className="btn-secondary large" onClick={() => window.location.hash = '#contact'}>
              <Phone className="btn-icon" size={18} /> Call Now
            </button>
          </div>
        </motion.main>

        {/* Background Glows */}
        <motion.div className="bg-glow-left" style={{ y: yGlow }}></motion.div>
        <motion.div className="bg-glow-right" style={{ y: yGlow }}></motion.div>
      </div>

    <BookingSection />
    <ServicesSection />
    <HowItWorks />
    <WhyChooseUs />
    <TrustedExperts />
    <OurFootprints />
    <PestControlTips />
    <Footer />
  </div>
  );
};

export default HomePage;
