import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        // Brand Colors
        primary: '#106840',
        secondary: '#13FF79',
        btnWarning: '#FF7400',
        primaryBlack: "#0F0F0F",
        primaryWhite: "#FFFFFF",
        secondaryOffWhite: "#F2F2F2",
        // State Colors
        warning: "#F5BB0A",
        success: "#27AE60",
        error: "#EB5757",
        info: "#2F80ED",
        black: {
          100: "#000000",
          200: "#1D1D1D",
          300: "#282828",
        },
        white: {
          100: "#FFFFFF",
          200: "#ffffffcc",
        },
        gray: {
          100: "#333333",
          200: "#4F4F4F",
          300: "#828282",
          400: "#BDBDBD",
          500: "#E0E0E0",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        // primary: {
        //   DEFAULT: "hsl(var(--primary))",
        //   foreground: "hsl(var(--primary-foreground))",
        // },
        // secondary: {
        //   DEFAULT: "hsl(var(--secondary))",
        //   foreground: "hsl(var(--secondary-foreground))",
        // },
        // destructive: {
        //   DEFAULT: "hsl(var(--destructive))",
        //   foreground: "hsl(var(--destructive-foreground))",
        // },
        // muted: {
        //   DEFAULT: "hsl(var(--muted))",
        //   foreground: "hsl(var(--muted-foreground))",
        // },
        // accent: {
        //   DEFAULT: "hsl(var(--accent))",
        //   foreground: "hsl(var(--accent-foreground))",
        // },
        // popover: {
        //   DEFAULT: "hsl(var(--popover))",
        //   foreground: "hsl(var(--popover-foreground))",
        // },
        // card: {
        //   DEFAULT: "hsl(var(--card))",
        //   foreground: "hsl(var(--card-foreground))",
        // },
      },
      // borderRadius: {
      //   lg: "var(--radius)",
      //   md: "calc(var(--radius) - 2px)",
      //   sm: "calc(var(--radius) - 4px)",
      // },
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        sora: ["Sora", "sans-serif"],
        quickSand: ["Quicksand", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"]
      },
      fontSize: {
        "extra-small": "12px",
        small: "14px",
        base: "16px",
        large: "26px",
        "extra-large": "32px",
      },
      // line height
      leading: {
        tight: "1.2",
        normal: "1.5",
        relaxed: "1.8",
      },
      // letter spacing
      tracking: {
        tighter: "-0.5px",
        tight: "-0.25px",
        normal: "0",
        wide: "0.25px",
        wider: "0.5px",
      },
    },
  },
  plugins: [],
}
export default config
