
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        brand: {
          blue: '#2563EB',
          indigo: '#4F46E5',
          purple: '#8B5CF6',
          violet: '#7C3AED',
          darkPurple: '#1E1B4B',
          lightPurple: '#D6BCFA',
          vibrantPurple: '#8B5CF6',
          gray: '#64748B',
          dark: '#0F172A',
          light: '#FFFFFF',
          success: '#10B981',
          warning: '#F59E0B',
          error: '#EF4444',
          info: '#3B82F6',
          pink: '#EC4899',
          aqua: '#06B6D4',
          teal: '#14B8A6',
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 5px rgba(139, 92, 246, 0.2)" },
          "50%": { boxShadow: "0 0 20px rgba(139, 92, 246, 0.6)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 6s ease-in-out infinite",
        glow: "glow 3s ease-in-out infinite",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(to right bottom, rgba(79, 70, 229, 0.8), rgba(124, 58, 237, 0.8), rgba(139, 92, 246, 0.7))',
        'card-gradient': 'linear-gradient(to right bottom, rgba(79, 70, 229, 0.05), rgba(124, 58, 237, 0.05))',
        'pink-aqua-gradient': 'linear-gradient(135deg, #EC4899 0%, #06B6D4 100%)',
        'aqua-pink-gradient': 'linear-gradient(135deg, #06B6D4 0%, #EC4899 100%)',
        'pink-purple-gradient': 'linear-gradient(135deg, #EC4899 0%, #8B5CF6 100%)',
        'aqua-teal-gradient': 'linear-gradient(135deg, #06B6D4 0%, #14B8A6 100%)',
        'modern-gradient': 'linear-gradient(to right, #EC4899, #8B5CF6, #06B6D4)',
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
