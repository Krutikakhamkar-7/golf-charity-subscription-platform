import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          950: '#05070F',
          900: '#0B1220',
          800: '#121D32',
          700: '#1D2B44',
          emerald: '#0FCF97',
          blue: '#3B82F6',
          gold: '#F8C667'
        }
      },
      boxShadow: {
        glow: '0 25px 80px rgba(15,207,151,0.18)',
        soft: '0 20px 60px rgba(15,23,42,0.24)'
      },
      backgroundImage: {
        hero: 'radial-gradient(circle at top left, rgba(15,207,151,0.18), transparent 25%), radial-gradient(circle at bottom right, rgba(56,189,248,0.12), transparent 30%), linear-gradient(180deg, #05070F 0%, #0B1220 100%)'
      }
    }
  },
  plugins: []
};

export default config;
