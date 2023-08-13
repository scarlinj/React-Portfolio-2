import React from 'react';
import coverImage from "../../assets/cover/cover-image.jpg";
// import logo from './logo.svg';
// import './App.css';

function Contact() {
    return (
      <section className="my-5">
        <h1 id="about">See my contact info below</h1>
        <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
      </section>
    );
  }

export default Contact;