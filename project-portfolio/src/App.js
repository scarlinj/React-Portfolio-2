import React, { useState } from 'react';
// import Nav from './components/Nav';
import About from './components/About';
import Nav from './components/Nav';
import './App.css';

function App() {

  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
      </main>
    </div>
  );
}


// export default About;
export default App;
