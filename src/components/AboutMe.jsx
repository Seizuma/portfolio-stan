import React from 'react';
import styled from 'styled-components';
import { FaBriefcase } from 'react-icons/fa'; // Importer une icône pour l'expérience professionnelle

const AboutMeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 100px 20px;
  background: #000;
  min-height: 80vh;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 50px 20px;
  }
`;

const AboutText = styled.div`
  width: 50%;
  margin-left: 10%;
  margin-top: -200px;

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    margin-top: 0;
    text-align: center; /* Center text on mobile */
  }
`;

const Title = styled.h2`
  font-size: 3rem; 
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 2rem; /* Reduce title size on mobile */
  }
`;

const Info = styled.p`
  font-size: 1.5rem; 
  margin: 15px 0;
  color: #454a4d; 

  span {
    font-weight: bold;
    color: #ffffff;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem; /* Reduce text size on mobile */
  }
`;

const ExperienceContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  font-size: 1.5rem;

  @media (max-width: 768px) {
    justify-content: center;
    font-size: 1.2rem; /* Adjust text size */
  }
`;

const ExperienceIcon = styled.div`
  margin-right: 10px;
  font-size: 2rem;
  color: #daa520;

  @media (max-width: 768px) {
    font-size: 1.5rem; /* Reduce icon size on mobile */
  }
`;

const ExperienceText = styled.div`
  font-weight: bold;
`;

const PhotoContainer = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 80%; /* Reduce image size on mobile */
    margin-bottom: 20px; /* Add spacing on mobile */
  }
`;

const Photo = styled.img`
  width: 100%;
  max-width: 1000px; /* Adjust max-width */
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    max-width: 300px; /* Reduce image size for mobile */
  }
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
  transition: background 0.3s ease, transform 0.3s ease;

  &:hover {
    background: #c09717;
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 10px 20px;
  }
`;

const Anchor = styled.div`
  position: relative;
  top: -200px;
  visibility: hidden;
`;

const Languages = styled.p`
  font-size: 1.5rem;
  color: #ffffff;
  margin-top: 20px;

  @media (max-width: 768px) {
    font-size: 1.2rem; /* Reduce text size on mobile */
  }
`;

const AboutMe = () => {
  return (
    <>
      <Anchor id="aboutme" />
      <AboutMeContainer className="fade-in">
        <PhotoContainer>
          <Photo src={`${process.env.PUBLIC_URL}/pictures/Pic2.png`} alt="Photo de moi" />
        </PhotoContainer>

        <AboutText>
          <Title>À propos de moi</Title>
          <ExperienceContainer>
            <ExperienceIcon>
              <FaBriefcase />
            </ExperienceIcon>
            <ExperienceText>2 ans d'expérience professionnelle</ExperienceText>
          </ExperienceContainer>

          {/* Ajout des langues parlées */}
          <Languages>
            <Info><span>Langues :</span> Français (langue maternelle), Anglais (niveau B2)</Info>
          </Languages>
          <Info><span>Email :</span> stanleguen.pro@gmail.com</Info>
          <DownloadButton href={`${process.env.PUBLIC_URL}/CV_Stan_Le_Guen.pdf`} download>
            Télécharger mon CV
          </DownloadButton>
        </AboutText>
      </AboutMeContainer>
    </>
  );
};

export default AboutMe;
