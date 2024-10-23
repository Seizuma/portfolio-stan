import React from 'react';
import styled from 'styled-components';

const DownloadButton = styled.a`
  display: inline-block;
  padding: 10px 20px;
  margin: 20px;
  background: #daa520;
  color: #000;
  text-decoration: none;
  border-radius: 5px;
  font-weight: bold;
`;

const DownloadCV = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <DownloadButton href="/cv.pdf" download>
        Télécharger mon CV
      </DownloadButton>
    </div>
  );
};

export default DownloadCV;