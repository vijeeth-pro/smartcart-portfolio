'use client';
import { motion } from 'framer-motion';

const FeatureCard = ({ title, bg, textColor, align }: any) => (
  <motion.div 
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    className={`p-6 rounded-2xl shadow-lg border border-slate-100 ${bg} ${align}`}
  >
    <div className={`w-12 h-12 rounded-full mb-4 flex items-center justify-center font-bold text-xl ${textColor === 'text-white' ? 'bg-white/20' : 'bg-emerald-100'} text-emerald-600`}>✓</div>
    <h4 className={`text-xl font-bold mb-2 ${textColor}`}>{title}</h4>
  </motion.div>
);

export const Features = () => {
  return (
    <section id="features" className="py-32 bg-slate-50 relative">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-emerald-500 font-bold tracking-wider uppercase mb-3">Features</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-[#1A1A2E]">Designed for Everyone</h3>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Customers */}
          <div>
            <div className="bg-[#1A1A2E] text-white p-8 rounded-[2rem] shadow-2xl relative overflow-hidden h-full">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
              </div>
              <h3 className="text-3xl font-bold mb-8 text-emerald-400">For Customers</h3>
              <div className="space-y-4">
                <FeatureCard title="No Long Queue" bg="bg-white/10 backdrop-blur-sm" textColor="text-white" />
                <FeatureCard title="Real-Time Price Visibility" bg="bg-white/10 backdrop-blur-sm" textColor="text-white" />
                <FeatureCard title="Budget Control While Shopping" bg="bg-white/10 backdrop-blur-sm" textColor="text-white" />
                <FeatureCard title="Instant Digital Receipt" bg="bg-white/10 backdrop-blur-sm" textColor="text-white" />
              </div>
            </div>
          </div>
          
          {/* Store Owners */}
          <div>
            <div className="bg-emerald-500 text-white p-8 rounded-[2rem] shadow-2xl relative overflow-hidden h-full">
              <div className="absolute top-0 right-0 p-8 opacity-20 text-[#1A1A2E]">
                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
              </div>
              <h3 className="text-3xl font-bold mb-8 text-[#1A1A2E]">For Store Owners</h3>
              <div className="space-y-4">
                <FeatureCard title="Reduced Staff Cost" bg="bg-[#1A1A2E]/10 backdrop-blur-sm border-none shadow-none" textColor="text-white" />
                <FeatureCard title="Real-Time Inventory Tracking" bg="bg-[#1A1A2E]/10 backdrop-blur-sm border-none shadow-none" textColor="text-white" />
                <FeatureCard title="Fewer Billing Errors" bg="bg-[#1A1A2E]/10 backdrop-blur-sm border-none shadow-none" textColor="text-white" />
                <FeatureCard title="Sales Data & Analytics" bg="bg-[#1A1A2E]/10 backdrop-blur-sm border-none shadow-none" textColor="text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
