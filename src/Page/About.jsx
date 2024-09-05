// src/Page/About.js
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';

function About() {
  return (
    <div className="bg-black text-white vh-100 align-items-center justify-content-center">
      <div className="container text-center py-5">
        <h1 className='fw-bold py-3'>ABOUT <span className='text-warning'>ME</span></h1>
       <div className="container ">
        <div className="row ">
        <div className='col-lg-7 '>
        <h4 className='pt-3 '>PERSONAL <span className='text-warning'>INFOS</span> </h4>
        <div className="row gap-5 py-5 context">
        <div className='col-lg-4' >
        <p>Firt Name: Aakash</p>
        <p>Last Name: Yadav</p>
        <p>Age: 22</p>
        <p>Nationality:Hindu</p>
        <p>Freelance: Available</p>
        </div>
        <div className='col-lg-6'>
        <p>Address: Kathmandu</p>
        <p>Phone: +9779864512248</p>
        <p>Email:aakashyadav94486@gmail.com</p>
        <p>Skype: aakashyadav94486</p>
        <p>language: Nepali, English, Hindi</p>
        </div>
        </div>
        
        </div>

        <div className='col-lg-5 py-3 d-flex flex-column align-items-center'>
        <div className='d-flex gap-5 '>
          <div className="text-center border border-secondary">
            <p><span className='text-warning fw-bold fs-1'> 2+ </span><br />YEARS OF <br /> EXPERIENCE</p>
          </div>
          <div className=" border border-secondary">
            <p><span className='text-warning fw-bold fs-1'> 20+ </span><br />COMPLETED <br />PROJECTS</p>
          </div>
          </div>
          <div className='d-flex gap-5 pt-3'>
          <div className="border border-secondary">
            <p><span className='text-warning fw-bold fs-1'> 18+</span><br />HAPPY <br /> CUSTOMER</p>
          </div>
          <div className="border border-secondary">
            <p><span className='text-warning fw-bold fs-1'> 5+</span><br />AWARDS <br />ON</p>
          </div>
          </div>
        </div>
        </div>
        <a href="./src/assets/Resume.pdf" className="btn btn-warning btn-lg my-2 text-white fw-bold" download>
  Download CV
</a>

       </div>
      </div>

      <div className="container text-center d-flex flex-column align-items-center">
  <div className="row justify-content-center">
    <div className="col-lg-12">
      <h4 className="fw-bold">MY <span className="text-warning">SKILLS</span></h4>
      
      <div className="row gap-3 gap-lg-5 py-5 justify-content-center">
        <div className="col-6 col-md-4 col-lg-2 mb-3 mb-lg-0">
          <div className="circle mx-auto">
            <img src="./images/html1.png" alt="HTML Icon" className="img-fluid" />
          </div>
        </div>
        <div className="col-6 col-md-4 col-lg-2 mb-3 mb-lg-0">
          <div className="circle mx-auto">
            <img src="./images/css1.png" alt="CSS Icon" className="img-fluid" />
          </div>
        </div>
        <div className="col-6 col-md-4 col-lg-2 mb-3 mb-lg-0">
          <div className="circle mx-auto">
            <img src="./images/tailwind1.png" alt="Tailwind Icon" className="img-fluid" />
          </div>
        </div>
        <div className="col-6 col-md-4 col-lg-2 mb-3 mb-lg-0">
          <div className="circle mx-auto">
            <img src="./images/javascrpt.png" alt="JavaScript Icon" className="img-fluid" />
          </div>
        </div>
      </div>
      
      <div className="row gap-3 gap-lg-5 py-3 justify-content-center">
        <div className="col-6 col-md-4 col-lg-2 mb-3 mb-lg-0">
          <div className="circle mx-auto">
            <img src="./images/react1.png" alt="React Icon" className="img-fluid" />
          </div>
        </div>
        <div className="col-6 col-md-4 col-lg-2 mb-3 mb-lg-0">
          <div className="circle mx-auto">
            <img src="./images/nextjs2.png" alt="Next.js Icon" className="img-fluid" />
          </div>
        </div>
        <div className="col-6 col-md-4 col-lg-2 mb-3 mb-lg-0">
          <div className="circle mx-auto">
            <img src="./images/bootstrap1.png" alt="Bootstrap Icon" className="img-fluid" />
          </div>
        </div>
        <div className="col-6 col-md-4 col-lg-2 mb-3 mb-lg-0">
          <div className="circle mx-auto">
            <img src="./images/figma.png" alt="Figma Icon" className="img-fluid" />
          </div>
        </div>
      </div>
      
    </div>
  </div>
</div>





      
      <Navbar />
</div>
    
  );
}

export default About;
