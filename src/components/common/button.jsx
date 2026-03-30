// src/components/common/Button.jsx
import React from 'react';

/**
 * Componente de botón reutilizable siguiendo principios DRY y A11y.
 * @param {string} children - Contenido del botón.
 * @param {function} onClick - Acción al hacer clic.
 * @param {string} variant - Estilo (primary, secondary).
 */
const Button = ({ children, onClick, variant = 'primary', ...props }) => {
  const baseStyles = "px-6 py-3 rounded-lg font-semibold transition-all duration-300 focus:ring-4 focus:outline-none";
  
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-300",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-100"
  };

  return (
    <button 
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]}`}
      // Soporte para lectores de pantalla
      aria-label={typeof children === 'string' ? children : 'botón'}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;