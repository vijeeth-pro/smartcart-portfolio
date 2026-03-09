'use client';
import { useState } from 'react';

export const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-32 bg-emerald-500 relative">
      <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
         <h2 className="text-4xl md:text-6xl font-black text-white mb-8">Ready to clear the queue?</h2>
         <p className="text-xl text-emerald-50 mb-12 max-w-2xl mx-auto">
            Upgrade your grocery store with SmartCart Co. today. Get a free demo and consultation tailored to your store size.
         </p>
         
         <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-[2rem] shadow-2xl space-y-6 max-w-2xl mx-auto text-left">
           <div className="grid md:grid-cols-2 gap-6">
             <div>
               <label className="block text-sm font-semibold text-slate-700 mb-2">Name</label>
               <input type="text" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all" placeholder="John Doe" required />
             </div>
             <div>
               <label className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
               <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all" placeholder="john@grocery.com" required />
             </div>
           </div>
           <div>
               <label className="block text-sm font-semibold text-slate-700 mb-2">Store Size</label>
               <select className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all bg-white" required>
                 <option value="0" disabled selected>Select size...</option>
                 <option value="small">Small (&lt; 2,000 sq ft)</option>
                 <option value="medium">Medium (2k - 10k sq ft)</option>
                 <option value="large">Large (10k+ sq ft)</option>
               </select>
           </div>
           <button type="submit" className="w-full py-4 bg-[#1A1A2E] hover:bg-[#121221] text-white rounded-xl font-bold text-lg transition-all transform hover:scale-[1.02] shadow-xl shadow-slate-900/20">
             {submitted ? "Message Sent!" : "Get a Demo"}
           </button>
         </form>
      </div>
    </section>
  );
};
