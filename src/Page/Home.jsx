import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';

function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <>
      <section className='text-white align-items-center position-relative section-full-height'>
        <div className="logo-container position-absolute">
          <img className='logo' src="./images/logo.png" alt="logo" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-12 text-center mb-4 mb-lg-0">
              <img
                src="./images/myprofile.jpg"
                className="responsive-img"
                alt="image"
              />
            </div>
            <div className="col-lg-7 text-center align-self-center col-12">
              <h1 className='fw-bold my-2'>
                <span className='text-warning'>I'M AAKASH YADAV</span> <br /> FRONT-END DEVELOPER
              </h1>
              <p>
                I'm from Nepal and i am web designer &  focused on crafting clean & user‑friendly experiences. I am passionate about building excellent software that improves the lives of those around me.
              </p>
              <Link to="/about" className='btn btn-warning btn-lg my-2 text-white fw-bold'>More About Me</Link>
            </div>
          </div>
        </div>
        <div className="menu-icon d-lg-none position-absolute">
          <button className='btn btn-warning' onClick={toggleNav}>
            <i className="bi bi-list"></i>
          </button>
        </div>
        <Navbar />
      </section>

      <div className={`side-nav ${isNavOpen ? 'open' : ''}`}>
        <button className='btn btn-warning' onClick={toggleNav}>
          <i className="bi bi-x"></i>
        </button>
        <ul className="list-unstyled">
          <li><Link to="/"><i className="bi bi-house-dash-fill"></i> Home</Link></li>
          <li><Link to="/about"><i className="bi bi-person-fill"></i> Profile</Link></li>
          <li><Link to="/projects"><i className="bi bi-backpack-fill"></i> Projects</Link></li>
          <li><Link to="/messages"><i className="bi bi-envelope-open-fill"></i> Messages</Link></li>

        </ul>
      </div>
    </>
  );
}
export default Home;
