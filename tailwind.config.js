/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    data: {
      open: 'open~="true"',
      current: 'current~="true"',
      "in-view": 'in-view~="true"',
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        violet: "hsl(var(--violet))",
        rose: "hsl(var(--rose))",
        gold: "hsl(var(--gold))",
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
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "left-to-right": {
          from: {
            top: 0,
            right: "100%",
            left: 0,
            bottom: 0,
            transform: "skew(-12deg)",
          },
          to: {
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
            transform: "skew(-12deg)",
          },
        },
        "right-to-left": {
          from: {
            top: 0,
            right: 0,
            bottom: 0,
            left: "100%",
            transform: "skew(-12deg)",
          },
          to: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            transform: "skew(-12deg)",
          },
        },
        "slide-down": {
          from: {
            transform: "translateY(100%)",
          },
          to: {
            transform: "translateY(0)",
          },
        },
        "text-slide-down": {
          from: {
            transform: "translateY(-100%)",
            opacity: 0,
          },
          to: {
            transform: "translateY(0)",
            opacity: 1,
          },
        },
        "title-slide-right": {
          from: { transform: "translateX(-100%)", opacity: 0 },
          to: { transform: "translateX(0)", opacity: 1 },
        },
        "title-slide-left": {
          from: { transform: "translateX(100%)", opacity: 0 },
          to: { transform: "translateX(0)", opacity: 1 },
        },
        "fade-in": {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",

        "highlight-right": "left-to-right .5s ease-in-out 1.5s forwards",
        "highlight-left": "right-to-left .5s ease-in-out 1.5s forwards",

        "title-slide-right": "title-slide-right .5s ease-in-out .5s forwards",
        "title-slide-left": "title-slide-left .5s ease-in-out .5s forwards",
        "text-slide-down": "text-slide-down .5s ease-out 1s forwards",
        "button-fade-in": "fade-in .5s ease-in-out 1.5s forwards",

        "spin-slow": "spin 10s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
