/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}"
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        gilroyRegular: "GilroyRegular",
        gilroyHeavy: "GilroyHeavy",
        sairaCondensedRegular: "SairaCondensedRegular",
        sairaCondensedBold: "SairaCondensedBold"
      },
      colors: {
        "cus-bg": "#EDE3E1",
        "cus-light-brown": "#DCB5A4",
        "cus-dark-brown": "#CC876A",
        "cus-white-transparent": "rgba(255, 255, 255, 0.4)"
      }
    },
  },
  plugins: [],
}