import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from "../../assets/small/commercial/0.jpg";

function Portfolio(props) {
    const currentCategory = {
        name: "projects",
        description:
          "gallery of projects for web development",
      };
  return (
    <section>
    <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
      <p>{currentCategory.name}</p>
      <div>
        <img
            src={photo}
            alt="Project Example"
            className="img-thumbnail mx-1"
        />
      </div>
    </section>
  );
}
export default Portfolio;