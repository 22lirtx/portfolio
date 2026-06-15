import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Soft pink + rose gold luxury palette
        rose: {
          50: "#fdf6f3",
          100: "#fbe9e4",
          200: "#f6d2c8",
          300: "#efb3a3",
          400: "#e58a72",
          500: "#d96a4f",
          600: "#c4502f",
        },
        // Rose gold accent
        gold: {
          light: "#f7d9cc",
          DEFAULT: "#c9876b",
          deep: "#b76e52",
        },
        warm: {
          50: "#faf8f7",
          100: "#f2eeec",
          200: "#e6dfdb",
          300: "#cfc5bf",
          400: "#a89c95",
          500: "#80746d",
          600: "#5c524c",
          700: "#403834",
          800: "#2a2522",
          900: "#1a1614",
          950: "#0f0c0b",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-fraunces)", "Georgia", "serif"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      backgroundImage: {
        "rose-gradient":
          "linear-gradient(135deg, #f7d9cc 0%, #e58a72 50%, #c9876b 100%)",
        "soft-radial":
          "radial-gradient(circle at 30% 20%, rgba(229,138,114,0.18), transparent 60%)",
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(183, 110, 82, 0.12)",
        "glass-lg": "0 20px 60px -10px rgba(183, 110, 82, 0.22)",
        glow: "0 0 40px -8px rgba(229, 138, 114, 0.45)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-18px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px) scale(1)" },
          "50%": { transform: "translateY(-28px) scale(1.05)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "0.9" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 9s ease-in-out infinite",
        shimmer: "shimmer 4s linear infinite",
        "pulse-soft": "pulse-soft 5s ease-in-out infinite",
        marquee: "marquee 32s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
