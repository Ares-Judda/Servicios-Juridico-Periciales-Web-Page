import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../theme';
import { Scale, Fingerprint, GraduationCap, Microscope, ShieldCheck, MapPin } from 'lucide-react';

const Section = styled.section`
  padding: 100px 10%;
  background: ${theme.colors.bg};
`;

const CategoryTitle = styled.h3`
  font-family: ${theme.fonts.serif};
  color: ${theme.colors.gold};
  font-size: 1.8rem;
  margin: 40px 0 20px;
  display: flex;
  align-items: center;
  gap: 15px;
  border-bottom: 1px solid ${theme.colors.border};
  padding-bottom: 10px;
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

const ServiceCard = styled(motion.div)`
  background: ${theme.colors.card};
  padding: 25px;
  border: 1px solid ${theme.colors.border};
  border-radius: 4px;
  
  h4 {
    color: white;
    font-family: ${theme.fonts.sans};
    font-size: 0.9rem;
    letter-spacing: 1px;
    margin-bottom: 10px;
    text-transform: uppercase;
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    color: ${theme.colors.textMuted};
    font-size: 0.85rem;
    line-height: 1.6;
  }

  li::before {
    content: "•";
    color: ${theme.colors.gold};
    margin-right: 8px;
  }
`;

export const Specialties = () => {
  return (
    <Section id="servicios">
      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <p style={{ color: theme.colors.gold, letterSpacing: '3px', fontSize: '12px' }}>CATÁLOGO INTEGRAL</p>
        <h2 style={{ fontFamily: theme.fonts.serif, fontSize: '3rem', marginBottom: '40px' }}>Nuestros <span style={{ fontStyle: 'italic' }}>Servicios</span></h2>

        {/* --- MATERIA JURÍDICA --- */}
        <CategoryTitle><Scale size={24}/> Materia Jurídica</CategoryTitle>
        <ServiceGrid>
          <ServiceCard whileHover={{ borderColor: theme.colors.gold }}>
            <h4>Asesoría y Convenios</h4>
            <ul>
              <li>Consultoría Jurídica y Asesoría Legal</li>
              <li>Elaboración de Convenios y Contratos</li>
              <li>Procedimientos ante PROFECO</li>
            </ul>
          </ServiceCard>
          <ServiceCard whileHover={{ borderColor: theme.colors.gold }}>
            <h4>Tránsito y Litigio</h4>
            <ul>
              <li>Atención en Accidentes Automovilísticos</li>
              <li>Recuperación de Vehículos</li>
              <li>Juntas de Conciliación y Arbitraje</li>
            </ul>
          </ServiceCard>
          <ServiceCard style={{ borderStyle: 'dashed' }}>
            <div style={{ display: 'flex', gap: '10px', color: theme.colors.gold }}>
              <MapPin size={18}/>
              <p style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>COBERTURA NACIONAL</p>
            </div>
            <p style={{ color: theme.colors.textMuted, fontSize: '0.8rem' }}>Realizamos trámites en CDMX y toda la República Mexicana.</p>
          </ServiceCard>
        </ServiceGrid>

        {/* --- MATERIA PERICIAL --- */}
        <CategoryTitle><Fingerprint size={24}/> Materia Pericial</CategoryTitle>
        <ServiceGrid>
          <ServiceCard whileHover={{ borderColor: theme.colors.gold }}>
            <h4>Criminalística y Forense</h4>
            <ul>
              <li>Dactiloscopía y Grafoscopía (Cotejo)</li>
              <li>Documentoscopía y Grafología</li>
              <li>Criminalística de Campo y Acústica</li>
            </ul>
          </ServiceCard>
          <ServiceCard whileHover={{ borderColor: theme.colors.gold }}>
            <h4>Genética y Tránsito</h4>
            <ul>
              <li>Genética Forense (Paternidad)</li>
              <li>Peritajes en Tránsito Terrestre</li>
              <li>Venta de Reactivos Forenses</li>
            </ul>
          </ServiceCard>
          <ServiceCard whileHover={{ borderColor: theme.colors.gold }}>
            <h4>Análisis Especializado</h4>
            <ul>
              <li>Test Grafológicos Laborales</li>
              <li>Identificación Decadactilar (Escolar/Empresarial)</li>
              <li>Análisis de Dibujo y Garabato Infantil</li>
            </ul>
          </ServiceCard>
        </ServiceGrid>

        {/* --- EDUCACIÓN CONTINUA --- */}
        <CategoryTitle><GraduationCap size={24}/> Capacitación y Eventos</CategoryTitle>
        <div style={{ background: theme.colors.card, padding: '40px', border: `1px solid ${theme.colors.gold}44` }}>
          <p style={{ color: 'white', lineHeight: '1.8', textAlign: 'center' }}>
            Realizamos <strong>Cursos, Talleres, Conferencias, Simposiums y Diplomados</strong> en vinculación con Barras, Colegios y Universidades nacionales y extranjeras.
          </p>
          <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <button style={{ background: theme.colors.gold, color: 'black', border: 'none', padding: '12px 25px', fontWeight: 'bold', cursor: 'pointer' }}>
              SOLICITAR CARPETA DE EDUCACIÓN CONTINUA
            </button>
          </div>
        </div>
      </motion.div>
    </Section>
  );
};