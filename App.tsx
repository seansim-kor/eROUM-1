import React from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { Philosophy } from './components/Philosophy';
import { About } from './components/About';
import { MissionVision } from './components/MissionVision';
import { Business } from './components/Business';
import { CallToAction } from './components/CallToAction';
import { Contact } from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col group/design-root">
      <Navigation />
      <main className="flex flex-col items-center w-full">
        <Hero />
        <Philosophy />
        <About />
        <MissionVision />
        <Business />
        <CallToAction />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;