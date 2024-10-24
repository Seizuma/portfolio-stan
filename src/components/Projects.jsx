import React, { useState } from 'react';
import styled from 'styled-components';
import { FaProjectDiagram, FaMicrophoneAlt, FaMusic, FaTree } from 'react-icons/fa'; // Ajout de FaTree pour Ecotron

const ProjectsContainer = styled.div`
  text-align: center;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

const ProjectCardStyled = styled.div`
  background: #1a1a1a;
  padding: ${(props) => (props.$isExpanded ? '20px' : '10px')};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
  transition: transform 0.3s ease, max-height 0.5s ease-in-out, padding 0.5s ease-in-out;
  max-height: ${(props) => (props.$isExpanded ? '500px' : '150px')};
  
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
`;

const ProjectDescription = styled.p`
  margin-top: 15px;
  color: #e8e6e3;
`;

const ProjectDetails = styled.div`
  margin-top: 10px;
  text-align: left;
  color: #e8e6e3;
`;

const Technologies = styled.p`
  font-weight: bold;
  color: #daa520;
`;

const ProjectLink = styled.a`
  color: #3391ff;
  text-decoration: none;
  margin-top: 10px;

  &:hover {
    text-decoration: underline;
  }
`;

const ProjectStatus = styled.p`
  margin-top: 10px;
  color: ${(props) => (props.status === 'Terminé' ? '#28a745' : '#ffc107')}; /* Vert pour terminé, jaune pour en construction */
`;

const ProjectCard = ({ isExpanded, onClick, icon, title, description, details, link, status }) => (
  <ProjectCardStyled $isExpanded={isExpanded} onClick={onClick}>
    <ProjectIcon>{icon}</ProjectIcon>
    <ProjectTitle>{title}</ProjectTitle>
    {isExpanded && (
      <>
        <ProjectDescription>{description}</ProjectDescription>
        {details && <ProjectDetails>{details}</ProjectDetails>}
        {link && ( // N'affiche le lien que s'il existe
          <ProjectLink href={link} target="_blank" rel="noopener noreferrer">Voir sur GitHub</ProjectLink>
        )}
        <ProjectStatus status={status}>{status}</ProjectStatus>
      </>
    )}
  </ProjectCardStyled>
);


const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const toggleExpand = (project) => {
    setExpandedProject(expandedProject === project ? null : project);
  };

  return (
    <ProjectsContainer className="fade-in">
      <ProjectHeader>Projets</ProjectHeader>
      <ProjectGrid>

        {/* LearningBeatbox2.0 Project */}
        <ProjectCard
          isExpanded={expandedProject === 'learningbeatbox'}
          onClick={() => toggleExpand('learningbeatbox')}
          icon={<FaMicrophoneAlt />}
          title="LearningBeatbox 2.0"
          description="Application permettant un meilleur apprentissage du beatbox via Machine Learning. Elle analyse la structure, les dynamiques et le genre musical pour aider à corriger les erreurs."
          details={
            <>
              <p>Basé sur le projet Parrot.py</p>
              <p><strong>Nombre de personnes sur le projet:</strong> 1</p>
              <Technologies>Technologies: Python, Electron</Technologies>
            </>
          }
          link="https://github.com/Seizuma/LearningBeatbox2.0.git"
          status="En construction"
        />

        {/* ResRel Project */}
        <ProjectCard
          isExpanded={expandedProject === 'resrel'}
          onClick={() => toggleExpand('resrel')}
          icon={<FaProjectDiagram />}
          title="ResRel"
          description="ResRel est un projet visant à améliorer les relations entre les citoyens grâce à une plateforme de partage de ressources (images, PDF, vidéos, événements)."
          details={
            <>
              <p><strong>Nombre de personnes sur le projet:</strong> 4</p>
              <Technologies>Technologies: React, React Native, PHP, Laravel, SQL</Technologies>
            </>
          }
          link="https://github.com/jehanvaire/RES-REL-MOBILE.git"
          status="Terminé"
        />

        {/* GenreDiscovery Project */}
        <ProjectCard
          isExpanded={expandedProject === 'genrediscovery'}
          onClick={() => toggleExpand('genrediscovery')}
          icon={<FaMusic />}
          title="GenreDiscovery"
          description="Application permettant la découverte et la répertorisation des genres musicaux via des suggestions, avec des artistes et des morceaux pour découvrir chaque genre."
          details={
            <>
              <p>Basé sur le projet everynoise.com</p>
              <p><strong>Nombre de personnes sur le projet:</strong> 1</p>
              <Technologies>Technologies: PHP, Symfony, SQL</Technologies>
            </>
          }
          link="https://github.com/Seizuma/GenreDiscovery.git"
          status="En construction"
        />

        {/* Ecotron Project */}
        <ProjectCard
          isExpanded={expandedProject === 'ecotron'}
          onClick={() => toggleExpand('ecotron')}
          icon={<FaTree />}
          title="Ecotron"
          description="Projet de BTS visant à étudier l'influence de l'environnement sur le taux de sève d'un arbre. Utilisation de cartes d'acquisition et de bases de données pour l'affichage sur une page web interactive."
          details={
            <>
              <p><strong>Nombre de personnes sur le projet:</strong> 3</p>
              <Technologies>Technologies: PHP, Jquery, HTML/CSS/JavaScript, SQL</Technologies>
            </>
          }
          status="Terminé"
        />

      </ProjectGrid>
    </ProjectsContainer>
  );
};

export default Projects;
