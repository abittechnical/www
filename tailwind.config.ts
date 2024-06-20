import typographyPlugin from '@tailwindcss/typography'
import { type Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

import typographyStyles from './typography'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'selector',
  plugins: [typographyPlugin],
  theme: {
    fontFamily: {
      sans: ['var(--font-sans)', ...fontFamily.sans],
      heading: ['var(--font-heading)', ...fontFamily.sans],
      mono: ['var(--font-mono)', ...fontFamily.mono],
    },
    fontSize: {
      xs: ['0.8125rem', { lineHeight: '1.5rem' }],
      sm: ['0.875rem', { lineHeight: '1.5rem' }],
      base: ['1rem', { lineHeight: '1.75rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '2rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '3.5rem' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    typography: typographyStyles,
    extend: {
      borderColor: {
        separator: 'var(--olive-4)',
        inert: 'var(--olive-6)',
        interactive: 'var(--olive-a7)',
        'interactive-hover': 'var(--olive-7)',
      },
      backgroundColor: {
        surface: 'var(--olive-2)',
        paper: 'var(--paper)',
        page: 'var(--page)',
      },
      colors: {
      },
      ringColor: {
        separator: 'var(--olive-4)',
      },

      textColor: {
        heading: 'var(--olive-12)',
        body: 'var(--olive-11)',
        'branded-light': 'var(--lime-10)',
        'branded-dark': 'var(--lime-11)',
        muted: 'var(--olive-10)',
        hint: 'var(--olive-9)',
      }
    }
  },
} satisfies Config
