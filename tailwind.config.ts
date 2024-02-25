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
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)",
        "background-color": "var(--background-color)",
        "heading-color": "var(--heading-color)",
        "paragraph-color": "var(--paragraph-color)",
        "border-color": "var(--border-color)"
      },
      fontFamily: {
        "heading": "var(--font-heading)", // note: you can call the left side of this whatever you want - barlow-bold or title-font or foo-bar, this is what you'll use in your Tailwind css classes to use this font
        "paragraph": "var(--font-paragraph)", // note: the bit that goes inside the var() function is the same variable name we defined in app.tsx
      }
    },
    container : {
      center : true,
      padding: {
        DEFAULT: '15px',
        md: '20px'
      }
    }
  },
  plugins: [],
};
export default config;
