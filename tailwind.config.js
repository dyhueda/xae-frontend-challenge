/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'texture' : "url('https://i.postimg.cc/HsRVpMDN/texture2.png')"
      },
      backgroundPosition:{
        'more-right' : 'top 30% right 500%'
      }

    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

