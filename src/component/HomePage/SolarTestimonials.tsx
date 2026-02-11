
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";

const testimonials = [
  {
    name: "Rajesh Sharma",
    role: "Homeowner – Nagpur",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review: "Switching to solar was the best financial decision we made. Our electricity bill dropped by 85% and the installation was professional.",
  },
  {
    name: "Anita Verma",
    role: "Business Owner – Pune",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review: "The team handled everything from subsidy documentation to installation. Our commercial solar system is performing beyond expectations.",
  },
  {
    name: "Vikram Mehra",
    role: "Industrialist – Thane",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    review: "For our factory, high-efficiency panels were the only choice. The project was delivered on time and ROI looks incredible.",
  },
  {
    name: "Sonal Gupta",
    role: "Villa Owner – Mumbai",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    review: "I was worried about aesthetics, but the installation is sleek. Net-metering setup was handled entirely by the team. Highly recommend!",
  },
];

export default function SolarTestimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextStep = useCallback(() => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevStep = useCallback(() => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  // Auto-play logic with cleanup
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextStep, 5000);
    return () => clearInterval(timer);
  }, [nextStep, isPaused]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.9,
    }),
  };

  return (
    <section 
      className="py-20 px-6 overflow-hidden relative"
      style={{ backgroundColor: "#a1bcde15" }}
    >
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#1854a1] opacity-[0.03] blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-6 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h2 
              className="font-bold uppercase tracking-[0.3em] text-xs mb-4"
              style={{ color: "#1854a1" }}
            >
              Customer Success
            </h2>
            <h3 className="text-4xl md:text-6xl font-black text-[#1854a1] leading-[1.1]">
              Voices of  <span className="text-[#f6b643]">Clean Energy</span>
            </h3>
          </motion.div>

          {/* Navigation Controls */}
          <div className="flex gap-4">
            <button
              onClick={prevStep}
              aria-label="Previous testimonial"
              className="group p-4 rounded-full border bg-white shadow-sm hover:shadow-md transition-all active:scale-90"
              style={{ borderColor: "#a1bcde40" }}
            >
              <ChevronLeft size={24} className="text-[#1854a1] group-hover:-translate-x-1 transition-transform" />
            </button>
            <button
              onClick={nextStep}
              aria-label="Next testimonial"
              className="group p-4 rounded-full shadow-lg hover:shadow-xl transition-all active:scale-90"
              style={{ backgroundColor: "#1854a1" }}
            >
              <ChevronRight size={24} className="text-white group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Main Slider Area */}
        <div 
          className="relative min-h-125 md:min-h-100"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 200, damping: 25 },
                opacity: { duration: 0.3 },
                scale: { duration: 0.4 }
              }}
              className="absolute w-full"
            >
              <div className="grid md:grid-cols-5 gap-0 md:gap-12 items-center  p-8 md:p-16 shadow-[0_20px_50px_rgba(24,84,161,0.08)] border border-[#a1bcde20]">
                
                {/* Profile Visuals */}
                <div className="md:col-span-2 flex flex-col items-center md:items-start text-center md:text-left mb-8 md:mb-0">
                  <div className="relative">
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -inset-4 rounded-full opacity-20 blur-xl"
                      style={{ backgroundColor: "#f6b643" }}
                    />
                    <img
                      src={testimonials[index].image}
                      alt={testimonials[index].name}
                      className="w-32 h-32 md:w-48 md:h-48 rounded-4xl object-cover border-8 border-white shadow-2xl relative z-10 rotate-3 hover:rotate-0 transition-transform duration-500"
                    />
                  </div>
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mt-8"
                  >
                    <h4 className="text-3xl font-black text-[#1854a1] leading-tight">
                      {testimonials[index].name}
                    </h4>
                    <p className="text-[#f6b643] font-bold text-sm tracking-widest uppercase mt-2">
                      {testimonials[index].role}
                    </p>
                  </motion.div>
                </div>

                {/* Testimonial Text */}
                <div className="md:col-span-3 relative">
                  <Quote
                    className="absolute -top-16 -left-8 md:-left-12 opacity-[0.05] pointer-events-none"
                    size={140}
                    color="#1854a1"
                    strokeWidth={1}
                  />
                  <div className="relative z-10">
                    <div className="flex gap-1 mb-8 justify-center md:justify-start">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={18} fill="#f6b643" stroke="none" />
                      ))}
                    </div>
                    <motion.p 
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="text-gray-600 text-xl md:text-3xl font-medium italic leading-snug"
                    >
                      "{testimonials[index].review}"
                    </motion.p>
                  </div>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dynamic Pagination Dots */}
        <div className="flex justify-center gap-3 mt-5">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              className="group relative h-3 rounded-full overflow-hidden transition-all duration-500"
              style={{ width: i === index ? "48px" : "12px" }}
              aria-label={`Go to slide ${i + 1}`}
            >
              <div 
                className={`absolute inset-0 transition-colors duration-300 ${i === index ? 'bg-[#1854a1]' : 'bg-[#a1bcde60] group-hover:bg-[#a1bcde]'}`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}