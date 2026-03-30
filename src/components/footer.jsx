import styled from 'styled-components';
import { theme } from '../theme';
import { Phone, Mail, MapPin } from 'lucide-react'; // Iconos para mejor UX

const FooterContainer = styled.footer`
  padding: 80px 8% 40px;
  background: #080807;
  border-top: 1px solid ${theme.colors.border};
`;

const FooterGrid = styled.div`
  display: grid;
  /* Ajustado a 4 columnas para que quepa todo perfecto */
  grid-template-columns: 1.5fr 1fr 1fr 1.2fr; 
  gap: 40px;
  
  @media (max-width: 1024px) { grid-template-columns: 1fr 1fr; }
  @media (max-width: 600px) { grid-template-columns: 1fr; }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  
  h4 {
    fontSize: 0.8rem;
    letterSpacing: 2px;
    color: white;
    margin-bottom: 10px;
    text-transform: uppercase;
  }

  a {
    color: ${theme.colors.textMuted};
    text-decoration: none;
    font-size: 0.85rem;
    display: flex;
    align-items: center;
    gap: 12px;
    transition: all 0.3s ease;
    &:hover { color: ${theme.colors.gold}; transform: translateX(5px); }
  }
`;

const FooterLink = styled.a`
  color: ${theme.colors.textMuted};
  text-decoration: none;
  font-size: 0.85rem;
  line-height: 2.2;
  transition: 0.3s;
  &:hover { color: ${theme.colors.gold}; }
`;

export const Footer = () => (
  <FooterContainer>
    <FooterGrid>
      {/* Columna 1: Branding */}
      <div>
        <h3 style={{ fontFamily: theme.fonts.serif, color: theme.colors.gold, fontSize: '1.2rem' }}>
          Servicios Jurídico Periciales
        </h3>
        <p style={{ color: theme.colors.textMuted, fontSize: '0.8rem', marginTop: '20px', lineHeight: '1.6' }}>
          Ciencia y ética aplicada a la procuración de justicia. Liderado por la Lic. Julietina Rivera Soto, con cobertura en toda la República Mexicana.
        </p>
      </div>

      {/* Columna 2: Navegación */}
      <div>
        <h4 style={{ fontSize: '0.8rem', letterSpacing: '2px', color: 'white', marginBottom: '20px' }}>SECCIONES</h4>
        <nav style={{ display: 'flex', flexDirection: 'column' }}>
          <FooterLink href="#inicio">Bienvenidos</FooterLink>
          <FooterLink href="#sobre-mi">Reseña Curricular</FooterLink>
          <FooterLink href="#servicios">Peritajes</FooterLink>
          <FooterLink href="#investigaciones">Investigaciones</FooterLink>
        </nav>
      </div>

      {/* Columna 3: Documentación */}
      <div>
        <h4 style={{ fontSize: '0.8rem', letterSpacing: '2px', color: 'white', marginBottom: '20px' }}>LEGAL</h4>
        <nav style={{ display: 'flex', flexDirection: 'column' }}>
          <FooterLink href="#decalogo">Decálogo del Perito</FooterLink>
          <FooterLink href="#legislacion">Legislación</FooterLink>
          <FooterLink href="#aviso">Aviso de Privacidad</FooterLink>
        </nav>
      </div>

      {/* Columna 4: Contacto Real de la página antigua */}
      <ContactInfo>
        <h4>CONTACTO</h4>
        <a href="tel:2281596542">
          <Phone size={16} color={theme.colors.gold} /> 228 159 6542
        </a>
        <a href="mailto:servicios_juridicopericiales@hotmail.com">
          <Mail size={16} color={theme.colors.gold} /> servicios_juridicopericiales@hotmail.com
        </a>
        <a href="#" style={{ cursor: 'default' }}>
          <MapPin size={16} color={theme.colors.gold} /> Cobertura Nacional
        </a>
      </ContactInfo>
    </FooterGrid>

    <div style={{ 
      marginTop: '60px', 
      textAlign: 'center', 
      borderTop: '1px solid rgba(255,255,255,0.05)', 
      paddingTop: '30px', 
      fontSize: '0.7rem', 
      color: '#444',
      letterSpacing: '1px'
    }}>
      © {new Date().getFullYear()} SERVICIOS JURÍDICO PERICIALES | DISEÑO DE ALTA GAMA PARA LA LIC. JULIETINA RIVERA SOTO
    </div>
  </FooterContainer>
);