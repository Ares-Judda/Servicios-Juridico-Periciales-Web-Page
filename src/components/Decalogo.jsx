import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../theme';
import { Quote } from 'lucide-react';

const DecalogoSection = styled.section`
  padding: 120px 10%;
  background: linear-gradient(to bottom, ${theme.colors.bg}, #11110f);
  text-align: center;
`;

const DecalogoContainer = styled.div`
  max-width: 900px;
  margin: 0 auto;
  position: relative;
  
  /* Línea central decorativa */
  &::before {
    content: '';
    position: absolute;
    top: 100px;
    bottom: 0;
    left: 50%;
    width: 1px;
    background: linear-gradient(to bottom, ${theme.colors.gold}, transparent);
    opacity: 0.3;
    @media (max-width: 768px) { display: none; }
  }
`;

const RuleCard = styled(motion.div)`
  background: ${theme.colors.card};
  border: 1px solid ${theme.colors.border};
  padding: 40px;
  margin-bottom: 30px;
  position: relative;
  width: 80%;
  margin-left: ${props => props.index % 2 === 0 ? '0' : '20%'};
  text-align: left;
  transition: border-color 0.5s ease;

  &:hover {
    border-color: ${theme.colors.gold};
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
  }
`;

const Number = styled.span`
  font-family: ${theme.fonts.serif};
  color: ${theme.colors.gold};
  font-size: 3rem;
  opacity: 0.4;
  position: absolute;
  top: 10px;
  right: 20px;
`;

const rules = [
  "Sé digno del título que has logrado.",
  "Ejerce la profesión con amor, lealtad y honestidad. Desprecia con indignación todo lo que pudiera manchar tu conciencia.",
  "Enriquece tu patrimonio intelectual y artístico. Pero no olvides que en cuestiones periciales, el mejor maestro es la práctica esmeralda y constante.",
  "En la actuación pericial, sé claro y preciso. Gobierna siempre la lengua y medita las críticas.",
  "Aprecia la tolerancia, la cordialidad, la bondad y la alegría; un profesional triste es un pobre profesional.",
  "Domina tu carácter, sobre todo durante las audiencias en los tribunales; allí se puede poner a prueba tu templanza, manteniéndote sereno aún frente a un revés.",
  "No quieras ser más que el magistrado.",
  "Defiende la justicia, por el difícil camino de la verdad y con las investigaciones científicas, seguro de las convicciones que te dicte la razón.",
  "Que tu mano no conozca la holganza.",
  "Recuerda siempre que eres solo un auxiliar de la justicia."
];

export const Decalogo = () => {
  return (
    <DecalogoSection id="decalogo">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <Quote size={40} color={theme.colors.gold} style={{ marginBottom: '20px', opacity: 0.6 }} />
        <p style={{ color: theme.colors.gold, letterSpacing: '4px', fontSize: '12px', fontWeight: 'bold' }}>CÓDIGO DE ÉTICA</p>
        <h2 style={{ fontFamily: theme.fonts.serif, fontSize: '3.5rem', marginBottom: '80px' }}>
          Decálogo del <span style={{ fontStyle: 'italic', fontWeight: '400' }}>Perito</span>
        </h2>
      </motion.div>

      <DecalogoContainer>
        {rules.map((rule, index) => (
          <RuleCard
            key={index}
            index={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <Number>{index + 1}</Number>
            <p style={{ 
              fontSize: '1.1rem', 
              lineHeight: '1.8', 
              color: theme.colors.text,
              fontFamily: theme.fonts.sans,
              maxWidth: '90%'
            }}>
              {rule}
            </p>
          </RuleCard>
        ))}
      </DecalogoContainer>
    </DecalogoSection>
  );
};