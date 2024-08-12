/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
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
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        poppins: ["Poppins", "sans-serif"], // Adiciona a fonte Poppins
        "lexend-peta": ['"Lexend Peta"', "sans-serif"], // Adiciona a fonte Lexend Peta
        inter: ["Inter", "sans-serif"], // Adiciona a fonte Inter
      },
      screens: {
        "2xl": "1900px", // Adiciona a media query personalizada para 1900px
        "3xl": "2500px", // Adiciona a media query personalizada para 2500px
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar"), // Adiciona o plugin tailwind-scrollbar
  ],
};
