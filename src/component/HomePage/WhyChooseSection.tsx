
import { Shield, TrendingUp, Award, Building } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const BRAND = {
  primary: "#1854a1",   // Deep Blue
  accent: "#f6b643",    // Solar Yellow
  soft: "#a1bcde",      // Soft Blue
  dark: "#0b1c33",
}

const highlights = [
  {
    icon: Shield,
    title: "25-Year Warranty",
    description: "Tier-1 panels backed by long-term performance guarantee.",
    tint: "from-[rgba(161,188,222,0.25)] to-[rgba(246,182,67,0.15)]",
    iconColor: BRAND.primary,
  },
  {
    icon: Award,
    title: "Certified Installation",
    description: "Professionally engineered systems for maximum efficiency.",
    tint: "from-[rgba(246,182,67,0.18)] to-[rgba(24,84,161,0.08)]",
    iconColor: BRAND.primary,
  },
  {
    icon: TrendingUp,
    title: "3–4 Year ROI",
    description: "Fast payback with smart system sizing & net-metering.",
    tint: "from-[rgba(161,188,222,0.25)] to-[rgba(246,182,67,0.15)]",
    iconColor: BRAND.primary,
  },
  {
    icon: Building,
    title: "Local Showroom & Support",
    description: "Dedicated consultation & after-sales service near you.",
    tint: "from-[rgba(246,182,67,0.18)] to-[rgba(24,84,161,0.08)]",
    iconColor: BRAND.primary,
  },
]

export default function HighlightsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-6">

      {/* Background Effects */}
      <div
        aria-hidden
        className="absolute -top-32 -left-32 w-125 h-125 rounded-full blur-3xl opacity-40 animate-spin-slow-reverse"
        style={{
          background: `radial-gradient(circle, ${BRAND.soft} 0%, transparent 60%)`
        }}
      />
      <div
        aria-hidden
        className="absolute -bottom-32 -right-32 w-150 h-150 rounded-full blur-3xl opacity-40 animate-spin-slow"
        style={{
          background: `radial-gradient(circle, ${BRAND.accent} 0%, transparent 60%)`
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className={`text-center mb-14 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-5"}`}>
          <span
            className="inline-flex items-center gap-2 px-4 py-1 rounded-full text-sm font-semibold shadow"
            style={{
              color: BRAND.primary,
              border: `1px solid ${BRAND.soft}`,
              background: "white"
            }}
          >
            ⚡ Why Choose Us
          </span>

          <h2
            className="text-3xl md:text-4xl font-extrabold mt-6 transition-colors duration-300"
            style={{ color: BRAND.primary }}
          >
            Powering Your Future with Smart Solar
          </h2>

          <p className="mt-4 max-w-3xl mx-auto text-gray-600">
            Designed for performance, built for savings, and supported locally.
            Discover why customers trust us for reliable solar solutions.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((h, index) => {
            const Icon = h.icon
            return (
              <div
                key={h.title}
                className={`group relative overflow-hidden rounded-2xl p-6 shadow-lg border border-[#000000]/40
                  transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl hover:scale-105
                  ${isVisible ? "animate-card-pop-in" : "opacity-0 scale-95"}`}
                style={{ animationDelay: `${index * 0.15}s`, background: "white" }}
              >
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-linear-to-br ${h.tint} opacity-80`} />

                {/* Shine Effect */}
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-[#f6b643]/80 to-transparent -translate-x-[200%] group-hover:translate-x-[200%] transition-transform duration-2200 ease-out" />

                <div className="relative z-10 text-center">
                  <div className="mb-5 flex justify-center">
                    <div
                      className="p-4 rounded-full shadow-md transition-transform duration-500 group-hover:scale-110"
                      style={{ background: BRAND.soft }}
                    >
                      <Icon className="w-8 h-8" style={{ color: h.iconColor }} />
                    </div>
                  </div>

                  <h3 className="text-lg font-semibold mb-2" style={{ color: BRAND.primary }}>
                    {h.title}
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed">
                    {h.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Trust Badges */}
        <div className={`mt-14 flex flex-wrap justify-center gap-4 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-5"}`}>
          <span
            className="px-5 py-2 rounded-full text-sm font-semibold"
            style={{ background: BRAND.primary, color: "white" }}
          >
            🔒 25-Year Performance Warranty
          </span>

          <span
            className="px-5 py-2 rounded-full text-sm font-semibold"
            style={{ background: BRAND.accent, color: "#111" }}
          >
            ⚡ Fast ROI & Net Metering
          </span>

          <span
            className="px-5 py-2 rounded-full text-sm font-semibold"
            style={{ background: BRAND.primary, color: "white" }}
          >
            🏢 Local Service & Support
          </span>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up { animation: fade-in-up 0.8s ease forwards; }

        @keyframes card-pop-in {
          0% { opacity: 0; transform: scale(0.95) translateY(20px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-card-pop-in { animation: card-pop-in 0.8s ease forwards; }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow { animation: spin-slow 100s linear infinite; }

        @keyframes spin-slow-reverse {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        .animate-spin-slow-reverse { animation: spin-slow-reverse 100s linear infinite; }
      `}</style>
    </section>
  )
}
