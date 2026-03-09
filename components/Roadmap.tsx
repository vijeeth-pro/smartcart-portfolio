'use client';

const roadmapData = [
  { phase: '1', title: 'Prototype Development', desc: 'Hardware & Mobile App Beta', status: 'completed' },
  { phase: '2', title: 'First Store Pilot', desc: 'Testing in a 5,000 sq ft location', status: 'current' },
  { phase: '3', title: 'Software Ecosystem', desc: 'Advanced analytics for owners', status: 'upcoming' },
  { phase: '4', title: 'Nationwide Expansion', desc: 'Partnering with Top 10 chains', status: 'upcoming' },
];

export const Roadmap = () => {
  return (
    <section id="roadmap" className="py-32 bg-[#1A1A2E] text-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-emerald-400 font-bold tracking-wider uppercase mb-3">Our Journey</h2>
          <h3 className="text-4xl md:text-5xl font-bold">Roadmap to the Future</h3>
        </div>
        
        <div className="space-y-8 relative">
          <div className="absolute left-6 md:left-12 top-0 bottom-0 w-1 bg-white/10 rounded-full"></div>
          {roadmapData.map((step, idx) => (
            <div key={idx} className="flex items-center relative z-10 pl-6 md:pl-0">
               <div className={`w-12 h-12 rounded-full absolute left-0 md:left-6 -ml-6 border-4 border-[#1A1A2E] shadow-xl flex items-center justify-center font-bold
                 ${step.status === 'completed' ? 'bg-emerald-500 text-white' : step.status === 'current' ? 'bg-emerald-400 text-[#1A1A2E]' : 'bg-slate-700 text-slate-400'}`}>
                 {step.phase}
               </div>
               <div className={`ml-8 md:ml-24 p-6 rounded-2xl w-full border ${step.status === 'current' ? 'border-emerald-500 bg-white/10' : 'border-white/10 bg-white/5'}`}>
                 <h4 className={`text-2xl font-bold mb-2 ${step.status === 'upcoming' ? 'text-slate-300' : 'text-white'}`}>{step.title}</h4>
                 <p className={`${step.status === 'upcoming' ? 'text-slate-400' : 'text-slate-300'}`}>{step.desc}</p>
                 {step.status === 'current' && <span className="inline-block mt-3 bg-emerald-500 text-xs font-bold px-3 py-1 rounded-full">CURRENT PHASE</span>}
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
