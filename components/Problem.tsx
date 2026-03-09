'use client';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const StatCard = ({ value, label, prefix = "", suffix = "", duration = 2 }: any) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(value, 10);
      if (start === end) return;
      
      const totalMilSecDur = parseInt(duration) * 1000;
      const incrementTime = (totalMilSecDur / end);
      
      let timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);
      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return (
    <motion.div 
      ref={ref} 
      className="bg-slate-900 border-2 border-emerald-500/20 p-10 rounded-3xl flex flex-col items-start justify-between min-h-[300px] hover:border-emerald-500 hover:bg-slate-800 transition-all group"
      whileHover={{ y: -10 }}
    >
      <div className="text-7xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-br from-emerald-300 to-emerald-600 mb-6 group-hover:scale-105 transition-transform origin-left">
        {prefix}{count}{suffix}
      </div>
      <p className="text-xl md:text-2xl text-slate-300 font-medium leading-snug">{label}</p>
    </motion.div>
  );
};

export const Problem = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const xTransform = useTransform(scrollYProgress, [0, 1], [0, -1000]);

  return (
    <section ref={ref} id="problem" className="py-32 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-20 left-0 whitespace-nowrap opacity-5 pointer-events-none">
         <motion.h2 style={{ x: xTransform }} className="text-[12rem] md:text-[20rem] font-black text-white leading-none mix-blend-overlay">
           WAITING IN LINE LOSES MONEY
         </motion.h2>
      </div>
      
      <div className="container mx-auto px-6 max-w-6xl relative z-10 pt-40 pb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h3 className="text-5xl md:text-7xl font-bold text-white mb-6 uppercase tracking-tighter mix-blend-difference">Queues are killing<br/>your business.</h3>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StatCard value="8" suffix="+" label="Avg minutes spent waiting in billing line" />
          <StatCard value="63" suffix="%" label="Of customers frustrated by checkout queues" />
          <StatCard value="2" suffix="x" label="More likely to lose shoppers to rivals" />
        </div>
      </div>
    </section>
  );
};
