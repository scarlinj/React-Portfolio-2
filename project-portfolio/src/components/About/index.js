import React from 'react';
// import coverImage from "../../assets/cover/cover-image.jpg";
import profileImage from "../../assets/small/portraits/Stephen-Profile.jpg"
// import logo from './logo.svg';
// import './App.css';

function About() {
    return (
      <section className="my-5">
        <h1 id="about">Who am I?</h1>
        {/* <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" /> */}
        <img src={profileImage} className="my-2" alt="stephenProfileImage">
        </img>
        <p>
          Stephen is a professional in financial tehnology in San Francisco, California
        </p>
      </section>
    );
  }

export default About;