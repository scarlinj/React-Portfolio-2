import React, { useState } from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";
 

function Resume() {

  return (
    <section className="my-5" >
      <h1 id="about">See my Resume and LinkedIn Profile below</h1>
      {/* add a cover image here if needed */}
      {/* <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" /> */}
      <div className="my-2">
        
        <a href="https://www.linkedin.com/in/stephen-carlin-14838b21/">
        LinkedIn
        </a>

        <a href="https://github.com/scarlinj">Github
        </a>

      </div>
    </section>
  )
}


export default Resume;