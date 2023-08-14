import React from 'react';

function Nav() {
  const  categories = [
    { name: 'About Me', description: 'About the developer' },
    { name: 'Portfolio', description: 'A list of projects I developed' },
    { name: 'Resume', description: 'My professional background' },
    { name: 'Contact Me', description: 'Contact me' }
  ];
  // const handleClick = () => {
  //   console.log("click handled")
  // };
  function categorySelected(name) {
    console.log(`${name} clicked`)
  }

    return (
      <header>
        <h1 id="nav"></h1>
        <h2>
          <a href="/">
            <span role="img" aria-label="logo"> 👨‍💻 </span> Stephen Carlin Web Development
          </a>
        </h2>
  <nav>
    <ul className="flex-row">
      {categories.map((category) => (
        <li className="mx-1" key={category.name}>
          {/* onClick() attribute is expecting a callback function declaration.
           It's important that we wrap it in a function declaration rather than just calling categorySelected(category.name), 
           which would cause the function to get called whenever the component renders as well */}
              <span onClick={() => categorySelected(category.name)} >
      {category.name}
    </span>
        </li>
        ))}
    </ul>
  </nav>
      </header>
    );
  }

export default Nav;