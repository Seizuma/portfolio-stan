import React from 'react';
import styled from 'styled-components';

const ContactContainer = styled.div`
  text-align: center;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center; /* Centrer verticalement */
  padding: 20px;
  background: #000;
  color: #f5f5dc;
`;

const ContactInfo = styled.p`
  font-size: 1.2rem;
  margin: 20px 0;
`;

const ContactLink = styled.a`
  color: #daa520;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;

const Contact = () => {
  return (
    <ContactContainer>
      <h2>Contactez-moi</h2>
      <ContactInfo>
        Vous pouvez me contacter à cette adresse email : 
        <ContactLink href="mailto:stanleguen.pro@gmail.com">stanleguen.pro@gmail.com</ContactLink>
      </ContactInfo>
    </ContactContainer>
  );
};

export default Contact;
