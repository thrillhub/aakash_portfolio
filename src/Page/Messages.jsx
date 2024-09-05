import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';

function Messages() {
  return (
    <>
      <Navbar />
      <div className="py-5 text-white vh-100  align-items-center justify-content-center">
  <div className="container text-center">
    <h1 className='fw-bold'>GET IN <span className='text-warning'>TOUCH</span></h1>
    <div className="row">
      <div className="col-lg-4 col-md-12 text-start py-5">
        <h4 className=''>DON'T BE SHY!</h4>
        <p>Feel free to get in touch with me. I am always open to discussing new projects, creative ideas, or opportunities to be part of your visions.</p>
        <ul className="contact-info list-unstyled">
  <li className="mb-2">
    <div className="d-flex align-items-center">
      <i className="bi bi-envelope-fill text-warning me-2"></i>
      <span>mail me</span>
    </div>
    <a href="mailto:steve@mail.com" className="text-decoration-none text-reset ms-4">aakashyadav94486@mail.com</a>
  </li>
  <li>
    <div className="d-flex align-items-center">
      <i className="bi bi-telephone-fill text-warning me-2"></i>
      <span>call me</span>
    </div>
    <a href="tel:+21621184010" className="text-decoration-none text-reset ms-4">+9779864512248</a>
  </li>
</ul>


        <ul className="social-icons list-unstyled d-flex gap-2">
          <li><a href=""><i className="bi bi-facebook"></i></a></li>
          <li><a href=""><i className="bi bi-instagram"></i></a></li>
          <li><a href=""><i className="bi bi-twitter-x"></i></a></li>
          <li><a href=""><i className="bi bi-youtube"></i></a></li>
        </ul>
      </div>
      <div className="col-lg-8 col-md-12">
        <div className="contact-form text-start p-5 d-flex flex-column gap-3">
          <input type="text" className="form-control mb-3" placeholder="YOUR NAME" />
          <input type="email" className="form-control mb-3" placeholder="YOUR EMAIL" />
          <input type="text" className="form-control mb-3" placeholder="YOUR SUBJECT" />
          <textarea className="form-control mb-3" rows="5" placeholder="YOUR MESSAGE"></textarea>
          <button className='btn btn-warning btn-lg my-2 text-white w-50 align-self-center'>
  SEND MESSAGE
</button>


        </div>
      </div>
    </div>
    <Link to="/" className='btn btn-warning btn-lg my-2 text-white fw-bold'>Back to Home</Link>
  </div>
</div>

    </>
  );
}
export default Messages;
