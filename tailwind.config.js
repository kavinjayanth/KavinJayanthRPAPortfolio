/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Black / charcoal scale
        ink: {
          950: '#050506',
          900: '#0a0a0c',
          850: '#0e0e12',
          800: '#131318',
          700: '#1b1b22',
          600: '#25252e',
          500: '#34343f',
        },
        // Electric blue accent
        accent: {
          DEFAULT: '#2f7bff',
          300: '#8ab9ff',
          400: '#5b9bff',
          500: '#2f7bff',
          600: '#1f63e0',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(47,123,255,0.25), 0 12px 40px -12px rgba(47,123,255,0.35)',
        'glow-lg': '0 0 80px -10px rgba(47,123,255,0.45)',
      },
    },
  },
  plugins: [],
};
