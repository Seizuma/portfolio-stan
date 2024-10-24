// App.jsx

import React, { useEffect } from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Container, Section } from './styles';
// Supprimer l'import de react-spring si vous ne l'utilisez plus
// import { useSpring, animated } from 'react-spring';

function App() {
  useEffect(() => {
    const fadeIns = document.querySelectorAll('.fade-in');
    const isMobile = window.innerWidth <= 768;

    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    };

    const observerOptions = {
      threshold: isMobile ? 0.1 : 0.2
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    fadeIns.forEach(section => {
      observer.observe(section);
    });

    // Nettoyage de l'observateur lors du démontage du composant
    return () => {
      fadeIns.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <Container>
      <Header />
      <Section className="fade-in" id="profile">
        <Profile />
      </Section>
      <Section className="fade-in" id="aboutme">
        <AboutMe />
      </Section>
      <Section className="fade-in" id="skills">
        <Skills />
      </Section>
      <Section className="fade-in" id="education">
        <Education />
      </Section>
      <Section className="fade-in" id="projects">
        <Projects />
      </Section>
      <Section className="fade-in" id="contact">
        <Contact />
      </Section>
    </Container>
  );
}

export default App;
