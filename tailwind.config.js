/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],
  theme: {
    screens: {
      mb: "375px",
      tablet: "750px",
      dt: "1440px",
    },
    maxWidth: {
      card: "728px",
    },
    fontFamily: {
      sans: ["Commissioner", "sans-serif"],
    },
    fontSize: {
      1: "2rem",
      2: "1.563rem",
      3: "1.25rem",
      4: "1.13rem",
      5: "0.87rem",
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
      backgroundImage: {
        "hero-mobile": "url('./images/image-hero-mobile.jpg')",
        "hero-desktop": "url('./images/image-hero-desktop.jpg')",
      },
    },
  },
  plugins: [],
};
