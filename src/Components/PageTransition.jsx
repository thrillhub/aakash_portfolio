// src/components/PageTransition.js
import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './PageTransition.css'; // Import the CSS for animations

const PageTransition = ({ children, location }) => (
  <TransitionGroup>
    <CSSTransition
      key={location.key}
      timeout={800}
      classNames="parallax"
    >
      <div className="page-transition">
        {children}
      </div>
    </CSSTransition>
  </TransitionGroup>
);

export default PageTransition;
