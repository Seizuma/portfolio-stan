import React from 'react';
import styled from 'styled-components';

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  background: #000;
  min-height: 50vh;
`;

const ProfileText = styled.div`
  width: 50%;
  margin-left: 10%;
  margin-top: -20%;
`;

const Heading = styled.h2`
  font-size: 2rem;
  color: #daa520; 
`;

const Name = styled.p`
  font-size: 4rem;
  font-weight: bold;
  margin: 10px 0;

  & > span {
    color: #daa520; 
  }
`;

const Role = styled.p`
  font-size: 2.5rem;
`;

const ProfilePhoto = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -5%;
`;

const Photo = styled.img`
  width: 100%;
  max-width: 1000px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
  user-select: none;
  pointer-events: none;
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
        <Photo src="../../pictures/Pic1.png" alt="Photo de moi" />
      </ProfilePhoto>
    </ProfileContainer>
  );
};

export default Profile;
