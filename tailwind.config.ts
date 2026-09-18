import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0F172A",
        paper: "#F7F8FA",
        line: "#E2E5EA",
        blue: {
          DEFAULT: "#123FA6",
          light: "#2F5FD6",
        },
        orange: {
          DEFAULT: "#F4791D",
        },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        sans: ["var(--font-sans)"],
      },
      maxWidth: {
        content: "1180px",
      },
    },
  },
  plugins: [],
};
export default config;
