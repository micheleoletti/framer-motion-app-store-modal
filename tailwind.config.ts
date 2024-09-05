import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Helvetica Neue", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      transitionTimingFunction: {
        "ease-in-quad": "var(--ease-in-quad)",
        "ease-in-cubic": "var(--ease-in-cubic)",
        "ease-in-quart": "var(--ease-in-quart)",
        "ease-in-quint": "var(--ease-in-quint)",
        "ease-in-expo": "var(--ease-in-expo)",
        "ease-in-circ": "var(--ease-in-circ)",
        "ease-out-quad": "var(--ease-out-quad)",
        "ease-out-cubic": "var(--ease-out-cubic)",
        "ease-out-quart": "var(--ease-out-quart)",
        "ease-out-quint": "var(--ease-out-quint)",
        "ease-out-expo": "var(--ease-out-expo)",
        "ease-out-circ": "var(--ease-out-circ)",
        "ease-in-out-quad": "var(--ease-in-out-quad)",
        "ease-in-out-cubic": "var(--ease-in-out-cubic)",
        "ease-in-out-quart": "var(--ease-in-out-quart)",
        "ease-in-out-quint": "var(--ease-in-out-quint)",
        "ease-in-out-expo": "var(--ease-in-out-expo)",
        "ease-in-out-circ": "var(--ease-in-out-circ)",
      },
    },
  },
  plugins: [],
};
export default config;
