import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        darkBlue: 'var(--darkBlue)',
        lightBlue: 'var(--lightBlue)',
        white: 'var(--white)',
        offWhite: 'var(--offWhite)',
        lightBlueHover: 'var(--lightBlueHover)',
        darkerBlue: 'var(--darkerBlue)',
        darkestBlue: 'var(--darkestBlue)',
        neonBlue: 'var(--neonBlue)',
        contactLightGray: 'var(--contactLightGray)',
        contactDarkGray: 'var(--contactDarkGray)',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
} satisfies Config;
