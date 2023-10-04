import React, { useState } from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

function Footer() {

  return (
    <footer className="flex-row px-1">
      <h2>
        <a>
          <body> Created May 2022 </body>
        </a>
        <a href="https://github.com/scarlinj">Github
        </a>
        
        <a href="https://www.linkedin.com/in/stephen-carlin-14838b21/">
          LinkedIn
        </a>
       
      </h2>
    </footer>
  );
}

export default Footer;