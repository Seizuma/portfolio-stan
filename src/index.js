import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

document.addEventListener("DOMContentLoaded", onDOMContentLoaded);

function onDOMContentLoaded() {
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
}
