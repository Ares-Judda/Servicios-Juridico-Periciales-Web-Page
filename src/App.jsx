import React from 'react';
import styled from 'styled-components';

// 1. Importación de Componentes Modulares
import { theme } from './theme';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { Specialties } from './components/Specialties';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';

// 2. Contenedor Principal (Arquitectura de fondo)
const MainWrapper = styled.div`
  background-color: ${theme.colors.bg};
  color: white;
  min-height: 100vh;
  /* Suavizado de scroll para una mejor UX */
  scroll-behavior: smooth; 
`;

// 3. Sección de Llamada a la Acción (CTA) Final
const CTASection = styled.section`
  padding: 100px 10%;
  text-align: center;
  background: linear-gradient(to top, #080807, ${theme.colors.bg});
  border-top: 1px solid ${theme.colors.border};

  h2 {
    font-family: ${theme.fonts.serif};
    font-size: clamp(2rem, 4vw, 3rem);
    margin-bottom: 10px;
  }

  p {
    color: ${theme.colors.textMuted};
    margin-bottom: 40px;
    font-size: 0.9rem;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

const PrimaryButton = styled.button`
  background: ${theme.colors.gold};
  color: black;
  border: none;
  padding: 18px 45px;
  font-weight: bold;
  font-family: ${theme.fonts.sans};
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(197, 160, 89, 0.3);
  }
`;

const SecondaryButton = styled.button`
  background: transparent;
  color: white;
  border: 1px solid ${theme.colors.gold};
  padding: 18px 45px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background: rgba(197, 160, 89, 0.1);
  }
`;

function App() {
  return (
    <MainWrapper>
      {/* Capa de Navegación Fija */}
      <Navbar /> 
      
      <main>
        {/* Sección de Bienvenida y Estadísticas */}
        <Hero />

        {/* Especialidades (Sustituye al menú antiguo de Peritajes) */}
        <Specialties />

        {/* Reseña Curricular / Sobre Mí */}
        <About />

        {/* Libro de Visitantes / Testimonios */}
        <Testimonials />

        {/* Sección de Contacto Final */}
        <CTASection id="contacto">
          <h2 data-aos="fade-up">
            ¿Necesitas un <span style={{ color: theme.colors.gold, fontStyle: 'italic' }}>peritaje</span> o asesoría legal?
          </h2>
          <p>Primera consulta informativa sin costo. Respuesta en menos de 24 horas.</p>
          
          <ButtonGroup>
            <PrimaryButton onClick={() => window.open('https://wa.me/TUNUMERO', '_blank')}>
              WHATSAPP DIRECTO
            </PrimaryButton>
            <SecondaryButton>
              FORMULARIO DE CONTACTO
            </SecondaryButton>
          </ButtonGroup>
        </CTASection>
      </main>

      {/* Footer con Links, Legislación y Créditos */}
      <Footer />
    </MainWrapper>
  );
}

export default App;