/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'rgb(var(--bg) / <alpha-value>)',
        surface: 'rgb(var(--surface) / <alpha-value>)',
        surface2: 'rgb(var(--surface2) / <alpha-value>)',
        border: 'rgb(var(--border) / <alpha-value>)',
        fg: 'rgb(var(--fg) / <alpha-value>)',
        muted: 'rgb(var(--muted) / <alpha-value>)',
        accent: 'rgb(var(--accent) / <alpha-value>)',
        accent2: 'rgb(var(--accent2) / <alpha-value>)',
        accent3: 'rgb(var(--accent3) / <alpha-value>)',
        accent4: 'rgb(var(--accent4) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
        blink: { '50%': { opacity: '0' } },
        pulseRing: {
          '0%': { boxShadow: '0 0 0 0 rgb(var(--accent2) / 0.6)' },
          '100%': { boxShadow: '0 0 0 10px rgb(var(--accent2) / 0)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        gradient: 'gradient 6s linear infinite',
        blink: 'blink 1s steps(1) infinite',
        pulseRing: 'pulseRing 1.8s ease-out infinite',
      },
    },
  },
  plugins: [],
}
