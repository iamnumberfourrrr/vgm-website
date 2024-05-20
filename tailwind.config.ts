import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        orange: {
          '400': '#DA9A00' // Tobacco Yellow
        },
        link: {
          'inactive': '#9D9D9D',
          'active': '#1A202C',
        },
        grey: {
          'button': 'rgba(128, 123, 116, 1)',
          'english': 'rgba(54, 48, 34, 0.3)',
          'product': 'rgba(97, 91, 79, 1)',
          'border': '#B9B9B9',
        },
        background: {
          'default': 'rgba(248, 247, 240, 0.76)',
          footer: '#EAE7DE',
        },
        tobacco: {
          'dark': '#363022',
        }
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
export default config;
