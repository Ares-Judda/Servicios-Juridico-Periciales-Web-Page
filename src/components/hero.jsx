import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../theme';
import { ChevronDown } from 'lucide-react';

const HeroContainer = styled.section`
  min-height: 100vh;
  padding: 120px 8% 60px;
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  align-items: center;
  gap: 40px;
  @media (max-width: 1024px) { grid-template-columns: 1fr; padding-top: 150px; }
`;

const Badge = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  color: ${theme.colors.gold};
  font-size: 0.7rem;
  letter-spacing: 3px;
  margin-bottom: 30px;
  &::before { content: ''; width: 40px; height: 1px; background: ${theme.colors.gold}; }
`;

const Title = styled.h1`
  font-family: ${theme.fonts.serif};
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  line-height: 1.1;
  color: white;
  margin-bottom: 30px;
  span { color: ${theme.colors.gold}; font-style: italic; font-weight: 400; }
`;

const StatsGrid = styled(motion.div)`
  background: #121210;
  border-radius: 8px;
  padding: 40px;
  border: 1px solid rgba(255,255,255,0.05);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
`;

const Tag = styled.span`
  background: rgba(197, 160, 89, 0.1);
  border: 1px solid rgba(197, 160, 89, 0.2);
  color: ${theme.colors.goldLight || '#F1D279'};
  padding: 5px 12px;
  font-size: 0.7rem;
  border-radius: 4px;
  margin: 5px;
  display: inline-block;
`;

const Hero = () => {
  const containerVars = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  const itemVars = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <HeroContainer>
      <motion.div variants={containerVars} initial="hidden" animate="visible">
        <Badge variants={itemVars}>CIENCIA Y PERICIA EN LA PROCURACIÓN DE JUSTICIA</Badge>
        <Title variants={itemVars}>Pericia forense al servicio de la <span>justicia</span></Title>
        <motion.p variants={itemVars} style={{ color: theme.colors.textMuted, maxWidth: '500px', lineHeight: '1.6', marginBottom: '40px' }}>
          Consultoría jurídica, peritajes forenses y capacitación especializada. Más de 25 años de experiencia en toda la República Mexicana.
        </motion.p>
        
        <motion.div variants={itemVars} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <button style={{ background: 'white', color: 'black', border: 'none', padding: '18px 40px', fontWeight: 'bold', width: 'fit-content', cursor: 'pointer' }}>SOLICITAR PERITAJE</button>
          <button style={{ background: 'transparent', color: 'white', border: '1px solid #333', padding: '15px 40px', fontWeight: 'bold', width: 'fit-content', cursor: 'pointer' }}>VER SERVICIOS</button>
        </motion.div>
      </motion.div>

      <StatsGrid initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5, duration: 1 }}>
        <p style={{ color: theme.colors.gold, fontSize: '0.7rem', letterSpacing: '2px', marginBottom: '30px' }}>TRAYECTORIA PROFESIONAL</p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px', marginBottom: '40px' }}>
          <div>
            <div style={{ color: theme.colors.gold, fontSize: '2.5rem', fontFamily: theme.fonts.serif }}>25+</div>
            <div style={{ color: theme.colors.textMuted, fontSize: '0.6rem', letterSpacing: '1px' }}>AÑOS DE EXPERIENCIA</div>
          </div>
          <div>
            <div style={{ color: theme.colors.gold, fontSize: '2.5rem', fontFamily: theme.fonts.serif }}>500+</div>
            <div style={{ color: theme.colors.textMuted, fontSize: '0.6rem', letterSpacing: '1px' }}>PERITAJES REALIZADOS</div>
          </div>
          <div>
            <div style={{ color: theme.colors.gold, fontSize: '2.5rem', fontFamily: theme.fonts.serif }}>8</div>
            <div style={{ color: theme.colors.textMuted, fontSize: '0.6rem', letterSpacing: '1px' }}>ESPECIALIDADES fORENSES</div>
          </div>
          <div>
            <div style={{ color: theme.colors.gold, fontSize: '2.5rem', fontFamily: theme.fonts.serif }}>32</div>
            <div style={{ color: theme.colors.textMuted, fontSize: '0.6rem', letterSpacing: '1px' }}>ESTADOS ATENDIDOS</div>
          </div>
        </div>
        <div>
          <Tag>STPS registrada</Tag>
          <Tag>Recibos de honorarios</Tag>
          <Tag>ADN forense</Tag>
        </div>
      </StatsGrid>

      <motion.div 
        animate={{ y: [0, 10, 0] }} 
        transition={{ repeat: Infinity, duration: 2 }}
        style={{ gridColumn: '1 / -1', justifySelf: 'center', marginTop: '40px', color: '#333' }}
      >
        <ChevronDown size={32} />
      </motion.div>
    </HeroContainer>
  );
};

export default Hero;