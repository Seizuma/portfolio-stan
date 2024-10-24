import React from 'react';
import styled from 'styled-components';

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  background: #000;
  min-height: 50vh;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    padding: 50px 20px;
  }
`;

const ProfileText = styled.div`
  width: 50%;
  margin-left: 10%;
  margin-top: -20%;

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    margin-top: 0;
    text-align: center; /* Centrer le texte sur mobile */
  }
`;

const Heading = styled.h2`
  font-size: 2rem;
  color: #daa520;

  @media (max-width: 768px) {
    font-size: 1.8rem; /* Réduire la taille sur mobile */
  }
`;

const Name = styled.p`
  font-size: 4rem;
  font-weight: bold;
  margin: 10px 0;

  & > span {
    color: #daa520;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem; /* Réduire la taille du texte sur mobile */
  }
`;

const Role = styled.p`
  font-size: 2.5rem;

  @media (max-width: 768px) {
    font-size: 1.8rem; /* Réduire la taille du texte sur mobile */
  }
`;

const ProfilePhoto = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -5%;

  @media (max-width: 768px) {
    width: 80%; /* Ajuster la taille de l'image pour mobile */
    margin-top: 20px; /* Ajouter un espacement sur mobile */
  }
`;

const Photo = styled.img`
  width: 100%;
  max-width: 1000px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
  user-select: none;
  pointer-events: none;

  @media (max-width: 768px) {
    max-width: 300px; /* Réduire la taille de l'image sur mobile */
  }
`;

const Profile = () => {
  return (
    <ProfileContainer className="fade-in">
      <ProfileText>
        <Heading>Bienvenue !</Heading>
        <Name>
          Je suis <span>Stan Le Guen</span>
        </Name>
        <Role>Développeur Full Stack</Role>
      </ProfileText>
      <ProfilePhoto>
        <Photo src={`${process.env.PUBLIC_URL}/pictures/Pic1.png`} alt="Photo de moi" />
      </ProfilePhoto>
    </ProfileContainer>
  );
};

export default Profile;
