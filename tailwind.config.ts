import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#BDA888",
        white: "#FDFDFD",
        textpr: "#383838",
      },
      fontFamily: {
        tilda: ["Tilda Sans VF", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
export default config;
