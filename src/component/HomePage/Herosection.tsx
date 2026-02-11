

import { useRef, type JSX } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function GreenRevolutionHero(): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress across 200vh section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Clip-path reveal (Framer-style)
 const clipPath = useTransform(
  scrollYProgress,
  [0, 0.3, 1],
  [
    "circle(100% at 50% 50%)",  // fully visible at start
     // stay full until 30% scroll
    "circle(0% at 50% 50%)"     // then shrink gradually
  ]
);
  return (
    /* SCROLL AREA */
    <section
      ref={containerRef}
      className="relative h-[380vh] w-full bg-white"
    >
      {/* STICKY FULLSCREEN HERO */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">

        {/* BACKGROUND TEXT (GREEN) */}
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <h2 className="text-[#1854a1] font-serif font-bold uppercase
            text-[56px] md:text-[120px] leading-[0.9] tracking-tight text-center">
            Solar  Reiso
          </h2>
        </div>

        {/* REVEAL LAYER (IMAGE + WHITE TEXT) */}
        <motion.div
          style={{ clipPath }}
          className="absolute inset-0 z-10 flex items-center justify-center bg-white"
        >
          {/* FULLSCREEN IMAGE CONTAINER */}
          <div className="relative w-full h-full flex items-center justify-center">
            <img
              src="https://framerusercontent.com/images/coJ7BuJKyi9JSlVIp3HRCGHNKo.jpeg?scale-down-to=2048"
              alt="Solar EPC"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* WHITE TEXT (FRONT) */}
            <h2 className="relative z-20 text-white font-serif font-bold uppercase
              text-[56px] md:text-[120px] leading-[0.9] tracking-tight text-center">
             Solar  Reiso
            </h2>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
