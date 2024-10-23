import styled from 'styled-components';

// Conteneur principal pour les sections
export const Section = styled.section`
  padding: 50px 20px;
  min-height: 100vh;  /* S'assure que chaque section prend toute la hauteur de l'écran */
  display: flex;
  flex-direction: column;
  justify-content: center; /* Centrer verticalement le contenu */
  // border-bottom: 1px solid #333;
  background-color: #000;
`;

export const Container = styled.div`
  background-color: #000;
  // color: #f5f5dc;
  padding-top: 80px; /* Pour compenser la hauteur du header */
  height: 100%;
`;
