import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import ContactForm from './components/Contact';
import Portfolio from "./components/Portfolio";
import Gallery from "./components/Gallery";
import Resume from "./components/Resume";
import Footer from './components/Footer';
import './App.css';
import { render } from '@testing-library/react';

// New props also cause components to re-render. So even though the setter in App.js doesn’t cause its children to re-render, the fact that its prop changed does.

function App() {
  // useState is a hook imported from React that always returns an array.  First item is the value of your state (declare your state).  
  // Second item is a setter (set your state), which allows you to state something else.
  const [categories] = useState([
    { name: 'about', description: 'Gives a background of Stephen and his experience in web development' },
    { name: 'contact', description: 'How to contact me' },
    { name: 'portfolio', description: 'Examples of websites developed' },
    { name: 'resume', description: 'Professional resume' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[1]);
  
function findCategory(str) {
  // receive string value and loop through categories
  const selectedCategory=categories.find(category => {
    return category.name===str;
  })
  setCurrentCategory(selectedCategory)
};

//  use a switch case - key in () will be currentCategory, since it stays the same so we can figure out what to render
// if currentCategory.name===portfolio, do some sort of code
function renderCategory() {
  switch (currentCategory.name) {
    case "about":
      return <About/>

      case "contact":
        return <ContactForm/>

      case "portfolio":
      return <Portfolio/>

      case "resume":
        return <Resume/>

      // if it doesn't find a match, return About page
    default:
      return <About/>
      break;
  }
 }

  return (
    <div>
      <Nav
      // when the state changes, this will render the below
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        findCategory={findCategory}
      ></Nav>
      <main>
        {/* <Gallery></Gallery>
        <Portfolio></Portfolio> 
        <About></About> 
        <Contact></Contact>   */}
        {renderCategory()}
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
