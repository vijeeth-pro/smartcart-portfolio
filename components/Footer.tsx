'use client';

export const Footer = () => {
  return (
    <footer className="bg-[#1A1A2E] text-slate-400 py-12 border-t border-slate-800">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-6">
        <div>
          <a href="#" className="text-2xl font-bold text-white mb-2 block">
            Smart<span className="text-emerald-500">Cart</span> Co.
          </a>
          <p className="text-sm">No More Queues. Just Smart Shopping.</p>
        </div>
        
        <div className="flex space-x-6 text-sm">
          <a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-emerald-400 transition-colors">Contact</a>
        </div>
        
        <div className="text-sm">
          &copy; {new Date().getFullYear()} SmartCart Co. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
