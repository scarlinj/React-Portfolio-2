import React, { useState } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
// import photo from "../../assets/small/commercial/0.jpg";

const ProjectList = ({ category }) => {
  const [projects] = useState([
    {
      name: 'Grocery aisle',
      category: 'commercial',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Grocery booth',
      category: 'commercial',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Building exterior',
      category: 'commercial',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    },
    {
      name: 'Restaurant table',
      category: 'commercial',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie'
    }
  ]);

    // (currentCategory) {
  //   const currentCategory = {
  //       name: "projects",
  //       description:
  //         "Portfolio of projects for web development",
  //     };

  // Add filter to display project screens properly
  // going through each project in the projects array, trying to find every project that matches the category that was selected by the user. 
  // If a project matches the condition, it is returned in an array and assigned to currentProjects. Then we can map the currentProjects array to render 
  // each project that matches the category selected by the user.
  const currentProjects = projects.filter((project) => project.category === category);



  return (
    <div>
    {/* <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
      <p>{currentCategory.name}</p> */}
      <div className="flex-row">
        {currentProjects.map((image, i) => (
          <img
          // src was assigned the require expression. Though this isn't a common practice, it certainly has its use cases! 
          // We were also able to take advantage of the incremental naming of the images by using i
          // To render the image, the default property must be invoked.
            src={require(`../../assets/small/${category}/${i}.jpg`).default}
            // alt attribute used for accessibility user-assistance devices, such as screen readers, so the image's name was assigned
            alt={image.name}
            className="img-thumbnail mx-1"
            // key attribute assigned the image's name. This attribute value must be unique string. The absence of this unique key value will cause an error message
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
}
export default ProjectList;