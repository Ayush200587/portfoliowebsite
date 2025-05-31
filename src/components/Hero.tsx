
import React from 'react';
import { Github, Mail, Linkedin, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden px-4 sm:px-6 pixel-hover-section group floating-particles">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjMGYxNzJhIiBvcGFjaXR5PSIwLjAzIiAvPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMxZTI5M2IiIHg9IjgiIHk9IjgiIC8+PHJlY3Qgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0iIzFlMjkzYiIgeD0iMjQiIHk9IjgiIC8+PHJlY3Qgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0iIzFlMjkzYiIgeD0iOCIgeT0iMjQiIC8+PHJlY3Qgd2lkdGg9IjEiIGhlaWdodD0iMSIgZmlsbD0iIzFlMjkzYiIgeD0iMjQiIHk9IjI0IiAvPjwvc3ZnPg==')] opacity-20 dark:opacity-10"></div>
      
      {/* New floating decoration elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-pixel-teal opacity-30 animate-pixel-float"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-pixel-blue opacity-40 animate-pixel-float" style={{animationDelay: '0.5s'}}></div>
      <div className="absolute bottom-40 left-20 w-2 h-2 bg-pixel-yellow opacity-50 animate-pixel-float" style={{animationDelay: '1s'}}></div>
      
      <div className="w-full max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6 py-8 pixel-decoration" data-scroll>
            <div className="inline-block pixel-terminal p-2 sm:p-3 mb-4 shadow-lg">
              <p className="pixel-terminal-text text-xs sm:text-sm">
                <span className="text-pixel-yellow">$</span> Hey There!<br />
                <span className="text-pixel-green ml-2 holographic-text">Frontend-Developer</span>
                <Sparkles className="inline w-3 h-3 ml-1 text-pixel-teal animate-pulse" />
              </p>
            </div>
            
            <h1 className="hero-title font-bold text-center !text-4xl sm:!text-5xl !mb-4">
              <span className="glitch-text" data-text="Software Engineer Portfolio:">
                Software Engineer Portfolio:
              </span>
              <br />
              <span className="text-pixel-teal animate-pulse holographic-text">By Ayush Kumar</span>
            </h1>
            
            <p className="font-pixel text-center text-lg md:text-xl text-pixel-blue/90 animate-fade-in group-hover:animate-pulse">
              Turning coffee into clean code ☕→💻
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4 justify-center">
              <a href="#projects" className="pixel-button group-hover:pixel-button-animated">
                <Sparkles className="inline w-4 h-4 mr-2" />
                View Projects
              </a>
              
              <a href="#contact" className="px-4 py-2 font-pixel text-sm border-2 border-muted hover:border-pixel-teal text-foreground hover:bg-foreground/5 transition-colors pixel-border">
                Contact Me
              </a>
            </div>
            
            <div className="flex space-x-4 pt-6 md:hidden justify-center">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="text-foreground hover:text-pixel-blue transition-colors p-2 rounded-full hover:bg-pixel-teal/10">
                <Github className="w-6 h-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-foreground hover:text-pixel-blue transition-colors p-2 rounded-full hover:bg-pixel-teal/10">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:hello@example.com" className="text-foreground hover:text-pixel-blue transition-colors p-2 rounded-full hover:bg-pixel-teal/10">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div className="hidden md:block transform hover:scale-105 transition-transform duration-300 group-hover:scale-110 group-hover:border-pixel-teal group-hover:shadow-pixel-glow pixel-decoration" data-scroll>
            <div className="max-w-md mx-auto animate-pixel-float">
              <div className="aspect-square bg-[url('/lovable-uploads/f58b9f65-af94-4940-936c-93bea9b1cfc1.png')] bg-center bg-contain bg-no-repeat border-4 border-pixel-teal relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-pixel-teal/10 to-pixel-blue/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="text-center mt-4 font-pixel text-xs text-pixel-teal holographic-text">
                web_developer.exe
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="font-pixel text-xs text-foreground hover:text-pixel-teal transition-colors">
          SCROLL DOWN
        </div>
        <div className="w-0 h-0 mx-auto mt-2 border-l-[8px] border-l-transparent border-t-[8px] border-t-foreground border-r-[8px] border-r-transparent"></div>
      </div>
    </section>
  );
};

export default Hero;
