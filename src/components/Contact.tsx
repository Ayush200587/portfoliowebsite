import React, { useState } from 'react';
import { Send, Github, Mail, Linkedin } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Form validation
    if (!name || !email || !message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Simulating form submission with timeout
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out!",
        variant: "default",
      });
      
      // Reset form
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="pixel-section relative overflow-hidden bg-card dark:bg-[#0f172a]">
      <div className="pixel-container">
        <div className="text-center mb-12" data-scroll>
          <h2 className="font-pixel text-2xl text-foreground mb-4">CONTACT</h2>
          <div className="w-16 h-1 bg-pixel-blue mx-auto"></div>
          <p className="font-mono text-muted-foreground mt-4">
            Let's connect and start a new quest together
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          <div className="pixel-card border-2 border-pixel-blue" data-scroll>
            <h3 className="font-pixel text-lg text-foreground mb-6">SEND A MESSAGE</h3>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="block font-mono text-sm text-foreground">Name</label>
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-background border-2 border-input p-3 font-mono text-foreground focus:outline-none focus:border-pixel-blue focus:ring-1 focus:ring-pixel-blue" 
                  placeholder="Your name"
                />
              </div>
              
              <div className="space-y-2">
                <label className="block font-mono text-sm text-foreground">Email</label>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-background border-2 border-input p-3 font-mono text-foreground focus:outline-none focus:border-pixel-blue focus:ring-1 focus:ring-pixel-blue" 
                  placeholder="your@email.com"
                />
              </div>
              
              <div className="space-y-2">
                <label className="block font-mono text-sm text-foreground">Message</label>
                <textarea 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-background border-2 border-input p-3 font-mono text-foreground min-h-[120px] focus:outline-none focus:border-pixel-blue focus:ring-1 focus:ring-pixel-blue" 
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`pixel-button w-full flex justify-center items-center gap-2 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:animate-pulse'}`}
              >
                {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                <Send size={16} className={isSubmitting ? 'animate-pulse' : ''} />
              </button>
            </form>
          </div>
          
          <div className="space-y-6" data-scroll>
            <div className="terminal-window pixel-terminal h-auto">
              <div className="terminal-header flex items-center justify-between border-b-2 border-pixel-green mb-4 pb-2">
                <span className="text-xs text-pixel-green font-mono">terminal</span>
                <div className="flex gap-1">
                  <span className="w-2 h-2 inline-block bg-pixel-red rounded-full"></span>
                  <span className="w-2 h-2 inline-block bg-pixel-yellow rounded-full"></span>
                  <span className="w-2 h-2 inline-block bg-pixel-green rounded-full"></span>
                </div>
              </div>
              <div className="terminal-content font-mono text-sm space-y-2">
                <p className="text-pixel-green">$ contact --info</p>
                <p className="text-pixel-green">Name: Ayush Kumar</p>
                <p className="text-pixel-green">Role: Front-end Engineer</p>
                <p className="text-pixel-green">Email: ayush200587@gmail.com</p>
                <p className="text-pixel-green">Location: Delhi, India</p>
                <p className="text-pixel-green mt-4">Status: Available for new opportunities</p>
              </div>
            </div>
            
            <div className="pixel-card border-2 border-pixel-purple mt-6 space-y-4">
              <h3 className="font-pixel text-lg text-foreground mb-6">CONNECT WITH ME</h3>
              
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noreferrer"
                className="connect-link"
              >
                <Github className="w-6 h-6 text-foreground" />
                <span className="font-mono text-sm text-foreground">GitHub</span>
              </a>
              
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noreferrer"
                className="connect-link"
              >
                <Linkedin className="w-6 h-6 text-foreground" />
                <span className="font-mono text-sm text-foreground">LinkedIn</span>
              </a>
              
              <a 
                href="mailto:ayush200587@gmail.com" 
                className="connect-link"
              >
                <Mail className="w-6 h-6 text-foreground" />
                <span className="font-mono text-sm text-foreground">Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
