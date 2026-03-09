'use client';

export const Feasibility = () => {
  return (
    <section id="feasibility" className="py-32 bg-slate-50">
      <div className="container mx-auto px-6 max-w-5xl">
         <div className="text-center mb-16">
          <h2 className="text-emerald-500 font-bold tracking-wider uppercase mb-3">Feasibility</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-[#1A1A2E]">Will it work for my store?</h3>
        </div>
        
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
           <div className="overflow-x-auto">
             <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#1A1A2E] text-white">
                    <th className="p-6 font-semibold text-lg">Store Size</th>
                    <th className="p-6 font-semibold text-lg">Daily Footfall</th>
                    <th className="p-6 font-semibold text-lg">Recommended Carts</th>
                    <th className="p-6 font-semibold text-lg">ROI Frame</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-emerald-50 transition-colors">
                    <td className="p-6 text-slate-700 font-medium">Small ({"<"} 2,000 sq ft)</td>
                    <td className="p-6 text-slate-600">100 - 500</td>
                    <td className="p-6 text-emerald-600 font-bold">10 - 20</td>
                    <td className="p-6 text-slate-600">3 - 4 Months</td>
                  </tr>
                  <tr className="hover:bg-emerald-50 transition-colors">
                    <td className="p-6 text-slate-700 font-medium">Medium (2k - 10k sq ft)</td>
                    <td className="p-6 text-slate-600">500 - 2,000</td>
                    <td className="p-6 text-emerald-600 font-bold">30 - 80</td>
                    <td className="p-6 text-slate-600">4 - 6 Months</td>
                  </tr>
                  <tr className="hover:bg-emerald-50 transition-colors">
                    <td className="p-6 text-slate-700 font-medium">Large (10k+ sq ft)</td>
                    <td className="p-6 text-slate-600">2,000+</td>
                    <td className="p-6 text-emerald-600 font-bold">150+</td>
                    <td className="p-6 text-slate-600">6 - 8 Months</td>
                  </tr>
                </tbody>
             </table>
           </div>
        </div>
      </div>
    </section>
  );
};
