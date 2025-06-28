import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import ComingSoon from './components/ComingSoon';
import Footer from './components/Footer';
import TermsOfService from './components/TermsOfService';
import PrivacyPolicy from './components/PrivacyPolicy';

type PageType = 'home' | 'terms' | 'privacy';

function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  const showTerms = () => setCurrentPage('terms');
  const showPrivacy = () => setCurrentPage('privacy');
  const showHome = () => setCurrentPage('home');

  if (currentPage === 'terms') {
    return <TermsOfService onBack={showHome} />;
  }

  if (currentPage === 'privacy') {
    return <PrivacyPolicy onBack={showHome} />;
  }

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <About />
      <ComingSoon />
      <Footer onTermsClick={showTerms} onPrivacyClick={showPrivacy} />
    </div>
  );
}

export default App;