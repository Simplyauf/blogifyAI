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
        "Gray/1": "#1C1C1E",
        "Brand/Text/Text-800": "#252525",
        "text/text-secondary": "#7C7C7C",
        "Surface/surface-400": "#E6ECF4",
        "Brand/Surface/surface-200": "#EEF2F7",
        "Brand/Surface/surface-50": "#F5F7FA",
        "Brand/Surface/surface-800": "#aab1bc",
        "Brand/Text/Text-600": "#4E5668",
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
        "Brand/Primary/Primary-100": "#CDCDDF",
        "Brand/Primary/Primary-600": "#2D2E79",
        "Accent/Success/Success-100": "#EBFFF8",
        "Brand/Surface/surface-800": "#AAB1BC",
        "Accent/Warning/Warning-100": "#FFF8EB",
        "Accent/Warning/Warning-800": "#e39f17",
        "Accent/Danger/Danger-100": "#FFF3F2",
        "Secondary/Secondary-4": "#EBEEF0",
        "Secondary/Secondary-1": "#191919",
        "Secondary-Text": "#ADADAD",
        "Accent/Danger/Danger-200": "#FBB3AE",
        "Brand/Text/Text-100": "#F2F6FF",
        "Brand/Text/Text-200": "#C3CAD9",
        "Gray/200": "#EAECF0",
        "Gray/300": "#D0D5DD",
        "Shade/Shade2": "#696969",
        "Gray/50": "#F9FAFB",
        "Gray/500": "#667085",
        "Gray/700": "#344054",
        "Gray/900": "#101828",
        "Gray/200": "#EAECF0",
        "Gray/7": "#AEAEB2",
        "Primary/50": "#F9F5FF",
        "Success/50": "#ECFDF3",
        White: "#FFFFFF",
      },
      fontFamily: {
        DarkerGrotesque: ["Darker Grotesque", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
        DMSans: ["DM Sans"],
      },
    },
  },
  plugins: [],
};
