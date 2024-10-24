import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  padding: 50px 20px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column; /* Empile les colonnes sur mobile */
    padding: 20px;
  }
`;

const Column = styled.div`
  width: 45%;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: 100%; /* Sur mobile, les colonnes prennent 100% de largeur */
    margin-bottom: 30px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 30px;
  color: #daa520;
  font-weight: bold;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem; /* Réduire la taille du titre sur mobile */
    margin-bottom: 20px;
  }
`;

const Item = styled.div`
  margin-bottom: 20px;
  padding: 20px;
  background: #2a2a2a;
  border-radius: 10px;
  text-align: left;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

const ItemTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 5px;
  color: #daa520;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 1.5rem; /* Réduire la taille du titre sur mobile */
  }
`;

const Institution = styled.p`
  font-size: 1.2rem;
  color: #fff;

  @media (max-width: 768px) {
    font-size: 1rem; /* Réduire la taille du texte sur mobile */
  }
`;

const Date = styled.p`
  font-size: 1rem;
  color: #aaa;

  @media (max-width: 768px) {
    font-size: 0.9rem; /* Réduire la taille du texte sur mobile */
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #fff;
  margin-top: 10px;

  @media (max-width: 768px) {
    font-size: 1rem; /* Réduire la taille du texte sur mobile */
  }
`;

const Technologies = styled.p`
  font-size: 1rem;
  margin-top: 10px;
  color: #daa520;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 0.9rem; /* Réduire la taille du texte sur mobile */
  }
`;

const Education = () => {
  return (
    <SectionContainer className="fade-in">
      
      {/* Colonne Expérience Professionnelle */}
      <Column>
        <SectionTitle>Expérience Professionnelle</SectionTitle>

        <Item>
          <ItemTitle>Développeur Full Stack</ItemTitle>
          <Institution>Comeca - 1 an (CDI)</Institution>
          <Date>2022 - 2023</Date>
          <Description>
            Conception et développement de solutions logicielles personnalisées pour répondre aux besoins des clients dans le secteur industriel.
          </Description>
          <Technologies>Technologies : Python, C#, WinCC, Windev</Technologies>
        </Item>   

        <Item>
          <ItemTitle>Développeur Full Stack</ItemTitle>
          <Institution>Comeca - 1 an (Alternance)</Institution>
          <Date>2021 - 2022</Date>
          <Description>
            Développement d'applications web full stack en utilisant des technologies modernes pour divers projets industriels.
          </Description>
          <Technologies>Technologies : HTML, CSS, JavaScript, ExpressJs, NodeJs</Technologies>
        </Item>

      </Column>

      {/* Colonne Formation */}
      <Column>
        <SectionTitle>Formation & Diplômes</SectionTitle>
        
        <Item>
          <ItemTitle>Bachelor Concepteur Développeur d'Applications</ItemTitle>
          <Institution>CESI Dijon</Institution>
          <Date>De septembre 2022 à septembre 2023</Date>
        </Item>

        <Item>
          <ItemTitle>BTS Systèmes Numériques, option Informatique et Réseaux</ItemTitle>
          <Institution>Lycée Gustave Eiffel, Dijon</Institution>
          <Date>De septembre 2020 à juillet 2022</Date>
          <Date>Obtenu mention bien</Date>
        </Item>

        <Item>
          <ItemTitle>Baccalauréat Scientifique, Option Sciences de l'Ingénieur</ItemTitle>
          <Institution>Lycée Gustave Eiffel, Dijon</Institution>
          <Date>De 2019 à 2020</Date>
        </Item>
      </Column>
    </SectionContainer>
  );
};

export default Education;
