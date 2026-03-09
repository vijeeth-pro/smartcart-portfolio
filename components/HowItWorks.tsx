'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  { step: '01', title: 'Pick up a Smart Cart', desc: 'Grab a cart at the store entrance like usual.' },
  { step: '02', title: 'Scan Barcode', desc: 'Scan the cart barcode using the SmartCart app to link.' },
  { step: '03', title: 'Scan Items & Bag', desc: 'Scan item barcodes before dropping them in the cart.' },
  { step: '04', title: 'Live Bill Update', desc: 'Watch your total update in real-time as you shop.' },
  { step: '05', title: 'Digital Payment', desc: 'Pay on your phone via UPI, card, or wallet.' },
  { step: '06', title: 'Walk Out', desc: 'Exit seamlessly. Zero queue checkout completed in under 2 minutes.' },
];

export const HowItWorks = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const letterSpacing = useTransform(scrollYProgress, [0, 1], ["0px", "20px"]);

  return (
    <section ref={ref} id="how-it-works" className="py-40 bg-zinc-50 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-32">
          <motion.h2 
            style={{ letterSpacing }} 
            className="text-emerald-500 font-black uppercase mb-4 text-2xl tracking-widest"
          >
            How It Works
          </motion.h2>
          <h3 className="text-6xl md:text-8xl font-black text-[#1A1A2E] tracking-tighter mix-blend-difference">SCROLL TO SHOP</h3>
        </div>
        
        <div className="relative">
          <motion.div 
             style={{ scaleY: scrollYProgress, transformOrigin: 'top' }}
             className="block absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 h-full w-2 bg-emerald-500 rounded-full z-0"
          ></motion.div>
          
          <div className="space-y-20 relative z-10 pl-16 md:pl-0">
            {steps.map((item, idx) => (
              <div key={idx} className={`flex flex-col md:flex-row items-center group ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="hidden md:block w-full md:w-1/2"></div>
                
                <motion.div 
                   whileHover={{ scale: 1.2, rotate: 10 }}
                   className="w-20 h-20 rounded-full bg-slate-900 text-emerald-400 font-black text-3xl flex items-center justify-center shrink-0 border-8 border-zinc-50 shadow-2xl z-10 absolute left-4 md:relative md:left-auto md:my-0 transition-all cursor-crosshair interactive"
                >
                  {item.step}
                </motion.div>
                
                <motion.div 
                  initial={{ opacity: 0, x: idx % 2 === 0 ? 100 : -100, y: 50 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ type: "spring", stiffness: 50, damping: 20 }}
                  className={`w-full md:w-1/2 ${idx % 2 === 0 ? 'md:pr-20 text-left md:text-right' : 'md:pl-20 text-left'}`}
                >
                  <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-zinc-200 hover:shadow-2xl hover:border-emerald-300 transition-all hover:-translate-y-2 group">
                    <h4 className="text-3xl font-black text-slate-900 mb-4 group-hover:text-emerald-500 transition-colors">{item.title}</h4>
                    <p className="text-xl text-slate-600 font-medium">{item.desc}</p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
