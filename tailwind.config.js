/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-red': '#E50000',
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(180deg, rgba(26, 26, 26, 0) 0%, #1A1A1A 101.79%)',
        'bgImgs': 'url(/src/shared/media/imgs/background-images.png)',
        'slider-gradient':'linear-gradient(0deg, #141414 0%, rgba(20, 20, 20, 0) 100%)'
      },

    },
  },
  plugins: [],
}

