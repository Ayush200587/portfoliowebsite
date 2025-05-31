
import React, { useEffect } from 'react';
import SimplisticHero from '@/components/SimplisticHero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { ThemeToggle } from '@/components/ThemeToggle';
import Sidebar from '@/components/Sidebar';
import { useIsMobile } from '@/hooks/use-mobile';
import { initScrollReveal } from '@/utils/scrollReveal';

const Index = () => {
  const isMobile = useIsMobile();
  
  useEffect(() => {
    // Initialize scroll reveal animations
    const scrollObserver = initScrollReveal();
    
    // Cleanup observer on component unmount
    return () => {
      scrollObserver.disconnect();
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <div className={isMobile ? 'w-full' : 'ml-16 md:ml-20'}>
        <div className="fixed top-4 right-4 z-50">
          <ThemeToggle />
        </div>
        <main className="flex flex-col w-full">
          <SimplisticHero />
          <About />
          <Projects />
          <Skills />
          <Contact />
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default Index;
