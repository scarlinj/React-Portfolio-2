import React from 'react';
import coverImage from "../../assets/cover/cover-image.jpg";
// import logo from './logo.svg';
// import './App.css';

function Contact() {
    return (
      <section className="my-5">
        <h1 id="about">Contact Info</h1>
        <div className='my-2'>
        <p>
          E-mail me at: scarlinj@gmail.com
        </p>
        <p>
          My Github Profile: https://github.com/scarlinj
        </p>
        </div>
        <img src={coverImage} className="my-2" style={{ width: "50%" }} alt="cover image" />
      </section>
    );
  }

export default Contact;