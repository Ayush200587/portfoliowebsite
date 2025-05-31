import React, { useState, useEffect } from 'react';
import { 
  Home, 
  User, 
  Briefcase, 
  Terminal, 
  Mail,
  Github,
  Linkedin,
  Menu
} from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const menuItems = [
    { id: 'home', icon: Home, label: 'Home', href: '#home' },
    { id: 'about', icon: User, label: 'About', href: '#about' },
    { id: 'projects', icon: Briefcase, label: 'Projects', href: '#projects' },
    { id: 'skills', icon: Terminal, label: 'Skills', href: '#skills' },
    { id: 'contact', icon: Mail, label: 'Contact', href: '#contact' },
  ];

  if (isMobile) {
    return (
      <>
        <button 
          onClick={toggleMenu} 
          className="fixed top-4 left-4 z-50 bg-background/80 backdrop-blur-sm p-2 border border-border rounded-md"
          aria-label="Toggle navigation"
        >
          <Menu size={20} />
        </button>
        
        <aside className={`fixed inset-y-0 left-0 w-60 bg-background/95 backdrop-blur-md border-r border-r-border z-40 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out flex flex-col items-center py-16`}>
          <div className="font-pixel text-sm text-center mb-8">
            <span className="text-pixel-green">By</span>
            <span className="text-pixel-yellow">AK</span>
          </div>
          
          <nav className="flex-1 w-full">
            <ul className="flex flex-col gap-2 items-start px-3 w-full">
              {menuItems.map((item) => (
                <li key={item.id} className="w-full">
                  <a 
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 w-full ${activeSection === item.id ? 'bg-card text-pixel-blue font-semibold border-l-4 border-l-pixel-blue' : 'text-foreground'}`}
                  >
                    <item.icon size={18} />
                    <span className="font-pixel text-xs">
                      {item.label}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          
          <div className="mt-6 flex gap-6">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noreferrer"
              className="text-foreground hover:text-pixel-blue transition-colors"
            >
              <Github size={18} />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noreferrer"
              className="text-foreground hover:text-pixel-blue transition-colors"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </aside>
      </>
    );
  }

  return (
    <aside className="fixed left-0 top-0 h-full w-16 md:w-20 bg-card/80 backdrop-blur-sm border-r border-r-border z-50 flex flex-col items-center py-6">
      <div className="font-pixel text-sm text-center mb-8">
        <span className="text-pixel-green">By</span>
        <span className="text-pixel-yellow">AK</span>
      </div>
      
      <nav className="flex-1">
        <ul className="flex flex-col gap-6 items-center">
          {menuItems.map((item) => (
            <li key={item.id} className="relative">
              <a 
                href={item.href}
                className={`group flex flex-col items-center gap-1 text-center ${activeSection === item.id ? 'text-pixel-blue' : 'text-foreground'}`}
              >
                <div className={`w-10 h-10 flex items-center justify-center border-2 transition-colors ${activeSection === item.id ? 'border-pixel-blue bg-card shadow-md' : 'border-border hover:border-pixel-blue/50'}`}>
                  <item.icon size={18} />
                </div>
                <span className="font-pixel text-[8px] opacity-70 group-hover:opacity-100 transition-opacity">
                  {item.label}
                </span>
                {activeSection === item.id && (
                  <span className="absolute right-0 w-1 h-6 bg-pixel-blue"></span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      
      <div className="mt-6 flex flex-col gap-4">
        <a 
          href="https://github.com" 
          target="_blank" 
          rel="noreferrer"
          className="text-foreground hover:text-pixel-blue transition-colors"
        >
          <Github size={18} />
        </a>
        <a 
          href="https://linkedin.com" 
          target="_blank" 
          rel="noreferrer"
          className="text-foreground hover:text-pixel-blue transition-colors"
        >
          <Linkedin size={18} />
        </a>
      </div>
      
      <div className="mt-6">
        <div className="pixel-terminal-cursor"></div>
      </div>
    </aside>
  );
};

export default Sidebar;
