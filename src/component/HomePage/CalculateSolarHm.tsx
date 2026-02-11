
import { useState, useMemo, type JSX } from "react";

const SolarCalculator = (): JSX.Element => {
  const [bill, setBill] = useState<number>(5000);
  const [roofArea, setRoofArea] = useState<number>(1000);

  // Constants (Adjusted for India 2024-2025 Market)
  const COST_PER_KW = 60000; 
  const UNITS_PER_KW_MONTHLY = 120;
  const AVG_TARIFF = 8; // Avg ₹ per unit

  const results = useMemo(() => {
    const requiredByEnergy = bill / AVG_TARIFF / UNITS_PER_KW_MONTHLY;
    const maxByRoof = roofArea / 100; // 1kW needs ~100 sqft
    const recommendedKW = Math.min(requiredByEnergy, maxByRoof);
    
    const monthlySavings = recommendedKW * UNITS_PER_KW_MONTHLY * AVG_TARIFF;
    const systemCost = recommendedKW * COST_PER_KW;
    const treesEquivalent = Math.floor(recommendedKW * 45); // Approx 45 trees per kW life

    return {
      kw: recommendedKW.toFixed(1),
      monthly: Math.round(monthlySavings).toLocaleString("en-IN"),
      yearly: Math.round(monthlySavings * 12).toLocaleString("en-IN"),
      cost: Math.round(systemCost).toLocaleString("en-IN"),
      payback: (systemCost / (monthlySavings * 12)).toFixed(1),
      trees: treesEquivalent,
    };
  }, [bill, roofArea]);

  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[#1854a1] font-bold tracking-widest uppercase text-sm">ROI Estimator</span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-slate-900 mt-3">
            Switch to Sun, <span className="text-[#1854a1]">Save for Life.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* INPUT CARD */}
          <div className="lg:col-span-5 bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
            <h3 className="text-xl font-bold mb-8 text-slate-800">Your Consumption</h3>
            
            <div className="space-y-10">
              {/* Bill Slider */}
              <div className="space-y-4">
                <div className="flex justify-between">
                  <label className="text-slate-600 font-medium">Monthly Bill</label>
                  <span className="text-[#1854a1] font-bold text-lg">₹{bill.toLocaleString()}</span>
                </div>
                <input 
                  type="range" min="1000" max="50000" step="500"
                  value={bill}
                  onChange={(e) => setBill(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#f6b643]"
                />
              </div>

              {/* Roof Area Slider */}
              <div className="space-y-4">
                <div className="flex justify-between">
                  <label className="text-slate-600 font-medium">Available Roof Area</label>
                  <span className="text-[#1854a1] font-bold text-lg">{roofArea} sq.ft</span>
                </div>
                <input 
                  type="range" min="100" max="5000" step="50"
                  value={roofArea}
                  onChange={(e) => setRoofArea(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#f6b643]"
                />
              </div>
            </div>

            <div className="mt-12 p-4 bg-green-50 rounded-2xl border border-green-100 italic text-sm text-[#1854a1]">
              *Calculations are based on average Indian solar generation data (4 units/day per kW).
            </div>
          </div>

          {/* OUTPUT DASHBOARD */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Primary Result */}
            <div className="md:col-span-2 bg-[#f6b643]  rounded-3xl p-8 text-white shadow-lg relative overflow-hidden">
              <div className="relative z-10">
                <p className="opacity-80 font-medium">Recommended System Size</p>
                <div className="flex items-baseline gap-2 mt-2">
                  <h4 className="text-6xl font-bold">{results.kw}</h4>
                  <span className="text-2xl font-medium">kWp</span>
                </div>
                <p className="mt-4 text-green-100 max-w-xs text-sm">
                  This system size will offset nearly 95% of your current electricity bill.
                </p>
              </div>
              <div className="absolute -right-10 -bottom-10 text-white opacity-10 rotate-12">
                <svg width="200" height="200" fill="currentColor" viewBox="0 0 24 24"><path d="M12 7V3L8 7l4 4V7c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.95 20 14.53 20 13c0-4.42-3.58-8-8-8zm-5.74 3.2L4.8 8.74C3.27 10.83 2.5 13.4 3 16c.78 4.11 4.1 7.42 8.21 8.2 2.6.49 5.17-.28 7.26-1.81l-1.45-1.45c-1.5 1.14-3.5 1.74-5.61 1.32-2.91-.56-5.18-2.82-5.74-5.74-.3-1.5-.07-2.92.49-4.12z"/></svg>
              </div>
            </div>

            {/* Monthly Savings */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-between">
              <p className="text-slate-500 text-sm font-medium uppercase tracking-wider">Monthly Savings</p>
              <h4 className="text-3xl font-bold text-slate-800 mt-2">₹{results.monthly}</h4>
            </div>

            {/* Yearly Savings */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-between">
              <p className="text-slate-500 text-sm font-medium uppercase tracking-wider">Yearly Savings</p>
              <h4 className="text-3xl font-bold text-[#1854a1] mt-2">₹{results.yearly}</h4>
            </div>

            {/* Payback Period */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 flex flex-col justify-between">
              <p className="text-slate-500 text-sm font-medium uppercase tracking-wider">Payback Time</p>
              <h4 className="text-3xl font-bold text-slate-800 mt-2">{results.payback} <span className="text-lg">Years</span></h4>
            </div>

            {/* Environmental Impact */}
            <div className="bg-blue-50 p-6 rounded-3xl shadow-sm border border-blue-100 flex flex-col justify-between">
              <p className="text-blue-600 text-sm font-medium uppercase tracking-wider">Green Impact</p>
              <h4 className="text-3xl font-bold text-blue-800 mt-2">{results.trees} 🌳</h4>
              <p className="text-blue-500 text-xs mt-1">Equivalent trees planted</p>
            </div>

          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <button className="bg-slate-900 hover:bg-black text-white px-12 py-5 rounded-2xl text-lg font-bold transition-all transform hover:scale-105 shadow-2xl">
            Get a Detailed Quotation →
          </button>
        </div>
      </div>
    </section>
  );
};

export default SolarCalculator;