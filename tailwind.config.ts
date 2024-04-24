import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "15px",
          sm: "15px",
          lg: "20px",
          xl: "5rem",
          "2xl": "5rem",
        },
      },
      colors:{
        primary: "",
        secondaryText: "#000000",
        accentLight: "#f3e8ff",
        accentDark: "#9333ea",
        backgroundPrimary: "#01002c",
        backgroundSecondary: "#000024",
        backgroundThird: "#090234",
        backgroundBox: "#28284e",
        lightText: "#ffffff",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        "logo": "24px",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.backdrop-blur-md': {
          '--tw-backdrop-blur': 'blur(10px)',
          '-webkit-backdrop-filter': 'var(--tw-backdrop-blur)',
          'backdrop-filter': 'var(--tw-backdrop-blur)',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
};
export default config;
