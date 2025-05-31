
import React from 'react';
import { Download } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'EXP', value: 5, max: 10, color: 'bg-pixel-blue' },
    { label: 'STR', value: 7, max: 10, color: 'bg-pixel-blue-accent' },
    { label: 'INT', value: 9, max: 10, color: 'bg-pixel-teal' },
    { label: 'DEX', value: 8, max: 10, color: 'bg-pixel-green' },
  ];

  const handleDownloadResume = () => {
    const resumeUrl = '/resume.pdf';
    window.open(resumeUrl, '_blank');
  };

  return (
    <section id="about" className="pixel-section bg-muted/20 pixel-hover-section group">
      <div className="pixel-container">
        <div className="text-center mb-12" data-scroll>
          <h2 className="font-pixel text-2xl text-foreground mb-4">ABOUT ME</h2>
          <div className="w-16 h-1 bg-pixel-teal mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="pixel-card pixel-glow-animate" data-scroll>
            <div className="flex items-start space-x-4">
              <div className="flex-none w-16 h-16 bg-pixel-blue border-4 border-pixel-teal flex items-center justify-center">
                <div className="font-pixel text-white text-2xl">JS</div>
              </div>
              
              <div className="space-y-2">
                <h3 className="font-pixel text-lg text-foreground">PLAYER STATS</h3>
                <div className="text-xs font-mono text-muted-foreground">Character Level: 30</div>
                
                <div className="space-y-4 mt-4">
                  {stats.map((stat) => (
                    <div key={stat.label} className="space-y-1">
                      <div className="flex justify-between">
                        <span className="font-pixel text-xs text-foreground">{stat.label}</span>
                        <span className="font-pixel text-xs text-foreground">{stat.value}/{stat.max}</span>
                      </div>
                      <div className="pixel-progress">
                        <div 
                          className={`pixel-progress-bar ${stat.color}`}
                          style={{ width: `${(stat.value / stat.max) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6" data-scroll>
            <div className="pixel-terminal h-auto w-full max-h-[250px] overflow-y-auto border-2 border-pixel-teal p-0 mb-4">
              <p className="pixel-terminal-text text-sm font-mono leading-relaxed p-5 break-words whitespace-pre-line overflow-x-auto">
                <span className="text-pixel-yellow">$</span> cat about.txt<br />
                <br />
                <span className="text-pixel-teal">I'm a passionate front-end developer eager to build engaging web applications.</span><br /><br />
                <span className="text-pixel-teal">I specialize in React.js, JavaScript, and TypeScript, constantly honing my skills to craft seamless user experiences.</span><br /><br />
                <span className="text-pixel-teal">When not coding, I'm leveling up my skills in game development and pixel art.</span>
              </p>
            </div>
            
            <div className="font-mono text-sm text-muted-foreground space-y-4 px-1">
              <p className="break-words">
                My quest is to create clean, efficient code and build applications that solve real-world problems.
              </p>
              <p className="break-words">
                I'm currently on a mission to master cloud architecture and improve my system design skills.
              </p>
            </div>

            <button
              onClick={handleDownloadResume}
              className="pixel-button w-full sm:w-auto flex items-center justify-center gap-2 hover:animate-pulse transition-all duration-300 mt-6 group-hover:pixel-button-animated"
              data-scroll
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
