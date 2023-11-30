import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        brand: '#b4ff5c',
        dark: '#0a0909',
        facebook: {
          background: '#3a3b3c',
          title: '#E4E6EB',
          url: '#B0B3B8'
        },
        light: '#f5f3f3',
        linkedin: {
          background: '#1b1f23',
          border: '#ffffff2e'
        },
        slack: {
          background: '#35373b',
          description: '#d1d2d3',
          title: '#1d9bd1',
          url: '#d1d2d3'
        },
        twitter: {
          border: '#2f3336',
          title: '#e7e9ea',
          url: '#9d99997a'
        }
      },
      fontFamily: {
        helvetica: 'Helvetica, Arial, sans-serif'
      }
    },
  },
  plugins: [],
}
export default config
