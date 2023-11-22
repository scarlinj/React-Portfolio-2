import React, { useState } from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";
 

function Resume() {

  return (
    <section className="my-5" >
      <p id="about">See my Github and LinkedIn Profile below:</p>
      {/* add a cover image here if needed */}
      {/* <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" /> */}
      <div className="my-2">

          <a href="https://github.com/scarlinj">Github
        </a>
        <br></br>
        <a href="https://www.linkedin.com/in/stephen-carlin-14838b21/">
        LinkedIn
        </a>

      </div>
    </section>
  )
}


export default Resume;