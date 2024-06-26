/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/components/**/*.{html,js,ts,vue}',
    './src/views/**/*.{html,js,ts,vue}'
  ],
  theme: {
    extend: {
      container: {
        center: true
      }
    }
  },
  plugins: []
}
