import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { theme } from '../theme';
import { ChevronRight, Target, ClipboardList, PlayCircle, ShieldCheck } from 'lucide-react';

const Container = styled.section`
  padding: 100px 8%;
  background: ${theme.colors.bg};
`;

const PeritajeCard = styled(motion.div)`
  background: ${theme.colors.card};
  border: 1px solid ${theme.colors.border};
  margin-bottom: 20px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover { border-color: ${theme.colors.gold}; }
`;

const CardMain = styled.div`
  display: grid;
  grid-template-columns: 280px 1fr auto;
  align-items: center;
  gap: 30px;
  padding: 25px;
  @media (max-width: 900px) { grid-template-columns: 1fr; text-align: center; }
`;

const ImageContainer = styled.div`
  height: 160px;
  background: #1a1a18;
  border: 1px solid ${theme.colors.border};
  overflow: hidden;
  img { 
    width: 100%; height: 100%; object-fit: cover; 
    filter: grayscale(100%) contrast(1.2); 
    transition: 0.5s;
  }
  ${PeritajeCard}:hover & img { filter: grayscale(0%) contrast(1); transform: scale(1.05); }
`;

const ContentExpanded = styled(motion.div)`
  padding: 0 40px 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  border-top: 1px solid ${theme.colors.border};
  padding-top: 30px;
  @media (max-width: 768px) { grid-template-columns: 1fr; }
`;

const DetailBlock = styled.div`
  h5 {
    color: ${theme.colors.gold};
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 0.85rem;
    margin-bottom: 15px;
    letter-spacing: 2px;
    font-weight: bold;
  }
  p { color: white; font-size: 0.9rem; line-height: 1.6; margin-bottom: 15px; }
  ul {
    list-style: none; padding: 0;
    li {
      color: ${theme.colors.textMuted};
      font-size: 0.85rem;
      margin-bottom: 10px;
      padding-left: 20px;
      position: relative;
      &::before { content: "→"; position: absolute; left: 0; color: ${theme.colors.gold}; }
    }
  }
`;

const peritajesData = [
  {
    id: 'dacti',
    title: 'DACTILOSCOPIA',
    desc: 'Individualización de personas mediante el estudio de las crestas papilares.',
    objetivo: 'Determinar de manera indubitable la identidad de personas vivas o muertas a través de dactilogramas.',
    alcances: ['Rastreos en casa habitación, negocios y vehículos.', 'Confrontas eliminatorias con documentos.', 'Estudio de puntos característicos.'],
    video: 'https://youtube.com/watch?v=HaHP4v7grPo'
  },
  {
    id: 'antropo',
    title: 'ANTROPOLOGÍA FORENSE',
    desc: 'Identificación de individuos mediante técnicas antropométricas y morfológicas.',
    objetivo: 'Identificar fisonómicamente a personas o restos óseos involucrados en problemas médico-legales.',
    alcances: ['Reconstrucción escultórica facial.', 'Identificación de restos óseos (sexo, edad, estatura).', 'Estudio de maltrato físico y secuestro.', 'Sobreposición fotográfica cara-cráneo.']
  },
  {
    id: 'balistica',
    title: 'BALÍSTICA FORENSE',
    desc: 'Análisis de fenómenos físicos y químicos en armas de fuego y proyectiles.',
    objetivo: 'Determinar características de armas y elementos balísticos para identificar su relación con hechos delictuosos.',
    alcances: ['Encuadramiento de armas según la Ley Federal.', 'Determinación del funcionamiento de armas.', 'Identificación y comparación de proyectiles y casquillos.']
  },
  {
    id: 'campo',
    title: 'CRIMINALÍSTICA DE CAMPO',
    desc: 'Estudio del lugar de los hechos e indicios físicos para establecer la verdad histórica.',
    objetivo: 'Descubrir, fijar, levantar y embalar indicios para la reconstrucción del evento.',
    alcances: ['Investigación de homicidios, suicidios y accidentes.', 'Posición víctima-victimario.', 'Estudio de mecánica de hechos y verosimilitud de declaraciones.']
  },
  {
    id: 'docu',
    title: 'DOCUMENTOSCOPIA',
    desc: 'Estudio de documentos y alteraciones para determinar autenticidad o falsedad.',
    objetivo: 'Analizar documentos cuestionados e identificar posibles alteraciones o falsificaciones.',
    alcances: ['Análisis de escritos anónimos y notas póstumas.', 'Detección de documentos camuflados o alterados.', 'Determinación de autenticidad documental.']
  },
  {
    id: 'genetica',
    title: 'GENÉTICA FORENSE',
    desc: 'Identificación humana mediante el análisis de ADN con altísima precisión científica.',
    objetivo: 'Establecer identidad y parentesco biológico mediante perfiles genéticos de muestras forenses.',
    alcances: ['Pruebas de paternidad confirmativas (PCR).', 'Análisis de fluidos biológicos y restos anatómicos.', 'Identificación de presuntos autores de ilícitos.']
  },
  {
    id: 'grafo',
    title: 'GRAFOSCOPIA',
    desc: 'Examen de escrituras y firmas para identificar el origen gráfico del autor.',
    objetivo: 'Identificar al autor de un escrito o firma por medio del análisis comparativo.',
    alcances: ['Autenticidad de firmas.', 'Identificación de autoría en manuscritos.', 'Detección de falsificaciones gráficas.']
  },
  {
    id: 'transito',
    title: 'TRÁNSITO TERRESTRE',
    desc: 'Estudio técnico-científico de hechos de tránsito mediante análisis físico-matemático.',
    objetivo: 'Determinar las causas, evolución y consecuencias de un hecho de tránsito.',
    alcances: ['Choques, alcances y volcaduras.', 'Invasión de sentidos y atropellos.', 'Reconstrucción de accidentes múltiples.']
  },
  {
    id: 'valuacion',
    title: 'VALUACIONES',
    desc: 'Determinación del valor comercial de objetos participantes en un delito.',
    objetivo: 'Establecer mediante datos técnicos el valor de bienes muebles relacionados con hechos delictivos.',
    alcances: ['Valuación de vehículos y daños parciales/totales.', 'Determinación de valor intrínseco de objetos.', 'Avalúos basados en declaraciones y documentales.']
  }
];

export const PeritajesDetalle = () => {
  const [expanded, setExpanded] = useState(null);

  return (
    <Container id="sobre-peritajes">
      <div style={{ textAlign: 'center', marginBottom: '80px' }}>
        <p style={{ color: theme.colors.gold, letterSpacing: '4px', fontSize: '11px', fontWeight: 'bold' }}>ÁREAS DE EXPERTISE</p>
        <h2 style={{ fontFamily: theme.fonts.serif, fontSize: '3.5rem', marginTop: '10px' }}>
          Servicios <span style={{ fontStyle: 'italic', fontWeight: '400' }}>Periciales</span>
        </h2>
      </div>

      {peritajesData.map((p) => (
        <PeritajeCard 
          key={p.id} 
          onClick={() => setExpanded(expanded === p.id ? null : p.id)}
          layout
        >
          <CardMain>
            <ImageContainer>
              {/* Aquí puedes poner las imágenes reales en la carpeta assets */}
              <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#111' }}>
                <ShieldCheck color={theme.colors.gold} opacity={0.3} size={40} />
              </div>
            </ImageContainer>
            <div>
              <h3 style={{ fontFamily: theme.fonts.serif, color: theme.colors.gold, fontSize: '1.4rem', marginBottom: '10px' }}>{p.title}</h3>
              <p style={{ color: theme.colors.textMuted, fontSize: '0.85rem' }}>{p.desc}</p>
            </div>
            <motion.div animate={{ rotate: expanded === p.id ? 90 : 0 }}>
              <ChevronRight color={theme.colors.gold} />
            </motion.div>
          </CardMain>

          <AnimatePresence>
            {expanded === p.id && (
              <ContentExpanded
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <DetailBlock>
                  <h5><Target size={16} /> OBJETIVO</h5>
                  <p>{p.objetivo}</p>
                  {p.video && (
                    <a href={p.video} target="_blank" rel="noreferrer" style={{ color: theme.colors.gold, textDecoration: 'none', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <PlayCircle size={18} /> VER RECURSO DE VIDEO
                    </a>
                  )}
                </DetailBlock>
                <DetailBlock>
                  <h5><ClipboardList size={16} /> ALCANCES TÉCNICOS</h5>
                  <ul>
                    {p.alcances.map((item, i) => <li key={i}>{item}</li>)}
                  </ul>
                </DetailBlock>
              </ContentExpanded>
            )}
          </AnimatePresence>
        </PeritajeCard>
      ))}
    </Container>
  );
};