module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      fontSize: {
        '7xl': '5rem',
      }
    },
    
  },
  variants: {
    translate: ['responsive', 'hover', 'focus', 'group-hover', 'motion-safe'],
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    display: ['responsive', 'hover', 'focus'],
  },
  plugins: [],
}
