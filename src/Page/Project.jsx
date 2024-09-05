import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";

const projectImages = [
  { id: 1, src: "./images/1.jpg", alt: "Project 1" },
  { id: 2, src: "./images/2.jpg", alt: "Project 2" },
  { id: 3, src: "./images/3.jpg", alt: "Project 3" },
  { id: 4, src: "./images/4.jpg", alt: "Project 4" },
  { id: 5, src: "./images/5.jpg", alt: "Project 5" },
  { id: 6, src: "./images/6.jpg", alt: "Project 6" },
];

function Project() {
  return (
    <div className="bg-dark text-white vh-100 align-items-center justify-content-center">
      <div className="container text-center">
        <h1 className="fw-bold my-2 text-warning">Projects</h1>
        <div className="container">
          <div className="row">
            {projectImages.map((image) => (
              <div key={image.id} className="col-12 col-md-4 mb-3">
                <div className="project-img-container">
                  <img src={image.src} alt={image.alt} className="img-fluid" />
                  <div className="hover-text">{image.alt}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Link to="/" className="btn btn-warning btn-lg my-2 text-white fw-bold">
          Back to Home
        </Link>
      </div>
      <Navbar />
    </div>
  );
}

export default Project;
