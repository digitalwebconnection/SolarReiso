"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Receipt, FileText, Zap } from "lucide-react";

/* 🔢 Animated Counter Hook */
function useCounter(end: number, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(counter);
      }
      setCount(Math.floor(start));
    }, 16);

    return () => clearInterval(counter);
  }, [end, duration]);

  return count;
}

export default function SolarStatsSection() {
  const roofs = useCounter(100);
  const savings = useCounter(100);
  const projects = useCounter(1);

  return (
    <section className="py-10 bg-[#f8f9fb]">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-slate-900"
        >
          Real Results Powered by{" "}
          <span className="text-[#1854a1]">Clean Solar Energy</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-slate-600 mt-4 max-w-2xl mx-auto text-lg"
        >
          Real solar results with powered rooftops and consistent electricity
          savings you can trust.
        </motion.p>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-12 mt-16">

          {/* Stat 1 */}
          <motion.div
            whileHover={{ y: -6 }}
            className="flex flex-col items-center"
          >
            <div className="p-5 rounded-full border border-slate-200 shadow-sm mb-4 bg-white">
              <Receipt className="text-[#f6b643]" size={28} />
            </div>
            <h3 className="text-4xl font-bold text-slate-900">
              {roofs} +
            </h3>
            <p className="text-slate-600 mt-2">Roofs Powered</p>
          </motion.div>

          {/* Stat 2 */}
          <motion.div
            whileHover={{ y: -6 }}
            className="flex flex-col items-center"
          >
            <div className="p-5 rounded-full border border-slate-200 shadow-sm mb-4 bg-white">
              <FileText className="text-[#f6b643]" size={28} />
            </div>
            <h3 className="text-4xl font-bold text-slate-900">
              {savings} %
            </h3>
            <p className="text-slate-600 mt-2">
              Up to 100% Savings on Electricity Bills
            </p>
          </motion.div>

          {/* Stat 3 */}
          <motion.div
            whileHover={{ y: -6 }}
            className="flex flex-col items-center"
          >
            <div className="p-5 rounded-full border border-slate-200 shadow-sm mb-4 bg-white">
              <Zap className="text-[#f6b643]" size={28} />
            </div>
            <h3 className="text-4xl font-bold text-slate-900">
              {projects} MW+
            </h3>
            <p className="text-slate-600 mt-2">
              Projects Done (Maharashtra)
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
