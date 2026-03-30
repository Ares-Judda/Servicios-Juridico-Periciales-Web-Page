import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X } from 'lucide-react';
import { theme } from '../theme';

const Nav = styled.nav`
  position: fixed;
  top: 0; left: 0; width: 100%;
  height: 90px;
  background: rgba(13, 13, 11, 0.95);
  backdrop-filter: blur(15px);
  border-bottom: 1px solid ${theme.colors.border};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5%;
  z-index: 10000;
  box-sizing: border-box;
`;

const Logo = styled.div`
  font-family: ${theme.fonts.serif};
  .brand { color: ${theme.colors.gold}; font-size: 1.1rem; font-weight: bold; letter-spacing: 1px; }
  .subtitle { color: ${theme.colors.textMuted}; font-size: 0.65rem; letter-spacing: 2px; text-transform: uppercase; }
`;

const NavList = styled.ul`
  display: flex;
  gap: 25px;
  list-style: none;
  align-items: center;
  @media (max-width: 1100px) { display: none; }
`;

const NavItem = styled.li`
  position: relative;
  cursor: pointer;
  color: ${theme.colors.textMuted};
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 1.5px;
  display: flex;
  align-items: center;
  gap: 5px;
  transition: color 0.3s;
  &:hover { color: ${theme.colors.gold}; }
`;

const Dropdown = styled(motion.ul)`
  position: absolute;
  top: 40px;
  left: -20px;
  background: ${theme.colors.card};
  border: 1px solid ${theme.colors.border};
  padding: 20px;
  width: 220px;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 15px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.5);
`;

const DropLink = styled.a`
  color: ${theme.colors.textMuted};
  text-decoration: none;
  font-size: 0.7rem;
  transition: 0.3s;
  &:hover { color: ${theme.colors.gold}; padding-left: 5px; }
`;

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const menuItems = {
    institucional: {
      label: 'NOSOTROS',
      links: [
        { n: 'BIENVENIDOS', h: '#' },
        { n: 'RESEÑA CURRICULAR', h: '#sobre-mi' },
        { n: 'DECALOGO DEL PERITO', h: '#decalogo' },
        { n: 'LEGISLACIÓN', h: '#legislacion' }
      ]
    },
    servicios: {
      label: 'PERITACIONES',
      links: [
        { n: 'PERITAJES', h: '#servicios' },
        { n: 'SOBRE LOS PERITAJES', h: '#sobre-peritajes' },
        { n: 'INVESTIGACIONES', h: '#investigaciones' },
        { n: 'AVANCES TECNOLÓGICOS', h: '#avances' },
        { n: 'ESPECIALIDADES FORENSES', h: '#servicios' }
      ]
    },
    recursos: {
      label: 'COMUNIDAD',
      links: [
        { n: 'IMÁGENES', h: '#galeria' },
        { n: 'EVENTOS', h: '#eventos' },
        { n: 'LINKS DE INTERÉS', h: '#links' },
        { n: 'LIBRO DE VISITANTES', h: '#testimonios' }
      ]
    }
  };

  return (
    <Nav>
      <Logo>
        <div className="brand">Jurídico Pericial</div>
        <div className="subtitle">Lic. Julietina Rivera Soto</div>
      </Logo>

      <NavList>
        <NavItem><a href="#" style={{all:'unset'}}>INICIO</a></NavItem>
        
        {Object.keys(menuItems).map((key) => (
          <NavItem 
            key={key}
            onMouseEnter={() => setActiveMenu(key)}
            onMouseLeave={() => setActiveMenu(null)}
          >
            {menuItems[key].label} <ChevronDown size={12} />
            <AnimatePresence>
              {activeMenu === key && (
                <Dropdown 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                >
                  {menuItems[key].links.map(link => (
                    <li key={link.n}><DropLink href={link.h}>{link.n}</DropLink></li>
                  ))}
                </Dropdown>
              )}
            </AnimatePresence>
          </NavItem>
        ))}
        
        <NavItem><a href="#tienda" style={{all:'unset'}}>TIENDA EN LÍNEA</a></NavItem>
      </NavList>
    </Nav>
  );
};

export default Navbar;