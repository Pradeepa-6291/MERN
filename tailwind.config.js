/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FC8019',      // Vibrant orange
        secondary: '#FF5722',    // Darker orange for buttons/CTA
        accent: '#4CAF50',       // Fresh green for offers
        cardBg: '#FFF3E0',       // Light warm card background
        offer: '#FFB400',        // Offer yellow
        highlight: '#FF7043',    // Highlight elements
        muted: '#9E9E9E',        // Secondary text
        coolBlue: '#00B0FF',     // Accent blue
        freshGreen: '#C8E6C9',   // Soft green for backgrounds
      },
      backgroundImage: {
        'gradient-radial-mix': 'radial-gradient(circle at 30% 30%, #FC8019 0%, #FFCC80 50%, #FFF3E0 100%)',
        'gradient-linear-mix': 'linear-gradient(135deg, #FFCC80 0%, #FF7043 50%, #FFE0B2 100%)',
        'gradient-card': 'linear-gradient(145deg, #FFECB3, #FFD54F, #FFB74D)',
      },
      boxShadow: {
        card: '0 4px 12px rgba(0,0,0,0.1)',
        hover: '0 8px 20px rgba(0,0,0,0.15)',
      },
      borderRadius: {
        sm: '6px',
        md: '12px',
        lg: '20px',
        xl: '28px',
        full: '9999px',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        display: ['Roboto', 'sans-serif'],
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        26: '6.5rem',
      },
      transitionTimingFunction: {
        'in-out-quad': 'cubic-bezier(0.455, 0.03, 0.515, 0.955)',
      },
    },
  },
  plugins: [],
}
