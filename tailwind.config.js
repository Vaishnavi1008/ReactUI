/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [//"index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        'custom-purple': '#8454fc',
      },
      width:{
        'w97' : "97%"
      }
    },
    screens: {
      // 'tablet': '640px',
      // // // => @media (min-width: 640px) { ... }

      //  'laptop': '1024px',
      // // // => @media (min-width: 1024px) { ... }

      //  'desktop': '1280px',
      // // => @media (min-width: 1280px) { ... }
      'sm': '640px',  // small screens
      'md': '768px',  // medium screens
      'lg': '1024px', // large screens
      'xl': '1280px', // extra-large screens
      '2xl': '1536px' // extra-extra-large screens
    },
  },

  plugins: [],
}

