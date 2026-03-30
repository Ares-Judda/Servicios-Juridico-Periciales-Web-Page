import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../theme';

const Nav = styled.nav`
  position: fixed;
  top: 0; width: 100%;
  height: 80px;
  background: rgba(13, 13, 11, 0.8);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid ${theme.colors.border};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5%;
  z-index: 1000;
`;

const Logo = styled.div`
  font-family: ${theme.fonts.serif};
  line-height: 1;
  .brand { color: ${theme.colors.gold}; font-size: 1.2rem; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; }
  .name { color: ${theme.colors.textMuted}; font-size: 0.7rem; letter-spacing: 2px; }
`;

const NavLinks = styled.div`
  display: flex;
  gap: 30px;
  @media (max-width: 900px) { display: none; }
`;

const Link = styled.a`
  color: ${theme.colors.textMuted};
  text-decoration: none;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 1px;
  transition: color 0.3s;
  &:hover { color: ${theme.colors.gold}; }
`;

const CTAButton = styled(motion.button)`
  border: 1px solid ${theme.colors.gold};
  background: transparent;
  color: white;
  padding: 10px 20px;
  font-family: ${theme.fonts.serif};
  font-size: 0.9rem;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  &::before {
    content: ''; position: absolute; top: 0; left: -100%; width: 100%; height: 100%;
    background: linear-gradient(90deg, transparent, rgba(197, 160, 89, 0.2), transparent);
    transition: 0.5s;
  }
  &:hover::before { left: 100%; }
`;

const Navbar = () => (
  <Nav>
    <Logo>
      <div className="brand">Jurídico Pericial</div>
      <div className="name">LIC. JULIETINA</div>
    </Logo>
    <NavLinks>
      {['INICIO', 'SERVICIOS', 'SOBRE MÍ', 'TESTIMONIOS', 'BLOG'].map(item => (
        <Link key={item} href={`#${item.toLowerCase()}`}>{item}</Link>
      ))}
    </NavLinks>
    <CTAButton whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      CONSULTA GRATUITA
    </CTAButton>
  </Nav>
);

export default Navbar;