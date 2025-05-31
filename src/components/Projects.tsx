
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Pixel Weather App",
      description: "A weather app with pixel art UI that displays forecasts with retro game-style graphics.",
      tags: ["React", "Node.js", "API"],
      color: "bg-pixel-blue",
      links: {
        github: "#",
        live: "#"
      }
    },
    {
      title: "8-bit Task Tracker",
      description: "A task management application with retro gaming inspired UI and sound effects.",
      tags: ["TypeScript", "React", "Firebase"],
      color: "bg-pixel-green",
      links: {
        github: "#",
        live: "#"
      }
    },
    {
      title: "Movie Recommendation System",
      description: "A movie recommendation system powered by KNN, delivering smart suggestions with a seamless and intuitive experience.",
      tags: ["Python", "Anaconda", "Machine Learning","Numpy","KNN"],
      color: "bg-pixel-purple",
      links: {
        github: "#",
        live: "#"
      }
    },
    {
      title: "Pixel E-Commerce",
      description: "An e-commerce platform with shopping cart functionality and payment processing.",
      tags: ["React", "MongoDB", "Express"],
      color: "bg-pixel-red",
      links: {
        github: "#",
        live: "#"
      }
    }
  ];

  return (
    <section id="projects" className="pixel-section">
      <div className="pixel-container">
        <div className="text-center mb-12">
          <h2 className="font-pixel text-2xl text-foreground mb-4">PROJECTS</h2>
          <div className="w-16 h-1 bg-pixel-yellow mx-auto"></div>
          <p className="font-mono text-muted-foreground mt-4">
            A collection of my recent quests and achievements
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="pixel-card hover:translate-y-[-5px] transition-transform duration-300"
            >
              <div className={`w-full h-2 ${project.color} mb-4`}></div>
              <h3 className="font-pixel text-lg text-foreground mb-4">{project.title}</h3>
              <p className="font-mono text-sm text-muted-foreground mb-6">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, i) => (
                  <span 
                    key={i} 
                    className="inline-block px-2 py-1 text-xs font-mono bg-muted text-foreground border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex justify-between">
                <a 
                  href={project.links.github} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-2 text-foreground hover:text-pixel-blue transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span className="text-xs font-mono">Code</span>
                </a>
                <a 
                  href={project.links.live} 
                  target="_blank" 
                  rel="noreferrer"
                  className="flex items-center gap-2 text-foreground hover:text-pixel-green transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span className="text-xs font-mono">Live Demo</span>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="#" 
            className="pixel-button inline-flex items-center"
          >
            <span>View All Projects</span>
            <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
