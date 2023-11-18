import React, { useState } from 'react';
// import Gallery from '../Gallery';
import { capitalizeFirstLetter } from '../../utils/helpers';
// import image1 from "../../assets/small/projects/1.jpg";

const Portfolio = ({ category }) => {
  // useState is a function that always returns an array.  First item is a value of your state.  Second item is a setter, to allow you to set the state to something else.
  const [currentProject, setCurrentProject] = useState();

  // Cannot use Hooks in a for loop
  const [projects] = useState([
    {
      name: 'More Tech News',
      category: 'commercial',
      description:
        'A blog site for tech news created with Node.js. Users can sign up, then post, upvote, and comment on links to news articles. Currently troubleshooting user signup.',
        url: 'https://more-tech-frozen-tundra-12598.herokuapp.com/'
    },
    {
      name: 'Note taker',
      category: 'commercial',
      description:
        'A simple note-taking app that runs entirely in the browser using Express and Node.js. A user session saves after submitting a note and they can even exit the browser without losing their posts.',
        url: 'https://sheltered-coast-28214.herokuapp.com/'
    },
    {
      name: 'Work Day Scheduler',
      category: 'commercial',
      description:
        'This is a simple calendar application that allows the user to save events for each hour of the day. This app runs in the browser and features dynamically-updated HTML and CSS, using the Momentjs library and powered by jQuery.',
        url: 'https://scarlinj.github.io/Work_Day_Scheduler/'
    },
    {
      name: 'Budget Tracker',
      category: 'commercial',
      description:
        'Use this simple app to track your income and expenses in the cloud. Add funds and subtract them as needed. You can even use this app offline!',
        url: 'https://intense-eyrie-26187.herokuapp.com/'
    },
    {
      name: 'Password Generator',
      category: 'commercial',
      description:
        'Generate secure password based on user criteria',
        url: 'https://scarlinj.github.io/Password-Generator/'
    },
    {
      name: 'ReadME Generator',
      category: 'commercial',
      description:
        'Generate a readME.md file with header links',
        url: 'https://github.com/scarlinj/Professional_README_Generator'
    },
    {
      name: 'Team Profile Generator',
      category: 'commercial',
      description:
        'Generate a profile for a user',
        url: 'https://github.com/scarlinj/Team_Profile_Generator'
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
  const currentProjects = projects.filter(project => project.category === "commercial");

  return (
    <div>
    {/* <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
      <p>{currentCategory.name}</p> */}
      <div className="flex-row">
        {/* you will have to name the jpgs "1", "2", etc. */}
        {currentProjects.map((image, i) => (
          <img
          // src was assigned the require expression. Though this isn't a common practice, it certainly has its use cases! 
          // We were also able to take advantage of the incremental naming of the images by using i
          // To render the image, the default property must be invoked.
          // indexes start at 0 - if projectPreview images start at 1, use {i+1}
            // src={require(`../../assets/small/${category}/${i}.JPG`).default}
            // src={`img${i+1}`}
            // test with a static image imported at top: ---> this works
            // src={image1}
            // pull the range of images from projects
            src={`${i+1}`}
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