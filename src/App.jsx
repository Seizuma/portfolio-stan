import React from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App" style={{ backgroundColor: '#000', color: '#f5f5dc' }}>
      <Header />
      <section id="profile">
        <Profile />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <Contact />
    </div>
  );
}

export default App;