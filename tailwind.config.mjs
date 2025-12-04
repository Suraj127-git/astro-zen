import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: ["Be Vietnam Pro", ...defaultTheme.fontFamily.sans],
      serif: ["Gabarito Variable", ...defaultTheme.fontFamily.serif],
    },
    fontSize: {
      xs: ["0.875rem", "1.125rem"],
      sm: ["1rem", "1.25rem"],
      base: ["1.125rem", "1.625rem"],
      lg: ["1.25rem", "1.75rem"],
      xl: ["1.5rem", "1.813rem"],
      "2xl": ["1.75rem", "2.125rem"],
      "3xl": ["2rem", "2.375rem"],
      "4xl": ["2.25rem", "2.688rem"],
      "5xl": ["2.5rem", "3rem"],
      "6xl": ["3rem", "3.625rem"],
      "7xl": ["3.75rem", "1"],
      "8xl": ["4.5rem", "4.875rem"],
      "9xl": ["6rem", "6.625rem"],
    },
    extend: {
      letterSpacing: {
        tightest: "-2px",
        tighter: "-1px",
        tight: "-0.25px",
      },
      colors: {
        primary: "#2563EB",
        neutral: "#94A3B8",
        white: "#E2E8F0",
        black: "#0E141B",
      },
      keyframes: {
        slideIn: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        fadeInUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(37, 99, 235, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(37, 99, 235, 0.6)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
      },
      animation: {
        slideIn: "slideIn 600ms ease both",
        fadeInUp: "fadeInUp 800ms ease-out both",
        scaleIn: "scaleIn 600ms ease-out both",
        float: "float 3s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        glow: "0 0 20px rgba(37, 99, 235, 0.5)",
        "glow-lg": "0 0 40px rgba(37, 99, 235, 0.6)",
      },
      transitionDuration: {
        2000: "2000ms",
        3000: "3000ms",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
