// src/components/Testimonials.jsx
import styled from 'styled-components';
import { theme } from '../theme';
import { Quote } from 'lucide-react';

const TestimonialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 50px;
`;

const TestCard = styled.div`
  background: rgba(255,255,255,0.02);
  padding: 40px;
  border-left: 2px solid ${theme.colors.gold};
`;

export const Testimonials = () => (
  <section id="testimonios" style={{ padding: '100px 8%', background: theme.colors.bg }}>
    <p style={{ color: theme.colors.gold, letterSpacing: '3px', fontSize: '11px' }}>LIBRO DE VISITANTES</p>
    <h2 style={{ fontFamily: theme.fonts.serif, fontSize: '3rem' }}>Lo que dicen <span style={{ fontStyle: 'italic' }}>nuestros clientes</span></h2>
    <TestimonialGrid>
      <TestCard>
        <Quote color={theme.colors.gold} size={20} style={{ marginBottom: '15px' }} />
        <p style={{ color: theme.colors.textMuted, fontStyle: 'italic', lineHeight: '1.7' }}>
          "El peritaje en grafoscopía fue fundamental para resolver mi caso. Una atención impecable y profesional."
        </p>
        <p style={{ marginTop: '20px', fontWeight: 'bold', fontSize: '0.8rem' }}>LIC. RAMIRO GARCÍA</p>
      </TestCard>
      {/* Añade más testimonios aquí */}
    </TestimonialGrid>
  </section>
);