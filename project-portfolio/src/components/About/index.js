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
        <li>
          I am a financial tehnology professional in San Francisco, California.
        </li>
        <li>I have worked in finance for over 10 years, particularly in fintech for the last five years.</li>
        <li>
          I also have a passion for programming and web development, so I hope to build a long career in this space.
          Check out my portfolio in this site!
        </li>
      </section>
    );
  }

export default About;