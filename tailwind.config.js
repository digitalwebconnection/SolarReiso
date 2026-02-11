module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        heroImage: {
          "0%": {
            transform:
              "perspective(1200px) rotateX(10deg) rotateZ(-8deg) scale(1.15) translateY(80px)",
            opacity: "0",
          },
          "100%": {
            transform:
              "perspective(1200px) rotateX(0deg) rotateZ(0deg) scale(1) translateY(0)",
            opacity: "1",
          },
        },
        frontText: {
          "0%": {
            opacity: "0",
            transform: "translate(-50%, -50%) scale(0.95)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%, -50%) scale(1)",
          },
        },
        backText: {
          "0%": {
            opacity: "0",
            transform:
              "translate(-50%, -50%) perspective(1200px) scale(0.4)",
          },
          "100%": {
            opacity: "1",
            transform:
              "translate(-50%, -50%) perspective(1200px) scale(0.6)",
          },
        },
      },
      animation: {
        heroImage: "heroImage 1.8s ease-out forwards",
        frontText: "frontText 1.2s ease-out forwards",
        backText: "backText 1.5s ease-out forwards",
      },
    },
  },
  plugins: [],
};
