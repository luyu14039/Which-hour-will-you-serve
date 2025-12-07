/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Backgrounds
        void: '#0F0E11',
        onyx: '#1A181C',
        
        // Accents
        gold: {
          DEFAULT: '#C0A062',
          dim: '#8A7545', // Darker shade for gradients/borders
          light: '#D4B87A', // Lighter shade for highlights
          glow: '#F4E7C3', // New: Highlighting
        },
        blood: {
          DEFAULT: '#8A2626',
          dark: '#6B1B1B', // New: Darker blood for contrast
        },
        bruised: '#4B3B55',
        deepBruise: '#2D2436', // New: Deep purple background
        nightBlue: '#1B263B', // New: Cold contrast
        
        // Text
        parchment: '#E0D8C8',
        ash: '#8C8880',
      },
      fontFamily: {
        heading: ['Cinzel', '"Noto Serif SC"', 'serif'],
        body: ['"EB Garamond"', '"Noto Serif SC"', 'serif'],
        decorative: ['UnifrakturMaguntia', '"ZCOOL XiaoWei"', 'cursive'],
      },
      backgroundImage: {
        'noise': 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' opacity=\'1\'/%3E%3C/svg%3E")',
      },
      boxShadow: {
        'card': '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
        'glow-gold': '0 0 15px rgba(192, 160, 98, 0.3)',
        'glow-blood': '0 0 15px rgba(138, 38, 38, 0.3)',
      },
      keyframes: {
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        shimmer: 'shimmer 2s infinite',
      },
    },
  },
  plugins: [],
}
