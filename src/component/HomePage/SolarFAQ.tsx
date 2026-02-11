"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How much can I save by installing solar panels?",
    answer:
      "Most homeowners save 70%–90% on electricity bills. Savings depend on system size, location, and electricity consumption. With government subsidy, payback is typically 3–5 years.",
  },
  {
    question: "What government subsidies are available for solar?",
    answer:
      "Under PM Surya Ghar Yojana, residential users can get up to 40% subsidy on rooftop solar systems. Our team handles complete documentation and approval process.",
  },
  {
    question: "How long do solar panels last?",
    answer:
      "High-quality solar panels come with 25-year performance warranty. Most systems continue generating power efficiently even after 25 years.",
  },
  {
    question: "What maintenance is required?",
    answer:
      "Solar systems require minimal maintenance. Occasional cleaning and annual inspection ensure optimal performance and long-term efficiency.",
  },
  {
    question: "Can solar power run my entire home?",
    answer:
      "Yes. A properly designed solar system can offset 100% of your household electricity consumption depending on roof space and usage.",
  },
];

export default function SolarFAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative bg-slate-50 py-14 px-6 lg:px-20 overflow-hidden">
      
      {/* Background Decorative Accents */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-100 h-100 rounded-full bg-[#1854a1]/5 blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-100 h-100 rounded-full bg-[#f6b643]/5 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1854a1]/10 border border-[#1854a1]/20 mb-6">
            <HelpCircle className="w-4 h-4 text-[#1854a1]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#1854a1]">
              Knowledge Base
            </span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-black text-slate-900 leading-tight mb-6">
            Everything You Need to Know <br /> <span className="text-[#1854a1]">About Going Solar</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Clear, transparent answers to help you transition to clean energy with total confidence.
          </p>
        </motion.div>

        {/* FAQ List */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-4"
        >
          {faqs.map((faq, index) => {
            const isActive = activeIndex === index;
            
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`group rounded-3xl max-w-5xl mx-auto transition-all duration-500 border ${
                  isActive 
                    ? "bg-white border-[#1854a1] shadow-xl shadow-blue-900/5 scale-[1.02]" 
                    : "bg-white/50 border-slate-200 hover:border-[#1854a1]/80 hover:bg-white shadow-sm"
                }`}
              >
                <button
                  onClick={() => setActiveIndex(isActive ? null : index)}
                  className="w-full flex justify-between items-center p-6 md:p-8 text-left"
                >
                  <span className={`text-lg md:text-xl font-bold transition-colors duration-300 ${
                    isActive ? "text-[#1854a1]" : "text-slate-800"
                  }`}>
                    {faq.question}
                  </span>

                  <div className={`shrink-0 ml-4 p-2 rounded-full transition-all duration-300 ${
                    isActive ? "bg-[#1854a1] text-white" : "bg-slate-100 text-slate-400 group-hover:bg-[#1854a1]/10 group-hover:text-[#1854a1]"
                  }`}>
                    <motion.div
                      animate={{ rotate: isActive ? 135 : 0 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    >
                      <Plus size={24} />
                    </motion.div>
                  </div>
                </button>

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      <div className="px-6 md:px-8 pb-8">
                        <div className="h-px w-full bg-slate-100 mb-6" />
                        <p className="text-slate-600 leading-relaxed text-lg">
                          {faq.answer}
                        </p>
                        
                        {/* Subtle Branding Accent */}
                        <div className="mt-6 flex items-center gap-2 text-[#f6b643]">
                           <div className="h-1 w-10 rounded-full bg-[#f6b643]" />
                           <span className="text-[10px] font-black uppercase tracking-widest">Solar Reiso Verified</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom Support CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-500 font-medium">
            Still have questions? 
            <a href="/contact-us" className="ml-2 text-[#1854a1] font-bold hover:underline">
              Speak with a solar expert today →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}