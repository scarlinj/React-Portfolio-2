import React, { useState } from 'react';
import coverImage from "../../assets/cover/cover-image.jpg";
import { validateEmail } from '../../utils/helpers';
// import logo from './logo.svg';
// import './App.css';

function ContactForm() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  // const { name, email, message } = formState;
  // Use the setFormState function to update the formState value for the name property. Assign the value taken from the input field in the UI with e.target.value and assign 
  // this value to the property formState.name. Use the spread operator, "...formState," so we can retain the other key-value pairs in this object. Without the spread operator, 
  // the formState object would be overwritten to only contain the name: value key pair.
  const handleChange = (e) => {
    // setFormState({...formState, name: e.target.value })
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };
  
  const handleFormSubmit = (e) => {
    e.preventDefault();
  
    if(!validateEmail(email) || !name) {
      setErrorMessage("email or name is invalid");
      return;
    }
    setName("");
    setMessage("");
    setEmail("");
    setErrorMessage("");
  }
  
  // console.log(formState);

    return (
      <section className="my-5">
              <h1>Contact me</h1>
      <form id="contact-form">
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" defaultValue={name} onChange={handleChange} name="name" />
        </div>
        <div>
          <label htmlFor="email">Email address:</label>
          <input type="email" defaultValue={email} name="email" />
        </div>
        <div>
          {/* "for is reserved for Javascript, so we must use "htmlFor" below */}
          <label htmlFor="message">Message:</label>
          <textarea name="message" defaultValue={message} rows="5"  />
        </div> 
        <button type="button" onClick={handleFormSubmit}>Submit</button> 
      </form>

        <div className='my-2'>
        {/* <p>
          E-mail me at: scarlinj@gmail.com
        </p> */}
        <p>
          You can also contact me through my Github Profile: https://github.com/scarlinj
        </p>
        </div>

         {/* <img src={coverImage} className="my-2" style={{ width: "50%" }} alt="cover image" /> */}

      </section>
    );
  }

export default ContactForm;