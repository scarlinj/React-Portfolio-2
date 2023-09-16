import React from 'react';
import Portfolio from '../Portfolio';
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from "../../assets/small/projects/1.JPG"

function Gallery(props) {
    const { currentCategory } = props;
    // return {
    //     name: "projects",
    //     description:
    //       "Portfolio of projects for web development",
    //   };
  return (
    <section>
    <h1 data-testid="h1tag">{capitalizeFirstLetter(currentCategory.name)}</h1>
      <p>{currentCategory.name}</p>
      {/* <p>{currentCategory.description}</p> */}
      <div>
        <img 
          src={photo}
          alt="photo example"
          className="img-thumbnail mx-1"
      />
      </div>
      {/* <Portfolio category={currentCategory.name} /> */}
    </section>
  );
}

export default Gallery;