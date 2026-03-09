'use client';
import { motion } from 'framer-motion';
import { ShieldSVG } from './svg/ShieldSVG';

export const Security = () => {
  return (
    <section id="security" className="py-32 bg-white relative">
      <div className="container mx-auto px-6 max-w-6xl text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="bg-slate-50 border border-slate-200 rounded-3xl p-12 shadow-xl inline-block max-w-4xl w-full"
        >
          <div className="flex justify-center mb-6">
            <ShieldSVG className="w-24 h-24" />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#1A1A2E] mb-6">Two-Layer Security System</h2>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto">
            Zero queues doesn't mean zero security. SmartCart implements state-of-the-art verification at exit.
          </p>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
               <h3 className="text-xl font-bold text-emerald-500 mb-3">1. EAS Tag Verification</h3>
               <p className="text-slate-600">Smart sensors at the exit gates communicate with the cart and app to ensure all items in the basket were scanned and billed before disabling EAS tags.</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
               <h3 className="text-xl font-bold text-emerald-500 mb-3">2. Digital Exit Verification</h3>
               <p className="text-slate-600">A digital receipt QR code is scanned by automated turnstiles or store personnel, cross-referencing cart weight and contents instantly.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
