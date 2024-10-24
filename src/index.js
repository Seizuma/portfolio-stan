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

document.addEventListener("DOMContentLoaded", function () {
  const fadeIns = document.querySelectorAll('.fade-in');

  // Check if the screen width is less than or equal to 768px (commonly used breakpoint for mobile devices)
  const isMobile = window.innerWidth <= 768;

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: isMobile ? 0.1 : 0.2 // Use 0.1 for mobile, and 0.2 for larger screens
  });

  fadeIns.forEach(section => {
    observer.observe(section);
  });
});
