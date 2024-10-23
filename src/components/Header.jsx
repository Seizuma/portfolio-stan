import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: ${(props) => (props.scrolled ? '#333' : '#000')}; /* Change de couleur en fonction du défilement */
  color: #fff;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  font-family: 'Poppins', sans-serif;
  font-size: 1.5rem;
  transition: background 0.3s ease, padding 0.3s ease; /* Animation pour le background et le padding */
  padding: ${(props) => (props.scrolled ? '10px' : '20px')}; /* Réduit le padding quand on défile */
`;

const NavLinks = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;
`;

const NavLink = styled(ScrollLink)`
  color: ${(props) => (props.active ? '#daa520' : '#fff')};
  margin: 0 25px;
  text-decoration: ${(props) => (props.active ? 'underline' : 'none')};
  font-weight: ${(props) => (props.active ? 'bold' : 'normal')};
  cursor: pointer;
  transition: color 0.3s ease;
  font-size: 20px;

  &:hover {
    color: #daa520;
  }
`;

const Logo = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  justify-content: space-evenly;
`;

const Spacer = styled.div`
  width: 20%;
`;

const Header = () => {
  const [activeSection, setActiveSection] = useState('profile');
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar scrolled={scrolled ? "true" : undefined}>
      <Spacer />
      <Logo>Stan</Logo>
      <NavLinks>
        <NavLink
          to="profile"
          smooth={true}
          duration={500}
          spy={true}
          active={activeSection === 'profile' ? "true" : undefined}
          onSetActive={() => setActiveSection('profile')}
        >
          Profil
        </NavLink>
        <NavLink
          to="skills"
          smooth={true}
          duration={500}
          spy={true}
          active={activeSection === 'skills' ? "true" : undefined}
          onSetActive={() => setActiveSection('skills')}
        >
          Compétences
        </NavLink>
        <NavLink
          to="education"
          smooth={true}
          duration={500}
          spy={true}
          active={activeSection === 'education' ? "true" : undefined}
          onSetActive={() => setActiveSection('education')}
        >
          Études
        </NavLink>
        <NavLink
          to="projects"
          smooth={true}
          duration={500}
          spy={true}
          active={activeSection === 'projects' ? "true" : undefined}
          onSetActive={() => setActiveSection('projects')}
        >
          Projets
        </NavLink>
        <NavLink
          to="contact"
          smooth={true}
          duration={500}
          spy={true}
          active={activeSection === 'contact' ? "true" : undefined}
          onSetActive={() => setActiveSection('contact')}
        >
          Contact
        </NavLink>
      </NavLinks>
    </Navbar>
  );
};

export default Header;
