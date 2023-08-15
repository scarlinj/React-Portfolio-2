import React, { useState } from 'react';
// import Nav from './components/Nav';
import Nav from './components/Nav';
import Portfolio from "./components/Portfolio";
import Gallery from "./components/Gallery";
import About from './components/About';
import './App.css';

// New props also cause components to re-render. So even though the setter in App.js doesn’t cause its children to re-render, the fact that its prop changed does.

function App() {
  const [categories] = useState([
    { name: 'about', description: 'Gives a background of Stephen and his experience in web development' },
    { name: 'portfolio', description: 'Examples of websites developed' },
    { name: 'resume', description: 'Professional resume' },
    { name: 'contact', description: 'How to contact me' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
        <Gallery currentCategory={currentCategory}></Gallery>
        <Portfolio></Portfolio> 
        <About></About>   
      </main>
    </div>
  );
}

export default App;
