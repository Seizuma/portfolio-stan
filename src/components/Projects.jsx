import React from 'react';
import styled from 'styled-components';
import { FaCode, FaTasks, FaShoppingCart } from 'react-icons/fa'; // Icônes pour les projets

const ProjectsContainer = styled.div`
  text-align: center;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center; /* Centrer verticalement */
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

const ProjectCard = styled.div`
  background: #1a1a1a;
  padding: 20px;
  border-radius: 8px;
  transition: transform 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    transform: scale(1.05);
  }
`;

const ProjectIcon = styled.div`
  font-size: 3rem;
  color: #daa520;
`;

const ProjectTitle = styled.h3`
  margin-top: 10px;
`;

const ProjectHeader = styled.h2`
  font-size: 50px;
`

const Projects = () => {
  return (
    <ProjectsContainer className="fade-in">
        <ProjectHeader><h2>Projets</h2></ProjectHeader>
      <ProjectGrid>
        <ProjectCard>
          <ProjectIcon><FaCode /></ProjectIcon>
          <ProjectTitle>Projet de Portfolio</ProjectTitle>
          <p>Un site web personnel pour présenter mes compétences et mes projets.</p>
        </ProjectCard>
        <ProjectCard>
          <ProjectIcon><FaTasks /></ProjectIcon>
          <ProjectTitle>Application de Gestion de Tâches</ProjectTitle>
          <p>Une application pour organiser et gérer des tâches quotidiennes.</p>
        </ProjectCard>
        <ProjectCard>
          <ProjectIcon><FaShoppingCart /></ProjectIcon>
          <ProjectTitle>Application E-commerce</ProjectTitle>
          <p>Une plateforme de vente en ligne avec gestion des commandes et des utilisateurs.</p>
        </ProjectCard>
      </ProjectGrid>
    </ProjectsContainer>
  );
};

export default Projects;
