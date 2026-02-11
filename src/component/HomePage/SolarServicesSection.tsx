"use client";

import { motion } from "framer-motion";
import { Factory, Landmark, TreePine, ArrowUpRight } from "lucide-react";
import { useState } from "react";

const services = [
  {
    title: "Commercial",
    subtitle: "Rooftop & On-Grid",
    description: "Smart rooftop systems designed to reduce operational costs and deliver long-term sustainability for commercial enterprises.",
    image: "https://be-cis.com/wp-content/uploads/2024/04/nuno-marques-0GbrjL3vZF4-unsplash-scaled.jpg",
    icon: Landmark,
    stat: "40% Savings",
  },
  {
    title: "Industrial",
    subtitle: "Large Scale Plants",
    description: "High-capacity solar systems engineered for factories and warehouses powering heavy operations with clean energy.",
    image: "https://www.jakson.com/wp-content/uploads/2025/03/Choosing-the-Right-Solar-Solutions-for-Your-Commercial-Needs.jpg",
    icon: Factory,
    stat: "MW Scale",
  },
  {
    title: "Solar Park",
    subtitle: "Utility Scale Parks",
    description: "Utility-scale solar parks delivering optimized renewable infrastructure and maximum power generation.",
    image: "https://d382rz2cea0pah.cloudfront.net/wp-content/uploads/2020/12/Solar-Park-Developer-Asked-Not-to-Stop-Generators-from-Feeding-Excess-Energy-to-the-Grid-.jpg",
    icon: TreePine,
    stat: "Eco-Grade",
  },
];

export default function SolarServicesSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

  return (
    <section className="relative py-24 px-6 lg:px-0 bg-white overflow-hidden">
      {/* Background Palette Accents */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-[#a1bcde]/10 rounded-full blur-[120px]" />
        <div className="absolute top-[20%] right-[-5%] w-[30%] h-[30%] bg-[#f6b643]/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header with Side-by-Side Typography */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-16 gap-10">
          <div className="lg:w-1/2">
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter">
              OUR <span className="text-[#1854a1]">SOLUTIONS.</span>
            </h2>
          </div>
          <div className="lg:w-1/2">
            <p className="text-xl text-slate-500 leading-relaxed font-medium">
              We engineer advanced solar infrastructure for 
              <span className="text-[#1854a1]"> high-demand industrial</span> and 
              <span className="text-[#f6b643] font-bold"> commercial</span> environments across India.
            </p>
          </div>
        </div>

        {/* Expanding Panels Container */}
        <div className="flex flex-col lg:flex-row gap-4 h-150">
          {services.map((service, index) => (
            <motion.div
              key={index}
              onMouseEnter={() => setExpandedIndex(index)}
              className="relative cursor-pointer overflow-hidden rounded-[2.5rem] transition-all duration-700 ease-in-out"
              animate={{
                flex: expandedIndex === index ? 2.5 : 1,
              }}
              initial={false}
            >
              {/* Background Image */}
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              
              {/* Overlay: Blue gradient on active, dark on inactive */}
              <div 
                className={`absolute inset-0 transition-colors duration-500 ${
                  expandedIndex === index 
                    ? "bg-linear-to-t from-black/90 via-[#1854a1]/40 to-transparent" 
                    : "bg-black/60"
                }`} 
              />

              {/* Content Wrapper */}
              <div className="relative h-full w-full p-10 flex flex-col justify-between">
                
                {/* Top: Icon and Stat */}
                <div className="flex justify-between items-start">
                  <div className={`p-4 rounded-2xl backdrop-blur-md border border-white/20 ${expandedIndex === index ? "bg-[#f6b643]" : "bg-white/10"}`}>
                    <service.icon className={`w-8 h-8 ${expandedIndex === index ? "text-[#1854a1]" : "text-white"}`} />
                  </div>
                  {expandedIndex === index && (
                    <motion.span 
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full text-white text-xs font-bold uppercase tracking-widest border border-white/30"
                    >
                      {service.stat}
                    </motion.span>
                  )}
                </div>

                {/* Bottom: Text Content */}
                <div className="w-full">
                  <h3 className={`font-black uppercase transition-all duration-500 ${expandedIndex === index ? "text-4xl md:text-5xl text-white" : "text-2xl text-white/70"}`}>
                    {service.title}
                  </h3>
                  
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="mt-6"
                    >
                      <p className="text-white/80 text-lg max-w-md leading-relaxed mb-8 font-medium">
                        {service.description}
                      </p>
                      <button className="flex items-center gap-3 bg-white text-[#1854a1] px-8 py-4 rounded-2xl font-black text-sm hover:bg-[#f6b643] transition-colors group">
                        EXPLORE SOLUTION <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </button>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}