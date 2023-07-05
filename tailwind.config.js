/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "Brand/Text/Text-800": "#252525",
        "text/text-secondary": "#7C7C7C",
        "Surface/surface-400": "#E6ECF4",
        "Brand/Surface/surface-50": "#F5F7FA",
        "Brand/Surface/surface-800": "#aab1bc",
        "Brand/Text/Text-400": "#98A0B3",
        "Accent/Danger/Danger-800": "#C92014",
        "Accent/Success/Success-800": "#00BD7E",
        "Shade/Shade1": "#191919",
        "Brand/Primary/Primary-800": "#03045E",
        "Gray/10": "#E5E5EA",
        "text/text-secondary": "#7C7C7C",
        "Text/Text-600": "#4E5668",
        "Surface/surface-600": "#CFD7E2",
        "Shade/Shade2": "#696969",
      },
      fontFamily: {
        DarkerGrotesque: ["Darker Grotesque"],
      },
    },
  },
  plugins: [],
};
