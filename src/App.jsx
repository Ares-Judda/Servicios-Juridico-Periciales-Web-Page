// src/App.jsx
import Navbar from './components/Navbar';
import Hero from './components/hero';
import { Specialties } from './components/Specialties';
import { About } from './components/About';
import { theme } from './theme';
import styled from 'styled-components';

const MainWrapper = styled.div`
  background-color: ${theme.colors.bg};
  color: white;
  min-height: 100vh;
`;

function App() {
  return (
    <MainWrapper>
      {/* ¡ESTE ES EL PASO CLAVE! Si no está aquí, no se verá */}
      <Navbar /> 
      
      <main>
        <Hero />
        <Specialties />
        <About />
      </main>

      {/* Footer CTA */}
      <section style={{ padding: '100px 10%', textAlign: 'center', background: 'linear-gradient(to top, #161614, #0D0D0B)' }}>
        <h2 style={{ fontFamily: theme.fonts.serif, fontSize: '2.5rem' }}>
          ¿Necesitas un <span style={{ color: theme.colors.gold }}>peritaje</span> o asesoría legal?
        </h2>
        <div style={{ marginTop: '40px', display: 'flex', justifyContent: 'center', gap: '20px' }}>
           <button style={{ background: theme.colors.gold, border: 'none', padding: '15px 40px', fontWeight: 'bold', cursor: 'pointer' }}>WHATSAPP DIRECTO</button>
           <button style={{ background: 'transparent', border: `1px solid ${theme.colors.gold}`, color: 'white', padding: '15px 40px', cursor: 'pointer' }}>FORMULARIO</button>
        </div>
      </section>
    </MainWrapper>
  );
}

export default App;