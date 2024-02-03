/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        VeryDarkBlue: 'hsl(220, 13%, 13%)',
        DarkgrayishBlue: 'hsl(219, 9%, 45%)',
        LightGrayishBlue: 'hsl(223, 64%, 98%)',
        White: 'hsl(0, 0%, 100%)',
        OrangeColor: 'hsl(26, 100%, 55%)',
        PaleOrange: 'hsl(25, 100%, 94%)',
        // Black (with 75% opacity for lightbox background): 'hsl(0, 0%, 0%)',

      },
      fontFamily: {
        Kumbh: ['Kumbh Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}

