import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="icon-container d-none d-lg-block">
      <ul className="text-end text-white list-unstyled d-flex flex-column align-items-center gap-3 icon-list ">
        <li><Link  to="/" className="icon-item text-decoration-none"><i className="bi bi-house-dash-fill"></i></Link></li>
        <li><Link to="/about" className="icon-item text-decoration-none"><i className="bi bi-person-fill"></i></Link></li>
        <li><Link to="/projects" className="icon-item text-decoration-none"><i className="bi bi-backpack-fill"></i></Link></li>
        <li><Link to="/messages" className="icon-item text-decoration-none"><i className="bi bi-envelope-open-fill"></i></Link></li>
        
      </ul>
    </div>
  );
}

export default Navbar;
