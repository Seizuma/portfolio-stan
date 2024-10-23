import React from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { Container, Section } from './styles';
import { useSpring, animated } from 'react-spring';

function App() {
  const fadeIn = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 200 });

  return (
    <Container>
      <Header />
      <Section as={animated.section} style={fadeIn} id="profile">
        <Profile />
      </Section>
      <Section as={animated.section} style={fadeIn} id="skills">
        <Skills />
      </Section>
      <Section as={animated.section} style={fadeIn} id="education">
        <Education />
      </Section>
      <Section as={animated.section} style={fadeIn} id="projects">
        <Projects />
      </Section>
      <Section as={animated.section} style={fadeIn} id="contact">
        <Contact />
      </Section>
    </Container>
  );
}

export default App;
