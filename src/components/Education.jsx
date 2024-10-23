import React from 'react';
import styled from 'styled-components';

const EducationContainer = styled.div`
  text-align: center;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const EducationItem = styled.div`
  margin: 20px 0;
`;

const Education = () => {
  return (
    <EducationContainer>
      <h2>Éducation</h2>
      <EducationItem>
        <h3>Master en Informatique</h3>
        <p>Université XYZ - 2020</p>
      </EducationItem>
      <EducationItem>
        <h3>Licence en Informatique</h3>
        <p>Université ABC - 2018</p>
      </EducationItem>
    </EducationContainer>
  );
};

export default Education;
