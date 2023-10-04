import React, { useState } from 'react';
import PhotoList from '../PhotoList';
import Portfolio from '../Portfolio';
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from "../../assets/small/projects/1.JPG"

function Gallery(props) {
  const { currentCategory } = props;
  return (
    <section>
    {/* <h1 data-testid="h1tag">{capitalizeFirstLetter(currentCategory.name)}</h1> */}
    {/* currentCategory.name is not a valid path.  Find better way to sort. */}
      {/* <p>{currentCategory.name}</p> */}
      {/* <p>{currentCategory.description}</p> */}
      <PhotoList />
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