import React from 'react';
import styled from 'styled-components';

const EducationContainer = styled.div`
  text-align: center;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 20px;
`;

const EducationItem = styled.div`
  margin: 20px 0;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 30px;
  color: #daa520; /* Couleur or pour le titre */
  font-weight: bold; /* Mettre le titre en gras */
`;

const DegreeTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 10px;
  color: #daa520; /* Couleur or pour les titres des diplômes */
  font-weight: bold; /* Mettre les titres en gras */
`;

const Institution = styled.p`
  font-size: 1.2rem;
  margin-bottom: 5px;
  color: #fff; /* Texte en blanc */
`;

const Date = styled.p`
  font-size: 1rem;
  color: #fff; /* Texte en blanc */
`;

const Education = () => {
  return (
    <EducationContainer className="fade-in">
      <Title>Formation & Diplômes</Title>

      <EducationItem>
        <DegreeTitle>Bachelor Concepteur Développeur D'applications</DegreeTitle>
        <Institution>CESI Dijon</Institution>
        <Date>De septembre 2022 à septembre 2023</Date>
      </EducationItem>

      <EducationItem>
        <DegreeTitle>BTS Système numérique option Informatique et Réseaux</DegreeTitle>
        <Institution>Lycée Gustave Eiffel, Dijon, France</Institution>
        <Date>De septembre 2020 à juillet 2022</Date>
        <Date>Obtenu mention bien</Date>
      </EducationItem>

      <EducationItem>
        <DegreeTitle>Baccalauréat S - Option Sciences de l'Ingénieur</DegreeTitle>
        <Institution>Lycée Gustave Eiffel, Dijon, France</Institution>
        <Date>De 2019 à 2020</Date>
      </EducationItem>
    </EducationContainer>
  );
};

export default Education;
