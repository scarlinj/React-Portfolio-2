import React from 'react';
import Portfolio from '../Portfolio';
import { capitalizeFirstLetter } from '../../utils/helpers';
// import photo from "../../assets/small/commercial/0.jpg";

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
      {/* <p>{currentCategory.name}</p> */}
      <p>{currentCategory.description}</p>
      <Portfolio category={currentCategory.name} />
    </section>
  );
}

export default Gallery;