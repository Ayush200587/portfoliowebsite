
/**
 * Enhanced scroll reveal animations with smooth transitions
 */

export const initScrollReveal = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        
        // Add stagger effect to child elements
        const children = entry.target.querySelectorAll('[data-stagger]');
        children.forEach((child, index) => {
          (child as HTMLElement).style.transitionDelay = `${index * 0.1}s`;
          child.classList.add('revealed');
        });
      } else {
        // Optional: Remove the class when element is out of view for re-animation
        // entry.target.classList.remove('revealed');
      }
    });
  }, { 
    threshold: 0.15,
    rootMargin: '0px 0px -10% 0px'
  });

  // Target all elements with data-scroll attribute
  const revealElements = document.querySelectorAll('[data-scroll], [data-stagger]');
  revealElements.forEach(element => {
    observer.observe(element);
  });

  return observer;
};
