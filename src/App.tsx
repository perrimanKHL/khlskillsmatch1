import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import CategoryGrid from './components/CategoryGrid';
import FeaturedSkills from './components/FeaturedSkills';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <CategoryGrid />
      <FeaturedSkills />
      <HowItWorks />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
