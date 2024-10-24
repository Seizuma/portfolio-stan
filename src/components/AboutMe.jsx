import React from 'react';
import styled from 'styled-components';
import { FaBriefcase } from 'react-icons/fa'; // Importer une icône pour l'expérience professionnelle

const AboutMeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  // padding: 100px 20px;
  padding-top: -80px;
  background: #000;
  min-height: 80vh;
`;

const AboutText = styled.div`
  width: 50%;
  margin-left: 10%;
  margin-top: -200px;
`;

const Title = styled.h2`
  font-size: 3rem; 
  margin-bottom: 30px;
`;

const Info = styled.p`
  font-size: 1.5rem; 
  margin: 15px 0;
  color: #454a4d; 

  span {
    font-weight: bold;
    color: #ffffff;
  }
`;

const ExperienceContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  font-size: 1.5rem;
`;

const ExperienceIcon = styled.div`
  margin-right: 10px;
  font-size: 2rem;
  color: #daa520;
`;

const ExperienceText = styled.div`
  font-weight: bold;
`;

const PhotoContainer = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Photo = styled.img`
  width: 100%;
  max-width: 1000px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
`;

const DownloadButton = styled.a`
  display: inline-block;
  padding: 15px 30px; 
  background: #daa520;
  color: #fff;
  text-decoration: none;
  border-radius: 25px;
  font-weight: bold;
  margin-top: 20px;
  font-size: 1.2rem;
  transition: background 0.3s ease, transform 0.3s ease; /* Ajoute une transition fluide */

  &:hover {
    background: #c09717; /* Change la couleur de fond en or plus foncé */
    transform: scale(1.05); /* Agrandit légèrement le bouton */
  }
`;

const Anchor = styled.div`
  position: relative;
  top: -200px; /* Compense la hauteur du header */
  visibility: hidden; /* Rend l'ancre invisible */
`;

const AboutMe = () => {
  return (
    <>
      <Anchor id="aboutme" />
      <AboutMeContainer className="fade-in">
        <PhotoContainer>
          <Photo src="../../pictures/Pic2.png" alt="Photo de moi" />
        </PhotoContainer>

        <AboutText>
          <Title>À propos de moi</Title>
          <Info><span>Nom:</span> Stan Le Guen</Info>
          <Info><span>Date de naissance:</span> 29/01/2003</Info>
          <Info><span>Code postal:</span> 71100</Info>
          <Info><span>Email:</span> stan.leguen.pro@gmail.com</Info>

          <ExperienceContainer>
            <ExperienceIcon>
              <FaBriefcase />
            </ExperienceIcon>
            <ExperienceText>2 ans d'expérience professionnelle</ExperienceText>
          </ExperienceContainer>

          <DownloadButton href="../../CV_2024-09-14_Stan_Le Guen.pdf" download>
            Télécharger mon CV
          </DownloadButton>
        </AboutText>
      </AboutMeContainer>
    </>
  );
};


export default AboutMe;
