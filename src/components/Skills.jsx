import React from 'react';
import styled from 'styled-components';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaPython, FaDatabase } from 'react-icons/fa';
import { SiCsharp, SiFlask, SiElectron, SiExpress, SiPostman, SiTrello, SiFigma, SiXampp, SiReactos } from 'react-icons/si';

const SkillsContainer = styled.div`
  text-align: center;
  padding: 50px 20px;

  @media (max-width: 768px) {
    padding: 30px 15px;
  }
`;

const SkillsTitle = styled.h2`
  font-size: 3rem;
  margin-bottom: 40px;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 30px;
  }
`;

const Category = styled.div`
  margin-bottom: 40px;

  @media (max-width: 768px) {
    margin-bottom: 30px;
  }
`;

const CategoryTitle = styled.h3`
  margin-bottom: 20px;
  font-size: 1.5rem;
  color: #daa520;

  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin-bottom: 15px;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  justify-content: center;
  gap: 30px;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); /* Adapte la grille pour mobile */
    gap: 20px;
  }
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

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const SkillIcon = styled.div`
  font-size: 3rem;
  color: #daa520;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const SkillName = styled.p`
  margin-top: 10px;
  font-size: 1.2rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Skills = () => {
  return (
    <SkillsContainer className="fade-in">
      <SkillsTitle>Compétences</SkillsTitle>

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
          <SkillCard>
            <SkillIcon><SiElectron /></SkillIcon>
            <SkillName>Electron</SkillName>
          </SkillCard>
          <SkillCard>
            <SkillIcon><SiReactos /></SkillIcon>
            <SkillName>React Native</SkillName>
          </SkillCard>
        </SkillsGrid>
      </Category>

      {/* Catégorie Backend */}
      <Category>
        <CategoryTitle>Backend</CategoryTitle>
        <SkillsGrid>
          <SkillCard>
            <SkillIcon><SiCsharp /></SkillIcon>
            <SkillName>C#</SkillName>
          </SkillCard>
          <SkillCard>
            <SkillIcon><FaPython /></SkillIcon>
            <SkillName>Python</SkillName>
          </SkillCard>
          <SkillCard>
            <SkillIcon><SiFlask /></SkillIcon>
            <SkillName>Flask</SkillName>
          </SkillCard>
          <SkillCard>
            <SkillIcon><FaNodeJs /></SkillIcon>
            <SkillName>Node.js</SkillName>
          </SkillCard>
          <SkillCard>
            <SkillIcon><SiExpress /></SkillIcon>
            <SkillName>Express.js</SkillName>
          </SkillCard>
          <SkillCard>
            <SkillIcon><FaDatabase /></SkillIcon>
            <SkillName>SQL</SkillName>
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
          <SkillCard>
            <SkillIcon><SiPostman /></SkillIcon>
            <SkillName>Postman</SkillName>
          </SkillCard>
          <SkillCard>
            <SkillIcon><SiTrello /></SkillIcon>
            <SkillName>Trello</SkillName>
          </SkillCard>
          <SkillCard>
            <SkillIcon><SiFigma /></SkillIcon>
            <SkillName>Figma</SkillName>
          </SkillCard>
          <SkillCard>
            <SkillIcon><SiXampp /></SkillIcon>
            <SkillName>Suite AMP (XAMPP)</SkillName>
          </SkillCard>
        </SkillsGrid>
      </Category>
    </SkillsContainer>
  );
};

export default Skills;
