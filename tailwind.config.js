module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        'primary': '#17252A',
        'primary-lighter': '#525252',
        'success': '#3AAFA9',
        'call-to-action': '#2B7A78',
        'accent': '#DEF2F1',
        'tips': '#19A2F6',
        'text-low': '#696969',
        'text-low-light': '#737373',
        'text-low-lighter': '#F8F8F8',
        'text-lower-ops': '#D6D6D6',
        'complimentary': '#7A2B2D',
        'error': '#F56B6B',
        'primary-yellow': '#F3C933'
      },
      borderColor:{
        'success':'#3AAFA9',
        'primary': '#17252A',
        'feature':'#4A4A4A',
        'call-to-action': '#2B7A78',
        'primary-yellow': '#F3C933'
      },
      textColor: {
        'about-content': '#23272B',
        'primary': '#17252A',
        'primary-lighter': '#525252',
        'success': '#3AAFA9',
        'call-to-action': '#2B7A78',
        'accent': '#DEF2F1',
        'tips': '#19A2F6',
        'text-low': '#696969',
        'text-low-light': '#737373',
        'text-lower-ops': '#D6D6D6',
        'complimentary': '#7A2B2D',
        'feature':'#4A4A4A',
        'error': '#F56B6B',
        'primary-yellow': '#F3C933'
      },
      height: {
        'h-big':'80vh',
      },
      fontSize: {
        'xlg':'30px',
        '2xlg':'55px',
        'md':'25px',
        'xbase':'15px'
      },
      animation: {
        'drop': 'drop 0.5s forwards',
        'turn': 'turn 0.4s forwards',
        'rturn': 'rturn 0.4s forwards'
      },
      keyframes: {
        drop: {
          '0%': {
            'transform': 'translateY(-25%)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)',
            'opacity':'0',
          },
          '100%': {
            'transform': 'translateY(0)',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)',
          }
        },
        turn: {
          '0%': {
            'transform': 'rotate(0deg)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)',
            // 'opacity':'0',
          },
          '100%': {
            'transform': 'rotate(90deg)',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)',
          }
        },
        rturn: {
          '0%': {
            'transform': 'rotate(90deg)',
            'animation-timing-function': 'cubic-bezier(0.8, 0, 1, 1)',
            // 'opacity':'0',
          },
          '100%': {
            'transform': 'rotate(0deg)',
            'animation-timing-function': 'cubic-bezier(0, 0, 0.2, 1)',
          }
        }
      },
      transitionProperty: {
        'height': '10',
        'spacing': '30, 20',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
