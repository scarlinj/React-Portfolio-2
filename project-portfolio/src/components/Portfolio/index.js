import React, { useState } from 'react';
import Gallery from '../Gallery';
import { capitalizeFirstLetter } from '../../utils/helpers';
// import project from "../../assets/small/projects";

const Portfolio = ({ category }) => {
  // useState is a function that always returns an array.  First item is a value of your state.  Second item is a setter, to allow you to set the state to something else.
  // Cannot use Hooks in a for loop
  const [projects] = useState([
    {
      name: 'Password Generator',
      category: 'commercial',
      description:
        'Generate secure password based on user criteria',
        url: 'https://github.com/scarlinj/Challenge-3-Password-Generator.git'
    },
    {
      name: 'ReadME Generator',
      category: 'commercial',
      description:
        'Generate a readME.md file with header links',
        url: 'https://github.com/scarlinj/Challenge_9_Professional_README_Generator.git'
    },
    {
      name: 'Portfolio Generator',
      category: 'commercial',
      description:
        'Generate a profile for a user',
        url: 'https://github.com/scarlinj/portfolio-generator.git'
    },
    {
      name: 'Country Holiday Search',
      category: 'commercial',
      description:
        'Look up a country and get a list of holidays for that country',
        url: 'https://github.com/scarlinj/Project-One.git'
    },
    {
      name: 'Weather Dashboard',
      category: 'commercial',
      description:
        'Look up a ZIP code and get the weather report for that ZIP code',
        url: 'https://github.com/scarlinj/weather-dashboard.git'
    },
    {
      name: 'Recipe Blog',
      category: 'commercial',
      description:
        'Post, find, and comment on recipes from other users',
        url: 'https://github.com/scarlinj/weather-dashboard.git'
    },
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
  const currentProjects = projects.filter(project => project.category === category);

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
export default Portfolio;