/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      barlow: "https://fonts.google.com/specimen/Barlow",
      franuces: "https://fonts.google.com/specimen/Fraunces",
    },
    extend: {
      colors: {
        softRed: "hsl(7, 99%, 70%)",
        eggYellow: "hsl(51, 100%, 49%)",
        footerBg: "hsl(168, 34%, 41%)",
        footerText: "hsl(167, 40%, 24%)",
        photoText: "hsl(198, 62%, 26%)",
      },
      backgroundImage: {
        hero: "/public/images/desktop/hero.jpg",
      },
    },
  },
  plugins: [],
};
