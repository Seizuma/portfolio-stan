import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link as ScrollLink } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

// Navbar container
const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: ${(props) => (props.scrolled ? '#333' : '#000')};
  color: #fff;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  font-family: 'Poppins', sans-serif;
  font-size: 1.5rem;
  transition: background 0.3s ease, padding 0.3s ease;
  padding: ${(props) => (props.scrolled ? '10px' : '20px')};

  @media (max-width: 768px) {
    padding: 10px;
    justify-content: space-between; /* Ensure space-between on small screens */
  }
`;

// Links container
const NavLinks = styled.div`
  display: flex;
  justify-content: center;
  flex-grow: 1;

  @media (max-width: 768px) {
    display: ${(props) => (props.$isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 60px;
    right: 0;
    background-color: #000;
    width: 100%;
    height: 100vh;
    z-index: 999;
    align-items: center;
    justify-content: center;
    overflow: hidden; /* Prevent overflow */
    flex-grow: 0; /* Prevent NavLinks from taking space */
  }
`;

// NavLink styles
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

  @media (max-width: 768px) {
    margin: 20px 0;
    font-size: 1.5rem;
  }
`;

// Logo styling as an image
const LogoImage = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;
  
  @media (max-width: 768px) {
    margin-left: 10px;
  }
`;

// Burger menu icon container
const BurgerMenu = styled.div`
  display: none;
  z-index: 1001;

  @media (max-width: 768px) {
    display: block;
    cursor: pointer;
    font-size: 2rem;
    color: #fff;
    margin-right: 10px; /* Space to avoid overflow */
  }
`;

// Spacer to manage layout
const Spacer = styled.div`
  width: 10%;

  @media (max-width: 768px) {
    display: none; /* Hide spacer on small screens */
  }
`;

const Header = () => {
  const [activeSection, setActiveSection] = useState('profile');
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMenuOpen(false); // Close the menu if it's open
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
      {/* Use LogoImage to display the favicon */}
      <LogoImage
        src={`${process.env.PUBLIC_URL}/favicon.ico`}
        alt="Logo"
        onClick={handleLogoClick}
      />

      <BurgerMenu onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </BurgerMenu>

      <NavLinks $isOpen={menuOpen}>
        <NavLink
          to="profile"
          smooth={true}
          duration={500}
          spy={true}
          active={activeSection === 'profile' ? "true" : undefined}
          onSetActive={() => {
            setMenuOpen(false);
            setActiveSection('profile');
          }}
        >
          Profil
        </NavLink>
        <NavLink
          to="aboutme"
          smooth={true}
          duration={500}
          spy={true}
          active={activeSection === 'aboutme' ? "true" : undefined}
          onSetActive={() => {
            setMenuOpen(false);
            setActiveSection('aboutme');
          }}
        >
          À Propos
        </NavLink>
        <NavLink
          to="skills"
          smooth={true}
          duration={500}
          spy={true}
          active={activeSection === 'skills' ? "true" : undefined}
          onSetActive={() => {
            setMenuOpen(false);
            setActiveSection('skills');
          }}
        >
          Compétences
        </NavLink>
        <NavLink
          to="education"
          smooth={true}
          duration={500}
          spy={true}
          active={activeSection === 'education' ? "true" : undefined}
          onSetActive={() => {
            setMenuOpen(false);
            setActiveSection('education');
          }}
        >
          Expérience
        </NavLink>
        <NavLink
          to="projects"
          smooth={true}
          duration={500}
          spy={true}
          active={activeSection === 'projects' ? "true" : undefined}
          onSetActive={() => {
            setMenuOpen(false);
            setActiveSection('projects');
          }}
        >
          Projets
        </NavLink>
        <NavLink
          to="contact"
          smooth={true}
          duration={500}
          spy={true}
          active={activeSection === 'contact' ? "true" : undefined}
          onSetActive={() => {
            setMenuOpen(false);
            setActiveSection('contact');
          }}
        >
          Contact
        </NavLink>
      </NavLinks>
    </Navbar>
  );
};

export default Header;
