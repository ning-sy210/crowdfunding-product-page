/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],
  theme: {
    screens: {
      mb: "375px",
      dt: "1440px",
    },
    fontFamily: {
      sans: ["Commissioner", "sans-serif"],
    },
    fontSize: {
      h1: "1.953rem",
      h2: "1.563rem",
      h3: "1.25rem",
      h4: "1rem",
      h5: "0.85rem",
    },
    fontWeight: {
      normal: "400",
      medium: "500",
      bold: "700",
    },
    extend: {
      colors: {
        "primary-1": "hsl(176, 50%, 47%)",
        "primary-2": "hsl(176, 72%, 28%)",
        "neutral-1": "hsl(0, 0%, 0%)",
        "neutral-2": "hsl(0, 0%, 48%)",
      },
    },
  },
  plugins: [],
};
