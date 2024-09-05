// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './Page/Home';
import About from './Page/About';
import Project from './Page/Project';
import Messages from './Page/Messages';
import PageTransition from './Components/PageTransition'; // Import the transition component

function App() {
  const location = useLocation();

  return (
    <PageTransition location={location}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/messages" element={<Messages />} />

      </Routes>
    </PageTransition>
  );
}

export default () => (
  <Router>
    <App />
  </Router>
);
