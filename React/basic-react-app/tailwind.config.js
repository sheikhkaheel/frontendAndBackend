/** @type {import('tailwindcss').Config} */
export default {
  content: ["*"],
  theme: {
    extend: {},
  },
  plugins: [],
}

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),],
    purge: {
      content: ["./src/Components/MasterPage/Main/Main.jsx","./src/Components/OtherComponents/Form/Form.jsx"], 
    },
}

