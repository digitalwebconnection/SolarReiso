"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Rajesh Sharma",
    role: "Homeowner – Nagpur",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "Switching to solar was the best financial decision we made. Our electricity bill dropped by 85% and the installation was professional.",
  },
  {
    name: "Anita Verma",
    role: "Business Owner – Pune",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "The team handled everything from subsidy documentation to installation. Our commercial solar system is performing beyond expectations.",
  },
  {
    name: "Vikram Mehra",
    role: "Industrialist – Thane",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    review:
      "For our factory, high-efficiency panels were the only choice. The project was delivered on time and ROI looks incredible.",
  },
  {
    name: "Sonal Gupta",
    role: "Villa Owner – Mumbai",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    review:
      "I was worried about aesthetics, but the installation is sleek. Net-metering setup was handled entirely by the team. Highly recommend!",
  },
];

export default function SolarTestimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      nextStep();
    }, 3000);
    return () => clearInterval(timer);
  }, [index]);

  const nextStep = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevStep = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section
      className="py-14 px-6 overflow-hidden"
      style={{ backgroundColor: "#a1bcde20" }}
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
          <div className="max-w-2xl">
            <h2
              className="font-bold uppercase tracking-[0.2em] text-sm mb-4"
              style={{ color: "#1854a1" }}
            >
              Real Impact
            </h2>
            <h3 className="text-4xl md:text-5xl font-black text-[#1854a1] leading-tight">
              What Our Customers Say <br /> About Going Solar
            </h3>
          </div>

          <div className="flex gap-3">
            <button
              onClick={prevStep}
              className="p-4 rounded-full border bg-white shadow-sm transition-all"
              style={{ borderColor: "#a1bcde" }}
            >
              <ChevronLeft size={24} color="#1854a1" />
            </button>
            <button
              onClick={nextStep}
              className="p-4 rounded-full shadow-md transition-all"
              style={{ backgroundColor: "#1854a1" }}
            >
              <ChevronRight size={24} color="white" />
            </button>
          </div>
        </div>

        {/* Slider */}
        <div className="relative h-112.5 md:h-87.5">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              className="absolute w-full"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center bg-white rounded-[2.5rem] p-8 md:p-12  ">

                {/* Image Section */}
                <div className="relative">
                  <div
                    className="absolute -top-4 -left-4 w-24 h-24 rounded-full blur-2xl"
                    style={{ backgroundColor: "#f6b64340" }}
                  />
                  <img
                    src={testimonials[index].image}
                    alt={testimonials[index].name}
                    className="w-24 h-24 md:w-42 md:h-42 rounded-2xl object-cover border-4 border-white shadow-xl relative z-10"
                  />
                  <div className="mt-6">
                    <h4 className="text-2xl font-bold text-[#1854a1]">
                      {testimonials[index].name}
                    </h4>
                    <p style={{ color: "#f6b643" }} className="font-medium">
                      {testimonials[index].role}
                    </p>
                  </div>
                </div>

                {/* Content */}
                <div className="relative">
                  <Quote
                    className="absolute -top-10 -left-6 opacity-10"
                    size={90}
                    color="#1854a1"
                  />
                  <div className="relative z-10">
                    <div className="flex mb-6">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={20}
                          fill="#f6b643"
                          stroke="#f6b643"
                        />
                      ))}
                    </div>
                    <p className="text-gray-600 text-lg md:text-xl italic leading-relaxed">
                      "{testimonials[index].review}"
                    </p>
                  </div>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-1">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              className="h-2 rounded-full transition-all duration-300"
              style={{
                width: i === index ? "32px" : "8px",
                backgroundColor: i === index ? "#1854a1" : "#a1bcde",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
