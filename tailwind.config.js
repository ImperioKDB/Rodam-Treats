/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        background: 'oklch(98% .01 80 / <alpha-value>)',
        cream: 'oklch(96% .02 85 / <alpha-value>)',
        cocoa: 'oklch(38% .1 45 / <alpha-value>)',
        foreground: 'oklch(28% .06 45 / <alpha-value>)',
        gold: 'oklch(82% .16 75 / <alpha-value>)',
        muted: 'oklch(55% .06 55 / <alpha-value>)',
        border: 'oklch(88% .04 75 / <alpha-value>)',
        whatsapp: 'oklch(72% .22 155 / <alpha-value>)'
      },
      boxShadow: {
        cocoa: '0 24px 60px -24px oklch(38% .1 45 / .28)',
        soft: '0 12px 30px -18px oklch(38% .1 45 / .22)'
      },
      borderRadius: {
        '4xl': '2rem'
      }
    }
  },
  plugins: []
};