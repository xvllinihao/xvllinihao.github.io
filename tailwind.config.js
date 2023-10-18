/*
 * @Author: xvllinihao lixu_work@yahoo.com
 * @Date: 2023-10-14 14:50:59
 * @LastEditors: xvllinihao lixu_work@yahoo.com
 * @LastEditTime: 2023-10-15 21:05:28
 * @FilePath: \xvllinihao.github.io\tailwind.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'jin-yellow' : '#c4b9a5',
        'jin-blue': '#2b3245',
        'jin-gray' : '#a9afad',
        'jin-white': '#e0dcd1',
      },
      fontFamily: {
        'display': ['Oswald'],
      },
      fotnSize: {
        'base': '20px',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

