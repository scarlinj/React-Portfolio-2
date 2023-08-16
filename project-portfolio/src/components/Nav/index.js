import React, { useState, useEffect } from 'react';
import { capitalizeFirstLetter } from "../../utils/helpers";

// New props also cause components to re-render. So even though the setter in App.js doesn’t cause its children to re-render, the fact that its prop changed does.

function Nav(props) {
  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
  } = props;

  // To update document.title, reassign document.title to equal current category
  // Use "useEffect" hook, which is an API reflecting lifecycle methods (components mount, unmount, or update)
  // The second argument directs the hook to re-render the component on changes to the value of this state.
  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
  }, [currentCategory]);

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
        <span role="img" aria-label="logo"> {" "} 👨‍💻 </span> {" "} Stephen Carlin Web Development
        </a>
      </h2>
  <nav>
    <ul className="flex-row">
      {/* hard-coded headers - replace using mapping */}
    {/* <li className="mx-2">
      <a data-testid="about" href="#about">
        About me
      </a>
    </li>
    <li className="mx-2">
      <span>Contact</span>
    </li> */}
      {categories.map((category) => (
        <li className={`mx-1 ${
          currentCategory.name === category.name && 'navActive'
        }`} key={category.name}>
          {/* onClick() attribute is expecting a callback function declaration.
           It's important that we wrap it in a function declaration rather than just calling categorySelected(category.name), 
           which would cause the function to get called whenever the component renders as well */}
              <span onClick={() => {
                setCurrentCategory(category)
              }}
            >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
      </ul>
    </nav>
  </header>
);
}

export default Nav;