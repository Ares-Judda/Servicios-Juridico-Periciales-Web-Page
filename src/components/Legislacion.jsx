import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../theme';
import { ExternalLink, Gavel, Library, Globe } from 'lucide-react';

const LegislationSection = styled.section`
  padding: 100px 10%;
  background: ${theme.colors.bg};
`;

const LinkGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  margin-top: 50px;
`;

const LawCard = styled(motion.a)`
  background: ${theme.colors.card};
  border: 1px solid ${theme.colors.border};
  padding: 30px;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.3s ease;
  height: 180px;

  &:hover {
    border-color: ${theme.colors.gold};
    transform: translateY(-5px);
    background: rgba(197, 160, 89, 0.05);
  }
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  color: ${theme.colors.gold};
`;

const CardTitle = styled.h4`
  font-family: ${theme.fonts.sans};
  color: white;
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 1px;
  margin-top: 15px;
  line-height: 1.4;
`;

const Source = styled.span`
  font-size: 0.7rem;
  color: ${theme.colors.textMuted};
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const links = [
  { title: "Cámara de Diputados: Leyes Federales Vigentes", source: "Diputados", url: "http://www.diputados.gob.mx/LeyesBiblio/" },
  { title: "Investigaciones Jurídicas - Ius Federal", source: "UNAM", url: "http://info4.juridicas.unam.mx/ijure/fed/" },
  { title: "Semanario Judicial de la Federación (IUS)", source: "SCJN", url: "http://sjf.scjn.gob.mx/" },
  { title: "Orden Jurídico Nacional", source: "SEGOB", url: "http://www.ordenjuridico.gob.mx/" },
  { title: "Legislación Fiscal Vigente", source: "SAT", url: "http://www.sat.gob.mx/" },
  { title: "Normatividad de la Función Pública", source: "SFP", url: "https://www.gob.mx/sfp" },
  { title: "Compendio Legislativo del Estado", source: "Veracruz", url: "http://www.veracruz.gob.mx/juridico/" },
  { title: "Reforma de Leyes", source: "Congreso", url: "http://www.cddhcu.gob.mx/refley/" },
  { title: "Reglamentos de Leyes Federales", source: "Diputados", url: "http://www.cddhcu.gob.mx/LeyesBiblio/regla.htm" }
];

export const Legislacion = () => {
  return (
    <LegislationSection id="legislacion">
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <p style={{ color: theme.colors.gold, letterSpacing: '4px', fontSize: '11px', fontWeight: 'bold' }}>ACERVO JURÍDICO</p>
        <h2 style={{ fontFamily: theme.fonts.serif, fontSize: '3rem', marginTop: '10px' }}>
          Marco <span style={{ fontStyle: 'italic', fontWeight: '400' }}>Legal</span> & Consultas
        </h2>
        <p style={{ color: theme.colors.textMuted, maxWidth: '600px', margin: '20px auto' }}>
          Ponemos a su disposición los portales oficiales de consulta legal y legislativa para el apoyo en la investigación pericial y jurídica.
        </p>
      </div>

      <LinkGrid>
        {links.map((link, i) => (
          <LawCard 
            key={i} 
            href={link.url} 
            target="_blank" 
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
          >
            <CardHeader>
              <Library size={20} />
              <ExternalLink size={16} opacity={0.5} />
            </CardHeader>
            <div>
              <Source>{link.source}</Source>
              <CardTitle>{link.title}</CardTitle>
            </div>
          </LawCard>
        ))}
      </LinkGrid>
    </LegislationSection>
  );
};