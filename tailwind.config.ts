import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        travsior: {
          // Updated to #0958D9 for WCAG 2.2 AA compliant contrast (> 6:1 on white and > 4.5:1 on light tints)
          blue: "#0958D9",
          blueHover: "#003eb3",
          blueLight: "#E6F4FF",
          navy: "#102A43",
          navyLight: "#243E56",
          navyMuted: "#334E68", // Darkened slightly for 7:1+ contrast on white
          bgLight: "#F5F9FF",
          border: "#D9E2EC",
          borderLight: "#E2E8F0",
          cardHover: "#EDF5FF",
        },
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 25px -5px rgba(16, 42, 67, 0.06), 0 8px 10px -6px rgba(16, 42, 67, 0.04)",
        cardHover: "0 20px 30px -10px rgba(9, 88, 217, 0.15), 0 10px 15px -5px rgba(16, 42, 67, 0.05)",
        subtle: "0 2px 10px rgba(16, 42, 67, 0.04)",
        float: "0 20px 40px rgba(16, 42, 67, 0.12)",
      },
      borderRadius: {
        card: "16px",
        btn: "10px",
      },
      maxWidth: {
        container: "1240px",
      },
    },
  },
  plugins: [],
};
export default config;
