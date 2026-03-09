'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export const Solution = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [-20, 20]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section ref={ref} id="solution" className="py-40 bg-emerald-500 relative overflow-hidden">
      {/* Decorative large text */}
      <motion.div style={{ y }} className="absolute -left-10 md:left-20 top-10 pointer-events-none opacity-20">
         <span className="text-[10rem] md:text-[15rem] font-black text-emerald-900 leading-none">THINK</span>
      </motion.div>
      <motion.div style={{ y: useTransform(scrollYProgress, [0, 1], [-100, 100]) }} className="absolute -right-10 md:right-20 bottom-10 pointer-events-none opacity-20 text-right">
         <span className="text-[10rem] md:text-[15rem] font-black text-emerald-900 leading-none">FASTER</span>
      </motion.div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", damping: 20 }}
            className="w-full lg:w-1/2"
          >
            <h2 className="text-emerald-900 font-black tracking-widest uppercase mb-4 text-xl">The Solution</h2>
            <h3 className="text-5xl md:text-7xl font-black text-white leading-[0.9] mb-8 mix-blend-overlay">SKIP THE LINE WITH SMARTCART</h3>
            <p className="text-2xl text-emerald-900 font-bold mb-10 leading-snug">
              We upgrade your existing store carts into smart carts with a high-tech scanner module. Customers scan and bag as they shop, pay via their phone, and walk right out.
            </p>
            <ul className="space-y-6">
              {['Seamless POS integration', 'No expensive hardware gates', 'Built-in security weight checking'].map((item, i) => (
                <li key={i} className="flex items-center text-white font-bold text-xl">
                  <div className="bg-emerald-900 p-2 rounded-full text-emerald-400 mr-6">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
          <div className="w-full lg:w-1/2 flex justify-center mt-20 lg:mt-0">
            <motion.div 
              style={{ rotate, scale }}
              className="relative w-80 h-80 md:w-[500px] md:h-[500px] bg-emerald-900 rounded-[3rem] rotate-12 flex items-center justify-center p-12 shadow-2xl shadow-emerald-900/50 interactive group"
            >
               <motion.svg 
                 whileHover={{ scale: 1.1, rotate: -12 }}
                 className="transition-transform duration-500 ease-out absolute" 
                 width="60%" height="60%" viewBox="0 0 24 24" fill="none" stroke="#34D399" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
               >
                 <circle cx="9" cy="21" r="2"></circle>
                 <circle cx="20" cy="21" r="2"></circle>
                 <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
               </motion.svg>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
