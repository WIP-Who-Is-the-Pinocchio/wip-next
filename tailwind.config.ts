import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/constants/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: '#0E97FF',
        'primary-border': '#E9D5FF',
        'primary-text': '#9333EA',
        gray: '#F8F8F8',
        deepGray: '#848484',
        minjoo: '#17288B',
        kookmin: '#E60024',
        justice: '#007C36',
      },
      boxShadow: {
        box: '0px 0px 4px 0px #E8E8E8',
      },
      borderRadius: {
        basic: '12px',
      },
    },
  },
  plugins: [],
};
export default config;
