import React from 'react';
import styled from 'styled-components';

const ProfileContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 100px 20px;
  background: #000;
  color: #f5f5dc;
  min-height: 100vh;
`;

const ProfileText = styled.div`
  width: 50%;
  margin-left: 10%; /* Ajuste cette valeur pour aligner le texte à "Stan" */
  font-size: 1.2rem;
`;

const ProfilePhoto = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Photo = styled.img`
  width: 100%;
  max-width: 400px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
`;

const Profile = () => {
  return (
    <ProfileContainer>
      <ProfileText>
        <h2>À propos de moi</h2>
        <p>Je suis un développeur passionné avec une expérience en développement web et des compétences variées. Mon objectif est de continuer à améliorer mes compétences et de contribuer à des projets intéressants.</p>
      </ProfileText>
      <ProfilePhoto>
        {/* Ajoute ta photo ici */}
        <Photo src="chemin/vers/ta/photo.jpg" alt="Photo de moi" />
      </ProfilePhoto>
    </ProfileContainer>
  );
};

export default Profile;
