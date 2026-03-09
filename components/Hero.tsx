'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <section ref={ref} id="hero" className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20" />
      
      <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        <motion.div
          style={{ y: y1, opacity, scale }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-6xl w-full"
        >
          <h1 className="text-7xl md:text-[9rem] font-black text-white tracking-tighter leading-[0.9] mb-6 mix-blend-difference z-20 relative">
            NO MORE QUEUES.<br/>
          </h1>
          <motion.div 
             style={{ y: y2 }}
             className="relative z-10 -mt-10 md:-mt-20"
          >
             <h1 className="text-7xl md:text-[9rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-600 tracking-tighter leading-[0.9]">
               JUST SMART.
             </h1>
          </motion.div>
          <p className="text-xl md:text-3xl text-slate-300 mt-10 max-w-3xl mx-auto leading-relaxed font-light mt-12">
            Transform grocery billing with a mobile-first, hardware-light system.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
            <a href="#how-it-works" className="inline-flex justify-center items-center py-5 px-10 text-xl font-bold rounded-full text-slate-900 bg-emerald-400 hover:bg-emerald-300 transition-transform hover:scale-105 active:scale-95 interactive">
              See How It Works
            </a>
          </div>
        </motion.div>
      </div>
      
      {/* Abstract shape */}
      <motion.div 
         style={{ y: y2, rotate: useTransform(scrollYProgress, [0, 1], [0, 45]) }}
         className="absolute -bottom-1/4 -right-1/4 w-[800px] h-[800px] bg-emerald-500 rounded-full blur-3xl opacity-20 pointer-events-none" 
      />
    </section>
  );
};
