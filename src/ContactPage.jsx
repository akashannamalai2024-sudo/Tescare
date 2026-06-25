import React, { useEffect } from 'react';
import Navbar from './Navbar.jsx';
import ContactHero from './ContactHero.jsx';
import ContactForm from './ContactForm.jsx';
import ContactMap from './ContactMap.jsx';
import ContactHours from './ContactHours.jsx';
import Footer from './Footer.jsx';

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="contact-page-wrapper">
      <Navbar />
      <ContactHero />
      <ContactForm />
      <ContactMap />
      <ContactHours />
      <Footer />
    </div>
  );
};

export default ContactPage;
