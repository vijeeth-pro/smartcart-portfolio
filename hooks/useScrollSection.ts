import { useState, useEffect } from 'react';

export function useScrollSection(sectionIds: string[], threshold: number = 0.5) {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const observers = sectionIds.map((id) => {
      const el = document.getElementById(id);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { threshold }
      );
      observer.observe(el);
      return { id, observer, el };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) obs.observer.unobserve(obs.el);
      });
    };
  }, [sectionIds, threshold]);

  return activeSection;
}
