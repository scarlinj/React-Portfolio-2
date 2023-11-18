import React, { useState } from 'react';
// import Gallery from '../Gallery';
import Modal from '../Modal';
import photo from "../../assets/small/projects/1.jpg"

const PhotoList = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();

  const [photos] = useState([
    {
      name: 'More Tech News',
      category: 'blog',
      description:
        'Another blog site for tech news created with Node.js. Users can sign up, then post, upvote, and comment on links to news articles. Currently troubleshooting user signup.'
    },
    {
        name: 'Budget Tracker',
        category: 'commercial',
        description:
          'Use this simple app to track your income and expenses in the cloud. Add funds and subtract them as needed. You can even use this app offline!'
      },
      {
        name: 'Note Taker',
        category: 'commercial',
        description:
          'A simple note-taking app that runs entirely in the browser using Express and Node.js. A user session saves after submitting a note and they can even exit the browser without losing their posts.'
      },
      {
        name: 'Professional ReadMe Generator',
        category: 'commercial',
        description:
          'Professional Readme.md file generator using Node.js. Answer a series of prompts through a Javascript reader to generate a quality Readme file with different sections.'
      },
      {
        name: 'Work Day Scheduler',
        category: 'commercial',
        description:
          'This is a simple calendar application that allows the user to save events for each hour of the day. This app runs in the browser and features dynamically-updated HTML and CSS, using the Momentjs library and powered by jQuery.'
      },
      {
        name: 'Password Generator',
        category: 'commercial',
        description:
          'Answer a series of prompts to define parameters and generate your own secure password.'
      },
  ]);

  const currentPhotos = photos.filter(photo => photo.category === category);

  const toggleModal = (image, i) => {
    setCurrentPhoto({ ...image, index: i });
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
        {isModalOpen && (
        <Modal onClose={toggleModal} currentPhoto={currentPhoto} />
      )}
      <div className="flex-row">
        {currentPhotos.map((image, i) => (
          <img
            src={require(`../../assets/small/${category}/${i}.jpg`).default}
            alt={image.name}
            className="img-thumbnail mx-1"
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoList;