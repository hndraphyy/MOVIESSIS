import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        background: "#0f0f11",
        primary: "#eefb00",
        grayCustom: "#717171",
      },
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(-100%)", opacity: "0" },
        },
        progressBar: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
        fadeInDelay: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeDelay: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glow: {
          "0%, 100%": {
            opacity: "0.3",
          },
          "50%": {
            opacity: "0.4",
          },
        },
      },
      animation: {
        slideDown: "slideDown 0.6s ease-in-out forwards",
        slideUp: "slideUp 0.6s ease-in-out forwards",
        progressBar: "progressBar 1s ease-in-out forwards ",
        fadeInDelay: "fadeInDelay 0.5s ease-out 1.2s forwards",
        "fade-up": "fadeUp 0.8s ease-out forwards",
        "fade-delay": "fadeDelay 0.6s ease-out 0.5s forwards",
        glow: "glow 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
