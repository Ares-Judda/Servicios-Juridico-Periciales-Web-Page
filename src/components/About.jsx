import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../theme';
import { Award, Book, Globe, Shield, CheckCircle } from 'lucide-react';
import image from '../assets/JULY3.jpg';

const AboutSection = styled.section`
  padding: 100px 8%;
  background: ${theme.colors.bg};
`;

const ProfileGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 60px;
  @media (max-width: 1024px) { grid-template-columns: 1fr; }
`;

const StickyProfile = styled.div`
  position: sticky;
  top: 120px;
  height: fit-content;
  background: ${theme.colors.card};
  padding: 40px;
  border: 1px solid ${theme.colors.border};
  text-align: center;
`;

const ExperienceScroll = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const InfoBlock = styled.div`
  margin-bottom: 30px;
  h4 {
    color: ${theme.colors.gold};
    font-family: ${theme.fonts.serif};
    font-size: 1.2rem;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  ul {
    list-style: none;
    padding: 0;
    li {
      color: ${theme.colors.textMuted};
      font-size: 0.9rem;
      line-height: 1.6;
      margin-bottom: 12px;
      padding-left: 20px;
      position: relative;
      &::before {
        content: "→";
        position: absolute;
        left: 0;
        color: ${theme.colors.gold};
      }
    }
  }
`;

const CertTag = styled.span`
  background: rgba(197, 160, 89, 0.1);
  color: ${theme.colors.gold};
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.7rem;
  border: 1px solid ${theme.colors.gold}44;
  margin: 5px;
  display: inline-block;
`;

export const About = () => {
  return (
    <AboutSection id="sobre-mi">
      <p style={{ color: theme.colors.gold, letterSpacing: '3px', fontSize: '12px' }}>CURRICULUM VITAE</p>
      <h2 style={{ fontFamily: theme.fonts.serif, fontSize: '3.5rem', marginBottom: '60px' }}>
        Reseña <span style={{ fontStyle: 'italic', fontWeight: '400' }}>Curricular</span>
      </h2>

      <ProfileGrid>
        {/* Lado Izquierdo: Resumen Rápido */}
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
          <StickyProfile>
            <div style={{ 
                width: '150px', 
                height: '150px', 
                background: '#222', 
                borderRadius: '50%', 
                margin: '0 auto 20px', 
                border: `2px solid ${theme.colors.gold}`,
                overflow: 'hidden' // Importante para que la imagen no se salga del círculo
                }}>
                <img 
                    src={image} 
                    alt="Lic. Julietina Rivera" 
                    style={{
                    width: '100%', 
                    height: '100%', 
                    objectFit: 'cover', // Esto mantiene la proporción de la cara
                    objectPosition: 'center' 
                    }} 
                />
                <motion.img 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                src={image} 
                alt="Lic. Julietina Rivera" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
            </div>
            <h3 style={{ fontFamily: theme.fonts.serif, fontSize: '1.5rem', marginBottom: '5px' }}>Lic. Julietina Rivera Soto</h3>
            <p style={{ color: theme.colors.gold, fontSize: '0.7rem', letterSpacing: '2px', marginBottom: '20px' }}>PERITO CERTIFICADO TSJ VERACRUZ</p>
            
            <div style={{ textAlign: 'left', marginTop: '30px' }}>
              <CertTag>STPS Capacitador</CertTag>
              <CertTag>AMECIPE</CertTag>
              <CertTag>CONACRIM</CertTag>
              <CertTag>JUEXFORE</CertTag>
            </div>
          </StickyProfile>
        </motion.div>

        {/* Lado Derecho: Detalles de Trayectoria */}
        <ExperienceScroll>
          <InfoBlock>
            <h4><Book size={20} /> Formación y Presidencia</h4>
            <ul>
              <li>Licenciada en Derecho por la Universidad Veracruzana.</li>
              <li>Presidente del Foro Mexicano Jurídico-Pericial con Proyección Social A.C. (JUEXFORE).</li>
              <li>Socio Fundador y Presidente del Grupo Estatal de Peritos Profesionales A.C. (GEPP).</li>
            </ul>
          </InfoBlock>

          <InfoBlock>
            <h4><Shield size={20} /> Peritajes Especializados</h4>
            <ul>
              <li>Mención Honorífica en Criminalística por el Colegio Nacional de Expertos Forenses (CONAEFO).</li>
              <li>Perito en Grafología Forense por el INACIPE.</li>
              <li>Perito Criminalista inscrito en el Registro Estatal del H. Tribunal Superior de Justicia.</li>
              <li>Representante de ADN/GEN como Perito en Genética en el Estado de Veracruz.</li>
            </ul>
          </InfoBlock>

          <InfoBlock>
            <h4><Globe size={20} /> Proyección Internacional y Nacional</h4>
            <ul>
              <li>Relatora y Ponente Internacional: Perú, Chile y Argentina.</li>
              <li>Ponente Nacional en más de 10 estados de la República Mexicana.</li>
              <li>Miembro Afiliado de la Asociación Latinoamericana de Química Forense.</li>
            </ul>
          </InfoBlock>

          <InfoBlock>
            <h4><Award size={20} /> Representaciones de Alto Nivel</h4>
            <ul>
              <li>Perito Asesor de la Comisión Nacional de Derechos Humanos (CNDH).</li>
              <li>Representante Estatal de la Academia Mexicana de Ciencias Periciales (AMECIPE).</li>
              <li>Representante Estatal del Colegio Nacional de Criminología y Ciencias Forenses.</li>
            </ul>
          </InfoBlock>
          
          <div style={{ padding: '30px', background: 'rgba(255,255,255,0.03)', borderLeft: `4px solid ${theme.colors.gold}` }}>
            <p style={{ fontSize: '0.9rem', color: 'white', fontStyle: 'italic' }}>
              "Ponente e Instructora en instituciones como la Universidad Veracruzana, Universidad de Xalapa, CLEU y diversas academias de seguridad en México."
            </p>
          </div>
        </ExperienceScroll>
      </ProfileGrid>
    </AboutSection>
  );
};