
import React from 'react';
import { ChevronDown } from 'lucide-react';

const SimplisticHero = () => {
  const handleScrollDown = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-4 sm:px-6">
      {/* Background with subtle floating elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-pixel-navy/5"></div>
      
      {/* MERN Stack floating logos */}
      <div className="absolute top-16 left-10 w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center animate-pixel-float shadow-lg">
        <span className="text-white font-bold text-xs">M</span>
      </div>
      <div className="absolute top-32 right-16 w-10 h-10 bg-gray-800 rounded flex items-center justify-center animate-pixel-float shadow-lg" style={{animationDelay: '1s'}}>
        <span className="text-white font-bold text-xs">E</span>
      </div>
      <div className="absolute bottom-32 left-20 w-11 h-11 bg-blue-500 rounded-full flex items-center justify-center animate-pixel-float shadow-lg" style={{animationDelay: '2s'}}>
        <span className="text-white font-bold text-xs">R</span>
      </div>
      <div className="absolute bottom-48 right-10 w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center animate-pixel-float shadow-lg" style={{animationDelay: '0.5s'}}>
        <span className="text-white font-bold text-xs">N</span>
      </div>
      
      {/* Additional floating tech elements */}
      <div className="absolute top-1/2 left-8 w-8 h-8 bg-pixel-teal/20 rounded border-2 border-pixel-teal animate-pixel-float" style={{animationDelay: '1.5s'}}>
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-3 h-3 bg-pixel-teal rounded-full"></div>
        </div>
      </div>
      <div className="absolute top-1/3 right-8 w-6 h-6 bg-pixel-blue/30 transform rotate-45 animate-pixel-float" style={{animationDelay: '2.5s'}}></div>
      
      {/* Main content */}
      <div className="relative z-10 text-center space-y-8 max-w-4xl mx-auto">
        {/* Name/Brand */}
        <div className="space-y-4">
          <h1 className="font-pixel text-3xl md:text-4xl lg:text-5xl text-foreground">
            <span className="text-pixel-teal">Ayush</span>{" "}
            <span className="text-pixel-blue">Kumar</span>
          </h1>
          
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-pixel-teal to-transparent mx-auto"></div>
          
          <p className="font-mono text-lg md:text-xl text-muted-foreground">
            Software Engineer
          </p>
        </div>

        {/* Minimal description */}
        <div className="space-y-6">
          <p className="font-mono text-sm md:text-base text-foreground/80 max-w-md mx-auto leading-relaxed">
            Creating digital experiences with clean code and thoughtful design
          </p>
          
          {/* Simple CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="#about" 
              className="pixel-button group"
            >
              Explore Work
            </a>
            
            <a 
              href="#contact" 
              className="font-mono text-sm text-foreground hover:text-pixel-teal transition-colors underline underline-offset-4"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator - now functional and properly aligned */}
      <button 
        onClick={handleScrollDown}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce hover:text-pixel-teal transition-colors cursor-pointer group focus:outline-none"
        aria-label="Scroll to next section"
      >
        <span className="font-mono text-xs text-muted-foreground mb-2 tracking-wider group-hover:text-pixel-teal transition-colors">
          SCROLL DOWN
        </span>
        <ChevronDown className="w-4 h-4 text-muted-foreground group-hover:text-pixel-teal transition-colors" />
      </button>
    </section>
  );
};

export default SimplisticHero;
