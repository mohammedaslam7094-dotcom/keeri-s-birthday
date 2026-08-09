/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          950: '#140307',
          900: '#23070E',
          800: '#380B17',
          700: '#541023',
          600: '#751731',
          500: '#9B1F42',
        },
        wine: {
          950: '#18050B',
          900: '#2A0914',
          800: '#430F21',
          700: '#60162F',
          600: '#801E3F',
        },
        obsidian: '#0C0407',
        softBlack: '#12070B',
        blush: {
          50: '#FFF6F4',
          100: '#FDECE8',
          200: '#FBD4CC',
          300: '#F7B4A6',
          400: '#F18C79',
          500: '#E8664F',
        },
        roseAccent: {
          light: '#F472B6',
          DEFAULT: '#E11D48',
          dark: '#9F1239',
          glow: '#FB7185',
        },
        cream: {
          50: '#FDFBF7',
          100: '#FAF6EE',
          200: '#F5EFE3',
          300: '#ECE2D0',
          paper: '#FBF8F1',
        },
        gold: {
          100: '#FCF7E8',
          200: '#F7ECC8',
          300: '#EFDC9B',
          400: '#E4C767',
          500: '#D4AF37',
          600: '#B89327',
          700: '#8C6C1B',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Cinzel', 'Georgia', 'serif'],
        cinzel: ['Cinzel', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        script: ['"Great Vibes"', '"Caveat"', 'cursive'],
        handwriting: ['"Caveat"', 'cursive'],
      },
      backgroundImage: {
        'radial-vignette': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
        'romantic-mesh': 'radial-gradient(at 0% 0%, rgba(84, 16, 35, 0.4) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(212, 175, 55, 0.15) 0px, transparent 50%), radial-gradient(at 50% 50%, rgba(35, 7, 14, 0.8) 0px, transparent 100%)',
      },
      animation: {
        'float-slow': 'float 8s ease-in-out infinite',
        'float-medium': 'float 5s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
        'spin-slow': 'spin 18s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(2deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      screens: {
        'xs': '360px',
      },
    },
  },
  plugins: [],
}
