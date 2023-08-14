import React, { useState } from 'react';
// import Nav from './components/Nav';
import Nav from './components/Nav';
import About from './components/About';
import Portfolio from "./components/Portfolio";
import './App.css';

function App() {
  const [categories] = useState([
    {
      name: 'about',
      description: 'Gives a background of Stephen and his experience in web development',
    },
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
        <About></About>
        <Portfolio></Portfolio>  
      </main>
    </div>
  );
}


// export default About;
export default App;
