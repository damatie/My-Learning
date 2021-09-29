module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        'primary': '#17252A',
        'success': '#3AAFA9',
        'call-to-action': '#2B7A78',
        'accent': '#DEF2F1',
        'tips': '#19A2F6',
        'text-low': '#696969',
        'text-low-light': '#737373',
        'text-lower-ops': '#D6D6D6',
        'complimentary': '#7A2B2D',
        'error': '#F56B6B'
      },
      textColor: {
        'primary': '#17252A',
        'success': '#3AAFA9',
        'call-to-action': '#2B7A78',
        'accent': '#DEF2F1',
        'tips': '#19A2F6',
        'text-low': '#696969',
        'text-low-light': '#737373',
        'text-lower-ops': '#D6D6D6',
        'complimentary': '#7A2B2D',
        'error': '#F56B6B'
      },
      fontSize: {
        'xlg':'30px',
        'md':'25px',
        'xbase':'15px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
