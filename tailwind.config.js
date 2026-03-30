/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta sofisticada
        'gold-primary': '#D4AF37',   // Dorado metálico
        'gold-light': '#F1D279',     // Dorado para contrastes
        'deep-black': '#0A0A0A',     // Negro profundo (fondo principal)
        'soft-gray': '#1C1C1C',      // Gris para tarjetas (regla de proximidad)
      },
      fontFamily: {
        // Títulos elegantes y cuerpo moderno
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}