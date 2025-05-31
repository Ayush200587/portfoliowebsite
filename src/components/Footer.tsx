
import React from 'react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <footer className="bg-card py-8 border-t border-t-border pixel-hover-section group">
      <div className="pixel-container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-pixel text-foreground text-lg mb-4 md:mb-0">
            <span className="text-pixel-green">By</span>
            <span className="text-pixel-blue">AK</span>
          </div>
          
          <div className="font-mono text-sm text-muted-foreground">
            © {new Date().getFullYear()} | Crafted with code, caffeine, and a passion.
            {" "}|{" "}
            <a
              href="https://ak2002.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="font-pixel text-pixel-teal underline hover:text-pixel-blue"
            >
              ak2002.tech
            </a>
          </div>
          
          <div className="mt-4 md:mt-0">
            <button 
              onClick={scrollToTop} 
              className="font-pixel text-xs text-foreground hover:text-pixel-teal hover:underline transition-colors"
            >
              [BACK TO TOP]
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
