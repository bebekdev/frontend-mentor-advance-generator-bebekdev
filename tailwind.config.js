module.exports = {
  content: ["index.html", "./src/**/*.{html,js}", "./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "light-cyan": "hsl(193, 38%, 86%)",
        "neon-green": "hsl(150, 100%, 66%)",
        "grayish-blue": "hsl(217, 19%, 38%)",
        "d-grayish-blue": "hsl(217, 19%, 24%)",
        "dark-blue": "hsl(218, 23%, 16%)",
      },
      fontFamily: {
        manrope: ["Manrope"],
      },
      dropShadow: {
        cs: "0 0px 1rem hsl(150, 100%, 66%)",
      },
    },
  },
  plugins: [],
};
