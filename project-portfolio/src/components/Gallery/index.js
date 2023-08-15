import React from 'react';
import Portfolio from '../Portfolio';
import { capitalizeFirstLetter } from '../../utils/helpers';
// import photo from "../../assets/small/commercial/0.jpg";

function Gallery( {currentCategory} ) {
    const { name, description } = currentCategory;
    // return {
    //     name: "projects",
    //     description:
    //       "Portfolio of projects for web development",
    //   };
  return (
    <section>
    <h1 data-testid="h1tag">{capitalizeFirstLetter(name)}</h1>
      {/* <p>{currentCategory.name}</p> */}
      <p>{description}</p>
      <Portfolio />
      <div>
      </div>
    </section>
  );
}

export default Gallery;