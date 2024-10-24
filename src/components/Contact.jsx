import React from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaDownload, FaLinkedin, FaGithub } from 'react-icons/fa';

const ContactContainer = styled.div`
  text-align: center;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 20px;
  background: #000;

  @media (max-width: 768px) {
    padding: 30px 15px;
  }
`;

const ContactTitle = styled.h2`
  font-size: 3rem;
  margin-bottom: 30px;
  color: #daa520;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 20px;
  }
`;

const ContactInfo = styled.div`
  font-size: 1.5rem;
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #e8e6e3;
  text-align: center; /* S'assure que le texte soit centré sur les petits écrans */

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const ContactLink = styled.a`
  color: #daa520;
  text-decoration: none;
  font-weight: bold;
  margin-top: 10px; /* Espace entre le texte et le lien email */
  word-wrap: break-word; /* Force le retour à la ligne si nécessaire */
  word-break: break-all;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const IconWrapper = styled.div`
  font-size: 2rem;
  margin-right: 10px;
`;

const ContactOptions = styled.div`
  margin-top: 30px;
  display: flex;
  gap: 20px;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 15px;
  }
`;

const OptionButton = styled.a`
  display: inline-block;
  padding: 15px 30px;
  background: #daa520;
  color: #000;
  text-decoration: none;
  font-weight: bold;
  border-radius: 25px;
  transition: background 0.3s ease, transform 0.3s ease;

  &:hover {
    background: #c09717;
    transform: scale(1.05);
  }
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 40px;

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const SocialLink = styled.a`
  color: #daa520;
  font-size: 2rem;
  transition: color 0.3s ease;

  &:hover {
    color: #c09717;
  }
`;

const Contact = () => {
  return (
    <ContactContainer className="fade-in">
      <ContactTitle>Contactez-moi</ContactTitle>
      <ContactInfo>
        <IconWrapper>
          <FaEnvelope />
        </IconWrapper>
        Vous pouvez me contacter à cette adresse :
        <ContactLink href="mailto:stanleguen.pro@gmail.com">
          stanleguen.pro@gmail.com
        </ContactLink>
      </ContactInfo>

      <ContactOptions>
        <OptionButton href="../../CV_2024-09-14_Stan_Le_Guen.pdf" download>
          <FaDownload /> Télécharger mon CV
        </OptionButton>
      </ContactOptions>

      <SocialIcons>
        <SocialLink href="https://www.linkedin.com/in/stan-le-guen-661389211" target="_blank">
          <FaLinkedin />
        </SocialLink>
        <SocialLink href="https://github.com/Seizuma" target="_blank">
          <FaGithub />
        </SocialLink>
      </SocialIcons>
    </ContactContainer>
  );
};

export default Contact;
