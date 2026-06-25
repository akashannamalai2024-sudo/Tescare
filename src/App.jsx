import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import HomePage from './HomePage.jsx';
import AboutPage from './AboutPage.jsx';
import BirdNettingPage from './BirdNettingPage.jsx';
import TermitePage from './TermitePage.jsx';
import CockroachPage from './CockroachPage.jsx';
import MosquitoPage from './MosquitoPage.jsx';
import RodentPage from './RodentPage.jsx';
import BedbugPage from './BedbugPage.jsx';
import WoodBorerPage from './WoodBorerPage.jsx';
import OffersPage from './OffersPage.jsx';
import ContactPage from './ContactPage.jsx';
import BookPage from './BookPage.jsx';

function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleHashChange = () => setCurrentHash(window.location.hash);
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  let pageContent;

  if (currentHash === '#about') {
    pageContent = <AboutPage />;
  } else if (currentHash === '#bird-netting') {
    pageContent = <BirdNettingPage />;
  } else if (currentHash === '#termite-control') {
    pageContent = <TermitePage />;
  } else if (currentHash === '#cockroach-control') {
    pageContent = <CockroachPage />;
  } else if (currentHash === '#mosquito-control') {
    pageContent = <MosquitoPage />;
  } else if (currentHash === '#rodent-control') {
    pageContent = <RodentPage />;
  } else if (currentHash === '#bedbug-control') {
    pageContent = <BedbugPage />;
  } else if (currentHash === '#woodborer-control') {
    pageContent = <WoodBorerPage />;
  } else if (currentHash === '#offers') {
    pageContent = <OffersPage />;
  } else if (currentHash === '#contact') {
    pageContent = <ContactPage />;
  } else if (currentHash === '#book') {
    pageContent = <BookPage />;
  } else {
    pageContent = <HomePage />;
  }

  return (
    <>
      <motion.div
        style={{
          scaleX,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '4px',
          backgroundColor: '#4CAA17',
          transformOrigin: '0%',
          zIndex: 9999,
          boxShadow: '0 0 10px #4CAA17, 0 0 5px #4CAA17'
        }}
      />
      {pageContent}
    </>
  );
}

export default App;

