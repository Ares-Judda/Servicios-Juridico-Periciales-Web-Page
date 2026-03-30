import styled from 'styled-components';
import { Fingerprint, PenTool, Dna, Scale, Truck, GraduationCap } from 'lucide-react';
import { theme } from '../theme';

const Section = styled.section`
  padding: 100px 10%;
  background: ${theme.colors.bg};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 50px;
`;

const Card = styled.div`
  background: ${theme.colors.card};
  padding: 40px;
  border: 1px solid ${theme.colors.border};
  transition: all 0.4s ease;
  &:hover { border-color: ${theme.colors.gold}; transform: translateY(-5px); }
`;

const IconWrapper = styled.div`
  color: ${theme.colors.gold};
  margin-bottom: 20px;
`;

const CardTitle = styled.h3`
  font-family: ${theme.fonts.serif};
  color: ${theme.colors.gold};
  font-size: 1.5rem;
  margin-bottom: 15px;
`;

const specs = [
  { title: 'Dactiloscopía', icon: <Fingerprint />, desc: 'Identificación a través del análisis de huellas dactilares.' },
  { title: 'Grafoscopía', icon: <PenTool />, desc: 'Cotejo de firmas y análisis grafológico de documentos.' },
  { title: 'Genética Forense', icon: <Dna />, desc: 'Pruebas de ADN con validez ante tribunales certificados.' },
  { title: 'Consultoría Jurídica', icon: <Scale />, desc: 'Asesoría legal en contratos, convenios y juicios.' },
  { title: 'Tránsito Terrestre', icon: <Truck />, desc: 'Peritajes en accidentes y reconstrucción de hechos.' },
  { title: 'Capacitación Forense', icon: <GraduationCap />, desc: 'Cursos y diplomados con vinculación universitaria.' },
];

export const Specialties = () => (
  <Section id="servicios">
    <p style={{ color: theme.colors.gold, letterSpacing: '3px', fontSize: '12px' }}>LO QUE OFRECEMOS</p>
    <h2 style={{ fontFamily: theme.fonts.serif, fontSize: '3rem', marginTop: '10px' }}>
      Especialidades <span style={{ fontStyle: 'italic', fontWeight: 'normal' }}>forenses</span> y jurídicas
    </h2>
    <Grid>
      {specs.map((s, i) => (
        <Card key={i}>
          <IconWrapper>{s.icon}</IconWrapper>
          <CardTitle>{s.title}</CardTitle>
          <p style={{ color: theme.colors.textMuted, lineHeight: '1.6' }}>{s.desc}</p>
        </Card>
      ))}
    </Grid>
  </Section>
);