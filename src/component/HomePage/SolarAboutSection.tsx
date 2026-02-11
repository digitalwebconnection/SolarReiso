
import { motion } from "framer-motion";
import { Sun, Globe, Zap, ArrowRight, ShieldCheck} from "lucide-react";

export default function SolarAboutSection() {
  return (
    <section className="relative py-14 px-6 lg:px-20 bg-white overflow-hidden">
      
      {/* BACKGROUND DECORATIONS (Inspired by the Study Abroad Design) */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#f8fbff] -z-10 rounded-l-[100px]" />
      <div className="absolute top-10 right-10 w-64 h-64 border-20 border-[#a1bcde]/10 rounded-full -z-10" />
      
      <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-10 items-center">

        {/* LEFT SIDE – Complex Image Composition */}
        <div className="relative">
          
          {/* Abstract Floating Icons (Like the passports/airplane) */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1, repeat: Infinity, repeatType: "reverse" }}
            className="absolute -top-12 left-1/2 -translate-x-1/2 z-30 hidden md:block"
          >
             <div className="flex gap-4 rotate-[-15deg]">
                <div className="w-16 h-20 bg-[#1854a1] rounded-lg shadow-xl flex items-center justify-center border-2 border-white">
                   <Sun className="text-white w-8 h-8" />
                </div>
                <div className="w-16 h-20 bg-[#f6b643] rounded-lg shadow-xl flex items-center justify-center border-2 border-white">
                   <Zap className="text-[#1854a1] w-8 h-8" />
                </div>
             </div>
          </motion.div>

          {/* Main Top Image (The "Girl with Passport" equivalent) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative z-20 w-[90%] rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white"
          >
            <img
              src="https://intersolarsystems.com/wp-content/uploads/2024/03/Solar-Panels-2-1.webp"
              alt="Solar Infrastructure"
              className="w-full h-100 object-cover"
            />
          </motion.div>

          {/* Overlapping Bottom Image (The "Passport in Hand" equivalent) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="absolute -bottom-10 -right-4 z-20 w-[75%] rounded-[2.5rem] overflow-hidden shadow-2xl border-[6px] border-white"
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ2IKadpT5_GvXlJ5fJalKx46PtHp6E0hqAQ&s"
              alt="Solar Installation Team"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Stylized Airplane Path Replacement (Solar Wave) */}
          <div className="absolute -bottom-20 -left-10 opacity-20 -z-10">
             <svg width="300" height="200" viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 199C50 150 150 150 299 1" stroke="#1854a1" strokeWidth="4" strokeDasharray="10 10"/>
             </svg>
          </div>
        </div>

        {/* RIGHT SIDE – Content Design */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <span className="inline-block  text-[#1854a1] px-0 py-2 rounded-full text-xs font-bold uppercase tracking-widest mb-2 shadow-sm">
              About Our Consultancy
            </span>

            <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.1] mb-4">
              TURNING SOLAR <br />
              <span className="text-[#f6b643]">DREAMS</span> INTO REALITY
            </h2>

            <div className="relative pl-4 mb-6">
              <div className="absolute left-0 top-0 w-1.5 h-full bg-[#a1bcde]/90 rounded-full" />
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                We Guide Businesses With Expert Solar Consulting, Ensuring A Smooth Process 
                From Feasibility To Commissioning, Turning Clean Energy Aspirations Into 
                High-Yielding Opportunities For A Brighter Future.
              </p>
            </div>

            {/* Feature Points (Matching the iconography style) */}
            <div className="grid md:grid-cols-2 gap-y-8 gap-x-12 mb-12">
              <div className="group">
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-2 rounded-lg bg-[#1854a1]/10 text-[#1854a1] group-hover:bg-[#1854a1] group-hover:text-white transition-colors">
                    <Globe size={24} />
                  </div>
                  <h4 className="font-extrabold text-slate-900">Global Reach-</h4>
                </div>
                <p className="text-slate-500 text-sm font-medium">Expanding Sustainability Worldwide</p>
              </div>

              <div className="group">
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-2 rounded-lg bg-[#1854a1]/10 text-[#1854a1] group-hover:bg-[#1854a1] group-hover:text-white transition-colors">
                    <ShieldCheck size={24} />
                  </div>
                  <h4 className="font-extrabold text-slate-900">Verified-</h4>
                </div>
                <p className="text-slate-500 text-sm font-medium">Approved EPC Partner Standards</p>
              </div>
            </div>

            {/* CTA Button (Matching the "Get Started" style) */}
            <button className="group flex items-center gap-6  bg-[#1854a1] border border-slate-200 px-1 py-1 rounded-full shadow-lg hover:shadow-xl transition-all pl-8">
              <span className="text-white font-black uppercase text-sm tracking-wider">Get Started</span>
              <div className="w-12 h-12 rounded-full bg-[#f6b643] flex items-center justify-center text-[#1854a1] group-hover:translate-x-2 transition-transform">
                <ArrowRight size={20} strokeWidth={3} />
              </div>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}