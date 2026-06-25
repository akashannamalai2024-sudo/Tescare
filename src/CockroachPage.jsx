import React, { useEffect } from 'react';
import Navbar from './Navbar.jsx';
import CockroachHero from './CockroachHero.jsx';
import CockroachProblems from './CockroachProblems.jsx';
import CockroachProcess from './CockroachProcess.jsx';
import CockroachWhyChoose from './CockroachWhyChoose.jsx';
import PestCTA from './PestCTA.jsx';
import CockroachFAQ from './CockroachFAQ.jsx';
import Footer from './Footer.jsx';

const CockroachPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="croach-page-wrapper">
      <Navbar />
      <CockroachHero />
      <CockroachProblems />
      <CockroachProcess />
      <CockroachWhyChoose />
      <PestCTA />
      <CockroachFAQ />
      <Footer />
    </div>
  );
};

export default CockroachPage;
