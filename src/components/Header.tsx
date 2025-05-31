import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

// This component is no longer used as we've replaced it with the Sidebar
// Keeping it for reference but it's not rendered in the app anymore
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [terminalText, setTerminalText] = useState('');
  const fullText = '> Welcome to my portfolio...';
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setTerminalText(fullText.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);
    
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300 py-3 px-4",
      isScrolled ? "bg-background/90 backdrop-blur" : "bg-transparent"
    )}>
      <div className="pixel-container flex justify-between items-center">
        <div className="font-pixel text-foreground text-lg">
          <span className="text-pixel-blue">bit</span>
          <span className="text-pixel-green">By</span>
          <span className="text-pixel-yellow">Bit</span>
        </div>
        
        <div className="hidden md:flex space-x-6">
          {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="font-pixel text-xs text-foreground hover:text-pixel-green transition-colors"
            >
              {item}
            </a>
          ))}
        </div>
        
        <div className="md:hidden">
          <div className="font-mono text-xs text-pixel-green">
            {terminalText}
            <span className="pixel-terminal-cursor"></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
