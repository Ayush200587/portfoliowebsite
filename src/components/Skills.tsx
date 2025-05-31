
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "React", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "HTML/CSS", level: 90 },
        { name: "Next.js", level: 75 }
      ],
      color: "bg-pixel-blue"
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express", level: 80 },
        { name: "Python", level: 70 },
        { name: "MongoDB", level: 75 },
        { name: "SQL", level: 70 }
      ],
      color: "bg-pixel-green"
    },
    {
      title: "Tools",
      skills: [
        { name: "Git", level: 85 },
        { name: "Docker", level: 70 },
        { name: "AWS", level: 65 },
        { name: "CI/CD", level: 75 },
        { name: "Jest", level: 80 }
      ],
      color: "bg-pixel-purple"
    }
  ];

  return (
    <section id="skills" className="pixel-section bg-muted/20">
      <div className="pixel-container">
        <div className="text-center mb-12">
          <h2 className="font-pixel text-2xl text-foreground mb-4">SKILLS</h2>
          <div className="w-16 h-1 bg-pixel-red mx-auto"></div>
          <p className="font-mono text-muted-foreground mt-4">
            Character attributes and abilities
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="pixel-card">
              <h3 className="font-pixel text-lg text-foreground mb-6 pb-2 border-b-2 border-b-border">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-mono text-sm text-foreground">{skill.name}</span>
                      <span className="font-pixel text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="pixel-progress">
                      <div 
                        className={`pixel-progress-bar ${category.color}`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {["Problem Solving", "Team Collaboration", "Clean Code", "UI/UX Design"].map((item, i) => (
            <div key={i} className="p-4 border-4 border-border text-center bg-card">
              <div className="font-pixel text-sm text-foreground mb-2">{item}</div>
              <div className="font-mono text-xs text-muted-foreground">
                <span className="text-pixel-yellow">★★★★</span>★
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
