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
