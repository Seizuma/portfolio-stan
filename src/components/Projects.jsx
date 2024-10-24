import React, { useState } from 'react';
import styled from 'styled-components';
import { FaProjectDiagram, FaMicrophoneAlt } from 'react-icons/fa';

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
  padding: ${(props) => (props.$isExpanded ? '20px' : '10px')};  /* Utilisation de $isExpanded */
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
  transition: transform 0.3s ease, max-height 0.5s ease-in-out, padding 0.5s ease-in-out;
  max-height: ${(props) => (props.$isExpanded ? '500px' : '150px')}; /* Utilise $isExpanded */
  
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

const ProjectCard = ({ isExpanded, onClick, icon, title, description, details }) => (
  <ProjectCardStyled $isExpanded={isExpanded} onClick={onClick}>
    <ProjectIcon>{icon}</ProjectIcon>
    <ProjectTitle>{title}</ProjectTitle>
    {isExpanded && (
      <>
        <ProjectDescription>{description}</ProjectDescription>
        {details && (
          <ProjectDetails>{details}</ProjectDetails>
        )}
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
              <Technologies>Technologies: React, React Native, PHP, Laravel</Technologies>
            </>
          }
        />


      </ProjectGrid>
    </ProjectsContainer>
  );
};

export default Projects;
