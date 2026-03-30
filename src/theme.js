// src/theme.js
export const theme = {
  colors: {
    bg: '#0D0D0B',
    card: '#161614',
    gold: '#C5A059',
    goldDark: '#8E6F3E',
    text: '#FFFFFF',
    textMuted: '#A0A0A0',
    border: 'rgba(197, 160, 89, 0.2)',
  },
  fonts: {
    serif: "'Playfair Display', serif",
    sans: "'Inter', sans-serif",
  },
  // Agregamos esta función para corregir el error
  spacing: (unit) => `${unit * 8}px`, 
};