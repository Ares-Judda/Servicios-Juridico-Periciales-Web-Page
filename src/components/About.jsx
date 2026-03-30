import styled from 'styled-components';
import { theme } from '../theme';

const AboutSection = styled.section`
  display: flex;
  padding: 100px 10%;
  gap: 60px;
  align-items: center;
  background: ${theme.colors.bg};
  @media (max-width: 768px) { flex-direction: column; }
`;

const ProfileCard = styled.div`
  flex: 1;
  background: ${theme.colors.card};
  padding: 50px;
  text-align: center;
  border: 1px solid ${theme.colors.border};
`;

const TextContent = styled.div`
  flex: 1.5;
`;

export const About = () => (
  <AboutSection id="sobre-mi">
    <ProfileCard>
      <div style={{ width: '120px', height: '120px', background: '#333', borderRadius: '50%', margin: '0 auto 20px' }}>
        {/* Aquí va la foto de tu mamá */}
      </div>
      <h3 style={{ fontFamily: theme.fonts.serif, fontSize: '1.8rem' }}>Lic. Julietina Rivera Soto</h3>
      <p style={{ color: theme.colors.gold, fontSize: '0.8rem', letterSpacing: '2px' }}>DIRECTORA GENERAL</p>
    </ProfileCard>
    
    <TextContent>
      <p style={{ color: theme.colors.gold, letterSpacing: '2px', fontSize: '12px' }}>TRAYECTORIA</p>
      <h2 style={{ fontFamily: theme.fonts.serif, fontSize: '3rem', margin: '15px 0' }}>Ciencia, ética y experiencia</h2>
      <p style={{ color: theme.colors.textMuted, lineHeight: '1.8', marginBottom: '20px' }}>
        Con más de 25 años en el campo forense y jurídico, la Lic. Rivera ha brindado servicios periciales a particulares, empresas e instituciones en toda la República Mexicana.
      </p>
      <blockquote style={{ borderLeft: `2px solid ${theme.colors.gold}`, paddingLeft: '20px', fontStyle: 'italic', color: theme.colors.text }}>
        "Ética, experiencia y profesionalismo no negociables."
      </blockquote>
    </TextContent>
  </AboutSection>
);