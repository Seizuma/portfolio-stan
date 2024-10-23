import React from 'react';
import styled from 'styled-components';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa';

const SkillsContainer = styled.div`
  text-align: center;
  padding: 50px 20px;
`;

const Category = styled.div`
  margin-bottom: 40px;
`;

const CategoryTitle = styled.h3`
  margin-bottom: 20px;
  font-size: 1.5rem;
  color: #daa520;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); /* Utilisation de auto-fit pour adapter les cartes */
  justify-content: center; /* Centre les éléments dans la grille */
  gap: 30px; /* Augmente l'espacement entre les cartes */
  max-width: 1000px; /* Limite la largeur totale des cartes pour ne pas s'étendre trop */
  margin: 0 auto; /* Centre la grille par rapport au conteneur */
`;

const SkillCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #1a1a1a;
  padding: 20px;
  border-radius: 8px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const SkillIcon = styled.div`
  font-size: 3rem;
  color: #daa520;
`;

const SkillName = styled.p`
  margin-top: 10px;
  font-size: 1.2rem;
`;

const Skills = () => {
  return (
    <SkillsContainer>
      <h2>Compétences</h2>

      {/* Catégorie Frontend */}
      <Category>
        <CategoryTitle>Frontend</CategoryTitle>
        <SkillsGrid>
          <SkillCard>
            <SkillIcon><FaHtml5 /></SkillIcon>
            <SkillName>HTML</SkillName>
          </SkillCard>
          <SkillCard>
            <SkillIcon><FaCss3Alt /></SkillIcon>
            <SkillName>CSS</SkillName>
          </SkillCard>
          <SkillCard>
            <SkillIcon><FaJs /></SkillIcon>
            <SkillName>JavaScript</SkillName>
          </SkillCard>
          <SkillCard>
            <SkillIcon><FaReact /></SkillIcon>
            <SkillName>React</SkillName>
          </SkillCard>
        </SkillsGrid>
      </Category>

      {/* Catégorie Backend */}
      <Category>
        <CategoryTitle>Backend</CategoryTitle>
        <SkillsGrid>
          <SkillCard>
            <SkillIcon><FaNodeJs /></SkillIcon>
            <SkillName>Node.js</SkillName>
          </SkillCard>
        </SkillsGrid>
      </Category>

      {/* Catégorie Outils */}
      <Category>
        <CategoryTitle>Outils</CategoryTitle>
        <SkillsGrid>
          <SkillCard>
            <SkillIcon><FaGitAlt /></SkillIcon>
            <SkillName>Git</SkillName>
          </SkillCard>
        </SkillsGrid>
      </Category>
    </SkillsContainer>
  );
};

export default Skills;
